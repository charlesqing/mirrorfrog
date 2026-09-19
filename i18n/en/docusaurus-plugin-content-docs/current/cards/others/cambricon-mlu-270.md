---
id: cambricon-mlu-270
title: Cambricon MLU270 (Siyuan 270)
sidebar_label: MLU270 (Siyuan 270)
description: "Cambricon MLU270 cloud/edge AI inference accelerator card (2019): MLUv02 architecture, 128 TOPS INT8, 16GB DDR4, 70-150W, with hardware video codec support."
keywords: [Cambricon MLU270, Cambricon MLU270, MLUv02, 128 TOPS INT8, edge inference, cloud inference, Chinese AI chip]
vendor: others
vendor_full: "Cambricon"
series: "MLU (Siyuan)"
release_date: "2019"
status: "Mass production"
---

# Cambricon MLU270 (Siyuan 270)

## Product Overview

The **Cambricon MLU270 (Siyuan 270)** is Cambricon's second-generation cloud AI chip, **officially released in 2019**, built on the **MLUv02 architecture** and positioned for **high energy-efficiency AI inference acceleration in the cloud and at the edge**. Compared with the first-generation MLU100, theoretical peak performance on non-sparse models improved **4×** to **128 TOPS (INT8)**, while remaining compatible with INT4 (256 TOPS) and INT16 (64 TOPS), plus FP16/FP32 mixed precision.

The MLU270 is a key part of Cambricon's "cloud-edge-terminal" product lineup: cloud inference is delivered in accelerator card form factors such as the **MLU270-S4 (70W)** and **MLU270-F4 (150W)**, with ample hardware video/image codec units for vision scenarios, suited to data center video analytics, smart cities, and other inference workloads. It forms a complete generational sequence with the subsequent **MLU290 (training)**, **MLU370 (Chiplet training-inference integrated)**, and **MLU590 (third-generation flagship)**.

## Core Specifications

| Parameter | Value |
|------|------|
| **Architecture** | Cambricon MLUv02 |
| **Process Node** | TSMC 16nm |
| **INT8 Compute** | **128 TOPS** |
| **INT4 Compute** | 256 TOPS |
| **INT16 Compute** | 64 TOPS |
| **FP16 / BF16 Compute** | Not disclosed (mixed precision supported; peak not published) |
| **FP32 Compute** | Not disclosed |
| **Memory Capacity** | **16 GB** |
| **Memory Type** | **DDR4 (ECC)** |
| **Memory Bus Width** | 256 bit |
| **Memory Bandwidth** | **102 GB/s** |
| **TDP** | **70 W (MLU270-S4) / 150 W (MLU270-F4)** |
| **Interconnect** | PCIe 3.0 ×16 |
| **Interface** | PCIe ×16 (S4 half-height half-length / F4 full-height full-length dual-slot) |
| **Video Codec** | Hardware codec units (video/image) |
| **Launch** | 2019 |
| **Mass Production/Availability** | In mass production |

> ⚠️ **Specification notes**: The memory type is **DDR4 (ECC)**; some early sources loosely recorded it as "LPDDR/onboard memory". Follow the Cambricon official product pages (MLU270-S4/F4): 16GB DDR4 ECC / 102 GB/s. FP16/FP32 peak compute is not published on the official site; only mixed-precision support is confirmed.

## Key Features

- **MLUv02 architecture**: based on a network-on-chip (NoC) that guarantees parallel efficiency across the chip's 16 tensor cores; hardware on-chip data compression improves effective cache capacity and bandwidth
- **High energy-efficiency inference**: INT8 inference performance improved 4× over the first generation, offering roughly 40× the energy efficiency of a CPU
- **Rich precision support**: INT4/INT8/INT16 + FP16/FP32 mixed precision
- **Video/vision optimization**: integrated ample hardware video/image codec units, suited to video analytics and smart cities
- **Unified edge-cloud software**: supports Cambricon NeuWare / MagicMind, compatible with mainstream frameworks such as TensorFlow, PyTorch, Caffe, and MXNet

## Vendor Information

| Item | Details |
|------|------|
| **Company** | Cambricon Technologies Corporation Limited |
| **Headquarters** | Beijing |
| **Founded** | 2016 |
| **IPO** | STAR Market 688256 |

## Use Cases

- ✅ **Cloud AI inference** (vision, speech, NLP, recommendation)
- ✅ **Video analytics / smart cities** (hardware codec units)
- ✅ **Edge/non-data-center inference** (F4 active cooling, deployable in workstations)
- ✅ **Traditional machine learning acceleration**
- ❌ Large-scale model training (positioned for inference; compute and memory constrained)
- ❌ Strong CUDA ecosystem dependence (requires migration to Cambricon NeuWare)

## Related Cards

- [Cambricon MLU590 (Siyuan 590)](/docs/cards/others/cambricon-mlu-590) — Third-generation flagship training-inference card (generational successor)
- [Cambricon MLU370 (Siyuan 370)](/docs/cards/others/cambricon-mlu-370) — Chiplet training-inference integrated card
- [Cambricon MLU290 (Siyuan 290)](/docs/cards/others/cambricon-mlu-290) — Same-generation training card
- [Cambricon MLU220 (Siyuan 220)](/docs/cards/others/cambricon-mlu-220) — Edge/in-vehicle inference SoC
- [Cambricon MLU690](/docs/cards/cambricon/mlu-690) — Next-generation flagship (planned)

## References

- [Cambricon official site · MLU270 series](https://www.cambricon.com/index.php?a=lists&c=index&catid=15&m=content)
- [Cambricon official site · MLU270-F4 intelligent accelerator card product specifications](https://www.cambricon.com/index.php?a=lists&c=index&catid=37&m=content)
- [Cambricon AI Wiki · consolidated MLU series parameters](https://aiwiki.ai/wiki/cambricon)
