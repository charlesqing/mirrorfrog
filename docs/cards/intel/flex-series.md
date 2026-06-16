---
id: flex-series
title: Intel Data Center GPU Flex 系列
sidebar_label: Intel Flex Series
description: Intel Flex 140/170 详尽规格：Xe-HPG 架构、12-16GB GDDR6、224 TOPS INT8、75-150W TDP，云游戏与转码。
keywords: [Intel Flex 140, Flex 170, Xe-HPG, 云游戏, 视频转码, AV1]
---

# Intel Data Center GPU Flex 系列 (Arctic Sound-M)

## 产品概述

Intel Flex 系列（代号 **Arctic Sound-M**）基于 **Xe-HPG 架构**，面向云游戏、媒体转码和轻量 AI 推理工作负载。Flex 170 和 Flex 140 是两个型号，区别在于核心数和功耗。**AV1 硬件编解码**是最大亮点。

## 核心规格

| 项目 | Flex 140 | Flex 170 |
|------|----------|----------|
| **架构** | Xe-HPG | Xe-HPG |
| **制程** | TSMC 6nm | TSMC 6nm |
| **显存** | 12 GB GDDR6 | 16 GB GDDR6 |
| **带宽** | 336 GB/s | 448 GB/s |
| **Xe Core** | 16 | 32 |
| **FP32** | 3.5 TFLOPS | 7.0 TFLOPS |
| **INT8 (XMX)** | 112 TOPS | 224 TOPS |
| **TDP** | 75 W | 150 W |
| **PCIe** | Gen 4 x8 | Gen 4 x16 |
| **媒体引擎** | 4× Xe Media | 4× Xe Media |
| **AV1 编码** | 支持 | 支持 |
| **发布** | 2022-09-20 |

## 厂商信息

| 项目 | 内容 |
|------|------|
| **制造商** | Intel Corporation |
| **官网** | https://www.intel.com |
| **产品页** | https://www.intel.com/content/www/us/en/products/details/discrete-gpus/data-center-gpu/flex-series.html |
| **驱动** | https://www.intel.com/content/www/us/en/download/1934878.html |

## 关键特性

- **超多 4× 媒体引擎**：HEVC、AVC、AV1 编解码
- **低功耗**：75W 型号可被动散热
- **OpenVINO 推理优化**

## 适用场景

- 云游戏
- 视频转码（AV1）
- 轻量 AI 推理
- 媒体处理流水线

## 所属架构

- [GPU 架构](/docs/architectures/arch-gpu) - 通用 AI 加速, Xe-HPG 微架构

## 相关产品对比

- [Intel Max Series (Ponte Vecchio)](/docs/cards/intel/max-series) - HBM2e 128GB 数据中心 GPU
- [NVIDIA L4](/docs/cards/nvidia/l4) - 同类推理 GPU 24GB GDDR6
- [NVIDIA L40S](/docs/cards/nvidia/l40s) - 同类推理 GPU 48GB GDDR6
- [NVIDIA T4](/docs/cards/nvidia/t4) - 同类入门推理 GPU
- [Intel Gaudi 2](/docs/cards/intel/gaudi-2) - Intel 数据中心 NPU
- [完整对比表](/docs/comparison)
