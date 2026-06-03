---
slug: intel-cancels-falcon-shores-pivots-to-jaguar-shores
title: 'Intel 取消 Falcon Shores 转向 Jaguar Shores：从单芯片对标到机柜级系统'
authors: [aicomputecards]
tags: [strategy, news]
description: 2026-05-14 Intel 财报披露取消 Falcon Shores 单芯片 GPU 计划，转向机柜级 Jaguar Shores 系统项目（2027-2028 推出）。Intel AI 战略从"直接对标 NVIDIA"转向"机柜级系统 + 代工厂"。
---

**2026 年 5 月 14 日**，Intel 在 Q1 财报披露中**正式取消 Falcon Shores 单芯片 GPU 计划**，并确认新的机柜级 AI 系统项目 **Jaguar Shores** 将在 2027-2028 年推出。这是 Intel AI 战略的重大调整，本文深入分析其原因和未来。

{/* truncate */}

## Falcon Shores 取消事件

| 时间 | 事件 | 详情 |
|------|------|------|
| **2023** | 首次公布 | 200 PFLOPS 单芯片对标 B100 |
| **2024-12** | 路线图调整 | 取消 200 PF 目标，改为"系统级" |
| **2026-05-14** | **正式取消** | Intel 财报披露 Falcon Shores 取消 |
| **2026-05-14** | 转向 Jaguar Shores | 确认新机柜级系统项目 |
| **2027-2028** | 预计发布 | Jaguar Shores 机柜级系统 |

## 为什么取消 Falcon Shores？

### 1. 第三次季度亏损

2026 Q1 Intel 第三次季度亏损：

- 营收：$12.7B（同比 -7%）
- 净亏损：-$1.6B
- AI 业务（Habana）：营收仅 $0.4B，远低于预期

**研发预算紧张，无法同时支持 Falcon Shores + Gaudi + Xeon + 18A 工艺。**

### 2. 单芯片 200 PF 不现实

Falcon Shores 原计划 2025 年发布 200 PFLOPS 单芯片，对标 B100。

但到 2026 年，行业现实是：

- NVIDIA Rubin R200 单芯片 50 PFLOPS FP4 sparse（25 PF dense）已是极限
- **单芯片 200 PF 物理不可行**（功耗、面积、HBM 容量都达不到）
- **业界已转向机柜级方案**（NVL72、Helios、UltraServer）

### 3. HBM 供应紧张

HBM 供应紧张，优先供应 NVIDIA：

- **SK Hynix**：70% 产能给 NVIDIA
- **Micron**：60% 产能给 NVIDIA
- **Samsung**：份额被压缩

**Intel 难以获得足够 HBM 供应单芯片 200 PF 计划。**

### 4. 市场转向机柜级

2026 年 AI 算力市场已转向机柜级：

- NVIDIA Rubin NVL72（72 GPU）
- AMD Helios（72 MI400）
- AWS Trn3 UltraServer（144 chip）
- Google TPU 8t pod（9,216 chip）

**单芯片对标已无意义，机柜级才是主战场。**

## Jaguar Shores：Intel 的机柜级反击

| 项目 | 参数（推测） |
|------|--------------|
| **形态** | **机柜级系统**（非单芯片） |
| **每机柜 AI 加速器数** | 64-128 颗（推测） |
| **每机柜 CPU 数** | 32-64 颗 Xeon |
| **AI 加速器 IP** | **Gaudi v4 架构**（基于 Gaudi 3 演进） |
| **制程** | **Intel Foundry 18A** |
| **HBM 容量（每加速器）** | 144 GB HBM3e |
| **HBM 带宽（每加速器）** | ~5 TB/s |
| **FP8 算力（每加速器）** | ~2,500 TFLOPS（推测） |
| **FP8 算力（机柜）** | ~160-320 PFLOPS |
| **网络** | **800G 集成 NIC** |
| **TDP（机柜）** | ~80-120 kW |
| **首发** | **2027-2028** |

> ⚠️ **未官方公布**：以上规格均为推测，**Intel 仅有路线图级别披露**。所有数字以 Intel 后续公布为准。

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

## Intel Foundry 18A 战略

Intel 的真正"AI 终极战略"是**代工**：

| 客户 | 18A 代工产品 |
|------|-------------|
| **NVIDIA** | Rubin 后续代（2027+） |
| **AMD** | MI500 后续代（2028+） |
| **AWS** | Trainium 4（2027） |
| **Microsoft** | Maia 2（2026） |

> **如果 Intel Foundry 18A 良率达到台积电 N3 水平**，Intel 将从"AI GPU 失败者"转变为"AI 算力代工霸主"。

## 对 Intel 客户的影响

### Gaudi 3 / Gaudi 3E（短期）

- 2024 发布，性价比优于 NVIDIA H100
- 2026 维持，作为 Intel 主力 AI 训练芯片
- 主要客户：部分企业级 + 政府/电信

### Jaguar Shores（中期）

- 2027-2028 发布
- 适合**机柜级训练**
- 主要客户：政府、电信、超算中心

### Intel Foundry 18A（长期）

- 2027 量产（推测）
- 客户：NVIDIA、AMD、AWS、Microsoft
- **Intel 的真正 AI 收入来源**

## 对 AI 行业的影响

### 1. AI 芯片竞争格局变化

| 厂商 | 2025 定位 | 2026+ 定位 |
|------|----------|-----------|
| **NVIDIA** | GPU 主导 | **GPU + LPU + 系统级**（最强） |
| **AMD** | GPU 第二 | **GPU + 机柜级 UALoF** |
| **Intel** | 单芯片失败 | **机柜级 + 代工厂** |
| **Google** | TPU 专用 | **TPU 拆分 + 训练/推理双线** |
| **AWS** | Trainium 自研 | **3nm + UltraServer** |
| **Huawei** | 国产替代 | **3× H20 + 系统级** |
| **Cerebras** | 晶圆级 | **IPO + WSE-4** |
| **Groq (NVIDIA)** | LPU 独立 | **NVIDIA 收购整合** |

### 2. UALoF 开放互联加速

Intel 加入 UALoF 联盟后：

- AMD + Intel + Broadcom 共同推动 UALoF
- 挑战 NVIDIA NVLink 封闭生态
- **2027-2028 年 UALoF 可能成为开放标准**

### 3. AI 代工业务竞争

- **TSMC 仍主导**：3nm / 2nm 工艺领先
- **Intel Foundry 18A 迎头赶上**：2026 试产，2027 量产
- **Samsung Foundry**：3nm GAA 工艺量产，但客户少

## 详细产品页

- [Intel Jaguar Shores 完整规格](/docs/cards/intel/jaguar-shores)
- [Intel Gaudi 3（当前主力）](/docs/cards/intel/gaudi-3)
- [Intel Gaudi 2（上一代）](/docs/cards/intel/gaudi-2)
- [NVIDIA Rubin R200（同期）](/docs/cards/nvidia/rubin-r200)
- [AMD MI400（同期）](/docs/cards/amd/mi400)
- [未来路线图](/docs/roadmap)

## 总结

Intel 取消 Falcon Shores 转向 Jaguar Shores 是 2026 年 AI 芯片行业**最重大战略调整**之一：

1. **承认单芯片对标 NVIDIA 不现实**
2. **转向机柜级系统**（与 AMD Helios 同方向）
3. **强化 Intel Foundry 18A 代工**（真正长期战略）
4. **Gaudi IP 整合到 Jaguar Shores**
5. **开放互联 UALoF 联盟**（挑战 NVLink）

Intel 的 AI 战略从"直接对标 NVIDIA"转向"机柜级系统 + AI 代工厂"，是一次**务实的战略调整**。未来 5 年，Intel Foundry 18A 的成败将决定 Intel 在 AI 时代的最终命运。
