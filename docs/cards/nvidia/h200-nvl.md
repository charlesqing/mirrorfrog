---
id: h200-nvl
title: NVIDIA H200 NVL
sidebar_label: H200 NVL
description: NVIDIA H200 NVL：Hopper 架构 PCIe 形态，141GB HBM3e、4.8 TB/s 带宽、FP8 3,341 TFLOPS、TDP 600W，H200 的 PCIe 双插槽版本。
keywords: [NVIDIA H200 NVL, H200 PCIe, Hopper, HBM3e, 141GB, 大模型推理]
---

# NVIDIA H200 NVL

## 产品概述

**NVIDIA H200 NVL** 是 **H200 的 PCIe 形态版本**，采用双插槽被动散热设计，沿用相同的 Hopper GH100 芯片与 **141GB HBM3e** 显存。与 H200 SXM（700W、HGX 板卡）不同，H200 NVL 以 PCIe 附加卡形式交付，TDP 可配置至 **600W**，通过 2-4 路 NVLink Bridge 实现 900 GB/s 互联。

**战略地位**：H200 NVL 面向标准 PCIe 服务器中的单卡或小规模（2-4 卡）H200 部署，兼顾大显存（141GB）与风冷兼容性，是 H200 SXM 在通用服务器场景下的替代方案。

## 核心规格

| 项目 | 参数 |
|------|------|
| **架构** | NVIDIA Hopper (GH100) |
| **制程** | TSMC 4nm |
| **FP8 算力** | 3,341 TFLOPS |
| **FP16 算力** | 1,671 TFLOPS |
| **FP32** | 60 TFLOPS |
| **INT8 算力** | 3,341 TOPS |
| **显存** | **141 GB HBM3e** |
| **显存类型** | HBM3e |
| **显存带宽** | 4.8 TB/s |
| **互联** | 2-4 路 NVLink Bridge 900 GB/s（每 GPU） |
| **PCIe** | Gen 5 x16 |
| **TDP** | 最高 600 W（可配置） |
| **形态** | 双插槽 PCIe 被动散热 |
| **发布时间** | 2024 年 |
| **价格** | 约 $38,000 – $40,000（市场均价） |

## 与 H200 SXM 对比

| 指标 | H200 NVL | H200 SXM | 差异 |
|------|----------|----------|------|
| 显存 | 141GB HBM3e | 141GB HBM3e | 一致 |
| 带宽 | 4.8 TB/s | 4.8 TB/s | 一致 |
| FP8 | 3,341 TFLOPS | 3,958 TFLOPS | NVL 低 16% |
| TDP | 600 W | 700 W | NVL 低 100W |
| 形态 | PCIe 卡 | SXM5 模组 | 不同 |
| 多卡扩展 | 2-4 路 Bridge | 全 NVSwitch 8 卡 | NVL 规模小 |

## 关键特性

- **141GB HBM3e 大显存**：适合长上下文 LLM 推理与大规模批处理
- **风冷兼容**：标准 PCIe 服务器即可部署
- **NVLink Bridge**：2-4 卡配置保持 900 GB/s 互联

## 厂商信息

| 项目 | 内容 |
|------|------|
| **公司** | NVIDIA Corporation |
| **官网** | https://www.nvidia.com |
| **发布** | 2024 年 |
| **架构** | Hopper |

## 适用场景

- ✅ **大模型推理**（单卡/小规模集群）
- ✅ **长上下文处理**
- ✅ **标准 PCIe 服务器 AI 加速**
- ⚠️ **超大规模分布式训练**（不如 SXM + NVSwitch）

## 相关产品对比

- [NVIDIA H200](/docs/cards/nvidia/h200) - SXM 形态旗舰
- [NVIDIA H100](/docs/cards/nvidia/h100) - 上一代 Hopper
- [NVIDIA H100 NVL](/docs/cards/nvidia/h100-nvl) - H100 的 PCIe NVL 版

## 外部链接

- [NVIDIA H200 Tensor Core GPU 产品页](https://www.nvidia.com/en-us/data-center/h200/)
- [NVIDIA H200  datasheet](https://www.nvidia.com/content/dam/en-zz/Solutions/data-center/hpc/h200-datasheet.pdf)
