---
id: arch-apu
title: APU (Accelerated Processing Unit) 加速处理单元
sidebar_label: APU
description: APU 架构详解：CPU+GPU+NPU 集成封装、统一内存架构、AMD MI300A 与 Apple M-Series 是代表。
keywords: [APU, Accelerated Processing Unit, Apple M-Series, AMD MI300A, 统一内存, UMA, CPU+GPU]
---

# APU (Accelerated Processing Unit) 架构

## 什么是 APU

**APU（Accelerated Processing Unit）** 是将 **CPU + GPU + NPU 集成**于**单一封装 / 单一芯片**的处理器，**共享统一内存（UMA, Unified Memory Architecture）**。避免 CPU 与 GPU 之间的数据拷贝，**适合需要异构计算**的场景（HPC、AI 推理、本地 LLM）。

**代表产品**：
- **Apple M-Series**（M2/M3/M4 Max/Ultra）
- **AMD MI300A**（CDNA 3 + Zen 4）
- **Intel Core Ultra**（Meteor Lake / Lunar Lake，集成 NPU）

## APU 核心优势

### 统一内存架构（UMA）
- **CPU 与 GPU 共享同一 LPDDR5/HBM 池**
- **无需数据拷贝**（vs 独立 GPU 需通过 PCIe 传输）
- **192GB Mac Studio** 可加载完整 70B LLM

### 内存带宽
- Apple M2 Ultra: **800 GB/s**
- AMD MI300A: **5.3 TB/s**（HBM3）
- 数据密集型 LLM 推理**带宽优势**明显

### 异构计算
- 数值模拟（CPU） + AI 推理（GPU）+ 信号处理（NPU）**同芯片协同**
- 适合 **HPC + AI 联合** 工作流

## 主流 APU 对比

| APU | 制程 | CPU | GPU | 内存 | 内存带宽 | 部署 |
|-----|------|-----|-----|------|----------|------|
| **Apple M3 Ultra** | 3nm | 32 核 | 80 核 | 192GB LPDDR5 | 800 GB/s | 工作站 |
| **Apple M4 Max** | 3nm | 16 核 | 40 核 | 128GB LPDDR5X | 546 GB/s | 工作站 |
| **AMD MI300A** | 5nm + 6nm | **24 核 Zen 4** | 14,592 SP | 128GB HBM3 | 5.3 TB/s | 数据中心 |
| **Intel Core Ultra 9 285H** | 3nm | 16 核 | 8 核 Arc | 96GB DDR5 | 89 GB/s | 笔电 |

## APU vs 独立 CPU+GPU

| 维度 | APU | 独立 CPU + GPU |
|------|-----|---------------|
| 内存访问 | **共享（无拷贝）** | PCIe 传输 |
| 内存带宽 | 800 GB/s - 5.3 TB/s | GPU HBM + CPU DDR |
| 算力 | 中（受 TDP 限制） | **高（独立散热）** |
| 灵活性 | 软件栈统一 | CPU/GPU 分离 |
| 价格 | 中 | **高** |
| 适用 | 本地 AI、笔记本 | 数据中心、训练 |

## APU 适用场景

- ✅ **本地 LLM 推理**（UMA 优势，70B+ 模型可载）
- ✅ HPC + AI 联合（El Capitan 超算）
- ✅ 工作站创作（Final Cut Pro、DaVinci Resolve）
- ✅ 端侧 GenAI（Apple Intelligence、Copilot+ PC）
- ✅ 笔电 / 一体机 AI（低功耗）
- ❌ 超大模型训练（应使用独立 GPU 集群）
- ❌ 数据中心高密度（应使用 H100/MI300X）

## 详细产品页

### Apple Silicon
- [Apple M-Series 总览](/docs/cards/others/apple-m-series) - M1/M2/M3/M4/M5 全对比
- [Apple M1 Pro](/docs/cards/others/apple-m1-pro) - 2021-10, 10 核 CPU 200 GB/s MacBook Pro 14"/16"
- [Apple M1 Max](/docs/cards/others/apple-m1-max) - 2021-10, 32 核 GPU 400 GB/s 64GB UMA 双 ProRes
- [Apple M2 Max](/docs/cards/others/apple-m2-max) - 2023-01, 96GB UMA 400 GB/s
- [Apple M2 Ultra](/docs/cards/others/apple-m2-ultra) - 2023-06, 192GB UMA 800 GB/s UltraFusion
- [Apple M3 Max](/docs/cards/others/apple-m3-max) - 2023-10, 128GB LPDDR5 400 GB/s
- [Apple M3 Ultra](/docs/cards/others/apple-m3-ultra) - 2023-12, 256GB UMA 800 GB/s Apple Silicon 旗舰
- [Apple M4 Pro](/docs/cards/others/apple-m4-pro) - 2024-10, 14 核 CPU 64GB UMA 273 GB/s
- [Apple M4 Max](/docs/cards/others/apple-m4-max) - 2024-10, 128GB LPDDR5X 546 GB/s 38 TOPS ANE
- [Apple M4 Ultra](/docs/cards/others/apple-m4-ultra) - 2025-Q4 推测, 256GB 装 200B FP16
- [Apple M5 Ultra](/docs/cards/others/apple-m5-ultra) - 2026 H2 推测, 384GB LPDDR6 ~1 TB/s 装 400B FP8

### AMD
- [AMD MI300A](/docs/cards/amd/mi300a) - CDNA 3 + Zen 4, 128GB HBM3 5.3 TB/s 数据中心 APU
- [AMD Ryzen AI Max (Strix Halo)](/docs/cards/amd/ryzen-ai-max) - **128GB UMA 96GB VRAM**, 70B LLM 端侧, 3.9× M4 Pro SD

### Intel
- [Intel Core Ultra 2 (Lunar Lake)](/docs/cards/intel/core-ultra-2) - Foveros 3D NPU 4.0 48 TOPS Xe2 GPU 60+ TOPS LPDDR5X on-package Copilot+ PC

## 相关架构

- [GPU](/docs/architectures/arch-gpu) - 独立 GPU
- [NPU](/docs/architectures/arch-npu) - 端侧 NPU
- [WSE](/docs/architectures/arch-wse) - 晶圆级
- [完整对比表](/docs/comparison)
