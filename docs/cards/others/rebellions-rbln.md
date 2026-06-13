---
id: rebellions-rbln
title: Rebellions RBLN / ATOM (韩国 AI 推理, 2024)
sidebar_label: Rebellions
description: Rebellions RBLN / ATOM 详尽规格：5nm、16 INT8 TOPS、15-30W、RDU 架构、KT 部署、韩国 AI 双雄。
keywords: [Rebellions, RBLN, ATOM, 韩国 AI, RDU, 5nm, 边缘 AI, KT 部署]
---

# Rebellions RBLN / ATOM (韩国 AI 推理, 2024)

## 产品概述

**Rebellions** 是韩国 AI 推理芯片公司，**2020 成立**，首尔。**RBLN**（Rebellions Neural Processing Unit）是其数据中心 AI 推理芯片，**2024-Q2 发布**，**TSMC 5nm**，**16 INT8 TOPS**（推测），**15-30W TDP**。配套 **RDU（Reconfigurable Dataflow Unit）** 异构数据流架构 + **SDK** 兼容 PyTorch / ONNX。

**战略意义**：Rebellions 是 **韩国 AI 创业双雄之一**（与 FuriosaAI 并称），**首批客户：KT（韩国电信）、SK 集团、Samsung、Naver**。**ATOM** 是 2025 下一代芯片（**128GB HBM，400 TFLOPS**），**对标 NVIDIA H100 / L4**。

## 核心规格（RBLN 当前）

| 项目 | 参数 |
|------|------|
| **架构** | Rebellions RDU（Reconfigurable Dataflow） |
| **制程** | **TSMC 5nm** |
| **RDU 核数** | **8× RDU core**（每核 32 MB SRAM） |
| **片上 SRAM** | **256MB** |
| **LPDDR5X** | 16GB |
| **内存带宽** | **102 GB/s** |
| **INT8** | **16 TOPS** |
| **BF16** | 8 TFLOPS |
| **TDP** | 15 W |
| **板卡形态** | M.2 / PCIe Gen4 / OAM |
| **互连** | PCIe Gen4 |
| **量产** | 2024-Q2 |
| **单价** | ~$500-1500 |

## ATOM 下一代（2025 推测）

| 项目 | 参数 |
|------|------|
| **架构** | Rebellions RDU 2.0 |
| **制程** | TSMC 5nm |
| **RDU 核数** | 32× RDU core |
| **HBM** | **128GB HBM3** |
| **内存带宽** | **~3 TB/s** |
| **BF16** | **400 TFLOPS**（**对标 H100 推理**） |
| **INT8** | 800 TOPS |
| **TDP** | **~250W** |
| **量产** | **2025-Q3**（推测） |

## RDU 架构

| 维度 | 传统 GPU | Rebellions RDU |
|------|----------|-----------------|
| **执行模型** | 命令式 | **数据流（Reconfigurable）** |
| **并行性** | 线程级 | **算子级（数据流）** |
| **片上内存** | 共享 L2 + 寄存器 | **大型分布式 SRAM（每核 32MB）** |
| **数据流** | 缓存行 | **图流**（可重构） |
| **功耗** | 70-700W | **15-30W**（Edge 友好） |
| **目标** | 数据中心 | **边缘 + 数据中心** |
| **可重构** | CUDA 程序 | **数据流图重配置** |

### RDU Core

```
单 RDU Core:
- 32 MB SRAM
- 256 个 8-bit MAC
- 数据流调度器
- 标量 + 向量 + 张量单元

RBLN 8 核:
- 8 × 32 MB = 256 MB SRAM
- 8 × 256 MAC = 2048 个 MAC
- 数据流互联
```

## 韩国 AI 创业双雄

| 维度 | Rebellions RBLN / ATOM | FuriosaAI RNGD |
|------|--------------------------|------------------|
| **目标市场** | **边缘 + 数据中心** | **数据中心推理** |
| **架构** | RDU（Reconfigurable Dataflow） | TCP（Tensor Contraction） |
| **制程** | 5nm | 5nm |
| **RBLN 算力** | 16 INT8 TOPS | - |
| **ATOM 算力** | 400 BF16 TF (推测) | 512 BF16 TF |
| **ATOM 内存** | 128GB HBM3 | 512GB HBM3 |
| **TDP** | 15-30W (RBLN) / 250W (ATOM) | 450W |
| **部署** | KT 边缘 + 云 | KT / SK / G42 数据中心 |
| **融资** | $200M+ | $300M+ |
| **估值** | $1B+ | $1.5B+ |
| **上市** | 2026 | 2026-2027 |

## 厂商信息

| 项目 | 内容 |
|------|------|
| **公司** | Rebellions Inc. |
| **联合创始人** | **Sungkyung Kim**（CEO，前 Samsung 半导体）|
| **联合创始人** | **Woosung Kim**（CTO）|
| **成立** | 2020 |
| **总部** | 韩国首尔 + 美国硅谷 |
| **融资** | **$200M+**（B 轮 2024-Q2 领投：KT + Korea Development Bank）|
| **估值（2025）** | **$1B+**（独角兽）|
| **2024 营收** | ~$25M |
| **员工** | ~150 人 |
| **代工** | TSMC 5nm |
| **主要客户** | **KT（韩国电信）**、**SK 集团**、**Samsung SDS**、**Naver HyperCLOVA X**、**Korea Investment & Securities** |
| **政府支持** | 韩国国家 AI 半导体战略、K-Cloud 项目 |
| **状态** | 准备 2026 IPO |

## 适用场景

- ✅ **Edge AI 推理**（15-30W 风冷）
- ✅ **韩国主权 AI**（KT / SK / Naver 客户）
- ✅ **LLM 推理**（ATOM 128GB HBM 装 70B）
- ✅ **数据中心推理**（ATOM 250W 节能）
- ✅ **多模态 AI**（图像 + 文本）
- ❌ **AI 训练**（仅推理）
- ❌ **CUDA 专有工作负载**（需 SDK 移植）
- ❌ **国际市场**（韩 / 亚洲为主）

## 关键特性

- **RDU 数据流架构**：可重构 + Edge 友好
- **15-30W TDP**：业界最低数据中心推理 TDP 之一
- **ATOM 128GB HBM**：2025 对标 H100
- **韩国国家 AI**：KT / SK / Naver 客户基础
- **缺点**：算力低于 H100（2×）、SDK 生态 2 年

## Rebellions 产品线

| 产品 | 发布 | 算力 | TDP | 目标 |
|------|------|------|-----|------|
| **ISM** (1st gen) | 2022 | 8 INT8 TOPS | 10W | Edge 早期 |
| **RBLN** (2nd gen) | **2024-Q2** | **16 INT8 TOPS** | **15-30W** | **Edge + 数据中心** |
| **ATOM** (3rd gen) | **2025-Q3 推测** | **400 BF16 TF** | **250W** | **数据中心** |
| ATOM Pro (推测) | 2026 | 800 BF16 TF | 400W | 高端数据中心 |

## Rebellions vs NVIDIA L4 vs FuriosaAI RBLN

| 指标 | Rebellions RBLN | NVIDIA L4 | FuriosaAI RNGD |
|------|-------------------|-----------|------------------|
| **INT8** | 16 TOPS | 485 TOPS | 1000 TOPS |
| **TDP** | **15-30W** | 72W | 450W |
| **能效** | 0.5-1 TOPS/W | 6.7 TOPS/W | 2.2 TOPS/W |
| **内存** | 16GB LPDDR5X | 24GB GDDR6 | 512GB HBM3 |
| **价格** | ~$1K | ~$2.5K | ~$22K |
| **目标** | Edge / Inference | 数据中心推理 | 大模型推理 |

> **Rebellions RBLN 优势**：**15-30W TDP**（L4 40% 节能）+ **价格便宜**（L4 40% 价格）。
> **L4 优势**：**485 TOPS**（RBLN 30× 算力）+ **CUDA 生态**。
> **RNGD 优势**：**512GB HBM3**（RBLN 32× 内存）。

## 相关卡

- [FuriosaAI RNGD](/docs/cards/others/furiosaai-rngd) - 韩国双雄
- [Groq LPU v2](/docs/cards/others/groq-lpu-v2) - LPU 推理
- [SambaNova SN40L](/docs/cards/others/sambanova-sn40l) - Dataflow
- [Blaize Xplorer X1600](/docs/cards/others/blaize-xplorer) - Edge AI
- [Hailo-8 / Hailo-15](/docs/cards/others/hailo) - Edge AI
- [Qualcomm AI 100](/docs/cards/others/qualcomm-ai100) - Edge AI
- [NVIDIA L4](/docs/cards/nvidia/l4) - 边缘推理
- [Cambricon 寒武纪 MLU 590](/docs/cards/others/cambricon-mlu) - 国产对比
