---
id: mtia-450
title: Meta MTIA 450（自研 AI 加速器 · 生成式 AI 推理）
sidebar_label: MTIA 450
description: Meta MTIA 450 自研 AI 加速器：生成式 AI 推理向，FP8 7 PFLOPS / MXFP4 21 PFLOPS、288GB HBM @ 18.4 TB/s（较 MTIA 400 翻倍）、1400W TDP，2027 年初量产。
keywords: [Meta MTIA, MTIA 450, 自研芯片, 生成式AI, GenAI, 推理加速器, MX4, HBM, Broadcom, 内存带宽]
---

# Meta MTIA 450（自研 AI 加速器 · 生成式 AI 推理）

## 产品概述

**Meta MTIA 450** 是 Meta 自研 AI 加速器 MTIA 家族中**专为生成式 AI 推理优化的型号**，于 **2026 年 3 月 11 日**与 MTIA 300 / 400 / 500 一同公布，计划 **2027 年初量产**。

Meta 对 MTIA 450 的定位表述非常直接——**推理优先（inference-first）**。Meta 的原话是：主流芯片通常先为最严苛的负载（大规模 GenAI 预训练）而设计，再以较低性价比的方式套用到 GenAI 推理等其他负载；**MTIA 反其道而行，先为 GenAI 推理做优化**，随后再按需支持包括排序推荐训练与推理、以及 GenAI 训练在内的其他负载。这样可以让 MTIA 始终紧贴预期中最增长的 GenAI 推理需求。

MTIA 450 的核心变化是**内存带宽翻倍**。相对同门 MTIA 400 的 **9.2 TB/s**，MTIA 450 提升到 **18.4 TB/s**。Meta 称这一带宽"**远高于现有领先商业产品**"，媒体据此对照的是 NVIDIA H100 / H200。这一取舍有明确的物理依据：Transformer 推理的 decode 阶段瓶颈在**内存带宽而非原始 FLOPs**，而主流 GPU 为最大化预训练 FLOPs 架构，携带了 Meta 认为推理负载并不需要的成本与功耗。

在低精度计算上，MTIA 450 支持 **MX4** 格式，Meta 称其 MX4 FLOPs 达到 **FP16/BF16 的 6 倍**，并通过**混合低精度计算**避免软件层面的数据类型转换开销。此外 Meta 还提到，MTIA 具备针对 **FlashAttention** 与**混合专家（MoE）前馈网络计算**的硬件加速，以及为推理协同设计的定制低精度数据类型。

架构与部署上，MTIA 450、400、500 **使用相同的机箱、机架与网络基础设施**——每一代新芯片都能直接插入既有物理footprint，实现轻松互换。这正是 Meta 所称的"模块化"，也是其支撑**约六个月一代**节奏的底层原因。

## 核心规格

| 项目 | 参数 |
|------|------|
| **架构** | MTIA 450（面向生成式 AI 推理的自研加速器，基于 MTIA 400 演进） |
| **制程** | 未公开 |
| **显存** | 288 GB |
| **显存类型** | 未公开 |
| **显存带宽** | 18.4 TB/s |
| **FP8** | 7 PFLOPS |
| **FP4** | 21 PFLOPS |
| **FP16** | 未公布 |
| **INT8** | 未公布 |
| **TDP** | 1400 W |
| **互联** | Scale-up 域 72 颗 @ 1.2 TB/s（单向）；scale-out 100 GB/s（单向） |
| **发布** | 2026-03-11 发布；2027 年初量产 |

> 📌 **数据格式口径**：Meta 官方表格将算力标注为 **FP8/MX8 7 PFLOPS**、**MX4 21 PFLOPS**、**BF16 3.5 PFLOPS**。本表 FP4 一栏对应 Meta 口径的 **MX4**（块缩放 4-bit 格式，非 FP4）；Meta 未公布该型号的 FP16/BF16 绝对算力对外披露口径之外的可采信值，故 FP16 一栏记为未公布。
>
> 📌 **单向带宽**：表中 scale-up / scale-out 带宽均为**单向（unidirectional）**口径。
>
> 📌 **制程**：Meta 与博通联合开发（覆盖芯片设计、先进封装与网络），但官方未公布具体工艺节点与封装形式。

## 关键特性

### 带宽优先的推理架构

- **HBM 带宽较 MTIA 400 翻倍**（9.2 TB/s → 18.4 TB/s），Meta 明确对标并称超越 NVIDIA H100 / H200
- HBM 容量与 MTIA 400 同为 **288 GB**——带宽翻倍而容量不变，说明 Meta 的资源明确压向**带宽**而非容量
- 这一取舍直接服务于 decode 阶段：每生成一个 token 都需要从内存读取模型权重，带宽不足时算力被空转

### MX4 混合低精度计算

- 原生 **MX4** 支持，Meta 称 MX4 FLOPs 为 **FP16/BF16 的 6 倍**
- **混合低精度计算**避免软件层面的数据类型转换开销
- 窄精度格式在降低推理所需算力的同时，Meta 称不会显著损害模型质量

### 推理专用硬件加速

- **FlashAttention 硬件加速**
- **混合专家（MoE）前馈网络计算硬件加速**
- 面向推理**协同设计**的定制低精度数据类型

### 与 MTIA 400 的代际对比

| 指标 | MTIA 400 | **MTIA 450** | 变化 |
|------|----------|--------------|------|
| 负载定位 | 通用（兼顾 R&R 与 GenAI） | **GenAI 推理优先** | 窄化优化 |
| FP8/MX8 算力 | 6 PFLOPS | **7 PFLOPS** | +17% |
| MX4 算力 | 12 PFLOPS | **21 PFLOPS** | 1.75× |
| HBM 带宽 | 9.2 TB/s | **18.4 TB/s** | **2×** |
| HBM 容量 | 288 GB | 288 GB | 持平 |
| TDP | 1,200 W | 1,400 W | +17% |
| Scale-up 域 | 72 颗 | 72 颗 | 持平 |
| 状态 | 实验室测试完成 | 2027 年初量产 | — |

> **关键洞察**：MTIA 450 相对 MTIA 400 的 **MX4 算力提升 1.75 倍，而 HBM 带宽提升整整 2 倍且 TDP 仅增 17%**。Meta 把主要增量预算投在数据搬运能力而非算力上——这与其"推理瓶颈在带宽不在 FLOPs"的判断完全一致。

### 路线图中的位置

Meta 称从 MTIA 300 到 MTIA 500，**HBM 带宽提升 4.5 倍、算力 FLOPs 提升 25 倍**。MTIA 450 是这条曲线上的 GenAI 推理主力，而更高端的 MTIA 500 在此基础上**再加 50% HBM 带宽**并提供最高 **80% 更多 HBM 容量**。

## 适用场景

- ✅ **生成式 AI 推理**（Meta 的首要定位，兼顾未来其他负载）
- ✅ **大规模 decode 密集型服务**（带宽优先设计直接对口）
- ✅ **混合专家（MoE）模型服务**（MoE FFN 硬件加速）
- ✅ **长上下文推理**（288GB 容量 + 18.4 TB/s 带宽）
- ✅ **Meta 自有基础设施**（仅自用，不对外销售）
- ❌ 大规模 GenAI 预训练（主流 GPU 仍为 Meta 训练主力）
- ❌ 对外零售 / 第三方采购

## 相关产品对比

- [Meta MTIA 400](/docs/cards/meta/mtia-400) — 前代通用型号，FP8 6 PFLOPS / 288GB @ 9.2 TB/s
- [Meta MTIA 300](/docs/cards/meta/mtia-300) — 同代 R&R 训练向型号
- [NVIDIA H200](/docs/cards/nvidia/h200) — Meta 对标带宽的商业产品
- [Microsoft Maia 200](/docs/cards/microsoft/maia-200) — 云厂商自研推理芯片
- [AWS Trainium3](/docs/cards/aws/trainium-3) — 云自研训练 / 推理芯片

## 数据来源

- [Meta 官方新闻稿：Expanding Meta's Custom Silicon to Power Our AI Workloads](https://about.fb.com/news/2026/03/expanding-metas-custom-silicon-to-power-our-ai-workloads/) — MTIA 450 与 500 为 GenAI 推理优先优化、模块化设计可插入既有基础设施、每六个月或更短迭代周期、PyTorch / vLLM / Triton / OCP 标准
- [Meta 官方技术博客：Four Chips in Two Years: Scaling AI Experiences for Billions](https://ai.meta.com/blog/meta-mtia-scale-ai-chips-for-billions/) — MTIA 300/400/450/500 完整规格表：TDP 1400 W、HBM 18.4 TB/s / 288 GB、FP8/MX8 7 PFLOPS、MX4 21 PFLOPS、BF16 3.5 PFLOPS、scale-up 域 72、scale-up 1.2 TB/s、scale-out 100 GB/s、FlashAttention 与 MoE FFN 硬件加速、HBM 带宽 4.5 倍与算力 25 倍提升
- [Tom's Hardware：Meta reveals four new MTIA chips built for AI inference](https://www.tomshardware.com/tech-industry/semiconductors/meta-reveals-four-new-mtia-chips-built-for-ai-inference) — MTIA 450 HBM 带宽较 MTIA 400 翻倍且"远高于现有领先商业产品"、MX4 达 FP16/BF16 的 6 倍、2027 年初量产、相同机箱 / 机架 / 网络基础设施
- [The Decoder：Meta unveils four generations of custom AI chips](https://the-decoder.com/meta-unveils-four-generations-of-custom-ai-chips-to-cut-inference-costs-for-billions-of-users) — 规格表交叉核对、MTIA 400 实验室测试完成并部署数据中心、数十万颗 MTIA 已部署于有机内容与广告推理
