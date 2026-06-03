---
slug: google-tpu-8t-8i-split-training-inference
title: 'Google TPU 8t + 8i：首次拆分训练/推理的 TPU 时代'
authors: [aicomputecards]
tags: [product-launch, strategy]
description: 2026-04-22 Google 公布 TPU 8t（训练专用 216GB HBM）+ TPU 8i（推理专用 288GB HBM），首次将 TPU 拆分为训练/推理两条独立产品线，集成 Arm Axion CPU。
---

2026 年 4 月 22 日，Google 在 Cloud Next 大会上公布了 **TPU 8t + TPU 8i**——**首次将 TPU 拆分为训练/推理两条独立产品线**。TPU 8t 专注训练，TPU 8i 专注推理。这是 Google 应对 AI 推理时代的关键产品调整。

{/* truncate */}

## 为什么要拆分 TPU？

过去 7 代 TPU（v1 → v7 Ironwood）都是**训练/推理通用**的：

- v4-v6e：训练为主、推理辅助
- v7 Ironwood：开始偏向推理，但仍是通用

但 2025-2026 年的 AI 行业发生根本变化：

1. **训练需求**：仅几家头部公司（OpenAI、Anthropic、Google DeepMind、Meta、xAI）需要
2. **推理需求**：**所有 AI 应用都需要**，是 100× 更大的市场
3. **推理优化方向**：**与训练截然不同**
   - 训练：算力 + 互联优先（compute-bound）
   - 推理：显存 + 带宽 + 散热灵活优先（memory-bound + TCO 敏感）

Google 因此决定**将 TPU 拆分为两条产品线**：

| 产品 | 定位 | 核心优化 |
|------|------|----------|
| **TPU 8t** | 训练专用 | 算力 + 互联 + 集成 Axion CPU |
| **TPU 8i** | 推理专用 | 显存 + 带宽 + 散热灵活 |

## TPU 8t：训练专用

| 项目 | 参数 |
|------|------|
| 架构 | TPU 8t（Trillium 2） |
| 形态 | **训练专用** |
| BF16 算力（密集） | ~3,500 TFLOPS |
| FP8 算力（密集） | ~7,000 TFLOPS |
| HBM 容量 | **216 GB** |
| HBM 带宽 | **6,528 GB/s** |
| ICI 互联 | 1,400 GB/s（双向） |
| 集成 CPU | **Arm Axion（Google 自研，64 核）** |
| Pod 规模 | **9,216 芯片** |
| 拓扑 | 3D Torus |
| 散热 | 液冷 |

> **Arm Axion 是 Google 自研的 64 核 ARM CPU**，首次进入 TPU 节点。这让 TPU 8t 节点成为 **TPU + Axion CPU 协同系统**，对标 NVIDIA Vera CPU。

## TPU 8i：推理专用

| 项目 | 参数 |
|------|------|
| 架构 | TPU 8i（Trillium 2） |
| 形态 | **推理专用** |
| BF16 算力（密集） | **~5,500 TFLOPS** |
| FP8 算力（密集） | ~11,000 TFLOPS |
| INT8 算力 | ~22,000 TOPS |
| HBM 容量 | **288 GB** |
| HBM 带宽 | **8,601 GB/s** |
| 散热 | **风冷 / 液冷均可** |
| Pod 规模 | 256 芯片 |

> **TPU 8i 单卡 288GB HBM = 当前最大显存推理 ASIC**。单卡可装 FP16 70B 模型（不需张量并行），非常适合**长上下文 RAG、Agentic AI**。

## TPU 8t vs 8i 关键差异

| 指标 | TPU 8t（训练） | **TPU 8i（推理）** |
|------|----------------|---------------------|
| 定位 | 训练 | **推理** |
| BF16 算力 | ~3,500 TFLOPS | **~5,500 TFLOPS**（更强） |
| HBM 容量 | 216 GB | **288 GB**（更大） |
| HBM 带宽 | 6,528 GB/s | **8,601 GB/s**（更高） |
| 散热 | 液冷 | **风冷/液冷** |
| Pod 规模 | 9,216 颗 | 256 颗 |
| 集成 CPU | Arm Axion | 无（独立） |
| 价格 | 高 | **中** |

> **拆分目的**：训练强调算力 + 互联，推理强调显存 + 带宽 + 散热灵活性。

## TPU 8i 推理范式优化

TPU 8i 专门为推理场景优化：

| 优化方向 | 内容 |
|----------|------|
| **超低延迟** | **TTFT < 100ms**（首 Token 延迟） |
| **高吞吐** | 10,000+ tok/s（70B 模型 FP8） |
| **Long-context KV** | **288GB 完整保留 1M+ token 上下文** |
| **MoE 推理** | Expert Parallel 原生支持 |
| **Speculative Decoding** | 内部 speculative 加速 |
| **Batching** | Continuous batching + PagedAttention |
| **Continuous KV Cache** | **KV Cache 跨请求共享**（同 prefix 优化） |

## TPU 8t 训练范式优化

TPU 8t 专门为训练场景优化：

| 优化方向 | 内容 |
|----------|------|
| **MoE 训练** | Expert Parallel 原生支持（DeepSeek / Mixtral 风格） |
| **Long-context 训练** | 1M+ token 上下文训练优化 |
| **RLHF / 后训练** | Online RL（DPO / PPO / GRPO）原生优化 |
| **多模态训练** | 视觉-语言联合训练（ViT + LLM 同步） |
| **AXIOM** | Arm Axion CPU 协同（数据预处理 / 权重初始化） |

## TPU 8i 推理服务定价

| 实例 | 每小时价格（推测） |
|------|-------------------|
| **TPU 8i v6e-equivalent** | ~$3-5 / chip |
| **TPU v7 Ironwood** | ~$6-8 / chip |
| **TPU 8i vs TPU v7** | **+50%** 价格 / **+150%** 算力 |

> **TPU 8i 单美元 BF16 算力比 TPU v7 Ironwood 高 70%**（按 2.4× 算力 / 1.5× 价格）。

## 软件生态

### TPU 8t
- **JAX 0.5+**：Google 主力训练框架
- **PyTorch/XLA 2.5+**：PyTorch 兼容
- **TensorFlow 2.17+**：旧框架
- **Paxml / Orbax**：Google 内部 LLM 训练栈
- **MaxText**：Google 参考实现

### TPU 8i
- **JAX 0.5+**：推理
- **PyTorch/XLA 2.5+**：推理
- **vLLM 0.8+**（TPU 后端）：低延迟推理
- **Vertex AI Inference**：Google 托管推理服务
- **Gemini API**：内部最大用户

## 与同期竞品对比

| 指标 | TPU 8t | TPU 8i | NVIDIA B300 Ultra | Groq 3 LPX |
|------|--------|--------|-------------------|------------|
| 定位 | 训练 | 推理 | 训练+推理 | 超低延迟推理 |
| HBM/SRAM | 216 GB HBM | 288 GB HBM | 288 GB HBM3e | 128 GB SRAM |
| 带宽 | 6.5 TB/s | **8.6 TB/s** | 8 TB/s | **40 PB/s** |
| BF16 算力 | 3.5 PF | 5.5 PF | 3.5 PF (FP8 dense) | 320 PF (机柜) |
| 互联 | 3D Torus | 3D Torus | NVLink 5 | GroqSync |
| 散热 | 液冷 | **风冷** | 液冷 | 液冷 |
| 客户 | Google DeepMind | Gemini / Vertex AI | AWS / Azure | NVIDIA 客户 |

## 详细产品页

- [Google TPU 8t 完整规格](/docs/cards/google/tpu-8t)
- [Google TPU 8i 完整规格](/docs/cards/google/tpu-8i)
- [Google TPU v7 Ironwood（上一代）](/docs/cards/google/tpu-ironwood)
- [TPU 架构详解](/docs/architectures/arch-tpu)
- [NVIDIA B300 Ultra](/docs/cards/nvidia/b300-ultra)

## 总结

Google TPU 8t + 8i 拆分是 AI 推理时代的标志性事件：

1. **首次拆分训练/推理 TPU**——TPU 进入"专用化"时代
2. **TPU 8i 288GB HBM**——单卡可装 70B 模型
3. **TPU 8i 风冷**——降低数据中心部署门槛
4. **Arm Axion 集成**——Google 自研 CPU 进入 TPU
5. **JAX 训练范式**——Google 押注 JAX 作为下一代训练标准

**Google 现在有"全场景 AI 算力覆盖"**：
- 训练：TPU 8t pod
- 通用推理：TPU 8i
- Gemini API：TPU 8i 集群
- Vertex AI：TPU 8i 商用
