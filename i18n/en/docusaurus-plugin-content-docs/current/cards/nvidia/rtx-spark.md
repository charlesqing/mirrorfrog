---
id: rtx-spark
title: NVIDIA RTX Spark (AI PC Superchip)
sidebar_label: NVIDIA RTX Spark
description: "NVIDIA RTX Spark: up to 20 Arm CPU cores + 6,144 CUDA Blackwell GPU, 128GB unified LPDDR5X memory, 300 GB/s bandwidth, runs 120B parameter models with 1M token context. Launching Fall 2026."
keywords: [NVIDIA RTX Spark, AI PC, Computex 2026, Blackwell, Arm CPU, unified memory, 128GB LPDDR5X, MediaTek]
---

# NVIDIA RTX Spark (AI PC Superchip)

## Product Overview

**NVIDIA RTX Spark** was officially unveiled on **June 1, 2026** at Computex 2026 / GTC Taipei as NVIDIA's first AI PC superchip developed in collaboration with **MediaTek**. It adopts a unified-memory **Arm CPU + Blackwell GPU** architecture with **128GB LPDDR5X** of shared memory, aiming to turn Windows into an "Agentic AI" platform.

RTX Spark targets both **laptops and compact desktops** and is expected to launch in **Fall 2026**, with launch OEMs including Dell, HP, Lenovo, Asus, MSI, and Microsoft Surface.

## Core Specifications

| Parameter | Value |
|------|------|
| **Architecture** | Blackwell GPU + Arm CPU (MediaTek collaboration) |
| **CPU** | Up to **20 Arm cores** |
| **GPU** | **6,144 CUDA cores** (Blackwell) |
| **Unified Memory** | **128 GB LPDDR5X** (shared by CPU + GPU) |
| **Memory Bandwidth** | **300 GB/s** |
| **Interconnect** | NVLink C2C (CPU-GPU) |
| **Gaming Performance** | ~100 FPS @ 1440p (DLSS 4.5) |
| **Model Capacity** | Runs **120 billion parameter** models |
| **Context** | Up to **1 million tokens** |
| **AI Compute (estimated)** | ~1 PFLOPS (unofficial NVIDIA figure) |
| **TDP** | ~100W (estimated) |
| **Launch OEMs** | Dell, HP, Lenovo, Asus, MSI, Microsoft Surface |
| **Models** | 30+ laptops + ~10 desktops |
| **Availability** | **Fall 2026** |
| **Pricing** | Not yet announced |
| **Announced** | 2025-01-07 (Project DIGITS) |

> ⚠️ **Note**: NVIDIA's Computex 2026 announcement focused on platform positioning and the AI narrative; it did not publish official TFLOPS/PFLOPS figures, TDP, or pricing. Some of the data above is based on industry estimates.

## Platform Ecosystem

| Partner | Collaboration |
|----------|----------|
| **Microsoft** | OpenShell framework, turning Windows into an AI Agent platform |
| **Adobe** | Photoshop / Premiere core rewrites, 100% GPU-accelerated |
| **MediaTek** | Co-design of the Arm CPU architecture |
| **Dell, HP, Lenovo, Asus, MSI** | Launch OEM laptops/desktops |

## Comparison with DGX Station for Windows

| Metric | RTX Spark | DGX Station for Windows |
|------|-----------|------------------------|
| **Chip** | RTX Spark Superchip | GB300 Grace Blackwell Ultra |
| **Memory** | 128GB LPDDR5X | 748GB (252GB HBM3e + 496GB LPDDR5X) |
| **Memory Bandwidth** | 300 GB/s | 7.1 TB/s (GPU) |
| **CUDA Cores** | 6,144 | ~20,000 (estimated) |
| **AI Compute** | ~1 PFLOPS | 20 PFLOPS FP4 |
| **Target** | Personal AI agents / laptops | Desktop AI supercomputing / trillion-parameter models |
| **TDP** | TBD | 1,600W |
| **Availability** | Fall 2026 | 2026 Q4 |

## Vendor Information

| Parameter | Details |
|------|------|
| **Manufacturer** | NVIDIA × MediaTek |
| **Official Website** | https://www.nvidia.com |
| **Announcement** | Computex 2026 / GTC Taipei (2026-06-01) |
| **Availability** | Fall 2026 |

## Use Cases

- ✅ **Personal AI agents**: run 120B parameter models locally with 1 million token context
- ✅ **Creator workstations**: Adobe Photoshop / Premiere 100% GPU-accelerated
- ✅ **Local LLM inference**: 128GB unified memory suffices for most models
- ✅ **Light AI training**: fine-tuning / LoRA / small-scale training
- ❌ **Large-scale training** (DGX Station is a better fit)
- ❌ **HPC scientific computing** (H100 / Rubin are better fits)

## Related Products

- [NVIDIA DGX Station for Windows](/docs/cards/nvidia/gb300) - Desktop AI supercomputing
- [NVIDIA Rubin R200](/docs/cards/nvidia/rubin-r200) - Data center training flagship
- [NVIDIA B200](/docs/cards/nvidia/b200) - Data center training
- [Apple M5 Ultra](/docs/cards/others/apple-m5-ultra) - Competitor comparison
- [RTX 5090](/docs/cards/nvidia/rtx-5090) - Consumer GPU
