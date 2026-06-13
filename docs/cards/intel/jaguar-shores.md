---
id: jaguar-shores
title: Intel Jaguar Shores (Rack-Scale System)
sidebar_label: Intel Jaguar Shores
description: Intel Jaguar Shores 机柜级 AI 系统：替代取消的 Falcon Shores，2027/2028 推出，整合 Gaudi IP + Xeon 6 + 800G NIC。
keywords: [Intel Jaguar Shores, Falcon Shores cancelled, rack-scale, 2027, 2028, Gaudi IP, 800G NIC, Intel Foundry]
---

# Intel Jaguar Shores (Rack-Scale System)

## 产品概述

**Intel Jaguar Shores** 是 2026-05 取消 **Falcon Shores** 后 Intel 重启的**机柜级 AI 系统**项目，预计 **2027-2028 年**推出。与 Falcon Shores 的"单 GPU 芯片"策略不同，Jaguar Shores 是**机柜级集成系统**，整合：

- **Gaudi 系列 IP 的 AI 加速器**（替代 Gaudi 3）
- **Xeon 6 / Xeon 7 CPU**（Clearwater Forest / Diamond Rapids）
- **800G 网络 NIC**
- **Intel Foundry 18A / 14A 制程**

Jaguar Shores 是 Intel **"AI 系统厂商"** 战略的旗舰 —— 不再追求单芯片对标 NVIDIA，而是做**整机柜级解决方案**。

## 核心规格（推测）

| 项目 | 参数 |
|------|------|
| **形态** | **机柜级系统**（非单芯片） |
| **每机柜 AI 加速器数** | 64-128 颗（推测） |
| **每机柜 CPU 数** | 32-64 颗 Xeon |
| **AI 加速器 IP** | **Gaudi v4 架构**（基于 Gaudi 3 演进） |
| **制程** | **Intel Foundry 18A**（加速器） + TSMC 3nm（部分 IP） |
| **HBM 容量（每加速器）** | 144 GB HBM3e |
| **HBM 带宽（每加速器）** | ~5 TB/s |
| **FP8 算力（每加速器）** | ~2,500 TFLOPS（推测） |
| **FP8 算力（机柜）** | ~160-320 PFLOPS |
| **网络** | **800G 集成 NIC** + 拓扑优化 |
| **TDP（机柜）** | ~80-120 kW |
| **首发** | **2027-2028** |
| **TDP** | Cancelled |

> ⚠️ **未官方公布**：以上规格均为推测，**Intel 仅有路线图级别披露**。所有数字以 Intel 后续公布为准。

## Falcon Shores 取消事件

| 事件 | 时间 | 详情 |
|------|------|------|
| **Falcon Shores 首次公布** | 2023 | 200 PFLOPS 单芯片对标 B100 |
| **路线图调整** | 2024-12 | 取消 200 PF 目标，改为 "系统级" |
| **正式取消** | **2026-05-14** | Intel 财报披露 Falcon Shores 取消 |
| **转向 Jaguar Shores** | 2026-05 | 确认新机柜级系统项目 |
| **新方向** | 2027-2028 | 不再对标单芯片 NVIDIA |

> **取消原因**：
> 1. **第三次季度亏损**（2026-Q1）导致研发预算紧张
> 2. **单芯片 200 PF 不现实**（Rubin R200 = 50 PF 已是极限）
> 3. **HBM 供应紧张**（Micron / SK Hynix 优先供应 NVIDIA）
> 4. **市场转向机柜级**（NVIDIA NVL72、AMD Helios 主导）

## Jaguar Shores vs Falcon Shores

| 指标 | Falcon Shores（已取消） | **Jaguar Shores** |
|------|--------------------------|-------------------|
| 形态 | **单芯片 GPU** | **机柜级系统** |
| 目标 | 对标 B100 / B200 单芯片 | 对标 NVL72 / Helios 机柜 |
| 制程 | Intel 18A | **Intel 18A / 14A** |
| HBM 容量 | 288 GB HBM3e | **机柜级 ~10-15 TB** |
| FP8 算力 | 200 PFLOPS（取消前目标） | **机柜级 ~160-320 PFLOPS** |
| 集成 CPU | 独立 | **Xeon 6/7 紧耦合** |
| 集成 NIC | 无 | **800G 集成** |
| 发布时间 | 2025（取消） | **2027-2028** |
| 状态 | ❌ 已取消 | 🟡 路线图阶段 |

## Intel AI 战略重组（2026-05）

| 战略 | 内容 |
|------|------|
| **Gaudi 产品线** | 继续推 Gaudi 3 / Gaudi 3E（2026 维持） |
| **Falcon Shores** | ❌ **已取消** |
| **Jaguar Shores** | ✅ **重启机柜级 AI 系统** |
| **代工服务** | Intel Foundry 18A 为 NVIDIA / AMD / AWS 代工 |
| **x86 主导** | 强化 Xeon 6/7（AI 服务器 CPU 主导） |
| **Habana 品牌** | 保留，Jaguar Shores 整合 Gaudi IP |

> **Intel 不再做 AI GPU 直接对标 NVIDIA**：
> - 短期：Gaudi 3 维持（性价比对标）
> - 中期：Jaguar Shores 系统级（机柜级对标）
> - 长期：Intel Foundry 18A 为 AI 厂商代工（**Intel 做"AI 代工厂"**）

## 部署推荐配置

| 场景 | 推荐配置 |
|------|----------|
| **中大规模 LLM 训练** | Jaguar Shores 机柜 + Xeon 6 主机 |
| **企业级 AI 推理** | Jaguar Shores 单机柜 |
| **电信/政府国产化** | Intel 生态 + Xeon + Gaudi IP |
| **x86 生态保留** | 适合既有 Intel 客户 |

## 适用场景

- ✅ **Intel 生态保留**（既有 x86 客户）
- ✅ **机柜级 AI 系统**（2027+ 时代）
- ✅ **Intel Foundry 客户**（18A 工艺协同）
- ❌ 当前主流训练（2026 仍是 NVIDIA 主导）
- ❌ 超低延迟推理（Groq LPX 更优）
- ❌ 高密度集群（NVL72 / Helios 2026 已 GA）

## 厂商信息

| 项目 | 内容 |
|------|------|
| **厂商** | Intel Corporation |
| **首次公布** | 2026-05（财报披露） |
| **代号** | Jaguar Shores |
| **形态** | 机柜级系统（**非单芯片**） |
| **预计发布** | **2027-2028** |
| **制程** | Intel Foundry 18A / 14A |
| **关联产品** | Gaudi 3（IP 来源）、Xeon 6/7（CPU 协同） |

## 相关产品

- [Intel Gaudi 3](/docs/cards/intel/gaudi-3) - 当前 Gaudi IP 来源
- [Intel Gaudi 2](/docs/cards/intel/gaudi-2) - 上一代
- [NVIDIA Rubin R200](/docs/cards/nvidia/rubin-r200) - 同代 GPU
- [AMD MI400](/docs/cards/amd/mi400) - 同代 GPU
- [NVIDIA B300 Ultra](/docs/cards/nvidia/b300-ultra) - 上一代 NVIDIA
- [完整对比表](/docs/comparison)
