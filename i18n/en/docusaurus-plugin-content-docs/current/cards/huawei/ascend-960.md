---
id: ascend-960
title: Huawei Ascend 960
sidebar_label: Huawei Ascend 960
description: "Huawei Ascend 960 announced specs (HUAWEI CONNECT 2026): 960DT doubles compute to FP8 2 PFLOPS / FP4 4 PFLOPS, 288GB in-house HBM, 9.6TB/s bandwidth, launching 2027 Q2; NPO SuperPod with 4096 cards, 8 EFLOPS FP8, 1PB HBM."
keywords: [Huawei Ascend 960, Ascend 960, Ascend 960DT, Ascend 960PR, Atlas 960 SuperPoD, Atlas 860, NPO, Hi-ONE, UnifiedBus, Tao's Law]
---

# Huawei Ascend 960

## Product Overview

**Huawei Ascend 960** is the fifth-generation Ascend AI chip, **officially announced on September 17, 2026 by Rotating Chairman Wang Tao at HUAWEI CONNECT 2026 (Shanghai)**. The biggest difference from its predecessor: the 960 is no longer a roadmap teaser, but a **complete commercial combination of dual versions (960DT training / 960PR inference) + dual SuperPods (Atlas 860 air-cooled / Atlas 960 liquid-cooled)**, and both chips are **ready ahead of schedule** — the 960DT three quarters early, the 960PR one quarter early.

Also announced: **the world's first SuperPod using NPO (near-package optics) technology — the Ascend 960 SuperPod**: 4096 interconnected cards per node, 8 EFLOPS FP8, 1PB HBM, built on the "UnifiedBus + Hi-ONE optical engine". Huawei also confirmed the **one-chip-per-year** cadence: Ascend 970 in 2028, Ascend 980 in 2029.

> ⚠️ Information note: single-chip specs on this card follow the official HC2026 disclosures. In August 2026, the Digital China Summit reported that "the Atlas 960 SuperPoD supports 15,488 Ascend cards"; in September the official figure was **4096 cards per SuperPod** (a revision of the earlier 15,488 claim; this card follows the official press release).

## Core Specifications

The following are the **Ascend 960DT** (training version, officially disclosed values):

| Parameter | Value |
|------|------|
| **Architecture** | Da Vinci v6 (Ascend 6th generation) |
| **FP8 Compute** | 2 PFLOPS |
| **FP4 Compute** | 4 PFLOPS |
| **Memory** | 288 GB (in-house HBM, max configuration) |
| **Memory Bandwidth** | 9.6 TB/s |
| **TDP** | 700 W (presumed, not officially disclosed) |
| **Debut** | 2027 Q2 |

> 📌 Compared with the 950 series (FP8 1 PFLOPS / FP4 2 PFLOPS), every key metric of the 960 **doubles**: FP8 2→x2, FP4 4→x2, memory 288GB vs 144GB (950DT), bandwidth 9.6TB/s vs 4TB/s. Huawei calls this continuous doubling path "**Tao's Law**".
>
> ⚠️ TDP is a third-party estimate; the official figure has not been published. The existence of an air-cooled version (Atlas 860) implies per-card power must stay within what air cooling can handle.

## 960DT vs 960PR Dual Versions

| Dimension | **960DT** (training) | 960PR (inference) |
|------|-------------------|----------------|
| **FP8 Compute** | 2 PFLOPS | Not separately disclosed |
| **Ready** | **2027 Q1** (3 quarters early) | 2027 Q3 (1 quarter early) |
| **Launch** | **2027 Q2** | 2027 Q3 |
| **Paired SuperPod** | Atlas 860 (**air-cooled**) | Atlas 960 (**liquid-cooled**) |
| **Positioning** | Ten-trillion-parameter model training + high-concurrency inference | Large-scale inference deployment |

## Ascend 960 SuperPod (world's first NPO SuperPod)

| Metric | Ascend 950 SuperPod | **Ascend 960 SuperPod** |
|------|-----------------|---------------------|
| **Cards per node** | 1024 cards (shown at WAIC 2026) | **4096 cards** |
| **FP8 Compute** | 8 EFLOPS (8192-card full config) | **8 EFLOPS** (single node) |
| **FP4 Compute** | 16 EFLOPS (8192-card full config) | **16 EFLOPS** (single node) |
| **Total HBM** | 1152 TB (8192-card full config) | **1 PB** (4096 cards) |
| **Interconnect RTT** | 3 μs | **2 μs** (domain-wide D2D) |
| **Optical interconnect** | UnifiedBus 2.0 | **NPO optical engine Hi-ONE** (industry's first mass production) |

### NPO (Near-Package Optics) Key Figures

- **Hi-ONE optical engine**: **7.2T** transmission capacity per engine, the industry's first mass-produced NPO product, the highest current transmission capability, and the only one with a built-in light source
- **5500 Hi-ONE units replace 48000 800G optical modules**, cutting power by more than **550 kW**
- System mean time between failures **doubled**, overall availability at **99.8%**
- **Why NPO over CPO**: NPO keeps optical engines independent while enabling short-distance opto-electric handoff, avoiding CPO's reliability, manufacturability, and serviceability problems, and preserving the existing optical module industry ecosystem
- **MFU gain** (Huawei Markov Lab simulation): in a 100k-card cluster of 4K SuperPods, **MFU improves 2.75x** versus 8-card server networking — in traditional architectures, intra-cluster communication takes over 40% of training time

### Cluster Scaling Path

- Multiple 960 SuperPods interconnected via UnifiedBus or RoCE: up to **512,000 cards** (two-tier CLOS four-plane fabric)
- With multi-rail topology: up to **1 million cards** in an Ascend SuperPod cluster
- Kunpeng SuperPod upgraded in step: all-optical networking up to 4096 nodes, 256TB unified memory pool

## Annual Cadence Roadmap (Tao's Law)

| Year | Chip | Status |
|------|------|------|
| 2026 | Ascend 950DT / 950PR | In volume commercial use |
| **2027** | **Ascend 960DT / 960PR** | **Ready ahead of schedule, Q2 / Q3 launches** |
| 2028 | Ascend 970 | Announced, compute specs continue to double |
| 2029 | Ascend 980 | Announced, memory bandwidth / capacity / interconnect bandwidth all up sharply |

## Ecosystem and Deployment Status

- **Deployment base**: over **1000** Ascend 910C SuperPods deployed and the Ascend 950 SuperPod in volume commercial use — the 960 climbs from this two-step foundation
- **CANN ecosystem crosses the tipping point**: external developers now account for **61%** (surpassing internal teams for the first time), monthly active developers past **5200**, and CANN is fully open-sourced with regular community operations
- **Kunpeng + Ascend**: over 7.8 million developers gathered, with 20,000+ industry solutions incubated
- **Storage companion**: the OceanStor M900 cluster (PB-scale KV cache one hop away over the UnifiedBus) released in step

## Competitor Comparison

| Metric | Ascend 960DT | NVIDIA B200 | NVIDIA Rubin R200 | AMD MI455X |
|------|------------|-------------|-------------------|------------|
| FP8 compute | 2 PFLOPS | 4.5 PFLOPS | 12.5 PFLOPS | 2.3 PFLOPS |
| FP4 compute | 4 PFLOPS | 9 PFLOPS | 50 PFLOPS | 4.6 PFLOPS |
| HBM capacity | 288 GB | 192 GB | 288 GB | 288 GB |
| HBM bandwidth | 9.6 TB/s | 8 TB/s | 16 TB/s | 12 TB/s |
| Process | SMIC domestic (unconfirmed) | TSMC 4NP | TSMC 4NP | TSMC 3NM |
| Launch | 2027 Q2 | Available | Available | Available |

> The 960's single-card absolute performance still lags NVIDIA's flagship by a generation (Rubin R200 FP8 is about 6x higher); Huawei's strategy is to close the gap with **SuperPod system-level capabilities** (unified memory addressing, 2.75x MFU, NPO optical interconnect) — evaluating domestic compute should not come down to a single-chip PFLOPS comparison.

## Use Cases

- ✅ **Ten-trillion-parameter LLM training** (4096-card SuperPod + unified memory addressing)
- ✅ **High-concurrency inference** (inference latency down ~70% and training throughput up ~2.3x vs the predecessor, official figures)
- ✅ **Standard server room deployment** (Atlas 860 air-cooled SuperPod, no liquid cooling retrofit needed)
- ❌ Single-card purchase (delivered as SuperPod / cluster)
- ❌ Deployment within 2026 (chips launch in 2027)

## Vendor Information

| Parameter | Value |
|------|------|
| **Manufacturer** | Huawei Technologies Co., Ltd. (HiSilicon) |
| **Website** | https://www.hiascend.com |
| **Announced** | 2026-09-17 (HUAWEI CONNECT 2026, Shanghai) |
| **960DT launch** | 2027 Q2 |
| **960PR launch** | 2027 Q3 |

## References

- [Huawei website: Launching the world's first NPO-based SuperPod (Ascend 960 SuperPod)](https://www.huawei.com/cn/news/2026/9/ascend-960-superpod)
- [EEWorld: Huawei Ascend 960 chip to launch ahead of schedule](https://www.eet-china.com/mp/a525834.html)
- [Huanqiu.com: Huawei launches the Ascend 960 SuperPod, accelerating ten-trillion-scale model training and inference](https://3w.huanqiu.com/a/c36dc8/4TFV27fCReZ)

## Related Products

- [Huawei Ascend 950](/docs/cards/huawei/ascend-950) - Previous SuperPod generation (8192-card plan)
- [Huawei Ascend 950DT](/docs/cards/huawei/ascend-950dt) - Previous training card (FP8 1 PFLOPS)
- [Huawei Ascend 950PR](/docs/cards/huawei/ascend-950pr) - Previous inference card
- [Huawei Ascend 970](/docs/cards/huawei/ascend-970) - Next generation (announced for 2028)
- [Full comparison table](/docs/comparison)
