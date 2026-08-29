---
id: apple-a19
title: Apple A19 (iPhone 17 Entry-Level AI Chip)
sidebar_label: A19
description: "Apple A19 detailed specifications: 3nm N3P, 6-core CPU + 5-core GPU (Neural Accelerators) + 16-core NE, 8 GB LPDDR5X, iPhone 17/17e, Apple Intelligence."
keywords: [Apple A19, A19, iPhone 17, 5-core GPU, 8 GB RAM, 3nm N3P, Apple Intelligence]
---

# Apple A19 (iPhone 17 Entry-Level SoC)

## Overview

**Apple A19** (codename **Tilos**) is Apple's SoC for **iPhone 17** (5-core GPU standard) and **iPhone 17e** (4-core GPU entry variant), released **2025-09-09**. Built on **TSMC 3rd-gen 3nm (N3P)**, it features a **6-core CPU** (2P @ 4.26 GHz + 4E @ 2.6 GHz), **5-core GPU** (each core with integrated **Neural Accelerators**), **16-core Neural Engine** (improved memory bandwidth), and **8 GB LPDDR5X**. Compared to the A18, performance is up ~20%, GPU compute up ~40% (from Neural Accel), and the iPhone 17 runs Apple Intelligence's on-device 3B LLM continuously. It is the latest generation of Apple's **5-core GPU** A-series, with 1 fewer GPU core / half the SLC / less memory (8 vs 12 GB) compared to the A19 Pro.

## Core Specifications

| Item | Parameter |
|------|-----------|
| **Architecture** | Apple A-Series (iPhone mobile SoC) |
| **Process** | TSMC **3rd-gen 3nm (N3P)** |
| **Transistors** | ~15 billion (estimated) |
| **CPU Cores** | 6 (2P @ 4.26 GHz + 4E @ 2.6 GHz) |
| **L1/L2/L3 Cache** | 1.4 MB L1 / 12 MB L2 / 12 MB SLC |
| **GPU Cores** | 5 (iPhone 17 standard) / 4 (iPhone 17e entry) |
| **GPU Clock** | 1620 MHz |
| **GPU New Features** | Per-core **Neural Accelerators** (4× A18 peak compute), hardware ray tracing, Dynamic Caching 2.0 |
| **Neural Engine** | **16-core**, improved memory bandwidth |
| **Neural Engine Compute** | ~35 TOPS INT8 (estimated; Neural Accel 4× from GPU compute) |
| **Unified Memory** | **8 GB LPDDR5X** |
| **Memory Bandwidth** | ~51.2 GB/s (8 GB @ 6400 MT/s) |
| **Media Engine** | Hardware H.264/HEVC/ProRes/ProRes RAW/AV1 decode, hardware ray tracing |
| **Interface** | USB 2.0 (Lightning port limitation) |
| **TDP** | ~8 W (iPhone sustained load) |
| **Launch Devices** | iPhone 17 (5-core GPU, from $799), iPhone 17e (4-core GPU, from $599) |
| **Launch Date** | **2025-09-09** |
| **iPhone 17 256GB** | **$799** |

## Comparison with A18 / A19 Pro

| Metric | A19 (iPhone 17) | A18 (iPhone 16) | A19 Pro (iPhone 17 Pro) |
|--------|-----------------|-----------------|-------------------------|
| Process | 3nm N3P | 3nm N3 | 3nm N3P |
| CPU Cores | 6 (2P+4E) | 6 (2P+4E) | 6 (2P+4E) |
| CPU Frequency | 4.26 GHz | 3.9 GHz | 4.26 GHz |
| GPU Cores | **5** | 5 | **6** |
| GPU Neural Accel | **Yes (4× A18 compute)** | No | **Yes (4× A18 Pro compute)** |
| Neural Engine | 16-core + bandwidth boost | 16-core | 16-core + bandwidth boost |
| L3 SLC | 12 MB | 8 MB | 32 MB |
| Unified Memory | **8 GB** | 8 GB | 12 GB |
| Cooling | Standard aluminum | Standard aluminum | **Laser-welded vapor chamber** |
| Sustained Performance | +20% vs A18 | Baseline | +40% vs A18 Pro |
| Price (base) | $799 (256GB) | $799 (128GB) | $1,099 (256GB) |

## On-Device AI Performance

| Model / Task | Quantization | Performance | Notes |
|-------------|------|------|------|
| **Apple Intelligence on-device 3B LLM** | Apple built-in | ~25+ tok/s | Fully NPU+GPU cooperative |
| **Siri local enhancements** | Apple built-in | Real-time | iOS 26 on-device |
| **Image Playground image generation** | Apple built-in | < 1.5s | On-device Diffusion |
| **Visual Intelligence object recognition** | Apple built-in | Real-time | Camera + LLM |
| Llama 3.1 8B (Q4_K_M) | llama.cpp | ~15 tok/s | Third-party benchmark |
| Stable Diffusion XL (CoreML) | FP16 | ~1.0 it/s | Image generation |
| Whisper Large V3 (CoreML) | FP16 | 2.5× real-time | Speech transcription |

> **5-core GPU Performance Balance**: Compared to the A19 Pro's 6-core GPU, the A19's 5-core GPU loses about **15-20%** performance in GPU-intensive LLM inference scenarios, but the iPhone 17 costs **$300 less** ($799 vs $1,099), offering better value.

## Use Cases

- **iPhone 17 standard** ($799, 6.1" OLED 120Hz, dual camera)
- **iPhone 17e entry** ($599, 6.1" OLED 60Hz, single camera, spring 2026)
- **Daily AI** (Siri, Visual Intelligence, image generation)
- **Mobile gaming** (GPU performance sufficient for AAA mobile titles)
- **On-device LLM inference** (Apple Foundation Models 3B)
- **Education / student market** ($599 entry price)
- **Replacement for iPhone 15 / 16** (4-year upgrade cycle)

## Vendor Information

| Item | Information |
|------|-------------|
| **Vendor** | Apple Inc. |
| **Design** | Apple in-house (Cupertino, CA) |
| **Fab** | **TSMC Taiwan** (3nm N3P line) |
| **Software Stack** | iOS 26 |
| **AI Framework** | Core ML, MLX, Create ML, Apple Intelligence |
| **Launch Price** | iPhone 17 256GB **$799** / 512GB $899 |
| **iPhone 17e Price** | 128GB **$599** / 256GB $699 / 512GB $899 |
| **Made in India** | Foxconn India Sriperumbudur plant (partial iPhone 17) |

## Key Features

- **3rd-gen 3nm (N3P)** process, improved power efficiency
- **5-core GPU + integrated Neural Accelerators** (per-core matrix units)
- **16-core Neural Engine** + improved memory bandwidth
- **12 MB SLC system-level cache**
- **USB 2.0** limitation (Lightning port, 480 Mbps transfer)
- **Wi-Fi 7**, **5G mmWave**, **Thread** smart home
- **ProMotion 120 Hz** (iPhone 17) / 60 Hz (iPhone 17e)
- **Ceramic Shield 2** (3× scratch resistance)
- **48MP dual camera** (iPhone 17: 48MP Main + 12MP Ultra Wide)
- **18MP Center Stage** front camera
- **Action Button** (replaces mute switch)
- **Camera Control Button** (quick capture)

## Related Cards

- [Apple A18 Pro (iPhone 16 Pro 35 TOPS NE)](/docs/cards/others/apple-a18-pro) — Previous gen
- [Apple A19 Pro (iPhone 17 Pro)](/docs/cards/others/apple-a19-pro) — Same-gen flagship
- [Apple M4 Pro (64GB UMA workstation)](/docs/cards/others/apple-m4-pro) — Desktop class
- [Apple A17 Pro (iPhone 15 Pro 3nm)](/docs/cards/others/apple-a17-pro) — Previous-gen 3nm debut
- [Architecture: NPU Mobile SoC](/docs/architectures/arch-npu) — NPU category
- [Qualcomm AI 200 / 300 (Cloud AI inference)](/docs/cards/others/qualcomm-ai-200) — Competitor
- [NVIDIA Jetson Thor (Robotics SoC)](/docs/cards/nvidia/jetson-thor) — Edge AI
