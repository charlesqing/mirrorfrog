---
id: iluvatar-zhikai-150
title: Iluvatar CoreX Zhikai 150 (Cloud Inference Accelerator Card)
sidebar_label: Zhikai 150
description: "Iluvatar CoreX Zhikai 150 inference accelerator card detailed specs: 300 TOPS INT8, 32 GB HBM2e, general-purpose GPU architecture (not ASIC), priced at around RMB 30,000, positioned for high-density cloud inference with support for mainstream deep learning frameworks and CUDA migration."
keywords: [Iluvatar CoreX, Zhikai 150, Iluvatar, inference GPU, 32GB HBM2e, INT8, 300 TOPS, general-purpose GPU, domestic AI chip]
---

# Iluvatar CoreX Zhikai 150 (Cloud Inference Accelerator Card)

## Product Overview

The **Zhikai 150** is an Iluvatar CoreX **Zhikai series** accelerator card for **AI inference**, positioned **above the Zhikai 100** within the series. It is built on a **standard general-purpose GPGPU architecture** (rather than a dedicated ASIC), and therefore offers full programmability and a general-purpose compute instruction set.

This design choice brings a key advantage: **it can quickly adapt to rapidly iterating large-model algorithms without re-taping out for a single scenario**. As large-model architectures evolve from pure Decoders to MoE and multimodal fusion, the compute characteristics of inference workloads keep changing, and dedicated chips can easily become architecturally outdated within six months; general-purpose GPUs, thanks to their programmability, can keep unlocking performance through software optimization.

For customers, existing inference frameworks and operators developed on CUDA can be adapted quickly through a compilation layer without starting from scratch, significantly shortening time to deployment — this is the core reason the Zhikai series has become a mainstay inference supply for major internet companies.

## Core Specifications

| Parameter | Value |
|-----------|-------|
| **Architecture** | Iluvatar CoreX general-purpose GPU architecture (GPGPU, not ASIC) |
| **Product Positioning** | Cloud AI inference |
| **INT8** | **300 TOPS** |
| **Memory Capacity** | **32 GB** HBM2e |
| **Interface** | PCIe Gen4 ×16 |
| **Launch** | 2024 |
| **Price** | Approx. **RMB 30,000** |
| **TDP** | Not disclosed (see other cards in the Zhikai series for reference) |

> ⚠️ **Specification Notes**: Official public information on the Zhikai 150 is limited; process node, FP16 / FP32 compute, memory bandwidth, and TDP are all not disclosed. The INT8 300 TOPS and 32 GB HBM2e figures in the table above come from securities analyst research notes, and the price of around RMB 30,000 is a channel-reported figure.

## Zhikai Series Comparison

| Model | INT8 Compute | Memory | Board Power | Price | Positioning |
|-------|--------------|--------|-------------|-------|-------------|
| Zhikai 50 | 192 TOPS | 16 GB HBM2e | **75 W** | ~RMB 15,000 | Edge / industrial lightweight inference |
| Zhikai 100 | 384 TOPS | 32 GB HBM2e | 150 W | ~RMB 23,000 | Cloud mainstream inference (series workhorse) |
| **Zhikai 150** | **300 TOPS** | **32 GB HBM2e** | Not disclosed | ~RMB 30,000 | High-density cloud inference |

> 📌 **Data Source Note**: The Zhikai 100's INT8 compute is reported as **192 / 384 / 512 TOPS** in different sources; this site uses **384 TOPS** from securities analyst research notes. The Zhikai 150's 300 TOPS is lower than the Zhikai 100 under that figure, suggesting the two take **different optimization directions** (the 150 may focus on a specific precision or scenario); refer to Iluvatar CoreX's official datasheet.

## Selection Guidance

- **Migration friendliness**: The Zhikai series' general-purpose GPU architecture is its biggest selling point, ideal for teams with substantial existing CUDA code assets that want to switch to domestic compute at low retrofit cost
- **Maximum inference cost-effectiveness**: If workloads are fixed and operator customization is acceptable, dedicated ASICs (such as Kunlunxin and Ascend Atlas 300I series) may offer better unit cost
- **Edge / industrial scenarios**: Choose the Zhikai 50 (75 W, half-height half-length single-slot) rather than the Zhikai 150
