---
id: cambricon-mlu
title: Cambricon 寒武纪 思元 590 (国产 AI 训练/推理)
sidebar_label: 寒武纪 思元590
description: 寒武纪 思元 590 详尽规格：7nm Chiplet、512 TOPS INT8、96GB HBM2、MLUarch05 架构、MLU-Link 互联，科创板上市，AI 国家队主力。
keywords: [Cambricon, 寒武纪, 思元590, MLU 590, Chiplet, 512 TOPS, 国产 AI 芯片, MindSpore, 科创板, AI 国家队]
---

# Cambricon 寒武纪 思元 590 (国产 AI 训练/推理)

## 产品概述

**寒武纪（Cambricon Technologies）** 是中国 AI 芯片领军企业，**2016 年成立**（中科院计算所孵化），**2020-07-20 科创板 IPO**（股票代码 688256）。**思元 590** 是其第五代训练+推理双用 AI 加速器，采用 **7nm Chiplet 封装** 和全新 **MLUarch05 架构**。INT8 算力达 **512 TOPS**，配备 **96GB HBM2** 内存。配套 **PyTorch + BANG C** 软件栈，主要客户为政府、国企和中国互联网公司（字节跳动、快手等）。

**战略地位**：在 NVIDIA H100/H200 出口管制背景下，寒武纪是中国 **AI 国产替代** 的 **国家队主力** 之一（与华为昇腾、海光 DCU 并列）。2026 Q1 市值达 7,168 亿元，居 A 股 AI 芯片板块首位。DeepSeek V4-Flash 推理实测 2,200 tok/s（H200 的 52%）。

## 核心规格

| 项目 | 参数 |
| **发布** | 2021（推测） |
|------|------|
| **架构** | Cambricon MLUarch05（第五代） |
| **制程** | TSMC 7nm + Chiplet 封装 |
| **HBM** | **96 GB HBM2** |
| **内存带宽** | **600 GB/s** |
| **INT8 算力** | **512 TOPS** |
| **BF16 算力** | **256 TFLOPS** |
| **FP16 算力** | **256 TFLOPS** |
| **FP32 算力** | **128 TFLOPS** |
| **TDP** | 350 W |
| **PCIe** | PCIe 4.0 ×16 |
| **互联** | MLU-Link（自研，类 NVLink） |
| **板卡形态** | PCIe / OAM 模块 |
| **量产时间** | 2024 |
| **单价（OAM）** | ~¥25,000–35,000 |

## 与前代 MLU 370 对比

| 指标 | 思元 590 | 思元 370 | 提升 |
|------|---------|---------|------|
| 制程 | 7nm + Chiplet | 7nm | 封装升级 |
| 架构 | MLUarch05 | MLUarch03 | 两代 |
| HBM | 96GB HBM2 | 48GB HBM2 | 2× |
| 带宽 | 600 GB/s | 307 GB/s | 1.95× |
| INT8 | 512 TOPS | 128 TOPS | 4× |
| BF16 | 256 TFLOPS | 64 TFLOPS | 4× |
| 互联带宽 | MLU-Link 600 GB/s | 200 GB/s | 3× |
| TDP | 350W | 150W | +133% |
| 性能/W | 1.46 TOPS/W | 0.85 TOPS/W | +72% |

## 思元 590 训练集群

| 项目 | 配置 |
|------|------|
| **板卡** | 8× 思元 590 OAM |
| **节点** | 2× 思元 590 服务器 |
| **集群** | 1024 节点 = 8192 卡 |
| **总算力** | 2.1 EFLOPS BF16 |
| **HBM 总量** | 786 TB |
| **互联** | MLU-Link 全互联 |

## 软件栈

| 层级 | 框架/工具 | 说明 |
|------|-----------|------|
| **AI 框架** | **PyTorch**（BANG C 后端） | 主力框架，Day0 适配 DeepSeek V4 |
| | MindSpore（华为/信通院主导） | 兼容 |
| | TensorFlow（寒武纪后端） | 旧生态 |
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

- DeepSeek V4-Flash 推理：思元 590 实测 **2,200 tok/s**（H200 基准 4,200 tok/s，约 52%）
- DeepSeek V3 训练：思元 590 集群 MFU 约 **75%**（华为昇腾 85%，H100 约 90%+）
- 智谱 GLM-4 推理：思元 590 生产可用性 ⚠️ 小规模（仍需优化）
- Stable Diffusion XL 训练：思元 590 ≈ **A100 80–90% 速度**（BF16）
- 2026 Q1 国产 AI 加速卡出货 **165 万张**（占中国市场 41%），寒武纪位居前列

## 适用场景

- ✅ 中国市场 LLM 训练与推理
- ✅ 政府、国企 AI 项目（政策强制）
- ✅ 大模型推理部署
- ✅ 国产化替代项目
- ✅ 智算中心建设（"东数西算"枢纽）
- ❌ 国际市场（CUDA 生态绑定）
- ❌ 顶级前沿模型训练（FP8 缺失）

## 寒武纪 vs 华为昇腾

| 维度 | 寒武纪 思元 590 | 华为昇腾 910C |
|------|----------------|----------------|
| **算力 (BF16)** | 256 TFLOPS | 780 TFLOPS |
| **算力 (INT8)** | 512 TOPS | 1,560 TOPS |
| **内存** | 96GB HBM2 | 128GB HBM2E |
| **生态** | PyTorch/BANG C (兼容 CUDA) | MindSpore + CANN |
| **国家支持** | 科创板上市 | 华为嫡系 |
| **市场定位** | 通用 + 智算中心 | 数据中心 + 政企云 |
| **市值 (2026 Q1)** | ~7,168 亿 | 包含在华为云内 |
| **DeepSeek V4 推理** | 2,200 tok/s | 2,850 tok/s |

## 相关卡

- [Huawei Ascend 910C](/docs/cards/huawei/ascend-910c) - 国产最强
- [Huawei Ascend 920](/docs/cards/huawei/ascend-920) - 下一代
- [Huawei Ascend 910B](/docs/cards/huawei/ascend-910b) - 前代
- [NVIDIA H100](/docs/cards/nvidia/h100) - 性能对比
- [Moore Threads MTT S5000](/docs/cards/others/moore-threads-mtt-s5000) - 国产 GPU 创业
- [Tenstorrent](/docs/cards/others/tenstorrent) - RISC-V AI 创业
- [SambaNova SN40L](/docs/cards/others/sambanova-sn40l) - 美国 RDU 创业
