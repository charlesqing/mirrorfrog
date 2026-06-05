---
id: tpu-v6p
title: Google TPU v6p (Pathway, 2024-12)
sidebar_label: TPU v6p
description: "Google TPU v6p (Pathway) detailed specs: Trillium training-specific, 96GB HBM, 2.7 PF FP8 dense, JAX/Pathways software stack."
keywords: [Google TPU v6p, TPU v6p, Trillium training, Pathway, JAX, TPU 6P]
---

# Google TPU v6p (Pathway, 2024-12)

## Overview

**Google TPU v6p** (codename **Pathway**, unofficially known as **Trillium Training Edition**) is the **training-specific variant** of Google's 6th generation TPU, **released 2024-12**. Compared to the same-gen inference variant **TPU v6e (Trillium)**, the v6p upgrades **HBM capacity** (32GB → **96GB**) and adds **Pathways distributed software** support. It is the primary chip powering **Google's internal Gemini 1.5 Pro/Ultra, Google Search, and advertising recommendation system** training.

**Key positioning**:
- **v6e (Trillium)** = Inference + mid-scale training (**TPU v6e** separate page)
- **v6p (Pathway)** = Large-scale training + Pathways software stack
- **v7 (Ironwood)** = 2025 H2 inference-specific (**TPU Ironwood** separate page)

## Core Specifications

| Item | Spec |
|------|------|
| **Codename** | Trillium Training Edition (Google internal: Pathway) |
| **Architecture** | Google TPU v6 (same generation as v6e) |
| **Process** | TSMC 5nm (vs v5e 7nm) |
| **SparseCore** | 4× improved (embedding recommendation processing) |
| **HBM** | **96 GB HBM2** (v6e only 32GB) |
| **HBM Bandwidth** | **1.6 TB/s** (v6e only 819 GB/s) |
| **MXU** | 2× 128×128 (same as v6e) |
| **FP8 dense** | **2,700 TFLOPS** |
| **BF16 dense** | **1,350 TFLOPS** |
| **INT8** | 2.7 POPS |
| **Sparsity** | 2:4 structured sparsity (2× acceleration) |
| **TDP** | **~450 W** (same as v6e) |
| **Form Factor** | Cloud TPU v6p pod slice |
| **Pod Scale** | 9,216 chips (v6e only 256) |
| **Pod Compute** | **24.9 EF FP8 dense** (v6e only 0.4 EF) |
| **Pod Bandwidth** | **14.7 TB/s intra-domain** (v6e only 1.6 TB/s) |
| **Production** | 2024-12 |
| **Price** | Not public (Google Cloud internal) |

## Comparison with Same-Gen v6e

| Metric | TPU v6p (Pathway) | TPU v6e (Trillium) | Difference |
|------|--------------------|---------------------|------|
| Positioning | **Training-specific** | Inference + mid training | - |
| Memory | **96GB HBM2** | 32GB HBM2 | 3× |
| Bandwidth | **1.6 TB/s** | 819 GB/s | 2× |
| FP8 dense | **2.7 PF** | 1.5 PF | 1.8× |
| Sparsity | **2:4 structured** | 1:2 structured | 2× acceleration |
| SparseCore | 4× improved | Baseline | 4× |
| Pod Scale | **9,216 chips** | 256 chips | 36× |
| Pod Compute | **24.9 EF FP8** | 0.4 EF FP8 | 62× |
| Pod Bandwidth | 14.7 TB/s | 1.6 TB/s | 9× |
| Interconnect | **ICI + DCN 6.4 Tb/s** | ICI 656 GB/s | 10× |
| Pathways | **Full support** | Basic | Significant |

## TPU Generations Comparison

| Generation | Codename | Release | Memory | FP8 dense | Pod Scale |
|------|------|------|------|-----------|----------|
| TPU v2 | - | 2018 | 16GB HBM | N/A (FP16 180 TF) | 256 |
| TPU v3 | - | 2019 | 32GB HBM | N/A (FP16 420 TF) | 1024 |
| TPU v4 | - | 2021 | 32GB HBM2 | 1.1 PF | 4096 |
| TPU v5e | - | 2023 | 16GB HBM2 | 0.4 PF | 256 |
| TPU v5p | - | 2023-Q3 | 96GB HBM2 | 1.89 PF | 8,960 |
| TPU v6e | Trillium | 2024-Q2 | 32GB HBM2 | 1.5 PF | 256 |
| **TPU v6p** | **Pathway** | **2024-12** | **96GB HBM2** | **2.7 PF** | **9,216** |
| TPU v7 | Ironwood | 2025 H2 | 192GB HBM3E | 4.6 PF | 9,216 |

## Pathways Software Stack

| Layer | Tool | Description |
|------|------|------|
| **AI Frameworks** | **JAX** | Google-recommended (Flax / Optax / RLlib) |
| | **Pathways** | Heterogeneous accelerator unified programming (v6p full support) |
| | TensorFlow | Compatible (v6p optimized) |
| | PyTorch/XLA | Compatible (v6p experimental) |
| **Compiler** | **XLA** | Accelerator compiler (v6p optimized edition) |
| **Distributed** | **GSPMD** | Tensor parallelism (v6p 9K chip optimized) |
| **Collective Communication** | **DUS** | Proprietary (v6p 14.7 TB/s intra-domain) |
| **Accelerator Abstraction** | **Pathways Runtime** | Cross TPU/GPU/CPU heterogeneous scheduling |

> **Pathways strategy**: **A single programming model** across TPU pods simplifies ultra-large LLM training. Google internally uses Pathways to train **Gemini 1.5/2.0**.

## TPU v6p Use Cases

- ✅ **Ultra-large LLM training** (Gemini 1.5/2.0, PaLM 2, Gemma 2)
- ✅ **Multimodal models** (video + text + image)
- ✅ **Recommendation systems** (SparseCore 4× acceleration)
- ✅ **Google Cloud TPU customers** (Anthropic, Cohere, etc.)
- ✅ **JAX research** (DeepMind, Google Research)
- ❌ China market (export controls)
- ❌ Native PyTorch (requires XLA translation, 10-20% performance loss)

## Pod Topology: 9,216 Chips

| Dimension | Configuration |
|------|------|
| **Pod Size** | 9,216 v6p chips |
| **Pod Topology** | 12 rows × 12 racks × 64 chips |
| **Pod Total Compute** | 24.9 EF FP8 dense |
| **Pod Total Memory** | 885 TB HBM2 |
| **Pod Interconnect** | ICI (chip-to-chip) + DCN (rack-to-rack) |
| **Pod Power** | ~4.1 MW (TPU only) |
| **Pod Physical Size** | ~12 racks (including cooling) |
| **Pod Price** | $50-100M (estimated) |

> **TPU v6p Pod advantage**: **9K chips with 14.7 TB/s interconnect** is critical for **Gemini 1.5/2.0 trillion-parameter model** training (a single card's 96GB cannot hold full model weights).

## Google Internal Usage

- **Gemini 1.5 Pro/Ultra training** (TPU v6p + v5p hybrid)
- **Google Search ranking models** (MUM, BERT improvements)
- **Advertising recommendation system** (SparseCore embedding acceleration)
- **YouTube video understanding** (multimodal)
- **DeepMind AlphaFold 3** (structure prediction)
- **Waymo autonomous driving** (perception models)
- **Google Cloud customers**: Anthropic (Claude 3.5), Cohere, AssemblyAI, Mistral

## Vendor Information

| Item | Detail |
|------|------|
| **Company** | Google LLC |
| **Product Page** | https://cloud.google.com/tpu |
| **Business Unit** | Google Cloud + Google DeepMind |
| **TPU Chip Design** | Google Silicon team (Haifa, Israel + Mountain View, USA) |
| **Foundry** | TSMC 5nm (InFO_SoC packaging) |
| **Google Cloud TPU Pricing** | v6p ~$4-5/hr (pod slice) |
| **Customers** | Google internal + Anthropic / Cohere / Mistral, etc. |

## Key Features

- **96GB HBM2**: Large single-card memory, 70B+ model training without multi-card
- **9,216-chip Pod**: One of the largest single domains in the industry (vs H100 8K cluster requiring InfiniBand)
- **Pathways distributed**: Single programming model across 9K chips
- **SparseCore 4×**: Recommendation system / MoE acceleration
- **JAX deeply optimized**: JAX + Flax performance comparable to or slightly ahead of PyTorch + CUDA
- **Drawbacks**: Google Cloud deployment only, weak PyTorch compatibility

## v6p vs v5p Comparison

| Metric | TPU v6p (2024-12) | TPU v5p (2023-Q3) | Improvement |
|------|--------------------|--------------------|------|
| Memory | 96GB HBM2 | 96GB HBM2 | Same |
| Bandwidth | 1.6 TB/s | 1.4 TB/s | +14% |
| FP8 dense | 2.7 PF | 1.89 PF | +43% |
| Sparsity | 2:4 structured | 1:2 structured | 2× acceleration |
| SparseCore | 4× improved | Baseline | 4× |
| Pod Scale | 9,216 | 8,960 | 3% |
| Pod Compute | 24.9 EF | 16.9 EF | +47% |
| Pathways | Full | Basic | Significant |
| Process | TSMC 5nm | TSMC 5nm | Same |

## Related Cards

- [Google TPU v6e (Trillium)](/docs/cards/google/tpu-v6e) - Inference edition
- [Google TPU v5p](/docs/cards/google/tpu-v5p) - Previous-gen training
- [Google TPU v4](/docs/cards/google/tpu-v4) - Earlier training
- [Google TPU Ironwood (v7)](/docs/cards/google/tpu-ironwood) - Next generation
- [Google TPU 8t](/docs/cards/google/tpu-8t) - 2026 training
- [Google TPU 8i](/docs/cards/google/tpu-8i) - 2026 inference
- [NVIDIA B200](/docs/cards/nvidia/b200) - Industry comparison
- [AMD MI355X](/docs/cards/amd/mi355x) - Industry comparison
