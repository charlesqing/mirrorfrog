---
id: tpu-v5p
title: Google Cloud TPU v5p
sidebar_label: Google TPU v5p
description: Google TPU v5p detailed specifications: 459 TFLOPS BF16, 95GB HBM, 2,575 GB/s bandwidth, 8,960-chip Pod, Google's custom AI training ASIC.
keywords: [Google TPU v5p, TPU, Gemini training, AI training ASIC, systolic array]
---

# Google Cloud TPU v5p

## Overview

Google TPU v5p (v5 **P**remium) is Google's 5th-generation **Premium TPU**, launched in 2023, focused on large-scale LLM training (e.g. Gemini). It delivers **459 TFLOPS BF16 compute**, **95GB HBM**, and a single Pod scale of **8,960 chips**. Interconnect is via 3D Torus + OCS (Optical Circuit Switch), available exclusively through Google Cloud.

## Core Specifications

| Item | Specification |
|------|------|
| **Architecture** | Google TPU v5p (systolic array) |
| **Process Node** | TSMC 5nm |
| **BF16 Compute (per chip)** | 459 TFLOPS |
| **INT8 Compute (per chip)** | 459 TOPS |
| **HBM Capacity** | 95 GB |
| **HBM Bandwidth** | 2,575 GB/s |
| **ICI Interconnect Bandwidth** | 1,200 GB/s (bidirectional) |
| **DCN Bandwidth** | 50 Gbps |
| **Pod Size** | **8,960 chips** (4×4×4×140 3D Torus) |
| **Cooling** | Liquid cooling |
| **Availability** | Google Cloud only |

## TPU v5p vs v5e vs v4

| Metric | v4 | v5e | v5p |
|------|----|----|-----|
| BF16 Compute | 275 TFLOPS | 197 TFLOPS | **459 TFLOPS** |
| HBM Capacity | 32 GB | 16 GB | **95 GB** |
| Bandwidth | 1,200 GB/s | 400 GB/s | 2,575 GB/s |
| Pod Size | 4,096 | 256 | 8,960 |
| Positioning | Training | Inference | Training |

## Vendor Information

| Item | Details |
|------|------|
| **Manufacturer** | Google LLC |
| **Official Website** | https://cloud.google.com/tpu |
| **Product Page** | https://cloud.google.com/tpu/docs/v5p |
| **Exclusive to** | Google Cloud Platform |

## Software

- **JAX** (recommended): https://github.com/google/jax
- **PyTorch/XLA**
- **TensorFlow**
- **Pathways** (multi-host orchestration)

## Key Features

- **Systolic Array**: Efficient matrix multiplication
- **3D Torus interconnect + OCS optical switch**
- **Pathways orchestration**: Scalable across multiple Pods
- **JAX first-class citizen**

## Use Cases

- LLM training (Gemini, PaLM)
- Recommendation systems
- Multimodal models

## Related Products

- [Google TPU v6e (Trillium)](/docs/cards/google/tpu-v6e) - Successor
- [Google TPU v7 (Ironwood)](/docs/cards/google/tpu-ironwood) - Latest
- [NVIDIA H100](/docs/cards/nvidia/h100) - Contemporary
