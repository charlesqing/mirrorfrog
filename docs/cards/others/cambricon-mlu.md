---
id: cambricon-mlu
title: Cambricon 寒武纪 MLU 590 (国产 AI 训练/推理)
sidebar_label: Cambricon 寒武纪
description: 寒武纪 MLU 590 详尽规格：7nm、256 TOPS INT8、96GB HBM2、MindSpore 框架、科创板上市、AI 国家队主力。
keywords: [Cambricon, 寒武纪, MLU 590, 国产 AI 芯片, MindSpore, 科创板, AI 国家队]
---

# Cambricon 寒武纪 MLU 590 (国产 AI 训练/推理)

## 产品概述

**寒武纪（Cambricon Technologies）** 是中国 AI 芯片领军企业，**2016 年成立**（中科院计算所孵化），**2020-07-20 科创板 IPO**（股票代码 688256）。**MLU 590** 是其最新一代训练+推理双用 AI 加速器，**7nm 工艺**，**256 TOPS INT8** 算力，**96GB HBM2** 内存，**600 GB/s 带宽**。配套 **MindSpore** 全栈 AI 框架（中国信通院主导），主要客户为政府、国企、中国互联网公司。

**战略地位**：在 NVIDIA H100/H200 出口管制背景下，寒武纪是中国**AI 国产替代**的**国家队主力**之一（与华为昇腾、海光 DCU 并列）。

## 核心规格

| 项目 | 参数 |
|------|------|
| **架构** | Cambricon MLU 第五代（MLUv05） |
| **制程** | TSMC 7nm（含部分 SMIC 国产化） |
| **HBM** | **96 GB HBM2** |
| **内存带宽** | **600 GB/s** |
| **INT8 算力** | **256 TOPS** |
| **BF16 算力** | **125 TFLOPS** |
| **FP32 算力** | **62.5 TFLOPS** |
| **TDP** | **~250 W** |
| **PCIe** | PCIe 4.0 ×16 |
| **互联** | MLU-Link（自研，类 NVLink） |
| **板卡形态** | PCIe / OAM 模块 |
| **量产时间** | 2023-Q4 |
| **单价（OAM）** | ~$3,500-5,000 |

## 与前代 MLU 370 对比

| 指标 | MLU 590 | MLU 370 | 提升 |
|------|---------|---------|------|
| 制程 | 7nm | 7nm | 同 |
| HBM | 96GB HBM2 | 48GB HBM2 | 2× |
| 带宽 | 600 GB/s | 307 GB/s | 1.95× |
| INT8 | 256 TOPS | 128 TOPS | 2× |
| BF16 | 125 TFLOPS | 64 TFLOPS | 1.95× |
| 互联带宽 | MLU-Link 600 GB/s | 200 GB/s | 3× |
| TDP | 250W | 150W | +67% |
| 性能/W | 1.0 TOPS/W | 0.85 TOPS/W | +18% |

## 思元 590 训练集群

| 项目 | 配置 |
|------|------|
| **板卡** | 8× 思元 590 OAM |
| **节点** | 2× 思元 590 服务器 |
| **集群** | 1024 节点 = 8192 卡 |
| **总算力** | 1.05 EFLOPS BF16 |
| **HBM 总量** | 786 TB |
| **互联** | MLU-Link 全互联 |

## 软件栈

| 层级 | 框架/工具 | 说明 |
|------|-----------|------|
| **AI 框架** | **MindSpore**（华为/信通院主导）| 与 PyTorch 兼容 |
| | PyTorch（寒武纪后端）| MLU 设备映射 |
| | TensorFlow（寒武纪后端）| 旧生态 |
| **编译器** | BANG C/C++ | 寒武纪私有语言 |
| **算子库** | CNML | 类 CUDA cuDNN |
| **模型库** | ModelZoo | CV/NLP/多模态 |

> ⚠️ **生态限制**：相比 NVIDIA CUDA + 10 年软件积累，寒武纪生态**仅 3-4 年**，PyTorch 模型需要转换，BANG C 学习曲线陡峭，**模型迁移成本较高**。

## 厂商信息

| 项目 | 内容 |
|------|------|
| **公司** | 寒武纪科技（Cambricon Technologies） |
| **创始人** | 陈天石、陈云霁兄弟（中科院计算所） |
| **成立** | 2016-03 |
| **IPO** | 2020-07-20 科创板（688256） |
| **市值（2026-05）** | ~¥320B |
| **2025 营收** | ~¥7.2B（+340% YoY） |
| **总部** | 北京市海淀区 |
| **官网** | https://www.cambricon.com |
| **主要客户** | 中国移动、浪潮、曙光、字节跳动、智谱 AI |
| **国家政策** | "东数西算"工程推荐芯片 |

## 关键特性

- **国产化程度高**：HBM 来自三星/海力士，封装国产（长电科技）
- **思元架构演进**：MLU 100 (2018) → 270 (2019) → 290 (2020) → 370 (2021) → 590 (2023) → 690 (2025 推测)
- **训练+推理统一**：同一硬件支持训练和推理
- **MindSpore 生态绑定**：与华为深度合作（昇腾也用 MindSpore）
- **多模态支持**：CV / NLP / 语音 / 多模态 LLM
- **缺点**：FP8 不支持（NVIDIA Hopper/Blackwell 2-4× 优势），生态相比 CUDA 弱

## DeepSeek / 智谱 性能参考

- DeepSeek V3 训练：思元 590 集群性能约为 **H100 集群 50-60%**
- 智谱 GLM-4 推理：思元 590 单卡 256 GB/s × 4 = 1 TB/s 总带宽，**50 tok/s 推理速度**（FP16 70B）
- Stable Diffusion XL 训练：思元 590 ≈ **A100 80% 速度**（BF16）

## 适用场景

- ✅ 中国市场 LLM 训练与推理
- ✅ 政府、国企 AI 项目（政策强制）
- ✅ 大模型推理部署
- ✅ 国产化替代项目
- ✅ 智算中心建设（"东数西算"枢纽）
- ❌ 国际市场（CUDA 生态绑定）
- ❌ 顶级前沿模型训练（FP8 缺失）

## 寒武纪 vs 华为昇腾

| 维度 | 寒武纪 MLU 590 | 华为昇腾 910C |
|------|----------------|----------------|
| **算力** | 125 BF16 TFLOPS | 780 BF16 TFLOPS |
| **内存** | 96GB HBM2 | 128GB HBM2E |
| **生态** | MindSpore (兼容 PyTorch) | MindSpore + CANN |
| **国家支持** | 科创板上市 | 华为嫡系 |
| **市场定位** | 通用 + 智算中心 | 数据中心 + 政企云 |
| **2025 营收** | ~¥7.2B | 包含在华为云内 |

## 相关卡

- [Huawei Ascend 910C](/docs/cards/huawei/ascend-910c) - 国产最强
- [Huawei Ascend 920](/docs/cards/huawei/ascend-920) - 下一代
- [Huawei Ascend 910B](/docs/cards/huawei/ascend-910b) - 前代
- [NVIDIA H100](/docs/cards/nvidia/h100) - 性能对比
- [Moore Threads MTT S5000](/docs/cards/others/moore-threads-mtt-s5000) - 国产 GPU 创业
- [Tenstorrent](/docs/cards/others/tenstorrent) - RISC-V AI 创业
- [SambaNova SN40L](/docs/cards/others/sambanova-sn40l) - 美国 RDU 创业
