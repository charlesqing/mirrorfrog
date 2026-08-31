---
id: cambricon-mlu-270
title: 寒武纪 思元270 (MLU270)
sidebar_label: 思元270 (MLU270)
description: "寒武纪思元270 (MLU270) 云端/边缘 AI 推理加速卡（2019）：MLUv02 架构，128 TOPS INT8，16GB DDR4，70–150W，支持视频编解码。"
keywords: [寒武纪 思元270, Cambricon MLU270, MLUv02, 128 TOPS INT8, 边缘推理, 云端推理, 国产 AI 芯片]
vendor: others
vendor_full: "Cambricon"
series: "思元 (Siyuan)"
release_date: "2019"
status: "量产"
---

# 寒武纪 思元270 (MLU270)

## 产品概述

**寒武纪思元270（MLU270）** 是寒武纪第二代云端 AI 芯片，**2019 年正式发布**，采用 **MLUv02 架构**，定位**云端与边缘的高能效 AI 推理加速**。相比第一代思元100，非稀疏模型理论峰值性能提升至 **4 倍**，达到 **128 TOPS（INT8）**，同时兼容 INT4（256 TOPS）与 INT16（64 TOPS），并支持 FP16/FP32 混合精度。

思元270 是寒武纪"云边端"产品布局中的重要一环：云端推理以 **MLU270-S4（70W）**、**MLU270-F4（150W）** 等加速卡形态交付，并为视觉场景集成了充裕的视频/图像编解码硬件单元，适合数据中心视频解析、智慧城市等推理负载。它与后续 **思元290（训练）**、**思元370（Chiplet 训推一体）**、**思元590（第三代旗舰）** 形成完整代际序列。

## 核心规格

| 项目 | 参数 |
|------|------|
| **架构** | 寒武纪 MLUv02 |
| **制程** | TSMC 16nm |
| **INT8 算力** | **128 TOPS** |
| **INT4 算力** | 256 TOPS |
| **INT16 算力** | 64 TOPS |
| **FP16 / BF16 算力** | 未公开（支持混合精度，峰值未公布） |
| **FP32 算力** | 未公开 |
| **显存容量** | **16 GB** |
| **显存类型** | **DDR4（ECC）** |
| **显存位宽** | 256 bit |
| **显存带宽** | **102 GB/s** |
| **TDP** | **70 W（MLU270-S4）/ 150 W（MLU270-F4）** |
| **互联** | PCIe 3.0 ×16 |
| **接口** | PCIe ×16（S4 半高半长 / F4 全高全长双槽） |
| **视频编解码** | 硬件编解码单元（视频/图像） |
| **发布** | 2019 |
| **量产/上市** | 已量产 |

> ⚠️ **规格说明**：显存类型为 **DDR4（ECC）**，部分早期资料笼统记作"LPDDR/板载内存"，以寒武纪官网产品页（MLU270-S4/F4）的 16GB DDR4 ECC / 102 GB/s 为准。FP16/FP32 峰值算力官网未公开，仅确认支持混合精度。

## 关键特性

- **MLUv02 架构**：基于片上网络（NoC），可在芯片内 16 个张量核心间保证并行效率；硬件片内数据压缩提升缓存有效容量与带宽
- **高能效推理**：INT8 推理性能较第一代提升 4 倍，可提供约 40 倍于 CPU 的能效比
- **丰富精度支持**：INT4/INT8/INT16 + FP16/FP32 混合精度
- **视频视觉优化**：集成充裕的视频/图像编解码硬件单元，适合视频解析与智慧城市
- **端云一体软件**：支持 Cambricon NeuWare / MagicMind，兼容 TensorFlow、PyTorch、Caffe、MXNet 等主流框架

## 厂商信息

| 项目 | 内容 |
|------|------|
| **公司** | 中科寒武纪科技股份有限公司（Cambricon） |
| **总部** | 北京 |
| **成立** | 2016 年 |
| **上市** | 科创板 688256 |

## 适用场景

- ✅ **云端 AI 推理**（视觉、语音、NLP、推荐）
- ✅ **视频解析 / 智慧城市**（硬件编解码单元）
- ✅ **边缘/非数据中心推理**（F4 主动散热，可部署于工作站）
- ✅ **传统机器学习加速**
- ❌ 大规模模型训练（定位推理，算力与显存受限）
- ❌ CUDA 生态强依赖（需迁移至 Cambricon NeuWare）

## 相关卡

- [寒武纪 思元590 (MLU590)](/docs/cards/others/cambricon-mlu-590) — 第三代旗舰训推一体卡（代际后续）
- [寒武纪 思元370 (MLU370)](/docs/cards/others/cambricon-mlu-370) — Chiplet 训推一体卡
- [寒武纪 思元290 (MLU290)](/docs/cards/others/cambricon-mlu-290) — 同代训练卡
- [寒武纪 思元220 (MLU220)](/docs/cards/others/cambricon-mlu-220) — 边缘/车载推理 SoC
- [寒武纪 MLU690](/docs/cards/cambricon/mlu-690) — 下一代旗舰（规划）

## 参考资料

- [寒武纪官网 · 思元270系列](https://www.cambricon.com/index.php?a=lists&c=index&catid=15&m=content)
- [寒武纪官网 · MLU270-F4 智能加速卡产品规格](https://www.cambricon.com/index.php?a=lists&c=index&catid=37&m=content)
- [Cambricon AI Wiki · MLU 系列参数整合](https://aiwiki.ai/wiki/cambricon)
