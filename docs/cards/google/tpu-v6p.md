---
id: tpu-v6p
title: Google TPU v6p (Pathway, 2024-12)
sidebar_label: TPU v6p
description: Google TPU v6p (Pathway) 详尽规格：Trillium 训练专用、96GB HBM、2.7 PF FP8 dense、JAX/Pathways 软件栈。
keywords: [Google TPU v6p, TPU v6p, Trillium 训练, Pathway, JAX, TPU 6P]
---

# Google TPU v6p (Pathway, 2024-12)

## 产品概述

**Google TPU v6p**（代号 **Pathway**，非官方代号 **Trillium 训练版**）是 Google 第六代 TPU 的**训练专用版本**，**2024-12 发布**。相比同代推理版 **TPU v6e (Trillium)**，v6p 升级了 **HBM 容量**（32GB → **96GB**）和 **Pathways 分布式软件**支持。是 **Google 内部 Gemini 1.5 Pro/Ultra、Google Search、广告推荐系统**训练的主力芯片。

**关键定位**：
- **v6e (Trillium)** = 推理 + 中等规模训练（**TPU v6e** 单独页）
- **v6p (Pathway)** = 大规模训练 + Pathways 软件栈
- **v7 (Ironwood)** = 2025 H2 推理专用（**TPU Ironwood** 单独页）

## 核心规格

| 项目 | 参数 |
|------|------|
| **代号** | Trillium 训练版（Google 内部称 Pathway） |
| **架构** | Google TPU v6（与 v6e 同代） |
| **制程** | TSMC 5nm（vs v5e 7nm） |
| **SparseCore** | 4× 改进（处理 embedding 推荐） |
| **HBM** | **96 GB HBM2**（v6e 仅 32GB） |
| **HBM 带宽** | **1.6 TB/s**（v6e 仅 819 GB/s） |
| **MXU** | 2× 128×128（v6e 同） |
| **FP8 dense** | **2,700 TFLOPS** |
| **BF16 dense** | **1,350 TFLOPS** |
| **INT8** | 2.7 POPS |
| **稀疏性** | 2:4 结构化稀疏（2× 加速） |
| **TDP** | 450 W |
| **板卡形态** | Cloud TPU v6p pod slice |
| **Pod 规模** | 9,216 芯片（v6e 仅 256） |
| **Pod 算力** | **24.9 EF FP8 dense**（v6e 仅 0.4 EF） |
| **Pod 带宽** | **14.7 TB/s 域内**（v6e 仅 1.6 TB/s） |
| **量产** | 2024-12 |
| **价格** | 不公开（Google Cloud 内部） |

## 与同代 v6e 对比

| 指标 | TPU v6p (Pathway) | TPU v6e (Trillium) | 差异 |
|------|--------------------|---------------------|------|
| 定位 | **训练专用** | 推理 + 中等训练 | - |
| 内存 | **96GB HBM2** | 32GB HBM2 | 3× |
| 带宽 | **1.6 TB/s** | 819 GB/s | 2× |
| FP8 dense | **2.7 PF** | 1.5 PF | 1.8× |
| 稀疏性 | **2:4 结构化** | 1:2 结构化 | 2× 加速 |
| SparseCore | 4× 改进 | 基线 | 4× |
| Pod 规模 | **9,216 芯片** | 256 芯片 | 36× |
| Pod 算力 | **24.9 EF FP8** | 0.4 EF FP8 | 62× |
| Pod 带宽 | 14.7 TB/s | 1.6 TB/s | 9× |
| 互联 | **ICI + DCN 6.4 Tb/s** | ICI 656 GB/s | 10× |
| Pathways | **完整支持** | 基础 | 显著 |

## 历代 TPU 对比

| 代际 | 代号 | 发布 | 内存 | FP8 dense | Pod 规模 |
|------|------|------|------|-----------|----------|
| TPU v2 | - | 2018 | 16GB HBM | N/A (FP16 180 TF) | 256 |
| TPU v3 | - | 2019 | 32GB HBM | N/A (FP16 420 TF) | 1024 |
| TPU v4 | - | 2021 | 32GB HBM2 | 1.1 PF | 4096 |
| TPU v5e | - | 2023 | 16GB HBM2 | 0.4 PF | 256 |
| TPU v5p | - | 2023-Q3 | 96GB HBM2 | 1.89 PF | 8,960 |
| TPU v6e | Trillium | 2024-Q2 | 32GB HBM2 | 1.5 PF | 256 |
| **TPU v6p** | **Pathway** | **2024-12** | **96GB HBM2** | **2.7 PF** | **9,216** |
| TPU v7 | Ironwood | 2025 H2 | 192GB HBM3E | 4.6 PF | 9,216 |

## Pathways 软件栈

| 层级 | 工具 | 说明 |
|------|------|------|
| **AI 框架** | **JAX** | Google 主推（Flax / Optax / RLlib）|
| | **Pathways** | 异构加速器统一编程（v6p 完整支持）|
| | TensorFlow | 兼容（v6p 优化）|
| | PyTorch/XLA | 兼容（v6p 实验）|
| **编译器** | **XLA** | 加速器编译器（v6p 优化版）|
| **分布式** | **GSPMD** | 张量并行（v6p 9K 芯片优化）|
| **集合通信** | **DUS** | 自研（v6p 14.7 TB/s 域内）|
| **加速器抽象** | **Pathways Runtime** | 跨 TPU/GPU/CPU 异构调度 |

> **Pathways 战略**：**单一编程模型** 跨 TPU pod 训练，简化超大 LLM 训练。Google 内部用 Pathways 训练 **Gemini 1.5/2.0**。

## TPU v6p 适用场景

- ✅ **超大 LLM 训练**（Gemini 1.5/2.0、PaLM 2、Gemma 2）
- ✅ **多模态模型**（视频 + 文本 + 图像）
- ✅ **推荐系统**（SparseCore 4× 加速）
- ✅ **Google Cloud TPU 客户**（Anthropic Cohere 等）
- ✅ **JAX 研究**（DeepMind、谷歌研究院）
- ❌ 中国市场（出口管制）
- ❌ PyTorch 原生（需 XLA 转译，性能损失 10-20%）

## Pod 拓扑：9,216 芯片

| 维度 | 配置 |
|------|------|
| **Pod 大小** | 9,216 个 v6p 芯片 |
| **Pod 形态** | 12 行 × 12 rack × 64 chip |
| **Pod 总算力** | 24.9 EF FP8 dense |
| **Pod 内存总量** | 885 TB HBM2 |
| **Pod 互联** | ICI (chip-to-chip) + DCN (rack-to-rack) |
| **Pod 功耗** | ~4.1 MW（仅 TPU）|
| **Pod 物理尺寸** | ~12 机柜（含冷却）|
| **Pod 价格** | $50-100M（推测）|

> **TPU v6p Pod 优势**：**9K 芯片 14.7 TB/s 互联**，对 **Gemini 1.5/2.0 万亿参数模型**至关重要（单卡 96GB 装不下完整模型权重）。

## Google 内部使用

- **Gemini 1.5 Pro/Ultra 训练**（TPU v6p + v5p 混合）
- **Google Search 排序模型**（MUM、BERT 改进）
- **广告推荐系统**（SparseCore 加速 embedding）
- **YouTube 视频理解**（多模态）
- **DeepMind AlphaFold 3**（结构预测）
- **Waymo 自动驾驶**（感知模型）
- **Google Cloud 客户**：Anthropic（Claude 3.5）、Cohere、AssemblyAI、Mistral

## 厂商信息

| 项目 | 内容 |
|------|------|
| **公司** | Google LLC |
| **产品页** | https://cloud.google.com/tpu |
| **业务部门** | Google Cloud + Google DeepMind |
| **TPU 芯片设计** | Google Silicon team（以色列海法 + 美国 Mountain View） |
| **代工** | TSMC 5nm（InFO_SoC 封装）|
| **Google Cloud TPU 价格** | v6p ~$4-5/小时（pod slice）|
| **客户** | Google 内部 + Anthropic / Cohere / Mistral 等 |

## 关键特性

- **96GB HBM2**：单卡大内存，训练 70B+ 模型无需多卡
- **9,216 芯片 Pod**：业界最大单一域之一（vs H100 8K 集群需 InfiniBand）
- **Pathways 分布式**：单一编程模型跨 9K 芯片
- **SparseCore 4×**：推荐系统 / MoE 加速
- **JAX 深度优化**：JAX + Flax 性能 vs PyTorch + CUDA 相当或略高
- **缺点**：仅 Google Cloud 部署，PyTorch 兼容性弱

## v6p vs v5p 对比

| 指标 | TPU v6p (2024-12) | TPU v5p (2023-Q3) | 提升 |
|------|--------------------|--------------------|------|
| 内存 | 96GB HBM2 | 96GB HBM2 | 同 |
| 带宽 | 1.6 TB/s | 1.4 TB/s | +14% |
| FP8 dense | 2.7 PF | 1.89 PF | +43% |
| 稀疏性 | 2:4 结构化 | 1:2 结构化 | 2× 加速 |
| SparseCore | 4× 改进 | 基线 | 4× |
| Pod 规模 | 9,216 | 8,960 | 3% |
| Pod 算力 | 24.9 EF | 16.9 EF | +47% |
| Pathways | 完整 | 基础 | 显著 |
| 工艺 | TSMC 5nm | TSMC 5nm | 同 |

## 相关卡

- [Google TPU v6e (Trillium)](/docs/cards/google/tpu-v6e) - 推理版
- [Google TPU v5p](/docs/cards/google/tpu-v5p) - 前代训练
- [Google TPU v4](/docs/cards/google/tpu-v4) - 早期训练
- [Google TPU Ironwood (v7)](/docs/cards/google/tpu-ironwood) - 下一代
- [Google TPU 8t](/docs/cards/google/tpu-8t) - 2026 训练
- [Google TPU 8i](/docs/cards/google/tpu-8i) - 2026 推理
- [NVIDIA B200](/docs/cards/nvidia/b200) - 业界对比
- [AMD MI355X](/docs/cards/amd/mi355x) - 业界对比
