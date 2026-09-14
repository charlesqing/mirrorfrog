---
id: mtia-400
title: Meta MTIA 400（自研 AI 加速器 · 推荐 + GenAI 双使命）
sidebar_label: MTIA 400
description: "Meta MTIA 400 自研 AI 加速器：12 PFLOPS FP4、全面 chiplet 化（2 计算 die + 1 SoC + 2 网络 die + HBM）、FP16 算力较 MTIA 200 提升 15 倍，首次从推荐系统扩展到生成式 AI。"
keywords: [Meta MTIA, MTIA 400, 自研芯片, 推荐系统, GenAI, chiplet, Broadcom, Hot Chips 2026]
vendor: meta
vendor_full: "Meta"
series: "MTIA 系列"
release_date: "2026"
status: "已披露"
---

# Meta MTIA 400（自研 AI 加速器 · 推荐 + GenAI 双使命）

## 产品概述

**MTIA 400** 是 Meta 自研 AI 加速器 MTIA 家族的第四代产品，在 **Hot Chips 2026**（2026-08-23~25）首次系统披露。

这一代最大的变化是**使命扩容**：MTIA 从诞生起只服务**推荐 / 排序（Recommendation & Ranking）** 这一单一负载，MTIA 400 则同时承担**生成式 AI（GenAI）**，成为"**推荐 + GenAI 双使命**"芯片。Meta 在演讲中给出的量产口径是：**已有数十万颗 MTIA 芯片在生产中**。

架构上，MTIA 400 **全面 chiplet 化**——2 颗计算 die + 1 颗 SoC die + 2 颗网络 die，外加 HBM。这是 Meta 首次把自研加速器拆成多 die 组合，与此前单 die 的 MTIA 200 形成代际分水岭。

## 核心规格

| 项目 | 参数 |
|------|------|
| **架构** | MTIA 400（2 计算 die + 1 SoC die + 2 网络 die + HBM，全面 chiplet 化） |
| **PE 阵列** | 8 × 6 处理单元阵列（带冗余行） |
| **制程** | 未公开 |
| **FP4 算力** | **12 PFLOPS** |
| **FP16/BF16 算力** | 未公开（较 MTIA 200 提升 **15 倍**） |
| **显存容量** | 未公开 |
| **显存带宽** | 未公开（DRAM 带宽较 MTIA 200 提升 **46 倍**） |
| **片上 SRAM 带宽** | 未公开（较 MTIA 200 提升 **5 倍**） |
| **TDP** | 未公开 |
| **Scale-up 域** | 单域 **72 颗** MTIA 400 |
| **设计合作** | Broadcom（多代 MTIA 合作） |
| **发布** | 2026（Hot Chips 2026 披露） |

> ⚠️ **口径提示**：表中「提升 15 倍 / 46 倍 / 5 倍」为**相对 MTIA 200 的倍数**，非绝对规格。Meta 一贯不公开 MTIA 的完整参数，请勿将相对倍数与绝对算力混用。

## 与 MTIA 200 的代际对比

| 指标 | MTIA 200 | **MTIA 400** | 变化 |
|------|----------|--------------|------|
| 使命 | 推荐 / 排序 | **推荐 + GenAI** | 扩容 |
| 封装 | 单片 | **2 计算 + 1 SoC + 2 网络 die** | 全面 chiplet 化 |
| FP4 算力 | 未公开 | **12 PFLOPS** | 新增披露 |
| FP16 算力 | 基准 | — | **15×** |
| DRAM 带宽 | 基准 | — | **46×** |
| SRAM 带宽 | 基准 | — | **5×** |
| Scale-up 域 | — | **72 颗** | — |

> **关键洞察**：DRAM 带宽提升 46 倍、FP16 算力提升 15 倍——**带宽倍数远高于算力倍数**。这与 MTIA 400 新增 GenAI 使命直接相关：生成式推理的 decode 阶段是**内存带宽瓶颈**，Meta 把资源明显压在了数据搬运上。

## MTIA 路线图（300 / 400 / 450 / 500）

Meta 公布的路线图显示未来两年完成 **MTIA 300 / 400 / 450 / 500 四代**迭代：

| 代际 | 定位 | 关键变化 |
|------|------|----------|
| MTIA 300 | 推荐 / GenAI / 推理 | 路线图起点 |
| **MTIA 400** | **推荐 + GenAI 双使命** | 12 PFLOPS FP4，全面 chiplet 化 |
| MTIA 450 | GenAI / 推理 | **HBM 带宽较 MTIA 400 翻倍** |
| MTIA 500 | GenAI / 推理 | HBM 带宽**再增 50%**；单芯片功耗最高 **1700 W** |

配套散热路线：Meta 机柜功率密度目标 **80 kW 甚至 120 kW 以上**，采用**空气辅助液冷（AALC）+ Sidecar CDU** 架构。Meta 的核心诉求不是追求最高制冷效率，而是**让现有风冷数据中心尽快获得液冷能力**——Sidecar 可按柜部署、快速扩容并实现故障隔离，更适合推理业务快速上线。

## 厂商信息

| 项目 | 内容 |
|------|------|
| **公司** | Meta Platforms, Inc. |
| **总部** | 美国加州门洛帕克 |
| **自研芯片路线** | MTIA（推荐 → GenAI → 推理） |
| **设计合作方** | Broadcom |
| **获取方式** | **仅内部自用**（不对外销售） |
| **代工** | TSMC（具体节点未公开） |

## 适用场景

- ✅ **推荐系统 / 排序模型**（MTIA 的传统主场）
- ✅ **生成式 AI 推理**（MTIA 400 新增使命）
- ✅ **与 NVIDIA / AMD GPU 混合部署**（Meta 采取多芯片组合策略）
- ❌ 对外销售 / 第三方采购
- ❌ 前沿模型预训练（Meta 仍依赖 NVIDIA GPU）

## 相关卡

- [Meta MTIA v3（Iris）](/docs/cards/meta/mtia-v3) — 上一代自研加速器
- [Microsoft Maia 200](/docs/cards/microsoft/maia-200) — 云厂商自研推理芯片
- [Google TPU 8i](/docs/cards/google/tpu-8i) — 推理向自研 ASIC
- [AWS Trainium3](/docs/cards/aws/trainium-3) — 云自研训练/推理芯片
- [完整对比表](/docs/comparison)

## 参考资料

- [Hot Chips 2026：Meta's Custom AI Silicon — From Recommendation to Dual-Mandate with GenAI](https://hotchips.org/)
- [行业研报：Hot Chips 2026 自研 ASIC 进入规模部署阶段](https://hotchips.org/)
- [零氪 1+1：Meta MTIA 路线图与 AALC 液冷架构](https://www.nblksj.cn)
- [Reuters：Meta 新款 AI 芯片 Iris 计划于 2026 年 9 月投产](https://www.reuters.com)
