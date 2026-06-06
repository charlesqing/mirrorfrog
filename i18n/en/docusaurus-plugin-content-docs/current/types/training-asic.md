---
id: training-asic
title: AI Training-Dedicated ASIC (TPU, Gaudi, Trainium)
sidebar_label: AI Training ASIC
description: "2025 AI training ASIC complete guide: Google TPU v5p/v6e/v7 Ironwood, Intel Gaudi 2/3, AWS Trainium 2 spec comparison and selection."
keywords: [AI ASIC, Google TPU, Intel Gaudi, AWS Trainium, AI training chip]
---

# AI Training-Dedicated ASIC Complete Guide

AI training ASICs (Application-Specific Integrated Circuits) are custom chips **purpose-built for AI training**, distinct from general-purpose GPUs. They trade flexibility for **higher energy efficiency** and **better per-unit compute cost**.

## Mainstream AI Training ASIC Comparison

| Model | Vendor | Process | Compute (BF16) | Memory | Interconnect | Availability |
|-------|--------|---------|----------------|--------|-------------|-------------|
| **TPU 8t (Trillium 2 Training)** | Google | 3nm | ~3,500 TFLOPS | 216GB HBM | 3D Torus + Axion CPU | Google Cloud |
| **TPU 8i (Trillium 2 Inference)** | Google | 3nm | ~5,500 TFLOPS | 288GB HBM | 3D Torus | Google Cloud |
| **Google TPU v7 (Ironwood)** | Google | 5nm | 2,307 TFLOPS | 192GB HBM | 3D Torus, 9,216 Pod | Google Cloud |
| **Google TPU v6e (Trillium)** | Google | 5nm | 918 TFLOPS | 32GB HBM | 2D Torus, 256 Pod | Google Cloud |
| **Google TPU v5p** | Google | 5nm | 459 TFLOPS | 95GB HBM | 3D Torus, 8,960 Pod | Google Cloud |
| **AWS Trainium 3 (Trn3)** | Amazon | **3nm** | 1,300 TFLOPS | **144GB HBM** | NeuronLink-v4, **144 UltraServer** | AWS Cloud (2025-12 GA) |
| **AWS Trainium 2** | Amazon | 4nm | 667 TFLOPS | 96GB HBM | NeuronLink, 64 UltraServer | AWS Cloud |
| **AWS Trainium 1** | Amazon | 7nm | 191 TFLOPS | 32GB HBM | NeuronLink, 16 cluster | AWS Cloud |
| **Intel Gaudi 3** | Intel | 5nm | 1,835 TFLOPS | 128GB HBM2e | 24× 200GbE | Commercial |
| **Intel Gaudi 2** | Intel | 7nm | 432 TFLOPS | 96GB HBM2e | 24× 100GbE | Commercial |

## Google TPU Series Evolution

| Gen | Name | Compute (BF16) | HBM | Interconnect | Primary Use |
|-----|------|----------------|-----|-------------|-------------|
| v4 | — | 275 TFLOPS | 32GB | 3D Torus | Training |
| v5p | — | 459 TFLOPS | 95GB | 3D Torus | Training |
| v5e | — | 197 TFLOPS | 16GB | 2D Torus | Inference |
| v6e | Trillium | 918 TFLOPS | 32GB | 2D Torus | Training/inference |
| **v7** | **Ironwood** | **2,307 TFLOPS** | **192GB** | **3D Torus** | **Inference-first** |
| **8t** | **Trillium 2 Training** | **~3,500 TFLOPS** | **216GB** | **3D Torus + Axion CPU** | **Training-dedicated** |
| **8i** | **Trillium 2 Inference** | **~5,500 TFLOPS** | **288GB** | **3D Torus** | **Inference-dedicated** |

## Selection Guide

### By Cloud Provider

- **Google Cloud**: TPU v5p / v6e / v7 Ironwood / **TPU 8t (training) + 8i (inference) split (2026-04)**
- **AWS**: **Trainium 3 (2025-12 GA, 3nm)** / Trainium 2
- **On-premises / private cloud**: Intel Gaudi 3 (open standard Ethernet)

### By Scale

- **Ultra-large scale (trillion parameters)**: TPU 8t (216GB) + Cerebras WSE-3 / WSE-4
- **Large scale (10B+ parameters)**: TPU v6e, Gaudi 3, Trainium 2/3
- **Medium scale (1B+ parameters)**: TPU v5e, Gaudi 2, Trainium 1
- **400B+ model training**: **Trn3 UltraServer (144 chips, 52 PFLOPS FP8)**

## Key Advantages vs GPU

- **Energy efficiency**: 2-3× advantage in performance per watt
- **Per-unit compute cost**: 30-50% advantage
- **Interconnect scale**: 8,000+ chip Pods
- **Custom architecture**: Avoids the waste of GPU general-purpose overhead

## Key Disadvantages

- **Software ecosystem maturity**: CUDA still dominates
- **Vendor lock-in**: TPU is Google Cloud only
- **Model migration cost**: Requires re-optimization

## Detailed Product Pages

- [Google TPU v5p](/docs/cards/google/tpu-v5p) - Premium training
- [Google TPU v6e (Trillium)](/docs/cards/google/tpu-v6e) - Sixth generation
- [Google TPU v7 (Ironwood)](/docs/cards/google/tpu-ironwood) - Seventh-gen latest
- [Google TPU 8t](/docs/cards/google/tpu-8t) - 2026-04 training-dedicated
- [Google TPU 8i](/docs/cards/google/tpu-8i) - 2026-04 inference-dedicated
- [Intel Gaudi 2](/docs/cards/intel/gaudi-2) - Cost-effective
- [Intel Gaudi 3](/docs/cards/intel/gaudi-3) - 4× upgrade
- [Intel Jaguar Shores](/docs/cards/intel/jaguar-shores) - 2027-2028 rack-scale
- [AWS Trainium](/docs/cards/aws/trainium) - First generation
- [AWS Trainium 2](/docs/cards/aws/trainium-2) - 4× performance
- [AWS Trainium 3](/docs/cards/aws/trainium-3) - 2025-12 GA, 3nm

## Related Types

- [AI Training GPU (NVIDIA/AMD/Huawei)](/docs/types/training-gpu)
- [Wafer-Scale Supercomputing Training](/docs/types/training-wafer)
- [AI Inference ASIC (Inferentia, TPU v5e)](/docs/types/inference-asic)
- [Complete Comparison Table](/docs/comparison)
