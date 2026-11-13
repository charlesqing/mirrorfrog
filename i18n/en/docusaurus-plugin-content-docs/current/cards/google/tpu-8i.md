---
id: tpu-8i
title: Google Cloud TPU 8i (Trillium 2 Inference)
sidebar_label: Google TPU 8i
description: "Google TPU 8i inference-dedicated ASIC: 288GB HBM, 8,601 GB/s bandwidth, ~5,500 TFLOPS BF16, purpose-built for ultra-low-latency inference, announced 2026-04-22."
keywords: [Google TPU 8i, Trillium 2, inference TPU, 288GB HBM, 8601 GB/s, ultra-low latency, 2026]
---

# Google Cloud TPU 8i (Trillium 2 / Inference-Dedicated)

## Overview

**Google TPU 8i** (codenamed **Trillium 2 Inference Edition**) is the **latest inference-dedicated TPU**, announced on 2026-04-22, forming an **8t + 8i split architecture** with the simultaneously announced TPU 8t training-dedicated TPU. It features **288GB HBM** (50% more than TPU v7 Ironwood), **8,601 GB/s bandwidth**, and **~5,500 TFLOPS BF16** compute (dense).

TPU 8i is the core of Google's **"AI Inference Era" strategy** — Gemini API, Vertex AI inference, Anthropic Claude on Vertex, and Gemini 3 / 4 online serving are **all powered by TPU 8i**.

## Core Specifications

| Item | Specification |
|------|------|
| **Architecture** | TPU 8i (Trillium 2) |
| **Type** | **Inference-dedicated** (distinct from 8t training-dedicated) |
| **BF16 Compute (dense)** | **~5,500 TFLOPS** |
| **FP8 Compute (dense)** | ~11,000 TFLOPS |
| **INT8 Compute** | ~22,000 TOPS |
| **HBM Capacity** | **288 GB** |
| **HBM Bandwidth** | **8,601 GB/s** |
| **ICI Interconnect** | 1,200 GB/s |
| **DCN Bandwidth** | 200 Gbps |
| **Pod Size** | Single chip ~256 chips |
| **Cooling** | **Air or liquid cooling** |
| **Announcement** | **2026-04-22** |

> 📌 **8i naming**: TPU 8th-gen + **i = inference**. **8i is the inference ASIC with the largest memory currently**, a single card at 288GB can hold a 70B model (FP16).

## TPU 8i vs TPU v7 Ironwood (Inference Comparison)

| Metric | TPU v7 Ironwood | **TPU 8i** | Improvement |
|------|-----------------|------------|------|
| Type | Training + Inference | **Inference-dedicated** | Type split |
| BF16 Compute | 2,307 TFLOPS | **~5,500 TFLOPS** | 2.4× |
| FP8 Compute | 4,614 TFLOPS | ~11,000 TFLOPS | 2.4× |
| HBM Capacity | 192 GB | **288 GB** | 1.5× |
| HBM Bandwidth | 7,380 GB/s | **8,601 GB/s** | 1.17× |
| Cooling | Liquid primary | **Air/liquid flexible** | Flexible |
| Announcement | 2025-11 | **2026-04-22** | — |

> 💡 **TPU 8i compute 2.4× higher than Ironwood**: 8,601 GB/s bandwidth + 288GB HBM enables TPU 8i to handle **long-context inference and ultra-large-model inference** with **single-card capacity** for 70B+ models.

## TPU 8i Inference Paradigm Optimization

| Optimization | Details |
|----------|------|
| **Ultra-low latency** | **TTFT < 100ms** (Time To First Token) |
| **High throughput** | 10,000+ tok/s (70B model FP8) |
| **Long-context KV** | **288GB fully retains 1M+ token context** |
| **MoE Inference** | Native Expert Parallel support |
| **Speculative Decoding** | Internal speculative acceleration |
| **Batching** | Continuous batching + PagedAttention |
| **Continuous KV Cache** | **KV Cache cross-request sharing** (same-prefix optimization) |

## TPU 8i vs TPU 8t (Simultaneous Split)

| Metric | TPU 8t (Training) | **TPU 8i (Inference)** |
|------|----------------|---------------------|
| Positioning | Training | **Inference** |
| BF16 Compute | ~3,500 TFLOPS | **~5,500 TFLOPS** (higher) |
| HBM Capacity | 216 GB | **288 GB** (larger) |
| HBM Bandwidth | 6,528 GB/s | **8,601 GB/s** (higher) |
| Cooling | Liquid | **Air/liquid** |
| Pod Size | 9,216 chips | 256 chips |
| Integrated CPU | Arm Axion | None (standalone) |

> 💡 **Split purpose**: Training emphasizes compute + interconnect; inference emphasizes memory + bandwidth + cooling flexibility. **8t = liquid + large pod; 8i = air + small pod + massive memory**.

## Recommended Deployment Configurations

| Scenario | Recommended Configuration |
|------|----------|
| **Gemini API Online Serving** | TPU 8i pod (million-level QPS) |
| **Claude on Vertex AI** | TPU 8i single chip / 4-chip node |
| **Llama 4 70B Inference** | TPU 8i single card (**288GB fits FP16 70B**) |
| **Long-context RAG** | TPU 8i (**1M+ token KV Cache**) |
| **Edge / Offline Inference** | TPU 8i air-cooled (no liquid cooling facility required) |

## Software Ecosystem

- **JAX 0.5+**: Inference
- **PyTorch/XLA 2.5+**: Inference
- **vLLM 0.8+** (TPU backend): Low-latency inference
- **Vertex AI Inference**: Google managed inference service
- **Gemini API**: Primary internal user

## Pricing (Estimated)

| Instance | Hourly Price | Notes |
|------|------------|------|
| **TPU 8i v6e-equivalent** | ~$3-5 / chip | Estimated |
| **TPU v7 Ironwood** | ~$6-8 / chip | Current mainstream |
| **TPU 8i vs TPU v7** | **+50%** price / **+150%** compute | Better price-performance |

> **TPU 8i delivers 70% higher BF16 compute per dollar than TPU v7 Ironwood** (based on 2.4× compute / 1.5× price).

## Use Cases

- ✅ **Frontier model inference** (Gemini 3/4, Claude Opus 4.5)
- ✅ **Ultra-low-latency online serving** (TTFT < 100ms)
- ✅ **Long-context RAG / Agent** (1M+ token inference)
- ✅ **High-throughput offline inference** (10,000+ tok/s)
- ✅ **Air-cooled deployment** (no liquid cooling facility required)
- ❌ Training scenarios (**use TPU 8t** instead of 8i)

## Vendor Information

| Item | Details |
|------|------|
| **Vendor** | Google Cloud |
| **First Announced** | **2026-04-22** (Google Cloud Next 2026) |
| **Product Page** | https://cloud.google.com/tpu |
| **Cloud Deployment** | Google Cloud only (Vertex AI / Gemini API) |
| **Codename** | Trillium 2 (Inference Edition) |

## November 2026 Update: Early Production Estimate

An Epoch AI estimate published on 4 November 2026 (relayed by several outlets on 6 November) puts Broadcom's TPU compute shipments at nearly 2 million H100 equivalents in FY2026 Q3, roughly double the previous quarter, while physical chip shipments rose about 65% to roughly 800,000 units. The gap is attributed to a mix shift: TPU v7 now accounts for the majority of shipments at about 2.5x the performance of v6e, and **TPU 8i has entered early production** at about 2.2x the performance of v7. Over the same period Broadcom's XPU shipments grew more than 3.5x year on year and XPUs represented 73% of its AI revenue.

All of these are third-party estimates, not disclosures from Google or Broadcom. "H100 equivalent" is a conversion unit for compute, not a unit count, and should not be used as an input for TCO or per-token cost calculations. The specification table above remains based on published product data.

## Related Products

- [Google TPU 8t](/docs/cards/google/tpu-8t) - **Simultaneous training-dedicated TPU**
- [Google TPU v7 Ironwood](/docs/cards/google/tpu-ironwood) - Previous generation TPU
- [NVIDIA B300 Ultra](/docs/cards/nvidia/b300-ultra) - Same-generation inference GPU
- [AWS Inferentia 2](/docs/cards/aws/inferentia-2) - Inference ASIC comparison
- [Groq LPU](/docs/cards/others/groq-lpu) - Inference latency comparison
- [Full Comparison Table](/docs/comparison)

## 2026-11-13 update: 8i Max and 8tx, four TPU systems in one year

Google's November 9 blog added two eighth-generation TPU systems. TPU 8i Max puts two 8i chips on a single package, doubling compute, SRAM and HBM bandwidth over a single 8i while keeping the same rack footprint; it targets million-token context windows and the highest compute density per rack. TPU 8tx uses the same silicon as 8t, pairs it with 5th Gen AMD EPYC hosts, and moves memory encryption into the hardware layer. It reuses the Boardfly low-latency network from 8i, with Google claiming up to 2x lower latency than 8t at near-zero performance penalty, for confidential inference and small-scale training in regulated industries and government.

The post draws a clear line between a new chip and a new system: neither addition required a new tape-out. Packaging, high-speed memory, host CPUs and optical networking can be recombined in months instead of waiting on a multi-year fabrication cycle. Together with 8t and 8i from Cloud Next in April, this is the first time Google has shipped four TPU systems in a single year. Google says the TPU business now has nearly 100 customers, including frontier labs, trading firms, retailers and universities.

No new card is created here: these are system configurations, not new silicon, and no standalone chip specifications were published. The spec table on this page is unchanged. The 8tx shared-die detail is also recorded on the [TPU 8t page](/docs/cards/google/tpu-8t).

> Sourcing note: Google official blog (2026-11-09) plus press coverage. The 2x figures, latency claim and customer count are vendor statements without independent measurements; no standalone specs or shipment volumes were disclosed.

