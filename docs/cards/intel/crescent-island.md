---
id: crescent-island
title: Intel GPU D 系列 / Crescent Island (D270，数据中心 AI 推理 GPU)
sidebar_label: Intel GPU D (Crescent Island)
description: Intel GPU D 系列（D270，代号 Crescent Island）：Xe3P 架构、最高 480GB LPDDR5X、1.5 TB/s 带宽、FP8 1.3 PFLOPS、350W PCIe 风冷，OCP 2026 正式定名，客户送样中，2027 年商用。
keywords: [Intel GPU D-Series, D270, Crescent Island, Xe3P, 480GB LPDDR5X, 数据中心推理 GPU, 智能体 AI, OCP 2026]
---

# Intel GPU D 系列 / Crescent Island (D270，数据中心 AI 推理 GPU)

## 产品概述

**Intel Crescent Island**（正式产品名 **GPU D 系列**，媒体与拆解普遍称其型号为 **D270**）于 **2026 年 6 月 Computex** 首次披露，**2026 年 8 月 Hot Chips 2026** 公布完整架构细节，并在 **2026 年 10 月 13 日 OCP 全球峰会**上以 **GPU D 系列**名义正式定名亮相。基于 **Xe3P 架构**，配备 **160GB LPDDR5X**（Intel 参考卡）/ 最高 **480GB**（ODM 伙伴版本），**1.5 TB/s 内存带宽**（官方口径），**FP8 算力 1.3 PFLOPS**，采用 **350W 风冷 PCIe** 形态设计。

Crescent Island 定位为 **智能体 AI（Agentic AI）推理** 的高性价比方案——相比使用 HBM 的高端 GPU，LPDDR5X 方案在同等推理负载下成本大幅降低。Intel 的打法是「不进 HBM 军备竞赛」：用容量、功耗与每美元成本换带宽上限，主打长上下文推理的 decode 场景，卖点是「每美元多少 token」。

## 核心规格

| 项目 | 参数 |
|------|------|
| **发布** | 2026-06 Computex 披露；2026-08 Hot Chips 完整架构；**2026-10-13 OCP 全球峰会正式定名 GPU D 系列** |
| **架构** | Xe3P（第三代 Xe，XMX 升级至 16 深度脉动阵列） |
| **计算单元** | 32 个 Xe3P 核心 / 256 个 XMX 矩阵引擎 / 256 个矢量引擎 / 32 MB 统一 L2 |
| **内存** | **160 GB LPDDR5X**（Intel 参考卡）/ 最高 **480 GB**（ODM 伙伴版本） |
| **内存带宽** | **1.5 TB/s**（官方口径，480GB 版） |
| **精度支持** | **原生 FP8 / FP4**（XMX 16 深度脉动阵列），兼容 BF16/FP16/FP64 |
| **FP8 算力** | **1.3 PFLOPS**（Intel OCP 2026 官方口径） |
| **FP4 算力** | 待官方公布 |
| **FP16/BF16** | 待官方公布 |
| **FP32** | 待官方公布 |
| **图形/光追** | 已移除（纯 AI 推理，无 3D / 光线追踪硬件） |
| **TDP** | 350 W |
| **形态** | **PCIe 标准卡**（风冷，可 8 卡扩展，整机可推理超万亿参数模型） |
| **目标** | **智能体 AI 推理（Agentic Inference）** |
| **软件** | Intel 开放统一软件栈（OneAPI + vLLM / SGLang / Dynamo） |
| **出货** | **客户送样中**（2026 下半年起）；量产与 broad launch 时间官方未公布，媒体推断 2027 年商用 |

> **注**：FP8 1.3 PFLOPS 与 1.5 TB/s 为 Intel 在 OCP 2026 / 后续技术说明中给出的官方口径；480GB 版本单卡可承载约 3,000 亿参数模型（Intel 口径）。制程官方未披露——「Intel 18A」仅为多家媒体基于与 Panther Lake 同源的推测，本卡不采信。内存带宽存在历史口径分歧：2026-10-18 前部分二手拆解曾给出 ~684 GB/s（160GB / 640-bit 估算值），Intel 官方口径为 1.5 TB/s，本卡采信官方值。

## 与同类产品对比

| 指标 | Intel Crescent Island | NVIDIA L40S | NVIDIA H200 | Intel Gaudi 3 |
|------|----------------------|-------------|-------------|---------------|
| **架构** | Xe3P | Ada Lovelace | Hopper | Gaudi 3 |
| **内存** | 480GB LPDDR5x | 48GB GDDR6 | 141GB HBM3e | 128GB HBM2e |
| **内存类型** | LPDDR5x（低成本） | GDDR6 | HBM3e（高成本） | HBM2e（中等） |
| **TDP** | 350W | 350W | 700W | 900W |
| **形态** | PCIe 风冷 | PCIe 风冷 | SXM 液冷 | OAM/PCIe |
| **目标** | **智能体推理** | 通用推理 | 训练+推理 | 训练+推理 |
| **价格定位** | 低（LPDDR5x） | 中等 | 高 | 中等 |
| **FP4 支持** | ✅ **原生** | ❌ | ❌ | ❌ |

> **Crescent Island 优势**：480GB LPDDR5x = **3.4× L40S 的内存容量**，**原生 FP4 支持**，**风冷 350W** 可放入现有服务器，是成本敏感型 AI 推理部署的理想选择。

## 厂商信息

| 项目 | 内容 |
|------|------|
| **制造商** | Intel Corporation |
| **官网** | https://www.intel.com |
| **产品页** | 待上线 |
| **首次披露** | 2026 年 6 月（Computex 2026） |
| **软件生态** | Intel 开放统一 AI 软件栈（OneAPI + PyTorch/TensorFlow）|

## 适用场景

- ✅ **智能体 AI 推理（Agentic Inference）**：海量、词元密集型工作负载
- ✅ **成本敏感型 AI 推理**：LPDDR5x 大幅降低内存成本
- ✅ **企业级推理部署**：350W 风冷可融入现有数据中心
- ✅ **内存密集型推理**：480GB 可加载超大模型
- ❌ **大规模训练**（非设计目标，Intel 另有 Gaudi 系列）
- ❌ **低延迟高吞吐推理**（HBM 方案更适合）

## 数据来源

- [Intel OCP 2026 官方发布（2026-10-13）](https://www.intel.com) — GPU D 系列正式定名、Xe3P 架构、480GB LPDDR5X、350W 风冷 PCIe、客户送样中
- [TechRadar / FRNT（2026-10-18）](https://frnt.com/story/74664/intel-unveils-gpu-d-series-as-enterprises-pivot-to-on-premises-ai-infrastructure) — 官方技术口径确认：LPDDR5X、1.5 TB/s 带宽、FP8 1.3 PFLOPS、单卡支持约 3,000 亿参数模型
- [Hot Chips 2026 披露（2026-08）](https://www.chinatimes.com/realtimenews/20260825002680-260410) — 32 个 Xe 核心、256 个 XMX、最高 480GB LPDDR5X、350W 气冷 PCIe
- [半导体星图深度拆解（2026-10-18）](http://mp.weixin.qq.com/s?__biz=MzYzMjQyMTQwMg==&mid=2247490600&idx=1&sn=3eb2e70573790ca1c3070792a0b80f31) — D270 带宽 1.5 TB/s 官方口径与 ~684 GB/s 二手估算的口径对账、制程未披露、480GB 为 ODM 上限（参考卡 160GB）

## 相关产品

- [Intel Gaudi 3](/docs/cards/intel/gaudi-3) - 同时期训练/推理加速器
- [NVIDIA L40S](/docs/cards/nvidia/l40s) - 同类推理 GPU
- [NVIDIA H200](/docs/cards/nvidia/h200) - 高端训练+推理
- [全文对比表](/docs/comparison)
