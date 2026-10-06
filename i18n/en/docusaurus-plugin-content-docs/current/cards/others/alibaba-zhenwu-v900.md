---
id: alibaba-zhenwu-v900
title: Alibaba T-Head Zhenwu V900 (Training + Inference AI Chip)
sidebar_label: Zhenwu V900
description: "Alibaba T-Head Zhenwu V900 training-inference AI chip specs: 216 GB memory, 1200 GB/s inter-chip interconnect, native FP8/FP4, 3x the performance of Zhenwu M890. Unveiled at Apsara Conference on September 22, 2026, volume production in Q1 2027, ICN Switch interconnect scales to 500,000-chip clusters."
keywords: [Zhenwu V900, T-Head, Alibaba, 216GB, ICN Switch, Apsara Conference, Chinese AI chip, trillion-parameter]
---

# Alibaba T-Head Zhenwu V900

## Overview

**Zhenwu V900** is the next-generation **training + inference AI chip** from **T-Head Semiconductor** (Alibaba's chip subsidiary), officially unveiled at the **Apsara Conference in Hangzhou on September 22, 2026**. Alibaba calls it **the most powerful Chinese self-developed AI chip by compute performance**, capable of serving trillion-parameter model training and inference. The launch came well ahead of its original roadmap slot (Q3 2027), with **volume production and cloud availability planned for Q1 2027**.

V900 is built on a **self-developed parallel computing architecture** with **216 GB of memory** — exceeding NVIDIA B200's 192 GB and H200's 141 GB — and **1200 GB/s inter-chip interconnect bandwidth** (a 50% increase over M890's 800 GB/s). The chip **natively supports FP8 and FP4 low-precision formats**, which Alibaba says dramatically increases compute density while cutting inference cost, covering high-precision training through ultra-low-precision inference.

**Performance claims**: officially **3x the performance of Zhenwu M890**. As with M890, T-Head has **not disclosed absolute FLOPS, process node, or TDP** — widely understood to be a deliberate disclosure strategy under export-control pressure. Industry analysts speculate SMIC fabrication at roughly 7nm-class, though this is unconfirmed.

**Interconnect and clustering**: built on the self-developed **ICN interconnect bus protocol**, V900 connects through **ICN Switch** chips to form a fully symmetric Scale-Up fabric with native memory semantics and unified memory addressing across the domain, delivering consistent chip-to-chip latency. The new **Panjiu AL128 supernode server** — integrating Zhenwu V900, ICN Switch, Panmai smart NICs, and Zhenyue SSD controllers — scales a single cluster to **500,000 chips**, going live in Q1 2027.

**Commercial traction**: the Lingjun Zhenwu M890 supernode instance (GP9A) on Alibaba Cloud went live in August 2026, the first Chinese supernode-class platform to run models beyond 2 trillion parameters (Qwen 3.8, Kimi K3). As of September 2026, the Zhenwu series serves **over 650 enterprise customers** across autonomous driving, finance, foundation models, embodied AI, energy, and manufacturing.

## Core Specifications

| Item | Spec |
|------|------|
| **Architecture** | T-Head self-developed parallel computing architecture (PPU) |
| **Process** | Not disclosed (speculated domestic 7nm-class) |
| **Memory Capacity** | **216 GB** |
| **Inter-chip Bandwidth** | **1200 GB/s** (self-developed ICN link) |
| **Precision Support** | FP32 / FP16 / FP8 / **FP4** native |
| **FP16** | Not disclosed |
| **TDP** | Not disclosed |
| **Interconnect Chip** | ICN Switch (symmetric full-bandwidth fabric, unified memory addressing) |
| **Max Cluster Scale** | **500,000 chips** (Panjiu AL128 supernode) |
| **Announced** | **September 22, 2026** (Apsara Conference 2026) |
| **Volume Production** | **Q1 2027** |
| **Software Stack** | T-Head SAIL (self-developed full stack) |
| **Price** | Not disclosed (primarily via Alibaba Cloud compute services) |

> ⚠️ **Spec note**: T-Head has **not disclosed** absolute FLOPS, memory type details, process node, or TDP. The "3x M890 performance" figure is a **vendor claim** without independent third-party verification; independent benchmarks are unlikely before volume production in Q1 2027.

## Zhenwu Roadmap

| Timeline | Model | Memory | Inter-chip | Performance |
|------|------|------|----------|------|
| 2026 Q2 | Zhenwu 810E | 96 GB HBM2e | 700 GB/s | Baseline (gen 1) |
| 2026 Q2 | Zhenwu M890 | 144 GB | 800 GB/s | 3x of 810E |
| **2027 Q1** | **Zhenwu V900** | **216 GB** | **1200 GB/s** | **3x of M890** |
| 2027 Q3 | Zhenwu J900 | Not disclosed | Not disclosed | Breakthrough architecture |

## Positioning and Competition

Zhenwu V900 crystallizes T-Head's **asymmetric competition strategy**: rather than chasing the most advanced process node, it integrates **memory capacity, inter-chip interconnect, software stack, and model requirements** into a full-stack solution. The 216 GB memory directly targets the "memory wall" of the large-model era — larger parameter counts load onto a single card, reducing data movement between memory tiers. The 1200 GB/s inter-chip bandwidth targets NVIDIA NVLink-class scale, dissolving the "communication wall" of 10,000-chip clusters.

Downstream, Alibaba confirmed Qwen models will deploy to V900 clusters first, with the next Qwen generation planned at multi-trillion to 10-trillion parameter scale — exactly what the V900 and its 500,000-chip clusters are engineered to support. V900 is also viewed as the most realistic high-end training option for Chinese cloud providers locked out of NVIDIA B200 by export controls.

**Key limitations**:
- Absolute compute, process, and memory bandwidth undisclosed; real performance awaits volume production in 2027
- Software ecosystem (T-Head SAIL) still trails NVIDIA CUDA
- Tightly bound to the Alibaba Cloud + Qwen ecosystem, limiting third-party deployment flexibility
