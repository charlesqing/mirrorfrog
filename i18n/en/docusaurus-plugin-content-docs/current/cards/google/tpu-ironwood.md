---
id: tpu-ironwood
title: Google Cloud TPU v7 (Ironwood)
sidebar_label: Google TPU v7 Ironwood
description: Google TPU v7 Ironwood is the 7th-generation TPU: 2,307 TFLOPS BF16, 192GB HBM, 7,380 GB/s bandwidth, purpose-built for the era of inference.
keywords: [Google TPU Ironwood, TPU v7, 7th-gen TPU, AI inference TPU, Gemini 3]
---

# Google Cloud TPU v7 (Ironwood)

## Overview

Google TPU v7 (codenamed **Ironwood**) is the latest-generation TPU, launched in 2025 and **purpose-built for the era of inference**. Per-chip BF16 compute reaches **2,307 TFLOPS**, with **192GB HBM** (on par with NVIDIA H200 / MI300X) and **7,380 GB/s** bandwidth. Ironwood is among the first inference-first TPUs, delivering **4,614 TFLOPS FP8** per chip.

## Core Specifications

| Item | Specification |
|------|------|
| **Architecture** | TPU v7 (Ironwood) |
| **BF16 Compute (per chip)** | **2,307 TFLOPS** |
| **FP8 Compute (per chip)** | **4,614 TFLOPS** |
| **HBM Capacity** | **192 GB** |
| **HBM Bandwidth** | **7,380 GB/s** |
| **ICI Interconnect Bandwidth** | 1,200 GB/s (bidirectional) |
| **DCN Bandwidth** | 100 Gbps |
| **TensorCores** | 2/chip |
| **SparseCores** | 4/chip |
| **Pod Size** | **9,216 chips** |
| **Topology** | 3D Torus |

## TPU Generations Comparison

| Metric | v4 | v5p | v6e (Trillium) | v7 (Ironwood) |
|------|----|----|----------------|----------------|
| BF16 Compute | 275 TFLOPS | 459 TFLOPS | 918 TFLOPS | **2,307 TFLOPS** |
| FP8 Compute | N/A | 459 TFLOPS | 918 TFLOPS | **4,614 TFLOPS** |
| HBM Capacity | 32 GB | 95 GB | 32 GB | **192 GB** |
| HBM Bandwidth | 1,200 GB/s | 2,575 GB/s | 1,638 GB/s | **7,380 GB/s** |
| Pod Size | 4,096 | 8,960 | 256 | **9,216** |

## Ironwood vs H200 / MI300X

| Metric | TPU v7 | H200 | MI300X |
|------|--------|------|--------|
| Memory | 192 GB | 141 GB | 192 GB |
| Bandwidth | 7,380 GB/s | 4,800 GB/s | 5,300 GB/s |
| FP8 Compute | 4,614 TFLOPS | 3,958 TFLOPS | 2,614 TFLOPS |

**Key advantage**: TPU v7 leads in memory bandwidth and FP8 compute.

## Vendor Information

| Item | Details |
|------|------|
| **Manufacturer** | Google LLC |
| **Official Website** | https://cloud.google.com/tpu |
| **Product Page** | https://cloud.google.com/tpu/docs/tpu7x |
| **Release** | 2025 |
| **Availability** | Google Cloud only |

## Key Features

- **Inference-first**: Optimized for inference, unlike prior generations that focused on training
- **Massive memory capacity**: 192GB enables 70B+ models on a single chip
- **FP8 at 2× BF16**: Modern inference compute
- **3D Torus 9,216-chip Pod**

## Use Cases

- LLM inference (Gemini 3 / 4)
- Large-scale MoE models
- Multimodal AI inference
- Embedding-intensive applications

## Related Products

- [Google TPU v6e (Trillium)](/docs/cards/google/tpu-v6e) - Previous generation
- [Google TPU v5p](/docs/cards/google/tpu-v5p) - Former flagship
- [NVIDIA H200](/docs/cards/nvidia/h200) - Direct competitor
- [AMD MI300X](/docs/cards/amd/mi300x) - Same memory capacity
