---
id: ibm-northpole
title: IBM NorthPole (In-Memory Compute, 2023)
sidebar_label: IBM NorthPole
description: "IBM NorthPole detailed specs: 22nm, 458 TOPS INT8, 75W, In-Memory Compute, descendant of pioneering TrueNorth, Science 2023 paper."
keywords: [IBM NorthPole, In-Memory Compute, Neuromorphic, 22nm, 458 TOPS, TrueNorth, IBM Research, Science 2023]
---

# IBM NorthPole (In-Memory Compute, 2023)

## Product Overview

**IBM NorthPole** is IBM Research's **revolutionary AI inference chip**, prototype published in **2023-10-19 Science paper** ("Neuromorphic computing at scale", Dharmendra Modha team), **22nm process**, **458 TOPS INT8** compute, **75W TDP**. Uses an **In-Memory Compute** architecture, **all weights stored in on-chip SRAM + analog compute units**, **eliminating the von Neumann bottleneck** (conventional GPUs spend 99% of power on data movement).

**Architectural inspiration**: derived from IBM's **TrueNorth neuromorphic chip** (2014, 54B transistors, 100K neurons), **NorthPole is TrueNorth's practical AI version**, **energy efficiency 25x better than GPUs** (IBM official paper data).

**Strategic significance**: IBM is the leader in **in-memory compute + neuromorphic** AI. **NorthPole is the first to scale in-memory compute to 458 TOPS as a commercially viable AI chip. NorthPole 2** expected 2025 H2 release, **25x efficiency advantage**.

## Core Specs

| Item | Parameter |
|------|------|
| **Architecture** | IBM NorthPole (In-Memory Compute) |
| **Process** | **IBM 22nm SOI** (**Samsung 11nm estimated 2026**) |
| **Core Count** | **256 CISC processors** (Custom Instruction Set) |
| **SRAM** | **224MB on-chip SRAM** (**one of the largest AI chip SRAM in industry**) |
| **In-Memory Compute** | **1.6B weights + 30B MAC units** |
| **Memory Bandwidth** | **2.5 TB/s** (on-chip SRAM) |
| **INT8** | **458 TOPS** |
| **FP16** | ~110 TFLOPS |
| **TDP** | **75 W** |
| **Efficiency** | **6.1 TOPS/W** (H100 ~2.16, **3x advantage**) |
| **Latency** | **5-10ms** (in-memory compute = zero data movement) |
| **Mass Production** | **not commercialized** (research prototype) |
| **Commercial Version** | **NorthPole 2** 2025 H2 estimated |

## In-Memory Compute Principle

| Dimension | Traditional GPU (von Neumann) | IBM NorthPole (In-Memory) |
|------|------------------------|---------------------------|
| **Architecture** | Memory (DRAM/HBM) + compute (GPU) separate | **Memory + compute fused** |
| **Data Movement** | 99% power on data movement | **0 data movement (compute inside SRAM)** |
| **Operations** | Scalar MAC arrays | **Analog / digital hybrid** |
| **Energy** | 1x | **0.04x** (25x advantage) |
| **Latency** | HBM-limited | **5-10ms** (zero wait) |
| **Reconfigurable** | CUDA programs | **Network topology config** |
| **Precision** | FP64/FP32/FP16/INT8 | **INT8 primarily** (analog compute limits) |
| **Drawback** | - | **inference only, INT8 limited, training immature** |

### How In-Memory Compute Works

```
Traditional GPU:
  Load weights (HBM) -> Load input (HBM) -> MAC (CUDA) -> Store result (HBM)
  Total energy: 100% (99% on data movement)

IBM NorthPole:
  Weights pre-stored in SRAM analog units (immutable)
  Load input (SRAM) -> Analog MAC (inside SRAM) -> Store result (SRAM)
  Total energy: 4% (data movement 0-1%)
```

**Key advantages**:
- **224MB SRAM stores all weights at once** (LLM 70B INT8 = 70GB still needs HBM, but small models pure SRAM)
- **30B analog MAC units** computing simultaneously
- **6.1 TOPS/W** (H100 3x efficiency)

## 256 CISC Processors

| Dimension | Spec |
|------|------|
| **Architecture** | **CISC (Custom Instruction Set)** |
| **Core Count** | 256 |
| **Per Core** | 64KB SRAM + 4 analog MAC units |
| **Frequency** | 1.4 GHz |
| **Role** | Scheduling + activation functions + scalar ops |
| **ISA** | **Proprietary** (not RISC-V, not ARM) |
| **Programming** | Neural network topology graph config (TrueNorth-like) |

> **CISC vs RISC**: NorthPole doesn't use RISC-V because in-memory compute requires **custom instructions** for neural topology compilation. **TrueNorth -> NorthPole** is IBM's 10-year R&D accumulation.

## 25x Efficiency Source

| Factor | Energy Savings |
|------|----------|
| **Data movement reduction** | **20x** (vs HBM) |
| **Analog computing** | **3x** (vs digital) |
| **SRAM internal compute** | **1.5x** (vs registers) |
| **22nm SOI** | **0.8x** (vs 5nm digital) |
| **Total** | **25x** (IBM paper data) |

> **IBM paper conclusion**: **NorthPole on ResNet-50 inference, 25x more energy-efficient than NVIDIA H100, 25x faster** (same precision).

## ResNet-50 Performance (IBM Science Paper)

| Dimension | IBM NorthPole | NVIDIA V100 | NVIDIA H100 |
|------|---------------|--------------|--------------|
| **Latency** | **5ms** | 8ms | 2ms |
| **Throughput** | **7,000 images/s** | 5,000 images/s | 15,000 images/s |
| **Efficiency** | **6.1 TOPS/W** | 0.4 TOPS/W | 2.16 TOPS/W |
| **Power** | 75W | 250W | 700W |
| **Precision** | INT8 | FP16 | FP8 |

> **NorthPole advantage**: **5ms latency 1.6x V100, but 15x efficiency**. **H100 wins on throughput (FP8 advantage)**, but NorthPole wins in **low-latency + low-power** scenarios.

## Vendor Information

| Item | Content |
|------|------|
| **Company** | IBM Research |
| **Lab** | IBM Research - Almaden (San Jose, California) |
| **Chief Scientist** | **Dharmendra S. Modha** (IBM Fellow) |
| **Team** | 100+ IBM Research engineers |
| **Publication** | **Science 2023-10-19** ("Neuromorphic computing at scale")|
| **Paper Citations** | 200+ (2024-2026) |
| **Commercialization** | **not commercialized** (IBM doesn't sell directly)|
| **Commercial Path** | **IBM Cloud inference service** (future) + **IP licensing** (Samsung 11nm 2026) |
| **Customers** | US DARPA, NASA, Department of Energy |
| **Competitors** | Mythic (digital CIM), Syntiant (edge CIM), ChiCore (China) |

## IBM Neuromorphic AI Evolution

| Product | Released | Transistors | Neurons | Compute | Purpose |
|------|------|--------|--------|------|------|
| **TrueNorth** | 2014 | 54 B | 100 K | - | Neuromorphic research |
| **NorthPole** | 2023-10 | 220 B | analog | **458 TOPS INT8** | **AI inference** |
| **NorthPole 2** | **2025 H2 estimated** | - | analog | **1.2 POPS INT8** (estimated) | **AI inference + training** |
| NorthPole 3 (est.) | 2027 | - | analog | 5 POPS | General AI |

## Use Cases

- ✅ **Low-latency AI inference** (5-10ms, ultra-low latency)
- ✅ **Ultra-low-power AI** (75W, 3-25x GPU efficiency)
- ✅ **Government/research HPC** (US DARPA, NASA, DOE)
- ✅ **Neuromorphic AI research** (next-gen AI architecture)
- ✅ **Small model inference** (7B-13B <70GB fits 224MB as pure SRAM)
- ❌ **AI training** (NorthPole inference only)
- ❌ **Large model training** (<224MB SRAM limit)
- ❌ **Commercial purchase** (IBM not commercialized)
- ❌ **CUDA compatibility** (proprietary ISA)

## IBM In-Memory Compute Strategy

- **IBM Research AI flagship project**: Modha team 10-year R&D
- **DARPA funding**: SyNAPSE program (2014-2024 $100M+ cumulative)
- **NorthPole 2**: 2025 H2 commercial version, Samsung 11nm collaboration
- **AI Cloud service**: IBM Cloud integrated NorthPole inference
- **Open-source software**: IBM plans to open-source NorthPole compilation stack (PyTorch integration)

## Key Features

- **In-Memory Compute**: first 458 TOPS scale in-memory compute
- **224MB SRAM**: largest AI chip SRAM in industry
- **6.1 TOPS/W**: H100 3x efficiency
- **5ms latency**: real-time AI inference
- **75W TDP**: air-cooled deployment
- **Drawbacks**: not commercialized, INT8 only, no training support

## Neuromorphic AI Big Three

| Company | Product | Compute | Status |
|------|------|------|------|
| **IBM** | **NorthPole** | **458 TOPS INT8** | 2023 prototype |
| **Intel** | **Loihi 2** | 1M neurons | 2021 neuromorphic research |
| **Brainchip** | **Akida 2** | 200 GOPS INT8 | 2023 Edge commercial |

## Related Products

- [Akida 2](/docs/cards/others/akida-2) - Neuromorphic Edge AI
- [Lightmatter Envise](/docs/cards/others/lightmatter-envise) - Silicon photonics
- [Lightelligence Tianjic](/docs/cards/others/lightelligence) - Chinese silicon photonics
- [LightOn (France photonics)](/docs/cards/others/lighton) - France silicon photonics
- [Groq LPU v2](/docs/cards/others/groq-lpu-v2) - LPU inference
- [Cerebras WSE-3](/docs/cards/cerebras/wse-3) - Wafer-scale
- [Apple M4 Max](/docs/cards/others/apple-m4-max) - mobile/workstation
- [NVIDIA L4](/docs/cards/nvidia/l4) - edge GPU
