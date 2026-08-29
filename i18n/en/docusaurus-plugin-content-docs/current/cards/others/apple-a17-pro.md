---
id: apple-a17-pro
title: Apple A17 Pro (iPhone 15 Pro, First 3nm Hardware Ray Tracing)
sidebar_label: A17 Pro
description: "Apple A17 Pro detailed specifications: first 3nm N3B, 6-core CPU + 6-core GPU (hardware ray tracing) + 16-core NE 35 TOPS, iPhone 15 Pro Max, 8GB LPDDR5, AV1 decode."
keywords: [Apple A17 Pro, A17 Pro, iPhone 15 Pro, 3nm N3B, hardware ray tracing, 35 TOPS NE, USB 3, AV1]
---

# Apple A17 Pro (iPhone 15 Pro, First 3nm)

## Overview

**Apple A17 Pro** is Apple's SoC for **iPhone 15 Pro / Pro Max**, released on **2023-09-12**. It is the **world's first 3nm smartphone chip** (TSMC **N3B**), with **19 billion transistors**. Features include a **6-core CPU** (2P @ 3.78 GHz + 4E), **6-core GPU** (first **hardware ray tracing** on iPhone), **16-core Neural Engine 35 TOPS**, **8 GB LPDDR5**, **USB 3** (10 Gbps, farewell Lightning limitations), and **AV1 hardware decode**. The A17 Pro is the **first** time Apple brings ProRes hardware acceleration, hardware ray tracing, and AV1 decode to iPhone, making it the mobile gaming king (capable of running AAA titles like _Resident Evil 4_ and _Assassin's Creed Mirage_).

## Core Specifications

| Item | Parameter |
|------|-----------|
| **Architecture** | Apple A-Series (iPhone mobile SoC) |
| **Process** | TSMC **3nm (N3B)** — **world's first 3nm chip** |
| **Transistors** | **19 billion** (1.2× A16's 16 billion) |
| **CPU Cores** | 6 (2P @ 3.78 GHz + 4E) |
| **L1/L2/L3 Cache** | 1.4 MB L1 / 16 MB L2 / 24 MB SLC |
| **GPU Cores** | 6 (**first hardware ray tracing**) |
| **GPU New Features** | **Hardware ray tracing**, Dynamic Caching, Mesh Shading |
| **Neural Engine** | 16-core, **35 TOPS INT8** (2× A16's 17 TOPS) |
| **Unified Memory** | **8 GB LPDDR5** |
| **Memory Bandwidth** | ~51.2 GB/s (8 GB @ 6400 MT/s) |
| **Media Engine** | Hardware H.264/HEVC/ProRes/ProRes RAW/AV1 decode |
| **ProRes** | **First hardware-accelerated ProRes encode/decode on iPhone** |
| **Interface** | **USB 3** (10 Gbps, farewell Lightning USB 2.0) |
| **TDP** | ~8-10 W (iPhone sustained load) |
| **Launch Devices** | iPhone 15 Pro / Pro Max (starting $999/$1,199) |
| **Launch Date** | **2023-09-12** |
| **iPhone 15 Pro 128GB** | **$999** |
| **iPhone 15 Pro Max 256GB** | **$1,199** |

## Comparison with A16 Bionic

| Metric | A17 Pro | A16 Bionic | Improvement |
|--------|---------|------------|-------------|
| Process | **3nm N3B** | 4nm N4P | World's first 3nm |
| Transistors | **19 billion** | 16 billion | +19% |
| CPU Cores | 6 (2P+4E) | 6 (2P+4E) | Same |
| CPU Frequency | 3.78 GHz | 3.46 GHz | +9% |
| GPU Cores | 6 + **HW ray tracing** | 5 | +1 core + ray tracing |
| Neural Engine | **35 TOPS** | 17 TOPS | **2.1×** |
| Memory | 8 GB LPDDR5 | 6 GB LPDDR5 | +2 GB |
| Interface | **USB 3 (10 Gbps)** | Lightning USB 2.0 | 21× faster |
| AV1 Decode | **Supported** | Not supported | All new |
| ProRes | **Hardware accelerated** | Software | Cinematic grade |
| Single-core | +10% | Baseline | Improved |
| Multi-core | +12% | Baseline | Improved |

## On-Device AI Performance

| Model / Task | Quantization | Performance | Notes |
|-------------|------|------|------|
| Llama 2 7B (Q4_K_M) | llama.cpp | ~10 tok/s | Fits in 8GB |
| Stable Diffusion XL (CoreML) | FP16 | 0.8 it/s | Image generation |
| Whisper Large V3 (CoreML) | FP16 | 2× real-time | Speech transcription |
| Live Translation | Apple built-in | Real-time | iOS 17 |
| Image Segmentation (Person Seg) | CoreML | 60 FPS | Video conferencing |
| Object Recognition (VNCoreML) | CoreML | 120 FPS | Camera |

> **35 TOPS Breakthrough**: The A17 Pro's Neural Engine delivers **2.1×** the compute of the A16, making it the first iPhone capable of **35 TOPS**-level on-device AI inference. While still below the M2/M3 series, it comfortably runs **7B quantized LLMs**.

## Use Cases

- **iPhone 15 Pro / Pro Max** (AAA mobile gaming: _Resident Evil 4_, _Assassin's Creed Mirage_, _Genshin Impact_ max settings)
- **Mobile video production** (external SSD ProRes LOG recording)
- **3D modeling & AR** (Reality Composer, ARKit)
- **Professional photography** (48MP ProRAW, 5× telephoto periscope)
- **Developer**: Core ML model deployment
- **On-device LLM inference** (llama.cpp running 7B quantized)

## Vendor Information

| Item | Information |
|------|-------------|
| **Vendor** | Apple Inc. |
| **Design** | Apple in-house (Cupertino, CA) |
| **Fab** | **TSMC Taiwan** (3nm N3B line, world's first 3nm) |
| **Software Stack** | iOS 17 — iOS 18 |
| **AI Framework** | Core ML, MLX, Create ML |
| **Launch Price** | iPhone 15 Pro 128GB **$999** / 256GB $1,099 |
| **iPhone 15 Pro Max Price** | 256GB **$1,199** / 512GB $1,399 / 1TB $1,599 |
| **Discontinued** | 2024-09 (A18 Pro launch) |
| **EOL Price** | Discontinued, used market $500-$700 |

## Key Features

- **3nm (N3B) process** — **world's first 3nm chip** (six months ahead of Qualcomm)
- **19 billion transistors** (1.2× A16's 16 billion)
- **6-core GPU + hardware ray tracing** (first on iPhone)
- **16-core Neural Engine 35 TOPS** (2.1× A16)
- **8 GB LPDDR5** (1.3× A16's 6 GB)
- **USB 3 (10 Gbps)** (farewell Lightning USB 2.0 limits)
- **ProRes hardware acceleration** (cinematic-grade video production)
- **AV1 hardware decode** (streaming power efficiency)
- **Wi-Fi 6E**, **5G sub-6 + mmWave**, **Thread**
- **ProMotion 120 Hz**, **Always-On Display**
- **Titanium frame** (iPhone 15 Pro Max lightest Pro Max ever)
- **Action Button** (replaces mute switch)
- **48MP ProRAW + 5× periscope telephoto** (Pro Max)

## Related Cards

- [Apple A18 Pro (iPhone 16 Pro)](/docs/cards/others/apple-a18-pro) — Successor
- [Apple A19 Pro (iPhone 17 Pro)](/docs/cards/others/apple-a19-pro) — Next generation
- [Apple M3 Pro / Max (MacBook Pro 2023)](/docs/cards/others/apple-m3-max) — Desktop class
- [Apple M2 Pro (Mac mini 2023)](/docs/cards/others/apple-m4-pro) — Desktop class
- [Architecture: NPU Mobile SoC](/docs/architectures/arch-npu) — NPU category
- [Qualcomm Snapdragon 8 Gen 3 (2023 Mobile)](https://www.qualcomm.com/) — Same-gen competitor
- [MediaTek Dimensity 9300 (2023 Mobile)](https://www.mediatek.com/) — Same-gen competitor
