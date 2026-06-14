---
id: moore-threads-mtt-s5000
title: Moore Threads 摩尔线程 MTT S5000 (国产 GPU 训练)
sidebar_label: Moore Threads 摩尔线程
description: 摩尔线程 MTT S5000 详尽规格：7nm、48GB GDDR6、FP32 25 TFLOPS、BF16 50 TFLOPS、MUSA 架构、国产 GPU 训练。
keywords: [Moore Threads, 摩尔线程, MTT S5000, MUSA, 国产 GPU, 国产 AI 芯片]
---

# Moore Threads 摩尔线程 MTT S5000 (国产 GPU 训练)

## 产品概述

**摩尔线程（Moore Threads）** 是中国全功能 GPU 创业公司，**2020-10 成立**，创始人为原 NVIDIA 中国区高管 **张建中**。**MTT S5000** 是基于 **第四代 MUSA "平湖" 架构** 的训推一体 GPU 智算卡，**2025-02-12 公开参数**：**单卡 AI 算力 1000 TFLOPS**，**80GB GDDR6X**，**1.6 TB/s 带宽**。配套自研 **MUSA** 统一系统架构 + **MUSIFY** 软件栈。

**战略定位**：相比华为昇腾专注 AI 训练，摩尔线程走**全功能 GPU** 路线（图形 + AI + 通用计算），是中国**对标 NVIDIA 的国产 GPU 创业公司**，与景嘉微、芯原微电子、燧原科技、壁仞科技并列为"国产 GPU 五虎"。

## 核心规格

| 项目 | 参数 |
|------|------|
| **架构** | MUSA（第四代，平湖） |
| **制程** | TSMC 6nm（推测） |
| **GPU 核心** | **4096 个 MUSA Core**（自研 ISA） |
| **显存** | **80GB GDDR6X** |
| **内存带宽** | **1.6 TB/s** |
| **FP32** | **62.5 TFLOPS**（推测） |
| **BF16 / FP16** | **500 TFLOPS**（推测） |
| **INT8** | **2,000 TOPS**（推测） |
| **TDP** | 300 W |
| **PCIe** | PCIe 4.0 ×16 |
| **互联** | MUSA Link（自研，类 NVLink） |
| **板卡形态** | OAM / PCIe |
| **发布** | 2025-02-12（公开参数）|
| **量产时间** | 2025-Q1（公开参数） |
| **单价（OAM）** | ~$4,000-6,000 |

## MTT S5000 参数演进（2024 → 2025 版）

| 指标 | MTT S5000 | MTT S4000 | 提升 |
|------|-----------|-----------|------|
| 制程 | 7nm | 12nm | 新代 |
| 核心数 | 4096 | 2048 | 2× |
| 显存 | 48GB GDDR6 | 24GB GDDR6 | 2× |
| 带宽 | 700 GB/s | 448 GB/s | 1.56× |
| FP32 | 25 TFLOPS | 12 TFLOPS | 2.08× |
| BF16 | 50 TFLOPS | 24 TFLOPS | 2.08× |
| 互联 | MUSA Link 800 GB/s | 400 GB/s | 2× |
| TDP | 300W | 250W | +20% |

## MUSA 架构

### 核心组件

| 组件 | 说明 |
|------|------|
| **MUSA Core** | 自研 SIMT 核心（类 CUDA Core） |
| **Tensor Core** | 自研矩阵单元（类 Tensor Core） |
| **SFU** | Special Function Unit（超越函数） |
| **RT Core** | 硬件光追核心 |
| **MUSA Link** | 8 卡全互联，800 GB/s 双向 |

### 与 NVIDIA CUDA 差异

| 维度 | MUSA | CUDA |
|------|------|------|
| **核心架构** | SIMT | SIMT |
| **指令集** | 自研（类 PTX）| PTX / SASS |
| **线程模型** | 32 线程 / Warp | 32 线程 / Warp |
| **软件栈成熟度** | 3-4 年 | 18 年 |
| **生态** | MUSIFY（类 CUDA）| cuDNN / cuBLAS / NCCL |
| **开发者基数** | ~10K 开发者 | 4M+ 开发者 |

## 软件栈 MUSIFY

| 层级 | 工具 | 对标 NVIDIA |
|------|------|-------------|
| **AI 框架** | PyTorch-MUSA | PyTorch + CUDA |
| | TensorFlow-MUSA | TensorFlow |
| | MindSpore | MindSpore 兼容 |
| **编译器** | MUSA CC | nvcc |
| **运行时** | MUSA Runtime | CUDA Runtime |
| **数学库** | MUSBlas | cuBLAS |
| **深度学习库** | MUDNN | cuDNN |
| **通信库** | MUSA CC | NCCL |
| **图形 API** | Vulkan / OpenGL / DirectX | 同样 |

> ⚠️ **生态限制**：MUSIFY 生态仅 3-4 年发展，**算子覆盖率约 70-80%**（vs CUDA 99%+），复杂 LLM 模型需要大量手工优化或降级到 CPU 回退。

## 厂商信息

| 项目 | 内容 |
|------|------|
| **公司** | 摩尔线程智能科技（北京）有限责任公司 |
| **创始人** | 张建中（原 NVIDIA 中国区总经理） |
| **成立** | 2020-10 |
| **融资** | **$500M+**（A 轮 2021、B 轮 2022、C 轮 2023） |
| **估值（2025）** | ~¥35B |
| **2025 营收** | ~¥2.2B |
| **总部** | 北京市朝阳区 |
| **官网** | https://www.mthreads.com |
| **状态** | **准备科创板 IPO**（2026-2027 预计） |
| **员工** | ~2000 人 |
| **主要客户** | 中国移动、浪潮、联想、字节跳动、智谱 AI |

## 产品线

| 产品线 | 定位 | 代表型号 |
|--------|------|----------|
| **MTT S 系列** | 数据中心 AI 训练 | S5000, S4000, S3000 |
| **MTT G 系列** | 消费级显卡 | MTT S80, S70, S50 |
| **MTT K 系列** | 工作站专业卡 | K5000, K4000 |
| **MTT E 系列** | 嵌入式 / 边缘 | E3000 |

## 关键特性

- **全功能 GPU**：图形 + AI + 通用计算（GPGPU）+ 光追
- **国产化率 60%**：HBM/显存来自三星/海力士，CPU 国产（兆芯），封装国产
- **多精度支持**：FP32 / FP16 / BF16 / INT8 / INT4
- **多卡互联**：MUSA Link 8 卡，800 GB/s 双向
- **PCIe 4.0**：相比 PCIe 5.0 落后一代
- **缺点**：相比 NVIDIA H100 (989 BF16 TFLOPS) 算力 1/20，生态差距大

## LLM 训练性能参考

- LLaMA-2 7B 训练：MTT S5000 8 卡 ≈ **H100 1/4 速度**（BF16 优化）
- Stable Diffusion XL：MTT S5000 1 卡 ≈ **RTX 4090 50% 速度**
- Qwen 1.5 14B 微调：MTT S5000 4 卡 ≈ **A100 60% 速度**
- 推理（70B Q4）：MTT S5000 1 卡 ≈ **RTX 4090 1.2× 速度**（带宽优势）

## 适用场景

- ✅ 中国市场 LLM 训练与推理
- ✅ 国产化替代项目
- ✅ 政府、国企 AI 项目
- ✅ 智算中心建设
- ✅ 边缘 AI（嵌入式 MTT E 系列）
- ✅ 图形渲染（消费级 MTT G 系列）
- ❌ 国际市场
- ❌ 顶级前沿模型训练（生态 + 算力限制）
- ❌ FP8 训练（仅支持 BF16）

## 国产 GPU 五虎

| 公司 | 定位 | 代表产品 | 融资 |
|------|------|----------|------|
| **摩尔线程** | 全功能 GPU + AI | MTT S5000 | $500M+ |
| **壁仞科技** | 数据中心 AI | BR104 | $700M+ |
| **景嘉微** | 军用 + 民用 GPU | JM9 | 上市 |
| **芯原微电子** | IP + 设计服务 | 多个 IP | 上市 |
| **天数智芯 Iluvatar** | 数据中心 AI | MR 100/200 | $400M+ |

## 相关卡

- [Cambricon 寒武纪 MLU 590](/docs/cards/others/cambricon-mlu) - 国产 AI 训练
- [Huawei Ascend 910C](/docs/cards/huawei/ascend-910c) - 国产最强 AI
- [Huawei Ascend 920](/docs/cards/huawei/ascend-920) - 国产下一代
- [Tenstorrent](/docs/cards/others/tenstorrent) - RISC-V AI
- [SambaNova SN40L](/docs/cards/others/sambanova-sn40l) - 美国 RDU
- [NVIDIA A100](/docs/cards/nvidia/a100) - 数据中心经典
- [NVIDIA RTX 4090](/docs/cards/nvidia/rtx-4090) - 消费级
