---
id: tpu-v6e
title: Google Cloud TPU v6e (Trillium)
sidebar_label: Google TPU v6e Trillium
description: "Google TPU v6e Trillium detailed specifications: 918 TFLOPS BF16, 32GB HBM, 4.7× v5e performance, 4.7× peak compute, 6th-generation TPU."
keywords: [Google TPU v6e, Trillium, 6th-gen TPU, Gemini 2 training, AI training ASIC]
---

# Google Cloud TPU v6e (Trillium)

## Overview

Google TPU v6e (codenamed **Trillium**) reached GA in December 2024, marking Google's 6th-generation TPU. It delivers **4.7× the peak compute of v5e**, **918 TFLOPS** BF16 compute, doubled HBM capacity and ICI bandwidth. It was **used to train Gemini 2.0**. Trillium is a core component of the Google Cloud AI Hypercomputer architecture, scalable to **100,000+ chips** via the Jupiter network.

## Core Specifications

| Item | Specification |
|------|------|
| **Architecture** | TPU v6e (Trillium) |
| **BF16 Compute** | **918 TFLOPS** (4.7× v5e) |
| **INT8 Compute** | 1,836 TOPS |
| **HBM Capacity** | 32 GB (2× v5e) |
| **HBM Bandwidth** | 1,638 GB/s |
| **ICI Interconnect Bandwidth** | 800 GB/s (bidirectional) |
| **ICI Ports** | 4 |
| **DCN Bandwidth** | 100 Gbps (2× v5e) |
| **Pod Size** | 256 chips (2D Torus) |
| **vCPU (4-chip VM)** | 180 |
| **DRAM (4-chip VM)** | 720 GB |
| **Availability** | Google Cloud only |

## Trillium vs v5p Comparison

| Metric | v5p | v6e (Trillium) | Change |
|------|-----|----------------|------|
| BF16 Compute | 459 TFLOPS | **918 TFLOPS** | 2× |
| HBM Capacity | 95 GB | 32 GB | 1/3 |
| HBM Bandwidth | 2,575 GB/s | 1,638 GB/s | 0.64× |
| Pod Size | 8,960 | 256 | Smaller |
| Interconnect | 3D Torus | 2D Torus | Simplified |
| Efficiency | 1× | **+67%** | Improved |

**Note**: Trillium is better suited for mid-scale training and inference; v5p excels at ultra-large scale.

## Vendor Information

| Item | Details |
|------|------|
| **Manufacturer** | Google LLC |
| **Official Website** | https://cloud.google.com/tpu |
| **Product Page** | https://cloud.google.com/tpu/docs/v6e |
| **Release** | December 2024 GA |
| **Trained** | Gemini 2.0 |

## Key Features

- **SparseCore 3rd Gen**: 2× performance for embedding-intensive models
- **Training/Inference fungible**: Same quota for training and inference
- **Multislice**: Scalable to 100,000+ chips
- **Multi-host inference**: Supports 70B+ models
- **XLA compiler optimization**: First-class JAX/PyTorch/TF support

## Use Cases

- LLM training (Gemini 2.0, PaLM)
- LLM inference
- Multimodal models
- Embedding-intensive models (DLRM)
- Diffusion model inference

## Related Products

- [Google TPU v5p](/docs/cards/google/tpu-v5p) - Previous generation
- [Google TPU v7 Ironwood](/docs/cards/google/tpu-ironwood) - Latest
- [NVIDIA H100](/docs/cards/nvidia/h100) - Contemporary
