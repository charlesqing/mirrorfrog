---
id: tencent-zixiao-2
title: Tencent Zixiao 2.0
sidebar_label: Tencent Zixiao 2.0
description: "Tencent Zixiao 2.0 custom AI chip: released at WAIC 2026 in July 2026, co-developed with Enflame, targeting both large-model training and inference. Training performance 4x and inference throughput 3x the previous generation, with 50% gains in Hunyuan training. Process, memory, bandwidth and TDP all undisclosed."
keywords: [Tencent Zixiao 2.0, Zixiao, WAIC 2026, Enflame, Tencent Cloud, Hunyuan, training and inference, Chinese AI chip]
---

# Tencent Zixiao 2.0

## Product Overview

**Tencent Zixiao 2.0** is Tencent's sixth-generation custom AI chip, officially unveiled by Tencent Cloud on **July 20, 2026**, the third day of **WAIC 2026** in Shanghai. It is the second-generation product of Tencent's in-house "Zixiao" chip line. Compared with the first-generation Zixiao released in 2021, the most important positioning change is **expanding from a pure inference chip to a unified training-and-inference design** — Tencent officially describes Zixiao 2.0 as targeting **both large-model training and inference**.

**Performance figures (official Tencent Cloud data)**: Zixiao 2.0 delivers **4x the training performance** and **3x the inference throughput** of the previous generation. In deployment, Tencent's internal businesses were the first to adopt Zixiao 2.0, achieving a **50% performance improvement in Hunyuan large-model training**.

**Development model**: Zixiao 2.0 is **a joint development effort between Tencent and Enflame Technology (燧原科技)**. Tencent's Penglai Laboratory leads chip R&D, with Enflame (in which Tencent holds roughly 20.258%, making it Tencent's largest external shareholder) deeply involved. This mirrors the first-generation Zixiao model — Tencent combining capital ties with joint development to supplement its in-house capabilities, while Enflame also supplies Tencent's training compute.

**Deployment plans**: Tencent Cloud announced that custom Zixiao chips are planned to reach **30% of new custom-chip additions in 2026**, and that total custom-chip deployment is planned to expand to **a 100,000-accelerator scale by the end of 2026**. Over the same period, Tencent Cloud's HCC high-performance computing cluster completed an upgrade now supporting 100,000-accelerator LLM training.

> ⚠️ **Critical disclosure boundary (this site's core principle)**
>
> As with the 2021 first-generation Zixiao, **Tencent has to date published none of Zixiao 2.0's hard specifications** — process node, memory capacity, memory type, memory bandwidth, FP8/FP4/FP16/FP32/INT8 compute, TDP, and chip interconnect are **all undisclosed**. Tencent has only published three **relative multiples** (4x training, 3x inference throughput, 50% Hunyuan training gain) plus deployment scale plans.
>
> Circulating claims such as "Zixiao C200" or "48GB memory per accelerator" originate from third-party media and independent blogs. **Tencent has never confirmed them**, and they have no counterpart in official release information. This page **does not treat them as fact and excludes them from the specification table**.
>
> Every field requiring an absolute number is marked "not disclosed". Compared with inserting unsourceable numbers, **honestly flagging undisclosed information better reflects the real state of the data** — consistent with how this site treats the first-generation Zixiao card.

## Key Specifications

| Item | Specification |
|------|------|
| **Architecture** | Tencent in-house AI chip architecture (unified training and inference; microarchitecture details undisclosed) |
| **Process** | **Not disclosed** |
| **Memory** | **Not disclosed** |
| **Memory Type** | **Not disclosed** |
| **Memory Bandwidth** | **Not disclosed** |
| **FP8** | **Not disclosed** |
| **FP4** | **Not disclosed** |
| **FP16** | **Not disclosed** |
| **FP32** | **Not disclosed** |
| **INT8** | **Not disclosed** |
| **TDP** | **Not disclosed** |
| **Interconnect** | **Not disclosed** |
| **Release / Production** | **Released 2026-07-20** (WAIC 2026, Shanghai); Tencent plans to expand deployment to a 100,000-accelerator scale by end-2026 |

> ⚠️ **The only officially published performance data are relative multiples**:
>
> | Official figure | Value | Note |
> |---------------|-------|------|
> | Training performance gain | 4x | versus previous Zixiao generation |
> | Inference throughput gain | 3x | versus previous Zixiao generation |
> | Hunyuan training gain | 50% | realized business-side benefit |
> | 2026 new custom-chip share | 30% | Tencent Cloud deployment plan |
> | End-2026 deployment scale | 100,000-accelerator class | Tencent Cloud deployment plan |
>
> **Important**: "4x training performance" does **not** mean "per-accelerator compute is 4x the previous generation" — the comparison baseline, precision basis (FP8 / FP16 / INT8), and measurement method (single accelerator vs. cluster) are **all undisclosed**. Without this information any absolute compute derivation would be unreliable.

## Key Features

- **Unified training and inference**: expanding from the first generation's pure inference chip to cover both large-model training and inference is Zixiao 2.0's most important positioning shift
- **Official performance claims**: 4x training, 3x inference throughput (both relative to the previous generation)
- **Already deployed in Hunyuan**: the 50% training gain in Tencent's Hunyuan model represents a realized, production business benefit
- **Tencent + Enflame joint development**: continuing the collaboration begun with Tencent's Enflame investment in 2018 (Tencent holds roughly 20.258%, its largest external shareholder)
- **100,000-accelerator deployment plan**: Tencent targets 30% custom Zixiao share of new additions in 2026 and 100,000-accelerator custom-chip deployment by end-2026
- **Ecosystem collaboration**: at WAIC 2026, Tencent Cloud jointly showcased large-model appliances and intelligent computing clusters with Enflame, Iluvatar CoreX (天数智芯), and MetaX (沐曦)
- **Strategic significance**: reducing reliance on NVIDIA GPUs, forming the core of Tencent's parallel "in-house R&D + investment + procurement" compute strategy
- **Limitations**: **no hard specifications disclosed**, preventing compute-level comparison with any comparable chip; not sold as standalone silicon

## Use Cases

- ✅ **Large-model training and inference inside Tencent** (already deployed for Hunyuan)
- ✅ **Tencent Cloud public AI compute supply** (accessible via cloud service; silicon not sold directly)
- ✅ **Domestic compute substitution scenarios** (enterprise and government customers with high NVIDIA GPU dependency)
- ✅ **Intelligent computing cluster buildouts** (joint solutions with Enflame, Iluvatar CoreX, and MetaX, complementing the 100,000-accelerator HCC cluster)
- ❌ **Specification-based procurement comparisons** (all hard metrics undisclosed)
- ❌ **Direct purchase of chips or boards** (Tencent does not retail; access is via Tencent Cloud only)
- ❌ **Drop-in inference replacement** (3x inference throughput over its own previous generation, but no absolute performance data)

## Comparison

- [Tencent Zixiao (first generation)](/docs/cards/others/tencent-zixiao) - Predecessor (2021 release / 2023 production, inference-only architecture, 2.5D packaging + HBM2e)
- [Enflame i20](/docs/cards/others/enflame-i20) - Enflame's cloud product line, the co-developer of Zixiao 2.0
- [Enflame i10](/docs/cards/others/enflame-i10) - Enflame's first-generation cloud inference card
- [Alibaba Hanguang 800](/docs/cards/others/alibaba-hanguang-800) - Comparable path among Chinese internet giants' in-house AI chips
- [Cambricon MLU 370](/docs/cards/others/cambricon-mlu-370) - Domestic AI accelerator comparison
- [MetaX C600](/docs/cards/others/metax-c600) - Domestic high-end general-purpose GPU comparison

> **Comparison note**: Zixiao 2.0 and the first-generation Zixiao can be compared directly on **official claims** (both are Tencent's own relative multiples). However, Zixiao 2.0 **cannot** be placed into a compute comparison table alongside chips that **do** publish hard specifications, such as Hanguang 800 or MLU 370 — this is the most significant difference in public information between Tencent's in-house chips and domestic peers.

## Data Sources

- [AI Product Hub: Tencent Cloud launches sixth-generation custom AI chip Zixiao 2.0 at WAIC 2026](https://aiproducthub.cn/newsflash/tencent-cloud-zixiao-2-0-ai-chip-waic-2026-launch) — 2026-07-20 release, sixth-generation custom chip, 4x training / 3x inference, 50% Hunyuan training gain, 30% and 100,000-accelerator plans
- [Tencent Cloud Developer Community: Tencent Cloud in July 2026 — full-stack AI infrastructure for the AGI era](https://cloud.tencent.com/developer/article/2712907) — Zixiao 2.0 release details plus the HCC 100,000-accelerator cluster and H200 general availability
- [Zhujiang Daily: Big tech's chip ambitions and its complicated relationship with NVIDIA](http://www.zhujiangdaily.com/detail/affairs/2609070512) — confirms Zixiao 2.0 as a Tencent–Enflame joint development, its training-and-inference positioning, and official performance figures