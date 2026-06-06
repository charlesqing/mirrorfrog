---
id: apple-a18-pro
title: Apple A18 Pro (Mobile NPU 35 TOPS, iPhone 16 Pro)
sidebar_label: A18 Pro
description: "Apple A18 Pro detailed specifications: 3nm, 6-core CPU, 6-core GPU, 35 TOPS NPU, iPhone 16 Pro, Apple Intelligence on-device LLM."
keywords: [Apple A18 Pro, A18 Pro, 35 TOPS, iPhone 16 Pro, Apple Intelligence, on-device LLM, 3nm]
---

# Apple A18 Pro (Mobile NPU 35 TOPS, iPhone 16 Pro)

## Overview

**Apple A18 Pro** is the SoC for Apple's **iPhone 16 Pro / Pro Max**, released **2024-09-09**. Built on **TSMC 2nd-gen 3nm (N3E)** with a **6-core CPU** (2P + 4E), **6-core GPU**, **16-core Neural Engine 35 TOPS**, and **8GB LPDDR5X unified memory**. Performance is **15-20%** up over A17 Pro, with Neural Engine **+20%**. **Apple Intelligence on-device LLM (3B parameters)** runs entirely on the A18 Pro, making it the **industry's most powerful on-device AI chip**.

**Key positioning**:
- **A18** (iPhone 16): 6-core CPU (2P+4E), 5-core GPU, 16-core NE 35 TOPS
- **A18 Pro** (iPhone 16 Pro/Pro Max): **6-core CPU + 6-core GPU + 35 TOPS NE** (**double Pro GPU**)
- **A18 Pro vs A17 Pro**: CPU +15%, GPU +20%, NE +20%, power efficiency -20%
- **Apple Intelligence**: 3B LLM on-device inference (iPhone 16 series + M1+ Mac devices only)

## Core Specifications

| Item | Parameter |
|------|-----------|
| **Architecture** | Apple Silicon (A18 Pro, mobile SoC) |
| **Process** | **TSMC 2nd-gen 3nm (N3E)** |
| **Transistors** | **~20 billion** |
| **CPU Cores** | **6 (2P + 4E)** |
| **CPU Max Frequency** | **4.05 GHz** (P-core, **highest mobile CPU frequency in the industry**) |
| **GPU Cores** | **6** (**double Pro**, vs A18 5-core) |
| **Neural Engine** | **16-core, 35 TOPS** (A17 Pro 35 TOPS, **+0%** nominal but +20% real multi-task) |
| **Unified Memory** | **8GB LPDDR5X** |
| **Memory Bandwidth** | **51.2 GB/s** |
| **Storage** | NVMe (128GB / 256GB / 512GB / 1TB) |
| **Display Engine** | **ProMotion 120Hz** + **Always-On Display** |
| **Media Engine** | Hardware H.264/HEVC/ProRes/AV1 **encode + decode** |
| **ISP** | **2nd-gen 48MP** + ProRAW |
| **TDP** | **~8-10W** (**one of the most power-efficient AI chips**) |
| **Launch** | iPhone 16 Pro / Pro Max 2024-09-20 |
| **Price (iPhone 16 Pro 256GB)** | **$1,099** |

## Comparison with A17 Pro

| Metric | A18 Pro (2024-09) | A17 Pro (2023-09) | Improvement |
|--------|---------------------|---------------------|------|
| Process | **TSMC N3E** | TSMC N3 | 2nd-gen 3nm |
| CPU Cores | 6 (2P+4E) | 6 (2P+4E) | Same |
| CPU Frequency | **4.05 GHz** | 3.78 GHz | +7% |
| CPU Performance | **+15% (single-core)** / +20% (multi-core) | Baseline | Significant |
| GPU Cores | 6 | 6 | Same |
| GPU Performance | **+20%** | Baseline | Significant |
| Ray Tracing Performance | **+2x** | Baseline | Significant |
| Neural Engine | 35 TOPS | 35 TOPS | Same TOPS, multi-task +20% |
| Memory | 8GB LPDDR5X | 8GB LPDDR5 | Slight upgrade |
| Bandwidth | 51.2 GB/s | 51.2 GB/s | Same |
| Power Efficiency | **-20%** | Baseline | Significant |

## Apple Intelligence On-Device LLM

| Dimension | Spec |
|------|------|
| **Model** | **Apple Foundation Model 3B** (3 billion parameters) |
| **Architecture** | In-house Transformer (Llama-like) |
| **Quantization** | 2-bit / 4-bit mixed quantization (**2.5 GB model size**) |
| **Runtime Memory** | **2.5 GB** (A18 Pro 8GB sufficient) |
| **Performance** | **~30 tok/s** (on-device LLM inference) |
| **Latency** | **< 100ms TTFT** |
| **Battery Impact** | **< 5% per hour** (basic queries) |
| **Offline Operation** | **Fully offline** (no cloud) |

> **Apple Intelligence key point**: **3B model + 2-bit quantization = 2.5GB**, **A18 Pro 8GB memory fits it**, and **30 tok/s on-device inference** is the **industry's first phone-level LLM real-time generation**.

## Apple Intelligence Features

| Feature | On-Device/Cloud | Model |
|------|------------|------|
| **Writing Tools** (rewrite/proofread/summarize) | On-device 3B | 30 tok/s |
| **Image Playground** (image generation) | On-device + Cloud Diffusion | SDXL distilled |
| **Genmoji** (generated emoji) | On-device 3B | < 1s |
| **Siri intelligent Q&A** | On-device 3B | 30 tok/s |
| **Mail / Notification summaries** | On-device 3B | Instant |
| **Photo recognition** (pets / plants) | On-device 3B | Real-time |
| **Photo Memories** (memory videos) | Cloud Diffusion | Cloud |
| **ChatGPT integration** | Cloud GPT-4o | Cloud |

## Neural Engine 35 TOPS Performance

| Task | A18 Pro NE | A17 Pro NE | Improvement |
|------|-------------|-------------|------|
| **Core ML inference** | 35 TOPS | 35 TOPS | Same |
| **Multi-task parallel** | 8x models simultaneous | 6x models | +33% |
| **Image recognition** (ResNet-50) | < 1ms | 1.2ms | +20% |
| **Speech recognition** (Whisper 1B) | ~5x real-time | ~4x real-time | +25% |
| **Stable Diffusion 1.5** (1 step) | ~0.8 sec | 1.0 sec | +25% |
| **LLM 3B inference** | 30 tok/s | 25 tok/s | +20% |

> **A18 Pro 35 TOPS** is the **strongest NPU in iPhone history** and the **industry's most powerful mobile AI chip** (Qualcomm Snapdragon 8 Gen 3 has 45 TOPS but 7-8W TDP vs A18 Pro 8-10W; Apple NE achieves higher effective utilization).

## GPU 6-Core + Hardware Ray Tracing

| Dimension | A18 Pro 6-core | A17 Pro 6-core | Improvement |
|------|---------------|---------------|------|
| Core Count | 6 | 6 | Same |
| Performance | +20% | Baseline | Significant |
| Hardware Ray Tracing | **+2x** | Baseline | Significant |
| Hardware Mesh Shading | **+50%** | Baseline | Significant |
| **AAA Games** (e.g. Death Stranding, Resident Evil) | Smooth 30fps | Borderline 30fps | Significant |

## Vendor Information

| Item | Details |
|------|------|
| **Vendor** | Apple Inc. |
| **Product** | **iPhone 16 Pro** / **iPhone 16 Pro Max** |
| **Release Date** | 2024-09-09 (Apple Wonderlust 2024) |
| **Availability** | 2024-09-20 |
| **Launch Starting Price** | iPhone 16 Pro 128GB: $999 / 256GB: $1,099 / 512GB: $1,299 / 1TB: $1,499 |
| **Fab** | TSMC N3E (**TSMC 3nm 2nd-gen**) |
| **Packaging** | TSMC InFO_SoC (**Apple co-designed**) |
| **Target Market** | Consumer / premium smartphones |

## Apple A18 Pro vs Qualcomm Snapdragon 8 Gen 3

| Metric | Apple A18 Pro | Qualcomm Snapdragon 8 Gen 3 |
|------|----------------|--------------------------------|
| **CPU Cores** | 6 (2P+4E) | 8 (1+5+2) |
| **CPU Frequency** | 4.05 GHz | 3.3 GHz |
| **GPU** | Apple 6-core | Adreno 750 |
| **NPU** | 35 TOPS | 45 TOPS |
| **TDP** | 8-10W | 7-8W |
| **Memory** | 8GB LPDDR5X | 16GB LPDDR5X |
| **Efficiency (CPU perf/W)** | Industry-leading | Slightly lower |
| **Efficiency (NPU TOPS/W)** | **4.4 TOPS/W** | **5.6 TOPS/W** | SD 8G3 wins here |
| **AI On-Device LLM** | Apple Intelligence 3B | Snapdragon AI 2.5B |
| **Price** | $999+ (iPhone) | $500+ (Android) |

> **A18 Pro advantages**: **single-core CPU +30%** (4.05 GHz vs 3.3 GHz), **Apple Intelligence on-device LLM 3B** (SD 8G3 only 2.5B), **efficiency optimization** (Apple iOS deep integration).
> **SD 8G3 advantages**: **NPU 45 TOPS** (vs A18 Pro 35 TOPS), **memory 16GB** (vs A18 Pro 8GB), **multi-vendor Android choice**.

## Use Cases

- iPhone 16 Pro / Pro Max (ProRes video, ProRAW photography, AAA games)
- Apple Intelligence on-device LLM (3B model 30 tok/s)
- iOS 18 intelligence (mail summaries, photo recognition, writing tools)
- AAA gaming (Death Stranding, Assassin's Creed with ray tracing)
- Vision Pro developer (visionOS 2 compatible)
- Not suitable for: datacenters (mobile SoC)
- Not suitable for: Android deployment (Apple devices only)
- Not suitable for: training (inference only)

## Apple A-Series Evolution (Recent 4 Generations)

| Generation | Release | Process | CPU Cores | GPU Cores | NE | NPU TOPS | Memory |
|------|------|------|--------|--------|-----|----------|------|
| A15 Bionic | 2021-09 | 5nm | 6 (2+4) | 4-5 | 16-core | 15.8 | 4-6GB |
| A16 Bionic | 2022-09 | 4nm | 6 (2+4) | 5 | 16-core | 17 | 6GB |
| A17 Pro | 2023-09 | 3nm | 6 (2+4) | 6 | 16-core | 35 | 8GB |
| **A18 Pro** | **2024-09** | **3nm N3E** | **6 (2+4)** | **6** | **16-core** | **35** | **8GB** |

> **A18 Pro key improvements**: **N3E process** (2nd-gen 3nm) + **power efficiency -20%** + **GPU ray tracing +2x** + **CPU frequency 4.05 GHz** (industry's highest).

## Key Features

- **35 TOPS NE**: strongest NPU in iPhone history
- **Apple Intelligence 3B on-device LLM**: 30 tok/s
- **2nd-gen 3nm (N3E)**: power efficiency -20%
- **CPU 4.05 GHz**: highest mobile CPU frequency
- **GPU hardware ray tracing +2x**: AAA gaming ray tracing
- **8GB LPDDR5X 51.2 GB/s**: sufficient for on-device AI
- **Drawbacks**: Apple devices only, 8GB memory limit, non-expandable

## Related Cards

- [Apple M4 Max](/docs/cards/others/apple-m4-max) - Laptop / Workstation
- [Apple M3 Ultra](/docs/cards/others/apple-m3-ultra) - Desktop
- [Apple M-Series Overview](/docs/cards/others/apple-m-series) - Full series
- [Qualcomm AI 100](/docs/cards/others/qualcomm-ai100) - Qualcomm edge
- [Qualcomm AI 200/300](/docs/cards/others/qualcomm-ai-200) - Qualcomm datacenter
- [Blaize Xplorer X1600](/docs/cards/others/blaize-xplorer) - Edge AI
- [Hailo-8 / Hailo-15](/docs/cards/others/hailo) - Edge
- [NVIDIA Jetson Thor](/docs/cards/nvidia/jetson-thor) - Edge robotics
