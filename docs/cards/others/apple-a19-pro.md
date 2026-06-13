---
id: apple-a19-pro
title: Apple A19 Pro (iPhone 17 Pro 35+ TOPS 端侧 LLM)
sidebar_label: A19 Pro
description: Apple A19 Pro 详尽规格：3nm N3P、6 核 CPU + 6 核 GPU（Neural Accelerators）+ 16 核 NE 35+ TOPS、iPhone 17 Pro Max、Apple Intelligence 端侧 3B LLM 30+ tok/s。
keywords: [Apple A19 Pro, A19 Pro, iPhone 17 Pro, Neural Engine 35 TOPS, Apple Intelligence, 端侧 LLM, 3nm N3P]
---

# Apple A19 Pro (iPhone 17 Pro 端侧 AI 旗舰)

## 产品概述

**Apple A19 Pro** 是 Apple 2025-09-09 发布的 iPhone 17 Pro / Pro Max 旗舰手机 SoC，代号 **Thera**，**TSMC 第三代 3nm (N3P)** 制程，**6 核 CPU**（2P @ 4.26 GHz + 4E @ 2.6 GHz），**6 核 GPU**（每核集成 **Neural Accelerators**），**16 核 Neural Engine**（4× 峰值算力 vs A18 Pro），**12 GB LPDDR5X 统一内存**。搭配 **Apple 激光焊接蒸汽腔 (vapor chamber)** 散热，CPU+GPU 持续性能比 A18 Pro 提升 **40%**。iPhone 17 Pro 持续运行大模型时（如 Apple Intelligence 端侧 3B LLM）保持 30+ tok/s 推理速度，是 **Apple 史上能效最高的 iPhone AI 芯片**。

## 核心规格

| 项目 | 参数 |
|------|------|
| **架构** | Apple A-Series (iPhone 移动 SoC) |
| **制程** | TSMC **第三代 3nm (N3P)** |
| **晶体管** | ~190 亿（推测） |
| **CPU 核心** | 6（2P @ 4.26 GHz + 4E @ 2.6 GHz） |
| **L1/L2/L3 缓存** | 1.4 MB L1 / 22 MB L2 / 32 MB SLC（系统级缓存） |
| **GPU 核心** | 6（iPhone Air 是 5 核版） |
| **GPU 时钟** | 1620 MHz |
| **GPU 新特性** | 每核集成 **Neural Accelerators**（4× A18 Pro 峰值算力）、硬件光线追踪、Dynamic Caching 2.0 |
| **Neural Engine** | **16 核**，内存带宽提升 |
| **Neural Engine 算力** | ~35 TOPS INT8（推测；A18 Pro 35 TOPS，宣称 4× 算力来自 Neural Accel） |
| **统一内存** | **12 GB LPDDR5X**（iPhone Air 也是 12 GB） |
| **媒体引擎** | 硬件 H.264/HEVC/ProRes/ProRes RAW/AV1 解码、硬件光线追踪 |
| **接口** | USB 3.2 Gen 2 (10 Gbps) |
| **散热** | **Apple 激光焊接蒸汽腔**（vapor chamber 铝合金一体成型） |
| **TDP** | 8 W |
| **首发设备** | iPhone 17 Pro / Pro Max（6 核 GPU）、iPhone Air（5 核 GPU） |
| **首发日期** | **2025-09-09** |
| **iPhone 17 Pro 256GB** | **$1,099** |

## 与 A18 Pro 对比

| 指标 | A19 Pro | A18 Pro | 提升 |
|------|---------|---------|------|
| 制程 | 3nm N3P | 3nm N3 | 第三代 3nm 良率更好 |
| CPU 核心 | 6 (2P+4E) | 6 (2P+4E) | 同 |
| CPU 最高频率 | 4.26 GHz | 4.04 GHz | +5% |
| GPU 核心 | 6 + 6 神经加速器 | 6 | +Neural Accel |
| GPU 算力（INT8） | 4× A18 Pro（来自 NA） | 基准 | **4×** |
| Neural Engine | 16 核 + 提升带宽 | 16 核 | 内存带宽提升 |
| L3 SLC | 32 MB | 16 MB | 2× |
| 持续性能 | +40%（vapor chamber） | 基准 | 显著 |
| 工艺 | N3P | N3 | 第三代 |
| 价格（Pro 256GB） | $1,099 | $999 | +$100 |

## 端侧 AI 性能实测

| 模型 / 任务 | 量化 | 性能 | 备注 |
|-------------|------|------|------|
| **Apple Intelligence 端侧 3B LLM** | Apple 内置 | ~30+ tok/s | 完整在 NPU+GPU 协同 |
| **Siri 本地增强** | Apple 内置 | 实时 | iOS 26 端侧 |
| **Image Playground 图像生成** | Apple 内置 | < 1s | 端侧 Diffusion |
| **Visual Intelligence 物体识别** | Apple 内置 | 实时 | 摄像头 + LLM |
| Llama 3.1 8B (Q4_K_M) | llama.cpp | ~20 tok/s | 第三方实测 |
| Stable Diffusion XL (CoreML) | FP16 | ~1.5 it/s | 图像生成 |
| Whisper Large V3 (CoreML) | FP16 | 3× 实时 | 语音转录 |

> **Neural Accelerators 革新**：A19 Pro 首次在 **每颗 GPU 核内集成 AI 加速器**，而不是仅靠独立的 16 核 NPU。这意味着 LLM/Diffusion 推理可以同时利用 **GPU 计算单元 + NA 矩阵单元 + NE 16 核** 三个并行引擎，理论峰值算力比 A18 Pro 提升 **4×**。

## 适用场景

- **iPhone 17 Pro / Pro Max** 高端移动 AI（Apple Intelligence、Siri、视觉智能）
- **iPhone Air**（5 核 GPU 版，2025-09 发布，最薄 iPhone 6.6mm）
- **移动端 LLM 推理**（Apple Foundation Models 端侧 3B、Qwen 2.5 等）
- **图像/视频生成**（Image Playground、Genmoji、Procreate AI）
- **开发者**：Core ML + MLX 框架部署本地模型
- **教育/企业**：端侧隐私 AI（不发送云端）

## 厂商信息

| 项目 | 信息 |
|------|------|
| **厂商** | Apple Inc. |
| **设计** | Apple 自研（加州 Cupertino） |
| **代工** | **TSMC 台湾**（3nm N3P 产线） |
| **软件栈** | iOS 26 / iPadOS 26 / macOS 26 (Tahoe) |
| **AI 框架** | Core ML、MLX、Create ML、Apple Intelligence |
| **首发价格** | iPhone 17 Pro 256GB **$1,099** / 512GB $1,299 / 1TB $1,599 |
| **Pro Max 价格** | 256GB $1,199 / 2TB $1,999 |

## 关键特性

- **第三代 3nm (N3P)** 制程，Apple 首款 N3P 芯片
- **6 核 GPU + 集成 Neural Accelerators**（每核矩阵单元）
- **16 核 Neural Engine** + 提升内存带宽
- **32 MB SLC 系统级缓存**（2× A18 Pro）
- **激光焊接蒸汽腔**（vapor chamber 铝合金一体成型）
- **USB 3.2 Gen 2**（10 Gbps）有线传输
- **Wi-Fi 7**、**5G mmWave**、**Thread** 智能家居
- **ProMotion 120 Hz**、**Always-On Display**、**Ceramic Shield 2**（3× 抗刮）
- **48MP 三摄 + 8× 光学变焦**（Pro Max 史上最长）
- **18MP Center Stage** 前摄 + **ProRes RAW** + **Apple Log 2** + **genlock** 影视级特性

## 相关卡

- [Apple A18 Pro (iPhone 16 Pro 35 TOPS NE)](./apple-a18-pro) — 前代 (2024-09)
- [Apple M4 Max (128GB UMA 工作站)](./apple-m4-max) — 桌面端
- [Apple M3 Max (128GB UMA)](./apple-m3-max) — 前代桌面
- [Apple M-Series 总览](./apple-m-series) — M 系列对比表
- [Qualcomm AI 200 / 300 (Cloud AI 推测)](./qualcomm-ai-200) — 移动 + 云端
- [NVIDIA Jetson Thor (机器人 SoC)](../nvidia/jetson-thor) — 边缘 AI
- [Samsung / MediaTek 移动 SoC 架构](../../architectures/arch-npu) — NPU 分类
