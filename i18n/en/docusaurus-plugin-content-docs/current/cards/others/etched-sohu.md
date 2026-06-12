---
id: etched-sohu
title: Etched Sohu (Transformer-dedicated ASIC)
sidebar_label: Etched Sohu
description: Etched Sohu detailed specs - Transformer-dedicated ASIC, 144GB HBM3E, 6TB/s bandwidth, 62,500 tokens/sec (Llama 70B), released June 2024, non-programmable.
keywords: [Etched, Sohu, Transformer ASIC, dedicated chip, HBM3E, non-programmable, inference acceleration]
---

# Etched Sohu (Transformer-dedicated ASIC)#

## Product Overview#

**Etched Sohu** is the **world's first Transformer-architecture-dedicated ASIC chip**, released by US chip startup **Etched AI** (founded 2022) in **June 2024**. Sohu **fully hard-codes Transformer attention mechanisms into silicon**, with no programmable layers, specifically designed for **inference** (does not support training/fine-tuning). Each chip is equipped with **144GB HBM3E** memory, and can achieve **62,500 tokens/sec** on Llama 70B at batch size=1, which is **89×** that of NVIDIA H100 (at batch size=1).

> **⚠️ Important Limitation**: Sohu **only supports Transformer attention architecture**, and does not support:
> - Multi-modal models (LLaVA, Qwen-VL, etc. with vision encoders)#
> - Diffusion models (Stable Diffusion, video generation models)#
> - Dynamic expert routing MoE models (DeepSeek V4, Mixtral, Qwen3-235B-A22B)#
> - SSM/Mamba architecture models#
> - Any model with non-dense Transformer attention architecture#

## Core Specifications#

| Item | Parameter |
|------|-----------|
| **Architecture** | **Transformer-dedicated ASIC** (non-programmable) |
| **Process** | TSMC 4nm (estimated) |
| **HBM Type** | HBM3E |
| **HBM Capacity** | **144 GB** |
| **HBM Bandwidth** | **~6.03 TB/s** (1.8× that of H100 SXM5) |
| **Compute (Llama 70B)** | **62,500 tokens/sec** (batch size=1) |
| **8-chip server performance** | **500,000 tokens/sec** (Llama 70B) |
| **TDP** | Not publicly disclosed |
| **Form Factor** | PCIe (estimated) |
| **Release Date** | **June 2024** |
| **Market Status** | **Not publicly sold** (as of April 2026) |
| **Availability** | Only demonstrated controlled benchmarks to investors |

## Technical Architecture#

### Fixed-Function Transformer Unit#

Sohu has **no general-purpose compute units** — all compute resources are dedicated to Transformer attention computation:

| Hardware-Implemented Function | Description |
|---------------------------|-------------|
| **Attention computation** | Direct hardware implementation, no kernel launch overhead |
| **QKV projection** | Fixed-function unit |
| **KV cache processing** | Dedicated hardware circuitry |
| **Feed-forward network (FFN)** | Hard-coded into silicon |
| **No scheduler overhead** | No OS, no driver, no kernel scheduling |

### Architecture Comparison with GPU#

| Dimension | NVIDIA H100 | **Etched Sohu** |
|-----------|-------------|-------------------|
| Programmability | ✅ Fully programmable (CUDA) | ❌ **Completely non-programmable** |
| Supported model architectures | **All architectures** | **Only Transformer attention** |
| Batch size=1 performance | ~700 tokens/sec | **62,500 tokens/sec (89×)** |
| Batch size=32 performance | ~9,000 tokens/sec | Not publicly disclosed (advantage shrinks) |
| Ecosystem | CUDA, vLLM, TensorRT-LLM | **Proprietary compiler (extremely high migration cost)** |
| Suitable scenarios | **All scenarios** | **Only dense Transformer inference** |

## Performance Details#

### Impact of Batch Size on Performance#

| Batch Size | H100 Performance | Sohu Performance | Sohu Advantage |
|------------|-----------------|--------------------|-------------------|
| **1** | ~700 tokens/sec | **62,500 tokens/sec** | **89×** |
| **8** | ~4,000 tokens/sec | Not publicly disclosed | Advantage shrinks |
| **32** | ~9,000 tokens/sec | Not publicly disclosed | Advantage further shrinks |
| **>32** | GPU amortizes overhead via batching | Not publicly disclosed | **Possibly no advantage** |

> **Key Insight**: Sohu's advantage is most significant in **batch size=1 (real-time interaction)** scenarios. In high-concurrency scenarios (batch size > 32), GPUs amortize overhead via batching, and Sohu's advantage may disappear.

### 8-Chip Server Performance#

- **Llama 70B**: 500,000 tokens/sec (8-chip Sohu server)#
- **Comparison**: 8× H100 SXM5 server ~64,000 tokens/sec (batch size=32)#
- **Advantage**: **7.8×** (at high batch size)#

## Suitable Scenarios & Limitations#

### ✅ Suitable Scenarios#

- **Dense Transformer inference**: Llama, Qwen, Mistral, and other standard Transformer models#
- **Real-time interactive AI**: Batch size=1 latency extremely low (&lt;10ms)#
- **High-concurrency inference service**: 8-chip server can reach 500,000 tokens/sec#

### ❌ Unsuitable Scenarios#

| Model Type | Example | Sohu Support Status |
|------------|---------|----------------------|
| Multi-modal models | LLava, Qwen-VL | ❌ Not supported |
| Diffusion models | Stable Diffusion, Sora | ❌ Not supported |
| MoE models | DeepSeek V4, Mixtral | ❌ Not supported (dynamic expert routing) |
| SSM/Mamba | Mamba, RWKV | ❌ Not supported |
| Training/fine-tuning | Any training task | ❌ Not supported (inference only) |

## Comparison with Competitors#

| Metric | Etched Sohu | NVIDIA H200 | NVIDIA B200 | Groq LPU |
|--------|----------------|---------------|---------------|----------|
| Batch size=1 performance | **62,500 tokens/sec** | ~800 | ~1,500 | **80,000+** |
| Batch size=32 performance | Not disclosed | ~10,000 | ~18,000 | ~40,000 |
| Programmability | ❌ Non-programmable | ✅ CUDA | ✅ CUDA | ❌ Limited programming |
| Model architecture support | **Only Transformer** | All architectures | All architectures | Transformer + partial |
| Ecosystem | Proprietary compiler | CUDA full ecosystem | CUDA full ecosystem | Limited ecosystem |
| Market status | **Not yet available** | ✅ Available | ✅ Available | ✅ Available |

## Company Background & Funding#

| Item | Details |
|------|---------|
| **Company Name** | Etched AI |
| **Founding Date** | 2022 |
| **Headquarters** | California, USA |
| **Total Funding** | **Nearly $1 billion** |
| **Latest Funding** | $500 million (valuation $5 billion) |
| **Investors** | Not publicly disclosed (prominent VCs) |
| **2nd-Gen Product** | More advanced process, targeting inference + prefill-heavy training |

## 2nd-Generation Product Roadmap#

- **More advanced process**: Targeting TSMC 3nm or higher#
- **Expanded functionality**: Targeting simultaneous support for inference and **prefill-heavy training workloads**#
- **Smaller, lower-power version**: Targeting edge inference scenarios#
- **Release date**: **2027-2028** (estimated)#

## Launch Date & Availability#

- **Official Announcement**: June 2024#
- **Current Status**: **Not publicly available for sale** (as of April 2026)#
- **Availability**:
  - Only demonstrated controlled benchmarks to investors#
  - No public cloud rental channels#
  - No public pricing information#
- **Expected availability**: **H2 2026 or 2027** (estimated)#

## External Links#

- [Etched Official Website](https://etched.com/)#
- [Spheron: Etched Sohu vs NVIDIA](https://www.spheron.network/blog/etched-ai-sohu-vs-nvidia-transformer-asic-inference/)#
- [36Kr: Etched raises $120M Series A](https://m.36kr.com/p/2837821626780551)#
- [Baidu Baike: Sohu](https://baike.baidu.com/item/Sohu/64605185)#
- [AI Wiki: Etched Sohu](https://aiwiki.ai/wiki/etched_sohu)#
