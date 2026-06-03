---
id: hailo
title: Hailo-8 / Hailo-8L / Hailo-15
sidebar_label: Hailo-8 / 15
description: Hailo-8/Hailo-8L/Hailo-15 边缘 AI 加速器详尽规格：26-40 TOPS INT8、低功耗、视觉 AI 推理。
keywords: [Hailo-8, Hailo-8L, Hailo-15, 边缘 AI, 视觉推理, 26 TOPS, 40 TOPS]
---

# Hailo-8 / Hailo-8L / Hailo-15 边缘 AI 加速器

## 产品概述

Hailo 是以色列 **Hailo Technologies** 推出的**边缘 AI 推理加速器**，专为**计算机视觉**和**多模态 LLM** 设计。**Hailo-8**（2019 发布，26 TOPS）已商用部署于 **NVIDIA Jetson Orin** 替代方案、Raspberry Pi AI Kit、智能摄像头、工业视觉等场景。

最新产品为 **Hailo-15**（2024 发布，集成 VPU + AI 加速器，单芯片视觉 AI 处理器）。

## 产品线对比

| 项目 | Hailo-8 | Hailo-8L | Hailo-15-15 | Hailo-15-30 |
|------|---------|----------|-------------|-------------|
| **INT8 算力** | 26 TOPS | 13 TOPS | 20 TOPS | 40 TOPS |
| **制程** | TSMC 14nm | TSMC 14nm | TSMC 7nm | TSMC 7nm |
| **TDP** | 2.5 W | 1.5 W | 6 W | 9 W |
| **效率** | 10.4 TOPS/W | 8.7 TOPS/W | 3.3 TOPS/W | 4.4 TOPS/W |
| **内存** | 4GB LPDDR4 | 4GB LPDDR4 | 集成 VPU + 4GB | 集成 VPU + 8GB |
| **形态** | M.2 / mPCIe / BGA | M.2 / BGA | SoC（含 ISP/VPU） | SoC |
| **首发** | 2019 | 2020 | 2024 | 2024 |

> **Hailo-15** 集成 **ISP（图像信号处理器）+ VPU（视频编解码）+ AI 加速器**，单芯片替代多芯片方案。

## 架构亮点

### 数据流架构（Dataflow Architecture）
- 类 Cerebras WSE 的**空间架构**，权重驻留片上 SRAM。
- 无外部内存访问延迟（CV 模型全部驻留）。
- **确定性延迟**：单张图推理延迟 < 5 ms（ResNet-50）。

### 模型压缩
- Hailo **Dataflow Compiler** 自动量化（INT8/INT4/混合精度）。
- 支持剪枝、层融合、内存优化。
- 模型压缩率 ~3-5×（FP32 → INT8）且精度损失小于 1%。

### 多模型并行
- 单卡可同时跑**多个模型**（如检测+分类+分割）。
- 硬件资源分片，隔离性强。

## 软件生态

### 工具链
- **Hailo Dataflow Compiler**（HDF → HAR 转换）
- **Hailo Model Zoo**（30+ 预训练模型，含 YOLOv5/v8、ResNet、EfficientNet）
- **HailoRT**（运行时，C/C++/Python API）
- **Hailo Python API**（gRPC 风格）

### 框架
- **TensorFlow / PyTorch / ONNX**（导出后编译）
- **GStreamer**（视频流集成）
- **ROS**（机器人）

### 操作系统
- Linux（ARM/x86）
- Windows（部分型号）
- 集成于 **NVIDIA JetPack**（替代 GPU 加速）

## 部署案例

- **Hailo-8 M.2 + Raspberry Pi 5** — 13 TOPS AI Kit（$70）
- **智能摄像头**（Axis、奇虎 360）— 边缘视频分析
- **工业视觉**（产线缺陷检测）
- **自动驾驶**（Tier 1 供应商 ADAS 前视）
- **机器人**（服务机器人视觉 SLAM）

## 性能基准（YOLOv5s 640×640）

| 设备 | FPS | 延迟 | TDP |
|------|-----|------|-----|
| **Hailo-8** | 600 FPS | 1.7 ms | 2.5 W |
| **Hailo-8L** | 300 FPS | 3.3 ms | 1.5 W |
| **NVIDIA Jetson Orin Nano 8GB** | 125 FPS | 8 ms | 7-15 W |
| **NVIDIA Jetson Xavier NX** | 90 FPS | 11 ms | 10-20 W |
| **CPU (i7-12700H)** | 25 FPS | 40 ms | 45 W |

> Hailo-8 在 YOLOv5s 上**比 Jetson Xavier NX 快 6.7×，功耗低 4-8×**。

## 厂商信息

| 项目 | 内容 |
|------|------|
| **厂商** | Hailo Technologies（以色列） |
| **产品页** | https://hailo.ai/ |
| **售价** | Hailo-8 M.2: $200 / Hailo-8L: $150 / Hailo-15 套件: $300+ |
| **融资** | C 轮 $136M（2023-04，总融资 $340M） |
| **目标市场** | 边缘 AI、智能摄像头、工业视觉、机器人 |

## 适用场景

- ✅ **边缘视觉 AI 推理**（摄像头、机器人）
- ✅ 工业视觉（产线检测）
- ✅ ADAS（高级驾驶辅助）
- ✅ 边缘 LLM（Phi-3、Llama 2 7B 量化）
- ❌ 大模型训练
- ❌ 数据中心推理（NV H100 性能/瓦特更优）

## 相关卡

- [NVIDIA Jetson Orin](/docs/cards/nvidia/jetson-orin) - 同类边缘 AI
- [NVIDIA Jetson Thor](/docs/cards/nvidia/jetson-thor) - 下一代边缘
- [Google TPU v6e](/docs/cards/google/tpu-v6e) - 数据中心对比
