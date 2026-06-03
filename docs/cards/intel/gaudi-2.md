---
id: gaudi-2
title: Intel Gaudi 2
sidebar_label: Intel Gaudi 2
description: Intel Gaudi 2 详尽规格：96GB HBM2e、432 TFLOPS BF16、600W TDP、24× 100GbE 集成网卡，Habana Labs 训练加速器。
keywords: [Intel Gaudi 2, Habana, HBM2e, 训练 ASIC, AI 训练加速器]
---

# Intel Gaudi 2 (Habana Labs)

## 产品概述

Intel Gaudi 2 由 Intel 收购的 **Habana Labs** 开发，是面向深度学习训练和推理的专用加速器。最大的特点是集成了 **24× 100GbE RDMA** 网卡，无需额外购买 InfiniBand 或以太网卡即可构建大规模分布式训练集群。Gaudi 2 性能可与 NVIDIA H100 竞争，**价格更优**。

## 核心规格

| 项目 | 参数 |
|------|------|
| **架构** | Gaudi 2（Habana 定制） |
| **制程** | TSMC 7nm |
| **计算引擎** | 24× TPC（Tensor Processor Core） |
| **矩阵引擎** | 2× MME（Matrix Multiplication Engine） |
| **显存** | 96 GB HBM2e |
| **显存带宽** | 2.46 TB/s |
| **FP32** | N/A（推理路径） |
| **BF16/FP16** | 432 TFLOPS |
| **FP8** | 865 TFLOPS（AMD 估算） |
| **INT8** | 865 TOPS |
| **TDP** | 600 W |
| **网络** | **24× 100GbE RDMA**（集成网卡） |
| **PCIe** | Gen 4 x16 |
| **形式** | OAM (HL-225H) / PCIe |

## 厂商信息

| 项目 | 内容 |
|------|------|
| **制造商** | Intel Corporation（Habana Labs） |
| **官网** | https://habana.ai |
| **产品页** | https://habana.ai/products/gaudi2/ |
| **驱动/SDK** | https://developer.habana.ai/downloads/ |
| **SynapseAI SDK** | https://developer.habana.ai/ |

## 关键特性

- **集成 24× 100GbE 网卡**：无需额外购置 InfiniBand
- **TPC + MME 异构计算**：灵活处理矩阵与向量操作
- **OpenEthernet 标准**：避免厂商锁定
- **MLPerf 基准验证**：H100 的强劲替代

## 适用场景

- LLM 训练（百亿到千亿参数）
- 大规模分布式训练集群
- 多模态 AI

## 相关产品对比

- [Intel Gaudi 3](/docs/cards/intel/gaudi-3) - 继任者
- [NVIDIA H100](/docs/cards/nvidia/h100) - 同期竞品
- [AMD MI300X](/docs/cards/amd/mi300x) - 显存优势
