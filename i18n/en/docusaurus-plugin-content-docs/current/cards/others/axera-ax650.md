---
id: axera-ax650
title: "Axera AX650 (AX650N)"
description: "Axera AX650N: a third-generation edge vision SoC released in 2023 with 18 TOPS INT8 (72 TOPS INT4), 8K video, and native Transformer support, for smart cameras and edge boxes."
keywords: [Axera, AX650, AX650N, AXERA, edge AI, 18 TOPS, INT8, 8K, Transformer]
vendor: others
vendor_full: "AXERA (Axera Semiconductor)"
series: "AX650 Series"
release_date: "2023"
status: "Mass production"
---

# Axera AX650 (AX650N)

## Product Overview

**AX650N** (commonly known as AX650) is the **third-generation high-compute, high-energy-efficiency smart vision SoC** released by Axera (AXERA) on **March 6, 2023**, the flagship edge chip following the AX620 and AX630 series. It integrates an octa-core ARM Cortex-A55 @1.7GHz, a proprietary high-performance **mixed-precision NPU**, AI-ISP, and a VPU, making it **one of the best deployment platforms for Transformer models** at the edge.

The AX650N provides the latest official compute of **18 TOPS@INT8 / 72 TOPS@INT4** (early release information stated 10.8 TOPS@INT8 / 43.2 TOPS@INT4), supports INT4/INT8/INT16/FP16/FP32 mixed precision, natively supports Transformer networks such as ViT/DeiT/Swin/DETR/DINOv2, and consumes only about 4W typically. Its video capabilities reach 8K@30fps encoding, 8K@60fps decoding, and 32-stream 1080p parallel decoding, and it is widely used in smart cities, smart transportation, smart manufacturing, and video conferencing.

> **Specification correction note**: The "about 43 TOPS" in some overviews corresponds to the early-release **INT4 (43.2 TOPS)** figure, not INT8; the latest official specification is **INT8 18 TOPS / INT4 72 TOPS**. Recorded here per the latest official data.

## Core Specifications

| Parameter | Value |
|------|------|
| **Architecture** | Octa-core ARM Cortex-A55 @1.7GHz + proprietary mixed-precision NPU + AI-ISP + VPU |
| **Process Node** | Not disclosed (estimated 12nm or 14nm class, same generation as AX620) |
| **FP16 / BF16 Compute** | Not disclosed (mixed precision supported; specific TFLOPS not listed separately) |
| **INT8 Compute** | 18 TOPS (latest official spec; early release information stated 10.8 TOPS) |
| **INT4 Compute** | 72 TOPS (latest official spec; early release information stated 43.2 TOPS) |
| **FP32 Compute** | Supported (mixed precision) |
| **Memory Capacity** | 8GB (standard 64-bit LPDDR4X, up to 32GB LPDDR4X) |
| **Memory Type** | LPDDR4X (64-bit) |
| **Memory Bandwidth** | Not disclosed |
| **TDP** | About 4 W (typical) |
| **Interconnect** | Dual Gigabit Ethernet, USB3.0/2.0, PCIe 2.0/SATA3.0, HDMI 2.0b, MIPI D-PHY, I2S/I2C/UART/SPI |
| **Interface** | SoC onboard (core board / edge box / accelerator card) |
| **Launch** | 2023-03 |
| **Mass Production/Availability** | In mass production 2023 |

## Key Features
- **Native Transformer support**: efficient edge deployment of ViT/DeiT/Swin/SwinV2/DETR/DINOv2.
- **8K video**: 8K@30fps encoding, 8K@60fps decoding, and 32-stream 1080p@30fps parallel decoding.
- **AI-ISP**: AI-HDR and AI-3DNR for real-time ultra-clear image quality in low-light environments.
- **Ultra-low power**: about 4W typical, with high energy efficiency for always-on edge deployment.
- **Rich interfaces**: dual Gigabit Ethernet, USB3.0, PCIe2.0/SATA, HDMI2.0b, and multiple MIPI lanes.
- **Multiple form factors**: IPC, edge boxes, and accelerator cards (e.g., the 1050 series and the AXera-Pi Pro developer board).

## Vendor Information
| Item | Details |
|------|------|
| **Company** | Axera Semiconductor Co., Ltd. (AXERA, 0600.HK) |
| **Headquarters** | Shanghai, China |
| **Founded** | 2019-05 |

## Use Cases
- ✅ Smart cameras, edge AI boxes, video conferencing, smart cities/transportation/manufacturing, edge Transformer inference
- ❌ Large model training, hyperscale cloud inference

## Related Cards
- [/docs/cards/others/axera-ax620](/docs/cards/others/axera-ax620) — Same vendor's second-generation vision SoC
- [/docs/cards/others/hailo-15](/docs/cards/others/hailo-15) — Smart camera SoC comparison
- [/docs/cards/others/moore-threads-mtt-s5000](/docs/cards/others/moore-threads-mtt-s5000) — Chinese GPU compute card comparison

## References
- [Axera releases third-generation smart vision chip AX650N (official press release)](https://axera-tech.com/en/news/2819.html)
- [AX650N (Baidu Baike)](https://baike.baidu.com/item/AX650N/68124449)
- [AX650 core board specifications (Axera official website)](https://www.axera-tech.com/zh-hans/node/2992)
