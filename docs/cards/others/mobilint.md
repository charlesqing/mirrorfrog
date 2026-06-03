---
id: mobilint
title: Mobilint Regulus (韩国 NPU, 2023)
sidebar_label: Mobilint
description: Mobilint Regulus 详尽规格：5nm、32 TOPS INT8、12W、Edge AI + 数据中心、韩国 NPU、对标 H100 推理。
keywords: [Mobilint, Regulus, 韩国 NPU, 5nm, 32 TOPS, 12W, Edge AI, 韩国 AI 芯片]
---

# Mobilint Regulus (韩国 NPU, 2023)

## 产品概述

**Mobilint** 是韩国 AI 芯片公司，**2019 成立**，首尔。**Regulus** 是其首款商用 AI NPU，**2023-Q2 发布**，**TSMC 5nm**，**32 TOPS INT8** 算力，**12W TDP**（**业界能效比最高的 NPU 之一**）。配套 **Mobilint ARIES SDK** + **PyTorch / TensorFlow / ONNX** 兼容。

**战略意义**：Mobilint 是 **韩国 AI 创业三剑客之一**（与 FuriosaAI、Rebellions 并列），**客户：KT（韩国电信）、SK 集团、Samsung SDS、Naver**。**2024 量产中**，**目标对标 NVIDIA L4 推理芯片**。

## 核心规格

| 项目 | 参数 |
|------|------|
| **架构** | Mobilint Aries NPU |
| **制程** | **TSMC 5nm** |
| **NPU 核数** | **8× Aries NPU core** |
| **每核** | 4 MB SRAM + 4 TOPS INT8 |
| **片上 SRAM** | **32MB** |
| **LPDDR5X** | **16GB / 32GB** |
| **内存带宽** | **204 GB/s** |
| **INT8** | **32 TOPS** |
| **FP16** | 16 TFLOPS |
| **BF16** | 16 TFLOPS |
| **TDP** | **12W**（**业界最低数据中心 NPU TDP 之一**）|
| **能效** | **2.67 TOPS/W** |
| **板卡形态** | M.2 / PCIe Gen4 ×4 / OAM |
| **互连** | PCIe Gen4 |
| **量产** | 2023-Q2 |
| **单价** | ~$300-500 |

## Aries NPU 架构

| 维度 | Mobilint Aries | 传统 GPU |
|------|-----------------|----------|
| **执行模型** | 标量 + 向量 + 矩阵 | CUDA cores + Tensor cores |
| **并行性** | 算子级 | 线程级 |
| **片上内存** | 4 MB SRAM / 核（32 MB 总） | 共享 L2 + 寄存器 |
| **数据流** | 数据流优化 | 缓存行 |
| **功耗** | **12W** | 70-700W |
| **目标** | **Edge + 入门数据中心** | 全场景 |

### 单 Aries NPU Core

```
单 Aries Core:
- 4 MB SRAM（双端口）
- 4 TOPS INT8 矩阵单元
- 32-bit 标量 + 256-bit SIMD 向量
- 1 GHz 主频

Mobilint Regulus:
- 8 × Aries Core = 32 TOPS INT8
- 8 × 4 MB = 32 MB 片上 SRAM
- 1 GHz × 8 = 8 GHz 等效
```

## 韩国 AI 芯片三剑客对比

| 维度 | Mobilint Regulus | FuriosaAI RNGD | Rebellions RBLN |
|------|---------------------|------------------|------------------|
| **算力 INT8** | 32 TOPS | 1,000 TOPS | 16 TOPS |
| **TDP** | **12W** | 450W | 15-30W |
| **能效** | **2.67 TOPS/W** | 2.22 TOPS/W | 1 TOPS/W |
| **内存** | 32GB LPDDR5X | **512GB HBM3** | 16GB LPDDR5X |
| **价格** | **~$400** | ~$22K | ~$1K |
| **目标** | **Edge + 入门 DC** | **数据中心推理** | **Edge + DC** |
| **量产** | 2023-Q2 | 2024-Q3 | 2024-Q2 |
| **客户** | KT / Samsung / Naver | KT / SK / G42 | KT / SK / Samsung |

> **Mobilint 定位**：**Edge + 入门数据中心**（vs FuriosaAI 高端数据中心 vs Rebellions 全场景）。**TDP 12W 是三剑客中最低**。

## 与 NVIDIA L4 对比

| 指标 | Mobilint Regulus | NVIDIA L4 | 差异 |
|------|---------------------|-----------|------|
| **INT8** | 32 TOPS | 485 TOPS | L4 15× |
| **TDP** | **12W** | 72W | **Regulus 6× 节能** |
| **能效** | 2.67 TOPS/W | **6.7 TOPS/W** | L4 2.5× |
| **内存** | 32GB LPDDR5X | 24GB GDDR6 | Regulus 1.3× |
| **带宽** | 204 GB/s | 300 GB/s | L4 1.5× |
| **价格** | **~$400** | ~$2,500 | **Regulus 6× 便宜** |
| **软件** | ARIES SDK | CUDA | L4 成熟 |

> **Regulus 优势**：**TDP 12W**（L4 17%）+ **价格 16% L4** + **韩国主权 AI**。
> **L4 优势**：**算力 15×** + **CUDA 生态** + **多云部署**。

## 厂商信息

| 项目 | 内容 |
|------|------|
| **公司** | Mobilint |
| **创始人** | **Hyung-jin Kim**（CEO，前 Samsung 半导体） |
| **成立** | 2019 |
| **总部** | 韩国首尔 + 美国硅谷 |
| **融资** | **$100M+**（A 轮 2023-Q1 领投：韩国产业银行 + SK 海力士）|
| **估值（2025）** | ~$500M |
| **2024 营收** | ~$15M |
| **员工** | ~80 人 |
| **代工** | TSMC 5nm |
| **主要客户** | **KT（韩国电信）**、**SK 集团**、**Samsung SDS**、**Naver** |
| **政府支持** | 韩国国家 AI 半导体战略 |
| **状态** | 量产 + 2026 计划 IPO |

## 软件栈 Mobilint ARIES

| 层级 | 工具 | 说明 |
|------|------|------|
| **AI 框架** | **Mobilint ARIES SDK** | 统一编程 |
| | **PyTorch (ARIES 后端)** | 自动映射 NPU |
| | **TensorFlow Lite** | 兼容 |
| | **ONNX Runtime** | 兼容 |
| **编译器** | **ARIES Compiler** | 模型 → NPU |
| **运行时** | ARIES Runtime | 多核调度 |
| **量化** | **ARIES Quant** | INT8 自动 |
| **模型库** | ARIES ModelZoo | 50+ 推理模型 |

> **ARIES 优势**：**PyTorch 原生**，**编译 1-5 分钟**（vs 寒武纪 NeuWare 1-2 小时），**模型部署简单**。

## 适用场景

- ✅ **Edge AI 推理**（12W 风冷）
- ✅ **韩国主权 AI**（KT / SK / Naver 客户）
- ✅ **小模型训练**（7B LLM 量化）
- ✅ **入门数据中心推理**（8 卡集群 256 TOPS）
- ✅ **多模态 AI**（图像 + 文本）
- ✅ **ADAS / 自动驾驶**（12W 风冷）
- ❌ **AI 训练**（仅推理 + 小训练）
- ❌ **CUDA 专有工作负载**（需 ARIES 移植）
- ❌ **国际市场**（韩 / 亚洲为主）

## Mobilint 产品线

| 产品 | 发布 | 算力 | TDP | 目标 |
|------|------|------|-----|------|
| **Aries (Regulus)** | **2023-Q2** | **32 INT8 TOPS** | **12W** | **Edge + 入门 DC** |
| Aries Pro (推测) | 2025 H2 | 64 INT8 TOPS | 20W | 高端 Edge |
| Aries 200 (推测) | 2026 | 200 INT8 TOPS | 80W | 数据中心 |
| Aries 1000 (推测) | 2027 | 1000 INT8 TOPS | 200W | 高端数据中心 |

## Mobilint vs Apple A18 Pro

| 指标 | Mobilint Regulus | Apple A18 Pro |
|------|---------------------|------------------|
| **INT8** | 32 TOPS | 35 TOPS |
| **TDP** | **12W** | 8-10W |
| **能效** | 2.67 TOPS/W | 3.5 TOPS/W |
| **内存** | 32GB LPDDR5X | 8GB LPDDR5X |
| **价格** | ~$400 | iPhone $999+ |
| **目标** | 数据中心 + 边缘 | 手机 |

> **Mobilint 优势**：**32GB 内存**（A18 Pro 8GB 4×）+ **数据中心部署** + **价格便宜**。
> **A18 Pro 优势**：**iPhone 集成** + **35 TOPS** + **能效 30% 优**。

## 韩国 AI 创业三剑客战略意义

- **FuriosaAI**：高端数据中心推理（512GB HBM3）
- **Rebellions**：边缘 + 数据中心（16-400 TOPS 演进）
- **Mobilint**：入门 + 边缘（32 TOPS，12W）

**三剑客互补**：覆盖韩国 AI 全部场景（高端 / 中端 / 入门 / 边缘），**韩国国家 AI 算力完全自主**。

## 关键特性

- **32 TOPS INT8**：入门数据中心 NPU
- **TDP 12W**：业界最低数据中心 NPU
- **价格 $400**：业界最便宜
- **韩国 + TSMC 5nm**：成熟制造
- **ARIES SDK**：PyTorch 兼容
- **缺点**：算力低（vs L4 15×）、生态 2 年

## 相关卡

- [FuriosaAI RNGD](/docs/cards/others/furiosaai-rngd) - 韩国双雄
- [Rebellions RBLN](/docs/cards/others/rebellions-rbln) - 韩国双雄
- [Rebellions ATOM] (推测) - Rebellions 下一代
- [Blaize Xplorer X1600](/docs/cards/others/blaize-xplorer) - Edge AI
- [Hailo-8 / Hailo-15](/docs/cards/others/hailo) - 边缘
- [Qualcomm AI 100](/docs/cards/others/qualcomm-ai100) - 边缘
- [Qualcomm AI 200/300](/docs/cards/others/qualcomm-ai-200) - 数据中心
- [NVIDIA L4](/docs/cards/nvidia/l4) - 业界对比
- [Apple A18 Pro](/docs/cards/others/apple-a18-pro) - 手机 NPU
