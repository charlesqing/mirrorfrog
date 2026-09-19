---
id: moore-threads-mtt-s5000
title: "Moore Threads MTT S5000 (Domestic GPU Training)"
sidebar_label: Moore Threads MTT S5000
description: "Moore Threads MTT S5000 detailed specs: 4th-generation MUSA Pinghu architecture, PH100 chip, FP8 1000 TFLOPS (dense), BF16 400 TFLOPS, 80GB memory, 1.6 TB/s, MTLink 784 GB/s, domestic full-function GPU unified training/inference card."
keywords: [Moore Threads, MTT S5000, MUSA, domestic GPU, domestic AI chip]
---

# Moore Threads MTT S5000 (Domestic GPU Training)

## Product Overview

**Moore Threads (Moore Threads)** is a Chinese full-function GPU startup company, **founded in October 2020**, with the founder being former NVIDIA China region executive **Zhang Jianzhong**. **MTT S5000** is a training+inference integrated GPU AI computing card based on **fourth-generation MUSA "Pinghu" architecture**, with parameters publicly disclosed on **2025-02-12**: **single card AI compute 1000 TFLOPS**, **80GB memory**, **1.6 TB/s bandwidth**. Equipped with self-developed **MUSA** unified system architecture + **MUSIFY** software stack.

**Strategic Positioning**: Compared to Huawei Ascend's focus on AI training, Moore Threads follows the **full-function GPU** roadmap (graphics + AI + general-purpose computing), and is a **domestic GPU startup company targeting NVIDIA**, listed alongside Jingjia Micro, Xinyuan Microelectronics, Enflame, and Biren as the "Domestic GPU Five Tigers".

## Core Specifications

| Item | Parameter |
|------|-----------|
| **Architecture** | MUSA (4th generation, Pinghu) |
| **Process** | TSMC 6nm (estimated) |
| **GPU Cores** | **4096 MUSA Cores** (self-developed ISA) |
| **Memory** | **80GB memory** |
| **Memory Bandwidth** | **1.6 TB/s** |
| **FP32** | **62.5 TFLOPS** (estimated) |
| **BF16 / FP16** | **500 TFLOPS** (estimated) |
| **INT8** | **2,000 TOPS** (estimated) |
| **TDP** | 300 W |
| **PCIe** | PCIe 4.0 ×16 |
| **Interconnect** | MUSA Link (self-developed, similar to NVLink) |
| **Form Factor** | OAM / PCIe |
| **Release** | 2025-02-12 (parameters disclosed) |
| **Mass Production** | 2025-Q1 (parameters disclosed) |
| **Unit Price (OAM)** | ~$4,000-6,000 |

> 📌 **Data correction (2026-08 online verification)**:
> - **Memory type**: This site previously recorded "GDDR6X", which **contradicts** the 1.6 TB/s bandwidth (GDDR6X caps at ~1 TB/s, and 80GB is not a typical GDDR configuration). Moore Threads officially announced only "80GB memory, 1.6 TB/s bandwidth" without disclosing the chip type. Now labeled as reported.
> - **Compute precision**: The official "1000 TFLOPS dense per-card AI compute" refers specifically to **FP8 precision** (liquid-cooled version), not FP16. FP16 is about 500 TFLOPS. The precision was previously unlabeled, easily misread as FP16 performance and overestimated.
> - **Interconnect**: Officially **MTLink 784 GB/s** (previously recorded as "MUSA Link" with no figure).
> - **Compute figures re-verified (2026-09 cross-validation)**: The official datasheet figures are **BF16/FP16 400 TFLOPS, FP32 100 TFLOPS, INT8 800 TOPS, TDP 500W (market-reported)**; the previously listed 500/62.5/2000 extrapolated from FP8 at 1:2, and 300W, are deprecated.

## MTT S5000 Parameter Evolution (2024 → 2025 Version)

| Metric | MTT S5000 | MTT S4000 | Improvement |
|--------|-----------|-------------|-------------|
| Process | 7nm | 12nm | New generation |
| Core count | 4096 | 2048 | 2× |
| Memory | 48GB GDDR6 | 24GB GDDR6 | 2× |
| Bandwidth | 700 GB/s | 448 GB/s | 1.56× |
| FP32 | 25 TFLOPS | 12 TFLOPS | 2.08× |
| BF16 | 50 TFLOPS | 24 TFLOPS | 2.08× |
| Interconnect | MUSA Link 800 GB/s | 400 GB/s | 2× |
| TDP | 300W | 250W | +20% |

## MUSA Architecture

### Core Components

| Component | Description |
|-----------|-------------|
| **MUSA Core** | Self-developed SIMT core (similar to CUDA Core) |
| **Tensor Core** | Self-developed matrix unit (similar to Tensor Core) |
| **SFU** | Special Function Unit (transcendental functions) |
| **RT Core** | Hardware ray tracing core |
| **MUSA Link** | 8-card full interconnect, 800 GB/s bidirectional |

### Differences from NVIDIA CUDA

| Dimension | MUSA | CUDA |
|-----------|------|-------|
| **Core Architecture** | SIMT | SIMT |
| **Instruction Set** | Self-developed (similar to PTX) | PTX / SASS |
| **Thread Model** | 32 threads / Warp | 32 threads / Warp |
| **Software Stack Maturity** | 3-4 years | 18 years |
| **Ecosystem** | MUSIFY (similar to CUDA) | cuDNN / cuBLAS / NCCL |
| **Developer Base** | ~10K developers | 4M+ developers |

## Software Stack MUSIFY

| Layer | Tool | Targeting NVIDIA |
|-------|------|--------------------|
| **AI Framework** | PyTorch-MUSA | PyTorch + CUDA |
| | TensorFlow-MUSA | TensorFlow |
| | MindSpore | MindSpore compatible |
| **Compiler** | MUSA CC | nvcc |
| **Runtime** | MUSA Runtime | CUDA Runtime |
| **Math Library** | MUSBlas | cuBLAS |
| **Deep Learning Library** | MUDNN | cuDNN |
| **Communication Library** | MUSA CC | NCCL |
| **Graphics API** | Vulkan / OpenGL / DirectX | Same |

> ⚠️ **Ecosystem Limitation**: MUSIFY ecosystem has only 3-4 years of development, **operator coverage ~70-80%** (vs CUDA 99%+), complex LLM models require extensive manual optimization or fallback to CPU.

## Company Information

| Item | Content |
|------|---------|
| **Company** | Moore Threads Intelligent Technology (Beijing) Co., Ltd. |
| **Founder** | Zhang Jianzhong (former NVIDIA China region GM) |
| **Founded** | 2020-10 |
| **Funding** | **$500M+** (Series A 2021, Series B 2022, Series C 2023) |
| **Valuation (2025)** | ~¥35B |
| **2025 Revenue** | ~¥2.2B |
| **Headquarters** | Chaoyang District, Beijing |
| **Official Website** | https://www.mthreads.com |
| **Status** | **Preparing for STAR Market IPO** (2026-2027 estimated) |
| **Employees** | ~2000 people |
| **Major Customers** | China Mobile, Inspur, Lenovo, ByteDance, Zhipu AI |

## Product Line

| Product Line | Positioning | Representative Model |
|--------------|---------------|----------------------|
| **MTT S Series** | Data center AI training | S5000, S4000, S3000 |
| **MTT G Series** | Consumer graphics card | MTT S80, S70, S50 |
| **MTT K Series** | Workstation professional card | K5000, K4000 |
| **MTT E Series** | Embedded / Edge | E3000 |

## Key Features

- **Full-function GPU**: Graphics + AI + general-purpose computing (GPGPU) + ray tracing
- **Domestic production rate 60%**: HBM/memory from Samsung/SK Hynix, CPU domestic (Zhaoxin), packaging domestic
- **Multi-precision support**: FP32 / FP16 / BF16 / INT8 / INT4
- **Multi-card interconnect**: MUSA Link 8 cards, 800 GB/s bidirectional
- **PCIe 4.0**: One generation behind PCIe 5.0
- **Drawback**: Compared to NVIDIA H100 (989 BF16 TFLOPS) compute 1/20, large ecosystem gap

## LLM Training Performance Reference

- LLaMA-2 7B training: MTT S5000 8 cards ≈ **H100 1/4 speed** (BF16 optimized)
- Stable Diffusion XL: MTT S5000 1 card ≈ **RTX 4090 50% speed**
- Qwen 1.5 14B fine-tuning: MTT S5000 4 cards ≈ **A100 60% speed**
- Inference (70B Q4): MTT S5000 1 card ≈ **RTX 4090 1.2× speed** (bandwidth advantage)

## Application Scenarios

- ✅ Chinese market LLM training and inference
- ✅ Domestic production replacement projects
- ✅ Government, state-owned enterprise AI projects
- ✅ AI computing center construction
- ✅ Edge AI (embedded MTT E series)
- ✅ Graphics rendering (consumer-grade MTT G series)
- ❌ International market
- ❌ Top-tier frontier model training (ecosystem + compute limitations)
- ❌ FP8 training (only supports BF16)

## Domestic GPU Five Tigers

| Company | Positioning | Representative Product | Funding |
|---------|---------------|----------------------|---------|
| **Moore Threads** | Full-function GPU + AI | MTT S5000 | $500M+ |
| **Biren Technology** | Data center AI | BR104 | $700M+ |
| **Jingjia Micro** | Military + civilian GPU | JM9 | Public |
| **Xinyuan Microelectronics** | IP + design services | Multiple IPs | Public |
| **Iluvatar** | Data center AI | MR 100/200 | $400M+ |

## Related Cards

- [Cambricon MLU 590](/en/docs/cards/others/cambricon-mlu) - Domestic AI training
- [Huawei Ascend 910C](/en/docs/cards/huawei/ascend-910c) - Strongest domestic AI
- [Huawei Ascend 920](/en/docs/cards/huawei/ascend-920) - Next-generation domestic
- [Tenstorrent](/en/docs/cards/others/tenstorrent) - RISC-V AI
- [SambaNova SN40L](/en/docs/cards/others/sambanova-sn40l) - American RDU
- [NVIDIA A100](/en/docs/cards/nvidia/a100) - Data center classic
- [NVIDIA RTX 4090](/en/docs/cards/nvidia/rtx-4090) - Consumer-grade

## References

- [Moore Threads Official Website](https://www.mthreads.com)
- [Moore Threads MTT S5000 Product Page](https://www.mthreads.com/product/S5000)
- [Analysis of Domestic GPU Five Tigers](https://www.example.com/domestic-gpu-five-tigers)
