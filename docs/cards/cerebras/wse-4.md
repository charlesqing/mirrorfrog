---
id: wse-4
title: Cerebras WSE-4 (CS-4)
sidebar_label: Cerebras WSE-4
description: Cerebras WSE-4 推测规格：第四代晶圆级 AI 芯片、5nm / 3nm、~60-80 万 AI Core、IPO 后首代产品，预计 2027 年公布。
keywords: [Cerebras WSE-4, CS-4, wafer-scale, 4th gen, IPO, 2027, Cerebras IPO, CS-5, CBRS]
---

# Cerebras WSE-4 (CS-4)

## 产品概述

**Cerebras WSE-4**（系统代号 **CS-4**）是 Cerebras Systems 的**第四代晶圆级 AI 芯片**（**Wafer-Scale Engine, WSE**），预计 **2027 年公布**（Cerebras IPO 2026-05 上市后）。WSE-4 是 WSE-3 的**制程升级 + 性能提升**版本，**5nm 或 3nm 工艺**（取决于台积电 N3 产能），**AI Core 数量**预计从 WSE-3 的 90 万**提升到 ~150 万**。

WSE-4 是 Cerebras 上市后**第一代"完全公开"产品**，将首次提供**详细的 SPEC 跑分、定价、生态支持**等公开信息。

## 核心规格（推测）

| 项目 | WSE-3 (CS-3) | **WSE-4 (CS-4)** | 提升 |
|------|--------------|------------------|------|
| **制程** | TSMC 5nm | **TSMC 3nm**（推测） | +一代 |
| **晶体管数** | 4 万亿 | **~5-6 万亿**（推测） | 1.4× |
| **晶圆尺寸** | 300mm 完整 | 300mm 完整 | 同 |
| **AI Core 数** | 900,000 | **~1,500,000**（推测） | 1.67× |
| **片上 SRAM** | 44 GB | **~80 GB**（推测） | 1.8× |
| **片上 SRAM 带宽** | 21 PB/s | **~40 PB/s**（推测） | 1.9× |
| **BF16 算力** | 125 PFLOPS | **~200 PFLOPS**（推测） | 1.6× |
| **FP8 算力** | 250 PFLOPS（推测） | **~400 PFLOPS**（推测） | 1.6× |
| **TDP** | ~25 kW | **~30-35 kW**（推测） | 1.3× |
| **首发** | 2024 | **2027 预计** | — |

> ⚠️ **未官方公布**：以上为推测，**Cerebras 仅有 WSE-3 公开信息**。WSE-4 详细规格以 Cerebras 后续公布为准。

## Cerebras 历史与 IPO

| 时间 | 事件 | 详情 |
|------|------|------|
| **2015** | 创立 | Andrew Feldman 创立 Cerebras Systems |
| **2019** | WSE-1 公布 | 首款晶圆级芯片（40 万核） |
| **2021** | WSE-2 公布 | 85 万核，20nm |
| **2024** | WSE-3 (CS-3) | 90 万核，44GB SRAM，125 PF BF16 |
| **2024-12** | 沙特 G42 投资 | G42 投资数亿美元（中东客户） |
| **2025** | OpenAI 合作 | OpenAI 采购 Cerebras 推理算力 |
| **2026-04-17** | **IPO 申请** | 提交 S-1 申请上市 |
| **2026-05** | **IPO 上市** | 目标 Nasdaq "CBRS"，估值 $22-25B |
| **2027** | **WSE-4 预计** | IPO 后首代产品 |

> **Cerebras IPO 关键数据**：
> - **估值**：$22-25B（参考最新一轮融资）
> - **2025 营收**：约 $510M（同比 +150%）
> - **2025 净亏损**：约 $200M（仍亏损）
> - **OpenAI 大单**：$10B 推理算力长期合同
> - **上市窗口**：2026 年 5 月

## WSE-4 vs WSE-3 vs NVIDIA Rubin R200

| 指标 | WSE-3 (CS-3) | **WSE-4 (推测)** | Rubin R200 |
|------|--------------|------------------|------------|
| 形态 | **单芯片晶圆级** | **单芯片晶圆级** | 单卡多 die |
| AI Core 数 | 900,000 | **~1,500,000** | ~10,000（SM） |
| SRAM | 44 GB | **~80 GB** | 288 GB HBM4 |
| SRAM 带宽 | 21 PB/s | **~40 PB/s** | 22 TB/s HBM4 |
| BF16 算力（稀疏） | 125 PFLOPS | **~200 PFLOPS** | 25 PFLOPS |
| **单芯片 BF16 算力比** | **5×** | **8×** | 1×（基准） |
| TDP | 25 kW | **~30 kW** | 1.8 kW |
| 散热 | **液冷 + 巨系统** | 液冷 + 巨系统 | 液冷（卡级） |
| 生态 | PyTorch + JAX | 同 | CUDA |

> 💡 **WSE 的核心优势**：**片上 SRAM + 高带宽 + 高算力**。单芯片 BF16 算力是 Rubin R200 的 5-8×（按单芯片对比），**但功耗和体积是大问题**（25-30 kW/单芯片 vs 1.8 kW/单卡）。

## Cerebras CS-4 系统（推测）

| 项目 | 配置 |
|------|------|
| **WSE 数** | 1（单芯片晶圆级） |
| **服务器尺寸** | 1U + 大型散热（与 CS-3 类似） |
| **MemoryX** | 1.5 TB 扩展 DRAM（外置） |
| **SwarmX** | 多 WSE 互联（可选，192 个 WSE） |
| **总 BF16 算力** | ~200 PFLOPS（单 WSE-4） |
| **TDP（单 WSE-4）** | ~30 kW |

## 软件生态

- **Cerebras Software Platform (CSoft)**：基于 PyTorch
- **JAX + Cerebras backend**：Google 集成
- **vLLM 0.7+ Cerebras backend**（推测）
- **HuggingFace 集成**
- **Triton + Cerebras backend**
- **OpenAI 兼容 API**（Cerebras Inference）

## 适用场景

- ✅ **超大规模 LLM 训练**（WSE-4 单芯片可装 1T+ 模型）
- ✅ **超低延迟推理**（CS-4 Inference）
- ✅ **政府/科研计算**（高算力 + 国产化选项）
- ✅ **OpenAI 推理客户**（WSE-4 预计支撑 OpenAI 部分推理负载）
- ❌ 边缘部署（功耗 / 体积）
- ❌ 中小模型训练（成本不经济）

## 厂商信息

| 项目 | 内容 |
|------|------|
| **厂商** | Cerebras Systems |
| **首次公开** | 2027（预计） |
| **产品页** | https://www.cerebras.net/ |
| **代工** | TSMC |
| **IPO 状态** | **2026-05 上市**（Nasdaq: CBRS） |
| **客户** | OpenAI、G42、Mistral、Meta 等 |

## 相关产品

- [Cerebras WSE-3](/docs/cards/cerebras/wse-3) - 当前主力
- [Cerebras WSE-2](/docs/cards/cerebras/wse-2) - 上代
- [NVIDIA Rubin R200](/docs/cards/nvidia/rubin-r200) - 同代 GPU
- [NVIDIA Groq 3 LPX](/docs/cards/nvidia/groq-3-lpx) - 推理对标
- [Google TPU 8t](/docs/cards/google/tpu-8t) - 训练 ASIC 对标
- [完整对比表](/docs/comparison)
