---
id: mtia-500
title: Meta MTIA 500 (Flagship Custom AI Accelerator · Maximum GenAI Inference Configuration)
sidebar_label: MTIA 500
description: "Meta MTIA 500 flagship custom AI accelerator: generative AI inference oriented, FP8 10 PFLOPS / MX4 30 PFLOPS, 384GB HBM @ 27.6 TB/s (another 50% over the MTIA 450), 1700W TDP, scale-up domain of 72 chips @ 1.2 TB/s, large-scale deployment in 2027."
keywords: [Meta MTIA, MTIA 500, custom silicon, generative AI, GenAI, inference accelerator, MX4, HBM4, Broadcom, flagship]
---

# Meta MTIA 500 (Flagship Custom AI Accelerator · Maximum GenAI Inference Configuration)

## Product Overview

**Meta MTIA 500** is the **flagship** of Meta's custom MTIA family in this generation of the roadmap, announced on **March 11, 2026** alongside MTIA 300 / 400 / 450, with **large-scale deployment planned for 2027** (later than the MTIA 450's "early 2027 mass production").

Like the MTIA 450, the MTIA 500 is positioned by Meta as **optimized first for generative AI inference**, subsequently supporting ranking and recommendations training and inference, as well as GenAI training as needed. Against its sibling MTIA 450, the MTIA 500 brings two clear upgrades: **another 50% more HBM bandwidth** (18.4 → 27.6 TB/s), and **up to 80% more HBM capacity** (288 GB → 384–512 GB). This is the MTIA 500's largest differentiator.

On the scale of the whole roadmap, Meta says that from the MTIA 300 to the MTIA 500, **HBM bandwidth increases 4.5× and compute FLOPs increase 25×**, while the generation cadence holds at roughly **six months per part**. The MTIA 500 is the endpoint of that curve: MX4 compute of 30 PFLOPS, FP8/MX8 of 10 PFLOPS, and a per-chip TDP of **1,700 W** — the only part in this generation to enter the kilowatt-class single-chip range.

On architecture and deployment, the MTIA 500 shares the **same chassis, rack, and network infrastructure** as the MTIA 400 / 450 — the modular design lets each new generation drop straight into the existing physical footprint, which is the engineering basis for Meta's high-frequency iteration.

## Key Specifications

| Parameter | Value |
|------|------|
| **Architecture** | MTIA 500 (custom flagship accelerator optimized for generative AI inference) |
| **Process** | Not disclosed |
| **Memory** | 384 GB |
| **Memory Type** | Not disclosed |
| **Memory Bandwidth** | 27.6 TB/s |
| **FP8** | 10 PFLOPS |
| **FP4** | 30 PFLOPS |
| **FP16** | Not disclosed |
| **INT8** | Not disclosed |
| **TDP** | 1700 W |
| **Interconnect** | Scale-up domain of 72 chips @ 1.2 TB/s (unidirectional); scale-out 100 GB/s (unidirectional) |
| **Release / Production** | Released 2026-03-11; large-scale deployment in 2027 |

> **Memory capacity caveat**: Meta's official table lists MTIA 500 HBM capacity as a **range of 384–512 GB**. To avoid range-upper-bound contamination in comparison tables, the **Memory** entry here uses the **official lower bound of 384 GB**; see the note below for the upper bound.
>
> **Data format caveat**: Meta's official table lists compute as **FP8/MX8 10 PFLOPS**, **MX4 30 PFLOPS**, and **BF16 5 PFLOPS**. The FP4 entry here corresponds to Meta's **MX4** (block-scaled 4-bit format, not FP4).
>
> **Unidirectional bandwidth**: the scale-up and scale-out bandwidths in this table are **unidirectional** figures.
>
> **Process**: Meta co-developed this chip with Broadcom, but no specific process node or packaging form has been officially published.

## Key Features

### Dual Bandwidth and Capacity Step-Up

- **HBM bandwidth of 27.6 TB/s**, another **50%** over the MTIA 450's 18.4 TB/s and **4.5×** the MTIA 300's 6.1 TB/s
- **HBM capacity of 384 GB up to 512 GB**, up to **80% more** than the MTIA 450's 288 GB
- Bandwidth and capacity expanding together indicate Meta needs to support both **longer contexts** and **higher concurrency** in this generation

### MX4 Mixed Low-Precision Compute

- **MX4 compute of 30 PFLOPS**, roughly **1.4×** the MTIA 450 (21 PFLOPS) and **2.5×** the MTIA 400 (12 PFLOPS)
- **Mixed low-precision computation** avoids software-level data type conversion overhead
- Continues Meta's inference-specific hardware acceleration: **FlashAttention** and **mixture-of-experts (MoE) feed-forward network** compute, plus custom low-precision data types co-designed for inference

### Generational Comparison Across the Family

| Metric | MTIA 300 | MTIA 400 | MTIA 450 | **MTIA 500** |
|------|----------|----------|----------|--------------|
| Workload focus | R&R training | General | GenAI inference | **GenAI inference** |
| FP8/MX8 compute | 1.2 PFLOPS | 6 PFLOPS | 7 PFLOPS | **10 PFLOPS** |
| MX4 compute | — | 12 PFLOPS | 21 PFLOPS | **30 PFLOPS** |
| HBM bandwidth | 6.1 TB/s | 9.2 TB/s | 18.4 TB/s | **27.6 TB/s** |
| HBM capacity | 216 GB | 288 GB | 288 GB | **384 GB and up** |
| TDP | 800 W | 1,200 W | 1,400 W | **1,700 W** |
| Scale-up domain | 16 chips | 72 chips | 72 chips | **72 chips** |
| Scale-out bandwidth | 200 GB/s | 100 GB/s | 100 GB/s | **100 GB/s** |
| Status | In production | Lab testing complete | Early 2027 mass production | **2027 deployment** |

> **Key insight**: versus the MTIA 450, the MTIA 500 adds only about **43% more MX4 compute** while adding **50% more HBM bandwidth** and **21% more TDP**. Judged on FLOPS alone the generation looks unremarkable; with bandwidth and capacity expanding in step, **the real increment is bytes movable per watt** — a continuation of Meta's consistent position that decode is memory-bound rather than FLOPs-bound.

### Cooling and Rack Constraints

A per-chip TDP of **1,700 W** makes the MTIA 500 demanding on cooling density. Meta's stated rack power density targets for this generation are **80 kW or even above 120 kW**, using an **air-assisted liquid cooling (AALC) + Sidecar CDU** architecture. Meta's core aim is not maximum cooling efficiency but **bringing liquid cooling capability to existing air-cooled datacenters as quickly as possible** — Sidecars can be deployed per rack, scale quickly, and isolate faults, making them better suited to rapidly launching inference services.

## Use Cases

- ✅ **Large-scale generative AI inference** (Meta's primary focus)
- ✅ **Very long context and high-concurrency serving** (up to 512GB HBM)
- ✅ **Mixture-of-experts (MoE) model serving** (MoE FFN hardware acceleration)
- ✅ **High power-density rack deployments** (requires AALC + Sidecar CDU liquid cooling)
- ✅ **Meta internal infrastructure** (internal use only, not sold externally)
- ❌ Large-scale GenAI pre-training (mainstream GPUs remain Meta's training workhorses)
- ❌ Direct deployment in existing air-cooled datacenters (requires liquid cooling retrofit)

## Comparison

- [Meta MTIA 450](/docs/cards/meta/mtia-450) — Previous GenAI inference part, FP8 7 PFLOPS / 288GB @ 18.4 TB/s
- [Meta MTIA 400](/docs/cards/meta/mtia-400) — General-purpose part, FP8 6 PFLOPS / 288GB @ 9.2 TB/s
- [Meta MTIA 300](/docs/cards/meta/mtia-300) — R&R training oriented part
- [Microsoft Maia 300](/docs/cards/microsoft/maia-300) — Cloud provider custom inference chip
- [AWS Trainium3](/docs/cards/aws/trainium-3) — Cloud custom training / inference chip

## Data Sources

- [Meta official newsroom: Expanding Meta's Custom Silicon to Power Our AI Workloads](https://about.fb.com/news/2026/03/expanding-metas-custom-silicon-to-power-our-ai-workloads/) — MTIA 450 and 500 optimized first for GenAI inference, modular designs drop into existing infrastructure, six-month-or-less iteration cadence, hundreds of thousands of MTIA deployed
- [Meta official technical blog: Four Chips in Two Years: Scaling AI Experiences for Billions](https://ai.meta.com/blog/meta-mtia-scale-ai-chips-for-billions/) — full MTIA 500 specification: 1700 W TDP, 27.6 TB/s / 384–512 GB HBM, FP8/MX8 10 PFLOPS, MX4 30 PFLOPS, BF16 5 PFLOPS, scale-up domain 72, scale-up 1.2 TB/s, scale-out 100 GB/s, 4.5× bandwidth and 25× compute gain across the line
- [Tom's Hardware: Meta reveals four new MTIA chips built for AI inference](https://www.tomshardware.com/tech-industry/semiconductors/meta-reveals-four-new-mtia-chips-built-for-ai-inference) — MTIA 500 adds another 50% HBM bandwidth over the MTIA 450 plus up to 80% more HBM capacity, 2027 large-scale deployment, decode-stage bottleneck is memory bandwidth not FLOPS, AALC + Sidecar CDU cooling with 80–120 kW rack density targets
- [The Decoder: Meta unveils four generations of custom AI chips](https://the-decoder.com/meta-unveils-four-generations-of-custom-ai-chips-to-cut-inference-costs-for-billions-of-users) — specification table cross-check, MTIA 450 and 500 both targeting GenAI inference with 2027 mass production
