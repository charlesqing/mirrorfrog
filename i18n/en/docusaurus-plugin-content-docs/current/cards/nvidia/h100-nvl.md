---
id: h100-nvl
title: NVIDIA H100 NVL (94GB HBM3 Dual-Die)
sidebar_label: H100 NVL
description: "NVIDIA H100 NVL detailed specs: dual-die H100, 94GB HBM3, 188GB HBM3e capacity, optimized for LLM inference."
keywords: [H100 NVL, dual-die, 94GB HBM3, 188GB HBM3e, LLM inference, PCIe Gen5]
---

# NVIDIA H100 NVL

## Overview

**NVIDIA H100 NVL** is the LLM-optimized variant of the H100, featuring a **dual-die package** (MCM-like), delivering **94GB HBM3** (two 48GB stacks) or **188GB HBM3e** per card. It is purpose-built for **ultra-large LLM inference** (GPT-4-class 1.8T models) and can load such models on a single card.

The **PCIe Gen5** interface (vs. the original H100 SXM's NVLink) enables easy deployment in PCIe servers.

## Core Specifications

| Item | Spec |
|------|------|
| **Architecture** | Hopper (GH100, dual-die) |
| **Process** | TSMC 4N |
| **CUDA Cores** | 14,592 × 2 = 29,184 (dual-die) |
| **Tensor Cores** | 456 × 2 = 912 (4th Gen) |
| **Base Clock** | 1.08 GHz |
| **Boost Clock** | 1.78 GHz |
| **Memory** | **94 GB HBM3** (two 48GB stacks) / **188 GB HBM3e** |
| **Memory Bandwidth** | 3.35 TB/s (HBM3) / 7.0 TB/s (HBM3e) |
| **FP16 Tensor** | 1979 TFLOPS (sparse) |
| **FP8 Tensor** | 3958 TFLOPS (sparse) |
| **TDP** | 350-400 W (PCIe) / 700 W (SXM-NVL) |
| **Interface** | PCIe Gen5 ×16 |
| **Launch** | 2024-Q1 |
| **Price** | $30,000-$40,000 (OEM) |

## Comparison with H100 SXM

| Metric | H100 SXM 80GB | H100 NVL 94GB | Difference |
|------|---------------|---------------|------|
| Memory Capacity | 80GB HBM3 | 94GB HBM3 | +17.5% |
| Memory Bandwidth | 3.35 TB/s | 3.35 TB/s | Same |
| NVLink | 900 GB/s | 600 GB/s (PCIe) | -33% |
| Interconnect Bandwidth | NVLink 18-link | PCIe Gen5 | Flexible |
| TDP | 700W | 350-400W | -43% |
| Use Case | Training/HPC | LLM inference | Optimized |

## LLM Inference Scenarios

### Single-Card Loading for Ultra-Large Models
- **Llama 3 70B FP16 (~140GB)** → Requires 2 cards
- **Llama 3 70B INT4 (~40GB)** → **Single card sufficient**
- **Mixtral 8x22B INT4 (~80GB)** → Single card can load
- **Llama 3 405B INT4 (~230GB)** → 3 NVL cards

### Multi-Card NVL Bridge
- 2× H100 NVL connected via NVLink Bridge → 188GB unified memory
- **2× H100 NVL for 405B model inference** (quantized ~230GB)

## Real-World Deployments

- **NVIDIA AI Enterprise** certified servers (Dell, HPE, Supermicro)
- **CoreWeave / Lambda Labs** cloud NVL instances
- **Hugging Face Inference Endpoints** select H100 instances

## Vendor Information

| Item | Detail |
|------|------|
| **Vendor** | NVIDIA |
| **Product Page** | https://www.nvidia.com/en-us/data-center/h100/ |
| **OEM Price** | $30,000-$40,000 (OEM-dependent) |
| **Target Market** | Ultra-large LLM inference, enterprise GenAI |

## Use Cases

- ✅ **Ultra-large LLM inference** (70B+ single card)
- ✅ Long-context LLM (94GB fits 200K context)
- ✅ PCIe server deployment
- ✅ Dual-card NVL Bridge for 405B models
- ❌ Training (H100 SXM is better suited, higher NVLink bandwidth)
- ❌ HPC (use H100 SXM/H200)

## Related Cards

- [NVIDIA H100](/docs/cards/nvidia/h100) - SXM version
- [NVIDIA H200](/docs/cards/nvidia/h200) - 141GB HBM3e
- [NVIDIA B200](/docs/cards/nvidia/b200) - Next generation
- [Google TPU v7 Ironwood](/docs/cards/google/tpu-ironwood) - 192GB inference ASIC
