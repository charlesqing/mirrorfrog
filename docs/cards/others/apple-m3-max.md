---
id: apple-m3-max
title: Apple M3 Max (128GB UMA 统一内存)
sidebar_label: M3 Max
description: Apple M3 Max 详尽规格：16 核 CPU、40 核 GPU、128GB LPDDR5、400 GB/s、18 TOPS NE、Apple Silicon 第三代高性能。
keywords: [Apple M3 Max, M3 Max, 40 核 GPU, 128GB UMA, 400 GB/s, 18 TOPS NE, MacBook Pro]
---

# Apple M3 Max (128GB 统一内存)

## 产品概述

**Apple M3 Max** 是 Apple Silicon **第三代高性能芯片**，**2023-10-30 发布**，用于 **MacBook Pro 2023** 与 **Mac Studio 2024 H1**。**TSMC 3nm 制程**，**16 核 CPU**（12P+4E），**40 核 GPU**，**128GB LPDDR5 统一内存**（MacBook Pro 首次），**400 GB/s 内存带宽**，**18 TOPS Neural Engine**。相比 M2 Max 性能提升 **20-40%**。

**关键定位**：
- **M3 Max**（本页）：单芯片高性能，笔记本 + 工作站
- **M3 Ultra**（已有页）：双 M3 Max 合并，256GB，服务器级
- **M4 Max**（已有页）：2024-10 升级，128GB LPDDR5X，546 GB/s
- **M4 Ultra**（推测）：2025-Q4

## 核心规格

| 项目 | 参数 |
|------|------|
| **架构** | Apple Silicon (M3 Max 单芯片，非 UltraFusion) |
| **制程** | TSMC 3nm (N3) |
| **CPU 核心** | 16（12P + 4E） |
| **GPU 核心** | 40 |
| **Neural Engine** | 16-core, **18 TOPS** |
| **统一内存** | **36GB / 64GB / 128GB LPDDR5** |
| **内存带宽** | **400 GB/s**（36GB / 64GB 版本） |
| **FP32 GPU** | ~14.2 TFLOPS |
| **FP16 GPU** | ~28.4 TFLOPS |
| **媒体引擎** | 硬件 H.264/HEVC/ProRes/AV1 解码 |
| **TDP** | 56 W |
| **MacBook Pro 16" M3 Max 128GB** | **$5,799** |
| **Mac Studio M3 Max 128GB** | $3,499 |
| **首发日期** | 2023-10-30 |

## Apple M-Series 高性能芯片演进

| 代际 | M1 Max | M2 Max | **M3 Max** | M4 Max |
|------|--------|--------|-------------|---------|
| 发布 | 2021-10 | 2023-01 | **2023-10-30** | 2024-10-28 |
| 制程 | 5nm | 5nm (N5P) | **3nm (N3)** | 3nm (N3E) |
| CPU | 10 (8P+2E) | 12 (8P+4E) | **16 (12P+4E)** | 16 (12P+4E) |
| GPU | 32 | 38 | **40** | 40 |
| NE | 11 TOPS | 15.8 TOPS | **18 TOPS** | 38 TOPS |
| 内存 | 64GB LPDDR5 | 96GB LPDDR5 | **128GB LPDDR5** | 128GB LPDDR5X |
| 带宽 | 400 GB/s | 400 GB/s | **400 GB/s** | 546 GB/s |
| 价格（MBP 16 128GB） | $4,199 | $4,999 | **$5,799** | $6,399 |

> **M3 Max 升级亮点**：**CPU 核数 +33%**（12→16）、**GPU 核数 +5%**（38→40）、**NE TOPS +14%**（15.8→18）、**最大内存 128GB**（vs 96GB）。

## 与 M2 Max 对比

| 指标 | M3 Max | M2 Max | 提升 |
|------|--------|--------|------|
| 制程 | 3nm (N3) | 5nm (N5P) | 新代 |
| CPU 核心 | 16 (12P+4E) | 12 (8P+4E) | +33% |
| GPU 核心 | 40 | 38 | +5% |
| Neural Engine | 18 TOPS | 15.8 TOPS | +14% |
| 内存 | 128GB LPDDR5 | 96GB LPDDR5 | +33% |
| 带宽 | 400 GB/s | 400 GB/s | 同 |
| CPU 性能 | +30%（IPC + ARMv9.0） | 基准 | 显著 |
| GPU 性能 | +20% | 基准 | 显著 |

## 本地 LLM 推理性能（128GB 版本）

| 模型 | 量化 | 性能（tok/s） | 备注 |
|------|------|---------------|------|
| Llama 2 70B | Q4_K_M | ~8 tok/s | 完整模型量化可载 |
| Llama 2 70B | FP16 | ~4 tok/s | 完整模型 ~140GB 可载 |
| Llama 3 8B | FP16 | ~75 tok/s | 极快 |
| Mixtral 8x7B | Q4_K_M | ~20 tok/s | MOE |
| Qwen 1.5 72B | Q4_K_M | ~9 tok/s | 中文 |
| Stable Diffusion XL | FP16 | 1.2× vs M2 Max | 图像生成 |
| Whisper Large V3 | FP16 | 7× 实时 | 语音转录 |

> **128GB M3 Max 优势**：相比 M2 Max 96GB **首次支持 128GB UMA**（MacBook Pro 史上最大），可加载完整 70B LLM（量化）。

## M3 架构升级（相对 M2）

- **CPU 架构**：ARMv9.0（vs M2 ARMv8.6）— SVE2 增强，IPC +8%
- **GPU 架构**：Apple GPU Gen 4（vs M2 Gen 3）— 硬件光追 + 动态缓存
- **Neural Engine**：18 TOPS（M3 Max 16 核）
- **媒体引擎**：AV1 **解码**（M2 不支持 AV1）
- **统一内存**：LPDDR5（vs M2 LPDDR5）

## 软件生态

- **MLX**（Apple 官方 LLM 框架，Metal 加速）
- **llama.cpp**（Metal 后端）
- **Ollama**（一键本地 LLM）
- **LM Studio**（图形界面）
- **PyTorch MPS**（官方 GPU 后端）
- **Core ML**（模型转换与部署）

## 厂商信息

| 项目 | 内容 |
|------|------|
| **厂商** | Apple Inc. |
| **产品** | MacBook Pro 16"/14" (2023) + Mac Studio (2024 H1) |
| **MacBook Pro 16" M3 Max 128GB** | $5,799（2023-10 首发价）|
| **Mac Studio M3 Max 128GB** | $3,499（2024-03）|
| **停产** | 2024-10（M4 Max 替代） |
| **目标市场** | 创意工作者、本地 AI、MacBook Pro 工作站 |

## 适用场景

- ✅ **MacBook Pro 工作站**（128GB UMA 笔记本）
- ✅ 本地 70B LLM 推理（量化）
- ✅ Stable Diffusion XL / 视频生成
- ✅ 4K/8K 视频编辑（ProRes RAW 硬件加速）
- ✅ 端侧 Apple Intelligence
- ❌ 数据中心训练
- ❌ 大规模推理（缺乏数据中心硬件）
- ❌ FP8 训练（仅 FP16/BF16）

## M3 Max vs M3 Ultra vs M4 Max

| 指标 | M3 Max | M3 Ultra | M4 Max |
|------|--------|----------|---------|
| CPU | 16 核 (12P+4E) | 32 核 (24P+8E) | 16 核 (12P+4E) |
| GPU | 40 核 | 80 核 | 40 核 |
| NE | 18 TOPS | 72 TOPS | 38 TOPS |
| 内存 | 128GB LPDDR5 | 256GB LPDDR5 | 128GB LPDDR5X |
| 带宽 | 400 GB/s | 800 GB/s | 546 GB/s |
| 适用 | MacBook Pro / Mac Studio | Mac Studio / Mac Pro | MacBook Pro / Mac Studio |

## 关键特性

- **128GB UMA**：MacBook Pro 史上最大统一内存
- **3nm TSMC**：第一代 Apple Silicon 3nm
- **40 核 GPU**：消费级 SoC 领先
- **UltraFusion 准备**：可与另一 M3 Max 合并为 M3 Ultra
- **缺点**：400 GB/s 带宽限制（vs M4 Max 546 GB/s）

## 相关卡

- [Apple M4 Max](/docs/cards/others/apple-m4-max) - 下一代
- [Apple M3 Ultra](/docs/cards/others/apple-m3-ultra) - 同代 Ultra
- [Apple M2 Max] (无独立页) - 前代
- [Apple M1 Ultra](/docs/cards/others/apple-m1-ultra) - 上一代 Ultra
- [Apple M-Series 总览](/docs/cards/others/apple-m-series) - 全系列对比
- [NVIDIA RTX 4090](/docs/cards/nvidia/rtx-4090) - 消费级对比
- [AMD MI300A](/docs/cards/amd/mi300a) - 数据中心 APU
