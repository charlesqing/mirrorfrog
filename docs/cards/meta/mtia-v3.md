---
id: mtia-v3
title: Meta MTIA v3 (Iris)
sidebar_label: Meta MTIA v3
description: Meta 第三代自研 AI 芯片 Iris：RISC-V 开源指令集、博通设计、台积电制造，大容量片上 SRAM + LPDDR5（不用 HBM），2026 年 9 月启动量产。Meta 从未公布任何算力/内存/TDP 规格。
keywords: [Meta MTIA v3, Iris, RISC-V, 博通, 台积电, 2026 量产, LPDDR5]
---

# Meta MTIA v3（Iris）

## 产品概述

**Meta MTIA v3**（内部代号 **Iris**）是 Meta 第三代自研 AI 加速器。据 **Reuters 获得的 Meta 内部备忘录**（2026-07 报道），Iris 已完成约六周除错测试且「无重大问题」，计划 **2026 年 9 月启动量产**。设计方为 **博通（Broadcom）**，制造方为 **台积电（TSMC）**。

**架构公开信息**（Meta 官方与 ISCA 论文）：
- **开源 RISC-V 指令集架构**，运行 **PyTorch / vLLM / Triton**（Meta 工程师已在用的工具链）
- **内存路线：片上 SRAM + LPDDR5 DRAM，不使用 HBM**——这是 Meta 有意的设计选择。Meta 的主力负载是推荐系统，属**内存受限（memory-bound）而非算力受限**，需要不规则访存的嵌入表查找，而非 GPU 擅长的密集矩阵运算，因此选择与实际访问模式匹配的大容量 SRAM + 廉价 LPDDR5

**定位：补充而非替代**。内部备忘录明确 Iris 不是为取代 NVIDIA / AMD 而设计，而是承载 Facebook / Instagram 的特定推理负载。Meta 2026 年 AI 资本支出预测 **1,150-1,450 亿美元**（2025 年为 720 亿），算力目标 2026 年底约 **7 GW**、2027 年 **14 GW**。

## 核心规格（未公布）

| 项目 | 参数 |
|------|------|
| **架构** | MTIA v3（Iris），RISC-V 开源指令集 |
| **制程** | 未公布 |
| **显存** | 未公布 |
| **显存类型** | **LPDDR5 + 片上 SRAM**（不用 HBM） |
| **显存带宽** | 未公布 |
| **FP8** | 未公布 |
| **FP4** | 未公布 |
| **FP16/FP16 算力** | 未公布 |
| **FP32** | 未公布 |
| **INT8** | 未公布 |
| **TDP** | 未公布 |
| **互联** | 未公布 |
| **发布/量产** | **2026 年 9 月启动量产** |

> ⚠️ **Meta 从未公布 Iris 的任何规格数字**。此前本站表格中的「核心数 >1,000」「>200 TFLOPS」「HBM 64-96 GB」「带宽 ~2-3 TB/s」「TSMC 5nm」「TDP 200 W」**全部为无来源推测**，与 Reuters 备忘录及 Meta 官方披露均不符，已全部移除。
>
> **可核实的唯一性能口径**来自 ISCA 2025 上发表的 MTIA 2i 研究：以 MTIA 2i 替代 GPU 可使推荐负载的**总体拥有成本（TCO）降低 44%**，同时维持有竞争力的每瓦性能。

## MTIA 系列代际对比（可核实部分）

| 指标 | MTIA v1 | MTIA v2 | **MTIA v3（Iris）** |
|------|---------|---------|---------------------|
| 设计代次 | 第一代 | 第二代 | **第三代** |
| 制程 | 未公布 | 未公布 | 未公布 |
| 算力 | 未公布 | 未公布 | 未公布 |
| 内存 | 未公布 | 未公布 | 未公布（LPDDR5 + SRAM） |
| 指令集 | 未公布 | 未公布 | **RISC-V** |
| TCO 优化 | — | **44% 降低**（MTIA 2i，ISCA 2025） | 未公布 |
| 量产时间 | 2023 | 2025 | **2026 年 9 月** |

> 📌 **路线图节奏**：Meta 于 2026-03 公布了横跨四个世代的自研芯片路线图，目标至 2027 年底前**约每六个月推出新一代**。此前本站记「两年四代」与此不符，已按 2026-03 官方路线图更正。

## 战略意义

- **降低对外依赖**：补充而非替代 NVIDIA / AMD GPU，形成混合算力系统
- **定制化优化**：针对推荐系统（内存受限、稀疏访存）优化，而非追求峰值算力
- **成本优势**：ISCA 研究给出 TCO 降低 44% 的量级
- **快速迭代**：约每 6 个月一代，远快于传统 3-5 年芯片周期

## 关键事件与背景

| 时间 | 事件 |
|------|------|
| **2026-02** | Meta **取消**训练芯片 **Olympus**（软件稳定性不及 NVIDIA 生态 + 2nm 制造风险过高） |
| **2026-03** | Meta 公布四代自研芯片路线图 |
| **2026-07** | **Reuters** 披露内部备忘录：Iris 六周除错测试通过，9 月量产 |
| **2026-07** | Meta 成立 **Meta Compute** 云业务部门，对外卖售富余算力 |

## 合作方

| 项目 | 内容 |
|------|------|
| **芯片设计** | **博通（Broadcom）** 合作 |
| **制程与制造** | **台积电（TSMC）** |
| **技术团队** | Meta 收购 Rivos Inc.，吸纳 400+ 芯片工程师 |
| **软件栈** | **PyTorch / vLLM / Triton** |
| **供应链锁定** | 三星（存储）、SanDisk（闪存）、住友电工（光纤）长期供货协议 |

## 相关产品

- [AWS Trainium 3](/docs/cards/aws/trainium-3) - 同期训练芯片
- [Google TPU v7 Ironwood](/docs/cards/google/tpu-ironwood) - 同代 ASIC
- [完整对比表](/docs/comparison)

## 数据来源

- [Reuters：Meta's Iris chip enters production in September, Broadcom designs for three rivals](https://www.edgen.tech/es/news/post/metas-iris-chip-enters-production-in-september-broadcom-designs-for-3-rivals) — Reuters 内部备忘录原文转述：2026 年 9 月量产、博通设计、台积电制造、补充而非替代定位
- [Reuters / TheAI 学院：Meta 自研 AI 晶片「Iris」九月量产](https://www.theai.tw/blog/meta-iris-chip-tsmc-64e2ac0a) — 六周除错测试、7GW→14GW 算力计划
- [Edgen：Meta Iris 晶片 9 月投产，博通为三家竞争对手设计晶片](https://www.edgen.tech/zh-tw/news/post/metas-iris-chip-enters-production-in-september-broadcom-designs-for-3-rivals) — **RISC-V 指令集、PyTorch/vLLM/Triton、MTIA 2i TCO 降低 44%**、LPDDR5 + SRAM 内存路线
- [百度百科：Meta Iris AI Chip](https://baike.baidu.com/en/item/Meta%20Iris%20AI%20Chip/5071030) — 路线图节奏、Olympus 取消、供应链锁定
