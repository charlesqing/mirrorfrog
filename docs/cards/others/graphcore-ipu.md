---
id: graphcore-ipu
title: Graphcore IPU (Bow)
sidebar_label: Graphcore IPU
description: Graphcore Bow IPU 详尽规格：1472 处理器核心、900MB SRAM、MIMD 架构，2024 年公司已出售。
keywords: [Graphcore, IPU, Bow, MIMD 架构, 已被收购]
---

# Graphcore IPU (Bow)

## 产品概述

Graphcore IPU（Intelligence Processing Unit）是采用 **MIMD（多指令多数据）**架构的 AI 处理器，**1472 个独立处理器核心**，每个有独立内存。2024 年 Graphcore 面临财务困难，**被 SoftBank 收购**。

## 核心规格 (Bow IPU / GC200)

| 项目 | 参数 |
|------|------|
| **架构** | GC200 IPU（MIMD） |
| **制程** | TSMC 7nm |
| **IPU 核心** | 1,472 独立处理器 |
| **片上 SRAM** | 900 MB |
| **FP32 算力** | 350 TFLOPS（稀疏） |
| **FP16 算力** | 350 TFLOPS |
| **INT8 算力** | 700 TOPS |
| **TDP** | 185 W |
| **互联** | IPU-Link（PCIe 4.0） |
| **形式** | PCIe 4.0 x16 |
| **发布** | 2022-09-13 |

## 厂商信息

| 项目 | 内容 |
|------|------|
| **制造商** | Graphcore Ltd.（已被 SoftBank 收购） |
| **官网** | https://www.graphcore.ai |
| **产品页** | https://www.graphcore.ai/products/ipu |
| **状态** | 2024 年公司被收购，未来存疑 |

## 适用场景

- 图神经网络（GNN）
- 自然语言处理
- 推荐系统

## 所属架构

- [IPU 架构](/docs/architectures/arch-ipu) - 多指令多数据（MIMD）图计算

## 相关产品对比

- [Tenstorrent 总览](/docs/cards/others/tenstorrent) - 另一类 RISC-V AI 芯片
- [SambaNova SN40L](/docs/cards/others/sambanova-sn40l) - 数据流 RDU
- [Esperanto ET-SoC-1](/docs/cards/others/esperanto-et-soc-1) - RISC-V 异构 1332 核
- [完整对比表](/docs/comparison)
