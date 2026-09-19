---
id: tencent-zixiao
title: "Tencent Zixiao"
description: "Tencent Penglai Laboratory's first cloud AI inference chip, released in 2021-11 and mass-produced in 2023, with HBM2e co-packaged via 2.5D packaging and built-in CV and video codec accelerators, delivering 3x acceleration for top business lines and 45%+ cost savings, with per-card load reaching 4x that of the NVIDIA T4"
keywords: [Tencent, Tencent, Zixiao, Zixiao, Penglai Laboratory, AI inference chip, HBM2e, 2.5D packaging, Enflame, Tencent Meeting real-time subtitles, domestic AI chip]
vendor: others
vendor_full: "Tencent"
series: "Zixiao"
release_date: "2021-11"
status: "Mass production"
---

# Tencent Zixiao

## Product Overview

**Zixiao** is **Tencent's first cloud AI inference chip**, developed by its **Penglai Laboratory**. On **2021-11-03**, at the 2021 Tencent Digital Ecosystem Summit, Dowson Tang, Tencent Senior Executive Vice President and CEO of the Cloud and Smart Industries Group, publicly revealed Tencent's chip-making plan for the first time, along with three in-house chips: **"Zixiao" for AI computing, "Canghai" for video processing, and "Xuanling" for high-performance networking**. Tencent Cloud President Qiu Yuepeng stated at the event that Zixiao's **performance improves 100% over the industry**, and that it had already **taped out successfully and been powered on**.

The core of Zixiao's architecture is **breaking the "memory wall" of AI chips**: the chip uses **2.5D packaging technology to co-package HBM2e memory with the AI core**, overcoming the memory bandwidth bottleneck that constrains compute performance; meanwhile, **computer vision (CV) accelerators and video codec accelerators are added inside the chip**, with targeted optimization for Tencent's high-frequency workloads in image/video processing, natural language processing, and search and recommendation. It is an **inference-dedicated NPU/ASIC, not intended for training**.

**Development entity and collaboration model**: Zixiao's architecture and scenario definition were led by Tencent's **Penglai Laboratory (founded in 2020, focused on full end-to-end chip design and verification)**, with **Enflame (Shanghai Enflame Technology Co., Ltd.) deeply participating in the joint R&D** — Tencent has invested in Enflame since 2018 and is currently its largest shareholder (holding about 20.5%). Chip IP and deployment belong to Tencent, mainly for Tencent's internal businesses and Tencent Cloud; **the chip is not sold retail externally**.

**Mass production and deployment**: as of **2023**, Zixiao had **entered mass production and been deployed at scale across multiple of Tencent's top business lines**, delivering **up to 3x compute acceleration** and **over 45% overall cost savings** in Tencent's business scenarios, while **speeding up speech-to-text by 4.7x and increasing OCR recognition throughput by 2.4x**. Its landmark deployment is **Tencent Meeting real-time subtitles**: Zixiao has been **fully launched** (covering over 95% of total subtitle traffic in meetings), with **per-card load of a Zixiao machine reaching 4x that of the NVIDIA T4**, timeout rates **reduced from 0.005% to 0**, and overall costs cut by 75%. Other applications include advertising recommendation, OCR text recognition, image and speech denoising, content moderation, and Hunyuan large-model inference; Tencent Cloud also offers inference acceleration instances equipped with Zixiao externally. The accompanying software stack is Tencent's self-developed high-performance inference runtime, **LightRuntime** (supporting Auto Batch, Auto Padding, and multi-model scheduling).

## Core Specifications

| Parameter | Value |
|-----------|-------|
| **Architecture** | Tencent proprietary AI inference NPU/ASIC architecture (built-in CV accelerator + video codec accelerator) |
| **Process Node** | **Not disclosed** (never officially announced; TSMC 7nm circulates in the industry as unverified supply chain information) |
| **FP16 / BF16 Compute** | **Not disclosed** (third-party research reports claim the Zixiao C100 approaches the NVIDIA A10, with FP16 peak compute about 2x the comparison card) |
| **INT8 Compute** | **Not disclosed** |
| **FP32 Compute** | **Not disclosed** |
| **Memory Capacity** | **Not disclosed** |
| **Memory Type** | **HBM2e** (officially confirmed, co-packaged with the AI core via 2.5D packaging) |
| **Memory Bandwidth** | **Not disclosed** |
| **TDP** | **Not disclosed** (third-party sources claim about 70% lower power than solutions such as the NVIDIA T4) |
| **Interconnect** | Not disclosed |
| **Interface** | Not disclosed (deployed as boards in Tencent Xingxinghai custom servers) |
| **Packaging** | **2.5D advanced packaging** (HBM2e + AI core co-packaged) |
| **Relative Performance** | Official framing: **performance improves 100% over the industry**; **3x compute acceleration** in business scenarios; per-card load = **4x the NVIDIA T4** |
| **Cost Efficiency** | Official framing: **overall cost savings of over 45%** (75% cost reduction in the Tencent Meeting scenario) |
| **Software Stack** | LightRuntime (Tencent's self-developed high-performance inference runtime, supporting ONNX, Auto Batch, Auto Padding, multi-Session scheduling) |
| **Launch** | **2021-11-03** (2021 Tencent Digital Ecosystem Summit) |
| **Mass Production/Availability** | **Mass-produced in 2023** and deployed at scale in Tencent's top businesses; internal and Tencent Cloud use only, not sold retail |

> ⚠️ **Extremely Limited Specification Disclosure**
> Tencent has **never publicly released hard specifications for Zixiao such as compute (TFLOPS/TOPS), memory capacity, memory bandwidth, TDP, or process node**; officially it has only confirmed "2.5D packaging + HBM2e + proprietary architecture" and relative performance improvement figures.
> The circulating "TSMC 7nm" is secondhand supply chain information, **not confirmed by Tencent**; "Zixiao C100 performance approaching the NVIDIA A10" comes from third-party securities research, also not an official framing. All "Not disclosed" fields on this page are left unfilled rather than speculated.

## Subsequent Evolution

| Model | Time | Positioning and Public Information |
|-------|------|-------------------------------------|
| **Zixiao (V1)** | Released 2021-11 / mass-produced 2023 | Pure AI inference NPU, 2.5D + HBM2e, covering CV, NLP, recommendation, advertising, speech transcription, OCR, and Hunyuan large-model inference |
| **Zixiao 2.0** | Released 2026-07 (WAIC 2026) | For large-model **training and inference** (unified training and inference); per Tencent Cloud, **training performance improves 4x and inference throughput 3x over the previous generation** |

> **Zixiao 2.0 Information Note**: Zixiao 2.0 was released in July 2026 at WAIC 2026; according to public reports, Tencent plans for in-house Zixiao chips to account for **30%** of new additions in 2026, with deployment scale expanding to the **100,000-card** level by year-end. Some sources call Zixiao 2.0 Tencent's "sixth-generation in-house AI chip"; that claim comes from UGC platforms and **its reliability awaits official confirmation**. At the highest-end training compute, Zixiao 2.0 still falls short of NVIDIA H100/B200-class hardware; Tencent's training-compute self-sufficiency route advances on two tracks: "in-house Zixiao + controlling stake in Enflame".

## Key Features

- **2.5D packaging + HBM2e breaking the memory wall**: co-packaging HBM2e with the AI core specifically addresses the memory bandwidth bottleneck of inference scenarios — Zixiao's most core architectural innovation
- **Built-in CV accelerator and video codec accelerator**: dedicated hardware offload for Tencent's image/video-heavy business workloads, rather than a purely general matrix engine
- **Inference-dedicated positioning**: V1 explicitly does not do training; the architecture is highly bound to Tencent's own business scenarios
- **Official performance framing**: performance improves 100% over the industry; 3x compute acceleration in business scenarios; over 45% overall cost savings
- **Landmark Tencent Meeting real-time subtitle deployment**: fully launched, covering 95%+ of total subtitle traffic, per-card load of 4x T4, timeout rate reduced to 0, costs down 75%
- **Major speech and OCR speedups**: speech-to-text 4.7x faster, OCR throughput up 2.4x
- **LightRuntime software stack**: Auto Batch improving throughput by about 20%, Auto Padding automatic bucketing, multi-Session priority scheduling; already refined in Tencent Meeting, WeChat, and other businesses
- **Deep Hunyuan large-model optimization**: co-tuned with Tencent's Hunyuan large model
- **Tencent–Enflame collaborative R&D model**: Penglai Laboratory leads + Enflame co-develops, with Tencent holding about 20.5% of Enflame
- **Full-stack closed loop**: Zixiao chip + Xingmai high-performance network + Xingxinghai custom servers + TI-One platform + Hunyuan large model
- **Limitations**: not sold externally; V1 does not support training; hard specifications long opaque, preventing like-for-like compute comparisons

## Vendor Information

| Parameter | Value |
|-----------|-------|
| **Company** | Tencent Holdings Ltd. (HKEX **00700.HK**) |
| **Headquarters** | Nanshan District, Shenzhen, Guangdong Province |
| **Founded** | November 1998 |
| **Chip Development Entity** | **Penglai Laboratory** (founded in 2020, responsible for end-to-end chip design and verification); Shannon Laboratory (participated in the Canghai video chip) |
| **Joint R&D Partner** | Shanghai Enflame Technology Co., Ltd. (Tencent holds about **20.5%**, largest shareholder) |
| **Business Affiliation** | Cloud and Smart Industries Group (CSIG) / Tencent Cloud |
| **In-House Chip Matrix** | **Zixiao** (AI inference), **Canghai** (video transcoding, started 2019 / mass-produced 2022, tens of thousands of units deployed), **Xuanling** (smart NIC, 4x performance improvement) |
| **Other Chip Investments** | Enflame (AI chips), Yunbao Intelligence (DPU), Lightelligence (photonic chips), Barefoot Networks (programmable network chips) |
| **Sales Model** | **No retail chip sales**; available only to Tencent's internal businesses and Tencent Cloud inference acceleration instances |
| **Official Website** | https://www.tencent.com |

## Use Cases

- ✅ Tencent Meeting real-time subtitles / streaming speech recognition (landmark deployment)
- ✅ WeChat / Channels content recommendation and advertising inference
- ✅ OCR text recognition, image and speech denoising
- ✅ Content safety moderation (image/video CV inference)
- ✅ Tencent Hunyuan large-model inference services
- ✅ Tencent Cloud external inference acceleration instances (delivered as PaaS)
- ✅ Inference workloads such as financial risk control and medical imaging
- ❌ **External chip/card procurement** (Tencent does not sell retail; only indirectly usable via Tencent Cloud)
- ❌ Large-model AI training (V1 is a pure inference architecture; training requires Zixiao 2.0 or external GPUs)
- ❌ Graphics rendering and general GPGPU computing (dedicated AI ASIC, no graphics capability)
- ❌ Direct migration from the CUDA ecosystem (requires adaptation via the LightRuntime / ONNX path)
- ❌ Situations requiring public specifications for comparison (hard metrics not disclosed)

## Related Cards

- [Alibaba Hanguang 800](/docs/cards/others/alibaba-hanguang-800) — Direct benchmark from a major Chinese internet company's in-house AI inference chip (Alibaba T-Head, also an internal NVIDIA T4 replacement route)
- [Enflame YunSui i20](/docs/cards/others/enflame-i20) — Enflame's cloud inference product, the joint R&D partner's own product line
- [Enflame YunSui i10](/docs/cards/others/enflame-i10) — Enflame's first-generation cloud inference card
- [Moore Threads MTT S5000](/docs/cards/others/moore-threads-mtt-s5000) — Domestic full-function GPU route comparison (general-purpose GPU vs dedicated ASIC)
- [MetaX C600](/docs/cards/others/metax-c600) — Domestic high-end general-purpose GPU comparison
- [Cambricon MLU 370](/docs/cards/others/cambricon-mlu-370) — Domestic dedicated AI acceleration chip comparison

## References

- [Tencent reveals three in-house chips, some entering tape-out (China Electronics News, 2021-11-12, official framing of the Zixiao/Canghai/Xuanling debut)](https://epaper.cena.com.cn/oldpaper/content/2021-11/12/content_747945.htm)
- [Latest progress on Tencent's in-house chip "Canghai": 8 global firsts, tens of thousands of units mass-produced and deployed (Electronic Product World, including a recap of the November 2021 three-chip launch)](https://www.eepw.com.cn/zhuanlan/301698.html)
- [Computer industry April 2024 research views: a review of major internet companies' in-house chips (Haitong Securities, Zixiao mass production and Tencent Meeting deployment data)](https://reportify-1252068037.cos.ap-beijing.myqcloud.com/media/production/s_7064beca_7064beca113fe07ef86b0179ed4543d8.pdf)
