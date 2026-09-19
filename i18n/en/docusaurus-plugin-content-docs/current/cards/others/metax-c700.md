---
id: metax-c700
title: MetaX Xiyun C700
sidebar_label: Xiyun C700
description: "The MetaX Xiyun C700 next-generation training flagship GPU (in development) adopts a new-generation GPU architecture targeting the NVIDIA H100, with extended FP4 low-precision support and domestic advanced process, with most specifications undisclosed."
keywords: [MetaX Xiyun C700, MetaX C700, training GPU, H100 benchmark, FP4, domestic advanced process, in development, not disclosed]
vendor: others
vendor_full: "MetaX"
series: "Xiyun (C Series)"
release_date: "2025"
status: "In development"
---

# MetaX Xiyun C700

## Product Overview

The **MetaX Xiyun C700** is the **next-generation training flagship GPU** of MetaX's **Xiyun C series**, with **development initiated in 2025**. It adopts a **new-generation GPU architecture and instruction set** (not the C600's XCORE 1.5), targets **performance approaching the NVIDIA H100**, and further **extends support for lower-precision computing such as FP4** to meet the mixed-precision training needs of next-generation large models. Compared with the mass-produced C600, the C700 delivers major improvements in compute, memory, communication, and energy efficiency, and is developed on a **higher-node domestic advanced process**.

According to MetaX's IPO prospectus and securities research reports, **the C700 project represents a total investment of about RMB 2.04 billion**; core design and functional verification are largely complete, with **tape-out testing expected in 2026 and mass production in the second half of 2027**. It is the key test of MetaX's architectural iteration capability, and its mass-production arrival would mean MetaX formally enters the ranks of global high-end GPU competitors.

## Core Specifications

| Parameter | Value |
|-----------|-------|
| **Architecture** | **New-generation GPU architecture and instruction set** (not XCORE 1.5) |
| **Process Node** | Higher-node **domestic advanced process** (specific node not disclosed) |
| **FP32 Compute** | Not disclosed (targets H100-class performance) |
| **FP16 / BF16 Compute** | Not disclosed |
| **FP8 Compute** | Not disclosed (expected support, further improved over the C600) |
| **FP4 Compute** | Extended support (new-generation low precision, specifics not disclosed) |
| **INT8 Compute** | Not disclosed |
| **Memory Capacity** | Not disclosed |
| **Memory Type** | Not disclosed (expected HBM3e or higher) |
| **Memory Bandwidth** | Not disclosed |
| **TDP** | Not disclosed |
| **Interconnect** | MetaXLink high-speed inter-card interconnect (expected to support larger-scale supernodes) |
| **Interface** | Not disclosed (expected PCIe 5.0 / CXL, etc.) |
| **Launch** | 2025 (development initiated) |
| **Mass Production/Availability** | Tape-out expected 2026, mass production expected H2 2027 (in development) |

> ⚠️ **Specification Notes**: The C700 is currently **in development** and **MetaX has not published any complete specifications**. Information such as "targets the H100", "extended FP4", "domestic advanced process", and "2026 tape-out / H2 2027 mass production" comes from MetaX's IPO prospectus and public research reports by Donghai Securities / Huachuang Securities. All compute, memory, bandwidth, and power fields are **not disclosed** and should not be treated as released specifications.

## Key Features (Planned Direction)

- **H100 benchmark**: targets performance approaching the NVIDIA H100, entering the global high-end GPU ranks
- **New-generation architecture**: a brand-new GPU architecture and instruction set, iterating beyond XCORE 1.5
- **FP4 low precision**: extended lower-precision computing for next-generation large-model mixed-precision training
- **Domestic advanced process**: built on a higher-node domestic process, improving compute/energy efficiency
- **Supernode scaling**: works with MetaXLink and the Xijing S supernode, evolving toward 10,000-card clusters

## Vendor Information

| Parameter | Value |
|-----------|-------|
| **Company** | MetaX Integrated Circuits (Shanghai) Co., Ltd. |
| **Headquarters** | Shanghai |
| **Founded** | 2020-09 |
| **Listing** | STAR Market 688802 |
| **R&D Investment** | Total C700 project investment of about RMB 2.04 billion (IPO prospectus) |

## Use Cases

- ✅ **Large-model training** (H100 benchmark, planned positioning)
- ✅ **Large-scale intelligent computing centers** (supernode clusters)
- ✅ **Next-generation mixed-precision training (FP4/FP8)**
- ❌ No product currently on sale (in development, specs undetermined)
- ❌ Selection reference must await official tape-out/mass-production data

## Latest Development Progress (2026-09-14 Interim Results Briefing)

MetaX updated the C700's progress at its **2026 interim results briefing**:

| Parameter | Latest Status |
|-----------|---------------|
| **Current Status** | **Core design and functional verification near completion** |
| **Next Steps** | Advancing **tape-out → software adaptation → customer testing → mass-production introduction** |
| **Project Initiation** | April 2025 |
| **Performance Target** | Overall performance **benchmarked against the NVIDIA H100** |
| **New Precision** | **Added support for low-precision computing such as FP4** (for large-model inference) |
| **Supply Chain** | Reliable **domestic solutions** for wafer foundry, packaging, and high-capacity memory, building a **closed domestic supply chain loop** from design → manufacturing → packaging and testing |
| **R&D Strategy** | Adhering to "**mass-produce one generation, develop one generation, plan one generation**" |
| **Expected Milestones** | Tape-out testing in 2026, **mass production in the second half of 2027** |

> 📌 **Same-Generation Product Comparison**: The **Xiyun C600**, based on the domestic 7nm process, **entered mass production in May 2026**, equipped with 144GB HBM3e and FP8 compute of about 1,000 TFLOPS, and has completed national security and stability testing. The proprietary **MetaXLink** high-speed interconnect has been applied at 1,000-card scale with bandwidth approaching H100 levels, and 10,000-card-scale deployment is underway.

> **Key Insight**: The C700's core selling point is not just "matching the H100" but **supply chain self-sufficiency** — MetaX CTO and chief hardware architect Peng Li explicitly stated that the company has domestic solutions for key links such as wafer foundry, packaging, and high-capacity memory, and that "even if geopolitical tensions intensify in the future, the impact on the company will be limited". In 2026, with HBM constrained and channel prices up 20~30% in three months, that statement carries more weight than any compute figure.

## Related Cards

- [MetaX Xiyun C600](/docs/cards/others/metax-c600) — Flagship on sale (XCORE 1.5, HBM3e, mass-produced in 2026)
- [MetaX Xiyun C500](/docs/cards/others/metax-c500) — Mass-production workhorse (XCORE 1.0)
- [MetaX Xiyun C290](/docs/cards/others/metax-c290) — Early XCORE 1.0 model
- [Biren BR100](/docs/cards/others/biren-br104) — Domestic general-purpose GPU competitor

## References

- [Donghai Securities · MetaX in-depth report (C600/C700 performance comparison and mass-production cadence)](https://www.sgpjbg.com.cn/labels/muxigufenxiyunc600liangchanjinzhan/1/6876892.html)
- [Huachuang Securities · MetaX research report (C700 initiation/tape-out/mass-production milestones)](https://www.sgpjbg.com/info/a38ddb7aa7c49c0b8ea4cc4beff76c43.html)
- [MetaX official website · Products and solutions](https://www.metax-tech.com/)
