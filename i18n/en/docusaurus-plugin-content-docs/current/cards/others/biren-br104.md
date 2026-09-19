---
id: biren-br104
title: Biren BR100 / BR104 (Domestic AI Training/Inference)
sidebar_label: Biren
description: "Biren Technology BR100/BR104: 7nm, BR100 1024 TFLOPS BF16 / 2048 TOPS INT8, BR104 32GB HBM2e 300W, BIRENSUPA software stack, one of China's AI chip startup 'Five Tigers'. Listed on HKEX in January 2025."
keywords: [Biren, BR100, BR104, domestic AI chips, BIRENSUPA, domestic substitution, HKEX listing]
---

# Biren BR100 / BR104 (Domestic AI Training/Inference)

## Product Overview

**Biren Technology** is a Chinese AI chip startup, **founded in September 2019** and headquartered in Shanghai. It **listed on the Hong Kong Stock Exchange (HKEX) in January 2025**. BR100/BR104 is its first general-purpose GPU chip series, officially released in August 2022.

- **BR100**: flagship, dual-chiplet design, **1024 TFLOPS BF16** / 2048 TOPS INT8
- **BR104**: single-chiplet version, **32GB HBM2e**, **300W TDP**, aimed at general-purpose computing

Biren is counted alongside **Moore Threads, Jingjia Micro, and Iluvatar CoreX** as one of China's "Five Tigers" of AI chip startups, with cumulative funding of **$700M+**.

## Core Specifications

### BR100 (Flagship)

| Parameter | Value |
|------|------|
| **Architecture** | Biren (in-house Biren ISA) |
| **Process** | TSMC 7nm |
| **Design** | **Dual chiplet** (8 compute dies + 4 HBM2e dies) |
| **BF16 Compute** | **1024 TFLOPS** |
| **TF32+ Compute** | 512 TFLOPS |
| **INT8 Compute** | **2048 TOPS** |
| **FP32 Compute** | 256 TFLOPS |
| **HBM** | 64GB HBM2e (4 stacks) |
| **Memory Bandwidth** | **2.3 TB/s** |
| **Inter-Die Bandwidth** | 800 GB/s (BLink interconnect) |
| **TDP** | 300 W |
| **Release** | 2022-08 |
| **Status** | Deployed in the Shanghai Intelligent Computing Center's 10,000-card cluster in 2025 |

### BR104 (General-Purpose Version)

| Parameter | Value |
|------|------|
| **Architecture** | Biren (in-house Biren ISA) |
| **Process** | TSMC 7nm |
| **Design** | Single chiplet |
| **BF16 Compute** | **512 TFLOPS** (about half of the BR100) |
| **TF32+ Compute** | 256 TFLOPS |
| **FP32 Compute** | 128 TFLOPS |
| **INT8 Compute** | **1024 TOPS** |
| **HBM** | **32 GB HBM2e** |
| **Inter-Die Bandwidth** | 256 GB/s (BLink interconnect) |
| **TDP** | **300 W** |
| **Form Factor** | PCIe Gen4 ×16 |
| **Virtualization** | Supports up to 4 secure virtual instances |
| **Release** | 2022-08 |
| **Status** | In mass production |

## BR100 vs BR104 Comparison

| Metric | BR100 | BR104 |
|------|-------|-------|
| **Positioning** | Flagship training | General-purpose inference |
| **Chip Design** | Dual chiplet | Single chiplet |
| **BF16 Compute** | **1024 TFLOPS** | ~512 TFLOPS |
| **INT8 Compute** | 2048 TOPS | ~1024 TOPS |
| **HBM** | 64GB HBM2e | 32GB HBM2e |
| **Inter-Die Bandwidth** | 800 GB/s | 256 GB/s |
| **TDP** | ~400W | 300W |
| **Virtualization** | 8 instances | 4 instances |

## Six Key Features of the Biren Architecture

| Feature | Description |
|------|------|
| **TF32+** | An improved version of NVIDIA TF32 with higher precision |
| **TDA** | Tensor data access accelerator |
| **C-Warp** | CUDA-like Warp parallel scheduling |
| **BLink** | High-speed inter-chip interconnect |
| **Unified HBM Addressing** | Multiple chips share the HBM address space |
| **Secure Virtualization** | Hardware-level multi-tenant isolation |

## Vendor Information

| Parameter | Details |
|------|------|
| **Company** | Biren Technology |
| **Founded** | 2019-09 |
| **Listing** | **2025-01 HKEX** |
| **Headquarters** | Shanghai |
| **Funding** | $700M+ (the Series B set a record for a single financing round in China's semiconductor industry) |
| **Software** | BIRENSUPA (CUDA-like software stack) |
| **Customers** | Shanghai Intelligent Computing Center, Baidu, ByteDance |

## Use Cases

- ✅ **Domestic AI training** (BR100, 10,000-card clusters)
- ✅ **Domestic AI inference** (BR104, 300W low power)
- ✅ **Government/SOE AI projects** (domestic substitution)
- ❌ **CUDA ecosystem lock-in** (migration to BIRENSUPA required)
- ❌ **International markets** (export controls)

## Related Products

- [Huawei Ascend 910C](/docs/cards/huawei/ascend-910c) - Domestic benchmark
- [Huawei Ascend 950](/docs/cards/huawei/ascend-950) - Domestic next generation
- [Cambricon MLU590](/docs/cards/others/cambricon-mlu) - Domestic competitor
- [Moore Threads MTT S5000](/docs/cards/others/moore-threads-mtt-s5000) - Domestic GPU
- [NVIDIA H100](/docs/cards/nvidia/h100) - International benchmark
