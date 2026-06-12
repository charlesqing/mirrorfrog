---
id: etched-sohu
title: Etched Sohu (Transformer 专用 ASIC)
sidebar_label: Etched Sohu
description: Etched Sohu 详尽规格：Transformer 专用 ASIC、144GB HBM3E、6TB/s 带宽、62500 tokens/秒（Llama 70B）、2024年6月发布、不可编程。
keywords: [Etched, Sohu, Transformer ASIC, 专用芯片, HBM3E, 不可编程, 推理加速]
---

# Etched Sohu (Transformer 专用 ASIC)

## 产品概述

**Etched Sohu** 是美国芯片初创公司 **Etched AI**（2022年成立）于 **2024年6月** 发布的**全球首款 Transformer 架构专用 ASIC 芯片**。Sohu 将 Transformer 注意力机制**完全硬编码到硅片**中，无任何可编程层，专为**推理**设计（不支持训练/微调）。单芯片配备 **144GB HBM3E** 内存，在 batch size=1 条件下运行 Llama 70B 可达 **62,500 tokens/秒**，是 NVIDIA H100 的 **89×**（batch size=1 条件下）。

> **⚠️ 重要限制**：Sohu **仅支持 Transformer 注意力架构**，不支持：
> - 多模态模型（含视觉编码器的 LLaVA、Qwen-VL 等）
> - 扩散模型（Stable Diffusion、视频生成模型）
> - 动态专家路由 MoE 模型（DeepSeek V4、Mixtral、Qwen3-235B-A22B）
> - SSM/Mamba 架构模型
> - 任何非密集 Transformer 注意力架构的模型

## 核心规格

| 项目 | 参数 |
|------|------|
| **架构** | **Transformer 专用 ASIC**（不可编程） |
| **制程** | TSMC 4nm（推测） |
| **HBM 类型** | HBM3E |
| **HBM 容量** | **144 GB** |
| **HBM 带宽** | **~6.03 TB/s**（H100 SXM5 的 1.8×） |
| **算力（Llama 70B）** | **62,500 tokens/秒**（batch size=1） |
| **8 芯片服务器性能** | **500,000 tokens/秒**（Llama 70B） |
| **TDP** | 未公开 |
| **形态** | PCIe（推测） |
| **发布时间** | **2024年6月** |
| **上市状态** | **未公开销售**（截至 2026年4月） |
| **可用性** | 仅向投资者展示过受控基准测试 |

## 技术架构

### 固定功能 Transformer 单元

Sohu **无任何通用计算单元**，所有计算资源专用于 Transformer 注意力计算：

| 硬件实现的功能 | 说明 |
|--------------|------|
| **注意力计算** | 直接硬件实现，无内核启动开销 |
| **QKV 投影** | 固定功能单元 |
| **KV 缓存处理** | 专用硬件电路 |
| **前馈网络（FFN）** | 硬编码到硅片 |
| **无调度器开销** | 无操作系统、无驱动、无内核调度 |

### 与 GPU 的架构对比

| 维度 | NVIDIA H100 | **Etched Sohu** |
|--------|-------------|-------------------|
| 可编程性 | ✅ 完全可编程（CUDA） | ❌ **完全不可编程** |
| 支持模型架构 | **所有架构** | **仅 Transformer 注意力** |
| Batch size=1 性能 | ~700 tokens/秒 | **62,500 tokens/秒（89×）** |
| Batch size=32 性能 | ~9,000 tokens/秒 | 未公开（优势缩小） |
| 生态 | CUDA、vLLM、TensorRT-LLM | **自研编译器（迁移成本极高）** |
| 适用场景 | **全场景** | **仅密集 Transformer 推理** |

## 性能详解

### Batch Size 对性能的影响

| Batch Size | H100 性能 | Sohu 性能 | Sohu 优势 |
|-------------|-------------|--------------|------------|
| **1** | ~700 tokens/秒 | **62,500 tokens/秒** | **89×** |
| **8** | ~4,000 tokens/秒 | 未公开 | 优势缩小 |
| **32** | ~9,000 tokens/秒 | 未公开 | 优势进一步缩小 |
| **>32** | GPU 通过批处理摊销开销 | 未公开 | **可能无优势** |

> **关键洞察**：Sohu 的优势在 **batch size=1（实时交互）** 场景下最显著。高并发场景（batch size > 32）下，GPU 通过批处理摊销开销，Sohu 的优势可能消失。

### 8 芯片服务器性能

- **Llama 70B**：500,000 tokens/秒（8 芯片 Sohu 服务器）
- **对比**：8× H100 SXM5 服务器约 64,000 tokens/秒（batch size=32）
- **优势**：**7.8×**（高 batch size 条件下）

## 适用场景与限制

### ✅ 适用场景

- **密集 Transformer 推理**：Llama、Qwen、Mistral 等标准 Transformer 模型
- **实时交互 AI**：batch size=1 延迟极低（<10ms）
- **高并发推理服务**：8 芯片服务器可达 500,000 tokens/秒

### ❌ 不适用场景

| 模型类型 | 示例 | Sohu 支持状态 |
|----------|------|----------------|
| 多模态模型 | LLaVA、Qwen-VL | ❌ 不支持 |
| 扩散模型 | Stable Diffusion、Sora | ❌ 不支持 |
| MoE 模型 | DeepSeek V4、Mixtral | ❌ 不支持（动态专家路由） |
| SSM/Mamba | Mamba、RWKV | ❌ 不支持 |
| 训练/微调 | 任何训练任务 | ❌ 不支持（仅推理） |

## 与竞品对比

| 指标 | Etched Sohu | NVIDIA H200 | NVIDIA B200 | Groq LPU |
|------|----------------|---------------|---------------|----------|
| Batch size=1 性能 | **62,500 tokens/秒** | ~800 | ~1,500 | **80,000+** |
| Batch size=32 性能 | 未公开 | ~10,000 | ~18,000 | ~40,000 |
| 可编程性 | ❌ 不可编程 | ✅ CUDA | ✅ CUDA | ❌ 有限编程 |
| 模型架构支持 | **仅 Transformer** | 全架构 | 全架构 | Transformer + 部分 |
| 生态 | 自研编译器 | CUDA 全生态 | CUDA 全生态 | 有限生态 |
| 上市状态 | **未上市** | ✅ 已上市 | ✅ 已上市 | ✅ 已上市 |

## 公司背景与融资

| 项目 | 详情 |
|------|------|
| **公司名称** | Etched AI |
| **成立时间** | 2022年 |
| **总部** | 美国加州 |
| **累计融资** | **近 10 亿美元** |
| **最新融资** | 5 亿美元（估值 50 亿美元） |
| **投资者** | 未公开（知名 VC） |
| **第二代产品** | 更先进制程，目标推理 + prefill-heavy 训练 |

## 第二代产品规划

- **更先进制程**：目标 TSMC 3nm 或更高
- **扩展功能**：目标同时支持推理和 **prefill-heavy 训练工作负载**
- **更小、更低功耗版本**：针对边缘推理场景
- **发布时间**：**2027-2028 年**（推测）

## 发布时间与获取方式

- **官方发布**：2024年6月
- **当前状态**：**未公开上市销售**（截至 2026年4月）
- **获取方式**：
  - 仅向投资者展示过受控基准测试
  - 无公开云租赁渠道
  - 无公开定价信息
- **预计上市**：**2026年H2 或 2027年**（推测）

## 外部链接

- [Etched 官网](https://etched.com/)
- [Spheron：Etched Sohu vs NVIDIA](https://www.spheron.network/blog/etched-ai-sohu-vs-nvidia-transformer-asic-inference/)
- [36氪：Etched 获 1.2亿美元 A 轮融资](https://m.36kr.com/p/2837821626780551)
- [百度百科：Sohu](https://baike.baidu.com/item/Sohu/64605185)
- [AI Wiki：Etched Sohu](https://aiwiki.ai/wiki/etched_sohu)
