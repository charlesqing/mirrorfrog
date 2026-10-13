---
id: trainium4
title: AWS Trainium 4
sidebar_label: AWS Trainium 4
description: AWS Trainium 4 预告规格：2025-12-02 re:Invent 首次披露，FP4 性能为 Trainium 3 的 6 倍、FP8 为 3 倍、内存带宽 4 倍、HBM 容量 2 倍，支持 NVIDIA NVLink Fusion，预计 2027 年交付。制程、显存容量与 TDP 官方均未公布。
keywords: [AWS Trainium 4, Trainium4, NVLink Fusion, re:Invent 2025, FP4, 6倍性能, 2027年交付, AWS自研芯片]
---

# AWS Trainium 4

## 产品概述

**AWS Trainium 4** 是 AWS 第五代自研 AI 加速器，于 **2025-12-02** 在 **re:Invent 2025** 大会开幕式上首次公开预告，由 AWS CEO Matt Garman 团队宣布。据 AWS 官方披露，Trainium 4 相比前代 Trainium 3 在 **FP4 精度下性能提升 6 倍**、**FP8 精度下提升 3 倍**、**内存带宽提升 4 倍**、**HBM 容量提升 2 倍**，并将在 **2027 年**开始交付。

本次公布最重大的结构性变化是**互联路线**。AWS 与 NVIDIA 在 re:Invent 2025 联合宣布，Trainium 4 将支持 **NVIDIA NVLink Fusion** 高速互联技术，并与 **NVIDIA MGX 机架架构**协同——这意味着 Trainium 4 可以与 NVIDIA GPU 在同一机架内混合组网。这被解读为 AWS 承认 NVIDIA 网络生态已成为客户默认预期，同时保留将高毛利工作负载留在自研 ASIC 上的策略。这是 NVIDIA 与 AWS 采用 NVLink Fusion 的**首个多代合作**产品。

**必须强调的披露边界**：截至目前，AWS **官方从未公布 Trainium 4 的制程节点、显存的绝对容量（GB）、显存的绝对带宽数值（TB/s）、以及任何绝对算力（PFLOPS）**。所有公开信息均为**相对 Trainium 3 的倍数提升**。业界推测其将采用 HBM4，但**这属于供应链传闻而非官方口径**，本站不予采信。本页所有需要绝对数值的字段一律标注「未公布」，不以推测值填充。

Trainium 4 已有大量产能被提前预订，AWS 同期正与外部企业洽谈直接出售实体 Trainium 芯片。

## 核心规格

| 项目 | 参数 |
|------|------|
| **架构** | 未公布 |
| **制程** | 未公布 |
| **显存** | 未公布 |
| **显存类型** | 未公布 |
| **显存带宽** | 未公布 |
| **FP8** | 未公布 |
| **FP4** | 未公布 |
| **FP16** | 未公布 |
| **FP32** | 未公布 |
| **INT8** | 未公布 |
| **TDP** | 未公布 |
| **互联** | NVIDIA **NVLink Fusion**（支持与 NVIDIA GPU / MGX 机架混合组网） |
| **发布** | **2025-12-02 首次预告**（re:Invent 2025）；**预计 2027 年开始交付** |

> ⚠️ **为什么整张表几乎都是「未公布」**：AWS 对 Trainium 4 的公开表述**全部是相对倍数**（FP4 为 Trainium 3 的 6 倍、FP8 为 3 倍、内存带宽为 4 倍、HBM 容量为 2 倍），**从未给出任何绝对规格**。制程、显存 GB 数、TB/s 绝对值、PFLOPS 绝对值、TDP 全部缺失。表中「未公布」单元格**不附带任何倍数**，以免被下游数据管线误当作绝对指标采信。
>
> 若将倍数直接乘以 Trainium 3 的 2.52 PFLOPS 得出「15.1 PFLOPS FP8」，属于**自行推算而非官方数据**，本卡不做此换算，以免污染本站的横向算力对比。
>
> 「HBM4」的说法目前仅见于供应链传闻与二次报道，**AWS 未确认**，故「显存类型」同样标注未公布。
>
> **唯一已知的互联事实**：Trainium 4 支持 NVIDIA NVLink Fusion，可与 NVIDIA GPU / MGX 机架混合组网。

## 关键特性

- **FP4 性能 6 倍于 Trainium 3**：这是 Trainium 4 最核心的指标。Trainium 3 的已知短板正是 FP4（对比同代 NVIDIA Blackwell 存在显著差距），6 倍提升意味着 AWS 明确将 **FP4 低精度推理作为首要目标场景**
- **FP8 性能 3 倍于 Trainium 3**：训练场景的主力精度，3 倍提升
- **内存带宽 4 倍 / HBM 容量 2 倍**：带宽增幅大于容量增幅，说明设计重心在于**缓解内存墙**而非单纯堆容量——这对长上下文与 MoE 大模型推理尤为关键
- **NVLink Fusion 首次进入 AWS 自研硅**：Trainium 4 将与 NVIDIA Blackwell GPU、NVIDIA CPU 在 MGX 同一机架内协同工作
- **从"内部降本工具"到"对外产品"**：AWS 同步在洽谈向外部企业直接销售 Trainium 实体芯片，不再局限于云实例租赁
- **已被大量预订**：Trainium 3 刚出货即接近满配，Trainium 4 在距上市尚有一年多时产能已被提前预订

## 适用场景

- ✅ **AWS 云端大模型训练与推理**（EC2 Trn4 系列实例，预计 2027 年）
- ✅ **FP4 低精度推理**（性能提升的主要来源）
- ✅ **长上下文 / MoE 架构推理**（带宽 4 倍于容量 2 倍的设计取向）
- ✅ **混合架构部署**（与 NVIDIA GPU 同机架共存，降低全量迁移风险）
- ✅ **AWS AI Factories**（部署在客户自有数据中心的托管 AI 基础设施，可搭载 Trainium 系列）
- ❌ **需要明确规格做采购决策**（绝对算力、显存容量、制程全部未公布）
- ❌ **2027 年前落地**（官方口径为 2027 年开始交付）

## 相关产品对比

- [AWS Trainium 3](/docs/cards/aws/trainium-3) - 前代（3nm / 144GB HBM3e / 2.52 PFLOPS FP8，规格已完全公开）
- [AWS Trainium 2](/docs/cards/aws/trainium-2) - 上上代
- [AWS Inferentia 2](/docs/cards/aws/inferentia-2) - AWS 推理产品线对偶
- [NVIDIA B200](/docs/cards/nvidia/b200) - Trainium 4 混合组网的 GPU 对手
- [Google TPU v7 Ironwood](/docs/cards/google/tpu-ironwood) - 同代云自研 ASIC 路线

> 跨代对比请注意：Trainium 3 的**绝对值已由 AWS 完整披露**，Trainium 4 **仅有倍数**。两者不可直接填入同一张算力对比表。

## 数据来源

- [NVIDIA 官方博客：NVIDIA and AWS Expand Full-Stack Partnership](https://blogs.nvidia.com/blog/aws-partnership-expansion-reinvent/) — 确认 Trainium 4 支持 NVLink Fusion、与 NVIDIA MGX 机架整合，为多代合作首个产品
- [AWS 官方：Trainium 产品页](https://aws.amazon.com/machine-learning/trainium/) — AWS Trainium 产品线官方入口
- [中国日报亚洲版：Amazon to use Nvidia tech in AI chips](https://www.chinadailyasia.com/article/624722) — re:Invent 2025 现场报道，确认 AWS 宣布 Trainium 4 采用 NVLink Fusion，且当日未公布具体发布日期
- [TokenPost：Trainium4 瞄准 FP4 效能 6 倍提升](https://tw.tokenpost.com/news/blockchain/45660) — 引述 AWS 业绩发布材料「Trainium4 预计自 2027 年开始供应」，并指出官方性能数据为上市前目标值