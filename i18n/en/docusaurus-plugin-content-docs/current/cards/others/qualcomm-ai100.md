---
id: qualcomm-ai100
title: Qualcomm Cloud AI 100
sidebar_label: Qualcomm Cloud AI 100
description: "Qualcomm Cloud AI 100 detailed specs: 400 TOPS INT8, AIC100 compiler, low-power data center inference."
keywords: [Qualcomm Cloud AI 100, Qualcomm AI 100, AIC100, 400 TOPS, data center inference, low power]
---

# Qualcomm Cloud AI 100 (AIC100)

## Product Overview

Qualcomm **Cloud AI 100** (codename **AIC100**) is Qualcomm's ASIC for **data center AI inference**, positioned as a low-power replacement for NVIDIA T4/L4. Commercially deployed on **Hugging Face Inference API**, Oracle Cloud, DaVinci, etc.

Based on Hexagon NPU IP, **400 TOPS INT8** (per card), **typical power 75W** (performance/watt advantage significant).

## Core Specs

| Item | Parameter |
|------|------|
| **Architecture** | Qualcomm AI Engine (Hexagon-based) |
| **Process** | TSMC 7nm |
| **INT8 Compute** | 400 TOPS |
| **FP16** | 100 TFLOPS (official) |
| **INT4** | 800 TOPS (sparse) |
| **On-chip SRAM** | 16 MB |
| **Memory** | 16/32/64 GB LPDDR4X |
| **Memory Bandwidth** | 51.2 GB/s (16GB) / 102.4 GB/s (64GB) |
| **TDP** | 75 W (standard) / 150 W (high-performance mode) |
| **Form Factor** | PCIe Gen4 x16 dual-slot card / M.2 / HHHL |
| **Interconnect** | PCIe Gen4 |

## Product Line

| Model | INT8 | Memory | TDP | Form Factor |
|------|------|------|-----|------|
| **AI 100 Standard** | 200 TOPS | 16 GB | 75 W | PCIe / M.2 |
| **AI 100 Pro** | 400 TOPS | 32 GB | 75 W | PCIe |
| **AI 100 Ultra** | 400 TOPS | 64 GB | 150 W | PCIe dual-slot |

## Performance/Watt Advantage

| Comparison | Performance/Watt |
|------|-----------|
| **Qualcomm AI 100 Ultra** | 2.67 TOPS/W |
| NVIDIA L4 | ~2.5 TOPS/W |
| NVIDIA T4 | 2.5 TOPS/W |
| NVIDIA A100 80GB | 1.0 TOPS/W |
| **Advantage** | **~2.7x vs A100** |

> 75W standard power = **deployable in standard 1U servers, single chassis 8-16 cards**.

## Software Ecosystem

### Compiler and Runtime
- **Qualcomm AI Engine Direct SDK** (C/C++ API)
- **Qualcomm Neural Processing SDK** (Python)
- **GLOW** (LLVM-based AI compiler, originally from Facebook)

### Framework Support
- **TensorFlow / PyTorch / ONNX** (via quantization conversion)
- **Apache TVM** (auto quantization/compilation)

### Model Support
- Mainstream CV models (ResNet, EfficientNet, YOLO)
- Mainstream NLP models (BERT, RoBERTa)
- Mainstream LLMs (Llama 2, Mistral, Falcon quantized editions)

## Deployment Cases

- **Hugging Face Inference Endpoints** -- some endpoints run LLM inference on AI 100
- **Oracle Cloud Infrastructure (OCI)** -- offers AI 100 bare metal instances
- **DaVinci** -- AI 100 cluster service
- **Cirrascale** -- cloud AI 100 rental

## Vendor Information

| Item | Content |
|------|------|
| **Vendor** | Qualcomm Technologies, Inc. |
| **Product Page** | https://www.qualcomm.com/products/technology/processors/cloud-ai-100 |
| **Price** | $1,500-$3,500 (depending on model) |
| **Target Market** | data center inference, edge servers, hyperscale cloud |

## Use Cases

- ✅ **Low-power data center inference** (inference/watt SOTA)
- ✅ Vision AI (CV inference)
- ✅ Speech AI (NLP inference)
- ✅ Edge servers (75W single card)
- Warning: LLM inference (ecosystem decent, but performance behind NVIDIA H100/L40S)
- ❌ Large model training (not supported)

## Related Products

- [NVIDIA T4](/docs/cards/nvidia/t4) - same-class inference card
- [NVIDIA L4](/docs/cards/nvidia/l4) - Ada inference replacement
- [Groq LPU](/docs/cards/others/groq-lpu) - also LLM inference ASIC
- [Google TPU v6e](/docs/cards/google/tpu-v6e) - another data center inference ASIC
