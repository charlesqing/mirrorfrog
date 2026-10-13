---
id: mtia-450
title: Meta MTIA 450 (Custom AI Accelerator · Generative AI Inference)
sidebar_label: MTIA 450
description: "Meta MTIA 450 custom AI accelerator: generative AI inference oriented, FP8 7 PFLOPS / MXFP4 21 PFLOPS, 288GB HBM @ 18.4 TB/s (double the MTIA 400), 1400W TDP, scale-up domain of 72 chips @ 1.2 TB/s, mass production in early 2027."
keywords: [Meta MTIA, MTIA 450, custom silicon, generative AI, GenAI, inference accelerator, MX4, HBM, Broadcom, memory bandwidth]
---

# Meta MTIA 450 (Custom AI Accelerator · Generative AI Inference)

## Product Overview

**Meta MTIA 450** is the member of Meta's custom MTIA family **purpose-built for generative AI inference**, announced on **March 11, 2026** alongside MTIA 300 / 400 / 500, with **mass production scheduled for early 2027**.

Meta's framing of the MTIA 450 is direct — **inference-first**. Meta's own words: mainstream chips are typically built for the most demanding workload (large-scale GenAI pre-training) and then applied, often less cost-effectively, to other workloads like GenAI inference; **MTIA takes the opposite approach, optimizing MTIA 450 and 500 first for GenAI inference**, then using them for other workloads as needed, including ranking and recommendations training and inference, as well as GenAI training. This keeps MTIA well-tuned to anticipated growth in GenAI inference demand.

The MTIA 450's headline change is **doubled memory bandwidth**. Against the MTIA 400's **9.2 TB/s**, the MTIA 450 reaches **18.4 TB/s**. Meta describes this bandwidth as "much higher than that of existing leading commercial products," which media read as a comparison against NVIDIA's H100 / H200. The reasoning is physically grounded: during the decode stage of transformer inference the bottleneck is **memory bandwidth, not raw FLOPs**, and mainstream GPUs are architected to maximize FLOPS for large-scale pre-training, carrying a cost and power overhead Meta considers unnecessary for inference.

For low-precision compute, the MTIA 450 supports the **MX4** format, which Meta says delivers **6× the MX4 FLOPS of FP16/BF16**, using **mixed low-precision computation** that avoids the software overhead of data type conversion. Meta also notes hardware acceleration for **FlashAttention** and **mixture-of-experts feed-forward network** computation, along with custom low-precision data types co-designed for inference.

On architecture and deployment, the MTIA 450, 400, and 500 **use the same chassis, rack, and network infrastructure** — each new generation drops into the existing physical footprint for easy interchange. This modularity is what underpins MTIA's roughly six-month chip cadence, itself far faster than the industry's typical one-to-two year cycle.

## Key Specifications

| Parameter | Value |
|------|------|
| **Architecture** | MTIA 450 (custom accelerator optimized for generative AI inference, evolved from the MTIA 400) |
| **Process** | Not disclosed |
| **Memory** | 288 GB |
| **Memory Type** | Not disclosed |
| **Memory Bandwidth** | 18.4 TB/s |
| **FP8** | 7 PFLOPS |
| **FP4** | 21 PFLOPS |
| **FP16** | Not disclosed |
| **INT8** | Not disclosed |
| **TDP** | 1400 W |
| **Interconnect** | Scale-up domain of 72 chips @ 1.2 TB/s (unidirectional); scale-out 100 GB/s (unidirectional) |
| **Release / Production** | Released 2026-03-11; mass production in early 2027 |

> **Data format caveat**: Meta's official table lists compute as **FP8/MX8 7 PFLOPS**, **MX4 21 PFLOPS**, and **BF16 3.5 PFLOPS**. The FP4 entry here corresponds to Meta's **MX4** (block-scaled 4-bit format, not FP4); Meta did not publish an absolute FP16/BF16 compute figure for this part, so the FP16 entry is marked as not disclosed.
>
> **Unidirectional bandwidth**: the scale-up and scale-out bandwidths in this table are **unidirectional** figures.
>
> **Process**: Meta co-developed this chip with Broadcom (across chip design, advanced packaging, and networking), but no specific process node or packaging form has been officially published.

## Key Features

### Bandwidth-First Inference Architecture

- **HBM bandwidth doubled versus the MTIA 400** (9.2 TB/s → 18.4 TB/s), which Meta explicitly benchmarks against and claims surpasses NVIDIA H100 / H200
- HBM capacity is **288 GB, identical to the MTIA 400** — bandwidth doubled while capacity stays flat, showing Meta steered resources squarely toward **bandwidth** rather than capacity
- This tradeoff directly serves the decode stage: every generated token requires reading model weights from memory, and insufficient bandwidth leaves compute units idle

### MX4 Mixed Low-Precision Compute

- Native **MX4** support, which Meta says delivers **6× the FLOPS of FP16/BF16**
- **Mixed low-precision computation** avoids software-level data type conversion overhead
- Narrower formats cut the compute required for inference while, Meta says, not significantly hurting model quality

### Inference-Specific Hardware Acceleration

- **FlashAttention hardware acceleration**
- **Mixture-of-experts (MoE) feed-forward network** compute acceleration
- Custom low-precision data types co-designed for inference

### Generational Comparison with the MTIA 400

| Metric | MTIA 400 | **MTIA 450** | Change |
|------|----------|--------------|------|
| Workload focus | General (R&R and GenAI) | **GenAI inference first** | Narrowed focus |
| FP8/MX8 compute | 6 PFLOPS | **7 PFLOPS** | +17% |
| MX4 compute | 12 PFLOPS | **21 PFLOPS** | 1.75× |
| HBM bandwidth | 9.2 TB/s | **18.4 TB/s** | **2×** |
| HBM capacity | 288 GB | 288 GB | Flat |
| TDP | 1,200 W | 1,400 W | +17% |
| Scale-up domain | 72 chips | 72 chips | Flat |
| Status | Lab testing complete | Early 2027 mass production | — |

> **Key insight**: versus the MTIA 400, the MTIA 450 gains **1.75× the MX4 compute while doubling HBM bandwidth and adding only 17% more TDP**. Judged on FLOPS alone the generation looks modest; the real increment is in data movement — fully consistent with Meta's position that decode is bandwidth-bound rather than FLOPs-bound.

### Position in the Roadmap

Meta says that from MTIA 300 to MTIA 500, **HBM bandwidth increases 4.5× and compute FLOPs increase 25×**. The MTIA 450 is the GenAI inference workhorse along that curve, while the higher-end MTIA 500 adds **another 50% of HBM bandwidth** and up to **80% more HBM capacity**.

## Use Cases

- ✅ **Generative AI inference** (Meta's primary focus, with other workloads supported as needed)
- ✅ **Large-scale decode-heavy serving** (bandwidth-first design matches the bottleneck directly)
- ✅ **Mixture-of-experts (MoE) model serving** (MoE FFN hardware acceleration)
- ✅ **Long-context inference** (288GB capacity + 18.4 TB/s bandwidth)
- ✅ **Meta internal infrastructure** (internal use only, not sold externally)
- ❌ Large-scale GenAI pre-training (mainstream GPUs remain Meta's training workhorses)
- ❌ Retail / third-party procurement

## Comparison

- [Meta MTIA 400](/docs/cards/meta/mtia-400) — Previous general-purpose part, FP8 6 PFLOPS / 288GB @ 9.2 TB/s
- [Meta MTIA 300](/docs/cards/meta/mtia-300) — Same-generation R&R training oriented part
- [NVIDIA H200](/docs/cards/nvidia/h200) — Commercial part Meta benchmarks its bandwidth against
- [Microsoft Maia 200](/docs/cards/microsoft/maia-200) — Cloud provider custom inference chip
- [AWS Trainium3](/docs/cards/aws/trainium-3) — Cloud custom training / inference chip

## Data Sources

- [Meta official newsroom: Expanding Meta's Custom Silicon to Power Our AI Workloads](https://about.fb.com/news/2026/03/expanding-metas-custom-silicon-to-power-our-ai-workloads/) — MTIA 450 and 500 optimized first for GenAI inference, modular designs drop into existing infrastructure, six-month-or-less iteration cadence, PyTorch / vLLM / Triton / OCP standards
- [Meta official technical blog: Four Chips in Two Years: Scaling AI Experiences for Billions](https://ai.meta.com/blog/meta-mtia-scale-ai-chips-for-billions/) — full MTIA 300/400/450/500 specification table: 1400 W TDP, 18.4 TB/s / 288 GB HBM, FP8/MX8 7 PFLOPS, MX4 21 PFLOPS, BF16 3.5 PFLOPS, scale-up domain 72, scale-up 1.2 TB/s, scale-out 100 GB/s, FlashAttention and MoE FFN hardware acceleration, 4.5× bandwidth and 25× compute gain
- [Tom's Hardware: Meta reveals four new MTIA chips built for AI inference](https://www.tomshardware.com/tech-industry/semiconductors/meta-reveals-four-new-mtia-chips-built-for-ai-inference) — MTIA 450 HBM bandwidth doubled versus the MTIA 400 and "much higher than that of existing leading commercial products", MX4 at 6× the FP16/BF16 FLOPS, early 2027 mass production, shared chassis / rack / network infrastructure
- [The Decoder: Meta unveils four generations of custom AI chips](https://the-decoder.com/meta-unveils-four-generations-of-custom-ai-chips-to-cut-inference-costs-for-billions-of-users) — specification table cross-check, MTIA 400 lab testing complete and deploying to datacenters, hundreds of thousands of MTIA deployed for organic content and ads inference
