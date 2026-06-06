---
slug: google-tpu-8t-8i-split-training-inference
title: 'Google TPU 8t + 8i: The First TPU Generation to Split Training and Inference'
authors: [aicomputecards]
tags: [product-launch, strategy]
description: "2026-04-22: Google unveils TPU 8t (training 216GB HBM) + TPU 8i (inference 288GB HBM), splitting TPU into two independent product lines for the first time, integrated with Arm Axion CPU."
---

On April 22, 2026, at the Cloud Next conference, Google unveiled **TPU 8t + TPU 8i** — **splitting TPU into two independent product lines for the first time**. TPU 8t focuses on training, TPU 8i on inference. This is a key product adjustment as Google responds to the AI inference era.

{/* truncate */}

## Why Split TPU?

The previous 7 generations of TPU (v1 → v7 Ironwood) were all **general-purpose for both training and inference**:

- v4–v6e: training-first, inference auxiliary
- v7 Ironwood: began favoring inference, but still general-purpose

But the AI industry in 2025–2026 has undergone fundamental changes:

1. **Training demand**: only a few top-tier companies (OpenAI, Anthropic, Google DeepMind, Meta, xAI) need it
2. **Inference demand**: **every AI application** needs it — a 100× larger market
3. **Inference optimization direction**: **fundamentally different from training**
   - Training: compute + interconnect first (compute-bound)
   - Inference: memory + bandwidth + cooling flexibility first (memory-bound + TCO sensitive)

Google therefore decided to **split TPU into two product lines**:

| Product | Positioning | Core Optimization |
|------|------|----------|
| **TPU 8t** | Training dedicated | Compute + Interconnect + integrated Axion CPU |
| **TPU 8i** | Inference dedicated | Memory + Bandwidth + cooling flexibility |

## TPU 8t: Training Dedicated

| Item | Specification |
|------|------|
| Architecture | TPU 8t (Trillium 2) |
| Form factor | **Training dedicated** |
| BF16 compute (dense) | ~3,500 TFLOPS |
| FP8 compute (dense) | ~7,000 TFLOPS |
| HBM capacity | **216 GB** |
| HBM bandwidth | **6,528 GB/s** |
| ICI interconnect | 1,400 GB/s (bidirectional) |
| Integrated CPU | **Arm Axion (Google custom, 64-core)** |
| Pod scale | **9,216 chips** |
| Topology | 3D Torus |
| Cooling | Liquid cooling |

> **Arm Axion is Google's custom 64-core ARM CPU**, entering the TPU node for the first time. This makes the TPU 8t node a **TPU + Axion CPU co-system**, targeting NVIDIA Vera CPU.

## TPU 8i: Inference Dedicated

| Item | Specification |
|------|------|
| Architecture | TPU 8i (Trillium 2) |
| Form factor | **Inference dedicated** |
| BF16 compute (dense) | **~5,500 TFLOPS** |
| FP8 compute (dense) | ~11,000 TFLOPS |
| INT8 compute | ~22,000 TOPS |
| HBM capacity | **288 GB** |
| HBM bandwidth | **8,601 GB/s** |
| Cooling | **Air / Liquid cooling** |
| Pod scale | 256 chips |

> **TPU 8i single-card 288GB HBM = the largest memory inference ASIC currently**. A single card can hold FP16 70B models (no tensor parallelism needed), ideal for **long-context RAG, Agentic AI**.

## TPU 8t vs 8i Key Differences

| Metric | TPU 8t (Training) | **TPU 8i (Inference)** |
|------|----------------|---------------------|
| Positioning | Training | **Inference** |
| BF16 compute | ~3,500 TFLOPS | **~5,500 TFLOPS** (stronger) |
| HBM capacity | 216 GB | **288 GB** (larger) |
| HBM bandwidth | 6,528 GB/s | **8,601 GB/s** (higher) |
| Cooling | Liquid | **Air/Liquid** |
| Pod scale | 9,216 chips | 256 chips |
| Integrated CPU | Arm Axion | None (standalone) |
| Price | High | **Medium** |

> **Purpose of split**: training emphasizes compute + interconnect; inference emphasizes memory + bandwidth + cooling flexibility.

## TPU 8i Inference Paradigm Optimizations

TPU 8i is specifically optimized for inference scenarios:

| Optimization Direction | Content |
|----------|------|
| **Ultra-low latency** | **TTFT &lt;100ms** (Time to First Token) |
| **High throughput** | 10,000+ tok/s (70B model FP8) |
| **Long-context KV** | **288GB retains 1M+ token context fully** |
| **MoE Inference** | Expert Parallel native support |
| **Speculative Decoding** | Internal speculative acceleration |
| **Batching** | Continuous batching + PagedAttention |
| **Continuous KV Cache** | **KV Cache cross-request sharing** (same prefix optimization) |

## TPU 8t Training Paradigm Optimizations

TPU 8t is specifically optimized for training scenarios:

| Optimization Direction | Content |
|----------|------|
| **MoE Training** | Expert Parallel native support (DeepSeek / Mixtral style) |
| **Long-context Training** | 1M+ token context training optimization |
| **RLHF / Post-training** | Online RL (DPO / PPO / GRPO) native optimization |
| **Multimodal Training** | Vision-Language joint training (ViT + LLM synchronous) |
| **AXIOM** | Arm Axion CPU co-processing (data preprocessing / weight initialization) |

## TPU 8i Inference Service Pricing

| Instance | Estimated Hourly Price |
|------|-------------------|
| **TPU 8i v6e-equivalent** | ~$3-5 / chip |
| **TPU v7 Ironwood** | ~$6-8 / chip |
| **TPU 8i vs TPU v7** | **+50%** price / **+150%** compute |

> **TPU 8i per-dollar BF16 compute is 70% higher than TPU v7 Ironwood** (based on 2.4× compute / 1.5× price).

## Software Ecosystem

### TPU 8t
- **JAX 0.5+**: Google's primary training framework
- **PyTorch/XLA 2.5+**: PyTorch compatibility
- **TensorFlow 2.17+**: legacy framework
- **Paxml / Orbax**: Google internal LLM training stack
- **MaxText**: Google reference implementation

### TPU 8i
- **JAX 0.5+**: inference
- **PyTorch/XLA 2.5+**: inference
- **vLLM 0.8+** (TPU backend): low-latency inference
- **Vertex AI Inference**: Google managed inference service
- **Gemini API**: largest internal user

## Comparison with Contemporaries

| Metric | TPU 8t | TPU 8i | NVIDIA B300 Ultra | Groq 3 LPX |
|------|--------|--------|-------------------|------------|
| Positioning | Training | Inference | Training + Inference | Ultra-low-latency inference |
| HBM/SRAM | 216 GB HBM | 288 GB HBM | 288 GB HBM3e | 128 GB SRAM |
| Bandwidth | 6.5 TB/s | **8.6 TB/s** | 8 TB/s | **40 PB/s** |
| BF16 compute | 3.5 PF | 5.5 PF | 3.5 PF (FP8 dense) | 320 PF (rack) |
| Interconnect | 3D Torus | 3D Torus | NVLink 5 | GroqSync |
| Cooling | Liquid | **Air** | Liquid | Liquid |
| Customer | Google DeepMind | Gemini / Vertex AI | AWS / Azure | NVIDIA customers |

## Detailed Product Pages

- [Google TPU 8t Full Specs](/docs/cards/google/tpu-8t)
- [Google TPU 8i Full Specs](/docs/cards/google/tpu-8i)
- [Google TPU v7 Ironwood (Previous Gen)](/docs/cards/google/tpu-ironwood)
- [TPU Architecture Details](/docs/architectures/arch-tpu)
- [NVIDIA B300 Ultra](/docs/cards/nvidia/b300-ultra)

## Summary

The Google TPU 8t + 8i split is a landmark event in the AI inference era:

1. **First-ever training/inference TPU split** — TPU enters the "specialization" era
2. **TPU 8i 288GB HBM** — a single card can hold a 70B model
3. **TPU 8i air cooling** — lowers datacenter deployment barrier
4. **Arm Axion integration** — Google's custom CPU enters TPU
5. **JAX training paradigm** — Google bets on JAX as the next-gen training standard

**Google now has "full-scenario AI compute coverage"**:
- Training: TPU 8t pod
- General inference: TPU 8i
- Gemini API: TPU 8i cluster
- Vertex AI: TPU 8i commercial
