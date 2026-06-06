---
id: apple-m3-max
title: Apple M3 Max (128GB UMA, 3nm, 40-core GPU)
sidebar_label: M3 Max
description: "Apple M3 Max detailed specifications: 3nm, 16-core CPU, 40-core GPU, 128GB UMA, 400 GB/s, 18 TOPS NE, dynamic caching, MacBook Pro 2023."
keywords: [Apple M3 Max, M3 Max, 3nm, 16-core CPU, 40-core GPU, 128GB UMA, dynamic caching, MacBook Pro]
---

# Apple M3 Max (128GB UMA, 3nm)

## Overview

**Apple M3 Max** is Apple Silicon's **3rd-generation Max chip**, released **2023-10-30** for the **MacBook Pro 14"/16" 2023**. It is Apple's first Max chip on **TSMC 3nm**, featuring a **16-core CPU** (12P+4E), **40-core GPU**, **128GB LPDDR5 unified memory**, **400 GB/s bandwidth**, and **18 TOPS Neural Engine**. Key innovations include **Dynamic Caching**, hardware ray tracing, and mesh shading.

## Core Specifications

| Item | Parameter |
|------|-----------|
| **Architecture** | Apple Silicon (M3 Max single die) |
| **Process** | TSMC 3nm (N3) |
| **CPU Cores** | 16 (12P + 4E) |
| **GPU Cores** | 40 |
| **GPU Architecture** | Dynamic Caching, HW ray tracing, mesh shading |
| **Neural Engine** | 16-core, 18 TOPS |
| **Unified Memory** | 36GB / 64GB / 128GB LPDDR5 |
| **Memory Bandwidth** | 400 GB/s |
| **TDP** | 56-78W (laptop) |
| **Launch Date** | 2023-10-30 |
| **MacBook Pro 16" M3 Max 128GB** | $5,799 |

## Comparison with M2 Max

| Metric | M3 Max | M2 Max | Improvement |
|--------|--------|--------|-------------|
| Process | 3nm (N3) | 5nm (N5P) | New node |
| CPU Cores | 16 (12P+4E) | 12 (8P+4E) | +33% |
| GPU Cores | 40 | 38 | +5% |
| Neural Engine | 18 TOPS | 15.8 TOPS | +14% |
| Memory | 128GB | 96GB | +33% |
| GPU Architecture | Dynamic Caching + RT | Standard | New features |
| CPU Performance | +15% | Baseline | Significant |

## LLM Inference Performance (128GB)

| Model | Quantization | Performance (tok/s) |
|------|------|--------|
| Llama 2 70B | Q4_K_M | ~7-8 tok/s |
| Llama 2 13B | Q4_K_M | ~20 tok/s |
| Mistral 7B | Q4_K_M | ~40 tok/s |
| Mixtral 8x7B | Q4_K_M | ~16 tok/s |

## Vendor Information

| Item | Details |
|------|------|
| **Vendor** | Apple Inc. |
| **Product** | MacBook Pro 14"/16" 2023 |
| **MBP 16" M3 Max 128GB** | $5,799 |
| **Discontinued** | 2024-10 (M4 Max) |

## Use Cases

- Creative professional (video, 3D, music)
- Local 70B LLM inference (128GB)
- AAA gaming with hardware ray tracing
- On-device AI development

## Key Features

- **3nm**: first Apple Silicon on 3nm
- **Dynamic Caching**: revolutionary GPU memory management
- **Hardware ray tracing**: first on Mac
- **128GB UMA**: fits large models
- **Drawbacks**: Discontinued, 400 GB/s bandwidth

## Related Cards

- [Apple M2 Max](/docs/cards/others/apple-m2-max) - Previous generation
- [Apple M3 Ultra](/docs/cards/others/apple-m3-ultra) - Same-gen Ultra
- [Apple M4 Max](/docs/cards/others/apple-m4-max) - Next generation
- [Apple M-Series Overview](/docs/cards/others/apple-m-series)
