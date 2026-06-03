---
id: arch-ipu
title: IPU (Intelligence Processing Unit) 智能处理单元
sidebar_label: IPU
description: IPU 架构详解：Graphcore 自研 BSP 架构、1472 核、大规模并行 MIMD、低延迟细粒度计算。
keywords: [IPU, Intelligence Processing Unit, Graphcore, Bow, BSP, Bulk Synchronous Parallel, MIMD]
---

# IPU (Intelligence Processing Unit) 架构

## 什么是 IPU

**IPU（Intelligence Processing Unit）** 是 **Graphcore**（英国）推出的**智能处理单元**，采用**大规模并行 MIMD**（Multiple Instruction, Multiple Data）架构，与 GPU 的 SIMD 不同，**每核独立执行不同指令**。

**核心特性**：
- **1,472 个独立处理器核心**（Bow IPU）
- **900 MB 片上 SRAM**（In-Processor Memory）
- **BSP（Bulk Synchronous Parallel）** 编程模型
- 适合**细粒度并行**（如推荐系统、图神经网络）

## IPU 核心架构

### Bow IPU
- **1,472 核**（Tile 处理器）
- 每个 Tile = 1 核 + 624KB SRAM
- **片上 SRAM 总计 900 MB**
- **Tile-to-Tile 互联**：Graphcore 互连（IPU-Links）
- **交换芯片**（GW-Link）连接多 IPU

### BSP 编程模型
- **Bulk Synchronous Parallel**
- 计算 + 通信 + 同步 三阶段循环
- 适合**稀疏图、动态图、细粒度并行**

### Poplar SDK
- **C++ / Python** SDK
- **TensorFlow / PyTorch** 集成
- **ONNX** 转换工具

## 主流 IPU 产品

| IPU | 年份 | 核数 | SRAM | 算力（FP16） | TDP |
|-----|------|------|------|--------------|-----|
| **Colossus MK1 GC2** | 2018 | 1,216 | 304 MB | - | 150W |
| **Bow IPU GC200** | 2020 | **1,472** | **900 MB** | - | 150W |
| **Bow Pod** | 2020 | 4× GC200 | 3.6 GB | - | - |
| **Bow Pod64** | 2020 | 16× GC200 | 14.4 GB | - | - |

## IPU vs GPU

| 维度 | IPU | GPU |
|------|-----|-----|
| 架构 | **MIMD**（独立指令） | SIMT（统一指令） |
| 并行粒度 | **细**（核级独立） | 粗（warp 级） |
| 内存 | **片上 SRAM**（900MB） | HBM（80GB） |
| 编程模型 | **BSP** | CUDA |
| 适用 | **稀疏图、动态图、推荐系统** | 密集矩阵（LLM、CNN） |
| 训练大模型 | 中 | **强** |
| 生态 | 小 | **CUDA 成熟** |

## IPU 适用场景

- ✅ **推荐系统**（DLRM、embedding 查表）
- ✅ **图神经网络**（GNN）
- ✅ 分子动力学模拟
- ✅ 金融建模
- ⚠️ LLM 训练（生态、性能落后 GPU）
- ❌ 大规模 LLM 推理（应使用 GPU/TPU）

## 商业部署

- **Microsoft Azure**（IPU 实例）
- **Graphcore IPUs** 在欧洲、北美数据中心可用
- **Glow** 编译器
- 与 NVIDIA GPU **互补**（部分推理卸载至 IPU）

## 详细产品页

- [Graphcore IPU](/docs/cards/others/graphcore-ipu) - 完整规格

## 相关架构

- [GPU](/docs/architectures/arch-gpu) - 通用 AI
- [NPU](/docs/architectures/arch-npu) - 数据中心 NPU
- [RPU/RDU](/docs/architectures/arch-rpu-rdu) - 可重构数据流
- [完整对比表](/docs/comparison)
