---
id: apple-m1-ultra
title: Apple M1 Ultra (128GB UMA 统一内存)
sidebar_label: M1 Ultra
description: Apple M1 Ultra 详尽规格：64 核 GPU、20 核 CPU、128GB 统一内存、Apple Silicon 第一代 Ultra、2022 WWDC。
keywords: [Apple M1 Ultra, M1 Ultra, 64 核 GPU, 128GB UMA, UltraFusion 1.0, 800 GB/s, Mac Studio]
---

# Apple M1 Ultra (128GB 统一内存)

## 产品概述

**Apple M1 Ultra** 是 Apple Silicon **第一代 Ultra 旗舰**，**2022-03-08 WWDC 发布**。通过 **UltraFusion 互连（第一代）** 将两片 M1 Max 芯片合并为单芯片，**128GB 统一内存** + **800 GB/s 内存带宽**（**业界首款消费级 128GB UMA 方案**），是 Apple Silicon 史上里程碑产品。

**历史地位**：M1 Ultra 是 **Apple Silicon Ultra 系列开山之作**，为后续 M2/M3/M4/M5 Ultra 奠定了架构基础。**Mac Studio 2022 首发**，**2023-06 被 M2 Ultra 替代**。

## 核心规格

| 项目 | 参数 |
|------|------|
| **架构** | Apple Silicon (M1 Max × 2, **UltraFusion 1.0**) |
| **制程** | TSMC 5nm |
| **CPU 核心** | 20（16P + 4E） |
| **GPU 核心** | 64 |
| **Neural Engine** | 32-core, **22 TOPS** |
| **统一内存** | **64GB / 128GB LPDDR5** |
| **内存带宽** | **800 GB/s** |
| **FP32 GPU** | 21 TFLOPS |
| **FP16 GPU** | 42 TFLOPS |
| **媒体引擎** | 硬件 H.264/HEVC/ProRes |
| **TDP** | 60-120 W |
| **首发价** | Mac Studio M1 Ultra 128GB: **$5,999**（2022-03 首发价）|
| **首发日期** | 2022-03-18（Mac Studio 首发）|
| **停产** | 2023-06（M2 Ultra 替代）|

## UltraFusion 1.0 互连

| 维度 | UltraFusion 1.0 (M1) | UltraFusion 2.0 (M3+) |
|------|------------------------|--------------------------|
| **带宽** | 2.5 TB/s | 2.5 TB/s |
| **通道** | 4 通道 | 4 通道 |
| **延迟** | ~100ns | ~80ns |
| **首次出现** | 2022 M1 Ultra | 2023 M3 Ultra |

**关键技术**：
- **裸片间硅中介层（Interposer）**：TSMC CoWoS 类似
- **对软件透明**：系统显示为单芯片
- **统一内存池**：CPU/GPU/Neural Engine 均可访问 128GB

## Apple Silicon 演进时间线

| 代际 | 旗舰 | 制程 | 内存 | 带宽 | CPU 核 | GPU 核 | NE |
|------|------|------|------|------|--------|--------|-----|
| **M1** | **M1 Ultra (2022)** | **5nm** | **128GB** | **800 GB/s** | **20 (16P+4E)** | **64** | **22 TOPS** |
| M2 | M2 Ultra (2023) | 5nm | 192GB | 800 GB/s | 24 (16P+8E) | 76 | 31.6 TOPS |
| M3 | M3 Ultra (2023-12) | 3nm | 256GB | 800 GB/s | 32 (24P+8E) | 80 | 72 TOPS |
| M4 | M4 Ultra (2025-Q4 推测) | 3nm | 256GB | 819 GB/s | 32 (24P+8E) | 80 | 76 TOPS |
| M5 | M5 Ultra (2026 H2 推测) | 2nm | 384GB | ~1 TB/s | 40 (24P+16E) | 96-120 | ~120 TOPS |

## 与 M1 Max 对比

| 指标 | M1 Ultra | M1 Max | 提升 |
|------|---------|--------|------|
| 制程 | 5nm | 5nm | 同 |
| CPU 核心 | 20 (16P+4E) | 10 (8P+2E) | **2×** |
| GPU 核心 | 64 | 32 | **2×** |
| Neural Engine | 22 TOPS | 11 TOPS | **2×** |
| 内存 | 128GB LPDDR5 | 64GB LPDDR5 | **2×** |
| 带宽 | 800 GB/s | 400 GB/s | **2×** |
| UltraFusion | **2.5 TB/s**（双 Max 互联） | - | 新增 |
| 价格（Mac Studio 128GB） | $5,999 | $3,999 | +50% |

## 本地 LLM 推理性能（128GB 版本）

| 模型 | 量化 | 性能（tok/s） | 备注 |
|------|------|---------------|------|
| Llama 2 7B | FP16 | ~35 tok/s | 主流 |
| Llama 2 13B | Q4_K_M | ~18 tok/s | 性能限制 |
| Llama 2 70B | **Q4_K_M** | **~3-4 tok/s** | **128GB 可装量化版** |
| Llama 1 65B | Q4_K_M | ~4 tok/s | 早期 |
| Mistral 7B | Q4_K_M | ~38 tok/s | 极快 |
| Falcon 40B | Q4_K_M | ~6 tok/s | |
| MPT 30B | FP16 | ~5 tok/s | 完整可载 |
| Code Llama 34B | Q4_K_M | ~7 tok/s | 编程 |

> **128GB M1 Ultra 意义**：**2022 年首次让消费级硬件跑 70B LLM**（虽然需要 Q4 量化），**价格 $5,999**（远低于 NVIDIA DGX Station $50K+）。

## 厂商信息

| 项目 | 内容 |
|------|------|
| **厂商** | Apple Inc. |
| **产品** | Mac Studio（2022-03 首发，2023-06 停产）|
| **Mac Studio M1 Ultra 128GB** | $5,999（2022-03 首发价）|
| **停产** | 2023-06（M2 Ultra 替代）|
| **目标市场** | 创作者、本地 AI（早期）、ML 研究者 |
| **历史地位** | **Apple Silicon Ultra 系列开山之作** |

## 适用场景

- ✅ **本地 LLM 推理**（128GB UMA，2022 革命性）
- ✅ Stable Diffusion 1.x 图像生成
- ✅ Final Cut Pro / Logic Pro 硬件加速
- ✅ 4K 视频编辑
- ✅ 早期 Apple Silicon 端侧 AI 开发
- ❌ 数据中心训练
- ❌ 大规模推理
- ❌ FP8 训练（仅 FP16/BF16）

## M1 Ultra vs M2 Ultra vs M3 Ultra

| 指标 | M1 Ultra (2022) | M2 Ultra (2023) | M3 Ultra (2023-12) |
|------|-----------------|------------------|---------------------|
| 制程 | 5nm | 5nm (N5P) | 3nm |
| CPU 核 | 20 (16P+4E) | 24 (16P+8E) | 32 (24P+8E) |
| GPU 核 | 64 | 76 | 80 |
| NE | 22 TOPS | 31.6 TOPS | 72 TOPS |
| 内存 | 128GB LPDDR5 | 192GB LPDDR5 | 256GB LPDDR5 |
| 带宽 | 800 GB/s | 800 GB/s | 800 GB/s |
| 价格 | $5,999 | $5,499 | $5,899 |

## 关键特性

- **UltraFusion 1.0**：业界首款消费级芯片间硅互连 2.5 TB/s
- **128GB UMA**：2022 业界最大消费级统一内存
- **800 GB/s**：消费级 GPU/SoC 最高带宽之一
- **5nm TSMC**：第一代 Apple Silicon 旗舰
- **缺点**：FP8 不支持、价格 $6K、已停产

## 时代意义

- **2022 革命**：消费级硬件首次跑 70B LLM
- **架构基础**：M2/M3/M4/M5 Ultra 都基于此架构演进
- **生态开端**：llama.cpp / MLX 早期适配
- **NVIDIA 替代**：本地 AI 工作站的起点

## 相关卡

- [Apple M2 Ultra](/docs/cards/others/apple-m2-ultra) - 下一代
- [Apple M3 Ultra](/docs/cards/others/apple-m3-ultra) - 当前真旗舰
- [Apple M4 Ultra（推测）](/docs/cards/others/apple-m4-ultra) - 2025 推测
- [Apple M5 Ultra（推测）](/docs/cards/others/apple-m5-ultra) - 2026 推测
- [Apple M4 Max](/docs/cards/others/apple-m4-max) - 笔记本旗舰
- [Apple M-Series 总览](/docs/cards/others/apple-m-series) - 全系列
- [NVIDIA RTX 4090](/docs/cards/nvidia/rtx-4090) - 消费级对比
- [AMD MI300A](/docs/cards/amd/mi300a) - 数据中心 APU
