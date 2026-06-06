---
id: inference-asic
title: AI Inference-Dedicated ASIC
sidebar_label: AI Inference ASIC
description: "AI inference-dedicated ASIC complete guide: AWS Inferentia 1/2, Google TPU v5e, Groq LPU, low-latency solutions focused on LLM inference."
keywords: [AI inference ASIC, AWS Inferentia, Google TPU v5e, Groq LPU, low-latency inference]
---

# AI Inference-Dedicated ASIC

AI inference ASICs are chips **purpose-built for inference workloads**. Unlike training ASICs, they focus more on **latency**, **throughput**, and **per-token cost**.

## Mainstream AI Inference ASIC Comparison

| Model | Vendor | Memory | Compute (INT8) | TDP | Interconnect | Availability |
|-------|--------|--------|----------------|-----|-------------|-------------|
| **Groq 3 LPX Rack** | NVIDIA (acquired Groq) | **128GB SRAM aggregate** | ~640,000 TOPS | ~80kW (rack) | 640 TB/s | **2026 H2 (256 LPU/rack)** |
| **TPU 8i (Trillium 2)** | Google | **288GB HBM** | ~22,000 TOPS (FP8 dense) | N/A | 3D Torus | Google Cloud (2026-04) |
| **Google TPU v7 (Ironwood)** | Google | 192GB HBM | 4,614 TFLOPS (FP8) | N/A | 3D Torus, 9,216 Pod | Google Cloud |
| **AWS Trainium 3** | Amazon | 144GB HBM | 5,716 TFLOPS (FP8) | ~700W | NeuronLink-v4 | AWS Trn3 (2025-12 GA) |
| **AWS Inferentia 2** | Amazon | 32GB HBM2e | ~190 TOPS | ~150W | 12-chip interconnect | AWS Inf2 instances |
| **AWS Inferentia 1** | Amazon | N/A | 128 TOPS | 35W | N/A | AWS Inf1 instances |
| **Google TPU v5e** | Google | 16GB HBM | 197 TOPS | N/A | 2D Torus, 256 Pod | Google Cloud |
| **Groq LPU (v1)** | Groq | 228MB SRAM | 1,000 TOPS (est.) | 300W (system) | GroqSync | GroqCloud API |
| **Trainium 2** | Amazon | 96GB HBM | 1,299 TFLOPS (FP8) | ~700W | NeuronLink, 64 UltraServer | AWS Trn2 |

## Selection Guide

### By LLM Scale

- **Ultra-large LLM (&gt;300B)**: **TPU 8i (288GB HBM)**, TPU v7 Ironwood (192GB per chip)
- **Large LLM (70B-300B)**: TPU v7 / Inferentia 2 (12 chips = 384GB) / Trainium 3
- **Medium LLM (7B-70B)**: Inferentia 2 / Groq LPU / TPU v5e
- **Small LLM (&lt;7B)**: Inferentia 1 / Groq LPU

### By Latency Requirement

- **Extreme low latency (TTFT &lt; 20ms)**: **Groq 3 LPX Rack** (post NVIDIA acquisition, 2026 H2)
- **Very low latency (&lt;50ms first token)**: Groq LPU (v1)
- **Low latency (&lt;200ms)**: TPU 8i / TPU v5e / Inferentia 2
- **Batch throughput priority**: Trainium 3 / TPU v7

### By Deployment Method

- **AWS Cloud**: Inferentia 2, **Trainium 3 (2025-12 GA)**
- **Google Cloud**: TPU v5e, TPU v6e, TPU v7, **TPU 8t (training) + 8i (inference)**
- **GroqCloud API** (post NVIDIA acquisition): **Groq 3 LPX (2026 H2) + Groq LPU (v1)**
- **On-premises / private cloud**: Groq GroqRack, AWS Outposts, **Intel Jaguar Shores (2027-2028)**

## Key Differences

### Inferentia 2 vs Groq LPU

- **Inferentia 2**: Cloud-rentable, 70B model needs multiple chips
- **Groq LPU**: Ultra-low latency LLM, but single-chip SRAM only 228MB (70B model needs 30+ chips)

### TPU v5e vs TPU v7

- **TPU v5e**: Lowest inference cost, 16GB memory
- **TPU v7 Ironwood**: 192GB large memory, single chip loads 70B+ models

## Detailed Product Pages

- [AWS Inferentia](/docs/cards/aws/inferentia) - First generation
- [AWS Inferentia 2](/docs/cards/aws/inferentia-2) - 32GB HBM
- [AWS Trainium 2](/docs/cards/aws/trainium-2) - Training-inference fungible
- [AWS Trainium 3](/docs/cards/aws/trainium-3) - 2025-12 GA, 3nm
- [Google TPU v5p](/docs/cards/google/tpu-v5p) - Training focused
- [Google TPU v6e (Trillium)](/docs/cards/google/tpu-v6e) - Training/inference fungible
- [Google TPU v7 (Ironwood)](/docs/cards/google/tpu-ironwood) - Inference-era flagship
- [Google TPU 8i](/docs/cards/google/tpu-8i) - 2026-04 inference-dedicated
- [Groq LPU](/docs/cards/others/groq-lpu) - Ultra-low latency
- [NVIDIA Groq 3 LPX](/docs/cards/nvidia/groq-3-lpx) - 2026 H2 256 LPU rack
- [Qualcomm Cloud AI 100](/docs/cards/others/qualcomm-ai100) - Low-power inference

## Related Types

- [AI Inference GPU (NVIDIA L4/L40S/T4)](/docs/types/inference-gpu)
- [AI Training ASIC](/docs/types/training-asic)
- [Complete Comparison Table](/docs/comparison)
