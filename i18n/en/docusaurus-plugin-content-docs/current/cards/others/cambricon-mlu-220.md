---
id: cambricon-mlu-220
title: Cambricon MLU220 (Siyuan 220)
sidebar_label: MLU220 (Siyuan 220)
description: "Cambricon MLU220 edge/in-vehicle AI inference SoC (2019): MLUv02 architecture, 8 TOPS INT8, M.2 form factor, power of just 8.25W."
keywords: [Cambricon MLU220, Cambricon MLU220, edge inference, in-vehicle, 8 TOPS, M.2, low power, Chinese AI chip]
vendor: others
vendor_full: "Cambricon"
series: "MLU (Siyuan)"
release_date: "2019"
status: "Mass production"
---

# Cambricon MLU220 (Siyuan 220)

## Product Overview

The **Cambricon MLU220 (Siyuan 220)** is an AI inference SoC from Cambricon for **edge and terminal** devices, **officially released in November 2019 (the 21st China Hi-Tech Fair)**, built on the **MLUv02 architecture and TSMC 16nm process**. Shaped as a USB-drive-sized **M.2 accelerator card (MLU220-M.2)**, it integrates **8 TOPS (INT8)** of compute with power of just **8.25W**, and is Cambricon's representative **edge** product in its "cloud-edge-terminal" layout, filling the gap in edge acceleration solutions at the time.

The MLU220 marked Cambricon's full coverage of cloud, edge, and terminal, mainly targeting edge computing scenarios such as **smart grid, smart manufacturing, smart rail transit, smart finance, drones, and autonomous driving in-vehicle computing**, enabling AI for terminal devices quickly through a standard M.2 interface.

## Core Specifications

| Parameter | Value |
|------|------|
| **Architecture** | Cambricon MLUv02 |
| **Process Node** | TSMC 16nm |
| **INT8 Compute** | **8 TOPS** |
| **INT4 Compute** | 16 TOPS |
| **FP16 / BF16 Compute** | Not disclosed (configurable fixed-point computation supported) |
| **FP32 Compute** | Not disclosed |
| **Memory Capacity** | ~4 GB (onboard LPDDR4x, estimated from 4096 MiB reported by cnmon) |
| **Memory Type** | LPDDR4x (64 bit) |
| **Memory Bandwidth** | Not disclosed |
| **TDP** | **8.25 W** (passive cooling) |
| **Interconnect** | M.2 (PCIe 3.0 ×2) |
| **Interface** | **M.2 2280 (B+M key)** |
| **Codec** | H.264 / HEVC(H.265) / VP8 / VP9; JPEG up to 8192×8192 |
| **Launch** | 2019-11 |
| **Mass Production/Availability** | In mass production |

> ⚠️ **Specification notes**: INT8 8 TOPS / INT4 16 TOPS / 8.25W / M.2 2280 are consistent figures from Cambricon's official website and press releases. The onboard memory capacity was not officially given as a number; about 4GB LPDDR4x is estimated from the 4096 MiB shown by the driver tool cnmon and is marked as an **estimate**. FP16/FP32 peaks are not disclosed.

## Key Features

- **Ultra-low power**: 8.25W with passive cooling, suited to fanless/harsh environment deployments
- **Ultra-compact M.2 form factor**: finger-sized, quickly integrated into existing systems via a standard interface
- **Unified edge-cloud software**: supports Cambricon NeuWare, compatible with TensorFlow, Caffe, MXNet, and PyTorch
- **Configurable fixed-point computation**: 16/8/4-bit configurable for flexible, excellent inference performance
- **Rich I/O**: integrated hardware video/image codec units

## Vendor Information

| Item | Details |
|------|------|
| **Company** | Cambricon Technologies Corporation Limited |
| **Headquarters** | Beijing |
| **Founded** | 2016 |
| **IPO** | STAR Market 688256 |

## Use Cases

- ✅ **Edge AI inference** (smart grid, smart manufacturing, smart rail transit, smart finance)
- ✅ **Drone / in-vehicle edge computing**
- ✅ **AI enablement of low-power terminal devices**
- ✅ **Real-time video/image analytics**
- ❌ Large-scale model training (positioned as an edge inference SoC)
- ❌ High-compute data center training (compute and power constrained)

## Related Cards

- [Cambricon MLU270 (Siyuan 270)](/docs/cards/others/cambricon-mlu-270) — Cloud/edge inference card (same generation)
- [Cambricon MLU290 (Siyuan 290)](/docs/cards/others/cambricon-mlu-290) — Same-generation training card
- [Cambricon MLU590 (Siyuan 590)](/docs/cards/others/cambricon-mlu-590) — Third-generation flagship training-inference card

## References

- [Cambricon official site · MLU220 edge AI chip launch news](https://www.cambricon.com/index.php?a=show&c=index&catid=127&id=11&m=content)
- [Cambricon official site · MLU220-M.2 edge intelligent accelerator card product specifications](https://www.cambricon.com/index.php?a=lists&catid=57)
- [Cambricon forum · MLU220 quick start guide (includes cnmon measured power)](https://forum.cambricon.com/ueditor/php/upload/file/20221121/1669005207505867.pdf)
