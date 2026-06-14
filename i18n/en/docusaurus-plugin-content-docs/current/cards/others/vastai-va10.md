---
id: vastai-va10
title: "Vastai Tech ZaiTian VA10 (2022)"
sidebar_label: ZaiTian VA10
description: "Vastai Tech ZaiTian VA10: 7nm, INT8 400 TOPS, 150W, released 2022-09, first domestic AI inference accelerator, equipped with SV100 chip."
keywords: [Vastai Tech, ZaiTian VA10, SV100, 7nm, INT8 400 TOPS, AI inference, domestic AI chip]
---

# Vastai Tech ZaiTian VA10 (2022)

## Product Overview

**ZaiTian VA10** is Vastai Tech's **first data center AI inference accelerator** released on **September 3, 2022** at the 2022 World Artificial Intelligence Conference, equipped with self-developed **SV100 chip**, using **7nm process**, **INT8 peak compute up to 400 TOPS**, **power consumption only 150W**, overall highest inference performance reaching **2× above** mainstream GPU at same power consumption, is an important breakthrough for domestic AI inference cards.

**Positioning**: **Data center AI inference acceleration** (low latency, high throughput), supporting live video enhancement, smart traffic management, real-time semantic understanding and other high-real-time cloud AI application deployment scenarios.

## Core Specifications

| Item | Parameter |
|------|-----------|
| **Architecture** | Vastai Unified Computing Architecture VUCA (SV100 chip) |
| **Process** | **7nm** |
| **INT8 Compute** | **400 TOPS** |
| **FP16 Compute** | Not disclosed (estimated ~200 TFLOPS) |
| **TDP** | **150 W** |
| **Form Factor** | PCIe (specific interface version not disclosed) |
| **Release** | **2022-09-03** (2022 World AI Conference) |
| **Mass Production** | 2022-Q4 |
| **Video Codec** | Supports 100-channel 1080P 30fps encoding/decoding/transcoding |
| **Application Scenarios** | Live video enhancement, smart traffic, real-time semantic understanding |

## Vastai Unified Computing Architecture VUCA

| Component | Description |
|-----------|-------------|
| **AI Engine** | Ultra-low latency, ultra-high throughput AI inference engine |
| **Vector Compute Engine** | Programmable vector computing |
| **Video Processing Engine** | Streaming media, video encoding/decoding acceleration |
| **VastStream API** | Unified API interface, supports PyTorch/TensorFlow adaptation |

## Comparison with Mainstream GPU at Same Power

| Metric | ZaiTian VA10 | Mainstream GPU (same power) | Comparison |
|--------|--------------|----------------------------------|-------------|
| INT8 Compute | **400 TOPS** | ~200 TOPS | **2×** |
| Power Consumption | **150W** | 150W | Same |
| Low-latency Scenario (YoloV3 &lt;4ms) | **3× performance** | Baseline | VA10 advantage |
| Video Encoding/Decoding | **100-channel 1080P** | Fewer | VA10 advantage |

## Company Information

| Item | Content |
|------|---------|
| **Company** | Vastai Tech |
| **Founded** | 2018-12 |
| **Headquarters** | Shanghai, China |
| **Founder** | Qian Jun (former AMD executive) |
| **Product Page** | https://www.vastaitech.com/product/general/va10 |
| **Software Stack** | VastStream (CUDA-like API) |
| **Status** | Mass production, second-generation SG100 released |

## Product Line

| Product | Release | Positioning | Status |
|----------|----------|---------------|--------|
| **ZaiTian VA10** | **2022-09** | AI inference accelerator | ✅ Mass production |
| **ZaiTian VE1S/VE1M** | 2022-09 | Edge AI inference | ✅ Mass production |
| **SG100 (QianYuan)** | **2023-07** | Second-generation full-function GPU | ✅ Released |
| **NanYu VG1600/VG1800** | 2023-07 | Data center GPU accelerator | ✅ Released |
| **VA1L** | 2023-07 | LLM large model AI accelerator | ✅ Released |

## Application Scenarios

- ✅ **Live video enhancement** (100-channel 1080P real-time processing)
- ✅ **Smart traffic management** (low-latency YoloV3 detection)
- ✅ **Real-time semantic understanding** (high-real-time AI inference)
- ✅ **Data center inference deployment** (150W low power consumption, high cost-performance)
- ❌ **AI training** (inference-specialized)
- ❌ **Graphics rendering** (no rendering engine)

## Related Products

- [Vastai SG100 (QianYuan)](/en/docs/cards/others/vastai-sg100) - Second-generation full-function GPU
- [Cambricon MLU590](/en/docs/cards/others/cambricon-mlu) - Domestic training chip
- [Enflame CloudBlaze i20](/en/docs/cards/others/enflame-i20) - Domestic inference card
- [NVIDIA T4](/en/docs/cards/nvidia/t4) - International inference card target

## References

- [Frontline | Vastai Tech releases data center inference card VA10](https://www.36kr.com/p/1901732567984512)
- [Vastai Tech releases data center inference card ZaiTian VA10](https://www.163.com/dy/article/HGBEAO0D0534A4SC.html)
- [Vastai Tech Official Website](https://www.vastaitech.com/)
