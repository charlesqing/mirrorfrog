---
title: "NVIDIA Rubin Ultra (V300)"
description: "NVIDIA Rubin Ultra (V300) preview: flagship-enhanced Rubin architecture, originally a 4-die design with 576GB HBM4e and NVL144 racks. ⚠️ Architecture under revision: the 4-die design was cancelled, and a 2026-09 report says memory may drop to 192GB HBM4. Specs pending final official confirmation."
id: rubin-ultra
date: "2026-03-17"
vendor: "nvidia"
category: "Data Center GPU"
---

# NVIDIA Rubin Ultra (V300)

## Product Overview

**NVIDIA Rubin Ultra (codename V300)** is the **flagship-enhanced** variant of the Rubin architecture, announced at **GTC 2026 (2026-03-17)** alongside Rubin R200 and positioned as the top product for hyperscale training/inference. The original design uses a **4-die MCM package** with **576GB HBM4e** per card, expandable via **NVL144** racks to **144 GPUs** — NVIDIA's flagship answer for sovereign AI and yotta-scale clusters.

> ⚠️ **Architecture revision notice**: According to SemiAnalysis, the original 4-die Rubin Ultra design has been **cancelled** due to packaging manufacturing difficulty; the new version is scaled down to roughly half the size, with performance halved accordingly. The specs below are based on **originally published information**; **final production specs are subject to NVIDIA's official announcements**.
>
> 📌 **2026-09 spec-cut report (SemiAnalysis / STAR Market Daily)**: Rubin Ultra's HBM configuration may be **downgraded from HBM4E 12-Hi (384GB tier) to HBM4 8-Hi (192GB)**, with Samsung co-developing the 8-high product. The driver: after HBM/DRAM price hikes, **memory already accounts for roughly 40% of total system TCO**; the downgrade cuts HBM cost by more than 50%, and the saved budget shifts to the **Scale-up network** — under an NVL576 NPO scheme, the Scale-up network's share of rack spending rises from 4% to 12%. TrendForce also shows NVIDIA evaluating HBM4E 8-Hi / HBM4E 12-Hi / HBM4 8-Hi options in parallel from 2026 Q3. Final configuration subject to official announcements.

## Core Specifications (original design, pending final official confirmation)

| **Spec** | **Value** |
|---------|---------|
| **GPU Architecture** | Rubin architecture (MCM multi-chip module) |
| **Package** | Original 4-die design (⚠️ under revision) |
| **Process** | Presumed TSMC 3nm (same as Rubin R200) |
| **FP4 Inference Compute** | Presumed ~100 PFLOPS (original, dense) |
| **FP8 Training Compute** | Presumed ~70 PFLOPS (original) |
| **Memory Capacity** | **576 GB HBM4e** (original design) |
| **Memory Type** | HBM4e |
| **Memory Bandwidth** | Presumed >44 TB/s (HBM4e) |
| **Interconnect** | NVLink 7 (presumed, >3.6 TB/s unidirectional) |
| **TDP** | Presumed 3000W+ (liquid cooling mandatory) |
| **Announced** | March 17, 2026 (GTC 2026) |
| **Mass Production** | Presumed 2027 H2 - 2028 (original timeline) |
| **Pricing** | Presumed $15-21 million per NVL144 rack |

## Comparison with Rubin R200

| **Item** | **Rubin R200** | **Rubin Ultra (original)** |
|-----------|----------------|------------------------|
| GPUs/rack | 72 (NVL72) | **144 (NVL144)** |
| Memory/GPU | 288 GB HBM4 | **576 GB HBM4e** |
| HBM/rack | 20,736 GB | **82,944 GB** |
| Mass production timing | 2026 H2 | **2027 H2 - 2028** |
| Positioning | Volume workhorse | **Flagship-enhanced** |

> **NVL144 rack**: Rubin Ultra forms racks of 144 GPUs with 82,944 GB of total HBM — 4x the memory capacity of NVL72 (Rubin R200).

## Platform Configuration (original NVL144)

- **144** Rubin Ultra GPUs
- **72** Vera CPUs (presumed)
- **Total memory**: 82.9 TB HBM4e
- **Total compute**: Presumed ~14 EFLOPS FP4 (original)
- **TDP**: Presumed ~360kW (full liquid cooling mandatory)
- **Mass production**: Presumed from 2027 H2

## Mass Production and Delivery (original timeline)

- **GTC 2026**: Announced alongside Rubin R200
- **Mass production**: Presumed 2027 H2 - 2028 (later than Rubin R200's 2026 H2)
- **⚠️ Revision risk**: SemiAnalysis reports the original 4-die design has been cancelled; the new version's specs and schedule may change

## Use Cases

Rubin Ultra targets **hyperscale data centers and sovereign AI clusters**, suited for:
- Ten-trillion-parameter LLM training
- yotta-scale AI factories
- Ultra-long-context inference (576GB memory per card)
- National-scale AI infrastructure

## References

- NVIDIA GTC 2026 keynote (Rubin Ultra announcement)
- SemiAnalysis: Rubin Ultra's original 4-die design cancelled; new version scaled down by about half
- SemiAnalysis / STAR Market Daily (2026-09): Rubin Ultra memory may be cut from the 384GB tier to 192GB HBM4, with budget shifted to Scale-up optical interconnect
- Industry supply chain analysis (Foxconn): V300 576GB HBM4e / 144-GPU rack, $21,000/rack

## Related Products

- [NVIDIA Rubin R200](/docs/cards/nvidia/rubin-r200) - Same-generation volume GPU
- [NVIDIA Rubin CPX](/docs/cards/nvidia/rubin-cpx) - Inference-optimized variant
- [AMD MI455X](/docs/cards/amd/mi455x) - Same-generation competitor
- [Full comparison table](/docs/comparison)
