---
id: ascend-910d
title: Huawei Ascend 910D (传闻)
sidebar_label: Huawei Ascend 910D
description: Huawei Ascend 910D 是 910C 下一代产品，2025 年中后期量产，对标 NVIDIA Blackwell / Rubin。
keywords: [Huawei Ascend 910D, 昇腾 910D, 国产 AI 芯片, 下一代]
---

# Huawei Ascend 910D

## 产品概述

Huawei Ascend 910D 是 910C 的下一代产品，**预计 2025 年中后期**送样测试。**目标对标 NVIDIA Blackwell** 和下一代 Rubin 系列。910D 仍使用 HBM2e（在出口管制下），但**系统级设计进一步升级**。

## 已知信息（基于 2025 年 4-5 月报道）

| 项目 | 状态 |
|------|------|
| **架构** | 进一步升级的 Da Vinci |
| **HBM** | 仍为 HBM2e（比 NVIDIA 落后 2 代） |
| **算力目标** | 接近 NVIDIA H100（部分指标） |
| **状态** | 已被 950 系列取代（2026 H1） |
| **量产** | 2025 年下半年 |
| **客户** | 百度、阿里、腾讯等中国大厂 |

## 与 NVIDIA 对比

| 指标 | Ascend 910D（预计） | NVIDIA H100 | NVIDIA B200 |
|------|---------------------|-------------|-------------|
| HBM | HBM2e | HBM3 | HBM3e |
| 软件生态 | CANN + MindSpore | CUDA | CUDA |
| 训练成熟度 | 中等 | 成熟 | 成熟 |
| 推理性能 | 接近 H100 | 基准 | 远超 |

## 厂商信息

| 项目 | 内容 |
|------|------|
| **制造商** | 华为技术有限公司 |
| **官网** | https://www.hiascend.com |
| **状态** | 2025 年中送样 |

## 关键挑战

- **HBM 落后 2 代**（HBM2e vs NVIDIA HBM3e）
- **EDA 工具受限**：依赖国内/第三方案例
- **CUDA 生态优势**：中国大厂仍有大量 CUDA 代码
- **软件差距**：CANN 仍需时间追上 CUDA

## 适用场景

- 中国市场高端 AI 训练
- 国家级 AI 项目
- 国产化要求严格的领域

## 相关产品对比

- [Huawei Ascend 910C](/docs/cards/huawei/ascend-910c) - 前代
- [Huawei Ascend 910B](/docs/cards/huawei/ascend-910b) - 更前代
- [NVIDIA H100](/docs/cards/nvidia/h100) - 对标
- [NVIDIA B200](/docs/cards/nvidia/b200) - 高端对标
