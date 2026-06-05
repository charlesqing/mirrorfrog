---
id: groq-3-lpx
title: NVIDIA Groq 3 LPX (LPU Rack-Scale)
sidebar_label: NVIDIA Groq 3 LPX
description: "Post-acquisition NVIDIA Groq 3 LPX rack: 256 LPUs, 40 PB/s on-chip SRAM aggregate, 640 TB/s interconnect, 35× perf/W, purpose-built for trillion-parameter inference, 2026 H2."
keywords: [Groq 3 LPX, NVIDIA Groq acquisition, LPU, 40 PB/s, 640 TB/s, agentic AI, 35x perf/W, trillion parameter]
---

# NVIDIA Groq 3 LPX (LPU Rack-Scale)

## Overview

**NVIDIA Groq 3 LPX** is a **rack-scale LPU (Language Processing Unit)** system launching **2026 H2**, the **flagship LPU product following NVIDIA's acquisition of Groq**. Each rack contains **256 Groq 3 LPUs**, delivering **40 PB/s on-chip SRAM aggregate bandwidth**, **640 TB/s interconnect bandwidth**, and a **35× perf/W** advantage (vs. H100 inference).

The Groq 3 LPX serves as an **inference acceleration co-processor** for the **NVIDIA Vera Rubin platform** — when users require **ultra-low-latency trillion-parameter model inference** (such as agentic AI, real-time code generation), they can deploy an LPX rack as a co-processor alongside Rubin GPUs.

## Core Specifications

| Item | Spec |
|------|------|
| **Architecture** | Groq 3 LPU (Tensor Streaming Processor v3) |
| **Form Factor** | **Rack-scale (256 per rack)** |
| **On-Chip SRAM (per LPU)** | 512 MB |
| **On-Chip SRAM (Rack)** | **128 GB aggregate** |
| **On-Chip SRAM Bandwidth (Rack)** | **40 PB/s** |
| **Interconnect (Intra-Rack)** | GroqSync + NVLink-Network (**640 TB/s**) |
| **INT8 Compute (per LPU)** | 2,500 TOPS (estimated) |
| **FP8 Compute (Rack)** | ~640 PFLOPS (estimated) |
| **BF16 Compute (Rack)** | ~320 PFLOPS (estimated) |
| **TDP (Rack)** | ~80 kW |
| **perf/W (Inference)** | **35× H100** (official) |
| **Launch** | **2026 H2** (alongside Rubin R200) |

> **40 PB/s on-chip SRAM bandwidth ≈ 5,000× H100 HBM bandwidth** (H100 80GB HBM3 = 3.35 TB/s). This is the core secret behind the Groq LPU's **ultra-low latency**.

## NVIDIA Groq Acquisition

| Event | Date | Detail |
|------|------|------|
| **Initial partnership** | 2025-12 | NVIDIA invests $250M in Groq |
| **Full acquisition** | **2026-Q1** | NVIDIA acquires Groq outright (**~$20 billion**) |
| **Product integration** | 2026 H2 | Groq 3 LPU rebranded as **NVIDIA Groq 3 LPX** |
| **Integration into Vera Rubin platform** | 2026 H2 | LPX rack as Rubin GPU co-processor |

> **Acquisition significance**: On top of NVIDIA's GPU compute leadership, **the LPU fills the "ultra-low-latency inference" gap**. Rubin GPU + LPX co-processing = **full-spectrum AI compute coverage** (training + inference + extreme low-latency inference).

## Groq 3 LPU Single Chip vs Rack

| Item | Single LPU | **Groq 3 LPX Rack** |
|------|--------|---------------------|
| Chip count | 1 | **256** |
| On-Chip SRAM | 512 MB | **128 GB** |
| SRAM Bandwidth | 160 TB/s | **40 PB/s** |
| Interconnect | GroqSync 1 TB/s | **640 TB/s** |
| INT8 Compute | 2,500 TOPS | ~640,000 TOPS |
| TDP | ~300 W | ~80 kW |
| Use | Single model inference | **Multi-model / agentic** |

> **128 GB SRAM aggregate ≈ 32× H100 80GB memory aggregate**, but with **100× lower latency** (nanosecond vs microsecond HBM).

## Groq 3 LPX vs NVIDIA H100 / Rubin R200 (Inference Comparison)

| Metric | H100 (SXM) | Rubin R200 | **Groq 3 LPX** |
|------|------------|------------|-----------------|
| Memory / SRAM Aggregate | 80 GB HBM | 288 GB HBM4 | **128 GB SRAM** |
| Bandwidth | 3.35 TB/s | 22 TB/s | **40 PB/s** |
| Latency | Microseconds | Microseconds | **Nanosecond** (1000× better) |
| FP8 Compute (Rack / Card) | ~3,958 TFLOPS | 50 PFLOPS | ~640 PFLOPS |
| **TTFT (Time to First Token)** | ~200ms | ~100ms | **< 20ms** |
| **TPOT (Time per Output Token)** | ~30ms | ~15ms | **< 5ms** |
| perf/W | 1× (baseline) | ~3× | **35×** |
| Use | Training + inference | Training + inference | **Ultra-low-latency inference** |

> **LPX's core advantage is latency** (not absolute compute). For agentic AI (1000+ calls/sec), **TTFT < 20ms is critical**.

## Use Cases

| Scenario | Recommended Configuration |
|------|----------|
| **Agentic AI inference** | LPX rack (**1000+ calls/sec**) |
| **Real-time Code Generation** (Cursor / Copilot) | LPX rack |
| **Trillion-parameter model inference** | LPX + Rubin GPU co-processing |
| **Multi-model concurrency** (RAG, function calling) | LPX rack |
| **Low-latency search** (Perplexity, You.com) | LPX rack |

## Software Ecosystem

- **GroqWare** (rebranded post-acquisition as **NVIDIA Groq SDK**)
- **NVIDIA NIM + LPX backend**
- **vLLM 0.8+ Groq backend** (estimated)
- **OpenAI API compatibility layer** (compatible with existing LLM applications)
- **LangChain / LlamaIndex** integration

## Pricing (Estimated)

| Item | Price |
|------|------|
| **LPX Rack (256 units)** | **$8M-10M / rack** (estimated) |
| **Monthly operating cost** | ~$300K-500K (including power, cooling) |
| **Per-dollar inference cost** | **50-70% lower than H100** (based on 35× perf/W) |

> **LPX is not a GPU replacement, but a GPU complement**: In latency-sensitive scenarios like agentic AI, LPX is the only choice; for cost-sensitive large-scale inference, the Rubin R200 is more economical.

## Vendor Information

| Item | Detail |
|------|------|
| **Original Vendor** | Groq Inc. (acquired by NVIDIA 2026-Q1) |
| **Current Vendor** | **NVIDIA Corporation** (subsidiary) |
| **First Release** | 2026 H2 (Vera Rubin platform generation) |
| **Product Page** | https://www.nvidia.com/en-us/data-center/lpx/ |
| **API Service** | NVIDIA GroqCloud (merged from GroqCloud) |
| **Acquisition Amount** | ~$20 billion |

## Related Products

- [Groq LPU (v1)](/docs/cards/others/groq-lpu) - Original Groq 1st-gen LPU
- [NVIDIA Rubin R200](/docs/cards/nvidia/rubin-r200) - Vera Rubin GPU (co-product)
- [Google TPU 8i](/docs/cards/google/tpu-8i) - Inference ASIC competitor
- [Cerebras WSE-3](/docs/cards/cerebras/wse-3) - Large model inference competitor
- [Full Comparison Table](/docs/comparison)
