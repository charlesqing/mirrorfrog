---
id: tenstorrent-blackhole
title: Tenstorrent Blackhole (RISC-V 2nd Gen, 2024)
sidebar_label: Blackhole
description: "Tenstorrent Blackhole detailed specs: 6nm, 120 Tensix cores, 8GB SRAM, 16 BF16 PF cluster, RISC-V heterogeneous, Jim Keller architecture."
keywords: [Tenstorrent Blackhole, RISC-V 2nd gen, Tensix, 120 cores, 8GB SRAM, 16 PF cluster, Jim Keller]
---

# Tenstorrent Blackhole (RISC-V 2nd Gen, 2024)

## Product Overview

**Tenstorrent Blackhole** is Tenstorrent's **second-generation RISC-V AI chip**, **launched H1 2024**, **6nm process** (TSMC), **120 Tensix cores** (**1.5× Wormhole's 80 cores**), **8 GB SRAM** (**one of the largest on-chip SRAMs in the industry**), **16 BF16 PFLOPS cluster compute** (**8-card interconnect**). The architecture is led by legendary CPU designer **Jim Keller** (former Apple A14/M1, AMD Zen, Tenstorrent CTO).

**Key positioning**: Tenstorrent is **the only AI startup with RISC-V + custom ASIC + top-tier architect** combined. **Blackhole is the company's 2024 flagship**, **customers: Foxconn (manufacturing), LG AI Research, RIKEN (Japan), Bosch, Mercedes-Benz**.

## Core Specifications

| Item | Spec |
|------|------|
| **Architecture** | Tenstorrent Tensix + RISC-V |
| **Process** | **TSMC 6nm** (vs. Wormhole 12nm) |
| **Tensix Cores** | **120** (vs. Wormhole 80) |
| **Per Tensix Core** | 5 small RISC-V cores + 1 NoC + 1 MB SRAM |
| **On-chip SRAM** | **8 GB** (120 Tensix × 1 MB = 120 MB, likely with shared L2) |
| **LPDDR4X** | 24 GB (possibly 16 GB / 32 GB variants) |
| **Memory Bandwidth** | 307 GB/s (LPDDR4X) |
| **BF16** | 1.2 PFLOPS per card (8 cards = **16 PFLOPS**) |
| **INT8** | 4.8 POPS per card (speculative) |
| **TDP** | **~300 W** |
| **Form Factor** | PCIe Gen5 ×16 |
| **Interconnect** | **Ethernet** (standard, open) |
| **Production** | H2 2024 |
| **Unit Price** | ~$1,500–3,000 |

## Tensix Core Architecture

| Dimension | Spec |
|-----------|------|
| **Per Core** | **5× RISC-V Baby + 1× NoC core** |
| **Baby RISC-V** | 1× 32-bit scalar + 2× 32-bit SIMD + 2× 32-bit DSP |
| **NoC Core** | Network-on-Chip scheduling |
| **SRAM per Core** | **1 MB** |
| **BF16 per Core** | ~10 TFLOPS |
| **BF16 per Card** | 120 × 10 = **1.2 PFLOPS** |

```
Inside a Tensix core:
  ┌──────────────────────────────────────┐
  │  RISC-V 1  │  RISC-V 2  │  RISC-V 3  │  32-bit scalar/SIMD/DSP
  │            │            │            │
  │  RISC-V 4  │  RISC-V 5  │  NoC core   │
  │            │            │            │
  │  1 MB SRAM (dual-port)               │
  │  Tensix Compute: Matrix + Vector + Scalar │
  └──────────────────────────────────────┘
```

> **Tensix innovation**: **5 RISC-V + 1 NoC sharing 1 MB SRAM**, more flexible than traditional GPU's "CUDA core + Tensor core + shared memory" model, **can independently run 6 RISC-V threads** (vs. GPU's 32 threads/warp).

## 8 GB On-chip SRAM Advantage

| Dimension | Advantage |
|-----------|-----------|
| **LLM Inference** | 7B FP16 = 14 GB slightly exceeds; 7B INT4 = 3.5 GB **fits entirely in SRAM** |
| **13B LLM** | INT4 = 6.5 GB **fits entirely in SRAM** |
| **70B LLM** | INT4 = 35 GB requires LPDDR4X, but weights loaded to SRAM eliminate HBM wait |
| **Latency** | Matrix multiply inside SRAM, **latency < 1 ms** |
| **Power Efficiency** | SRAM uses 10× less power than HBM |

> **Blackhole 8 GB SRAM advantage**: **7B/13B LLM fully on-chip inference**, **less power-hungry than H100's 80 GB, with higher energy efficiency** (pending benchmarks).

## 8-Card Cluster 16 PFLOPS

| Item | Config |
|------|--------|
| **Blackhole Cards** | 8 |
| **BF16 Compute** | **16 PFLOPS** (8 × 1.2 PF) |
| **Total SRAM** | 64 GB |
| **Total LPDDR4X** | 192 GB |
| **Interconnect** | **Standard Ethernet** (100G/200G open) |
| **Rack TDP** | ~2.4 kW |
| **Rack Price** | ~$30K |

**Tenstorrent 4U Server** (standardized):
- **Grayskull** (1st gen) — 2021, 120 W, 32 GB
- **Wormhole** (2nd gen) — 2023, 200 W, 80 Tensix
- **Blackhole** (3rd gen) — 2024, 300 W, 120 Tensix

## Comparison with NVIDIA H100

| Metric | Tenstorrent Blackhole 8-card | NVIDIA H100 single | Difference |
|--------|------------------------------|--------------------|------------|
| **BF16 Compute** | **16 PF** | 1.5 PF (FP8 sparse) | **Blackhole 10×** |
| **TDP** | 2400 W | 700 W | Blackhole 3.4× |
| **Energy Efficiency** | 6.7 TOPS/W | 2.16 TOPS/W | **Blackhole 3×** |
| **Memory** | 192 GB LPDDR4X | 80 GB HBM3 | Blackhole 2.4× |
| **Bandwidth** | 2.5 TB/s | 3.35 TB/s | **H100 1.3×** |
| **Software** | TT-Metalium | CUDA | **H100 more mature** |
| **Price** | ~$30K (8 cards) | ~$25–30K | Comparable |

> **Blackhole 8-card cluster vs. H100 single**: **10× cluster compute, 3.4× power** (3× energy efficiency), **ideal for ultra-large LLM inference** (Llama 3 405B split across 8 cards).

## Manufacturer Info

| Item | Detail |
|------|--------|
| **Company** | Tenstorrent Inc. |
| **CTO** | **Jim Keller** (former Apple A14/M1, AMD Zen, Intel, Tesla AI chip) |
| **CEO** | **Ljubisa Bajic** (former AMD) |
| **Founded** | 2016 |
| **HQ** | San Jose, CA + Toronto, Canada |
| **Funding** | **$700M+** (Series B Q1 2024, led by Bezos Expeditions + Samsung Securities) |
| **Valuation (2025)** | **$3B+** (unicorn) |
| **2024 Revenue** | ~$80M |
| **Employees** | ~500 |
| **Fab** | TSMC 6nm + **Samsung 4nm (roadmap)** |
| **Strategic Partners** | **Foxconn** (manufacturing + servers), **LG AI Research**, **RIKEN Japan**, **Bosch**, **Mercedes-Benz**, **LG**, **Rapidus** (Japan 2nm) |
| **Status** | **Private** (considering 2026–2027 IPO) |

## Tenstorrent Product Line

| Product | Released | Tensix Cores | Process | BF16 | Customers |
|---------|----------|-------------|---------|------|-----------|
| **Grayskull** | 2021 | 120 | 12nm | 368 TF | Early customers |
| **Wormhole** | 2023 | 80 | 12nm | 600 TF | LG / RIKEN |
| **Blackhole** | **H1 2024** | **120** | **6nm** | **1.2 PF** | **Foxconn / LG / Bosch** |
| **Quasar** (speculative) | H2 2025 | 200 | 5nm | 3 PF | Roadmap |
| **Grendel** (speculative) | 2026 | 256 | 4nm | 6 PF | Long-term |

## Software Stack: TT-Metalium / TT-Forge

| Layer | Tool | Description |
|-------|------|-------------|
| **AI Framework** | **TT-Forge** | PyTorch 1:1 compatible (auto-maps to Tensix) |
| | **TT-Metalium** | Low-level C++ programming (direct Tensix core control) |
| | JAX / TensorFlow | Compatible (experimental) |
| **Compiler** | **TT-Forge Compiler** | Model → Tensix binary |
| **Runtime** | TT-Runtime | Multi-card orchestration (standard Ethernet) |
| **Open Source** | **Fully open-source** (GitHub 10K+ stars) | Opposite of CUDA proprietary |

> **Tenstorrent's killer feature**: **fully open-source software stack** (vs. CUDA 18-year proprietary), **6 RISC-V threads / Tensix** (vs. GPU 32 threads/warp black box), **standard Ethernet interconnect** (vs. NVLink proprietary).

## Use Cases

- ✅ **RISC-V software ecosystem** (fully open-source + heterogeneous RISC-V)
- ✅ **Large enterprise LLM inference** (Jim Keller brand)
- ✅ **Automotive AI** (Bosch, Mercedes-Benz customers)
- ✅ **Government / National Lab HPC** (RIKEN Japan, LG Korea)
- ✅ **Manufacturing customers** (Foxconn production line deployment)
- ✅ **Budget-sensitive** (~$1,500/card, far below H100's $25K)
- ❌ **AI training focus** (Blackhole has weak training ecosystem)
- ❌ **CUDA-proprietary workloads** (requires TT-Forge porting)
- ❌ **Latency-critical** (HBM bandwidth advantage)

## Key Features

- **120 Tensix cores + 5 RISC-V/core**: the highest RISC-V core count in the industry (600 RISC-V cores)
- **8 GB SRAM**: one of the largest on-chip SRAMs among AI chips
- **Fully open-source software**: vs. proprietary CUDA
- **Standard Ethernet interconnect**: vs. proprietary NVLink
- **Jim Keller architecture**: legendary designer (Apple A14, AMD Zen)
- **Drawbacks**: slow LPDDR4X, weak training ecosystem, only 1 year in production

## Jim Keller Career Timeline

| Company | Role | Contribution |
|---------|------|-------------|
| **DEC Alpha** | Architect | Alpha 21264 |
| **AMD K8** | Chief Architect | Athlon 64 |
| **AMD K8/K10** | Lead Architect | Barcelona |
| **Apple** | Chip Architect | Apple A4/A5 |
| **AMD Zen** | Lead Architect | **Zen / Zen 2** (Ryzen 1000–3000) |
| **Tesla** | VP of Hardware | Custom AI chip (unreleased) |
| **Intel** | Senior VP | Brief tenure |
| **Tenstorrent** | **CTO** | **Grayskull / Wormhole / Blackhole** |

> **Jim Keller at Tenstorrent** is the **technical + brand core** of the company; every chip generation is led by his design.

## Big Four US AI Chip Startups

| Company | Architecture | 2024 Flagship | Funding | Status |
|---------|-------------|---------------|---------|--------|
| **SambaNova** | Dataflow | SN40L | $1.1B+ | Commercialization leader |
| **Cerebras** | Wafer-scale | WSE-3 | $1.5B+ | 2026 IPO |
| **Groq** | LPU | LPU v2 | $1B+ | 2026 NVIDIA acquisition |
| **Tenstorrent** | **RISC-V** | **Blackhole** | **$700M+** | 2026–2027 IPO |

## Related Cards

- [Tenstorrent](/docs/cards/others/tenstorrent) — overview (Wormhole)
- [Esperanto ET-SoC-1](/docs/cards/others/esperanto-et-soc-1) — RISC-V heterogeneous
- [SambaNova SN40L](/docs/cards/others/sambanova-sn40l) — Dataflow
- [Groq LPU v2](/docs/cards/others/groq-lpu-v2) — LPU
- [Cerebras WSE-3](/docs/cards/cerebras/wse-3) — wafer-scale
- [Cambricon MLU 590](/docs/cards/others/cambricon-mlu) — domestic RISC-V
- [NVIDIA H100](/docs/cards/nvidia/h100) — industry comparison
- [Lightelligence](/docs/cards/others/lightelligence) — RISC-V photonics
