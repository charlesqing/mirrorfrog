---
id: drive-thor
title: NVIDIA DRIVE Thor (1000 TOPS Autonomous Driving SoC)
sidebar_label: DRIVE Thor
description: "NVIDIA DRIVE Thor detailed specs: Blackwell architecture GPU, 1000 INT8 TOPS / 2000 FP4 TFLOPS, Neoverse V3AE CPU, 64GB LPDDR5X, 273 GB/s, automotive ASIL-D, ZEEKR first production."
keywords: [NVIDIA DRIVE Thor, DRIVE Thor, Blackwell autonomous driving, 1000 TOPS INT8, 2000 FP4 TFLOPS, Neoverse V3AE, ASIL-D, ZEEKR]
---

# NVIDIA DRIVE Thor (1000 TOPS Autonomous Driving)

## Overview

**NVIDIA DRIVE Thor** is NVIDIA's 4th-generation automotive-grade autonomous driving SoC, **announced at GTC 2022-09**, **taped out in 2024**, **Developer Kit GA August-September 2025**, **ZEEKR production starting 2025 H2**. **4nm Samsung foundry** (speculative), **Blackwell GPU architecture** (automotive-custom variant), **1,000 INT8 TOPS / 2,000 FP4 TFLOPS** (4× over Orin's 254 TOPS), **ARM Neoverse V3AE** (v9.2-A) CPU, **64 GB LPDDR5X 4266 MHz**, **273 GB/s memory bandwidth**, **256 GB UFS**, **350W system power**. The world's **first** automotive SoC to integrate an **Inference Transformer Engine** (9× acceleration for Transformer DNN inference), supporting **FP4/FP8/INT8/FP16** quantization. DriveOS 7 + Halos safety system, **ISO 26262 ASIL-D** + **ISO 21434** dual certification.

## Core Specifications

| Item | Spec |
|------|------|
| **Architecture** | **Blackwell GPU architecture** (automotive-custom, no HBM) |
| **Process** | **4nm Samsung 4LPP** (speculative) |
| **GPU Compute** | **1,000 INT8 TOPS** / **2,000 FP4 TFLOPS** (**4×** Orin's 254 TOPS) |
| **GPU Compute** | 1,000 FP8 TFLOPS (Transformer-optimized) |
| **FP4 Compute** | 2,000 FP4 TFLOPS (quantization-aware training + deployment) |
| **CPU** | **ARM Neoverse V3AE** (v9.2-A, SMP) 14 cores (speculative) |
| **CPU Performance** | **2.3×** Orin (Cortex-A78A) SPECrate 2017_int_base |
| **Integrated Neural Engine** | **Inference Transformer Engine** (first automotive SoC integration) |
| **Transformer Acceleration** | **9×** DNN inference (vs without Transformer Engine) |
| **Memory** | **64 GB LPDDR5X** @ 4266 MHz |
| **Memory Bandwidth** | **273 GB/s** (256-bit LPDDR5X) |
| **Storage** | **256 GB UFS** |
| **PVA Vision Accelerator** | 512 INT16 GMAC/s (Orin: 2048 INT8 GMAC/s × 2) |
| **ISP** | **3.5 Gigapixels/s** (1.9× Orin's 1.85 GP/s) |
| **Video Encode** | 3.1 Gigapixels/s H.265 |
| **Video Decode** | 2.9 Gigapixels/s H.265 |
| **Camera Interfaces** | 16× GMSL 2 + 2× GMSL 3 (18 total) |
| **Ethernet** | 76 Gb/s (for LiDAR / radar) |
| **Automotive Interfaces** | 4× CAN, PCIe Gen 5 |
| **Safety MCU** | Renesas U2A16 (ASIL-D independent monitor) |
| **System Power** | **350W** (SKU10/SKU12 tiers) |
| **Operating Temperature** | 0-35°C (SKU10) / 0-45°C (SKU12) |
| **Input Voltage** | 9-16V (static) / 7-32V (transient) |
| **Dimensions** | DevKit 15×37×15 cm / 6.2 kg |
| **First OEM** | **ZEEKR** (2025 H2 production), Volvo EX90 (2025-2026) |
| **Launch Date** | **2024 production, 2025-08-25 DevKit pre-sale, 2025-09 DevKit shipping** |
| **DevKit Price** | **$5,499** (DRIVE AGX Thor Developer Kit) |

## Comparison with Orin

| Metric | DRIVE Thor | DRIVE Orin | Improvement |
|------|------------|------------|------|
| Architecture | **Blackwell** | Ampere | Next-gen |
| Process | 4nm | 8nm Samsung | 2× transistor density |
| GPU Compute (INT8) | **1,000 TOPS** | 254 TOPS | **4×** |
| GPU Compute (FP4) | **2,000 TFLOPS** | N/A | New |
| Transformer Acceleration | **9×** (dedicated engine) | None | New |
| CPU | **Neoverse V3AE** | Cortex-A78A | **2.3× SPECrate** |
| Memory | **64 GB LPDDR5X** | 32 GB LPDDR5 | 2× capacity |
| Memory Bandwidth | **273 GB/s** | 204.8 GB/s | +33% |
| ISP | **3.5 GP/s** | 1.85 GP/s | 1.9× |
| Video Encode | 3.1 GP/s | 1.0 GP/s | 3.1× |
| System Power | 350W | 60W | 5.8× |
| Cameras | 16× GMSL 2 + 2× GMSL 3 | 16× GMSL 2 | +2× GMSL 3 |
| Safety MCU | Renesas U2A16 | Integrated | Independent monitor |
| Software Stack | DriveOS 7 + Halos | DriveOS 6 | Next-gen safety |
| Certification | **ASIL-D + ISO 21434** | ASIL-B | Highest safety |

## Use Cases

- **L2+ to L4 autonomous driving** (Tesla FSD, Mercedes Drive Pilot, Volvo XC90)
- **Cockpit-domain fusion** (cluster + infotainment + ADAS + parking on a single SoC)
- **In-vehicle large model inference** (LLM, VLM, on-device GPT for in-car)
- **Generative AI in-vehicle** (DriveAGX + Cosmos simulation training)
- **Robotics / industrial automation** (DRIVE Thor + Isaac Sim)
- **Multi-SoC coordination** (DRIVE Hyperion 9 platform: 2× Thor = 254 TOPS×2 → 508 TOPS → 2000 TOPS)

## Vendor Information

| Item | Detail |
|------|------|
| **Vendor** | **NVIDIA Corporation** |
| **Design** | NVIDIA Santa Clara, USA (automotive-custom) |
| **Foundry** | **Samsung South Korea** (4nm 4LPP) |
| **Software Stack** | **DriveOS 7** (safety RTOS), **DriveWorks** SDK, **Halos** full-stack safety |
| **AI Frameworks** | **TensorRT**, **CUDA**, **Triton Inference Server**, **TensorRT-LLM** |
| **First Customer** | **ZEEKR** (2025 H2 production vehicles), Volvo EX90 (2026), Polestar, Mercedes-Benz |
| **DevKit Price** | **$5,499** (shipping 2025-09) |
| **Automotive Certification** | **ISO 26262 ASIL-D**, **ISO/SAE 21434** (cybersecurity) |
| **Hyperion 9 Platform** | Dual Thor SoC + DriveOS + 14 cameras + 9 radars + 1 LiDAR + 12 ultrasonic |

## Key Features

- **Blackwell GPU architecture** (automotive-custom variant)
- **1,000 INT8 TOPS** (4× Orin's 254 TOPS)
- **2,000 FP4 TFLOPS** (first automotive FP4 support)
- **Inference Transformer Engine** (first automotive Transformer acceleration, 9× speedup)
- **Neoverse V3AE CPU** (ARM v9.2-A, 2.3× Orin CPU)
- **64 GB LPDDR5X** 273 GB/s (largest memory in automotive SoC)
- **18 camera channels** (16× GMSL 2 + 2× GMSL 3)
- **76 Gb/s Ethernet** (10× typical automotive)
- **ISO 26262 ASIL-D** (highest automotive functional safety level)
- **ISO/SAE 21434** (automotive cybersecurity)
- **DriveOS 7** safety RTOS + **Halos** full-stack safety system
- **Multi-Instance GPU (MIG)** support (IVI + ADAS domain isolation)

## Related Cards

- [NVIDIA DRIVE Orin (254 TOPS Autonomous Driving)](/docs/cards/nvidia/jetson-orin) — Previous-gen automotive
- [NVIDIA Jetson Thor (Robotics SoC)](/docs/cards/nvidia/jetson-thor) — Same-gen robotics
- [NVIDIA H100 / B200 (Data Center)](/docs/cards/nvidia/b200) — Same-gen data center
- [NVIDIA RTX 5090 (Consumer GPU)](/docs/cards/nvidia/rtx-5090) — Consumer
- [Mobileye EyeQ6 / Qualcomm Snapdragon Ride](https://www.mobileye.com/) — Competing automotive
- [Tesla AI Training Chip Dojo V1/V2](/docs/cards/others/tesla-dojo) — Training counterpart
- [NVIDIA Halos Safety System](https://www.nvidia.com/en-us/automotive/halos/)
- [NVIDIA DRIVE AGX Thor Developer Kit](https://developer.nvidia.com/drive/agx)
