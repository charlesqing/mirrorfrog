---
id: tpu-v5e
title: Google TPU v5e (Trillium Training-Lite, 2023)
sidebar_label: TPU v5e
description: "Google TPU v5e detailed specs: 5nm, 16GB HBM2, 400 TF FP8 dense, inference + small-scale training, value flagship."
keywords: [Google TPU v5e, TPU v5e, 5nm, 16GB HBM2, 400 TF FP8, Training-Lite, inference optimized]
---

# Google TPU v5e (Trillium Training-Lite, 2023)

## Overview

**Google TPU v5e** (unofficial codename **Trillium-Lite**) is the **entry-level / value-oriented** version of Google's 5th generation TPU, **released 2023-Q2**. Built on **TSMC 5nm**, featuring **16GB HBM2** memory, **400 TFLOPS FP8 dense** compute, and **180W TDP**. It is positioned for **inference + small-to-mid-scale training**, priced ~70% lower per chip than the **TPU v5p** (training flagship).

**Key positioning**:
- **TPU v5p** (2023-Q3): 96GB HBM2, 1.89 PF FP8, training-only — separate page
- **TPU v5e** (2023-Q2): **16GB HBM2, 400 TF FP8, inference + small training** — **this page**
- **TPU v6e** (2024-Q2): 32GB HBM2, 1.5 PF FP8, Trillium — separate page
- **TPU v6p** (2024-12): 96GB HBM2, 2.7 PF FP8, Pathway training — separate page

## Core Specifications

| Item | Spec |
|------|------|
| **Codename** | Trillium-Lite (Google internal: v5e) |
| **Architecture** | Google TPU v5 (same generation as v5p) |
| **Process** | TSMC 5nm |
| **MXU** | 128×128 (2 units, v5p has 4) |
| **HBM** | **16GB HBM2** (v5p: 96GB) |
| **HBM Bandwidth** | **400 GB/s** (v5p: 1.4 TB/s) |
| **FP8 dense** | **400 TFLOPS** (v5p: 1.89 PF) |
| **BF16 dense** | 200 TFLOPS |
| **INT8** | 400 TOPS |
| **TDP** | **180W** (v5p: 450W) |
| **Form Factor** | Cloud TPU v5e pod slice |
| **Pod Scale** | **256 chips** (v5p: 8,960) |
| **Pod Compute** | 102 TF FP8 dense (v5p: 16.9 EF) |
| **Pod Bandwidth** | 1.6 TB/s intra-domain |
| **Production** | 2023-Q2 |
| **Price (Google Cloud)** | ~$1.20/hr (pod slice) |

## Comparison with TPU v5p

| Metric | TPU v5e (2023-Q2) | TPU v5p (2023-Q3) | Difference |
|------|---------------------|---------------------|------|
| **Positioning** | Inference + small training | **Large-scale training** | - |
| **Process** | 5nm | 5nm | Same |
| **MXU** | 2× 128×128 | 4× 128×128 | 1/2 |
| **HBM** | **16GB HBM2** | 96GB HBM2 | 1/6 |
| **Bandwidth** | 400 GB/s | 1.4 TB/s | 1/3.5 |
| **FP8 dense** | **400 TF** | 1.89 PF | 1/4.7 |
| **TDP** | **180W** | 450W | 1/2.5 |
| **Pod Scale** | **256** | 8,960 | 1/35 |
| **Price (Google Cloud)** | $1.20/hr | $4.20/hr | 1/3.5 |
| **Suitable Models** | 7B-30B | 70B-540B | - |

## TPU Product Line Comparison

| Generation | Codename | Memory | FP8 dense | Pod Scale | Suitable For |
|------|------|------|-----------|----------|------|
| TPU v4 | - | 32GB HBM2 | 1.1 PF | 4,096 | 100B+ |
| **TPU v5e** | - | **16GB HBM2** | **400 TF** | **256** | **7B-30B** |
| TPU v5p | - | 96GB HBM2 | 1.89 PF | 8,960 | 70B-540B |
| TPU v6e | Trillium | 32GB HBM2 | 1.5 PF | 256 | 7B-70B |
| TPU v6p | Pathway | 96GB HBM2 | 2.7 PF | 9,216 | 70B-trillion |
| TPU v7 | Ironwood | 192GB HBM3E | 4.6 PF | 9,216 | 192GB inference |

## TPU v5e Use Cases

- ✅ **LLM inference** (7B-30B model inference)
- ✅ **Small model training** (LLaMA 7B, Mistral 7B, Qwen 1.5 14B)
- ✅ **Recommendation systems** (SparseCore optimized)
- ✅ **Google Cloud TPU entry point** ($1.20/hr)
- ✅ **JAX / Flax training** (XLA optimized)
- ✅ **Anthropic / Cohere / Mistral** (Google Cloud customers)
- ❌ **Ultra-large model training** (16GB memory limitation)
- ❌ **FP8 training** (FP8 inference only, BF16 for training)
- ❌ **Native PyTorch** (requires XLA translation)

## Inference vs Training Advantages

### Inference
- **TTFT < 10ms** (JAX + Pathways)
- **TPOT 5-8ms** (4-card interconnect)
- **Price $1.20/hr** (H100 $3-5/hr, **60% cheaper**)
- **7B-30B LLM optimized**

### Training
- **LLaMA 7B training**: v5e 256 cards = **1.5 steps/sec** (H100 8 cards = 1 step/sec, **comparable**)
- **LLaMA 13B training**: v5e 256 cards = **0.7 steps/sec** (H100 8 cards = 0.5 steps/sec, **v5e slightly ahead**)
- **JAX + Flax** + **GSPMD** tensor parallelism
- **Price $1.20/hr** (H100 8-card $25-30/hr, **1/10 the price**)

## Software Stack

| Layer | Tool | Description |
|------|------|------|
| **AI Frameworks** | **JAX** | Google-recommended |
| | **Flax** | JAX neural network library |
| | **Optax** | JAX optimizer |
| | **RLlib** | JAX reinforcement learning |
| | **Pathways** | Unified heterogeneous accelerator programming |
| | TensorFlow | Compatible |
| | PyTorch/XLA | Compatible (experimental) |
| **Compiler** | **XLA** | Accelerator compiler |
| **Distributed** | **GSPMD** | Tensor parallelism |
| **Collective Communication** | **DUS** | Proprietary |
| **Model Library** | MaxText (Gemma 2 training) | Google open-source |

## Vendor Information

| Item | Detail |
|------|------|
| **Company** | Google LLC |
| **Product Page** | https://cloud.google.com/tpu |
| **Business Unit** | Google Cloud + Google DeepMind |
| **Foundry** | TSMC 5nm (InFO_SoC packaging) |
| **Google Cloud Pricing** | v5e ~$1.20/hr (pod slice) |
| **Customers** | Google internal (Search, YouTube, DeepMind) + Anthropic / Cohere / Mistral / Hugging Face |

## Comparison with NVIDIA L4 (Inference)

| Metric | Google TPU v5e | NVIDIA L4 | Difference |
|------|------------------|-----------|------|
| **INT8** | 400 TOPS | 485 TOPS | L4 +21% |
| **TDP** | 180W | 72W | v5e 2.5× |
| **Energy Efficiency** | 2.22 TOPS/W | 6.7 TOPS/W | **L4 3×** |
| **Memory** | 16GB HBM2 | 24GB GDDR6 | L4 1.5× |
| **Price** | $1.20/hr | $0.80-1.20/hr | Comparable |
| **Software** | JAX | CUDA | L4 mature |

> **TPU v5e advantage**: **Google Cloud integration** + **JAX optimization** + **low price**.
> **L4 advantage**: **72W TDP** (v5e 40% power saving) + **mature software** + **multi-cloud deployment**.

## Key Features

- **400 TF FP8**: Industry 5nm entry-level TPU flagship
- **180W TDP**: 25% of H100 power
- **16GB HBM2**: Sufficient for inference, constrained for training
- **256-chip Pod**: JAX GSPMD training optimized
- **Low price**: $1.20/hr
- **Drawbacks**: Small memory, Google Cloud only, 5-year ecosystem

## Related Cards

- [Google TPU v5p](/docs/cards/google/tpu-v5p) - Training flagship
- [Google TPU v6e (Trillium)](/docs/cards/google/tpu-v6e) - Next-gen inference
- [Google TPU v6p (Pathway)](/docs/cards/google/tpu-v6p) - Next-gen training
- [Google TPU v4](/docs/cards/google/tpu-v4) - Earlier training
- [Google TPU Ironwood (v7)](/docs/cards/google/tpu-ironwood) - 2025 H2
- [Google TPU 8t](/docs/cards/google/tpu-8t) - 2026 training
- [Google TPU 8i](/docs/cards/google/tpu-8i) - 2026 inference
- [NVIDIA L4](/docs/cards/nvidia/l4) - Inference comparison
- [NVIDIA H100](/docs/cards/nvidia/h100) - Training comparison
