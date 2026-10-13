---
id: qualcomm-ai200
title: Qualcomm AI200 (Dragonfly AI200)
sidebar_label: Qualcomm AI200
description: Qualcomm Dragonfly AI200 数据中心 AI 推理系统：单卡 768GB LPDDR5X、单机柜 43TB 内存、PCIe Gen6 扩展、以太网 RoCE 互联、140kW 液冷机柜，支持最大 1 万亿参数模型，2026 年商用。
keywords: [Qualcomm AI200, Dragonfly, 数据中心, AI 推理, 768GB LPDDR5X, 43TB, 机架级, HUMAIN]
---

# Qualcomm AI200 (Dragonfly AI200)

:::warning 算力参数仍未公布
Qualcomm **至今未公布 AI200 的任何算力数字**（无 TOPS / TFLOPS / FP8 / FP16 / INT8 任何口径），也未公布单卡 TDP 与单卡显存带宽。Qualcomm 从未发布 datasheet，所有已确认数据均来自**官方新闻稿与产品页**。本页对未公布项一律标注「未公布」，不做估算。
:::

## 产品概述

**Qualcomm Dragonfly AI200** 是 Qualcomm 于 **2025-10-27** 发布的**机架级 AI 推理系统**，属 Qualcomm **Dragonfly** 产品线首款产品。核心设计哲学是**以内存容量换带宽**：单卡 **768 GB LPDDR5X**，是目前**单加速器内存容量最高的 AI 加速器**（官方称 industry's highest memory capacity per accelerator），单机柜提供 **43 TB** 内存。

与所有其他厂商使用 HBM 的路线不同，AI200 刻意选择 **LPDDR5X**——以牺牲峰值带宽换取 5 倍于 144GB HBM3e 方案的容量与更低的每 GB 成本。**首年客户为沙特 HUMAIN**，目标自 2026 年起部署 **200 MW** 机柜规模。

Qualcomm 在 2026-03 MWC 巴塞罗那展会上演示了**单卡运行 3500 亿参数生成式模型**，并确认 AI200 机柜将于 **2026 年开始部署**。

## 核心规格（官方口径）

| 项目 | 参数 |
|------|------|
| **架构** | Qualcomm Dragonfly（ASIC） |
| **制程** | 未公布 |
| **显存** | 未公布 |
| **显存类型** | **LPDDR5X** |
| **显存带宽** | 未公布（单卡） |
| **FP8** | 未公布 |
| **FP4** | 未公布 |
| **FP16/FP16 算力** | 未公布 |
| **FP32** | 未公布 |
| **INT8** | 未公布 |
| **TDP** | 未公布（单卡） |
| **互联** | **PCIe Gen6 scale-up + Ethernet with RoCE scale-out** |
| **发布/量产** | **2025-10-27 发布，2026 年开始部署** |

> 📌 **内存口径说明**：**768 GB 是单卡容量，43 TB 是整机柜容量**（56 卡）。此前本站表格「显存」列与竞品对比表混用两个口径，已按官方产品页分别标注。
>
> **全链路算力缺位**：Qualcomm 未发布任何精度算力。对比其前代 Cloud AI 100 Ultra 曾公布「150W / 870 INT8 TOPS / 548 GB/s」，AI200 **连单卡带宽与功耗都未给**，属有意为之的发布策略。

## 机架与系统配置（官方）

| 参数项 | 规格详情 |
|--------|----------|
| 单卡内存 | **768 GB LPDDR5X** |
| 单机柜内存 | **43 TB LPDDR5X** |
| 单机柜聚合带宽 | **414 TB/s** |
| 单机柜卡数 | **56 卡** |
| 机柜形态 | **OCP ORv3 规范**，无缆背板（cableless backplane） |
| 散热 | **直接液冷**（亦提供风冷选配） |
| 功耗设计 | **140 kW**（当前产品页；发布稿曾标 160 kW） |
| 扩展 | PCIe Gen6 scale-up；Ethernet with RoCE scale-out |
| 安全 | 机密计算（confidential computing） |
| 模型容量 | 支持最大 **1 万亿参数**模型，上下文最长 **128K** |

> ⚠️ **机柜功耗口径不一致**：Qualcomm 发布稿写 **160 kW**，现行产品页写 **140 kW**。本页采用产品页的 **140 kW**（较新口径）。

## 与竞品对比（内存容量口径）

| 指标 | Qualcomm AI200 | NVIDIA H200 | AMD MI355X |
|------|----------------|--------------|------------|
| 单卡内存 | **768 GB LPDDR5X** | 141 GB HBM3e | 288 GB HBM3e |
| 内存类型 | LPDDR5X | HBM3e | HBM3e |
| 内存带宽 | 未公布 | 4.8 TB/s | 8 TB/s |
| 定位 | 推理专用（无训练能力） | 训练 + 推理 | 训练 + 推理 |
| TCO 主张 | 官方称业界最优 | 高 | 中 |

> **AI200 优势**：**单卡内存容量 5.4× H200**，可在不切分的情况下容纳超大模型权重，减少张量并行开销；LPDDR5X 成本远低于 HBM。
> **AI200 劣势**：**无任何算力数据**，且 LPDDR 带宽显著低于 HBM——在带宽敏感的大 batch 吞吐场景处于劣势；**纯推理定位，不支持训练**。

## 软件栈

- **Qualcomm AI Inference Suite**：端到端部署工具，支持裸机 / 云 VM / 推理即服务
- **Efficient Transformers Library**：Hugging Face 模型一键部署
- **Qualcomm AI Infrastructure Management Suite**：机架级供给、监控、编排与故障处理（HUMAIN 已部署）

## 厂商信息

| 项目 | 内容 |
|------|------|
| **公司** | Qualcomm Technologies, Inc. |
| **产品线** | Dragonfly（2026-06 投资者日扩展，含 C1000 CPU、HBC、AI300） |
| **官网** | https://www.qualcomm.com |
| **产品页** | https://www.qualcomm.com/data-center/products/qualcomm-dragonfly-ai200 |
| **发布** | 2025-10-27 |
| **商用时间** | 2026 年 |
| **首发客户** | **HUMAIN**（沙特，200 MW 部署计划） |

## 适用场景

- ✅ **超大模型推理**（单卡容纳超大权重，最多 1 万亿参数）
- ✅ **长上下文 / RAG / Agentic 工作负载**（最长 128K 上下文）
- ✅ **成本敏感**（LPDDR5X 成本优势 + 低 TCO）
- ✅ **主权 AI / 新兴市场**（HUMAIN 场景）
- ❌ 模型训练（Qualcomm 明确定位推理专用）
- ❌ 高吞吐大批量推理（LPDDR 带宽瓶颈）

## 相关产品

- [Qualcomm AI250](/docs/cards/others/qualcomm-ai250) - 下一代（近存计算 HBC，有效带宽 18×）
- [NVIDIA H200](/docs/cards/nvidia/h200) - 竞品
- [AMD MI355X](/docs/cards/amd/mi355x) - 竞品

## 数据来源

- [Qualcomm 官方产品页：Rack-Scale AI Inference Accelerator AI200 | Dragonfly](https://www.qualcomm.com/data-center/products/qualcomm-dragonfly-ai200) — 单卡 768GB LPDDR、单柜 43TB、140kW 液冷机柜、PCIe Gen6 + RoCE、10T 参数 / 128K 上下文
- [Qualcomm 官方新闻稿：Qualcomm Unveils AI200 and AI250, Redefining Rack-Scale Data Center](https://www.qualcomm.com/news/releases/2025/10/qualcomm-unveils-ai200-and-ai250-redefining-rack-scale-data-cent) — 2025-10-27 发布、56 卡机柜、414 TB/s 聚合带宽、160kW（发布稿口径）
- [Qualcomm OnQ：Building AI inference that scales — Inside the Qualcomm AI200 Rack（MWC 2026）](https://www.qualcomm.com/news/onq/2026/03/ai-inference-that-scales-qualcomm-ai200-infrastructure-management-suite) — 单卡 350B 模型演示、2026 年开始部署、HUMAIN 部署 Infrastructure Management Suite
- [Flopper：Qualcomm AI200 数据库条目](https://flopper.io/gpu/qualcomm-ai200) — 第三方核对：确认无 datasheet、无任何算力/单卡功耗/单卡带宽数据
