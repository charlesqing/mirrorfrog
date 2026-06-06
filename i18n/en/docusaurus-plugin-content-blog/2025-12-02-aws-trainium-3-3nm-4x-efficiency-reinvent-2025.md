---
slug: aws-trainium-3-3nm-4x-efficiency-reinvent-2025
title: 'AWS Trainium 3 GA: 3nm Process + 4.4× Compute + 4× Efficiency + 144-Chip UltraServer'
authors: [aicomputecards]
tags: [product-launch, cloud-pricing]
description: "2025-12-02: AWS announces GA of its 3rd-gen custom AI chip Trainium 3 at re:Invent 2025. 3nm process, 144GB HBM, 4.4× compute / 4× efficiency / 4× memory bandwidth, Trn3 UltraServer with 144 chips."
---

**On December 2, 2025**, at the re:Invent 2025 conference, AWS **formally GA'd** its third-generation custom AI training chip **Trainium 3**. This is a critical upgrade to the AWS compute landscape: 3nm process, 4.4× compute improvement, 4× efficiency improvement, Trn3 UltraServer with 144 chips. This article provides a detailed analysis.

{/* truncate */}

## Core Specifications

| Item | Trainium 2 (2024) | **Trainium 3 (2025-12 GA)** | Improvement |
|------|-------------------|------------------------------|------|
| Process | TSMC 4nm | **TSMC 3nm** | +1 generation |
| NeuronCore | 8 × v3 | 8 × **v4** | Architecture upgrade |
| HBM capacity | 96 GB | **144 GB** | 1.5× |
| HBM bandwidth | 2.9 TB/s | **~4.5 TB/s** | ~1.55× |
| FP8 compute (dense) | 1,299 TFLOPS | **5,716 TFLOPS** (official 4.4×) | **4.4×** |
| BF16/FP16 | 667 TFLOPS | 1,300 TFLOPS | 2× |
| **Per-chip efficiency** | 1× | **4×** | 4× |
| **Memory bandwidth** | 1× | **4×** | 4× |
| NeuronLink | NeuronLink-v3 | **NeuronLink-v4** | Next generation |
| TDP | ~700 W | ~700 W | unchanged |
| Release date | 2024-12 | **2025-12** | — |

> **Official 4.4× compute improvement + 4× efficiency + 4× memory bandwidth** — Trainium 3 is AWS's flagship chip with simultaneous massive upgrades across three dimensions.

## Trn3 UltraServer (Rack-Level)

| Item | Configuration |
|------|------|
| **Chip count** | **144 Trainium 3 chips** |
| Total HBM | ~20.7 TB (144GB × 144) |
| NeuronLink-v4 | Fully interconnected, &gt;10 TB/s bidirectional |
| FP8 compute (rack) | **52 PFLOPS** (dense) |
| BF16 compute (rack) | ~187 PFLOPS |
| TDP (rack) | ~100 kW |
| **Capable models** | **400B+ parameter LLM training** |

> **Trn3 UltraServer = single rack can train 400B models**. A single EC2 UltraCluster (&gt;10 racks) can support **1.4T+ parameter mega-model training**.

## Trn3 vs Trn2 UltraServer Upgrade

| Metric | Trn2 UltraServer | **Trn3 UltraServer** | Improvement |
|------|------------------|----------------------|------|
| Chip count | 64 | **144** | **2.25×** |
| Interconnect | NeuronLink-v3 | NeuronLink-v4 | Next generation |
| Total HBM | 6.1 TB | ~20.7 TB | 3.4× |
| FP8 compute | ~83 TFLOPS | **52 PFLOPS** | **~626×** |
| Training capacity | 70B+ LLM | **400B+ LLM** | — |
| Release date | 2024-12 | 2025-12 | — |

> Trn3 UltraServer is one of the **most cost-effective large-scale training solutions** in 2026.

## AWS Neuron SDK 3

- **Neuron SDK 3.x**: PyTorch 2.4+ / JAX 0.4+ / TensorFlow 2.16+ fully optimized
- **Neuron Compiler 2.x**: auto-compilation + graph optimization
- **NeuronX Distributed**: large-scale distributed training library (integrated with PyTorch FSDP)
- **NeuronX Nemo**: LLM fine-tuning framework (Megatron-LM equivalent)
- **vLLM 0.7+ optimized version**: low-latency inference

> **AWS Neuron = open-source ecosystem similar to ROCm**, all SDKs open-source on GitHub (aws-neuron).

## EC2 Instance Types

| Instance | GPU | Configuration | Use Case |
|------|-----|------|------|
| **trn3.48xlarge** | 1 × Trn3 | 144GB HBM | Single-chip development |
| **trn3.96xlarge** | 2 × Trn3 | 288GB HBM | Small-scale training |
| **trn3 UltraServer** | 144 × Trn3 | 20.7 TB HBM | **Extreme-scale training** |

## Pricing and Per-Dollar Performance

| Instance | Estimated Hourly Price (on-demand) |
|------|-------------------------------|
| **trn3.48xlarge** | ~$32 |
| **Trainium 2 equivalent instance** | ~$16 |
| **Price increase** | 2× |
| **Per-dollar FP8 compute improvement** | **2.2×** (at 4.4× compute / 2× price) |

> **AWS emphasizes**: Trainium 3 is **significantly better** than NVIDIA H100 / H200 in **per-dollar FP8 compute** (2-3×).

## Comparison with NVIDIA Contemporaries

| Metric | Trainium 3 | NVIDIA H200 | NVIDIA B200 |
|------|------------|-------------|-------------|
| Process | TSMC 3nm | TSMC 4N | TSMC 4NP |
| HBM capacity | 144 GB | 141 GB | 192 GB |
| HBM bandwidth | 4.5 TB/s | 4.8 TB/s | 8 TB/s |
| FP8 compute (dense) | 5.7 PFLOPS | 1.0 PFLOPS | 4.5 PFLOPS |
| FP16 compute | 1.3 PFLOPS | 1.0 PFLOPS | 2.25 PFLOPS |
| TDP | 700 W | 700 W | 1,000 W |
| Interconnect | NeuronLink-v4 | NVLink 4 | NVLink 5 |
| Availability | AWS Cloud only | Commercial | Commercial |
| Software | Neuron SDK 3 | CUDA | CUDA |
| Per-dollar performance | **2-3× advantage** | 1× | 1.5× |

## Applicable Scenarios

- ✅ **Extreme-scale LLM training** (400B-1.4T models, UltraServer)
- ✅ **AWS Bedrock model pretraining** (Anthropic Claude, Meta Llama, Mistral)
- ✅ **Cost-sensitive training** (priced 30-50% below NVIDIA)
- ✅ **Energy-efficiency sensitive** (4× per-watt performance improvement)
- ❌ Non-AWS deployment (Trainium only sold via EC2)
- ❌ Legacy NVIDIA ecosystem lock-in (CUDA-only code migration costs are high)

## AWS Customer Case Studies

Key customers announced by AWS at re:Invent 2025:

| Customer | Application |
|------|------|
| **Anthropic** | Claude training (already using Trn2, now migrating to Trn3) |
| **Meta** | Llama 4 training |
| **Mistral** | Mistral Large 3 training |
| **HuggingFace** | Open LLM training |
| **AWS Bedrock** | Internal managed model training |

## Detailed Product Pages

- [AWS Trainium 3 Full Specs](/docs/cards/aws/trainium-3)
- [AWS Trainium 2 (Previous Gen)](/docs/cards/aws/trainium-2)
- [AWS Trainium 1 (First Gen)](/docs/cards/aws/trainium)
- [AWS Inferentia 2 (Inference Counterpart)](/docs/cards/aws/inferentia-2)
- [NVIDIA H100 (Main Competitor)](/docs/cards/nvidia/h100)
- [Future Roadmap](/docs/roadmap)

## Summary

AWS Trainium 3 is one of the key releases in the AI chip industry in 2025:

1. **3nm process** + **4.4× compute** + **4× efficiency** — AWS compute landscape comprehensively upgraded
2. **Trn3 UltraServer 144 chips** — single rack trains 400B+ models
3. **Per-dollar FP8 compute 2-3× NVIDIA** — AWS training cost advantage
4. **Neuron SDK 3 fully open-source** — lowers software migration cost
5. **Anthropic, Meta, Mistral fully adopted** — AWS compute ecosystem expanded

In 2026, Trainium 3 will be the compute foundation for **AWS's internal core training workloads**.
