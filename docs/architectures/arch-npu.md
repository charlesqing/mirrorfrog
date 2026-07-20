---
id: arch-npu
title: NPU (Neural Processing Unit) 神经处理单元
sidebar_label: NPU
description: NPU 架构详解：华为昇腾、Intel Gaudi、Hailo 等专用神经处理单元，涵盖数据中心与边缘场景。
keywords: [NPU, Neural Processing Unit, Huawei Ascend, Intel Gaudi, Hailo, Apple Neural Engine, 神经处理]
---

# NPU (Neural Processing Unit) 架构

## 什么是 NPU

**NPU（Neural Processing Unit）** 是**专为神经网络推理**设计的处理器，**广义上**包括所有"非 GPU、非 CPU"的 AI 加速器。**狭义上**特指**端侧 / 边缘**低功耗 AI 芯片（区别于数据中心的 ASIC/WSE/LPU）。

**典型 NPU**：Huawei Ascend、Intel Gaudi、Hailo、Apple Neural Engine（SoC 集成）。

## NPU vs GPU vs TPU

| 维度 | NPU | GPU | TPU |
|------|-----|-----|-----|
| 主要定位 | 推理（部分训练） | 训练 + 推理 | 训练 + 推理 |
| 部署场景 | **边缘 / 端侧 / 数据中心** | 数据中心 / 工作站 | 仅 Google Cloud |
| 功耗 | **< 100W** | 100-1000W | 100-700W |
| 生态 | **分散（厂商 SDK）** | CUDA 成熟 | JAX/TF |
| 通用性 | 中 | **强** | 中 |
| 编程 | 厂商 SDK | CUDA | XLA |

## 主要 NPU 厂商

### Huawei 昇腾（达芬奇架构）
- **Ascend 910B / 910C / 910D**：数据中心训练 + 推理
- **Ascend 310**：边缘推理（10-22W）
- **MindSpore** 生态
- 中国市场主导

### Intel Gaudi（Habana Labs）
- **Gaudi 1 / 2 / 3**：数据中心训练 + 推理
- **SynapseAI SDK**
- 性价比路线

### Hailo
- **Hailo-8 / 8L / 15**：边缘视觉 AI 推理
- **Dataflow Architecture**（类 WSE）
- **< 10W** 超低功耗

### Apple Neural Engine
- **集成于 M-Series / A-Series SoC**
- **16-76 TOPS**（按 SoC 代际）
- 端侧 Apple Intelligence

### 端侧 NPU（PC 集成）
- **Intel Meteor Lake / Lunar Lake / Arrow Lake-H / Panther Lake**
- **AMD Ryzen AI (XDNA)**（基于 Xilinx）
- **Qualcomm Hexagon NPU**（Snapdragon X Elite）
- **Apple M-Series** ANE

## 主流 NPU 规格对比

| NPU | 算力 | TDP | 内存 | 部署 |
|-----|------|-----|------|------|
| **Huawei Ascend 910C** | 780 TFLOPS BF16 | 310W | 128GB HBM2e | 数据中心 |
| **Huawei Ascend 310P** | 22 TOPS INT8 | 8W | 24GB LPDDR4X | 边缘 |
| **Intel Gaudi 3** | 1,835 TFLOPS BF16 | 900W | 128GB HBM2e | 数据中心 |
| **Hailo-8** | 26 TOPS | 2.5W | 4GB | 边缘 |
| **Apple M4 ANE** | 38 TOPS | 集成 | 共享 UMA | 端侧 |
| **Qualcomm Hexagon NPU** | 45 TOPS | 集成 | 共享 | 端侧 PC |

## NPU 适用场景

- ✅ **边缘 / 端侧 AI 推理**（低功耗、永远在线）
- ✅ 数据中心定制 AI 加速（华为、Intel）
- ✅ 大模型推理优化（特定模型）
- ✅ 端侧 GenAI（Apple Intelligence、Copilot+ PC）
- ❌ 通用 AI 训练（应使用 GPU / TPU）
- ❌ 大模型训练（H100/B200 更优）

## 详细产品页

### Huawei Ascend（达芬奇架构）
- [Huawei Ascend 910B](/docs/cards/huawei/ascend-910b) - 2022, 7nm 64 核达芬奇 320 TFLOPS BF16
- [Huawei Ascend 910C](/docs/cards/huawei/ascend-910c) - 2023-Q4, 双 chiplet 128GB HBM2e 780 TFLOPS BF16
- [Huawei Ascend 910D](/docs/cards/huawei/ascend-910d) - 2024-H2, 国产 6nm SMIC + 国产 HBM
- [Huawei Ascend 920](/docs/cards/huawei/ascend-920) - 2025-H2, 6nm SMIC 192GB HBM2e 4 Tbps 国产最高 900+ BF16 TFLOPS = 3× H20

### Intel Gaudi（Habana Labs）
- [Intel Gaudi 1](/docs/cards/intel/gaudi-1) - 2020 第一代
- [Intel Gaudi 2](/docs/cards/intel/gaudi-2) - 2022 第二代, 24 核 Tensor 处理器 432 GB/s
- [Intel Gaudi 3](/docs/cards/intel/gaudi-3) - 2024 第三代, 128GB HBM2e 1835 BF16 TFLOPS
- [Intel Gaudi 4](/docs/cards/intel/gaudi-4) - 2026-Q2 推测 3nm 192GB HBM3E 3.7 PF FP8 18A 24× 200GbE RoCE

### Intel Core Ultra（端侧 PC NPU）
- [Intel Core Ultra 2 (Lunar Lake)](/docs/cards/intel/core-ultra-2) - Foveros 3D NPU 4.0 48 TOPS Xe2 GPU 60+ TOPS

### Qualcomm（端侧 PC + 移动 NPU）
- [Qualcomm Snapdragon X Elite](/docs/cards/others/qualcomm-snapdragon-x-elite) - 12 核 Oryon @ 4.2 GHz, Hexagon 45 TOPS, 75 TOPS AI Copilot+ PC
- [Qualcomm AI 200 / AI 300](/docs/cards/others/qualcomm-ai-200) - 5nm Hexagon NPU + Oryon CPU Cloud 推理

### MediaTek（移动 NPU）
- [MediaTek Dimensity 9400](/docs/cards/others/mediatek-dimensity-9400) - 3nm N3E, Cortex-X925, NPU 890 第八代, **全球首款 Agentic AI 引擎**, 端侧 LoRA 训练

### Apple（端侧 ANE）
- [Apple A17 Pro](/docs/cards/others/apple-a17-pro) - **全球首款 3nm 芯片**, 35 TOPS NE
- [Apple A18](/docs/cards/others/apple-a18) - iPhone 16 入门 5 核 GPU 35 TOPS NE 硬件光追
- [Apple A18 Pro](/docs/cards/others/apple-a18-pro) - iPhone 16 Pro 35 TOPS NE Apple Intelligence
- [Apple A19](/docs/cards/others/apple-a19) - iPhone 17 入门 5 核 GPU 8GB $799
- [Apple A19 Pro](/docs/cards/others/apple-a19-pro) - iPhone 17 Pro 3nm N3P, GPU Neural Accelerators 4× A18 Pro
- [Apple M1 Pro](/docs/cards/others/apple-m1-pro) - MacBook Pro 2021 10 核 CPU 200 GB/s
- [Apple M1 Max](/docs/cards/others/apple-m1-max) - MacBook Pro 2021 32 核 GPU 400 GB/s 64GB UMA
- [Apple M2 Max](/docs/cards/others/apple-m2-max) - 96GB UMA 400 GB/s
- [Apple M3 Max](/docs/cards/others/apple-m3-max) - 128GB LPDDR5 400 GB/s 18 TOPS NE
- [Apple M4 Max](/docs/cards/others/apple-m4-max) - 128GB LPDDR5X 546 GB/s 38 TOPS NE
- [Apple M-Series 总览](/docs/cards/others/apple-m-series) - M1/M2/M3/M4/M5 全对比

### 韩国 AI 三剑客（数据中心 + 边缘 NPU）
- [Rebellions RDU](/docs/cards/others/rebellions-rbln) - 2024-Q2 5nm 16 INT8 TOPS 15-30W 韩国
- [Mobilint Regulus](/docs/cards/others/mobilint) - 2023-Q2 5nm 32 INT8 TOPS 12W 韩国
- [FuriosaAI RNGD](/docs/cards/others/furiosaai-rngd) - 2024-Q3 5nm 512GB HBM3 200K tok/s 韩国 450W

### 国产 AI 创业（数据中心 NPU）
- [Cambricon MLU 370](/docs/cards/others/cambricon-mlu-370) - 2021-Q4 7nm 96 INT8 TOPS 35W (EOL 2023)
- [Cambricon MLU 590](/docs/cards/others/cambricon-mlu) - 7nm 96GB HBM2 256 INT8 TOPS 250W 科创板
- [Cambricon MLU 690](/docs/cards/cambricon/mlu-690) - 2025-2026 推测 5nm 192GB HBM3E 2 PF FP8

### 边缘 NPU
- [Hailo-15](/docs/cards/others/hailo-15) - 2024-Q4 7-20 TOPS AI-ISP Gen3 视觉 AI
- [Hailo-8](/docs/cards/others/hailo) - 2019, 26 TOPS 2.5W 边缘长青树

## 相关架构

- [GPU](/docs/architectures/arch-gpu) - 通用 AI
- [TPU](/docs/architectures/arch-tpu) - 数据中心专用
- [ASIC](/docs/architectures/arch-asic) - 推理优化
- [Neuromorphic](/docs/architectures/arch-neuromorphic) - 神经形态
- [完整对比表](/docs/comparison)
