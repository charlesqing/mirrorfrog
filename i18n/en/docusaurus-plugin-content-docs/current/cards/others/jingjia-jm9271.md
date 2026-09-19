---
id: jingjia-jm9271
title: "Jingjia Micro JM9271"
description: "The high-end model of Jingjia Micro's JM9 series, with rumored specs of 8 TFLOPS FP32, 16GB HBM, 512 GB/s, and 200W, targeting AI/cloud computing/security, though full specifications were never officially released"
keywords: [Jingjia Micro, Jingjia Micro, JM9271, JM9, domestic GPU, HBM, Xinchuang, GTX 1080, 300474]
vendor: others
vendor_full: "Changsha Jingjia Microelectronics"
series: "JM9"
release_date: "2021"
status: "Mass production"
---

# Jingjia Micro JM9271

## Product Overview

The **JM9271** is the higher-positioned model in **Changsha Jingjia Microelectronics' (SZSE 300474)** JM9 series. Under the company's 2018 private-placement funded project plan, the JM9 series comprises two chips, the **JM9231** and the **JM9271**: the JM9231 targets domestic office PCs, portable computers, mid-to-low-end entertainment devices, and high-end embedded systems; the **JM9271 focuses on strengthening scientific computing and data processing capabilities**, aimed at high-end application areas with demanding compute speed requirements such as artificial intelligence, security surveillance, speech recognition, deep learning, and cloud computing.

On **2021-11-16**, Jingjia Micro announced that the JM9 series graphics processing chips had completed tape-out, packaging, and initial testing. In **May 2022**, the company announced that the **second** JM9 series graphics processing chip had completed development, a model targeting desktops, servers, industrial PCs, self-service terminals, and similar equipment — the industry generally maps this "second chip" to the JM9271, but **Jingjia Micro did not use the JM9271 name in its announcements, nor did it separately disclose the complete specifications of that model**.

In terms of actual market deployment, a 2026 industry review article describes the JM9271 as a **representative product** of Jingjia Micro's JM9 series, stating that it uses the self-developed JM9 graphics architecture, supports graphics APIs such as Vulkan / OpenGL and 4K ultra-HD display output, has graphics rendering capability in the domestic first tier, and was paired with KylinSec in a fully domestic GPU virtualization solution deployed in critical infrastructure such as power grid dispatch. As of **March 2026**, Jingjia Micro confirmed that **the JM9 series has achieved volume delivery**, the fourth-generation **JM11 series** has launched with small-volume shipments, and the company continues to advance R&D on "high-performance general-purpose GPU chips" and next-generation graphics processing chips.

> ⚠️ **Nature of the Specs on This Page (Must Read)**
> Jingjia Micro has **never officially released a complete specification sheet for the JM9271 in the form of a formal announcement**. The fields marked "rumored" in the core specifications below come from **2019—2021 media reports (MyDrivers / Tom's Hardware) and securities research reports**, representing early design targets or secondhand accounts, with contradictions among different sources (see the "Source Conflicts" subsection).
> Jingjia Micro representatives have publicly responded that the JM9 series and the GTX 1080 "differ in market position, application characteristics, and focus, and are not comparable", so **"comparable to the GTX 1080" should be treated as a media framing rather than an official positioning**.

## Core Specifications

| Parameter | Value |
|-----------|-------|
| **Architecture** | JM9 self-developed GPU architecture (Jingjia Micro's third-generation GPU) |
| **Process Node** | Not disclosed (media reports say 14nm; unconfirmed officially) |
| **FP16 / BF16 Compute** | Not disclosed |
| **INT8 Compute** | Not disclosed |
| **FP32 Compute** | 8 TFLOPS (**rumored**, not official) |
| **Pixel Fill Rate** | > 128 GPixel/s (**rumored**) |
| **Core Clock** | > 1,800 MHz Boost (**rumored**) |
| **Memory Capacity** | 16 GB (**rumored**; a 2026 source claims 8GB, see conflict note below) |
| **Memory Type** | HBM (**rumored**; another source says GDDR6) |
| **Memory Bandwidth** | 512 GB/s (**rumored**) |
| **TDP** | 200 W (**rumored**, not officially disclosed) |
| **Interconnect** | Not disclosed (no public multi-card interconnect solution) |
| **Interface** | PCIe 4.0 x16 (**rumored**; some early sources wrote PCIe 4.0 without specifying lane count) |
| **Graphics APIs** | OpenGL 4.5, OpenCL 2.0 (**rumored**); Vulkan / OpenGL (2026 industry framing) |
| **Video Interfaces** | HDMI 2.0, DisplayPort 1.3 (**rumored**) |
| **Video Codec** | H.265 / 4K@60fps (**rumored**) |
| **Virtualization** | GPU virtualization supported (joint solution with KylinSec, deployed in power grid dispatch) |
| **Launch** | 2021 (JM9 series tape-out and packaging announcement); second chip of the series completed development in May 2022 |
| **Mass Production/Availability** | **Volume delivery of the JM9 series officially confirmed in March 2026** |

### Source Conflicts

| Metric | Source A (2019—2021 media/research reports) | Source B (2026-08 industry review) |
|--------|---------------------------------------------|-------------------------------------|
| Memory Capacity | 16 GB | 8 GB |
| Memory Type | HBM | GDDR6 |
| Memory Bandwidth | 512 GB/s | 512 GB/s (another contemporaneous article) |
| FP32 | 8 TFLOPS | 8 TFLOPS |

> ⚠️ **Uncertainty**: The memory configuration has two mutually contradictory circulating accounts: **16GB HBM** and **8GB GDDR6**. The HBM option was reported by multiple English-language media in 2019, but given HBM's high cost and constrained supply, it is a reasonable inference that the actual mass-production version switched to GDDR6. **In the absence of an official specification sheet, neither account can be confirmed.**

## Key Features

- **High-end positioning within the JM9 series**: compared with the JM9231, strengthened data processing and bulk information handling, able to take on basic data analysis, geographic information computation, and similar workloads
- **Self-developed JM9 graphics architecture**: not a modified IP-licensed design; Jingjia Micro controls the underlying logic/physical design and driver stack
- **GPU hardware virtualization**: a fully domestic GPU virtualization solution launched with KylinSec, already deployed in critical infrastructure such as power grid dispatch
- **4K ultra-HD output**: 4K display output and H.265 hardware codec support
- **Domestic first-tier graphics rendering** (per the 2026 industry review)
- **Military-grade reliability**: continues the company's high-reliability design accumulation from demanding aerospace environments
- **Professional industry deployment**: professional surveying and mapping, geological information processing, industrial computer-aided design, command and dispatch
- **Limitations**: AI compute (FP16/BF16/INT8) never disclosed, cannot be used for large-model training; no public high-speed interconnect; official specifications long opaque

## Vendor Information

| Parameter | Value |
|-----------|-------|
| **Company** | Changsha Jingjia Microelectronics Co., Ltd. (Changsha Jingjia Microelectronics Co., Ltd.) |
| **Headquarters** | Changsha, Hunan Province |
| **Founded** | 2006 |
| **Listing** | Listed on the SZSE ChiNext in March 2016, code **300474** |
| **Positioning** | The first company in China to successfully develop a domestic GPU and achieve large-scale engineering application |
| **2025 Revenue** | RMB 720 million |
| **2025 R&D Spend** | RMB 428 million (59.39% of revenue) |
| **R&D Platforms** | National-level enterprise technology center; GPU and Intelligent Computing Systems Innovation Center |
| **Ongoing R&D** | High-performance general-purpose GPU chip R&D and industrialization project; General-Purpose GPU Advanced Architecture R&D Center; AI SoC endpoint chip successfully taped out |
| **Official Website** | https://jingjiamicro.com |

## Use Cases

- ✅ Xinchuang workstation / desktop / server graphics card domestic substitution
- ✅ Cloud desktops and GPU virtualization (government clouds, power grid dispatch)
- ✅ Professional surveying and mapping, geological information processing, geographic information systems (GIS)
- ✅ Industrial computer-aided design (CAD), BIM, industrial digital twins
- ✅ Security surveillance, video structuring (the company's planned direction)
- ✅ Basic data analysis and scientific computing
- ❌ Large-model AI training (no public AI compute figures, no high-speed interconnect)
- ❌ Large-model inference clusters (memory and bandwidth configuration unclear and on the low side)
- ❌ Procurement decisions requiring precise specifications (**official specs are not public; request the datasheet directly from the vendor**)
- ❌ Direct migration from the CUDA ecosystem

## Related Cards

- [Jingjia Micro JM9 Series](/docs/cards/others/jingjia-jm9) — Base model of the same series, including the 2021 official announcement's measured figures
- [Innosilicon Fenghua 1](/docs/cards/others/innosilicon-fenghua-1) — Contemporary domestic GPU with server/data center positioning, 5 TFLOPS FP32
- [Moore Threads MTT S5000](/docs/cards/others/moore-threads-mtt-s5000) — Domestic full-function GPU, fellow member of the "Five Tigers of Domestic GPUs"
- [MetaX C600](/docs/cards/others/metax-c600) — Domestic high-end GPU, HBM3e route comparison
- [Alibaba Hanguang 800](/docs/cards/others/alibaba-hanguang-800) — Domestic dedicated AI acceleration route comparison

## References

- [Changsha Jingjia Microelectronics announcement on the R&D progress of its JM9 series graphics processing chips (2021-11-16, SZSE)](https://disc.static.szse.cn/disc/disk02/finalpage/2021-11-16/78a259b8-13f7-4ac5-98d7-4d100fed1df1.PDF)
- [Changsha Jingjia Microelectronics Co., Ltd. (Baidu Baike, with March 2026 volume delivery and ongoing project progress)](https://baike.baidu.com/item/%E9%95%BF%E6%B2%99%E6%99%AF%E5%98%89%E5%BE%AE%E7%94%B5%E5%AD%90%E8%82%A1%E4%BB%BD%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8/19981502)
- [Chinese Vendor Developing PCIe 4.0 GPU With 16GB HBM and GTX 1080-Like Performance (Tom's Hardware, 2019-08-22, original source of the rumored specs)](https://www.tomshardware.com/news/jingjia-micro-chinese-gpu-pcie-4.0-16gb-hbm-gtx-1080-performance,40217.html)
