---
id: ascend-910c
title: Huawei Ascend 910C
sidebar_label: Huawei Ascend 910C
description: Huawei Ascend 910C detailed specifications: dual-chiplet design, 780 BF16 TFLOPS, CloudMatrix 384 system, China's strongest domestic AI chip.
keywords: [Huawei Ascend 910C, Ascend 910C, CloudMatrix 384, domestic AI chip, dual-chiplet]
---

# Huawei Ascend 910C

## Overview

Huawei Ascend 910C entered mass production in **April 2025**, featuring a **dual-chiplet design** packaging two Ascend 910B compute chips together. It delivers **780 BF16 TFLOPS** compute (~60% of H100). In the **CloudMatrix 384** system, 384 Ascend 910C chips form a 16-rack super system with **total BF16 compute exceeding NVIDIA GB200 NVL72**.

## Core Specifications

| Item | Specification |
|------|------|
| **Architecture** | Da Vinci (dual-chiplet) |
| **Process Node** | 7nm-class (includes SMIC domestic production) |
| **Chiplet Count** | 2× (2× Ascend 910B compute chips) |
| **HBM** | 8× HBM2E modules |
| **BF16 Compute** | **780 TFLOPS** (~60% of H100) |
| **Total Memory Capacity** | ~128 GB (dual-chip) |
| **TDP** | ~310 W (dual-chip, ~45% of H100) |

## CloudMatrix 384 System

| Item | Configuration |
|------|------|
| **Chip Count** | 384 Ascend 910C |
| **Rack Count** | 16 (12 compute + 4 network) |
| **Total HBM** | ~49 TB (128GB × 384) |
| **Interconnect** | All-optical mesh, 6,912 LPO optical modules |
| **Total BF16 Compute** | ~300 PFLOPS (system-level) |

## Vendor Information

| Item | Details |
|------|------|
| **Manufacturer** | Huawei Technologies Co., Ltd. |
| **Official Website** | https://www.hiascend.com |
| **CANN** | https://www.hiascend.com/en/software/cann |
| **MindSpore** | https://www.mindspore.cn |
| **2025 Plan** | 800,000 units shipped |

## Key Features

- **Dual-chiplet design**: 7nm process stacking
- **No central I/O die**: 2 compute chips directly packaged
- **HBM2E × 8**: Supplied by Samsung
- **Export control circumvention** through CoAsia, Faraday, and other intermediaries

## DeepSeek Performance Reference

- DeepSeek tested Ascend 910C inference speed at **60%** of H100 (BF16)
- Does not support FP8 (NVIDIA Blackwell has a 2× advantage)
- Primarily applicable to the **China market**

## Use Cases

- China market LLM training and inference
- Large-model inference deployment
- Government and state-owned enterprise AI projects
- Domestic substitution

## Related Products

- [Huawei Ascend 910B](/docs/cards/huawei/ascend-910b) - Previous generation
- [Huawei Ascend 910D](/docs/cards/huawei/ascend-910d) - Next generation
- [NVIDIA H100](/docs/cards/nvidia/h100) - 60% performance comparison
- [NVIDIA B200](/docs/cards/nvidia/b200) - CloudMatrix vs NVL72
