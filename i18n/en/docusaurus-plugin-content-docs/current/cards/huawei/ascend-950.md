---
id: ascend-950
title: Huawei Ascend 950 (Ascend 950PR / 950DT)
sidebar_label: Huawei Ascend 950
description: "Huawei Ascend 950 series (950PR/950DT) detailed specifications: 1 PFLOPS FP8, self-developed HBM, SIMT dual programming model, HiF8 low-precision high-fidelity format, H1 2026 mass production."
keywords: [Huawei Ascend 950, Ascend 950, 950PR, 950DT, HiF8, self-developed HBM, FP8, FP4, CloudMatrix 384]
---

# Huawei Ascend 950 (Ascend 950PR / 950DT)

## Overview

The **Huawei Ascend 950** series (**950PR** / **950DT**) is the 4th-generation Ascend AI chip, officially launched and in mass production in **early 2026**. It introduces **FP8 / FP4 low-precision formats** for the first time, delivering **1 PFLOPS FP8** per card. It also uses **Huawei's self-developed HBM** for the first time (950PR uses HiBL 1.0, 950DT uses HiZQ 2.0), completely eliminating dependence on external HBM supply.

**950PR (Prefill Inference)** and **950DT (Decode + Training)** represent Huawei Ascend's first attempt at a "scenario segmentation" strategy — different memory configurations under the same architecture, precisely matching different AI workload requirements.

## Core Specifications

| Item | Ascend 950PR | Ascend 950DT |
|------|-------------|-------------|
| **Architecture** | Da Vinci v5 (4th-gen Ascend) | Da Vinci v5 (4th-gen Ascend) |
| **Process Node** | N+2 (SMIC domestic) | N+2 (SMIC domestic) |
| **Programming Model** | **SIMD + SIMT dual model** | **SIMD + SIMT dual model** |
| **HBM Type** | **HiBL 1.0** (self-developed, cost-priority) | **HiZQ 2.0** (self-developed, bandwidth-priority) |
| **HBM Capacity** | **128 GB** | **144 GB** |
| **HBM Bandwidth** | ~3 TB/s | **4 TB/s** |
| **FP8 Compute** | **1 PFLOPS** (HiF8 format) | **1 PFLOPS** (HiF8 format) |
| **FP4 Compute** | **2 PFLOPS** | **2 PFLOPS** |
| **BF16/FP16 Compute** | ~500 TFLOPS | ~500 TFLOPS |
| **INT8 Compute** | ~2,000 TOPS | ~2,000 TOPS |
| **TDP** | ~400 W | ~500 W |
| **PCIe** | Gen 5 ×16 | Gen 5 ×16 |
| **Interconnect** | HCCS 784 GB/s | HCCS 784 GB/s |
| **Price (estimated)** | ~¥80,000-100,000/card | ~¥120,000-150,000/card |
| **Launch** | **H1 2026** | **H1 2026** |

## 950PR vs 950DT Differentiation

| Dimension | 950PR | 950DT |
|------|-------|-------|
| **Target Scenario** | Inference Prefill (first-token generation) | Inference Decode (token-by-token generation) + Training |
| **HBM Capacity** | 128 GB (smaller, Prefill has lower memory needs) | 144 GB (larger, training needs more memory) |
| **HBM Bandwidth** | ~3 TB/s (Prefill has moderate bandwidth needs) | **4 TB/s** (Decode and training need high bandwidth) |
| **Typical Applications** | Video recommendation, real-time interaction, search | Conversational generation, text continuation, model training |
| **Pricing** | Lower (cost-optimized) | Higher (high-performance) |

## Key Technology Breakthroughs

### 1. Self-Developed HBM (HiBL 1.0 / HiZQ 2.0)
- **HiBL 1.0** (950PR): Cost-effective solution, resolving the HBM supply bottleneck
- **HiZQ 2.0** (950DT): High-bandwidth solution, 4 TB/s competing with NVIDIA HBM3e
- Fills a domestic gap, completely eliminating dependence on SK Hynix / Samsung

### 2. HiF8 Format — Precision Revolution
- Huawei's self-developed FP8 variant, precision approaching FP16, compute doubling over FP16
- Resolves the "low precision → precision loss" contradiction in large-model training
- Combined with FP4 format, overall compute utilization improves by **30%+**

### 3. SIMD + SIMT Dual Programming Model
- **SIMD**: Efficient vector computation (continuing the Da Vinci core strength from 910C)
- **SIMT**: New model, supporting flexible scheduling
- Memory access granularity reduced from 512 bytes → **128 bytes**
- Discrete memory access efficiency improved by **4×**
- Available as both ASIC (Ascend Core) and GPGPU twin variants

### 4. CloudMatrix 384 System
- 384 Ascend 950 chips forming a super node
- Total compute: **384 × 1 PFLOPS FP8 ≈ 384 PFLOPS**
- AI cluster performance surpassing NVIDIA GB300 NVL72

## Comparison with Previous Gen 910C

| Metric | Ascend 910C | **Ascend 950** | Improvement |
|------|-------------|----------------|------|
| **Architecture** | Da Vinci v4 (SIMD) | Da Vinci v5 (**SIMD + SIMT**) | Dual model |
| **Process Node** | 7nm-class | **N+2** | More advanced |
| **HBM** | HBM2e (third-party) | **Self-developed HiBL / HiZQ** | Self-controlled |
| **HBM Capacity** | 128 GB (dual-chip) | **128-144 GB** | Comparable |
| **FP8/BF16 Compute** | 780 TFLOPS BF16 | **1 PFLOPS FP8** | **~2.5×** |
| **FP4 Support** | ❌ Not supported | ✅ **Supported** | New |
| **TDP** | ~310 W | ~400-500 W | +29-61% |
| **Programming Model** | SIMD proprietary | **SIMD + SIMT + ASIC/GPGPU twin** | Open |
| **Self-developed HBM** | ❌ Third-party | ✅ **Self-developed** | Milestone |

## Vendor Information

| Item | Details |
|------|------|
| **Manufacturer** | Huawei Technologies Co., Ltd. (HiSilicon Semiconductor) |
| **Official Website** | https://www.hiascend.com |
| **CANN** | https://www.hiascend.com/en/software/cann |
| **Launch** | **H1 2026 (mass production)** |
| **Pricing (estimated)** | 950PR ~¥80,000-100,000, 950DT ~¥120,000-150,000 |

## Use Cases

- ✅ **Large-model training** (950DT, FP8 1 PFLOPS)
- ✅ **Inference Prefill** (950PR, video recommendation / real-time interaction)
- ✅ **Inference Decode** (950DT, conversational generation / text continuation)
- ✅ **Domestic AI clusters** (CloudMatrix 384)
- ✅ **Government/enterprise AI infrastructure** (self-developed HBM, supply chain security)
- ❌ **CUDA ecosystem lock-in** (requires migration to CANN / MindSpore)
- ❌ **FP4 training** (Ascend 950 supports FP4 inference; training still primarily FP8/BF16)

## Related Products

- [Huawei Ascend 920](/docs/cards/huawei/ascend-920) - Previous roadmap
- [Huawei Ascend 910C](/docs/cards/huawei/ascend-910c) - Previous mass production
- [NVIDIA B300 Ultra](/docs/cards/nvidia/b300-ultra) - Same-generation competitor
- [AMD MI355X](/docs/cards/amd/mi355x) - Same-generation comparison
- [Cambricon MLU690](/docs/cards/others/cambricon-mlu-690) - Domestic competitor
