---
id: trainium-3
title: AWS Trainium 3 (Trn3)
sidebar_label: AWS Trainium 3
description: AWS Trainium 3 详尽规格：3nm 工艺、2.52 PFLOPS FP8 dense、4.4× Trainium 2 算力、4× 能效、Trn3 UltraServer 144 芯片，2025-12-02 re:Invent GA。
keywords: [AWS Trainium 3, Trainium3, NeuronCore-v4, Trn3 UltraServer, 3nm, 2.52 PFLOPS, 144 chips, re:Invent 2025]
---

# AWS Trainium 3 (Trn3)

## 产品概述

**AWS Trainium 3** 于 **2025-12-02** 在 re:Invent 2025 大会上**正式 GA**，是第三代 AWS 自研 AI 训练芯片。**3nm 工艺**，**单芯片 FP8 算力 2.52 PFLOPS**（dense，官方 4.4× 于 Trainium 2），**能效较 Trainium 2 提升 4 倍**，**内存带宽提升 4 倍**。**Trn3 UltraServer** 通过 NeuronLink 互联 **144 颗芯片**（比 Trn2 UltraServer 的 64 颗多 2.25 倍）。

Trainium 3 是 AWS **"AI 工厂"战略**的核心 —— Amazon 内部 Bedrock、Anthropic Claude、AWS 客户的核心训练工作负载都开始向 Trn3 迁移。

## 核心规格

| 项目 | 参数 |
|------|------|
| **架构** | Trainium3（NeuronCore-v4） |
| **制程** | **TSMC 3nm** |
| **NeuronCore** | 8 颗/芯片（NeuronCore-v4） |
| **HBM 容量** | 144 GB HBM3e（AWS 官方确认）|
| **HBM 带宽** | ~4.9 TB/s |
| **FP8 算力（密集）** | **2.52 PFLOPS** |
| **BF16/FP16** | 1,260 TFLOPS（推测，FP8 一半） |
| **TDP** | 700 W |
| **NeuronLink** | NeuronLink-v4 |
| **首发** | **2025-12-02 GA**（re:Invent 2025） |

> 📌 **数据约定**：AWS Trainium 采用 **dense（密集）** 算力为标准（与 AMD、Google 一致）；与 NVIDIA sparse 算力不可直接比较。**2.52 PFLOPS FP8 = dense**（= 2,520 TFLOPS）。

## Trainium 2 vs Trainium 3 升级对比

| 指标 | Trainium 2 | **Trainium 3** | 提升 |
|------|------------|----------------|------|
| 工艺 | TSMC 4nm | **TSMC 3nm** | +一代 |
| NeuronCore | 8 颗 v3 | 8 颗 **v4** | 架构升级 |
| HBM 容量 | 96 GB | **144 GB** | 1.5× |
| HBM 带宽 | 2.9 TB/s | **~4.9 TB/s** | **~1.7×** |
| FP8 算力（密集） | 1,299 TFLOPS | **5.7 PFLOPS** | **~4.4×** |
| BF16/FP16 | 667 TFLOPS | 2,850 TFLOPS（推测） | ~4.3× |
| **每芯片 FP8 算力提升** | — | **4.4×** | 官方数据 |
| **能效（每瓦性能）** | — | **4×** | 官方数据 |
| **内存带宽提升** | — | **4×** | 官方数据 |
| 发布时间 | 2024-12 | **2025-12** | — |

> ⚠️ **5.7 PFLOPS = 单颗芯片**（FP8 dense），而 Trainium 2 是 1,299 TFLOPS/颗。官方 4.4× 算力提升：1,299 × 4.4 ≈ **5,716 TFLOPS ≈ 5.7 PFLOPS**。**以官方 4.4× 算力提升为准**。

## Trn3 UltraServer（机柜级）

| 项目 | 配置 |
|------|------|
| **芯片数** | **144 颗 Trainium 3**（4× Trn2 UltraServer 的 64 颗） |
| **HBM 总量** | ~20.7 TB（144GB × 144） |
| **NeuronLink-v4** | 全互联，>10 TB/s 双向 |
| **FP8 算力（机柜）** | **~363 PFLOPS**（dense，144 × 2.52 PFLOPS） |
| **BF16 算力（机柜）** | ~181 PFLOPS |
| **TDP（机柜）** | ~100 kW |
| **适用模型** | **400B+ 参数 LLM 训练** |

> **Trn3 UltraServer = 单机柜可训练 400B 模型**。一个 EC2 UltraCluster（>10 机柜）可支持**1.4T+ 参数的巨型模型训练**。

## Trn3 vs Trn2 UltraServer

| 指标 | Trn2 UltraServer | **Trn3 UltraServer** | 提升 |
|------|------------------|----------------------|------|
| 芯片数 | 64 | **144** | **2.25×** |
| 互联 | NeuronLink-v3 | NeuronLink-v4 | 新一代 |
| HBM 总量 | 6.1 TB | ~20.7 TB | 3.4× |
| FP8 算力 | ~83 TFLOPS（64×1.3） | **~365 TFLOPS**（144×2.54） | **~4.4×** |
| 训练能力 | 70B+ LLM | **400B+ LLM** | — |
| 发布时间 | 2024-12 | 2025-12 | — |

## AWS Neuron SDK 3

- **Neuron SDK 3.x**：PyTorch 2.4+ / JAX 0.4+ / TensorFlow 2.16+ 全优化
- **Neuron Compiler 2.x**：自动编译 + 图优化
- **NeuronX Distributed**：大规模分布式训练库（与 PyTorch FSDP 集成）
- **NeuronX Nemo**：LLM 微调框架（Megatron-LM 等价）
- **vLLM 0.7+** 优化版：低延迟推理

> **AWS Neuron = 类似 ROCm 的开源生态**，全部 SDK 在 GitHub 开源（aws-neuron）。

## EC2 实例类型

| 实例 | GPU | 配置 | 用途 |
|------|-----|------|------|
| **trn3.48xlarge** | 1 颗 Trn3 | 144GB HBM | 单芯片开发 |
| **trn3.96xlarge** | 2 颗 Trn3 | 288GB HBM | 小规模训练 |
| **trn3 UltraServer** | 144 颗 Trn3 | 20.7 TB HBM | **超大规模训练** |

## 价格（推测）

| 实例 | 每小时价格（on-demand） |
|------|--------------------------|
| **trn3.48xlarge** | ~$32（推测） |
| **Trainium 2 同等实例** | ~$16 |
| **价格提升** | 2× |
| **每美元 FP8 算力提升** | **2.2×**（按 4.4× 算力 / 2× 价格） |

> **AWS 强调**：Trainium 3 在**每美元 FP8 算力**上**显著优于** NVIDIA H100 / H200（2-3×）。

## 适用场景

- ✅ **超大规模 LLM 训练**（400B-1.4T 模型，UltraServer）
- ✅ **AWS Bedrock 模型预训练**（Anthropic Claude、Meta Llama、Mistral）
- ✅ **成本敏感型训练**（价格低于 NVIDIA 30-50%）
- ✅ **能源效率敏感**（每瓦性能 4× 提升）
- ❌ 非 AWS 部署（Trainium 仅在 EC2 出售）
- ❌ 旧 NVIDIA 生态绑定（CUDA-only 代码迁移成本高）

## 厂商信息

| 项目 | 内容 |
|------|------|
| **厂商** | Amazon Web Services (AWS) |
| **首次发布** | 2025-12-02（re:Invent 2025 GA） |
| **产品页** | https://aws.amazon.com/machine-learning/trainium/ |
| **云端实例** | EC2 trn3.48xlarge / 96xlarge / UltraServer |
| **SDK** | https://github.com/aws-neuron |
| **合作方** | Anthropic / Meta / Mistral / HuggingFace |

## 相关产品

- [AWS Trainium 2](/docs/cards/aws/trainium-2) - 前代芯片
- [AWS Trainium 1](/docs/cards/aws/trainium) - 第一代
- [AWS Inferentia 2](/docs/cards/aws/inferentia-2) - 推理对偶产品
- [NVIDIA H100](/docs/cards/nvidia/h100) - 主要竞品
- [NVIDIA B200](/docs/cards/nvidia/b200) - 同期旗舰 GPU
- [Google TPU v7 Ironwood](/docs/cards/google/tpu-ironwood) - 同代 ASIC
- [完整对比表](/docs/comparison)
