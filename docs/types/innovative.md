---
id: innovative
title: 创新架构 AI 芯片 (Groq, SambaNova, Tenstorrent)
sidebar_label: 创新架构
description: 创新架构 AI 芯片完整指南：Groq LPU、SambaNova SN40L、Tenstorrent Wormhole、Graphcore IPU 等突破传统 GPU 架构的产品。
keywords: [Groq LPU, SambaNova, Tenstorrent, 创新 AI 架构, 非传统 AI 芯片]
---

# 创新架构 AI 芯片

除了主流 GPU 和 ASIC，还有一些公司尝试**突破传统架构**的 AI 处理器。它们采用**数据流、确定性、脉动阵列**等不同方法，追求特定场景下的极致性能。

## 创新架构 AI 芯片对比

| 型号 | 厂商 | 架构 | 关键特性 | 适用 |
|------|------|------|----------|------|
| **Groq 3 LPX (机柜)** | NVIDIA（收购 Groq） | Tensor Streaming v3 | **256 LPU/机柜, 40 PB/s SRAM 聚合, 35× perf/W, TTFT &lt; 20ms** | **2026 H2 Agentic AI** |
| **Groq LPU** | Groq | Tensor Streaming | 确定性超低延迟 | LLM 实时推理 |
| **SambaNova SN40L** | SambaNova | 可重构数据流 (RDU) | 企业级一体机 | 企业 LLM |
| **Tenstorrent Wormhole** | Tenstorrent | Tensix (RISC-V) | 开源软件栈 | 学术 / 开源 |
| **Tenstorrent Grayskull** | Tenstorrent | Tensix (RISC-V) | 入门 | 学术 / 开源 |
| **Graphcore Bow IPU** | Graphcore | MIMD | 1,472 独立核心 | GNN（已被收购） |
| **Tesla Dojo** | Tesla | 自研 D1 训练芯片 | Dojo ExaPOD | 内部训练（Dojo 已停产） |
| **Apple M-Series (M2/M3/M4 Max/Ultra)** | Apple | APU（统一内存） | 本地 LLM 推理 | 创作者 / 本地 AI |
| **Apple M3 Ultra (192GB)** | Apple | APU | 80 核 GPU + 192GB UMA | 70B+ 本地 LLM |
| **Qualcomm AI 100** | Qualcomm | Hexagon NPU ASIC | 400 TOPS / 75W | 低功耗数据中心 |
| **Hailo-8 / 15** | Hailo | 数据流 NPU | 2.5W / 26 TOPS | 边缘视觉 AI |
| **Samsung HBM-PIM** | Samsung | 存算一体 (PIM) | 1.2 TFLOPS / 堆叠 | Memory-bound 推理 |
| **BrainChip Akida 2** | BrainChip | 神经形态 (SNN) | 1.5W / 片上学习 | 永远在线边缘 |

## 架构对比

### 传统 GPU (NVIDIA / AMD)
- **SIMT**（单指令多线程）
- **HBM 显存**
- **CUDA / ROCm 生态**

### Groq LPU
- **TSP**（Tensor Streaming Processor）
- **片上 SRAM**（无 HBM）
- **编译器定义硬件**
- **确定性延迟**

### SambaNova RDU
- **数据流**（非指令式）
- **HBM 显存**
- **多节点 coherent memory**

### Tenstorrent Tensix
- **RISC-V CPU + 矩阵/向量引擎**
- **片上 SRAM**
- **标准以太网互联**
- **完全开源软件**

## 选型建议

### 按需求

- **超低 LLM 延迟**：Groq LPU / GroqCloud API
- **企业级 LLM 私有部署**：SambaNova SN40L 一体机
- **开源 AI 社区 / 学术研究**：Tenstorrent Wormhole
- **图神经网络**：Graphcore IPU（已被收购，未来存疑）

### 按软件生态成熟度

- **成熟**：SambaNova（PyTorch 集成）
- **中等**：Groq（LPU 编译器）
- **发展中**：Tenstorrent（开源生态）
- **不明**：Graphcore（公司被收购）

## 详细产品页

- [Groq LPU](/docs/cards/others/groq-lpu) - 超低延迟
- [NVIDIA Groq 3 LPX](/docs/cards/nvidia/groq-3-lpx) - 2026 H2 256 LPU 机柜
- [SambaNova SN40L](/docs/cards/others/sambanova-sn40l) - 企业一体机
- [Tenstorrent Grayskull/Wormhole/Blackhole](/docs/cards/others/tenstorrent) - 开源 RISC-V
- [Graphcore IPU](/docs/cards/others/graphcore-ipu) - MIMD 架构
- [Tesla Dojo](/docs/cards/others/tesla-dojo) - 自研训练芯片
- [Apple M-Series 总览](/docs/cards/others/apple-m-series) - 本地 LLM
- [Apple M3 Ultra](/docs/cards/others/apple-m3-ultra) - 192GB UMA
- [Qualcomm Cloud AI 100](/docs/cards/others/qualcomm-ai100) - 低功耗 ASIC
- [Hailo-8 / 15](/docs/cards/others/hailo) - 边缘视觉 NPU
- [Samsung HBM-PIM](/docs/cards/others/hbm-pim) - 存算一体
- [BrainChip Akida 2](/docs/cards/others/akida-2) - 神经形态

## 相关架构

- [LPU 架构详解](/docs/architectures/arch-lpu)
- [RPU / RDU 架构详解](/docs/architectures/arch-rpu-rdu)
- [IPU 架构详解](/docs/architectures/arch-ipu)
- [PIM 架构详解](/docs/architectures/arch-pim)
- [Neuromorphic 架构详解](/docs/architectures/arch-neuromorphic)
- [APU 架构详解](/docs/architectures/arch-apu)

## 相关类型

- [AI 推理 GPU](/docs/types/inference-gpu)
- [AI 训练 ASIC](/docs/types/training-asic)
- [完整对比表](/docs/comparison)
