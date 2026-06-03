---
id: arch-tpu
title: TPU (Tensor Processing Unit) 张量处理单元
sidebar_label: TPU
description: TPU 架构详解：Google 自研 Matrix Multiply Unit、2D/3D Torus 互联、专为神经网络矩阵运算设计。
keywords: [TPU, Tensor Processing Unit, Google TPU, MXU, 2D Torus, 3D Torus, JAX, XLA]
---

# TPU (Tensor Processing Unit) 架构

## 什么是 TPU

**TPU（Tensor Processing Unit）** 是 **Google** 自研的**专用 AI 加速器**，2015 年首次部署（用于 AlphaGo），2018 年对外开放 Google Cloud。**专为神经网络矩阵运算**设计，核心是 **MXU（Matrix Multiply Unit）**——128×128 矩阵乘法器。

**最新 TPU v7 Ironwood**（2025）单芯片 192GB HBM，专为 LLM 推理时代设计。

## TPU 历代演进

| 代 | 年份 | 算力（BF16） | 内存 | Pod 规模 | 特点 |
|----|------|--------------|------|----------|------|
| **TPU v1** | 2015 | 23 TOPS INT8 | 8GB | 256 | 推理 |
| **TPU v2** | 2017 | 180 TFLOPS | 16GB HBM | 256 | 训练推理 fungible |
| **TPU v3** | 2018 | 420 TFLOPS | 32GB HBM | 1024 | 液冷 |
| **TPU v4** | 2021 | 275 TFLOPS | 32GB HBM | 4096 | 2D Torus |
| **TPU v5e** | 2023 | 197 TOPS INT8 | 16GB HBM | 256 | 推理优化 |
| **TPU v5p** | 2023 | 459 TFLOPS | 95GB HBM3 | 8960 | 训练旗舰 |
| **TPU v6e (Trillium)** | 2024 | 918 TFLOPS | 32GB HBM | 256 | 训练推理 fungible |
| **TPU v7 (Ironwood)** | 2025 | 4,614 TOPS FP8 | **192GB HBM** | **9,216** | **推理时代旗舰** |

## 核心架构：MXU

### 矩阵乘法单元（MXU）
- **128×128 脉动阵列**（Systolic Array）
- 每周期完成 **16,384 次乘加**（INT8）
- BF16 / INT8 / FP8 支持
- **稀疏加速**：跳过 0 值

### HBM Memory
- 高带宽内存（HBM2 / HBM2e / HBM3）
- TPU v7 达 192GB（单芯片）
- 7,380 GB/s 带宽

### SparseCore
- 第二代（TPU v4+）
- 加速 embedding lookup（推荐系统）
- 用于 Google Search、YouTube

## 互联拓扑

### 2D Torus（TPU v4）
- 单 Pod 4,096 chips = 32×32 网格
- ICI（Inter-Chip Interconnect）800 GB/s
- 数据在 2D 网格上**循环**流动

### 3D Torus（TPU v5p, v7）
- 单 Pod 8,960-9,216 chips
- 3D 立方体拓扑
- 6 个方向互联（vs 2D 4 方向）
- 减少长距离通信延迟

## TPU vs GPU

| 维度 | TPU | GPU (NVIDIA) |
|------|-----|--------------|
| 算力 | **MXU 128×128 脉动阵列** | Tensor Core 矩阵乘法 |
| 内存 | HBM（中等） | HBM（更大） |
| 互联 | **2D/3D Torus**（超大 Pod） | NVLink（较小 Pod） |
| 编程 | **XLA 编译** | CUDA 解释执行 |
| 生态 | **JAX / TensorFlow** | PyTorch / TF / JAX |
| 部署 | **仅 Google Cloud** | 任意部署 |
| 价格 | 按小时租赁 | 一次性 / 云 |
| 适用 | 超大模型训练 / 推理 | 通用 AI |

## 软件栈

### 编程模型
- **XLA**（Accelerated Linear Algebra）编译器
- **JAX**（Google 推荐框架）
- **TensorFlow**（原生支持）
- **PyTorch/XLA**（官方后端）

### 高级 API
- **Pathways**（异构 TPU 调度）
- **MaxText**（LLM 训练参考实现）
- **TPU VM**（v4+ 专用运行时）

## TPU 适用场景

- ✅ **超大模型训练**（PaLM 540B 用 2 个 Pod）
- ✅ LLM 推理（v7 Ironwood 192GB）
- ✅ 推荐系统（DLRM，embedding 加速）
- ✅ Google Cloud 客户
- ❌ 自有数据中心（仅 Google Cloud 访问）
- ❌ 低延迟小模型（GPU 更灵活）

## 详细产品页

### 训练 / 训练推理 fungible
- [Google TPU v4](/docs/cards/google/tpu-v4) - 2021 旗舰, 2D Torus 4096 chip Pod
- [Google TPU v5p](/docs/cards/google/tpu-v5p) - 2023 训练旗舰, 95GB HBM3 3D Torus 8960 chip Pod
- [Google TPU v6p (Pathway)](/docs/cards/google/tpu-v6p) - 2024-12, 96GB HBM2 2.7 PF FP8 9216 chip Pod, Gemini 训练主力
- [Google TPU v6e (Trillium)](/docs/cards/google/tpu-v6e) - 2024 训练推理 fungible, 918 TFLOPS BF16
- [Google TPU v7 (Ironwood)](/docs/cards/google/tpu-ironwood) - 2025 推理旗舰, 192GB HBM 4614 FP8 TFLOPS 9216 chip Pod

### 推理优化 / 拆分架构
- [Google TPU v5e](/docs/cards/google/tpu-v5e) - 2023-Q2 推理 Lite, 16GB HBM2 400 TF FP8 $1.20/小时
- [Google TPU 8t](/docs/cards/google/tpu-8t) - 2026-04 首次拆分训练, 训练专用 ASIC
- [Google TPU 8i](/docs/cards/google/tpu-8i) - 2026-04 首次拆分推理, **288GB HBM 单卡当前最大推理 ASIC**

### 边缘
- [Google Edge TPU (Coral)](/docs/cards/google/edge-tpu) - 2019 边缘 4 TOPS / 2 TOPS/W USB $59.99, TF Lite 6 形态

## 相关架构

- [GPU](/docs/architectures/arch-gpu) - 通用并行
- [LPU](/docs/architectures/arch-lpu) - 超低延迟 LLM
- [ASIC](/docs/architectures/arch-asic) - 推理优化
- [完整对比表](/docs/comparison)
