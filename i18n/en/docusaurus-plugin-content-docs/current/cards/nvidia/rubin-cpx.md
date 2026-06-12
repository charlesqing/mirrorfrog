---
id: rubin-cpx
title: NVIDIA Rubin CPX (Context Processing Unit)
sidebar_label: NVIDIA Rubin CPX
description: NVIDIA Rubin CPX detailed specs - 128GB GDDR7, 30 PFLOPS FP4, 2 TB/s bandwidth, long-context inference dedicated, Vera Rubin NVL144 CPX platform, shipping H2 2026.
keywords: [NVIDIA Rubin CPX, CPX, Context Processing Unit, long-context inference, GDDR7, Vera Rubin, NVL144, inference-dedicated GPU]
---

# NVIDIA Rubin CPX (Context Processing Unit)#

## Product Overview#

**NVIDIA Rubin CPX** (full name **Rubin Context Processing Unit**) is the **world's first GPU specifically designed for ultra-long-context AI inference**, announced by NVIDIA on **September 9, 2025**, with **H2 2026 shipment**. It adopts a **monolithic design**, equipped with **128GB GDDR7** memory, delivering **30 PFLOPS FP4** compute, with memory bandwidth of only **2 TB/s**—intentionally optimzed for the context processing stage (Compute-bound), not the generation stage (Memory-bandwidth-bound).

Rubin CPX works in conjunction with **Rubin GPU** (handles generation stage) and **Vera CPU** (handles scheduling) to form a **decoupled inference architecture**. In the **Vera Rubin NVL144 CPX rack**, 144 CPX + 144 Rubin GPU + 36 Vera CPU deliver **8 EFLOPS** total compute, which is **7.5×** that of GB300 NVL72.

## Core Specifications#

| Item | Parameter |
|------|-----------|
| **Architecture** | Rubin (CPX dedicated variant) |
| **Process** | TSMC 3NP (estimated) |
| **Packaging** | Monolithic, non-MCM |
| **Memory** | **128 GB GDDR7** (consumer-grade memory, not HBM) |
| **Memory Bandwidth** | **2 TB/s** |
| **FP4 (NVFP4)** | **30 PFLOPS** (sparse, official claim) |
| **FP8 / FP16** | Not publicly disclosed |
| **Attention Acceleration** | **3× (vs GB300 NVL72)** |
| **TDP** | **~500–600W** (estimated, pending official confirmation) |
| **Board Form Factor** | Independent GPU (paired with Rubin GPU) |
| **Announcement Date** | **2025-09-09** |
| **Shipment Date** | **H2 2026** |

> ⚠️ **Design Philosophy**: CPX's 2 TB/s bandwidth is significantly lower than HBM solutions (B200: 8 TB/s, Rubin R200: 22 TB/s), because the **context processing stage is Compute-bound** (compute bottleneck), not Memory-bandwidth-bound (generation stage). Low-bandwidth GDDR7 significantly reduces cost.

## Decoupled Inference Architecture#

| Stage | Execution Unit | Bottleneck Type | CPX Role |
|-------|---------------|-----------------|-----------|
| **Context Stage** (Context / Pre-fill) | **Rubin CPX** | Compute-bound | Process 1M+ token input |
| **Generation Stage** (Generation / Decode) | **Rubin GPU** | Memory-bandwidth-bound | Token-by-token output generation |
| **Scheduling/Preprocessing** | **Vera CPU** | I/O bound | Request scheduling + KV Cache management |

**Traditional solution** (GB200/B200): Same GPU handles both stages, wasting high-bandwidth memory on context stage.
**CPX solution**: Dedicated CPX handles context, Rubin GPU focuses on generation, **total throughput improved 6.5×** (NVIDIA official data).

## Vera Rubin NVL144 CPX Rack#

| Item | Parameter |
|------|-----------|
| **CPX GPU Count** | 144 |
| **Rubin GPU Count** | 144 |
| **Vera CPU Count** | 36 |
| **Total FP4 Compute** | **8 EFLOPS** |
| **Total High-Bandwidth Memory** | **100 TB** |
| **Total Memory Bandwidth** | **1.7 PB/s** |
| **vs GB300 NVL72** | Compute **7.5×**, memory capacity **~14×** |
| **Networking** | Quantum-X800 InfiniBand / Spectrum-X Ethernet + ConnectX-9 |
| **Scheduling Software** | **NVIDIA Dynamo** platform |

## Comparison with Rubin R200#

| Metric | Rubin CPX | Rubin R200 (Training GPU) |
|--------|--------------|----------------------|
| Positioning | **Inference context dedicated** | Training + inference universal |
| Memory | 128GB GDDR7 | 288GB HBM4 |
| Bandwidth | 2 TB/s | 22 TB/s |
| FP4 Compute | 30 PFLOPS | 50 PFLOPS (sparse) |
| Design | Monolithic | 6-chip MCM |
| TDP | ~500–600W (estimated) | ~1,800W |
| Cost | **Low** (GDDR7 vs HBM4) | High |

## Suitable Scenarios#

- ✅ **Ultra-long-context inference** (1M+ tokens, code generation, video understanding)
- ✅ **Multi-turn dialog systems** (Context stage throughput critical)
- ✅ **RAG (Retrieval-Augmented Generation)** (large document input)
- ✅ **Inference-dedicated clusters** (separated from training clusters)
- ❌ Large-scale model training (not target scenario)
- ❌ High-bandwidth-demand workloads (generation stage still handled by Rubin GPU)

## Return on Investment (ROI)#

NVIDIA official data (SemiAnalysis citation):
- **Single rack (NVL144 CPX)**: ~$50M
- **Annual revenue contribution**: $1.5B–2.5B (inference as a service)
- **ROI**: **30–50×**

## Related Cards#

- [NVIDIA Rubin R200](/docs/cards/nvidia/rubin-r200) - Same-generation training/inference universal GPU
- [NVIDIA B300 Ultra](/docs/cards/nvidia/b300-ultra) - Previous-generation flagship (CPX comparison baseline)
- [NVIDIA GB300](/docs/cards/nvidia/gb300) - Rack-level previous-generation product
- [NVIDIA Vera CPU](/docs/cards/nvidia/vera-cpu) - CPX platform companion CPU#

## References#

- [NVIDIA Official Blog: Rubin CPX Announcement](https://developer.nvidia.com/blog/nvidia-rubin-cpx-accelerates-inference-performance-and-efficiency-for-1m-token-context-workloads/)
- [NVIDIA News: Rubin CPX Announcement](https://nvidianews.nvidia.com/news/nvidia-unveils-rubin-cpx-a-new-class-of-gpu-designed-for-massive-context-inference)
- [SemiAnalysis: Rubin CPX Deep Dive](https://newsletter.semianalysis.com/p/another-giant-leap-the-rubin-cpx-specialized-accelerator-rack)
