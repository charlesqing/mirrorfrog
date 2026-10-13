---
id: jaguar-shores
title: Intel Jaguar Shores (Rack-Scale System)
sidebar_label: Intel Jaguar Shores
description: Intel Jaguar Shores 机架级 AI 系统：接替已取消的 Falcon Shores，沿用 Gaudi 品牌、配 SK hynix HBM4 与硅光互联，2027 年最早推出。Intel 官方确认存在但未公布任何规格。
keywords: [Intel Jaguar Shores, Falcon Shores cancelled, rack-scale, 2027, Gaudi brand, HBM4, silicon photonics, Intel Foundry]
---

# Intel Jaguar Shores (Rack-Scale System)

## 产品概述

**Intel Jaguar Shores** 是 Intel 在取消 **Falcon Shores** 后重启的**机架级 AI 系统**项目，是 Intel 已官方确认存在的下一款 Gaudi 品牌 AI 加速器。

Intel 官方披露的确定信息**仅有三项**：
1. **沿用 Gaudi 品牌**——Intel 在首尔 AI Summit 展示的幻灯片确认 Jaguar Shores 将携带 Gaudi 品牌，这是 Intel 首次确认该命名
2. **采用 SK hynix HBM4**——Intel 自 Ponte Vecchio 以来首次回归 HBM 内存路线
3. **机架级设计 + 硅光互联**——时任 Intel 产品主管 Michelle Johnston Holthaus 在财报电话会中称其为「机架级设计」，采用硅光（silicon photonics）互联

**除以上三项外，Intel 未公布任何 Jaguar Shores 规格**：算力、内存容量、带宽、TDP、机柜配置、每机柜加速器数量全部未披露。此前本站记录的「144GB HBM3e / ~2,500 TFLOPS FP8 / ~10-15TB 机柜内存 / 160-320 PFLOPS 机柜算力」等均为无来源推测，已全部移除。

## 核心规格（未公布）

| 项目 | 参数 |
|------|------|
| **架构** | Gaudi 品牌，机架级系统（非单芯片） |
| **制程** | 未公布 |
| **显存** | 未公布 |
| **显存类型** | **HBM4（SK hynix）** |
| **显存带宽** | 未公布 |
| **FP8** | 未公布 |
| **FP4** | 未公布 |
| **FP16/FP16 算力** | 未公布 |
| **FP32** | 未公布 |
| **INT8** | 未公布 |
| **TDP** | 未公布 |
| **互联** | **硅光互联（silicon photonics）** |
| **发布/量产** | **2027 年最早**（预计） |

> ⚠️ **「未公布」是准确表述**：Intel 对 Jaguar Shores 仅披露品牌、内存类型、互联方式与大致时间窗。TDP、HBM 容量与堆栈数、任何精度的算力均未公开，请勿采信第三方推测数字。

## Falcon Shores 取消事件（时间线更正）

| 事件 | 时间 | 详情 |
|------|------|------|
| **Falcon Shores 首次公布** | 2023 | Intel AI 路线图，含 Xe GPU + Gaudi IP |
| **融合 Gaudi** | 2024 | 宣布 Gaudi 3 并入 Falcon Shores 项目，取消 Habana 独立品牌 |
| **路线图调整** | 2024-12 | 取消单芯片性能目标，转向系统级 |
| **正式取消商业发布** | **2025-01-30** | 财报电话会宣布：Falcon Shores 仅作**内部测试芯片**，不推向市场 |
| **转向 Jaguar Shores** | 2025-01-30 | 同一次电话会确认 Jaguar Shores 仍在路线图 |
| **Jaguar Shores 细节披露** | 2025 年（首尔 AI Summit） | 确认 Gaudi 品牌 + SK hynix HBM4 |
| **预计推出** | **2027 年最早** | — |

> 📌 **时间线更正**：此前本站记「2026-05-14 正式取消 Falcon Shores」，**与事实不符**。实际取消公告发生在 **2025-01-30**（Q4 2024 财报电话会），Holthaus 当场说明 Falcon Shores 将仅作内部测试芯片，同时确认 Jaguar Shores 存在。
>
> **取消原因（业界共识）**：
> 1. Gaudi 系列销量远低于预期（Intel 2024 年曾预期 Gaudi 销售 $500M，实际远未达成）
> 2. CUDA 生态壁垒过深，软件迁移成本高
> 3. 单芯片对标 NVIDIA 的路线在训练市场已失去可行性
> 4. 团队被并入 Falcon Shores 项目后，Habana 创始人 Dahan 与 Halutz 离职创业

## Jaguar Shores vs Falcon Shores

| 指标 | Falcon Shores（已取消） | **Jaguar Shores** |
|------|--------------------------|-------------------|
| 形态 | 单芯片 GPU | **机架级系统** |
| 状态 | ❌ 2025-01-30 取消，仅内部测试 | 🟡 路线图阶段 |
| 品牌 | Xe 品牌 | **Gaudi 品牌** |
| 内存 | 未公布 | **SK hynix HBM4** |
| 互联 | 未公布 | **硅光互联** |
| 发布时间 | 已取消 | **2027 年最早** |

## Intel AI 加速器路线图（2026 现状）

| 平台 | 状态 | 目标负载 | 关键规格 |
|------|------|----------|----------|
| **Gaudi 3** | **在售** | 训练 + 推理 | 128GB HBM2E，128× 200GbE |
| **Falcon Shores** | **已取消** | — | 仅内部测试芯片 |
| **Crescent Island** | **2026 下半年送样** | 推理 | Xe3P，160GB LPDDR5X，气冷 |
| **Jaguar Shores** | **路线图阶段** | 训练 + 推理 | **Gaudi 品牌 + HBM4 + 硅光** |

> 💡 **重要区分**：**Crescent Island 才是 Intel 2026 年的实际产品**（推理专用、LPDDR5X、气冷）；**Jaguar Shores 面向 2027 及以后的训练 + 推理高带宽路线**。两者定位不同，不可混淆。
>
> 此前本站将 Jaguar Shores 描述为「2026-05 财报披露的新项目」并给出大量规格，与事实不符，已更正。

## Intel AI 战略（2025-2026）

| 战略 | 内容 |
|------|------|
| **Gaudi 品牌** | 保留并延续给 Jaguar Shores |
| **Falcon Shores** | ❌ 已取消（2025-01-30） |
| **Jaguar Shores** | ✅ 机架级 AI 系统，2027 年最早 |
| **Crescent Island** | ✅ 2026 下半年送样的推理 GPU |
| **异构混合产品** | x86 CPU + 固定功能加速器 IP + 可编程逻辑 |
| **软件栈** | 统一异构软件栈（在 Arc Pro B 系列 GPU 上测试） |

> **Intel 的现实定位**：
> - **短期**：Crescent Island 抢占推理市场，靠 LPDDR5X + 气冷的成本优势避开 HBM 供应紧张
> - **中期**：Jaguar Shores 回归 HBM4 + 硅光，争夺训练与大规模推理
> - **风险**：Tom's Hardware 等媒体普遍指出，Intel 在 AI 加速领域的软件生态成熟度一直是短板，能否在 2027 后追平仍存疑

## 适用场景

- ✅ **Intel 生态保留**（既有 x86 客户）
- ✅ **机柜级 AI 系统**（2027+ 时代）
- ✅ **HBM4 + 硅光的大集群扩展**
- ❌ 2026 年当前部署（应选 Crescent Island 或 Gaudi 3）
- ❌ 超低延迟推理（Groq LPX 等专用架构更优）
- ❌ 高密度集群（NVL72 / Helios 已 GA）

## 厂商信息

| 项目 | 内容 |
|------|------|
| **厂商** | Intel Corporation |
| **首次确认** | 2025-01-30（财报电话会） |
| **品牌** | **Gaudi 品牌**（Intel AI Summit 确认） |
| **形态** | 机架级系统（**非单芯片**） |
| **预计发布** | **2027 年最早** |
| **内存** | **SK hynix HBM4** |
| **互联** | 硅光互联 |

## 相关产品

- [Intel Gaudi 3](/docs/cards/intel/gaudi-3) - 当前在售 Gaudi 旗舰
- [Intel Gaudi 4](/docs/cards/intel/gaudi-4) - 路线图占位（未发布）
- [NVIDIA Rubin R200](/docs/cards/nvidia/rubin-r200) - 同代 GPU
- [AMD MI400](/docs/cards/amd/mi400) - 同代 GPU
- [NVIDIA B300 Ultra](/docs/cards/nvidia/b300-ultra) - 上一代 NVIDIA
- [完整对比表](/docs/comparison)

## 数据来源

- [Tom's Hardware：Intel's roadmaps examined — 14A, Nova Lake, Diamond Rapids & AI accelerator push](https://tomshardware.com/tech-industry/semiconductors/intel-chip-roadmap-2026-2028) — Jaguar Shores「Reported only」状态、Holthaus 机架级 + 硅光表述、2027 年最早
- [Tom's Hardware：Intel jumps to HBM4 with Jaguar Shores, 2nd Gen MRDIMMs with Diamond Rapids](https://www.tomshardware.com/tech-industry/artificial-intelligence/intel-jumps-to-hbm4-with-jaguar-shores-2nd-gen-mrdimms-with-diamond-rapids-sk-hynix) — 首尔 AI Summit 幻灯片确认 Gaudi 品牌 + SK hynix HBM4
- [TechCrunch：Intel won't bring its Falcon Shores AI chip to market](https://techcrunch.com/2025/02/01/intel-wont-bring-its-falcon-shores-ai-chip-to-market/) — 2025-01-30 取消商业发布
- [Tom's Hardware：Intel's roadmap adds mysterious 'hybrid' AI processor](https://www.tomshardware.com/tech-industry/artificial-intelligence/intels-roadmap-adds-mysterious-hybrid-ai-processor-featuring-x86-cpus-dedicated-ai-accelerator-and-programmable-ip-chip-may-capitalize-on-a-market-forgotten-by-nvidia-and-amd) — Crescent Island / Jaguar Shores 定位区分与硅光互联
