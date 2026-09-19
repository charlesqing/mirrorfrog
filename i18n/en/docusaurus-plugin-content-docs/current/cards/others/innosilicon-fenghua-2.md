---
id: innosilicon-fenghua-2
title: "Innosilicon Fenghua 2"
description: "Innosilicon's second-generation domestic GPU, released on 2022-08-03, with 1.5 TFLOPS FP32, 48 GPixel/s, 12.5 TOPS(INT8) AI compute, typical power of only 4~15W, LPDDR5X memory, and support for 4K triple-display output and fanless designs"
keywords: [Innosilicon, Innosilicon, Fenghua 2, Fenghua 2, domestic GPU, LPDDR5X, low-power GPU, Xinchuang, 4K triple display, edge AI]
vendor: others
vendor_full: "Innosilicon"
series: "Fenghua"
release_date: "2022-08"
status: "Mass production"
---

# Innosilicon Fenghua 2

## Product Overview

**Fenghua 2 (Fenghua No.2)** is **Innosilicon's** second-generation self-developed GPU, **released in Wuhan on 2022-08-03**. Unlike the 2021 Fenghua 1, which targeted high-performance data centers, Fenghua 2's core goals shifted to **versatility and ultra-low power**: the chip adopts a full set of Innosilicon's own IPs, with FP32 floating-point compute of **1.5 TFLOPS**, texture/pixel fill rate of **48 GTex/s (48 GPixel/s)**, and AI compute of **12.5 TOPS (INT8)**, while **typical operating power is only 4~15W**, as low as about 4W at minimum. It can be designed as a **passively cooled (fanless)** structure and can also be used in laptops and MXM all-in-ones.

Fenghua 2 is a **4K-class high-performance rendering GPU** that integrates **ultra-low power, HD triple-display output, and intelligent AI edge computing**, with built-in AI and floating-point compute cores supporting scientific and edge computing. The chip supports Innosilicon's own **LPDDR5X memory technology** (also compatible with LPDDR5/4X/4), can drive **4K@60Hz triple independent displays**, and integrates physical unclonable function (PUF) security technology and hardware virtualization.

On the domestic ecosystem front, Fenghua 2 has completed mutual certification with domestic operating systems such as **UOS, Kylin (Galaxy Kylin, NeoKylin)**, and supports domestic CPU platforms including **Phytium, Loongson, Sunway, Hygon, Zhaoxin, and Kunpeng**, while remaining compatible with mainstream Intel / AMD x86 CPUs and systems such as Windows and Ubuntu. It scored **over 6500 in the GLmark2 benchmark on Kylin OS** and passed the heavy Unigine Heaven benchmark. Launch demonstrations covered scenarios such as Kingsoft WPS, ZWCAD, GIS, glmark, a racing game, and Windows 10 office and entertainment use.

**Commercial traction**: on launch day, Innosilicon signed procurement agreements worth a total of **RMB 500 million** with companies including China Energy Engineering Investment and UnionTech (UOS), covering "Eastern Data, Western Computing" project orders and Xinchuang industry demand; in September 2023 it formed a strategic partnership with SAHC to advance Fenghua 2 in industrial applications. Fenghua 2 won the "2022 Hardcore China Chip — Best Processor Chip" award.

> ⚠️ **Positioning Clarification**
> Some sources classify Fenghua 2 as a "server/data center-class GPU". According to Innosilicon's official announcements and multiple media reports, **Fenghua 2's primary positioning is an ultra-low-power desktop / laptop / industrial PC / embedded GPU** (typical power 4~15W, PCIe 3.0 x8, LPDDR5X memory up to 8GB). The official materials also mention it can "provide 4K-class rendering support to aid data center computing", but **the server/data center-class high-performance positioning belongs to Fenghua 1 (5 TFLOPS FP32, GDDR6X, up to 16GB, 304 GB/s), not Fenghua 2**. This page follows the official low-power desktop positioning.

## Core Specifications

| Parameter | Value |
|-----------|-------|
| **Architecture** | Innosilicon proprietary GPU architecture (full set of self-developed IPs, self-developed controllable core evolution) |
| **Process Node** | Not disclosed |
| **FP16 / BF16 Compute** | Not disclosed |
| **INT8 Compute** | **12.5 TOPS** |
| **FP32 Compute** | **1.5 TFLOPS** |
| **Texture/Pixel Fill Rate** | **48 GTex/s / 48 GPixel/s** |
| **Memory Capacity** | 2GB / 4GB / 8GB |
| **Memory Type** | **LPDDR5X / LPDDR5 / LPDDR4X / LPDDR4** (Innosilicon's own LPDDR5X technology), GDDR6 option also available |
| **Memory Bandwidth** | Not disclosed |
| **TDP** | **Typical power 4~15 W** (measured; supports high-performance and low-power modes; passive cooling possible) |
| **Interconnect** | Not disclosed (no multi-card interconnect solution) |
| **Interface** | **PCIe 3.0 x8** |
| **Display Outputs** | HDMI 2.0 ×2, DP 1.4 ×1, VGA ×1, LVDS ×1; supports **4K@60Hz triple independent displays** |
| **Graphics APIs** | OpenGL 4.2, OpenGL ES 3.2, Vulkan 1.2, DirectX 11 |
| **Compute APIs** | OpenCL 3.0 |
| **AI Frameworks** | Caffe, TensorFlow, PyTorch |
| **Video Capability** | 4K hardware video decoding |
| **Virtualization** | Hardware virtualization, multiple operating systems running simultaneously |
| **Security** | Built-in physical unclonable function (PUF) security technology |
| **Benchmark Results** | GLmark2 **> 6500** on Kylin OS; passed the heavy Unigine Heaven test |
| **Launch** | **2022-08-03** (Wuhan launch event) |
| **Mass Production/Availability** | In mass production and commercial use; RMB 500 million in procurement agreements signed on launch day (China Energy Engineering Investment, UOS, etc.) |

## Key Features

- **Industry-leading energy efficiency**: runs office, gaming, CAD, and glmark smoothly at operating power as low as about 4W, with energy efficiency far better than products of similar compute; fanless designs, laptops, and MXM all-in-ones supported under appropriate conditions
- **4K triple independent display output**: HDMI 2.0×2 + DP 1.4 + VGA + LVDS, meeting industrial and multi-screen office needs
- **Self-developed LPDDR5X memory technology**: low-power high-bandwidth memory IP, extending Innosilicon's core advantage in memory interface IP
- **Fully domestic board BOM**: memory, power management, and other components on the board are all domestically sourced; cross-process, cross-package design ensures supply chain security
- **Among the broadest Xinchuang ecosystem support**: mutually certified with UOS and Kylin; supports six domestic CPU platforms — Phytium, Loongson, Sunway, Hygon, Zhaoxin, and Kunpeng
- **Built-in AI + floating-point compute cores**: 12.5 TOPS (INT8) AI compute, supporting scientific computing and edge AI inference
- **Hardware virtualization**: multiple operating systems running simultaneously
- **PUF hardware security**: physical unclonable function technology, anti-cloning and anti-tampering
- **Well-validated commercially**: RMB 500 million in orders on launch day, covering "Eastern Data, Western Computing" and Xinchuang projects
- **Limitations**: 1.5 TFLOPS FP32 is entry-level; PCIe 3.0 x8 interface bandwidth is limited; max 8GB memory; memory bandwidth not disclosed; no large-model training/inference capability

## Vendor Information

| Parameter | Value |
|-----------|-------|
| **Company** | Innosilicon |
| **Headquarters** | Wuhan, Hubei Province (East Lake High-Tech Development Zone); R&D centers in Zhuhai, Suzhou, Xi'an, Beijing, Shanghai, Shenzhen, Dalian, and Chengdu |
| **Founded** | **2006** (founder Ao Hai) |
| **R&D Scale** | R&D team of over one thousand; thousands of core IPs; 200+ global core patents |
| **Mass Production Accumulation** | Over 300 advanced-process tape-outs; supported mass production of over **10 billion** high-end SoC chips |
| **Process Coverage** | 55nm — 3nm, covering TSMC / Samsung / SMIC / GlobalFoundries / UMC / Intel / Huali |
| **Fenghua 2 Development Lead** | Led by Innosilicon VP Mao Mingming; algorithm team led by chief algorithm scientist Dr. Yang Xile (former Imagination architect) |
| **Business Status** | Profitable for consecutive years, not reliant on external financing; preparing for a STAR Market IPO |
| **Fenghua Series Evolution** | Fenghua 1 (2021-11, data center class) → **Fenghua 2 (2022-08, low-power desktop class)** → Fenghua 3 (2025-09, full-function GPU integrating a RISC-V CPU with a CUDA-compatible GPU) |
| **Official Website** | https://www.innosilicon.com.cn |

## Use Cases

- ✅ Xinchuang office desktop graphics (supports WPS, ZWCAD, and other domestic office and engineering software)
- ✅ Industrial equipment (financial terminals, rail transit terminals, and other industrial environments)
- ✅ Embedded display and compute (smart terminals, in-vehicle systems)
- ✅ Fanless / passively cooled low-power systems, laptops, MXM all-in-ones
- ✅ Edge AI inference (12.5 TOPS INT8)
- ✅ 4K triple-display multi-monitor office and surveillance walls
- ✅ Desktop virtualization (hardware virtualization with multiple parallel systems)
- ❌ Large-model AI training (1.5 TFLOPS FP32, no HBM, no interconnect)
- ❌ Large-model inference (max 8GB memory)
- ❌ High-density data center cloud rendering (choose Fenghua 1 instead)
- ❌ High-end AAA gaming and professional real-time rendering
- ❌ Direct migration from the CUDA ecosystem

## Related Cards

- [Innosilicon Fenghua 1](/docs/cards/others/innosilicon-fenghua-1) — Previous generation in the same series, with a data center/server-class high-performance positioning
- [Jingjia Micro JM9 Series](/docs/cards/others/jingjia-jm9) — The closest-positioned domestic competitor (Xinchuang desktop, &lt;30W, 8GB, 1.5 TFLOPS FP32)
- [Jingjia Micro JM9271](/docs/cards/others/jingjia-jm9271) — Domestic high-end GPU comparison
- [Moore Threads MTT S5000](/docs/cards/others/moore-threads-mtt-s5000) — Domestic full-function GPU, high-compute route comparison
- [MetaX C600](/docs/cards/others/metax-c600) — Domestic high-end GPU comparison

## References

- [Fenghua 2 (Baidu Baike, with launch date, compute, power, and order information)](https://baike.baidu.com/item/%E9%A3%8E%E5%8D%8E2%E5%8F%B7/61773945)
- [Innosilicon releases "Fenghua 2" GPU, capable of fanless design with triple 4K display support (EXPreview, 2022-08-03, with full interface and API specs)](https://m.expreview.com/84365.html)
- [Bringing Fenghua GPUs into millions of households, Innosilicon empowers smart living (EEWorld, official positioning of product performance and technical innovation)](https://news.eeworld.com.cn/mp/fc/a142374.jspx)
