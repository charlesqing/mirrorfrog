---
id: groq-lpu-v2
title: Groq LPU v2 (LPU Inference, 2024)
sidebar_label: Groq LPU v2
description: "Groq LPU v2 detailed specs: 4nm, 188 TOPS INT8, 80GB SRAM, 15 TB/s bandwidth, TSMC 4nm, 200W, 2024 LPU flagship."
keywords: [Groq LPU v2, Groq Language Processing Unit, 4nm, 80GB SRAM, 15 TB/s, LPU 2nd gen, GroqCloud]
---
 
# Groq LPU v2 (LPU Inference, 2024)
 
## Overview
 
**Groq LPU v2** (unofficial codename) is Groq's second-generation LPU inference chip, **released 2024-Q3**, **TSMC 4nm process**, **80GB SRAM** memory (**industry's largest SRAM capacity**), **15 TB/s memory bandwidth** (**highest LPU bandwidth in the industry**), **188 TOPS INT8** compute, **TDP 200W**. It is Groq's last independent LPU product before the **NVIDIA acquisition**, paired with **GroqCloud** LPU cloud service.
 
**Generational evolution**:
- **LPU v1** (2022): Samsung 14nm, 230MB SRAM, 80 TOPS INT8 — existing `others/groq-lpu.md`
- **LPU v2** (2024-Q3): TSMC 4nm, **80GB SRAM**, 188 TOPS INT8 — **this page**
- **LPU v3 LPX** (2026, post-NVIDIA acquisition): 256 chips/rack, 40 PB/s SRAM, 640 TB/s intra-domain — existing `nvidia/groq-3-lpx.md`
 
## Core Specifications
 
| Item | Spec |
|------|------|
| **Architecture** | Groq LPU v2 (deterministic dataflow) |
| **Process** | **TSMC 4nm** |
| **Memory Type** | **SRAM** (on-chip) |
| **SRAM Capacity** | **80 GB** (**industry's largest**) |
| **Memory Bandwidth** | **15 TB/s** (**highest LPU bandwidth in industry**) |
| **INT8** | **188 TOPS** |
| **BF16** | 94 TFLOPS |
| **FP16** | 94 TFLOPS |
| **TDP** | **200 W** (**one of the industry's most efficient inference chips**) |
| **Form Factor** | PCIe Gen5 x16 |
| **Interconnect** | GroqLink (proprietary, NVLink-like) |
| **GroqLink Bandwidth** | 900 GB/s (4-card intra-domain) |
| **Mass Production** | 2024-Q3 |
| **Unit Price** | ~$20,000-30,000 |
 
## LPU Architecture Principles
 
| Dimension | Traditional GPU | Groq LPU |
|------|----------|----------|
| **Compute Paradigm** | Async, parallel, out-of-order | **Synchronous, dataflow, deterministic** |
| **Execution Model** | CUDA cores + Tensor cores | **Streaming Architecture** |
| **Latency** | HBM-bound (nanoseconds + queuing) | **Deterministic (no queuing, nanosecond)** |
| **Throughput** | High (HBM-bound) | **Extremely high (SRAM zero-wait)** |
| **TTFT** | 100-500ms (queued) | **< 5ms** (no queue) |
| **TPOT** | 30-50ms | **5-10ms** (10x advantage) |
| **Best for** | Large model training | **Large model inference (real-time)** |
 
### Deterministic Dataflow Advantages
 
```
Traditional GPU inference:
  Input -> HBM queue -> Compute -> HBM output
  Latency: ~100ms (HBM access + scheduling)
 
Groq LPU inference:
  Input -> 80GB SRAM (weights pre-loaded) -> Compute -> Output
  Latency: ~5ms (SRAM zero-wait)
```
 
**Key characteristics**:
- Weights loaded once into 80GB SRAM
- **No HBM access** needed during inference (SRAM only)
- **Synchronous execution** (all chips same clock)
- **Predictable latency** (no queue jitter)
 
## SRAM Capacity Evolution
 
| Generation | SRAM | Fits Models |
|------|------|----------|
| LPU v1 (2022) | 230 MB | Llama 2 7B |
| **LPU v2 (2024)** | **80 GB** | **Llama 3 70B FP8 / Llama 2 70B FP16** |
| LPU v3 LPX (2026) | 80 GB x 256 chips | Trillion-parameter |
 
> **80GB SRAM revolution**: First time a **single chip** can **fit a 70B-parameter FP16 model** (140GB slightly exceeds, needs FP8 70GB to fit), **eliminating HBM access**, reducing latency from 100ms to 5ms.
 
## GroqCloud Service
 
| Item | Spec |
|------|------|
| **Service** | GroqCloud LPU Inference API |
| **API Compatibility** | **OpenAI Chat Completions API 100% compatible** |
| **Model Support** | Llama 3 70B, Mixtral 8x7B, Gemma 7B |
| **Latency** | TTFT < 5ms, TPOT 5-10ms |
| **Pricing** | $0.27 / 1M tokens (Llama 3 70B) |
| **Customers** | Anthropic partial inference, Cursor IDE, Vercel, Whisper transcription |
| **Status** | **Preserved post-NVIDIA acquisition** (GroqCloud continues) |
 
## 4-Card Intra-Domain 900 GB/s
 
| Dimension | Spec |
|------|------|
| **Single-Card SRAM** | 80GB |
| **4-Card Intra-Domain** | 320GB SRAM (unified addressing) |
| **Interconnect Bandwidth** | **900 GB/s** |
| **Fits Models** | Llama 3 405B FP8 (210GB) |
| **Latency** | 4-card TTFT < 10ms |
| **Price** | ~$100K (4-card server) |
 
## vs NVIDIA H100 (Inference)
 
| Metric | Groq LPU v2 | NVIDIA H100 | Advantage |
|------|--------------|--------------|------|
| **TTFT** | **< 5ms** | 100-300ms | **LPU 20-60x** |
| **TPOT** | 5-10ms | 30-50ms | **LPU 3-5x** |
| **TDP** | 200W | 700W | **LPU 3.5x power savings** |
| **Memory** | 80GB SRAM | 80GB HBM3 | LPU zero-wait |
| **Batch Throughput** | Medium | High | H100 +50% |
| **Price** | ~$25K | ~$25-30K | Comparable |
| **Software** | GroqWare (small) | CUDA (large) | H100 mature |
| **API Compatibility** | OpenAI 100% | - | LPU killer feature |
 
> **LPU killer feature**: **TTFT < 5ms is 20-60x H100**, making it the **best HW for real-time AI inference (chatbot, code completion, speech transcription)**.
 
## Vendor Information
 
| Item | Details |
|------|------|
| **Company** | Groq, Inc. |
| **Founder** | Jonathan Ross (former Google TPU architect) |
| **Founded** | 2016 |
| **Headquarters** | Mountain View, CA, USA |
| **Funding** | **$1B+** (Series C 2024-Q2 led by D1 Capital) |
| **2024 Revenue** | ~$50M |
| **Fab** | TSMC 4nm |
| **GroqCloud Customers** | Anthropic partial inference, Cursor, Vercel, Anthropic SDK |
 
## NVIDIA Acquisition
 
In **2026-Q1**, NVIDIA announced a **$20B** acquisition of Groq (excluding GroqCloud), with the Groq team joining NVIDIA's **Vera Rubin platform** LPU division. **LPU v3 LPX** becomes a **rack-scale LPU co-processor for NVIDIA's Rubin platform**. **GroqCloud continues independent operations** (Jonathan Ross stays), serving existing OpenAI-compatible API customers.
 
## LPU Use Cases
 
- ✅ **Real-time AI inference** (chatbot, code completion)
- ✅ **Speech transcription** (Whisper Large V3 real-time)
- ✅ **API services** (OpenAI compatible)
- ✅ **Ultra-low latency trading** (HFT AI inference)
- ✅ **Autonomous driving** (real-time vision/object detection)
- ❌ **AI training** (LPU inference only)
- ❌ **Large batch inference** (GPU throughput higher)
- ❌ **Traditional deep learning** (CNN training)
 
## LPU v1 vs v2 vs v3 Comparison
 
| Metric | LPU v1 (2022) | LPU v2 (2024-Q3) | LPU v3 LPX (2026) |
|------|---------------|------------------|--------------------|
| Process | Samsung 14nm | TSMC 4nm | TSMC 3nm |
| SRAM | 230MB | **80GB** | 80GB x 256 chips = 20TB |
| Bandwidth | 80 TB/s | **15 TB/s** | 40 PB/s (256-chip intra-domain) |
| INT8 | 80 TOPS | **188 TOPS** | 2.4 P TOPS (256 chip) |
| TDP | 200W | 200W | 4 kW (256 chip rack) |
| Intra-Domain | 4 chips | 4 chips | **256 chips / rack** |
| Customers | GroqCloud | GroqCloud + Enterprise | NVIDIA Vera Rubin |
| Status | EOL (2025) | **In production (2024-Q3)** | Roadmap (2026) |
 
## Related Cards
 
- [Groq LPU v1](/docs/cards/others/groq-lpu) - 1st generation
- [Groq LPU v3 LPX (post-NVIDIA acquisition)](/docs/cards/nvidia/groq-3-lpx) - 3rd-gen rack
- [Cerebras WSE-3](/docs/cards/cerebras/wse-3) - Wafer-scale inference
- [Lightmatter Envise](/docs/cards/others/lightmatter-envise) - Silicon photonics inference
- [NVIDIA H100](/docs/cards/nvidia/h100) - GPU inference comparison
- [NVIDIA H200](/docs/cards/nvidia/h200) - GPU inference comparison
- [Huawei Ascend 910C](/docs/cards/huawei/ascend-910c) - Domestic inference
