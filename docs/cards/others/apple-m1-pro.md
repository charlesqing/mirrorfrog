---
id: apple-m1-pro
title: Apple M1 Pro (MacBook Pro 2021 32GB UMA 200 GB/s)
sidebar_label: M1 Pro
description: Apple M1 Pro 详尽规格：5nm N5、10 核 CPU (8P+2E)、16 核 GPU、200 GB/s 内存带宽、16/32GB UMA、MacBook Pro 14"/16" 2021、Apple Silicon 第二代。
keywords: [Apple M1 Pro, M1 Pro, 10 核 CPU, 16 核 GPU, 200 GB/s, MacBook Pro 2021, Apple Silicon]
---

# Apple M1 Pro (MacBook Pro 2021 32GB UMA)

## 产品概述

**Apple M1 Pro** 是 Apple Silicon 第二代 **Pro 系列**芯片，**2021-10-26 发布**，用于 **MacBook Pro 14"/16" 2021**。**TSMC 5nm (N5)** 制程，**8 或 10 核 CPU**（6P+2E 或 8P+2E @ 3.2 GHz），**14 或 16 核 GPU**，**16 核 Neural Engine (11 TOPS)**，**16/32 GB LPDDR5 统一内存**，**200 GB/s 内存带宽**（M1 的 4 倍），**Thunderbolt 4**。M1 Pro 是 Apple 第一次为 MacBook Pro 设计专业级 SoC，引入 **ProRes 加速**、**Liquid Retina XDR** 显示屏、**HDMI 2.0**、**MagSafe 3** 等专业特性。

## 核心规格

| 项目 | 参数 |
|------|------|
| **架构** | Apple Silicon (M1 Pro 单芯片) |
| **制程** | TSMC **5nm (N5)** |
| **晶体管** | **337 亿** |
| **CPU 核心** | 8（6P+2E）或 10（8P+2E） |
| **CPU 最高频率** | 3.2 GHz (P 核) |
| **GPU 核心** | 14（8C CPU 版）或 16（10C CPU 版） |
| **Neural Engine** | 16-core, **11 TOPS INT8** |
| **统一内存** | **16GB / 32GB LPDDR5** |
| **内存带宽** | **200 GB/s**（M1 50 GB/s 的 4×） |
| **FP32 GPU** | ~4.5 TFLOPS（14 核） / ~5.2 TFLOPS（16 核） |
| **FP16 GPU** | ~9.0 TFLOPS（14 核） / ~10.4 TFLOPS（16 核） |
| **媒体引擎** | **ProRes 编码/解码专用引擎**（首次）、H.264/HEVC |
| **TDP** | 30 W |
| **接口** | **Thunderbolt 4**（40 Gb/s）、USB 4、HDMI 2.0、Wi-Fi 6、Bluetooth 5.0 |
| **首发设备** | MacBook Pro 14" 2021、MacBook Pro 16" 2021 |
| **首发日期** | **2021-10-26** |
| **MacBook Pro 14" M1 Pro 8C/14C 16GB** | **$1,999** |
| **MacBook Pro 14" M1 Pro 10C/16C 16GB** | **$2,499** |
| **MacBook Pro 16" M1 Pro 10C/16C 16GB** | **$2,499** |

## 与 M1 对比

| 指标 | M1 Pro | M1 | 提升 |
|------|--------|-----|------|
| 制程 | 5nm N5 | 5nm N5 | 同 |
| 晶体管 | **337 亿** | 160 亿 | 2.1× |
| CPU 核心 | 8/10 (6P+2E / 8P+2E) | 8 (4P+4E) | +2-4 P 核 |
| CPU 频率 | 3.2 GHz P | 3.2 GHz P | 同 |
| GPU 核心 | 14/16 | 7/8 | +2× |
| Neural Engine | 11 TOPS | 11 TOPS | 同 |
| 内存带宽 | **200 GB/s** | 50 GB/s | **4×** |
| 最大内存 | 32 GB | 16 GB | 2× |
| 媒体引擎 | **ProRes 专用** | 基础 | 显著提升 |
| 接口 | **Thunderbolt 4** | Thunderbolt 3 / USB 4 | 升级 |

## 与 M1 Max 对比

| 指标 | M1 Pro | M1 Max | 提升 |
|------|--------|--------|------|
| GPU 核心 | 14/16 | 24/32 | +50-100% |
| 内存带宽 | 200 GB/s | **400 GB/s** | 2× |
| 最大内存 | 32 GB | 64 GB | 2× |
| ProRes 引擎 | 1 个编码 + 1 个解码 | 2 个编码 + 2 个解码 | 2× 吞吐 |
| 价格（16 核 GPU 版） | $2,499 | $3,099 | +$600 |

## 本地 LLM 推理性能

| 模型 | 量化 | 性能（tok/s） | 备注 |
|------|------|---------------|------|
| Llama 3 8B | FP16 | ~35 tok/s | 32GB 装完整模型 |
| Llama 3 8B | Q4_K_M | ~50 tok/s | 量化加速 |
| Mistral 7B | FP16 | ~38 tok/s | 32GB 装完整 |
| Mixtral 8x7B | Q4_K_M | ~12 tok/s | MOE 28GB 装下 |
| Stable Diffusion XL | FP16 | 1.0× vs M1 | 图像生成 |
| Whisper Large V3 | FP16 | 3× 实时 | 语音转录 |

> **历史意义**：M1 Pro 是 Apple **第一次**为 MacBook Pro 设计专业级 SoC，相比 M1 实现了 **内存带宽 4× 提升**（50→200 GB/s）和 **ProRes 硬件加速**（影视行业关键特性），是 Apple 摆脱 Intel 的标志性产品。

## 适用场景

- **MacBook Pro 14"/16" 2021**（专业开发、影视后期）
- **专业视频编辑**（Final Cut Pro + ProRes 加速）
- **3D 渲染**（Blender Cycles、Octane、Redshift）
- **音乐制作**（Logic Pro 多轨混音）
- **软件开发**（Xcode 编译、模拟器多开）
- **本地 LLM 推理**（32GB 装下完整 Llama 3 8B FP16）
- **学生/工程师入门专业 Mac**（$1,999 价位）

## 厂商信息

| 项目 | 信息 |
|------|------|
| **厂商** | Apple Inc. |
| **设计** | Apple 自研（加州 Cupertino） |
| **代工** | **TSMC 台湾**（5nm N5 产线） |
| **软件栈** | macOS 12 (Monterey) — macOS 26 (Tahoe) |
| **AI 框架** | Core ML、MLX、Create ML |
| **首发价格** | MacBook Pro 14" M1 Pro 8C/14C 16GB **$1,999** |
| **停产日期** | 2023-10（M3 Pro 发布） |
| **EOL 价格** | 已停产，二手市场 $1,200-$1,500 |

## 关键特性

- **5nm (N5)** 制程，**337 亿晶体管**（2.1× M1）
- **10 核 CPU**（8P+2E @ 3.2 GHz）多核比 M1 强 70%
- **16 核 GPU**（2× M1）图形性能 2× 提升
- **16 核 Neural Engine 11 TOPS**（M1 同）
- **200 GB/s 内存带宽**（M1 50 GB/s 的 **4×**）
- **32 GB 统一内存**（M1 16 GB 的 2×）
- **ProRes 专用硬件加速**（影视行业关键）
- **Thunderbolt 4**（40 Gb/s，4× USB 3.0）
- **HDMI 2.0**、**MagSafe 3**、**SDXC 读卡器**
- **Liquid Retina XDR** 显示屏（mini-LED，1600 nits HDR）
- **1080p FaceTime HD 摄像头**
- **Wi-Fi 6**、**Bluetooth 5.0**

## 相关卡

- [Apple M1 Ultra (M1 系列旗舰)](/docs/cards/others/apple-m1-ultra) — M1 Max 双芯
- [Apple M2 Pro / Max / Ultra (2023)](/docs/cards/others/apple-m2-ultra) — 前代
- [Apple M3 Pro / Max (2023)](/docs/cards/others/apple-m3-max) — 前代
- [Apple M4 Pro (2024)](/docs/cards/others/apple-m4-pro) — 同代后继
- [Apple M-Series 总览](/docs/cards/others/apple-m-series) — M 系列对比表
- [Apple A19 Pro (iPhone 17 Pro)](/docs/cards/others/apple-a19-pro) — 同代移动
- [架构分类: APU 加速处理](/docs/architectures/arch-apu) — APU 架构
- [NVIDIA RTX 4090 (消费 GPU)](/docs/cards/nvidia/rtx-4090) — 桌面 GPU 对比
