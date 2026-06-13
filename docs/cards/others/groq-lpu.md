---
id: groq-lpu
title: Groq LPU
sidebar_label: Groq LPU
description: Groq LPU (Language Processing Unit) 详尽规格：1,000 TOPS INT8 估算、228MB SRAM、确定性低延迟 LLM 推理。
keywords: [Groq LPU, Language Processing Unit, LLM 推理, 低延迟, GroqCloud]
---

# Groq LPU (Language Processing Unit)

## 产品概述

Groq LPU（Language Processing Unit）是 Groq 自研的**确定性 LLM 推理处理器**，以其**极低推理延迟**著称（LLM Token 生成以毫秒计）。采用**编译器定义硬件**的架构，无缓存缺失，无乱序执行，所有延迟可预测。**GroqCloud** 提供 API 服务。

## 核心规格（GroqChip v1）

| 项目 | 参数 |
|------|------|
| **架构** | Tensor Streaming Processor (TSP) |
| **制程** | TSMC 14nm |
| **片上 SRAM** | 228 MB |
| **INT8 算力（估算）** | 1,000 TOPS |
| **FP16** | 188 TFLOPS（官方） |
| **互联** | GroqSync（确定性互联） |
| **TDP** | 300 W |
| **形式** | GroqRack（8 颗 GroqChip） |

## 厂商信息

| 项目 | 内容 |
|------|------|
| **制造商** | Groq Inc. |
| **官网** | https://groq.com |
| **产品页** | https://groq.com/products/ |
| **API 控制台** | https://console.groq.com |
| **SDK** | https://github.com/groqcloud |
| **文档** | https://docs.groq.com |

## 关键特性

- **确定性架构**：所有执行可预测
- **极致低延迟**：LLM 推理比 GPU 快 5-10×
- **编译器驱动**：软件定义硬件
- **流式张量架构**

## 适用场景

- **LLM 实时推理**（Chatbot、Code 助手）
- 低延迟 AI 服务
- GroqCloud API（按 Token 计费）

## 相关产品对比

- [NVIDIA H100 / H200](/docs/cards/nvidia/h200) - 主流推理
- [AWS Inferentia 2](/docs/cards/aws/inferentia-2) - 云端推理
- [SambaNova SN40L](/docs/cards/others/sambanova-sn40l) - 另一类创新架构
