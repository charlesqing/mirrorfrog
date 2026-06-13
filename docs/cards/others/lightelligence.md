---
id: lightelligence
title: Lightelligence 光启元 / 天机芯 (硟光 AI 加速器)
sidebar_label: Lightelligence 光启元
description: Lightelligence 天机芯 详尽规格：7nm、1.6 PF FP16、100W、光子矩阵计算、中科院 + 清华孵化、硟光三巨头。
keywords: [Lightelligence, 天机芯, 硟光, 光学 AI, 1.6 PF, 中科院, 硟光三巨头]
---

# Lightelligence 光启元 / 天机芯 (硟光 AI 加速器)

## 产品概述

**Lightelligence（光启元 / 光启智算）** 是中国领先的**硟光 AI 芯片**公司，**2017 成立**，由**清华大学 + 中科院上海光机所**联合孵化，总部上海。**天机芯（Tianjic）** 是其首款商用硟光 AI 加速器，**2022 发布**，**7nm 工艺**，**1.6 PFLOPS FP16** 算力，**~100W TDP**。是 **Lightmatter Envise 的中国对标**，与 Lightmatter、LightOn 并称"**硟光三巨头**"。

**战略意义**：在 Lightmatter 美国技术出口管制背景下，**Lightelligence 是中国硟光 AI 唯一商用化公司**，承担**国家 863 重大专项**和**国家自然科学基金重点项目**，主要客户为**中国超算中心、政府 HPC、AI for Science 项目**。

## 核心规格

| 项目 | 参数 |
|------|------|
| **架构** | Lightelligence 天机芯（Optical Matrix Multiplication） |
| **制程** | TSMC 7nm（光子 + 电子混合）|
| **光子核心** | **64 个 MZI（马赫-泽恩德干涉仪）** |
| **数字核心** | **32× RISC-V 处理器**（调度 + 激活） |
| **HBM** | 32GB HBM2E |
| **内存带宽** | 819 GB/s |
| **FP16** | **1.6 PFLOPS** |
| **FP32** | ~0.8 PFLOPS |
| **INT8** | 3.2 POPS |
| **TDP** | 100 W |
| **能效比** | **16 TOPS/W**（H100 ~3 TOPS/W，**5× 优势**） |
| **板卡形态** | PCIe Gen4 ×16 |
| **互连** | 自研光互连（PCIe + 光纤）|
| **量产** | 2023 H2 |
| **单价** | ~$3,500-5,500 |

## 硟光计算原理

| 维度 | 传统 GPU | Lightelligence 天机芯 |
|------|----------|------------------------|
| **计算介质** | 电子（CMOS 晶体管） | **光子（硅光波导 + MZI）** |
| **矩阵乘法** | MAC 阵列 | **MZI 网格（光传播矩阵乘）** |
| **信号传播** | 铜线 + 电阻 | **光波导（0 电阻）** |
| **功耗来源** | CV²（晶体管开关） | **仅 MZI 调制器** |
| **热设计** | 复杂液冷 | **自然风冷（100W）** |
| **频率** | 1-2 GHz | **>40 GHz（理论）** |
| **精度** | FP64/FP32/FP16/INT8 | **FP16/INT8 为主** |
| **缺点** | - | **非矩阵操作仍需电子，模型有限** |

### MZI 矩阵乘法原理

```
输入向量 (8 维): [x0, x1, x2, x3, x4, x5, x6, x7]（光信号）
权重矩阵 W (8×8): 配置到 64 个 MZI
输出: y = W × x（光信号叠加）
ADC: 转换数字（仅 1 次电子步骤）
```

**关键优势**：
- **64 个 MZI 同时计算**（一周期完成 8×8 = 64 乘加）
- **光传播速度 = 0 等待**（vs GPU 受 HBM 限制）
- **能效 16 TOPS/W**（GPU 5-10× 优势）

## 32 个 RISC-V 处理器

| 维度 | 规格 |
|------|------|
| **架构** | **RISC-V 64 位**（自研 SiFive 核心） |
| **核心数** | 32 个 |
| **频率** | 1.5 GHz |
| **缓存** | L1 32KB + L2 512KB 每核 |
| **作用** | 调度 + 激活函数 + 非矩阵操作 |
| **国产化** | 100% RISC-V（vs ARM 私有） |

> **RISC-V 选择原因**：相比 ARM Cortex-A78，**RISC-V 同性能省 20% 功耗**，且**完全自主可控**（符合中国信创要求）。

## 厂商信息

| 项目 | 内容 |
|------|------|
| **公司** | 光启元 / 光启智算（Lightelligence） |
| **创始人** | 沈志华（中科院上海光机所 + 清华） |
| **成立** | 2017 |
| **总部** | 上海市嘉定区 |
| **融资** | **$280M+**（C 轮 2022 领投：北极光创投） |
| **估值（2025）** | ~¥15B |
| **2024 营收** | ~¥0.8B（早期商业化）|
| **员工** | ~500 人 |
| **国家项目** | 国家 863 重大专项、国家自然科学基金重点 |
| **代工** | TSMC 7nm + 自研硟光工艺（中科院微电子所）|
| **专利** | 150+ 项硟光 AI 专利 |
| **客户** | 中国超算中心（无锡、长沙、深圳）、政府 HPC、AI for Science |

## 硟光三巨头

| 公司 | 国家 | 产品 | 算力 | TDP | 量产 |
|------|------|------|------|-----|------|
| **Lightmatter** | 🇺🇸 美国 | **Envise** | 2 PF | 65W | 2023 H2 |
| **Lightelligence** | 🇨🇳 中国 | **天机芯** | 1.6 PF | 100W | 2023 H2 |
| **LightOn** | 🇫🇷 法国 | **Alfred** | 1.2 PF | 80W | 2023 实验 |

> **Lightelligence 优势**：**唯一中国商用硟光 AI**（Lightmatter 美国出口管制），**国家政策重点支持**。

## 适用场景

- ✅ **AI for Science**（蛋白质结构、气候、材料模拟）
- ✅ **超算中心**（中国无锡、长沙、深圳超算）
- ✅ **政府 HPC**（国家安全、AI 反演）
- ✅ **低功耗 AI 推理**（100W 风冷部署）
- ✅ **国产化项目**（RISC-V + 硟光）
- ❌ AI 训练（仅推理）
- ❌ 国际市场（出口管制）
- ❌ 非矩阵乘任务（RNN 性能弱）

## 关键特性

- **硟光计算**：中国唯一商用硟光 AI 芯片
- **16 TOPS/W**：H100 5× 能效优势
- **RISC-V 32 核**：完全自主可控
- **100W TDP**：风冷部署
- **国家政策支持**：863 重大专项
- **缺点**：生态仅 1 年，比 Lightmatter 晚 1 年

## 相关卡

- [Lightmatter Envise](/docs/cards/others/lightmatter-envise) - 美国对标
- [Cambricon 寒武纪 MLU 590](/docs/cards/others/cambricon-mlu) - 国产 AI
- [Huawei Ascend 910C](/docs/cards/huawei/ascend-910c) - 国产最强
- [Moore Threads MTT S5000](/docs/cards/others/moore-threads-mtt-s5000) - 国产 GPU
- [Tenstorrent](/docs/cards/others/tenstorrent) - RISC-V AI
- [NVIDIA H100](/docs/cards/nvidia/h100) - 传统 GPU 对比
