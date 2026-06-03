---
id: arch-neuromorphic
title: Neuromorphic (神经形态) 架构
sidebar_label: Neuromorphic
description: Neuromorphic 架构详解：BrainChip Akida、Intel Loihi、IBM TrueNorth 等类脑芯片，事件驱动、SNN 神经网络、超低功耗。
keywords: [Neuromorphic, 神经形态, BrainChip Akida, Intel Loihi, IBM TrueNorth, SNN, Spiking Neural Network]
---

# Neuromorphic (神经形态) 架构

## 什么是 Neuromorphic Computing

**Neuromorphic Computing**（神经形态计算）模仿**生物大脑**的神经元和突触机制，**event-driven**（事件驱动），仅在**脉冲**到达时计算。**SNN（Spiking Neural Network，脉冲神经网络）** 是核心算法。

**核心优势**：
- **超低功耗**（< 1.5W）
- **亚毫秒延迟**
- **片上学习**（无需云端训练）
- **稀疏激活**（静态场景近 0 计算）

## Neuromorphic vs 传统 AI 芯片

| 维度 | Neuromorphic | NPU | GPU |
|------|--------------|-----|-----|
| 网络 | **SNN（脉冲）** | CNN/Transformer | 任意 |
| 数据 | **稀疏（event）** | 密集 | 密集 |
| 能耗 | **< 1.5W** | 10-100W | 100-1000W |
| 延迟 | **亚毫秒** | 10-50ms | 10-50ms |
| 片上学习 | **支持** | 弱 | 不支持 |
| 算力 | 4-100 TOPS | 50-2000 TOPS | 1,000+ TOPS |
| 适用 | 永远在线、电池 | 边缘推理 | 通用 AI |

## 主流 Neuromorphic 芯片

### BrainChip Akida 2（2024）
- **80 个 NPU**（Neural Processing Unit）
- **4 TOPS INT8**
- **1.5W 典型**（< 100mW 空闲）
- **片上 TAML 学习**
- 商业化最成熟

### Intel Loihi 2（2022）
- **128 核 / 1M 神经元 / 120M 突触**
- **0.5-1W 功耗**
- **片上 STDP 学习**
- 研究为主（Hala Point 1.15B 神经元系统）

### IBM TrueNorth（2014，遗产）
- **54 亿晶体管**
- **100 万神经元 / 2.56 亿突触**
- **70mW 功耗**
- 已停产，研究遗留

### 清华 Tianjic（中国，2019）
- **156 核 FCore**
- **支持 SNN + ANN 混合**
- 用于自行车 / 无人机控制

## 神经形态 vs 传统 AI 应用

| 场景 | Neuromorphic 优势 | 传统 AI |
|------|-------------------|---------|
| 关键词唤醒 | **< 1mW** | 30mW (Cortex-M7) |
| 运动检测 | **always-on** | 需 wake-up |
| 声纹识别 | **片上学习** | 云端训练 |
| 触觉传感 | 实时处理 | 不适用 |
| 嗅觉识别 | 高效 | 需复杂预处理 |
| 大语言模型 | **不适用** | GPU/TPU |

## 商业部署

### BrainChip
- **Mercedes-Benz** AVATR 概念车
- **Edge Impulse** 集成（无代码平台）
- **国防** 客户
- **助听器** 应用

### Intel Loihi
- **Intel Hala Point**（1.15B 神经元系统）
- **HPE Sandia** 国家实验室
- **耶鲁 / Stanford** 学术研究
- 主要研究用途

## 编程模型

### SNN 框架
- **Nengo**（Python）
- **Brian2**（spiking 模拟）
- **Lava**（Intel）
- **Akida SDK**（BrainChip）
- **NEST**（神经科学）

### 训练算法
- **STDP**（Spike-Timing-Dependent Plasticity）
- **TAML**（BrainChip 片上学习）
- **ANN → SNN 转换**（主流）

## 适用场景

- ✅ **永远在线 (always-on) 设备**
- ✅ **电池供电** AI（可穿戴、IoT）
- ✅ **声纹识别 / 关键词唤醒**
- ✅ **运动检测 / 异常检测**
- ✅ **隐私敏感**（本地推理）
- ✅ **触觉 / 嗅觉 / 多模态**
- ❌ 大模型（应使用 GPU/TPU）
- ❌ 高吞吐量推理
- ❌ 大规模训练

## 详细产品页

- [BrainChip Akida 2](/docs/cards/others/akida-2) - 完整规格

## 相关架构

- [NPU](/docs/architectures/arch-npu) - 端侧 NPU
- [PIM/NDP](/docs/architectures/arch-pim) - 存算一体
- [GPU](/docs/architectures/arch-gpu) - 通用 AI
- [完整对比表](/docs/comparison)
