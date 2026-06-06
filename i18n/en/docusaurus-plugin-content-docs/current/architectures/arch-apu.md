---
id: arch-apu
title: APU (Accelerated Processing Unit)
sidebar_label: APU
description: "APU architecture details: CPU+GPU+NPU integrated packaging, unified memory architecture, AMD MI300A and Apple M-Series as representatives."
keywords: [APU, Accelerated Processing Unit, Apple M-Series, AMD MI300A, unified memory, UMA, CPU+GPU]
---

# APU (Accelerated Processing Unit) Architecture

## What is an APU

**APU (Accelerated Processing Unit)** is a processor that integrates **CPU + GPU + NPU** into a **single package / single chip**, sharing **unified memory (UMA, Unified Memory Architecture)**. It eliminates data copying between CPU and GPU, making it **ideal for heterogeneous computing** scenarios (HPC, AI inference, local LLM).

**Representative products**:
- **Apple M-Series** (M2/M3/M4 Max/Ultra)
- **AMD MI300A** (CDNA 3 + Zen 4)
- **Intel Core Ultra** (Meteor Lake / Lunar Lake, integrated NPU)

## APU Core Advantages

### Unified Memory Architecture (UMA)
- **CPU and GPU share the same LPDDR5/HBM pool**
- **No data copying** (vs discrete GPU requiring PCIe transfer)
- **192GB Mac Studio** can load a full 70B LLM

### Memory Bandwidth
- Apple M2 Ultra: **800 GB/s**
- AMD MI300A: **5.3 TB/s** (HBM3)
- Bandwidth advantage is significant for data-intensive LLM inference

### Heterogeneous Computing
- Numerical simulation (CPU) + AI inference (GPU) + signal processing (NPU) **on the same chip**
- Ideal for **HPC + AI joint** workflows

## Mainstream APU Comparison

| APU | Process | CPU | GPU | Memory | Memory Bandwidth | Deployment |
|-----|---------|-----|-----|--------|------------------|------------|
| **Apple M3 Ultra** | 3nm | 32-core | 80-core | 192GB LPDDR5 | 800 GB/s | Workstation |
| **Apple M4 Max** | 3nm | 16-core | 40-core | 128GB LPDDR5X | 546 GB/s | Workstation |
| **AMD MI300A** | 5nm + 6nm | **24-core Zen 4** | 14,592 SP | 128GB HBM3 | 5.3 TB/s | Data center |
| **Intel Core Ultra 9 285H** | 3nm | 16-core | 8-core Arc | 96GB DDR5 | 89 GB/s | Laptop |

## APU vs Discrete CPU+GPU

| Dimension | APU | Discrete CPU + GPU |
|-----------|-----|-------------------|
| Memory access | **Shared (no copy)** | PCIe transfer |
| Memory bandwidth | 800 GB/s - 5.3 TB/s | GPU HBM + CPU DDR |
| Compute | Medium (TDP limited) | **High (independent cooling)** |
| Flexibility | Unified software stack | CPU/GPU separated |
| Price | Medium | **High** |
| Best for | Local AI, laptops | Data center, training |

## APU Use Cases

- ✅ **Local LLM inference** (UMA advantage, 70B+ models loadable)
- ✅ HPC + AI joint (El Capitan supercomputer)
- ✅ Workstation creative work (Final Cut Pro, DaVinci Resolve)
- ✅ On-device GenAI (Apple Intelligence, Copilot+ PC)
- ✅ Laptop / all-in-one AI (low power)
- ❌ Ultra-large model training (use discrete GPU clusters)
- ❌ Data center high density (use H100/MI300X)

## Detailed Product Pages

### Apple Silicon
- [Apple M-Series Overview](/docs/cards/others/apple-m-series) - M1/M2/M3/M4/M5 full comparison
- [Apple M1 Pro](/docs/cards/others/apple-m1-pro) - 2021-10, 10-core CPU 200 GB/s MacBook Pro 14"/16"
- [Apple M1 Max](/docs/cards/others/apple-m1-max) - 2021-10, 32-core GPU 400 GB/s 64GB UMA dual ProRes
- [Apple M2 Max](/docs/cards/others/apple-m2-max) - 2023-01, 96GB UMA 400 GB/s
- [Apple M2 Ultra](/docs/cards/others/apple-m2-ultra) - 2023-06, 192GB UMA 800 GB/s UltraFusion
- [Apple M3 Max](/docs/cards/others/apple-m3-max) - 2023-10, 128GB LPDDR5 400 GB/s
- [Apple M3 Ultra](/docs/cards/others/apple-m3-ultra) - 2023-12, 256GB UMA 800 GB/s Apple Silicon flagship
- [Apple M4 Pro](/docs/cards/others/apple-m4-pro) - 2024-10, 14-core CPU 64GB UMA 273 GB/s
- [Apple M4 Max](/docs/cards/others/apple-m4-max) - 2024-10, 128GB LPDDR5X 546 GB/s 38 TOPS ANE
- [Apple M4 Ultra](/docs/cards/others/apple-m4-ultra) - 2025-Q4 estimated, 256GB fits 200B FP16
- [Apple M5 Ultra](/docs/cards/others/apple-m5-ultra) - 2026 H2 estimated, 384GB LPDDR6 ~1 TB/s fits 400B FP8

### AMD
- [AMD MI300A](/docs/cards/amd/mi300a) - CDNA 3 + Zen 4, 128GB HBM3 5.3 TB/s data center APU
- [AMD Ryzen AI Max (Strix Halo)](/docs/cards/amd/ryzen-ai-max) - **128GB UMA 96GB VRAM**, 70B LLM on-device, 3.9× M4 Pro SD

### Intel
- [Intel Core Ultra 2 (Lunar Lake)](/docs/cards/intel/core-ultra-2) - Foveros 3D NPU 4.0 48 TOPS Xe2 GPU 60+ TOPS LPDDR5X on-package Copilot+ PC

## Related Architectures

- [GPU](/docs/architectures/arch-gpu) - Discrete GPU
- [NPU](/docs/architectures/arch-npu) - Edge NPU
- [WSE](/docs/architectures/arch-wse) - Wafer-scale
- [Complete Comparison Table](/docs/comparison)
