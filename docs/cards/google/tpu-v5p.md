---
id: tpu-v5p
title: Google Cloud TPU v5p
sidebar_label: Google TPU v5p
description: Google TPU v5p 详尽规格：459 TFLOPS BF16、95GB HBM、2,575 GB/s 带宽、8,960 芯片 Pod，Google 自研 AI 训练 ASIC。
keywords: [Google TPU v5p, TPU, Gemini 训练, AI 训练 ASIC, 脉动阵列]
---

# Google Cloud TPU v5p

## 产品概述

Google TPU v5p（v5 **P**remium）是 Google 第五代 **Premium TPU**，2023 年发布，专注于大规模 LLM 训练（如 Gemini）。**459 TFLOPS BF16 算力**，**95GB HBM**，单 Pod 规模 **8,960 芯片**。通过 3D Torus + OCS（光路交换机）互联，仅通过 Google Cloud 提供。

## 核心规格

| 项目 | 参数 |
|------|------|
| **架构** | Google TPU v5p（脉动阵列） |
| **制程** | TSMC 5nm |
| **BF16 算力（每芯片）** | 459 TFLOPS |
| **INT8 算力（每芯片）** | 459 TOPS |
| **HBM 容量** | 95 GB |
| **HBM 带宽** | 2,575 GB/s |
| **ICI 互联带宽** | 1,200 GB/s（双向） |
| **DCN 带宽** | 50 Gbps |
| **Pod 规模** | **8,960 芯片**（4×4×4×140 3D Torus） |
| **散热** | 液冷 |
| **提供方式** | 仅 Google Cloud |

## TPU v5p vs v5e vs v4

| 指标 | v4 | v5e | v5p |
|------|----|----|-----|
| BF16 算力 | 275 TFLOPS | 197 TFLOPS | **459 TFLOPS** |
| HBM 容量 | 32 GB | 16 GB | **95 GB** |
| 带宽 | 1,200 GB/s | 400 GB/s | 2,575 GB/s |
| Pod 规模 | 4,096 | 256 | 8,960 |
| 定位 | 训练 | 推理 | 训练 |

## 厂商信息

| 项目 | 内容 |
|------|------|
| **制造商** | Google LLC |
| **官网** | https://cloud.google.com/tpu |
| **产品页** | https://cloud.google.com/tpu/docs/v5p |
| **仅限** | Google Cloud Platform |

## 软件

- **JAX**（推荐）：https://github.com/google/jax
- **PyTorch/XLA**
- **TensorFlow**
- **Pathways**（多主机编排）

## 关键特性

- **脉动阵列（Systolic Array）**：矩阵乘法高效
- **3D Torus 互联 + OCS 光交换机**
- **Pathways 编排**：可扩展到多个 Pod
- **JAX 一等公民**

## 适用场景

- LLM 训练（Gemini、PaLM）
- 推荐系统
- 多模态模型

## 相关产品对比

- [Google TPU v6e (Trillium)](/docs/cards/google/tpu-v6e) - 继任者
- [Google TPU v7 (Ironwood)](/docs/cards/google/tpu-ironwood) - 最新
- [NVIDIA H100](/docs/cards/nvidia/h100) - 同期
