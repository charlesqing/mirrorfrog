---
id: mtia-v3
title: Meta MTIA v3 (Iris/MTIA 400)
sidebar_label: Meta MTIA v3
description: Meta 第三代自研 AI 训练/推理芯片（Iris/MTIA 400），RISC-V 架构、超 1000 核心、>200 TFLOPS，2026 Q3 量产，与博通合作设计。
keywords: [Meta MTIA v3, Iris, MTIA 400, RISC-V, 自研芯片, 博通, 2026 Q3]
---

# Meta MTIA v3（Iris / MTIA 400）

## 产品概述

**Meta MTIA v3**（内部代号 **Iris**，型号 **MTIA 400**）是 Meta 第三代自研 AI 训练/推理加速器，**2026 Q3 量产**。采用 **RISC-V 开源架构**，拥有 **超 1,000 颗核心**，**算力超过 200 TFLOPS**，是与 **博通（Broadcom）** 合作设计的定制化 ASIC。

MTIA v3 是 Meta 两年四代自研芯片战略的核心产品，旨在缩小模型架构快速演进与传统多年芯片周期之间的差距，降低对 NVIDIA GPU 的依赖。

## 核心规格（推测）

| 项目 | 参数 |
|------|------|
| **架构** | MTIA v3（Iris） |
| **指令集** | **RISC-V**（开源架构） |
| **核心数** | **>1,000 颗** |
| **制程** | TSMC 5nm（推测） |
| **算力** | **>200 TFLOPS**（FP16/BF16，推测） |
| **HBM 容量** | 64-96 GB（推测） |
| **HBM 带宽** | ~2-3 TB/s（推测） |
| **TDP** | ~200-300W（推测） |
| **首发** | **2026 Q3 量产** |

> ⚠️ **数据说明**：Meta 不公开 MTIA 详细规格，以上参数为基于公开报道的推测值。

## MTIA 系列代际对比

| 指标 | MTIA v1（Freya） | MTIA v2（Artemis） | **MTIA v3（Iris）** | MTIA v4（Freya 2） |
|------|-------------------|-------------------|------------------------|---------------------|
| 核心数 | ~128 | ~512 | **>1,000** | 暂未公开 |
| 制程 | TSMC 7nm | TSMC 5nm | TSMC 5nm（推测） | 暂未公开 |
| 算力（TFLOPS） | ~50 | ~100 | **>200** | 暂未公开 |
| HBM | 8 GB | 32 GB | 64-96 GB（推测） | 暂未公开 |
| 量产时间 | 2023 Q1 | 2025 Q1 | **2026 Q3** | 2027 初 |
| 主要用途 | 推理（推荐系统） | 推理+轻量训练 | **训练+推理** | 训练 |

## 战略意义

- **降低对外依赖**：减少对 NVIDIA H100/H200 的采购依赖，已签订数百亿美元长期供货合同作为补充
- **定制化优化**：针对 Meta 特定工作负载（Instagram 信息流推荐、生成式 AI 推理）优化，剔除非核心冗余功能
- **成本优势**：制造成本大幅低于通用 GPU，能效比更优
- **快速迭代**：两年四代芯片，缩短传统 3-5 年芯片周期

## 合作方

| 项目 | 内容 |
|------|------|
| **芯片设计** | 博通（Broadcom）合作 |
| **制程** | TSMC（台积电） |
| **技术团队** | Meta 收购 Rivos Inc.，吸纳 400+ 顶尖芯片工程师 |
| **软件栈** | PyTorch / Meta 内部编译器 |

## 相关产品

- [Meta MTIA v4](/docs/cards/meta/mtia-v4) - 下一代（2027 初）
- [AWS Trainium 3](/docs/cards/aws/trainium-3) - 同期训练芯片
- [Google TPU v7 Ironwood](/docs/cards/google/tpu-ironwood) - 同代 ASIC
- [完整对比表](/docs/comparison)

## 参考来源

- 腾讯云开发者：传 Meta 最新 AI 芯片 Q3 量产（2026-03-06）
- 雪球：Meta MTIA 3 技术细节（2026-03-06）
- Meta AI 官方 X 账号：两年四代 MTIA 路线图（2026-03）
