---
id: apple-a18
title: Apple A18 (iPhone 16 Entry-Level AI Chip)
sidebar_label: A18
description: "Apple A18 detailed specifications: 2nd-gen 3nm N3E, 6-core CPU + 5-core GPU (hardware ray tracing) + 16-core NE 35 TOPS, iPhone 16/16 Plus/16e/MacBook Neo, Apple Intelligence."
keywords: [Apple A18, A18, iPhone 16, 5-core GPU, 8 GB RAM, 3nm N3E, Apple Intelligence, MacBook Neo]
---

# Apple A18 (iPhone 16 Entry-Level SoC)

## Overview

**Apple A18** (codename **Tupai**) is Apple's SoC for **iPhone 16**, **iPhone 16 Plus**, **iPhone 16e** (4-core GPU entry variant), and **MacBook Neo** (5-core GPU special variant, launched 2025-02), released **2024-09-09**. Built on **TSMC 2nd-gen 3nm (N3E)** with **15.2 billion transistors**, it features a **6-core CPU** (2P @ 4.04 GHz + 4E @ 2.42 GHz), **5-core GPU** (first **hardware ray tracing** on non-Pro models), **16-core Neural Engine (35 TOPS)**, and **8 GB LPDDR5**. Compared to the A16 Bionic, **CPU performance is up 30%**, **GPU performance up 40%**, and **Neural Engine compute 2×**. This is Apple's **first** time bringing hardware ray tracing to non-Pro models and the **first** time enabling Apple Intelligence on the iPhone 16e.

## Core Specifications

| Item | Parameter |
|------|-----------|
| **Architecture** | Apple A-Series (iPhone mobile SoC) |
| **Process** | TSMC **2nd-gen 3nm (N3E)** |
| **Transistors** | **15.2 billion** |
| **CPU Cores** | 6 (2P @ 4.04 GHz + 4E @ 2.42 GHz) |
| **L2 Cache** | 8 MB (P-cores) + 4 MB (E-cores) |
| **L3 SLC** | 12 MB |
| **GPU Cores** | **5** (iPhone 16/Plus, MacBook Neo) / **4** (iPhone 16e) |
| **GPU New Features** | **Hardware ray tracing** (first on non-Pro), Mesh Shading, Dynamic Caching |
| **Neural Engine** | 16-core, **35 TOPS INT8** (**2×** A16's 17 TOPS) |
| **Unified Memory** | **8 GB LPDDR5** (17% more memory bandwidth) |
| **Memory Bandwidth** | ~51.2 GB/s (8 GB @ 6400 MT/s) |
| **Media Engine** | Hardware H.264/HEVC/ProRes/ProRes RAW/AV1 decode |
| **Interface** | USB 2.0 (Lightning port limitation; USB 3 limited to $1,099+ models) |
| **TDP** | ~8 W (iPhone sustained load) |
| **Launch Devices** | iPhone 16 (5-core GPU), iPhone 16 Plus (5-core GPU), iPhone 16e (4-core GPU, launched 2025-02), MacBook Neo (5-core GPU, launched 2025-02) |
| **Launch Date** | **2024-09-09** |
| **iPhone 16 128GB** | **$799** |

## Comparison with A16 Bionic / A17 Pro / A18 Pro

| Metric | A18 | A16 Bionic | A17 Pro | A18 Pro |
|--------|-----|------------|---------|---------|
| Process | 3nm N3E | 4nm N4P | 3nm N3B | 3nm N3E |
| Transistors | 15.2B | 16B | 19B | 20B |
| CPU Cores | 6 (2P+4E) | 6 (2P+4E) | 6 (2P+4E) | 6 (2P+4E) |
| CPU Frequency | 4.04 GHz | 3.46 GHz | 3.78 GHz | 4.04 GHz |
| GPU Cores | **5** | 5 | 6 | 6 |
| Hardware RT | **Yes** | No | Yes | Yes (2× A17 Pro) |
| Neural Engine | 35 TOPS | 17 TOPS | 35 TOPS | 35 TOPS |
| Memory | 8 GB | 6 GB | 8 GB | 8 GB |
| Memory Bandwidth | +17% vs A16 | Baseline | Baseline | +17% |
| USB | USB 2.0 | Lightning | USB 3 | USB 3 |
| Single-core | +30% vs A16 | Baseline | +10% vs A16 | +15% vs A17 Pro |
| GPU Performance | +40% vs A16 | Baseline | Baseline | +20% vs A17 Pro |

## On-Device AI Performance

| Model / Task | Quantization | Performance | Notes |
|-------------|------|------|------|
| **Apple Intelligence on-device 3B LLM** | Apple built-in | ~20+ tok/s | iPhone 16 end-to-end |
| **Siri local enhancements** | Apple built-in | Real-time | iOS 18 on-device |
| **Image Playground image generation** | Apple built-in | < 2s | On-device Diffusion |
| **Visual Intelligence object recognition** | Apple built-in | Real-time | Camera + LLM |
| Llama 3.1 8B (Q4_K_M) | llama.cpp | ~12 tok/s | Fits in 8GB |
| Stable Diffusion XL (CoreML) | FP16 | ~0.7 it/s | Image generation |
| Whisper Large V3 (CoreML) | FP16 | 2× real-time | Speech transcription |

> **MacBook Neo Special Variant**: On 2025-02-19, Apple unusually placed the **A18 5-core GPU** inside the **MacBook Neo** (12-inch entry-level MacBook, positioned below the Apple Silicon MacBook Air), starting at **$599**. The MacBook Neo is Apple's **first** notebook powered by an A-series chip, blurring the line between iPhone and MacBook.

## Use Cases

- **iPhone 16** ($799, 6.1" OLED 60Hz, dual camera, mainstream model)
- **iPhone 16 Plus** ($899, 6.7" OLED 60Hz, large-screen model)
- **iPhone 16e** (2025-02, $599, 6.1" OLED 60Hz, 4-core GPU entry variant)
- **MacBook Neo** (2025-02, starting $599, 12-inch, A18 5-core GPU, Apple Silicon entry-level notebook)
- **Apple Intelligence** (iOS 18 on-device 3B LLM)
- **Mobile gaming** (hardware ray tracing first on non-Pro models)
- **Developer**: Core ML model deployment

## Vendor Information

| Item | Information |
|------|-------------|
| **Vendor** | Apple Inc. |
| **Design** | Apple in-house (Cupertino, CA) |
| **Fab** | **TSMC Taiwan** (3nm N3E line) |
| **Software Stack** | iOS 18, iPadOS 18, macOS 15 (Sequoia) |
| **AI Framework** | Core ML, MLX, Create ML, Apple Intelligence |
| **Launch Price** | iPhone 16 128GB **$799** / 256GB $899 / 512GB $1,099 |
| **iPhone 16e Price** | 128GB **$599** / 256GB $699 / 512GB $899 |
| **MacBook Neo Price** | 12" 256GB **$599** / 512GB $799 |

## Key Features

- **2nd-gen 3nm (N3E)** process, **15.2 billion transistors**
- **5-core GPU + hardware ray tracing** (first on non-Pro)
- **16-core Neural Engine 35 TOPS** (2× A16)
- **8 GB LPDDR5** (1.3× A16's 6 GB)
- **17% memory bandwidth increase** (vs A16)
- **Full Apple Intelligence support** (on-device 3B LLM)
- **Wi-Fi 6** (iPhone 16/Plus still Wi-Fi 6, unlike Pro's Wi-Fi 6E/7)
- **5G sub-6 + mmWave**, **Thread**
- **48MP Fusion camera** (iPhone 16/Plus)
- **12MP front camera** + **Action Button** + **Camera Control Button**
- **USB 2.0** (Lightning port limitation, 480 Mbps)

## Related Cards

- [Apple A18 Pro (iPhone 16 Pro)](./apple-a18-pro) — Same-gen flagship
- [Apple A19 (iPhone 17)](./apple-a19) — Successor
- [Apple A17 Pro (iPhone 15 Pro)](./apple-a17-pro) — Previous-gen 3nm debut
- [Apple M1 Pro (MacBook Pro 2021)](./apple-m1-pro) — Desktop class
- [Apple A16 Bionic (2022)](https://en.wikipedia.org/wiki/Apple_A16) — Previous gen
- [Architecture: NPU Mobile SoC](../../architectures/arch-npu) — NPU category
- [Qualcomm Snapdragon X Elite (PC chip)](./qualcomm-snapdragon-x-elite) — Same-gen competitor
- [MediaTek Dimensity 9400 (2024 mobile flagship)](./mediatek-dimensity-9400) — Same-gen competitor
