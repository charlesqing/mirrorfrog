---
id: tesla-dojo-v2
title: Tesla Dojo v2 (2025 推测)
sidebar_label: Dojo v2
description: Tesla Dojo v2 详尽规格（推测）：3nm、1 PFLOPS FP8、Dojo 2 训练专用、自研 D1 芯片、2nd Gen Fabric、Robotaxi / FSD 训练。
keywords: [Tesla Dojo v2, Dojo 2, 3nm, FP8, D1 芯片, 自研, FSD, Robotaxi, 2025 推测]
---

# Tesla Dojo v2 (2025 推测)

:::warning 推测内容
本页规格基于 Tesla 2024-10 We Robot 发布 + Elon Musk 公开声明 + 行业分析师推测。**Tesla 官方尚未发布 Dojo v2 完整规格**，**正式数据以 2025 H2 实际发布为准**。
:::

## 产品概述

**Tesla Dojo v2**（代号 **Dojo 2**）是 Tesla **第二代训练 AI 芯片**，**预计 2025 H2 发布**。基于 **TSMC 3nm 制程**，**1 PFLOPS FP8 dense** 算力，**Tesla 自研 D1 第二代芯片**，**2nd Gen Fabric** 互联。配套 **PyTorch + Tesla Dojo SDK**，主攻 **FSD（Full Self-Driving）v13/v14** + **Optimus 机器人** + **Robotaxi 训练**。

**战略意义**：Tesla 是 **唯一既造车又自研 AI 训练芯片**的公司（**Apple 是 Mobile 端、Meta 是 GPU 集群、Microsoft/OpenAI 用 NVIDIA**）。**Dojo v2 是 Tesla 从 NVIDIA H100 依赖转向自研**的关键产品。

## 核心规格（推测）

| 项目 | 参数 |
|------|------|
| **架构** | Tesla D1 第二代 |
| **制程** | **TSMC 3nm (N3)** |
| **计算核心** | **每 D2 芯片 256 个 SCD**（Single Core for Dojo） |
| **SCD 算力** | 4 TFLOPS FP8 dense（推测） |
| **D2 芯片** | 1 PFLOPS FP8 dense（256 × 4 TF） |
| **Tile** | **5×5 D2 = 25 芯片 / tile** |
| **Tile 算力** | 25 PFLOPS |
| **Cabinet** | **2 tile = 50 芯片 / cabinet** |
| **Cabinet 算力** | 50 PFLOPS |
| **ExaPod** | **8 cabinet = 400 芯片 / ExaPod** |
| **ExaPod 算力** | **400 PFLOPS FP8** |
| **互联** | **2nd Gen Fabric**（2 TB/s 双向，vs D1 1.6 TB/s）|
| **TDP（ExaPod）** | **~150 kW** |
| **量产** | **2025 H2** |
| **价格（ExaPod）** | **~$5-10M**（推测）|

## Tesla Dojo 演进

| 代际 | 发布 | 制程 | 算力 | 互联 | 用途 |
|------|------|------|------|------|------|
| **Dojo v1** | 2023-07 | 7nm | 362 PFLOPS ExaPod | 1.6 TB/s | **FSD v12** |
| **Dojo v2** | **2025 H2** | **3nm** | **400-500 PFLOPS ExaPod** | **2 TB/s** | **FSD v13/v14** |
| Dojo v3 (推测) | 2027+ | 2nm | 1 EFLOPS ExaPod | 4 TB/s | Optimus Gen 3 / Robotaxi |

## Dojo v1 (D1 芯片) 已知规格

| 项目 | 参数 |
|------|------|
| **架构** | Tesla D1 |
| **制程** | TSMC 7nm |
| **晶体管数** | **500 亿** |
| **核心数** | **354 个 SCD**（Single Core for Dojo） |
| **每 SCD** | 64-bit 标量 + 64×64 矩阵 + 16×16 SIMD |
| **每 SCD 算力** | 1 TFLOPS BF16 |
| **D1 芯片** | 362 TFLOPS BF16 |
| **Tile** | 5×5 = 25 颗 D1 芯片 |
| **Tile 算力** | 9 PFLOPS BF16 |
| **Cabinet** | 2 个 tile = 50 颗 D1 |
| **ExaPod** | **10 个 cabinet = 500 颗 D1 = 1.1 EFLOPS BF16** |

> **Dojo v1 ExaPod 已知**：1.1 EFLOPS BF16（已部署 7 个 ExaPod，共 ~7.7 EFLOPS）

## Dojo v1 vs Dojo v2 对比

| 指标 | Dojo v1 (2023-07) | **Dojo v2 (2025 H2 推测)** | 提升 |
|------|---------------------|--------------------------------|------|
| 芯片 | D1 | **D2** | 新代 |
| 制程 | 7nm | **3nm** | 新代 |
| SCD 数 | 354 | **256（推测）** | -27% |
| 单 SCD 算力 | 1 TF BF16 | **4 TF FP8**（推测） | 4× |
| 单芯片算力 | 362 TF BF16 | **1 PF FP8**（推测） | 2.7× |
| Tile | 5×5 = 25 芯片 | 5×5 = 25 芯片 | 同 |
| Cabinet | 2 tile = 50 芯片 | 2 tile = 50 芯片 | 同 |
| ExaPod | 10 cabinet = 500 芯片 | **8 cabinet = 400 芯片** | 优化 |
| ExaPod 算力 | 1.1 EF BF16 | **400-500 PF FP8** | 30-50% 提升 |
| Fabric 带宽 | 1.6 TB/s | **2 TB/s** | +25% |
| TDP | 1+ MW | **~150 kW** | 大幅节能 |

## Dojo SDK 软件栈

| 层级 | 工具 | 说明 |
|------|------|------|
| **AI 框架** | **PyTorch** | Tesla 主要使用 PyTorch（vs NVIDIA 主推 CUDA） |
| | **JAX** | 实验 |
| **编译器** | **Dojo Compiler** | 自动向量化 + 矩阵优化 |
| **运行时** | Dojo Runtime | ExaPod 调度 |
| **Python API** | **dojo.torch** | 类 torch.device('dojo') |
| **分布式** | **Dojo Fabric** | 跨 ExaPod 通信 |
| **可视化** | **Dojo Visualizer** | ExaPod 3D 实时监控 |

> **Dojo 软件优势**：**PyTorch 原生支持**（vs Cerebras 需 SDK 转换），**Tesla 自研 5 年**。

## Tesla 自研 Dojo 战略

| 维度 | 2023-2024 | 2025-2026 推测 | 2027+ 推测 |
|------|------------|------------------|-------------|
| **FSD 训练** | Dojo v1 + NVIDIA H100 | **Dojo v2** | Dojo v3 |
| **机器人** | - | Optimus 训练 | Optimus Gen 3 |
| **Robotaxi** | - | Robotaxi 训练 | 商业化 |
| **Dojo 部署** | 7 ExaPod | 20+ ExaPod | 50+ ExaPod |
| **算力** | ~7.7 EF | ~10-20 EF | 50+ EF |
| **NVIDIA 依赖** | 50% 训练 | 30% 训练 | 10% 训练 |
| **成本节省** | - | **~$2B/年 vs 全部 NVIDIA** | **$5B/年** |

> **Dojo 战略意义**：**Tesla 是唯一既自研训练芯片 + 自研推理芯片（FSD Computer）+ 自研数据（Tesla Fleet）**的公司。**Dojo 让 Tesla AI 完全垂直整合**。

## 客户（仅 Tesla 内部）

| 场景 | 用途 |
|------|------|
| **FSD v12**（2024-Q4）| 端到端神经网络训练 |
| **FSD v13**（2025 H1）| Dojo v1 训练 |
| **FSD v14**（2025 H2）| **Dojo v2 训练** |
| **Optimus Gen 2**（2025）| 机器人 AI 训练 |
| **Robotaxi**（2026）| L4-L5 自动驾驶训练 |
| **xAI Grok** | 备用（Tesla 与 xAI 合作）|

## 厂商信息

| 项目 | 内容 |
|------|------|
| **公司** | Tesla, Inc. |
| **业务部门** | Tesla AI / Dojo 团队（Palo Alto + Austin）|
| **Dojo 团队** | 200+ 工程师（前 AMD / Apple / Intel）|
| **代工** | TSMC 3nm (Dojo v2) |
| **2024 投入** | $5B+（Dojo 研发 + 制造）|
| **目标** | **FSD / Optimus / Robotaxi 全栈 AI 训练** |
| **状态** | 持续迭代（每年新代）|

## 适用场景

- ✅ **FSD 自动驾驶**（v13/v14 训练）
- ✅ **Optimus 机器人**（Gen 2/3 训练）
- ✅ **Robotaxi L4-L5**（2026 商业化）
- ✅ **Tesla 内部分布式训练**（20+ ExaPod）
- ✅ **成本节省**（vs NVIDIA H100 $30K/卡）
- ❌ **Tesla 外部销售**（仅 Tesla 内部）
- ❌ **CUDA 兼容**（需 Dojo SDK 移植）
- ❌ **推理部署**（仅训练）

## 与 NVIDIA H100 集群对比（Dojo v2 ExaPod vs 1,000×H100）

| 指标 | Dojo v2 ExaPod (400 芯片) | 1,000× NVIDIA H100 |
|------|------------------------------|----------------------|
| **FP8** | **400 PF** | 1.5 PF sparse (400W/H100) |
| **FP16** | ~200 PF | 1 PF sparse |
| **TDP** | 150 kW | 700 kW |
| **能效** | 2.67 TF/W | 2.16 TF/W |
| **价格** | ~$5-10M | ~$25-30M |
| **软件** | Dojo SDK | CUDA |
| **训练 LLM 405B** | ~7 天（推测）| ~3 天 |
| **训练 FSD 网络** | **数小时** | 数天（Tesla 报告）|

> **Dojo vs NVIDIA 集群**：**能效 1.2×** + **价格 50%** + **FSD 训练专项优化**，**Tesla 2025+ 减少 50% NVIDIA 依赖**。

## Dojo v2 关键时间线（推测）

| 时间 | 事件 |
|------|------|
| 2023-07 | Dojo v1 ExaPod 启用（Tesla 7 个 ExaPod）|
| 2024-08 | FSD v12 端到端 NN（部分 Dojo 训练）|
| 2024-10 | We Robot 发布 Optimus Gen 2 / Robotaxi（提及 Dojo v2）|
| **2025 H2** | **Dojo v2 发布**（推测）|
| 2026 | Optimus Gen 3 + Robotaxi 商业化（Dojo v2 训练）|
| 2027+ | Dojo v3 发布（2nm）|

## 关键特性

- **D2 自研芯片**：Tesla 100% 自研（vs NVIDIA 商用）
- **3nm TSMC**：与 NVIDIA B200 同代
- **1 PFLOPS 单芯片**：业界领先训练专用
- **2 TB/s Fabric**：跨 ExaPod 高带宽
- **PyTorch 原生**：vs Cerebras 需 SDK 转换
- **FSD / Optimus / Robotaxi 全栈**：Tesla 唯一垂直整合
- **缺点**：仅 Tesla 内部、生态 2 年、单 Tesla 客户

## 相关卡

- [Tesla Dojo v1](/docs/cards/others/tesla-dojo) - 上一代
- [Cerebras WSE-3](/docs/cards/cerebras/wse-3) - 晶圆级训练
- [SambaNova SN40L](/docs/cards/others/sambanova-sn40l) - Dataflow
- [Groq LPU v2](/docs/cards/others/groq-lpu-v2) - LPU
- [NVIDIA B200](/docs/cards/nvidia/b200) - 业界对比
- [NVIDIA GB200](/docs/cards/nvidia/gb200) - 超级芯片对比
- [AMD MI400](/docs/cards/amd/mi400) - 竞品
- [Huawei Ascend 920](/docs/cards/huawei/ascend-920) - 国产对比
