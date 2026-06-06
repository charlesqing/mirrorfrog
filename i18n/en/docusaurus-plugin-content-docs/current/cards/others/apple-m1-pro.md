---
id: apple-m1-pro
title: Apple M1 Pro (MacBook Pro 2021 32GB UMA 200 GB/s)
sidebar_label: M1 Pro
description: "Apple M1 Pro detailed specifications: 5nm N5, 10-core CPU (8P+2E), 16-core GPU, 200 GB/s memory bandwidth, 16/32GB UMA, MacBook Pro 14\" / 16\" 2021, Apple Silicon 2nd generation."
keywords: [Apple M1 Pro, M1 Pro, 10-core CPU, 16-core GPU, 200 GB/s, MacBook Pro 2021, Apple Silicon]
---

# Apple M1 Pro (MacBook Pro 2021 32GB UMA)

## Overview

**Apple M1 Pro** is Apple Silicon's 2nd-generation **Pro series** chip, released on **2021-10-26** for the **MacBook Pro 14"/16" 2021**. Built on **TSMC 5nm (N5)** with **33.7 billion transistors**, it features **8 or 10 CPU cores** (6P+2E or 8P+2E @ 3.2 GHz), **14 or 16 GPU cores**, **16-core Neural Engine (11 TOPS)**, **16/32 GB LPDDR5 unified memory**, **200 GB/s memory bandwidth** (4× the M1), and **Thunderbolt 4**. The M1 Pro was Apple's first professional-grade SoC designed for the MacBook Pro, introducing **ProRes acceleration**, **Liquid Retina XDR** display, **HDMI 2.0**, **MagSafe 3**, and other pro features.

## Core Specifications

| Item | Parameter |
|------|-----------|
| **Architecture** | Apple Silicon (M1 Pro single die) |
| **Process** | TSMC **5nm (N5)** |
| **Transistors** | **33.7 billion** |
| **CPU Cores** | 8 (6P+2E) or 10 (8P+2E) |
| **CPU Max Frequency** | 3.2 GHz (P-cores) |
| **GPU Cores** | 14 (8C CPU variant) or 16 (10C CPU variant) |
| **Neural Engine** | 16-core, **11 TOPS INT8** |
| **Unified Memory** | **16GB / 32GB LPDDR5** |
| **Memory Bandwidth** | **200 GB/s** (4× M1's 50 GB/s) |
| **FP32 GPU** | ~4.5 TFLOPS (14-core) / ~5.2 TFLOPS (16-core) |
| **FP16 GPU** | ~9.0 TFLOPS (14-core) / ~10.4 TFLOPS (16-core) |
| **Media Engine** | **Dedicated ProRes encode/decode engine** (first), H.264/HEVC |
| **TDP** | ~30W (laptop) |
| **Interface** | **Thunderbolt 4** (40 Gb/s), USB 4, HDMI 2.0, Wi-Fi 6, Bluetooth 5.0 |
| **Launch Devices** | MacBook Pro 14" 2021, MacBook Pro 16" 2021 |
| **Launch Date** | **2021-10-26** |
| **MacBook Pro 14" M1 Pro 8C/14C 16GB** | **$1,999** |
| **MacBook Pro 14" M1 Pro 10C/16C 16GB** | **$2,499** |
| **MacBook Pro 16" M1 Pro 10C/16C 16GB** | **$2,499** |

## Comparison with M1

| Metric | M1 Pro | M1 | Improvement |
|--------|--------|-----|-------------|
| Process | 5nm N5 | 5nm N5 | Same |
| Transistors | **33.7 billion** | 16 billion | 2.1× |
| CPU Cores | 8/10 (6P+2E / 8P+2E) | 8 (4P+4E) | +2-4 P-cores |
| CPU Frequency | 3.2 GHz P | 3.2 GHz P | Same |
| GPU Cores | 14/16 | 7/8 | +2× |
| Neural Engine | 11 TOPS | 11 TOPS | Same |
| Memory Bandwidth | **200 GB/s** | 50 GB/s | **4×** |
| Max Memory | 32 GB | 16 GB | 2× |
| Media Engine | **Dedicated ProRes** | Basic | Major improvement |
| Interface | **Thunderbolt 4** | Thunderbolt 3 / USB 4 | Upgraded |

## Comparison with M1 Max

| Metric | M1 Pro | M1 Max | Improvement |
|--------|--------|--------|-------------|
| GPU Cores | 14/16 | 24/32 | +50-100% |
| Memory Bandwidth | 200 GB/s | **400 GB/s** | 2× |
| Max Memory | 32 GB | 64 GB | 2× |
| ProRes Engines | 1 enc + 1 dec | 2 enc + 2 dec | 2× throughput |
| Price (16-core GPU) | $2,499 | $3,099 | +$600 |

## Local LLM Inference Performance

| Model | Quantization | Performance (tok/s) | Notes |
|------|------|---------------|------|
| Llama 3 8B | FP16 | ~35 tok/s | 32GB fits full model |
| Llama 3 8B | Q4_K_M | ~50 tok/s | Quantized speedup |
| Mistral 7B | FP16 | ~38 tok/s | 32GB fits full |
| Mixtral 8x7B | Q4_K_M | ~12 tok/s | MoE 28GB fits |
| Stable Diffusion XL | FP16 | 1.0× vs M1 | Image generation |
| Whisper Large V3 | FP16 | 3× real-time | Speech transcription |

> **Historical significance**: The M1 Pro was Apple's **first** professional-grade SoC for the MacBook Pro, achieving a **4× memory bandwidth increase** (50→200 GB/s) over the M1 and introducing **ProRes hardware acceleration** (a key feature for the film industry), making it an iconic product in Apple's move away from Intel.

## Use Cases

- **MacBook Pro 14"/16" 2021** (professional development, film post-production)
- **Professional video editing** (Final Cut Pro + ProRes acceleration)
- **3D rendering** (Blender Cycles, Octane, Redshift)
- **Music production** (Logic Pro multitrack mixing)
- **Software development** (Xcode compilation, multiple simulators)
- **Local LLM inference** (32GB fits full Llama 3 8B FP16)
- **Student/engineer entry-level pro Mac** ($1,999 price point)

## Vendor Information

| Item | Information |
|------|-------------|
| **Vendor** | Apple Inc. |
| **Design** | Apple in-house (Cupertino, CA) |
| **Fab** | **TSMC Taiwan** (5nm N5 line) |
| **Software Stack** | macOS 12 (Monterey) — macOS 26 (Tahoe) |
| **AI Framework** | Core ML, MLX, Create ML |
| **Launch Price** | MacBook Pro 14" M1 Pro 8C/14C 16GB **$1,999** |
| **Discontinued** | 2023-10 (M3 Pro launch) |
| **EOL Price** | Discontinued, used market $1,200-$1,500 |

## Key Features

- **5nm (N5)** process, **33.7 billion transistors** (2.1× M1)
- **10-core CPU** (8P+2E @ 3.2 GHz) multi-core 70% faster than M1
- **16-core GPU** (2× M1) 2× graphics performance boost
- **16-core Neural Engine 11 TOPS** (same as M1)
- **200 GB/s memory bandwidth** (**4×** M1's 50 GB/s)
- **32 GB unified memory** (2× M1's 16 GB)
- **Dedicated ProRes hardware acceleration** (critical for film industry)
- **Thunderbolt 4** (40 Gb/s, 4× USB 3.0)
- **HDMI 2.0**, **MagSafe 3**, **SDXC card reader**
- **Liquid Retina XDR** display (mini-LED, 1600 nits HDR)
- **1080p FaceTime HD camera**
- **Wi-Fi 6**, **Bluetooth 5.0**

## Related Cards

- [Apple M1 Ultra (M1 series flagship)](./apple-m1-ultra) — M1 Max dual-die
- [Apple M2 Pro / Max / Ultra (2023)](./apple-m2-ultra) — Successor
- [Apple M3 Pro / Max (2023)](./apple-m3-max) — Successor
- [Apple M4 Pro (2024)](./apple-m4-pro) — Same-gen successor
- [Apple M-Series Overview](./apple-m-series) — M-series comparison table
- [Apple A19 Pro (iPhone 17 Pro)](./apple-a19-pro) — Same-gen mobile
- [Architecture: APU Accelerated Processing](../../architectures/arch-apu) — APU architecture
- [NVIDIA RTX 4090 (Consumer GPU)](../nvidia/rtx-4090) — Desktop GPU comparison
