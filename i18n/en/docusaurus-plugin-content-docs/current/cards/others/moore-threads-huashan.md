---
id: moore-threads-huashan
title: Moore Threads Huashan (Fifth-Generation "Huagang" Architecture · Unified AI Training and Inference)
sidebar_label: Moore Threads Huashan
description: "Moore Threads' fifth-generation 'Huagang' architecture AI chip Huashan targets unified cloud large-model training and inference, with mass production planned within 2026, forming a two-track Huagang architecture layout alongside the graphics rendering chip Lushan."
keywords: [Moore Threads, Huashan, Huagang architecture, unified training and inference, domestic GPU, MUSA, large-model training, fifth generation]
vendor: others
vendor_full: "Moore Threads"
series: "Lushan / Huashan (Huagang architecture)"
release_date: "2026"
status: "In development"
---

# Moore Threads Huashan (Fifth-Generation "Huagang" Architecture · Unified AI Training and Inference)

## Product Overview

**Huashan** is Moore Threads' high-performance **unified AI training-and-inference chip** built on the **fifth-generation "Huagang" architecture**, with mass production planned **within 2026**.

Huashan succeeds the current cloud mainstay **[MTT S5000](/docs/cards/others/moore-threads-mtt-s5000)** (fourth-generation MUSA architecture). At Moore Threads' 2026 interim results briefing, the company disclosed that its R&D focus is "the Huashan and Lushan chips under the new-generation 'Huagang' architecture and related applications" — Huashan handles **cloud AI training and inference** while Lushan handles **graphics rendering**, both sharing the Huagang architecture foundation.

Huashan's industrial significance lies in carrying forward the existing ecosystem: the MTT S5000 has already supported the **10,000-card-scale "Kuae (KUAE)" intelligent computing cluster** in training the MoE-236B model from scratch, as well as full-stack native training of the world's first 5D world model, EvoPhys-World. Building on this, Huashan must further improve per-card compute and cluster interconnect efficiency to sustain Moore Threads' technical goal of a **100,000-card-scale intelligent computing cluster**.

## Core Specifications

| Parameter | Value |
|-----------|-------|
| **Architecture** | Fifth-generation "Huagang" architecture |
| **Process Node** | Not disclosed |
| **Positioning** | Unified cloud large-model training + inference |
| **FP16/BF16 Compute** | Not disclosed |
| **FP8 Compute** | Not disclosed |
| **Memory Capacity** | Not disclosed |
| **Memory Type** | Not disclosed |
| **Memory Bandwidth** | Not disclosed |
| **TDP** | Not disclosed |
| **Interconnect** | Moore Threads proprietary cluster interconnect (supporting 10,000-card-scale clusters) |
| **Software Stack** | MUSA architecture (fifth generation) |
| **Launch** | Mass production within 2026 (in development) |

> ⚠️ **Specification Notes**: Huashan is currently **in development** and Moore Threads **has not published complete specifications**. All compute, memory, bandwidth, and power fields are not disclosed; do not substitute speculative values for official specifications.

## Huashan's Ecosystem Inheritance: From the MTT S5000 to 10,000-Card Clusters

Moore Threads has already run the complete "domestic chip training domestic model" pipeline with its previous-generation product, and this engineering accumulation will migrate directly to Huashan:

| Capability | Achieved on MTT S5000 | Huashan's Goal |
|------------|------------------------|----------------|
| Model training | 10,000-card-scale "Kuae" cluster completed from-scratch training of MoE-236B | Larger-scale cluster training |
| World model | Full-stack native training of the world's first 5D world model EvoPhys-World | Continue multimodal capability |
| Inference | Inference of mainstream models such as GLM / DeepSeek, PD heterogeneous disaggregation challenging 1M ultra-long context | Improve inference efficiency and cost |
| Cluster scale | 10,000-card-scale intelligent computing cluster | **100,000-card-scale technical foundation** |
| Software stack | MUSA + Kuae cluster software stack | Fifth-generation MUSA |

## Relationship with the Current Mainstay MTT S5000

| Parameter | MTT S5000 | **Huashan** |
|-----------|-----------|-------------|
| Architecture generation | Fourth-generation MUSA | **Fifth-generation Huagang** |
| Status | **In mass production** (stable supply) | Mass production within the year (in development) |
| Positioning | Unified cloud training and inference | Unified cloud training and inference (successor) |
| Specifications | Public | Not disclosed |
| Purchase advice | **Available now** | Evaluate after official release |

> **Key Insight**: Huashan follows the same logic as the MTIA 400 for Meta and the TPU 8t for Google — **self-developed chips replace the current generation with the next**, so buyers must judge timing between "the S5000 they can buy today" and "the Huashan with unknown performance". In terms of immediate deployability, the MTT S5000 remains the most mature choice among domestic full-function GPUs.

## Vendor Information

| Parameter | Value |
|-----------|-------|
| **Company** | Moore Threads Intelligent Technology (Beijing) Co., Ltd. |
| **Headquarters** | Beijing |
| **Founded** | 2020-10 |
| **Listing** | STAR Market (688795) |
| **Company Positioning** | Full-function GPU (graphics + AI compute) |
| **Cluster Solution** | Kuae (KUAE) intelligent computing cluster |
| **Software Stack** | MUSA architecture |

## Use Cases

- ✅ **Cloud large-model training** (inheriting the 10,000-card-scale cluster solution)
- ✅ **Large-model inference** (including long context and PD disaggregation architecture)
- ✅ **Domestic substitution in intelligent computing centers**
- ❌ Professional graphics rendering (left to Lushan)
- ❌ No product currently on sale (in development)

## Related Cards

- [Moore Threads Lushan](/docs/cards/others/moore-threads-lushan) — Same-architecture graphics rendering chip
- [Moore Threads MTT S5000](/docs/cards/others/moore-threads-mtt-s5000) — Current cloud flagship on sale
- [Cambricon MLU 690](/docs/cards/cambricon/mlu-690) — Domestic training chip competitor
- [Huawei Ascend 950DT](/docs/cards/huawei/ascend-950dt) — Domestic training/inference flagship
- [Full Comparison Table](/docs/comparison)

## References

- [Moore Threads 2026 interim results briefing (progress on "Huashan" and "Lushan")](https://www.mthreads.com)
- [Shanghai Securities News: three questions for domestic GPU leader Moore Threads](https://www.toutiao.com/article/7681312103612940810/)
- [Enflame's IPO and the second half for the domestic GPU "Four Little Dragons": next-generation product roadmap](https://www.x-techcon.com/article/186073.html)
- [Moore Threads official website](https://www.mthreads.com)
