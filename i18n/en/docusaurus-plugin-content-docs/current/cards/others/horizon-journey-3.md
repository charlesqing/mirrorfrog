---
id: horizon-journey-3
title: "Horizon Journey 3 (Journey 3)"
description: "Horizon's second-generation mass-produced automotive AI chip: BPU Bernoulli 2.0 architecture, 16nm process, 5 TOPS INT8, typical power of 2.5W, supporting L2+ assisted driving, driving-parking integration, and smart cockpit."
keywords: [Horizon Robotics, Horizon Robotics, Journey 3, Journey 3, J3, BPU, Bernoulli 2.0, automotive-grade AI chip, L2+ assisted driving, driving-parking integration]
vendor: others
vendor_full: "Horizon Robotics"
series: "Journey"
release_date: "2020-09"
status: "Mass production"
---

# Horizon Journey 3 (Journey 3)

## Product Overview

The **Journey 3 (Journey 3 / J3)** is a new-generation high-efficiency automotive AI chip released by **Horizon Robotics** at the **Beijing International Automotive Exhibition on September 26, 2020**, Horizon's second mass-produced automotive chip after the Journey 2. At the launch, Horizon founder and CEO Yu Kai called automotive AI chips "the digital engine of the intelligent car".

The Journey 3 uses a **16nm process** and Horizon's proprietary **BPU Bernoulli 2.0** architecture (dual-core BPU), with **AI compute of 5 TOPS at a typical power of only 2.5W**. Compared with the Journey 2, it improves compute effectiveness, image input capability, and video codec capability while maintaining ultra-low power: the CPU is upgraded to **4 × Arm Cortex-A53 @1.2GHz**, the ISP supports 6 HD + 4K inputs, and **H.264 / H.265 hardware codec** is natively supported, making it an ideal platform for "multi-channel AI computing + multi-channel digital video recording (DVR)". At the architecture level it is specifically optimized for **MobileNet, EfficientNet, and Depthwise / Group Convolution**, fitting object detection and semantic segmentation tasks.

In terms of product positioning, the Journey 3 focuses on **front-view all-in-one and driving-parking integrated solutions**, supporting advanced assisted driving (L2+), smart cockpit, automated parking assist (APA), crowdsourced HD map positioning, and more. On launch day, **GAC R&D Center and GAC Capital** signed a strategic partnership with Horizon and jointly announced the "**GAC Edition Journey 3**" — a customized version with joint software-hardware optimization for GAC's own deep learning networks.

Representative models carrying the Journey 3 include the **Li Auto ONE (2021 model)** and the **Roewe RX5**; it was later also carried in the Li Auto L series Pro/Air versions, BYD, FAW Hongqi, NIUTRON, and others. According to industry statistics, **Journey 3 smart-driving domain controller chips had an installed base of about 165,000 units in 2024**, still one of the mainstay models in the Chinese mid/low-tier smart driving market.

## Core Specifications

| Parameter | Value |
|------|------|
| **Architecture** | Horizon BPU Bernoulli 2.0, dual-core BPU, max frequency 950 MHz, DFS support |
| **Process Node** | 16nm (TSMC; some sources describe a 16/12nm family process) |
| **CPU** | 4 × Arm Cortex-A53 @ up to 1.2 GHz, DFS support, about 12k DMIPS |
| **FP16 / BF16 Compute** | Not disclosed (the BPU is a fixed-point integer inference acceleration unit) |
| **INT8 Compute** | **5 TOPS** |
| **FP32 Compute** | Not disclosed |
| **Memory Capacity** | Up to 4 GB |
| **Memory Type** | Off-chip 32-bit DDR4 / LPDDR4 / LPDDR4X, up to 3200 MT/s |
| **Memory Bandwidth** | About 12.8 GB/s (estimated from 32-bit × 3200 MT/s) |
| **TDP** | **2.5 W** (typical power) |
| **Interconnect** | Not disclosed (automotive SoC; supports multi-chip solution cascading into domain controllers) |
| **Interface** | SoC onboard; ISP supports 6 HD cameras + 4K input; H.264/H.265 hardware codec |
| **Algorithm Optimization** | For object detection and semantic segmentation; MobileNet / EfficientNet; dedicated Depthwise & Group Conv optimization |
| **Automotive Certification** | AEC-Q100; Horizon is the first Chinese AI chip company to pass the TÜV ISO 26262 functional safety process certification |
| **Launch** | 2020-09 (Beijing auto show, 2020-09-26) |
| **Mass Production/Availability** | In production vehicles from 2021 (Li Auto ONE, Roewe RX5, etc.) |

> ⚠️ **Specification uncertainty**: Memory bandwidth is **estimated** from the officially published bus width (x32) and data rate (3200 MT/s); Horizon did not directly publish a bandwidth figure. The process is recorded as "16nm" (official) or "16/12nm" (third-party wiki) in different sources. ISO 26262 functional safety **product-level** certification (ASIL-B) was officially announced for the Journey 5; during the Journey 3 period Horizon announced only **process-level** ISO 26262 certification, so no product-level ASIL grade is asserted for the Journey 3 here.

## Key Features

- **Ultra-low power, high energy efficiency**: 5 TOPS / 2.5W, energy efficiency surpassing several mainstream industry chips at the time, capable of passive cooling
- **BPU Bernoulli 2.0 architecture**: deeply optimized for Depthwise / Group Convolution and lightweight networks (MobileNet, EfficientNet)
- **Strong image input and processing**: 6 HD cameras supported, 4K supported, efficient H.264/H.265 encoding, fitting multi-channel DVR + AI computing
- **Multi-scenario reuse**: one chip covers L2+ assisted driving, smart cockpit, automated parking assist (APA), and crowdsourced HD map positioning
- **Driving-parking integration**: focused on front-view all-in-one and driving-parking integrated solutions, simplifying domain controller architecture
- **OEM customization capability**: joint software-hardware optimization for automakers' own deep learning networks (e.g., the "GAC Edition Journey 3")
- **Tiangong Kaiwu (OpenExplorer) 2.0**: upgraded companion AI development platform adding a complete data closed-loop system solution (collection and annotation → training optimization → simulation evaluation → OTA deployment)
- **Scale installation**: about 165,000 units installed in smart driving domain controllers in 2024 (industry statistics)

## Vendor Information

| Item | Details |
|------|------|
| **Company** | Beijing Horizon Robotics Technology Co., Ltd. / Horizon Robotics (HKEX 9660.HK) |
| **Headquarters** | Beijing, China |
| **Founded** | 2015 |
| **Founder / CEO** | Yu Kai |
| **Co-founder / CTO** | Huang Chang |
| **Partner Automakers** | Audi, FAW Hongqi, SAIC, GAC, Changan, BYD, Li Auto, Great Wall, and others |
| **Website** | https://www.horizon.auto |

## Use Cases

- ✅ L2 / L2+ advanced assisted driving front-view all-in-one units
- ✅ Driving + parking integrated (driving-parking integration) low-cost domain controller solutions
- ✅ Automated parking assist APA / surround-view perception
- ✅ Smart cockpit multimodal human-machine interaction
- ✅ Crowdsourced HD map creation and positioning
- ✅ Commercial vehicle ADAS, multi-channel DVR + AI all-in-one units
- ❌ Urban NOA / L3+ autonomous driving
- ❌ BEV + Transformer end-to-end large model deployment (neither compute nor architecture is a fit)
- ❌ Data center training / inference

## Related Cards

- [Horizon Journey 2](/docs/cards/others/horizon-journey-2) — Same vendor's previous generation, 28nm / 4 TOPS, China's first automotive-grade mass-produced AI chip
- [Horizon Journey 5](/docs/cards/others/horizon-journey-5) — Same vendor's next-generation high-compute chip, 128 TOPS Bayesian architecture
- [Horizon Journey 6](/docs/cards/others/horizon-journey-6) — Same vendor's current flagship, 7nm / 560 TOPS Nash architecture
- [Black Sesame Huashan A1000](/docs/cards/others/blacksesame-a1000) — Contemporary Chinese automotive competitor, 58 TOPS driving-parking integrated
- [NVIDIA DRIVE Thor](/docs/cards/nvidia/drive-thor) — International high-end automotive platform reference

## References

- [Horizon releases autonomous driving chip supporting multiple application scenarios (People's Daily Online Auto, 2020-09-27)](https://auto.people.com.cn/n1/2020/0927/c1005-31876864.html)
- [Horizon releases the Journey 3 chip, with the Journey 5 planned for early next year (National Business Daily / People's Daily client)](https://www.peopleapp.com/rmharticle/30019522937)
- [Horizon Robotics Journey series chip specification table (AlfaWiki, includes CPU / ISP / memory details)](http://www.alfawiki.org/Horizon_Robotics)
