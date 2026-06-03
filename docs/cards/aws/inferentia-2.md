---
id: inferentia-2
title: AWS Inferentia 2 (Inf2)
sidebar_label: AWS Inferentia 2
description: AWS Inferentia 2 详尽规格：32GB HBM2e、4× NeuronCore-v2、芯片间互联、Inf2.xlarge 到 Inf2.48xlarge 实例。
keywords: [AWS Inferentia 2, Inf2 实例, 大模型推理, AI 推理 ASIC]
---

# AWS Inferentia 2 (Inf2)

## 产品概述

AWS Inferentia 2 于 2022 年发布，是第二代 AWS 自研推理 ASIC。**最大改进是支持 32GB HBM2e 显存** 和**芯片间互联**，可以承载更大模型（70B+）。通过 **Inf2 实例** 提供，从 inf2.xlarge（单芯片）到 inf2.48xlarge（12 芯片）。

## 核心规格

| 项目 | 参数 |
|------|------|
| **架构** | Inferentia 2（NeuronCore-v2） |
| **NeuronCore** | 4 颗/芯片 |
| **显存** | **32 GB HBM2e** |
| **INT8 算力（估算）** | 190 TOPS |
| **FP16/BF16** | 190 TFLOPS（估算） |
| **芯片间互联** | 支持（最高 12 芯片） |
| **TDP** | 约 150 W |

## Inf2 实例

| 实例 | 芯片 | 内存 | 适用 |
|------|------|------|------|
| **inf2.xlarge** | 1 | 32 GB | 轻量推理 |
| **inf2.8xlarge** | 1 | 32 GB | 中等推理 |
| **inf2.24xlarge** | 6 | 192 GB | 大模型 |
| **inf2.48xlarge** | 12 | 384 GB | 70B+ 模型 |

## 厂商信息

| 项目 | 内容 |
|------|------|
| **制造商** | Amazon (Annapurna Labs) |
| **官网** | https://aws.amazon.com/machine-learning/inferentia/ |
| **产品页** | https://aws.amazon.com/ec2/instance-types/inf2/ |
| **SDK** | https://awsdocs-neuron.readthedocs-hosted.com/ |

## 关键特性

- **芯片间互联**：支持 12 芯片聚合 384GB 显存
- **可承载 70B 模型推理**（4-bit 量化）
- **DynamoAI 集成**
- **低延迟**

## 适用场景

- LLM 推理（10B-70B）
- 推荐系统
- 计算机视觉推理
- 成本敏感型生产部署

## 相关产品对比

- [AWS Inferentia 1](/docs/cards/aws/inferentia) - 前代
- [AWS Trainium 2](/docs/cards/aws/trainium-2) - 训练推理 fungible
- [NVIDIA L40S](/docs/cards/nvidia/l40s) - 数据中心推理
