---
id: wse-2
title: Cerebras WSE-2 (CS-2)
sidebar_label: Cerebras WSE-2
description: Cerebras WSE-2 详尽规格：2.6 万亿晶体管、850,000 核心、40GB 片上 SRAM、晶圆级 AI 训练芯片。
keywords: [Cerebras WSE-2, CS-2, 晶圆级芯片, AI 训练超算, Weight Streaming]
---

# Cerebras WSE-2 (CS-2)

## 产品概述

Cerebras WSE-2（Wafer-Scale Engine 2）于 2021 年发布，是**全球最大的单芯片处理器**。**2.6 万亿晶体管**、**850,000 个 AI 核心**、**40GB 片上 SRAM**（无 HBM），整体封装在一片晶圆上。WSE-2 解决了传统 GPU 的内存墙问题，但需要配套 CS-2 整机系统。

## 核心规格

| 项目 | 参数 |
|------|------|
| **架构** | WSE-2（Wafer-Scale Engine） |
| **制程** | TSMC 7nm |
| **晶体管数** | **2.6 万亿** |
| **核心数** | **850,000** |
| **片上 SRAM** | **40 GB** |
| **片上互联** | 220 PB/s |
| **TDP（系统）** | 15 kW |
| **形式** | CS-2 整机系统 |
| **发布** | 2021-08-24 |

## 厂商信息

| 项目 | 内容 |
|------|------|
| **制造商** | Cerebras Systems |
| **官网** | https://www.cerebras.net |
| **产品页** | https://www.cerebras.net/product-cs-2/ |
| **软件** | https://www.cerebras.net/software/ |
| **文档** | https://docs.cerebras.net |

## 关键特性

- **单一晶圆级芯片**：无拼接
- **极高核心密度**：适合稀疏计算
- **权重流（Weight Streaming）**：流式加载模型权重
- **无需模型并行**：单芯片可训练大模型

## 适用场景

- 大模型训练（无需切分）
- LLM 预训练
- 科学计算

## 相关产品对比

- [Cerebras WSE-3](/docs/cards/cerebras/wse-3) - 继任者
- [NVIDIA H100](/docs/cards/nvidia/h100) - 主流方案
- [Tesla Dojo](/docs/cards/others/tesla-dojo) - 另一类晶圆级
