---
id: apple-m3-ultra
title: Apple M3 Ultra (192GB UMA 统一内存)
sidebar_label: M3 Ultra
description: Apple M3 Ultra 详尽规格：80 核 GPU、32 核 CPU、192GB 统一内存、本地 70B+ LLM 推理。
keywords: [Apple M3 Ultra, M3 Ultra, 80 核 GPU, 192GB UMA, 本地 LLM, Mac Studio]
---

# Apple M3 Ultra (192GB 统一内存)

## 产品概述

**Apple M3 Ultra** 是 Apple Silicon 顶级旗舰，**2023-12 发布**。通过 **UltraFusion 互连**将两片 M3 Max 芯片合并为单芯片，192GB 统一内存可加载**完整 70B+ LLM**。

## 核心规格

| 项目 | 参数 |
|------|------|
| **架构** | Apple Silicon (M3 Max × 2, UltraFusion) |
| **制程** | TSMC 3nm |
| **CPU 核心** | 32（24P + 8E） |
| **GPU 核心** | 80 |
| **Neural Engine** | 64-core, 72 TOPS |
| **统一内存** | **96GB / 192GB / 256GB LPDDR5** |
| **内存带宽** | **800 GB/s** |
| **FP32 GPU** | ~28 TFLOPS |
| **FP16 GPU** | ~56 TFLOPS |
| **媒体引擎** | 硬件 H.264/HEVC/ProRes/AV1 |
| **TDP** | 90-215 W（取决于负载） |
| **首发价** | Mac Studio M3 Ultra 192GB: **$5,899** |
| **首发日期** | 2023-12 |

## 与 M2 Ultra 对比

| 指标 | M3 Ultra | M2 Ultra | 提升 |
|------|----------|----------|------|
| 制程 | 3nm | 5nm | 新代 |
| CPU 核心 | 32 (24P+8E) | 24 (16P+8E) | +33% |
| GPU 核心 | 80 | 76 | +5% |
| Neural Engine | 72 TOPS | 31.6 TOPS | **2.3×** |
| 内存 | 192GB LPDDR5 | 192GB LPDDR5 | 同 |
| 带宽 | 800 GB/s | 800 GB/s | 同 |
| CPU 性能 | +50%（单核 +30%） | 基准 | 显著 |
| GPU 性能 | +20% | 基准 | 略升 |

## 本地 LLM 推理性能（192GB 版本）

| 模型 | 量化 | 性能（tok/s） | 备注 |
|------|------|---------------|------|
| Llama 3 70B | FP16 | ~5-6 tok/s | 完整模型 ~140GB 可载 |
| Llama 3 70B | Q4_K_M | ~10 tok/s | 优化 |
| Llama 3 8B | FP16 | ~80 tok/s | 极快 |
| Mixtral 8x7B | Q4_K_M | ~22 tok/s | 96GB 可载 |
| Qwen 2.5 72B | Q4_K_M | ~12 tok/s | 大上下文 |
| Llama 3 405B | Q4_K_M | ~2 tok/s | **256GB 才可载** |

> **192GB M3 Ultra 优势**：单台 Mac Studio 可加载完整 70B 模型（无量化），是**最便宜的本地 LLM 完整加载方案**。

## UltraFusion 互连

- **2.5 TB/s** 芯片间互连带宽
- **对软件透明**（系统显示为单芯片）
- CPU/GPU/Neural Engine 均可访问另一端内存

## 软件生态

- **MLX**（Apple 官方 LLM 框架，Metal 加速）
- **llama.cpp**（Metal 后端，社区主流）
- **Ollama**（一键本地 LLM）
- **LM Studio**（图形界面）
- **PyTorch MPS**（官方 GPU 后端）
- **vLLM**（Metal 后端实验性）

## 厂商信息

| 项目 | 内容 |
|------|------|
| **厂商** | Apple |
| **产品页** | https://www.apple.com/mac-studio/ |
| **Mac Studio M3 Ultra 192GB** | $5,899 |
| **目标市场** | 创作者、本地 AI、ML 研究者 |

## 适用场景

- ✅ **本地 70B LLM 完整加载**（192GB UMA）
- ✅ Stable Diffusion XL 微调
- ✅ Final Cut Pro / Logic Pro 硬件加速
- ✅ 端侧 LLM 开发（Apple Intelligence）
- ❌ 数据中心训练
- ❌ 大规模推理（缺乏数据中心硬件）

## 相关卡

- [Apple M-Series 总览](/docs/cards/others/apple-m-series) - 全系列对比
- [NVIDIA RTX 4090](/docs/cards/nvidia/rtx-4090) - 消费级对比
- [AMD MI300A](/docs/cards/amd/mi300a) - 数据中心 APU
