---
id: max-series
title: Intel Max Series (Ponte Vecchio)
sidebar_label: Intel Max Series
description: Intel Max 1550/1350 (Ponte Vecchio) 详尽规格：Xe-HPC 架构、128GB HBM2e、52.3 TFLOPS FP32、600W TDP，Aurora 超算核心。
keywords: [Intel Max 1550, Ponte Vecchio, Xe-HPC, Aurora 超算, Intel 数据中心 GPU]
---

# Intel Max Series (Ponte Vecchio)

## 产品概述

Intel Max Series（代号 **Ponte Vecchio**）是 Intel 面向 HPC 的旗舰级 GPU，基于 **Xe-HPC 架构**。Max 1550 由 47 个小芯片（chiplet）封装而成，是 Aurora 超算（美国第二台 E 级超算）的核心组件。提供 Max 1550（顶级）和 Max 1350（主流）两个型号。

## 核心规格

| 项目 | Max 1550 | Max 1350 |
| **发布** | 2023 年（Aurora 部署） |
|------|----------|----------|
| **架构** | Xe-HPC（Ponte Vecchio） | Xe-HPC |
| **制程** | Intel 7 + TSMC 5nm + TSMC 7nm | 同左 |
| **Xe Core** | 512 | 336 |
| **显存** | **128 GB HBM2e** | 96 GB HBM2e |
| **带宽** | **3,276.8 GB/s** | 2,457.6 GB/s |
| **FP32** | **52.3 TFLOPS** | 34.4 TFLOPS |
| **FP64** | 26.2 TFLOPS | 17.2 TFLOPS |
| **FP16 Matrix (XMX)** | 838 TFLOPS | 550 TFLOPS |
| **INT8 (XMX)** | 1,677 TOPS | 1,101 TOPS |
| **TDP** | **600 W** | 450 W |
| **互联** | Xe Link, PCIe 5.0 | Xe Link, PCIe 5.0 |
| **形式** | OAM | OAM |

## 厂商信息

| 项目 | 内容 |
|------|------|
| **制造商** | Intel Corporation |
| **官网** | https://www.intel.com |
| **产品页** | https://www.intel.com/content/www/us/en/products/details/discrete-gpus/data-center-gpu/max-series.html |
| **驱动** | https://www.intel.com/content/www/us/en/download/1934878.html |
| **oneAPI** | https://www.intel.com/content/www/us/en/developer/tools/oneapi/overview.html |

## 关键特性

- **47 个小芯片封装**：包括计算、I/O、基础、HBM 芯片
- **Xe Link 高速互联**：替代 NVLink
- **oneAPI 编程模型**：跨 CPU/GPU 统一
- **FP64 强项**：传统 HPC 重要

## 适用场景

- HPC 科学计算（FP64 强）
- Aurora 超算（美国第二台 E 级）
- AI 训练
- 内存受限型工作负载

## 相关产品对比

- [NVIDIA A100](/docs/cards/nvidia/a100) - 同期产品
- [AMD MI250](/docs/cards/amd/mi250) - HPC 直接对标
- [Intel Gaudi 3](/docs/cards/intel/gaudi-3) - 同厂新一代
