---
slug: aws-trainium-3-3nm-4x-efficiency-reinvent-2025
title: 'AWS Trainium 3 GA：3nm 工艺 + 4.4× 算力 + 4× 能效 + 144 芯片 UltraServer'
authors: [aicomputecards]
tags: [product-launch, cloud-pricing]
description: 2025-12-02 AWS 在 re:Invent 2025 大会 GA 第三代自研 AI 芯片 Trainium 3：3nm 工艺、144GB HBM、4.4× 算力 / 4× 能效 / 4× 内存带宽、Trn3 UltraServer 144 颗芯片。
---

**2025 年 12 月 2 日**，AWS 在 re:Invent 2025 大会上**正式 GA** 第三代自研 AI 训练芯片 **Trainium 3**。这是 AWS 算力版图的关键升级：3nm 工艺、4.4× 算力提升、4× 能效提升、Trn3 UltraServer 144 颗芯片。本文详细解析。

{/* truncate */}

## 核心规格

| 项目 | Trainium 2 (2024) | **Trainium 3 (2025-12 GA)** | 提升 |
|------|-------------------|------------------------------|------|
| 工艺 | TSMC 4nm | **TSMC 3nm** | +一代 |
| NeuronCore | 8 颗 v3 | 8 颗 **v4** | 架构升级 |
| HBM 容量 | 96 GB | **144 GB** | 1.5× |
| HBM 带宽 | 2.9 TB/s | **~4.5 TB/s** | ~1.55× |
| FP8 算力（密集） | 1,299 TFLOPS | **5,716 TFLOPS**（官方 4.4×） | **4.4×** |
| BF16/FP16 | 667 TFLOPS | 1,300 TFLOPS | 2× |
| **每芯片能效** | 1× | **4×** | 4× |
| **内存带宽** | 1× | **4×** | 4× |
| NeuronLink | NeuronLink-v3 | **NeuronLink-v4** | 新一代 |
| TDP | ~700 W | ~700 W | 持平 |
| 发布时间 | 2024-12 | **2025-12** | — |

> **官方 4.4× 算力提升 + 4× 能效 + 4× 内存带宽**——Trainium 3 是 AWS 在三个维度同时大幅升级的旗舰芯片。

## Trn3 UltraServer（机柜级）

| 项目 | 配置 |
|------|------|
| **芯片数** | **144 颗 Trainium 3** |
| HBM 总量 | ~20.7 TB（144GB × 144） |
| NeuronLink-v4 | 全互联，>10 TB/s 双向 |
| FP8 算力（机柜） | **52 PFLOPS**（dense） |
| BF16 算力（机柜） | ~187 PFLOPS |
| TDP（机柜） | ~100 kW |
| **适用模型** | **400B+ 参数 LLM 训练** |

> **Trn3 UltraServer = 单机柜可训练 400B 模型**。一个 EC2 UltraCluster（>10 机柜）可支持**1.4T+ 参数的巨型模型训练**。

## Trn3 vs Trn2 UltraServer 升级

| 指标 | Trn2 UltraServer | **Trn3 UltraServer** | 提升 |
|------|------------------|----------------------|------|
| 芯片数 | 64 | **144** | **2.25×** |
| 互联 | NeuronLink-v3 | NeuronLink-v4 | 新一代 |
| HBM 总量 | 6.1 TB | ~20.7 TB | 3.4× |
| FP8 算力 | ~83 TFLOPS | **52 PFLOPS** | **~626×** |
| 训练能力 | 70B+ LLM | **400B+ LLM** | — |
| 发布时间 | 2024-12 | 2025-12 | — |

> Trn3 UltraServer 是 2026 年**性价比最高的大规模训练方案**之一。

## AWS Neuron SDK 3

- **Neuron SDK 3.x**：PyTorch 2.4+ / JAX 0.4+ / TensorFlow 2.16+ 全优化
- **Neuron Compiler 2.x**：自动编译 + 图优化
- **NeuronX Distributed**：大规模分布式训练库（与 PyTorch FSDP 集成）
- **NeuronX Nemo**：LLM 微调框架（Megatron-LM 等价）
- **vLLM 0.7+ 优化版**：低延迟推理

> **AWS Neuron = 类似 ROCm 的开源生态**，全部 SDK 在 GitHub 开源（aws-neuron）。

## EC2 实例类型

| 实例 | GPU | 配置 | 用途 |
|------|-----|------|------|
| **trn3.48xlarge** | 1 颗 Trn3 | 144GB HBM | 单芯片开发 |
| **trn3.96xlarge** | 2 颗 Trn3 | 288GB HBM | 小规模训练 |
| **trn3 UltraServer** | 144 颗 Trn3 | 20.7 TB HBM | **超大规模训练** |

## 价格与每美元性能

| 实例 | 每小时价格（on-demand，推测） |
|------|-------------------------------|
| **trn3.48xlarge** | ~$32 |
| **Trainium 2 同等实例** | ~$16 |
| **价格提升** | 2× |
| **每美元 FP8 算力提升** | **2.2×**（按 4.4× 算力 / 2× 价格） |

> **AWS 强调**：Trainium 3 在**每美元 FP8 算力**上**显著优于** NVIDIA H100 / H200（2-3×）。

## 与 NVIDIA 同期产品对比

| 指标 | Trainium 3 | NVIDIA H200 | NVIDIA B200 |
|------|------------|-------------|-------------|
| 工艺 | TSMC 3nm | TSMC 4N | TSMC 4NP |
| HBM 容量 | 144 GB | 141 GB | 192 GB |
| HBM 带宽 | 4.5 TB/s | 4.8 TB/s | 8 TB/s |
| FP8 算力 (dense) | 5.7 PFLOPS | 1.0 PFLOPS | 4.5 PFLOPS |
| FP16 算力 | 1.3 PFLOPS | 1.0 PFLOPS | 2.25 PFLOPS |
| TDP | 700 W | 700 W | 1,000 W |
| 互联 | NeuronLink-v4 | NVLink 4 | NVLink 5 |
| 提供方式 | AWS Cloud only | 商用 | 商用 |
| 软件 | Neuron SDK 3 | CUDA | CUDA |
| 每美元性能 | **2-3× 优势** | 1× | 1.5× |

## 适用场景

- ✅ **超大规模 LLM 训练**（400B-1.4T 模型，UltraServer）
- ✅ **AWS Bedrock 模型预训练**（Anthropic Claude、Meta Llama、Mistral）
- ✅ **成本敏感型训练**（价格低于 NVIDIA 30-50%）
- ✅ **能源效率敏感**（每瓦性能 4× 提升）
- ❌ 非 AWS 部署（Trainium 仅在 EC2 出售）
- ❌ 旧 NVIDIA 生态绑定（CUDA-only 代码迁移成本高）

## AWS 客户案例

AWS 在 re:Invent 2025 上公布的关键客户：

| 客户 | 应用 |
|------|------|
| **Anthropic** | Claude 训练（已使用 Trn2，现迁移到 Trn3） |
| **Meta** | Llama 4 训练 |
| **Mistral** | Mistral Large 3 训练 |
| **HuggingFace** | Open LLM 训练 |
| **AWS Bedrock** | 内部托管模型训练 |

## 详细产品页

- [AWS Trainium 3 完整规格](/docs/cards/aws/trainium-3)
- [AWS Trainium 2（前代）](/docs/cards/aws/trainium-2)
- [AWS Trainium 1（初代）](/docs/cards/aws/trainium)
- [AWS Inferentia 2（推理对偶）](/docs/cards/aws/inferentia-2)
- [NVIDIA H100（主要竞品）](/docs/cards/nvidia/h100)
- [未来路线图](/docs/roadmap)

## 总结

AWS Trainium 3 是 2025 年 AI 芯片行业的关键发布之一：

1. **3nm 工艺** + **4.4× 算力** + **4× 能效**——AWS 算力版图全面升级
2. **Trn3 UltraServer 144 颗**——单机柜训练 400B+ 模型
3. **每美元 FP8 算力 2-3× NVIDIA**——AWS 训练成本优势
4. **Neuron SDK 3 全面开源**——降低软件迁移成本
5. **Anthropic、Meta、Mistral 全面采用**——AWS 算力生态扩展

2026 年，Trainium 3 将成为**AWS 内部核心训练负载**的算力基础。
