---
title: "NVIDIA Rubin Ultra (V300)"
description: "NVIDIA Rubin Ultra (V300) 预览：Rubin 架构旗舰增强版，原版 4 芯片设计、576GB HBM4e、NVL144 机柜。⚠️ 架构修订中，规格待官方最终确认。"
id: rubin-ultra
date: "2026-03-17"
vendor: "nvidia"
category: "数据中心GPU"
---

# NVIDIA Rubin Ultra (V300)

## 产品概述

**NVIDIA Rubin Ultra（代号 V300）** 是 Rubin 架构的**旗舰增强版**，于 **GTC 2026（2026-03-17）** 与 Rubin R200 一同公布，定位为超大规模训练/推理的顶端产品。原版设计采用 **4 芯片 MCM 封装**，单卡 **576GB HBM4e**，通过 **NVL144** 机柜扩展至 **144 颗 GPU**，是 NVIDIA 对标主权 AI 与 yotta-scale 集群的旗舰方案。

> ⚠️ **架构修订提示**：据 SemiAnalysis 报道，原版 4 芯片 Rubin Ultra 设计因封装制造难度已被**取消**，新版规模缩减约一半、性能相应减半。以下规格基于**原版公开信息**，**最终量产规格以 NVIDIA 官方为准**。

## 核心规格（原版设计，待官方最终确认）

| **规格** | **参数** |
|---------|---------|
| **GPU 架构** | Rubin 架构（MCM 多芯片模块） |
| **封装** | 原版 4 芯片设计（⚠️ 修订中） |
| **制程工艺** | 推测 TSMC 3nm（同 Rubin R200） |
| **FP4 推理算力** | 推测 ~100 PFLOPS（原版，密集） |
| **FP8 训练算力** | 推测 ~70 PFLOPS（原版） |
| **显存容量** | **576 GB HBM4e**（原版设计） |
| **显存类型** | HBM4e |
| **显存带宽** | 推测 >44 TB/s（HBM4e） |
| **互联技术** | NVLink 7（推测，单向 >3.6 TB/s） |
| **TDP** | 推测 3000W+（必须液冷） |
| **发布时间** | 2026 年 3 月 17 日（GTC 2026 公布） |
| **量产时间** | 推测 2027 H2 – 2028（原版时间线） |
| **定价** | 推测单 NVL144 机柜 $1,500-2,100 万 |

## 与 Rubin R200 对比

| **对比项** | **Rubin R200** | **Rubin Ultra（原版）** |
|-----------|----------------|------------------------|
| GPU/机柜 | 72（NVL72） | **144（NVL144）** |
| 显存/GPU | 288 GB HBM4 | **576 GB HBM4e** |
| HBM/机柜 | 20,736 GB | **82,944 GB** |
| 量化时间 | 2026 H2 | **2027 H2 – 2028** |
| 定位 | 主力 | **旗舰增强** |

> **NVL144 机柜**：Rubin Ultra 以 144 颗 GPU 为单位组成机柜，HBM 总量达 82,944 GB，是 NVL72（Rubin R200）的 4 倍显存容量。

## 平台配置（原版 NVL144）

- **144 颗** Rubin Ultra GPU
- **72 颗** Vera CPU（推测）
- **总显存**：82.9 TB HBM4e
- **总算力**：FP4 推测 ~14 EFLOPS（原版）
- **TDP**：推测 ~360kW（必须全液冷）
- **量产**：推测 2027 H2 起

## 量产与交付（原版时间线）

- **GTC 2026**：与 Rubin R200 一同公布
- **量产时间**：推测 2027 H2 – 2028（晚于 Rubin R200 的 2026 H2）
- **⚠️ 修订风险**：SemiAnalysis 报道原 4 芯片设计已取消，新版规格与时间表可能调整

## 应用场景

Rubin Ultra 面向**超大规模数据中心与主权 AI 集群**，适用于：
- 十万亿参数大模型训练
- yotta-scale AI 工厂
- 超长上下文推理（576GB 单卡显存）
- 国家级 AI 基础设施

## 参考来源

- NVIDIA GTC 2026 主题演讲（Rubin Ultra 公布）
- SemiAnalysis：Rubin Ultra 原版 4 芯片设计取消、新版缩减约一半
- 行业供应链分析（富士康）：V300 576GB HBM4e / 144 GPU 机柜，$21,000/机柜

## 相关产品

- [NVIDIA Rubin R200](/docs/cards/nvidia/rubin-r200) - 同期主力 GPU
- [NVIDIA Rubin CPX](/docs/cards/nvidia/rubin-cpx) - 推理优化变体
- [AMD MI455X](/docs/cards/amd/mi455x) - 同代竞争对手
- [完整对比表](/docs/comparison)
