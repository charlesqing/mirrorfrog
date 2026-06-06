---
id: apple-a19-pro
title: Apple A19 Pro (iPhone 17 Pro 35+ TOPS On-Device LLM)
sidebar_label: A19 Pro
description: "Apple A19 Pro detailed specifications: 3nm N3P, 6-core CPU + 6-core GPU (Neural Accelerators) + 16-core NE 35+ TOPS, iPhone 17 Pro Max, Apple Intelligence on-device 3B LLM 30+ tok/s."
keywords: [Apple A19 Pro, A19 Pro, iPhone 17 Pro, Neural Engine 35 TOPS, Apple Intelligence, on-device LLM, 3nm N3P]
---

# Apple A19 Pro (iPhone 17 Pro On-Device AI Flagship)

## Overview

**Apple A19 Pro** is Apple's flagship smartphone SoC for the iPhone 17 Pro / Pro Max, released **2025-09-09**, codename **Thera**. Built on **TSMC 3rd-gen 3nm (N3P)**, it features a **6-core CPU** (2P @ 4.26 GHz + 4E @ 2.6 GHz), **6-core GPU** (each core with integrated **Neural Accelerators**), **16-core Neural Engine** (4× peak compute vs A18 Pro), and **12 GB LPDDR5X unified memory**. Paired with Apple's **laser-welded vapor chamber** cooling, sustained CPU+GPU performance is up **40%** over the A18 Pro. The iPhone 17 Pro maintains **30+ tok/s** inference when running large models continuously (e.g., Apple Intelligence on-device 3B LLM), making it **Apple's most power-efficient iPhone AI chip ever**.

## Core Specifications

| Item | Parameter |
|------|-----------|
| **Architecture** | Apple A-Series (iPhone mobile SoC) |
| **Process** | TSMC **3rd-gen 3nm (N3P)** |
| **Transistors** | ~19 billion (estimated) |
| **CPU Cores** | 6 (2P @ 4.26 GHz + 4E @ 2.6 GHz) |
| **L1/L2/L3 Cache** | 1.4 MB L1 / 22 MB L2 / 32 MB SLC |
| **GPU Cores** | 6 (iPhone Air uses 5-core variant) |
| **GPU Clock** | 1620 MHz |
| **GPU New Features** | Per-core **Neural Accelerators** (4× A18 Pro peak compute), hardware ray tracing, Dynamic Caching 2.0 |
| **Neural Engine** | **16-core**, improved memory bandwidth |
| **Neural Engine Compute** | ~35 TOPS INT8 (estimated; A18 Pro 35 TOPS, claimed 4× from Neural Accel) |
| **Unified Memory** | **12 GB LPDDR5X** (iPhone Air also 12 GB) |
| **Media Engine** | Hardware H.264/HEVC/ProRes/ProRes RAW/AV1 decode, hardware ray tracing |
| **Interface** | USB 3.2 Gen 2 (10 Gbps) |
| **Cooling** | **Apple laser-welded vapor chamber** (unibody aluminum) |
| **TDP** | ~8-10 W (iPhone sustained load) |
| **Launch Devices** | iPhone 17 Pro / Pro Max (6-core GPU), iPhone Air (5-core GPU) |
| **Launch Date** | **2025-09-09** |
| **iPhone 17 Pro 256GB** | **$1,099** |

## Comparison with A18 Pro

| Metric | A19 Pro | A18 Pro | Improvement |
|--------|---------|---------|-------------|
| Process | 3nm N3P | 3nm N3 | 3rd-gen 3nm, better yield |
| CPU Cores | 6 (2P+4E) | 6 (2P+4E) | Same |
| CPU Max Frequency | 4.26 GHz | 4.04 GHz | +5% |
| GPU Cores | 6 + 6 Neural Accel | 6 | +Neural Accel |
| GPU Compute (INT8) | 4× A18 Pro (from NA) | Baseline | **4×** |
| Neural Engine | 16-core + bandwidth boost | 16-core | Memory bandwidth boost |
| L3 SLC | 32 MB | 16 MB | 2× |
| Sustained Performance | +40% (vapor chamber) | Baseline | Significant |
| Process Node | N3P | N3 | 3rd gen |
| Price (Pro 256GB) | $1,099 | $999 | +$100 |

## On-Device AI Performance Benchmarks

| Model / Task | Quantization | Performance | Notes |
|-------------|------|------|------|
| **Apple Intelligence on-device 3B LLM** | Apple built-in | ~30+ tok/s | Fully NPU+GPU cooperative |
| **Siri local enhancements** | Apple built-in | Real-time | iOS 26 on-device |
| **Image Playground image generation** | Apple built-in | < 1s | On-device Diffusion |
| **Visual Intelligence object recognition** | Apple built-in | Real-time | Camera + LLM |
| Llama 3.1 8B (Q4_K_M) | llama.cpp | ~20 tok/s | Third-party benchmark |
| Stable Diffusion XL (CoreML) | FP16 | ~1.5 it/s | Image generation |
| Whisper Large V3 (CoreML) | FP16 | 3× real-time | Speech transcription |

> **Neural Accelerators Innovation**: The A19 Pro is the first to integrate **AI accelerators inside each GPU core**, rather than relying solely on the standalone 16-core NPU. This means LLM/Diffusion inference can simultaneously leverage **GPU compute units + NA matrix units + NE 16 cores** — three parallel engines — delivering a theoretical peak compute of up to **4×** the A18 Pro.

## Use Cases

- **iPhone 17 Pro / Pro Max** premium mobile AI (Apple Intelligence, Siri, Visual Intelligence)
- **iPhone Air** (5-core GPU variant, released 2025-09, thinnest iPhone at 6.6mm)
- **On-device LLM inference** (Apple Foundation Models 3B, Qwen 2.5, etc.)
- **Image/video generation** (Image Playground, Genmoji, Procreate AI)
- **Developer**: Core ML + MLX framework local model deployment
- **Education / Enterprise**: On-device privacy AI (no cloud transmission)

## Vendor Information

| Item | Information |
|------|-------------|
| **Vendor** | Apple Inc. |
| **Design** | Apple in-house (Cupertino, CA) |
| **Fab** | **TSMC Taiwan** (3nm N3P line) |
| **Software Stack** | iOS 26 / iPadOS 26 / macOS 26 (Tahoe) |
| **AI Framework** | Core ML, MLX, Create ML, Apple Intelligence |
| **Launch Price** | iPhone 17 Pro 256GB **$1,099** / 512GB $1,299 / 1TB $1,599 |
| **Pro Max Price** | 256GB $1,199 / 2TB $1,999 |

## Key Features

- **3rd-gen 3nm (N3P)** process, Apple's first N3P chip
- **6-core GPU + integrated Neural Accelerators** (per-core matrix units)
- **16-core Neural Engine** + improved memory bandwidth
- **32 MB SLC system-level cache** (2× A18 Pro)
- **Laser-welded vapor chamber** (unibody aluminum)
- **USB 3.2 Gen 2** (10 Gbps) wired transfer
- **Wi-Fi 7**, **5G mmWave**, **Thread** smart home
- **ProMotion 120 Hz**, **Always-On Display**, **Ceramic Shield 2** (3× scratch resistance)
- **48MP triple camera + 8× optical zoom** (longest ever on Pro Max)
- **18MP Center Stage** front camera + **ProRes RAW** + **Apple Log 2** + **genlock** cinema-grade features

## Related Cards

- [Apple A18 Pro (iPhone 16 Pro 35 TOPS NE)](./apple-a18-pro) — Previous gen (2024-09)
- [Apple M4 Max (128GB UMA workstation)](./apple-m4-max) — Desktop class
- [Apple M3 Max (128GB UMA)](./apple-m3-max) — Previous-gen desktop
- [Apple M-Series Overview](./apple-m-series) — M-series comparison table
- [Qualcomm AI 200 / 300 (Cloud AI inference)](./qualcomm-ai-200) — Mobile + cloud
- [NVIDIA Jetson Thor (Robotics SoC)](../nvidia/jetson-thor) — Edge AI
- [Samsung / MediaTek mobile SoC architectures](../../architectures/arch-npu) — NPU category
