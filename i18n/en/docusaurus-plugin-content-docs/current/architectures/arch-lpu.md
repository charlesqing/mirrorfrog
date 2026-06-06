---
id: arch-lpu
title: LPU (Language Processing Unit)
sidebar_label: LPU
description: "LPU architecture details: Groq in-house design, deterministic low latency, compiler-defined hardware, purpose-built for large language model inference."
keywords: [LPU, Language Processing Unit, Groq LPU, TSP, Tensor Streaming Processor, deterministic low latency]
---

# LPU (Language Processing Unit) Architecture

## What is an LPU

**LPU (Language Processing Unit)** is **Groq**'s in-house **language processing unit**, founded in 2016 by former Google TPU team members. **Purpose-built for extreme low-latency LLM inference**, featuring **228MB on-chip SRAM per chip** (vs GPU 80GB HBM), achieving **deterministic latency** through **on-chip SRAM + compiler scheduling**.

**Core innovation**: **Compiler-Defined Hardware** — no caches, no out-of-order execution, **all latencies are predictable**.

## Core Architecture: TSP

### Tensor Streaming Processor (TSP)
- **Functional units**: Matrix Multiply, ReLU, Add, Multiply, Transpose, Shuffle
- Compiler schedules all operations **in advance**
- Data **streams** through TSP units, **no intermediate storage**

### Compiler
- **GroqWare SDK** (Python / C++)
- **Fully offline compilation**
- Dataflow graph maps directly to hardware

### On-Chip SRAM
- **228 MB SRAM** (GroqChip v1)
- **80 TB/s bandwidth** (vs HBM 3 TB/s)
- **Deterministic access latency** (no cache misses)

## LPU vs GPU vs TPU

| Dimension | LPU (Groq) | GPU (H100) | TPU (v4) |
|-----------|------------|------------|----------|
| Architecture | Compiler-defined streaming | SIMT general parallel | Systolic array |
| Memory | 228MB SRAM | 80GB HBM | 32GB HBM |
| Bandwidth | 80 TB/s | 3.35 TB/s | 1.2 TB/s |
| Latency | **Deterministic, sub-millisecond** | Affected by memory/scheduling | Medium |
| Model scale supported | Small (multi-chip aggregate) | Large (80GB VRAM) | Large (Pod aggregate) |
| Compilation | **Fully offline** | Just-in-time (JIT) | XLA offline |
| Ecosystem | Small (GroqWare) | **CUDA mature** | JAX/TF |

## Use Cases

- ✅ **Ultra-low latency LLM inference** (GroqCloud API supports Llama 3 70B, Mixtral 8x7B)
- ✅ Real-time conversational AI (first token latency &lt; 100ms)
- ✅ Batch LLM inference (high throughput)
- ✅ Multimodal real-time inference
- ❌ Large model training (not applicable)
- ❌ General GPU computing

## Groq Commercialization

- **GroqCloud** (API service, from 2024)
- **GroqRack** (8 GroqChip servers, $1.8M/rack)
- Customers: Meta (Llama inference), Anthropic, Instagram, Substack

## 2026-Q1 NVIDIA Acquires Groq (Major Event)

| Date | Event | Details |
|------|-------|---------|
| **2025-12** | Investment | NVIDIA invests $250M in Groq |
| **2026-Q1** | **Full acquisition** | **NVIDIA acquires Groq for ~$20B** |
| **2026 H2** | Product integration | **Groq 3 LPU rebranded as NVIDIA Groq 3 LPX**, integrated into Vera Rubin platform |
| **2026 H2+** | Synergistic ecosystem | LPX rack as ultra-low latency inference co-processor for Rubin GPU |

> 💡 **Strategic significance of the acquisition**:
> - NVIDIA, already leading in GPU compute, **completes its "ultra-low latency inference" capability via LPU**
> - Rubin GPU + LPX co-processing = **full-scenario AI compute coverage** (training + inference + extreme low-latency inference)
> - Customers: OpenAI, Anthropic, Meta, Mistral, etc.
> - **GroqCloud continues operating** (OpenAI-compatible API)

## Groq 3 LPX Rack (2026 H2)

| Item | Specification |
|------|---------------|
| **Chip count** | **256 Groq 3 LPUs / rack** |
| **On-chip SRAM (rack)** | **128 GB aggregate** |
| **SRAM bandwidth (rack)** | **40 PB/s** |
| **Interconnect** | GroqSync + NVLink-Network, **640 TB/s** |
| **INT8 compute (rack)** | ~640,000 TOPS |
| **TDP (rack)** | ~80 kW |
| **perf/W** | **35× H100** (official) |
| **TTFT (Time to First Token)** | **&lt; 20ms** |
| **TPOT (Time per Output Token)** | **&lt; 5ms** |

> **Groq 3 LPX = currently the only rack-scale LPU system designed for Agentic AI**. 40 PB/s SRAM bandwidth ≈ 5,000× H100 HBM bandwidth (80GB HBM3 = 3.35 TB/s).

## Detailed Product Pages

### Groq (Independent)
- [Groq LPU (GroqChip v1)](/docs/cards/others/groq-lpu) - 2018 first generation, 228MB SRAM 80 TB/s 188 TOPS INT8

### Groq (Under NVIDIA)
- [Groq LPU v2](/docs/cards/others/groq-lpu-v2) - 2024-Q3, 4nm 80GB SRAM 200W GroqCloud service, last generation before acquisition
- [NVIDIA Groq 3 LPX](/docs/cards/nvidia/groq-3-lpx) - 2026 H2 256 LPU rack, 128GB aggregate SRAM 40 PB/s, post-acquisition integration into Vera Rubin platform

## Related Architectures

- [TPU](/docs/architectures/arch-tpu) - Google data center
- [ASIC](/docs/architectures/arch-asic) - Inference optimized
- [GPU](/docs/architectures/arch-gpu) - General AI
- [Complete Comparison Table](/docs/comparison)
