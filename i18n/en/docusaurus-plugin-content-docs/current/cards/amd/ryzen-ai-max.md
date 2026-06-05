---
id: ryzen-ai-max
title: AMD Ryzen AI Max (Strix Halo XDNA 2 50 TOPS 128GB UMA)
sidebar_label: Ryzen AI Max
description: "AMD Ryzen AI Max+ 395 (Strix Halo) detailed specs: 16-core Zen 5 + 40 CU RDNA 3.5 + XDNA 2 NPU 50 TOPS, 128GB LPDDR5X, 256 GB/s bandwidth, 96GB VRAM, flagship AI PC, 3.9× M4 Pro SD performance."
keywords: [AMD Ryzen AI Max, Strix Halo, XDNA 2, 50 TOPS, 128GB UMA, 96GB VRAM, RDNA 3.5, AI PC, Ryzen AI Max+ 395]
---

# AMD Ryzen AI Max (Strix Halo XDNA 2 128GB UMA)

## Overview

**AMD Ryzen AI Max / Max+ (codename Strix Halo)** is AMD's **flagship AI PC APU**, **announced at CES 2025-01** and **mass-produced 2025 H1**. Built on **TSMC N4P + N6 chiplets**, it features a **16-core Zen 5 CPU** @ 5.1 GHz, **40 CU RDNA 3.5 GPU** (Radeon 8060S integrated graphics, matching discrete GPU performance), **XDNA 2 NPU 50 TOPS** (2× the Ryzen AI 300), **256-bit LPDDR5X-8000**, **up to 128 GB UMA** (**96 GB assignable to GPU as VRAM**), and **256 GB/s memory bandwidth**. The **Ryzen AI Max+ 395** is the flagship model. **Stable Diffusion 3.5 Large performance is 3.9× Apple MacBook Pro M4 Pro 48GB** (AMD official data), enabling **70B LLM on-device execution**. Strix Halo is the **true monster of the AI PC era**.

## Core Specifications

| Item | Spec |
|------|------|
| **Architecture** | **Chiplet heterogeneous** (CPU + GPU + I/O die) |
| **Process** | **TSMC N4P** (CPU/GPU die) + **TSMC N6** (I/O die) |
| **CPU Cores** | **16 Zen 5 cores** (dual CCD) |
| **CPU Frequency** | 3.0 GHz base / 5.1 GHz boost |
| **L2/L3 Cache** | 16 MB L2 / 64 MB L3 |
| **GPU Architecture** | **Radeon 8060S (RDNA 3.5)** |
| **GPU CUs** | **40 CU** (comparable to RTX 4060 Laptop performance) |
| **NPU Architecture** | **XDNA 2** (upgraded from XDNA) |
| **NPU TOPS** | **50 TOPS INT8** (2× Ryzen AI 300 Phoenix / Hawk Point at 25-30 TOPS) |
| **Total AI TOPS** | **126 TOPS** (CPU + GPU + NPU combined) |
| **Memory** | **256-bit LPDDR5X-8000** |
| **Max Memory** | **128 GB UMA** |
| **Assignable VRAM** | **96 GB** (AMD Variable Graphics Memory) |
| **Memory Bandwidth** | **256 GB/s** (128 GB 8-channel LPDDR5X-8000) |
| **PCIe** | PCIe Gen 4 (16 lanes) |
| **TDP** | **55W / 85W / 120W** (flexible cTDP) |
| **Wi-Fi** | Wi-Fi 7 |
| **Launch Models** | Ryzen AI Max 390, Ryzen AI Max+ 395, Ryzen AI Max+ 388, PRO series |
| **Announcement** | **CES 2025-01, mass production 2025 H1, detailed release 2025-03-17** |
| **Ryzen AI Max+ 395 Price** | **Laptop $1,499-$2,499** |

## Comparison with Apple M4 Pro / M4 Max

| Metric | Ryzen AI Max+ 395 | M4 Pro 48GB | M4 Max 128GB |
|------|-------------------|-------------|---------------|
| CPU Cores | 16 Zen 5 | 14 (10P+4E) | 16 (12P+4E) |
| CPU Frequency | 5.1 GHz | 4.5 GHz | 4.0 GHz |
| GPU CUs | **40 RDNA 3.5** | 20 Apple GPU | 40 Apple GPU |
| NPU TOPS | **50 (XDNA 2)** | 38 (NE) | 38 (NE) |
| Memory | **128 GB LPDDR5X** | 48 GB LPDDR5X | 128 GB LPDDR5X |
| Memory Bandwidth | **256 GB/s** | 273 GB/s | 546 GB/s |
| Assignable VRAM | **96 GB** | Shared UMA | Shared UMA |
| Stable Diffusion 3.5 | **3.9× M4 Pro 48GB** | Baseline | 2.5× M4 Pro |
| 70B LLM (Q4) | Fits 96 GB VRAM | Swap performance loss | Fits |
| TDP | 55-120W | 38-46W | 70-100W |

> **3.9× Stable Diffusion advantage**: In AMD's official testing, the **Ryzen AI Max+ 395 128GB** running Stable Diffusion 3.5 Large image generation is **3.9× faster** than the **MacBook Pro M4 Pro 48GB**. The reason: M4 Pro 48GB requires memory swap (can't fully fit 70B LLM), while the Ryzen AI Max+ 395's 96GB VRAM loads the full model without swapping.

## AI Performance Benchmarks

| Model / Task | Ryzen AI Max+ 395 128GB | Note |
|-------------|------------------------|------|
| **Llama 3 70B (Q4_K_M)** | **Full model fits 96GB VRAM** | On-device 70B |
| Llama 3 70B (Q4) | ~5 tok/s | M4 Pro 48GB with swap ~2 tok/s |
| **Stable Diffusion 3.5 Large** | **3.9× M4 Pro 48GB** | 1024×1024 image generation |
| **Stable Diffusion 3.5 Medium** | **3.3×** (concurrent) | Parallel multi-image generation |
| **Phi-4 14B** | **2.6×** (concurrent) | Running simultaneously with SD 3.5 |
| Whisper Large V3 | Real-time | ONNX accelerated |
| Video conferencing AI (background blur) | Real-time | NPU 4.0 equivalent |
| Image segmentation | 60+ FPS | GPU accelerated |

## Competitor Comparison

| Metric | Ryzen AI Max+ 395 | Intel Core Ultra 9 288V | Qualcomm Snapdragon X Elite |
|------|-------------------|--------------------------|----------------------------|
| CPU | **16 Zen 5** | 4P+4E (8 cores) | 12 Oryon |
| GPU | **40 RDNA 3.5 CUs** | 8 Xe2 (Arc 140V) | Adreno (unreleased) |
| NPU | **50 TOPS (XDNA 2)** | 48 TOPS (NPU 4.0) | 45 TOPS (Hexagon) |
| Total AI TOPS | **126** | 120 | 75 |
| Memory | **128 GB LPDDR5X** | 32 GB on-package | 32-64 GB LPDDR5X |
| Assignable VRAM | **96 GB** | Shared UMA | Shared UMA |
| 70B LLM On-Device | **Fits** | Doesn't fit | Doesn't fit |
| Copilot+ PC | **Certified** | **Certified** | **Certified** |
| Battery Life | ~8-12 hours | ~20+ hours | ~20+ hours |

## Use Cases

- **AI PC laptops** (Framework Desktop, Asus ROG Flow Z13, HP ZBook Ultra G1a, Lenovo ThinkPad P16)
- **Local 70B LLM inference** (128GB / 96GB VRAM fits full 70B Q4)
- **Stable Diffusion 3.5 image generation** (3.9× M4 Pro)
- **Professional 3D rendering / CAD** (RDNA 3.5 40 CU near RTX 4060 Laptop)
- **4K/8K video editing** (DaVinci Resolve, Premiere Pro)
- **Large model fine-tuning** (LoRA QLoRA 7B-13B local training)
- **Scientific computing** (16-core CPU + 40 CU GPU hybrid)

## Vendor Information

| Item | Detail |
|------|------|
| **Vendor** | **AMD Inc.** (Santa Clara, USA) |
| **Foundry** | **TSMC Taiwan** (N4P chiplet + N6 I/O die) |
| **Software Stack** | **Windows 11 24H2** (Copilot+ PC), Linux (Ubuntu 24.04, Fedora 41) |
| **AI Frameworks** | **ROCm** (AMD GPU), **ONNX Runtime**, **DirectML**, **Lemonade SDK** (AMD on-device LLM), **VLLM**, **llama.cpp** (Vulkan backend) |
| **OEM Customers** | Framework Desktop, HP ZBook Ultra G1a, Asus ROG Flow Z13, Lenovo ThinkPad P16 |
| **Launch Price** | Framework Desktop 16" from $1,999 / HP ZBook Ultra G1a $2,499 |
| **PRO Series** | Ryzen AI Max PRO 390 / PRO 395 (workstation-class, vPro, ECC RAM) |
| **Competitors** | Intel Core Ultra 200V (Lunar Lake), Apple M4 Pro/Max, Qualcomm Snapdragon X Elite |

## Key Features

- **Chiplet heterogeneous** (CPU/GPU/NPU integrated)
- **TSMC N4P** process (ahead of Intel 4)
- **16 Zen 5 cores** @ 5.1 GHz (top-tier consumer PC)
- **40 CU RDNA 3.5 GPU** (Radeon 8060S, near RTX 4060 Laptop discrete GPU)
- **XDNA 2 NPU 50 TOPS** (2× Ryzen AI 300)
- **Total AI compute 126 TOPS** (CPU + GPU + NPU)
- **128 GB LPDDR5X** unified memory (largest in consumer PC history)
- **96 GB assignable VRAM** (runs 70B LLM on-device)
- **256 GB/s memory bandwidth** (256-bit bus)
- **AMD Variable Graphics Memory** (dynamically adjustable VRAM)
- **PCIe Gen 4** + **Wi-Fi 7**
- **55W / 85W / 120W flexible cTDP**
- **Copilot+ PC certified** (Recall, Live Captions, Cocreator)
- **Stable dual-platform Windows / Linux**

## Related Cards

- [AMD MI300X (1.5 TB HBM3 Data Center)](../amd/mi300x) — Data center GPU
- [AMD MI355X (288GB HBM3E Data Center)](../amd/mi355x) — Data center GPU
- [AMD MI400 (CDNA Next Helios)](../amd/mi400) — Data center successor
- [Intel Core Ultra 2 (Lunar Lake 48 TOPS)](../intel/core-ultra-2) — Same-gen AI PC competitor
- [Apple M4 Max (128GB UMA 546 GB/s)](../others/apple-m4-max) — Desktop GPU
- [Apple M4 Pro (64GB UMA)](../others/apple-m4-pro) — Desktop
- [NVIDIA RTX 5090 (32GB GDDR7 Consumer GPU)](../nvidia/rtx-5090) — Desktop GPU
- [Architecture: APU Accelerated Processing](../../architectures/arch-apu) — APU architecture
- [AMD Strix Halo Official Introduction](https://www.amd.com/en/blogs/2025/amd-ryzen-ai-max-395-processor-breakthrough-ai-.html)
