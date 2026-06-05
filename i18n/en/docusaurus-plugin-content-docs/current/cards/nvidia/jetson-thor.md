---
id: jetson-thor
title: NVIDIA Jetson Thor
sidebar_label: NVIDIA Jetson Thor
description: "NVIDIA Jetson Thor is a Blackwell edge AI module: 2070 FP4 TFLOPS, 128GB LPDDR5X, 40-130W, designed for humanoid robots and physical AI."
keywords: [Jetson Thor, Blackwell edge, humanoid robots, physical AI, T5000, T4000]
---

# NVIDIA Jetson Thor (Blackwell Edge)

## Overview

The NVIDIA Jetson Thor is the next-generation edge AI module released in 2025, based on the **Blackwell architecture GPU**. With **AI compute up to 2,070 FP4 TFLOPS** (sparse), it delivers **7.5×** the performance of the previous-generation AGX Orin (275 TOPS). Jetson Thor is purpose-built for humanoid robots, autonomous machines, and physical AI, capable of running LLMs, VLMs (vision-language models), and VLAs (vision-language-action) models at the edge.

## Core Specifications

| Spec | Jetson AGX Thor Developer Kit | Jetson T5000 | Jetson T4000 |
|------|------------------------------|--------------|--------------|
| **AI Compute (FP4 sparse)** | **2,070 TFLOPS** | 2,070 TFLOPS | 1,200 TFLOPS |
| **GPU** | 2,560-core Blackwell + 5th Gen Tensor Cores | 2,560-core Blackwell + 5th Gen Tensor Cores | 1,536-core Blackwell + 5th Gen Tensor Cores |
| **MIG** | 10 TPC | 10 TPC | 6 TPC |
| **CPU** | 14× Arm Neoverse-V3AE 64-bit | 14× Arm Neoverse-V3AE 64-bit | 12× Arm Neoverse-V3AE 64-bit |
| **CPU Frequency** | Up to 2.6 GHz | Up to 2.6 GHz | Up to 2.6 GHz |
| **L3 Cache** | 16 MB shared | 16 MB shared | 16 MB shared |
| **Memory** | **128 GB LPDDR5X** | 128 GB LPDDR5X | 64 GB LPDDR5X |
| **Bandwidth** | 273 GB/s | 273 GB/s | 273 GB/s |
| **Power** | 40-130 W | 40-130 W | 40-70 W |
| **Networking** | 1× 5GbE + 1× QSFP28 (4× 25GbE) | 4× 25GbE | 3× 25GbE |
| **PCIe** | M.2 Key M Gen5 x4 | Gen5 x8 | Gen5 x8 |
| **Vision Accelerator** | 1× PVA v3 | 1× PVA v3 | 1× PVA v3 |
| **Video Codec** | 2× NVENC + 2× NVDEC | 2× NVENC + 2× NVDEC | 1× NVENC + 1× NVDEC |

## Vendor Information

| Item | Detail |
|------|------|
| **Manufacturer** | NVIDIA Corporation |
| **Website** | https://www.nvidia.com/en-us/autonomous-machines/embedded-systems/jetson-thor/ |
| **Release** | August 2025 (GA) |
| **Ecosystem** | Isaac GR00T N1 (humanoid robot foundation model), VSS (video search and summarization), Holoscan Sensor Bridge |

## Key Features

- **7.5× AGX Orin compute**, **3.5× energy efficiency**
- **Supports LLM / VLM / VLA** models running at the edge
- 128GB memory enables 70B+ model loading
- 5× 25GbE networking for multi-machine coordination
- Holoscan Sensor Bridge for real-time multi-sensor fusion

## Use Cases

- **Humanoid robots** (Isaac GR00T)
- **Autonomous mobile robots** (AMR)
- **Edge LLM inference**
- **Multimodal AI** (video + voice + decision-making)
- **Low-latency real-time inference**

## Related Products

- [NVIDIA Jetson Orin](/docs/cards/nvidia/jetson-orin) - Previous generation
- [NVIDIA RTX 4090](/docs/cards/nvidia/rtx-4090) - Desktop development
- [NVIDIA B200](/docs/cards/nvidia/b200) - Cloud training
