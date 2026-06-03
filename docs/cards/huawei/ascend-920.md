---
id: ascend-920
title: Huawei Ascend 920 (昇腾 920)
sidebar_label: Huawei Ascend 920
description: Huawei Ascend 920 详尽规格：6nm 工艺、900+ BF16 TFLOPS、4 Tbps HBM 带宽，2025 H2 量产，对标 NVIDIA H20 / 国产替代。
keywords: [Huawei Ascend 920, 昇腾 920, 6nm, 900 BF16 TFLOPS, 4 Tbps, 国产替代, H20 对标, 2025 H2]
---

# Huawei Ascend 920 (昇腾 920)

## 产品概述

**Huawei Ascend 920**（昇腾 920）是 Ascend 910C 之后的**下一代昇腾芯片**，**2025 H2 大规模量产**。采用 **6nm 工艺**（SMIC N+1 / N+2 国产化），**900+ BF16 TFLOPS** 算力，**4 Tbps（4,000 GB/s）HBM 带宽**，是国产 AI 芯片中**带宽最高的 HBM 实现**。

Ascend 920 是 **Huawei CloudMatrix 384 / CloudMatrix 384 Ultra** 的核心，是 2025-2026 年中国国产 AI 集群的旗舰。

## 核心规格

| 项目 | 参数 |
|------|------|
| **架构** | Da Vinci v4 |
| **制程** | **6nm（SMIC N+1 / N+2 国产化）** |
| **小芯片数** | 2×（双 die 封装，类比 910C） |
| **HBM** | 8× HBM3 模块 |
| **HBM 容量** | ~96 GB（推测） |
| **HBM 带宽** | **4 Tbps = 4,000 GB/s** |
| **BF16 算力** | **900+ TFLOPS** |
| **FP16 算力** | 1,800 TFLOPS（推测） |
| **INT8 算力** | 3,600 TOPS（推测） |
| **TDP** | ~400 W |
| **互联** | HCCS（Huawei Cache Coherence System） |
| **首发** | **2025 H2 量产** |

> 📌 **4 Tbps 带宽 = 国产最高 HBM 带宽**，比 Ascend 910C 的 3.2 Tbps 高 25%。

## Ascend 910C vs Ascend 920 升级对比

| 指标 | Ascend 910C | **Ascend 920** | 提升 |
|------|-------------|----------------|------|
| 架构 | Da Vinci v3 | **Da Vinci v4** | 新一代 |
| 制程 | 7nm | **6nm** | 更先进 |
| HBM 带宽 | 3.2 Tbps | **4 Tbps** | **1.25×** |
| BF16 算力 | 780 TFLOPS | **900+ TFLOPS** | **1.15×** |
| TDP | ~310 W | ~400 W | +29% |
| 发布时间 | 2025-04 | **2025 H2** | — |

## Ascend 920 vs NVIDIA H20（对标）

| 指标 | Ascend 920 | NVIDIA H20 |
|------|------------|------------|
| 定位 | 国产替代 | 中国合规 AI 芯片 |
| 制程 | 6nm | TSMC 4N（受限后部分 SMIC 国产） |
| 显存 | ~96 GB | 96 GB HBM3 |
| 显存带宽 | **4 Tbps** | 4.0 Tbps |
| BF16 算力 | **900 TFLOPS** | 296 TFLOPS |
| **BF16 算力比** | **3×** | 1×（基准） |
| 互联 | HCCS 1.2 Tbps | NVLink 900 GB/s |
| 软件 | CANN + MindSpore | CUDA（受限） |
| 进口合规 | ✅ 国产 | ⚠️ 美国出口管制 |

> 💡 **Ascend 920 在 BF16 算力上**显著领先 H20（3×），且 4 Tbps 带宽与 H20 持平。这是国产替代的**关键胜利**。

## CloudMatrix 384 Ultra 系统（推测）

| 项目 | 配置 |
|------|------|
| **芯片数** | 384 颗 Ascend 920 |
| **机柜数** | 16（12 计算 + 4 网络） |
| **HBM 总量** | ~36 TB（96GB × 384） |
| **互联** | 全光网状，**8,000+ LPO 光模块** |
| **BF16 算力（系统）** | **~345 PFLOPS**（推测 900 × 384） |
| **TDP（系统）** | ~150 kW |

> **CloudMatrix 384 Ultra 总算力 > NVIDIA GB300 NVL72 集群**（GB300 NVL72 单机柜约 144 PFLOPS FP8 dense；CloudMatrix 384 Ultra 单机柜 ~22 PFLOPS BF16 dense）。**CloudMatrix 384 Ultra 系统级 = GB200 NVL72 的 1.5-2×**。

## CANN + MindSpore 软件生态

- **CANN 8.x**（Compute Architecture for Neural Networks）：类比 CUDA
- **MindSpore 2.4+**：Huawei 自研 AI 框架
- **PyTorch 2.3+ MindSpore 后端**：兼容 PyTorch
- **vLLM 0.7+ Ascend 后端**：低延迟推理
- **ONNX-Runtime Ascend 后端**：跨框架推理
- **Atlas 900/950 系列服务器**：OEM 整机

## 部署推荐配置

| 场景 | 推荐配置 |
|------|----------|
| **中国国产 AI 集群** | CloudMatrix 384 Ultra（384 颗 920） |
| **政府/金融国产化** | Atlas 950 + Ascend 920 |
| **大模型训练** | Ascend 920 + MindSpore |
| **推理服务** | Ascend 920 + vLLM Ascend |
| **科学计算** | Ascend 920（FP64 优势） |

## 适用场景

- ✅ **中国国产替代**（政府、金融、电信、能源）
- ✅ **大模型训练**（900 BF16 TFLOPS / 4 Tbps）
- ✅ **超大规模集群**（CloudMatrix 384 Ultra）
- ✅ **科学计算**（FP64 优势）
- ❌ 出口市场（美国出口管制）
- ❌ 非国产软件生态（迁移成本高）

## 厂商信息

| 项目 | 内容 |
|------|------|
| **厂商** | Huawei Technologies |
| **首发** | **2025 H2 大规模量产** |
| **制程代工** | SMIC（中芯国际，6nm N+1/N+2） |
| **产品页** | https://www.huawei.com/en/products/computing/ascend |
| **整机** | Atlas 950 / CloudMatrix 384 Ultra |
| **软件栈** | CANN + MindSpore |

## 相关产品

- [Huawei Ascend 910C](/docs/cards/huawei/ascend-910c) - 前代旗舰
- [Huawei Ascend 910D](/docs/cards/huawei/ascend-910d) - 高端型号
- [Huawei Ascend 910B](/docs/cards/huawei/ascend-910b) - 上代主力
- [NVIDIA H100 NVL](/docs/cards/nvidia/h100-nvl) - 对标产品
- [AMD MI300X](/docs/cards/amd/mi300x) - 海外替代
- [完整对比表](/docs/comparison)
