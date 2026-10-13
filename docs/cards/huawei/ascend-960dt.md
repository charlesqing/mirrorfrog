---
id: ascend-960dt
title: Huawei Ascend 960DT (昇腾 960DT)
sidebar_label: 昇腾 960DT
description: 华为昇腾 960DT 规格：SIMD/SIMT 新微架构，FP8 2 PFLOPS、FP4 4 PFLOPS，288GB HBM、9.6 TB/s 带宽，片间互联 2.2 TB/s。较 950DT 各指标翻倍，2027 Q1 就绪、Q2 上市，配套 Atlas 860 风冷超节点。
keywords: [昇腾 960DT, Ascend 960DT, SIMD/SIMT, HiF8, HiF4, 288GB HBM, 9.6TB/s, Atlas 860, 韬定律, 训练卡]
---

# Huawei Ascend 960DT (昇腾 960DT)

## 产品概述

**昇腾 960DT** 是华为昇腾第六代 AI 芯片中的**训练 / Decode 版本**，与主打 Prefill 与推荐的 960PR 共享同一代微架构，但在显存子系统上做了明显偏向高带宽的配置。**2026 年 9 月 17 日华为全联接大会 2026（HUAWEI CONNECT 2026，上海）上，轮值董事长汪涛宣布 960 系列已提前完成研发准备、整体性能实现翻倍**，960DT 将于 **2027 年第一季度就绪**，较原路线图提前三个季度。

官方披露的核心指标为：**FP8 算力 2 PFLOPS、FP4 算力 4 PFLOPS、访存容量 288GB、访存带宽 9.6 TB/s、片间互联带宽 2.2 TB/s**。相比上一代 950DT（FP8 1 PFLOPS / FP4 2 PFLOPS / 144GB / 4 TB/s / 互联 2 TB/s），**算力、容量、带宽、互联四项全部翻倍或超过翻倍**，其中 9.6 TB/s 的访存带宽相当于 950 系列的 **2.4 倍**。华为将这条持续倍增的路线称为「**韬定律（τ-law）**」。

960DT 采用**全新的 SIMD/SIMT 双编程模型微架构**，向下完整覆盖 **FP32、HF32、FP16、BF16、FP8、MXFP8、HiF8、MXFP4、HiF4** 等数据格式。其中 HiF8 / HiF4 是华为自有格式，同时兼顾精度与动态范围，官方称可用单一格式替代两种标准浮点格式。这一设计意味着华为的低精度算力路径不再完全依赖 NVIDIA 定义的格式。

在系统层面，960DT 是**昇腾 960 超节点**的核心计算单元。华为在同场发布了**全球首个采用 NPO（近封装光学）光引擎的超节点**，基于「**灵衢 UnifiedBus + Hi-ONE**」架构，单节点可扩展至 **4096 卡**、实现 **8 EFLOPS FP8 / 16 EFLOPS FP4**，采用全液冷设计。据官方与媒体口径，960DT 配套 **Atlas 860 风冷超节点**（计划 2027 年第二季度上市），可部署在常规机房、无需液冷改造。

> ⚠️ **信息口径提示**：华为对 960DT 的**制程、封装形式、核心数量、TDP 功耗均未公开**，官方仅以路线图形式给出算力与访存指标。第三方分析认为 960DT 采用两颗计算 Chiplet + 8 颗 HBM 堆叠的布局，但此为媒体根据发布会照片推测，非官方口径。量产交付以**超节点 / 集群形态**为主，不单独售卖单卡。

## 核心规格

| 项目 | 参数 |
|------|------|
| **架构** | SIMD/SIMT 双编程模型（昇腾新一代微架构） |
| **制程** | 未公布 |
| **显存** | 288 GB |
| **显存类型** | 未公布 |
| **显存带宽** | 9.6 TB/s |
| **FP8** | 2 PFLOPS |
| **FP4** | 4 PFLOPS |
| **FP16** | 未公布 |
| **INT8** | 未公布 |
| **TDP** | 未公布 |
| **互联** | 2.2 TB/s（片间互联） |
| **发布** | 2027 Q1 就绪，2027 Q2 上市 |

> 📌 **未公布字段说明**：制程、显存类型（HiBL / HiZQ 具体代号）、FP16 与 INT8 算力、TDP 功耗四项华为均未披露，表中一律标注「未公布」，不做推测性填充。第三方报道称 288GB / 9.6 TB/s 的规格「相当于 8 颗 12 层 HBM3E 的水平」，并推测可能由长鑫存储供应，但均非华为官方口径。
>
> 📌 **数据格式支持**：FP32、HF32、FP16、BF16、FP8、MXFP8、HiF8、MXFP4、HiF4（官方披露的支持列表，不含具体算力）。

## 关键特性

### 1. 四项指标同步翻倍

| 指标 | 昇腾 950DT | **昇腾 960DT** | 变化 |
|------|-----------|----------------|------|
| **FP8 算力** | 1 PFLOPS | **2 PFLOPS** | ×2 |
| **FP4 算力** | 2 PFLOPS | **4 PFLOPS** | ×2 |
| **访存容量** | 144 GB | **288 GB** | ×2 |
| **访存带宽** | 4 TB/s | **9.6 TB/s** | ×2.4 |
| **片间互联** | 2 TB/s | **2.2 TB/s** | ×1.1 |

### 2. 面向 Decode 阶段的高带宽访存

- Decode（逐 Token 生成）阶段的瓶颈在**访存带宽而非算力**，模型权重需为每个 Token 完整搬运一次
- 9.6 TB/s 带宽 + 288GB 容量，使单卡可承载更大 Batch Size 与更长上下文窗口
- 搭配 MXFP4 / MXFP8 块浮点格式，进一步减少权重与 KV Cache 的搬运量

### 3. 自有低精度格式 HiF8 / HiF4

- 官方称 HiF8 / HiF4 **同时考虑精度与动态范围**，可用单一格式表达原本需要两种标准浮点格式的信息
- 华为低精度算力路线不再完全依附 NVIDIA 定义的 FP8 / FP4 编码
- ⚠️ 精度收益目前无法由华为以外的第三方验证

### 4. NPO 光互联超节点

- 昇腾 960 超节点为**业界首个采用 NPO（近封装光学）光引擎的超节点**
- **Hi-ONE 光引擎**：单引擎传输容量 **7.2T**，业界首个具备量产能力的 NPO 产品，也是目前传输能力最大的 NPO 产品，且是唯一内置光源的 NPO 产品
- 系统采用**正交架构 + 全液冷设计**，基于灵衢实现**内存统一编址**，可扩展至 4096 卡规模
- 用 **5500 个 Hi-ONE** 替代原本需要的 **4.8 万颗 800G 光模块**，功耗降低超 **550 kW**
- 系统无故障运行时间提升一倍，**可用度达 99.8%**
- 多个超节点经灵衢网络或 RoCE 互联，二层 CLOS 四平面组网最大 **51.2 万卡**，叠加多轨道拓扑最大 **100 万卡**

### 5. 生态现状

- 昇腾超节点已累计部署**超 1000 套**，服务 370 多家客户；昇腾 950 超节点已开始大规模商用
- **CANN 全面开源开放**，进入常态化开源社区运营；外部开发者占比升至 61%，月活跃开发者突破 5200 人
- 配套发布 **OceanStor M900** 集群，基于灵衢总线实现 PB 级 KV Cache 一跳直连，将可用 KV Cache 从 GB 级扩展到 TB 级

## 适用场景

- ✅ **十万亿参数级大模型训练**（4096 卡超节点 + 统一内存编址）
- ✅ **高并发推理 Decode**（9.6 TB/s 带宽是该阶段的核心收益点）
- ✅ **常规机房部署**（Atlas 860 风冷超节点，无需液冷改造）
- ✅ **需要完整自有低精度格式栈的模型**（HiF8 / HiF4）
- ❌ 单卡采购（以超节点 / 集群形态交付）
- ❌ 2026 年内落地（芯片 2027 年上市）

## 相关产品对比

- [Huawei Ascend 960 (昇腾 960)](/docs/cards/huawei/ascend-960) — 同系列总览卡，含超节点与完整路线图
- [Huawei Ascend 950DT (昇腾 950DT)](/docs/cards/huawei/ascend-950dt) — 前代训练卡（FP8 1 PFLOPS / 144GB / 4 TB/s）
- [Huawei Ascend 970 (昇腾 970)](/docs/cards/huawei/ascend-970) — 下一代（2028，FP8 3.6 PFLOPS / FP4 14 PFLOPS）
- [NVIDIA B200](/docs/cards/nvidia/b200) — 同代国际竞品（FP8 4.5 PFLOPS / FP4 9 PFLOPS）
- [NVIDIA Rubin R200](/docs/cards/nvidia/rubin-r200) — 次代国际竞品（FP8 12.5 PFLOPS / FP4 50 PFLOPS）
- [完整对比表](/docs/comparison)

## 数据来源

- [华为官网：华为发布全球首个采用 NPO 的超节点——昇腾 960 超节点（2026-09-17）](https://www.huawei.com/cn/news/2026/9/hc-ascend960-supernode) — Hi-ONE 7.2T、4096 卡、8 EFLOPS FP8 / 16 EFLOPS FP4、5500 个 Hi-ONE 替代 4.8 万颗 800G 光模块、99.8% 可用度、51.2 万卡 / 100 万卡集群扩展
- [Wccftech：Huawei Brings Huge Inference Boost With Its Next-Gen Ascend 960 Chips In 2027](https://wccftech.com/huawei-ascend-960dt-960pr-2027-970-2028980-2028-superpods-ai/) — 960DT 的 FP8 / FP4 / 288GB / 9.6 TB/s / 2.2 TB/s 与 Q1 2027 时间表，SIMD/SIMT 与全数据格式列表
- [Tom's Hardware：Huawei shelves global AI chip rollout as China's own demand outstrips supply](https://www.tomshardware.com/tech-industry/artificial-intelligence/huawei-shelves-global-ai-chip-rollout-as-chinas-own-demand-outstrips-supply-15-488-chip-atlas-clusters-leverage-optical-networking-to-counter-nvidia-scales-to-120-eflops) — 960DT / 960PR / 970 / 980 完整规格对照表与横向对比
- [heise online：Huawei packs 4096 AI accelerators into a massive server](https://www.heise.de/en/news/Huawei-packs-4096-AI-accelerators-into-a-massive-server-11458882.html) — 8 颗 HBM 堆叠布局、制程与功耗未披露、与 Rubin / MI455X 的差距量化
- [中华网：昇腾 960 芯片将提前至明年一季度发布 性能翻倍提升](https://3g.china.com/act/news/10000169/20260917/49748364.html) — 全联接大会中文现场口径：Atlas 860 风冷 2027 Q2、Atlas 960 液冷 2027 Q3
