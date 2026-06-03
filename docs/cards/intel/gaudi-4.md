---
id: gaudi-4
title: Intel Gaudi 4 (2026-Q2 推测)
sidebar_label: Gaudi 4
description: Intel Gaudi 4 详尽规格（推测）：3nm、192GB HBM3E、3.7 PF FP8 dense、Gaudi 3 2× 性能、SynapseAI 软件栈。
keywords: [Intel Gaudi 4, Gaudi 4, Intel AI, 3nm, HBM3E, SynapseAI, 对标 H200]
---

# Intel Gaudi 4 (2026-Q2 推测)

:::warning 推测内容
本页规格基于 Intel 2025-06 公开声明 + Pat Gelsinger 2024 路线图 + 行业分析师预测综合推测。Intel **官方完整规格尚未发布**，**正式数据以 2026-Q2 实际发布为准**。
:::

## 产品概述

**Intel Gaudi 4** 是 Intel 第四代 AI 训练/推理加速器，**预计 2026-Q2 发布**（从原 2025-Q4 推迟）。基于 Intel 18A（1.8nm）工艺，**192GB HBM3E** 内存，**3.7 PFLOPS FP8 dense** 算力（Gaudi 3 的 2×），**Tensor 处理器 + GEMM 引擎**架构。配套 **SynapseAI** 软件栈（PyTorch / JAX / TensorFlow 兼容）。

**战略地位**：在 NVIDIA H200/B200、AMD MI325X/MI350 竞争下，Intel Gaudi 4 是 **Intel AI 业务的核心产品**（Gaudi 3 客户：IBM 云、Supermicro、ASUS、Lambda Labs）。但 Intel 已宣布 **2026-05-14 取消 Falcon Shores** 转向机柜级 **Jaguar Shores**，Gaudi 4 可能是 **独立 Gaudi 系列的最后一颗芯片**。

## 核心规格（推测）

| 项目 | 参数 |
|------|------|
| **架构** | Intel Gaudi 第四代（与 Gaudi 3 同架构演进） |
| **制程** | Intel 18A（1.8nm，等效 2nm 级） |
| **HBM** | **192 GB HBM3E**（6 个 stack） |
| **内存带宽** | **~5 TB/s**（每 HBM3E 819 GB/s × 6） |
| **FP8 dense** | **3.7 PFLOPS**（Gaudi 3 的 2×） |
| **BF16 dense** | **1.85 PFLOPS** |
| **FP16 dense** | 1.85 PFLOPS |
| **FP32** | ~462 TFLOPS |
| **TDP** | **~700 W** |
| **板卡形态** | OAM / PCIe Gen5 ×16 |
| **互联** | 24× 200GbE RoCE v2（Gaudi 3 同款，扩展性极佳） |
| **量产时间** | **2026-Q2**（从 2025-Q4 推迟） |
| **单价（OAM）** | **~$25,000 - $30,000**（推测） |

## 与 Gaudi 3 对比

| 指标 | Gaudi 4（推测） | Gaudi 3 | 提升 |
|------|------------------|---------|------|
| 制程 | Intel 18A (1.8nm) | TSMC 5nm | 大幅升级 |
| HBM | 192GB HBM3E | 128GB HBM2E | +50% |
| 带宽 | 5 TB/s | 3.7 TB/s | +35% |
| FP8 | 3.7 PF | 1.835 PF | 2× |
| BF16 | 1.85 PF | 459 TF | 4× |
| TDP | 700W | 600W | +17% |
| 制程来源 | Intel 18A 自有 | TSMC 代工 | 战略转变 |
| 价格（推测） | $25-30K | $12-15K | ~2× |

## 与竞品对比（2026 H1 旗舰）

| 指标 | Intel Gaudi 4 | NVIDIA H200 | AMD MI355X | 华为昇腾 920 |
|------|---------------|--------------|------------|---------------|
| 内存 | 192GB HBM3E | 141GB HBM3E | 288GB HBM3E | 96GB HBM2E |
| 带宽 | 5 TB/s | 4.8 TB/s | 8 TB/s | 4 Tbps |
| FP8 dense | 3.7 PF | 1.6 PF sparse | 4.6 PF | ~1.8 PF BF16 |
| TDP | 700W | 700W | ~750W | ~600W |
| 软件 | SynapseAI | CUDA | ROCm | CANN |
| 价格 | ~$27K | $30K | ~$25K | N/A |

> **Gaudi 4 优势**：**软件独立性最强**（24× 200GbE 标配以太网互联，**无需 NVLink/UALoF 等私有互联**），是 **多云、多厂商生态最佳选择**。

## 24 × 200GbE 以太网互联

| 维度 | 规格 |
|------|------|
| **端口数** | **24 × 200 GbE**（每卡） |
| **总带宽** | **4.8 Tb/s**（双向 600 GB/s） |
| **协议** | RoCE v2（RDMA over Converged Ethernet） |
| **交换机** | 兼容任何以太网交换机（Arista、Broadcom、Juniper） |
| **拓扑** | 全互联 Fat-Tree / Dragonfly+ |
| **最大集群** | 8,192 节点（Gaudi 3 验证） |

**对比 NVIDIA NVLink + InfiniBand**：
- ✅ **开放标准**（Ethernet）
- ✅ **成本低**（100G/200G 以太网 vs InfiniBand）
- ✅ **多厂商互操作**
- ❌ 延迟略高（~1-2 μs RoCE vs ~0.5 μs IB）
- ❌ 大规模 NCCL 优化比 NVLink 弱

## SynapseAI 软件栈

| 层级 | 工具 | 说明 |
|------|------|------|
| **AI 框架** | **SynapseAI** | PyTorch / JAX / TensorFlow 一键切换 |
| **图编译器** | Synapse Compiler | 类 XLA + TVM 混合 |
| **算子库** | Habana Custom Ops | 自定义算子 SDK |
| **量化工具** | Quantization Toolkit | INT8 / FP8 训练 |
| **通信库** | Habana CCL | 集合通信（AllReduce 等） |
| **图优化** | Graph Compiler | 自动算子融合 |

> ⚠️ **生态限制**：相比 CUDA 10 年生态，SynapseAI 仍较新。**PyTorch 模型 80-90% 可零修改运行**，但复杂 LLM 训练需手工优化。

## 厂商信息

| 项目 | 内容 |
|------|------|
| **公司** | Intel Corporation |
| **业务部门** | Intel Data Center & AI Group（DCAI） |
| **产品页** | https://www.intel.com/content/www/us/en/products/details/processors/ai-accelerators/gaudi.html |
| **总部** | 美国加州圣克拉拉 |
| **CEO** | Lip-Bu Tan（2025-03 上任） |
| **代工** | Intel 18A 自有（俄勒冈州 Fab 52 + 亚利桑那州 Fab 62） |
| **目标客户** | IBM 云、Supermicro、ASUS、Lambda Labs、Zenlayer、印度 Yotta |
| **2025 Gaudi 营收** | ~$3.5B（增长 50% YoY） |

## Gaudi 产品线

| 产品 | 发布 | 算力 FP8 | 内存 | 状态 |
|------|------|----------|------|------|
| Gaudi 1 | 2019-Q3 | 0 (FP16: 165 TF) | 32GB HBM2 | EOL |
| Gaudi 2 | 2022-Q3 | 0 (FP16: 459 TF) | 96GB HBM2E | EOL |
| **Gaudi 3** | 2024-Q2 | 1.835 PF | 128GB HBM2E | **当前旗舰** |
| **Gaudi 4** | **2026-Q2**（推测）| **3.7 PF** | **192GB HBM3E** | **下一代** |
| Gaudi 5 | 2027+ | ? | ? | 路线图中 |

## 关键特性

- **开放以太网互联**（24× 200GbE，类 InfiniBand 但更开放）
- **FP8 dense**（不依赖稀疏性，2× FP16 实际算力）
- **Intel 18A 自有代工**（战略转变，从 TSMC 5nm 转向 Intel Foundry）
- **SynapseAI 兼容 PyTorch**（相比 ROCm / 寒武纪生态更友好）
- **价格优势**（推测 ~$25-30K vs H200 $30K）
- **缺点**：TDP 700W 偏高，软件生态 5 年 vs CUDA 18 年

## 适用场景

- ✅ **多云 AI 训练**（开放以太网，可部署在任何 DC）
- ✅ **大型 LLM 训练**（HBM3E 192GB 容纳更大模型）
- ✅ **HPC + AI 融合**（Fortran / MPI 兼容）
- ✅ **政府/国企 AI 项目**（Intel 品牌 + 美国制造）
- ✅ **预算敏感**（相比 H200 价格优势）
- ❌ 顶级前沿 FP4 模型（Gaudi 4 推测不支持 FP4）
- ❌ NVLink-only 工作负载（如 NVIDIA Megatron-LM 强优化）

## Intel AI 战略转变

2026-05-14 Intel 宣布 **取消 Falcon Shores**（原计划 Gaudi 4 + GPU 融合芯片），转向 **机柜级 Jaguar Shores** 系统。这意味着：
- **Gaudi 4** 可能是 **独立 Gaudi 加速器最后一代**
- **2027+** Intel AI 路线图转向 **Jaguar Shores 机柜**（集成 Gaudi IP + Xeon + 800G NIC）
- 客户应考虑 **Gaudi 4 + Jaguar Shores 迁移路径**

## 相关卡

- [Intel Gaudi 3](/docs/cards/intel/gaudi-3) - 上一代
- [Intel Gaudi 2](/docs/cards/intel/gaudi-2) - 前代
- [Intel Jaguar Shores](/docs/cards/intel/jaguar-shores) - 机柜级替代
- [NVIDIA H200](/docs/cards/nvidia/h200) - 竞品
- [AMD MI355X](/docs/cards/amd/mi355x) - 竞品
- [Huawei Ascend 920](/docs/cards/huawei/ascend-920) - 国产对比
- [Intel Max Series](/docs/cards/intel/max-series) - HPC GPU
