---
id: ascend-910b
title: Huawei Ascend 910B
sidebar_label: Huawei Ascend 910B
description: Huawei Ascend 910B 详尽规格：64GB HBM2e、256 TFLOPS FP16、512 TOPS INT8、310W TDP，国产 AI 训练 GPU。
keywords: [Huawei Ascend 910B, 昇腾 910B, 国产 AI 芯片, Da Vinci, CANN]
---

# Huawei Ascend 910B

## 产品概述

Huawei Ascend 910B 是华为昇腾系列 AI 训练芯片，**基于 Da Vinci 架构**，2022-2023 年开始量产。在美国出口管制背景下，**是中国市场 NVIDIA 替代方案的主流选择**。搭载 64GB HBM2e 显存，FP16 算力 256 TFLOPS，已被用于百度、阿里、腾讯等中国大型 AI 项目。

**注意**：Ascend 910B 有多个版本（B1/B2/B3/B4），规格略有差异。本文以 B1 版本为准。

## 核心规格

| 项目 | 参数 |
|------|------|
| **架构** | Da Vinci（华为自研） |
| **制程** | TSMC 7nm+（含 SMIC 国产化努力） |
| **显存** | 64 GB HBM2e（B1/B2）/ HBM3e（B3） |
| **显存带宽** | 600 GB/s（B1/B2）/ 1,200 GB/s（B3） |
| **FP32** | 51.2 TFLOPS |
| **FP16** | 256 TFLOPS |
| **INT8** | 512 TOPS |
| **TDP** | 310 W |
| **互联** | HCCS（华为自研） |
| **形式** | PCIe 半高半长 |

## 版本差异

| 版本 | 算力（FP16） | 显存类型 | 显存带宽 | 定位 |
|------|--------------|----------|------------|------|
| B1 | 256 TFLOPS | HBM2e | 600 GB/s | 训练（高性能） |
| B2 | 224 TFLOPS | HBM2e | 600 GB/s | 训练（平衡） |
| B3 | 192 TFLOPS | HBM3e | 1,200 GB/s | 推理（高带宽） |
| B4 | 160 TFLOPS | HBM3e | 1,200 GB/s | 推理（高能效） |

## 厂商信息

| 项目 | 内容 |
|------|------|
| **制造商** | 华为技术有限公司 |
| **官网** | https://www.hiascend.com |
| **产品页** | https://www.hiascend.com/en/hardware/ascend-910-b |
| **CANN 软件栈** | https://www.hiascend.com/en/software/cann |
| **MindSpore** | https://www.mindspore.cn |
| **驱动下载** | https://www.hiascend.com/developer/download |

## 关键特性

- **HCCS 高速互联**：替代 NVLink
- **CANN 异构计算架构**：类似 CUDA
- **MindSpore 框架**：华为自研 AI 框架
- **国产化生态**：鲲鹏 + 昇腾 + MindSpore 完整栈

## 适用场景

- LLM 训练（百亿参数）
- 中国市场国产化替代
- 政府和国企 AI 项目
- 大模型推理

## 相关产品对比

- [Huawei Ascend 910C](/docs/cards/huawei/ascend-910c) - 继任者
- [NVIDIA A100](/docs/cards/nvidia/a100) - 上一代对标
- [NVIDIA H100](/docs/cards/nvidia/h100) - 当前主流

