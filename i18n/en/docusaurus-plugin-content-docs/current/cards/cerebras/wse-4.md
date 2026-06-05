---
id: wse-4
title: Cerebras WSE-4 (CS-4)
sidebar_label: Cerebras WSE-4
description: "Cerebras WSE-4 estimated specifications: 4th-gen wafer-scale AI chip, 5nm / 3nm, ~600K-800K AI Cores, first product post-IPO, expected 2027 announcement."
keywords: [Cerebras WSE-4, CS-4, wafer-scale, 4th gen, IPO, 2027, Cerebras IPO, CS-5, CBRS]
---

# Cerebras WSE-4 (CS-4)

## Overview

**Cerebras WSE-4** (system codename **CS-4**) is Cerebras Systems' **4th-generation wafer-scale AI chip** (**Wafer-Scale Engine, WSE**), expected to be announced in **2027** (after Cerebras IPO in May 2026). WSE-4 is a **process upgrade + performance improvement** over WSE-3, built on a **5nm or 3nm process** (depending on TSMC N3 capacity), with **AI Core count** expected to increase from WSE-3's 900K to **~1.5M**.

WSE-4 is Cerebras' **first "fully public" product post-IPO**, offering detailed **SPEC benchmarks, pricing, and ecosystem support** for the first time.

## Core Specifications (Estimated)

| Item | WSE-3 (CS-3) | **WSE-4 (CS-4)** | Improvement |
|------|--------------|------------------|------|
| **Process Node** | TSMC 5nm | **TSMC 3nm** (estimated) | +1 generation |
| **Transistor Count** | 4 trillion | **~5-6 trillion** (estimated) | 1.4× |
| **Wafer Size** | 300mm full | 300mm full | Same |
| **AI Core Count** | 900,000 | **~1,500,000** (estimated) | 1.67× |
| **On-chip SRAM** | 44 GB | **~80 GB** (estimated) | 1.8× |
| **On-chip SRAM Bandwidth** | 21 PB/s | **~40 PB/s** (estimated) | 1.9× |
| **BF16 Compute** | 125 PFLOPS | **~200 PFLOPS** (estimated) | 1.6× |
| **FP8 Compute** | 250 PFLOPS (estimated) | **~400 PFLOPS** (estimated) | 1.6× |
| **TDP** | ~25 kW | **~30-35 kW** (estimated) | 1.3× |
| **Launch** | 2024 | **2027 expected** | — |

> ⚠️ **Not officially announced**: Above are estimates. **Cerebras only has publicly released WSE-3 info**. WSE-4 detailed specifications subject to future Cerebras announcements.

## Cerebras History and IPO

| Time | Event | Details |
|------|------|------|
| **2015** | Founded | Andrew Feldman founded Cerebras Systems |
| **2019** | WSE-1 announced | First wafer-scale chip (400K cores) |
| **2021** | WSE-2 announced | 850K cores, 20nm |
| **2024** | WSE-3 (CS-3) | 900K cores, 44GB SRAM, 125 PF BF16 |
| **2024-12** | Saudi G42 investment | G42 invested hundreds of millions (Middle East customer) |
| **2025** | OpenAI partnership | OpenAI procured Cerebras inference compute |
| **2026-04-17** | **IPO filing** | Submitted S-1 for listing |
| **2026-05** | **IPO listed** | Target Nasdaq "CBRS", valuation $22-25B |
| **2027** | **WSE-4 expected** | First post-IPO product |

> **Cerebras IPO Key Data**:
> - **Valuation**: $22-25B (based on latest funding round)
> - **2025 Revenue**: ~$510M (+150% YoY)
> - **2025 Net Loss**: ~$200M (still unprofitable)
> - **OpenAI major deal**: $10B inference compute long-term contract
> - **Listing window**: May 2026

## WSE-4 vs WSE-3 vs NVIDIA Rubin R200

| Metric | WSE-3 (CS-3) | **WSE-4 (estimated)** | Rubin R200 |
|------|--------------|------------------|------------|
| Form Factor | **Single-chip wafer-scale** | **Single-chip wafer-scale** | Single-card multi-die |
| AI Core Count | 900,000 | **~1,500,000** | ~10,000 (SM) |
| SRAM | 44 GB | **~80 GB** | 288 GB HBM4 |
| SRAM Bandwidth | 21 PB/s | **~40 PB/s** | 22 TB/s HBM4 |
| BF16 Compute (sparse) | 125 PFLOPS | **~200 PFLOPS** | 25 PFLOPS |
| **Single-chip BF16 Compute Ratio** | **5×** | **8×** | 1× (baseline) |
| TDP | 25 kW | **~30 kW** | 1.8 kW |
| Cooling | **Liquid + massive system** | Liquid + massive system | Liquid (card-level) |
| Ecosystem | PyTorch + JAX | Same | CUDA |

> 💡 **WSE core advantage**: **On-chip SRAM + high bandwidth + high compute**. Single-chip BF16 compute is 5-8× that of Rubin R200 (per single-chip comparison), **but power and physical footprint are major issues** (25-30 kW/chip vs 1.8 kW/card).

## Cerebras CS-4 System (Estimated)

| Item | Configuration |
|------|------|
| **WSE Count** | 1 (single-chip wafer-scale) |
| **Server Dimensions** | 1U + large cooling (similar to CS-3) |
| **MemoryX** | 1.5 TB extended DRAM (external) |
| **SwarmX** | Multi-WSE interconnect (optional, up to 192 WSEs) |
| **Total BF16 Compute** | ~200 PFLOPS (single WSE-4) |
| **TDP (single WSE-4)** | ~30 kW |

## Software Ecosystem

- **Cerebras Software Platform (CSoft)**: Based on PyTorch
- **JAX + Cerebras backend**: Google integration
- **vLLM 0.7+ Cerebras backend** (estimated)
- **HuggingFace integration**
- **Triton + Cerebras backend**
- **OpenAI compatible API** (Cerebras Inference)

## Use Cases

- ✅ **Ultra-large-scale LLM training** (WSE-4 single chip can hold 1T+ models)
- ✅ **Ultra-low-latency inference** (CS-4 Inference)
- ✅ **Government/scientific computing** (high compute + domesticization options)
- ✅ **OpenAI inference customers** (WSE-4 expected to support some OpenAI inference workloads)
- ❌ Edge deployment (power/physical footprint)
- ❌ Small/medium model training (not cost-effective)

## Vendor Information

| Item | Details |
|------|------|
| **Vendor** | Cerebras Systems |
| **First Disclosure** | 2027 (expected) |
| **Product Page** | https://www.cerebras.net/ |
| **Foundry** | TSMC |
| **IPO Status** | **Listed May 2026** (Nasdaq: CBRS) |
| **Customers** | OpenAI, G42, Mistral, Meta, and others |

## Related Products

- [Cerebras WSE-3](/docs/cards/cerebras/wse-3) - Current flagship
- [Cerebras WSE-2](/docs/cards/cerebras/wse-2) - Previous generation
- [NVIDIA Rubin R200](/docs/cards/nvidia/rubin-r200) - Same-generation GPU
- [NVIDIA Groq 3 LPX](/docs/cards/nvidia/groq-3-lpx) - Inference comparison
- [Google TPU 8t](/docs/cards/google/tpu-8t) - Training ASIC comparison
- [Full Comparison Table](/docs/comparison)
