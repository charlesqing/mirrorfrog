---
id: cambricon-mlu-290
title: Cambricon MLU290 (Siyuan 290)
sidebar_label: MLU290 (Siyuan 290)
description: "Cambricon MLU290 first training chip (2020/2021): extended MLUv02 architecture, 7nm, 512 TOPS INT8, 32GB HBM2, 350W, in OAM form factor."
keywords: [Cambricon MLU290, Cambricon MLU290, training chip, MLUv02 Extended, 512 TOPS, HBM2, Chinese AI training card]
vendor: others
vendor_full: "Cambricon"
series: "MLU (Siyuan)"
release_date: "2020"
status: "Mass production"
---

# Cambricon MLU290 (Siyuan 290)

## Product Overview

The **Cambricon MLU290 (Siyuan 290)** is Cambricon's **first training-class AI chip**, **released in 2020 and in mass production in early 2021**. Built on **TSMC's 7nm process**, it integrates **46 billion transistors** based on the **extended MLUv02 architecture (MLUv02 Extended)**. It marked Cambricon's move from "cloud inference" to full-scenario coverage of "cloud training + inference + hybrid computing", and formed training cluster solutions together with the contemporary **Xuansi 1000 intelligent accelerator** (4 MLU290 chips integrated in 2U).

Compared with the MLU270, the MLU290 achieved **4× higher peak compute, 12× higher memory bandwidth, and 19× higher inter-chip communication bandwidth**. It is the starting point of Cambricon's training product line, later evolving into the **MLU370 (Chiplet training-inference integrated)** and the **MLU590 (third-generation flagship)**.

## Core Specifications

| Parameter | Value |
|------|------|
| **Architecture** | Cambricon extended MLUv02 architecture (MLUv02 Extended) |
| **Process Node** | **TSMC 7nm** |
| **Transistor Count** | 46 billion |
| **INT8 Compute** | **512 TOPS** |
| **INT16 Compute** | 256 TOPS |
| **CINT32 Compute** | 64 TOPS |
| **FP16 / BF16 Compute** | 256 TFLOPS (estimated, from consolidated parameter tables; official release materials do not list floating-point compute) |
| **FP32 Compute** | 32 TFLOPS (estimated, same source) |
| **Memory Capacity** | **32 GB** |
| **Memory Type** | **HBM2** |
| **Memory Bus Width** | 4096 bit |
| **Memory Bandwidth** | **1.23 TB/s (1228 GB/s)** |
| **MLU Cores** | 64 |
| **TDP** | **350 W** |
| **Interconnect** | **MLU-Link™** (600 GB/s aggregated per card, multi-card cluster interconnect) |
| **Interface** | OAM (Open Accelerator Module, 54V); system interface PCIe 4.0 ×16 |
| **Launch** | 2020 (announced) / 2021-01 (mass production) |
| **Mass Production/Availability** | In mass production |

> ⚠️ **Specification notes**: INT8 512 TOPS / INT16 256 TOPS / CINT32 64 TOPS / 32GB HBM2 / 1228 GB/s / 350W are consistent Cambricon official figures (WAIC 2021, OpenI community compute leaderboard). FP16 256 TFLOPS and FP32 32 TFLOPS come from third-party consolidated parameter tables and are not listed in official releases; they are marked as **estimates**.

## Key Features

- **First training chip**: fully supports AI training, inference, or hybrid compute acceleration
- **MLU-Link™ multi-chip interconnect**: first introduction of Cambricon's proprietary inter-chip interconnect, supporting multi-card training clusters
- **High-bandwidth memory**: 32GB HBM2 + 1.23 TB/s bandwidth, suited to medium/large model training
- **OAM form factor**: Open Accelerator Module design for easy integration by OEMs
- **Transformer optimization**: tuned for large model training

## Vendor Information

| Item | Details |
|------|------|
| **Company** | Cambricon Technologies Corporation Limited |
| **Headquarters** | Beijing |
| **Founded** | 2016 |
| **IPO** | STAR Market 688256 |

## Use Cases

- ✅ **Small/medium model training** (vision, NLP, recommendation)
- ✅ **Cloud inference** (high throughput)
- ✅ **Research supercomputing platforms / enterprise AI training clusters**
- ✅ **Mixed-precision training**
- ❌ Ultra-large model training (32GB memory constrained)
- ❌ Strong CUDA ecosystem dependence (requires migration to Cambricon NeuWare)

## Related Cards

- [Cambricon MLU590 (Siyuan 590)](/docs/cards/others/cambricon-mlu-590) — Third-generation flagship training-inference card (about 2× the compute)
- [Cambricon MLU370 (Siyuan 370)](/docs/cards/others/cambricon-mlu-370) — Chiplet training-inference integrated card
- [Cambricon MLU270 (Siyuan 270)](/docs/cards/others/cambricon-mlu-270) — Same-generation inference card
- [Cambricon MLU690](/docs/cards/cambricon/mlu-690) — Next-generation flagship (planned)

## References

- [Cambricon official site · 2021 WAIC MLU290 launch coverage](https://www.cambricon.com/index.php?m=content&c=index&a=show&catid=127&id=41)
- [OpenI community Chinese compute leaderboard · MLU290 specifications](https://openi.pcl.ac.cn/computingpower/domestic)
- [Cambricon AI Wiki · consolidated MLU series parameters](https://aiwiki.ai/wiki/cambricon)
