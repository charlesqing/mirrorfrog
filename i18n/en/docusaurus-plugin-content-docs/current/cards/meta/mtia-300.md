---
id: mtia-300
title: Meta MTIA 300 (Custom AI Accelerator · Ranking and Recommendations Training)
sidebar_label: MTIA 300
description: "Meta MTIA 300 custom AI accelerator: ranking and recommendations (R&R) training oriented, FP8 1.2 PFLOPS, 216GB HBM @ 6.1 TB/s, 800W TDP, scale-up domain of 16 chips @ 1 TB/s, scale-out 200 GB/s, already in production at its March 2026 announcement, co-developed with Broadcom."
keywords: [Meta MTIA, MTIA 300, custom silicon, ranking and recommendations, R&R, recommendation systems, Broadcom, HBM, inference accelerator]
---

# Meta MTIA 300 (Custom AI Accelerator · Ranking and Recommendations Training)

## Product Overview

**Meta MTIA 300** is a new member of Meta's custom MTIA AI accelerator family, announced on **March 11, 2026** alongside MTIA 400 / 450 / 500. Unlike the later three generations that can handle all workloads, the **MTIA 300 is purpose-built for ranking and recommendations (R&R) training**, and it was the **only model already in production** when Meta published the roadmap.

Meta's official newsroom states: "MTIA 300 will be used for ranking and recommendations training, and is already in production." Japanese tech media reporting the same announcement noted that the MTIA 300's design was described as having **formed the foundation for the other MTIA chips** — it is the efficiency-oriented starting point of this roadmap, and its modular design approach was inherited and scaled up by the higher-performance MTIA 400 and later parts.

Meta's stated cadence for MTIA is aggressive: by building on **modular, reusable chiplet designs**, Meta says it has developed the capacity to release a chip generation **every six months or less**, far faster than the industry's typical one-to-two year cycle. The rack and network infrastructure are equally **modular** — a new generation can drop into the existing rack system, accelerating time to production.

On software, MTIA was built on **industry standards** from the very beginning: **PyTorch, vLLM, Triton**, and the **Open Compute Project (OCP)**. With support for `torch.compile` and `torch.export`, production models can be deployed simultaneously on GPUs and MTIA without MTIA-specific rewrites. Meta says it has already deployed **hundreds of thousands of MTIA chips** for inference workloads across organic content and ads in its apps.

## Key Specifications

| Parameter | Value |
|------|------|
| **Architecture** | MTIA 300 (custom accelerator optimized for ranking and recommendations R&R training) |
| **Process** | Not disclosed |
| **Memory** | 216 GB |
| **Memory Type** | Not disclosed |
| **Memory Bandwidth** | 6.1 TB/s |
| **FP8** | 1.2 PFLOPS |
| **FP4** | Not disclosed |
| **FP16** | Not disclosed |
| **INT8** | Not disclosed |
| **TDP** | 800 W |
| **Interconnect** | Scale-up domain of 16 chips @ 1 TB/s (unidirectional); scale-out 200 GB/s (unidirectional) |
| **Release / Production** | Released 2026-03-11; already in production at announcement |

> **Data format caveat**: Meta's official table lists MTIA 300 compute as **FP8/MX8 1.2 PFLOPS** and **BF16 0.6 PFLOPS**. Meta did not disclose MX4 compute for this part, so the FP4 entry is marked as not disclosed.
>
> **Unidirectional bandwidth**: the scale-up and scale-out bandwidths in this table are **unidirectional** figures, not bi-directional totals.
>
> **Process**: Meta co-developed this chip with Broadcom, but no specific process node or packaging form has been officially published.

## Key Features

### Purpose-Built for R&R Training

- Narrowly optimized for Meta's internal **ranking and recommendation model training** rather than chasing general-purpose GPU peak FLOPS
- Meta's "inference-first" strategy shows up in this generation as **doing one workload exceptionally well** instead of covering everything the way a general GPU does
- As the efficiency-oriented starting point of the roadmap, its modular design was inherited and amplified by MTIA 400 / 450 / 500

### Position in the Roadmap

Meta's published specification table shows that from MTIA 300 to MTIA 500, **HBM bandwidth increases 4.5× and compute FLOPs increase 25×**:

| Metric | MTIA 300 | MTIA 400 | MTIA 450 | MTIA 500 |
|------|----------|----------|----------|----------|
| Workload focus | R&R training | General | GenAI inference | GenAI inference |
| FP8/MX8 compute | 1.2 PFLOPS | 6 PFLOPS | 7 PFLOPS | 10 PFLOPS |
| MX4 compute | — | 12 PFLOPS | 21 PFLOPS | 30 PFLOPS |
| HBM bandwidth | 6.1 TB/s | 9.2 TB/s | 18.4 TB/s | 27.6 TB/s |
| HBM capacity | 216 GB | 288 GB | 288 GB | 384–512 GB |
| TDP | 800 W | 1,200 W | 1,400 W | 1,700 W |
| Scale-up domain | 16 chips | 72 chips | 72 chips | 72 chips |
| Status | In production | Lab testing complete | Early 2027 mass production | 2027 mass production |

> **Key insight**: the MTIA 300's scale-up domain is only **16 chips**, while the three later generations expand it to **72 chips** — Meta placed scale-up scaling on the higher-end parts, leaving the MTIA 300 to serve capacity-sensitive R&R training workloads with a manageable scale.

### Co-Development with Broadcom

- Meta announced an expanded partnership with **Broadcom** to co-develop multiple generations of MTIA chips across **chip design, advanced packaging, and networking**
- The partnership builds on Broadcom's **XPU platform**; Broadcom CEO Hock Tan said "This initial MTIA deployment is just the beginning of a sustained, multi-generation roadmap"
- The first phase commits to **more than 1 GW**, the first step of a sustained multi-gigawatt rollout
- Broadcom's advanced Ethernet technologies also enable high-bandwidth networking across Meta's rapidly expanding AI clusters
- The announcement came **two weeks after Meta disclosed a long-term $100 billion AI infrastructure agreement with AMD** (up to 6 GW of Instinct GPUs in February 2026), illustrating Meta's overall strategy of reducing NVIDIA dependence while keeping MTIA at the core of inference

## Use Cases

- ✅ **Ranking and recommendations (R&R) model training** — the only designated workload for MTIA 300
- ✅ **Recommendation serving for Meta's own apps** (organic content and ads)
- ✅ **Meta internal infrastructure** (internal use only, not sold externally)
- ❌ Generative AI inference (handled by MTIA 450 / 500)
- ❌ Large-scale scale-up training jobs (scale-up domain of only 16 chips)
- ❌ Retail / third-party procurement

## Comparison

- [Meta MTIA 400](/docs/cards/meta/mtia-400) — Next-generation general-purpose part, FP8 6 PFLOPS / 288GB @ 9.2 TB/s
- [Meta MTIA v3 (Iris)](/docs/cards/meta/mtia-v3) — Previous-generation custom accelerator
- [Microsoft Maia 200](/docs/cards/microsoft/maia-200) — Cloud provider custom inference chip
- [AWS Trainium3](/docs/cards/aws/trainium-3) — Cloud custom training / inference chip

## Data Sources

- [Meta official newsroom: Expanding Meta's Custom Silicon to Power Our AI Workloads](https://about.fb.com/news/2026/03/expanding-metas-custom-silicon-to-power-our-ai-workloads/) — MTIA 300 used for R&R training and already in production, modular designs drop into existing rack infrastructure, six-month-or-less iteration cadence, PyTorch / vLLM / Triton / OCP industry standards, hundreds of thousands of MTIA deployed
- [Meta official announcement: Meta Partners With Broadcom to Co-Develop Custom AI Silicon](https://about.fb.com/news/2026/03/meta-partners-with-broadcom-to-co-develop-custom-ai-silicon/) — collaboration with Broadcom across chip design, advanced packaging, and networking, built on the XPU platform, first phase exceeding 1 GW
- [Tom's Hardware: Meta reveals four new MTIA chips built for AI inference](https://www.tomshardware.com/tech-industry/semiconductors/meta-reveals-four-new-mtia-chips-built-for-ai-inference) — full MTIA 300/400/450/500 specification table: 800 W TDP, 6.1 TB/s / 216 GB HBM, FP8/MX8 1.2 PFLOPS, BF16 0.6 PFLOPS, scale-up domain 16, scale-up 1 TB/s, scale-out 200 GB/s
- [The Decoder: Meta unveils four generations of custom AI chips](https://the-decoder.com/meta-unveils-four-generations-of-custom-ai-chips-to-cut-inference-costs-for-billions-of-users) — specification table cross-check, 4.5× HBM bandwidth and 25× compute gain across the line, six-month generation cadence
