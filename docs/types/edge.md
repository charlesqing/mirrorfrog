---
id: edge
title: 边缘 AI 设备 (Jetson)
sidebar_label: 边缘 AI
description: 2025 年边缘 AI 设备：NVIDIA Jetson Orin 系列 (67-275 TOPS) 与 Jetson Thor (Blackwell 2,070 TFLOPS) 完整规格。
keywords: [边缘 AI, Jetson Orin, Jetson Thor, 嵌入式 AI, 机器人, 工业]
---

# 边缘 AI 计算设备

边缘 AI 设备是**部署在现场端**（机器人、工厂、车辆）的 AI 处理器。它们在**功耗受限**和**无数据中心连接**的环境下运行 AI 推理。**NVIDIA Jetson** 是这一领域的领导者。

## NVIDIA Jetson 全系列对比

| 系列 | 代表型号 | AI 算力 | GPU 架构 | 显存 | 功耗 | 适用 |
|------|----------|---------|----------|------|------|------|
| **Jetson Orin Nano 8GB Super** | Orin Nano 8GB | **67 TOPS** | Ampere | 8GB LPDDR5 | 7-25W | 入门边缘 |
| **Jetson Orin NX 8GB** | Orin NX 8GB | 117 TOPS | Ampere | 8GB LPDDR5 | 10-25W | 紧凑边缘 |
| **Jetson Orin NX 16GB** | Orin NX 16GB | 157 TOPS | Ampere | 16GB LPDDR5 | 10-25W | 中等边缘 |
| **Jetson AGX Orin 32GB** | AGX Orin 32GB | 200 TOPS | Ampere | 32GB LPDDR5 | 15-60W | 高性能边缘 |
| **Jetson AGX Orin 64GB** | AGX Orin 64GB | **275 TOPS** | Ampere | 64GB LPDDR5 | 15-60W | 高端边缘 |
| **Jetson T4000 (Thor)** | AGX Thor T4000 | **1,200 FP4 TFLOPS** | **Blackwell** | 64GB LPDDR5X | 40-70W | 下一代 |
| **Jetson T5000 (Thor)** | AGX Thor T5000 | **2,070 FP4 TFLOPS** | **Blackwell** | 128GB LPDDR5X | 40-130W | 人形机器人 |

## Jetson Orin vs Thor

| 指标 | AGX Orin 64GB | AGX Thor T5000 | 提升 |
|------|---------------|----------------|------|
| AI 算力 | 275 TOPS (INT8) | 2,070 FP4 TFLOPS | **7.5×** |
| 显存 | 64 GB LPDDR5 | **128 GB LPDDR5X** | 2× |
| 带宽 | 204.8 GB/s | 273 GB/s | 1.3× |
| GPU 架构 | Ampere | **Blackwell** | 新代 |
| 功耗 | 15-60W | 40-130W | 略高 |
| LLM 推理 | 7B-13B | **70B+** | 突破 |

## 关键特性

### Jetson Orin
- **完整 CUDA 生态**：与服务器 GPU 同一软件栈
- **NVDLA + PVA**：辅助深度学习与视觉加速
- **JetPack SDK**：统一开发平台
- **Orin Nano Super**：软件升级，40 → 67 TOPS

### Jetson Thor (2025)
- **Blackwell 边缘**：与数据中心同代
- **128GB 内存**：70B+ LLM 单机可载
- **Holoscan Sensor Bridge**：实时多传感器融合
- **人形机器人专用**：Isaac GR00T

## 选型建议

### 按应用

- **人形机器人 / 自主移动机器人**：Jetson Thor T5000
- **工业视觉**：Jetson AGX Orin / Orin NX
- **智能摄像头**：Jetson Orin Nano
- **无人机 / 边缘 AI**：Jetson Orin NX
- **入门嵌入式**：Jetson Orin Nano 8GB

### 按预算

- **$249**：Jetson Orin Nano 8GB Super Developer Kit
- **$1,000+**：Jetson AGX Orin 64GB
- **$3,000+**：Jetson AGX Thor T5000 Developer Kit

## 详细产品页

- [NVIDIA Jetson Orin 系列](/docs/cards/nvidia/jetson-orin) - 完整 Orin 系列
- [NVIDIA Jetson Thor](/docs/cards/nvidia/jetson-thor) - 下一代
- [Hailo-8 / Hailo-15](/docs/cards/others/hailo) - 高效视觉 AI 加速器

## 相关类型

- [消费级 AI 显卡](/docs/types/consumer)
- [AI 推理 GPU](/docs/types/inference-gpu)
- [完整对比表](/docs/comparison)
