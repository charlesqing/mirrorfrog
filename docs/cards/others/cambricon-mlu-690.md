---
id: cambricon-mlu-690
title: Cambricon 寒武纪 MLU 690 (2025-2026 推测)
sidebar_label: MLU 690
description: 寒武纪 MLU 690 详尽规格（推测）：5nm、2 PF FP8 dense、192GB HBM3E、MLU 590 2× 性能、国产下一代 AI。
keywords: [Cambricon MLU 690, 寒武纪, 5nm, FP8, HBM3E, 国产下一代, 2025-2026 推测]
---

# Cambricon 寒武纪 MLU 690 (2025-2026 推测)

:::warning 推测内容
本页规格基于寒武纪 2024 公开声明 + 陈天石 2025-Q1 路线图 + 行业分析师推测。**寒武纪官方尚未发布 MLU 690 完整规格**，**正式数据以 2025 H2 / 2026 H1 实际发布为准**。
:::

## 产品概述

**Cambricon 寒武纪 MLU 690** 是寒武纪第七代 AI 训练/推理芯片，**预计 2025 H2 至 2026 H1 发布**（**思元 690**）。基于 **5nm 工艺**（台积电或 SMIC 国产化），**2 PFLOPS FP8 dense** 算力（MLU 590 的 2×），**192GB HBM3E** 内存，**5 TB/s 带宽**。配套 **MindSpore 2.0** + **寒武纪 NeuWare 2.0** 软件栈。

**战略意义**：在 NVIDIA B200 / AMD MI355X / 华为 Ascend 920 竞争下，**MLU 690 是寒武纪重回国产 AI 龙头**的关键产品。**2025 寒武纪营收 ¥7.2B**，**MLU 690 目标 ¥15-20B**（2026）。

## 核心规格（推测）

| 项目 | 参数 |
|------|------|
| **架构** | Cambricon MLUv07（第七代） |
| **制程** | **TSMC 5nm / SMIC 5nm 国产化（推测）** |
| **小芯片数** | 2× chiplet |
| **HBM** | **192GB HBM3E** |
| **内存带宽** | **5 TB/s** |
| **FP8 dense** | **2 PFLOPS** |
| **FP16 / BF16 dense** | 1 PFLOPS |
| **INT8** | 4 POPS |
| **TDP** | **~500W** |
| **板卡形态** | OAM / PCIe Gen5 ×16 |
| **互联** | **MLU-Link 1.2 TB/s**（类 NVLink 5） |
| **量产** | **2025 H2 - 2026 H1** |
| **单价（OAM）** | **~$8,000-12,000**（推测）|

## 与 MLU 590 对比

| 指标 | MLU 690 (推测) | MLU 590 | 提升 |
|------|------------------|---------|------|
| 制程 | 5nm | 7nm | 新代 |
| HBM | 192GB HBM3E | 96GB HBM2 | 2× |
| 带宽 | 5 TB/s | 600 GB/s | 8× |
| FP8 dense | **2 PF** | N/A (FP16 125 TF) | 新增 |
| FP16 / BF16 | 1 PF | 125 TF | **8×** |
| INT8 | 4 POPS | 256 TOPS | **15×** |
| 互联 | MLU-Link 1.2 TB/s | MLU-Link 600 GB/s | 2× |
| TDP | 500W | 250W | 2× |
| 价格（推测） | ~$10K | ~$5K | 2× |
| 软件 | NeuWare 2.0 + MindSpore 2.0 | NeuWare 1.0 | 新代 |

## 与 NVIDIA B200 对比

| 指标 | 寒武纪 MLU 690 (推测) | NVIDIA B200 | 差异 |
|------|------------------------|--------------|------|
| 制程 | 5nm | TSMC 4N | 相当 |
| 内存 | 192GB HBM3E | 192GB HBM3E | 同 |
| 带宽 | 5 TB/s | 8 TB/s | B200 +60% |
| FP8 dense | 2 PF | 4.5 PF sparse | B200 2.25× |
| BF16 dense | 1 PF | 2.25 PF sparse | B200 2.25× |
| FP4 | **N/A** | 9 PF sparse | **B200 独有** |
| 互联 | MLU-Link 1.2 TB/s | NVLink 5 1.8 TB/s | B200 1.5× |
| TDP | 500W | 1000W | **MLU 690 -50%** |
| 软件 | NeuWare + MindSpore | CUDA | B200 优势 |
| 价格（推测） | ~$10K | ~$30-40K | **MLU 690 -75%** |

> **MLU 690 优势**：**TDP 仅 500W（B200 50%）** + **价格 25%**，**FP8 与 HBM3E 与 B200 同代**，是 **B200 出口管制下中国最优替代**。

## 寒武纪产品线

| 产品 | 发布 | 制程 | 内存 | FP16 dense | 状态 |
|------|------|------|------|------------|------|
| MLU 100 | 2018 | 16nm | 8GB | 16 TF | EOL |
| MLU 270 | 2019 | 16nm | 16GB | 128 TF | EOL |
| MLU 290 | 2020 | 7nm | 32GB | 256 TF | EOL |
| MLU 370 | 2021 | 7nm | 48GB HBM2 | 96 TF | 量产 |
| MLU 590 | 2023-Q4 | 7nm | 96GB HBM2 | 125 TF | **当前旗舰** |
| **MLU 690** | **2025 H2 - 2026 H1** | **5nm** | **192GB HBM3E** | **1 PF (FP8 2 PF)** | **路线图** |
| MLU 790 (推测) | 2027 | 3nm | 384GB HBM4 | 2.5 PF | 长期 |

## NeuWare 2.0 + MindSpore 2.0 软件栈

| 层级 | 工具 | 说明 |
|------|------|------|
| **AI 框架** | **MindSpore 2.0** | 华为/信通院主导，PyTorch 兼容 |
| | PyTorch (NeuWare 后端) | MLU 设备映射 |
| | TensorFlow (NeuWare 后端) | 兼容 |
| **编译器** | **BANG C/C++** | 寒武纪私有语言 |
| | **NeuWare Graph Compiler** | 图编译优化（MLU 690 新增）|
| **算子库** | **CNML 2.0** | 类 CUDA cuDNN，算子覆盖率 80% (vs MLU 590 70%)|
| **量化** | **NeuQuant 2.0** | INT8/FP8 自动 |
| **模型库** | ModelZoo (1000+ 模型) | CV/NLP/多模态 |
| **集群** | **NeuWare Cluster** | 1024 节点 = 8K 卡 MLU 690 |

> **MLU 690 软件提升**：相比 MLU 590 算子覆盖率从 70% → 80%，**FP8 支持**，**PyTorch 兼容性提升**，**深度学习模型迁移成本降低**。

## 厂商信息

| 项目 | 内容 |
|------|------|
| **公司** | 寒武纪科技（Cambricon Technologies） |
| **创始人** | 陈天石、陈云霁兄弟（中科院计算所） |
| **成立** | 2016-03 |
| **IPO** | 2020-07-20 科创板（688256） |
| **市值（2026 推测）** | ~¥500B（+50% YoY）|
| **2025 营收** | ~¥7.2B（+340% YoY）|
| **2026 营收目标** | ~¥15-20B（MLU 690 贡献 50%）|
| **总部** | 北京市海淀区 |
| **官网** | https://www.cambricon.com |
| **主要客户** | 中国移动、浪潮、曙光、字节跳动、智谱 AI、阿里通义、百度文心 |
| **国家政策** | "东数西算"工程推荐芯片 |

## 寒武纪 vs 华为昇腾 vs 摩尔线程

| 维度 | 寒武纪 MLU 690 (推测) | 华为昇腾 920 | 摩尔线程 MTT S5000 |
|------|------------------------|---------------|---------------------|
| **算力** | 2 PF FP8 | 900 BF16 TF | 50 BF16 TF |
| **内存** | 192GB HBM3E | 96GB HBM2E | 48GB GDDR6 |
| **FP8** | **是** | 否 | 否 |
| **生态** | MindSpore 2.0 | MindSpore + CANN | MUSA |
| **市场** | 通用 + 智算中心 | 数据中心 + 政企云 | 通用 + 图形 |
| **2025 营收** | ¥7.2B | 包含在华为云内 | ¥2.2B |
| **国产化** | HBM 三星 + 国产 CPU/封装 | 国产（部分）| 国产化 60% |

> **MLU 690 优势**：**唯一国产支持 FP8** + **HBM3E 与 B200 同代** + **寒武纪科创板上市公司**（融资能力强）。

## 关键特性

- **FP8 2 PF**：首次国产支持 FP8，追上 NVIDIA Blackwell
- **HBM3E 192GB**：与 B200 容量相同
- **5nm 国产化**：可能采用 SMIC 5nm（国产里程碑）
- **MLU-Link 1.2 TB/s**：对标 NVLink 5
- **NeuWare 2.0**：算子覆盖 80%，PyTorch 兼容更好
- **价格优势**：~25% B200 价格

## 适用场景

- ✅ **国产 AI 训练**（B200 出口管制替代）
- ✅ **LLM 训练**（HBM3E 192GB + FP8）
- ✅ **FP8 模型训练**（MLU 690 独有国产能力）
- ✅ **政府/国企 AI 项目**（科创板上市公司）
- ✅ **智算中心**（"东数西算"枢纽）
- ✅ **互联网公司**（字节、智谱、阿里）
- ❌ **国际市场**（无 CUDA 兼容）
- ❌ **FP4 模型训练**（仅 FP8）
- ❌ **CUDA 专有工作负载**

## 关键风险

- **5nm 国产化进度**：SMIC 5nm 良率未验证，可能依赖台积电
- **HBM3E 供应**：HBM3E 来自 SK Hynix（韩国）/ Samsung，可能被美国制裁
- **软件迁移成本**：PyTorch 模型迁移需手工优化（虽 80% 覆盖率，仍 20% 需定制）
- **NVIDIA 反制**：NVIDIA 推出 H20 改良版（已 H20 → H30 → 持续）

## 相关卡

- [Cambricon 寒武纪 MLU 590](/docs/cards/others/cambricon-mlu) - 上一代
- [Huawei Ascend 920](/docs/cards/huawei/ascend-920) - 国产最强
- [Huawei Ascend 910C](/docs/cards/huawei/ascend-910c) - 国产当前
- [Moore Threads MTT S5000](/docs/cards/others/moore-threads-mtt-s5000) - 国产 GPU
- [Biren BR104](/docs/cards/others/biren-br104) - 国产 AI 创业
- [NVIDIA B200](/docs/cards/nvidia/b200) - 业界对比
- [NVIDIA B300 Ultra](/docs/cards/nvidia/b300-ultra) - 同代
- [AMD MI355X](/docs/cards/amd/mi355x) - 业界对比
- [Qualcomm AI 200/300](/docs/cards/others/qualcomm-ai-200) - 新入者
