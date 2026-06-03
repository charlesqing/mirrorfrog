---
id: h100-nvl
title: NVIDIA H100 NVL (94GB HBM3 双 die)
sidebar_label: H100 NVL
description: NVIDIA H100 NVL 详尽规格：双 die H100、94GB HBM3、188GB HBM3e 容量、专为 LLM 推理优化。
keywords: [H100 NVL, 双 die, 94GB HBM3, 188GB HBM3e, LLM 推理, PCIe Gen5]
---

# NVIDIA H100 NVL

## 产品概述

**NVIDIA H100 NVL** 是 H100 的 LLM 专用变体，**双 die 封装**（类似 MCM），单卡提供 **94GB HBM3**（双 48GB 堆叠）或 **188GB HBM3e**。专为**超大 LLM 推理**（GPT-4 类 1.8T 模型）设计，可单卡加载。

**PCIe Gen5** 接口（vs 原始 H100 SXM 的 NVLink），方便部署于 PCIe 服务器。

## 核心规格

| 项目 | 参数 |
|------|------|
| **架构** | Hopper (GH100, 双 die) |
| **制程** | TSMC 4N |
| **CUDA 核心** | 14,592 × 2 = 29,184（双 die） |
| **Tensor 核心** | 456 × 2 = 912（第四代） |
| **基础频率** | 1.08 GHz |
| **Boost 频率** | 1.78 GHz |
| **显存** | **94 GB HBM3**（双 48GB 堆叠） / **188 GB HBM3e** |
| **显存带宽** | 3.35 TB/s（HBM3）/ 7.0 TB/s（HBM3e） |
| **FP16 Tensor** | 1979 TFLOPS（稀疏） |
| **FP8 Tensor** | 3958 TFLOPS（稀疏） |
| **TDP** | 350-400 W（PCIe）/ 700 W（SXM-NVL） |
| **接口** | PCIe Gen5 ×16 |
| **首发** | 2024-Q1 |
| **价格** | $30,000-$40,000（OEM） |

## 与 H100 SXM 对比

| 指标 | H100 SXM 80GB | H100 NVL 94GB | 差异 |
|------|---------------|---------------|------|
| 显存容量 | 80GB HBM3 | 94GB HBM3 | +17.5% |
| 显存带宽 | 3.35 TB/s | 3.35 TB/s | 持平 |
| NVLink | 900 GB/s | 600 GB/s（PCIe） | -33% |
| 互联带宽 | NVLink 18-link | PCIe Gen5 | 灵活 |
| TDP | 700W | 350-400W | -43% |
| 适用 | 训练/HPC | LLM 推理 | 优化 |

## LLM 推理场景

### 单卡加载超大模型
- **Llama 3 70B FP16（~140GB）** → 必须 2 卡
- **Llama 3 70B INT4（~40GB）** → **单卡即可**
- **Mixtral 8x22B INT4（~80GB）** → 单卡可载
- **Llama 3 405B INT4（~230GB）** → 3 卡 NVL

### 多卡 NVL Bridge
- 2 张 H100 NVL 通过 NVLink Bridge 互联 → 188GB 统一显存
- **2x H100 NVL 推理 405B 模型**（量化后~230GB）

## 实际部署案例

- **NVIDIA AI Enterprise** 认证服务器（戴尔、HPE、Supermicro）
- **CoreWeave / Lambda Labs** 云端 NVL 实例
- **Hugging Face Inference Endpoints** 部分 H100 实例

## 厂商信息

| 项目 | 内容 |
|------|------|
| **厂商** | NVIDIA |
| **产品页** | https://www.nvidia.com/en-us/data-center/h100/ |
| **OEM 价格** | $30,000-$40,000（取决于 OEM） |
| **目标市场** | 超大 LLM 推理、企业 GenAI |

## 适用场景

- ✅ **超大 LLM 推理**（70B+ 单卡）
- ✅ 长上下文 LLM（94GB 可加载 200K 上下文）
- ✅ PCIe 服务器部署
- ✅ 双卡 NVL Bridge 加载 405B 模型
- ❌ 训练（H100 SXM 更适合，NVLink 带宽更高）
- ❌ HPC（应使用 H100 SXM/H200）

## 相关卡

- [NVIDIA H100](/docs/cards/nvidia/h100) - SXM 版本
- [NVIDIA H200](/docs/cards/nvidia/h200) - 141GB HBM3e
- [NVIDIA B200](/docs/cards/nvidia/b200) - 下一代
- [Google TPU v7 Ironwood](/docs/cards/google/tpu-ironwood) - 192GB 推理 ASIC
