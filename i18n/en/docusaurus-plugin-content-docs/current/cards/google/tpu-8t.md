---
id: tpu-8t
title: Google Cloud TPU 8t (Trillium 2)
sidebar_label: Google TPU 8t
description: Google TPU 8t training-dedicated ASIC: 216GB HBM, 6,528 GB/s bandwidth, purpose-built for frontier model training, announced 2026-04-22, integrated Arm Axion CPU.
keywords: [Google TPU 8t, Trillium 2, training TPU, 216GB HBM, 6528 GB/s, Arm Axion, 2026]
---

# Google Cloud TPU 8t (Trillium 2 / Training-Dedicated)

## Overview

**Google TPU 8t** (codenamed **Trillium 2**) is the **latest training-dedicated TPU**, announced on 2026-04-22 (forming a split architecture with the simultaneously announced TPU 8i inference-dedicated TPU). It features **216GB HBM** (12% more than TPU v7 Ironwood), **6,528 GB/s bandwidth**, and an **integrated Arm Axion CPU** (Google's custom 64-core Arm processor).

TPU 8t is the core training chip for **Google Gemini 3 / Gemini 4 frontier models**, with key improvements over TPU v7 Ironwood in **training paradigm optimization** (MoE training, long-context training, RLHF post-training).

## Core Specifications

| Item | Specification |
|------|------|
| **Architecture** | TPU 8t (Trillium 2) |
| **Type** | **Training-dedicated** (distinct from 8i inference-dedicated) |
| **BF16 Compute (dense)** | ~3,500 TFLOPS (estimated, ~50% higher than Ironwood's 2,307 TFLOPS) |
| **FP8 Compute (dense)** | ~7,000 TFLOPS |
| **HBM Capacity** | **216 GB** |
| **HBM Bandwidth** | **6,528 GB/s** |
| **ICI Interconnect** | 1,400 GB/s (bidirectional) |
| **DCN Bandwidth** | 200 Gbps (estimated) |
| **Integrated CPU** | **Arm Axion (Google custom, 64-core)** |
| **Pod Size** | **9,216 chips** (estimated) |
| **Topology** | 3D Torus |
| **Announcement** | **2026-04-22** |

> 📌 **8t naming**: TPU 8th-gen + **t = training**. 8t and 8i are same-generation; **8t is for training only**.

## TPU 8t vs TPU v7 Ironwood (Training Comparison)

| Metric | TPU v7 Ironwood | **TPU 8t** | Improvement |
|------|-----------------|------------|------|
| Type | Training + Inference | **Training-dedicated** | Type split |
| BF16 Compute | 2,307 TFLOPS | **~3,500 TFLOPS** (estimated) | 1.5× |
| FP8 Compute | 4,614 TFLOPS | ~7,000 TFLOPS | 1.5× |
| HBM Capacity | 192 GB | **216 GB** | 1.13× |
| HBM Bandwidth | 7,380 GB/s | **6,528 GB/s** | Slight decrease |
| ICI Interconnect | 1,200 GB/s | **1,400 GB/s** | 1.17× |
| Integrated CPU | None | **Arm Axion 64-core** | New |
| Announcement | 2025-11 | **2026-04-22** | — |

> 💡 **TPU 8t bandwidth slightly decreased (7,380 → 6,528 GB/s) but compute increased 50%**, indicating Google traded some bandwidth for higher compute on 8t (better suited for compute-intensive training phases: dense FFN, attention computation).

## TPU 8t Training Paradigm Optimization

| Optimization | Details |
|----------|------|
| **MoE Training** | Native Expert Parallel support (DeepSeek / Mixtral style) |
| **Long-context Training** | Optimized for 1M+ token context training |
| **RLHF / Post-training** | Native optimization for Online RL (DPO / PPO / GRPO) |
| **Multimodal Training** | Vision-language joint training (ViT + LLM synchronized) |
| **AXIOM** | Arm Axion CPU co-processing (data preprocessing / weight initialization) |

## Arm Axion CPU Integration

| Item | Specification |
|------|------|
| **Architecture** | Arm Neoverse V2 (64-core) |
| **TDP** | ~100 W |
| **Role** | Host CPU + Data loading + Preprocessing + Inference scheduling |
| **Significance** | **Google's custom Arm CPU enters TPU nodes for the first time** |

> **Axion integration = TPU nodes evolving towards "super nodes"**: TPU 8t is no longer a pure accelerator, but a **TPU + Axion CPU co-processing system**, competing with NVIDIA Vera CPU.

## Recommended Deployment Configurations

| Scenario | Recommended Configuration |
|------|----------|
| **Gemini 3 Training** | TPU 8t pod 9,216 chips (**single pod can train frontier models**) |
| **Llama 4 Training** | TPU 8t pod (hundred-billion-scale models) |
| **Multimodal Training** | TPU 8t + Vision Transformer |
| **Scientific Computing** | TPU 8t + JAX 0.5+ |
| **RLHF Post-training** | TPU 8t (**natively optimized**) |

## Software Ecosystem

- **JAX 0.5+**: Google's primary training framework
- **PyTorch/XLA 2.5+**: PyTorch compatibility
- **TensorFlow 2.17+**: Legacy framework
- **Paxml / Orbax**: Google internal LLM training stack
- **MaxText**: Google reference implementation
- **vLLM 0.8+** (experimental): Inference support

## Use Cases

- ✅ **Frontier model training** (Gemini 3/4, Anthropic, external customers)
- ✅ **MoE large-model training** (native support)
- ✅ **Long-context training** (1M+ token)
- ✅ **Multimodal training** (ViT + LLM)
- ❌ Inference scenarios (**use TPU 8i** instead of 8t)
- ❌ Non-Google Cloud deployments

## Vendor Information

| Item | Details |
|------|------|
| **Vendor** | Google Cloud |
| **First Announced** | **2026-04-22** (Google Cloud Next 2026) |
| **Product Page** | https://cloud.google.com/tpu |
| **Cloud Deployment** | Google Cloud only |
| **Codename** | Trillium 2 |

## Related Products

- [Google TPU 8i](/docs/cards/google/tpu-8i) - **Simultaneous inference-dedicated TPU**
- [Google TPU v7 Ironwood](/docs/cards/google/tpu-ironwood) - Previous generation TPU
- [Google TPU v6e Trillium](/docs/cards/google/tpu-v6e) - Previous inference TPU
- [AWS Trainium 3](/docs/cards/aws/trainium-3) - Same-generation training ASIC
- [NVIDIA Rubin R200](/docs/cards/nvidia/rubin-r200) - Same-generation GPU
- [Full Comparison Table](/docs/comparison)
