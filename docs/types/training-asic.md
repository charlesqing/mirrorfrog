---
id: training-asic
title: AI 训练专用 ASIC (TPU, Gaudi, Trainium)
sidebar_label: AI 训练 ASIC
description: 2025 年 AI 训练 ASIC 完整指南：Google TPU v5p/v6e/v7 Ironwood、Intel Gaudi 2/3、AWS Trainium 2 规格对比与选型。
keywords: [AI ASIC, Google TPU, Intel Gaudi, AWS Trainium, AI 训练芯片]
---

# AI 训练专用 ASIC 完整指南

AI 训练 ASIC（Application-Specific Integrated Circuit）是**专为 AI 训练优化**的定制芯片，区别于通用 GPU。它们通过牺牲灵活性换取**更高能效比**和**更优单位算力成本**。

## 主流 AI 训练 ASIC 对比

| 型号 | 厂商 | 制程 | 算力 (BF16) | 显存 | 互联 | 提供方式 |
|------|------|------|-------------|------|------|----------|
| **TPU 8t (Trillium 2 训练)** | Google | 3nm | ~3,500 TFLOPS | 216GB HBM | 3D Torus + Axion CPU | Google Cloud |
| **TPU 8i (Trillium 2 推理)** | Google | 3nm | ~5,500 TFLOPS | 288GB HBM | 3D Torus | Google Cloud |
| **Google TPU v7 (Ironwood)** | Google | 5nm | 2,307 TFLOPS | 192GB HBM | 3D Torus, 9,216 Pod | Google Cloud |
| **Google TPU v6e (Trillium)** | Google | 5nm | 918 TFLOPS | 32GB HBM | 2D Torus, 256 Pod | Google Cloud |
| **Google TPU v5p** | Google | 5nm | 459 TFLOPS | 95GB HBM | 3D Torus, 8,960 Pod | Google Cloud |
| **AWS Trainium 3 (Trn3)** | Amazon | **3nm** | 1,300 TFLOPS | **144GB HBM** | NeuronLink-v4, **144 UltraServer** | AWS Cloud (2025-12 GA) |
| **AWS Trainium 2** | Amazon | 4nm | 667 TFLOPS | 96GB HBM | NeuronLink, 64 UltraServer | AWS Cloud |
| **AWS Trainium 1** | Amazon | 7nm | 191 TFLOPS | 32GB HBM | NeuronLink, 16 集群 | AWS Cloud |
| **Intel Gaudi 3** | Intel | 5nm | 1,835 TFLOPS | 128GB HBM2e | 24× 200GbE | 商用 |
| **Intel Gaudi 2** | Intel | 7nm | 432 TFLOPS | 96GB HBM2e | 24× 100GbE | 商用 |

## Google TPU 系列演进

| 代 | 名称 | 算力 (BF16) | HBM | 互联 | 主要用途 |
|----|------|-------------|-----|------|----------|
| v4 | — | 275 TFLOPS | 32GB | 3D Torus | 训练 |
| v5p | — | 459 TFLOPS | 95GB | 3D Torus | 训练 |
| v5e | — | 197 TFLOPS | 16GB | 2D Torus | 推理 |
| v6e | Trillium | 918 TFLOPS | 32GB | 2D Torus | 训练/推理 |
| **v7** | **Ironwood** | **2,307 TFLOPS** | **192GB** | **3D Torus** | **推理优先** |
| **8t** | **Trillium 2 训练** | **~3,500 TFLOPS** | **216GB** | **3D Torus + Axion CPU** | **训练专用** |
| **8i** | **Trillium 2 推理** | **~5,500 TFLOPS** | **288GB** | **3D Torus** | **推理专用** |

## 选型建议

### 按云服务商

- **Google Cloud**：TPU v5p / v6e / v7 Ironwood / **TPU 8t (训练) + 8i (推理) 拆分 (2026-04)**
- **AWS**：**Trainium 3 (2025-12 GA, 3nm)** / Trainium 2
- **本地 / 私有云**：Intel Gaudi 3（开放标准以太网）

### 按规模

- **超大规模（万亿参数）**：TPU 8t (216GB) + Cerebras WSE-3 / WSE-4
- **大规模（百亿参数）**：TPU v6e, Gaudi 3, Trainium 2/3
- **中等规模（十亿参数）**：TPU v5e, Gaudi 2, Trainium 1
- **400B+ 模型训练**：**Trn3 UltraServer (144 颗, 52 PFLOPS FP8)**

## 关键优势 vs GPU

- **能效比**：每瓦特性能 2-3× 优势
- **单位算力成本**：30-50% 优势
- **互联规模**：8,000+ 芯片 Pod
- **定制架构**：避免 GPU 通用性带来的浪费

## 关键劣势

- **软件生态成熟度**：CUDA 仍占主导
- **供应商锁定**：TPU 仅 Google Cloud
- **模型迁移成本**：需要重新优化

## 详细产品页

- [Google TPU v5p](/docs/cards/google/tpu-v5p) - Premium 训练
- [Google TPU v6e (Trillium)](/docs/cards/google/tpu-v6e) - 第六代
- [Google TPU v7 (Ironwood)](/docs/cards/google/tpu-ironwood) - 第七代最新
- [Google TPU 8t](/docs/cards/google/tpu-8t) - 2026-04 训练专用
- [Google TPU 8i](/docs/cards/google/tpu-8i) - 2026-04 推理专用
- [Intel Gaudi 2](/docs/cards/intel/gaudi-2) - 性价比
- [Intel Gaudi 3](/docs/cards/intel/gaudi-3) - 4× 升级
- [Intel Jaguar Shores](/docs/cards/intel/jaguar-shores) - 2027-2028 机柜级
- [AWS Trainium](/docs/cards/aws/trainium) - 第一代
- [AWS Trainium 2](/docs/cards/aws/trainium-2) - 4× 性能
- [AWS Trainium 3](/docs/cards/aws/trainium-3) - 2025-12 GA, 3nm

## 相关类型

- [AI 训练 GPU (NVIDIA/AMD/Huawei)](/docs/types/training-gpu)
- [晶圆级超算训练](/docs/types/training-wafer)
- [AI 推理 ASIC (Inferentia, TPU v5e)](/docs/types/inference-asic)
- [完整对比表](/docs/comparison)
