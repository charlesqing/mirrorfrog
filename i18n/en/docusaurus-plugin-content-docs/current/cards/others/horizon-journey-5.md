---
id: horizon-journey-5
title: "Horizon Journey 5 (Journey 5)"
description: "The first Chinese hundred-TOPS-class driving chip to reach front-mounted mass production: BPU Bayesian architecture, TSMC 16nm, 128 TOPS INT8, 1531 FPS, 60ms latency, about 30W power, benchmarked against the NVIDIA Orin, supporting L2+ through L4."
keywords: [Horizon Robotics, Horizon Robotics, Journey 5, Journey 5, J5, BPU, Bayesian, 128 TOPS, high-compute driving chip, NVIDIA Orin, Li Auto L8, ISO 26262]
vendor: others
vendor_full: "Horizon Robotics"
series: "Journey"
release_date: "2021-07"
status: "Mass production"
---

# Horizon Journey 5 (Journey 5)

## Product Overview

The **Journey 5 (Journey 5 / J5)** is **Horizon Robotics'** third-generation automotive-grade AI chip, officially released at a **launch event in Shanghai on July 29, 2021** (with the "open ecosystem strategy" launched at the same time), positioned as a **full-scenario vehicle-wide intelligent central computing chip for high-level intelligent driving**. It is the **first Chinese hundred-TOPS-class high-compute driving chip to reach front-mounted mass production**.

The Journey 5 is built on the **TSMC 16nm** process and Horizon's **third-generation BPU architecture "Bayesian"**: a single chip delivers up to **128 TOPS** of AI compute, supports **16-camera** perception computing, and consumes **about 30W** typically in system power. Horizon deliberately downplayed peak TOPS in its marketing and emphasized "real computing performance" — **1283 FPS** at launch, later raised to **1531 FPS** through software and compiler optimizations, with front-view perception **latency as low as 60ms** (most contemporaries were around 150ms). CTO Huang Chang summarized it as the result of joint optimization under "FPS = hardware architecture × algorithm architecture × software architecture". The core technique of the Bayesian architecture is **flexibly configured near-memory computing**, which greatly optimizes memory footprint and memory access, achieving high effective compute at low power.

**Automotive grade and functional safety**: Horizon is the first Chinese AI chip company to pass the TÜV ISO 26262 functional safety **process** certification; the Journey 5 received the **SGS-TÜV ISO 26262 ASIL-B functional safety product certification** in July 2021, built to **ASIL-B(D)** with applications able to meet ASIL-D requirements. On **February 2, 2023**, the Journey 5 received from CATARC the **industry's first "Automotive SoC Chip Trusted Safety Product Certification"**.

**Mass production and market**: In **September 2022, the Journey 5 achieved its world premiere in mass production in the Li Auto L8 Pro** (Pro versions of the L8/L7). It subsequently won design wins from Li Auto, BYD, SAIC, Changan, Great Wall, FAW Hongqi, NIUTRON, Neta, and others, with solutions spanning single J5, dual J5, and multi J5. By **September 2023 shipments exceeded 200,000 units**, with cumulative production design wins for 20+ models from more than 9 automakers; industry statistics put its **2024 smart driving domain controller chip installations at about 269,000 units**. Commercially, Yu Kai publicly stated its cost is "less than half of the NVIDIA Orin (about $400+)", with cost-effectiveness being the key to its entry into the high-end smart driving market.

> 📌 **Generational reflection**: Horizon CEO Yu Kai later publicly admitted that during planning, the Journey 5's projection of "the pace of end-to-end autonomous driving technology development" was overly aggressive, leading to **underestimation of CPU compute needs** — the direct motivation for the Journey 6's greatly strengthened CPU (18-core A78AE / 410k DMIPS).

## Core Specifications

| Parameter | Value |
|------|------|
| **Architecture** | Horizon BPU Bayesian (third-generation BPU), dual-core BPU, near-memory computing design |
| **Process Node** | TSMC 16nm |
| **CPU** | 8 × Arm Cortex-A55, about 26k DMIPS (some sources record 30k) |
| **FP16 / BF16 Compute** | Not disclosed (the BPU mainly targets fixed-point integer inference) |
| **INT8 Compute** | **128 TOPS** (flagship version; some sources record the 96 TOPS version as J5 and the 128 TOPS version as J5P) |
| **FP32 Compute** | Not disclosed |
| **Real Computing Performance** | **1531 FPS** (1283 FPS at launch, improved through software optimization) |
| **Perception Latency** | **60 ms** (front-view perception, end to end) |
| **Memory Capacity** | Not disclosed (configured with the domain controller solution) |
| **Memory Type** | Not disclosed (automotive-grade LPDDR; official generation not disclosed) |
| **Memory Bandwidth** | Not disclosed |
| **TDP** | **About 30 W** (average system power; some sources record 30–35W; the 96 TOPS version about 20W) |
| **Interconnect** | Multi-chip cascading supported (single J5 / dual J5 / multi J5 solutions; the Matrix 5 platform reaches 512 TOPS) |
| **Interface** | SoC onboard (smart driving domain controller); 16 cameras supported, ISP supports 16+ HD / 2+ 4K |
| **Functional Safety** | ISO 26262 ASIL-B product certification (designed to ASIL-B(D), applications can meet ASIL-D); CATARC Trusted Safety certification (2023-02) |
| **Other Compute Units** | 2 × ISP, 2 × DSP, computer vision engine, video codec unit |
| **Launch** | 2021-07 (Shanghai launch event 2021-07-29; another public launch event on 2021-09-10) |
| **Mass Production/Availability** | **World premiere in mass production with the Li Auto L8 Pro in 2022-09**; shipments exceeded 200,000 units by 2023-09 |

> ⚠️ **Specification uncertainty**: **Horizon has never disclosed the memory subsystem (capacity / type / bandwidth)**; this card records it as "Not disclosed" as such. On the **96 TOPS vs 128 TOPS relationship**: during the 2020 preview the official figure was "96 TOPS single chip", and at the official 2021 launch it was 128 TOPS; the third-party spec sheet (AlfaWiki) lists them as two variants, **J5 (96 TOPS / 20W)** and **J5P (128 TOPS / 30–35W)**. In the Chinese context "Journey 5" usually refers to the **128 TOPS / 30W** version, which this card follows. The launch date has two versions in reports, 2021-07-29 and 2021-09-10 (the former a technical launch, the latter a public debut); **2021-07** is adopted here.

## Key Features

- **First Chinese hundred-TOPS-class driving chip to reach front-mounted mass production**: breaking the domestic high-compute driving chip mass-production gap
- **BPU Bayesian architecture**: flexibly configured **near-memory computing** that extremely optimizes memory footprint and memory access, achieving high compute density + high energy efficiency
- **"Real performance" over peak compute**: 1531 FPS + 60ms latency at 1/6 ~ 1/9 of the Orin's power (official comparison)
- **Low-latency engineering optimization**: pyramid core, stitched optical-flow preprocessing + extreme single-image optimization (rather than server-style batch inference), significantly reducing latency
- **Full-scenario central computing**: one chip covers assisted driving, navigation driving (NOA), autonomous driving, and in-cabin intelligent interaction
- **16-camera input**: satisfying 360° surround view + front view + multi-stream cockpit video needs
- **Cascade expansion**: single/dual/multi J5 solutions; the Matrix 5 domain computing platform and Matrix SuperDrive full-scenario solution (512 TOPS, supporting 11–19 cameras)
- **"A chip that grows"**: hardware unchanged while the software architecture keeps upgrading, FPS raised from 1283 to 1531+
- **Industry's first Automotive SoC Trusted Safety certification** (CATARC, 2023-02) + ISO 26262 ASIL-B product certification
- **Cost advantage**: unit price less than half of the NVIDIA Orin, with similar performance positioning

## Vendor Information

| Item | Details |
|------|------|
| **Company** | Beijing Horizon Robotics Technology Co., Ltd. / Horizon Robotics (HKEX 9660.HK) |
| **Headquarters** | Beijing, China |
| **Founded** | 2015 |
| **Founder / CEO** | Yu Kai |
| **Co-founder / CTO** | Huang Chang |
| **Business Positioning** | Tier 2 (customers are Tier 1s, OEMs, and ecosystem technology companies); open delivery including white-box solutions |
| **Key Customers** | Li Auto, BYD, SAIC, Changan, Great Wall, FAW Hongqi, Neta, NIUTRON, and others |
| **Website** | https://www.horizon.auto |

## Use Cases

- ✅ Highway NOA / navigation assisted driving (single J5, the mainstay scenario)
- ✅ L2+ / L2++ driving-parking integrated advanced smart driving domain controllers
- ✅ Dual J5 / multi J5 solutions supporting L3–L4 autonomous driving R&D and operating fleets
- ✅ Full-scenario vehicle central computing (smart driving + cockpit perception fusion)
- ✅ Cost-sensitive projects replacing the NVIDIA Orin with domestic alternatives
- ✅ Efficient inference of CNN-class perception networks (ResNet / detection / segmentation)
- ❌ Large-parameter Transformer / VLA / world model edge deployment (both architecture and CPU compute are limited; officially handed off to the Journey 6)
- ❌ One-stage end-to-end large model urban smart driving (requires Journey 6P-class compute)
- ❌ Data center training / general AI inference

## Related Cards

- [Horizon Journey 3](/docs/cards/others/horizon-journey-3) — Same vendor's previous generation, 16nm / 5 TOPS, mid/low-tier market mainstay
- [Horizon Journey 6](/docs/cards/others/horizon-journey-6) — Same vendor's successor, 7nm / 560 TOPS Nash architecture, addressing the CPU compute shortfall
- [Horizon Journey 2](/docs/cards/others/horizon-journey-2) — Same vendor's first automotive-grade mass-production chip
- [Black Sesame Huashan A1000](/docs/cards/others/blacksesame-a1000) — Contemporary Chinese automotive direct competitor, 58 TOPS
- [Black Sesame Huashan A2000](/docs/cards/others/blacksesame-a2000) — Chinese next-generation advanced high-compute driving chip
- [NVIDIA DRIVE Thor](/docs/cards/nvidia/drive-thor) — International flagship automotive platform, successor to the Orin that the Journey 5 benchmarked against
- [Moore Threads MTT S5000](/docs/cards/others/moore-threads-mtt-s5000) — Chinese data center GPU, forming a "cloud-vehicle" compute contrast with the automotive edge SoC

## References

- [Journey 5 (Baidu Baike, includes launch/mass production/certification/shipment timeline)](https://baike.baidu.com/item/%E5%BE%81%E7%A8%8B5/67671730)
- [Li Auto L8 debuts with the Journey 5 as Chinese high-compute chips reach the World Cup finals (EET-China, includes Bayesian architecture and FPS methodology details)](https://www.eet-china.com/mp/a167009.html)
- [Horizon Journey 5: how does a chip that grows do it? (Weibo headline article, BPU architecture generations and 30W/1500+FPS data)](https://weibo.com/ttarticle/p/show?id=2309404789000039694525)
