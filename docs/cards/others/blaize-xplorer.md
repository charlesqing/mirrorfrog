---
id: blaize-xplorer
title: Blaize Xplorer X1600 (Edge AI, 7K TOPS/W)
sidebar_label: Blaize Xplorer
description: Blaize Xplorer X1600 详尽规格：16nm、160 TOPS INT8、22W、7K TOPS/W 能效、Graph Streaming Processor 架构、Edge AI 极致能效。
keywords: [Blaize, Xplorer X1600, Edge AI, GSP, Graph Streaming Processor, 7K TOPS/W, 160 TOPS, 22W]
---

# Blaize Xplorer X1600 (Edge AI, 7K TOPS/W)

## 产品概述

**Blaize（曾用名 ThinCI）** 是美国边缘 AI 芯片公司，**2011 成立**，总部加州埃尔克格罗夫（Elk Grove）。**Xplorer X1600** 是其旗舰边缘 AI 推理芯片，**2024 H1 发布**，**TSMC 16nm**，**160 TOPS INT8**，**22W TDP**，**能效比 7.27 TOPS/W**（**业界最高能效 AI 芯片之一**）。基于自研 **GSP（Graph Streaming Processor）** 图流处理器架构，**完全可编程**（无 CUDA 黑盒）。

**战略意义**：Blaize 是 **Edge AI 领域能效比领导者**，与 Hailo、Sima.ai 竞争，主攻**汽车 ADAS、工业视觉、智慧城市、零售分析**等场景。**2024 客户**：Motional（自动驾驶）、VisionBank（智慧城市）、Argus（车联网）。

## 核心规格

| 项目 | 参数 |
|------|------|
| **架构** | Blaize GSP（Graph Streaming Processor） |
| **制程** | TSMC 16nm |
| **计算核心** | **2 个 GSP tile**（每个 8×10 流式处理阵列） |
| **GSP 流** | 16 个并行流 |
| **LPDDR4** | 4GB LPDDR4 |
| **内存带宽** | 51.2 GB/s |
| **INT8** | **160 TOPS** |
| **FP16** | 80 TFLOPS |
| **TDP** | 22 W |
| **能效** | **7.27 TOPS/W**（H100 ~2.16, Hailo-8 ~1.4） |
| **板卡形态** | M.2 / PCIe / SoM（System on Module）|
| **互连** | PCIe Gen3 ×4 / USB 3.0 |
| **量产** | 2024 H1 |
| **单价** | ~$200-500（SoM 模块）|

## GSP（Graph Streaming Processor）架构

| 维度 | 传统 GPU | Blaize GSP |
|------|----------|------------|
| **执行模型** | 命令式（线程） | **图流式（数据流图）** |
| **并行性** | 线程级（1000s） | **算子级（流）** |
| **片上内存** | 共享 L2 + 寄存器 | **大型 SRAM（每 tile 8MB）** |
| **数据流** | 缓存行 | **图流（无缓存命中开销）** |
| **功耗** | 70-700W | **22W** |
| **能效** | 0.1-1 TOPS/W | **7.27 TOPS/W** |
| **可编程** | CUDA | **Blaize Picasso（图形化）** |
| **目标** | 数据中心 | **边缘 AI** |

### GSP Tile 详解

```
单个 GSP Tile:
- 8×10 流式处理阵列（80 个 PE）
- 8MB SRAM
- 16 个并行流
- DMA 引擎

Xplorer X1600:
- 2 个 GSP Tile
- 总计 16MB SRAM
- 160 个 PE
- 16 个并行流
```

**关键优势**：
- **图执行**：模型编译为图，直接在 GSP 上流式执行
- **零缓存开销**：数据流在 SRAM 内部流动，无 HBM 等待
- **高能效**：22W 实现 160 TOPS（无 HBM 功耗开销）

## 7K TOPS/W 能效对比

| 指标 | Blaize Xplorer X1600 | Hailo-8 | NVIDIA L4 | NVIDIA Jetson Orin NX |
|------|----------------------|---------|-----------|------------------------|
| **INT8** | 160 TOPS | 26 TOPS | 485 TOPS | 100 TOPS |
| **TDP** | **22W** | 2.5W | 72W | 25W |
| **能效** | **7.27 TOPS/W** | 10.4 TOPS/W | 6.7 TOPS/W | 4 TOPS/W |
| **价格** | ~$300 | ~$200 | ~$2,500 | ~$600 |
| **软件** | Blaize Picasso | HailoRT | CUDA | CUDA + JetPack |
| **成熟度** | 早期 | 量产 | 量产 | 量产 |

> **Blaize 能效优势**：**160 TOPS @ 22W** 是 **NVIDIA Jetson Orin NX 100 TOPS @ 25W 的 2.5×** 算力 + 12% 节能。**工业 / 汽车 / 智慧城市** 关键产品。

## 软件栈 Blaize Picasso

| 层级 | 工具 | 说明 |
|------|------|------|
| **AI 框架** | **Blaize Picasso** | 图形化模型编译（无代码）|
| | PyTorch / ONNX | 导入模型 |
| | TensorFlow | 兼容 |
| **编译器** | **Picasso Compiler** | 模型 → GSP 二进制 |
| **运行时** | Blaize Runtime | Edge 部署 |
| **可视化** | **Picasso Studio** | 图形化调试 + 性能分析 |
| **模型库** | ModelZoo | YOLOv8, ResNet, EfficientDet, MobileNet |

> ⚠️ **生态限制**：Blaize Picasso **仅 2-3 年**，**算子覆盖约 60%**（vs HailoRT 80%）。**YOLOv5/v8 完美支持**，但 LLM 推理能力弱（仅支持 7B INT4 量化）。

## 厂商信息

| 项目 | 内容 |
|------|------|
| **公司** | Blaize（曾用名 ThinCI） |
| **创始人** | Dinakar Munagala（CEO）+ Satyam Dronamraju |
| **成立** | 2011（原名 ThinCI，2020 改名 Blaize）|
| **总部** | 美国加州 Elk Grove |
| **融资** | **$180M+**（C 轮 2024-Q1 领投：Temasek + Franklin Templeton）|
| **估值（2025）** | ~$500M |
| **2024 营收** | ~$30M |
| **员工** | ~300 人 |
| **代工** | TSMC 16nm |
| **客户** | **Motional**（自动驾驶）、**VisionBank**（智慧城市）、**Argus**（车联网）、**Blaize AI Edge** |
| **状态** | 准备 SPAC IPO（2026-2027 预计）|

## 适用场景

- ✅ **汽车 ADAS**（多摄像头 8-12 路同时推理）
- ✅ **工业视觉**（产线缺陷检测）
- ✅ **智慧城市**（多路视频分析）
- ✅ **零售分析**（客流 + 商品识别）
- ✅ **机器人**（实时感知）
- ✅ **低功耗 AI**（电池供电 22W）
- ❌ **LLM 推理**（仅 7B INT4 量化）
- ❌ **数据中心**（22W 算力不足）
- ❌ **AI 训练**（仅推理）

## Blaize 产品线

| 产品 | 发布 | 算力 INT8 | TDP | 目标 |
|------|------|-----------|-----|------|
| **Xplorer X1600** | **2024 H1** | **160 TOPS** | **22W** | **Edge AI 旗舰** |
| Pathfinder | 2023 H1 | 80 TOPS | 12W | 入门 Edge |
| Xplorer S1 | 2025 H2 (推测) | 320 TOPS | 40W | 高端 Edge |
| Xplorer A1 | 2026 (推测) | 640 TOPS | 80W | 服务器 Edge |

## Blaize vs Hailo-8 vs Jetson Orin

| 维度 | Blaize Xplorer X1600 | Hailo-8 | Jetson Orin NX |
|------|----------------------|---------|----------------|
| **算力** | **160 TOPS** | 26 TOPS | 100 TOPS |
| **TDP** | 22W | 2.5W | 25W |
| **能效** | 7.27 TOPS/W | 10.4 TOPS/W | 4 TOPS/W |
| **多路视频** | **12 路 1080p YOLOv8** | 4 路 | 6 路 |
| **软件** | Picasso (新) | HailoRT (成熟) | JetPack (成熟) |
| **价格** | $300 | $200 | $600 |
| **适用** | 多摄像头 Edge | 单摄像头 | 入门级机器人 |

> **Blaize 杀手锏**：**单芯片 12 路 1080p YOLOv8 实时推理**（22W），是 **智慧城市 100+ 摄像头部署的极致 H/W 方案**。

## 关键特性

- **GSP 图流架构**：无 HBM 等待，超高能效
- **22W TDP**：电池供电 / 太阳能部署
- **160 TOPS**：业界最大 22W Edge AI 算力
- **12 路 YOLOv8**：智慧城市级多摄像头
- **缺点**：软件生态 2-3 年，LLM 推理弱

## 相关卡

- [Hailo-8 / Hailo-15](/docs/cards/others/hailo) - Edge AI 对比
- [Qualcomm AI 100](/docs/cards/others/qualcomm-ai100) - Edge AI 对比
- [Akida 2](/docs/cards/others/akida-2) - 神经形态 Edge AI
- [NVIDIA Jetson Orin](/docs/cards/nvidia/jetson-orin) - Edge AI 主流
- [NVIDIA Jetson Thor](/docs/cards/nvidia/jetson-thor) - 下一代 Edge
- [NVIDIA L4](/docs/cards/nvidia/l4) - 服务器 Edge
- [Lightelligence 天机芯](/docs/cards/others/lightelligence) - 硟光
- [Esperanto ET-SoC-1](/docs/cards/others/esperanto-et-soc-1) - RISC-V
