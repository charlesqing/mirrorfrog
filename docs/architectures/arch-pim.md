---
id: arch-pim
title: PIM / NDP (Processing-in-Memory) 存算一体
sidebar_label: PIM / NDP
description: PIM 架构详解：Samsung HBM-PIM 存算一体、消除内存墙、能效提升 2.5×、Memory-bound 推理首选。
keywords: [PIM, Processing-in-Memory, NDP, Near-Data Processing, HBM-PIM, Samsung Aquabolt, 存算一体]
---

# PIM / NDP (Processing-in-Memory) 架构

## 什么是 PIM

**PIM（Processing-in-Memory）**，也叫 **NDP（Near-Data Processing）**，将**计算单元集成到内存芯片内部**，让数据**不出内存**就能计算。**彻底消除"内存墙"瓶颈**——传统架构中，数据从 DRAM 搬运到处理器，**能耗是计算的 100-1000×**。

**代表产品**：
- **Samsung HBM-PIM (Aquabolt-XL)**
- **Samsung HBM-CAM**（内容可寻址内存）
- **UPMEM PIM-DIMM**（DDR4-PIM）
- **Mythic AI AMP**（NOR Flash PIM）

## PIM 核心创新

### 内存墙问题
- 2017-2024 AI 算力增长 1000×
- 内存带宽仅增长 100×
- 99% 时间 + 99% 能耗 = **搬运数据**
- PIM 让计算**贴近数据**

### 架构模式
- **HBM-PIM**：HBM 堆叠每层 DRAM 阵列旁集成 FP16 MAC
- **UPMEM**：DDR4 内存每 bank 旁集成 RISC-V 核
- **Mythic**：NOR Flash 阵列旁集成 INT8 MAC
- **共同点**：**计算单元嵌入存储阵列**

## 性能优势

### Samsung HBM-PIM（Aquabolt-XL）
- **1.2 TFLOPS FP16**（每 HBM 堆叠）
- **2× 推理加速**（vs 传统 HBM + A100）
- **2.5× 能效提升**
- **TDP 仅 +10%**（vs 传统 HBM）
- 兼容现有 GPU 主板（无需大改）

### 适用场景
- **Memory-bound 操作**：LLM 解码、RAG、推荐系统
- **大模型推理**：KV cache 加速
- **向量检索**：embedding 查表

## PIM vs 传统架构

| 维度 | PIM (HBM-PIM) | 传统 HBM + GPU | PIM (UPMEM) |
|------|---------------|----------------|-------------|
| 集成 | **计算嵌入 HBM** | 分离 | 计算嵌入 DDR |
| 算力 | 1.2 TFLOPS / 堆叠 | 312 TFLOPS（A100） | 0.5 GFLOPS / DIMM |
| 能效 | **2.5× 提升** | 基准 | 10-20× 提升 |
| 软件改动 | **小**（兼容 HBM） | 基准 | 需新编程模型 |
| 适用 | LLM 推理、RAG | 通用 | 大数据预处理 |

## PIM 生态挑战

- ⚠️ **生态早期**：仅 Samsung 自有 SDK + 部分 OEM
- ⚠️ **软件适配**：需要重写算子利用 PIM
- ⚠️ **CUDA 兼容**：当前仅支持特定算子
- ✅ **Samsung 加速推动**：与 NVIDIA H200 集成合作
- ✅ **UPMEM** 提供完整 SDK

## 主流 PIM 产品

### Samsung HBM-PIM
- **Aquabolt**（2021-02）：初代
- **Aquabolt-XL**（2022-12）：2× 算力
- **HBM3-PIM**（2024）：即将发布
- 与 NVIDIA H200 集成合作

### UPMEM
- **UPMEM-PIM DIMM**（DDR4-2400）
- 每 DIMM 集成 8-16 个 DPU（DRAM Processing Unit）
- 数据预处理 / 数据库加速
- 2020 商业化

### Mythic AI
- **Mythic AMP**（Analog Matrix Processor）
- **NOR Flash PIM**（INT8）
- **边缘 AI**（摄像头、IoT）
- 2024 被 Dmatrix 收购

### 学术
- **Princeton**（PIM 研究先驱）
- **ETH Zurich**（Smart Memory）
- **SK Hynix**（AiM 加速器）

## 适用场景

- ✅ **大模型推理**（LLM 解码）
- ✅ RAG（检索增强生成）
- ✅ 向量数据库 / 嵌入检索
- ✅ 数据预处理（数据库加速）
- ✅ 推荐系统
- ⚠️ 训练（小规模优势不明显）
- ❌ 算力密集型（GPU 已足够）

## 详细产品页

- [Samsung HBM-PIM (Aquabolt-XL)](/docs/cards/others/hbm-pim) - 完整规格

## 相关架构

- [GPU](/docs/architectures/arch-gpu) - 通用 AI
- [TPU](/docs/architectures/arch-tpu) - Google 数据中心
- [LPU](/docs/architectures/arch-lpu) - 超低延迟 LLM
- [完整对比表](/docs/comparison)
