---
id: apple-a18-pro
title: Apple A18 Pro (Mobile NPU 35 TOPS, iPhone 16 Pro)
sidebar_label: A18 Pro
description: Apple A18 Pro 详尽规格：3nm、6 核 CPU、6 核 GPU、35 TOPS NPU、iPhone 16 Pro、Apple Intelligence 端侧 LLM。
keywords: [Apple A18 Pro, A18 Pro, 35 TOPS, iPhone 16 Pro, Apple Intelligence, 端侧 LLM, 3nm]
---

# Apple A18 Pro (Mobile NPU 35 TOPS, iPhone 16 Pro)

## 产品概述

**Apple A18 Pro** 是 Apple **iPhone 16 Pro / Pro Max**（**2024-09-09** 发布）的 SoC 芯片，**TSMC 第二代 3nm (N3E)** 制程，**6 核 CPU**（2P + 4E），**6 核 GPU**，**16 核 Neural Engine 35 TOPS**，**8GB LPDDR5X 统一内存**。相比 A17 Pro 性能提升 **15-20%**，Neural Engine **+20%**。**Apple Intelligence 端侧 LLM（3B 参数）** 完全运行在 A18 Pro 上，**业界最强端侧 AI 芯片**。

**关键定位**：
- **A18**（iPhone 16）：6 核 CPU（2P+4E），5 核 GPU，16 核 NE 35 TOPS
- **A18 Pro**（iPhone 16 Pro/Pro Max）：**6 核 CPU + 6 核 GPU + 35 TOPS NE**（**双倍 Pro GPU**）
- **A18 Pro vs A17 Pro**：CPU +15%、GPU +20%、NE +20%、能效 -20%
- **Apple Intelligence**：3B LLM 端侧推理（仅 iPhone 16 系列 + M1+ Mac 设备）

## 核心规格

| 项目 | 参数 |
|------|------|
| **架构** | Apple Silicon (A18 Pro, 移动 SoC) |
| **制程** | **TSMC 第二代 3nm (N3E)** |
| **晶体管数** | **~200 亿** |
| **CPU 核心** | **6（2P + 4E）** |
| **CPU 主频** | **4.05 GHz**（P-core，**业界最高移动 CPU 主频**） |
| **GPU 核心** | **6**（**双倍 Pro**，vs A18 5 核） |
| **Neural Engine** | **16-core, 35 TOPS**（A17 Pro 35 TOPS，**+0%** vs A17 Pro 实际 +20% 多任务）|
| **统一内存** | **8GB LPDDR5X** |
| **内存带宽** | **51.2 GB/s** |
| **存储** | NVMe（128GB / 256GB / 512GB / 1TB） |
| **显示引擎** | **ProMotion 120Hz** + **永远显示** |
| **媒体引擎** | 硬件 H.264/HEVC/ProRes/AV1 **编码 + 解码** |
| **ISP** | **第二代 48MP** + ProRAW |
| **TDP** | 8 W |
| **首发** | iPhone 16 Pro / Pro Max 2024-09-20 |
| **价格（iPhone 16 Pro 256GB）** | **$1,099** |

## 与 A17 Pro 对比

| 指标 | A18 Pro (2024-09) | A17 Pro (2023-09) | 提升 |
|------|---------------------|---------------------|------|
| 制程 | **TSMC N3E** | TSMC N3 | 第二代 3nm |
| CPU 核心 | 6 (2P+4E) | 6 (2P+4E) | 同 |
| CPU 主频 | **4.05 GHz** | 3.78 GHz | +7% |
| CPU 性能 | **+15%（单核）** / +20%（多核） | 基准 | 显著 |
| GPU 核心 | 6 | 6 | 同 |
| GPU 性能 | **+20%** | 基准 | 显著 |
| 光追性能 | **+2×** | 基准 | 显著 |
| Neural Engine | 35 TOPS | 35 TOPS | 同 TOPS，多任务 +20% |
| 内存 | 8GB LPDDR5X | 8GB LPDDR5 | 略升 |
| 带宽 | 51.2 GB/s | 51.2 GB/s | 同 |
| 能效 | **-20%** | 基准 | 显著 |

## Apple Intelligence 端侧 LLM

| 维度 | 规格 |
|------|------|
| **模型** | **Apple Foundation Model 3B**（30 亿参数） |
| **架构** | 自研 Transformer（类 Llama） |
| **量化** | 2-bit / 4-bit 混合量化（**2.5 GB 模型大小**） |
| **运行内存** | **2.5 GB**（A18 Pro 8GB 内存足够） |
| **性能** | **~30 tok/s**（端侧 LLM 推理） |
| **延迟** | **< 100ms TTFT** |
| **电池影响** | **< 5% / 小时**（基础查询） |
| **离线运行** | **完全离线**（无云端） |

> **Apple Intelligence 关键**：**3B 模型 + 2-bit 量化 = 2.5GB**，**A18 Pro 8GB 内存可装**，**30 tok/s 端侧推理**是 **业界首个手机端 LLM 实时生成**。

## Apple Intelligence 功能

| 功能 | 端侧/云端 | 模型 |
|------|------------|------|
| **Writing Tools**（改写/校对/总结）| 端侧 3B | 30 tok/s |
| **Image Playground**（图像生成）| 端侧 + 云端扩散 | SDXL 蒸馏 |
| **Genmoji**（生成表情）| 端侧 3B | < 1秒 |
| **Siri 智能问答** | 端侧 3B | 30 tok/s |
| **邮件 / 通知摘要** | 端侧 3B | 即时 |
| **照片识别**（宠物 / 植物）| 端侧 3B | 实时 |
| **Photo Memories**（回忆视频）| 云端扩散 | 云端 |
| **ChatGPT 集成** | 云端 GPT-4o | 云端 |

## Neural Engine 35 TOPS 性能

| 任务 | A18 Pro NE | A17 Pro NE | 提升 |
|------|-------------|-------------|------|
| **Core ML 推理** | 35 TOPS | 35 TOPS | 同 |
| **多任务并行** | 8× 模型同时 | 6× 模型 | +33% |
| **图像识别**（ResNet-50）| < 1ms | 1.2ms | +20% |
| **语音识别**（Whisper 1B）| ~5× 实时 | ~4× 实时 | +25% |
| **Stable Diffusion 1.5**（1 步）| ~0.8 秒 | 1.0 秒 | +25% |
| **LLM 3B 推理** | 30 tok/s | 25 tok/s | +20% |

> **A18 Pro 35 TOPS** 是 **iPhone 史上最强 NPU**，**业界最强移动 AI 芯片**（Qualcomm Snapdragon 8 Gen 3 45 TOPS 但 TDP 7-8W vs A18 Pro 8-10W；Apple NE 实际利用率更高）。

## GPU 6 核 + 硬件光追

| 维度 | A18 Pro 6 核 | A17 Pro 6 核 | 提升 |
|------|---------------|---------------|------|
| 核心数 | 6 | 6 | 同 |
| 性能 | +20% | 基准 | 显著 |
| 硬件光追 | **+2×** | 基准 | 显著 |
| 硬件网格着色 | **+50%** | 基准 | 显著 |
| **AAA 游戏**（如《死亡搁浅》《生化危机》）| 流畅 30fps | 勉强 30fps | 显著 |

## 厂商信息

| 项目 | 内容 |
|------|------|
| **厂商** | Apple Inc. |
| **产品** | **iPhone 16 Pro** / **iPhone 16 Pro Max** |
| **发布日期** | 2024-09-09（Apple Wonderlust 2024）|
| **发售** | 2024-09-20 |
| **首发起售价** | iPhone 16 Pro 128GB: $999 / 256GB: $1,099 / 512GB: $1,299 / 1TB: $1,499 |
| **代工** | TSMC N3E（**TSMC 3nm 第二代**） |
| **封装** | TSMC InFO_SoC（**Apple 联合设计**） |
| **目标市场** | 消费级 / 高端手机 |

## Apple A18 Pro vs Qualcomm Snapdragon 8 Gen 3

| 指标 | Apple A18 Pro | Qualcomm Snapdragon 8 Gen 3 |
|------|----------------|--------------------------------|
| **CPU 核** | 6 (2P+4E) | 8 (1+5+2) |
| **CPU 主频** | 4.05 GHz | 3.3 GHz |
| **GPU** | Apple 6 核 | Adreno 750 |
| **NPU** | 35 TOPS | 45 TOPS |
| **TDP** | 8-10W | 7-8W |
| **内存** | 8GB LPDDR5X | 16GB LPDDR5X |
| **能效（CPU 性能/W）| 业界领先 | 略低 |
| **能效（NPU TOPS/W）| **4.4 TOPS/W** | **5.6 TOPS/W** | SD 8G3 略胜 |
| **AI 端侧 LLM** | Apple Intelligence 3B | Snapdragon AI 2.5B |
| **价格** | $999+ (iPhone) | $500+ (Android) |

> **A18 Pro 优势**：**单核 CPU 性能 +30%**（4.05 GHz vs 3.3 GHz）、**Apple Intelligence 端侧 LLM 3B**（SD 8G3 仅 2.5B）、**能效优化**（Apple iOS 深度集成）。
> **SD 8G3 优势**：**NPU 45 TOPS**（vs A18 Pro 35 TOPS）、**内存 16GB**（vs A18 Pro 8GB）、**多厂商 Android 选择**。

## 适用场景

- ✅ **iPhone 16 Pro / Pro Max**（ProRes 视频、ProRAW 摄影、AAA 游戏）
- ✅ **Apple Intelligence 端侧 LLM**（3B 模型 30 tok/s）
- ✅ **iOS 18 智能**（邮件摘要、照片识别、写作工具）
- ✅ **AAA 游戏**（《死亡搁浅》《刺客信条》光追）
- ✅ **Vision Pro 开发者**（visionOS 2 兼容）
- ❌ 数据中心（移动 SoC）
- ❌ Android 部署（仅 Apple 设备）
- ❌ 训练（仅推理）

## Apple A-Series 演进（近 4 代）

| 代际 | 发布 | 制程 | CPU 核 | GPU 核 | NE | NPU TOPS | 内存 |
|------|------|------|--------|--------|-----|----------|------|
| A15 Bionic | 2021-09 | 5nm | 6 (2+4) | 4-5 | 16 核 | 15.8 | 4-6GB |
| A16 Bionic | 2022-09 | 4nm | 6 (2+4) | 5 | 16 核 | 17 | 6GB |
| A17 Pro | 2023-09 | 3nm | 6 (2+4) | 6 | 16 核 | 35 | 8GB |
| **A18 Pro** | **2024-09** | **3nm N3E** | **6 (2+4)** | **6** | **16 核** | **35** | **8GB** |

> **A18 Pro 关键提升**：**N3E 制程**（第二代 3nm）+ **能效 -20%** + **GPU 光追 +2×** + **CPU 主频 4.05 GHz**（业界最高）。

## 关键特性

- **35 TOPS NE**：iPhone 史上最强 NPU
- **Apple Intelligence 3B 端侧 LLM**：30 tok/s
- **第二代 3nm (N3E)**：能效 -20%
- **CPU 4.05 GHz**：业界最高移动 CPU 主频
- **GPU 硬件光追 +2×**：AAA 游戏光追
- **8GB LPDDR5X 51.2 GB/s**：端侧 AI 足够
- **缺点**：仅 Apple 设备、内存 8GB 限制、不能扩展

## 相关卡

- [Apple M4 Max](/docs/cards/others/apple-m4-max) - 笔记本 / 工作站
- [Apple M3 Ultra](/docs/cards/others/apple-m3-ultra) - 桌面
- [Apple M-Series 总览](/docs/cards/others/apple-m-series) - 全系列
- [Qualcomm AI 100](/docs/cards/others/qualcomm-ai100) - Qualcomm 边缘
- [Qualcomm AI 200/300](/docs/cards/others/qualcomm-ai-200) - Qualcomm 数据中心
- [Blaize Xplorer X1600](/docs/cards/others/blaize-xplorer) - Edge AI
- [Hailo-8 / Hailo-15](/docs/cards/others/hailo) - 边缘
- [NVIDIA Jetson Thor](/docs/cards/nvidia/jetson-thor) - 边缘机器人
