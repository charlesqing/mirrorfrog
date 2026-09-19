---
id: cambricon-mlu-370
title: Cambricon MLU370-X8 (Siyuan 370)
sidebar_label: MLU370-X8
description: "Cambricon MLU370-X8 official specs: 7nm dual-chip Siyuan 370, FP16 96 TFLOPS, INT8 256 TOPS, 48GB LPDDR5, 614.4 GB/s, 250W, MLU-Link 200GB/s, unified training and inference accelerator card."
keywords: [Cambricon MLU370, Cambricon Siyuan 370, MLU370-X8, 7nm, 48GB LPDDR5, 256 TOPS, 96 TFLOPS, 250W, domestic AI]
---

# Cambricon MLU370-X8 (Siyuan 370)

## Product Overview

The **Cambricon MLU370-X8** is Cambricon's **unified training and inference AI accelerator card** based on **MLUarch03 (third-generation MLU architecture)**, in a **dual-chip Siyuan 370** configuration with a **7nm process**. Official peak performance: **FP16 96 TFLOPS / BF16 96 TFLOPS / INT8 256 TOPS / FP32 24 TFLOPS**, equipped with **48GB LPDDR5 (614.4 GB/s)**, full-height full-length dual-slot **250W**, and aggregated **MLU-Link 200 GB/s (bidirectional)**. It is paired with the **NeuWare** software stack + **MagicMind**. In Cambricon's product line it sits above the MLU290 and below the MLU590, and was one of Cambricon's mainstream shipping models before the Siyuan 590 (official commercial availability in 2026-07).

> 📌 **Data correction (2026-09 cross-validation)**: This page previously misrecorded "INT8 96 TOPS / BF16 48 TFLOPS / TDP 35W / 48GB HBM2". Cambricon's official product page confirms the **MLU370-X8: INT8 256 TOPS, INT16 128 TOPS, FP16/BF16 96 TFLOPS each, FP32 24 TFLOPS, 48GB LPDDR5, 614.4 GB/s, 250W**; the Siyuan 370 series uses LPDDR5 rather than HBM.

**Key lineage**:
- **MLU 270** (2019): 16nm — early training/inference
- **MLU 290** (2020): 7nm, MLU-Link — first 7nm training generation
- **MLU370-X8** (released 2021 / mass-produced 2022): **7nm dual-chip, 48GB LPDDR5, INT8 256 TOPS, 250W** — **this page**
- **MLU590** (official commercial availability 2026-07): 7nm, 96GB HBM2e — current mainstream
- **MLU690** (mass production in early 2026): dual-Die Chiplet, 196GB HBM3 — flagship

## Core Specifications

| Item | Parameter |
|------|------|
| **Architecture** | Cambricon MLUarch03 (third generation, dual-chip Siyuan 370) |
| **Process** | TSMC 7nm |
| **FP32** | 24 TFLOPS |
| **FP16** | **96 TFLOPS** |
| **BF16** | 96 TFLOPS |
| **INT8** | **256 TOPS** |
| **INT16** | 128 TOPS |
| **Memory** | **48GB LPDDR5** |
| **Memory Bandwidth** | **614.4 GB/s** |
| **TDP** | 250 W |
| **Form Factor** | PCIe Gen4 ×16, full-height full-length dual-slot (passive cooling) |
| **Interconnect** | Aggregated MLU-Link **200 GB/s** (bidirectional, 3.1x PCIe 4.0) |
| **Video Codec** | 264-channel HEVC full-HD decode / 48-channel encode, up to 8K |
| **Release** | 2021 (Siyuan 370 launch) |
| **Mass Production** | 2022 |
| **Unit Price** | ~¥38,000-42,000 (e-commerce channel reference) |

## vs MLU 290 (2020)

| Metric | MLU370-X8 | MLU 290 (2020) | Change |
|------|-----------|----------------|------|
| Process | 7nm | 7nm | Same generation |
| Memory | **48GB LPDDR5** | 32GB HBM2 | +50% capacity, switched to LPDDR |
| Bandwidth | **614.4 GB/s** | 307 GB/s | 2x |
| INT8 | **256 TOPS** | 64 TOPS | 4x |
| FP16/BF16 | **96 TFLOPS** | 32 TFLOPS | 3x |
| TDP | **250 W** | 50 W | Full-size data center card |
| Interconnect | **200 GB/s** | 100 GB/s | 2x |
| Software | NeuWare | NeuWare 0.5 | New generation |

## vs NVIDIA T4

| Metric | MLU370-X8 | NVIDIA T4 | Difference |
|------|-----------|------------|------|
| **Process** | 7nm | 12nm | MLU370 newer generation |
| **INT8** | 256 TOPS | 130 TOPS | MLU370 doubles it |
| **FP16** | 96 TFLOPS | 65 TFLOPS | MLU370 +48% |
| **BF16** | 96 TFLOPS | Not supported | Exclusive to MLU370 |
| **TDP** | 250W | 70W | T4 is more power-efficient |
| **Memory** | 48GB LPDDR5 | 16GB GDDR6 | MLU370 3x |
| **Bandwidth** | 614.4 GB/s | 320 GB/s | MLU370 1.9x |
| **Software** | NeuWare + MagicMind | CUDA | T4 is mature |

> **MLU370-X8 positioning**: In tests published on its basic software platform SDK, Cambricon officially claims that on a single card the performance of four common AI models is on par with a mainstream 350W RTX GPU; in multi-card scenarios, MLU-Link (200GB/s) delivers better parallel speedup.

## Use Cases

- ✅ **Unified training and inference** (official positioning, full FP32/FP16/BF16/INT8/INT4 coverage)
- ✅ **High-density inference + multimodal concurrency** (264-channel HEVC full-HD decode)
- ✅ **Government/SOE AI projects** (domestic substitution policy)
- ✅ **Single-server 8-card training / distributed inference** (MLU-Link 200GB/s)
- ❌ **FP8** (not supported; requires MLU590/690)
- ❌ **Cutting-edge large-model training** (move to Siyuan 590/690 recommended)
- ❌ **International market** (no CUDA compatibility)

## LLM Inference Performance (48GB Version)

| Model | Quantization | Performance (tok/s) | Notes |
|------|------|---------------|------|
| LLaMA 1 7B | FP16 | ~25 tok/s | Mainstream |
| LLaMA 1 13B | FP16 | ~12 tok/s | Full FP16 |
| LLaMA 1 30B | Q4_K_M | ~5 tok/s | Quantized |
| ChatGLM-6B | FP16 | ~30 tok/s | Chinese |
| Stable Diffusion 1.5 | FP16 | 2x vs MLU 290 | Image generation |

> **48GB LPDDR5 advantage**: Compared to the contemporaneous NVIDIA T4 with 16GB, it can fully load 13B-class LLM FP16 inference; combined with 264-channel video decoding, it was the **mainstream domestic multimodal/vision + mid-scale LLM inference workhorse of 2022-2024**.

## Software Stack NeuWare

| Layer | Tool | Description |
|------|------|------|
| **AI Frameworks** | **NeuWare** | Unified programming platform |
| | PyTorch (NeuWare backend) | Automatic MLU mapping |
| | TensorFlow (NeuWare backend) | Compatible |
| | **MindSpore** | Huawei/CAICT-led, PyTorch compatible |
| **Compiler** | **BANG C/C++** | Cambricon proprietary language |
| **Operator Library** | CNML | CUDA cuDNN-like |
| **Inference Engine** | MagicMind | Inference acceleration engine |
| **Quantization** | NeuQuant | INT8 automatic |
| **Model Zoo** | ModelZoo | CV/NLP/LLM |

## Vendor Information

| Item | Details |
|------|------|
| **Company** | Cambricon Technologies |
| **Founders** | Chen Tianshi and Chen Yunji brothers (CAS Institute of Computing Technology) |
| **Founded** | 2016-03 |
| **IPO** | 2020-07-20 STAR Market (688256) |
| **Siyuan 370 Launch** | 2021-Q4 (MLU370-X8 mass-produced in 2022) |
| **Key Customers** | China Mobile, Inspur, Sugon, ByteDance, Zhipu AI |
| **National Projects** | Recommended chip for the "East Data West Compute" project |

## Key Timeline

| Date | Event |
|------|------|
| 2016-03 | Cambricon founded (CAS ICT spinout) |
| 2018-05 | First chip MLU 100 released (16nm) |
| 2020-07-20 | **STAR Market IPO** (688256) |
| 2020 | MLU 290 (first 7nm generation) |
| **2021-Q4** | **Siyuan 370 released** (this page's product) |
| 2022 | MLU370-X8 mass production + customer deployment |
| First unveiled 2024 | MLU 590 (official commercial availability 2026-07) |
| Early 2026 | MLU 690 mass production (196GB HBM3) |

## Cambricon Product Line

| Product | Launch | Process | Memory | INT8 | TDP | Status |
|------|------|------|------|------|-----|------|
| **MLU370-X8** | **2021-Q4 / mass-produced 2022** | **7nm dual-chip** | **48GB LPDDR5** | **256 TOPS** | **250W** | **In mass production and on sale** |
| MLU590 | Unveiled 2024 / commercial 2026-07 | 7nm | 96GB HBM2e | 512 TOPS | 350W | Current mainstream |
| MLU690 | Mass production in early 2026 | Dual-Die Chiplet | 196GB HBM3 | 2400 TOPS (media-reported figures) | 500W | Flagship |

## Key Features

- **Unified training and inference**: official positioning, full FP32/FP16/BF16/INT16/INT8/INT4 precision coverage
- **48GB LPDDR5**: large memory among domestic cards of its 2022 generation (vs NVIDIA T4 16GB)
- **MLU-Link 200GB/s**: 3.1x PCIe 4.0, 8-card full interconnect in a single server
- **264-channel video decoding**: a powerful tool for multimodal/vision scenarios
- **Weaknesses**: no FP8, LPDDR5 bandwidth weaker than HBM, cutting-edge large-model training requires moving to 590/690

## vs Contemporary Domestic AI Chips (2021-2022)

| Metric | Cambricon MLU370-X8 | Huawei Ascend 310 | Alibaba Hanguang 800 (2021) |
|------|--------------------|---------------------|--------------------------|
| **Process** | 7nm | 12nm | 12nm |
| **INT8** | 256 TOPS | 22 TOPS | **820 TOPS** |
| **TDP** | **250W** | 8W | 168W |
| **Memory** | **48GB LPDDR5** | 8GB LPDDR4 | 32GB HBM2 |
| **Bandwidth** | 614.4 GB/s | 25 GB/s | 700 GB/s |
| **Target** | Training + Inference | Edge | Data center inference |

> **2021-2022 domestic AI top three**: **Hanguang 800 has the strongest compute (820 TOPS)**, **MLU370-X8 has the most complete ecosystem (unified training/inference + MLU-Link)**, **Ascend 310 has the best efficiency (8W)**.

## Related Cards

- [Cambricon MLU 590](/docs/cards/others/cambricon-mlu) - Next generation
- [Cambricon MLU 690](/docs/cards/cambricon/mlu-690) - Flagship
- [Huawei Ascend 910B](/docs/cards/huawei/ascend-910b) - Contemporary Huawei
- [Alibaba Hanguang 800](/docs/cards/others/alibaba-hanguang-800) - Contemporary Alibaba
- [Biren BR104](/docs/cards/others/biren-br104) - Domestic AI
- [Moore Threads MTT S5000](/docs/cards/others/moore-threads-mtt-s5000) - Domestic GPU
- [NVIDIA T4](/docs/cards/nvidia/t4) - MLU 370 competitor
- [NVIDIA L4](/docs/cards/nvidia/l4) - Inference comparison
