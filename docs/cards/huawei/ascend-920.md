---
id: ascend-920
title: Huawei Ascend 920 (昇腾 920)
sidebar_label: Huawei Ascend 920
description: Huawei Ascend 920 规格：6nm（SMIC）、900 TFLOPS BF16、4 TB/s HBM3 带宽，2025-04 发布、2025 H2 规划量产，未列入华为后续三年路线图。
keywords: [Huawei Ascend 920, 昇腾 920, 6nm, 900 BF16 TFLOPS, 4 TB/s, 国产替代, H20 对标, 2025 H2]
---

# Huawei Ascend 920 (昇腾 920)

## 产品概述

**Huawei Ascend 920**（昇腾 920）于 **2025 年 4 月 10 日**华为合作伙伴大会公布，采用 **6nm 工艺**（SMIC），**≥900 TFLOPS BF16** 算力，**4,000 GB/s（4 TB/s）内存带宽**，配备 **HBM3**，支持 PCIe 5.0，规划 **2025 H2 量产**。发布时正值美国收紧对华 AI 芯片出口管制（含 H20），被视为填补中国市场空缺的国产替代方案。

> ⚠️ **产品状态提示**：华为 2025-09-18 全联接大会公布的三年路线图中，**950PR 之后直接是 950DT，没有 920**。昇腾 920 发布后未见公开的量产交付信息，其市场定位已由 **昇腾 950 系列**接棒。本页仅保留可核验的发布期口径。


## 核心规格

| 项目 | 参数 |
|------|------|
| **架构** | Da Vinci（新一代） |
| **制程** | **6nm**（SMIC） |
| **FP16 / BF16** | **900 TFLOPS** |
| **INT8** | 未公布 |
| **显存** | 未公布 |
| **显存类型** | HBM3 |
| **显存带宽** | **4 TB/s** |
| **TDP** | 未公布 |
| **互联** | 新一代互联协议 |
| **发布** | 2025 H2 量产（路线图） |

> 📌 **数据订正（2026-10 联网核实）**：本站此前记载的 **HBM 容量 ~96 GB、FP16 1,800 TFLOPS、INT8 3,600 TOPS、TDP 400 W、互联 HCCS 1.2 Tbps** 均**无一手来源支撑**，系此前按「BF16×2 = FP16、×4 = INT8」的机械推算，已全部移除。
>
> 有据可查的官方／权威口径仅有：DigiTimes 首发报道的 **6nm（SMIC）、≥900 TFLOPS BF16、4,000 GB/s 内存带宽、HBM3、PCIe 5.0**，以及 2025 H2 量产规划。
>
> ⚠️ **注意**：华为 2025-09-18 全联接大会公布的三年路线图中，**950PR 之后直接是 950DT，没有 920**。昇腾 920 自 2025-04-10 发布后未见后续量产落地公开信息，其产品定位已被 950 系列取代。

> 📌 **4 TB/s 带宽 = 国产最高 HBM 带宽**，比 Ascend 910C 的 3.2 TB/s 高 25%。

## Ascend 910C vs Ascend 920 对比

| 指标 | Ascend 910C | **Ascend 920** | 对比 |
|------|-------------|----------------|------|
| 制程 | SMIC 7nm N+2 | **SMIC 6nm** | 更先进 |
| 显存带宽 | 3.2 TB/s | **4 TB/s** | **1.25×** |
| FP16 / BF16 | 800 TFLOPS | **900 TFLOPS** | **1.13×** |
| 显存 | 128 GB HBM2e | **未公布** | — |
| TDP | 600 W | **未公布** | — |
| 发布时间 | 2025 Q1 量产 | **2025 H2**（规划） | — |

## Ascend 920 vs NVIDIA H20（对标）

| 指标 | Ascend 920 | NVIDIA H20 |
|------|------------|------------|
| 定位 | 国产替代 | 中国合规 AI 芯片 |
| 制程 | 6nm（SMIC） | TSMC 4N |
| 显存 | 未公布 | 96 GB HBM3 |
| 显存带宽 | **4 TB/s** | 4.0 TB/s |
| FP16 / BF16 | **900 TFLOPS** | 296 TFLOPS |
| **算力比（BF16）** | **约 3×** | 1×（基准） |
| 软件 | CANN + MindSpore | CUDA（受限） |
| 进口合规 | ✅ 国产 | ⚠️ 美国出口管制 |

> 💡 **Ascend 920 在 BF16 算力上**约为 H20 的 3 倍，4 TB/s 带宽与 H20 持平。但需注意：**华为后续官方路线图已由 950 系列（950PR / 950DT）接棒**，920 未出现在 2025-09 公布的三年规划中。

## 产品状态

| 项目 | 状态 |
|------|------|
| **首次公布** | 2025-04-10（华为合作伙伴大会） |
| **量产规划** | 2025 H2 |
| **实际落地** | ⚠️ 未见公开量产交付信息 |
| **官方路线图** | ⚠️ 未列入 2025-09-18 三年规划（950PR → 950DT → 960 → 970） |

## CANN + MindSpore 软件生态

- **CANN 8.x**（Compute Architecture for Neural Networks）：类比 CUDA
- **MindSpore 2.4+**：Huawei 自研 AI 框架
- **PyTorch 2.3+ MindSpore 后端**：兼容 PyTorch
- **vLLM 0.7+ Ascend 后端**：低延迟推理
- **ONNX-Runtime Ascend 后端**：跨框架推理
- **Atlas 900/950 系列服务器**：OEM 整机

## 适用场景

- ✅ **中国国产替代**（政府、金融、电信、能源）
- ✅ **大模型训练与推理**（900 BF16 TFLOPS / 4 TB/s）
- ✅ **Transformer / MoE 模型优化**（发布期定位）
- ❌ 出口市场（美国出口管制）
- ❌ 非国产软件生态（迁移成本高）

## 厂商信息

| 项目 | 内容 |
|------|------|
| **厂商** | Huawei Technologies |
| **首发公布** | **2025-04-10**（华为合作伙伴大会） |
| **制程代工** | SMIC（中芯国际，6nm） |
| **产品页** | https://www.huawei.com/en/products/computing/ascend |
| **软件栈** | CANN + MindSpore |


## 相关产品

- [Huawei Ascend 910C](/docs/cards/huawei/ascend-910c) - 前代旗舰
- [Huawei Ascend 910D](/docs/cards/huawei/ascend-910d) - 高端型号
- [Huawei Ascend 910B](/docs/cards/huawei/ascend-910b) - 上代主力
- [NVIDIA H100 NVL](/docs/cards/nvidia/h100-nvl) - 对标产品
- [AMD MI300X](/docs/cards/amd/mi300x) - 海外替代
- [完整对比表](/docs/comparison)

## 数据来源

- [TechRadar：Huawei launches its fastest AI chip ever as US bans export of popular China-only Nvidia H20](https://www.techradar.com/pro/pure-coincidence-surely-not-huawei-launches-its-fastest-ai-chip-ever-as-us-bans-export-of-popular-china-only-nvidia-h20) — Ascend 920 发布（2025-04-10）、SMIC 6nm、≥900 TFLOPS BF16、4,000 GB/s 带宽、HBM3、PCIe 5.0、2025 H2 量产（DigiTimes 原始报道）
- [Techritual：Huawei 發佈新一代 AI 晶片 Ascend 920](https://www.techritual.com/2025/04/29/431425/) — 规格表与 DigiTimes 报道交叉验证
- [經濟日報：輝達不要 H20了？3表一次看新晶片差在哪](https://money.udn.com/money/story/5710/8949076) — H20 / 910C / 920 三方对照表
- [证券时报：华为公布昇腾AI芯片三年发展路线图](https://www.stcn.com/article/detail/3345926.html) — ⚠️ 该路线图为 950PR / 950DT / 960 / 970，**不含 920**

