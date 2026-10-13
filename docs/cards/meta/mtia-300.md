---
id: mtia-300
title: Meta MTIA 300（自研 AI 加速器 · 排序与推荐训练）
sidebar_label: MTIA 300
description: Meta MTIA 300 自研 AI 加速器：排序与推荐（R&R）训练向，FP8 1.2 PFLOPS、216GB HBM @ 6.1 TB/s、800W TDP，scale-up 域 16 卡 @ 1 TB/s，2026 年 3 月发布时已在生产。
keywords: [Meta MTIA, MTIA 300, 自研芯片, 排序推荐, R&R, 推荐系统, Broadcom, HBM, 推理加速器]
---

# Meta MTIA 300（自研 AI 加速器 · 排序与推荐训练）

## 产品概述

**Meta MTIA 300** 是 Meta 自研 AI 加速器 MTIA 家族的新一代产品，于 **2026 年 3 月 11 日**与 MTIA 400 / 450 / 500 一同公布。与后续三代"面向全部负载"不同，**MTIA 300 是专为排序与推荐（Ranking & Recommendations，R&R）训练优化的专用型号**，也是 Meta 公布路线图时**唯一已经投产**的型号。

Meta 在官方新闻稿中明确表述："MTIA 300 将用于排序与推荐训练，且已在生产中。" 日文媒体在报道这则发布时也指出，MTIA 300 的设计被描述为**构成了后续其他 MTIA 芯片的基础**——它是这一代路线图中效率导向的起点，其模块化设计思路被 MTIA 400 及之后的高性能型号继承。

Meta 为 MTIA 项目设定的战略相当激进：借助**模块化、可复用的芯粒设计**，Meta 称自己已具备**每六个月或更短**发布一代新芯片的能力，远快于行业通常一到两年的周期。MTIA 的机架与网络基础设施同样**模块化**——新一代芯片可以直接插入既有机架系统，显著加速量产节奏。

在软件层面，MTIA 从第一天起就构建在**行业标准**之上：**PyTorch、vLLM、Triton** 以及 **OCP** 开放计算项目标准。配合 `torch.compile` 与 `torch.export` 支持，生产模型无需针对 MTIA 重写即可同时部署在 GPU 与 MTIA 上。Meta 强调，目前已在旗下应用的有机内容与广告推理负载上部署了**数十万颗 MTIA 芯片**。

## 核心规格

| 项目 | 参数 |
|------|------|
| **架构** | MTIA 300（面向排序与推荐 R&R 训练的自研加速器） |
| **制程** | 未公开 |
| **显存** | 216 GB |
| **显存类型** | 未公开 |
| **显存带宽** | 6.1 TB/s |
| **FP8** | 1.2 PFLOPS |
| **FP4** | 未公布 |
| **FP16** | 未公布 |
| **INT8** | 未公布 |
| **TDP** | 800 W |
| **互联** | Scale-up 域 16 颗 @ 1 TB/s（单向）；scale-out 200 GB/s（单向） |
| **发布** | 2026-03-11 发布；发布时已在生产中 |

> 📌 **数据格式口径**：Meta 官方表格将 MTIA 300 的算力标注为 **FP8/MX8 1.2 PFLOPS**、**BF16 0.6 PFLOPS**。Meta 未披露该型号的 MX4 算力，故 FP4 一栏记为未公布。
>
> 📌 **单向带宽**：表中 scale-up / scale-out 带宽均为**单向（unidirectional）**口径，非双向合计值。
>
> 📌 **制程**：Meta 与博通联合开发，但官方未公布具体工艺节点与封装形式。

## 关键特性

### 面向 R&R 训练的专用定位

- 针对 Meta 内部的**排序与推荐模型训练**负载做窄化优化，而非追求通用 GPU 的峰值算力
- Meta 的"推理优先"策略在此代体现为：**只为一类负载做到极致**，而非以通用 GPU 的方式覆盖全部场景
- 作为路线图的效率起点，其模块化设计被 MTIA 400 / 450 / 500 继承放大

### 路线图中的代际坐标

Meta 公布的规格表显示，从 MTIA 300 到 MTIA 500，**HBM 带宽提升 4.5 倍、算力 FLOPs 提升 25 倍**：

| 指标 | MTIA 300 | MTIA 400 | MTIA 450 | MTIA 500 |
|------|----------|----------|----------|----------|
| 负载定位 | R&R 训练 | 通用 | GenAI 推理 | GenAI 推理 |
| FP8/MX8 算力 | 1.2 PFLOPS | 6 PFLOPS | 7 PFLOPS | 10 PFLOPS |
| MX4 算力 | — | 12 PFLOPS | 21 PFLOPS | 30 PFLOPS |
| HBM 带宽 | 6.1 TB/s | 9.2 TB/s | 18.4 TB/s | 27.6 TB/s |
| HBM 容量 | 216 GB | 288 GB | 288 GB | 384–512 GB |
| TDP | 800 W | 1,200 W | 1,400 W | 1,700 W |
| Scale-up 域 | 16 颗 | 72 颗 | 72 颗 | 72 颗 |
| 状态 | 已投产 | 实验室测试完成 | 2027 年初量产 | 2027 年量产 |

> **关键洞察**：MTIA 300 的 scale-up 域只有 **16 颗**，而后续三代的 scale-up 域扩大到 **72 颗**——这说明 Meta 把 scale-up 规模的扩展押在了更高代型号上，MTIA 300 主要服务于容量敏感、规模可控的 R&R 训练负载。

### 与博通的联合开发

- Meta 宣布与**博通（Broadcom）**扩展合作，共同开发多代 MTIA 芯片，覆盖**芯片设计、先进封装与网络**
- 该合作建立在博通的 **XPU 平台**之上，博通CEO 陈福阳（Hock Tan）称"这次 MTIA 的初始部署只是持续多代路线的开始"
- 首期合作承诺规模**超过 1 GW**，是多吉瓦持续铺开的第一阶段
- 博通的先进以太网技术用于支撑 Meta 快速扩张的 AI 集群内部高带宽组网
- 该发布**紧随 Meta 披露与 AMD 价值千亿美元长期 AI 基础设施协议之后**（2026 年 2 月，至多 6 GW Instinct GPU），体现 Meta 整体降低对 NVIDIA 依赖、但把 MTIA 定位为推理核心的组合策略

## 适用场景

- ✅ **排序与推荐（R&R）模型训练**——MTIA 300 的唯一指定负载
- ✅ **Meta 自有应用的推荐服务**（有机内容与广告）
- ✅ **Meta 内部基础设施**（仅自用，不对外销售）
- ❌ 生成式 AI 推理（由 MTIA 450 / 500 承担）
- ❌ 大规模 scale-up 训练作业（scale-up 域仅 16 颗）
- ❌ 对外零售 / 第三方采购

## 相关产品对比

- [Meta MTIA 400](/docs/cards/meta/mtia-400) — 下一代通用型号，FP8 6 PFLOPS / 288GB @ 9.2 TB/s
- [Meta MTIA v3（Iris）](/docs/cards/meta/mtia-v3) — 上一代自研加速器
- [Microsoft Maia 200](/docs/cards/microsoft/maia-200) — 云厂商自研推理芯片
- [AWS Trainium3](/docs/cards/aws/trainium-3) — 云自研训练 / 推理芯片

## 数据来源

- [Meta 官方新闻稿：Expanding Meta's Custom Silicon to Power Our AI Workloads](https://about.fb.com/news/2026/03/expanding-metas-custom-silicon-to-power-our-ai-workloads/) — MTIA 300 用于 R&R 训练且已在生产、模块化设计可插入既有机架、每六个月或更短迭代周期、PyTorch / vLLM / Triton / OCP 行业标准、数十万颗 MTIA 已部署
- [Meta 官方公告：Meta Partners With Broadcom to Co-Develop Custom AI Silicon](https://about.fb.com/news/2026/03/meta-partners-with-broadcom-to-co-develop-custom-ai-silicon/) — 与博通在芯片设计、先进封装与网络方面合作，基于 XPU 平台，首期超过 1 GW
- [Tom's Hardware：Meta reveals four new MTIA chips built for AI inference](https://www.tomshardware.com/tech-industry/semiconductors/meta-reveals-four-new-mtia-chips-built-for-ai-inference) — MTIA 300/400/450/500 完整规格表：TDP 800 W、HBM 6.1 TB/s / 216 GB、FP8/MX8 1.2 PFLOPS、BF16 0.6 PFLOPS、scale-up 域 16、scale-up 1 TB/s、scale-out 200 GB/s
- [The Decoder：Meta unveils four generations of custom AI chips](https://the-decoder.com/meta-unveils-four-generations-of-custom-ai-chips-to-cut-inference-costs-for-billions-of-users) — 规格表交叉核对、HBM 带宽 4.5 倍与算力 25 倍提升、六个月代际节奏
