---
id: iluvatar-zhikai-50
title: Iluvatar CoreX Zhikai 50 (Low-Power Edge Inference Card)
sidebar_label: Zhikai 50
description: "Iluvatar CoreX Zhikai 50 low-power inference accelerator card detailed specs: 75 W board power, 16 GB HBM2e, half-length half-height single-slot PCIe, passive cooling, up to 128 channels of 1080P video decoding, priced at around RMB 15,000, suited to small server rooms and industrial scenarios."
keywords: [Iluvatar CoreX, Zhikai 50, MR-V50, Iluvatar, inference GPU, 16GB HBM2e, 75W, low power, edge inference, domestic AI chip]
---

# Iluvatar CoreX Zhikai 50 (Low-Power Edge Inference Card)

## Product Overview

The **Zhikai 50 (MR-V50)** is Iluvatar CoreX's **entry-level low-power inference accelerator card** in the Zhikai series, with a **board power of only 75 W**. It adopts a **half-length half-height single-slot PCIe** form factor with **passive cooling**, comes with **16 GB HBM2e** memory, and is priced at around **RMB 15,000**.

Thanks to its 75 W low power and half-height half-length form factor, the Zhikai 50 fits two types of scenarios at once:
- **Small server room expansion**: plugs directly into existing servers without upgrading power or cooling
- **Industrial PCs / edge nodes**: the half-height half-length form factor fits compact industrial chassis

Video processing is another highlight of the Zhikai 50: it supports **up to 128 channels of H.264 1080P@30fps video decoding**, plus JPEG image encode/decode for H.264 / H.265 / VP9 / AVS2 formats (2000 / 500 fps HD), making it suitable for video-centric inference workloads such as smart city video analytics and content moderation.

## Core Specifications

| Parameter | Value |
|-----------|-------|
| **Architecture** | Iluvatar CoreX general-purpose GPU architecture |
| **Product Positioning** | Edge / industrial lightweight inference |
| **INT8** | **192 TOPS** (other sources report 64 TOPS; conflicting figures) |
| **Memory Capacity** | **16 GB** HBM2e |
| **TDP** | 75 W (board power) |
| **Interface** | PCIe Gen4 ×16 |
| **Cooling** | Passive cooling |
| **Board Size** | Half-length half-height single-slot PCIe card |
| **Video Decoding** | Up to 128 channels (H.264 1080P@30fps) |
| **Image Encode/Decode** | JPEG decode / encode: 2000 / 500 fps (HD) |
| **Launch** | December 2022 (Zhikai series) |
| **Price** | Approx. **RMB 15,000** |

> ⚠️ **Conflicting Data Note**: The Zhikai 50's integer compute is reported as **192 TOPS** in some sources and **64 TOPS** in others (a roughly 3x discrepancy). This site uses **192 TOPS** from securities analyst research notes and keeps the conflict flagged. Process node, FP16 / FP32 compute, and memory bandwidth are all not disclosed. Refer to Iluvatar CoreX's official datasheet.

## Use Case Tiering

In the 2026 tiering of domestic PCIe inference cards, the Zhikai 50 belongs to the **third tier (edge / industrial lightweight, < 100–200 TOPS)**:

| Tier | Positioning | Representative Models |
|------|-------------|-----------------------|
| First tier | Cloud large-model inference flagship | Kunlunxin P800, Ascend Atlas 300I A2, Zhikai 100 |
| Second tier | Mid-to-high-density server room inference | Ascend dual-310P, Cambricon MLU 370, Moore Threads MTT S4000 |
| **Third tier** | **Edge / industrial lightweight** | **Zhikai 50**, Ascend 310P single card, Rockchip RK1828 |

> 📌 **Selection Guidance**: The Zhikai 50's core competitiveness is the combination of **75 W power + half-height half-length single slot + 16 GB HBM2e + 128-channel video decoding**, suited to **low-cost expansion of existing servers** and **industrial / edge boxes**. If you need maximum per-card compute, choose the Zhikai 100 or first-tier products.
