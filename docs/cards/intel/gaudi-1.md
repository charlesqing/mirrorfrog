---
id: gaudi-1
title: Intel Gaudi 1 (Habana 第一代)
sidebar_label: Gaudi 1
description: Intel Gaudi 1 详尽规格：Habana Labs 第一代训练卡、V100 性能、性价比之选。
keywords: [Intel Gaudi 1, Habana Labs, HL-2000, V100 替代, 性价比]
---

# Intel Gaudi 1 (Habana Labs 第一代)

## 产品概述

**Intel Gaudi 1**（HL-2000）是 **Habana Labs**（2019 年被 Intel 收购）推出的**第一代 AI 训练加速器**。2020 年发布，定位为 **NVIDIA V100 的低成本替代**。

## 核心规格

| 项目 | 参数 |
|------|------|
| **架构** | Habana Goya（训练） |
| **制程** | TSMC 16nm |
| **TPC（Tensor 处理器核心）** | 2 × 矩阵乘法引擎 |
| **GEMM 引擎** | 集成 8× 1024-bit MAC |
| **显存** | 32 GB HBM2 |
| **显存带宽** | 1 TB/s |
| **FP16 算力** | 270 TFLOPS（密集） / 540 TFLOPS（稀疏） |
| **INT8** | 270 TOPS |
| **互联** | **RoCE v2 100 GbE**（10 个 100GbE 端口） |
| **TDP** | 250 W |
| **接口** | PCIe Gen4 ×16 |
| **首发价** | $8,000-$10,000 |

## Gaudi 1 vs V100 vs A100

| 指标 | Gaudi 1 | V100 32GB | A100 40GB |
|------|---------|-----------|-----------|
| 架构 | Goya | Volta | Ampere |
| 制程 | 16nm | 12nm | 7nm |
| 显存 | 32GB HBM2 | 32GB HBM2 | 40GB HBM2e |
| 带宽 | 1 TB/s | 900 GB/s | 1.6 TB/s |
| FP16 | 270/540 TFLOPS | 125/250 TFLOPS | 312/624 TFLOPS |
| TDP | 250W | 250W | 300W |
| 互联 | **10× 100GbE** | NVLink 2.0 | NVLink 3.0 |
| 价格（首发） | $8,000 | $8,000 | $11,000 |

## 独特优势：RoCE 互联

- **10 个 100 GbE RoCE v2 端口**（1,000 Gbps 聚合）
- **标准以太网**，无需专有 NVLink
- 训练多节点扩展**比 NVLink 更便宜**
- 大规模训练集群优势

## 软件生态

- **SynapseAI SDK**（Habana 自研）
- **TensorFlow / PyTorch**（官方支持）
- **ONNX**（转换工具）
- 性能早期不如 NVIDIA，但**性价比突出**

## 适用场景

- ✅ **性价比 AI 训练**（V100 同性能，半价）
- ✅ 大规模多节点训练（RoCE 优势）
- ✅ 推荐系统 / NLP 训练
- ❌ 推理（应使用 Gaudi 2/3）
- ❌ 主流生态（PyTorch 性能 < NVIDIA）

## 厂商信息

| 项目 | 内容 |
|------|------|
| **厂商** | Intel (Habana Labs) |
| **产品页** | https://www.intel.com/content/www/us/en/products/details/processors/ai-accelerators/gaudi.html |
| **价格** | $8,000-$10,000（已停产，新品 Gaudi 2/3） |
| **目标市场** | 性价比训练、HPC |

## 相关卡

- [Intel Gaudi 2](/docs/cards/intel/gaudi-2) - 第二代
- [Intel Gaudi 3](/docs/cards/intel/gaudi-3) - 最新
- [NVIDIA A100](/docs/cards/nvidia/a100) - 同代对比
- [Google TPU v4](/docs/cards/google/tpu-v4) - 同代 TPU
