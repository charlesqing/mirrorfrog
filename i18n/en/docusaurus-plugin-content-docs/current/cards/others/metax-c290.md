---
id: metax-c290
title: MetaX Xiyun C290
sidebar_label: Xiyun C290
description: "The MetaX Xiyun C290 training/inference GPU (XCORE 1.0 architecture, OAM1.5 form factor) is a 7nm-class GPGPU whose specific compute figures are not officially disclosed, as an early model of the Xiyun C series."
keywords: [MetaX Xiyun C290, MetaX C290, XCORE 1.0, training GPU, OAM, domestic GPU, specs not disclosed]
vendor: others
vendor_full: "MetaX"
series: "Xiyun (C Series)"
release_date: "2022"
status: "Mass production"
---

# MetaX Xiyun C290

## Product Overview

The **MetaX Xiyun C290** is an early model of MetaX's **Xiyun C series** general-purpose compute GPUs, built on MetaX's proprietary **XCORE 1.0 architecture and instruction set** and delivered in the **OAM 1.5** accelerator module form factor, positioned for **AI training and inference**. The Xiyun C series is MetaX's flagship product line (97%+ of revenue); based on the self-developed GPGPU architecture and paired with the **MXMACA® software stack**, which is fully compatible with the CUDA ecosystem, it is widely used in intelligent computing, general-purpose computing, and data analytics.

Compared with the later mass-produced **Xiyun C500 (2023) / C550 / C600 (2025)**, the C290 is an early product of the same-generation XCORE 1.0 family with very little public specification material. Its compute range can be referenced against the XCORE 1.0 family (e.g., the C500: 15–40 TFLOPS FP32, 480 TOPS INT8, 64GB HBM2e), but **the C290's official model-specific parameters are not public**; the table below is marked "not disclosed/estimated" to avoid fabrication.

## Core Specifications

| Parameter | Value |
|-----------|-------|
| **Architecture** | MetaX proprietary XCORE 1.0 architecture and instruction set |
| **Process Node** | 7nm-class (estimated; same-generation XCORE 1.0 products are 7nm, officially not broken out for the C290) |
| **FP32 Compute** | Not disclosed (estimated; belongs to the XCORE 1.0 family, range likely near C500 level) |
| **FP16 / BF16 Compute** | Not disclosed (estimated; same as above) |
| **INT8 Compute** | Not disclosed (estimated; same as above) |
| **Memory Capacity** | Not disclosed (same-generation XCORE 1.0 products mostly use 64GB HBM2e; refer to official MetaX data for the C290) |
| **Memory Type** | Not disclosed (estimated HBM2e) |
| **Memory Bandwidth** | Not disclosed |
| **TDP** | Not disclosed |
| **Interconnect** | MetaXLink inter-card interconnect (estimated, consistent with the Xiyun C series) |
| **Interface** | **OAM 1.5** (open accelerator module form factor) |
| **Launch** | 2022 (early model of the Xiyun C series) |
| **Mass Production/Availability** | In mass production (specific scale not disclosed) |

> ⚠️ **Specification Notes**: The C290 is only listed as a supported model in MetaX's developer documentation (Xiyun series user guide / out-of-band management manual); MetaX has not separately published a full parameter table for it. The "estimated" items in the table are directional references based on the parameter ranges of **same-generation XCORE 1.0 architecture products (e.g., the C500)** and are **not measured/official C290 data**; refer to official MetaX materials.

## Key Features

- **Proprietary XCORE 1.0 architecture**: scalar + vector + tensor compute units, mixed multi-precision compute
- **OAM 1.5 form factor**: open accelerator module for easy high-density server integration
- **MXMACA software stack**: API-level compatibility with the CUDA ecosystem, supporting PyTorch/TensorFlow/PaddlePaddle
- **MetaXLink interconnect**: high-speed inter-card interconnect supporting multi-card training clusters (specific port count not disclosed)

## Vendor Information

| Parameter | Value |
|-----------|-------|
| **Company** | MetaX Integrated Circuits (Shanghai) Co., Ltd. |
| **Headquarters** | Shanghai |
| **Founded** | 2020-09 |
| **Listing** | STAR Market 688802 |

## Use Cases

- ✅ **AI training and inference** (general Xiyun C series scenarios)
- ✅ **Intelligent computing centers / general-purpose computing**
- ✅ **Data analytics**
- ❌ Scarce public specifications; selection requires confirmation from MetaX
- ❌ Graphics rendering (the Xiyun C series is a compute GPU, not a full-function GPU)

## Related Cards

- [MetaX Xiyun C500](/docs/cards/others/metax-c500) — First unified training-and-inference GPU (XCORE 1.0, mass-production workhorse)
- [MetaX Xiyun C600](/docs/cards/others/metax-c600) — New-generation flagship (XCORE 1.5, HBM3e)
- [MetaX Xiyun C700](/docs/cards/others/metax-c700) — Next-generation training flagship (in development)
- [Biren BR100](/docs/cards/others/biren-br104) — Domestic general-purpose GPU competitor

## References

- [MetaX developer documentation · Xiyun series general-purpose compute GPU user guide (lists the C290 OAM1.5)](https://developer.metax-tech.com/api/client/document/preview/376/C500_UserGuide_CN.html)
- [MetaX developer documentation · Xiyun series out-of-band management manual (model list includes the C290)](https://developer.metax-tech.com/api/client/document/preview/374/C500_OutofBandManagementManual_CN.html)
- [Baidu Baike · Xiyun C series GPU (XCORE 1.0 family parameter reference)](https://baike.baidu.com/item/%E6%9B%A6%E4%BA%91C%E7%B3%BB%E5%88%97GPU/67620459)
