---
id: rubin-cpx
title: NVIDIA Rubin CPX (Context Processing Unit)
sidebar_label: NVIDIA Rubin CPX
description: NVIDIA Rubin CPX 详尽规格：128GB GDDR7、30 PFLOPS FP4、2 TB/s 带宽、长上下文推理专用、Vera Rubin NVL144 CPX 平台、2026 H2 出货。
keywords: [NVIDIA Rubin CPX, CPX, Context Processing Unit, 长上下文推理, GDDR7, Vera Rubin, NVL144, 推理专用 GPU]
---

# NVIDIA Rubin CPX (Context Processing Unit)

## 产品概述

**NVIDIA Rubin CPX**（全称 **Rubin Context Processing Unit**）是 NVIDIA 于 **2025年9月9日** 发布的**业界首款专为超长上下文 AI 推理设计的 GPU**，**2026 年下半年出货**。采用**单片式（Monolithic）设计**，配备 **128GB GDDR7** 内存，FP4 算力达 **30 PFLOPS**，内存带宽仅 **2 TB/s**——刻意为上下文处理阶段（Compute-bound）优化，而非生成阶段（Memory-bandwidth-bound）。

Rubin CPX 与 **Rubin GPU**（负责生成阶段）和 **Vera CPU**（负责调度）配合，组成**解耦式推理架构**。在 **Vera Rubin NVL144 CPX 机架**中，144 颗 CPX + 144 颗 Rubin GPU + 36 颗 Vera CPU 提供 **8 EFLOPS** 总算力，是 GB300 NVL72 的 **7.5×**。

## 核心规格

| 项目 | 参数 |
|------|------|
| **架构** | Rubin（CPX 专用变体） |
| **制程** | TSMC 3NP（推测） |
| **封装** | 单片式（Monolithic），非 MCM |
| **显存** | **128 GB GDDR7**（消费级显存，非 HBM） |
| **显存带宽** | **2 TB/s** |
| **FP4（NVFP4）** | **30 PFLOPS**（稀疏，官方标称） |
| **FP8 / FP16** | 未公开 |
| **注意力加速** | **3×（vs GB300 NVL72）** |
| **TDP** | **~500–600W**（推测，待官方确认） |
| **板卡形态** | 独立 GPU（与 Rubin GPU 配对使用） |
| **发布时间** | **2025-09-09（发布）** |
| **出货时间** | **2026 H2** |

> ⚠️ **设计哲学**：CPX 的 2 TB/s 带宽远低于 HBM 方案（B200: 8 TB/s，Rubin R200: 22 TB/s），因为**上下文处理阶段是 Compute-bound**（算力瓶颈），而非 Memory-bandwidth-bound（生成阶段）。低带宽 GDDR7 大幅降低成本。

## 解耦式推理架构

| 阶段 | 执行单元 | 瓶颈类型 | CPX 角色 |
|--------|----------|----------|----------|
| **上下文阶段**（Context / Pre-fill） | **Rubin CPX** | Compute-bound | 处理 1M+ token 输入 |
| **生成阶段**（Generation / Decode） | **Rubin GPU** | Memory-bandwidth-bound | 逐 token 生成输出 |
| **调度/预处理** | **Vera CPU** | I/O bound | 请求调度 + KV Cache 管理 |

**传统方案**（GB200/B200）：同一 GPU 处理两阶段，上下文阶段浪费高带宽内存。
**CPX 方案**：专用 CPX 处理上下文，Rubin GPU 专注生成，**总吞吐量提升 6.5×**（NVIDIA 官方数据）。

## Vera Rubin NVL144 CPX 机架

| 项目 | 参数 |
|------|------|
| **CPX GPU 数** | 144 |
| **Rubin GPU 数** | 144 |
| **Vera CPU 数** | 36 |
| **总 FP4 算力** | **8 EFLOPS** |
| **总高带宽内存** | **100 TB** |
| **总内存带宽** | **1.7 PB/s** |
| **对比 GB300 NVL72** | 算力 **7.5×**，内存容量 **~14×** |
| **组网** | Quantum-X800 InfiniBand / Spectrum-X 以太网 + ConnectX-9 |
| **调度软件** | **NVIDIA Dynamo** 平台 |

## 与 Rubin R200 对比

| 指标 | Rubin CPX | Rubin R200（训练 GPU） |
|------|--------------|----------------------|
| 定位 | **推理上下文专用** | 训练 + 推理通用 |
| 显存 | 128GB GDDR7 | 288GB HBM4 |
| 带宽 | 2 TB/s | 22 TB/s |
| FP4 算力 | 30 PFLOPS | 50 PFLOPS（稀疏） |
| 设计 | 单片式 | 6 芯片 MCM |
| TDP | ~500–600W（推测） | ~1,800W |
| 成本 | **低**（GDDR7 vs HBM4） | 高 |

## 适用场景

- ✅ **超长上下文推理**（1M+ token，代码生成、视频理解）
- ✅ **多轮对话系统**（Context 阶段吞吐量 critical）
- ✅ **RAG（检索增强生成）**（大量文档输入）
- ✅ **推理专用集群**（与训练集群分离）
- ❌ 大模型训练（非目标场景）
- ❌ 高带宽需求工作负载（生成阶段仍由 Rubin GPU 处理）

## 投资回报率（ROI）

NVIDIA 官方数据（SemiAnalysis 引用）：
- **单机架（NVL144 CPX）**：~$50M
- **年收入贡献**：$1.5B–2.5B（推理即服务）
- **ROI**：**30–50×**

## 相关卡

- [NVIDIA Rubin R200](/docs/cards/nvidia/rubin-r200) - 同代训练/推理通用 GPU
- [NVIDIA B300 Ultra](/docs/cards/nvidia/b300-ultra) - 上代旗舰（CPX 对比基准）
- [NVIDIA GB300](/docs/cards/nvidia/gb300) - 机柜级上代产品
- [NVIDIA Vera CPU](/docs/cards/nvidia/vera-cpu) - CPX 平台配套 CPU

## 参考资料

- [NVIDIA 官方博客：Rubin CPX 发布](https://developer.nvidia.com/blog/nvidia-rubin-cpx-accelerates-inference-performance-and-efficiency-for-1m-token-context-workloads/)
- [NVIDIA 新闻：Rubin CPX 发布](https://nvidianews.nvidia.com/news/nvidia-unveils-rubin-cpx-a-new-class-of-gpu-designed-for-massive-context-inference)
- [SemiAnalysis：Rubin CPX 深度解析](https://newsletter.semianalysis.com/p/another-giant-leap-the-rubin-cpx-specialized-accelerator-rack)
