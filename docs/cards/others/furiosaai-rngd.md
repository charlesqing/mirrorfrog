---
id: furiosaai-rngd
title: FuriosaAI RNGD (韩国 AI 推理, 2024)
sidebar_label: FuriosaAI RNGD
description: FuriosaAI RNGD 详尽规格：5nm、512 GB HBM3、200K tokens/s LLM 推理、KT / 韩国电信 / 阿拉伯云客户、韩国 AI 芯片代表。
keywords: [FuriosaAI, RNGD, 韩国 AI, 5nm, HBM3, 200K tokens/s, KT 客户, 韩国 AI 创业]
---

# FuriosaAI RNGD (韩国 AI 推理, 2024)

## 产品概述

**FuriosaAI** 是韩国 AI 推理芯片公司，**2017 成立**，首尔。**RNGD**（Renegade）是其第二代 AI 推理芯片，**2024-Q3 发布**，**TSMC 5nm**，**512GB HBM3**（**单卡业界最大 HBM 之一**），**512 TFLOPS BF16**，**200K tokens/s LLM 推理**（**业界领先 LPU 级别**）。配套 **Tensor Contraction Processor (TCP)** 架构 + **SDK** 兼容 PyTorch / TensorFlow / ONNX。

**战略意义**：FuriosaAI 是 **韩国 AI 算力的国家代表**，客户包括 **KT（韩国电信）、韩国国家 AI、SK 集团**、LG AI Research、Samsung SDS、**阿拉伯云（G42）**。是 **韩国对 NVIDIA H100 出口管制风险** 的核心替代方案。

## 核心规格

| 项目 | 参数 |
|------|------|
| **架构** | FuriosaAI TCP（Tensor Contraction Processor） |
| **制程** | **TSMC 5nm** |
| **TCP 核数** | **2× TCP tile**（每 tile 256 个 tensor contraction 单元） |
| **HBM** | **512GB HBM3**（**业界最大 HBM 容量之一**）|
| **HBM 通道** | 8 stack × 64GB HBM3 |
| **内存带宽** | **~6.4 TB/s** |
| **BF16 dense** | **512 TFLOPS** |
| **FP16 dense** | 512 TFLOPS |
| **INT8** | 1 POPS |
| **TDP** | 450 W |
| **板卡形态** | OAM / PCIe Gen5 ×16 |
| **互连** | FuriosaLink（自研，类 NVLink 3）|
| **量产** | **2024-Q3** |
| **单价（OAM）** | **~$20,000-25,000**（推测）|

## Tensor Contraction Processor (TCP) 架构

| 维度 | 传统 GPU | FuriosaAI TCP |
|------|----------|-----------------|
| **执行模型** | 标量 MAC 阵列 | **张量收缩（Tensor Contraction）** |
| **并行性** | 线程级（CUDA cores）| **张量级（更高维）** |
| **片上内存** | 共享 L2 + 寄存器 | **大型分布式 SRAM**（每 tile 64MB）|
| **数据流** | 缓存行 + HBM | **图流（最优张量收缩路径）** |
| **功耗** | 70-700W | **450W** |
| **目标** | 训练 + 推理 | **LLM 推理（优化）** |

### TCP Tile 详解

```
单 TCP Tile:
- 256 个 Tensor Contraction 单元
- 64MB SRAM
- 全互联 NoC（Network on Chip）
- 8 个 DMA 引擎

RNGD 全卡:
- 2 个 TCP Tile（共 512 个 TC 单元）
- 128MB SRAM 共享
- 1 TB/s 域内
```

**关键优势**：
- **张量收缩代替矩阵乘**：更高维操作（**LLM Attention 优化**）
- **0 缓存开销**：数据流在 SRAM 内部
- **LLM 推理性能 200K tokens/s**

## 200K tokens/s LLM 推理

| 模型 | 量化 | FuriosaAI RNGD | NVIDIA H100 | 优势 |
|------|------|------------------|--------------|------|
| **Llama 2 70B** | FP16 | **~5K tok/s** | ~3K tok/s | **RNGD 1.7×** |
| **Llama 2 70B** | INT8 | **~10K tok/s** | ~6K tok/s | **RNGD 1.7×** |
| **Llama 3 8B** | FP16 | **~30K tok/s** | ~15K tok/s | **RNGD 2×** |
| **Mixtral 8x7B** | INT8 | **~20K tok/s** | ~12K tok/s | **RNGD 1.7×** |
| **合计吞吐 (Mixed)** | - | **200K+ tok/s** | ~150K tok/s | **RNGD 1.3×** |

> **FuriosaAI 杀手锏**：**512GB HBM3 单卡 = 业界最大 HBM 容量**，可装 **Llama 2 70B FP16**（140GB）+ **大 KV Cache**（300+GB），**单卡 5K tok/s 推理**（H100 1.7×）。

## 与 NVIDIA H100 对比

| 指标 | FuriosaAI RNGD | NVIDIA H100 | 差异 |
|------|------------------|--------------|------|
| **制程** | TSMC 5nm | TSMC 4N | 相当 |
| **BF16** | 512 TF | 1.5 PF (FP8 sparse) | H100 3× |
| **内存** | **512GB HBM3** | 80GB HBM3 | **RNGD 6.4×** |
| **带宽** | 6.4 TB/s | 3.35 TB/s | **RNGD 1.9×** |
| **TDP** | 450W | 700W | **RNGD -36%** |
| **能效** | 1.14 TOPS/W | 2.16 TOPS/W | H100 1.9× |
| **软件** | SDK (新) | CUDA (成熟) | H100 优势 |
| **价格** | ~$22K | ~$25-30K | 相当 |
| **LLM 70B 推理** | **5K tok/s** | ~3K tok/s | **RNGD 1.7×** |

> **RNGD 优势**：**512GB HBM3 = 业界最大** + **70B LLM 单卡 5K tok/s** + **TDP 450W 比 H100 节能 36%**。

## 厂商信息

| 项目 | 内容 |
|------|------|
| **公司** | FuriosaAI |
| **创始人** | **June Paik**（CEO，前 Samsung 半导体）|
| **成立** | 2017 |
| **总部** | 韩国首尔 + 美国圣何塞 |
| **融资** | **$300M+**（B 轮 2024-Q1 领投：韩国国家基金 + KT）|
| **估值（2025）** | **$1.5B+**（独角兽）|
| **2024 营收** | ~$40M |
| **员工** | ~200 人 |
| **代工** | TSMC 5nm |
| **主要客户** | **KT（韩国电信）**、**SK 集团**、**LG AI Research**、**Samsung SDS**、**G42（阿拉伯云）**、**NAVER** |
| **政府支持** | 韩国国家 AI 半导体战略、K-Cloud 项目 |
| **状态** | 准备 2026-2027 IPO |

## 韩国 AI 创业双雄

| 维度 | FuriosaAI | Rebellions |
|------|-----------|-------------|
| **产品** | **RNGD** | **RBLN / ATOM** |
| **架构** | TCP（张量收缩） | RDU（Reconfigurable Dataflow） |
| **制程** | 5nm | 5nm |
| **算力** | 512 BF16 TF | 16 INT8 TOPS (RBLN) |
| **内存** | **512GB HBM3**（业界最大）| 16GB LPDDR5X (RBLN) |
| **TDP** | 450W | 15-30W (RBLN) |
| **目标** | 数据中心推理 | **边缘 + 数据中心** |
| **客户** | KT / SK / G42 | KT / SK / Samsung / Naver |
| **融资** | $300M+ | $200M+ |
| **估值** | $1.5B+ | $1B+ |
| **上市** | 2026-2027 | 2026 |

## 适用场景

- ✅ **超大 LLM 推理**（512GB HBM3 装 70B FP16 + 大 KV Cache）
- ✅ **韩国 / 阿拉伯国家 AI**（主权 AI 算力）
- ✅ **数据中心推理**（TDP 450W 节能）
- ✅ **KT / SK / Naver LLM 推理**（HyperCLOVA X）
- ✅ **阿拉伯云 G42**（Jais / Falcon LLM）
- ❌ **AI 训练**（仅推理优化）
- ❌ **CUDA 专有工作负载**（需 SDK 移植）
- ❌ **国际市场**（韩 / 阿拉伯地区为主）

## 关键特性

- **512GB HBM3**：业界最大 HBM 容量（NVIDIA H200 141GB 3.6×）
- **TCP 张量收缩**：超越传统矩阵乘
- **200K tokens/s LLM 推理**：业界领先
- **TDP 450W**：比 H100 节能 36%
- **韩国 + 阿拉伯地区主权 AI**：客户稳定
- **缺点**：算力低于 H100（3×）、SDK 生态 3 年

## 相关卡

- [Rebellions RBLN](/docs/cards/others/rebellions-rbln) - 韩国双雄
- [Groq LPU v2](/docs/cards/others/groq-lpu-v2) - LPU 推理
- [Groq 3 LPX (NVIDIA 收购后)](/docs/cards/nvidia/groq-3-lpx) - Groq 第三代
- [Cerebras WSE-3](/docs/cards/cerebras/wse-3) - 晶圆级
- [SambaNova SN40L](/docs/cards/others/sambanova-sn40l) - Dataflow
- [NVIDIA H100](/docs/cards/nvidia/h100) - 业界对比
- [NVIDIA H200](/docs/cards/nvidia/h200) - 141GB 显存
- [Huawei Ascend 910C](/docs/cards/huawei/ascend-910c) - 国产对比
