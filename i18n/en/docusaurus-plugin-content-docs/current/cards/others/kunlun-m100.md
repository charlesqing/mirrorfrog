---
id: kunlun-m100
title: Kunlunxin M100 (2026)
sidebar_label: Kunlunxin M100
description: "Kunlunxin M100: announced at Baidu World 2025-11, targeting large-scale AI inference (MoE-optimized), planned for launch in early 2026. Detailed specs to be announced."
keywords: [Kunlunxin M100, Kunlun M100, Baidu, AI inference, MoE, 2026, domestic AI chips]
---

# Kunlunxin M100 (2026)

## Product Overview

The **Kunlunxin M100** is a new-generation AI inference chip unveiled by Kunlunxin Technology at **Baidu World on November 13, 2025**, designed and optimized for **large-scale AI inference scenarios**, especially **inference on MoE (Mixture of Experts) architecture models**. It is scheduled to launch in **early 2026** and entered its commercial volume phase in January 2026.

> **Note**: M100's detailed hardware specs (compute, memory, power, etc.) were not disclosed at launch; the information below is compiled from official announcements and industry reports.

**M Series Positioning**:
- **Kunlunxin M100** (early 2026): large-scale AI inference — **this page**
- **Kunlunxin M300** (early 2027): ultra-large-scale multimodal LLM training and inference
- **Kunlunxin P800** (2024): general training + inference accelerator card — existing page
- **Kunlunxin N Series** (2029): next-generation architecture

## Core Specifications

| Parameter | Value |
|------|------|
| **Positioning** | Dedicated to large-scale AI inference |
| **Architecture** | In-house architecture (specific codename not disclosed) |
| **Process** | Not disclosed |
| **FP16 / BF16** | Not disclosed |
| **INT8 / INT4** | Not disclosed |
| **Memory Capacity** | Not disclosed |
| **Memory Type** | Not disclosed |
| **Bandwidth** | Not disclosed |
| **TDP** | Not disclosed |
| **Interconnect** | Tianchi supernode ecosystem |
| **Announced** | November 13, 2025 (Baidu World) |
| **Launch** | Planned for early 2026 |
| **Production Status** | Commercial volume phase since January 2026 |

## Key Features

- **MoE inference optimization**: hardware-level optimization for the sparse activation characteristics of MoE, significantly boosting MoE model inference performance
- **PD-disaggregated inference**: supports Prefill-Decode disaggregated deployment, raising single-card performance by 95%
- **Single-instance performance**: up to an 8x improvement when combined with inference optimizations
- **Tianchi supernodes**: works with the Tianchi 256 / Tianchi 512 supernodes to build thousand-card inference clusters
- **China Mobile win**: first place in share for the CUDA-ecosystem lot of the inference-type centralized procurement

## Vendor Information

| Parameter | Details |
|------|------|
| **Company** | Kunlunxin Technology (Beijing) Co., Ltd. |
| **Parent Company** | Baidu (57.67% stake) |
| **M100 Announcement** | Baidu World, November 13, 2025 |
| **IPO Status** | Started STAR Market IPO tutoring in May 2026 |
| **Deployment Scale** | Tens of thousands of cards deployed across the Kunlunxin lineup |
| **Core Scenario** | Inference service foundation of Baidu AI Cloud |

## Use Cases

- ✅ **Large-scale AI inference** (LLM online services)
- ✅ **MoE model inference** (hardware optimization for sparse activation)
- ✅ **PD-disaggregated deployment** (independent optimization of Prefill + Decode)
- ✅ **Baidu Cloud inference services** (inference for Qwen, ERNIE, and other models)
- ✅ **Domestic inference clusters**
- ❌ **AI training** (positioned as inference-dedicated; use the P800/M300 for training)
- ❌ **Specs to be confirmed** (watch the official 2026 product launch for detailed parameters)

## Positioning Comparison with the P800

| Dimension | M100 (Inference) | P800 (Training + Inference) |
|------|-------------|------------------|
| **Positioning** | Inference-dedicated | General training + inference |
| **MoE Optimization** | Native optimization | Supported |
| **PD Disaggregation** | Supported (+95% performance) | Basic support |
| **Single-Server Deployment** | Cloud inference services | 8-card 671B in a single server |
| **Launch** | Early 2026 | 2024-03 |
| **Supernode** | Tianchi 256/512 | Tianchi 256/512 |
| **Spec Disclosure** | To be announced | Published |

## Key Timeline

| Date | Event |
|------|------|
| 2024-03 | P800 launched |
| 2025-04 | Tianchi supernodes enabled on Baige 5.0 |
| **2025-11-13** | **M100/M300 announced** (Baidu World) |
| 2026-01 | M100 entered its commercial volume phase |
| H1 2026 | M100 official mass production and delivery |
| Early 2027 | M300 launch (trillion-parameter-scale training) |

## Related Cards

- [Kunlunxin P800](/docs/cards/others/kunlun-p800) — Previous generation, training + inference
- NVIDIA L20 — International inference card benchmark (page to be created)
- [Cambricon MLU 370](/docs/cards/others/cambricon-mlu-370) — Domestic inference card
- [Hygon DCU K100](/docs/cards/others/hygon-dcu-k100) — Domestic GPGPU
- [MetaX C600](/docs/cards/others/metax-c600) — Fully domestic GPU
- [Enflame T20](/docs/cards/others/enflame-t20) — Domestic AI training card
