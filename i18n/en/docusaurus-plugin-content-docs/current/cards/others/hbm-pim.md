---
id: hbm-pim
title: Samsung HBM-PIM (Aquabolt-XL, Processing-in-Memory)
sidebar_label: Samsung HBM-PIM
description: Samsung HBM-PIM (Processing-in-Memory) detailed specs: Aquabolt-XL, FP16 compute integrated into HBM, 2x performance, efficiency boost.
keywords: [Samsung HBM-PIM, Aquabolt, Processing-in-Memory, PIM, HBM-PIM, CXL]
---

# Samsung HBM-PIM (Aquabolt-XL)

## Product Overview

**Samsung HBM-PIM** (**P**rocessing-**I**n-**M**emory) is Samsung Electronics' **Processing-in-Memory** (Near-Data Processing) AI accelerator, integrating **compute units directly inside HBM memory**.

**2021-02 Hot Chips** debut (Aquabolt), **2022-12** upgraded to **Aquabolt-XL**, FP16 compute increased 2x. **2024-2025** accelerating commercialization (NVIDIA H200, Samsung's own SG-Ready platform).

## Core Specs (Aquabolt-XL)

| Item | Parameter |
|------|------|
| **Architecture** | **HBM-PIM (Processing-in-Memory)** |
| **Process** | HBM: 1y nm DRAM / Logic: 4nm |
| **HBM Capacity** | 12 GB (HBM2-PIM) |
| **HBM Stack** | 8-Hi (8-layer DRAM stack) |
| **Integrated Compute** | **1.2 TFLOPS FP16** (per HBM stack) |
| **Energy Improvement** | **2.5x** (vs traditional HBM + GPU) |
| **Memory Bandwidth** | 307 GB/s (traditional) + PIM internal 1 TB/s+ |
| **TDP** | +10% (vs traditional HBM, PIM integration adds minimal overhead) |
| **Interface** | HBM interface (compatible with existing GPU slots) |
| **Debut** | 2021-02 (Aquabolt) / 2022-12 (XL) |

## Processing-in-Memory (PIM) Architecture

### Traditional Architecture Bottleneck
- **Memory wall**: AI compute grows 1000x, memory bandwidth only 100x
- **Data movement energy**: data from DRAM to GPU registers, **energy 100-1000x that of computation**

### PIM Solution
- **Compute units embedded in DRAM arrays** (next to each bank)
- Data **never leaves DRAM** to be computed
- Eliminates "memory wall" bottleneck
- **2.5x efficiency improvement**

### PIM Internal Architecture
- Each HBM stack = 8-layer DRAM
- Each layer integrates **FP16 x 16-core PIM units**
- HBM internal **Programmable PIM Engine**
- Accessed via standard HBM interface (no GPU modification needed)

## Performance Comparison (FP16 Inference)

| Configuration | Performance | Energy |
|------|------|------|
| Traditional HBM2 + A100 | 312 TFLOPS | 300W |
| HBM-PIM (XL) + A100 | **+2x AI inference** | comparable |
| HBM-PIM (XL) + H100 | **1.7x inference acceleration** | comparable |

> **Key**: HBM-PIM requires only minor GPU board design modifications to use.

## Use Cases

### Large Model Inference (Recommended)
- **LLM decoding**: Memory-bound operations, PIM perfect match
- **Retrieval-Augmented Generation (RAG)**: embedding lookup
- **Recommender systems**: vector search

### Data Center
- **Samsung SG-Ready XA2000** server (with HBM-PIM)
- Commercial deployment starting 2024

### Academic and Open Source
- **Samsung PIM SDK**
- **UPMEM PIM** (similar product)
- **Mythic AI** (NOR Flash PIM)

## PIM Ecosystem Challenges

- Warning: **Early ecosystem**: only Samsung's own SDK + select OEMs
- Warning: **Software adaptation**: requires rewriting operators to leverage PIM
- Warning: **CUDA compatibility**: currently only specific operators supported
- Check: **Samsung 2024-2025 accelerating push**: NVIDIA collaboration

## Vendor Information

| Item | Content |
|------|------|
| **Vendor** | Samsung Electronics |
| **Product Page** | https://semiconductor.samsung.com/dram/hbm/hbm-pim/ |
| **Debut** | Aquabolt 2021-02 / Aquabolt-XL 2022-12 |
| **Partners** | NVIDIA (H200 integration) / South Korea KISTI supercomputing |
| **Target Market** | large model inference, recommender systems, HPC |

## Use Cases

- ✅ **Large model inference** (Memory-bound ops accelerated 2x)
- ✅ RAG / retrieval augmentation
- ✅ Recommender system vector search
- ✅ HPC data-intensive computing
- Warning: Training (limited benefit for small-scale data reuse)
- ❌ Compute-intensive (GPU already sufficient)

## Related Products

- [NVIDIA H200](/docs/cards/nvidia/h200) - integrated HBM3e
- [NVIDIA H100 NVL](/docs/cards/nvidia/h100-nvl) - 188GB HBM3e
- [Groq LPU](/docs/cards/others/groq-lpu) - also LLM inference architecture
- [Google TPU v7 Ironwood](/docs/cards/google/tpu-ironwood) - 192GB inference
