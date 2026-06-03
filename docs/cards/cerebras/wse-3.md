---
id: wse-3
title: Cerebras WSE-3 (CS-3)
sidebar_label: Cerebras WSE-3
description: Cerebras WSE-3 详尽规格：4 万亿晶体管、900,000 核心、44GB SRAM、125 PFLOPS FP16 稀疏算力，2024 年发布。
keywords: [Cerebras WSE-3, CS-3, 晶圆级 AI 芯片, 125 PFLOPS, 5nm]
---

# Cerebras WSE-3 (CS-3)

## 产品概述

Cerebras WSE-3 于 **2024 年 3 月**发布，是第三代晶圆级 AI 芯片。**4 万亿晶体管**（约 WSE-2 的 1.5 倍），**900,000 核心**，**44GB 片上 SRAM**，FP16 稀疏算力高达 **125 PFLOPS**。CS-3 解决了大模型训练的核心痛点：内存墙和通信开销。

## 核心规格

| 项目 | 参数 |
|------|------|
| **架构** | WSE-3（Wafer-Scale Engine 3） |
| **制程** | TSMC 5nm |
| **晶体管数** | **4 万亿** |
| **核心数** | **900,000** |
| **片上 SRAM** | **44 GB** |
| **FP16 稀疏算力** | **125 PFLOPS** |
| **TDP（系统）** | 15 kW |
| **形式** | CS-3 整机系统 |

## WSE-2 vs WSE-3

| 指标 | WSE-2 | WSE-3 | 提升 |
|------|-------|-------|------|
| 制程 | 7nm | 5nm | — |
| 晶体管 | 2.6 万亿 | **4 万亿** | 1.5× |
| 核心数 | 850,000 | **900,000** | 1.06× |
| SRAM | 40 GB | 44 GB | 1.1× |
| FP16 稀疏 | ~62 PFLOPS | **125 PFLOPS** | 2× |

## 厂商信息

| 项目 | 内容 |
|------|------|
| **制造商** | Cerebras Systems |
| **官网** | https://www.cerebras.net |
| **产品页** | https://www.cerebras.net/product-cs-3/ |
| **发布** | 2024 年 3 月 |
| **云端租赁** | https://cerebras.net/ai-cloud/ |

## 关键特性

- **CS-3 系统**：15kW 液冷整机
- **集群方案**：Cerebras Cluster，多个 CS-3 互联
- **Weight Streaming**：无内存墙
- **支持 GPT-class 模型训练**

## 适用场景

- 巨型 LLM 训练（无模型并行）
- 科研机构（Genentech、阿贡国家实验室）
- 制药与材料科学

## 相关产品对比

- [Cerebras WSE-2](/docs/cards/cerebras/wse-2) - 前代
- [NVIDIA B200](/docs/cards/nvidia/b200) - 主流旗舰
- [Tesla Dojo](/docs/cards/others/tesla-dojo) - 另一类晶圆级
