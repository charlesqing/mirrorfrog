---
id: tpu-v4
title: Google TPU v4 (历代旗舰)
sidebar_label: TPU v4
description: Google TPU v4 详尽规格：32GB HBM、2D 环形互联、4096 颗 Pod、2021-2023 旗舰训练 TPU。
keywords: [Google TPU v4, TPU v4 Pod, 2D torus, 32GB HBM, 4096 chips, AI 训练]
---

# Google TPU v4

## 产品概述

**Google TPU v4** 于 **2021-05 Google I/O** 发布，是 TPU v3 之后的旗舰训练芯片。**2D 环形拓扑**（2D torus）连接，单 Pod **4,096 颗芯片**，单 Pod 算力 **1 ExaFLOPS BF16**。

**2023-04 Google 公布 TPU v4 性能论文**称其在 **BF16 吞吐上比 NVIDIA A100 强 1.2-1.7×，能效比高 1.3-1.8×**（引发与 NVIDIA 论战）。

## 核心规格

| 项目 | 参数 |
|------|------|
| **架构** | TPU v4（4 代） |
| **制程** | TSMC 7nm |
| **Matrix Multiply Unit (MXU)** | 4× 128×128（每周期） |
| **HBM** | 32 GB HBM2 |
| **HBM 带宽** | 1.2 TB/s |
| **BF16 算力（密集）** | 275 TFLOPS |
| **INT8 算力** | 275 TOPS |
| **SparseCore** | 第二代（嵌入加速） |
| **TDP** | 170 W |
| **形态** | 4 芯片板卡（v4 board） |
| **互联** | **2D Torus, ICI 800 GB/s** |
| **Pod 规模** | **4,096 chips** |
| **Pod BF16 算力** | **1.1 ExaFLOPS** |

## Pod 架构

- 单板 = 4 颗 TPU v4
- 单 Pod = **4,096 颗 TPU v4**（8,192 board = 32×32 2D torus）
- 4×4 立方体 = 256 chips 中等规模
- 单芯片 ICI 带宽 = 800 GB/s（芯片间互连）
- 训练超大模型（PaLM 540B）使用 2 个 Pod

## 性能对比（BF16 训练）

| 指标 | TPU v4 单芯片 | A100 80GB SXM | H100 SXM |
|------|---------------|---------------|----------|
| BF16 算力 | 275 TFLOPS | 312 TFLOPS | 989 TFLOPS |
| 内存 | 32GB HBM2 | 80GB HBM2e | 80GB HBM3 |
| 带宽 | 1.2 TB/s | 2 TB/s | 3.35 TB/s |
| 互联 | ICI 2D Torus | NVLink 600 GB/s | NVLink 900 GB/s |
| 训练大模型 | 优势 | 持平 | 优势 |

Google 论文数据：TPU v4 Pod 4,096 chips 训练 GPT-3 175B 速度比同等规模 A100 Pod **快 1.7×**（能耗 -1.3×）。

## 软件生态

- **JAX**（Google 推荐框架）
- **TensorFlow**（原生支持）
- **PyTorch/XLA**（官方后端）
- **TPU VM**（v4 专用运行时）
- **Pathways**（异构 TPU 调度）

## 适用场景

- ✅ **超大模型训练**（PaLM、GPT-3 类）
- ✅ Google Cloud TPU 客户
- ✅ 推荐系统（DLRM）
- ❌ 自有数据中心（仅 Google Cloud 访问）
- ❌ 低延迟推理（应用 v5e）

## 厂商信息

| 项目 | 内容 |
|------|------|
| **厂商** | Google |
| **访问** | Google Cloud TPU v4 Pod |
| **价格** | ~$3.22/小时（chip） |
| **目标市场** | Google Cloud 大模型训练 |

## 相关卡

- [Google TPU v5p](/docs/cards/google/tpu-v5p) - 下一代训练 TPU
- [Google TPU v6e](/docs/cards/google/tpu-v6e) - 推理训练 fungible
- [Google TPU v7 Ironwood](/docs/cards/google/tpu-ironwood) - 推理时代旗舰
- [Intel Gaudi 1](/docs/cards/intel/gaudi-1) - 同代训练卡
