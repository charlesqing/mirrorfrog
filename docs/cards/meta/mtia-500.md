---
id: mtia-500
title: Meta MTIA 500（自研 AI 加速器旗舰 · GenAI 推理最高配）
sidebar_label: MTIA 500
description: Meta MTIA 500 自研 AI 加速器旗舰：生成式 AI 推理向，FP8 10 PFLOPS / MX4 30 PFLOPS、384GB HBM @ 27.6 TB/s（较 MTIA 450 再增 50%）、1700W TDP，2027 年部署。
keywords: [Meta MTIA, MTIA 500, 自研芯片, 生成式AI, GenAI, 推理加速器, MX4, HBM4, Broadcom, 旗舰]
---

# Meta MTIA 500（自研 AI 加速器旗舰 · GenAI 推理最高配）

## 产品概述

**Meta MTIA 500** 是 Meta 自研 MTIA 家族这一代路线图中的**旗舰型号**，于 **2026 年 3 月 11 日**与 MTIA 300 / 400 / 450 一同公布，计划 **2027 年大规模部署**（相比 MTIA 450 的"2027 年初量产"，MTIA 500 的时间表更靠后）。

与 MTIA 450 相同，MTIA 500 被 Meta 定位为**优先为生成式 AI 推理优化**，随后再按需支持排序推荐训练与推理、以及 GenAI 训练。相对同门 MTIA 450，MTIA 500 有两项明确升级：**HBM 带宽再增 50%**（18.4 → 27.6 TB/s），以及**最高 80% 更多的 HBM 容量**（288 GB → 384–512 GB）。这是 MTIA 500 相对前代最大的差异化。

在整条路线图的尺度上，Meta 称从 MTIA 300 到 MTIA 500，**HBM 带宽提升 4.5 倍、算力 FLOPs 提升 25 倍**，而代际发布节奏保持约**六个月一代**。MTIA 500 是这条曲线的终点：MX4 算力 30 PFLOPS、FP8/MX8 10 PFLOPS、单卡 TDP 达 1,700 W，也是 Meta 这一代唯一进入"千瓦级单芯片"区间的型号。

架构与部署上，MTIA 500 与 MTIA 400 / 450 **共用同一套机箱、机架与网络基础设施**——模块化设计使每一代新芯片可以直接插入既有物理 footprint，这也是 Meta 能支撑高频代际迭代的工程基础。

## 核心规格

| 项目 | 参数 |
|------|------|
| **架构** | MTIA 500（面向生成式 AI 推理的自研旗舰加速器） |
| **制程** | 未公开 |
| **显存** | 384 GB |
| **显存类型** | 未公开 |
| **显存带宽** | 27.6 TB/s |
| **FP8** | 10 PFLOPS |
| **FP4** | 30 PFLOPS |
| **FP16** | 未公布 |
| **INT8** | 未公布 |
| **TDP** | 1700 W |
| **互联** | Scale-up 域 72 颗 @ 1.2 TB/s（单向）；scale-out 100 GB/s（单向） |
| **发布** | 2026-03-11 发布；2027 年大规模部署 |

> 📌 **显存容量口径**：Meta 官方表格将 MTIA 500 的 HBM 容量标注为**区间值 384–512 GB**。为避免对比表取区间上限造成口径污染，本表**显存**一栏采用**官方下限 384 GB**；上限 512 GB 请见下方说明。
>
> 📌 **数据格式口径**：Meta 官方表格将算力标注为 **FP8/MX8 10 PFLOPS**、**MX4 30 PFLOPS**、**BF16 5 PFLOPS**。本表 FP4 一栏对应 Meta 口径的 **MX4**（块缩放 4-bit 格式，非 FP4）。
>
> 📌 **单向带宽**：表中 scale-up / scale-out 带宽均为**单向（unidirectional）**口径。
>
> 📌 **制程**：Meta 与博通联合开发，但官方未公布具体工艺节点与封装形式。

## 关键特性

### 带宽与容量的双重跃升

- **HBM 带宽 27.6 TB/s**，较 MTIA 450 的 18.4 TB/s **再增 50%**，较 MTIA 300 的 6.1 TB/s 为 **4.5 倍**
- **HBM 容量 384 GB 起、最高 512 GB**，较 MTIA 450 的 288 GB 最高增加 **80%**
- 带宽与容量同步扩张，说明 Meta 在这一代同时要支撑**更长上下文**与**更高并发会话数**

### MX4 混合低精度计算

- **MX4 算力 30 PFLOPS**，为 MTIA 450（21 PFLOPS）的约 **1.4 倍**、MTIA 400（12 PFLOPS）的 **2.5 倍**
- **混合低精度计算**避免软件层面的数据类型转换开销
- 沿用 Meta 的推理专用硬件加速：**FlashAttention** 与**混合专家（MoE）前馈网络计算**，以及为推理协同设计的定制低精度数据类型

### 与同门型号的代际对比

| 指标 | MTIA 300 | MTIA 400 | MTIA 450 | **MTIA 500** |
|------|----------|----------|----------|--------------|
| 负载定位 | R&R 训练 | 通用 | GenAI 推理 | **GenAI 推理** |
| FP8/MX8 算力 | 1.2 PFLOPS | 6 PFLOPS | 7 PFLOPS | **10 PFLOPS** |
| MX4 算力 | — | 12 PFLOPS | 21 PFLOPS | **30 PFLOPS** |
| HBM 带宽 | 6.1 TB/s | 9.2 TB/s | 18.4 TB/s | **27.6 TB/s** |
| HBM 容量 | 216 GB | 288 GB | 288 GB | **384 GB 起** |
| TDP | 800 W | 1,200 W | 1,400 W | **1,700 W** |
| Scale-up 域 | 16 颗 | 72 颗 | 72 颗 | **72 颗** |
| Scale-out 带宽 | 200 GB/s | 100 GB/s | 100 GB/s | **100 GB/s** |
| 状态 | 已投产 | 实验室测试完成 | 2027 年初量产 | **2027 年部署** |

> **关键洞察**：MTIA 500 相对 MTIA 450 的 **MX4 算力仅增约 43%，而 HBM 带宽增加 50%、TDP 增加 21%**。若只按算力看，这一代升级幅度并不惊艳；但叠加带宽与容量的同步扩张，**每瓦可搬运的数据量才是这一代真正的增量**——延续 Meta 一贯的"decode 阶段瓶颈在内存而非 FLOPs"的判断。

### 散热与机架约束

单芯片 **1,700 W** 的功耗意味着 MTIA 500 对散热密度提出更高要求。Meta 在这一代公布的机架功率密度目标为 **80 kW 甚至 120 kW 以上**，采用**空气辅助液冷（AALC）+ Sidecar CDU** 架构。Meta 的诉求不是追求最高制冷效率，而是**让既有风冷数据中心尽快获得液冷能力**——Sidecar 可按柜部署、快速扩容并实现故障隔离，更适合推理业务快速上线。

## 适用场景

- ✅ **大规模生成式 AI 推理**（Meta 首要定位）
- ✅ **超长上下文与高并发会话服务**（最高 512GB HBM）
- ✅ **混合专家（MoE）模型服务**（MoE FFN 硬件加速）
- ✅ **高功率密度机架部署**（需 AALC + Sidecar CDU 液冷配套）
- ✅ **Meta 自有基础设施**（仅自用，不对外销售）
- ❌ 大规模 GenAI 预训练（主流 GPU 仍为 Meta 训练主力）
- ❌ 既有风冷机房直接部署（需液冷改造）

## 相关产品对比

- [Meta MTIA 450](/docs/cards/meta/mtia-450) — 前代 GenAI 推理型号，FP8 7 PFLOPS / 288GB @ 18.4 TB/s
- [Meta MTIA 400](/docs/cards/meta/mtia-400) — 通用型号，FP8 6 PFLOPS / 288GB @ 9.2 TB/s
- [Meta MTIA 300](/docs/cards/meta/mtia-300) — R&R 训练向型号
- [Microsoft Maia 300](/docs/cards/microsoft/maia-300) — 云厂商自研推理芯片
- [AWS Trainium3](/docs/cards/aws/trainium-3) — 云自研训练 / 推理芯片

## 数据来源

- [Meta 官方新闻稿：Expanding Meta's Custom Silicon to Power Our AI Workloads](https://about.fb.com/news/2026/03/expanding-metas-custom-silicon-to-power-our-ai-workloads/) — MTIA 450 与 500 为 GenAI 推理优先优化、模块化设计可插入既有基础设施、每六个月或更短迭代周期、数十万颗 MTIA 已部署
- [Meta 官方技术博客：Four Chips in Two Years: Scaling AI Experiences for Billions](https://ai.meta.com/blog/meta-mtia-scale-ai-chips-for-billions/) — MTIA 500 完整规格：TDP 1700 W、HBM 27.6 TB/s / 384–512 GB、FP8/MX8 10 PFLOPS、MX4 30 PFLOPS、BF16 5 PFLOPS、scale-up 域 72、scale-up 1.2 TB/s、scale-out 100 GB/s、HBM 带宽 4.5 倍与算力 25 倍提升
- [Tom's Hardware：Meta reveals four new MTIA chips built for AI inference](https://www.tomshardware.com/tech-industry/semiconductors/meta-reveals-four-new-mtia-chips-built-for-ai-inference) — MTIA 500 较 MTIA 450 再加 50% HBM 带宽与最高 80% 更多 HBM 容量、2027 年大规模部署、decode 阶段瓶颈在内存带宽而非 FLOPs、AALC + Sidecar CDU 液冷与 80–120 kW 机架密度目标
- [The Decoder：Meta unveils four generations of custom AI chips](https://the-decoder.com/meta-unveils-four-generations-of-custom-ai-chips-to-cut-inference-costs-for-billions-of-users) — 规格表交叉核对、MTIA 450 与 500 均面向 GenAI 推理并于 2027 年量产
