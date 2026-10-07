---
id: ryzen-ai-max-pro-495
title: AMD Ryzen AI Max Pro 495 (Strix Halo 192GB UMA)
sidebar_label: Ryzen AI Max Pro 495
description: "AMD Ryzen AI Max Pro 495: upgraded Strix Halo AI PC flagship unveiled October 5, 2026, up to 192GB unified memory, 16 desktop-class Zen 5 cores, RDNA 3.5 graphics, 8.5GT/s memory, VGM allocates up to 160GB to the GPU, runs 100B-parameter models locally."
keywords: [AMD Ryzen AI Max Pro 495, Strix Halo, 192GB unified memory, VGM, AI PC, Zen 5, RDNA 3.5, on-device LLM]
---

# AMD Ryzen AI Max Pro 495

## Overview

**AMD Ryzen AI Max Pro 495** (upgraded Strix Halo) was unveiled on **October 5, 2026** as AMD's flagship AI PC / agentic on-device APU, deliberately timed two days ahead of NVIDIA's RTX Spark launch event (October 7).

The headline feature is **up to 192 GB of unified memory** — via AMD's Variable Graphics Memory (VGM) slider, users can allocate **up to 160 GB to the GPU**, enough to fit and run **100B-parameter-class models entirely offline** with no cloud subscription and no data leaving the device.

## Core Specs

| Item | Spec |
|------|------|
| **Architecture** | Heterogeneous chiplet (CPU + GPU + I/O die) |
| **Codename** | Strix Halo (upgraded) |
| **CPU** | **16 desktop-class Zen 5 cores** |
| **GPU architecture** | **RDNA 3.5** integrated graphics |
| **Unified memory** | **Up to 192 GB LPDDR5X** |
| **Memory speed** | **8.5 GT/s** |
| **Memory bandwidth** | ~272 GB/s (derived from 256-bit @ 8.5 GT/s) |
| **Allocatable VRAM** | **Up to 160 GB** (VGM) |
| **Model capacity** | Runs **100B-parameter-class** models locally, offline |
| **TDP** | Not disclosed (PRO series reference: 55-120W cTDP) |
| **Unveiled** | **October 5, 2026** |
| **Availability** | Not disclosed |

> ⚠️ **Note**: NPU TOPS, total AI TOPS, pricing, and availability have not been officially disclosed; this table lists only confirmed information.

## Head-to-Head vs RTX Spark (N1X)

| Metric | Ryzen AI Max Pro 495 | NVIDIA RTX Spark (N1X) |
|--------|---------------------|------------------------|
| CPU | **16 Zen 5 cores (native x86)** | 20 Arm cores |
| GPU | RDNA 3.5 integrated | 6,144 CUDA Blackwell |
| Unified memory | **Up to 192 GB** | Up to 128 GB LPDDR5X |
| Allocatable VRAM | **Up to 160 GB (VGM)** | Shared unified memory |
| Local model capacity | **100B-parameter class** | 120B parameters |
| AI compute | Not disclosed | 1 PFLOPS FP4 sparse |
| Windows compatibility | **Native x86, no emulation layer** | Arm relies on Prism translation |
| Ecosystem | Runs directly on Windows + Linux | Native CUDA on Windows |

**AMD's core pitch**: native x86 with no emulation layer — the RTX Spark Arm approach still depends on Microsoft's Prism translation layer in the Windows ecosystem (with lingering power and compatibility costs), while the Pro 495 runs directly on both Windows and Linux. AMD's marketing even rebrands the acronym as "Agentic Micro Devices since 2025."

## Real-World Deployment

Emmy-winning VR studio **LightSail VR** (16K, 90 fps stereoscopic 3D video) built a "production coordinator" AI agent on a Ryzen AI Max desktop, managing **6-9 production projects simultaneously** — the workload of two people. Fully local means zero cloud cost; the same workload in the cloud would cost thousands of dollars per month in tokens alone.

## Use Cases

- ✅ **Local 100B-class LLM inference** (192GB / 160GB VRAM)
- ✅ **Privacy-sensitive workloads** (tax documents never leave the device)
- ✅ **Agentic AI workflows** (parallel agents, zero cloud cost)
- ✅ **Professional creation** (16K video, 3D rendering)
- ❌ Cloud-scale training (MI455X / Helios territory)

## Related Cards

- [AMD Ryzen AI Max (Strix Halo 128GB)](/docs/cards/amd/ryzen-ai-max) — previous flagship
- [NVIDIA RTX Spark](/docs/cards/nvidia/rtx-spark) — direct competitor
- [NVIDIA DGX Spark 64GB](/docs/cards/nvidia/rtx-spark) — desktop AI supercomputer
- [AMD MI455X](/docs/cards/amd/mi455x) — datacenter flagship
