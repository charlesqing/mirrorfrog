---
id: moore-threads-mtt-s5000
title: Moore Threads MTT S5000 (Chinese GPU Training)
sidebar_label: Moore Threads
description: "Moore Threads MTT S5000 detailed specs: 7nm, 48GB GDDR6, FP32 25 TFLOPS, BF16 50 TFLOPS, MUSA architecture, Chinese GPU training."
keywords: [Moore Threads, MTT S5000, MUSA, Chinese GPU, Chinese AI chip]
---

# Moore Threads MTT S5000 (Chinese GPU Training)

## Product Overview

**Moore Threads** is a Chinese full-function GPU startup, **founded 2020-10**, Founder is former NVIDIA China executive **Zhang Jianzhong**. **MTT S5000** is a training-inference unified GPU compute card based on **4th-gen MUSA "Pinghu" architecture**, **2025-02-12 public specs**: **single-card AI compute 1000 TFLOPS**, **80GB GDDR6X**, **1.6 TB/s bandwidth**. Paired with proprietary **MUSA** unified system architecture + **MUSIFY** software stack.

**Strategic positioning**: Unlike Huawei Ascend's AI training focus, Moore Threads pursues a **full-function GPU** route (graphics + AI + GPGPU), making it China's **NVIDIA-competing domestic GPU startup**, alongside Innosilicon, VeriSilicon, Enflame, and Biren as the "Chinese GPU Big Five".

## Core Specs

| Item | Parameter |
|------|------|
| **Architecture** | MUSA (4th-gen, Pinghu) |
| **Process** | TSMC 6nm (estimated) |
| **GPU Cores** | **4096 MUSA Cores** (proprietary ISA) |
| **Memory** | **80GB GDDR6X** |
| **Memory Bandwidth** | **1.6 TB/s** |
| **FP32** | **62.5 TFLOPS** (estimated) |
| **BF16 / FP16** | **500 TFLOPS** (estimated) |
| **INT8** | **2,000 TOPS** (estimated) |
| **TDP** | **~300 W** |
| **PCIe** | PCIe 4.0 x16 |
| **Interconnect** | MUSA Link (proprietary, NVLink-like) |
| **Form Factor** | OAM / PCIe |
| **Mass Production** | 2025-Q1 (public specs) |
| **Unit Price (OAM)** | ~$4,000-6,000 |

## MTT S5000 Spec Evolution (2024 -> 2025)

| Metric | MTT S5000 | MTT S4000 | Improvement |
|------|-----------|-----------|------|
| Process | 7nm | 12nm | new gen |
| Core Count | 4096 | 2048 | 2x |
| Memory | 48GB GDDR6 | 24GB GDDR6 | 2x |
| Bandwidth | 700 GB/s | 448 GB/s | 1.56x |
| FP32 | 25 TFLOPS | 12 TFLOPS | 2.08x |
| BF16 | 50 TFLOPS | 24 TFLOPS | 2.08x |
| Interconnect | MUSA Link 800 GB/s | 400 GB/s | 2x |
| TDP | 300W | 250W | +20% |

## MUSA Architecture

### Core Components

| Component | Description |
|------|------|
| **MUSA Core** | proprietary SIMT core (CUDA Core-like) |
| **Tensor Core** | proprietary matrix unit (Tensor Core-like) |
| **SFU** | Special Function Unit (transcendental functions) |
| **RT Core** | hardware ray tracing core |
| **MUSA Link** | 8-card full interconnect, 800 GB/s bidirectional |

### vs NVIDIA CUDA

| Dimension | MUSA | CUDA |
|------|------|------|
| **Core Architecture** | SIMT | SIMT |
| **Instruction Set** | proprietary (PTX-like)| PTX / SASS |
| **Thread Model** | 32 threads / Warp | 32 threads / Warp |
| **Software Maturity** | 3-4 years | 18 years |
| **Ecosystem** | MUSIFY (CUDA-like)| cuDNN / cuBLAS / NCCL |
| **Developer Base** | ~10K developers | 4M+ developers |

## Software Stack MUSIFY

| Layer | Tool | NVIDIA Equivalent |
|------|------|-------------|
| **AI framework** | PyTorch-MUSA | PyTorch + CUDA |
| | TensorFlow-MUSA | TensorFlow |
| | MindSpore | MindSpore compatible |
| **Compiler** | MUSA CC | nvcc |
| **Runtime** | MUSA Runtime | CUDA Runtime |
| **Math Library** | MUSBlas | cuBLAS |
| **Deep Learning** | MUDNN | cuDNN |
| **Communication** | MUSA CC | NCCL |
| **Graphics API** | Vulkan / OpenGL / DirectX | same |

> Warning: **Ecosystem limitation**: MUSIFY ecosystem only 3-4 years old, **operator coverage ~70-80%** (vs CUDA 99%+), complex LLM models require heavy manual optimization or CPU fallback.

## Vendor Information

| Item | Content |
|------|------|
| **Company** | Moore Threads Intelligent Technology (Beijing) Co., Ltd. |
| **Founder** | Zhang Jianzhong (former NVIDIA China GM) |
| **Founded** | 2020-10 |
| **Funding** | **$500M+** (Series A 2021, B 2022, C 2023) |
| **Valuation (2025)** | ~¥35B |
| **2025 Revenue** | ~¥2.2B |
| **Headquarters** | Chaoyang District, Beijing |
| **Website** | https://www.mthreads.com |
| **Status** | **preparing STAR Market IPO** (2026-2027 expected) |
| **Employees** | ~2000 |
| **Key Customers** | China Mobile, Inspur, Lenovo, ByteDance, Zhipu AI |

## Product Line

| Product Line | Positioning | Representative Models |
|--------|------|----------|
| **MTT S Series** | data center AI training | S5000, S4000, S3000 |
| **MTT G Series** | consumer graphics cards | MTT S80, S70, S50 |
| **MTT K Series** | workstation professional cards | K5000, K4000 |
| **MTT E Series** | embedded / edge | E3000 |

## Key Features

- **Full-function GPU**: graphics + AI + GPGPU + ray tracing
- **Domestic content 60%**: HBM/memory from Samsung/SK Hynix, CPU domestic (Zhaoxin), packaging domestic
- **Multi-precision support**: FP32 / FP16 / BF16 / INT8 / INT4
- **Multi-card interconnect**: MUSA Link 8-card, 800 GB/s bidirectional
- **PCIe 4.0**: one generation behind PCIe 5.0
- **Drawbacks**: vs NVIDIA H100 (989 BF16 TFLOPS) compute 1/20, ecosystem gap large

## LLM Training Performance Reference

- LLaMA-2 7B training: MTT S5000 8-card = **H100 1/4 speed** (BF16 optimized)
- Stable Diffusion XL: MTT S5000 1-card = **RTX 4090 50% speed**
- Qwen 1.5 14B fine-tuning: MTT S5000 4-card = **A100 60% speed**
- Inference (70B Q4): MTT S5000 1-card = **RTX 4090 1.2x speed** (bandwidth advantage)

## Use Cases

- ✅ Chinese market LLM training and inference
- ✅ Domestic substitution projects
- ✅ Government, state-owned enterprise AI projects
- ✅ AI compute center construction
- ✅ Edge AI (embedded MTT E series)
- ✅ Graphics rendering (consumer MTT G series)
- ❌ International market
- ❌ Cutting-edge frontier model training (ecosystem + compute limits)
- ❌ FP8 training (BF16 only)

## Chinese GPU Big Five

| Company | Positioning | Representative Product | Funding |
|------|------|----------|------|
| **Moore Threads** | Full-function GPU + AI | MTT S5000 | $500M+ |
| **Biren Technology** | Data center AI | BR104 | $700M+ |
| **Jingjiamicro** | Military + civilian GPU | JM9 | listed |
| **VeriSilicon** | IP + design services | multiple IP | listed |
| **Iluvatar CoreX** | Data center AI | MR 100/200 | $400M+ |

## Related Products

- [Cambricon MLU 590](/docs/cards/others/cambricon-mlu) - Chinese AI training
- [Huawei Ascend 910C](/docs/cards/huawei/ascend-910c) - strongest Chinese AI
- [Huawei Ascend 920](/docs/cards/huawei/ascend-920) - Chinese next-gen
- [Tenstorrent](/docs/cards/others/tenstorrent) - RISC-V AI
- [SambaNova SN40L](/docs/cards/others/sambanova-sn40l) - US RDU
- [NVIDIA A100](/docs/cards/nvidia/a100) - data center classic
- [NVIDIA RTX 4090](/docs/cards/nvidia/rtx-4090) - consumer
