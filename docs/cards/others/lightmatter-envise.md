---
id: lightmatter-envise
title: Lightmatter Envise (硅光 AI 推理芯片)
sidebar_label: Lightmatter Envise
description: Lightmatter Envise 详尽规格：3nm、2 PF FP16、65W、硅光计算、MIPS 处理器、光子互连、8 卡 16 PF。
keywords: [Lightmatter, Envise, 硅光, silicon photonics, 光学计算, 2 PF, 65W, 8 卡]
---

# Lightmatter Envise (硅光 AI 推理芯片)

## 产品概述

**Lightmatter Envise** 是全球首款**硅光（Silicon Photonics）AI 推理芯片**，**2022-11 发布**，**2023 量产**。基于 **3nm 制程**，集成 **光子计算核心**（Photonic Compute Core）+ **MIPS RISC-V 处理器**+ **硅光互连**。**2 PFLOPS FP16** 算力（**65W TDP**），**业界能效比最高的 AI 推理芯片之一**（**30 TOPS/W**，比 NVIDIA H100 高 5-10 倍）。配套 **8 卡系统 16 PFLOPS** + **光互连**。

**革命性意义**：首次在 AI 芯片中**用光子代替电子计算矩阵乘法**，**光速 = 0 延迟 + 0 功耗**（理论值），实际功耗节省 80-90%。是 **AI 芯片架构的范式转变**，与 Lightelligence、LightOn 并称"硅光三巨头"。

## 核心规格

| 项目 | 参数 |
|------|------|
| **架构** | Lightmatter Passage 硅光（光电混合） |
| **制程** | TSMC 3nm |
| **光子核心** | **4 个 Photonic Tensor Core（每个 4×4 阵列）** |
| **数字核心** | **64× MIPS RISC-V 处理器** |
| **HBM** | 64GB HBM3 |
| **内存带宽** | 1.6 TB/s |
| **FP16** | **2 PFLOPS** |
| **FP32** | ~1 PFLOPS |
| **INT8** | 4 POPS |
| **TDP** | **65 W**（**业界最低 AI 推理 TDP 之一**） |
| **能效比** | **30 TOPS/W**（H100 ~3 TOPS/W，**10× 优势**） |
| **板卡形态** | OAM |
| **互连** | **Lightmatter Passage 光互连**（PCIe + 光纤） |
| **量产** | 2023 H2 |
| **单价** | ~$5,000-8,000（推测） |

## 硅光计算原理

| 维度 | 传统 GPU | Lightmatter Envise |
|------|----------|---------------------|
| **计算介质** | 电子（CMOS 晶体管） | **光子（硅光波导 + 调制器）** |
| **矩阵乘法** | MAC 阵列（晶体管开关） | **马赫-泽恩德干涉仪（MZI）网格** |
| **信号传播** | 铜线 + 电阻 | **光波导 + 全光传播** |
| **延迟** | 纳秒级 | **0 延迟（光速）** |
| **功耗** | 平方律（CV²） | **线性（仅调制器）** |
| **频率** | 1-2 GHz | **>100 GHz（理论）** |
| **热设计** | 复杂液冷 | **自然冷却（65W）** |
| **缺点** | - | **非通用，仅适合矩阵乘**（激活函数仍需数字） |

### MZI 矩阵乘法

```
输入向量 (4 维): [x0, x1, x2, x3]（光信号）
权重矩阵 W (4×4): 通过 MZI 网格配置
输出: y = W × x（光信号叠加）
ADC: 转换为数字（唯一电子步骤）
```

**关键优势**：
- 矩阵乘 **0 功耗**（光本身）
- 仅 ADC/DAC 消耗能量（占总算力 10%）
- **可重构**：MZI 网格可编程（同硬件跑不同矩阵）

## MIPS RISC-V 处理器

| 维度 | 规格 |
|------|------|
| **架构** | **MIPS RISC-V 兼容**（64 位） |
| **核心数** | **64 个**（多线程） |
| **频率** | 2 GHz |
| **缓存** | L1 32KB + L2 1MB 每核 |
| **作用** | 调度 + 激活函数 + 预处理 |
| **原因** | MIPS 功耗低于 ARM Cortex-A78（核心数 4× 更省电） |

> **为什么用 MIPS RISC-V**：硅光核心仅适合矩阵乘，**非矩阵操作（softmax、layernorm、attention）** 仍需数字处理器。MIPS 比 ARM **同性能省 30% 功耗**。

## 8 卡系统 16 PFLOPS

| 项目 | 配置 |
|------|------|
| **Envise 卡数** | 8 |
| **总算力** | **16 PFLOPS FP16** |
| **总 HBM** | 512GB |
| **光互连带宽** | **1.6 TB/s 域内**（Passage） |
| **机柜 TDP** | ~520 W（仅 8 卡）|
| **机柜形态** | 1U / 2U 服务器 |
| **价格** | ~$50-70K（8 卡系统）|

**对比 NVIDIA H100 8 卡**：
- 算力 16 PF vs 32 PF（H100 FP8 dense 2 PF × 8）
- 功耗 520W vs 5600W（H100 700W × 8）— **Envise 10× 优势**
- 能效 30 TOPS/W vs 3 TOPS/W — **10× 优势**
- **延迟** 50% 更低（光互连）

## 厂商信息

| 项目 | 内容 |
|------|------|
| **公司** | Lightmatter, Inc. |
| **创始人** | Nicholas Harris（MIT 博士） |
| **成立** | 2017 |
| **总部** | 美国马萨诸塞州波士顿 |
| **融资** | **$420M+**（D 轮 2023-Q2 领投：USIT + Google Ventures） |
| **估值（2025）** | ~$1.2B（独角兽）|
| **2025 营收** | ~$30M（早期商业化）|
| **客户** | 谷歌内部测试、Meta、Anthropic、政府 HPC |
| **CEO** | Nicholas Harris |
| **CTO** | Darius Bunandar |
| **代工** | TSMC 3nm + AIM Photonics（硅光工艺）|
| **专利** | 200+ 项硅光 AI 专利 |

## Lightmatter 产品线

| 产品 | 定位 | 算力 | 发布 |
|------|------|------|------|
| **Envise** | AI 推理芯片 | 2 PF FP16 | 2022-11 |
| **Passage M1000** | 光互连芯片（PCIe Gen5 光纤）| 1.6 TB/s 域内 | 2022-11 |
| **Idiom** | 软件栈（PyTorch / TensorFlow 兼容）| - | 持续更新 |
| **Envise X** (推测) | 第二代硅光，5 PF FP16 | 5 PF | 2026 H2 推测 |

## 软件栈 Idiom

| 层级 | 工具 | 说明 |
|------|------|------|
| **AI 框架** | **Idiom** | PyTorch 1:1 兼容（自动映射矩阵乘到光子）|
| | TensorFlow（实验）| 兼容 |
| **编译器** | **Lightflow Compiler** | 矩阵算子 → 硅光配置 + MIPS 代码 |
| **运行时** | Idiom Runtime | 光子 + 数字核心协同调度 |
| **模型库** | ModelZoo | LLaMA / Mistral / Qwen / SDXL |

> ⚠️ **生态限制**：硅光仅适合矩阵乘，**softmax / attention / layernorm 等仍由 MIPS 处理**，模型需经过 Idiom 编译器优化。**PyTorch 模型直接运行性能下降 50-70%**，需手工标记 `lightmatter.optimize(model)`。

## 适用场景

- ✅ **低功耗 AI 推理**（数据中心 PUE 优化）
- ✅ **边缘 AI**（65W 可用风冷/无液冷部署）
- ✅ **绿色 AI**（碳中和目标企业）
- ✅ **LLM 推理**（2 PF FP16 装 70B FP16 + KV Cache）
- ✅ **政府/科研 HPC**（美国能源部、NSA 兴趣）
- ❌ **AI 训练**（Envise 仅推理，训练仍需 GPU）
- ❌ **CUDA 专有工作负载**（需 Idiom 移植）
- ❌ **非矩阵乘任务**（如 RNN 性能弱）

## Lightmatter vs NVIDIA H100

| 指标 | Lightmatter Envise | NVIDIA H100 |
|------|--------------------|--------------|
| **算力 FP16** | 2 PF | 2 PF FP8 sparse |
| **TDP** | **65W** | 700W |
| **能效** | **30 TOPS/W** | 3 TOPS/W |
| **内存** | 64GB HBM3 | 80GB HBM3 |
| **延迟** | **0 延迟矩阵乘** | 纳秒级 |
| **训练支持** | ❌ | ✅ |
| **生态** | Idiom (新) | CUDA (成熟) |
| **生产成熟度** | 早期量产 | 完全成熟 |
| **价格** | ~$5-8K | ~$25-30K |

> **Envise 杀手锏**：**TDP 65W vs H100 700W = 10× 能效优势**，**部署成本（机柜密度 + 散热）远低于 H100**。是 **超大规模 AI 推理的最佳 H/W 之一**。

## 硅光 AI 三巨头

| 公司 | 代号 | 算力 | TDP | 量产 |
|------|------|------|-----|------|
| **Lightmatter** | Envise | 2 PF | 65W | 2023 H2 |
| **Lightelligence** | 天机芯 (Tianjic) | 1.6 PF | ~100W | 2022 试点 |
| **LightOn** | Alfred | 1.2 PF | 80W | 2023 实验 |

## 关键特性

- **硅光计算**：业界首款 AI 推理商用硅光芯片
- **30 TOPS/W**：H100 10× 能效优势
- **65W TDP**：风冷部署，无需液冷
- **MIPS RISC-V**：64 核数字核心，处理非矩阵操作
- **光互连**：Passage 1.6 TB/s 域内
- **缺点**：仅推理、不支持训练、生态新

## 相关卡

- [Cerebras WSE-3](/docs/cards/cerebras/wse-3) - 晶圆级对比
- [Groq LPU v2](/docs/cards/others/groq-lpu-v2) - LPU 对比
- [Groq LPU v1](/docs/cards/others/groq-lpu) - Groq 第一代
- [Groq 3 LPX (NVIDIA 收购后)](/docs/cards/nvidia/groq-3-lpx) - Groq 第三代
- [NVIDIA H100](/docs/cards/nvidia/h100) - 传统 GPU 对比
- [Apple M4 Max](/docs/cards/others/apple-m4-max) - 消费级对比
- [Tenstorrent](/docs/cards/others/tenstorrent) - RISC-V AI
