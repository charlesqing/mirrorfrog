---
slug: huawei-ascend-920-3x-h20-domestic-substitution
title: 'Huawei Ascend 920: China's Highest Bandwidth at 4 Tbps + 3× H20 Compute for Domestic Substitution'
authors: [aicomputecards]
tags: [product-launch, strategy, news]
description: "Huawei Ascend 920 is the next-gen Ascend chip entering mass production in 2025 H2: SMIC 6nm domestic process, 4 Tbps HBM bandwidth, 900+ BF16 TFLOPS = 3× NVIDIA H20 compute. A key victory for Chinese domestic substitution."
---

**Huawei Ascend 920 (昇腾 920)** entered **large-scale mass production in 2025 H2**, representing a **major breakthrough** for Chinese domestic AI chips. This article analyzes its specifications, comparison with NVIDIA H20, the CloudMatrix 384 Ultra system, and its significance for China's AI industry.

{/* truncate */}

## Core Specifications

| Item | Ascend 910C | **Ascend 920** | Improvement |
|------|-------------|----------------|------|
| Architecture | Da Vinci v3 | **Da Vinci v4** | New generation |
| Process | 7nm | **6nm (SMIC domestic)** | More advanced |
| Chiplets | 2× (dual die) | 2× | same |
| HBM capacity | ~128 GB | **~96 GB** | slight decrease |
| HBM bandwidth | 3.2 Tbps | **4 Tbps** | **1.25×** |
| BF16 compute | 780 TFLOPS | **900+ TFLOPS** | **1.15×** |
| FP16 compute | 1,560 TFLOPS | 1,800 TFLOPS | 1.15× |
| INT8 compute | 3,120 TOPS | 3,600 TOPS | 1.15× |
| TDP | ~310 W | ~400 W | +29% |
| Release date | 2025-04 | **2025 H2** | — |

> **4 Tbps bandwidth = China's highest domestic HBM bandwidth**, a 25% improvement over Ascend 910C. The 900+ BF16 TFLOPS compute also surpasses 910C.

## Ascend 920 vs NVIDIA H20 (Target Comparison)

NVIDIA H20 is the "compliance" AI chip **specifically designed for the Chinese market** under U.S. export controls:

| Metric | Ascend 920 | NVIDIA H20 |
|------|------------|------------|
| Positioning | Domestic substitution | China-compliant AI chip |
| Process | 6nm (SMIC) | TSMC 4N (partially domestic after restrictions) |
| Memory | ~96 GB | 96 GB HBM3 |
| Memory bandwidth | **4 Tbps** | 4.0 Tbps |
| BF16 compute | **900 TFLOPS** | 296 TFLOPS |
| **BF16 compute ratio** | **3×** | 1× (baseline) |
| Interconnect | HCCS 1.2 Tbps | NVLink 900 GB/s |
| Software | CANN + MindSpore | CUDA (restricted) |
| Import compliance | ✅ Domestic | ⚠️ U.S. export controls |

> 💡 **Ascend 920 significantly leads H20 in BF16 compute** (**3×**), with 4 Tbps bandwidth on par with H20. This is a **key victory** for domestic substitution.

## CloudMatrix 384 Ultra System

Ascend 920 will be used in the **CloudMatrix 384 Ultra** supernode system:

| Item | Configuration |
|------|------|
| **Chip count** | 384 Ascend 920 chips |
| **Rack count** | 16 (12 compute + 4 network) |
| **Total HBM** | ~36 TB (96GB × 384) |
| **Interconnect** | Fully optical mesh, **8,000+ LPO optical modules** |
| **BF16 compute (system)** | **~345 PFLOPS** (estimated 900 × 384) |
| **TDP (system)** | ~150 kW |

> **CloudMatrix 384 Ultra system-level BF16 compute of ~345 PFLOPS** ≈ **2.4×** NVIDIA GB200 NVL72 cluster (~144 PF FP8 dense).

## Why Ascend 920 Is the Key Victory for Domestic Substitution?

### 1. First Time Surpassing H20 by 3× in Compute

| Period | Domestic | NVIDIA China Edition | Multiple |
|------|------|---------------|------|
| 2023 | 910B = 320 TFLOPS | H20 = 296 TFLOPS | 1.08× |
| 2024 | 910B = 320 TFLOPS | H20 = 296 TFLOPS | 1.08× |
| 2025 H1 | 910C = 780 TFLOPS | H20 = 296 TFLOPS | 2.6× |
| **2025 H2** | **920 = 900 TFLOPS** | H20 = 296 TFLOPS | **3.0×** |

> **Starting from 2025 H2, Chinese domestic AI chip compute stably surpasses H20 by three times**.

### 2. SMIC 6nm Domestic Process

Ascend 920 uses **SMIC N+1 / N+2 6nm process**:

- ✅ Fully indigenous and controllable
- ✅ Not subject to U.S. export controls
- ⚠️ Yield and cost still lag behind TSMC 4N

### 3. 4 Tbps — China's Highest Domestic HBM

Ascend 920's 4 Tbps HBM bandwidth:
- First domestic chip to **reach 4 Tbps level** (previous max 3.2 Tbps)
- On par with H20
- Presumed to use **CXMT (ChangXin Memory Technologies) HBM3** or indigenous HBM

### 4. CANN + MindSpore Software Stack

- **CANN 8.x** (Compute Architecture for Neural Networks): analog to CUDA
- **MindSpore 2.4+**: Huawei's indigenous AI framework
- **PyTorch 2.3+ MindSpore backend**: PyTorch compatible
- **vLLM 0.7+ Ascend backend**: low-latency inference
- **ONNX-Runtime Ascend backend**: cross-framework inference
- **Atlas 900/950 series servers**: OEM complete systems

## China Market Deployment Status

### Scaled-Up Customers

| Customer | Application |
|------|------|
| **China Mobile** | Large model training (990M customers) |
| **China Telecom** | Intelligent customer service + business insights |
| **China Unicom** | Government + industry AI |
| **State Grid** | Power grid scheduling + fault prediction |
| **CNPC** | Exploration + logistics optimization |
| **Major banks** | Risk control + anti-fraud |
| **Internet companies** (Baidu, Alibaba, Tencent) | LLM inference |

### Industry Layout

- **Government**: 100% domestic requirement
- **Finance**: policy-driven domestic requirement
- **Telecom**: fast HBM domestication progress
- **Energy**: fast HBM domestication progress
- **Internet**: sensitive workloads shifting to domestic
- **Education / Healthcare**: gradual domestication

## Limitations and Challenges

| Limitation | Impact |
|------|------|
| **FP8/FP4 support** | Ascend 920 still BF16/FP16-primary, FP8 optimization in progress |
| **HBM capacity** | 96 GB is below NVIDIA Rubin R200 288 GB / AMD MI400 432 GB |
| **CUDA compatibility** | CANN 8 still requires migration; direct CUDA app execution is limited |
| **SMIC 6nm yield** | 10-20% lower yield than TSMC 4N |
| **HBM source** | CXMT HBM production capacity limited |
| **Interconnect bandwidth** | HCCS 1.2 Tbps far below NVLink 6 (3.5 TB/s) |

## Comparison with Contemporaneous Domestic Chips

| Vendor | Chip | BF16 Compute | HBM Bandwidth | Mass Production |
|------|------|-----------|----------|----------|
| **Huawei** | Ascend 920 | 900 TFLOPS | 4 Tbps | 2025 H2 |
| **Huawei** | Ascend 910C | 780 TFLOPS | 3.2 Tbps | 2025-04 |
| **Cambricon** | Siyuan 590 | ~480 TFLOPS | 2.4 Tbps | 2024 |
| **Moore Threads** | MTT S5000 | ~250 TFLOPS | 1.6 Tbps | 2024 |
| **Biren** | BR104 | ~300 TFLOPS | 1.6 Tbps | 2024 |
| **Iluvatar** | CoreX Bi-150 | ~200 TFLOPS | 1.2 Tbps | 2024 |

> **Huawei Ascend 920 maintains a clear lead among Chinese domestic AI chips**.

## Detailed Product Pages

- [Huawei Ascend 920 Full Specs](/docs/cards/huawei/ascend-920)
- [Huawei Ascend 910C (Previous Gen)](/docs/cards/huawei/ascend-910c)
- [Huawei Ascend 910B (First Mass Production Gen)](/docs/cards/huawei/ascend-910b)
- [Huawei Ascend 910D (High-End)](/docs/cards/huawei/ascend-910d)
- [NVIDIA H100 NVL (Target)](/docs/cards/nvidia/h100-nvl)
- [AMD MI300X (Overseas Alternative)](/docs/cards/amd/mi300x)
- [Future Roadmap](/docs/roadmap)

## Summary

Huawei Ascend 920 is a **key victory** for Chinese AI chips in 2025 H2:

1. **900+ BF16 TFLOPS = 3× H20** — first time stably surpassing H20 by three times
2. **SMIC 6nm domestic** — indigenous and controllable
3. **4 Tbps — China's highest domestic HBM bandwidth** — HBM domestication breakthrough
4. **CloudMatrix 384 Ultra system** — single system surpasses GB200 NVL72
5. **CANN + MindSpore** — maturing software ecosystem

Starting from 2025 H2, China's AI industry enters a new phase where **"domestic chips can independently support large-scale AI applications."**
