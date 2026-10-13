---
id: gaudi-4
title: Intel Gaudi 4（路线图占位，未发布）
sidebar_label: Gaudi 4
description: Intel Gaudi 4 状态核对：截至 2026-10 官方未发布任何 Gaudi 4 规格，Intel AI 加速器路线图为 Gaudi 3（在售）→ Falcon Shores（已取消）→ Crescent Island（2026 下半年送样）→ Jaguar Shores（2027+）。此前本站流传的 192GB HBM3E / 3.7 PF FP8 等规格均无来源，已移除。
keywords: [Intel Gaudi 4, Gaudi 4, Intel AI, Crescent Island, Jaguar Shores, SynapseAI, 路线图]
---

# Intel Gaudi 4（路线图占位，未发布）

:::warning 状态更正：Gaudi 4 未获官方确认
本页此前记录的「Gaudi 4 = Intel 18A / 192GB HBM3E / 3.7 PF FP8 / 700W / 2026-Q2 发布」**没有任何 Intel 官方来源**——这些数字来自若干内容农场站点（sourcebyspec、lovechip 等），属于凭空生成的「规格表」，并非 Intel 披露。

**截至 2026-10 的实际情况**（据 Tom's Hardware 2026 路线图盘点、Intel 官方公告与财报电话会）：
- **Gaudi 3**：仍在出货（Shipping）
- **Falcon Shores**：**已取消**（商业发布取消，仅作内部测试芯片）
- **Crescent Island**：Intel 当前 AI 加速器主线产品，**2026 下半年客户送样**
- **Jaguar Shores**：Intel 已确认存在，**2027 年最早**，无规格

Intel 从未在官方路线图中列出名为「Gaudi 4」的独立芯片。**Intel 下一代 Gaudi 品牌产品即 Jaguar Shores。**
:::

## 产品概述

**Gaudi 4 不是一颗已公布或已发布的芯片。** 它是外界长期用于指代「Gaudi 3 的下一代」的占位名称，在 Intel 官方材料中从未作为独立产品线出现。

Intel 在 2025-2026 年彻底重构了数据中心 AI 加速器路线：

1. **放弃 Gaudi 迭代 Gaudi**：Gaudi 系列销售不及预期，Intel 官方承认「我们没有满足前沿 AI 训练市场的需求」（Intel 数据中心 AI 加速器业务副总裁 Anil Nanduri，CES 2026）
2. **Falcon Shores 取消**（2025-01-30）：时任联席 CEO Michelle Johnston Holthaus 宣布取消 Falcon Shores 商业发布，仅作内部测试芯片
3. **转向机架级 Jaguar Shores**：Holthaus 同期确认 Jaguar Shores 仍在路线图上，为机架级设计，采用**硅光互联**
4. **并行推出 Crescent Island**（2025-10-14 OCP Global Summit 公布）：面向推理的 Xe3P 数据中心 GPU，160GB LPDDR5X，气冷设计，**2026 下半年送样**
5. **Jaguar Shores 沿用 Gaudi 品牌**：Intel 在首尔 AI Summit 展示的幻灯片确认 Jaguar Shores 将**沿用 Gaudi 品牌**并采用 **SK hynix HBM4**（Intel 自 Ponte Vecchio 以来首次回归 HBM）

## 核心规格（未公布）

| 项目 | 参数 |
|------|------|
| **架构** | 未公布 |
| **制程** | 未公布 |
| **显存** | 未公布 |
| **显存类型** | 未公布 |
| **显存带宽** | 未公布 |
| **FP8** | 未公布 |
| **FP4** | 未公布 |
| **FP16/FP16 算力** | 未公布 |
| **FP32** | 未公布 |
| **INT8** | 未公布 |
| **TDP** | 未公布 |
| **互联** | 未公布 |
| **发布/量产** | 未公布 |

> 📌 **全表「未公布」是准确表述**：Intel 未发布任何 Gaudi 4 规格。此前本站表格中的 `192 GB HBM3E`、`~5 TB/s`、`3.7 PFLOPS`、`700 W`、`~$25,000-30,000` 均为无来源推测，已全部移除。

## Intel AI 加速器真实路线图（官方）

| 平台 | 状态 | 目标负载 | 关键规格 |
|------|------|----------|----------|
| **Gaudi 3** | **在售（Shipping）** | 训练 + 推理 | 128GB HBM2E，128× 200GbE |
| **Falcon Shores** | **已取消（Canceled）** | — | 仅作内部测试芯片 |
| **Crescent Island** | **2026 下半年送样** | 推理 | Xe3P，160GB LPDDR5X，气冷 |
| **Jaguar Shores** | 路线图阶段 | 训练 + 推理 | Gaudi 品牌，HBM4，硅光互联，2027+ |

> 📌 **这是本次核对最关键的结论**：2026 年 Intel 真正出货的 AI 加速器是 **Crescent Island**（风冷 / LPDDR5X / 推理专用），而不是本站此前描述的「Gaudi 4 18A + HBM3E」。若需要 Intel 2026 年的实际产品，请参考 [Intel Jaguar Shores](/docs/cards/intel/jaguar-shores) 与 Crescent Island 相关资料。

## Gaudi 4 vs Gaudi 3（对比作废说明）

此前本站以 5 列表格对比「Gaudi 4（推测）」与 Gaudi 3 / H200 / MI355X，**因 Gaudi 4 侧数据无来源，该对比表已整体删除**，避免与无来源数字交叉污染全站对比器。

可核实的部分仅为 **Gaudi 3 自身**（Intel 官方在售规格）：
- 128GB HBM2E、128× 200GbE 以太网互联（Gaudi 3 的以太网规模业界领先）
- 24× 200GbE RoCE v2 为 Gaudi 2 时代配置，Gaudi 3 提升至 128× 200GbE
- 官方 TDP 900W

## SynapseAI 软件栈（Gaudi 系列通用）

| 层级 | 工具 | 说明 |
|------|------|------|
| **AI 框架** | **SynapseAI** | PyTorch / JAX / TensorFlow 兼容 |
| **图编译器** | Synapse Compiler | 类 XLA + TVM 混合 |
| **算子库** | Habana Custom Ops | 自定义算子 SDK |
| **量化工具** | Quantization Toolkit | INT8 / FP8 训练 |
| **通信库** | Habana CCL | 集合通信（AllReduce 等） |
| **图优化** | Graph Compiler | 自动算子融合 |

> ⚠️ **生态限制**：Intel 官方承认 SynapseAI 相比 CUDA 生态仍有差距；Gaudi 系列销量不及预期的软件生态因素被广泛引用。

## 厂商信息

| 项目 | 内容 |
|------|------|
| **公司** | Intel Corporation |
| **业务部门** | Intel Data Center & AI Group（DCAI） |
| **产品页** | https://www.intel.com/content/www/us/en/products/details/processors/ai-accelerators/gaudi.html |
| **总部** | 美国加州圣克拉拉 |
| **CEO** | Lip-Bu Tan（2025-03 上任） |
| **AI 战略负责人** | Kevork Kechichian（数据中心业务）、Eric Demers（GPU 架构，2026-02 任命） |
| **代工** | Intel Foundry 18A / 14A |

## Gaudi 产品线（官方口径）

| 产品 | 状态 | 说明 |
|------|------|------|
| Gaudi 1 | EOL | 2019 |
| Gaudi 2 | EOL | 2022 |
| **Gaudi 3** | **在售** | 2024 发布，Intel 官方标注 Shipping |
| Gaudi 4 | **不存在（未公布）** | 官方路线图无此产品 |
| **Jaguar Shores** | 路线图 | **沿用 Gaudi 品牌**，HBM4，2027+ |

## 适用场景（若 Gaudi 4 最终发布）

- ✅ **多云 AI 训练**（Intel 以太网互联传统）
- ✅ **HPC + AI 融合**
- ✅ **政府/国企 AI 项目**
- ❌ 当前选型：**2026 年不应按 Gaudi 4 做采购规划**，应评估 Gaudi 3 / Crescent Island

## 相关卡

- [Intel Jaguar Shores](/docs/cards/intel/jaguar-shores) - 真正的 Gaudi 品牌下一代
- [Intel Gaudi 3](/docs/cards/intel/gaudi-3) - 当前在售旗舰
- [Intel Gaudi 2](/docs/cards/intel/gaudi-2) - 前代
- [NVIDIA H200](/docs/cards/nvidia/h200) - 竞品
- [AMD MI355X](/docs/cards/amd/mi355x) - 竞品
- [Huawei Ascend 920](/docs/cards/huawei/ascend-920) - 国产对比
- [Intel Max Series](/docs/cards/intel/max-series) - HPC GPU

## 数据来源

- [Tom's Hardware：Intel's roadmaps examined — 14A, Nova Lake, Diamond Rapids & AI accelerator push](https://tomshardware.com/tech-industry/semiconductors/intel-chip-roadmap-2026-2028) — 官方 AI 加速器路线图状态表（Gaudi 3 Shipping / Falcon Shores Canceled / Crescent Island Sampling 2H 2026 / Jaguar Shores Reported only）
- [Tom's Hardware：Intel's roadmap adds mysterious 'hybrid' AI processor](https://www.tomshardware.com/tech-industry/artificial-intelligence/intels-roadmap-adds-mysterious-hybrid-ai-processor-featuring-x86-cpus-dedicated-ai-accelerator-and-programmable-ip-chip-may-capitalize-on-a-market-forgotten-by-nvidia-and-amd) — Crescent Island 与 Jaguar Shores 的定位区分、Lip-Bu Tan 表态
- [Tom's Hardware：Intel jumps to HBM4 with Jaguar Shores](https://www.tomshardware.com/tech-industry/artificial-intelligence/intel-jumps-to-hbm4-with-jaguar-shores-2nd-gen-mrdimms-with-diamond-rapids-sk-hynix) — Jaguar Shores 沿用 Gaudi 品牌 + SK hynix HBM4（首尔 AI Summit 幻灯片）
- [CRN：How Intel's AI Chip Strategy Is Coming Into Shape](https://www.crn.com/news/components-peripherals/2026/how-intel-s-ai-chip-strategy-is-coming-into-shape-after-years-of-struggles) — Anil Nanduri「未满足前沿训练市场需求」表态、Gaudi 战略调整
- [Intel Newsroom：Crescent Island 发布（2025-10-14）](https://www.intel.com/content/www/us/en/newsroom/news/intel-to-expand-ai-accelerator-portfolio-with-new-gpu.html) — Intel 官方 AI 加速器产品线
