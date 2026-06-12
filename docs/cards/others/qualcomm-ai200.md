---
id: qualcomm-ai200
title: Qualcomm AI200
sidebar_label: Qualcomm AI200
description: Qualcomm AI200 数据中心 AI 推理芯片：768GB LPDDR 内存、低 TCO、机架级部署、2026 年商用。
keywords: [Qualcomm AI200, 数据中心, AI 推理, 768GB 内存, 低 TCO, 机架级]
---

# Qualcomm AI200

:::warning 部分信息
本页部分规格基于 Qualcomm 官方新闻稿和媒体报道，**FP16/BF16/FP8 算力、TDP 等关键参数尚未公开**，待 Qualcomm 发布完整技术白皮书后更新。
:::

## 产品概述

**Qualcomm AI200** 是 Qualcomm Technologies 于 2025 年 10 月发布的面向 **数据中心 AI 推理** 的芯片解决方案。**768GB LPDDR 内存**（单卡），专为 **机架级部署** 打造，通过硬件架构升级可高效承载复杂 AI 工作负载，满足高密度推理需求。**低总体拥有成本（TCO）**，实现内存容量与性价比的双重优化。预计 **2026 年投入商用**。

**战略地位**：Qualcomm AI200 是 Qualcomm 进军 **数据中心 AI 芯片市场** 的重要产品，与 NVIDIA、AMD、Intel 等厂商竞争。凭借 **768GB 大容量内存** 和 **低 TCO** 优势，主打 **大语言模型（LLM）和多模态模型（LMM）推理** 场景。

## 核心规格（部分）

| 项目 | 参数 |
|------|------|
| **架构** | Qualcomm 自研 AI 架构 |
| **制程** | 未公开（预估 4nm 或 3nm） |
| **FP16/BF16** | 未公开 |
| **FP8** | 未公开 |
| **INT8** | 未公开 |
| **内存** | **768 GB LPDDR**（单卡） |
| **内存带宽** | 未公开 |
| **TDP** | 未公开 |
| **发布时间** | 2025 年 10 月 |
| **商用时间** | 2026 年 |
| **定位** | 数据中心 AI 推理 |

## 与竞品对比（内存容量）

| 指标 | Qualcomm AI200 | NVIDIA H200 | AMD MI355X |
|------|----------------|--------------|------------|
| 内存 | 768GB LPDDR | 141GB HBM3E | 288GB HBM3E |
| 内存类型 | LPDDR | HBM3E | HBM3E |
| 定位 | 推理 | 训练 + 推理 | 训练 + 推理 |
| TCO | 低 | 高 | 中 |

> **AI200 优势**：**内存容量极大**（768GB vs H200 141GB），适合 **超大模型推理**；**低 TCO**，适合 **成本敏感** 的场景。

## 配套机架系统

| 参数项 | 规格详情 |
|--------|----------|
| 散热方案 | 直接液冷散热技术 |
| 扩展能力 | 支持 PCIe 与以太网双通道扩展 |
| 安全能力 | 集成机密计算模块 |
| 功耗设计 | 单机架功耗达 160kW |

## 厂商信息

| 项目 | 内容 |
|------|------|
| **公司** | Qualcomm Technologies, Inc. |
| **官网** | https://www.qualcomm.com |
| **产品页** | https://www.qualcomm.com/news/releases/2025/10/qualcomm-unveils-ai200-and-ai250-redefining-rack-scale-data-cent |
| **发布** | 2025 年 10 月 |
| **商用时间** | 2026 年 |

## 适用场景

- ✅ **大语言模型（LLM）推理**（768GB 大内存）
- ✅ **多模态模型（LMM）推理**
- ✅ **成本敏感**（低 TCO）
- ✅ **机架级部署**（高密度）
- ❌ 模型训练（定位推理）
- ❌ 顶级性能（算力未公开）

## 相关产品

- [Qualcomm AI250](/docs/cards/others/qualcomm-ai250) - 下一代（近存计算）
- [NVIDIA H200](/docs/cards/nvidia/h200) - 竞品
- [AMD MI355X](/docs/cards/amd/mi355x) - 竞品

## 外部链接

- [Qualcomm 官方新闻稿](https://www.qualcomm.com/news/releases/2025/10/qualcomm-unveils-ai200-and-ai250-redefining-rack-scale-data-cent)
- [Qualcomm 中国新闻稿](https://www.qualcomm.cn/news/releases/2025/10/releases-2025-10-28)
- [搜狐报道](https://www.sohu.com/a/948155464_121850782)
