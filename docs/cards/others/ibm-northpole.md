---
id: ibm-northpole
title: IBM NorthPole (In-Memory Compute, 2023)
sidebar_label: IBM NorthPole
description: IBM NorthPole 详尽规格：22nm、458 TOPS INT8、75W、In-Memory Compute、原研 TrueNorth 后裔、Science 2023 论文。
keywords: [IBM NorthPole, In-Memory Compute, 神经形态, 22nm, 458 TOPS, TrueNorth, IBM Research, Science 2023]
---

# IBM NorthPole (In-Memory Compute, 2023)

## 产品概述

**IBM NorthPole** 是 IBM Research 开发的**革命性 AI 推理芯片**，原型发布于 **2023-10-19 Science 论文**（"Neuromorphic computing at scale"，Dharmendra Modha 团队），**22nm 制程**，**458 TOPS INT8** 算力，**75W TDP**。采用**存内计算（In-Memory Compute）**架构，**所有权重存储在片上 SRAM + 模拟计算单元**，**消除冯·诺依曼瓶颈**（传统 GPU 99% 功耗花在数据搬运）。

**架构灵感**：源自 IBM **TrueNorth 神经形态芯片**（2014, 54亿晶体管，100万神经元），**NorthPole 是 TrueNorth 的 AI 实用化版本**，**能效比 GPU 高 25×**（IBM 官方论文数据）。

**战略意义**：IBM 是 **存内计算 + 神经形态** AI 的领导者，**NorthPole 是首个**将存内计算规模扩大到 458 TOPS 的商业可用 AI 芯片。**NorthPole 2** 预计 2025 H2 发布，**25× 能效优势**。

## 核心规格

| 项目 | 参数 |
|------|------|
| **架构** | IBM NorthPole（In-Memory Compute） |
| **制程** | **IBM 22nm SOI**（**Samsung/Samsung 11nm 推测 2026**） |
| **核心数** | **256 个 CISC 处理器**（Custom Instruction Set） |
| **SRAM** | **224MB 片上 SRAM**（**业界最大 AI 芯片 SRAM 之一**） |
| **存内计算** | **1.6 亿字节权重 + 30 亿 MAC 单元** |
| **内存带宽** | **2.5 TB/s**（片上 SRAM） |
| **INT8** | **458 TOPS** |
| **FP16** | ~110 TFLOPS |
| **TDP** | 75 W |
| **能效** | **6.1 TOPS/W**（H100 ~2.16, **3× 优势**） |
| **延迟** | **5-10ms**（存内计算 0 数据搬运） |
| **量产** | **未商业化**（研究原型） |
| **商业版** | **NorthPole 2** 2025 H2 推测 |

## 存内计算（In-Memory Compute）原理

| 维度 | 传统 GPU (von Neumann) | IBM NorthPole (In-Memory) |
|------|------------------------|---------------------------|
| **架构** | 内存（DRAM/HBM）+ 计算（GPU）分离 | **内存 + 计算 融合** |
| **数据搬运** | 99% 功耗在数据搬运 | **0 数据搬运（计算在 SRAM 内部）** |
| **算子** | 标量 MAC 阵列 | **模拟 / 数字混合** |
| **能耗** | 1× | **0.04×**（25× 优势） |
| **延迟** | 受 HBM 限制 | **5-10ms**（0 等待） |
| **可重构** | CUDA 程序 | **网络拓扑配置** |
| **精度** | FP64/FP32/FP16/INT8 | **INT8 为主**（模拟计算限制） |
| **缺点** | - | **仅推理、INT8 限制、训练不成熟** |

### 存内计算的工作方式

```
传统 GPU:
  加载权重 (HBM) → 加载输入 (HBM) → MAC (CUDA) → 存回结果 (HBM)
  总能耗: 100%  (其中 99% 在数据搬运)

IBM NorthPole:
  权重已预存在 SRAM 模拟单元（不可变）
  加载输入 (SRAM) → 模拟 MAC (SRAM 内部) → 存回结果 (SRAM)
  总能耗: 4%  (数据搬运仅 0-1%)
```

**关键优势**：
- **224MB SRAM 一次性存全部权重**（LLM 70B INT8 = 70GB 仍需 HBM，但小模型可纯 SRAM）
- **30 亿模拟 MAC 单元**同时计算
- **6.1 TOPS/W**（H100 3× 能效）

## 256 个 CISC 处理器

| 维度 | 规格 |
|------|------|
| **架构** | **CISC（Custom Instruction Set）** |
| **核心数** | 256 个 |
| **每核** | 64KB SRAM + 4 个模拟 MAC 单元 |
| **频率** | 1.4 GHz |
| **作用** | 调度 + 激活函数 + 标量操作 |
| **ISA** | **私有**（非 RISC-V，非 ARM） |
| **编程** | 神经网络拓扑图配置（类 TrueNorth） |

> **CISC vs RISC**：NorthPole 不用 RISC-V 是因为存内计算需要**专用指令**（神经拓扑编译）。**TrueNorth → NorthPole** 是 IBM 10 年研发积累。

## 25× 能效比来源

| 因素 | 能耗节省 |
|------|----------|
| **数据搬运减少** | **20×**（vs HBM） |
| **模拟计算** | **3×**（vs 数字） |
| **SRAM 内部计算** | **1.5×**（vs 寄存器） |
| **22nm SOI** | **0.8×**（vs 5nm 数字） |
| **合计** | **25×**（IBM 论文数据） |

> **IBM 论文结论**：**NorthPole 在 ResNet-50 推理上，比 NVIDIA H100 节能 25×、快 25×**（同精度下）。

## ResNet-50 性能（IBM Science 论文）

| 维度 | IBM NorthPole | NVIDIA V100 | NVIDIA H100 |
|------|---------------|--------------|--------------|
| **延迟** | **5ms** | 8ms | 2ms |
| **吞吐** | **7,000 images/s** | 5,000 images/s | 15,000 images/s |
| **能效** | **6.1 TOPS/W** | 0.4 TOPS/W | 2.16 TOPS/W |
| **功率** | 75W | 250W | 700W |
| **精度** | INT8 | FP16 | FP8 |

> **NorthPole 优势**：**5ms 延迟是 V100 1.6×，但能效是 15×**。**H100 在吞吐上胜出（FP8 优势）**，但 NorthPole 在**低延迟 + 低功耗** 场景胜出。

## 厂商信息

| 项目 | 内容 |
|------|------|
| **公司** | IBM Research |
| **实验室** | IBM Research - Almaden（加州圣何塞） |
| **首席科学家** | **Dharmendra S. Modha**（IBM Fellow） |
| **团队** | 100+ IBM Research 工程师 |
| **发表** | **Science 2023-10-19**（"Neuromorphic computing at scale"）|
| **论文引用** | 200+ 次（2024-2026） |
| **商业化** | **未商业化**（IBM 不直接销售）|
| **商业路径** | **IBM Cloud 推理服务**（未来）+ **IP 授权**（Samsung 11nm 2026） |
| **客户** | 美国 DARPA、NASA、Department of Energy |
| **竞争对手** | Mythic（数字 CIM）、Syntiant（端侧 CIM）、智芯科技（中国） |

## IBM 神经形态 AI 演进

| 产品 | 发布 | 晶体管 | 神经元 | 算力 | 用途 |
|------|------|--------|--------|------|------|
| **TrueNorth** | 2014 | 54 亿 | 100 万 | - | 神经形态研究 |
| **NorthPole** | 2023-10 | 220 亿 | 模拟 | **458 TOPS INT8** | **AI 推理** |
| **NorthPole 2** | **2025 H2 推测** | - | 模拟 | **1.2 POPS INT8**（推测） | **AI 推理 + 训练** |
| NorthPole 3 (推测) | 2027 | - | 模拟 | 5 POPS | 通用 AI |

## 适用场景

- ✅ **低延迟 AI 推理**（5-10ms，超低延迟）
- ✅ **超低功耗 AI**（75W，3-25× GPU 能效）
- ✅ **政府/科研 HPC**（美国 DARPA、NASA、DOE）
- ✅ **神经形态 AI 研究**（AI 下一代架构）
- ✅ **小模型推理**（7B-13B 70GB < 224MB 可纯 SRAM）
- ❌ **AI 训练**（NorthPole 仅推理）
- ❌ **大模型训练**（< 224MB SRAM 限制）
- ❌ **商业采购**（IBM 未商业化）
- ❌ **CUDA 兼容**（私有 ISA）

## IBM 存内计算战略

- **IBM Research AI 旗舰项目**：Modha 团队 10 年研发
- **DARPA 资助**：SyNAPSE 项目（2014-2024 $100M+ 累计）
- **NorthPole 2**：2025 H2 商业版，与 Samsung 合作 11nm
- **AI Cloud 服务**：IBM Cloud 集成 NorthPole 推理
- **开源软件**：IBM 计划开源 NorthPole 编译栈（与 PyTorch 集成）

## 关键特性

- **In-Memory Compute**：业界首个 458 TOPS 规模存内计算
- **224MB SRAM**：业界最大 AI 芯片 SRAM
- **6.1 TOPS/W**：H100 3× 能效
- **5ms 延迟**：实时 AI 推理
- **75W TDP**：风冷部署
- **缺点**：未商业化、仅 INT8、训练不支持

## 神经形态 AI 三巨头

| 公司 | 产品 | 算力 | 状态 |
|------|------|------|------|
| **IBM** | **NorthPole** | **458 TOPS INT8** | 2023 原型 |
| **Intel** | **Loihi 2** | 1M 神经元 | 2021 神经形态研究 |
| **Brainchip** | **Akida 2** | 200 GOPS INT8 | 2023 Edge 商用 |

## 相关卡

- [Akida 2](/docs/cards/others/akida-2) - 神经形态 Edge AI
- [Lightmatter Envise](/docs/cards/others/lightmatter-envise) - 硟光
- [Lightelligence 天机芯](/docs/cards/others/lightelligence) - 中国硟光
- [LightOn (法国硟光)](/docs/cards/others/lighton) - 法国硟光
- [Groq LPU v2](/docs/cards/others/groq-lpu-v2) - LPU 推理
- [Cerebras WSE-3](/docs/cards/cerebras/wse-3) - 晶圆级
- [Apple M4 Max](/docs/cards/others/apple-m4-max) - 移动/工作站
- [NVIDIA L4](/docs/cards/nvidia/l4) - 边缘 GPU
