---
id: vastai-sg100
title: "Vastai Tech QianYuan SG100 (2023)"
sidebar_label: QianYuan SG100
description: "Vastai Tech QianYuan SG100: 7nm full-function GPU, rendering+AI+video integrated, released 2023-07, domestic full-function GPU breakthrough."
keywords: [Vastai Tech, QianYuan SG100, 7nm, full-function GPU, rendering, AI, video, domestic GPU]
---

# Vastai Tech QianYuan SG100 (2023)

## Product Overview

**QianYuan SG100** is Vastai Tech's **second-generation GPU chip** officially released on **July 6, 2023** at the 2023 World Artificial Intelligence Conference, using **7nm advanced process**, is a **full-function GPU integrating rendering, AI, and video**, with industry-leading rendering performance, while also having low-latency high-throughput AI computing power and powerful video processing capabilities.

**Positioning**: **Full-function GPU** (graphics rendering + AI inference + video processing), targeting some scenarios of NVIDIA A100, is an important breakthrough for China's **full-function GPU**.

## Core Specifications

| Item | Parameter |
|------|-----------|
| **Architecture** | Vastai second-generation GPU architecture (QianYuan series) |
| **Process** | **7nm** (TSMC) |
| **Function** | **Rendering + AI + Video** three-in-one |
| **FP32 Compute** | Not disclosed (estimated ~20 TFLOPS) |
| **FP16/INT8 Compute** | Not disclosed (estimated ~200 TFLOPS FP16 / ~400 TOPS INT8) |
| **Ray Tracing** | Supported (hardware ray tracing) |
| **Video Codec** | Powerful video processing capabilities (specific channels not disclosed) |
| **TDP** | Not disclosed (estimated 200-300W) |
| **Form Factor** | NanYu series (VG1600/VG1800/VG14) |
| **Release** | **2023-07-06** (2023 World AI Conference) |
| **Mass Production** | 2023-Q4 |
| **API Support** | DirectX 11, OpenGL, Vulkan (Windows/Linux) |

> ⚠️ **Specification Note**: Specific compute values of SG100 are not fully disclosed by official sources. Some values above are estimates based on public reports, subject to Vastai Tech's subsequent official data sheet.

## NanYu Series GPU Accelerator Cards

NanYu series accelerator cards released synchronously with SG100:

| Model | Positioning | Scenario |
|--------|---------------|----------|
| **VG1600** | Cloud gaming | Immersive cloud gaming experience |
| **VG1800** | Cloud desktop/remote office | Smooth office software, education APP, industrial design software |
| **VG14** | Domestic workstation | DirectX, OpenGL and other API support under Windows system |

## Vastai Product Matrix

| Product | Release | Positioning | Status |
|----------|----------|---------------|--------|
| **SV100 (ZaiTian VA10)** | 2022-09 | AI inference accelerator | ✅ Mass production |
| **SG100 (QianYuan)** | **2023-07** | **Full-function GPU** | ✅ Released |
| **VA1L** | 2023-07 | LLM large model AI accelerator | ✅ Released |
| **VA12** | 2023-07 | High-performance generative AI accelerator | ✅ Released |

## Comparison with ZaiTian VA10

| Metric | ZaiTian VA10 (SV100) | **QianYuan SG100** |
|--------|---------------------|---------------------|
| **Positioning** | AI inference acceleration | **Full-function GPU** |
| **Rendering** | ❌ Not supported | ✅ **Supported (hardware ray tracing)** |
| **AI Compute** | INT8 400 TOPS | Estimated ~200 TFLOPS FP16 |
| **Video Processing** | ✅ Supported | ✅ **Powerful video processing** |
| **API Support** | VastStream (AI) | **DirectX/OpenGL/Vulkan** |

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

## Application Scenarios

- ✅ **Cloud gaming** (VG1600, rendering+AI+video)
- ✅ **Cloud desktop/remote office** (VG1800)
- ✅ **Digital twin** (leading rendering performance)
- ✅ **AI inference** (low latency high throughput)
- ✅ **Video processing** (powerful video encoding/decoding capabilities)
- ❌ **AI training** (not training-specialized)
- ❌ **CUDA ecosystem strong dependency** (needs migration to VastStream) |

## Related Products

- [Vastai ZaiTian VA10](/en/docs/cards/others/vastai-va10) - First-generation AI inference card
- [Moore Threads MTT S5000](/en/docs/cards/others/moore-threads-mtt-s5000) - Domestic full-function GPU
- [NVIDIA A100](/en/docs/cards/nvidia/a100) - International full-function GPU target
- [Biren BR100](/en/docs/cards/others/biren-br104) - Domestic AI training GPU |

## References

- [Vastai Tech officially releases second-generation GPU SG100](https://news.jinglingshuju.com/article/92782432381)
- [Domestic 7nm full-function GPU released in Shanghai!](https://zhuanlan.zhihu.com/p/642198834)
- [Vastai Tech Official Website](https://www.vastaitech.com/)
