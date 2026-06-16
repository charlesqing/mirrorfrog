---
id: zhonghao-tpu
title: Zhonghao TPU (Domestic AI Chip)
sidebar_label: Zhonghao TPU
description: "Zhonghao TPU detailed specs: 400W/512 TOPS, 1.28 TOPS/W efficiency (2.3x H100), thousand-card cluster, 2026-05 mass production, Tianjin Mobile AI Computing Center."
keywords: [Zhonghao, domestic TPU, AI chip, energy efficiency, Tianjin Mobile]
---

# Zhonghao TPU (Domestic AI Training/Inference)

## Product Overview

**Zhonghao (中昊芯英)** is an emerging Chinese **TPU-architecture AI chip** startup. In May 2026, it officially released its **self-developed TPU chip** and achieved **mass production and delivery**, becoming one of the few companies globally to master TPU architecture after Google. At 400W TDP, it delivers **512 TOPS INT8** compute with an efficiency of **1.28 TOPS/W** (2.3x that of H100). The **Tianjin Mobile TPU AI Computing Center** is already operational, marking the **first benchmark case** of domestic TPU commercialization.

Core design philosophy: Abandon GPU's graphics rendering modules, pure ASIC design focused on AI computation, achieving significantly better energy efficiency than traditional GPUs at the same process node. A thousand-card cluster can support **hundreds-of-billions-parameter large model** computation.

## Core Specifications#

| Item | Parameter |
|------|----------|
| **Architecture** | Self-developed TPU (pure ASIC, no graphics rendering) |
| **Process** | 7nm (estimated) |
| **INT8 Compute** | **512 TOPS** |
| **FP16/BF16 Compute** | 256 TFLOPS (estimated) |
| **FP32 Compute** | 128 TFLOPS (estimated) |
| **TDP** | **400 W** |
| **Efficiency** | **1.28 TOPS/W** |
| **Cluster Scale** | Thousand-card level (scalable) |
| **Supported Model Scale** | Hundreds of billions parameters |
| **Release** | **May 2026** |
| **Production Status** | Mass production delivered |
| **Unit Price** | Not public |

## Efficiency Comparison#

| Chip | TDP | INT8 Compute | Efficiency | vs H100 |
|------|-----|---------------|-------------|----------|
| **Zhonghao TPU** | **400 W** | **512 TOPS** | **1.28 TOPS/W** | **+129%** |
| NVIDIA H100 | 700 W | 3959 TOPS | 0.56 TOPS/W | Baseline |
| Cambrian MLU590 | 350 W | 512 TOPS | 1.46 TOPS/W | +161% |

> ℹ️ **Efficiency advantage**: Pure ASIC design with no graphics overhead, dedicated Matrix Multiplication Unit (MXU) architecture similar to Google TPU, significantly lower power consumption and heat dissipation costs in inference scenarios compared to GPUs.

## Commercial Deployment#

| Item | Details |
|------|---------|
| **First Customer** | Tianjin Mobile |
| **Deployment** | Tianjin Mobile TPU AI Computing Center |
| **Status** | Operational |
| **Industry Significance** | First benchmark of domestic TPU commercialization |

## Architecture Difference vs GPU#

| Dimension | Zhonghao TPU | Traditional GPU (e.g. H100) |
|------------|------------|-----------------------------|
| Design Philosophy | Pure AI ASIC | General-purpose GPU (graphics+AI) |
| Efficiency | High (no graphics overhead) | Lower |
| Programming Flexibility | Lower (fixed dataflow) | High (CUDA general-purpose) |
| Ecosystem Compatibility | Self-developed (no CUDA) | CUDA ecosystem |
| Use Cases | AI inference + training | General-purpose computing |

## Use Cases#

- ✅ AI inference (high-efficiency scenarios)
- ✅ AI computing center construction (domestic compliance)
- ✅ Hundreds-of-billions-parameter model training (thousand-card cluster)
- ✅ Low power / low heat dissipation cost scenarios
- ❌ Complex dataflow models (lower flexibility than GPU)
- ❌ Graphics rendering / general-purpose computing |

## Manufacturer Info#

| Item | Content |
|------|---------|
| **Company** | Zhonghao (杭州) Technology Co., Ltd. |
| **Positioning** | Domestic TPU-architecture AI chip new force |
| **Core Product** | Self-developed TPU chip |
| **Website** | TBD |
| **First Customer** | Tianjin Mobile |
| **First Delivery** | May 2026 |
| **Funding** | Multiple rounds |

## Related Products#

- [Cambricon MLU590](/en/docs/cards/others/cambricon-mlu-590) - Domestic AI chip leader
- [Huawei Ascend 910B](/en/docs/cards/huawei/ascend-910b) - Domestic AI training GPU mainstream
- [Moore Threads MTT S5000](/en/docs/cards/others/moore-threads-mtt-s5000) - CUDA-compatible domestic GPU
- [NVIDIA H100](/en/docs/cards/nvidia/h100) - Performance reference baseline
- [Google TPU v7 Ironwood](/en/docs/cards/google/tpu-ironwood) - Google TPU architecture reference
- [Full comparison table](/en/docs/comparison)
