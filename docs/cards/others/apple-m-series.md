---
id: apple-m-series
title: Apple M-Series (M2/M3/M4 Max/Ultra)
sidebar_label: Apple M-Series
description: Apple Silicon M2/M3/M4 Max/Ultra 详尽规格：统一内存架构、Neural Engine、能效比、本地 LLM 推理。
keywords: [Apple M2 Ultra, Apple M3 Ultra, Apple M4 Max, Apple Silicon, Neural Engine, 统一内存, 本地 LLM]
---

# Apple M-Series (M2/M3/M4 Max/Ultra)

## 产品概述

Apple Silicon 是 Apple 自研的 **ARM-based SoC**，集成 CPU、GPU、Neural Engine、统一内存（UMA）。**统一内存架构**是最大亮点——CPU 与 GPU 共享同一块 LPDDR5/LPDDR5X 内存池，避免数据拷贝，**非常适合本地 LLM 推理**（无需显存/内存分离）。

最新产品为 **M4 系列**（2024-10 发布），M4 Max 已用于 Mac Studio / MacBook Pro。

## 核心规格对比

| 项目 | M2 Max | M2 Ultra | M3 Max | M3 Ultra | M4 Max | M4 Ultra（未发布） |
|------|--------|----------|--------|----------|--------|---------------------|
| **CPU 核心** | 12 (8P+4E) | 24 (16P+8E) | 16 (12P+4E) | 32 (24P+8E) | 16 (12P+4E) | 32 (24P+8E, 传闻) |
| **GPU 核心** | 38 | 76 | 40 | 80 | 40 | 80 (传闻) |
| **Neural Engine** | 16-core, 15.8 TOPS | 32-core, 31.6 TOPS | 16-core, 18 TOPS | 32-core, 36 TOPS | 16-core, 38 TOPS | 32-core, 76 TOPS |
| **统一内存** | 32-96 GB LPDDR5 | 64-192 GB LPDDR5 | 36-128 GB LPDDR5 | 64-512 GB LPDDR5 | 36-128 GB LPDDR5X | 64-256 GB (传闻) |
| **内存带宽** | 400 GB/s | 800 GB/s | 400 GB/s | 800 GB/s | 546 GB/s | 819 GB/s (传闻) |
| **FP32 GPU (估算)** | 13.6 TFLOPS | 27.2 TFLOPS | 14.2 TFLOPS | 28.4 TFLOPS | 17.8 TFLOPS | 35.6 TFLOPS (估算) |
| **制程** | TSMC 5nm | TSMC 5nm | TSMC 3nm | TSMC 3nm | TSMC 3nm | TSMC 3nm |
| **TDP** | 60-90 W | 100-215 W | 56-78 W | 96-215 W | 70-100 W | ~200 W (估算) |
| **首发** | 2023-01 | 2023-06 | 2023-10 | 2023-12 | 2024-10 | 2025 末 (传闻) |

## 架构亮点

### 统一内存架构（UMA）
- **CPU/GPU/Neural Engine/媒体引擎共享同一 LPDDR5X 池**。
- 192GB M2 Ultra 可加载 ~70B 参数 FP16 LLM（量化后更大）。
- 800 GB/s 内存带宽（Ultra 系列）远超消费级 GPU。

### Neural Engine
- 硬件加速 INT8/INT4 矩阵运算。
- Apple 私有 API（Neural Engine 仅供 Core ML 框架使用）。
- M4 Neural Engine 38 TOPS — 用于 **Apple Intelligence** 端侧 AI。

### Metal Performance Shaders（MPS）
- **唯一**面向开发者的 GPU 编程接口。
- 支持 `llama.cpp`（Metal 后端）、MLX（Apple 官方 LLM 框架）、PyTorch MPS 后端。
- 性能约为 NVIDIA CUDA 的 30-50%（同价位下）。

### AmperX/UltraFusion
- Ultra 系列用 **UltraFusion 互连**将两片 Max 芯片合并为单芯片（对软件透明）。
- 2.5 TB/s 芯片间互连带宽。

## LLM 推理性能（M2 Ultra 192GB）

| 模型 | 量化 | 性能（tokens/s） |
|------|------|------------------|
| Llama 2 7B | Q4_K_M | ~25 tok/s |
| Llama 2 13B | Q4_K_M | ~15 tok/s |
| Llama 2 70B | Q4_K_M | ~4-5 tok/s |
| Mistral 7B | Q4_K_M | ~28 tok/s |
| Mixtral 8x7B | Q4_K_M | ~10 tok/s |

> 注：性能数据来自社区 `llama.cpp` 测试（Metal 后端），与 NVIDIA RTX 4090 + CUDA 相当或略低。

## 软件生态

- **llama.cpp** (Metal 后端) — 主流本地 LLM 推理
- **MLX** (Apple 官方) — NumPy/PyTorch 风格，专为 Apple Silicon 优化
- **PyTorch MPS** — 官方 GPU 后端
- **Core ML** — 模型转换与部署
- **Ollama** — 一键本地运行 LLM
- **LM Studio** — 图形化本地 LLM

## 厂商信息

| 项目 | 内容 |
|------|------|
| **厂商** | Apple Inc. |
| **产品页** | https://www.apple.com/mac/ |
| **售价** | Mac Studio M2 Ultra 192GB: $5,899 起 |
| **目标市场** | 创作者、本地 LLM 推理、消费级/工作站 |

## 适用场景

- ✅ **本地 LLM 推理**（UMA 优势明显，192GB 跑 70B 模型）
- ✅ 创意工作（Final Cut Pro、Logic Pro 硬件加速）
- ✅ 端侧 Apple Intelligence
- ❌ 大规模数据中心训练（生态不支持）
- ❌ 高吞吐云端推理（缺乏数据中心硬件）

## 相关卡

- [NVIDIA RTX 4090](/docs/cards/nvidia/rtx-4090) - 消费级 GPU 对比
- [NVIDIA RTX 6000 Ada](/docs/cards/nvidia/rtx-6000-ada) - 工作站 GPU
- [NVIDIA Jetson Orin](/docs/cards/nvidia/jetson-orin) - 边缘 AI 对比
