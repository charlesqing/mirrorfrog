---
id: qualcomm-ai100
title: Qualcomm Cloud AI 100
sidebar_label: Qualcomm Cloud AI 100
description: Qualcomm Cloud AI 100 详尽规格：400 TOPS INT8、AIC100 编译器、低功耗数据中心推理。
keywords: [Qualcomm Cloud AI 100, Qualcomm AI 100, AIC100, 400 TOPS, 数据中心推理, 低功耗]
---

# Qualcomm Cloud AI 100 (AIC100)

## 产品概述

Qualcomm **Cloud AI 100**（开发代号 **AIC100**）是 Qualcomm 面向**数据中心 AI 推理**的 ASIC，定位为 NVIDIA T4/L4 的低功耗替代品。已商用部署于 **Hugging Face Inference API**、Oracle Cloud、DaVinci 等。

基于 Hexagon NPU IP，**400 TOPS INT8**（每张卡），**典型功耗 75W**（性能/瓦特优势明显）。

## 核心规格

| 项目 | 参数 |
|------|------|
| **架构** | Qualcomm AI Engine（基于 Hexagon） |
| **制程** | TSMC 7nm |
| **INT8 算力** | 400 TOPS |
| **FP16** | 100 TFLOPS（官方） |
| **INT4** | 800 TOPS（稀疏化） |
| **片上 SRAM** | 16 MB |
| **内存** | 16/32/64 GB LPDDR4X |
| **内存带宽** | 51.2 GB/s（16GB）/ 102.4 GB/s（64GB） |
| **TDP** | 75 W |
| **形式** | PCIe Gen4 x16 双槽卡 / M.2 / HHHL |
| **互联** | PCIe Gen4 |

## 产品线

| 型号 | INT8 | 内存 | TDP | 形态 |
|------|------|------|-----|------|
| **AI 100 Standard** | 200 TOPS | 16 GB | 75 W | PCIe / M.2 |
| **AI 100 Pro** | 400 TOPS | 32 GB | 75 W | PCIe |
| **AI 100 Ultra** | 400 TOPS | 64 GB | 150 W | PCIe 双槽 |

## 性能/瓦特优势

| 对比 | 性能/瓦特 |
|------|-----------|
| **Qualcomm AI 100 Ultra** | 2.67 TOPS/W |
| NVIDIA L4 | ~2.5 TOPS/W |
| NVIDIA T4 | 2.5 TOPS/W |
| NVIDIA A100 80GB | 1.0 TOPS/W |
| **优势** | **比 A100 高 ~2.7×** |

> 75W 标准功耗 = **可部署于标准 1U 服务器，单机 8-16 卡**。

## 软件生态

### 编译器与运行时
- **Qualcomm AI Engine Direct SDK**（C/C++ API）
- **Qualcomm Neural Processing SDK**（Python）
- **GLOW**（基于 LLVM 的 AI 编译器，原作者：Facebook）

### 框架支持
- **TensorFlow / PyTorch / ONNX**（通过量化转换）
- **Apache TVM**（自动量化/编译）

### 模型支持
- 主流 CV 模型（ResNet、EfficientNet、YOLO）
- 主流 NLP 模型（BERT、RoBERTa）
- 主流 LLM（Llama 2、Mistral、Falcon 量化版）

## 部署案例

- **Hugging Face Inference Endpoints** — 部分端点用 AI 100 跑 LLM 推理
- **Oracle Cloud Infrastructure (OCI)** — 提供 AI 100 裸金属实例
- **DaVinci** — AI 100 集群服务
- **Cirrascale** — 云端 AI 100 租赁

## 厂商信息

| 项目 | 内容 |
|------|------|
| **厂商** | Qualcomm Technologies, Inc. |
| **产品页** | https://www.qualcomm.com/products/technology/processors/cloud-ai-100 |
| **售价** | $1,500-$3,500（取决于型号） |
| **目标市场** | 数据中心推理、边缘服务器、超大规模云 |

## 适用场景

- ✅ **低功耗数据中心推理**（推理/瓦特 SOTA）
- ✅ 视觉 AI（CV 推理）
- ✅ 语音 AI（NLP 推理）
- ✅ 边缘服务器（75W 单卡）
- ⚠️ LLM 推理（生态尚可，但性能落后 NVIDIA H100/L40S）
- ❌ 大模型训练（不支持）

## 相关卡

- [NVIDIA T4](/docs/cards/nvidia/t4) - 同级别推理卡
- [NVIDIA L4](/docs/cards/nvidia/l4) - Ada 推理替代
- [Groq LPU](/docs/cards/others/groq-lpu) - 同为 LLM 推理 ASIC
- [Google TPU v6e](/docs/cards/google/tpu-v6e) - 另一数据中心推理 ASIC
