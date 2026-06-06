---
id: arch-tpu
title: TPU (Tensor Processing Unit)
sidebar_label: TPU
description: "TPU architecture details: Google's in-house Matrix Multiply Unit, 2D/3D Torus interconnect, purpose-built for neural network matrix operations."
keywords: [TPU, Tensor Processing Unit, Google TPU, MXU, 2D Torus, 3D Torus, JAX, XLA]
---

# TPU (Tensor Processing Unit) Architecture

## What is a TPU

**TPU (Tensor Processing Unit)** is **Google**'s in-house **dedicated AI accelerator**, first deployed in 2015 (for AlphaGo) and opened to Google Cloud in 2018. **Purpose-built for neural network matrix operations**, its core is the **MXU (Matrix Multiply Unit)** — a 128×128 matrix multiplier.

The **latest TPU v7 Ironwood** (2025) features 192GB HBM per chip, designed for the LLM inference era.

## TPU Generations

| Generation | Year | Compute (BF16) | Memory | Pod Scale | Characteristics |
|------------|------|----------------|--------|-----------|-----------------|
| **TPU v1** | 2015 | 23 TOPS INT8 | 8GB | 256 | Inference |
| **TPU v2** | 2017 | 180 TFLOPS | 16GB HBM | 256 | Training-inference fungible |
| **TPU v3** | 2018 | 420 TFLOPS | 32GB HBM | 1024 | Liquid cooling |
| **TPU v4** | 2021 | 275 TFLOPS | 32GB HBM | 4096 | 2D Torus |
| **TPU v5e** | 2023 | 197 TOPS INT8 | 16GB HBM | 256 | Inference optimized |
| **TPU v5p** | 2023 | 459 TFLOPS | 95GB HBM3 | 8960 | Training flagship |
| **TPU v6e (Trillium)** | 2024 | 918 TFLOPS | 32GB HBM | 256 | Training-inference fungible |
| **TPU v7 (Ironwood)** | 2025 | 4,614 TOPS FP8 | **192GB HBM** | **9,216** | **Inference-era flagship** |

## Core Architecture: MXU

### Matrix Multiply Unit (MXU)
- **128×128 systolic array**
- Performs **16,384 multiply-adds** per cycle (INT8)
- BF16 / INT8 / FP8 support
- **Sparse acceleration**: skip zero values

### HBM Memory
- High Bandwidth Memory (HBM2 / HBM2e / HBM3)
- TPU v7 reaches 192GB (per chip)
- 7,380 GB/s bandwidth

### SparseCore
- Second generation (TPU v4+)
- Accelerates embedding lookups (recommendation systems)
- Used for Google Search, YouTube

## Interconnect Topology

### 2D Torus (TPU v4)
- Single Pod 4,096 chips = 32×32 grid
- ICI (Inter-Chip Interconnect) 800 GB/s
- Data flows **cyclically** across the 2D grid

### 3D Torus (TPU v5p, v7)
- Single Pod 8,960-9,216 chips
- 3D cubic topology
- 6-way interconnect (vs 2D 4-way)
- Reduces long-distance communication latency

## TPU vs GPU

| Dimension | TPU | GPU (NVIDIA) |
|-----------|-----|--------------|
| Compute | **MXU 128×128 systolic array** | Tensor Core matrix multiply |
| Memory | HBM (medium) | HBM (larger) |
| Interconnect | **2D/3D Torus** (massive Pods) | NVLink (smaller Pods) |
| Programming | **XLA compilation** | CUDA interpreted execution |
| Ecosystem | **JAX / TensorFlow** | PyTorch / TF / JAX |
| Deployment | **Google Cloud only** | Deploy anywhere |
| Pricing | Hourly rental | One-time / cloud |
| Best for | Ultra-large model training / inference | General AI |

## Software Stack

### Programming Model
- **XLA** (Accelerated Linear Algebra) compiler
- **JAX** (Google-recommended framework)
- **TensorFlow** (native support)
- **PyTorch/XLA** (official backend)

### High-Level APIs
- **Pathways** (heterogeneous TPU scheduling)
- **MaxText** (LLM training reference implementation)
- **TPU VM** (v4+ dedicated runtime)

## TPU Use Cases

- ✅ **Ultra-large model training** (PaLM 540B used 2 Pods)
- ✅ LLM inference (v7 Ironwood 192GB)
- ✅ Recommendation systems (DLRM, embedding acceleration)
- ✅ Google Cloud customers
- ❌ Own data centers (Google Cloud access only)
- ❌ Low-latency small models (GPU is more flexible)

## Detailed Product Pages

### Training / Training-Inference Fungible
- [Google TPU v4](/docs/cards/google/tpu-v4) - 2021 flagship, 2D Torus 4096 chip Pod
- [Google TPU v5p](/docs/cards/google/tpu-v5p) - 2023 training flagship, 95GB HBM3 3D Torus 8960 chip Pod
- [Google TPU v6p (Pathway)](/docs/cards/google/tpu-v6p) - 2024-12, 96GB HBM2 2.7 PF FP8 9216 chip Pod, Gemini training workhorse
- [Google TPU v6e (Trillium)](/docs/cards/google/tpu-v6e) - 2024 training-inference fungible, 918 TFLOPS BF16
- [Google TPU v7 (Ironwood)](/docs/cards/google/tpu-ironwood) - 2025 inference flagship, 192GB HBM 4614 FP8 TFLOPS 9216 chip Pod

### Inference Optimized / Split Architecture
- [Google TPU v5e](/docs/cards/google/tpu-v5e) - 2023-Q2 inference Lite, 16GB HBM2 400 TF FP8 $1.20/hr
- [Google TPU 8t](/docs/cards/google/tpu-8t) - 2026-04 first split-training, training-dedicated ASIC
- [Google TPU 8i](/docs/cards/google/tpu-8i) - 2026-04 first split-inference, **288GB HBM largest per-chip inference ASIC available**

### Edge
- [Google Edge TPU (Coral)](/docs/cards/google/edge-tpu) - 2019 edge 4 TOPS / 2 TOPS/W USB $59.99, TF Lite 6 form factors

## Related Architectures

- [GPU](/docs/architectures/arch-gpu) - General parallel
- [LPU](/docs/architectures/arch-lpu) - Ultra-low latency LLM
- [ASIC](/docs/architectures/arch-asic) - Inference optimized
- [Complete Comparison Table](/docs/comparison)
