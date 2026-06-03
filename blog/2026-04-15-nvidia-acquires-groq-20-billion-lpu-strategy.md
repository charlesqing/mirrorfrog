---
slug: nvidia-acquires-groq-20-billion-lpu-strategy
title: 'NVIDIA 200 亿美元收购 Groq：LPU 正式进入 NVIDIA 生态'
authors: [aicomputecards]
tags: [strategy, news]
description: 2026-Q1 NVIDIA 以约 200 亿美元全资收购 Groq，Groq 3 LPU 重命名为 NVIDIA Groq 3 LPX，作为 Vera Rubin 平台的超低延迟推理 co-processor，TTFT < 20ms。
---

2026 年 Q1，AI 芯片行业最大的新闻之一：**NVIDIA 以约 200 亿美元全资收购 Groq**。这意味着 Groq 的 LPU 架构正式成为 NVIDIA 算力版图的一部分，与 GPU 形成互补。本文将详细分析这次收购的战略意义。

{/* truncate */}

## 收购时间线

| 时间 | 事件 | 详情 |
|------|------|------|
| **2024-2025** | Groq 独立运营 | LPU v1 商用，GroqCloud API 服务 |
| **2025-12** | NVIDIA 投资 | NVIDIA 投资 Groq 2.5 亿美元（首次合作） |
| **2026-Q1** | **全资收购** | **NVIDIA 以约 200 亿美元全资收购 Groq** |
| **2026 H2** | 产品整合 | Groq 3 LPU 重命名为 **NVIDIA Groq 3 LPX** |
| **2026 H2+** | 协同生态 | LPX rack 作为 Rubin GPU 的 co-processor |

> **收购金额细节**：根据多方信源，NVIDIA 以"现金 + 股权"组合形式收购 Groq，对应估值约 $20B。Groq 创始团队（Jonathan Ross 等）部分留任，继续负责 LPU 产品线。

## 为什么 NVIDIA 要收购 Groq？

NVIDIA 在 GPU 算力领域已经**绝对领先**（CUDA 生态 + Rubin 平台 + 90% 数据中心 AI 市场份额），但有一个**明显短板**：

- **超低延迟推理**（TTFT < 50ms）
- **Agentic AI**（1000+ 调用/秒）
- **Deterministic Latency**（可预测的延迟）

这些场景下，传统 GPU 即使是 H100/Rubin R200，也受限于：
- HBM 访问延迟（~200ns vs SRAM 1ns）
- CUDA 调度不确定性
- 算子融合的复杂度

**Groq LPU 完美补全了 NVIDIA 的能力栈**。

## Groq 3 LPX 机柜规格

收购完成后，Groq 3 LPU 重命名为 **NVIDIA Groq 3 LPX**，作为 Vera Rubin 平台的 co-processor：

| 项目 | 参数 |
|------|------|
| **芯片数（机柜）** | **256 颗 Groq 3 LPU** |
| **片上 SRAM（机柜）** | **128 GB 聚合** |
| **SRAM 带宽（机柜）** | **40 PB/s** |
| **互联** | GroqSync + NVLink-Network，**640 TB/s** |
| **INT8 算力（机柜）** | ~640,000 TOPS |
| **FP8 算力（机柜）** | ~640 PFLOPS |
| **BF16 算力（机柜）** | ~320 PFLOPS |
| **TDP（机柜）** | ~80 kW |
| **perf/W** | **35× H100**（官方） |
| **TTFT（首 Token 延迟）** | **< 20ms** |
| **TPOT（单 Token 延迟）** | **< 5ms** |

> **40 PB/s SRAM 带宽 ≈ 5,000× H100 HBM 带宽**（H100 80GB HBM3 = 3.35 TB/s）。这是 Groq LPU **极致低延迟**的核心秘密。

## 收购后的产品矩阵

NVIDIA 现在提供**全场景 AI 算力覆盖**：

| 场景 | 推荐产品 |
|------|----------|
| **大规模训练**（100B+ 模型） | Rubin NVL72 / NVL576 |
| **高吞吐推理** | B300 Ultra / Rubin R200 |
| **超低延迟推理** | **Groq 3 LPX** |
| **Agentic AI**（1000+ 调用/秒） | **Groq 3 LPX rack** |
| **Real-time Code Gen**（Copilot） | **Groq 3 LPX rack** |
| **万亿参数推理** | Rubin R200 + Groq 3 LPX 协同 |

## 对 AI 行业的影响

### 1. 超低延迟推理市场洗牌

收购前，超低延迟推理市场有三家玩家：

- **Groq**（SRAM + 编译器）
- **Cerebras**（WSE 大晶圆 + 40+ GB SRAM）
- **SambaNova**（RDU 可重构数据流）

收购后：

- **Groq LPX** 归 NVIDIA（最大生态、最强客户）
- **Cerebras WSE-4**（2027）即将 IPO
- **SambaNova** SN50 独立运营

**Cerebras 的 IPO 时机变得更加重要**——需要在 NVIDIA 整合 Groq 之前抢占市场。

### 2. Agentic AI 加速爆发

2026 年 Agentic AI 是 LLM 应用的下一个爆发点：

- 单次 Agent 调用：~500ms-2s
- 复杂任务：100+ 次连续调用
- 用户体验：< 200ms 响应

**Groq 3 LPX 的 TTFT < 20ms 是 Agentic AI 的关键使能技术**。

### 3. 客户迁移

Groq 原本的客户：

- **OpenAI**：部分推理负载
- **Anthropic**：Claude 推理
- **Meta**：Llama 推理
- **Mistral**：推理

这些客户**继续使用 LPX**，但合同关系从 Groq Inc. 变为 NVIDIA Corp.。

## LPX 的局限

Groq 3 LPX 并非万能：

| 局限 | 影响 |
|------|------|
| **单芯片 SRAM 仅 512 MB** | 大模型需 32+ 颗芯片 |
| **不支持训练** | 只能推理 |
| **软件生态不如 CUDA** | 模型迁移成本 |
| **机柜级 $8-10M 价格** | 中小客户难以承担 |
| **不支持 fine-tuning** | 推理优化空间有限 |

因此，**LPX 不是替代 GPU，而是补充 GPU**：
- 中小模型、低成本：GPU (L4 / T4)
- 大模型训练：GPU (H100 / B300)
- 大模型推理：GPU (H200 / B300)
- **超低延迟大模型推理：LPX**

## 详细产品页

- [NVIDIA Groq 3 LPX 完整规格](/docs/cards/nvidia/groq-3-lpx)
- [Groq LPU (v1, 收购前)](/docs/cards/others/groq-lpu)
- [LPU 架构详解](/docs/architectures/arch-lpu)
- [NVIDIA Rubin R200](/docs/cards/nvidia/rubin-r200)
- [Cerebras WSE-3](/docs/cards/cerebras/wse-3)（竞争对手）

## 总结

NVIDIA 收购 Groq 是 2026 年 AI 芯片行业最重大的事件之一：

1. **补全 NVIDIA 算力版图**——从"训练+推理"扩展到"训练+推理+超低延迟推理"
2. **Groq 团队 + 客户**全部并入 NVIDIA
3. **GroqCloud API 继续运营**（OpenAI 兼容）
4. **Vera Rubin 平台**成为全场景 AI 算力终极平台
5. **AI 行业进入"机柜级"时代**：GPU 机柜 + LPU 机柜协同

**NVIDIA = GPU + LPU + 互联 + 软件 = 完整 AI 算力生态**
