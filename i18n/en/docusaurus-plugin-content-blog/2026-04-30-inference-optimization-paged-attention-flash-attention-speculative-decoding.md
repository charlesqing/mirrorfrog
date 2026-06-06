---
slug: inference-optimization-paged-attention-flash-attention-speculative-decoding
title: 'Inference Optimization Technology Evolution: PagedAttention / FlashAttention / Speculative Decoding Deep Dive'
authors: [aicomputecards]
tags: [tech-deep-dive, benchmarks]
description: "Three core LLM inference optimization technologies: PagedAttention (vLLM) + FlashAttention + Speculative Decoding. Principles, implementation, performance gains, and impact on hardware selection."
---

**LLM inference performance = Algorithm + Software + Hardware**. Hardware (H100, B300, Rubin) only determines the **theoretical ceiling**. Actual inference performance can be **improved 5-30× through algorithmic optimization**. This article provides a deep analysis of the three major inference optimization technologies: **PagedAttention, FlashAttention, and Speculative Decoding**.

{/* truncate */}

## Inference Optimization vs Training Optimization

| Dimension | Training | Inference |
|-----------|----------|-----------|
| **Compute Utilization** | Full (high batch) | Low (batch 1-32) |
| **Bottleneck** | GPU compute | **Memory + Memory bandwidth** |
| **Optimization Direction** | Data parallelism / Model parallelism / ZeRO | **KV Cache + Attention + Batching** |
| **Performance Metric** | tokens/sec (training) | **TTFT, TPOT, throughput** |
| **Typical Optimization** | FlashAttention, gradient checkpointing | **PagedAttention, Speculative, Quantization** |

> **Inference optimization is more complex than training optimization** — because it is latency-sensitive + memory-constrained + diverse workloads.

## Three Core Technologies

### 1. PagedAttention (vLLM Core)

**PagedAttention** is a **KV Cache memory management revolution** proposed by the **UC Berkeley team** (Zhuohan Li, @woody-yc, et al.) in the **vLLM paper (SOSP 2023)**.

#### Problem: Severe Waste in Traditional KV Cache

- **Traditional approach**: **Pre-allocate** maximum-length KV Cache space for each request
- **Example**: 70B model + 4K context = **~2 GB KV Cache / request**
- **100 concurrent requests = 200 GB** — out of memory

| Approach | KV Cache Management | Memory Waste |
|----------|---------------------|--------------|
| Traditional (HuggingFace) | Contiguous pre-allocation | **60-80% waste** |
| **PagedAttention** | **Paged, on-demand allocation** | **&lt;4% waste** |

#### Principle: OS Paging Ideas

```
Traditional:
[Request 1: 2GB contiguous] [Request 2: 2GB contiguous] [Request 3: 2GB contiguous]  -- Heavy internal fragmentation

PagedAttention:
[Request 1: page 0,1,2,3] [Request 2: page 4,5,6,7] [Request 3: page 8,9,10,11]  -- Page table managed
```

- **Each page = KV Cache for 16 tokens**
- **Allocate pages on demand**, no pre-allocation needed
- **Page table** tracks mappings
- **Fragmentation &lt;4%** (vs 60-80%)

#### Performance Gains

| Metric | Traditional (HF) | **PagedAttention (vLLM)** | Improvement |
|--------|------------------|----------------------------|-------------|
| Throughput (70B inference) | 100 tok/s | **800-1500 tok/s** | **8-15×** |
| Max Concurrency | ~30 | **200+** | 6× |
| Memory Utilization | 30% | **96%** | 3.2× |
| Long Context Support | 4K | **32K-128K** | 8-32× |

> **PagedAttention made vLLM the de facto standard for LLM inference** — 70B model throughput improved 8-15×.

#### Applicable Scenarios

- ✅ **High-concurrency online inference** (ChatGPT, Claude, ERNIE Bot)
- ✅ **Long context** (32K+ tokens)
- ✅ **Multi-model serving** (shared GPU pool)
- ❌ Single-user offline inference (limited improvement)

### 2. FlashAttention (GPU Optimization)

**FlashAttention** is a **GPU memory hierarchy optimization** proposed by **Tri Dao et al.** in 2022:

#### Problem: Attention Matrix O(N²) Memory

- **Standard attention**: Must store N×N attention matrix
- **8K context**: 8K×8K = 64M floats = 256 MB
- **32K context**: 32K×32K = 1G floats = **4 GB** — out of memory
- **128K context**: 128K×128K = 16G floats = **64 GB** — impossible

#### Principle: Tiling + Recomputing

```
Standard Attention:
Q @ K^T → Store N×N matrix → softmax → @ V   -- Needs 256MB+ HBM

FlashAttention:
Block-wise computation, each block processed in SRAM, **does not store N×N matrix**
Q block × K block^T → Local softmax → × V block   -- Internal SRAM
```

- **Core idea**: **Leverage GPU SRAM** (fast cache above HBM)
- **HBM read/write count**: Reduced from O(N²) to O(N)
- **Recomputation**: Recompute attention during backward pass, don't store intermediate results

#### Performance Gains

| Metric | Standard Attention | **FlashAttention v2** | Improvement |
|--------|--------------------|------------------------|-------------|
| Training Speed | 100% | **200-300%** | 2-3× |
| Memory | O(N²) | **O(N)** | 1/N ratio |
| H100 Speed | 600 TFLOPS | **1100+ TFLOPS** | 1.8× |
| 128K Context | ❌ OOM | ✅ Feasible | — |
| 1M Context | ❌ Impossible | ✅ FlashAttention-3 | — |

#### FlashAttention Evolution

| Version | Year | Key Improvements |
|---------|------|------------------|
| **FlashAttention v1** | 2022 | Tiling + Recomputing |
| **FlashAttention v2** | 2023 | **Parallelization** + Reduced non-matmul work |
| **FlashAttention v3** | 2024 | **FP8 support** + H100 optimization |
| **FlashAttention v4** (est. 2026) | 2026 | Rubin R200 / MI400 optimization |

> **FlashAttention v3 + H100/H200 achieves 1100+ TFLOPS** (FP16) — **exceeding official rated compute**.

#### Applicable Scenarios

- ✅ **All attention computation** (training + inference)
- ✅ **Long context** (128K+ tokens)
- ✅ **Essential for GPU inference** (standard on H100/B200)
- ❌ Edge devices (no attention optimization needed)

### 3. Speculative Decoding

**Speculative Decoding** (speculative decoding / lookahead decoding) is an **inference acceleration technique** proposed by **Leviathan et al. 2023**:

#### Problem: Slow Autoregressive Generation

- **LLM generates 1 token at a time**
- **Each token requires a full forward pass**
- **H100 FP16: ~50ms/token** — long generation is slow

#### Principle: Small Model + Large Model Collaboration

```
Traditional:
Large model → token 1 → token 2 → token 3 → ...    -- Each token uses the large model

Speculative Decoding:
1. Small model (Draft Model) generates 5 candidate tokens in one pass: [t1, t2, t3, t4, t5]
2. Large model (Target Model) verifies 5 tokens in one forward pass
3. Accept first k matching tokens (k+1 regenerated by large model)
4. Repeat
```

- **Small model**: ~100× faster (70B → 1B)
- **Large model**: One forward pass verifies multiple tokens
- **Theoretical speedup**: 2-4× (depending on small model accuracy)

#### Performance Gains

| Metric | Traditional | **Speculative Decoding** | Improvement |
|--------|-------------|---------------------------|-------------|
| 70B Inference Speed | 30 tok/s | **60-100 tok/s** | 2-3× |
| TTFT (First Token) | 200ms | 200ms (same) | — |
| TPOT (Per Token) | 33ms | **10-17ms** | 2-3× |
| Applicable Models | Any | **Small model + Large model** | — |

#### Mainstream Speculative Decoding Approaches

| Approach | Small Model | Speedup | Applicability |
|----------|-------------|---------|---------------|
| **Self-Speculative** | Same model, different layers | 1.5-2× | General |
| **Draft Model** | Independent small model (e.g., 7B+70B) | 2-3× | General |
| **Medusa** | Multiple decoding heads | 2-3× | Single model |
| **EAGLE** | Feature prediction | 2-3× | Single model |
| **Lookahead Decoding** | Jacobi iteration | 1.5-2× | Small models |
| **REST** | Retrieval-augmented | 2-4× | Long generation |

> **vLLM 0.6+ supports Speculative Decoding by default** — simple configuration, 2-3× performance improvement.

#### Applicable Scenarios

- ✅ **Large model offline batch processing** (most significant effect)
- ✅ **Long output generation** (code, articles, reports)
- ✅ **Multi-turn dialogue** (ReAct, Agent)
- ❌ Very short output (1-5 tokens, limited speedup)

## Other Important Optimization Techniques

### 4. Continuous Batching

**Supported by vLLM / TGI / TensorRT-LLM**:

- **Traditional**: Wait for batch to fill, new requests queue
- **Continuous**: Dynamically insert new requests into running batch
- **Improvement**: Throughput 2-4×

### 5. Quantization

| Precision | Model Size | Performance | Quality Loss |
|-----------|------------|-------------|--------------|
| **FP16** | 70B = 140 GB | 1× | 0% |
| **INT8** | 70B = 70 GB | 1.5-2× | &lt;1% |
| **INT4 (GPTQ/AWQ)** | 70B = 35 GB | 2-3× | 1-3% |
| **FP8** | 70B = 70 GB | 1.5-2× | &lt;1% |
| **FP4 (NVFP4)** | 70B = 35 GB | 2-3× | 2-5% |
| **INT2** | 70B = 17.5 GB | 3-5× | 5-15% |

> **NVFP4 (NVIDIA) + Quantization-Aware Training = Near FP16 quality + 2-3× performance**.

### 6. Prefix Caching

- **Scenario**: Multiple requests share the same system prompt
- **Method**: Cache KV Cache prefixes
- **Acceleration**: 0 computation for shared prefix portions, **~10-100× speedup**

### 7. Chunked Prefill

- **Problem**: Long prompt prefill blocks other requests
- **Method**: Split prefill into chunks, interleave with decoding
- **Improvement**: TTFT -50%, total throughput +20%

## Inference Optimization Software Stack

### vLLM (Most Popular)

| Feature | Support |
|---------|---------|
| **PagedAttention** | ✅ Core |
| **Continuous Batching** | ✅ |
| **Speculative Decoding** | ✅ 0.6+ |
| **Quantization** | ✅ INT4/INT8/FP8 |
| **Prefix Caching** | ✅ 0.4+ |
| **Multi-LoRA** | ✅ |
| **Multi-GPU** | ✅ TP/PP |
| **Supported Models** | Llama / Qwen / Mistral / Gemma / DeepSeek full series |

### TensorRT-LLM (NVIDIA)

| Feature | Support |
|---------|---------|
| **In-flight Batching** | ✅ |
| **PagedAttention** | ✅ |
| **Speculative Decoding** | ✅ |
| **Quantization** | ✅ INT4/INT8/FP8/FP4 |
| **Multi-GPU** | ✅ TP/PP/EP |
| **Performance** | **Best on NVIDIA GPUs** (native optimization) |

### SGLang (UC Berkeley New)

- **RadixAttention**: Similar to Prefix Caching, more efficient
- **Structured Generation**: JSON / regex guided generation
- **Rapid growth in 2025**

### llama.cpp (Local)

- **GGUF format**
- **CPU / GPU / Apple Silicon** full support
- **Top choice for local LLMs**

## Real-World Performance Comparison (70B Inference)

| Software | Hardware | Quantization | Throughput | Latency TPOT |
|----------|----------|--------------|------------|---------------|
| **vLLM + PagedAttn** | H100 | FP16 | 1500 tok/s | 8ms |
| **vLLM + Spec Decoding** | H100 | FP16 | **3000 tok/s** | 3ms |
| **TensorRT-LLM** | H100 | FP8 | 2500 tok/s | 4ms |
| **TensorRT-LLM + NVFP4** | **B200** | **FP4** | **5000 tok/s** | 2ms |
| **vLLM** | 8× A100 | INT4 | 800 tok/s | 12ms |
| **llama.cpp** | M3 Ultra | Q4_K_M | 12 tok/s | 80ms |

> **B200 + NVFP4 + TensorRT-LLM** = **5000 tok/s** = 20× improvement over FP16 H100.

## Impact of Inference Optimization on Hardware Selection

### Optimization → Reduced Hardware Requirements

| Optimization Technique | Compute Required | Memory Required |
|------------------------|------------------|-----------------|
| **FP16 Baseline** | 1× | 1× |
| **+ PagedAttention** | 1× | **0.4-0.6×** |
| **+ Speculative** | **0.5×** | 1× |
| **+ INT4 Quantization** | 1× | **0.25×** |
| **+ Prefix Cache** | 1× | 1× |
| **+ Chunked Prefill** | 1× | 1× |
| **+ Continuous Batch** | 0.5× | 1× |
| **+ Full TensorRT-LLM** | **0.3×** | **0.4×** |

> **With full optimization, hardware requirements reduced by 3-5×** — 70B inference from 8× H100 to 1-2× H100.

### Selection Recommendations

| Scenario | Recommended Hardware | Key Software |
|----------|---------------------|--------------|
| **Cloud high-concurrency** | 8× H100 + vLLM | PagedAttn + Spec |
| **Single-card large model** | 1× B300 Ultra + TensorRT-LLM | NVFP4 + Spec |
| **Local LLM** | M3 Ultra 192GB + llama.cpp | GGUF Q4/Q5 |
| **Agent multi-turn** | 8× H100 + SGLang | RadixAttn + Spec |
| **Code generation** | 1× B200 + vLLM | NVFP4 + Spec |

## Future Outlook

### Short-term (2026-2027)

- **FlashAttention v4** adapted for Rubin R200
- **Speculative Decoding** standardized (OpenAI API support)
- **Multi-modal Speculative** (vision + language joint)
- **End-to-end compilation**: torch.compile + TensorRT

### Mid-term (2027-2030)

- **End-to-end GPU kernel generation**: ML-based kernel synthesis
- **PIM-HBM inference**: Attention inside HBM
- **100× inference acceleration** (vs 2023 baseline)

### Long-term (2030+)

- **Neuro-symbolic reasoning**: LLM + symbolic systems
- **Quantum + LLM collaboration**
- **Truly "zero-latency" AI assistants**

## Detailed Product Pages

- [NVIDIA H100 (Mainstream PagedAttn Hardware)](/docs/cards/nvidia/h100)
- [NVIDIA B200 / B300 (Best for NVFP4 + TensorRT-LLM)](/docs/cards/nvidia/b200)
- [NVIDIA Groq 3 LPX (New Ultra-Low Latency Inference Paradigm)](/docs/cards/nvidia/groq-3-lpx)
- [Apple M3 Ultra 192GB (King of Local LLM)](/docs/cards/others/apple-m3-ultra)
- [Full Comparison Table](/docs/comparison)

## Summary

Three core LLM inference optimization technologies:

1. **PagedAttention (vLLM)**: KV Cache memory management → **8-15× throughput**
2. **FlashAttention (Tri Dao)**: GPU memory hierarchy optimization → **2-3× training / inference**
3. **Speculative Decoding**: Small model + Large model collaboration → **2-3× inference speed**

**With full optimization, hardware requirements reduced by 3-5×** — the ROI of software optimization far exceeds hardware upgrades.

**Over the next 5 years, inference optimization will reduce AI inference costs by 10-100×**.
