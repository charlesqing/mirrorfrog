---
id: mtia-400
title: Meta MTIA 400 (Custom AI Accelerator · Recommendation + GenAI Dual Mandate)
sidebar_label: MTIA 400
description: "Meta MTIA 400 custom AI accelerator: 12 PFLOPS FP4, fully chipletized (2 compute dies + 1 SoC die + 2 network dies + HBM), 15x the FP16 compute of the MTIA 200, expanding from recommendation systems to generative AI for the first time."
keywords: [Meta MTIA, MTIA 400, custom silicon, recommendation systems, GenAI, chiplet, Broadcom, Hot Chips 2026]
vendor: meta
vendor_full: "Meta"
series: "MTIA Series"
release_date: "2026"
status: "Announced"
---

# Meta MTIA 400 (Custom AI Accelerator · Recommendation + GenAI Dual Mandate)

## Product Overview

**MTIA 400** is the fourth generation of Meta's custom MTIA AI accelerator family, systematically disclosed for the first time at **Hot Chips 2026** (2026-08-23~25).

The biggest change in this generation is the **mandate expansion**: from its inception, MTIA served only the single workload of **Recommendation & Ranking**; the MTIA 400 also takes on **generative AI (GenAI)**, becoming a "**recommendation + GenAI dual-mandate**" chip. Meta's production figure given in the talk: **hundreds of thousands of MTIA chips already in production**.

Architecturally, the MTIA 400 is **fully chipletized** — 2 compute dies + 1 SoC die + 2 network dies, plus HBM. This is the first time Meta has split its custom accelerator into a multi-die combination, a generational watershed compared with the earlier single-die MTIA 200.

## Core Specifications

| Parameter | Value |
|------|------|
| **Architecture** | MTIA 400 (2 compute dies + 1 SoC die + 2 network dies + HBM, fully chipletized) |
| **PE Array** | 8 × 6 processing element array (with redundant rows) |
| **Process** | Not disclosed |
| **FP4 Compute** | **12 PFLOPS** |
| **FP16/BF16 Compute** | Not disclosed (**15x** the MTIA 200) |
| **Memory Capacity** | Not disclosed |
| **Memory Bandwidth** | Not disclosed (DRAM bandwidth **46x** the MTIA 200) |
| **On-chip SRAM Bandwidth** | Not disclosed (**5x** the MTIA 200) |
| **TDP** | Not disclosed |
| **Scale-up Domain** | **72** MTIA 400s per domain |
| **Design Partner** | Broadcom (multi-generation MTIA collaboration) |
| **Announced** | 2026 (disclosed at Hot Chips 2026) |

> ⚠️ **Caveat**: the "15x / 46x / 5x" figures in the table are **multiples relative to the MTIA 200**, not absolute specifications. Meta consistently does not publish full MTIA parameters; do not mix these relative multiples with absolute compute figures.

## Generational Comparison with the MTIA 200

| Metric | MTIA 200 | **MTIA 400** | Change |
|------|----------|--------------|------|
| Mandate | Recommendation / ranking | **Recommendation + GenAI** | Expanded |
| Package | Single die | **2 compute + 1 SoC + 2 network dies** | Fully chipletized |
| FP4 Compute | Not disclosed | **12 PFLOPS** | Newly disclosed |
| FP16 Compute | Baseline | — | **15x** |
| DRAM Bandwidth | Baseline | — | **46x** |
| SRAM Bandwidth | Baseline | — | **5x** |
| Scale-up Domain | — | **72 chips** | — |

> **Key insight**: DRAM bandwidth up 46x and FP16 compute up 15x — **the bandwidth multiple far exceeds the compute multiple**. This ties directly to the MTIA 400's new GenAI mandate: the decode stage of generative inference is a **memory bandwidth bottleneck**, and Meta has clearly weighted its resources toward data movement.

## MTIA Roadmap (300 / 400 / 450 / 500)

Meta's published roadmap shows **four generations — MTIA 300 / 400 / 450 / 500 —** iterating over the next two years:

| Generation | Positioning | Key Changes |
|------|------|----------|
| MTIA 300 | Recommendation / GenAI / inference | Roadmap starting point |
| **MTIA 400** | **Recommendation + GenAI dual mandate** | 12 PFLOPS FP4, fully chipletized |
| MTIA 450 | GenAI / inference | **HBM bandwidth doubled vs the MTIA 400** |
| MTIA 500 | GenAI / inference | HBM bandwidth **up another 50%**; per-chip power up to **1700 W** |

Accompanying cooling roadmap: Meta targets rack power density of **80 kW or even above 120 kW**, using an **air-assisted liquid cooling (AALC) + Sidecar CDU** architecture. Meta's core aim is not maximum cooling efficiency, but **bringing liquid cooling capability to existing air-cooled data centers as quickly as possible** — Sidecars can be deployed per rack, scale quickly, and isolate faults, making them better suited to rapidly launching inference services.

## Vendor Information

| Item | Details |
|------|------|
| **Company** | Meta Platforms, Inc. |
| **Headquarters** | Menlo Park, California, USA |
| **Custom Silicon Roadmap** | MTIA (recommendation → GenAI → inference) |
| **Design Partner** | Broadcom |
| **Availability** | **Internal use only** (not sold externally) |
| **Foundry** | TSMC (specific node not disclosed) |

## Use Cases

- ✅ **Recommendation systems / ranking models** (MTIA's traditional home turf)
- ✅ **Generative AI inference** (new MTIA 400 mandate)
- ✅ **Mixed deployment with NVIDIA / AMD GPUs** (Meta pursues a multi-chip strategy)
- ❌ External sales / third-party procurement
- ❌ Frontier model pretraining (Meta still relies on NVIDIA GPUs)

## Related Cards

- [Meta MTIA v3 (Iris)](/docs/cards/meta/mtia-v3) — Previous-generation custom accelerator
- [Microsoft Maia 200](/docs/cards/microsoft/maia-200) — Cloud provider custom inference chip
- [Google TPU 8i](/docs/cards/google/tpu-8i) — Inference-oriented custom ASIC
- [AWS Trainium3](/docs/cards/aws/trainium-3) — Cloud custom training/inference chip
- [Full comparison table](/docs/comparison)

## References

- [Hot Chips 2026: Meta's Custom AI Silicon — From Recommendation to Dual-Mandate with GenAI](https://hotchips.org/)
- [Industry research report: Custom ASICs enter large-scale deployment at Hot Chips 2026](https://hotchips.org/)
- [Lingke 1+1: Meta MTIA roadmap and AALC liquid cooling architecture](https://www.nblksj.cn)
- [Reuters: Meta's new AI chip Iris slated for production in September 2026](https://www.reuters.com)
