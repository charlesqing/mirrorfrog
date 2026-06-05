---
id: ascend-920
title: Huawei Ascend 920 (Ascend 920)
sidebar_label: Huawei Ascend 920
description: Huawei Ascend 920 detailed specifications: 6nm process, 900+ BF16 TFLOPS, 4 Tbps HBM bandwidth, H2 2025 mass production, competing with NVIDIA H20 / domestic substitution.
keywords: [Huawei Ascend 920, Ascend 920, 6nm, 900 BF16 TFLOPS, 4 Tbps, domestic substitution, H20 comparison, 2025 H2]
---

# Huawei Ascend 920 (Ascend 920)

## Overview

**Huawei Ascend 920** (Ascend 920) is the **next-generation Ascend chip** after the Ascend 910C, entering **mass production in H2 2025**. Built on a **6nm process** (SMIC N+1 / N+2 domestic), it delivers **900+ BF16 TFLOPS** compute and **4 Tbps (4,000 GB/s) HBM bandwidth**, making it the **highest-bandwidth HBM implementation among domestic AI chips**.

Ascend 920 is the core of **Huawei CloudMatrix 384 / CloudMatrix 384 Ultra** and is the flagship of China's domestic AI cluster for 2025-2026.

## Core Specifications

| Item | Specification |
|------|------|
| **Architecture** | Da Vinci v4 |
| **Process Node** | **6nm (SMIC N+1 / N+2 domestic)** |
| **Chiplet Count** | 2× (dual-die packaging, similar to 910C) |
| **HBM** | 8× HBM3 modules |
| **HBM Capacity** | ~96 GB (estimated) |
| **HBM Bandwidth** | **4 Tbps = 4,000 GB/s** |
| **BF16 Compute** | **900+ TFLOPS** |
| **FP16 Compute** | 1,800 TFLOPS (estimated) |
| **INT8 Compute** | 3,600 TOPS (estimated) |
| **TDP** | ~400 W |
| **Interconnect** | HCCS (Huawei Cache Coherence System) |
| **Launch** | **H2 2025 mass production (roadmap)** |

> 📌 **4 Tbps bandwidth = highest domestic HBM bandwidth**, 25% higher than Ascend 910C's 3.2 Tbps.

## Ascend 910C vs Ascend 920 Upgrade Comparison

| Metric | Ascend 910C | **Ascend 920** | Improvement |
|------|-------------|----------------|------|
| Architecture | Da Vinci v3 | **Da Vinci v4** | New generation |
| Process Node | 7nm | **6nm** | More advanced |
| HBM Bandwidth | 3.2 Tbps | **4 Tbps** | **1.25×** |
| BF16 Compute | 780 TFLOPS | **900+ TFLOPS** | **1.15×** |
| TDP | ~310 W | ~400 W | +29% |
| Launch | 2025-04 | **H2 2025** | — |

## Ascend 920 vs NVIDIA H20 (Comparison)

| Metric | Ascend 920 | NVIDIA H20 |
|------|------------|------------|
| Positioning | Domestic substitution | China-compliant AI chip |
| Process Node | 6nm | TSMC 4N (partially SMIC domestic after restrictions) |
| Memory | ~96 GB | 96 GB HBM3 |
| Memory Bandwidth | **4 Tbps** | 4.0 Tbps |
| BF16 Compute | **900 TFLOPS** | 296 TFLOPS |
| **BF16 Compute Ratio** | **3×** | 1× (baseline) |
| Interconnect | HCCS 1.2 Tbps | NVLink 900 GB/s |
| Software | CANN + MindSpore | CUDA (restricted) |
| Import Compliance | ✅ Domestic | ⚠️ US export controls |

> 💡 **Ascend 920 significantly leads H20 in BF16 compute (3×)**, with matching 4 Tbps bandwidth. This is a **critical victory for domestic substitution**.

## CloudMatrix 384 Ultra System (Estimated)

| Item | Configuration |
|------|------|
| **Chip Count** | 384 Ascend 920 |
| **Rack Count** | 16 (12 compute + 4 network) |
| **Total HBM** | ~36 TB (96GB × 384) |
| **Interconnect** | All-optical mesh, **8,000+ LPO optical modules** |
| **BF16 Compute (system)** | **~345 PFLOPS** (estimated 900 × 384) |
| **TDP (system)** | ~150 kW |

> **CloudMatrix 384 Ultra total compute > NVIDIA GB300 NVL72 cluster** (GB300 NVL72 single rack ~144 PFLOPS FP8 dense; CloudMatrix 384 Ultra single rack ~22 PFLOPS BF16 dense). **CloudMatrix 384 Ultra system-level = 1.5-2× GB200 NVL72**.

## CANN + MindSpore Software Ecosystem

- **CANN 8.x** (Compute Architecture for Neural Networks): CUDA equivalent
- **MindSpore 2.4+**: Huawei's self-developed AI framework
- **PyTorch 2.3+ MindSpore backend**: PyTorch compatible
- **vLLM 0.7+ Ascend backend**: Low-latency inference
- **ONNX-Runtime Ascend backend**: Cross-framework inference
- **Atlas 900/950 series servers**: OEM complete systems

## Recommended Deployment Configurations

| Scenario | Recommended Configuration |
|------|----------|
| **China domestic AI cluster** | CloudMatrix 384 Ultra (384 × Ascend 920) |
| **Government/finance domestic substitution** | Atlas 950 + Ascend 920 |
| **Large-model training** | Ascend 920 + MindSpore |
| **Inference serving** | Ascend 920 + vLLM Ascend |
| **Scientific computing** | Ascend 920 (FP64 advantage) |

## Use Cases

- ✅ **China domestic substitution** (government, finance, telecom, energy)
- ✅ **Large-model training** (900 BF16 TFLOPS / 4 Tbps)
- ✅ **Ultra-large-scale clusters** (CloudMatrix 384 Ultra)
- ✅ **Scientific computing** (FP64 advantage)
- ❌ Export markets (US export controls)
- ❌ Non-domestic software ecosystem (high migration cost)

## Vendor Information

| Item | Details |
|------|------|
| **Vendor** | Huawei Technologies |
| **Launch** | **H2 2025 mass production** |
| **Process Foundry** | SMIC (Semiconductor Manufacturing International Corporation, 6nm N+1/N+2) |
| **Product Page** | https://www.huawei.com/en/products/computing/ascend |
| **Complete System** | Atlas 950 / CloudMatrix 384 Ultra |
| **Software Stack** | CANN + MindSpore |

## Related Products

- [Huawei Ascend 910C](/docs/cards/huawei/ascend-910c) - Previous flagship
- [Huawei Ascend 910D](/docs/cards/huawei/ascend-910d) - High-end model
- [Huawei Ascend 910B](/docs/cards/huawei/ascend-910b) - Prior mainstream
- [NVIDIA H100 NVL](/docs/cards/nvidia/h100-nvl) - Comparison product
- [AMD MI300X](/docs/cards/amd/mi300x) - Overseas alternative
- [Full Comparison Table](/docs/comparison)
