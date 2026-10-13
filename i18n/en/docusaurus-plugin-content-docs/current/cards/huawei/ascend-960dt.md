---
id: ascend-960dt
title: "Huawei Ascend 960DT: Specs, 288GB HBM, 9.6 TB/s, 2027 Launch"
sidebar_label: "Ascend 960DT"
description: "Huawei Ascend 960DT specs: new SIMD/SIMT microarchitecture, 2 PFLOPS FP8, 4 PFLOPS FP4, 288GB HBM at 9.6 TB/s, 2.2 TB/s interconnect. Every metric doubles over the 950DT; ready Q1 2027, on sale Q2 2027, paired with the air-cooled Atlas 860 SuperPoD."
keywords: [Huawei Ascend 960DT, Ascend 960DT, SIMD/SIMT, HiF8, HiF4, 288GB HBM, 9.6 TB/s, Atlas 860, Tau Scaling Law, training accelerator]
---

# Huawei Ascend 960DT

## Product Overview

The **Ascend 960DT** is the **training and Decode variant** of Huawei's sixth-generation Ascend AI silicon. It shares a microarchitecture generation with the Prefill-oriented 960PR, but its memory subsystem is deliberately skewed toward bandwidth. At **HUAWEI CONNECT 2026 in Shanghai on September 17, 2026**, rotating chairman Wang Tao announced that the 960 family had completed development ahead of schedule with overall performance doubled, and that the 960DT would be **ready in Q1 2027** — three quarters earlier than the original roadmap.

The officially disclosed headline figures are **2 PFLOPS of FP8 compute, 4 PFLOPS of FP4 compute, 288 GB of memory capacity, 9.6 TB/s of memory bandwidth, and 2.2 TB/s of die-to-die interconnect**. Against the preceding 950DT (1 PFLOPS FP8, 2 PFLOPS FP4, 144 GB, 4 TB/s, 2 TB/s interconnect), compute, capacity, bandwidth, and interconnect all **double or better** — with the 9.6 TB/s memory bandwidth representing a **2.4x** gain over the 950 generation. Huawei calls this continuously doubling trajectory the **Tau Scaling Law (τ-law)**.

The 960DT moves to an all-new **SIMD/SIMT dual-programming-model microarchitecture** with full downward coverage of **FP32, HF32, FP16, BF16, FP8, MXFP8, HiF8, MXFP4, and HiF4** data formats. HiF8 and HiF4 are Huawei's own formats that account for both precision and dynamic range; the company claims a single one of them can express information that would otherwise require two standard floating-point formats. The practical effect is that Huawei's low-precision compute path no longer depends entirely on formats defined by NVIDIA.

At the system level, the 960DT is the compute tile of the **Ascend 960 SuperPoD**. Alongside it, Huawei introduced the **first supernode in the industry to adopt NPO (Near-Packaged Optics) engines**, built on **Lingqu UnifiedBus plus the Hi-ONE** optical engine. A single supernode scales to **4,096 accelerators** and delivers **8 EFLOPS FP8 and 16 EFLOPS FP4** in a fully liquid-cooled, orthogonal-architecture design. The 960DT pairs with the **air-cooled Atlas 860 SuperPoD** (planned for Q2 2027), which can be deployed in conventional data halls without any liquid-cooling retrofit.

> ⚠️ **Disclosure caveat**: Huawei has **not published** the 960DT's **process node, packaging, core count, or TDP**. Official materials give only compute and memory figures from a roadmap slide. Third-party analysis suggests two compute chiplets alongside eight HBM stacks based on keynote photography, but that is inference rather than an official claim. Volume delivery comes as a **supernode or cluster**, never as a standalone card.

## Key Specifications

| Parameter | Value |
|------|------|
| **Architecture** | SIMD/SIMT dual programming model (new-generation Ascend microarchitecture) |
| **Process** | Not disclosed |
| **Memory** | 288 GB |
| **Memory Type** | Not disclosed |
| **Memory Bandwidth** | 9.6 TB/s |
| **FP8** | 2 PFLOPS |
| **FP4** | 4 PFLOPS |
| **FP16** | Not disclosed |
| **INT8** | Not disclosed |
| **TDP** | Not disclosed |
| **Interconnect** | 2.2 TB/s (die-to-die) |
| **Release / Production** | Ready Q1 2027, on sale Q2 2027 |

> 📌 **On undisclosed fields**: process node, memory type (the specific HiBL or HiZQ designation), FP16 and INT8 compute, and TDP are all withheld by Huawei, so every one of them is marked "Not disclosed" above with no speculative fill. Third-party reporting describes the 288 GB / 9.6 TB/s configuration as "on the level of eight 12-layer HBM3E stacks" and speculates CXMT as a possible supplier, but neither is an official Huawei claim.
>
> 📌 **Supported data formats**: FP32, HF32, FP16, BF16, FP8, MXFP8, HiF8, MXFP4, HiF4 (officially listed as supported; no per-format compute figures given).

## Key Features

### 1. All Four Metrics Double

| Metric | Ascend 950DT | **Ascend 960DT** | Change |
|------|-----------|------------------|--------|
| **FP8 compute** | 1 PFLOPS | **2 PFLOPS** | 2x |
| **FP4 compute** | 2 PFLOPS | **4 PFLOPS** | 2x |
| **Memory capacity** | 144 GB | **288 GB** | 2x |
| **Memory bandwidth** | 4 TB/s | **9.6 TB/s** | 2.4x |
| **Die-to-die interconnect** | 2 TB/s | **2.2 TB/s** | 1.1x |

### 2. Bandwidth Tuned for the Decode Stage

- Decode (token-by-token generation) is bound by **memory bandwidth rather than compute**, because model weights must stream through the memory system for every single token
- At 9.6 TB/s across 288 GB, a single card can sustain larger batch sizes and longer context windows
- Paired with MXFP4 and MXFP8 block floating-point formats to further reduce the volume of weights and KV cache moved per step

### 3. Proprietary Low-Precision Formats: HiF8 and HiF4

- Huawei states that HiF8 and HiF4 **account for precision and dynamic range together**, letting a single format express information that would otherwise need two standard floating-point formats
- Huawei's low-precision compute path no longer rests entirely on NVIDIA's FP8 and FP4 encodings
- ⚠️ The accuracy claims cannot be independently verified by anyone outside Huawei

### 4. An NPO Optical SuperPoD

- The Ascend 960 SuperPoD is the **first supernode in the industry to use NPO (Near-Packaged Optics) engines**
- The **Hi-ONE optical engine** delivers **7.2T** per engine — the first NPO product with real mass-production readiness, the highest transmission capacity currently in the industry, and the only one with a built-in light source
- The system uses an **orthogonal architecture and full liquid cooling**, with unified memory addressing over Lingqu, scaling to **4,096 cards**
- **5,500 Hi-ONE engines** replace the **48,000 800G optical modules** that would otherwise be required, cutting power draw by more than **550 kW**
- Mean time between failures doubles and system **availability reaches 99.8%**
- Multiple supernodes interconnect over Lingqu or RoCE: up to **512,000 accelerators** on a two-tier CLOS four-plane fabric, and up to **1 million** with multi-track topologies

### 5. Ecosystem Status

- Over **1,000 Ascend supernodes** have been delivered to more than 370 customers, and the Ascend 950 SuperPoD has entered large-scale commercial deployment
- **CANN is fully open source** and has entered normalized open-community operation; third-party developers now account for 61% of the community, with monthly active developers exceeding 5,200
- The accompanying **OceanStor M900** cluster provides one-hop direct access to petabyte-scale KV cache over the Lingqu bus, extending usable KV cache from gigabytes to terabytes per NPU

## Use Cases

- ✅ **Training frontier models at the ten-trillion-parameter scale** (4,096-card supernode with unified memory addressing)
- ✅ **High-concurrency Decode inference** (where the 9.6 TB/s bandwidth is the core payoff)
- ✅ **Conventional data hall deployment** (air-cooled Atlas 860 SuperPoD, no liquid-cooling retrofit needed)
- ✅ **Workloads that want a proprietary low-precision format stack** (HiF8 and HiF4)
- ❌ Standalone card procurement (sold as supernode or cluster)
- ❌ Deployment within 2026 (the chip launches in 2027)

## Comparison

- [Huawei Ascend 960](/docs/cards/huawei/ascend-960) — family overview card covering the SuperPoD and the full roadmap
- [Huawei Ascend 950DT](/docs/cards/huawei/ascend-950dt) — preceding training card (1 PFLOPS FP8, 144 GB, 4 TB/s)
- [Huawei Ascend 970](/docs/cards/huawei/ascend-970) — next generation (2028, 3.6 PFLOPS FP8, 14 PFLOPS FP4)
- [NVIDIA B200](/docs/cards/nvidia/b200) — contemporary global competitor (4.5 PFLOPS FP8, 9 PFLOPS FP4)
- [NVIDIA Rubin R200](/docs/cards/nvidia/rubin-r200) — next-generation global competitor (12.5 PFLOPS FP8, 50 PFLOPS FP4)
- [Full comparison table](/docs/comparison)

## Data Sources

- [Huawei official: Huawei launches the world's first NPO supernode, the Ascend 960 SuperPoD (2026-09-17)](https://www.huawei.com/cn/news/2026/9/hc-ascend960-supernode) — Hi-ONE at 7.2T, 4,096 cards, 8 EFLOPS FP8 / 16 EFLOPS FP4, 5,500 Hi-ONE engines replacing 48,000 800G modules, 99.8% availability, 512K and 1M-accelerator cluster scaling
- [Wccftech: Huawei Brings Huge Inference Boost With Its Next-Gen Ascend 960 Chips In 2027](https://wccftech.com/huawei-ascend-960dt-960pr-2027-970-2028980-2028-superpods-ai/) — 960DT FP8/FP4, 288 GB, 9.6 TB/s, 2.2 TB/s and the Q1 2027 timeline, plus SIMD/SIMT and the full data-format list
- [Tom's Hardware: Huawei shelves global AI chip rollout as China's own demand outstrips supply](https://www.tomshardware.com/tech-industry/artificial-intelligence/huawei-shelves-global-ai-chip-rollout-as-chinas-own-demand-outstrips-supply-15-488-chip-atlas-clusters-leverage-optical-networking-to-counter-nvidia-scales-to-120-eflops) — full spec table for the 960DT / 960PR / 970 / 980 ladder with cross-vendor comparison
- [heise online: Huawei packs 4096 AI accelerators into a massive server](https://www.heise.de/en/news/Huawei-packs-4096-AI-accelerators-into-a-massive-server-11458882.html) — the eight-HBM-stack layout, the note that process and power are withheld, and the quantified gap to Rubin and MI455X
- [China.com: Ascend 960 chips move up to Q1 next year, performance doubled](https://3g.china.com/act/news/10000169/20260917/49748364.html) — Chinese on-site reporting from HUAWEI CONNECT 2026: air-cooled Atlas 860 in Q2 2027, liquid-cooled Atlas 960 in Q3 2027
