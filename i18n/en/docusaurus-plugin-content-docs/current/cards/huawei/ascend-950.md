---
id: ascend-950
title: Huawei Ascend 950 (950PR / 950DT)
sidebar_label: Huawei Ascend 950
description: "Huawei Ascend 950 series (950PR/950DT) detailed specs: 1 PFLOPS FP8, in-house HBM, dual SIMD/SIMT programming models, HiF8 low-precision high-fidelity format, mass production in 2026 H1."
keywords: [Huawei Ascend 950, Ascend 950, 950PR, 950DT, HiF8, in-house HBM, FP8, FP4, CloudMatrix 384]
---

# Huawei Ascend 950 (950PR / 950DT)

## Product Overview

The **Huawei Ascend 950** series (**950PR** / **950DT**) is Ascend's fourth-generation AI chip, **officially released and mass-produced in early 2026**. It introduces **FP8 / FP4 low-precision formats** for the first time, with **1 PFLOPS of FP8 compute per card**. It is also the first to adopt **Huawei's in-house HBM** (950PR uses HiBL 1.0, 950DT uses HiZQ 2.0), completely removing dependence on external HBM supply.

The **950PR (Prefill inference)** and **950DT (Decode + training)** are Huawei Ascend's first attempt at a "workload segmentation" strategy — same architecture, different memory configurations, precisely matched to the needs of different AI workloads.

## Core Specifications

| Parameter | Ascend 950PR | Ascend 950DT |
|------|-------------|-------------|
| **Architecture** | Da Vinci v5 (4th-generation Ascend) | Da Vinci v5 (4th-generation Ascend) |
| **Process** | N+2 (SMIC domestic) | N+2 (SMIC domestic) |
| **Programming Model** | **SIMD + SIMT dual model** | **SIMD + SIMT dual model** |
| **HBM Type** | **HiBL 1.0** (in-house, cost-optimized) | **HiZQ 2.0** (in-house, bandwidth-optimized) |
| **HBM Capacity** | **128 GB** | **144 GB** |
| **HBM Bandwidth** | **1.6 TB/s** | **4 TB/s** |
| **FP8 Compute** | **1 PFLOPS** (HiF8 format) | **1 PFLOPS** (HiF8 format) |
| **FP4 Compute** | **2 PFLOPS** | **2 PFLOPS** |
| **BF16/FP16 Compute** | ~500 TFLOPS | ~500 TFLOPS |
| **INT8 Compute** | ~2,000 TOPS | ~2,000 TOPS |
| **TDP** | ~400 W | ~500 W |
| **PCIe** | Gen 5 ×16 | Gen 5 ×16 |
| **Interconnect** | **LingQu 2 TB/s** | **LingQu 2 TB/s** |
| **Price** | **¥70,000 per card** (1/3 of the H200) | ~¥120,000-150,000 per card (estimated) |
| **Launch** | **2026 H1** | **2026 H1** |

## Differentiated Positioning: 950PR vs 950DT

| Dimension | 950PR | 950DT |
|------|-------|-------|
| **Target Scenario** | Inference Prefill (first-token generation) | Inference Decode (token-by-token generation) + training |
| **HBM Capacity** | 128 GB (smaller; Prefill has low memory demand) | 144 GB (larger; training needs more memory) |
| **HBM Bandwidth** | **1.6 TB/s** (moderate bandwidth demand for Prefill) | **4 TB/s** (high bandwidth demand for Decode and training) |
| **Typical Applications** | Video recommendation, real-time interaction, search | Dialogue generation, text continuation, model training |
| **Pricing** | Lower (cost-optimized) | Higher (high performance) |

## Key Technical Breakthroughs

### 1. In-House HBM (HiBL 1.0 / HiZQ 2.0)
- **HiBL 1.0** (950PR): low-cost solution that resolves the HBM supply chokepoint problem
- **HiZQ 2.0** (950DT): high-bandwidth solution, 4 TB/s rivaling NVIDIA HBM3e
- Fills a domestic gap, completely removing dependence on SK Hynix / Samsung

### 2. HiF8 Format — A Precision Revolution
- Huawei's in-house FP8 variant with precision close to FP16 and 2x the compute of FP16
- Resolves the "low precision → accuracy loss" trade-off in large-model training
- Combined with the FP4 format, overall compute utilization improves by **30%+**

### 3. SIMD + SIMT Dual Programming Model
- **SIMD**: efficient vector computation (continuing the Da Vinci core strength of the 910C)
- **SIMT**: newly added model supporting flexible scheduling
- Memory access granularity goes from 512 bytes → **128 bytes**
- Discrete memory access efficiency improves **4x**
- Offers twin ASIC (Ascend Core) and GPGPU variants

### 4. CloudMatrix 384 System
- 384 950 chips form a supernode
- Total compute: **384 × 1 PFLOPS FP8 ≈ 384 PFLOPS**
- AI cluster performance surpasses the NVIDIA GB300 NVL72

## Comparison with Previous-Generation 910C

| Metric | Ascend 910C | **Ascend 950** | Improvement |
|------|-------------|----------------|------|
| **Architecture** | Da Vinci v4 (SIMD) | Da Vinci v5 (**SIMD + SIMT**) | Dual model |
| **Process** | 7nm-class | **N+2** | More advanced |
| **HBM** | HBM2e (externally sourced) | **In-house HiBL / HiZQ** | Independent and controllable |
| **HBM Capacity** | 128 GB (dual chip) | **128-144 GB** | Comparable |
| **FP8/BF16 Compute** | 780 TFLOPS BF16 | **1 PFLOPS FP8** | **~2.5x** |
| **FP4 Support** | ❌ Not supported | ✅ **Supported** | New |
| **TDP** | ~310 W | ~400-500 W | +29-61% |
| **Programming Model** | Proprietary SIMD | **SIMD + SIMT + ASIC/GPGPU twins** | Open |
| **In-House HBM** | ❌ Externally sourced | ✅ **In-house** | Milestone |

## Vendor Information

| Parameter | Details |
|------|------|
| **Manufacturer** | Huawei Technologies Co., Ltd. (HiSilicon) |
| **Official Website** | https://www.hiascend.com |
| **CANNN** | https://www.hiascend.com/en/software/cann |
| **Launch** | **2026 H1 (mass production)** |
| **Pricing (estimated)** | 950PR ~¥80,000-100,000, 950DT ~¥120,000-150,000 |

## Use Cases

- ✅ **Large-model training** (950DT, 1 PFLOPS FP8)
- ✅ **Inference Prefill** (950PR, video recommendation / real-time interaction)
- ✅ **Inference Decode** (950DT, dialogue generation / text continuation)
- ✅ **Domestic AI clusters** (CloudMatrix 384)
- ✅ **Government and enterprise AI infrastructure** (in-house HBM, supply chain security)
- ❌ **CUDA ecosystem lock-in** (migration to CANN / MindSpore required)
- ❌ **FP4 training** (the 950 supports FP4 for inference; training remains primarily FP8/BF16)

## Related Products

- [Huawei Ascend 920](/docs/cards/huawei/ascend-920) - Previous-generation roadmap
- [Huawei Ascend 910C](/docs/cards/huawei/ascend-910c) - Previous-generation mass production
- [NVIDIA B300 Ultra](/docs/cards/nvidia/b300-ultra) - Contemporary competitor
- [AMD MI355X](/docs/cards/amd/mi355x) - Contemporary comparison
- [Cambricon MLU690](/docs/cards/cambricon/mlu-690) - Domestic competitor
