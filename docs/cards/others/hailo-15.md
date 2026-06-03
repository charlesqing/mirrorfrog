---
id: hailo-15
title: Hailo-15 (7-20 TOPS 智能摄像头 AI 视觉 SoC)
sidebar_label: Hailo-15
description: Hailo-15 详尽规格：7/11/20 TOPS INT8 视觉 AI SoC、AI-ISP 降噪 < 0.01 LUX、4K30、5W、四核 ARM A53、Qwen 2.5-VL 3B VLM、智能摄像头应用。
keywords: [Hailo-15, Hailo, AI 视觉处理器, 20 TOPS, 智能摄像头, AI-ISP, 4K30, Qwen 2.5-VL]
---

# Hailo-15 (7-20 TOPS 智能摄像头 SoC)

## 产品概述

**Hailo-15** 是以色列 **Hailo AI** 2024-03 发布的 **AI 视觉处理器**（Vision Processor）系列，专为 **智能摄像头**（smart camera）应用设计。**三个型号**：**Hailo-15H**（20 TOPS 旗舰，< 5W）、**Hailo-15M**（11 TOPS 中端）、**Hailo-15L**（7 TOPS 入门，< 3W）。集成 **AI-ISP Gen3**（极致低光 < 0.01 LUX 降噪，无需 IR LED）、**4K30 H.265 视频编码**、**12MP ISP**、**结构化数据流 NN Core**、**四核 ARM A53**。运行 **Qwen 2.5-VL 3B VLM** 等大模型，单 SoC 实现"AI 增强图像 + 视频分析"双重工作负载。是智能交通、工业视觉、安防监控、自动驾驶辅助视觉的标杆。

## 核心规格

| 项目 | 参数 |
|------|------|
| **架构** | Hailo **结构化数据流（Structure-Defined Dataflow）NN Core** + ARM A53 应用处理器 |
| **型号** | **Hailo-15H**（20 TOPS）/ **Hailo-15M**（11 TOPS）/ **Hailo-15L**（7 TOPS） |
| **制程** | 推测 12nm 或 7nm |
| **CPU** | 四核 ARM Cortex-A53 @ 1.3 GHz（H/M） / 1.1 GHz（L），10-12 k DMIPs |
| **DSP** | Vector DSP 256 MACs @ 700-750 MHz，350-380 GOPS |
| **NN Core** | Hailo 专利结构化数据流架构，7-20 TOPS INT8 |
| **AI-ISP** | **Gen3 AI-ISP**，< 0.01 LUX 极致低光降噪（无需 IR LED） |
| **ISP** | 12MP 分辨率，**600 Mpixel/s** 像素率 |
| **视频编码** | 4K30 / 4K60 H.265/HEVC + H.264/AVC，多流 |
| **视频解码** | 多流 H.265/H.264 |
| **HDR** | 高动态范围，3 曝光融合，WDR 弱光处理 |
| **降噪** | 2DNR + 3DNR + Chroma NR |
| **图像稳定** | EIS 数字 + 镜头畸变校正 + 翻转旋转 |
| **内存** | LPDDR4/4X 32-bit @ 4266 MT/s（H）/ 3200 MT/s（L） |
| **存储** | QSPI + SDIO 3.0 + eMMC 5.1（最高 HS200） |
| **PCIe** | PCIe Gen 3.0 x2 |
| **有线接口** | USB 3.1 Gen 2、GbE（1000 Mbit/s）、I²C × 4、I²S × 4、SPI × 4、CAN |
| **无线** | SOM 集成 802.11 a/b/g/n/ac + BT 5.0 |
| **安全** | Secure Boot、Secure Debug、硬件加密、TrustZone、TRNG、Firewall |
| **功耗** | **< 5W**（H）/ **< 3W**（L） |
| **封装** | FCCSP 15×15 mm（H/M） / 13×13 mm（L） |
| **工作温度** | -40°C ~ +85°C（工业级） |
| **SOM 尺寸** | 47×30 mm（Hailo-15 SOM） |
| **首发日期** | **2024-03**（Mouser、Digi-Key 上市） |
| **Hailo-15 SOM 20 TOPS 价格** | **~$250**（Mouser 渠道） |

## 与 Hailo-8 / Hailo-8L 对比

| 指标 | Hailo-15H | Hailo-8L | 提升 |
|------|-----------|----------|------|
| TOPS | **20** | 13 | +54% |
| 集成度 | **SoC（CPU + ISP + AI）** | 纯 AI 加速器 | 全集成 |
| AI-ISP | **Gen3**（< 0.01 LUX） | 无 | 全新增益 |
| 视频编码 | **4K30 H.265** | 外部 | 全新增益 |
| 内存 | LPDDR4X 32-bit | DDR4 | LPDDR4X 升级 |
| 功耗 | < 5W | ~2.5W | 略高（多 SoC） |
| 应用 | 智能摄像头一体 | 摄像头 + 主机分体 | 集成化 |
| 价格（SOM） | ~$250 | ~$150 | +$100 |
| VLM 支持 | **Qwen 2.5-VL 3B** | 仅视觉 | LLM 级 |

## 端侧 AI 性能

| 模型 | 量化 | 性能 | 备注 |
|------|------|------|------|
| MobileNet V3 | INT8 | 1000+ FPS | 极快 |
| YOLOv8n | INT8 | 200+ FPS | 物体检测 |
| ResNet-50 | INT8 | 500+ FPS | 分类 |
| **Qwen 2.5-VL 3B VLM** | INT8 | **5-8 tok/s** | 视觉问答 |
| 人员检测 + 跟踪 | INT8 | 30 FPS | 4K |
| 车牌识别 | INT8 | 50+ FPS | 多路 |
| 人脸识别 | INT8 | 100+ FPS | 1:N 搜索 |
| 跌倒检测 | INT8 | 30 FPS | 老年看护 |

> **Qwen 2.5-VL 3B 端侧部署**：Hailo-15H 是首批支持 **3B 视觉语言模型** 实时推理的智能摄像头 SoC（< 5W 功耗）。在安全摄像头场景中，可实现"发生了什么？"式的 VLM 推理，把传统"物体检测"升级为"场景理解"。

## 适用场景

- **智能安防摄像头**（Hikvision、Dahua、Axis、Bosch 安防巨头 OEM）
- **交通监控**（违章抓拍、车牌识别、流量统计）
- **工业视觉**（缺陷检测、AOI 自动光学检测）
- **自动驾驶辅助**（DMS 驾驶员监控、OMS 乘客监控）
- **智慧零售**（客流分析、热点图）
- **机器人视觉**（家用、商用机器人摄像头）
- **门禁 / 考勤**（人脸识别、ReID）

## 厂商信息

| 项目 | 信息 |
|------|------|
| **厂商** | **Hailo AI**（以色列 Tel Aviv，2017 年成立） |
| **设计** | Hailo 以色列研发 |
| **代工** | 推测台积电（TSMC） |
| **软件栈** | **Hailo Dataflow Compiler**（TensorFlow / ONNX / PyTorch 转换）、**HailoRT**（运行时）、**Hailo Model Zoo**（预训练模型库） |
| **AI 框架** | TensorFlow、PyTorch、ONNX、OpenVINO、Keras |
| **价格** | Hailo-15H SOM 20 TOPS **~$250**、Hailo-15L SOM 7 TOPS **~$130** |
| **OEM 客户** | Hikvision、Dahua、Axis、奇虎 360、LenelS2 |
| **竞争产品** | Ambarella CV series、Synaptics VS series、Novatek NT98562 |

## 关键特性

- **三型号梯度**：H (20) / M (11) / L (7) TOPS 覆盖高端到入门
- **AI-ISP Gen3**（极致低光 < 0.01 LUX，无需 IR LED 节省成本）
- **4K30 H.265 视频编码**（内置）
- **12MP ISP**（单芯片支持 4K 摄像头）
- **结构化数据流 NN Core**（Hailo 专利）
- **< 5W（H）/ < 3W（L）** 极低功耗（PoE Type 1 Class 2 即可供电）
- **四核 ARM A53** 应用处理器（Linux/RTOS 跑通用应用）
- **-40°C ~ +85°C** 工业级（户外严寒酷暑可用）
- **47×30 mm SOM**（超小尺寸，便于集成）
- **支持 Qwen 2.5-VL 3B VLM** 端侧推理
- **PCIe Gen 3.0 x2** 高速接口
- **完整软件生态**（Dataflow Compiler + HailoRT + Model Zoo）

## 相关卡

- [Hailo-8L (13 TOPS Edge AI)](./hailo) — 前代入门
- [NVIDIA Jetson Orin (40-275 TOPS 边缘 AI)](../nvidia/jetson-orin) — 高端边缘对比
- [Blaize Xplorer (160 TOPS Edge)](./blaize-xplorer) — 同代边缘
- [Mobilint Regulus (32 TOPS 韩国)](./mobilint) — 同梯度边缘
- [Hailo-15 官方介绍](https://hailo.ai/products/ai-vision-processors/hailo-15h-ai-vision-processor/)
- [架构分类: 边缘 AI](../../architectures/arch-npu) — NPU 架构
