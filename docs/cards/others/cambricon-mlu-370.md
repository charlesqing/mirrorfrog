---
id: cambricon-mlu-370
title: Cambricon 寒武纪 MLU 370 (2021)
sidebar_label: MLU 370
description: 寒武纪 MLU 370 详尽规格：7nm、96 INT8 TOPS、48GB HBM2、35W、2021 训练 + 推理、MLU 590 前代。
keywords: [Cambricon MLU 370, 寒武纪 思元 370, 7nm, 48GB HBM2, 96 TOPS, 35W, 国产 AI, 2021]
---

# Cambricon 寒武纪 MLU 370 (2021)

## 产品概述

**Cambricon 寒武纪 MLU 370（思元 370）** 是寒武纪**第四代 AI 训练/推理芯片**，**2021-Q4 发布**，**7nm 制程**，**96 INT8 TOPS** 算力，**48GB HBM2** 内存，**614 GB/s 带宽**，**TDP 35W**（**业界最节能的 7nm 数据中心 AI 芯片之一**）。配套 **NeuWare 1.0** 软件栈 + **MindSpore**。是 **MLU 590 的前代**，在 **MLU 590 (2023)** 之前是寒武纪主力产品。

**关键定位**：
- **MLU 100**（2018）：16nm，8GB，16 TFLOPS — 第一代
- **MLU 270**（2019）：16nm，16GB，128 TFLOPS — 早期训练
- **MLU 290**（2020）：7nm，32GB，256 TFLOPS — 第一代 7nm
- **MLU 370**（2021）：**7nm，48GB HBM2，96 INT8 TOPS，35W** — **本页**
- **MLU 590**（2023）：7nm，96GB HBM2，256 INT8 TOPS，250W — 已有页
- **MLU 690**（2025-2026 推测）：5nm，192GB HBM3E，2 PF FP8 — 已有页

## 核心规格

| 项目 | 参数 |
|------|------|
| **架构** | Cambricon MLUv04（第四代） |
| **制程** | TSMC 7nm |
| **计算核心** | **64× 思元 4 核**（自研 ISA） |
| **HBM** | **48GB HBM2** |
| **内存带宽** | **614 GB/s** |
| **INT8** | **96 TOPS** |
| **BF16** | **48 TFLOPS** |
| **FP32** | 24 TFLOPS |
| **TDP** | **35W**（**业界最节能 7nm 数据中心 AI**） |
| **板卡形态** | PCIe Gen4 ×16 |
| **互联** | MLU-Link 200 GB/s |
| **量产** | 2021-Q4 |
| **单价** | ~$1,500-2,500 |

## 与 MLU 290 对比（2020）

| 指标 | MLU 370 (2021) | MLU 290 (2020) | 提升 |
|------|------------------|------------------|------|
| 制程 | 7nm | 7nm | 同 |
| HBM | **48GB HBM2** | 32GB HBM2 | +50% |
| 带宽 | **614 GB/s** | 307 GB/s | 2× |
| INT8 | **96 TOPS** | 64 TOPS | +50% |
| BF16 | **48 TFLOPS** | 32 TFLOPS | +50% |
| TDP | **35W** | 50W | -30% |
| 互联 | **200 GB/s** | 100 GB/s | 2× |
| 软件 | NeuWare 1.0 | NeuWare 0.5 | 新代 |

## 与同期 NVIDIA T4 对比（2021）

| 指标 | Cambricon MLU 370 | NVIDIA T4 | 差异 |
|------|---------------------|------------|------|
| **制程** | 7nm | 12nm | MLU 370 新代 |
| **INT8** | 96 TOPS | 130 TOPS | T4 +35% |
| **BF16** | **48 TFLOPS** | N/A | MLU 370 独有 |
| **TDP** | **35W** | 70W | **MLU 370 -50%** |
| **能效** | **2.74 TOPS/W** | 1.86 TOPS/W | **MLU 370 +47%** |
| **内存** | 48GB HBM2 | 16GB GDDR6 | **MLU 370 3×** |
| **带宽** | 614 GB/s | 320 GB/s | **MLU 370 1.9×** |
| **软件** | NeuWare + MindSpore | CUDA | T4 成熟 |

> **MLU 370 杀手锏**：**TDP 仅 35W（T4 50%）** + **48GB HBM2（T4 3×）** + **BF16 支持**（T4 无 BF16），**国产 + 节能 + 大内存**。

## 适用场景

- ✅ **国产 AI 推理**（节能 + 国产化）
- ✅ **国产 AI 训练**（48GB HBM2 容纳较大模型）
- ✅ **政府/国企 AI 项目**（国产化政策强制）
- ✅ **智算中心**（35W 节能，单机柜密度高）
- ✅ **LLaMA 1 13B FP16 推理**（48GB HBM2 足够）
- ❌ **AI 训练前沿**（FP8 缺失）
- ❌ **国际市场**（无 CUDA 兼容）
- ❌ **超大 LLM**（48GB 限制）

## LLM 推理性能（48GB 版本）

| 模型 | 量化 | 性能（tok/s） | 备注 |
|------|------|---------------|------|
| LLaMA 1 7B | FP16 | ~25 tok/s | 主流 |
| LLaMA 1 13B | FP16 | ~12 tok/s | 完整 FP16 |
| LLaMA 1 30B | Q4_K_M | ~5 tok/s | 量化 |
| LLaMA 1 65B | Q4_K_M | ~3 tok/s | 70GB 略超 |
| ChatGLM-6B | FP16 | ~30 tok/s | 中文 |
| Stable Diffusion 1.5 | FP16 | 2× vs MLU 290 | 图像生成 |

> **48GB HBM2 优势**：相比同期 NVIDIA T4 16GB，**可装 13B LLM 完整 FP16**（26GB 略小），是 **2021-2022 国产 LLM 推理主力**。

## 软件栈 NeuWare 1.0

| 层级 | 工具 | 说明 |
|------|------|------|
| **AI 框架** | **NeuWare 1.0** | 统一编程平台 |
| | PyTorch (NeuWare 后端) | 自动映射 MLU |
| | TensorFlow (NeuWare 后端) | 兼容 |
| | **MindSpore** | 华为/信通院主导，PyTorch 兼容 |
| **编译器** | **BANG C/C++** | 寒武纪私有语言 |
| **算子库** | CNML | 类 CUDA cuDNN（覆盖 70%） |
| **量化** | NeuQuant | INT8 自动 |
| **模型库** | ModelZoo | CV/NLP/LLM |

> **MLU 370 软件成熟度**：算子覆盖 ~70%（vs CUDA 99%+），**主流 LLM 可运行但需手工优化**。

## 厂商信息

| 项目 | 内容 |
|------|------|
| **公司** | 寒武纪科技（Cambricon Technologies） |
| **创始人** | 陈天石、陈云霁兄弟（中科院计算所） |
| **成立** | 2016-03 |
| **IPO** | 2020-07-20 科创板（688256） |
| **MLU 370 上市** | 2021-Q4 |
| **主要客户** | 中国移动、浪潮、曙光、字节跳动、智谱 AI |
| **国家项目** | "东数西算"工程推荐芯片 |

## 关键时间线

| 时间 | 事件 |
|------|------|
| 2016-03 | 寒武纪成立（中科院计算所孵化） |
| 2018-05 | 首款芯片 MLU 100 发布（16nm） |
| 2020-07-20 | **科创板 IPO 上市**（688256）|
| 2020 | MLU 290（7nm 第一代）|
| **2021-Q4** | **MLU 370 发布**（本页）|
| 2022 | MLU 370 量产 + 客户部署 |
| 2023-Q4 | MLU 590 发布（替代 370）|
| 2025-2026 推测 | MLU 690 发布（替代 590）|

## 寒武纪产品线

| 产品 | 发布 | 制程 | 内存 | INT8 | TDP | 状态 |
|------|------|------|------|------|-----|------|
| **MLU 370** | **2021-Q4** | **7nm** | **48GB HBM2** | **96 TOPS** | **35W** | **量产 → EOL 2023** |
| MLU 590 | 2023-Q4 | 7nm | 96GB HBM2 | 256 TOPS | 250W | 当前旗舰 |
| MLU 690 | 2025-2026 推测 | 5nm | 192GB HBM3E | 4 POPS | 500W | 路线图 |
| MLU 790 (推测) | 2027 | 3nm | 384GB HBM4 | 8 POPS | 800W | 长期 |

## 关键特性

- **48GB HBM2**：2021 国产 AI 大内存（vs 同期 NVIDIA T4 16GB）
- **TDP 35W**：业界最节能 7nm 数据中心 AI
- **能效 2.74 TOPS/W**：NVIDIA T4 1.5×
- **BF16 支持**：T4 没有 BF16，MLU 370 独有
- **MindSpore 生态**：华为深度合作
- **缺点**：算力低于 T4、生态 ~70% 覆盖、已 EOL

## 与同期国产 AI 芯片对比（2021-2022）

| 指标 | 寒武纪 MLU 370 | Huawei Ascend 310 | Alibaba 含光 800 (2021) |
|------|--------------------|---------------------|--------------------------|
| **制程** | 7nm | 12nm | 12nm |
| **INT8** | 96 TOPS | 22 TOPS | **820 TOPS** |
| **TDP** | **35W** | 8W | 168W |
| **内存** | **48GB HBM2** | 8GB LPDDR4 | 32GB HBM2 |
| **带宽** | 614 GB/s | 25 GB/s | 700 GB/s |
| **目标** | 训练 + 推理 | 边缘 | 数据中心推理 |

> **2021-2022 国产 AI 三强**：**含光 800 算力最强（820 TOPS）**、**MLU 370 内存最大（48GB）**、**Ascend 310 能效最优（8W）**。

## 相关卡

- [Cambricon 寒武纪 MLU 590](/docs/cards/others/cambricon-mlu) - 下一代
- [Cambricon 寒武纪 MLU 690](/docs/cards/others/cambricon-mlu-690) - 推测下一代
- [Huawei Ascend 910B](/docs/cards/huawei/ascend-910b) - 同期华为
- [Huawei Ascend 310] (无独立页) - 同期华为边缘
- [Alibaba 含光 800](/docs/cards/others/alibaba-hanguang-800) - 同期阿里
- [Biren BR104](/docs/cards/others/biren-br104) - 国产 AI
- [Moore Threads MTT S5000](/docs/cards/others/moore-threads-mtt-s5000) - 国产 GPU
- [NVIDIA T4](/docs/cards/nvidia/t4) - MLU 370 对标
- [NVIDIA L4](/docs/cards/nvidia/l4) - 推理对比
