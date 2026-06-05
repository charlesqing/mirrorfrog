---
id: b300-ultra
title: NVIDIA B300 Ultra (Blackwell Ultra)
sidebar_label: NVIDIA B300 Ultra
description: NVIDIA Blackwell Ultra B300 detailed specs: 288GB HBM3e, 7 PFLOPS FP8 dense, 14 PFLOPS FP4 sparse, DeepSeek R1 measured at 22,476 TGS.
keywords: [NVIDIA B300, Blackwell Ultra, GB300, 288GB HBM3e, DeepSeek R1, NVFP4, 14 PFLOPS FP4, 8x generational performance]
---

# NVIDIA B300 Ultra (Blackwell Ultra)

## Product Overview

**NVIDIA B300 / B300 Ultra** (codename **Miranda / GB300**) is the **mid-cycle upgrade** of the Blackwell architecture, **shipping January 2026**. The biggest upgrade is memory — 192GB → **288GB HBM3e**, with FP4 sparse compute reaching **14 PFLOPS** and TDP at **1,400W** (liquid cooling required).

**Purpose-built for the era of ultra-large LLM inference** — 288GB memory can load a 70B model in FP16 on a single GPU, leaving 100GB+ for KV Cache. In DeepSeek R1 benchmarks, **prefill throughput hits 22,476 TGS**, an **8× improvement** over H200.

## Core Specifications

| Parameter | Value |
|-----------|-------|
| **Architecture** | Blackwell Ultra (GB300) |
| **Process Node** | TSMC 4NP |
| **GPU Chips** | 2 Blackwell dies (CoWoS-L packaging) |
| **Memory** | **288 GB HBM3e** (12-Hi stack) |
| **Memory Bandwidth** | **8 TB/s** |
| **FP8 Tensor Core (dense)** | **7 PFLOPS** |
| **FP8 Tensor Core (sparse)** | **14 PFLOPS** |
| **FP4 Tensor Core (dense)** | **7 PFLOPS** |
| **FP4 Tensor Core (sparse)** | **14 PFLOPS** |
| **FP16 Tensor Core (dense)** | **3.5 PFLOPS** |
| **INT8** | **7,000 TOPS** |
| **TDP** | **1,400 W** (**liquid cooling required**) |
| **NVLink Bandwidth** | **1.8 TB/s** (5th Gen) |
| **PCIe** | Gen 6 (first generation) |
| **DC Networking** | **ConnectX-8, 1.6 Tbps** |
| **Release** | **January 2026 — shipping** |

## B200 vs B300 Ultra Upgrade Comparison

| Metric | B200 | B300 Ultra | Improvement |
|--------|------|------------|-------------|
| Architecture | Blackwell | **Blackwell Ultra** | Mid-cycle upgrade |
| Memory | 192 GB HBM3e | **288 GB HBM3e** | **+50%** |
| Memory Bandwidth | 8 TB/s | 8 TB/s | Flat |
| FP8 Dense | 4.5 PFLOPS | **7 PFLOPS** | **+56%** |
| FP4 Sparse | ~9 PFLOPS | **14 PFLOPS** | **+56%** |
| TDP | 1,000 W | **1,400 W** | +40% |
| PCIe | Gen 5 | **Gen 6** | 2× |
| DC Networking | ConnectX-7 (400G) | **ConnectX-8 (1.6T)** | 4× |
| Release | 2024-Q4 | **2026-01** | — |

> **Key**: FP4 is Blackwell Ultra's new precision tier (between FP8 and INT4), reducing memory footprint by another 50% compared to FP8.

## H100 / H200 / B300 Generational Performance

| Metric | H100 | H200 | B300 | Improvement |
|--------|------|------|------|-------------|
| Architecture | Hopper | Hopper | **Blackwell Ultra** | — |
| Memory | 80GB HBM3 | 141GB HBM3e | **288GB HBM3e** | 3.6× |
| Memory Bandwidth | 3.35 TB/s | 4.8 TB/s | 8 TB/s | 2.4× |
| FP8 Dense | 989 TFLOPS | 989 TFLOPS | **7 PFLOPS** | **7×** |
| TDP | 700W | 700W | **1,400W** | 2× |
| NVLink | 900 GB/s | 900 GB/s | **1,800 GB/s** | 2× |
| Release | 2023-03 | 2024-Q4 | **2026-01** | — |

## DeepSeek Inference Benchmarks (vLLM, Feb 2026 Report)

### DeepSeek-V3.2 (GB300)
**Test config: NVFP4 quantization + TP2 (Tensor Parallel 2)**

| Scenario | Throughput (TGS) |
|----------|------------------|
| Prefill-only (ISL=1) | **7,360** |
| Mixed context (ISL=2k, OSL=1k) | **2,816** |

> ISL = Input Sequence Length, OSL = Output Sequence Length

### DeepSeek-R1 (B300)
| Scenario | Throughput (TGS) |
|----------|------------------|
| Prefill-only (ISL=2k, batch=256) | **22,476** |
| Mixed context (ISL=2k, OSL=1k) | **3,072** |

> R1 prefill throughput is approximately **3×** that of V3.2, benefiting from R1's chain-of-thought architecture optimizations.

## FP4 vs FP8 Quantization (DeepSeek-R1)

| Quantization Scheme | Prefill Improvement | Mixed Context Improvement |
|---------------------|---------------------|---------------------------|
| **NVFP4 + TP2** vs FP8 | **1.8×** | **8×** |

> **NVFP4** (NVIDIA FP4) is a new 4-bit floating-point format introduced with Blackwell, reducing memory by **another 50%** vs FP8 and **multiplying throughput several times over**. While maintaining accuracy (FP4 + tensor parallelism), DeepSeek-R1 mixed-context inference improves by **8×**.

## B300 vs H200 Generational Performance

| Metric | B300 vs H200 |
|--------|--------------|
| Prefill Throughput (ISL=2k) | **8×** |
| Short Output Throughput (ISL=2k, OSL=128) | **20×** |

> **20× improvement on short-output scenarios** — B300 + NVFP4 + TP2 is the optimal choice for high-concurrency production environments.

## Recommended Deployment Configurations (DeepSeek)

| Scenario | Recommended Config |
|----------|-------------------|
| **DeepSeek R1 online serving** | B300 + **NVFP4 + EP2** (Expert Parallel) |
| **DeepSeek V3 inference + training** | B300 + **NVFP4 + TP2** (Tensor Parallel) |
| **Long-context document understanding** | B300 (full use of 288GB memory) |
| **Cost-sensitive inference** | B300 Spot + **FP4 quantization** |

> EP2 = Expert Parallel 2, suited for MoE models (DeepSeek is MoE)
> TP2 = Tensor Parallel 2, general-purpose acceleration

## 8-GPU DGX B300 System

| Parameter | Value |
|-----------|-------|
| **Total GPU Memory** | **2.3 TB HBM3e** (288GB × 8) |
| **GPU Interconnect** | NVLink 5.0 + ConnectX-8 |
| **Peak Power** | **~14 kW** (2× H100 DGX) |
| **Supported Models** | Full loading of 400B+ parameter models |
| **Cooling** | **Liquid cooling required (DLC)** |

## Cloud Pricing Comparison (March 2026)

| Provider | Instance Type | Per GPU/Hour Price |
|----------|---------------|-------------------|
| **AWS** | p6-b200.48xlarge (8× B300) | **$11.70** |
| **DigitalOcean** | B300 GPU Droplet (coming soon) | ~$8.00 (estimated) |
| **Oracle Cloud** | OCI B300 | ~$10.00 (estimated) |

> **AWS p6-b200.48xlarge** is one of the first 8-GPU B300 instances. DigitalOcean pricing is **~30% cheaper than AWS**.

## Mainstream GPU Inference Cost Comparison (Llama 70B)

| GPU | Throughput (tok/s) | Per GPU/Hour | Token Cost (Relative) |
|-----|--------------------|--------------|----------------------|
| **H100 SXM** | ~21,800 | $2.00 | 1.0× (baseline) |
| **H200 SXM** | ~31,700 | $3.50 | 0.83× (17% savings) |
| **B300 (FP8)** | ~100,000+ | ~$8.00 | **0.58× (42% savings)** |
| **B300 (FP4)** | ~150,000+ | ~$8.00 | **0.39× (61% savings)** |

> **Key insight**: B300 has a higher per-unit price, but **per-token cost is actually 39–61% lower** — making it the optimal choice for cloud inference.

## Cooling & Infrastructure

- **TDP 1,400W** — **liquid cooling required** (Direct Liquid Cooling, DLC)
- Air cooling is not feasible (vs H100 700W air-cooled)
- **8-GPU DGX B300 = 14kW** (= 2× H100 DGX)
- Data center power and cooling must be re-planned

## Software Requirements

- **CUDA 12.x**
- **cuDNN 9.x**
- **TensorRT-LLM 0.15+**
- **NVFP4 support** (requires TensorRT 10+)
- **vLLM 0.6+** (GB300 optimized)

## Use Cases

- ✅ **Large-scale inference serving** (70B+ models, 100K+ tok/s)
- ✅ **Inference-intensive workloads** (DeepSeek R1, o1-class reasoning models)
- ✅ **Long-context KV Cache** (288GB fully retained)
- ✅ **400B+ parameter model deployment** (8-GPU DGX B300 full loading)
- ✅ **Multi-node training clusters** (6.4 Tbps GPU interconnect)
- ❌ Small-to-medium inference (H200 more economical)
- ❌ No liquid-cooled facility (high infrastructure investment)

## Vendor Information

| Parameter | Value |
|-----------|-------|
| **Vendor** | NVIDIA Corporation |
| **Product Page** | https://www.nvidia.com/en-us/data-center/blackwell/ |
| **Launch** | January 2026 — shipping |
| **Cloud Deployment** | AWS / DigitalOcean / Oracle Cloud |
| **OEM Partners** | Dell / HPE / Supermicro / Lenovo |

## Related Products

- [NVIDIA B200](/docs/cards/nvidia/b200) — Previous Blackwell generation
- [NVIDIA H200](/docs/cards/nvidia/h200) — Hopper flagship
- [NVIDIA H100](/docs/cards/nvidia/h100) — Previous workhorse
- [AMD MI355X](/docs/cards/amd/mi350) — Same-generation competitor
- [Google TPU v7 Ironwood](/docs/cards/google/tpu-ironwood) — 192GB inference ASIC
- [Full Comparison Table](/docs/comparison)
