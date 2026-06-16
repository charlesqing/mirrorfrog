---
id: tesla-dojo
title: Tesla Dojo D1
sidebar_label: Tesla Dojo
description: Tesla Dojo D1 详尽规格：500 亿晶体管、36.7 TFLOPS BF16、ExaPOD 100 EFLOPs，专为 FSD 视频训练。
keywords: [Tesla Dojo, D1, 自动驾驶训练, FSD, 晶圆级]
---

# Tesla Dojo D1

## 产品概述

Tesla Dojo 是特斯拉自研的 AI 训练超级计算机，D1 芯片专为 **Full Self-Driving (FSD) 视频数据训练**设计。**500 亿晶体管**，BF16 算力 36.7 TFLOPS，D1 6 颗组成 Tile，Cabinet 集成 6 个 Tile，**ExaPOD 集成 10 个 Cabinet（360 颗 D1）**。

## D1 芯片核心规格

| 项目 | 参数 |
| **发布** | 2021-08-19 |
|------|------|
| **架构** | Tesla D1 |
| **制程** | TSMC 7nm |
| **晶体管数** | 500 亿 |
| **核心数** | 354 个计算核心 |
| **FP32** | 9.1 TFLOPS |
| **BF16/FP16** | 36.7 TFLOPS |
| **INT8** | 36.7 TOPS |
| **TDP** | 400 W |
| **互联** | Dojo 自研互联（400W 接口） |

## Dojo 系统拓扑

| 级别 | 配置 |
|------|------|
| **D1 芯片** | 1× 500 亿晶体管 |
| **Tile** | 6× D1 组成 |
| **Cabinet** | 6× Tile |
| **ExaPOD** | 10× Cabinet = **360 D1 芯片** |
| **ExaPOD 算力** | ~100 EFLOPs（FP16 稀疏） |

## 厂商信息

| 项目 | 内容 |
|------|------|
| **制造商** | Tesla, Inc. |
| **官网** | https://www.tesla.com |
| **产品** | https://www.tesla.com/dojo |
| **用途** | Tesla 内部 FSD 训练 |

## 关键特性

- **特斯拉全栈自研**：芯片 + 系统 + 软件
- **专为 FSD 视频训练**：避免 4D 标注瓶颈
- **ExaPOD 100 EFLOPs**：单集群算力冠绝全球
- **液冷散热**

## 适用场景

- Tesla FSD 自动驾驶模型训练
- 大规模视频数据处理
- 端到端自动驾驶

## 相关产品对比

- [Cerebras WSE-3](/docs/cards/cerebras/wse-3) - 类似晶圆级
- [NVIDIA B200 NVL72](/docs/cards/nvidia/b200) - 主流晶圆级系统
- [NVIDIA H100](/docs/cards/nvidia/h100) - 主流方案
