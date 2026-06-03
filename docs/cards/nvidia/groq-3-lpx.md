---
id: groq-3-lpx
title: NVIDIA Groq 3 LPX (LPU Rack-Scale)
sidebar_label: NVIDIA Groq 3 LPX
description: NVIDIA 收购后 Groq 3 LPX 机柜：256 颗 LPU、40 PB/s 片上 SRAM 聚合、640 TB/s 互联、35× perf/W，专为 trillion-parameter 推理，2026 H2。
keywords: [Groq 3 LPX, NVIDIA Groq acquisition, LPU, 40 PB/s, 640 TB/s, agentic AI, 35x perf/W, trillion parameter]
---

# NVIDIA Groq 3 LPX (LPU Rack-Scale)

## 产品概述

**NVIDIA Groq 3 LPX** 是 2026 H2 推出的**机柜级 LPU（Language Processing Unit）** 系统，**NVIDIA 收购 Groq 后的旗舰 LPU 产品**。每机柜 **256 颗 Groq 3 LPU**、**40 PB/s 片上 SRAM 聚合带宽**、**640 TB/s 互联带宽**、**35× perf/W** 优势（vs H100 推理）。

Groq 3 LPX 是 **NVIDIA Vera Rubin 平台**的**推理加速 co-processor** —— 当用户需要**超低延迟万亿参数模型推理**（如 agentic AI、real-time code generation）时，可选 LPX rack 作为 Rubin GPU 的 co-processor。

## 核心规格

| 项目 | 参数 |
|------|------|
| **架构** | Groq 3 LPU（Tensor Streaming Processor v3） |
| **形态** | **机柜级（256 颗/机柜）** |
| **片上 SRAM（每 LPU）** | 512 MB |
| **片上 SRAM（机柜）** | **128 GB 聚合** |
| **片上 SRAM 带宽（机柜）** | **40 PB/s** |
| **互联（机柜内）** | GroqSync + NVLink-Network（**640 TB/s**） |
| **INT8 算力（每 LPU）** | 2,500 TOPS（推测） |
| **FP8 算力（机柜）** | ~640 PFLOPS（推测） |
| **BF16 算力（机柜）** | ~320 PFLOPS（推测） |
| **TDP（机柜）** | ~80 kW |
| **perf/W（推理）** | **35× H100**（官方） |
| **首发** | **2026 H2**（与 Rubin R200 同期） |

> 📌 **40 PB/s 片上 SRAM 带宽 ≈ 5,000× H100 HBM 带宽**（H100 80GB HBM3 = 3.35 TB/s）。这是 Groq LPU **极致低延迟**的核心秘密。

## NVIDIA Groq 收购

| 事件 | 时间 | 详情 |
|------|------|------|
| **首次合作** | 2025-12 | NVIDIA 投资 Groq 2.5 亿美元 |
| **完全收购** | **2026-Q1** | NVIDIA 全资收购 Groq（**约 200 亿美元**） |
| **产品整合** | 2026 H2 | Groq 3 LPU 重命名为 **NVIDIA Groq 3 LPX** |
| **整合到 Vera Rubin 平台** | 2026 H2 | LPX rack 作为 Rubin GPU co-processor |

> 💡 **收购意义**：NVIDIA 在 GPU 算力领先的基础上，**通过 LPU 补全了"超低延迟推理"**的能力。Rubin GPU + LPX 协处理 = **全场景 AI 算力覆盖**（训练 + 推理 + 极致低延迟推理）。

## Groq 3 LPU 单芯片 vs 机柜

| 项目 | 单 LPU | **Groq 3 LPX 机柜** |
|------|--------|---------------------|
| 芯片数 | 1 | **256** |
| 片上 SRAM | 512 MB | **128 GB** |
| SRAM 带宽 | 160 TB/s | **40 PB/s** |
| 互联 | GroqSync 1 TB/s | **640 TB/s** |
| INT8 算力 | 2,500 TOPS | ~640,000 TOPS |
| TDP | ~300 W | ~80 kW |
| 适用 | 单模型推理 | **多模型 / agentic** |

> **128 GB SRAM 聚合 ≈ 32 颗 H100 80GB 显存聚合**，但**延迟低 100×**（纳秒级 vs 微秒级 HBM）。

## Groq 3 LPX vs NVIDIA H100 / Rubin R200（推理对比）

| 指标 | H100 (SXM) | Rubin R200 | **Groq 3 LPX** |
|------|------------|------------|-----------------|
| 显存/聚合 SRAM | 80 GB HBM | 288 GB HBM4 | **128 GB SRAM** |
| 带宽 | 3.35 TB/s | 22 TB/s | **40 PB/s** |
| 延迟 | 微秒级 | 微秒级 | **纳秒级**（1000× 优） |
| FP8 算力（机柜/单卡） | ~3,958 TFLOPS | 50 PFLOPS | ~640 PFLOPS |
| **TTFT (首 Token)** | ~200ms | ~100ms | **< 20ms** |
| **TPOT (单 Token)** | ~30ms | ~15ms | **< 5ms** |
| perf/W | 1× (基准) | ~3× | **35×** |
| 适用 | 训练 + 推理 | 训练 + 推理 | **极致低延迟推理** |

> 💡 **LPX 的核心优势是延迟**（不是绝对算力）。对于 agentic AI（1000+ 调用/秒），**TTFT < 20ms 是关键**。

## 适用场景

| 场景 | 推荐配置 |
|------|----------|
| **Agentic AI 推理** | LPX rack（**1000+ 调用/秒**） |
| **Real-time Code Generation**（Cursor / Copilot） | LPX rack |
| **万亿参数模型推理** | LPX + Rubin GPU 协同 |
| **多模型并发**（RAG、function calling） | LPX rack |
| **低延迟 search**（perplexity、You.com） | LPX rack |

## 软件生态

- **GroqWare**（收购后改名为 **NVIDIA Groq SDK**）
- **NVIDIA NIM + LPX backend**
- **vLLM 0.8+ Groq backend**（推测）
- **OpenAI API 兼容层**（兼容现有 LLM 应用）
- **LangChain / LlamaIndex** 集成

## 价格（推测）

| 项目 | 价格 |
|------|------|
| **LPX Rack（256 颗）** | **$8M-10M / 机柜**（推测） |
| **每月运营成本** | ~$300K-500K（含电力、散热） |
| **每美元推理成本** | **比 H100 低 50-70%**（按 35× perf/W 折算） |

> **LPX 不是替代 GPU，而是补充 GPU**：在 agentic AI 等**延迟敏感**场景，LPX 是唯一选择；在 cost-sensitive 大规模推理，Rubin R200 更经济。

## 厂商信息

| 项目 | 内容 |
|------|------|
| **原厂商** | Groq Inc.（2026-Q1 被 NVIDIA 收购） |
| **现厂商** | **NVIDIA Corporation**（子公司） |
| **首次发布** | 2026 H2（Vera Rubin 平台同代） |
| **产品页** | https://www.nvidia.com/en-us/data-center/lpx/ |
| **API 服务** | NVIDIA GroqCloud（合并自 GroqCloud） |
| **收购金额** | ~$200 亿 |

## 相关产品

- [Groq LPU (v1)](/docs/cards/others/groq-lpu) - 原 Groq 1 代 LPU
- [NVIDIA Rubin R200](/docs/cards/nvidia/rubin-r200) - Vera Rubin GPU（协同产品）
- [Google TPU 8i](/docs/cards/google/tpu-8i) - 推理 ASIC 对标
- [Cerebras WSE-3](/docs/cards/cerebras/wse-3) - 大模型推理对标
- [完整对比表](/docs/comparison)
