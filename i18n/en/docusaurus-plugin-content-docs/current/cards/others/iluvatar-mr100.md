---
id: iluvatar-mr100
title: "Iluvatar ZhiKai 100 (MR100)"
sidebar_label: ZhiKai 100 (MR100)
description: "Iluvatar ZhiKai 100 (MR100/MR-V100) detailed specs: 7nm, 32GB HBM2E, FP32 24 TFLOPS, FP16 96 TFLOPS, INT8 192 TOPS, 128-channel 1080P video decoding, PCIe Gen4, released 2022"
keywords: [Iluvatar, ZhiKai 100, MR100, MR-V100, Iluvatar CoreX, 7nm, 32GB HBM2E, inference GPU, general-purpose GPU]
---

# Iluvatar ZhiKai 100 (MR100)

## Product Overview

**ZhiKai 100** (model **MR100** / **MR-V100**) is Iluvatar's cloud **general-purpose GPU inference accelerator** released in **2022**, based on Iluvatar's self-developed general-purpose GPU architecture, using **7nm process**, equipped with **32GB HBM2E memory**, supporting FP32/FP16/INT8 mixed-precision inference, single card supports up to **128-channel 1080P@30fps HD video concurrent decoding**, targeting AI inference scenarios such as security, internet, finance, healthcare, education, etc.

**Positioning**: **AI inference specialized** (inference-optimized), forming a complete product matrix with the TianGai series (training specialized).

## Core Specifications

| Item | Parameter |
|------|-----------|
| **Architecture** | Iluvatar self-developed general-purpose GPU architecture |
| **Process** | **7nm** |
| **FP32** | **24 TFLOPS** |
| **FP16** | **96 TFLOPS** |
| **INT8** | **192 TOPS** |
| **Memory Capacity** | **32 GB HBM2E** |
| **Memory Bandwidth** | Not disclosed (estimated ~1 TB/s) |
| **TDP** | 275 W (estimated) |
| **Video Decoding** | Single card up to **128-channel 1080P@30fps**, supports HEVC, AVC, VP9, AVS2 |
| **Interface** | **PCIe Gen4 x16** |
| **Release** | **2022** |
| **Mass Production** | Since 2022 |
| **Software Stack** | Iluvatar computing software stack (PyTorch/TensorFlow compatible) |

> ⚠️ **Specification Note**: TDP and memory bandwidth are estimates (not fully disclosed by official sources), subject to Iluvatar's subsequent official data sheet.

## TianGai Series vs ZhiKai Series

| Series | Positioning | Representative Product | Release Time |
|--------|---------------|----------------------|---------------|
| **TianGai Series** | Training | TianGai 100 (BI-V100) | 2021 |
| **TianGai Series** | Training | TianGai 150 (BI-V150) | 2023 |
| **ZhiKai Series** | Inference | ZhiKai 100 (MR100) | 2022 |
| **ZhiKai Series** | Inference | ZhiKai 200 (MR200) | 2024 (estimated) |

## Application Scenarios

- ✅ **AI inference as a service** (INT8 192 TOPS, high-concurrency inference)
- ✅ **Video analytics** (128-channel 1080P concurrent decoding)
- ✅ **Security surveillance** (HEVC/AVC/VP9 multi-format support)
- ✅ **Financial risk control** (low-latency inference)
- ✅ **Domestic AI computing center** (supply chain security)
- ❌ **Large model training** (inference-specialized card, compute lower than training cards)

## Product Evolution

| Product | Release | FP16 TFLOPS | INT8 TOPS | Status |
|---------|----------|----------------|-------------|--------|
| TianGai 100 (BI-V100) | 2021 | ~128 TFLOPS | 256 TOPS | On sale |
| **ZhiKai 100 (MR100)** | **2022** | **96 TFLOPS** | **192 TOPS** | **Current mainstream** |
| TianGai 150 (BI-V150) | 2023 | Not disclosed | Not disclosed | On sale |
| ZhiKai 200 (MR200) | 2024+ | Not disclosed | Not disclosed | Next generation |

## Related Cards

- [Iluvatar TianGai 100](/en/docs/cards/others/iluvatar-tg100) - Same series training card
- [Iluvatar TianGai 150](/en/docs/cards/others/iluvatar-tg150) - Next-generation training card
- [Cambricon MLU590](/en/docs/cards/others/cambricon-mlu-590) - Domestic inference+training competitor
- [Enflame CloudBlaze i20](/en/docs/cards/others/enflame-i20) - Domestic inference card

## References

- [ZhiKai 100 Product Specification](http://www.ljxytek.com/static/upload/file/20250811/1754898934338974.pdf)
- [Iluvatar Official Website - ZhiKai 100](https://www.iluvatar.com/productDetails?fullCode=cpjs-yj-tlxltt-zk100)
- [Can domestic GPU run DeepSeek?](https://blog.csdn.net/weixin_50197960/article/details/161630409)
- [Baidu Baike: ZhiKai 100](https://baike.baidu.com/item/%E6%99%BA%E9%93%A0100/61945818)
