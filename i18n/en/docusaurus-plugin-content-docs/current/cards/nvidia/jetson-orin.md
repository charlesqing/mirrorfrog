---
id: jetson-orin
title: NVIDIA Jetson Orin
sidebar_label: NVIDIA Jetson Orin
description: "NVIDIA Jetson Orin series edge AI modules: Orin Nano (67 TOPS) to AGX Orin (275 TOPS), Ampere architecture, 7-60W TDP."
keywords: [Jetson Orin, edge AI, embedded, AGX Orin, Orin Nano, robotics, industrial]
---

# NVIDIA Jetson Orin Series

## Overview

The NVIDIA Jetson Orin is a family of SoMs (System-on-Module) designed for edge AI and robotics applications. Based on the **Ampere architecture GPU + ARM Cortex-A78AE CPU**, it delivers AI compute ranging from 67 TOPS to 275 TOPS. The Orin series includes the **Orin Nano**, **Orin NX**, and **AGX Orin** sub-families.

## Orin Nano Series

| Spec | Orin Nano 4GB | Orin Nano 8GB |
|------|---------------|---------------|
| **AI Compute** | 34 TOPS (INT8) | **67 TOPS** (INT8) |
| **GPU** | 512 CUDA Cores + 16 Tensor Cores | 1,024 CUDA Cores + 32 Tensor Cores |
| **CPU** | 6× Arm Cortex-A78AE 1.5 MB L2 + 4 MB L3 | 6× Arm Cortex-A78AE 1.5 MB L2 + 4 MB L3 |
| **Memory** | 4 GB LPDDR5 (51 GB/s) | 8 GB LPDDR5 (102 GB/s) |
| **Power** | 7-25 W | 7-25 W |
| **Price** | $199 | **$249** (Super Developer Kit) |

## Orin NX Series

| Spec | Orin NX 8GB | Orin NX 16GB |
|------|-------------|--------------|
| **AI Compute** | 117 TOPS | **157 TOPS** |
| **GPU** | 1,792 CUDA + 56 Tensor Cores | 2,048 CUDA + 64 Tensor Cores |
| **CPU** | 8× Arm Cortex-A78AE 2.0 GHz | 8× Arm Cortex-A78AE 2.0 GHz |
| **DLA** | 1× NVDLA v2 1.23 GHz | 2× NVDLA v2 1.4 GHz |
| **PVA** | 1× PVA v2 | 1× PVA v2 |
| **Memory** | 8 GB LPDDR5 (102 GB/s) | 16 GB LPDDR5 (102 GB/s) |
| **Power** | 10-25 W | 10-25 W |

## AGX Orin Series

| Spec | AGX Orin 32GB | AGX Orin 64GB |
|------|---------------|---------------|
| **AI Compute** | 200 TOPS | **275 TOPS** |
| **GPU** | 2,048 CUDA + 64 Tensor Cores | 2,048 CUDA + 64 Tensor Cores |
| **CPU** | 12× Arm Cortex-A78AE 2.2 GHz | 12× Arm Cortex-A78AE 2.2 GHz |
| **DLA** | 2× NVDLA v2 1.6 GHz | 2× NVDLA v2 1.6 GHz |
| **PVA** | 1× PVA v2 | 1× PVA v2 |
| **Memory** | 32 GB LPDDR5 (204.8 GB/s) | **64 GB LPDDR5** (204.8 GB/s) |
| **Power** | 15-60 W | 15-60 W |

## Vendor Information

| Item | Detail |
|------|------|
| **Manufacturer** | NVIDIA Corporation |
| **Website** | https://www.nvidia.com/en-us/autonomous-machines/embedded-systems/ |
| **Ecosystem** | JetPack SDK, Isaac (robotics), Metropolis (video AI), Holoscan (sensors) |
| **Release** | Phased rollout 2022-2023 |

## Key Features

- **Full CUDA ecosystem**: Same software stack as server GPUs
- **Multimodal sensing**: ISP + PVA (vision accelerator) + DLA (deep learning accelerator)
- **Jetson Orin Nano Super**: Software upgrade boosts 40 TOPS to 67 TOPS
- **Long-life support**: 10+ year supply commitment

## Use Cases

- Robotics (AMR, humanoid robots)
- Industrial vision and inspection
- Autonomous driving (edge)
- Smart cities (video analytics)
- Drones

## Related Products

- [NVIDIA Jetson Thor](/docs/cards/nvidia/jetson-thor) - Next-gen Blackwell edge
- [NVIDIA RTX 4090](/docs/cards/nvidia/rtx-4090) - High-end development
- [Google TPU v5e](/docs/cards/google/tpu-v6e) - Edge inference cloud
