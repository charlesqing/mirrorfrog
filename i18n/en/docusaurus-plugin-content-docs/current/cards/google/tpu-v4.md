---
id: tpu-v4
title: Google TPU v4 (Flagship Across Generations)
sidebar_label: TPU v4
description: "Google TPU v4 detailed specs: 32GB HBM, 2D torus interconnect, 4096-chip Pod, 2021-2023 flagship training TPU."
keywords: [Google TPU v4, TPU v4 Pod, 2D torus, 32GB HBM, 4096 chips, AI training]
---

# Google TPU v4

## Overview

**Google TPU v4** was announced at **Google I/O 2021-05**, as the flagship training chip succeeding the TPU v3. It uses a **2D torus topology** for connectivity, with a single Pod containing **4,096 chips** and delivering **1 ExaFLOPS BF16** per Pod.

In **April 2023**, Google published a TPU v4 performance paper claiming **1.2-1.7× the BF16 throughput of NVIDIA A100 and 1.3-1.8× better energy efficiency** (sparking a debate with NVIDIA).

## Core Specifications

| Item | Spec |
|------|------|
| **Architecture** | TPU v4 (4th generation) |
| **Process** | TSMC 7nm |
| **Matrix Multiply Unit (MXU)** | 4× 128×128 (per cycle) |
| **HBM** | 32 GB HBM2 |
| **HBM Bandwidth** | 1.2 TB/s |
| **BF16 Compute (dense)** | 275 TFLOPS |
| **INT8 Compute** | 275 TOPS |
| **SparseCore** | 2nd generation (embedding acceleration) |
| **TDP** | ~170 W |
| **Form Factor** | 4-chip board (v4 board) |
| **Interconnect** | **2D Torus, ICI 800 GB/s** |
| **Pod Scale** | **4,096 chips** |
| **Pod BF16 Compute** | **1.1 ExaFLOPS** |

## Pod Architecture

- 1 board = 4× TPU v4 chips
- 1 Pod = **4,096 TPU v4 chips** (8,192 boards = 32×32 2D torus)
- 4×4 cube = 256 chips (mid-scale)
- Per-chip ICI bandwidth = 800 GB/s (inter-chip interconnect)
- PaLM 540B training used 2 Pods

## Performance Comparison (BF16 Training)

| Metric | TPU v4 Single Chip | A100 80GB SXM | H100 SXM |
|------|---------------|---------------|----------|
| BF16 Compute | 275 TFLOPS | 312 TFLOPS | 989 TFLOPS |
| Memory | 32GB HBM2 | 80GB HBM2e | 80GB HBM3 |
| Bandwidth | 1.2 TB/s | 2 TB/s | 3.35 TB/s |
| Interconnect | ICI 2D Torus | NVLink 600 GB/s | NVLink 900 GB/s |
| Large Model Training | Advantage | Tie | Advantage |

Google paper data: TPU v4 Pod 4,096 chips trains GPT-3 175B **1.7× faster** than an equivalently scaled A100 Pod (with -1.3× power consumption).

## Software Ecosystem

- **JAX** (Google-recommended framework)
- **TensorFlow** (native support)
- **PyTorch/XLA** (official backend)
- **TPU VM** (v4 dedicated runtime)
- **Pathways** (heterogeneous TPU scheduling)

## Use Cases

- ✅ **Ultra-large model training** (PaLM, GPT-3 class)
- ✅ Google Cloud TPU customers
- ✅ Recommendation systems (DLRM)
- ❌ On-premises data centers (Google Cloud access only)
- ❌ Low-latency inference (use v5e)

## Vendor Information

| Item | Detail |
|------|------|
| **Vendor** | Google |
| **Access** | Google Cloud TPU v4 Pod |
| **Price** | ~$3.22/hr (chip) |
| **Target Market** | Google Cloud large model training |

## Related Cards

- [Google TPU v5p](/docs/cards/google/tpu-v5p) - Next-gen training TPU
- [Google TPU v6e](/docs/cards/google/tpu-v6e) - Fungible inference/training
- [Google TPU v7 Ironwood](/docs/cards/google/tpu-ironwood) - Inference-era flagship
- [Intel Gaudi 1](/docs/cards/intel/gaudi-1) - Same-gen training card
