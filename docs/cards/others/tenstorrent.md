---
id: tenstorrent
title: Tenstorrent Grayskull / Wormhole
sidebar_label: Tenstorrent Wormhole
description: Tenstorrent Grayskull/Wormhole 详尽规格：Tensix 架构、片上 SRAM、以太网互联、RISC-V 开源生态。
keywords: [Tenstorrent, Tensix, Wormhole, Grayskull, RISC-V, 开源 AI 芯片]
---

# Tenstorrent Grayskull / Wormhole

## 产品概述

Tenstorrent 由传奇架构师 **Jim Keller** 领导，基于**RISC-V** 架构开发 AI 加速器。**Tensix 核心**集成 RISC-V CPU、矩阵/向量/数据传输引擎。**Wormhole** 通过**标准以太网 RDMA** 互联（无 NVLink 锁定），软件栈 **TT-Metalium** 和 **TT-BUDA** 完全开源。

## 核心规格

| 项目 | Grayskull (e150/e300) | Wormhole (n150/n300) |
|------|----------------------|----------------------|
| **架构** | Tensix | Tensix |
| **制程** | TSMC 12nm | TSMC 12nm |
| **Tensix 核心** | 120 | 144 |
| **片上 SRAM** | 120 MB | 144 MB |
| **FP32** | ~50 TFLOPS | ~75 TFLOPS |
| **INT8** | ~300 TOPS | ~450 TOPS |
| **互联** | PCIe 4.0 | 8× 100GbE RDMA |
| **TDP** | 75W / 300W | 150W / 300W |
| **发布** | 2022-Q4（推测） |

## 厂商信息

| 项目 | 内容 |
|------|------|
| **制造商** | Tenstorrent Inc. |
| **官网** | https://tenstorrent.com |
| **产品页** | https://tenstorrent.com/hardware/ |
| **TT-Metalium（驱动）** | https://github.com/tenstorrent/tt-metal |
| **TT-BUDA** | https://github.com/tenstorrent/tt-buda |
| **文档** | https://docs.tenstorrent.com |

## 关键特性

- **Tensix 架构**：RISC-V + 矩阵 + 向量 + 数据传输
- **无 HBM**：全片上 SRAM（适合特定模型）
- **以太网互联**：避免 NVLink 厂商锁定
- **完全开源软件栈**
- **Blackhole 下一代**：2025 推出，2× 性能

## 适用场景

- 开源 AI 开发者
- 中等规模 AI 训练
- 学术研究
- RISC-V 生态

## 相关产品对比

- [Groq LPU](/docs/cards/others/groq-lpu) - 类似创新
- [SambaNova SN40L](/docs/cards/others/sambanova-sn40l) - 类似定位
- [NVIDIA H100](/docs/cards/nvidia/h100) - 主流
