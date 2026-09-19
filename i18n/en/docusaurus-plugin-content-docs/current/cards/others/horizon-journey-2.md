---
id: horizon-journey-2
title: "Horizon Journey 2 (Journey 2)"
description: "China's first automotive-grade mass-produced AI chip: BPU Bernoulli 1.0 architecture, TSMC 28nm HPC+, >4 TOPS INT8 equivalent compute, typical power of just 2W, for entry-level ADAS and smart cockpit."
keywords: [Horizon Robotics, Horizon Robotics, Journey 2, Journey 2, BPU, Bernoulli, automotive-grade AI chip, ADAS, smart cockpit, Chinese AI chip]
vendor: others
vendor_full: "Horizon Robotics"
series: "Journey"
release_date: "2019-08"
status: "Mass production"
---

# Horizon Journey 2 (Journey 2)

## Product Overview

**Horizon Robotics** was founded in 2015 by **Yu Kai**, former head of Baidu's Institute of Deep Learning, and is one of China's earliest startups focused on edge AI chips. The company developed its own **BPU (Brain Processing Unit)** compute architecture, naming each generation after a mathematician — the first **Gauss**, the second **Bernoulli**, the third **Bayesian**, and the fourth **Nash**.

The **Journey 2** was officially released in **August 2019** and announced as entering mass production at the **World Artificial Intelligence Conference in September 2019**, making it **China's first automotive-grade mass-produced AI chip**. The chip was designed from the outset to the **AEC-Q100** automotive electronics reliability standard, operating from -40°C to 125°C, filling the gap of "zero domestic automotive-grade mass-production breakthroughs" in autonomous driving chips at the time.

The Journey 2 carries what Horizon calls **"BPU 2.0"** — the second-generation BPU compute architecture (i.e., **Bernoulli 1.0**) — using the **TSMC 28nm HPC+** process in a **17×17mm BGA** package, delivering **over 4 TOPS of equivalent compute** at a **typical power of only 2W**. Horizon emphasizes the "effectiveness" of its compute: typical algorithm models achieve MAC utilization >90%, and frames processed per TOPS can exceed 10× that of equal-compute GPUs.

The product serves two main lines: first, **entry-level ADAS vision perception** (front-view all-in-one solutions, completing detection of 24 object categories with 60 targets output per frame at &lt;100ms latency); second, **smart cockpit human-machine interaction** (face recognition, gaze tracking, gesture recognition, voice). The first mass-production model was the **Changan UNI-T** (launched 2020-06, carrying the intelligent cockpit NPU compute platform jointly developed by Changan and Horizon), followed by the **Chery Ant**, SAIC, GAC Aion, and other models.

## Core Specifications

| Parameter | Value |
|------|------|
| **Architecture** | Horizon BPU 2.0 (Bernoulli 1.0), dual-core BPU |
| **Process Node** | TSMC 28nm HPC+ |
| **CPU** | 2 × Arm Cortex-A53 |
| **FP16 / BF16 Compute** | Not disclosed (the BPU is a fixed-point integer inference acceleration unit) |
| **INT8 Compute** | **> 4 TOPS** (equivalent compute) |
| **FP32 Compute** | Not disclosed |
| **Memory Capacity** | Up to 4 GB (off-chip DDR4 / LPDDR4, 32-bit) |
| **Memory Type** | DDR4 / LPDDR4, up to 3200 MT/s |
| **Memory Bandwidth** | About 12.8 GB/s (estimated from 32-bit × 3200 MT/s) |
| **TDP** | **2 W** (typical power) |
| **Interconnect** | Not disclosed (automotive SoC, no multi-card interconnect; multi-chip solution cascading possible) |
| **Interface** | SoC onboard (17×17mm BGA package); max input resolution 4K, dual video input support |
| **Vision/Image** | ISP supports 2×HD + 1×4K; pixel-level semantic segmentation of >60 object classes |
| **Automotive Certification** | AEC-Q100; operating temperature -40°C ~ 125°C |
| **Launch** | 2019-08 |
| **Mass Production/Availability** | Mass production announced 2019-09; first production model Changan UNI-T launched 2020-06 |

> ⚠️ **Specification uncertainty**: On the CPU cores, official release materials and mainstream media report a **dual-core Arm Cortex-A53**, but some broker research reports state **2 × Cortex-A35**, and one report's table mistakenly lists the "Journey 2" as 16nm / 5 TOPS (that parameter set actually corresponds to the **Journey 3**). This card follows Horizon's official statements and first-hand 2019 reporting: **28nm HPC+ / >4 TOPS / 2W**. Memory bandwidth is an **estimated** value from bus width and data rate, not an official figure.

## Key Features

- **China's first automotive-grade mass-produced AI chip**: mass production announced 2019-09, breaking the domestic autonomous driving chip mass-production gap
- **Extreme energy efficiency**: >4 TOPS equivalent compute / 2W typical power, no active cooling required
- **High compute effectiveness**: typical model MAC utilization >90%, frames per TOPS over 10× that of equal-compute GPUs
- **Low-bandwidth design**: only 32-bit DDR memory required, reducing system power and BOM cost
- **Perception capability**: latency &lt;100ms, recognition of 60+ object classes, 200 targets detected per frame; ranging/speed-measurement error better than mainstream contemporaries
- **Dual-domain coverage**: the same chip supports both ADAS front-view perception and smart cockpit multimodal interaction
- **Companion toolchain**: released with the **Horizon OpenExplorer (Tiangong Kaiwu)** AI chip toolchain and development kit
- **Open business model**: Horizon positions itself as a **Tier 2**, offering layered delivery from reference designs to chip + toolchain (in contrast to the Mobileye black box)

## Vendor Information

| Item | Details |
|------|------|
| **Company** | Beijing Horizon Robotics Technology Co., Ltd. / Horizon Robotics (HKEX 9660.HK) |
| **Headquarters** | Beijing, China |
| **Founded** | 2015 |
| **Founder / CEO** | Yu Kai (former head of Baidu's Institute of Deep Learning) |
| **Core Technology** | Proprietary BPU compute architecture + Tiangong Kaiwu (OpenExplorer) AI development platform |
| **Website** | https://www.horizon.auto |

## Use Cases

- ✅ Entry-level ADAS / L1–L2 assisted driving front-view all-in-one units
- ✅ Smart cockpit DMS/OMS: face recognition, gaze tracking, gesture and voice interaction
- ✅ Low-cost, passively cooled automotive vision perception modules
- ✅ Aftermarket ADAS and commercial vehicle vision solutions
- ❌ Advanced urban NOA / L3+ autonomous driving (far insufficient compute)
- ❌ BEV + Transformer end-to-end large model deployment
- ❌ Data center training / inference (positioned as an automotive embedded SoC)

## Related Cards

- [Horizon Journey 3](/docs/cards/others/horizon-journey-3) — Same vendor's next generation, 16nm / 5 TOPS, direct successor on the Bernoulli 2.0 architecture
- [Horizon Journey 5](/docs/cards/others/horizon-journey-5) — Same vendor's high-compute generational leap, 128 TOPS Bayesian architecture
- [Horizon Journey 6](/docs/cards/others/horizon-journey-6) — Same vendor's current flagship, 7nm / 560 TOPS Nash architecture
- [Black Sesame Huashan A1000](/docs/cards/others/blacksesame-a1000) — Contemporary Chinese automotive competitor, 58 TOPS driving-parking integrated
- [NVIDIA DRIVE Thor](/docs/cards/nvidia/drive-thor) — International high-end automotive platform, illustrating the compute scale gap

## References

- [China's first automotive-grade AI chip in mass production: autonomous driving gets a "Chinese core" (CCTV / People's Daily Overseas Edition)](https://news.cctv.com/2019/09/16/ARTIHPxOhkvPgRH9vcL6mytD190916.shtml)
- [Horizon releases autonomous driving chip supporting multiple application scenarios (People's Daily Online Auto, includes Journey series generational comparison)](https://auto.people.com.cn/n1/2020/0927/c1005-31876864.html)
- [Horizon Robotics Journey series chip specification table (Open WIKI / AlfaWiki)](http://www.alfawiki.org/Horizon_Robotics)
