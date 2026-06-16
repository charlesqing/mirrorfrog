---
id: tpu-v5e
title: Google TPU v5e (Trillium 训练-Lite, 2023)
sidebar_label: TPU v5e
description: Google TPU v5e 详尽规格：5nm、16GB HBM2、400 TF FP8 dense、推理 + 小型训练、性价比旗舰。
keywords: [Google TPU v5e, TPU v5e, 5nm, 16GB HBM2, 400 TF FP8, 训练-Lite, 推理优化]
---

# Google TPU v5e (Trillium 训练-Lite, 2023)

## 产品概述

**Google TPU v5e**（非官方代号 **Trillium-Lite**）是 Google 第五代 TPU 的**入门级 / 性价比版本**，**2023-Q2 发布**。基于 **TSMC 5nm 制程**，**16GB HBM2** 内存，**400 TFLOPS FP8 dense** 算力，**TDP 180W**。定位是 **推理 + 中小规模训练**，相比 **TPU v5p**（训练旗舰）单芯片便宜 70%。

**关键定位**：
- **TPU v5p**（2023-Q3）：96GB HBM2，1.89 PF FP8，训练专用 — 现有页
- **TPU v5e**（2023-Q2）：**16GB HBM2，400 TF FP8，推理 + 小型训练** — **本页**
- **TPU v6e**（2024-Q2）：32GB HBM2，1.5 PF FP8，Trillium — 现有页
- **TPU v6p**（2024-12）：96GB HBM2，2.7 PF FP8，Pathway 训练 — 现有页

## 核心规格

| 项目 | 参数 |
| **发布** | 2023-08-29 |
|------|------|
| **代号** | Trillium-Lite（Google 内部称 v5e） |
| **架构** | Google TPU v5（与 v5p 同代） |
| **制程** | TSMC 5nm |
| **MXU** | 128×128（2 个，v5p 是 4 个）|
| **HBM** | **16GB HBM2**（v5p 是 96GB）|
| **HBM 带宽** | **400 GB/s**（v5p 是 1.4 TB/s）|
| **FP8 dense** | **400 TFLOPS**（v5p 是 1.89 PF）|
| **BF16 dense** | 200 TFLOPS |
| **INT8** | 400 TOPS |
| **TDP** | 180 W |
| **板卡形态** | Cloud TPU v5e pod slice |
| **Pod 规模** | **256 芯片**（v5p 是 8,960）|
| **Pod 算力** | 102 TF FP8 dense（v5p 是 16.9 EF）|
| **Pod 带宽** | 1.6 TB/s 域内 |
| **量产** | 2023-Q2 |
| **价格（Google Cloud）** | ~$1.20/小时（pod slice）|

## 与 TPU v5p 对比

| 指标 | TPU v5e (2023-Q2) | TPU v5p (2023-Q3) | 差异 |
|------|---------------------|---------------------|------|
| **定位** | 推理 + 小型训练 | **大型训练** | - |
| **制程** | 5nm | 5nm | 同 |
| **MXU** | 2 个 128×128 | 4 个 128×128 | 1/2 |
| **HBM** | **16GB HBM2** | 96GB HBM2 | 1/6 |
| **带宽** | 400 GB/s | 1.4 TB/s | 1/3.5 |
| **FP8 dense** | **400 TF** | 1.89 PF | 1/4.7 |
| **TDP** | **180W** | 450W | 1/2.5 |
| **Pod 规模** | **256** | 8,960 | 1/35 |
| **价格（Google Cloud）** | $1.20/小时 | $4.20/小时 | 1/3.5 |
| **适合模型** | 7B-30B | 70B-540B | - |

## TPU 产品线对比

| 代际 | 代号 | 内存 | FP8 dense | Pod 规模 | 适合 |
|------|------|------|-----------|----------|------|
| TPU v4 | - | 32GB HBM2 | 1.1 PF | 4,096 | 100B+ |
| **TPU v5e** | - | **16GB HBM2** | **400 TF** | **256** | **7B-30B** |
| TPU v5p | - | 96GB HBM2 | 1.89 PF | 8,960 | 70B-540B |
| TPU v6e | Trillium | 32GB HBM2 | 1.5 PF | 256 | 7B-70B |
| TPU v6p | Pathway | 96GB HBM2 | 2.7 PF | 9,216 | 70B-万亿 |
| TPU v7 | Ironwood | 192GB HBM3E | 4.6 PF | 9,216 | 推理 192GB |

## TPU v5e 适用场景

- ✅ **LLM 推理**（7B-30B 模型推理）
- ✅ **小模型训练**（LLaMA 7B、Mistral 7B、Qwen 1.5 14B）
- ✅ **推荐系统**（SparseCore 优化）
- ✅ **Google Cloud TPU 入门**（$1.20/小时）
- ✅ **JAX / Flax 训练**（XLA 优化）
- ✅ **Anthropic / Cohere / Mistral**（Google Cloud 客户）
- ❌ **超大模型训练**（16GB 内存限制）
- ❌ **FP8 训练**（仅推理 FP8，训练 BF16）
- ❌ **PyTorch 原生**（需 XLA 转译）

## 推理 vs 训练优势

### 推理
- **TTFT < 10ms**（JAX + Pathways）
- **TPOT 5-8ms**（4 卡互联）
- **价格 $1.20/小时**（H100 $3-5/小时，**60% 便宜**）
- **7B-30B LLM 优化**

### 训练
- **LLaMA 7B 训练**：v5e 256 卡 = **1.5 周期/秒**（H100 8 卡 = 1 周期/秒，**相当**）
- **LLaMA 13B 训练**：v5e 256 卡 = **0.7 周期/秒**（H100 8 卡 = 0.5 周期/秒，**v5e 略胜**）
- **JAX + Flax** + **GSPMD** 张量并行
- **价格 $1.20/小时**（**H100 8 卡 $25-30/小时，1/10 价格**）

## 软件栈

| 层级 | 工具 | 说明 |
|------|------|------|
| **AI 框架** | **JAX** | Google 主推 |
| | **Flax** | JAX 神经网络库 |
| | **Optax** | JAX 优化器 |
| | **RLlib** | JAX 强化学习 |
| | **Pathways** | 异构加速器统一编程 |
| | TensorFlow | 兼容 |
| | PyTorch/XLA | 兼容（实验）|
| **编译器** | **XLA** | 加速器编译器 |
| **分布式** | **GSPMD** | 张量并行 |
| **集合通信** | **DUS** | 自研 |
| **模型库** | MaxText (Gemma 2 训练) | Google 开源 |

## 厂商信息

| 项目 | 内容 |
|------|------|
| **公司** | Google LLC |
| **产品页** | https://cloud.google.com/tpu |
| **业务部门** | Google Cloud + Google DeepMind |
| **代工** | TSMC 5nm（InFO_SoC 封装）|
| **Google Cloud 价格** | v5e ~$1.20/小时（pod slice）|
| **客户** | Google 内部（Search、YouTube、DeepMind） + Anthropic / Cohere / Mistral / Hugging Face |

## 与 NVIDIA L4 对比（推理）

| 指标 | Google TPU v5e | NVIDIA L4 | 差异 |
|------|------------------|-----------|------|
| **INT8** | 400 TOPS | 485 TOPS | L4 +21% |
| **TDP** | 180W | 72W | v5e 2.5× |
| **能效** | 2.22 TOPS/W | 6.7 TOPS/W | **L4 3×** |
| **内存** | 16GB HBM2 | 24GB GDDR6 | L4 1.5× |
| **价格** | $1.20/小时 | $0.80-1.20/小时 | 相当 |
| **软件** | JAX | CUDA | L4 成熟 |

> **TPU v5e 优势**：**Google Cloud 集成** + **JAX 优化** + **价格便宜**。
> **L4 优势**：**TDP 72W**（v5e 40% 节能）+ **软件成熟** + **多云部署**。

## 关键特性

- **400 TF FP8**：业界 5nm 入门 TPU 旗舰
- **180W TDP**：H100 25% 功耗
- **16GB HBM2**：推理够用，训练受限
- **Pod 256 卡**：JAX GSPMD 训练优化
- **价格便宜**：$1.20/小时
- **缺点**：内存小、仅 Google Cloud、生态 5 年

## 相关卡

- [Google TPU v5p](/docs/cards/google/tpu-v5p) - 训练旗舰
- [Google TPU v6e (Trillium)](/docs/cards/google/tpu-v6e) - 下一代推理
- [Google TPU v6p (Pathway)](/docs/cards/google/tpu-v6p) - 下一代训练
- [Google TPU v4](/docs/cards/google/tpu-v4) - 早期训练
- [Google TPU Ironwood (v7)](/docs/cards/google/tpu-ironwood) - 2025 H2
- [Google TPU 8t](/docs/cards/google/tpu-8t) - 2026 训练
- [Google TPU 8i](/docs/cards/google/tpu-8i) - 2026 推理
- [NVIDIA L4](/docs/cards/nvidia/l4) - 推理对比
- [NVIDIA H100](/docs/cards/nvidia/h100) - 训练对比
