---
id: trainium
title: AWS Trainium (第一代)
sidebar_label: AWS Trainium
description: AWS Trainium 详尽规格：32GB HBM、191 TFLOPS FP8、32 NeuronCore v2、AWS 自研 AI 训练 ASIC。
keywords: [AWS Trainium, NeuronCore, Trainium1, Trn1 实例, AI 训练 ASIC]
---

# AWS Trainium (第一代)

## 产品概述

AWS Trainium 是 Amazon Annapurna Labs 设计的 AI 训练 ASIC，2021 年推出。**第一代** 通过 Trn1 实例提供，**16 颗 Trainium1 芯片**组成一个实例。每个芯片含 **32 GB HBM**，**191 TFLOPS FP8 算力**。Trn1 32xlarge 集成了 512 NeuronCore v2 核心。

## 核心规格

| 项目 | 参数 |
|------|------|
| **架构** | Trainium（第一代） |
| **NeuronCore** | 32 颗/芯片（NeuronCore-v2） |
| **显存** | 32 GB HBM |
| **显存带宽** | 0.8 TB/s |
| **FP8 算力** | 191 TFLOPS |
| **BF16/FP16** | 191 TFLOPS |
| **FP32** | 48 TFLOPS |
| **TDP** | 350 W |
| **NeuronLink** | NeuronLink-v2 |
| **形式** | Trn1 实例（AWS） |

## 厂商信息

| 项目 | 内容 |
|------|------|
| **制造商** | Amazon (Annapurna Labs) |
| **官网** | https://aws.amazon.com/machine-learning/trainium/ |
| **产品页** | https://aws.amazon.com/ec2/instance-types/trn1/ |
| **SDK** | https://awsdocs-neuron.readthedocs-hosted.com/ |

## 关键特性

- **AWS Neuron SDK**：PyTorch、JAX 集成
- **EFA 互联**：低延迟集群网络
- **仅限 AWS EC2**

## 适用场景

- LLM 训练（Trn1 32xlarge）
- 推荐系统
- 大规模分布式训练

## 相关产品对比

- [AWS Trainium 2](/docs/cards/aws/trainium-2) - 继任者（4× 性能）
- [AWS Inferentia 2](/docs/cards/aws/inferentia-2) - 推理版
- [NVIDIA H100](/docs/cards/nvidia/h100) - 同期
