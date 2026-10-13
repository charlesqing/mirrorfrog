---
id: wse-4
title: Cerebras CS-4（WSE-3 Turbo × 3 机架系统）
sidebar_label: Cerebras CS-4
description: Cerebras CS-4 官方规格：2026-08-18 发布，机架级系统搭载 3 颗 WSE-3 Turbo 晶圆级引擎，750 PFLOPS 算力、129.6 PB/s 内存带宽、7.2 Tb/s I/O，晶圆间延迟 2 微秒。注意：并不存在「WSE-4」这颗芯片。
keywords: [Cerebras CS-4, WSE-3 Turbo, WSE-3T, wafer-scale, Nexus, rack-scale, 750 PFLOPS, Cerebras IPO, CBRS]
---

# Cerebras CS-4（WSE-3 Turbo × 3 机架系统）

## 产品概述

:::warning 更正：并不存在「WSE-4」
此前本站把 Cerebras 于 **2026-08-18** 发布的机架级系统 **CS-4** 误记为一颗名为「WSE-4」的新一代晶圆级芯片。**事实是：CS-4 的硅片与已量产的 CS-3 完全相同，官方没有发布任何名为 WSE-4 的产品。**

**Cerebras CS-4** 是 Cerebras **Nexus 机架级平台架构**的第一款产品，由 **3 颗 WSE-3 Turbo（WSE-3T）** 晶圆级引擎组成一个机柜。CS-4 相对 CS-3 的提升来自 **Nexus 互联与封装**，而非制程或晶体管规模：

- **同代硅片**：每片 4 万亿晶体管、90 万 AI Core、44 GB 片上 SRAM、TSMC 5nm、46,225 mm² 硅面积，与 WSE-3 完全一致
- **Nexus 平台**：计算 / 供电 / I/O 三模块解耦；「Wafer-Scale Backpack」可插拔背包式设计把供电、直冷、高速 I/O 与控制电子集成到晶圆背面，零件数减少 50%
- **供电距离革命**：电源转换从 GPU 板上约 50 mm 移到约 **0.5 mm**，几乎消除板级功耗损失，供电功率翻倍
- **Direct Wafer Links**：晶圆可在机柜内/跨机柜**无需交换机**直连，晶圆间延迟低至 **2 微秒**
- **官方口径**：较 CS-3 快 2 倍、每瓦吞吐高 10 倍；GPT-OSS-120B 上超 **4,400 tokens/s/user**（官方自报，未经第三方验证）

## 核心规格（官方）

| 项目 | 参数 |
|------|------|
| **架构** | Nexus 机架级平台（3 × WSE-3 Turbo） |
| **制程** | TSMC 5nm |
| **晶体管数** | 4 万亿/晶圆（3 晶圆合计 12 万亿） |
| **AI Core 数** | 900,000/晶圆 |
| **硅面积** | 46,225 mm²/晶圆 |
| **片上 SRAM** | 44 GB/晶圆 |
| **AI 算力** | 250 PFLOPS/晶圆（机柜合计 750 PFLOPS） |
| **内存带宽** | 43.2 PB/s/晶圆（机柜合计 129.6 PB/s） |
| **片上互联带宽** | 53.5 PB/s/晶圆（机柜合计 160.5 PB/s） |
| **片外 I/O 带宽** | 2.4 Tb/s/晶圆（机柜合计 7.2 Tb/s） |
| **I/O 延迟** | 低至 2 微秒 |
| **显存类型** | 片上 SRAM（无 HBM / 无外置 DRAM） |
| **TDP** | 未公布 |
| **发布** | 2026-08-18 |
| **量产** | 2026 年第三季度开始首批出货 |

> 📌 **TDP 未公布**：Cerebras 官方新闻稿与 CS-4 datasheet 均未给出单晶圆或整机柜功耗。此前本站「~30 kW / 单芯片」为推测值，已移除。机柜级功率请以官方 datasheet 为准。

> ⚠️ **算力口径**：官方新闻稿将 **250 PFLOPS/晶圆**与 **750 PFLOPS/机柜**并列，二者为同一硅片的不同聚合层级，不存在「单芯片 750 PF」的口径。此前本站「单芯片 BF16 200 PFLOPS」为无来源推测，已移除。

## Cerebras 历史与 IPO

| 时间 | 事件 | 详情 |
|------|------|------|
| **2015** | 创立 | Andrew Feldman 创立 Cerebras Systems |
| **2019** | WSE-1 公布 | 首款晶圆级芯片（40 万核） |
| **2021** | WSE-2 公布 | 85 万核，20nm |
| **2024** | WSE-3 (CS-3) | 90 万核，44GB SRAM，125 PF 算力 |
| **2024-12** | 沙特 G42 投资 | G42 投资数亿美元（中东客户） |
| **2025** | OpenAI 合作 | OpenAI 采用 Cerebras 推理算力 |
| **2026-08-18** | **CS-4 发布** | 首代 Nexus 机架级系统，3 × WSE-3T，750 PFLOPS |
| **2026-Q3** | **CS-4 出货** | 首批 CS-4 开始发货 |
| **2026-Q4** | **WSE-3T 单独上市** | WSE-3 Turbo 作为单片产品开放 |

> **Cerebras 上市状态**：Cerebras Systems 已在 **Nasdaq 上市，股票代码 CBRS**（官方新闻稿署名 "Cerebras Systems (NASDAQ: CBRS)"），2026 年为上市后首个完整财年。

## CS-4 vs CS-3 vs NVIDIA Rubin R200

| 指标 | CS-3（1 晶圆） | **CS-4（3 晶圆机柜）** | Rubin R200 |
|------|--------------|------------------|------------|
| 形态 | **单芯片晶圆级** | **机架级（3 晶圆）** | 单卡多 die |
| AI Core 数 | 900,000 | 2,700,000 | ~10,000（SM） |
| SRAM | 44 GB | 132 GB | 288 GB HBM4 |
| 内存带宽 | 21.6 PB/s | 129.6 PB/s | 22 TB/s HBM4 |
| AI 算力 | 125 PFLOPS | **750 PFLOPS** | 25 PFLOPS |
| 片外 I/O | 1.2 Tb/s | **7.2 Tb/s** | — |
| 晶圆间延迟 | 5 μs | **2 μs** | — |
| 散热 | **液冷 + 巨系统** | 液冷 + 巨系统 | 液冷（卡级） |
| 生态 | PyTorch + JAX | 同 | CUDA |

> 💡 **WSE 的核心优势**：**片上 SRAM + 超高带宽 + 零外部访存延迟**。但 CS-4 的算力优势建立在 **3 片晶圆**之上——**单片 WSE-3T 的算力与 CS-3 同代（250 PFLOPS），真正提升来自 Nexus 的 2 微秒互联与翻倍供电**。

## Cerebras CS-4 系统（官方）

| 项目 | 配置 |
|------|------|
| **WSE 数** | 3（WSE-3 Turbo） |
| **系统形态** | Nexus 机架级（模块化计算 / 供电 / I/O） |
| **互联** | Direct Wafer Links（无需交换机，2 μs）+ RoCE v2 RDMA 以太网 |
| **总算力** | 750 PFLOPS |
| **总内存带宽** | 129.6 PB/s |
| **I/O 吞吐** | 7.2 Tb/s |
| **TDP** | 未公布 |
| **扩展能力** | 支持 **50 万亿参数以上**模型 |

## 软件生态

- **Cerebras Software Platform (CSoft)**：基于 PyTorch
- **JAX + Cerebras backend**：Google 集成
- **HuggingFace 集成**
- **Triton + Cerebras backend**
- **OpenAI 兼容 API**（Cerebras Inference，云端 GPT-OSS / Qwen / Kimi 等）
- **异构解耦推理**：官方点明将与 **AMD Helios**、**AWS Trainium** 等生态伙伴组成 prefill / decode 解耦方案

## 适用场景

- ✅ **超大模型推理**（官方称支持 50 万亿参数以上集群）
- ✅ **超低延迟单用户推理**（GPT-OSS-120B 上 4,400 tokens/s/user，官方自报）
- ✅ **Token 工厂**（大规模 token 生成 economics）
- ✅ **政府/科研计算**（高算力 + 自主硅）
- ❌ 边缘部署（功耗 / 体积）
- ❌ 中小模型训练（成本不经济，SRAM-only 无外置 DRAM）

## 厂商信息

| 项目 | 内容 |
|------|------|
| **厂商** | Cerebras Systems |
| **首次公开** | 2026-08-18 |
| **产品页** | https://www.cerebras.ai/ |
| **规格书** | https://www.cerebras.ai/cs4-datasheet |
| **代工** | TSMC 5nm |
| **上市状态** | **已上市**（Nasdaq: CBRS） |
| **首批出货** | 2026-Q3 |

## 相关产品

- [Cerebras WSE-3](/docs/cards/cerebras/wse-3) - 同代硅片（CS-4 使用的芯片）
- [Cerebras WSE-2](/docs/cards/cerebras/wse-2) - 上代
- [NVIDIA Rubin R200](/docs/cards/nvidia/rubin-r200) - 同代 GPU
- [NVIDIA Groq 3 LPX](/docs/cards/nvidia/groq-3-lpx) - 推理对标
- [Google TPU 8t](/docs/cards/google/tpu-8t) - 训练 ASIC 对标
- [完整对比表](/docs/comparison)

## 数据来源

- [Cerebras 官方新闻稿：Cerebras Unveils CS-4, Up to 30 Times Faster than GPU-based Solutions](https://www.cerebras.ai/press-release/cerebras-unveils-cs-4-up-to-30-times-faster-than-gpu-based-solutions-3347356) — CS-3/CS-4 官方对比表、WSE-3T 规格、Direct Wafer Links
- [Cerebras 投资者关系：CS-4 发布稿（Nasdaq: CBRS）](https://investors.cerebras.ai/news-releases/news-release-details/cerebras-unveils-cs-4-30-times-faster-gpu-based-solutions) — 750 PFLOPS / 7.2 Tb/s / 160.5 PB/s / 2 μs
- [Cerebras CS-4 Datasheet](https://www.cerebras.ai/cs4-datasheet) — 官方规格书
- [SemiAnalysis / Cerebras 官方博客：Nexus 平台架构与背包式设计](https://www.cerebras.ai/) — 供电 0.5 mm、零件数 -50%、自动化制造 +60%
