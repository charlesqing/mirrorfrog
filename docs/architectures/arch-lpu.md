---
id: arch-lpu
title: LPU (Language Processing Unit) 语言处理单元
sidebar_label: LPU
description: LPU 架构详解：Groq 自研、确定性低延迟、编译器定义硬件、专为大语言模型推理设计。
keywords: [LPU, Language Processing Unit, Groq LPU, TSP, Tensor Streaming Processor, 确定性低延迟]
---

# LPU (Language Processing Unit) 架构

## 什么是 LPU

**LPU（Language Processing Unit）** 是 **Groq** 自研的**语言处理单元**，2016 年由前 Google TPU 团队创立。**专为 LLM 推理的极致低延迟**设计，**单芯片 SRAM 228MB**（vs GPU HBM 80GB），通过**片上 SRAM + 编译器调度**实现**确定性延迟**。

**核心创新**：**编译器定义硬件（Compiler-Defined Hardware）**——无缓存、无乱序执行，**所有延迟可预测**。

## 核心架构：TSP

### Tensor Streaming Process（TSP）
- **功能单元**：Matrix Multiply、ReLU、Add、Multiply、Transpose、Shuffle
- 编译器**预先**调度所有操作
- 数据在 TSP 单元间**流过**（streaming），**无中间存储**

### 编译器
- **GroqWare SDK**（Python / C++）
- **完全离线编译**
- 数据流图直接映射到硬件

### 片上 SRAM
- **228 MB SRAM**（GroqChip v1）
- **80 TB/s 带宽**（vs HBM 3 TB/s）
- **决定性访问延迟**（无缓存缺失）

## LPU vs GPU vs TPU

| 维度 | LPU (Groq) | GPU (H100) | TPU (v4) |
|------|------------|------------|----------|
| 架构 | 编译器定义流处理 | SIMT 通用并行 | 脉动阵列 |
| 内存 | 228MB SRAM | 80GB HBM | 32GB HBM |
| 带宽 | 80 TB/s | 3.35 TB/s | 1.2 TB/s |
| 延迟 | **确定性、亚毫秒** | 受内存/调度影响 | 中等 |
| 适用模型规模 | 小（多芯片聚合） | 大（80GB 显存） | 大（Pod 聚合） |
| 编译 | **完全离线** | 即时（JIT） | XLA 离线 |
| 生态 | 小（GroqWare） | **CUDA 成熟** | JAX/TF |

## 适用场景

- ✅ **超低延迟 LLM 推理**（GroqCloud API 已支持 Llama 3 70B、Mixtral 8x7B）
- ✅ 实时对话 AI（首个 token 延迟 < 100ms）
- ✅ 批处理 LLM 推理（高吞吐）
- ✅ 多模态实时推理
- ❌ 大模型训练（不适用）
- ❌ 通用 GPU 计算

## Groq 商业化

- **GroqCloud**（API 服务，2024 起）
- **GroqRack**（8 颗 GroqChip 服务器，$1.8M/机柜）
- 客户：Meta（Llama 推理）、Anthropic、Instagram、Substack

## 2026-Q1 NVIDIA 收购 Groq（重大事件）

| 时间 | 事件 | 详情 |
|------|------|------|
| **2025-12** | 投资 | NVIDIA 投资 Groq 2.5 亿美元 |
| **2026-Q1** | **全资收购** | **NVIDIA 以约 200 亿美元全资收购 Groq** |
| **2026 H2** | 产品整合 | **Groq 3 LPU 重命名为 NVIDIA Groq 3 LPX**，整合到 Vera Rubin 平台 |
| **2026 H2+** | 协同生态 | LPX rack 作为 Rubin GPU 的超低延迟推理 co-processor |

> 💡 **收购战略意义**：
> - NVIDIA 在 GPU 算力领先的基础上，**通过 LPU 补全了"超低延迟推理"**的能力
> - Rubin GPU + LPX 协处理 = **全场景 AI 算力覆盖**（训练 + 推理 + 极致低延迟推理）
> - 客户：OpenAI、Anthropic、Meta、Mistral 等
> - **GroqCloud 继续运营**（OpenAI 兼容 API）

## Groq 3 LPX 机柜（2026 H2）

| 项目 | 参数 |
|------|------|
| **芯片数** | **256 颗 Groq 3 LPU / 机柜** |
| **片上 SRAM（机柜）** | **128 GB 聚合** |
| **SRAM 带宽（机柜）** | **40 PB/s** |
| **互联** | GroqSync + NVLink-Network，**640 TB/s** |
| **INT8 算力（机柜）** | ~640,000 TOPS |
| **TDP（机柜）** | ~80 kW |
| **perf/W** | **35× H100**（官方） |
| **TTFT（首 Token 延迟）** | **< 20ms** |
| **TPOT（单 Token 延迟）** | **< 5ms** |

> **Groq 3 LPX = 当前唯一专为 Agentic AI 设计的机柜级 LPU 系统**。40 PB/s SRAM 带宽 ≈ 5,000× H100 HBM 带宽（80GB HBM3 = 3.35 TB/s）。

## 详细产品页

### Groq (独立)
- [Groq LPU (GroqChip v1)](/docs/cards/others/groq-lpu) - 2018 首款, 228MB SRAM 80 TB/s 188 TOPS INT8

### Groq (NVIDIA 旗下)
- [Groq LPU v2](/docs/cards/others/groq-lpu-v2) - 2024-Q3, 4nm 80GB SRAM 200W GroqCloud 服务, 收购前最后一代
- [NVIDIA Groq 3 LPX](/docs/cards/nvidia/groq-3-lpx) - 2026 H2 256 LPU 机柜, 128GB 聚合 SRAM 40 PB/s, 收购后整合到 Vera Rubin 平台

## 相关架构

- [TPU](/docs/architectures/arch-tpu) - Google 数据中心
- [ASIC](/docs/architectures/arch-asic) - 推理优化
- [GPU](/docs/architectures/arch-gpu) - 通用 AI
- [完整对比表](/docs/comparison)
