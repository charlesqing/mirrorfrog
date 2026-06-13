---
id: akida-2
title: BrainChip Akida 2 (类脑神经形态芯片)
sidebar_label: Akida 2
description: BrainChip Akida 2 详尽规格：神经形态架构、event-driven、1.5W 超低功耗、边缘 AI 推理。
keywords: [BrainChip Akida 2, 神经形态, neuromorphic, event-driven, spiking neural network, SNN, 边缘 AI]
---

# BrainChip Akida 2 (神经形态芯片)

## 产品概述

**BrainChip Akida 2** 是 **BrainChip Holdings**（澳大利亚）推出的**神经形态 AI 处理器**（neuromorphic processor），基于**脉冲神经网络（Spiking Neural Network, SNN）**。**2024-09** 发布，**10× Akida 1 性能**。

核心特性：**event-driven**（事件驱动）、**超低功耗**（< 1.5W）、**片上学习**（无需云端训练）。适合**电池供电**、**永远在线**的边缘 AI 设备。

## 核心规格

| 项目 | 参数 |
|------|------|
| **架构** | **Akida 2 神经形态处理器** |
| **网络** | **SNN（脉冲神经网络）** |
| **Neurons** | 80 个 Neural Processing Units |
| **制程** | TSMC 22nm ULL |
| **片上 SRAM** | 4 MB |
| **算力** | 4 TOPS INT8（Akida 1 = 0.4 TOPS） |
| **能效** | **1.5W 典型**（< 1W 空闲） |
| **数据精度** | 1/2/4/8-bit 权重 |
| **片上学习** | **支持**（TAML - Temporal Addressable Memory Learning） |
| **TDP** | 1.5 W |
| **接口** | SPI / I2C / USB / MIPI / PCIe |
| **首发** | 2024-09（Akida 2 IP） |
| **目标价** | $30-$100（IP 授权 / 芯片） |

## 神经形态 vs 传统 CNN

| 维度 | Akida 2 (SNN) | NVIDIA Jetson Orin (CNN) |
|------|----------------|--------------------------|
| 网络 | 脉冲神经网络 | CNN/Transformer |
| 数据 | **Event-driven（稀疏）** | 密集（每帧都计算） |
| 能耗 | **< 1.5W** | 7-60W |
| 片上学习 | **支持** | 不支持 |
| 延迟 | **亚毫秒** | 10-50ms |
| 算力 | 4 TOPS | 67-275 TOPS |
| 训练 | 离线 + 在线微调 | 仅离线 |
| 适用 | 永远在线、电池供电 | 高性能边缘 |

## Akida 2 关键创新

### 1. Event-Driven 计算
- **仅在事件触发时计算**（如摄像头运动检测）
- 静态场景**接近 0 计算**（vs GPU 持续耗电）
- **空闲功耗 < 100mW**

### 2. 片上学习（TAML）
- **Temporal Addressable Memory Learning**
- 设备端增量学习（无需回传云端）
- 适合**个性化场景**（声纹、行为识别）

### 3. 稀疏激活
- 神经元仅在脉冲时激活
- 实际能耗与**激活率**成正比
- 适合**语音检测、运动检测**（低激活率）

### 4. 多模态融合
- 同时处理视觉 + 音频 + IMU
- 共享神经形态层

## 性能对比（关键词识别）

| 模型 | 设备 | 延迟 | 功耗 |
|------|------|------|------|
| **Akida 2** | BrainChip | **0.5ms** | **0.8mW** |
| Akida 1 | BrainChip | 1.2ms | 1.5mW |
| Cortex-M7 | STM32 | 8ms | 30mW |
| Jetson Orin Nano | NVIDIA | 3ms | 7-15W |
| Pixel 8 TPU | Google | 5ms | 1W |

> **Akida 2 在 always-on 场景下比传统 MCU 节能 30-100×**。

## 适用场景

- ✅ **永远在线 (always-on) 设备**：智能音箱、IoT
- ✅ **电池供电** AI：可穿戴、传感器
- ✅ **声纹识别 / 关键词唤醒**
- ✅ **运动检测 / 异常检测**
- ✅ **隐私敏感**（本地推理，无云）
- ❌ 大模型（应使用 GPU/TPU）
- ❌ 高吞吐量推理

## 商业部署

- **汽车**（Mercedes-Benz AVATR 概念车）
- **智能家居**（Edge Impulse 集成）
- **工业 IoT**（预测性维护）
- **国防 / 航空航天**（低功耗 ISR）
- **消费电子**（可穿戴、助听器）

## 软件生态

- **Akida SDK**（Python / C）
- **TensorFlow / PyTorch** 模型转换工具
- **Edge Impulse**（no-code 平台）
- **MetaTF**（模型量化）

## 厂商信息

| 项目 | 内容 |
|------|------|
| **厂商** | BrainChip Holdings（澳大利亚 ASX: BRN） |
| **产品页** | https://brainchip.com/akida-2/ |
| **首发** | 2024-09（Akida 2 IP） |
| **商业模式** | IP 授权 + 芯片销售 |
| **目标市场** | 永远在线边缘 AI、电池供电设备 |

## 相关卡

- [Hailo-8 / 15](/docs/cards/others/hailo) - 边缘视觉 AI
- [NVIDIA Jetson Orin](/docs/cards/nvidia/jetson-orin) - 高性能边缘
- [NVIDIA Jetson Thor](/docs/cards/nvidia/jetson-thor) - Blackwell 边缘
- [Apple Neural Engine](/docs/cards/others/apple-m-series) - 端侧 NPU
