---
id: esperanto-et-soc-1
title: Esperanto ET-SoC-1 (RISC-V 异构 AI)
sidebar_label: Esperanto
description: Esperanto ET-SoC-1 详尽规格：7nm、1300+ RISC-V 核、INT8 推理、低功耗、ET-Minion + ET-Maxion 异构。
keywords: [Esperanto, ET-SoC-1, RISC-V AI, 异构 AI, ET-Minion, ET-Maxion, 1300 核]
---

# Esperanto ET-SoC-1 (RISC-V 异构 AI)

## 产品概述

**Esperanto Technologies** 是美国 RISC-V AI 芯片公司，**2014 成立**（由 **Darryl Gove** + **Dave Patterson** 等 RISC-V 教父级人物创立），总部加州山景城。**ET-SoC-1** 是其首款 RISC-V 异构 AI 推理芯片，**2022-Q3 发布**，**TSMC 7nm**，**1300+ RISC-V 核**（**业界最大 RISC-V 芯片之一**），**42 TFLOPS INT8** 推理，**~75W TDP**。是 **RISC-V 阵营在 AI 推理的代表**。

**核心架构**：
- **ET-Minion**：4096-bit 向量 RISC-V 核（千余个，处理 ML 算子）
- **ET-Maxion**：超标量 RISC-V 核（8 个，处理控制 + 标量）

## 核心规格

| 项目 | 参数 |
|------|------|
| **架构** | Esperanto ET-SoC-1（异构 RISC-V） |
| **制程** | TSMC 7nm |
| **总核心数** | **1,332 个 RISC-V 核** |
| **ET-Minion** | **1,324 个**（向量化 AI 核，4096-bit SIMD） |
| **ET-Maxion** | **8 个**（超标量标量核，Rocket RISC-V） |
| **L2 Cache** | 共享 256MB |
| **HBM** | 16GB HBM2E（可选 4GB HBM2E） |
| **内存带宽** | 410 GB/s |
| **INT8** | **42 TOPS** |
| **FP16** | 21 TFLOPS |
| **FP32** | 10.5 TFLOPS |
| **TDP** | 75 W |
| **板卡形态** | PCIe Gen4 ×16 |
| **互连** | 自研互联（PCIe + Ethernet） |
| **量产** | 2023-Q2 |
| **单价** | ~$1,500-3,000 |

## 异构 RISC-V 架构

| 维度 | ET-Minion | ET-Maxion |
|------|-----------|-----------|
| **类型** | 向量化 AI 核 | 超标量标量核 |
| **数量** | 1,324 个 | 8 个 |
| **向量位宽** | 4096-bit SIMD | - |
| **频率** | 1.5 GHz | 2 GHz |
| **适用** | 矩阵乘 + 激活函数 | 调度 + 控制 + 标量 |
| **类比 NVIDIA** | Tensor Core | CUDA core |
| **类比 ARM** | NEON (类比) | Cortex-A |

### 1,324 个 ET-Minion 核

```
单核: 4096-bit × 1.5 GHz × 2 (MAC) = 12.3 GOPS INT8
1324 核: 12.3 × 1324 = 16.3 TOPS INT8 (单卡)
加上稀疏性 + 高效编码: 42 TOPS INT8 标称
```

**优势**：
- **完全 RISC-V ISA**（无私有指令扩展）
- **可移植**：所有 ET-Minion 核运行**标准 RISC-V V 扩展**
- **可调试**：GDB 调试全部核（vs GPU 黑盒）

## 75W TDP 风冷

| 指标 | Esperanto ET-SoC-1 | NVIDIA L4 | NVIDIA H100 |
|------|---------------------|-----------|-------------|
| **INT8** | 42 TOPS | 485 TOPS | 1,513 TOPS |
| **TDP** | 75W | 72W | 700W |
| **能效** | **0.56 TOPS/W** | 6.7 TOPS/W | 2.16 TOPS/W |
| **价格** | ~$2K | ~$2.5K | ~$25-30K |
| **软件** | RISC-V 工具链 | CUDA | CUDA |

> **Esperanto 优势**：**价格极低（$2K）** + **RISC-V 开放**，但**算力与能效均不如 L4**（落后 NVIDIA 一代）。

## 软件栈

| 层级 | 工具 | 说明 |
|------|------|------|
| **AI 框架** | PyTorch（via TVM）| 自动编译到 ET-Minion |
| | TensorFlow（via TVM）| 兼容 |
| | **ET-SDK** | 自研 SDK（C/C++） |
| **编译器** | **TVM** + **MLC-LLM** | 自动算子映射 |
| **运行时** | ET-Runtime | 1,324 核调度 |
| **优化** | **ET-Quant** | INT8 量化 |
| **调试** | GDB + 标准 RISC-V 工具链 | 完全开放 |

> ⚠️ **生态限制**：相比 CUDA 18 年生态，Esperanto 仅 3-4 年，**算子覆盖率约 50-60%**。**LLM 推理需手工优化或 MLC-LLM 编译**。

## 厂商信息

| 项目 | 内容 |
|------|------|
| **公司** | Esperanto Technologies |
| **创始人** | **Darryl Gove**（前 ARM 首席架构师）|
| | **Dave Patterson**（RISC-V 教父，UC Berkeley 教授）|
| | **Jeff Bonde**（RISC-V 资深工程师）|
| **成立** | 2014 |
| **总部** | 美国加州山景城 |
| **融资** | **$280M+**（B 轮 2022-Q1 领投：Fidelity）|
| **估值（2025）** | ~$1B（独角兽边缘）|
| **2024 营收** | ~$15M（早期）|
| **员工** | ~150 人 |
| **代工** | TSMC 7nm |
| **客户** | 美国国家实验室（HPC）、Rivos 服务器、RISC-V 软件生态 |
| **战略合作** | **Rivos**（RISC-V 服务器芯片，采用 ET-SoC-1 IP）|

## 适用场景

- ✅ **RISC-V 软件生态建设**（ET-SoC-1 是 RISC-V 第一个真实 AI 部署）
- ✅ **政府 / 国家实验室 HPC**（美国能源部、国家安全）
- ✅ **低功耗 AI 推理**（75W 风冷）
- ✅ **国产化替代**（RISC-V 无 ARM/CUDA 私有）
- ✅ **学术研究**（可调试 RISC-V 核心）
- ❌ **生产 LLM 推理**（算力不足）
- ❌ **CUDA 专有工作负载**
- ❌ **AI 训练**（仅推理）

## 关键特性

- **1,332 RISC-V 核**：业界最大 RISC-V 芯片
- **完全开放 ISA**：标准 RISC-V V 扩展（无私有指令）
- **可调试**：GDB 调试所有核
- **低功耗**：75W TDP 风冷
- **价格低**：~$2K（vs H100 $25K）
- **缺点**：算力低（42 TOPS INT8 远低于 L4 485 TOPS）、生态弱

## 异构 RISC-V 阵营

| 公司 | 产品 | RISC-V 核 | 算力 INT8 | 状态 |
|------|------|-----------|-----------|------|
| **Esperanto** | **ET-SoC-1** | **1,332** | **42 TOPS** | 2023 量产 |
| Tenstorrent | Wormhole | 80 Tensix 核（RISC-V 控制）| 320 TOPS | 2023 量产 |
| Rivos | 服务器 SoC | ET-SoC-1 IP | - | 2026 预计 |
| SiPearl | Rhea | 72 核 RISC-V | 80 TOPS | 2025 预计 |

## RISC-V AI 战略意义

- **RISC-V 教父级人物创立**：Dave Patterson（Turing 奖得主，RISC-V 教父）
- **第一家真正商用 RISC-V AI 芯片**
- **Rivos 服务器合作**：ET-SoC-1 IP 集成到 Rivos 服务器 SoC
- **完全开放 ISA**：无 ARM / CUDA 私有锁定
- **中国信创兼容**：RISC-V 是中国信创 CPU 唯一选择

## 相关卡

- [Tenstorrent](/docs/cards/others/tenstorrent) - RISC-V 异构
- [Lightelligence 天机芯](/docs/cards/others/lightelligence) - RISC-V 硟光
- [Cambricon 寒武纪 MLU 590](/docs/cards/others/cambricon-mlu) - 国产 RISC-V 兼容
- [Moore Threads MTT S5000](/docs/cards/others/moore-threads-mtt-s5000) - 国产 GPU
- [Biren BR104](/docs/cards/others/biren-br104) - 国产 AI
- [NVIDIA L4](/docs/cards/nvidia/l4) - 边缘 AI 对比
- [Apple M4 Max](/docs/cards/others/apple-m4-max) - 工作站对比
- [Qualcomm AI 100](/docs/cards/others/qualcomm-ai100) - 边缘 AI 对比
