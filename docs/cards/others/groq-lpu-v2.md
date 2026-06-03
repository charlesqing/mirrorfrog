---
id: groq-lpu-v2
title: Groq LPU v2 (LPU Inference, 2024)
sidebar_label: Groq LPU v2
description: Groq LPU v2 详尽规格：4nm、188 TOPS INT8、80GB SRAM、15 TB/s 带宽、TSMC 4nm、200W、2024 LPU 旗舰。
keywords: [Groq LPU v2, Groq Language Processing Unit, 4nm, 80GB SRAM, 15 TB/s, LPU 第二代, GroqCloud]
---

# Groq LPU v2 (LPU Inference, 2024)

## 产品概述

**Groq LPU v2**（非官方代号）是 Groq 第二代 LPU 推理芯片，**2024-Q3 发布**，**TSMC 4nm 制程**，**80GB SRAM** 内存（**业界最大 SRAM 容量**），**15 TB/s 内存带宽**（**业界最高 LPU 带宽**），**188 TOPS INT8** 算力，**TDP 200W**。是 Groq 在 **NVIDIA 收购前**的最后一代独立 LPU 产品，配套 **GroqCloud** LPU 云服务。

**代际演进**：
- **LPU v1**（2022）：三星 14nm，230MB SRAM，80 TOPS INT8 — 现有 `others/groq-lpu.md`
- **LPU v2**（2024-Q3）：TSMC 4nm，**80GB SRAM**，188 TOPS INT8 — **本页**
- **LPU v3 LPX**（2026，NVIDIA 收购后）：256 颗/rack 40 PB/s SRAM，640 TB/s 域内 — 现有 `nvidia/groq-3-lpx.md`

## 核心规格

| 项目 | 参数 |
|------|------|
| **架构** | Groq LPU v2（deterministic dataflow） |
| **制程** | **TSMC 4nm** |
| **内存类型** | **SRAM**（片上）|
| **SRAM 容量** | **80 GB**（**业界最大**）|
| **内存带宽** | **15 TB/s**（**业界最高 LPU 带宽**）|
| **INT8** | **188 TOPS** |
| **BF16** | 94 TFLOPS |
| **FP16** | 94 TFLOPS |
| **TDP** | **200 W**（**业界能效比最高的推理芯片之一**）|
| **板卡形态** | PCIe Gen5 ×16 |
| **互连** | GroqLink（自研，类 NVLink）|
| **GroqLink 带宽** | 900 GB/s（4 卡域内）|
| **量产** | 2024-Q3 |
| **单价** | ~$20,000-30,000 |

## LPU 架构原理

| 维度 | 传统 GPU | Groq LPU |
|------|----------|----------|
| **计算范式** | 异步、并行、乱序 | **同步、数据流、确定性** |
| **执行模型** | CUDA cores + Tensor cores | **Streaming Architecture** |
| **延迟** | 受 HBM 限制（纳秒级 + 排队） | **确定性（无排队，纳秒级）** |
| **吞吐量** | 高（受 HBM 限制） | **极高（SRAM 0 等待）** |
| **TTFT** | 100-500ms（排队） | **< 5ms**（无排队）|
| **TPOT** | 30-50ms | **5-10ms**（10× 优势）|
| **适合模型** | 大模型训练 | **大模型推理（实时）** |

### Deterministic Dataflow 优势

```
传统 GPU 推理：
  输入 → HBM 排队 → 计算 → HBM 输出
  延迟: ~100ms（HBM 访问 + 调度）

Groq LPU 推理：
  输入 → 80GB SRAM（已存权重）→ 计算 → 输出
  延迟: ~5ms（SRAM 0 等待）
```

**关键特性**：
- 权重一次性加载到 80GB SRAM
- 推理时**无需 HBM 访问**（仅 SRAM）
- **同步执行**（所有 chip 同一时钟）
- **可预测延迟**（无排队抖动）

## SRAM 容量演进

| 代际 | SRAM | 适合模型 |
|------|------|----------|
| LPU v1 (2022) | 230 MB | Llama 2 7B |
| **LPU v2 (2024)** | **80 GB** | **Llama 3 70B FP8 / Llama 2 70B FP16** |
| LPU v3 LPX (2026) | 80 GB × 256 chip | 万亿参数 |

> **80GB SRAM 革命**：首次在**单芯片**上**装下 70B 参数 FP16 模型**（140GB 略超，需 FP8 70GB 装下），**无需 HBM 访问**，延迟从 100ms 降至 5ms。

## GroqCloud 服务

| 项目 | 规格 |
|------|------|
| **服务** | GroqCloud LPU Inference API |
| **API 兼容** | **OpenAI Chat Completions API 100% 兼容** |
| **模型支持** | Llama 3 70B, Mixtral 8x7B, Gemma 7B |
| **延迟** | TTFT < 5ms，TPOT 5-10ms |
| **价格** | $0.27 / 1M tokens（Llama 3 70B） |
| **客户** | Anthropic 部分推理、Cursor IDE、Vercel、Whisper 转录 |
| **状态** | **NVIDIA 收购后保留**（GroqCloud 持续运营） |

## 4 卡域内 900 GB/s

| 维度 | 规格 |
|------|------|
| **单卡 SRAM** | 80GB |
| **4 卡域内** | 320GB SRAM（合并寻址） |
| **互联带宽** | **900 GB/s** |
| **适用模型** | Llama 3 405B FP8（210GB） |
| **延迟** | 4 卡 TTFT < 10ms |
| **价格** | ~$100K（4 卡服务器） |

## 与 NVIDIA H100 对比（推理）

| 指标 | Groq LPU v2 | NVIDIA H100 | 优势 |
|------|--------------|--------------|------|
| **TTFT** | **< 5ms** | 100-300ms | **LPU 20-60×** |
| **TPOT** | 5-10ms | 30-50ms | **LPU 3-5×** |
| **TDP** | 200W | 700W | **LPU 3.5× 省电** |
| **内存** | 80GB SRAM | 80GB HBM3 | LPU 0 等待 |
| **批量吞吐** | 中 | 高 | H100 +50% |
| **价格** | ~$25K | ~$25-30K | 相当 |
| **软件** | GroqWare (小) | CUDA (大) | H100 成熟 |
| **API 兼容** | OpenAI 100% | - | LPU 杀手锏 |

> **LPU 杀手锏**：**TTFT < 5ms 是 H100 的 20-60 倍**，是 **实时 AI 推理（chatbot、code completion、语音转录）的最佳 H/W**。

## 厂商信息

| 项目 | 内容 |
|------|------|
| **公司** | Groq, Inc. |
| **创始人** | Jonathan Ross（前 Google TPU 架构师） |
| **成立** | 2016 |
| **总部** | 美国加州山景城 |
| **融资** | **$1B+**（C 轮 2024-Q2 领投：D1 Capital） |
| **2024 营收** | ~$50M |
| **代工** | TSMC 4nm |
| **GroqCloud 客户** | Anthropic 部分推理、Cursor、Vercel、Anthropic SDK |

## NVIDIA 收购

**2026-Q1** NVIDIA 宣布 **$200亿** 收购 Groq（不含 GroqCloud），Groq 团队并入 NVIDIA **Vera Rubin 平台** LPU 部门，**LPU v3 LPX** 成为 **NVIDIA Rubin 平台的机柜级 LPU 协处理器**。**GroqCloud 持续独立运营**（Jonathan Ross 留任），服务现有 OpenAI 兼容 API 客户。

## LPU 适用场景

- ✅ **实时 AI 推理**（chatbot、code completion）
- ✅ **语音转录**（Whisper Large V3 实时）
- ✅ **API 服务**（OpenAI 兼容）
- ✅ **超低延迟交易**（HFT AI 推理）
- ✅ **自动驾驶**（实时光线/物体检测）
- ❌ **AI 训练**（LPU 仅推理）
- ❌ **大 batch 推理**（GPU 吞吐更高）
- ❌ **传统深度学习**（CNN 训练）

## LPU v1 vs v2 vs v3 对比

| 指标 | LPU v1 (2022) | LPU v2 (2024-Q3) | LPU v3 LPX (2026) |
|------|---------------|------------------|--------------------|
| 制程 | 三星 14nm | TSMC 4nm | TSMC 3nm |
| SRAM | 230MB | **80GB** | 80GB × 256 chip = 20TB |
| 带宽 | 80 TB/s | **15 TB/s** | 40 PB/s（256 chip 域内） |
| INT8 | 80 TOPS | **188 TOPS** | 2.4 P TOPS (256 chip) |
| TDP | 200W | 200W | 4 kW (256 chip rack) |
| 域内 | 4 chip | 4 chip | **256 chip / rack** |
| 客户 | GroqCloud | GroqCloud + 企业 | NVIDIA Vera Rubin |
| 状态 | EOL (2025) | **量产 (2024-Q3)** | 路线图 (2026) |

## 相关卡

- [Groq LPU v1](/docs/cards/others/groq-lpu) - 第一代
- [Groq LPU v3 LPX (NVIDIA 收购后)](/docs/cards/nvidia/groq-3-lpx) - 第三代机柜
- [Cerebras WSE-3](/docs/cards/cerebras/wse-3) - 晶圆级推理
- [Lightmatter Envise](/docs/cards/others/lightmatter-envise) - 硅光推理
- [NVIDIA H100](/docs/cards/nvidia/h100) - GPU 推理对比
- [NVIDIA H200](/docs/cards/nvidia/h200) - GPU 推理对比
- [Huawei Ascend 910C](/docs/cards/huawei/ascend-910c) - 国产推理
