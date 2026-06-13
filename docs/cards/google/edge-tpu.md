---
id: edge-tpu
title: Google Edge TPU (Coral 4 TOPS 边缘推理 ASIC)
sidebar_label: Edge TPU
description: Google Edge TPU 详尽规格：4 TOPS INT8、2 TOPS/W、M.2/USB/PCIe 多种形态、TensorFlow Lite、Coral USB Accelerator $60 入门。
keywords: [Google Edge TPU, Edge TPU, Coral, 4 TOPS, 2 TOPS/W, M.2 Accelerator, TensorFlow Lite]
---

# Google Edge TPU (Coral 4 TOPS 边缘推理)

## 产品概述

**Google Edge TPU**（商品名 **Coral**）是 Google 2019-03 发布的 **边缘 AI 推理 ASIC**，专为 **TensorFlow Lite** 模型在边缘设备上低功耗、低延迟推理设计。**4 TOPS INT8**、**2 TOPS/W**（0.5W/TOPS），多种形态：**Coral USB Accelerator**（USB 3.0 棒状）、**M.2 Accelerator A+E key**（22×30mm）、**M.2 Accelerator B+M key**（22×80mm）、**Mini PCIe Accelerator**（30×26.8mm）、**PCIe Accelerator**（标准 PCIe 卡）、**Dual Edge TPU M.2**（2× 4 TOPS = 8 TOPS）、**Dev Board**（完整 SoC + Edge TPU 树莓派大小开发板）。**Coral USB Accelerator $59.99** 是全球最便宜、最易用的入门级 AI 推理设备。运行 MobileNet V2 达 **400 FPS**（0.5W/TOPS）。

## 核心规格

| 项目 | 参数 |
|------|------|
| **架构** | **Edge TPU ASIC**（Google 自研边缘推理） |
| **制程** | 推测 28nm |
| **TOPS** | **4 TOPS INT8**（单芯片）/ **8 TOPS**（Dual 双 TPU 模块） |
| **能效** | **2 TOPS/W**（0.5W/TOPS） |
| **数据类型** | INT8 定点（无 FP16/FP32 训练） |
| **模型格式** | **TensorFlow Lite**（仅支持，PyTorch/ONNX 需转换） |
| **MobileNet V2 性能** | **400 FPS**（INT8 量化） |
| **PCIe 接口** | **PCIe Gen 2 x1**（单 TPU）/ **2× PCIe Gen 2 x1**（双 TPU） |
| **USB 接口** | USB 3.0（Coral USB Accelerator） |
| **M.2 形态** | A+E key (M.2-2230, 22×30mm) 或 B+M key (M.2-2280, 22×80mm) |
| **Mini PCIe** | 30×26.8 mm 半尺寸 |
| **PCIe 卡** | 标准 PCIe 短卡 |
| **Dual M.2** | 22×30 mm M.2-2230-D3-E（双 TPU 共享 M.2 槽） |
| **Coral Dev Board** | NXP i.MX 8M SoC（4 核 A53）+ Edge TPU + GPU + Wi-Fi + Bluetooth |
| **工作温度** | 0-50°C（Coral USB）/ -40-85°C（工业版） |
| **操作系统** | Linux（Ubuntu、Raspbian、Linux Mendel for Dev Board）、Windows 10、macOS |
| **首发日期** | **2019-03**（Coral Dev Board）/ 2019-07（Coral USB Accelerator） |
| **Coral USB Accelerator** | **$59.99** |
| **Coral M.2 Accelerator A+E** | **$24.99** |
| **Coral M.2 Accelerator B+M** | **$24.99** |
| **Coral Mini PCIe Accelerator** | **$24.99** |
| **Coral Dual Edge TPU M.2** | **$49.99** |
| **Coral Dev Board** | **$149.99**（已停产，2024） |
| **TDP** | 2 W |

## 与 NVIDIA Jetson Nano 对比

| 指标 | Edge TPU Coral | Jetson Nano | 备注 |
|------|----------------|-------------|------|
| TOPS (INT8) | **4** | 0.47 (FP16) | **8.5×** |
| 能效 (TOPS/W) | **2** | 0.05 (FP16) | **40×** |
| 价格 | **$24.99** | $149 (4GB) | **6× 便宜** |
| 功耗 | 0.5W | 5-10W | **10× 低** |
| 模型格式 | TF Lite | TF/PyTorch/ONNX | TPU 受限 |
| 训练支持 | 不支持 | 支持 | Nano 通用 |
| 接口 | M.2/USB/PCIe | SoC（完整板） | Coral 加速卡 |
| MLPerf MobileNet V2 | 400 FPS | 64 FPS | **6.3×** |

## 实测性能

| 模型 | Edge TPU (4 TOPS) | 性能 (FPS) | 延迟 (ms) |
|------|-------------------|-----------|----------|
| MobileNet V1 (224) | 4 TOPS | 700+ | < 2ms |
| **MobileNet V2 (224)** | 4 TOPS | **400** | 2.5ms |
| MobileNet V3-Small | 4 TOPS | 250 | 4ms |
| EfficientNet B0 | 4 TOPS | 130 | 7.7ms |
| Inception V4 | 4 TOPS | 23 | 43ms |
| ResNet-50 (v1) | 4 TOPS | 50 | 20ms |
| SSD MobileNet V2 (物体检测) | 4 TOPS | 60 | 17ms |
| PoseNet（姿态估计） | 4 TOPS | 100 | 10ms |
| DeepLab V3 (语义分割) | 4 TOPS | 30 | 33ms |

> **限制**：Edge TPU **仅支持 INT8 量化模型**，且必须是 **TensorFlow Lite 格式**。不支持 PyTorch / ONNX / MXNet 原始模型（需先转换为 TFLite）。不支持训练，只推理。

## 适用场景

- **嵌入式设备原型开发**（Coral USB Accelerator $60 即插即用）
- **工业物联网边缘网关**（M.2 形态集成到工控机）
- **智能家居**（家庭语音助手、宠物识别、动作检测）
- **零售智能相机**（客流统计、热区分析）
- **智能摄像头**（人员检测、车牌识别、入侵警报）
- **可穿戴设备**（低功耗 AI 推理）
- **教育/创客**（Raspberry Pi 4 + Coral USB = 完整 AI 开发平台）
- **智能农业**（病虫害识别、果实计数）
- **辅助驾驶**（盲区检测、驾驶员监控辅助）

## 厂商信息

| 项目 | 信息 |
|------|------|
| **厂商** | **Google LLC**（美国 Mountain View） |
| **产品品牌** | **Coral**（coral.ai） |
| **设计** | Google Research 边缘 AI 团队 |
| **代工** | 推测 28nm 台积电或三星 |
| **软件栈** | **TensorFlow Lite Runtime**、**Edge TPU Compiler**（量化 TFLite → Edge TPU 编译） |
| **AI 框架** | **TensorFlow / TensorFlow Lite**（不支持 PyTorch/ONNX 原生） |
| **价格梯度** | USB $59.99 / M.2/Mini PCIe $24.99 / Dual M.2 $49.99 / Dev Board $149.99 |
| **可用地区** | 美国、加拿大、欧盟、日本、韩国、台湾、印度等 30+ 国 |
| **Coral Dev Board** | 2024 年 EOL（被 Raspberry Pi + USB 方案替代） |
| **2025 状态** | 仍可购买，但 Google AI 重心已转向 **Cloud TPU** + **Gemini Nano 端云协同** |

## 关键特性

- **4 TOPS INT8** 单芯片 / **8 TOPS** 双 TPU 模块
- **2 TOPS/W 极佳能效**（0.5W/TOPS）
- **6 种产品形态**（USB / M.2 A+E / M.2 B+M / Mini PCIe / PCIe / Dual M.2）
- **即插即用**（Linux 自动识别为 PCIe 设备）
- **TensorFlow Lite 一等公民**（最佳兼容性）
- **Coral USB $59.99**（全球最便宜 AI 推理设备）
- **低功耗**（整板 2-5W）
- **工业级**（-40-85°C 工作温度，工业版）
- **完整生态**（coral.ai 提供模型库 + 编译器 + 运行时）
- **PCIe Gen 2 x1**（标准接口，老旧工控机也能用）

## 相关卡

- [Google TPU v4 (数据中心训练)](../google/tpu-v4) — 同厂商云端训练
- [Google TPU v5e (数据中心训练-Lite)](../google/tpu-v5e) — 训练轻量
- [Google TPU v6e (DC 推理)](../google/tpu-v6e) — 数据中心推理
- [Google TPU 8i (DC 推理旗舰)](../google/tpu-8i) — 最新推理
- [Hailo-15 (7-20 TOPS 智能摄像头)](../others/hailo-15) — 竞品
- [Hailo-8L (13 TOPS Edge)](../others/hailo) — 同代竞品
- [NVIDIA Jetson Orin (40-275 TOPS 边缘 AI)](../nvidia/jetson-orin) — 高端边缘对比
- [Blaize Xplorer (160 TOPS)](../others/blaize-xplorer) — 边缘竞品
- [Mobilint Regulus (32 TOPS 韩国)](../others/mobilint) — 同梯度边缘
- [架构分类: TPU 边缘版](../../architectures/arch-tpu) — 边缘 TPU 概念
- [Coral 官方](https://www.coral.ai/)
