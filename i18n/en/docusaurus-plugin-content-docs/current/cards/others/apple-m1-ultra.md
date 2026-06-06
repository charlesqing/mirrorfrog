---
id: apple-m1-ultra
title: Apple M1 Ultra (128GB UMA Unified Memory)
sidebar_label: M1 Ultra
description: "Apple M1 Ultra detailed specifications: 64-core GPU, 20-core CPU, 128GB unified memory, Apple Silicon 1st-gen Ultra, 2022 WWDC."
keywords: [Apple M1 Ultra, M1 Ultra, 64-core GPU, 128GB UMA, UltraFusion 1.0, 800 GB/s, Mac Studio]
---

# Apple M1 Ultra (128GB Unified Memory)

## Overview

**Apple M1 Ultra** is Apple Silicon's **first-generation Ultra flagship**, announced at **WWDC 2022-03-08**. It uses **UltraFusion interconnect (1st gen)** to merge two M1 Max dies into a single chip, delivering **128GB unified memory** + **800 GB/s memory bandwidth** (**the industry's first consumer-grade 128GB UMA solution**), marking a milestone in Apple Silicon history.

**Historical significance**: The M1 Ultra is the **founding product of the Apple Silicon Ultra series**, laying the architectural foundation for subsequent M2/M3/M4/M5 Ultra generations. It **launched with Mac Studio 2022** and was **replaced by M2 Ultra in 2023-06**.

## Core Specifications

| Item | Parameter |
|------|-----------|
| **Architecture** | Apple Silicon (M1 Max × 2, **UltraFusion 1.0**) |
| **Process** | TSMC 5nm |
| **CPU Cores** | 20 (16P + 4E) |
| **GPU Cores** | 64 |
| **Neural Engine** | 32-core, **22 TOPS** |
| **Unified Memory** | **64GB / 128GB LPDDR5** |
| **Memory Bandwidth** | **800 GB/s** |
| **FP32 GPU** | 21 TFLOPS |
| **FP16 GPU** | 42 TFLOPS |
| **Media Engine** | Hardware H.264/HEVC/ProRes |
| **TDP** | 60-120 W |
| **Launch Price** | Mac Studio M1 Ultra 128GB: **$5,999** (2022-03 launch price) |
| **Launch Date** | 2022-03-18 (Mac Studio launch) |
| **Discontinued** | 2023-06 (replaced by M2 Ultra) |

## UltraFusion 1.0 Interconnect

| Dimension | UltraFusion 1.0 (M1) | UltraFusion 2.0 (M3+) |
|-----------|------------------------|--------------------------|
| **Bandwidth** | 2.5 TB/s | 2.5 TB/s |
| **Channels** | 4 channels | 4 channels |
| **Latency** | ~100ns | ~80ns |
| **First appeared** | 2022 M1 Ultra | 2023 M3 Ultra |

**Key technologies**:
- **Die-to-die silicon interposer**: Similar to TSMC CoWoS
- **Transparent to software**: System sees a single chip
- **Unified memory pool**: CPU/GPU/Neural Engine all access 128GB

## Apple Silicon Evolution Timeline

| Generation | Flagship | Process | Memory | Bandwidth | CPU Cores | GPU Cores | NE |
|------------|----------|---------|--------|-----------|-----------|-----------|-----|
| **M1** | **M1 Ultra (2022)** | **5nm** | **128GB** | **800 GB/s** | **20 (16P+4E)** | **64** | **22 TOPS** |
| M2 | M2 Ultra (2023) | 5nm | 192GB | 800 GB/s | 24 (16P+8E) | 76 | 31.6 TOPS |
| M3 | M3 Ultra (2023-12) | 3nm | 256GB | 800 GB/s | 32 (24P+8E) | 80 | 72 TOPS |
| M4 | M4 Ultra (2025-Q4 estimated) | 3nm | 256GB | 819 GB/s | 32 (24P+8E) | 80 | 76 TOPS |
| M5 | M5 Ultra (2026 H2 estimated) | 2nm | 384GB | ~1 TB/s | 40 (24P+16E) | 96-120 | ~120 TOPS |

## Comparison with M1 Max

| Metric | M1 Ultra | M1 Max | Improvement |
|--------|---------|--------|-------------|
| Process | 5nm | 5nm | Same |
| CPU Cores | 20 (16P+4E) | 10 (8P+2E) | **2×** |
| GPU Cores | 64 | 32 | **2×** |
| Neural Engine | 22 TOPS | 11 TOPS | **2×** |
| Memory | 128GB LPDDR5 | 64GB LPDDR5 | **2×** |
| Bandwidth | 800 GB/s | 400 GB/s | **2×** |
| UltraFusion | **2.5 TB/s** (dual Max interconnect) | - | New |
| Price (Mac Studio 128GB) | $5,999 | $3,999 | +50% |

## Local LLM Inference Performance (128GB variant)

| Model | Quantization | Performance (tok/s) | Notes |
|------|------|---------------|------|
| Llama 2 7B | FP16 | ~35 tok/s | Mainstream |
| Llama 2 13B | Q4_K_M | ~18 tok/s | Performance limited |
| Llama 2 70B | **Q4_K_M** | **~3-4 tok/s** | **128GB can load quantized** |
| Llama 1 65B | Q4_K_M | ~4 tok/s | Early model |
| Mistral 7B | Q4_K_M | ~38 tok/s | Very fast |
| Falcon 40B | Q4_K_M | ~6 tok/s | |
| MPT 30B | FP16 | ~5 tok/s | Full load possible |
| Code Llama 34B | Q4_K_M | ~7 tok/s | Coding |

> **Significance of 128GB M1 Ultra**: **First time in 2022 that consumer hardware could run a 70B LLM** (albeit with Q4 quantization), at a **price of $5,999** (far below NVIDIA DGX Station at $50K+).

## Vendor Information

| Item | Details |
|------|------|
| **Vendor** | Apple Inc. |
| **Product** | Mac Studio (launched 2022-03, discontinued 2023-06) |
| **Mac Studio M1 Ultra 128GB** | $5,999 (2022-03 launch price) |
| **Discontinued** | 2023-06 (replaced by M2 Ultra) |
| **Target Market** | Creators, local AI (early), ML researchers |
| **Historical Position** | **Founding product of Apple Silicon Ultra series** |

## Use Cases

- Local LLM inference (128GB UMA, revolutionary in 2022)
- Stable Diffusion 1.x image generation
- Final Cut Pro / Logic Pro hardware acceleration
- 4K video editing
- Early Apple Silicon on-device AI development
- Not suitable for: datacenter training
- Not suitable for: large-scale inference
- Not suitable for: FP8 training (FP16/BF16 only)

## M1 Ultra vs M2 Ultra vs M3 Ultra

| Metric | M1 Ultra (2022) | M2 Ultra (2023) | M3 Ultra (2023-12) |
|--------|-----------------|------------------|---------------------|
| Process | 5nm | 5nm (N5P) | 3nm |
| CPU Cores | 20 (16P+4E) | 24 (16P+8E) | 32 (24P+8E) |
| GPU Cores | 64 | 76 | 80 |
| NE | 22 TOPS | 31.6 TOPS | 72 TOPS |
| Memory | 128GB LPDDR5 | 192GB LPDDR5 | 256GB LPDDR5 |
| Bandwidth | 800 GB/s | 800 GB/s | 800 GB/s |
| Price | $5,999 | $5,499 | $5,899 |

## Key Features

- **UltraFusion 1.0**: Industry-first consumer inter-die silicon interconnect at 2.5 TB/s
- **128GB UMA**: Largest consumer unified memory in 2022
- **800 GB/s**: Among the highest consumer GPU/SoC bandwidths
- **5nm TSMC**: First-gen Apple Silicon flagship
- **Drawbacks**: No FP8 support, $6K price, discontinued

## Historical Significance

- **2022 Revolution**: First time consumer hardware could run a 70B LLM
- **Architecture foundation**: M2/M3/M4/M5 Ultra all evolved from this architecture
- **Ecosystem beginning**: Early llama.cpp / MLX adaptation
- **NVIDIA alternative**: Starting point for local AI workstations

## Related Cards

- [Apple M2 Ultra](/docs/cards/others/apple-m2-ultra) - Next generation
- [Apple M3 Ultra](/docs/cards/others/apple-m3-ultra) - Current true flagship
- [Apple M4 Ultra (estimated)](/docs/cards/others/apple-m4-ultra) - 2025 projected
- [Apple M5 Ultra (estimated)](/docs/cards/others/apple-m5-ultra) - 2026 projected
- [Apple M4 Max](/docs/cards/others/apple-m4-max) - Laptop flagship
- [Apple M-Series Overview](/docs/cards/others/apple-m-series) - Full series
- [NVIDIA RTX 4090](/docs/cards/nvidia/rtx-4090) - Consumer comparison
- [AMD MI300A](/docs/cards/amd/mi300a) - Datacenter APU
