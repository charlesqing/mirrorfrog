---
id: biren-br104
title: Biren 壁仞 BR104 (国产 AI 训练/推理)
sidebar_label: Biren 壁仞
description: 壁仞科技 BR104 详尽规格：7nm、1024 TOPS INT8、64GB HBM2E、BIRENSUPA 软件栈、国产 AI 创业五虎。
keywords: [Biren, 壁仞, BR104, 国产 AI 芯片, BIRENSUPA, 国产替代, 国产 AI 创业五虎]
---

# Biren 壁仞 BR104 (国产 AI 训练/推理)

## 产品概述

**壁仞科技（Biren Technology）** 是中国 AI 芯片创业公司，**2019-09 成立**，总部上海。**BR104** 是其首款量产 AI 训练/推理芯片，**2022-Q3 发布**，**7nm 工艺**，**1024 TOPS INT8** 算力（**约 H100 的 2×**），**64GB HBM2E** 内存，**896 GB/s 带宽**。配套自研 **BIRENSUPA** 软件栈（类 CUDA）。

**战略地位**：壁仞与**摩尔线程、景嘉微、芯原微电子、天数智芯**并称"**国产 AI 创业五虎**"。**融资 $700M+**（B 轮 2021-Q1 创中国半导体单笔融资纪录），**目标科创板 IPO**（2026-2027 预计）。

## 核心规格

| 项目 | 参数 |
|------|------|
| **架构** | Biren BR104（自研） |
| **制程** | TSMC 7nm（2022 量产时），未来 SMIC 国产化 |
| **GPU 核心** | **2 颗 BR104 小芯片**（双 chiplet） |
| **计算核心** | 64× Biren 私有 ISA（类 GPGPU） |
| **HBM** | **64GB HBM2E** |
| **内存带宽** | **896 GB/s** |
| **INT8** | **1024 TOPS** |
| **BF16** | **256 TFLOPS** |
| **FP32** | 128 TFLOPS |
| **TDP** | **300 W** |
| **板卡形态** | PCIe Gen4 ×16 |
| **互连** | BirenLink（自研，类 NVLink） |
| **量产** | 2022-Q4 |
| **单价** | ~$3,500-5,500 |

## 双小芯片设计

| 维度 | 规格 |
|------|------|
| **小芯片数** | 2× BR104 计算芯片 |
| **封装** | CoWoS（TSMC 封装） |
| **互连** | 内部 SerDes，400 GB/s 双向 |
| **HBM** | 32GB × 2（双芯片各带）|
| **单芯片 INT8** | 512 TOPS |
| **双芯片 INT8** | **1024 TOPS**（理论，可叠加）|
| **优势** | 良率高（双小芯片 vs 单大芯片）|
| **劣势** | 内部互连延迟略高 |

> **壁仞 7nm 双小芯片 vs 华为 7nm 双小芯片**：两家都采用相同架构规避 SMIC 7nm 良率问题。**壁仞 BR104 早华为 Ascend 910C 1 年（2022 vs 2023）**。

## 与 NVIDIA H100 对比

| 指标 | Biren BR104 | NVIDIA H100 | 差异 |
|------|--------------|--------------|------|
| INT8 | 1024 TOPS | 1513 TOPS | H100 +48% |
| BF16 | 256 TF | 756 TF | H100 3× |
| 内存 | 64GB HBM2E | 80GB HBM3 | H100 +25% |
| 带宽 | 896 GB/s | 3.35 TB/s | **H100 3.7×** |
| TDP | 300W | 700W | **BR104 -57%** |
| 软件 | BIRENSUPA | CUDA | H100 成熟 |
| 价格 | ~$4K | ~$25-30K | **BR104 -85%** |

> **BR104 优势**：**TDP 仅 300W（H100 57% 节能）**、**价格 15% H100**、**国产化设计**。在 H100 出口管制背景下是**重要国产替代方案**。

## BIRENSUPA 软件栈

| 层级 | 工具 | 对标 NVIDIA |
|------|------|-------------|
| **AI 框架** | PyTorch-BIREN | PyTorch + CUDA |
| | TensorFlow-BIREN | TensorFlow |
| | **BIRENSUPA** | 统一计算平台 |
| **编译器** | BPA Compiler | nvcc |
| **运行时** | BIRENSUPA Runtime | CUDA Runtime |
| **数学库** | BIREN Bblas | cuBLAS |
| **深度学习库** | BIREN DNN | cuDNN |
| **通信库** | BIREN Collective | NCCL |

> ⚠️ **生态限制**：相比 CUDA 18 年生态，**BIRENSUPA 仅 3-4 年**，算子覆盖率约 **60-70%**（vs CUDA 99%+），**复杂 LLM 模型迁移需大量手工优化**。

## 厂商信息

| 项目 | 内容 |
|------|------|
| **公司** | 壁仞科技（Biren Technology） |
| **创始人** | 张文（CEO，前商汤科技副总裁） |
| **成立** | 2019-09 |
| **总部** | 上海市浦东新区 |
| **融资** | **$700M+**（B 轮 2021-Q1 创中国半导体单笔融资纪录） |
| **估值（2025）** | ~¥30B |
| **2025 营收** | ~¥1.5B |
| **员工** | ~1500 人 |
| **状态** | **准备科创板 IPO**（2026-2027 预计） |
| **主要客户** | 中国移动、浪潮、联想、字节跳动、智谱 AI、商汤 |
| **生态合作** | 飞桨（PaddlePaddle）、昇思（MindSpore）、阿里平头哥 |

## 国产 AI 创业五虎

| 公司 | 成立 | 代表产品 | 算力 | 融资 | 状态 |
|------|------|----------|------|------|------|
| **壁仞科技** | 2019 | **BR104** | 1024 INT8 TOPS | **$700M+** | 准备 IPO |
| **摩尔线程** | 2020 | MTT S5000 | 100 INT8 TOPS | $500M+ | 准备 IPO |
| **天数智芯 Iluvatar** | 2018 | MR 100/200 | 256 INT8 TOPS | $400M+ | 港股上市 |
| **寒武纪 Cambricon** | 2016 | MLU 590 | 256 INT8 TOPS | 科创板上市 | 上市公司 |
| **景嘉微** | 2006 | JM9 | 军用为主 | 创业板上市 | 上市公司 |

## 关键特性

- **双小芯片 7nm**：规避 SMIC 7nm 良率问题
- **1024 INT8 TOPS**：国产 AI 芯片前列
- **TDP 300W**：比 H100 省 57% 功耗
- **国产软件栈**：BIRENSUPA 完全自研
- **缺点**：FP8 不支持、ROCm/CUDA 兼容弱、生态 3-4 年

## 适用场景

- ✅ **国产 AI 训练**（H100 出口管制替代）
- ✅ **LLM 训练**（256 BF16 TF + 64GB HBM2E）
- ✅ **政府/国企 AI 项目**（国产化政策强制）
- ✅ **智算中心建设**（"东数西算"枢纽）
- ✅ **互联网公司**（字节、商汤、智谱）
- ❌ 国际市场（无 CUDA 兼容）
- ❌ 顶级前沿 FP8 模型训练

## Biren 产品线

| 产品 | 发布 | 算力 | 状态 |
|------|------|------|------|
| **BR104** | 2022-Q4 | 1024 INT8 TOPS | **量产** |
| BR106 (推测) | 2025 H2 | 2048 INT8 TOPS | 路线图 |
| BR200 (推测) | 2026 H2 | 4096 INT8 TOPS | 路线图 |

## 相关卡

- [Moore Threads MTT S5000](/docs/cards/others/moore-threads-mtt-s5000) - 国产 GPU 对比
- [Cambricon 寒武纪 MLU 590](/docs/cards/others/cambricon-mlu) - 国产 AI 训练
- [Huawei Ascend 910C](/docs/cards/huawei/ascend-910c) - 国产最强
- [Huawei Ascend 920](/docs/cards/huawei/ascend-920) - 国产下一代
- [Tenstorrent](/docs/cards/others/tenstorrent) - RISC-V AI
- [NVIDIA H100](/docs/cards/nvidia/h100) - 性能对比
- [SambaNova SN40L](/docs/cards/others/sambanova-sn40l) - 美国 RDU 创业
