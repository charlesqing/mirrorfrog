---
id: ascend-960pr
title: Huawei Ascend 960PR (昇腾 960PR)
sidebar_label: 昇腾 960PR
description: 华为昇腾 960PR 规格：昇腾第六代推理芯片，FP8 2 PFLOPS、FP4 8 PFLOPS（较上代翻倍），192GB 访存、2.4 TB/s 带宽，片间互联 2.2 TB/s。2027 Q3 上市，面向 Prefill 与推荐场景，配套 Atlas 960 液冷 NPO 超节点。
keywords: [昇腾 960PR, Ascend 960PR, FP4 8 PFLOPS, Prefill, 推理芯片, 192GB, 2.4TB/s, Atlas 960, NPO, 推荐系统]
---

# Huawei Ascend 960PR (昇腾 960PR)

## 产品概述

**昇腾 960PR** 是华为昇腾第六代 AI 芯片中的**推理 / Prefill 版本**，与 960DT 构成同一代双版本策略。**2026 年 9 月 17 日华为全联接大会 2026（HUAWEI CONNECT 2026，上海）上，轮值董事长汪涛宣布 960 系列提前完成研发准备、整体性能翻倍**，其中 960PR 将于 **2027 年第三季度上市**，较原路线图提前一个季度。

与 960DT 的差异集中在两处，且方向明确：**FP4 算力翻倍至 8 PFLOPS**（960DT 为 4 PFLOPS），**访存子系统收缩**——容量降至 **192GB**、带宽降至 **2.4 TB/s**（960DT 为 288GB / 9.6 TB/s）。**片间互联带宽两者相同，均为 2.2 TB/s**。这种「算力加码、访存减配」的取舍，反映的是 Prefill 阶段以计算密集为主、而非 Decode 阶段以带宽敏感为主的工程判断：整段提示词一次性算完，瓶颈在算力；逐 Token 生成才受制于权重搬运。

作为对比，950 系列同样采用「DT 配高带宽、PR 配成本」的内存子系统分化（950PR 用 HiBL 1.0 / 1.6 TB/s，950DT 用 HiZQ 2.0 / 4 TB/s）。960PR 的 8 PFLOPS FP4 相当于上一代 950PR（2 PFLOPS FP4）的 **4 倍**，是本次升级中幅度最大的单项指标，也是华为本次唯一在官方口径中明确「超预期」的指标。

在系统层面，960PR 是**昇腾 960 超节点**的核心计算单元。该超节点是**业界首个采用 NPO（近封装光学）光引擎的超节点**，基于「**灵衢 UnifiedBus + Hi-ONE**」架构，单节点可扩展至 **4096 卡**、**8 EFLOPS FP8 / 16 EFLOPS FP4**，采用全液冷设计。据官方口径，960PR 配套 **Atlas 960 液冷超节点**（计划 2027 年第三季度上市）。

> ⚠️ **信息口径提示**：华为对 960PR 的**制程、访存介质类型（是否仍为 HBM）、核心数量、TDP 功耗均未公开**。部分报道根据发布会幻灯片推测 960PR 可能改用成本更低的 LPDDR 而非 HBM——若属实，2.4 TB/s 的带宽数字需以 LPDDR 口径理解，但华为从未确认这一点。本卡「显存类型」一律标注「未公布」，不做推测。960PR 与 960DT 均**不以单卡形式售卖**，而是以超节点 / 集群形态交付。

## 核心规格

| 项目 | 参数 |
|------|------|
| **架构** | SIMD/SIMT 双编程模型（昇腾新一代微架构） |
| **制程** | 未公布 |
| **显存** | 192 GB |
| **显存类型** | 未公布 |
| **显存带宽** | 2.4 TB/s |
| **FP8** | 2 PFLOPS |
| **FP4** | 8 PFLOPS |
| **FP16** | 未公布 |
| **INT8** | 未公布 |
| **TDP** | 未公布 |
| **互联** | 2.2 TB/s（片间互联） |
| **发布** | 2027 Q3 上市 |

> 📌 **未公布字段说明**：制程、显存类型、FP16 与 INT8 算力、TDP 功耗四项华为均未披露，表中一律标注「未公布」，不做推测性填充。
>
> 📌 **关于 8 PFLOPS FP4**：部分中文媒体报道曾将 960PR 的 FP4 算力误记为 4 PFLOPS（与 960DT 相同）。以华为全联接大会英文材料、Tom's Hardware 与 Wccftech 的规格表为准，**960PR 为 FP8 2 PFLOPS / FP4 8 PFLOPS**，本卡采信后者。
>
> 📌 **数据格式支持**：FP32、HF32、FP16、BF16、FP8、MXFP8、HiF8、MXFP4、HiF4（官方披露的支持列表，不含具体算力）。

## 关键特性

### 1. 960PR vs 960DT：算力加码、访存减配

| 维度 | **960PR**（推理 / Prefill） | 960DT（训练 / Decode） |
|------|---------------------------|------------------------|
| **FP8 算力** | 2 PFLOPS | 2 PFLOPS |
| **FP4 算力** | **8 PFLOPS** | 4 PFLOPS |
| **访存容量** | 192 GB | 288 GB |
| **访存带宽** | 2.4 TB/s | 9.6 TB/s |
| **片间互联** | 2.2 TB/s | 2.2 TB/s |
| **定位** | Prefill（首 Token 生成）、推荐 | 训练、Decode（逐 Token 生成） |
| **配套超节点** | Atlas 960（**液冷**，2027 Q3） | Atlas 860（**风冷**，2027 Q2） |
| **上市时间** | 2027 Q3 | 2027 Q2 |

### 2. FP4 推理算力翻倍

- FP4 算力由上一代 950PR 的 2 PFLOPS 提升至 **8 PFLOPS**，是本代升级幅度最大的单项指标
- 面向 Prefill 阶段：整段提示词一次性并行算完，计算单元利用率远高于逐 Token 生成阶段
- 官方称昇腾 960 超节点相对上一代 Atlas 950 SuperPoD，在**十万亿参数模型推理上吞吐提升最高 2.5 倍、时延降低最高 70%**（系统级口径，非单卡对比）

### 3. 面向 Agent 应用的低时延取向

- 与 CANN 生态中的 PD（Prefill / Decode）分离部署方案配合，形成「Prefill 池 + Decode 池」异构流水线
- 960PR 承担 Prefill 侧、960DT 承担 Decode 侧，是华为官方推荐的组合方式
- 华为同步升级鲲鹏超节点，基于灵衢全光组网形成 256TB 统一内存池，面向 Agent 高密度沙箱与向量检索

### 4. NPO 光互联超节点

- 昇腾 960 超节点为**业界首个采用 NPO（近封装光学）光引擎的超节点**
- **Hi-ONE 光引擎**：单引擎传输容量 **7.2T**，业界首个具备量产能力的 NPO 产品、当前传输能力最大、且唯一内置光源
- **正交架构 + 全液冷设计**，基于灵衢实现**内存统一编址**，可扩展至 4096 卡规模
- 用 **5500 个 Hi-ONE** 替代原本需要的 **4.8 万颗 800G 光模块**，功耗降低超 **550 kW**
- 系统无故障运行时间提升一倍，**可用度达 99.8%**
- 多个超节点经灵衢网络或 RoCE 互联，二层 CLOS 四平面组网最大 **51.2 万卡**，叠加多轨道拓扑最大 **100 万卡**

### 5. 生态现状

- 昇腾超节点已累计部署**超 1000 套**，服务 370 多家客户；昇腾 950 超节点已开始大规模商用
- **CANN 全面开源开放**，进入常态化开源社区运营；外部开发者占比升至 61%，月活跃开发者突破 5200 人
- 配套 **OceanStor M900** 集群，基于灵衢总线实现 PB 级 KV Cache 一跳直连，单集群容量可达 64PB

## 适用场景

- ✅ **大模型 Prefill 阶段**（长上下文输入、首 Token 生成）
- ✅ **推荐 / 搜索 / 广告排序**（电商、内容平台、社交媒体的低时延高并发场景）
- ✅ **PD 分离架构中的 Prefill 池**（与 960DT 组成异构推理流水线）
- ✅ **Agent 应用的快速首字响应**（配合鲲鹏超节点统一内存池）
- ❌ 单卡采购（以超节点 / 集群形态交付）
- ❌ 2026 年内落地（芯片 2027 Q3 上市）
- ❌ 逐 Token 生成的 Decode 场景（带宽仅 2.4 TB/s，应交由 960DT）

## 相关产品对比

- [Huawei Ascend 960 (昇腾 960)](/docs/cards/huawei/ascend-960) — 同系列总览卡，含超节点与完整路线图
- [Huawei Ascend 960DT (昇腾 960DT)](/docs/cards/huawei/ascend-960dt) — 同代训练 / Decode 版本（288GB / 9.6 TB/s / FP4 4 PFLOPS）
- [Huawei Ascend 950PR (昇腾 950PR)](/docs/cards/huawei/ascend-950pr) — 前代推理卡（FP4 2 PFLOPS / 128GB / 1.6 TB/s）
- [NVIDIA Rubin CPX](/docs/cards/nvidia/rubin-cpx) — 同类「Prefill 专用 + 大容量内存」定位的国际方案
- [完整对比表](/docs/comparison)

## 数据来源

- [华为官网：华为发布全球首个采用 NPO 的超节点——昇腾 960 超节点（2026-09-17）](https://www.huawei.com/cn/news/2026/9/hc-ascend960-supernode) — Hi-ONE 7.2T、4096 卡、8 EFLOPS FP8 / 16 EFLOPS FP4、5500 个 Hi-ONE 替代 4.8 万颗 800G 光模块、99.8% 可用度、CANN 开源与开发者数据
- [Wccftech：Huawei Brings Huge Inference Boost With Its Next-Gen Ascend 960 Chips In 2027](https://wccftech.com/huawei-ascend-960dt-960pr-2027-970-2028980-2028-superpods-ai/) — 960PR 的 FP4 8 PFLOPS / 192GB / 2.4 TB/s / 互联 2.2 TB/s 与 Q3 2027 时间表
- [Tom's Hardware：Huawei shelves global AI chip rollout as China's own demand outstrips supply](https://www.tomshardware.com/tech-industry/artificial-intelligence/huawei-shelves-global-ai-chip-rollout-as-chinas-own-demand-outstrips-supply-15-488-chip-atlas-clusters-leverage-optical-networking-to-counter-nvidia-scales-to-120-eflops) — 960PR 完整规格行与 B300 / Rubin R200 横向对比
- [heise online：Huawei packs 4096 AI accelerators into a massive server](https://www.heise.de/en/news/Huawei-packs-4096-AI-accelerators-into-a-massive-server-11458882.html) — 关于 960PR 可能改用 LPDDR 而非 HBM 的推测，及制程与功耗未披露说明
- [KrakaTech：Huawei Accelerates AI Chips — Ascend 960DT Arrives in Q1 2027](https://www.krakatech.com/posts/2026-09-18-huawei-accelerates-ai-chips-ascend-960dt-arrives-in-q1-2027) — 960PR 的 8 PFLOPS FP4、192GB、2.4 TB/s 英文交叉验证
