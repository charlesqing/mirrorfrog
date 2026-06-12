---
id: ascend-950dt
title: Huawei Ascend 950DT
sidebar_label: Ascend 950DT
description: "Huawei Ascend 950DT detailed specs: Da Vinci v5 architecture, 144GB HiZQ 2.0 HBM, 4TB/s bandwidth, 2TB/s interconnect, FP8 1 PFLOPS, launching on Huawei Cloud in August 2026."
keywords: [Ascend 950DT, HiZQ 2.0, Da Vinci v5, FP8, MXFP4, Huawei Cloud, Decode inference]
---

# Huawei Ascend 950DT

## Product Overview

**Huawei Ascend 950DT** is the **high-bandwidth version** of the fourth-generation Ascend AI chip, officially launching on **Huawei Cloud in August 2026**. It shares the exact same Da Vinci v5 computing cores with the 950PR (cost-optimized version), but features the **self-developed HiZQ 2.0 HBM memory system** with **144GB** capacity and up to **4TB/s** bandwidth, specifically designed for **inference Decode (token-by-token generation) stage** and **model training** scenarios.

> **950PR vs 950DT dual-version strategy**: Huawei adopts "scenario segmentation" design for the Ascend 950 series—the same computing cores paired with different memory subsystems, precisely matching the differentiated demands of AI workloads. 950PR targets Prefill (first token generation), while 950DT targets Decode + training.

## Core Specifications

| Item | Parameter |
|------|-----------|
| **Architecture** | Da Vinci v5 (4th-gen Ascend) |
| **Process** | SMIC N+2 (equivalent to improved 7nm) |
| **Programming Model** | **SIMD + SIMT dual model** |
| **HBM Type** | **HiZQ 2.0** (self-developed, bandwidth-first) |
| **HBM Capacity** | **144 GB** |
| **HBM Bandwidth** | **4 TB/s** |
| **Interconnect Bandwidth** | **2 TB/s** (HCCS protocol) |
| **FP8 Compute** | **1 PFLOPS** (HiF8 format) |
| **FP4 Compute** | **2 PFLOPS** (MXFP4 format) |
| **BF16/FP16 Compute** | ~500 TFLOPS |
| **INT8 Compute** | ~2,000 TOPS |
| **TDP** | ~500 W |
| **PCIe** | Gen 5 ×16 |
| **Launch Date** | **August 2026** (Huawei Cloud launch) |
| **Price** | ~¥120K-150K per card (estimated) |

## 950DT vs 950PR Detailed Comparison

| Dimension | 950PR | **950DT** |
|-----------|-------|-----------|
| **Target Scenario** | Inference Prefill (first token), video recommendation, real-time interaction | **Inference Decode (token-by-token), model training, high-concurrency inference** |
| **HBM Type** | HiBL 1.0 (cost-first) | **HiZQ 2.0** (bandwidth-first) |
| **HBM Capacity** | 128 GB | **144 GB** |
| **HBM Bandwidth** | ~3 TB/s | **4 TB/s** |
| **Interconnect Bandwidth** | HCCS 784 GB/s | **HCCS 2 TB/s** |
| **Supported Precision** | FP8, HiF8 | **FP8, MXFP8, MXFP4, HiF8** |
| **Typical Application** | Video recommendation, search | **Dialogue generation, text continuation, SFT fine-tuning** |
| **Pricing** | Lower (~¥70K per card) | Higher (~¥120K-150K per card) |

## Key Technical Breakthroughs

### 1. HiZQ 2.0 Self-Developed HBM
- **Bandwidth up to 4TB/s**, surpassing NVIDIA HBM3e (3.35TB/s), second only to HBM4 (4.8TB/s)
- **144GB capacity**, supports larger batch sizes and longer context windows
- Completely breaks dependency on SK Hynix / Samsung HBM, ensuring supply chain autonomy

### 2. Decode Stage Specific Optimization
- **High-bandwidth memory subsystem**: Decode stage bottleneck is memory bandwidth (not compute), 4TB/s bandwidth improves long-context inference throughput by **2×**
- **MXFP4/MXFP8 support**: Low-precision formats reduce memory transfer volume, further improving Decode efficiency
- **Cooperation with 950PR**: Prefill stage handled by 950PR, Decode stage handled by 950DT, forming "heterogeneous inference pipeline"

### 3. SIMD + SIMT Dual Programming Model
- **SIMD**: Efficient vector compute (continuing Da Vinci core advantage from 910C)
- **SIMT**: New model, supports flexible scheduling, better适配 Decode stage's irregular memory access patterns
- Memory access granularity from 512 bytes → **128 bytes**, discrete memory access efficiency improved by **4×**

### 4. CloudMatrix 384 System Integration
- 384 950DT chips can form a super node (requires mixed deployment with 950PR)
- Total compute: **384 × 1 PFLOPS FP8 ≈ 384 PFLOPS**
- Total memory: **384 × 144GB = 55,296 GB** (approx. 54TB)
- AI cluster performance comparable to NVIDIA GB300 NVL72

## Comparison with Competitors

| Metric | Ascend 950DT | NVIDIA H200 | NVIDIA B200 | AMD MI355X |
|--------|----------------|---------------|---------------|--------------|
| FP8 Compute | 1 PFLOPS | 1.97 PFLOPS | 4.5 PFLOPS | 2.3 PFLOPS |
| HBM Capacity | 144 GB | 141 GB | 192 GB | 288 GB |
| HBM Bandwidth | **4 TB/s** | 4.8 TB/s | 8 TB/s | 6 TB/s |
| TDP | ~500W | 700W | 1,000W | 1,400W |
| Process | SMIC N+2 | TSMC 4NP | TSMC 4NP | TSMC 3NM |
| Ecosystem | CANN (Huawei) | CUDA | CUDA | ROCm |

## Ecosystem Progress

### DeepSeek Priority Deployment
- **DeepSeek V4** already equipped with Ascend 950 computing platform (including 950DT)
- Expected **June 2026** release of V4.1 version (950PR optimized)
- Expected **August 2026** release of V4.2 version (950DT optimized), further unlocking model capabilities
- Goal: Surpass top US closed-source AI models in dimensions like AI programming

### CANN Next CUDA Compatibility Layer
- ~80% PyTorch code requires only configuration changes to migrate
- Supports mainstream models like DeepSeek, Qwen, LLaMA
- Huawei Cloud ModelArts platform provides one-click migration tools

## Launch Date and Availability

- **First Announcement**: September 18, 2025 (Huawei Full Connection Conference)
- **Original Plan**: Q4 2026
- **Actual Advance to**: **August 2026** official launch on Huawei Cloud platform
- **Availability**: Huawei Cloud compute rental (hourly/monthly billing), not available for individual purchase
- **Physical Card Release**: Expected Q4 2026 through partners (e.g., Inspur, Sugon)

## External Links

- [Tencent News: Ascend 950DT chip launches in August](https://news.qq.com/rain/a/20260611A01Y8F00)
- [ZOL AI: Ascend 950 dual-version launch](https://ai.zol.com.cn/1195/11955311.html)
- [Baidu Baike: Ascend 950DT chip](https://baike.baidu.com/item/%E6%98%87%E8%85%BE950DT%E8%8A%AF%E7%89%87/66772879)
- [Zhihu: Ascend 950DT chip launches on Huawei Cloud in August](https://zhuanlan.zhihu.com/p/2047213842783065249)
