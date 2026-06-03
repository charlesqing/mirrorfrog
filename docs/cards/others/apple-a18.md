---
id: apple-a18
title: Apple A18 (iPhone 16 入门 AI 芯片)
sidebar_label: A18
description: Apple A18 详尽规格：3nm N3E 第二代、6 核 CPU + 5 核 GPU（硬件光追）+ 16 核 NE 35 TOPS、iPhone 16/16 Plus/16e/MacBook Neo、Apple Intelligence。
keywords: [Apple A18, A18, iPhone 16, 5-core GPU, 8 GB RAM, 3nm N3E, Apple Intelligence, MacBook Neo]
---

# Apple A18 (iPhone 16 入门级 SoC)

## 产品概述

**Apple A18**（代号 **Tupai**）是 Apple 2024-09-09 发布的 **iPhone 16**、**iPhone 16 Plus**、**iPhone 16e**（4 核 GPU 入门版）和 **MacBook Neo**（5 核 GPU 特殊版，2025-02 发布）专用 SoC，**TSMC 第二代 3nm (N3E)** 制程，**152 亿晶体管**，**6 核 CPU**（2P @ 4.04 GHz + 4E @ 2.42 GHz），**5 核 GPU**（首次在非 Pro 型号上 **硬件光线追踪**），**16 核 Neural Engine (35 TOPS)**，**8 GB LPDDR5**。相比 A16 Bionic，**CPU 性能提升 30%**，**GPU 性能提升 40%**，**Neural Engine 算力 2×**。是 Apple **首次**把硬件光追下放到非 Pro 型号，**首次**让 iPhone 16e 也支持 Apple Intelligence。

## 核心规格

| 项目 | 参数 |
|------|------|
| **架构** | Apple A-Series (iPhone 移动 SoC) |
| **制程** | TSMC **第二代 3nm (N3E)** |
| **晶体管** | **152 亿** |
| **CPU 核心** | 6（2P @ 4.04 GHz + 4E @ 2.42 GHz） |
| **L2 缓存** | 8 MB（P 核） + 4 MB（E 核） |
| **L3 SLC** | 12 MB |
| **GPU 核心** | **5**（iPhone 16/Plus、MacBook Neo）/ **4**（iPhone 16e） |
| **GPU 新特性** | **硬件光线追踪**（非 Pro 首次）、网格着色、动态缓存 |
| **Neural Engine** | 16-core, **35 TOPS INT8**（A16 17 TOPS 的 **2×**） |
| **统一内存** | **8 GB LPDDR5**（17% more 内存带宽） |
| **内存带宽** | ~51.2 GB/s（8 GB @ 6400 MT/s） |
| **媒体引擎** | 硬件 H.264/HEVC/ProRes/ProRes RAW/AV1 解码 |
| **接口** | USB 2.0（Lightning 端口限制，$1,099+ USB 3 限制） |
| **TDP** | ~8 W（iPhone 持续负载） |
| **首发设备** | iPhone 16（5 核 GPU）、iPhone 16 Plus（5 核 GPU）、iPhone 16e（4 核 GPU，2025-02 上市）、MacBook Neo（5 核 GPU，2025-02 上市） |
| **首发日期** | **2024-09-09** |
| **iPhone 16 128GB** | **$799** |

## 与 A16 Bionic / A17 Pro / A18 Pro 对比

| 指标 | A18 | A16 Bionic | A17 Pro | A18 Pro |
|------|-----|------------|---------|---------|
| 制程 | 3nm N3E | 4nm N4P | 3nm N3B | 3nm N3E |
| 晶体管 | 152 亿 | 160 亿 | 190 亿 | 200 亿 |
| CPU 核心 | 6 (2P+4E) | 6 (2P+4E) | 6 (2P+4E) | 6 (2P+4E) |
| CPU 频率 | 4.04 GHz | 3.46 GHz | 3.78 GHz | 4.04 GHz |
| GPU 核心 | **5** | 5 | 6 | 6 |
| 硬件光追 | **有** | 无 | 有 | 有（2× A17 Pro） |
| Neural Engine | 35 TOPS | 17 TOPS | 35 TOPS | 35 TOPS |
| 内存 | 8 GB | 6 GB | 8 GB | 8 GB |
| 内存带宽 | +17% vs A16 | 基准 | 基准 | +17% |
| USB | USB 2.0 | Lightning | USB 3 | USB 3 |
| 单核性能 | +30% vs A16 | 基准 | +10% vs A16 | +15% vs A17 Pro |
| GPU 性能 | +40% vs A16 | 基准 | 基准 | +20% vs A17 Pro |

## 端侧 AI 性能

| 模型 / 任务 | 量化 | 性能 | 备注 |
|-------------|------|------|------|
| **Apple Intelligence 端侧 3B LLM** | Apple 内置 | ~20+ tok/s | iPhone 16 全程 |
| **Siri 本地增强** | Apple 内置 | 实时 | iOS 18 端侧 |
| **Image Playground 图像生成** | Apple 内置 | < 2s | 端侧 Diffusion |
| **Visual Intelligence 物体识别** | Apple 内置 | 实时 | 摄像头 + LLM |
| Llama 3.1 8B (Q4_K_M) | llama.cpp | ~12 tok/s | 8GB 装下 |
| Stable Diffusion XL (CoreML) | FP16 | ~0.7 it/s | 图像生成 |
| Whisper Large V3 (CoreML) | FP16 | 2× 实时 | 语音转录 |

> **MacBook Neo 特殊版本**：Apple 2025-02-19 罕见地把 **A18 5 核 GPU** 装入 **MacBook Neo**（12 英寸入门 MacBook，Apple Silicon MacBook Air 之下的入门级产品），**$599 起**。MacBook Neo 是 Apple **首次**用 A 系列芯片做笔记本，模糊了 iPhone 和 MacBook 的边界。

## 适用场景

- **iPhone 16**（$799，6.1" OLED 60Hz，双摄，主力机型）
- **iPhone 16 Plus**（$899，6.7" OLED 60Hz，大屏机型）
- **iPhone 16e**（2025-02，$599，6.1" OLED 60Hz，4 核 GPU 入门版）
- **MacBook Neo**（2025-02，$599 起，12 英寸，A18 5 核 GPU，Apple Silicon 入门级笔记本）
- **Apple Intelligence**（iOS 18 端侧 3B LLM）
- **移动游戏**（硬件光追首发在非 Pro 机型）
- **开发者**：Core ML 模型部署

## 厂商信息

| 项目 | 信息 |
|------|------|
| **厂商** | Apple Inc. |
| **设计** | Apple 自研（加州 Cupertino） |
| **代工** | **TSMC 台湾**（3nm N3E 产线） |
| **软件栈** | iOS 18、iPadOS 18、macOS 15 (Sequoia) |
| **AI 框架** | Core ML、MLX、Create ML、Apple Intelligence |
| **首发价格** | iPhone 16 128GB **$799** / 256GB $899 / 512GB $1,099 |
| **iPhone 16e 价格** | 128GB **$599** / 256GB $699 / 512GB $899 |
| **MacBook Neo 价格** | 12" 256GB **$599** / 512GB $799 |

## 关键特性

- **第二代 3nm (N3E)** 制程，**152 亿晶体管**
- **5 核 GPU + 硬件光线追踪**（非 Pro 首次）
- **16 核 Neural Engine 35 TOPS**（2× A16）
- **8 GB LPDDR5**（A16 6 GB 的 1.3×）
- **17% 内存带宽提升**（vs A16）
- **Apple Intelligence 完整支持**（端侧 3B LLM）
- **Wi-Fi 6**（iPhone 16/Plus 仍为 Wi-Fi 6，不像 Pro 上 Wi-Fi 6E/7）
- **5G sub-6 + mmWave**、**Thread**
- **48MP Fusion 摄像头**（iPhone 16/Plus）
- **12MP 前摄** + **Action Button** + **Camera Control Button**
- **USB 2.0**（Lightning 端口限制，480 Mbps）

## 相关卡

- [Apple A18 Pro (iPhone 16 Pro)](./apple-a18-pro) — 同代旗舰
- [Apple A19 (iPhone 17)](./apple-a19) — 后继
- [Apple A17 Pro (iPhone 15 Pro)](./apple-a17-pro) — 前代 3nm 首发
- [Apple M1 Pro (MacBook Pro 2021)](./apple-m1-pro) — 桌面端
- [Apple A16 Bionic (2022)](https://en.wikipedia.org/wiki/Apple_A16) — 前代
- [架构分类: NPU 移动 SoC](../../architectures/arch-npu) — NPU 分类
- [Qualcomm Snapdragon X Elite (PC 芯片)](./qualcomm-snapdragon-x-elite) — 同代竞品
- [MediaTek Dimensity 9400 (2024 移动旗舰)](./mediatek-dimensity-9400) — 同代竞品
