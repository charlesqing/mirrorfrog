---
id: zhonghao-tpu
title: Zhonghao Xinying XuYu TPU (AI Training/Inference)
sidebar_label: Zhonghao Xinying XuYu
description: "Zhonghao Xinying XuYu TPU detailed specs: 896 TFLOPS mixed-precision floating point, 1792 TOPS INT8, 600W, up to 2048 chips all-optical interconnect per supernode, released on 2026-06-30, compatible with PyTorch/vLLM/SGLang."
keywords: [Zhonghao Xinying, XuYu, domestic TPU, self-developed TPU, AI chip, all-optical interconnect, Tianjin Mobile AI Computing Center, 2026]
---

# Zhonghao Xinying XuYu TPU (AI Training/Inference)

## Product Overview

**Zhonghao Xinying** is an emerging Chinese **TPU-architecture AI chip** startup. On **June 30, 2026**, it officially released the **XuYu TPU** (unified training and inference), becoming one of the few companies globally to master TPU architecture after Google. Per official launch figures: **896 TFLOPS mixed-precision floating point, 1792 TOPS INT8, TDP 600W**, with up to **2048 chips connected via all-optical interconnect in a single supernode**; the company claims about 50% lower power consumption than traditional chips at the same compute level. The **Tianjin Mobile TPU AI Computing Center** is already operational, marking the **first benchmark case** of domestic TPU commercialization.

Core design philosophy: Abandon GPU's graphics rendering modules; a pure ASIC design focused on AI computation (fully in-house IP, instruction set, and operator library), delivering significantly better energy efficiency than traditional GPUs at the same process node. The software stack is compatible with **PyTorch / vLLM / SGLang / DeepSpeed / Megatron**.

## Core Specifications

| Item | Parameter |
|------|------|
| **Release** | 2026-06-30 (XuYu official launch) |
| **Architecture** | Self-developed TPU (pure ASIC, no graphics rendering; in-house IP/instruction set/operator library) |
| **Process** | Not disclosed |
| **FP16/BF16 Compute** | **896 TFLOPS** (mixed-precision floating point, official launch figures) |
| **INT8 Compute** | **1792 TOPS** |
| **FP32 Compute** | Not disclosed |
| **TDP** | **600 W** |
| **Interconnect** | All-optical interconnect, up to **2048 chips** per supernode |
| **Software Compatibility** | PyTorch / vLLM / SGLang / DeepSpeed / Megatron |
| **Production Status** | In mass production and delivery |
| **Unit Price** | Not disclosed |

> 📌 **Data correction (2026-09 cross-validation)**: This page previously recorded "INT8 512 TOPS / FP16 256 TFLOPS (estimated) / TDP 400W / released 2026-05" based on early media reports; it has now been updated to the official XuYu launch figures of 2026-06-30: **896 TFLOPS mixed precision, 1792 TOPS INT8, 600W, up to 2048 chips all-optical interconnect per supernode**.

## Efficiency Comparison

| Chip | Power | Compute | Positioning |
|------|------|------|----------|
| **Zhonghao Xinying XuYu TPU** | **600 W** | **896 TFLOPS mixed precision / 1792 TOPS INT8** | Official claim: ~50% lower power than traditional chips at the same compute level |
| NVIDIA H100 | 700 W | 3959 TOPS INT8 | Baseline |
| Cambricon MLU590 | 350 W | 512 TOPS INT8 | Domestic counterpart |

> ℹ️ **Source of the efficiency advantage**: Pure ASIC design with no graphics overhead; a dedicated Matrix Multiplication Unit (MXU) architecture analogous to Google's TPU delivers significantly lower power consumption and cooling costs than GPUs in inference scenarios.

## Commercial Deployment

| Item | Details |
|------|------|
| **First Customer** | Tianjin Mobile |
| **Deployment** | Tianjin Mobile TPU AI Computing Center |
| **Status** | Operational |
| **Industry Significance** | Among the first benchmarks of domestic TPU commercialization |

## Architecture Differences vs GPU

| Dimension | Zhonghao Xinying TPU | Traditional GPU (e.g. H100) |
|------|------------|-------------------|
| Design Philosophy | Pure AI ASIC | General-purpose GPU (graphics+AI) |
| Energy Efficiency | High (no graphics overhead) | Lower |
| Programming Flexibility | Lower (fixed dataflow) | High (CUDA general-purpose computing) |
| Ecosystem Compatibility | Self-developed (no CUDA compatibility; compatible with mainstream framework interfaces) | CUDA ecosystem |
| Use Cases | AI inference + training | General-purpose computing |

## Use Cases

- ✅ AI inference (high-efficiency scenarios)
- ✅ AI computing center construction (domestic compliance)
- ✅ Training of hundred-billion-parameter large models (supernode-scale all-optical interconnect)
- ✅ Low power / low cooling cost scenarios
- ❌ Complex dataflow models (less flexible than GPU)
- ❌ Graphics rendering / general-purpose computing

## Manufacturer Info

| Item | Content |
|------|------|
| **Company** | Zhonghao Xinying (Hangzhou) Technology Co., Ltd. |
| **Positioning** | Emerging domestic TPU-architecture AI chip player |
| **Core Product** | XuYu TPU (released 2026-06-30) |
| **First Customer** | Tianjin Mobile |
| **Launch Date** | June 30, 2026 |
| **Funding** | Multiple rounds |

## Related Products

- [Cambricon MLU590](/en/docs/cards/others/cambricon-mlu) - Leading domestic AI chip
- [Huawei Ascend 910B](/en/docs/cards/huawei/ascend-910b) - Mainstream domestic AI training GPU
- [Moore Threads MTT S5000](/en/docs/cards/others/moore-threads-mtt-s5000) - CUDA-compatible domestic GPU
- [NVIDIA H100](/en/docs/cards/nvidia/h100) - Performance reference baseline
- [Google TPU v7 Ironwood](/en/docs/cards/google/tpu-ironwood) - Google TPU architecture reference
- [Full comparison table](/en/docs/comparison)
