---
id: apple-a19
title: Apple A19 (iPhone 17 入门 AI 芯片)
sidebar_label: A19
description: Apple A19 详尽规格：3nm N3P、6 核 CPU + 5 核 GPU（Neural Accelerators）+ 16 核 NE、8 GB LPDDR5X、iPhone 17/17e、Apple Intelligence。
keywords: [Apple A19, A19, iPhone 17, 5-core GPU, 8 GB RAM, 3nm N3P, Apple Intelligence]
---

# Apple A19 (iPhone 17 入门级 SoC)

## 产品概述

**Apple A19**（代号 **Tilos**）是 Apple 2025-09-09 发布的 **iPhone 17**（5 核 GPU 标准版）和 **iPhone 17e**（4 核 GPU 入门版）专用 SoC，**TSMC 第三代 3nm (N3P)** 制程，**6 核 CPU**（2P @ 4.26 GHz + 4E @ 2.6 GHz），**5 核 GPU**（每核集成 **Neural Accelerators**），**16 核 Neural Engine**（改进内存带宽），**8 GB LPDDR5X**。相比 A18 性能提升 ~20%，GPU 算力提升 ~40%（来自 Neural Accel），iPhone 17 持续运行 Apple Intelligence 端侧 3B LLM。是 Apple **5 核 GPU** A 系列最新一代，比 A19 Pro 少 1 核 GPU / 减半 SLC / 减少内存（8 vs 12 GB）。

## 核心规格

| 项目 | 参数 |
|------|------|
| **架构** | Apple A-Series (iPhone 移动 SoC) |
| **制程** | TSMC **第三代 3nm (N3P)** |
| **晶体管** | ~150 亿（推测） |
| **CPU 核心** | 6（2P @ 4.26 GHz + 4E @ 2.6 GHz） |
| **L1/L2/L3 缓存** | 1.4 MB L1 / 12 MB L2 / 12 MB SLC（系统级缓存） |
| **GPU 核心** | 5（iPhone 17 标准版）/ 4（iPhone 17e 入门版） |
| **GPU 时钟** | 1620 MHz |
| **GPU 新特性** | 每核集成 **Neural Accelerators**（4× A18 峰值算力）、硬件光线追踪、Dynamic Caching 2.0 |
| **Neural Engine** | **16 核**，内存带宽提升 |
| **Neural Engine 算力** | ~35 TOPS INT8（推测；Neural Accel 4× 来自 GPU 算力） |
| **统一内存** | **8 GB LPDDR5X** |
| **内存带宽** | ~51.2 GB/s（8 GB @ 6400 MT/s） |
| **媒体引擎** | 硬件 H.264/HEVC/ProRes/ProRes RAW/AV1 解码、硬件光线追踪 |
| **接口** | USB 2.0（Lightning 端口限制） |
| **TDP** | ~8 W（iPhone 持续负载） |
| **首发设备** | iPhone 17（5 核 GPU，$799 起）、iPhone 17e（4 核 GPU，$599 起） |
| **首发日期** | **2025-09-09** |
| **iPhone 17 256GB** | **$799** |

## 与 A18 / A19 Pro 对比

| 指标 | A19 (iPhone 17) | A18 (iPhone 16) | A19 Pro (iPhone 17 Pro) |
|------|-----------------|-----------------|-------------------------|
| 制程 | 3nm N3P | 3nm N3 | 3nm N3P |
| CPU 核心 | 6 (2P+4E) | 6 (2P+4E) | 6 (2P+4E) |
| CPU 频率 | 4.26 GHz | 3.9 GHz | 4.26 GHz |
| GPU 核心 | **5** | 5 | **6** |
| GPU Neural Accel | **有（4× A18 算力）** | 无 | **有（4× A18 Pro 算力）** |
| Neural Engine | 16 核 + 提升带宽 | 16 核 | 16 核 + 提升带宽 |
| L3 SLC | 12 MB | 8 MB | 32 MB |
| 统一内存 | **8 GB** | 8 GB | 12 GB |
| 散热 | 普通铝合金 | 普通铝合金 | **激光焊接蒸汽腔** |
| 持续性能 | +20% vs A18 | 基准 | +40% vs A18 Pro |
| 价格（基础版） | $799 (256GB) | $799 (128GB) | $1,099 (256GB) |

## 端侧 AI 性能

| 模型 / 任务 | 量化 | 性能 | 备注 |
|-------------|------|------|------|
| **Apple Intelligence 端侧 3B LLM** | Apple 内置 | ~25+ tok/s | 完整在 NPU+GPU 协同 |
| **Siri 本地增强** | Apple 内置 | 实时 | iOS 26 端侧 |
| **Image Playground 图像生成** | Apple 内置 | < 1.5s | 端侧 Diffusion |
| **Visual Intelligence 物体识别** | Apple 内置 | 实时 | 摄像头 + LLM |
| Llama 3.1 8B (Q4_K_M) | llama.cpp | ~15 tok/s | 第三方实测 |
| Stable Diffusion XL (CoreML) | FP16 | ~1.0 it/s | 图像生成 |
| Whisper Large V3 (CoreML) | FP16 | 2.5× 实时 | 语音转录 |

> **5 核 GPU 性能平衡**：相比 A19 Pro 的 6 核 GPU，A19 的 5 核 GPU 在 GPU 密集型 LLM 推理场景下损失约 **15-20%** 性能，但 iPhone 17 售价低 **$300**（$799 vs $1,099），性价比更高。

## 适用场景

- **iPhone 17 标准版**（$799，6.1" OLED 120Hz，双摄）
- **iPhone 17e 入门版**（$599，6.1" OLED 60Hz，单摄，2026 春季）
- **日常 AI**（Siri、视觉智能、图像生成）
- **移动游戏**（GPU 性能足以运行 AAA 手游）
- **端侧 LLM 推理**（Apple Foundation Models 3B）
- **教育/学生市场**（$599 入门价位）
- **替代 iPhone 15 / 16** 旧机（4 年换代）

## 厂商信息

| 项目 | 信息 |
|------|------|
| **厂商** | Apple Inc. |
| **设计** | Apple 自研（加州 Cupertino） |
| **代工** | **TSMC 台湾**（3nm N3P 产线） |
| **软件栈** | iOS 26 |
| **AI 框架** | Core ML、MLX、Create ML、Apple Intelligence |
| **首发价格** | iPhone 17 256GB **$799** / 512GB $899 |
| **iPhone 17e 价格** | 128GB **$599** / 256GB $699 / 512GB $899 |
| **印度制造** | 富士康印度 Sriperumbudur 工厂（部分 iPhone 17） |

## 关键特性

- **第三代 3nm (N3P)** 制程，能效比提升
- **5 核 GPU + 集成 Neural Accelerators**（每核矩阵单元）
- **16 核 Neural Engine** + 提升内存带宽
- **12 MB SLC 系统级缓存**
- **USB 2.0** 限制（Lightning 端口，传输速度 480 Mbps）
- **Wi-Fi 7**、**5G mmWave**、**Thread** 智能家居
- **ProMotion 120 Hz**（iPhone 17）/ 60 Hz（iPhone 17e）
- **Ceramic Shield 2**（3× 抗刮）
- **48MP 双摄**（iPhone 17：48MP Main + 12MP Ultra Wide）
- **18MP Center Stage** 前摄
- **Action Button**（替代静音拨杆）
- **Camera Control Button**（拍照快捷键）

## 相关卡

- [Apple A18 Pro (iPhone 16 Pro 35 TOPS NE)](./apple-a18-pro) — 前代
- [Apple A19 Pro (iPhone 17 Pro)](./apple-a19-pro) — 同代旗舰
- [Apple M4 Pro (64GB UMA 工作站)](./apple-m4-pro) — 桌面端
- [Apple A17 Pro (iPhone 15 Pro 3nm)](./apple-a17-pro) — 前代 3nm 首发
- [架构分类: NPU 移动 SoC](../../architectures/arch-npu) — NPU 分类
- [Qualcomm AI 200 / 300 (Cloud AI 推测)](./qualcomm-ai-200) — 竞品
- [NVIDIA Jetson Thor (机器人 SoC)](../nvidia/jetson-thor) — 边缘 AI
