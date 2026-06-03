---
id: arch-gpu
title: GPU (Graphics Processing Unit) 图形处理器
sidebar_label: GPU
description: GPU 架构 AI 计算卡详解：NVIDIA、AMD、Intel 数据中心与消费级 GPU，CUDA/OpenCL 生态成熟，主流 AI 训练/推理平台。
keywords: [GPU, Graphics Processing Unit, NVIDIA CUDA, AMD ROCm, Intel, 通用并行计算, AI 训练]
---

# GPU (Graphics Processing Unit) 架构

## 什么是 GPU

**GPU（Graphics Processing Unit）** 最初为图形渲染设计，**并行架构**（数千个小型 ALU）天然适合 AI 矩阵运算。2007 年 NVIDIA 发布 **CUDA**，将 GPU 通用化为 **GPGPU**（General-Purpose GPU），开启 AI 加速时代。

**当前 90%+ AI 训练和 70%+ 推理** 在 GPU 上完成，**CUDA 生态** 是最大护城河。

## GPU vs 其他 AI 芯片

| 维度 | GPU | TPU | ASIC | NPU |
|------|-----|-----|------|-----|
| 通用性 | **最强** | 中（Google Cloud 限定） | 弱 | 中 |
| 算力密度 | 高 | **极高** | 高 | 中 |
| 生态 | **CUDA 垄断** | JAX/TF | 厂商自研 | 分散 |
| 编程模型 | CUDA/OpenCL/SYCL | XLA | 厂商 SDK | 厂商 SDK |
| 价格 | 高 | 高（仅云） | 中 | 中 |
| 适用 | 通用 AI / 训练 / 推理 | 数据中心训练 | 推理优化 | 端侧/边缘 |

## 主要厂商

### NVIDIA（占 AI GPU 市场 ~90%）
- **数据中心**：H100 / H200 / B100 / B200 / B300 / A100
- **推理**：L2 / L4 / L40S / T4
- **工作站/消费**：RTX 4090 / RTX 5090 / RTX 5080 / RTX 6000 Ada
- **边缘**：Jetson Orin / Jetson Thor

### AMD（占 AI GPU 市场 ~5%）
- **数据中心训练**：MI250 / MI300X / MI300A / MI325X / MI350
- **生态**：ROCm（CUDA 替代，性能落后）

### Intel（占 AI GPU 市场 ~3%）
- **数据中心**：Intel Max Series (Ponte Vecchio) / Flex Series
- **消费级**：Arc 系列
- **集成 GPU**：Meteor Lake / Lunar Lake NPU

## 主流 GPU 规格对比

| GPU | 架构 | 显存 | FP16 Tensor | TDP | 用途 |
|-----|------|------|-------------|-----|------|
| **NVIDIA B300 Ultra** | Blackwell Ultra | 288GB HBM3e | 15 PFLOPS | 1,400W | 顶级训练 |
| **NVIDIA B200** | Blackwell | 192GB HBM3e | 2.25 PFLOPS | 1,000W | 数据中心 |
| **NVIDIA H200** | Hopper | 141GB HBM3e | 1.98 PFLOPS | 700W | 训练/推理 |
| **NVIDIA H100** | Hopper | 80GB HBM3 | 1.98 PFLOPS | 700W | 训练/推理 |
| **NVIDIA RTX 5090** | Blackwell | 32GB GDDR7 | 419 TFLOPS | 575W | 消费级旗舰 |
| **AMD MI355X** | CDNA 4 | 288GB HBM3E | 10 PFLOPS | 1,400W | 训练 |
| **AMD MI300X** | CDNA 3 | 192GB HBM3 | 1.5 PFLOPS | 750W | 训练 |

## 编程模型

### CUDA（NVIDIA）
- **CUDA C/C++** — 底层 API
- **cuDNN** — 神经网络原语
- **cuBLAS** — 矩阵运算
- **Triton** — Python 高级编译器
- **生态**：PyTorch / TensorFlow / JAX / vLLM

### ROCm（AMD）
- **HIP** — CUDA 兼容 API
- **MIOpen** — 深度学习库
- **性能**：约 NVIDIA 70-90%（取决于工作负载）

### SYCL / oneAPI（Intel）
- **DPC++** — C++ + SYCL
- **oneMKL** — 数学库
- **生态较小**，但开源

## GPU 适用场景

- ✅ **通用 AI 训练 / 推理**（CUDA 生态成熟）
- ✅ LLM 训练（GPT-3 / LLaMA / Mixtral）
- ✅ Stable Diffusion 训练
- ✅ 科学计算（HPC）
- ✅ 数据中心多任务负载
- ❌ 极致能效（应使用 ASIC）
- ❌ 端侧（应使用 NPU）

## 选型建议

| 工作负载 | 推荐 GPU |
|----------|---------|
| 训练 GPT-4 类超大模型 | B200 / B300 / H200 |
| 训练 70B LLM | H100 8-way / MI300X 8-way |
| 训练 13B LLM | H100 / A100 |
| 推理 70B+ LLM | H100 NVL / H200 |
| 推理 13B LLM | L40S / L4 |
| Stable Diffusion XL | RTX 4090 / RTX 5090 |
| 边缘 AI 推理 | Jetson Orin / Thor |
| HPC + AI 联合 | MI300A / H100 |

## 详细产品页

### NVIDIA 数据中心（H 系列 / A 系列）
- [NVIDIA H100](/docs/cards/nvidia/h100) - 训练推理 fungible
- [NVIDIA H200](/docs/cards/nvidia/h200) - 141GB HBM3e
- [NVIDIA A100](/docs/cards/nvidia/a100) - 上一代主力 40/80GB HBM2e
- [NVIDIA H100 NVL](/docs/cards/nvidia/h100-nvl) - 94GB 双 die 94GB PCIe

### NVIDIA Blackwell（B 系列）
- [NVIDIA B100](/docs/cards/nvidia/b100) - Blackwell 入门 700W
- [NVIDIA B200](/docs/cards/nvidia/b200) - Blackwell 主力 1000W 208GB HBM3e
- [NVIDIA B300 Ultra](/docs/cards/nvidia/b300-ultra) - Blackwell 顶级 1400W (B300 系列旗舰)
- [NVIDIA GB200 NVL72](/docs/cards/nvidia/gb200) - Grace Blackwell 200, 72×B200 + 36×Grace, 1.1 EFLOPS BF16 NVL72 1×72
- [NVIDIA GB300 NVL72](/docs/cards/nvidia/gb300) - Grace Blackwell 300, 1.08 EFLOPS BF16 ConnectX-9 1.6T, NVL72 1×72

### NVIDIA Vera Rubin 平台（2026 H2）
- [NVIDIA Vera Rubin R200](/docs/cards/nvidia/rubin-r200) - 6 芯片 CoWoS-L 封装, 288GB HBM4 22 TB/s, 50 PFLOPS FP4 sparse, ConnectX-9 28.8 TB/s
- **Rubin NVL72** (1 机柜): 72×R200 + 36×Vera, 1.4 EFLOPS FP4 sparse
- **Rubin NVL576** (8 机柜): 576×R200 + 288×Vera, 28.8 EFLOPS FP4 sparse, **1.1 MW 单机房**

### NVIDIA 推理 / 边缘
- [NVIDIA L4](/docs/cards/nvidia/l4) - 推理次旗舰 24GB GDDR6 121 TOPS INT8
- [NVIDIA L40S](/docs/cards/nvidia/l40s) - 推理旗舰 48GB GDDR6 362 TOPS INT8 Ada Lovelace
- [NVIDIA L2](/docs/cards/nvidia/l2) - 入门推理 24GB GDDR6 193 TOPS INT8 Ada
- [NVIDIA T4](/docs/cards/nvidia/t4) - 入门 Turing 16GB GDDR6 130 TOPS INT8
- [NVIDIA Jetson Orin](/docs/cards/nvidia/jetson-orin) - 边缘 AI 8-32GB 40-275 TOPS
- [NVIDIA DRIVE Thor](/docs/cards/nvidia/drive-thor) - 车规 Blackwell 1000 INT8 TOPS / 2000 FP4 TFLOPS, ZEEKR 2025 H2 首发 ISO 26262 ASIL-D
- [NVIDIA RTX 5090](/docs/cards/nvidia/rtx-5090) - 消费旗舰 32GB GDDR7 1676 AI TOPS GB202
- [NVIDIA RTX 5080](/docs/cards/nvidia/rtx-5080) - 消费次旗舰 16GB GDDR7 1801 AI TOPS GB203
- [NVIDIA RTX 4090](/docs/cards/nvidia/rtx-4090) - 上一代消费旗舰 24GB GDDR6X 1321 AI TOPS
- [NVIDIA RTX 6000 Ada](/docs/cards/nvidia/rtx-6000-ada) - 工作站 48GB GDDR6 1457 TOPS

### AMD
- [AMD MI210](/docs/cards/amd/mi210) - CDNA 2 64GB HBM2e 22.6 TF FP64 PCIe, 欧洲 LUMI 超算首选
- [AMD MI250](/docs/cards/amd/mi250) - CDNA 2 128GB HBM2e
- [AMD MI300X](/docs/cards/amd/mi300x) - CDNA 3 192GB HBM3 5.3 TB/s
- [AMD MI300A](/docs/cards/amd/mi300a) - CDNA 3 + Zen 4 APU 128GB HBM3
- [AMD MI325X](/docs/cards/amd/mi325x) - 256GB HBM3e 6 TB/s 1.3 PF FP8
- [AMD MI355X](/docs/cards/amd/mi355x) - 288GB HBM3E 8 TB/s 4.6 PF FP8 UALoF 600 GB/s
- [AMD MI350](/docs/cards/amd/mi350) - CDNA 4 288GB HBM3E
- [AMD MI400](/docs/cards/amd/mi400) - CDNA Next 432GB HBM4 40 PF FP4 dense, Helios 72-GPU rack

### Intel
- [Intel Max Series (Ponte Vecchio)](/docs/cards/intel/max-series) - HBM2e 128GB 数据中心 GPU
- [Intel Flex Series (Arctic Sound)](/docs/cards/intel/flex-series) - 推理 GPU 150W 12 TFLOPS FP32
- [Intel Gaudi 2](/docs/cards/intel/gaudi-2) - 数据中心 96GB HBM2e
- [Intel Gaudi 3](/docs/cards/intel/gaudi-3) - 128GB HBM2e 1835 BF16 TFLOPS
- [Intel Gaudi 4](/docs/cards/intel/gaudi-4) - 2026-Q2 推测 3nm 192GB HBM3E 3.7 PF FP8 18A
- [Intel Jaguar Shores](/docs/cards/intel/jaguar-shores) - 替代取消的 Falcon Shores, 机柜级 2027-2028
- [Intel Core Ultra 2 (Lunar Lake)](/docs/cards/intel/core-ultra-2) - Foveros 3D NPU 4.0 48 TOPS

## 相关架构

- [TPU](/docs/architectures/arch-tpu) - Google 数据中心专用
- [NPU](/docs/architectures/arch-npu) - 端侧/边缘 NPU
- [ASIC](/docs/architectures/arch-asic) - 推理优化
- [APU](/docs/architectures/arch-apu) - CPU+GPU 集成
- [完整对比表](/docs/comparison)
