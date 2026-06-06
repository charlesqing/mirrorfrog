---
id: edge
title: Edge AI Devices (Jetson)
sidebar_label: Edge AI
description: "2025 edge AI devices: NVIDIA Jetson Orin series (67-275 TOPS) and Jetson Thor (Blackwell 2,070 TFLOPS) complete specifications."
keywords: [edge AI, Jetson Orin, Jetson Thor, embedded AI, robotics, industrial]
---

# Edge AI Computing Devices

Edge AI devices are AI processors **deployed at the field level** (robots, factories, vehicles). They run AI inference in **power-constrained** environments with **no data center connectivity**. **NVIDIA Jetson** is the leader in this space.

## NVIDIA Jetson Full Series Comparison

| Series | Representative Model | AI Compute | GPU Architecture | Memory | Power | Best For |
|--------|---------------------|------------|-----------------|--------|-------|----------|
| **Jetson Orin Nano 8GB Super** | Orin Nano 8GB | **67 TOPS** | Ampere | 8GB LPDDR5 | 7-25W | Entry edge |
| **Jetson Orin NX 8GB** | Orin NX 8GB | 117 TOPS | Ampere | 8GB LPDDR5 | 10-25W | Compact edge |
| **Jetson Orin NX 16GB** | Orin NX 16GB | 157 TOPS | Ampere | 16GB LPDDR5 | 10-25W | Medium edge |
| **Jetson AGX Orin 32GB** | AGX Orin 32GB | 200 TOPS | Ampere | 32GB LPDDR5 | 15-60W | High-perf edge |
| **Jetson AGX Orin 64GB** | AGX Orin 64GB | **275 TOPS** | Ampere | 64GB LPDDR5 | 15-60W | Premium edge |
| **Jetson T4000 (Thor)** | AGX Thor T4000 | **1,200 FP4 TFLOPS** | **Blackwell** | 64GB LPDDR5X | 40-70W | Next gen |
| **Jetson T5000 (Thor)** | AGX Thor T5000 | **2,070 FP4 TFLOPS** | **Blackwell** | 128GB LPDDR5X | 40-130W | Humanoid robots |

## Jetson Orin vs Thor

| Metric | AGX Orin 64GB | AGX Thor T5000 | Improvement |
|--------|--------------|----------------|-------------|
| AI compute | 275 TOPS (INT8) | 2,070 FP4 TFLOPS | **7.5×** |
| Memory | 64 GB LPDDR5 | **128 GB LPDDR5X** | 2× |
| Bandwidth | 204.8 GB/s | 273 GB/s | 1.3× |
| GPU architecture | Ampere | **Blackwell** | New gen |
| Power | 15-60W | 40-130W | Slightly higher |
| LLM inference | 7B-13B | **70B+** | Breakthrough |

## Key Features

### Jetson Orin
- **Complete CUDA ecosystem**: Same software stack as server GPUs
- **NVDLA + PVA**: Auxiliary deep learning and vision acceleration
- **JetPack SDK**: Unified development platform
- **Orin Nano Super**: Software upgrade, 40 → 67 TOPS

### Jetson Thor (2025)
- **Blackwell edge**: Same generation as data center
- **128GB memory**: 70B+ LLM fits on a single device
- **Holoscan Sensor Bridge**: Real-time multi-sensor fusion
- **Humanoid robot dedicated**: Isaac GR00T

## Selection Guide

### By Application

- **Humanoid robots / autonomous mobile robots**: Jetson Thor T5000
- **Industrial vision**: Jetson AGX Orin / Orin NX
- **Smart cameras**: Jetson Orin Nano
- **Drones / edge AI**: Jetson Orin NX
- **Entry embedded**: Jetson Orin Nano 8GB

### By Budget

- **$249**: Jetson Orin Nano 8GB Super Developer Kit
- **$1,000+**: Jetson AGX Orin 64GB
- **$3,000+**: Jetson AGX Thor T5000 Developer Kit

## Detailed Product Pages

- [NVIDIA Jetson Orin Series](/docs/cards/nvidia/jetson-orin) - Complete Orin line
- [NVIDIA Jetson Thor](/docs/cards/nvidia/jetson-thor) - Next generation
- [Hailo-8 / Hailo-15](/docs/cards/others/hailo) - Efficient vision AI accelerators

## Related Types

- [Consumer AI GPUs](/docs/types/consumer)
- [AI Inference GPU](/docs/types/inference-gpu)
- [Complete Comparison Table](/docs/comparison)
