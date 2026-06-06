---
id: apple-m2-max
title: Apple M2 Max (96GB UMA Unified Memory)
sidebar_label: M2 Max
description: "Apple M2 Max detailed specifications: 12-core CPU, 38-core GPU, 96GB LPDDR5, 400 GB/s, 15.8 TOPS NE, Apple Silicon 2nd-gen high-performance."
keywords: [Apple M2 Max, M2 Max, 38-core GPU, 96GB UMA, 400 GB/s, 15.8 TOPS NE, MacBook Pro]
---

# Apple M2 Max (96GB Unified Memory)

## Overview

**Apple M2 Max** is Apple Silicon's **2nd-generation high-performance chip**, released **2023-01-17** for the **MacBook Pro 14"/16" 2023** and **Mac Studio 2023**. Built on **TSMC 2nd-gen 5nm (N5P)** with a **12-core CPU** (8P+4E), **38-core GPU**, **96GB LPDDR5 unified memory** (first 96GB in MacBook Pro), **400 GB/s memory bandwidth**, and **15.8 TOPS Neural Engine**. Performance is up **20%** over the M1 Max.

**Key positioning**:
- **M2 Max** (this page): single-die high-performance, laptop + workstation
- **M2 Ultra** (existing page): dual M2 Max merged, 192GB
- **M3 Max** (existing page): 2023-10 upgrade, 128GB
- **M4 Max** (existing page): 2024-10 upgrade, 128GB LPDDR5X, 546 GB/s

## Core Specifications

| Item | Parameter |
|------|-----------|
| **Architecture** | Apple Silicon (M2 Max single die, non-UltraFusion) |
| **Process** | **TSMC 2nd-gen 5nm (N5P)** |
| **CPU Cores** | 12 (8P + 4E) |
| **CPU Max Frequency** | 3.7 GHz (P-core) |
| **GPU Cores** | 38 |
| **Neural Engine** | 16-core, **15.8 TOPS** |
| **Unified Memory** | **32GB / 64GB / 96GB LPDDR5** |
| **Memory Bandwidth** | **400 GB/s** |
| **FP32 GPU** | ~13.6 TFLOPS |
| **FP16 GPU** | ~27.2 TFLOPS |
| **Media Engine** | Hardware H.264/HEVC/ProRes |
| **TDP** | 60-90 W (laptop) / 100-150 W (Mac Studio) |
| **MacBook Pro 16" M2 Max 96GB** | **$4,999** |
| **Mac Studio M2 Max 96GB** | $2,999 |
| **Launch Date** | 2023-01-17 |

## Comparison with M1 Max

| Metric | M2 Max | M1 Max | Improvement |
|--------|--------|--------|-------------|
| Process | 5nm (N5P) | 5nm (N5) | 2nd-gen 5nm |
| CPU Cores | 12 (8P+4E) | 10 (8P+2E) | +20% |
| CPU Frequency | 3.7 GHz | 3.2 GHz | +16% |
| GPU Cores | 38 | 32 | +19% |
| Neural Engine | 15.8 TOPS | 11 TOPS | +44% |
| Memory | 96GB LPDDR5 | 64GB LPDDR5 | +50% |
| Bandwidth | 400 GB/s | 400 GB/s | Same |
| CPU Performance | +20% | Baseline | Significant |
| GPU Performance | +30% | Baseline | Significant |
| Media Engine | H.264/HEVC/ProRes | Same | Same |

## Local LLM Inference Performance (96GB variant)

| Model | Quantization | Performance (tok/s) | Notes |
|------|------|---------------|------|
| Llama 2 70B | Q4_K_M | ~6 tok/s | Full model quantized fits |
| Llama 2 70B | Q4_K_S | ~7 tok/s | Aggressive quantization |
| Llama 2 13B | Q4_K_M | ~18 tok/s | Mainstream |
| Mixtral 8x7B | Q4_K_M | ~14 tok/s | MoE |
| Qwen 1.5 72B | Q4_K_M | ~6 tok/s | Chinese |
| Llama 2 7B | Q4_K_M | ~38 tok/s | Very fast |
| Stable Diffusion XL | FP16 | 1.3× vs M1 Max | Image generation |

> **96GB M2 Max advantage**: Compared to M1 Max 64GB, this is the **first 96GB UMA** support (first ever in MacBook Pro), allowing full 70B LLMs (quantized) to be loaded.

## M2 Architecture Upgrades (vs M1)

- **CPU Architecture**: ARMv8.6 (vs M1 ARMv8.5) — IPC +18%
- **GPU Architecture**: Apple GPU Gen 3 (vs M2 Gen 2) — ProRes hardware acceleration
- **Neural Engine**: 15.8 TOPS (vs M1 NE 11 TOPS)
- **Unified Memory**: LPDDR5 (vs M1 LPDDR4X)

## Vendor Information

| Item | Details |
|------|------|
| **Vendor** | Apple Inc. |
| **Product** | MacBook Pro 14"/16" (2023) + Mac Studio (2023-06) |
| **MacBook Pro 16" M2 Max 96GB** | $4,999 (2023-01 launch price) |
| **Mac Studio M2 Max 96GB** | $2,999 (2023-06) |
| **Discontinued** | 2023-10 (replaced by M3 Max) |
| **Target Market** | Creative professionals, local AI, MacBook Pro workstation |

## Use Cases

- **MacBook Pro workstation** (96GB UMA laptop, revolutionary in 2023)
- Local 70B LLM inference (quantized)
- Stable Diffusion XL / video generation
- 4K/8K video editing (ProRes RAW hardware acceleration)
- On-device LLM development
- Not suitable for: datacenter training
- Not suitable for: large-scale inference (lacks datacenter hardware)
- Not suitable for: FP8 training (FP16/BF16 only)

## Apple Silicon Max Evolution

| Generation | M1 Max | **M2 Max** | M3 Max | M4 Max |
|------------|--------|-------------|---------|---------|
| Release | 2021-10 | **2023-01** | 2023-10 | 2024-10 |
| Process | 5nm | **5nm (N5P)** | 3nm | 3nm (N3E) |
| CPU | 10 (8P+2E) | **12 (8P+4E)** | 16 (12P+4E) | 16 (12P+4E) |
| GPU | 32 | **38** | 40 | 40 |
| NE | 11 TOPS | **15.8 TOPS** | 18 TOPS | 38 TOPS |
| Memory | 64GB LPDDR5 | **96GB LPDDR5** | 128GB LPDDR5 | 128GB LPDDR5X |
| Bandwidth | 400 GB/s | **400 GB/s** | 400 GB/s | 546 GB/s |
| Price (MBP 16 max) | $4,199 | **$4,999** | $5,799 | $6,399 |

## M2 Max vs M2 Ultra vs M3 Max

| Metric | M2 Max | M2 Ultra | M3 Max |
|--------|--------|----------|---------|
| CPU | 12-core (8P+4E) | 24-core (16P+8E) | 16-core (12P+4E) |
| GPU | 38-core | 76-core | 40-core |
| NE | 15.8 TOPS | 31.6 TOPS | 18 TOPS |
| Memory | 96GB LPDDR5 | 192GB LPDDR5 | 128GB LPDDR5 |
| Bandwidth | 400 GB/s | 800 GB/s | 400 GB/s |
| UltraFusion | Ready | 2.5 TB/s (dual M2 Max) | Ready |

## Key Features

- **96GB UMA**: First 96GB in MacBook Pro 2023
- **5nm N5P**: 2nd-gen 5nm, excellent efficiency
- **38-core GPU**: Leading consumer SoC graphics
- **UltraFusion ready**: Can merge with another M2 Max for M2 Ultra
- **Drawbacks**: Discontinued (2023-10), 400 GB/s bandwidth limitation

## Related Cards

- [Apple M1 Max] (no standalone page) - Previous generation
- [Apple M2 Ultra](/docs/cards/others/apple-m2-ultra) - Same-gen Ultra
- [Apple M3 Max](/docs/cards/others/apple-m3-max) - Next generation
- [Apple M4 Max](/docs/cards/others/apple-m4-max) - Current flagship
- [Apple M3 Ultra](/docs/cards/others/apple-m3-ultra) - Current Ultra
- [Apple M-Series Overview](/docs/cards/others/apple-m-series) - Full series
- [NVIDIA RTX 4090](/docs/cards/nvidia/rtx-4090) - Consumer comparison
- [AMD MI300A](/docs/cards/amd/mi300a) - Datacenter APU
