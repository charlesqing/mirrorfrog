---
id: sambanova-sn40l
title: SambaNova SN40L
sidebar_label: SambaNova SN40L
description: SambaNova SN40L 官方规格：TSMC 5nm、RDU 可重构数据流架构、单 socket 638 TFLOPS BF16、三层内存（520MB SRAM + 64GB HBM + 1.5TB DDR）、16 RDU 机柜 10.2 PFLOPS、约 10kW 风冷。
keywords: [SambaNova, SN40L, RDU, 可重构数据流, 三层内存, SambaRack, 10.2 PFLOPS]
---

# SambaNova SN40L

## 产品概述

**SambaNova SN40L** 是基于**可重构数据流单元（RDU - Reconfigurable Dataflow Unit）**架构的 AI 加速器，**不是传统指令式架构**。编译器把模型编译为数据流图并融合数百个复杂算子，硬件按数据流顺序执行，无需程序员手写 kernel。

**架构实现**（ISCA 论文披露）：SN40L RDU 采用 **TSMC 5nm** 工艺，是 **2.5D CoWoS Chiplet** 设计，含 **2 个 SN40L RDD（Reconfigurable Dataflow Die）+ HBM**。每个 socket 含 **1,040 个 PCU（Pattern Compute Unit）**，峰值 **638 BF16 TFLOPS**。

**核心特色是三层内存架构**——这是 SN40L 能同时容纳「大模型」与「大量模型」的关键。

## 核心规格（官方数据表）

| 项目 | 参数 |
|------|------|
| **架构** | RDU（可重构数据流），2.5D CoWoS chiplet（2 × RDD） |
| **制程** | **TSMC 5nm** |
| **显存** | **64 GB**（HBM，单 socket） |
| **显存类型** | **HBM + DDR + 片上 SRAM 三层** |
| **显存带宽** | 未公布（单 socket） |
| **片上 SRAM** | **520 MB**（单 RDU，官方口径 520MB；论文口径 520 MiB PMU SRAM） |
| **DDR 内存** | **1.5 TB**（单 socket，可插拔 DIMM） |
| **FP8** | 未公布 |
| **FP4** | 未公布 |
| **FP16/FP16 算力** | **638 TFLOPS**（BF16 峰值，单 socket） |
| **FP32** | 未公布 |
| **INT8** | 未公布 |
| **TDP** | 未公布（单 socket） |
| **互联** | **Coherent Memory 跨节点**（SambaRack 内 16 RDU） |
| **发布/量产** | 2023-09 发布，已商用（SambaNova 云与私有化部署） |

> 📌 **制程更正**：此前本站记「TSMC 7nm」，**实为 TSMC 5nm**（ISCA 论文明确 "Fabricated using TSMC 5nm technology"）。
>
> 📌 **TDP 更正**：此前本站记「TDP 200000 W」（= 200 kW），**与任何来源都不符**。SambaNova 官方对比文明确 SN40L **每机柜约 10 kW、风冷**，是 Cerebras WSE-3（23 kW / 水冷）的显著优势。**单 socket TDP 官方未公布**。

## 三层内存架构（SambaNova 官方口径）

| 内存层级 | 单 RDU 容量 | 作用 |
|----------|-------------|------|
| **片上 SRAM** | **520 MB** | 极速访问热点权重与激活值 |
| **HBM** | **64 GB** | 高吞吐数据供给 |
| **DDR DRAM** | **1.5 TB**（至 24 TB/节点） | 大容量模型权重存储 |

> 💡 **DDR → HBM 加载速度超过 1 TB/s**（单 SN40L Node 口径），这是模型热切换能做到毫秒级的前提。

## 整机配置（SambaRack / DataScale）

| 项目 | 配置 |
|------|------|
| **单 Node** | 8 个 RDU socket + 主机 |
| **单系统（SambaRack）** | **16 个 Cerulean SN40L RDU** |
| **总算力** | **10.2 PFLOPS BF16** |
| **总片上 SRAM** | **8 GB** |
| **总 HBM** | **1 TB** |
| **总 DDR** | **12 TB**（数据表口径）/ 至 24 TB（新口径） |
| **主机** | 2× 64 核 CPU，2 TB DDR4 |
| **存储** | 6× 7.6TB NVMe（RAID 10，21TB 可用） |
| **网络** | 400/200 GbE 高性能数据交换机 |
| **操作系统** | Red Hat Enterprise Linux |
| **机柜功耗** | **约 10 kW** |
| **散热** | **风冷**（Cerebras 需水冷） |

## 模型捆绑（Model Bundling）能力

SambaNova 的差异化能力——可在毫秒级热切换模型：

- **Llama 8B 切换至其他模型：最快 94 ms**
- **Qwen3-32B 切换：最快 85 ms**（可与 Whisper-Large-v3、E5-Mistral-7B-Instruct 捆绑）
- **DeepSeek 系列切换：< 650 ms**
- **单机柜可同时运行 DeepSeek-V3-0324 / R1-0528 / V3.1 / V3.1-Terminus 四个模型**
- 小模型 + 大模型捆绑做**投机解码**（speculative decoding）

> 💡 这解释了 SN40L 的定位差异：Cerebras 只能 SRAM（单模型占用大量硬件），SambaNova 的三层内存让**一个大机柜同时服务大量不同模型**，适合多租户企业场景。

## 厂商信息

| 项目 | 内容 |
|------|------|
| **制造商** | SambaNova Systems |
| **官网** | https://sambanova.ai |
| **产品页** | https://sambanova.ai/products |
| **软件栈** | SambaStack / SambaCloud |
| **软件伙伴** | vLLM、PyTorch、Hugging Face 集成 |

## 关键特性

- **可重构数据流**：编译器自动融合数百个算子，免手写 kernel
- **三层内存**：SRAM + HBM + DDR，单机柜 24 TB DDR 容量
- **Coherent Memory 跨节点**：16 RDU 共享内存池
- **毫秒级模型热切换**：支撑多租户与 Agentic 工作流
- **风冷 + 约 10 kW/机柜**：数据中心部署成本低

## 适用场景

- 企业级 LLM 私有部署
- 多模型多租户推理（Model Bundling 是核心卖点）
- 大模型推理（单机柜 24 TB DDR 容量）
- Agentic AI 工作流（快速模型切换）
- 数据中心 PUE 敏感场景（风冷）

## 相关产品对比

- [Groq LPU](/docs/cards/others/groq-lpu) - 类似创新架构
- [NVIDIA H100](/docs/cards/nvidia/h100) - 主流 GPU
- [Cerebras CS-4](/docs/cards/cerebras/wse-4) - SRAM-only 路线对比
- [Tenstorrent Blackhole](/docs/cards/others/tenstorrent-blackhole) - 开源 RISC-V

## 数据来源

- [SambaNova 官方数据表：DataScale（PDF）](https://sambanova.ai/hubfs/23945802/downloads/Product%20Collateral/SambaNova_DataScale_Data-Sheet_10.08.21EN.pdf) — 16 RDU、10.2 PFLOPS BF16、8GB SRAM / 1TB HBM / 12TB DDR、网络与存储配置
- [arXiv 论文：SambaNova SN40L: Scaling the AI Memory Wall with Dataflow and Composition of Experts (ISCA)](http://arxiv.org/pdf/2405.07518) — **TSMC 5nm**、2.5D CoWoS + 2 RDD、1,040 PCU、**638 BF16 TFLOPS/socket**、520 MiB SRAM、64 GiB HBM、1.5 TiB DDR、DDR→HBM >1 TB/s
- [SambaNova 官方博客：Model Bundling](https://sambanova.ai/blog/sambanova-model-bundling-unlocking-efficiency-for-ai-inference-and-agentic-workflows) — 三层内存（24 TB DDR / 1 TB HBM / 8 GB SRAM per node）、模型切换 85-650 ms 实测
- [SambaNova 官方博客：SambaNova vs. Cerebras](https://sambanova.ai/blog/sambanova-vs-cerebras/) — **每机柜约 10 kW、风冷**（对比 Cerebras 23 kW 水冷）、单 RDU 三层内存容量表
