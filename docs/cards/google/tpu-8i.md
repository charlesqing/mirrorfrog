---
id: tpu-8i
title: Google Cloud TPU 8i (Trillium 2 Inference)
sidebar_label: Google TPU 8i
description: Google TPU 8i 推理专用 ASIC：288GB HBM、8,601 GB/s 带宽、~5,500 TFLOPS BF16，专为超低延迟推理设计，2026-04-22 公布。
keywords: [Google TPU 8i, Trillium 2, inference TPU, 288GB HBM, 8601 GB/s, ultra-low latency, 2026]
---

# Google Cloud TPU 8i (Trillium 2 / 推理专用)

## 产品概述

**Google TPU 8i**（代号 **Trillium 2 推理版**）是 2026-04-22 公布的**最新一代推理专用 TPU**，与同期公布的 TPU 8t 训练专用形成 **8t + 8i 拆分架构**。配备 **288GB HBM**（比 TPU v7 Ironwood 多 50%）、**8,601 GB/s 带宽**、**~5,500 TFLOPS BF16** 算力（密集）。

TPU 8i 是 Google **"AI 推理时代"战略**的核心 —— Gemini API、Vertex AI 推理、Anthropic Claude on Vertex、Gemini 3 / 4 的在线服务**全部基于 TPU 8i**。

## 核心规格

| 项目 | 参数 |
|------|------|
| **架构** | TPU 8i（Trillium 2） |
| **形态** | **推理专用**（区别于 8t 训练专用） |
| **BF16 算力（密集）** | **~5,500 TFLOPS** |
| **FP8 算力（密集）** | ~11,000 TFLOPS |
| **INT8 算力** | ~22,000 TOPS |
| **HBM 容量** | **288 GB** |
| **HBM 带宽** | **8,601 GB/s** |
| **ICI 互联** | 1,200 GB/s |
| **DCN 带宽** | 200 Gbps |
| **Pod 规模** | 单芯片 ~ 256 颗 |
| **散热** | **风冷 / 液冷均可** |
| **首发** | **2026-04-22 公布** |

> 📌 **8i 命名**：TPU 8 代 + **i = inference（推理）**。**8i 是当前最大显存的推理 ASIC**，单卡 288GB 可装 70B 模型（FP16）。

## TPU 8i vs TPU v7 Ironwood（推理对比）

| 指标 | TPU v7 Ironwood | **TPU 8i** | 提升 |
|------|-----------------|------------|------|
| 形态 | 训练 + 推理通用 | **推理专用** | 形态拆分 |
| BF16 算力 | 2,307 TFLOPS | **~5,500 TFLOPS** | 2.4× |
| FP8 算力 | 4,614 TFLOPS | ~11,000 TFLOPS | 2.4× |
| HBM 容量 | 192 GB | **288 GB** | 1.5× |
| HBM 带宽 | 7,380 GB/s | **8,601 GB/s** | 1.17× |
| 散热 | 液冷为主 | **风冷/液冷均可** | 灵活 |
| 发布时间 | 2025-11 | **2026-04-22** | — |

> 💡 **TPU 8i 算力比 Ironwood 提升 2.4×**：8,601 GB/s 带宽 + 288GB HBM 让 TPU 8i 在**长上下文推理、超大模型推理**场景中**单卡可装**70B+ 模型。

## TPU 8i 推理范式优化

| 优化方向 | 内容 |
|----------|------|
| **超低延迟** | **TTFT < 100ms**（首 Token 延迟） |
| **高吞吐** | 10,000+ tok/s（70B 模型 FP8） |
| **Long-context KV** | **288GB 完整保留 1M+ token 上下文** |
| **MoE 推理** | Expert Parallel 原生支持 |
| **Speculative Decoding** | 内部 speculative 加速 |
| **Batching** | Continuous batching + PagedAttention |
| **Continuous KV Cache** | **KV Cache 跨请求共享**（同 prefix 优化） |

## TPU 8i vs TPU 8t（同期拆分）

| 指标 | TPU 8t（训练） | **TPU 8i（推理）** |
|------|----------------|---------------------|
| 定位 | 训练 | **推理** |
| BF16 算力 | ~3,500 TFLOPS | **~5,500 TFLOPS**（更强） |
| HBM 容量 | 216 GB | **288 GB**（更大） |
| HBM 带宽 | 6,528 GB/s | **8,601 GB/s**（更高） |
| 散热 | 液冷 | **风冷/液冷** |
| Pod 规模 | 9,216 颗 | 256 颗 |
| 集成 CPU | Arm Axion | 无（独立） |

> 💡 **拆分目的**：训练强调算力 + 互联，推理强调显存 + 带宽 + 散热灵活性。**8t 液冷 + 大 pod，8i 风冷 + 小 pod + 超大显存**。

## 部署推荐配置

| 场景 | 推荐配置 |
|------|----------|
| **Gemini API 在线服务** | TPU 8i pod（百万级 QPS） |
| **Claude on Vertex AI** | TPU 8i 单芯片 / 4 芯片节点 |
| **Llama 4 70B 推理** | TPU 8i 单卡（**288GB 装 FP16 70B**） |
| **长上下文 RAG** | TPU 8i（**1M+ token KV Cache**） |
| **Edge / 离线推理** | TPU 8i 风冷版（无需液冷机房） |

## 软件生态

- **JAX 0.5+**：推理
- **PyTorch/XLA 2.5+**：推理
- **vLLM 0.8+**（TPU 后端）：低延迟推理
- **Vertex AI Inference**：Google 托管推理服务
- **Gemini API**：内部最大用户

## 价格（推测）

| 实例 | 每小时价格 | 备注 |
|------|------------|------|
| **TPU 8i v6e-equivalent** | ~$3-5 / chip | 推测 |
| **TPU v7 Ironwood** | ~$6-8 / chip | 当前主力 |
| **TPU 8i vs TPU v7** | **+50%** 价格 / **+150%** 算力 | 性价比更高 |

> **TPU 8i 单美元 BF16 算力比 TPU v7 Ironwood 高 70%**（按 2.4× 算力 / 1.5× 价格）。

## 适用场景

- ✅ **Frontier 模型推理**（Gemini 3/4、Claude Opus 4.5）
- ✅ **超低延迟在线服务**（TTFT < 100ms）
- ✅ **长上下文 RAG / Agent**（1M+ token 推理）
- ✅ **高吞吐离线推理**（10,000+ tok/s）
- ✅ **风冷部署**（无需液冷机房）
- ❌ 训练场景（**应用 TPU 8t** 而非 8i）

## 厂商信息

| 项目 | 内容 |
|------|------|
| **厂商** | Google Cloud |
| **首次公布** | **2026-04-22**（Google Cloud Next 2026） |
| **产品页** | https://cloud.google.com/tpu |
| **云端部署** | 仅 Google Cloud（Vertex AI / Gemini API） |
| **代号** | Trillium 2（推理版） |

## 相关产品

- [Google TPU 8t](/docs/cards/google/tpu-8t) - **同期训练专用 TPU**
- [Google TPU v7 Ironwood](/docs/cards/google/tpu-ironwood) - 上一代 TPU
- [NVIDIA B300 Ultra](/docs/cards/nvidia/b300-ultra) - 同代推理 GPU
- [AWS Inferentia 2](/docs/cards/aws/inferentia-2) - 推理 ASIC 对标
- [Groq LPU](/docs/cards/others/groq-lpu) - 推理延迟对标
- [完整对比表](/docs/comparison)
