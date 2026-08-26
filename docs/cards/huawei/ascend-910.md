---
id: ascend-910
title: Huawei Ascend 910
sidebar_label: Huawei Ascend 910
description: Huawei Ascend 910 详尽规格：2019 初代云端训练芯片、台积电 7nm+ EUV、256 TFLOPS FP16、512 TOPS INT8、350W TDP、32GB HBM2，昇腾 910 家族基石。
keywords: [Huawei Ascend 910, 昇腾 910, 达芬奇 Max 架构, 云端训练, 256 TFLOPS, 国产 AI 芯片]
---

# Huawei Ascend 910

## 产品概述

**Huawei Ascend 910**（昇腾 910）是华为昇腾系列**首款云端训练芯片**，于 **2019 年 8 月**在深圳发布，与边缘推理芯片 Ascend 310 同时亮相，标志着华为"达芬奇（Da Vinci）架构"全场景 AI 算力体系正式成型。

Ascend 910 采用 **台积电 7nm+ EUV** 工艺（华为被制裁前获得的最后一代先进制程），发布时号称"全球算力最高的 AI 处理器"，**FP16 算力 256 TFLOPS**，性能超越同期 NVIDIA V100，与 A100 早期水平相当。它奠定了后续 910B / 910C / 920 / 950 全系列的架构基础。

> 📌 资料中"910A"通常即指这代初代 910（32 颗达芬奇 Max 核心 @ 1.0GHz），与后续 910B/C/D 同属 910 家族，本文以 **Ascend 910（初代 / 910A）** 统一描述。

## 核心规格

| 项目 | 参数 |
|------|------|
| **发布** | 2019-08（深圳） |
| **架构** | Da Vinci Max（达芬奇 Max） |
| **制程** | 台积电 7nm+ EUV |
| **AI Core** | 32 颗达芬奇 Max 核心 |
| **FP32** | 未公开 |
| **FP16** | **256 TFLOPS** |
| **INT8** | **512 TOPS** |
| **显存** | 32 GB HBM2 |
| **显存带宽** | 1.5 TB/s（896 GB/s，依板卡） |
| **TDP** | **350 W** |
| **互联** | HCCS（华为自研，初代） |
| **整机** | Atlas 300T / Atlas 800（训练服务器） |
| **视频解码** | 128 路全高清 H.264/H.265 |

## 与后续 910 家族演进对比

| 型号 | 发布 | 制程 | FP16 | 显存 | TDP | 定位 |
|------|------|------|------|------|-----|------|
| **Ascend 910（初代）** | 2019 | 台积电 7nm+ | 256 T | 32GB HBM2 | 350W | 第一代云端训练 |
| Ascend 910B | 2021-22 | SMIC 7nm N+2 | 256-414 T | 64GB HBM2e | 310W | 国产化主力 |
| Ascend 910C | 2025 Q1 | SMIC 7nm N+2 | 800 T | 128GB HBM3 | ~310W | Chiplet 双芯旗舰 |
| Ascend 920 | 2025 H2 | SMIC 6nm | 900+ T | ~96GB | 400W | 下一代带宽王者 |

## 关键特性

- **达芬奇 Max 架构**：32 颗 AI Core 众核设计，单芯片计算密度领先 2019 年同期
- **混合精度**：FP16 / FP32 / INT8 全支持，适配训练与推理
- **全栈生态起点**：搭配 MindSpore + CANN，构建华为 AI 全栈
- **历史意义**：华为唯一一代使用台积电先进 EUV 制程的 AI 芯片（制裁前）

## 厂商信息

| 项目 | 内容 |
|------|------|
| **制造商** | 华为技术有限公司（海思半导体） |
| **官网** | https://www.hiascend.com |
| **首发** | 2019-08 |
| **架构** | Da Vinci Max |

## 适用场景

- ✅ 云端 AI 训练（初代，千亿参数以下模型）
- ✅ 科研超算平台
- ✅ 华为全栈 AI 基础设施起点
- ❌ 当前已非主力（被 910B/C 取代）

## 相关产品对比

- [Huawei Ascend 910B](/docs/cards/huawei/ascend-910b) - 国产化改良版
- [Huawei Ascend 910C](/docs/cards/huawei/ascend-910c) - Chiplet 双芯旗舰
- [NVIDIA V100](/docs/cards/nvidia/v100) - 同期对标
- [NVIDIA A100](/docs/cards/nvidia/a100) - 性能量级参考
