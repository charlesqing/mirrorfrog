---
id: corerain-caisa
title: "Corerain CAISA (Dataflow AI Chip)"
description: "Corerain CAISA is the world's first dataflow-architecture AI chip, in mass production since 2019 on 28nm; 10.9 TOPS per chip with chip utilization up to 95.4%, and 43.6 TOPS on the X9 card."
keywords: [Corerain, Corerain, CAISA, dataflow, Dataflow, 28nm, high utilization, 10.9 TOPS, Xingkong accelerator card]
vendor: others
vendor_full: "Shenzhen Corerain Technologies Co., Ltd."
series: "CAISA3.0 / Xingkong X3 / X9"
release_date: "2019-06"
status: "Mass production"
---

# Corerain CAISA (Dataflow AI Chip)

## Product Overview

**Corerain** was founded by a team with Imperial College London/Tsinghua backgrounds and focuses on high-performance AI acceleration, with its core asset being a **custom dataflow computing architecture**. On April 9, 2019, Corerain released **CAISA2.0**, the world's first general-purpose AI underlying architecture built on dataflow technology, and on **June 23, 2019** launched **CAISA** (CAISA3.0 engine), the world's first dataflow AI chip, at a Shenzhen event; it has completed mass production.

Unlike mainstream "instruction set architecture" AI chips, CAISA adopts a **dataflow architecture**: the order of data movement controls the order of computation, with the compute stream and data stream running overlapped, eliminating idle compute units and raising chip utilization above 90% (measured at 95.4%). Third-party data show that accelerator cards based on CAISA achieve about 3× measured performance using only about 1/3 of the peak compute of comparable NVIDIA products — a typical Chinese "dataflow" innovative-architecture route.

Around CAISA, Corerain launched the **Xingkong X3** (single chip, 10.9 TOPS, PCIe 3.0 ×8) and **Xingkong X9** (4 CAISA chips, 43.6 TOPS, PCIe 3.0 ×16, 64 video streams) accelerator cards, plus the **RainBuilder** end-to-end automatic compilation toolchain supporting seamless deployment of TensorFlow/PyTorch/Caffe/ONNX frameworks, deployed in security, power, industrial, and other scenarios.

## Core Specifications

| Parameter | Value |
|------|------|
| **Architecture** | Custom dataflow CAISA3.0 architecture (4 CAISA engines, 16,000+ MAC units) |
| **Process Node** | 28nm |
| **FP16 / BF16 Compute** | Not disclosed |
| **INT8 Compute** | **10.9 TOPS** (single-chip peak; Xingkong X9 with four chips: 43.6 TOPS) |
| **FP32 Compute** | Not disclosed |
| **Memory Capacity** | Not disclosed |
| **Memory Type** | DDR (dual channel) |
| **Memory Bandwidth** | >340 Gbps per CAISA chip (dual DDR channels) |
| **TDP** | Not disclosed (chip level); Xingkong X3 dynamic power about 20W |
| **Interconnect** | Not disclosed |
| **Interface** | PCIe 3.0 ×4 (CAISA chip); X3 card PCIe 3.0 ×8, X9 card PCIe 3.0 ×16 |
| **Launch** | 2019-06 |
| **Mass Production/Availability** | 2019-06 (in mass production) |

> **Note**: The "about 40 TOPS class" mentioned in some materials corresponds to the **Xingkong X9 accelerator card** (4 CAISA chips, 43.6 TOPS peak), while a single CAISA chip peaks at **10.9 TOPS**. FP16/BF16, FP32, and memory capacity are not listed separately by the vendor, hence "Not disclosed". Chip utilization of up to 95.4% is CAISA's biggest highlight.

## Key Features
- **Dataflow architecture paradigm**: abandons the traditional instruction set architecture, using dataflow to eliminate idle compute units; chip utilization up to 95.4% (typically &lt;30% for peers).
- **High measured compute cost-effectiveness**: about 3× the measured performance of comparable NVIDIA products with only 1/3 the peak compute (ResNet-50, YOLO v3, etc.).
- **General CNN support**: supports mainstream algorithms such as ResNet, YOLO, and DeepLab through operator configurations in the dataflow network.
- **RainBuilder toolchain**: end-to-end automatic compilation; mainstream framework models deploy without rewriting, lowering migration barriers.
- **Low latency**: Xingkong X9 latency within 3 milliseconds, supporting 64-stream video structuring.

## Vendor Information
| Item | Details |
|------|------|
| **Company** | Shenzhen Corerain Technologies Co., Ltd. |
| **Headquarters** | Shenzhen, China |
| **Founded** | 2017 (Founder/CEO Niu Xinyu; chief architect from academician Wayne Luk's team) |

## Use Cases
- ✅ **Vision inference acceleration**: video structuring for security, work safety, transportation, and smart manufacturing
- ✅ **Cost-effective edge/data center compute**: trading low peak compute for high measured performance
- ✅ **Multi-stream video analytics**: X9 supports real-time parsing of 64 1080P streams
- ❌ **Large model training** (positioned for AI inference; training capability not emphasized)
- ❌ **Extreme floating-point scientific computing** (FP16/FP32 figures undisclosed; focused on INT8 inference)

## Related Cards
- [TsingMicro TX81](/docs/cards/others/tsingmicro-tx81) — Chinese reconfigurable/innovative architecture comparison
- [Vastai VA10](/docs/cards/others/vastai-va10) — Chinese cloud inference accelerator card
- [Lightmatter Envise](/docs/cards/others/lightmatter-envise) — International compute-in-memory/novel architecture comparison

## References
- [Corerain CAISA dataflow chip and Xingkong accelerator cards (36Kr / Corerain official)](http://corerain.com/media-reports/290.html)
- [Corerain releases the world's first general-purpose AI underlying CAISA architecture (PR Newswire)](https://cnmobile.prnasia.com/lightnews/lightnews-1-77-15075.shtml)
- [Corerain CAISA chip encyclopedia (Baike)](https://www.baike.com/wikiid/6911851521593267467)
