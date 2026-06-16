---
id: tpu-v6e
title: Google Cloud TPU v6e (Trillium)
sidebar_label: Google TPU v6e Trillium
description: Google TPU v6e Trillium 详尽规格：918 TFLOPS BF16、32GB HBM、4.7× v5e 性能、4.7× 峰值算力，第六代 TPU。
keywords: [Google TPU v6e, Trillium, 第六代 TPU, Gemini 2 训练, AI 训练 ASIC]
---

# Google Cloud TPU v6e (Trillium)

## 产品概述

Google TPU v6e（代号 **Trillium**）于 2024 年 12 月 GA（General Availability），是 Google 第六代 TPU。**4.7× v5e 峰值算力**，BF16 算力 **918 TFLOPS**，HBM 容量和 ICI 带宽翻倍。**用于训练 Gemini 2.0**。Trillium 是 Google Cloud AI Hypercomputer 架构的核心组件，可扩展到 **100,000+ 芯片**通过 Jupiter 网络。

## 核心规格

| 项目 | 参数 |
| **发布** | 2024 年 12 月 GA |
|------|------|
| **架构** | TPU v6e（Trillium） |
| **BF16 算力** | **918 TFLOPS**（4.7× v5e） |
| **INT8 算力** | 1,836 TOPS |
| **HBM 容量** | 32 GB（2× v5e） |
| **HBM 带宽** | 1,638 GB/s |
| **ICI 互联带宽** | 800 GB/s（双向） |
| **ICI 端口** | 4 |
| **DCN 带宽** | 100 Gbps（2× v5e） |
| **Pod 规模** | 256 芯片（2D Torus） |
| **vCPU（4 芯片 VM）** | 180 |
| **DRAM（4 芯片 VM）** | 720 GB |
| **提供方式** | 仅 Google Cloud |
| **TDP** | 200 W |

## Trillium vs v5p 对比

| 指标 | v5p | v6e (Trillium) | 变化 |
|------|-----|----------------|------|
| BF16 算力 | 459 TFLOPS | **918 TFLOPS** | 2× |
| HBM 容量 | 95 GB | 32 GB | 1/3 |
| HBM 带宽 | 2,575 GB/s | 1,638 GB/s | 0.64× |
| Pod 规模 | 8,960 | 256 | 较小 |
| 互联 | 3D Torus | 2D Torus | 简化 |
| 能效 | 1× | **+67%** | 提升 |

**说明**：Trillium 更适合中规模训练和推理，v5p 适合超大规模。

## 厂商信息

| 项目 | 内容 |
|------|------|
| **制造商** | Google LLC |
| **官网** | https://cloud.google.com/tpu |
| **产品页** | https://cloud.google.com/tpu/docs/v6e |

| **训练过** | Gemini 2.0 |

## 关键特性

- **SparseCore 第三代**：嵌入密集型模型 2× 性能
- **训练/推理 fungible**：同一配额用于训练和推理
- **Multislice**：可扩展到 100,000+ 芯片
- **多主机推理**：70B+ 模型支持
- **XLA 编译器优化**：JAX/PyTorch/TF 一等公民

## 适用场景

- LLM 训练（Gemini 2.0、PaLM）
- LLM 推理
- 多模态模型
- 嵌入密集型模型（DLRM）
- 扩散模型推理

## 相关产品对比

- [Google TPU v5p](/docs/cards/google/tpu-v5p) - 上一代
- [Google TPU v7 Ironwood](/docs/cards/google/tpu-ironwood) - 最新
- [NVIDIA H100](/docs/cards/nvidia/h100) - 同期
