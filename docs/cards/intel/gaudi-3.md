---
id: gaudi-3
title: Intel Gaudi 3
sidebar_label: Intel Gaudi 3
description: Intel Gaudi 3 详尽规格：128GB HBM2e、1,835 TFLOPS BF16、900W TDP、24× 200GbE 集成网卡，对标 NVIDIA H100/H200。
keywords: [Intel Gaudi 3, Habana, HBM2e, AI 训练 ASIC, 性价比 GPU]
---

# Intel Gaudi 3 (Habana Labs)

## 产品概述

Intel Gaudi 3 于 2024 年 4 月发布（Intel Vision 大会），是 Gaudi 2 的全面升级。基于 **5nm 工艺**，**128GB HBM2e** 显存，**BF16 / FP8 算力 1,835 TFLOPS**，**24× 200GbE RDMA 集成网卡**。据 Intel 官方数据，Gaudi 3 在 LLM 训练上比 H100 **快 50%**，推理吞吐量高 50%，能效高 40%。

## 核心规格

| 项目 | 参数 |
| **发布** | 2024 年 4 月（OEM Q2，PCIe 卡 Q4） |
|------|------|
| **架构** | Gaudi 3（Habana 5 代） |
| **制程** | TSMC 5nm |
| **计算引擎** | **64× TPC**（每 8 个一组，8 组） |
| **矩阵引擎** | **8× MME**（每 MME 64,000 平行操作） |
| **显存** | **128 GB HBM2e** |
| **显存带宽** | **3.67 TB/s**（+50% vs Gaudi 2） |
| **片上 SRAM** | 96 MB（12.8 TB/s 带宽） |
| **BF16 Matrix** | **1,835 TFLOPS**（4× Gaudi 2） |
| **FP8 Matrix** | **1,835 TFLOPS** |
| **BF16 Vector** | 28.7 TFLOPS |
| **TDP** | 900 W |
| **网络** | **24× 200GbE RoCE**（集成网卡） |
| **PCIe** | Gen 5 x16 |
| **形式** | OAM 2.0 (HL-325L) / PCIe Add-in Card (HL-338) |

## Gaudi 2 vs Gaudi 3

| 指标 | Gaudi 2 | Gaudi 3 | 提升 |
|------|---------|---------|------|
| 工艺 | 7nm | 5nm | — |
| 显存 | 96 GB | 128 GB | +33% |
| 带宽 | 2.46 TB/s | 3.67 TB/s | +49% |
| BF16 算力 | 432 TFLOPS | 1,835 TFLOPS | **4.2×** |
| 网络 | 24× 100GbE | 24× 200GbE | 2× |
| TDP | 600 W | 900 W | +50% |
| PCIe | Gen 4 | Gen 5 | 2× |

## 厂商信息

| 项目 | 内容 |
|------|------|
| **制造商** | Intel Corporation（Habana Labs） |
| **官网** | https://habana.ai |
| **产品页** | https://habana.ai/products/gaudi3/ |
| **白皮书** | https://www.intel.com/content/www/us/en/content-details/817486/intel-gaudi-3-ai-accelerator-white-paper.html |


## 关键特性

- **集成 24× 200GbE RoCE**：1200 GB/s 双向带宽
- **Open Ethernet 标准**：避免厂商锁定
- **MLPerf 性能验证**
- **PyTorch 优化**：从 H100 迁移只需 3 行代码改动
- **对比 H200**：Llama 2 7B/70B、Falcon 180B 推理快 30%

## 适用场景

- LLM 训练与推理
- 多模态 AI
- 企业 GenAI（成本敏感）
- 大规模分布式训练

## 相关产品对比

- [Intel Gaudi 2](/docs/cards/intel/gaudi-2) - 前代
- [NVIDIA H100](/docs/cards/nvidia/h100) - 同期竞品
- [NVIDIA H200](/docs/cards/nvidia/h200) - 显存直接对标
- [AMD MI300X](/docs/cards/amd/mi300x) - 显存更大
