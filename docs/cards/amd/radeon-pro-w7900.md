---
id: radeon-pro-w7900
title: AMD Radeon PRO W7900
sidebar_label: Radeon PRO W7900
description: AMD Radeon PRO W7900 专业工作站显卡：RDNA 3 架构、48GB GDDR6 ECC、864 GB/s 带宽、FP32 61.3 TFLOPS，面向 AI 工作站与专业图形。
keywords: [AMD Radeon PRO W7900, RDNA 3, GDDR6, 专业显卡, AI 工作站, ECC 显存]
---

# AMD Radeon PRO W7900

## 产品概述

**AMD Radeon PRO W7900** 是 AMD 于 2023 年发布的基于 **RDNA 3 架构** 的旗舰专业工作站显卡，也是首款支持 **DisplayPort 2.1** 的 GPU。**48GB GDDR6 ECC 显存**、**864 GB/s** 带宽、**FP32 61.3 TFLOPS**，是 AMD 在 AI 工作站与本地大模型推理领域对抗 NVIDIA RTX 系列的主力产品（技嘉等厂商推出 AI TOP 48G 版本主打 LLM 微调）。

**战略地位**：凭借 48GB 大显存与 ECC 纠错，W7900 是本地运行 70B 级模型的低成本方案（四卡可达 192GB），在国产替代与预算敏感场景中具备竞争力。

## 核心规格

| 项目 | 参数 |
|------|------|
| **架构** | AMD RDNA 3 |
| **制程** | TSMC 5nm（GCD）/ 6nm（MCD） |
| **计算单元** | 96 CU（6,144 流处理器） |
| **FP32** | 61.3 TFLOPS |
| **FP16 算力** | 123 TFLOPS |
| **INT8 算力** | 123 TOPS |
| **INT4 算力** | 245 TOPS |
| **显存** | **48 GB GDDR6** |
| **显存类型** | GDDR6 |
| **显存带宽** | 864 GB/s（384-bit） |
| **Infinity Cache** | 96 MB |
| **ECC** | 支持 |
| **TDP** | 295 W |
| **PCIe** | Gen 4.0 x16 |
| **发布时间** | 2023 年（驱动持续更新至 2025） |
| **价格** | 约 $3,500（市场均价） |

## 关键特性

- **48GB GDDR6 ECC 显存**：四卡可达 192GB，适合大模型训练/微调
- **RDNA 3  Chiplet 设计**：96 CU + 192 AI 加速器
- **DisplayPort 2.1**：首款支持，12K@120Hz 输出
- **ROCm 生态**：支持 PyTorch / TensorFlow，x86 原生迁移

## 厂商信息

| 项目 | 内容 |
|------|------|
| **公司** | Advanced Micro Devices, Inc. |
| **官网** | https://www.amd.com |
| **发布** | 2023 年 |
| **架构** | RDNA 3 |

## 适用场景

- ✅ **AI 工作站**（本地大模型推理/微调）
- ✅ **专业图形**（CAD、3D 渲染）
- ✅ **数据科学**（带 ECC 显存）
- ✅ **视频编解码**（AV1）

## 相关产品对比

- [NVIDIA RTX Pro 6000 Blackwell](/docs/cards/nvidia/rtx-pro-6000-blackwell) - 竞品（96GB GDDR7）
- [NVIDIA RTX Pro 5000 Blackwell](/docs/cards/nvidia/rtx-pro-5000-blackwell) - 竞品（48GB GDDR7）
- [AMD MI300X](/docs/cards/amd/mi300x) - AMD 数据中心训练卡

## 外部链接

- [AMD Radeon PRO W7900 驱动与规格](https://www.amd.com/en/support/downloads/drivers.html/graphics/radeon-pro/radeon-pro-w7000-series/amd-radeon-pro-w7900.html)
- [ROCm 文档](https://rocm.docs.amd.com)
