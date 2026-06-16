---
id: trainium-2
title: AWS Trainium 2 (Trn2)
sidebar_label: AWS Trainium 2
description: AWS Trainium 2 详尽规格：96GB HBM、1,299 FP8 TFLOPS、8× NeuronCore-v3、2.9 TB/s 带宽，2024 年 12 月 GA。
keywords: [AWS Trainium 2, Trainium2, NeuronCore-v3, Trn2 实例, Trn2 UltraServer]
---

# AWS Trainium 2 (Trn2)

## 产品概述

AWS Trainium 2 于 **2024 年 12 月 3 日**在 re:Invent 2024 大会上 GA，是第二代 AWS 自研 AI 训练芯片。**性能是第一代的 4 倍**，**FP8 算力 1,299 TFLOPS**（密集）/ 2,563 TFLOPS（稀疏），**96GB HBM** 容量，**2.9 TB/s 带宽**。Trn2 实例包含 **16 颗 Trainium2** 芯片。Trn2 UltraServer 通过 NeuronLink 互联 4 个实例，组成 **64 颗芯片**。

## 核心规格

| 项目 | 参数 |
| **发布** | 2024 年 12 月 3 日 GA |
|------|------|
| **架构** | Trainium2（NeuronCore-v3） |
| **制程** | TSMC 4nm（推测） |
| **NeuronCore** | 8 颗/芯片（NeuronCore-v3） |
| **显存** | **96 GB HBM**（3× 第一代） |
| **显存带宽** | **2.9 TB/s**（3.6× 第一代） |
| **FP8 算力** | **1,299 TFLOPS**（密集）/ 2,563（稀疏） |
| **BF16/FP16/TF32** | 667 TFLOPS |
| **FP32** | 181 TFLOPS |
| **TDP** | 700 W |
| **NeuronLink** | NeuronLink-v3（1.28 TB/s 双向） |
| **DMA 带宽** | 3.5 TB/s |

## Trainium 1 vs Trainium 2

| 指标 | Trainium 1 | Trainium 2 | 提升 |
|------|------------|------------|------|
| 工艺 | 7nm | 4nm | — |
| NeuronCore | 32 颗/芯片 | 8 颗/芯片 | 简化 |
| HBM 容量 | 32 GB | 96 GB | **3×** |
| HBM 带宽 | 0.8 TB/s | 2.9 TB/s | **3.6×** |
| FP8 算力 | 191 TFLOPS | 1,299 TFLOPS | **6.7×** |
| BF16/FP16 | 191 TFLOPS | 667 TFLOPS | **3.4×** |
| FP32 | 48 TFLOPS | 181 TFLOPS | **3.7×** |

## Trn2 实例与 UltraServer

| 形态 | 配置 | 算力 |
|------|------|------|
| **Trn2.48xlarge** | 16 颗 Trainium2 | 20.8 FP8 PFLOPS |
| **Trn2 UltraServer** | 64 颗 Trainium2（4× Trn2） | **83.2 FP8 PFLOPS** |
| **Project Rainier** | 数十万颗 Trainium2（Anthropic） | 5× Anthropic 当前 |

## 厂商信息

| 项目 | 内容 |
|------|------|
| **制造商** | Amazon (Annapurna Labs) |
| **官网** | https://aws.amazon.com/machine-learning/trainium/ |
| **产品页** | https://aws.amazon.com/ec2/instance-types/trn2/ |
| **SDK** | https://awsdocs-neuron.readthedocs-hosted.com/ |


## 关键特性

- **Logical NeuronCore Configuration (LNC)**：多个物理核合并为逻辑核
- **NeuronLink 2D Torus**：低延迟高带宽
- **30-40% 性价比** 优势 vs EC2 P5e/P5en（H100）
- **EFAv3 互联**：3.2 Tbps
- **UltraServer 64 芯片**：万亿参数训练

## 适用场景

- LLM 训练（千亿到万亿参数）
- 大规模推理
- 训练 + 推理 fungible

## 相关产品对比

- [AWS Trainium 1](/docs/cards/aws/trainium) - 前代
- [NVIDIA H100](/docs/cards/nvidia/h100) - 同期
- [NVIDIA B200](/docs/cards/nvidia/b200) - 同代
- [AMD MI300X](/docs/cards/amd/mi300x) - 显存类似
