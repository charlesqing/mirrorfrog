---
id: flex-series
title: Intel Data Center GPU Flex Series
sidebar_label: Intel Flex Series
description: "Intel Flex 140/170 detailed specs: Xe-HPG architecture, 12-16GB GDDR6, 224 TOPS INT8, 75-150W TDP, cloud gaming and transcoding."
keywords: [Intel Flex 140, Flex 170, Xe-HPG, cloud gaming, video transcoding, AV1]
---
 
# Intel Data Center GPU Flex Series (Arctic Sound-M)
 
## Overview
 
Intel Flex Series (codenamed **Arctic Sound-M**), based on the **Xe-HPG architecture**, targets cloud gaming, media transcoding, and lightweight AI inference workloads. Flex 170 and Flex 140 are two models differentiated by core count and power consumption. **AV1 hardware encode/decode** is the standout feature.
 
## Core Specifications
 
| Item | Flex 140 | Flex 170 |
|------|----------|----------|
| **Architecture** | Xe-HPG | Xe-HPG |
| **Process** | TSMC 6nm | TSMC 6nm |
| **Memory** | 12 GB GDDR6 | 16 GB GDDR6 |
| **Bandwidth** | 336 GB/s | 448 GB/s |
| **Xe Cores** | 16 | 32 |
| **FP32** | 3.5 TFLOPS | 7.0 TFLOPS |
| **INT8 (XMX)** | 112 TOPS | 224 TOPS |
| **TDP** | 75 W | 150 W |
| **PCIe** | Gen 4 x8 | Gen 4 x16 |
| **Media Engines** | 4x Xe Media | 4x Xe Media |
| **AV1 Encode** | Supported | Supported |
 
## Vendor Information
 
| Item | Details |
|------|------|
| **Manufacturer** | Intel Corporation |
| **Website** | https://www.intel.com |
| **Product Page** | https://www.intel.com/content/www/us/en/products/details/discrete-gpus/data-center-gpu/flex-series.html |
| **Driver** | https://www.intel.com/content/www/us/en/download/1934878.html |
 
## Key Features
 
- **Abundant 4x media engines**: HEVC, AVC, AV1 encode/decode
- **Low power**: 75W model supports passive cooling
- **OpenVINO inference optimization**
 
## Use Cases
 
- Cloud gaming
- Video transcoding (AV1)
- Lightweight AI inference
- Media processing pipelines
 
## Architecture Family
 
- [GPU Architectures](/docs/architectures/arch-gpu) - General AI acceleration, Xe-HPG microarchitecture
 
## Related Comparisons
 
- [Intel Max Series (Ponte Vecchio)](/docs/cards/intel/max-series) - HBM2e 128GB data center GPU
- [NVIDIA L4](/docs/cards/nvidia/l4) - Comparable inference GPU 24GB GDDR6
- [NVIDIA L40S](/docs/cards/nvidia/l40s) - Comparable inference GPU 48GB GDDR6
- [NVIDIA T4](/docs/cards/nvidia/t4) - Comparable entry-level inference GPU
- [Intel Gaudi 2](/docs/cards/intel/gaudi-2) - Intel data center NPU
- [Full Comparison Table](/docs/comparison)
