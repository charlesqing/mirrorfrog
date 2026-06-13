---
id: jetson-orin
title: NVIDIA Jetson Orin
sidebar_label: NVIDIA Jetson Orin
description: NVIDIA Jetson Orin 系列边缘 AI 模组：Orin Nano (67 TOPS) 到 AGX Orin (275 TOPS)，Ampere 架构，7-60W TDP。
keywords: [Jetson Orin, 边缘 AI, 嵌入式, AGX Orin, Orin Nano, 机器人, 工业]
---

# NVIDIA Jetson Orin 系列

## 产品概述

NVIDIA Jetson Orin 是面向边缘 AI 和机器人应用的 SoM（System-on-Module）系列。基于 **Ampere 架构 GPU + ARM Cortex-A78AE CPU**，提供从 67 TOPS 到 275 TOPS 的 AI 算力范围。Orin 系列包括 **Orin Nano**、**Orin NX** 和 **AGX Orin** 三个子系列。

## 核心规格

| 项目 | 参数 |
|------|------|
| **TDP** | 60 W |

## Orin Nano 系列

| 规格 | Orin Nano 4GB | Orin Nano 8GB |
|------|---------------|---------------|
| **AI 算力** | 34 TOPS (INT8) | **67 TOPS** (INT8) |
| **GPU** | 512 CUDA Core + 16 Tensor Core | 1,024 CUDA Core + 32 Tensor Core |
| **CPU** | 6× Arm Cortex-A78AE 1.5 MB L2 + 4 MB L3 | 6× Arm Cortex-A78AE 1.5 MB L2 + 4 MB L3 |
| **显存** | 4 GB LPDDR5 (51 GB/s) | 8 GB LPDDR5 (102 GB/s) |
| **功耗** | 7-25 W | 7-25 W |
| **价格** | $199 | **$249**（Super Developer Kit） |

## Orin NX 系列

| 规格 | Orin NX 8GB | Orin NX 16GB |
|------|-------------|--------------|
| **AI 算力** | 117 TOPS | **157 TOPS** |
| **GPU** | 1,792 CUDA + 56 Tensor Core | 2,048 CUDA + 64 Tensor Core |
| **CPU** | 8× Arm Cortex-A78AE 2.0 GHz | 8× Arm Cortex-A78AE 2.0 GHz |
| **DLA** | 1× NVDLA v2 1.23 GHz | 2× NVDLA v2 1.4 GHz |
| **PVA** | 1× PVA v2 | 1× PVA v2 |
| **显存** | 8 GB LPDDR5 (102 GB/s) | 16 GB LPDDR5 (102 GB/s) |
| **功耗** | 10-25 W | 10-25 W |

## AGX Orin 系列

| 规格 | AGX Orin 32GB | AGX Orin 64GB |
|------|---------------|---------------|
| **AI 算力** | 200 TOPS | **275 TOPS** |
| **GPU** | 2,048 CUDA + 64 Tensor Core | 2,048 CUDA + 64 Tensor Core |
| **CPU** | 12× Arm Cortex-A78AE 2.2 GHz | 12× Arm Cortex-A78AE 2.2 GHz |
| **DLA** | 2× NVDLA v2 1.6 GHz | 2× NVDLA v2 1.6 GHz |
| **PVA** | 1× PVA v2 | 1× PVA v2 |
| **显存** | 32 GB LPDDR5 (204.8 GB/s) | **64 GB LPDDR5** (204.8 GB/s) |
| **功耗** | 15-60 W | 15-60 W |

## 厂商信息

| 项目 | 内容 |
|------|------|
| **制造商** | NVIDIA Corporation |
| **官网** | https://www.nvidia.com/en-us/autonomous-machines/embedded-systems/ |
| **生态** | JetPack SDK, Isaac (机器人), Metropolis (视频 AI), Holoscan (传感器) |
| **发布** | 2022-2023 年陆续发布 |

## 关键特性

- **完整 CUDA 生态**：与服务器 GPU 同一软件栈
- **多模态感知**：ISP + PVA（视觉加速器）+ DLA（深度学习加速器）
- **Jetson Orin Nano Super**：软件升级使 40 TOPS 提升到 67 TOPS
- **长寿命支持**：10+ 年供货周期

## 适用场景

- 机器人（AMR、人形机器人）
- 工业视觉与质检
- 自动驾驶（边缘）
- 智慧城市（视频分析）
- 无人机

## 相关产品对比

- [NVIDIA Jetson Thor](/docs/cards/nvidia/jetson-thor) - 下一代 Blackwell 边缘
- [NVIDIA RTX 4090](/docs/cards/nvidia/rtx-4090) - 高端开发
- [Google TPU v5e](/docs/cards/google/tpu-v6e) - 边缘推理云
