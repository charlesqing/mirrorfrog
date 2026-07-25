---
id: tpu-ironwood
title: Google Cloud TPU v7 (Ironwood)
sidebar_label: Google TPU v7 Ironwood
description: Google TPU v7 Ironwood 是第七代 TPU：2,307 TFLOPS BF16、192GB HBM、7,380 GB/s 带宽，专为推理时代设计。
keywords: [Google TPU Ironwood, TPU v7, 第七代 TPU, AI 推理 TPU, Gemini 3]
---

# Google Cloud TPU v7 (Ironwood)

## 产品概述

Google TPU v7（代号 **Ironwood**）是 2025 Hot Chips 大会上发布的第七代 TPU，**Google 首款推理专用 TPU** 架构。BF16 算力 **2,307 TFLOPS**（每芯片），HBM 容量 **192GB**（与 NVIDIA H200 / MI300X 同级），带宽 **7,380 GB/s**。配备 **128 MB 片上 SRAM** 和 4× SparseCore，为超长上下文推理和 MoE 模型优化。

## 核心规格

| 项目 | 参数 |
| **发布** | 2025 年 |
|------|------|
| **架构** | TPU v7（Ironwood） |
| **BF16 算力（每芯片）** | **2,307 TFLOPS** |
| **FP8 算力（每芯片）** | **4,614 TFLOPS** |
| **HBM 容量** | **192 GB** |
| **HBM 带宽** | **7,380 GB/s** |
| **ICI 互联带宽** | 1,200 GB/s（双向） |
| **DCN 带宽** | 100 Gbps |
| **TensorCores** | 2/芯片 |
| **SparseCores** | 4/芯片 |
| **Pod 规模** | **9,216 芯片** |
 | **TDP** | 600 W |
| **拓扑** | 3D Torus |
| **片上 SRAM** | **128 MB** |
| **宣布时间** | 2025 Hot Chips（推理专用首发） |
| **云服务开放** | 2026 年（Google Cloud） |

## 历代 TPU 对比

| 指标 | v4 | v5p | v6e (Trillium) | v7 (Ironwood) |
|------|----|----|----------------|----------------|
| BF16 算力 | 275 TFLOPS | 459 TFLOPS | 918 TFLOPS | **2,307 TFLOPS** |
| FP8 算力 | N/A | 459 TFLOPS | 918 TFLOPS | **4,614 TFLOPS** |
| HBM 容量 | 32 GB | 95 GB | 32 GB | **192 GB** |
| HBM 带宽 | 1,200 GB/s | 2,575 GB/s | 1,638 GB/s | **7,380 GB/s** |
| Pod 规模 | 4,096 | 8,960 | 256 | **9,216** |

## Ironwood vs H200 / MI300X

| 指标 | TPU v7 | H200 | MI300X |
|------|--------|------|--------|
| 显存 | 192 GB | 141 GB | 192 GB |
| 带宽 | 7,380 GB/s | 4,800 GB/s | 5,300 GB/s |
| FP8 算力 | 4,614 TFLOPS | 3,958 TFLOPS | 2,614 TFLOPS |

**关键优势**：TPU v7 在显存带宽和 FP8 算力上领先。

## 厂商信息

| 项目 | 内容 |
|------|------|
| **制造商** | Google LLC |
| **官网** | https://cloud.google.com/tpu |
| **产品页** | https://cloud.google.com/tpu/docs/tpu7x |

| **提供方式** | 仅 Google Cloud |

## 关键特性

- **推理优先**：Google 首款推理专用 TPU 架构
- **超大内存容量**：192GB 可加载 70B+ 模型单芯片
- **128 MB 片上 SRAM**：加速超长上下文 KV Cache
- **FP8 双倍 BF16**：现代推理算力
- **3D Torus 9,216 芯片 Pod**

## 适用场景

- LLM 推理（Gemini 3 / 4）
- 大规模 MoE 模型
- 多模态 AI 推理
- 嵌入密集型应用

## 相关产品对比

- [Google TPU v6e (Trillium)](/docs/cards/google/tpu-v6e) - 上一代
- [Google TPU v5p](/docs/cards/google/tpu-v5p) - 前旗舰
- [NVIDIA H200](/docs/cards/nvidia/h200) - 直接竞品
- [AMD MI300X](/docs/cards/amd/mi300x) - 同显存
