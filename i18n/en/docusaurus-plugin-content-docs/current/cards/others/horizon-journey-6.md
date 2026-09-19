---
id: horizon-journey-6
title: "Horizon Journey 6 (Journey 6)"
description: "Horizon's fourth-generation flagship automotive compute platform: BPU Nash architecture, TSMC 7nm, 37 billion transistors, Journey 6P at 560 TOPS INT8 and 65W, 18-core A78AE, LPDDR5x 204GB/s, four-in-one CPU+BPU+GPU+MCU, supporting one-stage end-to-end and cockpit-driving integration."
keywords: [Horizon Robotics, Horizon Robotics, Journey 6, Journey 6, J6P, J6M, BPU, Nash, Nash, 560 TOPS, 7nm, cockpit-driving integration, urban NOA, HSD, ASIL-D]
vendor: others
vendor_full: "Horizon Robotics"
series: "Journey"
release_date: "2024-04"
status: "Mass production"
---

# Horizon Journey 6 (Journey 6)

## Product Overview

The **Journey 6 (Journey 6 / J6)** is **Horizon Robotics'** fourth-generation automotive-grade intelligent computing solution series, **first officially announced at the Guangzhou auto show in November 2023**, **officially released in April 2024**, with **the first batch of mass-production models delivered in Q4 2024**, and **large-scale mass production announced on February 8, 2025**. It is the industry's first solution series to cover the **full range of needs** from basic active safety to full-scenario urban assisted driving with a **unified BPU Nash compute architecture**.

The Journey 6 series is tiered by compute into **6B / 6L / 6E / 6M / 6H / 6P**: the **6B** (10+ TOPS, entry active safety, cost-focused, for 100,000–200,000 RMB vehicles), the **6E** (about 80 TOPS) and **6M** (128 TOPS, accessible urban NOA), the **6H** (about 420 TOPS), and the flagship **6P (560 TOPS, full-scenario flagship)**. The 6E/6M meet the AEC-Q104 standard.

The **flagship Journey 6P** uses the **TSMC 7nm** process, integrating **37 billion transistors**, an **18-core Arm Cortex-A78AE (410k DMIPS)**, and a **4-core BPU Nash architecture**, with AI compute of **560 TOPS (INT8)**, power of **65W**, energy efficiency of **8.6 TOPS/W**, and memory of **192-bit LPDDR5x-8533 at 204 GB/s bandwidth**. Its ISP supports **24 channels of 4K** (5.3 GP/s), accepting front-view cameras up to 18 megapixels, plus millimeter-wave radar and LiDAR. The 6P achieves **"four chips in one" of CPU + BPU + GPU + MCU**: the integrated MCU delivers more than 3.5× the compute of mainstream ASIL-D MCUs in smart driving scenarios; image processing bandwidth is about 3× mainstream competitors with 80% lower latency. Through integration with **BlackBerry QNX SDP 8.0**, the solution is certified by TÜV Rheinland and meets **ISO 26262 ASIL-D**; system end-to-end latency is below **160ms**, supporting a **true one-stage end-to-end architecture**.

The Nash architecture is **designed for large-parameter Transformers and large-scale interactive gaming**: by third-party evaluation, the Journey 6P improves FPS several-fold on CNN-class algorithms such as ResNet-18 and **about 10× on Transformer-class algorithms such as Swin Base** (versus mainstream competitors); official research-report figures cite about 17× FPS improvement on Transformer models versus competitors, and FPS per dollar at about 4–12× that of competitors. Hardware utilization is about 90%.

**Market adoption**: The Journey 6P debuted in Horizon's **HSD urban assisted driving system**, world-premiering in the **Chery Exlantix ET5** (in mass production from September 2025); HSD comes in three tiers: HSD 300 (dual 6M) / HSD 600 (single 6P) / HSD 1200 (dual 6P). The mid/low-tier 6E/6M/6B already power over 100 models such as the Changan Qiyuan Q05 and the BYD Qin PLUS smart driving edition; BYD's "God's Eye C" (DiPilot 100) uses the Journey 6M. **As of August 2025, the Journey series has shipped over 10 million units cumulatively**; in Q1 2025 the Journey family led China's smart driving computing solutions with a **33.97% market share**. Bosch's fourth-generation multifunction camera platform based on the Journey 6B is scheduled for production in 2026.

## Core Specifications

> The table below reflects the flagship **Journey 6P**; other series models are covered in the "Series Models" section.

| Parameter | Value |
|------|------|
| **Architecture** | Horizon BPU Nash (fourth-generation BPU), 4-core BPU; four-in-one CPU+BPU+GPU+MCU SoC |
| **Process Node** | TSMC 7nm; **37 billion transistors** |
| **CPU** | 18 × Arm Cortex-A78AE, **410k DMIPS** |
| **FP16 / BF16 Compute** | Not disclosed (officially only INT8 equivalent compute is published) |
| **INT8 Compute** | **560 TOPS** (Journey 6P) |
| **FP32 Compute** | Not disclosed |
| **Memory Capacity** | Not disclosed (configured with the domain controller solution) |
| **Memory Type** | **LPDDR5x-8533, 192-bit** |
| **Memory Bandwidth** | **204 GB/s** |
| **TDP** | **65 W** (Journey 6P); energy efficiency **8.6 TOPS/W** |
| **Interconnect** | Multi-chip solution cascading (HSD 1200 uses dual 6P); inter-chip interconnect details undisclosed |
| **Interface** | SoC onboard (smart driving / cockpit-driving domain controller); integrated ASIL-D MCU |
| **ISP** | **24 channels of 4K**, 5.3 GP/s; supports front-view cameras up to 18MP, millimeter-wave radar, and LiDAR |
| **Functional Safety** | ISO 26262 **ASIL-D** (with QNX SDP 8.0, TÜV Rheinland certified); AEC-Q100 Grade 2 |
| **System Latency** | < 160 ms (one-stage end-to-end) |
| **Hardware Utilization** | About 90% |
| **Launch** | **2024-04** (officially announced at the Guangzhou auto show, 2023-11) |
| **Mass Production/Availability** | First series deliveries 2024-Q4, **large-scale mass production 2025-02**; **Journey 6P in mass production 2025-Q3 (around 2025-09)**, debuting in the Chery Exlantix ET5 |

### Series Models

| Model | AI Compute (INT8) | CPU Performance | Process | Positioning |
|------|----------------|----------|------|------|
| **Journey 6B** | 10+ TOPS | 20k+ DMIPS | Not disclosed | Entry active-safety ADAS, 100,000–200,000 RMB vehicles |
| **Journey 6L** | Not disclosed | Not disclosed | Not disclosed | Entry assisted driving |
| **Journey 6E** | About 80 TOPS | About 100k DMIPS | 7nm | Extreme highway NOA (high cost-effectiveness) |
| **Journey 6M** | 128 TOPS | About 137k DMIPS | 7nm | Accessible urban NOA (single J6M urban solution) |
| **Journey 6H** | About 420 TOPS | Not disclosed | 7nm | Mid-to-high full-scenario |
| **Journey 6P** | **560 TOPS** | 410k DMIPS | 7nm | Full-scenario flagship, advanced urban NOA / cockpit-driving integration |

> ⚠️ **Specification uncertainty**: Within the Journey 6 series, **only the 6P's full hardware parameters (transistor count, CPU cores, memory width/bandwidth, ISP channels) have relatively detailed third-party disclosures**; the process, memory, and power of the 6B/6L/6E/6M/6H are mostly not published individually by the vendor. The compute and DMIPS figures for the 6E/6M/6H in the table come from third-party spec aggregations (AlfaWiki) and broker research, **pending official confirmation**. Horizon publishes "equivalent compute / INT8 compute" and **has not disclosed FP16/BF16/FP32 floating-point compute**. Memory capacity is selected by domain controller vendors per solution; the chip only defines the interface.

## Key Features

- **BPU Nash architecture**: designed for **large-parameter Transformers and large-scale interactive gaming**, with Transformer-class algorithm FPS improved by roughly an order of magnitude (about 10×) versus mainstream competitors
- **Four chips in one (CPU + BPU + GPU + MCU)**: a single SoC completes perception, planning and decision-making, control, and cockpit perception full-stack computing, reducing BOM and deployment difficulty
- **Greatly strengthened CPU compute**: 18-core Cortex-A78AE / 410k DMIPS, directly answering the Journey 5 era's lesson of "underestimated CPU compute"
- **7nm + 37 billion transistors**: a benchmark of advanced process and integration among Chinese automotive smart driving chips
- **One-stage end-to-end support**: system latency &lt;160ms, supporting a single model spanning scenario processing (the HSD solution uses an end-to-end architecture)
- **ASIL-D functional safety**: integrated MCU + QNX SDP 8.0, TÜV Rheinland certified
- **Full-range coverage**: from the 10+ TOPS 6B to the 560 TOPS 6P with a unified architecture and toolchain, letting automakers reuse software assets platform-wide
- **High image processing capability**: 24-channel 4K ISP with about 3× competitors' bandwidth and 80% lower latency
- **Cost competitiveness**: FPS per dollar about 4–12× mainstream competitors (official/research-report figures)
- **Scaled ecosystem**: Journey series shipments exceeded 10 million units cumulatively; over 40 automaker brands and over 100 models; Tier 1 partnerships including Bosch, Denso, Zhuoyu, QCraft, and Carizon

## Vendor Information

| Item | Details |
|------|------|
| **Company** | Beijing Horizon Robotics Technology Co., Ltd. / Horizon Robotics (HKEX 9660.HK) |
| **Headquarters** | Beijing, China |
| **Founded** | 2015 |
| **Founder / CEO** | Yu Kai |
| **Co-founder / CTO** | Huang Chang |
| **BPU Architecture Generations** | Gauss → Bernoulli → Bayesian → **Nash** → Riemann (Journey 7 planned) |
| **Key Customers** | BYD, Li Auto, Volkswagen, Chery, SAIC, Changan, GAC, BAIC, Geely, Leapmotor, Dongfeng, and 40+ other brands |
| **Tier 1 Partners** | Bosch, Denso, Continental, Valeo, ZF, Luxshare, Huaqin, Tianzhun, Zhuoyu, QCraft |
| **Website** | https://www.horizon.auto |

## Use Cases

- ✅ Urban NOA / advanced urban assisted driving (single-chip 6P, accessible 6M solution)
- ✅ One-stage end-to-end / BEV + Transformer / VLA-class large model edge deployment
- ✅ Cockpit-driving integration and cross-domain fusion central computing (four chips in one)
- ✅ L3 assisted driving R&D and mass production (dual 6P HSD 1200)
- ✅ Entry active-safety ADAS (6B, for 100,000–200,000 RMB and even sub-100,000 RMB vehicles)
- ✅ Highway NOA + smart parking (APA / HPA)
- ✅ Vehicle smart driving platforms with ASIL-D functional safety requirements
- ❌ Data center large model training (an automotive edge inference SoC, not a training chip)
- ❌ Scenarios requiring high-precision FP32/FP64 scientific computing
- ❌ General cloud AI inference services (no PCIe card form factor, no multi-card cluster interconnect ecosystem)

## Related Cards

- [Horizon Journey 5](/docs/cards/others/horizon-journey-5) — Same vendor's previous-generation flagship, 128 TOPS Bayesian architecture, the direct predecessor of the 6P
- [Horizon Journey 3](/docs/cards/others/horizon-journey-3) — Same vendor's previous mid/low-tier generation, now succeeded by the 6B/6L
- [Horizon Journey 2](/docs/cards/others/horizon-journey-2) — Same vendor's first automotive-grade mass-production chip
- [Black Sesame Huashan A2000](/docs/cards/others/blacksesame-a2000) — Direct Chinese competitor, 7nm Jiushao NPU, up to 1000 TOPS
- [Black Sesame Huashan A1000](/docs/cards/others/blacksesame-a1000) — Previous-generation Chinese automotive competitor, 58 TOPS
- [NVIDIA DRIVE Thor](/docs/cards/nvidia/drive-thor) — International flagship automotive platform, the main international benchmark for the Journey 6P
- [Moore Threads MTT S5000](/docs/cards/others/moore-threads-mtt-s5000) — Chinese data center GPU, a compute contrast between training-side and in-vehicle inference-side

## References

- [Journey 6 (Baidu Baike, includes announcement/launch/mass production timeline, Nash architecture and ASIL-D notes)](https://baike.baidu.com/item/%E5%BE%81%E7%A8%8B6/63739720)
- [2025 Horizon Robotics (9660.HK) company research report: Journey 6 series mass production and the smart driving equality opportunity (San ge Pijiang Reports, includes 6P 560TOPS/65W/8.6TOPS·W⁻¹ parameters)](https://www.sgpjbg.com/info/adfcc9612380fdaab9949a418ae2b279.html)
- [Horizon Robotics Journey series consolidated specification table (AlfaWiki, includes 6P transistor count, 18-core A78AE, LPDDR5x 204GB/s, 24×4K ISP)](http://www.alfawiki.org/Horizon_Robotics)
