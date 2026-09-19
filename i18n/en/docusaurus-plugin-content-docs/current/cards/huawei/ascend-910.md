---
id: ascend-910
title: Huawei Ascend 910
sidebar_label: Huawei Ascend 910
description: "Huawei Ascend 910 detailed specs: 2019 first-generation cloud training chip, TSMC 7nm+ EUV, 256 TFLOPS FP16, 512 TOPS INT8, 350W TDP, 32GB HBM2 — the cornerstone of the Ascend 910 family."
keywords: [Huawei Ascend 910, Ascend 910, Da Vinci Max architecture, cloud training, 256 TFLOPS, domestic AI chip]
---

# Huawei Ascend 910

## Product Overview

**Huawei Ascend 910** is the **first cloud training chip** of Huawei's Ascend series, released in **August 2019** in Shenzhen alongside the edge inference chip Ascend 310, marking the formal establishment of Huawei's "Da Vinci architecture" full-scenario AI compute system.

The Ascend 910 uses the **TSMC 7nm+ EUV** process (the last advanced node Huawei obtained before sanctions); at launch it claimed to be "the world's most powerful AI processor" with **256 TFLOPS FP16**, outperforming the contemporary NVIDIA V100 and matching early A100 levels. It laid the architectural foundation for the entire 910B / 910C / 920 / 950 series.

> 📌 In many materials, "910A" refers to this first-generation 910 (32 Da Vinci Max cores @ 1.0GHz); it belongs to the 910 family along with the later 910B/C/D. This card describes it uniformly as **Ascend 910 (1st gen / 910A)**.

## Core Specifications

| Parameter | Value |
|------|------|
| **Release** | 2019-08 (Shenzhen) |
| **Architecture** | Da Vinci Max |
| **Process** | TSMC 7nm+ EUV |
| **AI Cores** | 32 Da Vinci Max cores |
| **FP32** | Not disclosed |
| **FP16** | **256 TFLOPS** |
| **INT8** | **512 TOPS** |
| **Memory** | 32 GB HBM2 |
| **Memory Bandwidth** | 1.5 TB/s (896 GB/s, varies by board) |
| **TDP** | **350 W** |
| **Interconnect** | HCCS (Huawei in-house, 1st generation) |
| **Systems** | Atlas 300T / Atlas 800 (training servers) |
| **Video Decoding** | 128-channel full HD H.264/H.265 |

## Evolution Comparison with the Later 910 Family

| Model | Release | Process | FP16 | Memory | TDP | Positioning |
|------|------|------|------|------|-----|------|
| **Ascend 910 (1st gen)** | 2019 | TSMC 7nm+ | 256 T | 32GB HBM2 | 350W | First-generation cloud training |
| Ascend 910B | 2021-22 | SMIC 7nm N+2 | 256-414 T | 64GB HBM2e | 310W | Domestic mainstay |
| Ascend 910C | 2025 Q1 | SMIC 7nm N+2 | 800 T | 128GB HBM3 | ~310W | Chiplet dual-die flagship |
| Ascend 920 | 2025 H2 | SMIC 6nm | 900+ T | ~96GB | 400W | Next-generation bandwidth king |

## Key Features

- **Da Vinci Max architecture**: 32-core many-core AI Core design, leading single-die compute density of its 2019 era
- **Mixed precision**: full FP16 / FP32 / INT8 support, for training and inference
- **Origin of the full-stack ecosystem**: paired with MindSpore + CANN to build Huawei's full AI stack
- **Historic significance**: Huawei's only AI chip on an advanced TSMC EUV process (pre-sanctions)

## Vendor Information

| Parameter | Value |
|------|------|
| **Manufacturer** | Huawei Technologies Co., Ltd. (HiSilicon) |
| **Website** | https://www.hiascend.com |
| **Debut** | 2019-08 |
| **Architecture** | Da Vinci Max |

## Use Cases

- ✅ Cloud AI training (1st gen, models under 100B parameters)
- ✅ Research HPC platforms
- ✅ Starting point of Huawei's full-stack AI infrastructure
- ❌ No longer the mainstay (superseded by 910B/C)

## Related Comparisons

- [Huawei Ascend 910B](/docs/cards/huawei/ascend-910b) - Domestic improved version
- [Huawei Ascend 910C](/docs/cards/huawei/ascend-910c) - Chiplet dual-die flagship
- NVIDIA V100 (contemporary benchmark; no standalone spec page yet)
- [NVIDIA A100](/docs/cards/nvidia/a100) - Performance-class reference
