---
id: core-ultra-2
title: Intel Core Ultra Series 2 (Lunar Lake NPU 48 TOPS AI PC)
sidebar_label: Core Ultra 2 (Lunar Lake)
description: "Intel Core Ultra Series 2 (Lunar Lake) detailed specs: Foveros 3D packaging, 4P Lion Cove + 4E Skymont, NPU 4.0 48 TOPS, Xe2 GPU 60+ TOPS, on-package memory, AI PC flagship."
keywords: [Intel Core Ultra Series 2, Lunar Lake, LNL, NPU 4.0, 48 TOPS, Xe2 GPU, on-package LPDDR5X, Foveros, AI PC]
---
 
# Intel Core Ultra Series 2 (Lunar Lake NPU 48 TOPS)
 
## Overview
 
**Intel Core Ultra Series 2** (codenamed **Lunar Lake / LNL**) is Intel's **second-generation AI PC mobile SoC**, announced 2024-09-03 and available 2024-09-24. It features **Foveros 3D packaging** (Compute Tile + Platform Controller Tile dual-die), **TSMC N3B + N6 process**. **4 P-cores (Lion Cove) + 4 E-cores (Skymont)** @ 5.0 GHz, **Intel Arc 130V/140V GPU (Xe2 architecture)** (>60 TOPS compute), **NPU 4.0 48 TOPS** (**4x** Meteor Lake's 11 TOPS), **16/32 GB LPDDR5X on-package** (eliminating memory trace latency). Models include **Core Ultra 7 258V / 268V, Core Ultra 9 288V**. The **world's first** x86 chip to meet **Microsoft Copilot+ PC** standards (40+ TOPS NPU).
 
## Core Specifications
 
| Item | Spec |
|------|------|
| **Architecture** | **Foveros 3D Package** (Compute Tile + Platform Controller Tile) |
| **Process** | **TSMC N3B** (Compute Tile) + **TSMC N6** (Platform Controller Tile) |
| **CPU Cores** | 8 (**4P Lion Cove + 4E Skymont**) |
| **CPU Frequency** | 5.0 GHz P / 3.7 GHz E (Core Ultra 7 268V) |
| **L2 Cache** | 12 MB |
| **L3 Cache** | 8-12 MB (model dependent) |
| **GPU Architecture** | **Intel Arc 130V / 140V (Xe2)** |
| **GPU Compute** | **> 60 TOPS** (Xe2, 3.5x Meteor Lake) |
| **NPU** | **NPU 4.0**, **48 TOPS INT8** (3x Meteor Lake 11 TOPS) |
| **Total AI Compute** | **> 120 TOPS** (NPU 48 + GPU 60 + CPU compute) |
| **Memory** | **16/32 GB LPDDR5X on-package** (co-packaged with SoC, 8533 MT/s) |
| **Memory Bandwidth** | ~136 GB/s (128-bit, 8533 MT/s) |
| **PCIe** | 4x PCIe Gen 5 + 4x PCIe Gen 4 |
| **TDP** | **17W / 28W / 37W** (flexible cTDP) |
| **Wi-Fi** | Wi-Fi 7 (BE201) |
| **Bluetooth** | Bluetooth 5.4 |
| **Launch SKUs** | Core Ultra 5 226V / 228V / 236V / 238V, Core Ultra 7 256V / 258V / 266V / 268V, Core Ultra 9 288V |
| **Launch Date** | **Announced 2024-09-03, available 2024-09-24** |
| **Core Ultra 7 258V Price** | **~$499** (OEM notebook reference) |
 
## vs Meteor Lake (Core Ultra Series 1)
 
| Metric | Lunar Lake (Series 2) | Meteor Lake (Series 1) | Improvement |
|------|------------------------|------------------------|------|
| Process | N3B + N6 | Intel 4 + TSMC N5/N6 | 3rd-gen 3nm |
| CPU Cores | 4P Lion Cove + 4E Skymont | 6P Meteor Lake + 8E | Different microarchitecture |
| P-core IPC | +14% vs Redwood Cove | Baseline | Significant |
| E-core IPC | +38% vs Crestmont | Baseline | Significant |
| GPU | **Xe2** | Xe-LPG | New generation |
| GPU TOPS | **>60** | ~17 | 3.5x |
| NPU | **NPU 4.0 48 TOPS** | NPU 3.0 11 TOPS | **4x** |
| Memory | **LPDDR5X on-package** | LPDDR5X discrete | On-package reduces latency |
| AI PC Certification | **Copilot+ PC** | Standard AI PC | Flagship |
| Battery Life | Estimated 40% improvement | Baseline | Significant |
| Threads | 8 (4P+4E) | 22 (6P+8E+LP-E) | Reduced |
 
## AI PC Performance
 
| Model / Task | NPU 4.0 (48 TOPS) | Notes |
|-------------|-------------------|------|
| Phi-3 3.8B (Q4) | Real-time conversation | Copilot+ local LLM |
| Llama 3 8B (Q4) | ~12 tok/s | ONNX DirectML |
| Stable Diffusion XL | 1.5 it/s | Image generation |
| Whisper Large V3 | 5x real-time | Speech transcription |
| **Windows Copilot Recall** | Real-time | Historical recall |
| **Live Captions real-time translation** | Real-time | 100+ languages |
| **Windows Studio Effects** | Real-time | Background blur, eye contact |
| Cocreator (Paint) | Real-time | Sketch to image |
 
> **Copilot+ PC Certification**: Core Ultra Series 2 is among the **world's first** x86 chips certified for Microsoft **Copilot+ PC** standards (requiring NPU >= 40 TOPS, memory >= 16 GB, storage >= 256 GB), unlocking exclusive AI features such as **Recall** (historical recall), **Live Captions** (real-time translation), and **Cocreator** (sketch to image).
 
## Use Cases
 
- **Copilot+ PC notebooks** (Surface Pro 11, Surface Laptop 7, Lenovo Yoga Slim 7i, HP OmniBook Ultra, ASUS Zenbook S 14)
- **Local LLM inference** (Phi-3 3.8B, Llama 3 8B quantized)
- **AI-enhanced video conferencing** (Windows Studio Effects: background blur, eye contact, auto-framing)
- **Creative work** (Adobe Lightroom AI denoise, Premiere Pro AI auto-editing)
- **Gaming laptops** (Xe2 GPU 60+ TOPS + XeSS 2 frame generation)
- **Enterprise office** (20+ hour battery, AI security detection)
- **Education/Student** (Copilot learning assistant)
 
## Vendor Information
 
| Item | Info |
|------|------|
| **Vendor** | **Intel Corporation** (Santa Clara, USA) |
| **Fab** | **TSMC Taiwan** (N3B Compute Tile + N6 Platform Controller Tile) |
| **Packaging** | **Intel Foveros 3D** (proprietary advanced packaging, Oregon fab) |
| **Software Stack** | **Windows 11 24H2** (Copilot+ PC), Linux (Ubuntu 24.04, Fedora 40) |
| **AI Frameworks** | **OpenVINO**, **ONNX Runtime**, **DirectML**, **Windows ML** |
| **OEM Customers** | Microsoft Surface, Dell XPS 13, Lenovo Yoga, HP OmniBook, ASUS Zenbook, Samsung Galaxy Book |
| **Launch Price** | Core Ultra 7 258V notebook **$1,099-$1,499** |
| **Competitors** | AMD Ryzen AI 300 (Strix Point / Strix Halo), Qualcomm Snapdragon X Elite |
 
## Key Features
 
- **Foveros 3D packaging** (Compute Tile + Platform Controller Tile heterogeneous integration)
- **TSMC N3B** Compute Tile (3rd-gen 3nm)
- **4P Lion Cove + 4E Skymont** (P-core IPC +14%, E-core IPC +38%)
- **NPU 4.0 48 TOPS** (3x Meteor Lake)
- **Intel Arc Xe2 GPU** (>60 TOPS, 3.5x Meteor Lake)
- **Total AI compute 120+ TOPS** (NPU + GPU + CPU combined)
- **LPDDR5X on-package** (8533 MT/s, 16/32 GB)
- **Copilot+ PC certified** (Recall, Live Captions, Cocreator)
- **Wi-Fi 7 + Bluetooth 5.4**
- **4x PCIe Gen 5 + 4x PCIe Gen 4**
- **Improved Thread Director** (smarter P/E/LP-E scheduling)
- **17W / 28W / 37W cTDP flexible configuration**
 
## Related Cards
 
- [Intel Gaudi 3 (Data Center Training)](./gaudi-3) — Data center
- [Intel Gaudi 4 (Data Center Training Rumored)](./gaudi-4) — Data center successor
- [AMD Ryzen AI Max (Strix Halo / XDNA 2)](../amd/ryzen-ai-max) — Same-gen AI PC competitor
- [NVIDIA RTX 5090 (Consumer GPU)](../nvidia/rtx-5090) — Desktop GPU
- [Apple M4 Pro (64GB UMA)](../others/apple-m4-pro) — Apple Silicon competitor
- [Qualcomm AI 200 / 300 (Cloud AI)](../others/qualcomm-ai-200) — Competitor
- [Architecture: APU Accelerated Processing](../../architectures/arch-apu) — APU architecture
- [Intel Core Ultra Official Page](https://www.intel.com/content/www/us/en/products/details/processors/core-ultra.html)
