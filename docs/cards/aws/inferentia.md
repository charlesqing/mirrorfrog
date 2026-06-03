---
id: inferentia
title: AWS Inferentia (第一代)
sidebar_label: AWS Inferentia
description: AWS Inferentia 详尽规格：128 TOPS INT8、NeuronCore-v1、AWS 自研 AI 推理 ASIC，Inf1 实例。
keywords: [AWS Inferentia, Inf1 实例, NeuronCore-v1, AI 推理 ASIC]
---

# AWS Inferentia (第一代)

## 产品概述

AWS Inferentia 是 Amazon Annapurna Labs 设计的 **AI 推理 ASIC**，2019 年发布。**128 TOPS INT8** 算力，**35W TDP** 低功耗。通过 **Inf1 实例** 提供。

## 核心规格

| 项目 | 参数 |
|------|------|
| **架构** | Inferentia（NeuronCore-v1） |
| **NeuronCore** | 4 颗/芯片 |
| **INT8 算力** | 128 TOPS |
| **FP16/BF16** | 64 TFLOPS |
| **TDP** | 35 W |
| **形式** | Inf1 实例 |

## 厂商信息

| 项目 | 内容 |
|------|------|
| **制造商** | Amazon (Annapurna Labs) |
| **官网** | https://aws.amazon.com/machine-learning/inferentia/ |
| **产品页** | https://aws.amazon.com/ec2/instance-types/inf1/ |
| **SDK** | https://awsdocs-neuron.readthedocs-hosted.com/ |

## 适用场景

- 低延迟 AI 推理
- 推荐系统
- NLP 推理

## 相关产品对比

- [AWS Inferentia 2](/docs/cards/aws/inferentia-2) - 继任者
- [AWS Trainium 2](/docs/cards/aws/trainium-2) - 训练/推理 fungible
