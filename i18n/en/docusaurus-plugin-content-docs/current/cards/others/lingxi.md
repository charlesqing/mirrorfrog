---
id: lingxi
title: "Lynxi Technology Lingqi KA200 (Brain-Inspired Chip)"
description: "The Lynxi Lingqi KA200 is the world's first mass-produced commercial heterogeneous-fusion brain-inspired chip, built on compute-in-memory + many-core parallel architecture, supporting ANN/SNN hybrids and brain simulation, with 32 TOPS INT8 / 16 TFLOPS FP16, derived from Tsinghua's Tianjic series."
keywords: [Lynxi, Lynxi, Lingqi KA200, brain-inspired, neuromorphic, SNN, compute-in-memory, Tianjic, heterogeneous fusion, brain simulation]
vendor: others
vendor_full: "Beijing Lynxi Technology Co., Ltd."
series: "Lingqi KA200 / Tianjic Series"
release_date: "2021"
status: "Mass production"
---

# Lynxi Technology Lingqi KA200 (Brain-Inspired Chip)

## Product Overview

**Lynxi Technology** is a technology company focused on brain-inspired computing, holding the core technology and patents of Tsinghua University's **"Tianjic"** brain-inspired chip, and is the entity that carried this achievement from fundamental research to industrialization. In August 2019, the "Tianjic" chip appeared on the cover of *Nature* as the world's first heterogeneous-fusion brain-inspired chip, capable of supporting both spiking neural networks (SNN) and artificial neural networks (ANN) simultaneously.

The **Lingqi® KA200(-S)** launched by Lynxi is **the world's first mass-produced commercial heterogeneous-fusion brain-inspired chip**, based on a brand-new **compute-in-memory + many-core parallel + heterogeneous fusion** architecture, efficiently supporting deep learning neural networks, biological neural networks, and large-scale brain simulation. A single chip integrates **250,000 neurons / 25 million synapses**, scalable to **2 million neurons / 2 billion synapses**, supports mixed precision (32 TOPS@INT8 / 16 TFLOPS@FP16), and efficiently supports novel brain-inspired algorithms such as convolutional spiking neural networks (CSNN).

Compared with typical von Neumann architecture chips, the KA200 is highly optimized for the connection sparsity and event sparsity of neural networks, improving brain simulation execution efficiency by more than 100x. Based on the KA200, Lynxi has launched a brain-inspired module (HM100), an accelerator card (HP300), an edge product (HS140), and brain-inspired servers, deployed in brain science, internet, smart power, transportation, finance, and other scenarios; in 2025 it also deployed China's first brain-inspired intelligent computing cluster, supporting millisecond-level large-model inference.

## Core Specifications

| Parameter | Value |
|-----------|-------|
| **Architecture** | Compute-in-memory + many-core parallel + heterogeneous fusion (supports ANN/SNN hybrids and brain simulation; brain-inspired/neuromorphic) |
| **Process Node** | Not disclosed (KA200; the early "Tianjic" chip was 28nm, KA200 process not disclosed) |
| **FP16 / BF16 Compute** | **16 TFLOPS** (FP16) |
| **INT8 Compute** | **32 TOPS** (INT8, KA200) |
| **FP32 Compute** | Not disclosed (KA200; the brain-inspired accelerator module supports FP16/INT8/Binary spike) |
| **Memory Capacity** | Not disclosed (the brain-inspired accelerator module carries LPDDR4) |
| **Memory Type** | LPDDR4 (brain-inspired accelerator module/board) |
| **Memory Bandwidth** | Not disclosed |
| **TDP** | Not disclosed (Tianjic V3 specification requires energy efficiency ≥1 TOPS/W) |
| **Interconnect** | Multi-chip communication (supports high-speed inter-chip serial communication; specific bandwidth not disclosed) |
| **Interface** | PCIe card (brain-inspired computing accelerator card HP300) / module (HM100) |
| **Launch** | 2021 (KA200 mass production and commercial availability; specific month not disclosed) |
| **Mass Production/Availability** | In mass production (the KA200 is the world's first mass-produced commercial heterogeneous-fusion brain-inspired chip) |

> **Note**: The process node and FP32 bare-chip figures were not officially broken out and are marked "Not disclosed". KA200 data comes from Lynxi's official news and product pages; the "Tianjic III" is an iterative chip jointly developed by Tsinghua/Lynxi (200,000 neurons / 100 million synapses, 128 TOPS in Binary spike mode, 580 TOPS for the brain-inspired accelerator module), belonging to the same technical lineage and provided for reference.

## Key Features

- **Heterogeneous-fusion brain-inspired architecture**: supports ANN (deep learning), SNN (spiking neural networks), and hybrids of both — the world's first mass-produced commercial fusion brain-inspired chip route.
- **Compute-in-memory + many-core parallelism**: optimized for connection sparsity/event sparsity, improving brain simulation efficiency by 100x over von Neumann architectures.
- **Large-scale brain simulation capability**: 250,000 neurons / 25 million synapses per chip, scalable to 2 million neurons / 2 billion synapses.
- **Mixed precision**: supports INT8 / FP16 / Binary spike and other precisions, covering both traditional AI and brain-inspired algorithms.
- **Complete product matrix**: full coverage from modules and accelerator cards to edge products and brain-inspired servers/intelligent computing clusters.

## Vendor Information

| Parameter | Value |
|-----------|-------|
| **Company** | Beijing Lynxi Technology Co., Ltd. (Lynxi) |
| **Headquarters** | Beijing, China (subsidiaries/offices in Wuhan, Wuxi, Shenzhen, Shanghai, Hangzhou, etc.) |
| **Founded** | 2018 (derived from Tsinghua University's Center for Brain Inspired Computing; Chairman/CEO Zhu Yailong, Professor Shi Luping serves as a director) |

## Use Cases

- ✅ **Brain science and brain-inspired algorithm research**: large-scale brain simulation, SNN research platform
- ✅ **Traditional AI inference**: image/video structuring, NLP, speech, etc. (ANN support)
- ✅ **High-speed/dynamic/multimodal edge intelligence**: robots, drones, IoT
- ✅ **Brain-inspired intelligent computing clusters**: millisecond-level large-model inference (deployed in 2025)
- ❌ **General CUDA ecosystem training card** (not a GPU; deployment requires the Lynxi software stack)

## Related Cards

- [TsingMicro TX81](/docs/cards/others/tsingmicro-tx81) — Domestic reconfigurable/novel architecture comparison
- [Vastai VA10](/docs/cards/others/vastai-va10) — Domestic cloud inference accelerator card
- [Lightmatter Envise](/docs/cards/others/lightmatter-envise) — International compute-in-memory/novel architecture route comparison

## References

- [Lynxi Technology official website (product center)](https://www.lynxi.com/)
- [Lynxi Technology: introduction to the Tianjic brain-inspired chip and the KA200 brain-inspired chip](https://www.lynxi.com/qiyezixun/3.html)
- [Brain-inspired chips and systems (Tianjic III, Beijing Municipal Science and Technology Achievement Information System)](https://www.ncsti.gov.cn/kjdt/ztbd/gjjcyfw/rengongzhineng/rengongzhinengkjcgzs/202203/t20220315_62630.html)
