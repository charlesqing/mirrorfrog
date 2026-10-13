---
id: tpu-ironwood
title: Google Cloud TPU v7 (Ironwood)
sidebar_label: Google TPU v7 Ironwood
description: Google TPU7x (Ironwood) 是第七代 TPU：BF16 2,307 TFLOPS、FP8 4,614 TFLOPS、192GB HBM、7,380 GB/s 带宽、ICI 1,200 GB/s，双芯粒设计、9,216 芯片 Pod。
keywords: [Google TPU Ironwood, TPU7x, TPU v7, 第七代 TPU, 双芯粒 TPU, MoE 训练]
---

# Google Cloud TPU v7 (Ironwood)

## 产品概述

Google TPU v7（代号 **Ironwood**，产品名 **TPU7x**）是 2025 年 4 月发布的第七代 TPU，是**首个 Ironwood 家族成员**，面向**大规模训练与推理**（稠密模型与 MoE 模型、预训练、采样与解码密集型推理）。BF16 算力 **2,307 TFLOPS**、FP8 算力 **4,614 TFLOPS**（每芯片），HBM 容量 **192GB**，带宽 **7,380 GB/s**。采用**双芯粒（dual-chiplet）设计**，每芯片含 2 个 TensorCore 与 4 个 SparseCore，配备 **128 MB 片上 SRAM**。

## 核心规格

| 项目 | 参数 |
|------|------|
| **发布** | 2025 年 4 月（GA 于 2025 年 11 月） |
| **架构** | TPU v7（Ironwood），双芯粒设计 |
| **FP16 算力** | **2,307 TFLOPS**（BF16） |
| **FP8** | **4,614 TFLOPS** |
| **显存** | **192 GB** HBM |
| **显存带宽** | **7,380 GB/s** |
| **互联** | ICI 双向 **1,200 GB/s**，DCN 100 Gbps |
| **TensorCores** | 2/芯片 |
| **SparseCores** | 4/芯片 |
| **Pod 规模** | **9,216 芯片** |
| **TDP** | 未公布 |
| **拓扑** | 3D Torus |
| **片上 SRAM** | **128 MB** |
| **提供方式** | 仅 Google Cloud（tpu7x-standard-4t） |

> **算力口径**：BF16 与 FP8 均为 **dense峰值**，非稀疏口径。Google 官方文档未公布 Ironwood 单芯片 TDP。

## 历代 TPU 对比

| 指标 | v4 | v5p | v6e (Trillium) | v7 (Ironwood) |
|------|----|----|----------------|----------------|
| BF16 算力 | 275 TFLOPS | 459 TFLOPS | 918 TFLOPS | **2,307 TFLOPS** |
| FP8 算力 | N/A | 459 TFLOPS | 918 TFLOPS | **4,614 TFLOPS** |
| HBM 容量 | 32 GB | 95 GB | 32 GB | **192 GB** |
| HBM 带宽 | 1,200 GB/s | 2,765 GB/s | 1,638 GB/s | **7,380 GB/s** |
| ICI 带宽 | 600 GB/s | 1,200 GB/s | 800 GB/s | **1,200 GB/s** |
| Pod 规模 | 4,096 | 8,960 | 256 | **9,216** |

## Ironwood vs H200 / MI300X

| 指标 | TPU v7 | H200 | MI300X |
|------|--------|------|--------|
| 显存 | 192 GB | 141 GB | 192 GB |
| 带宽 | 7,380 GB/s | 4,800 GB/s | 5,300 GB/s |
| FP8 算力 | 4,614 TFLOPS | 3,958 TFLOPS（稀疏） | 2,614 TFLOPS |

**关键优势**：TPU v7 在显存带宽和 FP8 算力上领先。注：TPU 为dense 口径，H200 为稀疏口径。

## 厂商信息

| 项目 | 内容 |
|------|------|
| **制造商** | Google LLC |
| **官网** | https://cloud.google.com/tpu |
| **产品页** | https://cloud.google.com/tpu/docs/tpu7x |

## 数据来源

- [Google Cloud 官方文档：TPU7x (Ironwood)](https://cloud.google.com/tpu/docs/tpu7x) — 单芯片 BF16 2,307 TFLOPS、FP8 4,614 TFLOPS、192 GB HBM、7,380 GB/s、ICI 1,200 GB/s、Pod 9,216 芯片、双芯粒架构
- [Google Cloud Compute Engine：TPU 机器家族](https://docs.cloud.google.com/docs/compute-area/tpus) — 各代 TPU 峰值算力与互联带宽官方对照表
- [Google Cloud 官方文档：加速器优化机器家族](https://cloud.google.com/compute/docs/tpus/tpu-machines) — tpu7x-standard-4t 机型配置

## 关键特性

- **训练与推理兼顾**：面向稠密与 MoE 大规模模型
- **双芯粒架构**：每芯片两个 chiplet，各含 1 个 TensorCore 与 2 个 SparseCore，各带96 GB HBM
- **超大内存容量**：192 GB HBM，接近 H200 / MI300X 同级
- **128 MB 片上 SRAM**：加速超长上下文 KV Cache
- **FP8 双倍 BF16**：现代推理算力
- **3D Torus 9,216 芯片 Pod**

## 适用场景

- LLM 预训练与大规模微调
- 大规模 MoE 模型训练与推理
- 多模态 AI 推理
- 嵌入密集型应用与推荐系统

## 相关产品对比

- [Google TPU v6e (Trillium)](/docs/cards/google/tpu-v6e) - 上一代
- [Google TPU v5p](/docs/cards/google/tpu-v5p) - 前旗舰
- [NVIDIA H200](/docs/cards/nvidia/h200) - 直接竞品
- [AMD MI300X](/docs/cards/amd/mi300x) - 同显存
