---
id: tpu-8t
title: Google Cloud TPU 8t (Trillium 2)
sidebar_label: Google TPU 8t
description: Google TPU 8t 训练专用 ASIC：216GB HBM、6,528 GB/s 带宽，专为 frontier 模型训练设计，2026-04-22 公布，Arm Axion CPU 集成。
keywords: [Google TPU 8t, Trillium 2, training TPU, 216GB HBM, 6528 GB/s, Arm Axion, 2026]
---

# Google Cloud TPU 8t (Trillium 2 / 训练专用)

## 产品概述

**Google TPU 8t**（代号 **Trillium 2**）是 2026-04-22 公布的**最新一代训练专用 TPU**（与同期公布的 TPU 8i 推理专用形成 8t + 8i 拆分架构）。配备 **216GB HBM**（比 TPU v7 Ironwood 多 12%）、**6,528 GB/s 带宽**、**集成 Arm Axion CPU**（Google 自研 64 核 Arm）。

TPU 8t 是 **Google Gemini 3 / Gemini 4 frontier 模型**的核心训练芯片，相比 TPU v7 Ironwood 主要改进是**训练范式优化**（MoE 训练、long-context 训练、RLHF 后训练）。

## 核心规格

| 项目 | 参数 |
|------|------|
| **架构** | TPU 8t（Trillium 2） |
| **形态** | **训练专用**（区别于 8i 推理专用） |
| **BF16 算力（密集）** | ~3,500 TFLOPS（推测，比 Ironwood 2,307 TFLOPS 高 50%） |
| **FP8 算力（密集）** | ~7,000 TFLOPS |
| **HBM 容量** | **216 GB** |
| **HBM 带宽** | **6,528 GB/s** |
| **ICI 互联** | 1,400 GB/s（双向） |
| **DCN 带宽** | 200 Gbps（推测） |
| **集成 CPU** | **Arm Axion（Google 自研，64 核）** |
| **Pod 规模** | **9,216 芯片**（推测） |
| **拓扑** | 3D Torus |
| **TDP** | 180 W |
| **首发** | **2026-04-22 公布** |

> 📌 **8t 命名**：TPU 8 代 + **t = training（训练）**。8t 与 8i 同代，**仅用于训练**。

## TPU 8t vs TPU v7 Ironwood（训练对比）

| 指标 | TPU v7 Ironwood | **TPU 8t** | 提升 |
|------|-----------------|------------|------|
| 形态 | 训练 + 推理通用 | **训练专用** | 形态拆分 |
| BF16 算力 | 2,307 TFLOPS | **~3,500 TFLOPS**（推测） | 1.5× |
| FP8 算力 | 4,614 TFLOPS | ~7,000 TFLOPS | 1.5× |
| HBM 容量 | 192 GB | **216 GB** | 1.13× |
| HBM 带宽 | 7,380 GB/s | **6,528 GB/s** | 略降 |
| ICI 互联 | 1,200 GB/s | **1,400 GB/s** | 1.17× |
| 集成 CPU | 无 | **Arm Axion 64 核** | 新增 |
| 发布时间 | 2025-11 | **2026-04-22** | — |

> 💡 **TPU 8t 带宽略降（7,380 → 6,528 GB/s）但算力提升 50%**，说明 Google 在 8t 牺牲部分带宽换取更高算力（更适合训练中以算力为主的阶段：dense FFN、attention 计算）。

## TPU 8t 训练范式优化

| 优化方向 | 内容 |
|----------|------|
| **MoE 训练** | Expert Parallel 原生支持（DeepSeek / Mixtral 风格） |
| **Long-context 训练** | 1M+ token 上下文训练优化 |
| **RLHF / 后训练** | Online RL（DPO / PPO / GRPO）原生优化 |
| **多模态训练** | 视觉-语言联合训练（ViT + LLM 同步） |
| **AXIOM** | Arm Axion CPU 协同（数据预处理 / 权重初始化） |

## Arm Axion CPU 集成

| 项目 | 参数 |
|------|------|
| **架构** | Arm Neoverse V2（64 核） |
| **TDP** | 180 W |
| **作用** | Host CPU + 数据加载 + 预处理 + 推理调度 |
| **意义** | **Google 自研 Arm CPU 首次进入 TPU 节点** |

> **Axion 集成 = TPU 节点向"超节点"演进**：TPU 8t 不再是纯加速器，而是 **TPU + Axion CPU 协同系统**，对标 NVIDIA Vera CPU。

## 部署推荐配置

| 场景 | 推荐配置 |
|------|----------|
| **Gemini 3 训练** | TPU 8t pod 9,216 颗（**单 pod 即可训练 frontier 模型**） |
| **Llama 4 训练** | TPU 8t pod（千亿级模型） |
| **多模态训练** | TPU 8t + Vision Transformer |
| **科学计算** | TPU 8t + JAX 0.5+ |
| **RLHF 后训练** | TPU 8t（**TPU 8t 原生优化**） |

## 软件生态

- **JAX 0.5+**：Google 主力训练框架
- **PyTorch/XLA 2.5+**：PyTorch 兼容
- **TensorFlow 2.17+**：旧框架
- **Paxml / Orbax**：Google 内部 LLM 训练栈
- **MaxText**：Google 参考实现
- **vLLM 0.8+**（实验性）：推理支持

## 适用场景

- ✅ **Frontier 模型训练**（Gemini 3/4、Anthropic、外部客户）
- ✅ **MoE 大模型训练**（原生支持）
- ✅ **Long-context 训练**（1M+ token）
- ✅ **多模态训练**（ViT + LLM）
- ❌ 推理场景（**应用 TPU 8i** 而非 8t）
- ❌ 非 Google Cloud 部署

## 厂商信息

| 项目 | 内容 |
|------|------|
| **厂商** | Google Cloud |
| **首次公布** | **2026-04-22**（Google Cloud Next 2026） |
| **产品页** | https://cloud.google.com/tpu |
| **云端部署** | 仅 Google Cloud |
| **代号** | Trillium 2 |

## 相关产品

- [Google TPU 8i](/docs/cards/google/tpu-8i) - **同期推理专用 TPU**
- [Google TPU v7 Ironwood](/docs/cards/google/tpu-ironwood) - 上一代 TPU
- [Google TPU v6e Trillium](/docs/cards/google/tpu-v6e) - 上代推理 TPU
- [AWS Trainium 3](/docs/cards/aws/trainium-3) - 同代训练 ASIC
- [NVIDIA Rubin R200](/docs/cards/nvidia/rubin-r200) - 同代 GPU
- [完整对比表](/docs/comparison)
