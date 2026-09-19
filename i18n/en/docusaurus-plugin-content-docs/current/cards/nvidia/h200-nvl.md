---
id: h200-nvl
title: NVIDIA H200 NVL
sidebar_label: H200 NVL
description: "NVIDIA H200 NVL: Hopper architecture in PCIe form, 141GB HBM3e, 4.8 TB/s bandwidth, FP8 3,341 TFLOPS, 600W TDP — the dual-slot PCIe version of the H200."
keywords: [NVIDIA H200 NVL, H200 PCIe, Hopper, HBM3e, 141GB, LLM inference]
---

# NVIDIA H200 NVL

## Product Overview

The **NVIDIA H200 NVL** is the **PCIe form factor version of the H200**, using a dual-slot passive cooling design with the same Hopper GH100 die and **141GB HBM3e** memory. Unlike the H200 SXM (700W, HGX board), the H200 NVL ships as a PCIe add-in card with TDP configurable up to **600W**, and delivers 900 GB/s interconnect via 2-4-way NVLink Bridges.

**Strategic position**: The H200 NVL targets single-card or small-scale (2-4 card) H200 deployments in standard PCIe servers, combining large memory (141GB) with air-cooling compatibility — the H200 SXM alternative for general-purpose servers.

## Core Specifications

| Parameter | Value |
|------|------|
| **Architecture** | NVIDIA Hopper (GH100) |
| **Process** | TSMC 4nm |
| **FP8 Compute** | 3,341 TFLOPS |
| **FP16 Compute** | 1,671 TFLOPS |
| **FP32** | 60 TFLOPS |
| **INT8 Compute** | 3,341 TOPS |
| **Memory** | **141 GB HBM3e** |
| **Memory Type** | HBM3e |
| **Memory Bandwidth** | 4.8 TB/s |
| **Interconnect** | 2-4-way NVLink Bridge 900 GB/s (per GPU) |
| **PCIe** | Gen 5 x16 |
| **TDP** | Up to 600 W (configurable) |
| **Form Factor** | Dual-slot PCIe passive cooling |
| **Release** | 2024 |
| **Price** | approx. $38,000 - $40,000 (market average) |

## Comparison with H200 SXM

| Metric | H200 NVL | H200 SXM | Difference |
|------|----------|----------|------|
| Memory | 141GB HBM3e | 141GB HBM3e | Identical |
| Bandwidth | 4.8 TB/s | 4.8 TB/s | Identical |
| FP8 | 3,341 TFLOPS | 3,958 TFLOPS | NVL 16% lower |
| TDP | 600 W | 700 W | NVL 100W lower |
| Form factor | PCIe card | SXM5 module | Different |
| Multi-card scaling | 2-4-way Bridge | Full NVSwitch 8-card | NVL smaller scale |

## Key Features

- **141GB HBM3e large memory**: suited to long-context LLM inference and large-batch processing
- **Air-cooling compatible**: deploys in standard PCIe servers
- **NVLink Bridge**: 900 GB/s interconnect maintained in 2-4 card configurations

## Vendor Information

| Parameter | Value |
|------|------|
| **Company** | NVIDIA Corporation |
| **Website** | https://www.nvidia.com |
| **Release** | 2024 |
| **Architecture** | Hopper |

## Use Cases

- ✅ **LLM inference** (single card / small clusters)
- ✅ **Long-context processing**
- ✅ **AI acceleration in standard PCIe servers**
- ⚠️ **Hyperscale distributed training** (no match for SXM + NVSwitch)

## Related Comparisons

- [NVIDIA H200](/docs/cards/nvidia/h200) - SXM form factor flagship
- [NVIDIA H100](/docs/cards/nvidia/h100) - Previous-generation Hopper
- [NVIDIA H100 NVL](/docs/cards/nvidia/h100-nvl) - PCIe NVL version of the H100

## External Links

- [NVIDIA H200 Tensor Core GPU product page](https://www.nvidia.com/en-us/data-center/h200/)
- [NVIDIA H200 datasheet](https://www.nvidia.com/content/dam/en-zz/Solutions/data-center/hpc/h200-datasheet.pdf)
