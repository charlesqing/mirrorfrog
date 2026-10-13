---
id: ascend-960pr
title: "Huawei Ascend 960PR: Specs, 8 PFLOPS FP4, 192GB Memory, 2027 Launch"
sidebar_label: "Ascend 960PR"
description: "Huawei Ascend 960PR specs: the inference and Prefill variant of the sixth-generation Ascend family. 2 PFLOPS FP8, 8 PFLOPS FP4 (a doubling over the prior generation), 192 GB of memory at 2.4 TB/s, 2.2 TB/s interconnect. Launches Q3 2027 alongside the liquid-cooled Atlas 960 NPO SuperPoD."
keywords: [Huawei Ascend 960PR, Ascend 960PR, 8 PFLOPS FP4, Prefill, inference accelerator, 192 GB, 2.4 TB/s, Atlas 960, NPO, recommendation systems]
---

# Huawei Ascend 960PR

## Product Overview

The **Ascend 960PR** is the **inference and Prefill variant** of Huawei's sixth-generation Ascend silicon, forming a dual-variant strategy with the 960DT. At **HUAWEI CONNECT 2026 in Shanghai on September 17, 2026**, rotating chairman Wang Tao announced that the 960 family had completed development ahead of schedule with overall performance doubled, and that the 960PR would **launch in Q3 2027** — one quarter earlier than the original roadmap.

It differs from the 960DT in exactly two respects, and the direction is deliberate: **FP4 compute doubles to 8 PFLOPS** (the 960DT delivers 4 PFLOPS), while the **memory subsystem shrinks** — capacity drops to **192 GB** and bandwidth to **2.4 TB/s** (the 960DT offers 288 GB at 9.6 TB/s). **Die-to-die interconnect bandwidth is identical on both parts at 2.2 TB/s.** This trade — more compute, less memory — reflects the engineering reality that Prefill is compute-bound while Decode is bandwidth-bound. An entire prompt is chewed through in one parallel pass, so compute is the constraint; token-by-token generation is the phase limited by streaming weights.

The 950 generation used the same kind of split, pairing the high-bandwidth part with the cost-optimized one (the 950PR on HiBL 1.0 at 1.6 TB/s, the 950DT on HiZQ 2.0 at 4 TB/s). At 8 PFLOPS of FP4, the 960PR delivers **4x** the FP4 throughput of the preceding 950PR (2 PFLOPS) — the largest single-metric gain in this generation, and the one figure Huawei explicitly framed as exceeding its own prior projection.

At the system level, the 960PR is the compute tile of the **Ascend 960 SuperPoD**, the **first supernode in the industry to adopt NPO (Near-Packaged Optics) engines**. Built on **Lingqu UnifiedBus plus the Hi-ONE** optical engine, a single supernode scales to **4,096 accelerators** and **8 EFLOPS FP8 / 16 EFLOPS FP4** in a fully liquid-cooled orthogonal design. The 960PR pairs with the **liquid-cooled Atlas 960 SuperPoD**, planned for Q3 2027.

> ⚠️ **Disclosure caveat**: Huawei has **not published** the 960PR's **process node, memory technology (whether it remains HBM at all), core count, or TDP**. Some reporting infers from keynote slides that the 960PR may have moved to cheaper LPDDR rather than HBM — if so, the 2.4 TB/s figure would need to be read on an LPDDR basis, but Huawei has never confirmed this. The Memory Type field below is therefore marked "Not disclosed" with no speculation. Like the 960DT, the 960PR is **not sold as a standalone card** but delivered as a supernode or cluster.

## Key Specifications

| Parameter | Value |
|------|------|
| **Architecture** | SIMD/SIMT dual programming model (new-generation Ascend microarchitecture) |
| **Process** | Not disclosed |
| **Memory** | 192 GB |
| **Memory Type** | Not disclosed |
| **Memory Bandwidth** | 2.4 TB/s |
| **FP8** | 2 PFLOPS |
| **FP4** | 8 PFLOPS |
| **FP16** | Not disclosed |
| **INT8** | Not disclosed |
| **TDP** | Not disclosed |
| **Interconnect** | 2.2 TB/s (die-to-die) |
| **Release / Production** | Q3 2027 |

> 📌 **On undisclosed fields**: process node, memory type, FP16 and INT8 compute, and TDP are all withheld by Huawei, so every one of them is marked "Not disclosed" above with no speculative fill.
>
> 📌 **On the 8 PFLOPS FP4 figure**: some Chinese-language reports mistakenly recorded the 960PR's FP4 compute as 4 PFLOPS, identical to the 960DT. Huawei's English HUAWEI CONNECT materials, Tom's Hardware, and Wccftech all give **2 PFLOPS FP8 and 8 PFLOPS FP4** for the 960PR; this card follows the latter.
>
> 📌 **Supported data formats**: FP32, HF32, FP16, BF16, FP8, MXFP8, HiF8, MXFP4, HiF4 (officially listed as supported; no per-format compute figures given).

## Key Features

### 1. 960PR vs 960DT: More Compute, Less Memory

| Dimension | **960PR** (inference / Prefill) | 960DT (training / Decode) |
|------|---------------------------------|---------------------------|
| **FP8 compute** | 2 PFLOPS | 2 PFLOPS |
| **FP4 compute** | **8 PFLOPS** | 4 PFLOPS |
| **Memory capacity** | 192 GB | 288 GB |
| **Memory bandwidth** | 2.4 TB/s | 9.6 TB/s |
| **Die-to-die interconnect** | 2.2 TB/s | 2.2 TB/s |
| **Positioning** | Prefill (first-token generation), recommendation | Training, Decode (token-by-token generation) |
| **Paired SuperPoD** | Atlas 960 (**liquid-cooled**, Q3 2027) | Atlas 860 (**air-cooled**, Q2 2027) |
| **Launch** | Q3 2027 | Q2 2027 |

### 2. FP4 Inference Throughput Doubles

- FP4 compute rises from 2 PFLOPS on the 950PR to **8 PFLOPS** — the largest single-metric jump in this generation
- Targeted at Prefill, where an entire prompt is processed in one parallel sweep and compute-unit utilization far exceeds that of token-by-token decoding
- Huawei reports that the Ascend 960 SuperPoD delivers up to **2.5x inference throughput and up to 70% lower inference latency** versus the preceding Atlas 950 SuperPoD on ten-trillion-parameter models (a system-level figure, not a single-card comparison)

### 3. Low-Latency Orientation for Agent Workloads

- Designed to work with PD (Prefill / Decode) disaggregated deployment in the CANN ecosystem, forming a heterogeneous pipeline of a Prefill pool and a Decode pool
- The 960PR takes the Prefill side while the 960DT takes Decode — Huawei's recommended pairing
- The upgraded Kunpeng supernode adds a 256 TB unified memory pool over full-optical Lingqu networking, aimed at high-density Agent sandboxes and vector retrieval

### 4. An NPO Optical SuperPoD

- The Ascend 960 SuperPoD is the **first supernode in the industry to use NPO (Near-Packaged Optics) engines**
- The **Hi-ONE optical engine** delivers **7.2T** per engine — the first NPO product with mass-production readiness, currently the highest transmission capacity in the industry, and the only one with a built-in light source
- **Orthogonal architecture and full liquid cooling**, with unified memory addressing over Lingqu, scaling to **4,096 cards**
- **5,500 Hi-ONE engines** replace the **48,000 800G optical modules** that would otherwise be needed, cutting power by more than **550 kW**
- Mean time between failures doubles and system **availability reaches 99.8%**
- Multiple supernodes interconnect over Lingqu or RoCE: up to **512,000 accelerators** on a two-tier CLOS four-plane fabric, and up to **1 million** with multi-track topologies

### 5. Ecosystem Status

- Over **1,000 Ascend supernodes** have been delivered to more than 370 customers, and the Ascend 950 SuperPoD has entered large-scale commercial deployment
- **CANN is fully open source** and in normalized community operation; third-party developers account for 61% of contributors, with monthly active developers above 5,200
- The accompanying **OceanStor M900** cluster provides one-hop direct access to petabyte-scale KV cache over the Lingqu bus, with up to 64 PB per cluster

## Use Cases

- ✅ **Prefill stage of large-model inference** (long-context input, first-token generation)
- ✅ **Recommendation, search, and ad ranking** (low-latency, high-concurrency workloads in e-commerce, content platforms, and social media)
- ✅ **Prefill pool in a PD-disaggregated architecture** (forming a heterogeneous inference pipeline with the 960DT)
- ✅ **Fast time-to-first-token for Agent applications** (paired with the Kunpeng supernode unified memory pool)
- ❌ Standalone card procurement (sold as supernode or cluster)
- ❌ Deployment within 2026 (the chip launches in Q3 2027)
- ❌ Token-by-token Decode (bandwidth is only 2.4 TB/s — route that work to the 960DT)

## Comparison

- [Huawei Ascend 960](/docs/cards/huawei/ascend-960) — family overview card covering the SuperPoD and the full roadmap
- [Huawei Ascend 960DT](/docs/cards/huawei/ascend-960dt) — same-generation training / Decode sibling (288 GB, 9.6 TB/s, 4 PFLOPS FP4)
- [Huawei Ascend 950PR](/docs/cards/huawei/ascend-950pr) — preceding inference card (2 PFLOPS FP4, 128 GB, 1.6 TB/s)
- [NVIDIA Rubin CPX](/docs/cards/nvidia/rubin-cpx) — the comparable "Prefill-specialized with large memory" global design
- [Full comparison table](/docs/comparison)

## Data Sources

- [Huawei official: Huawei launches the world's first NPO supernode, the Ascend 960 SuperPoD (2026-09-17)](https://www.huawei.com/cn/news/2026/9/hc-ascend960-supernode) — Hi-ONE at 7.2T, 4,096 cards, 8 EFLOPS FP8 / 16 EFLOPS FP4, 5,500 Hi-ONE engines replacing 48,000 800G modules, 99.8% availability, CANN open source and developer metrics
- [Wccftech: Huawei Brings Huge Inference Boost With Its Next-Gen Ascend 960 Chips In 2027](https://wccftech.com/huawei-ascend-960dt-960pr-2027-970-2028980-2028-superpods-ai/) — 960PR at 8 PFLOPS FP4, 192 GB, 2.4 TB/s, 2.2 TB/s interconnect, and the Q3 2027 timeline
- [Tom's Hardware: Huawei shelves global AI chip rollout as China's own demand outstrips supply](https://www.tomshardware.com/tech-industry/artificial-intelligence/huawei-shelves-global-ai-chip-rollout-as-chinas-own-demand-outstrips-supply-15-488-chip-atlas-clusters-leverage-optical-networking-to-counter-nvidia-scales-to-120-eflops) — the full 960PR spec row alongside B300 and Rubin R200 comparisons
- [heise online: Huawei packs 4096 AI accelerators into a massive server](https://www.heise.de/en/news/Huawei-packs-4096-AI-accelerators-into-a-massive-server-11458882.html) — the speculation that the 960PR may use LPDDR instead of HBM, and the note that process and power are withheld
- [KrakaTech: Huawei Accelerates AI Chips — Ascend 960DT Arrives in Q1 2027](https://www.krakatech.com/posts/2026-09-18-huawei-accelerates-ai-chips-ascend-960dt-arrives-in-q1-2027) — independent English cross-check of the 960PR's 8 PFLOPS FP4, 192 GB, and 2.4 TB/s
