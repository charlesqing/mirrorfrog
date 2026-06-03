---
id: hbm-pim
title: Samsung HBM-PIM (Aquabolt-XL, 存算一体)
sidebar_label: Samsung HBM-PIM
description: Samsung HBM-PIM (Processing-in-Memory) 详尽规格：Aquabolt-XL、FP16 算力集成 HBM、2× 性能、能效提升。
keywords: [Samsung HBM-PIM, Aquabolt, Processing-in-Memory, PIM, 存算一体, HBM-PIM, CXL]
---

# Samsung HBM-PIM (Aquabolt-XL)

## 产品概述

**Samsung HBM-PIM**（**P**rocessing-**I**n-**M**emory）是三星电子推出的**存算一体**（Near-Data Processing）AI 加速器，将**计算单元集成到 HBM 显存内部**。

**2021-02 Hot Chips** 首发（Aquabolt），**2022-12** 升级到 **Aquabolt-XL**，FP16 算力提升 2 倍。**2024-2025** 加速商业化（NVIDIA H200、三星自己 SG-Ready 平台）。

## 核心规格（Aquabolt-XL）

| 项目 | 参数 |
|------|------|
| **架构** | **HBM-PIM (Processing-in-Memory)** |
| **制程** | HBM: 1y nm DRAM / Logic: 4nm |
| **HBM 容量** | 12 GB（HBM2-PIM） |
| **HBM 堆叠** | 8-Hi（8 层 DRAM 堆叠） |
| **集成算力** | **1.2 TFLOPS FP16**（每 HBM 堆叠） |
| **能耗提升** | **2.5×**（vs 传统 HBM + GPU） |
| **内存带宽** | 307 GB/s（传统）+ PIM 内部 1 TB/s+ |
| **TDP** | +10%（vs 传统 HBM，集成 PIM 仅小幅增加） |
| **接口** | HBM 接口（兼容现有 GPU 插槽） |
| **首发** | 2021-02（Aquabolt）/ 2022-12（XL） |

## 存算一体（PIM）架构

### 传统架构瓶颈
- **内存墙**：AI 算力增长 1000×，内存带宽仅 100×
- **数据搬运能耗**：数据从 DRAM 到 GPU 寄存器，**能耗是计算的 100-1000×**

### PIM 解决方案
- **计算单元嵌入 DRAM 阵列**（每个 bank 旁边）
- 数据**不出 DRAM**即可计算
- 消除"内存墙"瓶颈
- **2.5× 能效比提升**

### PIM 内部架构
- 每个 HBM 堆叠 = 8 层 DRAM
- 每层集成 **FP16 × 16 核 PIM 单元**
- HBM 内部 **Programmable PIM 引擎**
- 通过普通 HBM 接口使用（无需修改 GPU）

## 性能对比（FP16 推理）

| 配置 | 性能 | 能耗 |
|------|------|------|
| 传统 HBM2 + A100 | 312 TFLOPS | 300W |
| HBM-PIM (XL) + A100 | **+2× AI 推理** | 持平 |
| HBM-PIM (XL) + H100 | **1.7× 推理加速** | 持平 |

> **关键**：HBM-PIM 仅小幅修改 GPU 主板设计即可使用。

## 应用场景

### 大模型推理（推荐）
- **LLM 解码**：Memory-bound 操作，PIM 完美匹配
- **检索增强生成 (RAG)**：embedding 查表
- **推荐系统**：向量检索

### 数据中心
- **三星 SG-Ready XA2000** 服务器（搭载 HBM-PIM）
- 2024 起进入商用

### 学术与开源
- **三星 PIM SDK**
- **UPMEM PIM**（同类产品）
- **Mythic AI**（NOR Flash PIM）

## PIM 生态挑战

- ⚠️ **生态早期**：仅 Samsung 自有 SDK + 部分 OEM
- ⚠️ **软件适配**：需要重写算子利用 PIM
- ⚠️ **CUDA 兼容**：当前仅支持特定算子
- ✅ **三星 2024-2025 加速推动**：与 NVIDIA 合作

## 厂商信息

| 项目 | 内容 |
|------|------|
| **厂商** | Samsung Electronics（三星电子） |
| **产品页** | https://semiconductor.samsung.com/dram/hbm/hbm-pim/ |
| **首发** | Aquabolt 2021-02 / Aquabolt-XL 2022-12 |
| **合作方** | NVIDIA（H200 集成）/ 韩国 KISTI 超算 |
| **目标市场** | 大模型推理、推荐系统、HPC |

## 适用场景

- ✅ **大模型推理**（Memory-bound 操作加速 2×）
- ✅ RAG / 检索增强
- ✅ 推荐系统向量检索
- ✅ HPC 数据密集型计算
- ⚠️ 训练（小规模数据复用优势小）
- ❌ 算力密集型（GPU 已足够）

## 相关卡

- [NVIDIA H200](/docs/cards/nvidia/h200) - 集成 HBM3e
- [NVIDIA H100 NVL](/docs/cards/nvidia/h100-nvl) - 188GB HBM3e
- [Groq LPU](/docs/cards/others/groq-lpu) - 同为 LLM 推理架构
- [Google TPU v7 Ironwood](/docs/cards/google/tpu-ironwood) - 192GB 推理
