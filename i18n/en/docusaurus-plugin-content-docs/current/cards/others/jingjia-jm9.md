---
id: jingjia-jm9
title: "Jingjia Micro JM9 Series"
description: "Jingjia Micro's third-generation self-developed GPU, taped out and packaged in 2021-11, with the officially disclosed first chip delivering 1.5 TFLOPS FP32, 8GB memory, 128 GB/s, and power below 30W, targeting Xinchuang desktop and workstation domestic substitution"
keywords: [Jingjia Micro, Jingjia Micro, JM9, JM9231, JM9271, domestic GPU, Xinchuang, graphics processing chip, 300474]
vendor: others
vendor_full: "Changsha Jingjia Microelectronics"
series: "JM9"
release_date: "2021-11"
status: "Mass production"
---

# Jingjia Micro JM9 Series

## Product Overview

**Changsha Jingjia Microelectronics (Jingjia Micro, SZSE 300474)**, founded in 2006, was **the first company in China to successfully develop a domestic GPU chip and achieve large-scale engineering application**. The company started in military graphics display and control, releasing the **JM5400** (2014, 65nm, used to replace AMD/ATI solutions in domestic military aircraft) and the **JM7200** (2018, 28nm, performance roughly equal to the NVIDIA GT 640 but at under 10W) — two generations of GPUs — before entering the civilian Xinchuang market.

The **JM9 series** is Jingjia Micro's **third-generation GPU** and the core achievement of the company's 2018 private-placement funded project, the "High-Performance General-Purpose Graphics Processor R&D and Industrialization Project". On **2021-11-16**, Jingjia Micro officially announced that the JM9 series graphics processing chips had **completed tape-out, packaging, and initial testing**, with key technical specifications meeting design requirements. In **May 2022**, the **second** JM9 series graphics processing chip completed development, targeting desktops, servers, industrial PCs, self-service terminals, and similar equipment.

The publicly named models of the JM9 series are the **JM9231** and **JM9271**: the former targets domestic office PCs, portable computers, mid-to-low-end entertainment devices, and high-end embedded systems; the latter strengthens scientific computing capabilities, aimed at artificial intelligence, security surveillance, speech recognition, cloud computing, and similar directions. The series is widely used in **Xinchuang domestic office replacement projects** across regions, as well as in professional surveying and mapping, geological information processing, industrial computer-aided design, and other scenarios.

As of **March 2026**, Jingjia Micro confirmed on its investor interaction platform that **the JM9 series has achieved volume delivery**; meanwhile, the company's fourth-generation GPU, the **JM11 series**, has launched and entered small-volume shipping, with the JM9 becoming one of the in-service mainstay products.

> ⚠️ **Important Note: Two Circulating Spec Sets Exist Side by Side**
> The widely circulated table of JM9231/JM9271 "2 TFLOPS / 8 TFLOPS FP32, 256/512 GB/s, 150W/200W, comparable to GTX 1050 / GTX 1080" on the internet and in research reports originally comes from **2019 media reports (MyDrivers, Tom's Hardware) and securities research reports**, and is **not an official specification released by Jingjia Micro**. Jingjia Micro representatives have publicly stated that the JM9 series and the GTX 1080 "differ in market position, application characteristics, and focus, and are not comparable".
> The "Core Specifications" table on this page **follows the official figures disclosed in Jingjia Micro's 2021-11-16 formal SZSE announcement**; the rumored specs are listed separately in the comparison table below and clearly flagged.

## Core Specifications

The following are the measured figures for the JM9 series graphics processing chip (first model) **disclosed in Jingjia Micro's official 2021-11-16 announcement**.

| Parameter | Value |
|-----------|-------|
| **Architecture** | JM9 self-developed GPU architecture (unified rendering architecture) |
| **Process Node** | Not disclosed (media reports say 14nm; unconfirmed officially) |
| **FP16 / BF16 Compute** | Not disclosed |
| **INT8 Compute** | Not disclosed |
| **FP32 Compute** | **1.5 TFLOPS** (32-bit single-precision floating point, official announcement) |
| **Pixel Fill Rate** | 32 GPixels/s |
| **Core Clock** | 1.5 GHz (dynamic frequency scaling supported) |
| **Memory Capacity** | 8 GB |
| **Memory Type** | Not disclosed (type not specified in the official announcement) |
| **Memory Bandwidth** | 128 GB/s |
| **TDP** | **< 30 W** (official announcement) |
| **Interconnect** | No multi-card interconnect (single graphics/compute card) |
| **Interface** | PCIe 4.0 x8 |
| **Graphics APIs** | OpenGL 4.0, OpenCL 3.0, Vulkan 1.1, OpenGL ES 3.2, DirectFB 1.7.7, OpenVG 1.1 |
| **Video Decoding** | 4 channels of 4K@60fps (H.265 / H.264 / MPEG2 / MPEG4 hardware decode) |
| **Video Encoding** | 1 channel of 4K@60fps (H.265 / H.264 / MPEG2 / MPEG4 hardware encode) |
| **Display Outputs** | 4 independent display controllers: 4×HDMI 2.0 + 2×eDP + 1×VGA |
| **Platform Support** | x86 / ARM / MIPS + Linux, NeoKylin, Galaxy Kylin, UOS |
| **Launch** | 2021-11 (announcement of tape-out, packaging, and initial testing completion) |
| **Mass Production/Availability** | Second chip completed development in May 2022; **volume delivery officially confirmed in March 2026** |

## Rumored Spec Comparison (Unofficial, For Reference Only)

| Parameter | JM9231 (rumored) | JM9271 (rumored) |
|-----------|------------------|------------------|
| Graphics APIs | OpenGL 4.5 / OpenCL 1.2 | OpenGL 4.5 / OpenCL 2.0 |
| Boost Clock | > 1,500 MHz | > 1,800 MHz |
| Bus Interface | PCIe 3.0 x16 | PCIe 4.0 x16 |
| Memory | 8GB GDDR5 | 16GB HBM |
| Memory Bandwidth | 256 GB/s | 512 GB/s |
| FP32 | 2 TFLOPS | 8 TFLOPS |
| Pixel Fill Rate | > 32 GPixel/s | > 128 GPixel/s |
| TDP | 150 W | 200 W |
| Rumored Competitor | GTX 1050 | GTX 1080 |

> ⚠️ The table above reflects the **figures circulated by media and securities research reports in 2019—2021, never officially confirmed by Jingjia Micro**, and conflicts significantly with the official 2021 announcement figures (1.5 TFLOPS FP32 / 128 GB/s / PCIe 4.0 x8 / &lt;30W). Possible explanations include: the official announcement disclosed a low-power mass-production version while the rumored table described early design targets; or the two correspond to different models within the series. **When citing, be sure to distinguish official figures from rumored ones.**

## Key Features

- **Fully self-developed GPU architecture**: mastery of full-chain key technologies including chip-level logic/physical design, analog interface design, and GPU driver development — not a modified IP-licensed design
- **Full-stack Xinchuang support**: officially supports x86 / ARM / MIPS processors, as well as domestic operating systems such as NeoKylin, Galaxy Kylin, and UOS
- **Extremely low power**: official figure < 30W, supporting fanless/low-cooling designs, suitable for government office terminals and embedded devices
- **Strong multi-display output**: 4 independent graphics display controllers, supporting 4×HDMI 2.0 + 2×eDP + 1×VGA
- **Complete video codec support**: 4 channels of 4K@60 hardware decode + 1 channel of 4K@60 hardware encode
- **Military-grade reliability heritage**: carries forward the high-reliability design experience of the JM5400/JM7200 in demanding aerospace environments
- **GIS/CAD scenario strengths**: deeply adapted with domestic industrial software such as SuperMap, forming a "CPU+GPU+OS+GIS" self-controlled closed loop
- **Limitations**: AI compute (FP16/INT8) never officially disclosed, unsuitable as an AI training or large-model inference card; no single-card interconnect capability

## Vendor Information

| Parameter | Value |
|-----------|-------|
| **Company** | Changsha Jingjia Microelectronics Co., Ltd. (Changsha Jingjia Microelectronics Co., Ltd.) |
| **Headquarters** | Changsha, Hunan Province |
| **Founded** | 2006 |
| **Listing** | Listed on the SZSE ChiNext in March 2016, ticker **300474** |
| **Business** | Integrated circuits (GPUs), signal processing, compute and storage, broadband ad-hoc networking, small radar, electromagnetic spectrum |
| **2025 Revenue** | RMB 720 million |
| **2025 R&D Spend** | RMB 428 million (59.39% of revenue) |
| **R&D Team** | 1,060 people (68% of employees, end of 2025) |
| **Granted Patents** | 165 (as of end of 2025) |
| **GPU Product Line** | JM5 series → JM7 series → **JM9 series** → JM11 series |
| **Official Website** | https://jingjiamicro.com |

## Use Cases

- ✅ Xinchuang domestic office PC / portable computer graphics replacement
- ✅ Desktop terminal domestic substitution in government, finance, transportation, and telecom industries
- ✅ Geographic information systems (GIS), 3D real-scene map rendering
- ✅ CAD-assisted design, industrial drafting, industrial digital twins
- ✅ High-end embedded systems, industrial PCs, self-service terminals
- ✅ Multimedia processing and 4K video encode/decode
- ✅ Military/special display and control equipment (the company's traditional strength)
- ❌ Large-model AI training (no public FP16/BF16 compute, no high-speed interconnect)
- ❌ Large-model inference clusters (8GB memory and 128 GB/s bandwidth insufficient)
- ❌ High-end AAA gaming (graphics API support level and ecosystem limited)
- ❌ CUDA ecosystem workloads (requires re-porting)

## Related Cards

- [Jingjia Micro JM9271](/docs/cards/others/jingjia-jm9271) — High-end model in the same series, oriented toward AI/cloud computing
- [Moore Threads MTT S5000](/docs/cards/others/moore-threads-mtt-s5000) — Fellow domestic full-function GPU, one of the "Five Tigers of Domestic GPUs"
- [Innosilicon Fenghua 1](/docs/cards/others/innosilicon-fenghua-1) — Contemporary domestic GPU with data center/cloud office positioning
- [Innosilicon Fenghua 2](/docs/cards/others/innosilicon-fenghua-2) — Contemporary domestic low-power desktop GPU with positioning highly overlapping the JM9
- [MetaX C600](/docs/cards/others/metax-c600) — Domestic GPU high-compute route comparison

## References

- [Changsha Jingjia Microelectronics announcement on the R&D progress of its JM9 series graphics processing chips (2021-11-16, SZSE)](https://disc.static.szse.cn/disc/disk02/finalpage/2021-11-16/78a259b8-13f7-4ac5-98d7-4d100fed1df1.PDF)
- [Jingjia Micro official website — Integrated circuits (JM5/JM7/JM9 series)](https://jingjiamicro.com/)
- [Jingjia Micro: commercial GPUs urgently need breakthroughs amid the AI boom (Sina Finance, 2023-04-04)](https://finance.sina.com.cn/wm/2023-04-04/doc-imypfafh9822017.shtml)
- [Jingjia Micro Tapes Out JM9-Series GPUs, Aiming for GTX 1080 Performance (Tom's Hardware, 2021-09-15, source of the rumored specs)](https://www.tomshardware.com/news/jingjia-micro-tapes-out-jm9-gpus)
