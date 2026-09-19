---
id: enflame-t20
title: Enflame T20 (2021)
sidebar_label: Enflame T20
description: "Enflame T20 detailed specs: DTU 2.0 chip, 2.5D advanced packaging, 160 TFLOPS TF32, 320 TOPS INT8, 64GB HBM2E, 1.8 TB/s, GCU-LARE interconnect, released in 2021"
keywords: [Enflame T20, Enflame T20, DTU 2.0, Enflame, domestic AI training, TF32 160TFLOPS, 64GB HBM2E, GCU-LARE, 2021]
---

# Enflame T20 (2021)

## Product Overview

The **Enflame T20** is the **second-generation AI training accelerator card** released by Enflame Technology on **July 7, 2021** at the World Artificial Intelligence Conference (WAIC). Based on the in-house **DTU 2.0 chip**, it adopts **2.5D advanced packaging** (57.5mm × 57.5mm, integrating 9 chips), delivers **160 TFLOPS of TF32 compute** (the first domestic support for TF32) and **320 TOPS of INT8 compute**, and is equipped with **64GB HBM2E memory** (1.8 TB/s bandwidth). Its GCU-LARE interconnect technology supports scaling clusters to 8192 cards (1.3 EFLOPS).

Enflame is one of the "GPU Four Little Dragons", focusing on domestic cloud AI training and inference.

**Product Evolution**:
- **DTU 1.0 / Enflame T10** (2019): first generation, 12nm, FP32 20 TFLOPS
- **DTU 2.0 / Enflame T20/T21** (2021): **2.5D packaging, 160 TFLOPS TF32** — **this page**
- **DTU 3.0 / Enflame T30** (planned): next generation

## Core Specifications

### DTU 2.0 Chip

| Parameter | Value |
|------|------|
| **Architecture** | In-house **GCU-CARA** full-domain compute architecture |
| **Process** | Not disclosed (industry estimate: 12nm) |
| **Packaging** | **2.5D advanced packaging**, integrating 9 chips |
| **Package Size** | **57.5mm × 57.5mm** (China's largest compute chip at launch) |
| **FP32** | **40 TFLOPS** |
| **TF32** | **160 TFLOPS** (first domestic support) |
| **FP16 / BF16** | Supported (specific figures not disclosed) |
| **INT8** | **320 TOPS** |
| **Memory** | **64GB HBM2E** (Samsung; first domestic card to support it) |
| **Memory Bandwidth** | **1.8 TB/s** (chip level) |
| **Interconnect** | **GCU-LARE®** (Enflame intelligent interconnect), **300 GB/s** bidirectional |

### Enflame T20 Accelerator Card

| Parameter | Value |
|------|------|
| **Core Chip** | DTU 2.0 |
| **Positioning** | Data center AI training accelerator card |
| **Form Factor** | PCIe training accelerator card |
| **Multi-Card Interconnect** | In-server 4-card full interconnect / enhanced 8-card full interconnect |
| **Cluster** | Supports scaling from single-server multi-card to thousand-card level |
| **Software Stack** | **TopsRider 2.0** |
| **Development Interfaces** | C++ / Python, multi-level open APIs |
| **Release** | July 7, 2021 (WAIC 2021) |
| **TDP** | Not disclosed |

## GCU-LARE Interconnect and Clusters

| Specification | Value |
|------|------|
| **Interconnect Technology** | GCU-LARE® full-domain interconnect |
| **Inter-Chip Bandwidth** | 300 GB/s bidirectional |
| **In-Server Interconnect** | 4-card full interconnect → enhanced 8-card full interconnect |
| **Cluster Solution** | Enflame intelligent computing cluster CloudBlazer Matrix 2.0 |
| **Maximum Cluster** | **8192** Enflame training cards |
| **Total Cluster Compute** | Up to **1.3 EFLOPS** (FP32) |
| **Cooling** | Liquid cooling, PUE < 1.5 |
| **Rack Solution** | High-density deployment in a single rack |

> **Record at launch**: Enflame's COO stated: "No one in the world has yet achieved over 1E of single-precision compute using 8,000 cards."

## TopsRider 2.0 Software Stack

| Layer | Tool | Description |
|------|------|------|
| **Platform** | **TopsRider 2.0** | Enflame's unified programming platform |
| **AI Frameworks** | PyTorch | Native support |
| | TensorFlow | Supported |
| | PaddlePaddle | Baidu PaddlePaddle |
| **Development Interfaces** | C++ / Python | Multi-level APIs |
| **Operator Library** | In-house operator library | Covers mainstream models |
| **Compiler** | GCU-CARA toolchain | Automated optimization |
| **Performance** | TF32 precision on average **2.5x that of competitors' sub-flagship cards** | On par with competitors' flagships across many model types |

## Vendor Information

| Parameter | Details |
|------|------|
| **Company** | Shanghai Enflame Technology Co., Ltd. |
| **Founded** | March 2018 |
| **Founders** | Zhao Lidong (former AMD China executive), Zhang Yalin (COO) |
| **T20 Launch** | July 7, 2021 (WAIC 2021) |
| **Funding** | Several billion RMB in total (Tencent, Sequoia, etc.) |
| **Positioning** | Domestic cloud AI training/inference chips |
| **Ecosystem** | One of the "GPU Four Little Dragons" (MetaX, Biren, Enflame, Moore Threads) |
| **Partnerships** | Collaborates with partners to build the Enflame intelligent computing cluster |

## Use Cases

- ✅ **Domestic large-model AI training** (8192-card cluster, 1.3 EFLOPS)
- ✅ **Data center training** (efficient training at 160 TFLOPS TF32)
- ✅ **Thousand-card cluster deployment** (mature GCU-LARE interconnect solution)
- ✅ **Broad model coverage** (multi-precision and dynamic feature support)
- ✅ **Mandatory domestic compute** (independent and controllable)
- ❌ **Single-card inference** (not the primary positioning; the Enflame i20 inference card is a better fit)
- ❌ **CUDA ecosystem** (in-house TopsRider; migration requires adaptation)
- ❌ **FP8 training** (not supported; watch the T30)
- ❌ **Undisclosed process node** (industry estimate: 12nm, behind contemporaneous 7nm competitors)

## Comparison with Contemporary Domestic AI Training Cards (2021)

| Metric | Enflame T20 | Cambricon MLU 370 | Huawei Ascend 910 | Difference |
|------|----------|-----------------|-----------------|------|
| **Release** | 2021-07 | 2021-Q4 | 2019 | T20 launched mid-year |
| **Packaging** | 2.5D advanced packaging | Standard packaging | Standard packaging | T20 is more advanced |
| **TF32** | **160 TFLOPS** | Not supported | Not supported | Unique to T20 |
| **FP32** | 40 TFLOPS | 24 TFLOPS | 256 TFLOPS | Ascend 910 leads |
| **INT8** | 320 TOPS | 96 TOPS | 512 TOPS | Ascend 910 leads |
| **Memory** | **64GB HBM2E** | 48GB HBM2 | 32GB HBM2 | **T20 is the largest** |
| **Bandwidth** | **1.8 TB/s** | 614 GB/s | 1.2 TB/s | **T20 is the largest** |
| **Interconnect** | 300 GB/s | 200 GB/s | HCCS | T20 leads |
| **Cluster** | **8192 cards**, 1.3 EFLOPS | Thousand cards | 4096 cards | **T20 is the largest** |

> **2021's dominant domestic AI training card**: the T20 has the largest memory (64GB), the strongest interconnect (300 GB/s), and the largest cluster (8192 cards, 1.3 EFLOPS). However, its FP32 compute (40 TFLOPS) and INT8 (320 TOPS) are lower than the Huawei Ascend 910's.

## Key Timeline

| Date | Event |
|------|------|
| 2018-03 | Enflame Technology founded |
| 2019-12 | DTU 1.0 / Enflame T10 released (12nm) |
| **2021-07-07** | **DTU 2.0 / Enflame T20 released** (WAIC) |
| 2021-2023 | T20/T21 deployed at scale; Enflame intelligent computing cluster commercialized |
| Planned | DTU 3.0 / Enflame T30 |

## Related Cards

- [Kunlunxin P800](/docs/cards/others/kunlun-p800) — Strongest domestic AI compute (345 TFLOPS)
- [MetaX C600](/docs/cards/others/metax-c600) — Fully domestic GPU (1000 TFLOPS FP8)
- [Hygon DCU K100](/docs/cards/others/hygon-dcu-k100) — x86-compatible GPGPU
- [Cambricon MLU 370](/docs/cards/others/cambricon-mlu-370) — Contemporary domestic AI training
- [Cambricon MLU 590](/docs/cards/others/cambricon-mlu) — Next-generation domestic AI
- [Huawei Ascend 910B](/docs/cards/huawei/ascend-910b) — Mainstream domestic AI training card
- [NVIDIA A100](/docs/cards/nvidia/a100) — International training benchmark
- [NVIDIA H100](/docs/cards/nvidia/h100) — Next-generation international benchmark
