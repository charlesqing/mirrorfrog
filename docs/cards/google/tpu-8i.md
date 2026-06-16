---
id: tpu-8i
title: Google Cloud TPU 8i (推理专用)
sidebar_label: Google TPU 8i
description: Google TPU 8i 推理专用 ASIC：TSMC 2nm、双张量核心 + CAE、384MB SRAM、1,152 芯片 Pod、11.6 EFLOPS FP8、MediaTek 合作、2026-04-22 Cloud Next '26 公布。
keywords: [Google TPU 8i, Trillium 2, 推理 TPU, TSMC 2nm, 384MB SRAM, 1152芯片Pod, 11.6 EFLOPS FP8, MediaTek, CAE, Cloud Next 2026]
---

# Google Cloud TPU 8i (推理专用)

## 产品概述

**Google TPU 8i** 是 2026-04-22 **Google Cloud Next '26** 公布的**最新一代推理专用 TPU**，与同期公布的 TPU 8t 训练专用形成 **8t + 8i 拆分架构**。采用 **TSMC 2nm** 制程，**双张量核心 + CAE**（集合通信加速引擎）设计，片上 SRAM **384 MB**（Ironwood 的 3×），单 Pod 集成 **1,152 芯片**，总算力 **11.6 EFLOPS FP8**。**首次引入联发科（MediaTek）** 作为 TPU 代工合作伙伴（8t 仍由博通代工）。推理性价比提升 **80%**，能效提升 **117%**。

TPU 8i 是 Google **AI 推理规模化**的核心 —— Gemini API、Vertex AI 推理、Anthropic Claude on Vertex、Gemini 3 / 4 在线服务**全部面向 TPU 8i 设计**。量产目标 **2027 年底**。

## 核心规格

| 项目 | 参数 |
| **发布** | 2026-04-22 |
|------|------|
| **架构** | TPU 8i（推理专用） |
| **制程** | **TSMC 2nm** |
| **核心设计** | **双张量核心 + CAE**（集合通信加速引擎） |
| **片上 SRAM** | **384 MB**（3× Ironwood） |
| **显存** | ~288GB HBM（推测每芯片） |
| **显存带宽** | ~8.6 TB/s（推测） |
| **Pod 芯片数** | **1,152 芯片** |
| **Pod FP8 算力** | **11.6 EFLOPS** |
| **CAE 延迟** | 比传统方案降低 **5×** |
| **散热** | 风冷 / 液冷均可 |
| **TDP** | 1,300 W |
| **代工合作伙伴** | **联发科（MediaTek）**（首次） |
| **公布时间** | 2026-04-22（Google Cloud Next '26） |
| **量产目标** | **2027 年底** |
| **性价比** | 比 Ironwood 提升 **80%** |
| **能效** | 比 Ironwood 提升 **117%** |

> 📌 **8i 命名**：TPU 8 代 + **i = inference（推理）**。**8i 是当前最大显存的推理 ASIC**，单卡 288GB 可装 70B 模型（FP16）。

## TPU 8i vs TPU v7 Ironwood（推理对比）

| 指标 | TPU v7 Ironwood | **TPU 8i** | 提升 |
|------|-----------------|------------|------|
| 形态 | 训练 + 推理通用 | **推理专用** | 形态拆分 |
| 制程 | — | **TSMC 2nm** | 新一代 |
| 片上 SRAM | 128 MB | **384 MB** | **3×** |
| Pod 芯片数 | 9,216 | **1,152** | 精简 |
| Pod FP8 算力 | — | **11.6 EFLOPS** | — |
| CAE 加速 | 无 | **延迟降 5×** | 全新 |
| 代工 | Broadcom | **MediaTek 联发科** | 首次 |
| 性价比 | 基线 | **+80%** | 翻倍 |
| 能效 | 基线 | **+117%** | 翻倍 |
| 散热 | 液冷为主 | **风冷/液冷均可** | 灵活 |

## TPU 8i 推理范式优化

| 优化方向 | 内容 |
|----------|------|
| **CAE（集合通信加速引擎）** | 延迟降低 **5×**，跨芯片 KV Cache 共享 |
| **Long-context KV** | **384MB SRAM** 加速超长上下文 |
| **MoE 推理** | Expert Parallel 原生支持 |
| **Speculative Decoding** | 硬件加速推测解码 |
| **Batching** | Continuous batching + PagedAttention |
| **Continuous KV Cache** | **KV Cache 跨请求共享**（同 prefix 优化） |

## TPU 8i vs TPU 8t（同期拆分）

| 指标 | TPU 8t（训练） | **TPU 8i（推理）** |
|------|----------------|---------------------|
| 定位 | 训练 | **推理** |
| 制程 | TSMC 2nm | **TSMC 2nm** |
| 核心设计 | 双计算 Die | **双张量核心 + CAE** |
| 片上 SRAM | — | **384 MB** |
| Pod 芯片数 | 9,600 | **1,152** |
| Pod FP4 算力 | **121 EFLOPS** | — |
| Pod FP8 算力 | — | **11.6 EFLOPS** |
| Pod HBM | **2 PB** | — |
| 集成 CPU | Arm Axion | 无 |
| 代工 | Broadcom | **MediaTek** |
| 散热 | 第4代液冷 | **风冷/液冷** |

## 部署推荐配置

| 场景 | 推荐配置 |
|------|----------|
| **Gemini API 在线服务** | TPU 8i Pod（百万级 QPS） |
| **Claude on Vertex AI** | TPU 8i 集群 |
| **长上下文 RAG** | TPU 8i（**384MB SRAM + 超大显存**） |
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
