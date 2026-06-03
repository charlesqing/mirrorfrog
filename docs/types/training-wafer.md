---
id: training-wafer
title: 晶圆级 AI 训练超算 (Cerebras, Tesla Dojo)
sidebar_label: 晶圆级训练
description: 晶圆级 AI 训练芯片：完整比较 Cerebras WSE-2/WSE-3 与 Tesla Dojo D1 / ExaPOD 规格、性能与适用场景。
keywords: [晶圆级芯片, Cerebras, Tesla Dojo, WSE, AI 训练超算]
---

# 晶圆级 AI 训练超算

晶圆级（Wafer-Scale）AI 训练芯片是**将整片晶圆作为一个处理器**的革命性架构，规避了传统 GPU 多芯片互联的瓶颈。**Cerebras** 和 **Tesla Dojo** 是这一领域的两大代表。

## 主流晶圆级训练系统

| 型号 | 厂商 | 晶体管数 | 核心数 | 片上 SRAM | 算力 (FP16 稀疏) | 系统算力 | 状态 |
|------|------|----------|--------|-----------|------------------|----------|------|
| **Cerebras WSE-4 (CS-4, 推测)** | Cerebras | ~5 万亿 | ~1,500,000 | ~80GB | ~200 PFLOPS | ~200 PFLOPS | **2027 预计** |
| **Cerebras WSE-3 (CS-3)** | Cerebras | 4 万亿 | 900,000 | 44GB | 125 PFLOPS | 125 PFLOPS | 2024 |
| **Cerebras WSE-2 (CS-2)** | Cerebras | 2.6 万亿 | 850,000 | 40GB | ~62 PFLOPS | ~62 PFLOPS | 2021 |
| **Tesla Dojo ExaPOD** | Tesla | 180,000 亿 (360× D1) | 127,440 | N/A | N/A | **100 EFLOPs** | 2023 |
| **Tesla Dojo Cabinet** | Tesla | 3,000 亿 (6× D1 Tile) | 2,124 | N/A | N/A | ~1.7 EFLOPs | 2023 |
| **Tesla Dojo D1** | Tesla | 500 亿 | 354 | N/A | 36.7 TFLOPS (BF16) | — | 2022 |

## Cerebras WSE-2 vs WSE-3 vs WSE-4 (推测)

| 指标 | WSE-2 (CS-2) | WSE-3 (CS-3) | **WSE-4 (CS-4, 推测)** |
|------|--------------|--------------|--------------------------|
| 制程 | TSMC 7nm | TSMC 5nm | **TSMC 3nm** |
| 晶体管 | 2.6 万亿 | 4 万亿 | **~5 万亿** |
| 核心数 | 850,000 | 900,000 | **~1,500,000** |
| 片上 SRAM | 40GB | 44GB | **~80GB** |
| FP16 稀疏算力 | ~62 PFLOPS | 125 PFLOPS | **~200 PFLOPS** |
| 系统 TDP | 15 kW | 15 kW | **~30 kW** |
| 发布时间 | 2021 | 2024 | **2027 预计** |

## Cerebras WSE 关键特性

- **无内存墙**：所有数据片上 SRAM（无 HBM）
- **Weight Streaming**：流式加载模型权重到 SRAM
- **无模型并行**：单芯片可训练超大模型
- **CS-3 系统液冷**：15kW TDP
- **集群方案**：可互联多个 CS-3

## Tesla Dojo 关键特性

- **D1 单芯片 354 核**：定制架构
- **6 颗 D1 = 1 Tile**：高密度封装
- **ExaPOD = 360 颗 D1 = 100 EFLOPs**：单集群冠绝全球
- **专为 FSD 视频训练**：特斯拉定制
- **不外售**：仅 Tesla 内部使用

## 选型建议

- **大模型科研 / 制药 / 材料科学**：Cerebras CS-3（云端租赁 Cerebras Cloud）
- **自动驾驶 / 视频训练**：Tesla Dojo（仅 Tesla 内部）
- **云端 AI 服务**：Cerebras Cloud 可访问

## 详细产品页

- [Cerebras WSE-2](/docs/cards/cerebras/wse-2) - 上一代
- [Cerebras WSE-3](/docs/cards/cerebras/wse-3) - 当前
- [Cerebras WSE-4](/docs/cards/cerebras/wse-4) - 2027 预计（IPO 后首代）
- [Tesla Dojo](/docs/cards/others/tesla-dojo) - 自动驾驶专用

## 相关类型

- [AI 训练 GPU](/docs/types/training-gpu)
- [AI 训练 ASIC](/docs/types/training-asic)
- [完整对比表](/docs/comparison)
