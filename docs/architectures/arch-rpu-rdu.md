---
id: arch-rpu-rdu
title: RPU / RDU (可重构数据流) 架构
sidebar_label: RPU / RDU
description: RPU/RDU 架构详解：Tenstorrent Grayskull/Wormhole、SambaNova SN40L 可重构数据流架构，编译器自动并行化。
keywords: [RPU, RDU, Reconfigurable Dataflow Unit, Tenstorrent, SambaNova, Grayskull, Wormhole, SN40L]
---

# RPU / RDU (可重构数据流) 架构

## 什么是 RPU / RDU

**RPU（Reconfigurable Processing Unit）** 是 **Tenstorrent** 推出的可重构处理单元，**RDU（Reconfigurable Dataflow Unit）** 是 **SambaNova** 提出的类似架构。

**核心思想**：通过**编译器自动并行化**映射神经网络到大量小型**张量核**（tensor core），**无传统 SIMT 调度开销**，性能/瓦特优于传统 GPU。

**代表产品**：
- **Tenstorrent Grayskull**（2021）：150W 入门
- **Tenstorrent Wormhole**（2023）：16 核，200W
- **Tenstorrent Blackhole**（2024）：120 核，300W
- **SambaNova SN40L**（2023）：1,020 核，1,000 TFLOPS

## RPU/RDU vs GPU

| 维度 | RPU/RDU | GPU (H100) |
|------|---------|------------|
| 编程模型 | **编译器自动并行** | CUDA 手工优化 |
| 核结构 | **小型张量核 × 数百** | Tensor Core × 132 |
| 控制流 | **静态数据流** | 动态 SIMT |
| 灵活 | **高**（每核可独立编程） | 中（warp 调度） |
| 性能/瓦特 | **高**（编译器优化） | 中 |
| 生态 | 小（自研 SDK） | **CUDA 成熟** |
| 价格 | **低** | 高 |

## Tenstorrent 系列

### Grayskull (e75 / e150)
- **2021-07 发布**
- **120 核 Tensix**（每核含 5 个 RISC-V + 1 个张量引擎）
- **150W TDP**
- 主要面向开发者

### Wormhole (n150 / n300)
- **2023 发布**
- **8 / 16 核 Tensix**
- **200W TDP**
- 边缘服务器

### Blackhole (p100a / p150a)
- **2024 发布**
- **120 核 Tensix**
- **300W TDP**
- 数据中心级

## SambaNova SN40L

- **2023 发布**
- **40 GB HBM / 1,020 RDU 核**
- **600 TFLOPS BF16**
- **150W TDP**（难以置信）
- 客户：**圣地亚哥超算中心（SDSC）**
- 适合**单卡 70B+ LLM 推理**（40GB HBM + RDU 高效执行）

## 软件生态

### Tenstorrent
- **TT-Buda**（编译器，原 Buda 收购）
- **TT-Metalium**（底层 SDK）
- **PyTorch / TensorFlow** 集成
- 开源生态

### SambaNova
- **SambaFlow**（编译器）
- **DataScale SN40L** 系统
- **企业级 LLM 推理**服务

## 适用场景

- ✅ **大模型推理**（SN40L 单卡 70B+）
- ✅ LLM 训练（Tenstorrent Blackhole 多卡）
- ✅ 数据中心能效优化（编译器自动并行）
- ✅ 科研 / HPC（开源 RISC-V 架构）
- ❌ 通用 GPU 计算（生态小）
- ❌ 主流深度学习（CUDA 性能更成熟）

## 详细产品页

### Tenstorrent（RISC-V 张量核 RDU）
- [Tenstorrent 总览 (Grayskull/Wormhole)](/docs/cards/others/tenstorrent) - 完整规格
- [Tenstorrent Blackhole](/docs/cards/others/tenstorrent-blackhole) - 2024 H1 6nm 120 Tensix 核 8GB SRAM 16 BF16 PF 集群 Jim Keller 架构

### SambaNova（Dataflow RDU）
- [SambaNova SN40L](/docs/cards/others/sambanova-sn40l) - 2024-09 1,020 RDU 核 638 BF16 TF 128GB HBM3
- [SambaNova SN50](/docs/cards/others/sn50) - 2026 H2 推测 3nm 256GB HBM3E 1.5 PF

### 其他 RPU/RDU 架构
- [Blaize Xplorer](/docs/cards/others/blaize-xplorer) - GSP 图流 7K TOPS/W 22W 160 TOPS INT8 Edge AI
- [Lightelligence 天机芯 (中国)](/docs/cards/others/lightelligence) - 硟光三巨头 1.6 PF FP16 100W 16 TOPS/W 中科院 + 清华
- [LightOn Alfred (法国)](/docs/cards/others/lighton) - 硟光三巨头 1.2 PF FP16 80W 15 TOPS/W 微软 + OVHcloud
- [Esperanto ET-SoC-1](/docs/cards/others/esperanto-et-soc-1) - RISC-V 异构 1332 核 42 TOPS INT8 75W Dave Patterson 创立

## 相关架构

- [GPU](/docs/architectures/arch-gpu) - 通用 AI
- [TPU](/docs/architectures/arch-tpu) - 数据中心
- [WSE](/docs/architectures/arch-wse) - 晶圆级
- [完整对比表](/docs/comparison)
