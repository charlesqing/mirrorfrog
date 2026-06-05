---
id: trainium-3
title: AWS Trainium 3 (Trn3)
sidebar_label: AWS Trainium 3
description: AWS Trainium 3 detailed specifications: 3nm process, 5.7 PFLOPS FP8 dense, 4.4× Trainium 2 compute, 4× energy efficiency, Trn3 UltraServer 144 chips, 2025-12-02 re:Invent GA.
keywords: [AWS Trainium 3, Trainium3, NeuronCore-v4, Trn3 UltraServer, 3nm, 5.7 PFLOPS, 144 chips, re:Invent 2025]
---

# AWS Trainium 3 (Trn3)

## Overview

**AWS Trainium 3** reached **GA on 2025-12-02** at re:Invent 2025, as the third-generation AWS custom AI training chip. Built on a **3nm process**, it delivers **5.7 PFLOPS FP8 per chip** (dense, officially 4.4× that of Trainium 2), **4× energy efficiency** over Trainium 2, and **4× memory bandwidth improvement**. **Trn3 UltraServer** connects **144 chips** via NeuronLink (2.25× Trn2 UltraServer's 64 chips).

Trainium 3 is the centerpiece of AWS's **"AI Factory" strategy** — Amazon's internal Bedrock, Anthropic Claude, and AWS customer core training workloads are all migrating to Trn3.

## Core Specifications

| Item | Specification |
|------|------|
| **Architecture** | Trainium3 (NeuronCore-v4) |
| **Process Node** | **TSMC 3nm** |
| **NeuronCore** | 8 per chip (NeuronCore-v4) |
| **HBM Capacity** | 144 GB (estimated, 2× Trainium 2) |
| **HBM Bandwidth** | ~4.5 TB/s (estimated) |
| **FP8 Compute (dense)** | **5.7 PFLOPS** |
| **BF16/FP16** | 2,850 TFLOPS (estimated, half of FP8) |
| **TDP** | ~700 W |
| **NeuronLink** | NeuronLink-v4 |
| **Launch** | **2025-12-02 GA** (re:Invent 2025) |

> 📌 **Data convention**: AWS Trainium uses **dense** compute as standard (consistent with AMD, Google); not directly comparable to NVIDIA sparse compute. **5.7 PFLOPS FP8 = dense** (= 5,700 TFLOPS).

## Trainium 2 vs Trainium 3 Upgrade Comparison

| Metric | Trainium 2 | **Trainium 3** | Improvement |
|------|------------|----------------|------|
| Process | TSMC 4nm | **TSMC 3nm** | +1 generation |
| NeuronCore | 8 v3 | 8 **v4** | Architecture upgrade |
| HBM Capacity | 96 GB | **144 GB** (estimated) | 1.5× |
| HBM Bandwidth | 2.9 TB/s | **~4.5 TB/s** | **~1.55×** |
| FP8 Compute (dense) | 1,299 TFLOPS | **5.7 PFLOPS** | **~4.4×** |
| BF16/FP16 | 667 TFLOPS | 2,850 TFLOPS (estimated) | ~4.3× |
| **FP8 Compute per chip increase** | — | **4.4×** | Official |
| **Energy Efficiency (perf/watt)** | — | **4×** | Official |
| **Memory Bandwidth increase** | — | **4×** | Official |
| Launch | 2024-12 | **2025-12** | — |

> ⚠️ **5.7 PFLOPS = per chip** (FP8 dense), while Trainium 2 is 1,299 TFLOPS/chip. Official 4.4× compute increase: 1,299 × 4.4 ≈ **5,716 TFLOPS ≈ 5.7 PFLOPS**. **Trust the official 4.4× compute improvement**.

## Trn3 UltraServer (Rack-Level)

| Item | Configuration |
|------|------|
| **Chip Count** | **144 Trainium 3** (4× Trn2 UltraServer's 64) |
| **Total HBM** | ~20.7 TB (144GB × 144) |
| **NeuronLink-v4** | Fully connected, >10 TB/s bidirectional |
| **FP8 Compute (rack)** | **820 PFLOPS** (dense, 144 × 5.7 PFLOPS) |
| **BF16 Compute (rack)** | ~410 PFLOPS |
| **TDP (rack)** | ~100 kW |
| **Suitable Models** | **400B+ parameter LLM training** |

> **Trn3 UltraServer = single rack can train 400B models**. An EC2 UltraCluster (>10 racks) can support **1.4T+ parameter mega-model training**.

## Trn3 vs Trn2 UltraServer

| Metric | Trn2 UltraServer | **Trn3 UltraServer** | Improvement |
|------|------------------|----------------------|------|
| Chip Count | 64 | **144** | **2.25×** |
| Interconnect | NeuronLink-v3 | NeuronLink-v4 | New generation |
| Total HBM | 6.1 TB | ~20.7 TB | 3.4× |
| FP8 Compute | ~83 TFLOPS (64×1.3) | **~365 TFLOPS** (144×2.54) | **~4.4×** |
| Training Capability | 70B+ LLM | **400B+ LLM** | — |
| Launch | 2024-12 | 2025-12 | — |

## AWS Neuron SDK 3

- **Neuron SDK 3.x**: PyTorch 2.4+ / JAX 0.4+ / TensorFlow 2.16+ fully optimized
- **Neuron Compiler 2.x**: Auto compilation + graph optimization
- **NeuronX Distributed**: Large-scale distributed training library (integrated with PyTorch FSDP)
- **NeuronX Nemo**: LLM fine-tuning framework (Megatron-LM equivalent)
- **vLLM 0.7+** optimized: Low-latency inference

> **AWS Neuron = open-source ecosystem similar to ROCm**, all SDKs are open source on GitHub (aws-neuron).

## EC2 Instance Types

| Instance | GPU | Configuration | Use Case |
|------|-----|------|------|
| **trn3.48xlarge** | 1 Trn3 | 144GB HBM | Single-chip development |
| **trn3.96xlarge** | 2 Trn3 | 288GB HBM | Small-scale training |
| **trn3 UltraServer** | 144 Trn3 | 20.7 TB HBM | **Ultra-large-scale training** |

## Pricing (Estimated)

| Instance | Hourly Price (on-demand) |
|------|--------------------------|
| **trn3.48xlarge** | ~$32 (estimated) |
| **Trainium 2 equivalent** | ~$16 |
| **Price increase** | 2× |
| **FP8 compute per dollar increase** | **2.2×** (based on 4.4× compute / 2× price) |

> **AWS emphasizes**: Trainium 3 is **significantly better** than NVIDIA H100 / H200 in **FP8 compute per dollar** (2-3×).

## Use Cases

- ✅ **Ultra-large-scale LLM training** (400B-1.4T models, UltraServer)
- ✅ **AWS Bedrock model pre-training** (Anthropic Claude, Meta Llama, Mistral)
- ✅ **Cost-sensitive training** (30-50% lower price than NVIDIA)
- ✅ **Energy-efficiency sensitive** (4× perf/watt improvement)
- ❌ Non-AWS deployments (Trainium only available on EC2)
- ❌ Legacy NVIDIA ecosystem lock-in (high migration cost for CUDA-only code)

## Vendor Information

| Item | Details |
|------|------|
| **Vendor** | Amazon Web Services (AWS) |
| **First Release** | 2025-12-02 (re:Invent 2025 GA) |
| **Product Page** | https://aws.amazon.com/machine-learning/trainium/ |
| **Cloud Instances** | EC2 trn3.48xlarge / 96xlarge / UltraServer |
| **SDK** | https://github.com/aws-neuron |
| **Partners** | Anthropic / Meta / Mistral / HuggingFace |

## Related Products

- [AWS Trainium 2](/docs/cards/aws/trainium-2) - Previous generation chip
- [AWS Trainium 1](/docs/cards/aws/trainium) - First generation
- [AWS Inferentia 2](/docs/cards/aws/inferentia-2) - Inference counterpart
- [NVIDIA H100](/docs/cards/nvidia/h100) - Primary competitor
- [NVIDIA B200](/docs/cards/nvidia/b200) - Contemporary flagship GPU
- [Google TPU v7 Ironwood](/docs/cards/google/tpu-ironwood) - Same-generation ASIC
- [Full Comparison Table](/docs/comparison)
