---
id: jetson-thor
title: NVIDIA Jetson Thor
sidebar_label: NVIDIA Jetson Thor
description: NVIDIA Jetson Thor 是 Blackwell 边缘 AI 模组：2070 FP4 TFLOPS、128GB LPDDR5X、40-130W，专为人形机器人和物理 AI 设计。
keywords: [Jetson Thor, Blackwell 边缘, 人形机器人, 物理 AI, T5000, T4000]
---

# NVIDIA Jetson Thor (Blackwell Edge)

## 产品概述

NVIDIA Jetson Thor 是 2025 年发布的下一代边缘 AI 模组，基于 **Blackwell 架构 GPU**。**AI 算力高达 2,070 FP4 TFLOPS**（稀疏），是上一代 AGX Orin (275 TOPS) 的 **7.5 倍**。Jetson Thor 专为人形机器人、自主机器和物理 AI 设计，能在边缘运行 LLM、VLM（视觉语言模型）和 VLA（视觉-语言-动作）模型。

## 核心规格

| 规格 | Jetson AGX Thor Developer Kit | Jetson T5000 | Jetson T4000 |
| **发布** | 2025 年 8 月（GA） |
|------|------------------------------|--------------|--------------|
| **AI 算力 (FP4 稀疏)** | **2,070 TFLOPS** | 2,070 TFLOPS | 1,200 TFLOPS |
| **GPU** | 2,560-core Blackwell + 第五代 Tensor Core | 2,560-core Blackwell + 第五代 Tensor Core | 1,536-core Blackwell + 第五代 Tensor Core |
| **MIG** | 10 TPC | 10 TPC | 6 TPC |
| **CPU** | 14× Arm Neoverse-V3AE 64-bit | 14× Arm Neoverse-V3AE 64-bit | 12× Arm Neoverse-V3AE 64-bit |
| **CPU 频率** | 最高 2.6 GHz | 最高 2.6 GHz | 最高 2.6 GHz |
| **L3 Cache** | 16 MB 共享 | 16 MB 共享 | 16 MB 共享 |
| **显存** | **128 GB LPDDR5X** | 128 GB LPDDR5X | 64 GB LPDDR5X |
| **带宽** | 273 GB/s | 273 GB/s | 273 GB/s |
| **功耗** | 40-130 W | 40-130 W | 40-70 W |
| **网络** | 1× 5GbE + 1× QSFP28 (4× 25GbE) | 4× 25GbE | 3× 25GbE |
| **PCIe** | M.2 Key M Gen5 x4 | Gen5 x8 | Gen5 x8 |
| **视觉加速器** | 1× PVA v3 | 1× PVA v3 | 1× PVA v3 |
| **视频编解码** | 2× NVENC + 2× NVDEC | 2× NVENC + 2× NVDEC | 1× NVENC + 1× NVDEC |

## 厂商信息

| 项目 | 内容 |
|------|------|
| **制造商** | NVIDIA Corporation |
| **官网** | https://www.nvidia.com/en-us/autonomous-machines/embedded-systems/jetson-thor/ |
| **生态** | Isaac GR00T N1（人形机器人基础模型）、VSS（视频搜索与摘要）、Holoscan Sensor Bridge |

## 关键特性

- **7.5× AGX Orin 算力**，**3.5× 能效比**
- **支持 LLM / VLM / VLA** 模型在边缘运行
- 128GB 内存可加载 70B+ 模型
- 5× 25GbE 网络支持多机协同
- Holoscan Sensor Bridge 实现实时多传感器融合

## 适用场景

- **人形机器人**（Isaac GR00T）
- **自主移动机器人**（AMR）
- **边缘 LLM 推理**
- **多模态 AI**（视频 + 语音 + 决策）
- **低延迟实时推理**

## 相关产品对比

- [NVIDIA Jetson Orin](/docs/cards/nvidia/jetson-orin) - 上一代
- [NVIDIA RTX 4090](/docs/cards/nvidia/rtx-4090) - 桌面开发
- [NVIDIA B200](/docs/cards/nvidia/b200) - 云端训练
