---
id: kunlun-p800
title: Kunlunxin P800 (2024)
sidebar_label: Kunlunxin P800
description: "Kunlunxin P800 detailed specs: in-house XPU-P architecture, 345 TFLOPS FP16 (surpassing the NVIDIA H20), 400W, OAM form factor, launched in 2024, domestic AI training/inference accelerator card"
keywords: [Kunlunxin P800, Kunlun P800, Baidu, XPU-P, 345 TFLOPS, FP16, domestic AI, 10,000-card clusters, DeepSeek, 2024]
---

# Kunlunxin P800 (2024)

## Product Overview

The **Kunlunxin P800** is the **third-generation AI accelerator card** from Kunlunxin Technology (a Baidu company). Based on the in-house **XPU-P architecture**, it delivers **345 TFLOPS of peak FP16 compute** (surpassing the NVIDIA H20's 148 TFLOPS) at a **TDP of about 400W**, in the **OAM module form factor**; it launched in March 2024. It supports running the full-strength DeepSeek-V3/R1 671B on **8 cards in a single server**, and multiple 10,000-card clusters have been delivered.

**Key Positioning**:
- **Kunlunxin Gen 1** (2018): 14nm, deployed inside Baidu
- **Kunlunxin Gen 2** (2021): 7nm, in-house Kunlun Core II, 256 INT8 TOPS
- **Kunlunxin P800** (2024): **XPU-P architecture, 345 TFLOPS FP16, OAM** — **this page**
- **Kunlunxin M100** (early 2026): inference-dedicated — existing page
- **Kunlunxin M300** (early 2027): ultra-large-scale multimodal training

## Core Specifications

| Parameter | Value |
|------|------|
| **Architecture** | In-house XPU-P architecture |
| **Process** | 7nm |
| **Memory** | 96 GB HBM3 |
| **Memory Bandwidth** | 2.4 TB/s |
| **FP16** | **345 TFLOPS** (surpasses the H20's 148 TFLOPS) |
| **Low-power mode** | 128 TFLOPS @ 120 W |
| **INT8** | **820 TOPS** (some reports cite 690–820 TOPS) |
| **MoE Support** | Native support for MoE architectures |
| **TDP** | 400 W |
| **Form Factor** | **OAM module** |
| **Interconnect** | XCCL (Kunlunxin interconnect), supports IB/ROCE |
| **Release** | 2024-03 |
| **Mass Production** | Launched in March 2024, large-scale delivery since 2025 |
| **Cluster Scale** | Supports 10,000-card clusters; an all-in-house 30,000-card cluster has been realized |
| **Supernode** | Tianchi 256 / Tianchi 512 |
| **Supply Status** | In short supply, constrained by foundry capacity |

## Large-Model Adaptation

| Model | Deployment | Notes |
|------|----------|------|
| DeepSeek-V3/R1 671B | **8 cards in a single server** inference | Passed CAICT adaptation certification |
| DeepSeek MoE full-parameter training | **32 servers** suffice | Supports MLA and multi-expert parallelism |
| ERNIE series | Native Baidu Cloud support | Main deployment on Baidu AI Cloud |
| Llama / Qwen / ChatGLM | Supported | Includes MoE distilled versions |
| Baichuan | Supported | Domestic model ecosystem |

> **CUDA compatibility**: models that run on CUDA migrate to the P800 at low cost; open-source inference frameworks such as vLLM are supported.

## Vendor Information

| Parameter | Details |
|------|------|
| **Company** | Kunlunxin Technology (Beijing) Co., Ltd. |
| **Parent Company** | Baidu (57.67% stake) |
| **Founded** | April 2021 (spun off from Baidu) |
| **P800 Launch** | March 2024 |
| **IPO Status** | Started STAR Market IPO tutoring in May 2026 |
| **Valuation** | Over 10 billion RMB |
| **Key Customers** | Baidu AI Cloud, China Mobile (won the AI inference server centralized procurement) |
| **Certification** | CAICT five-star rating for "Stable Operation of Intelligent Computing Service Clusters" |

## Use Cases

- ✅ **Domestic large-model training** (full-parameter training of DeepSeek, ERNIE, etc.)
- ✅ **Large-model inference** (671B on 8 cards in a single server)
- ✅ **Baidu AI Cloud** (core compute foundation of the Baige platform)
- ✅ **Domestic intelligent computing centers** (10,000-card clusters verified)
- ✅ **MoE model inference** (native hardware optimization)
- ❌ **Deep CUDA ecosystem dependence** (migration requires adaptation)
- ❌ **Low-power edge deployment** (400W TDP is high)
- ❌ **International markets** (restricted by export controls)

## Key Timeline

| Date | Event |
|------|------|
| 2018 | Kunlunxin Gen 1 released (14nm) |
| 2021-04 | Kunlunxin Technology began independent operations |
| 2021 | Kunlunxin Gen 2 mass-produced (7nm Kunlun Core II) |
| **2024-03** | **P800 officially launched** (this page) |
| 2025-02 | Passed DeepSeek 671B adaptation certification |
| 2025 | Large-scale delivery of 10,000-card clusters |
| 2026-05 | Started STAR Market IPO |

## Related Cards

- [Kunlunxin M100](/docs/cards/others/kunlun-m100) — Next-generation inference-dedicated
- [NVIDIA H20](/docs/cards/nvidia/h20) — FP16 benchmark (P800 is 2.3x)
- [NVIDIA H100](/docs/cards/nvidia/h100) — International flagship benchmark
- [Huawei Ascend 910B](/docs/cards/huawei/ascend-910b) — Domestic AI competitor
- [Cambricon MLU 590](/docs/cards/others/cambricon-mlu) — Domestic AI training card
- [Hygon DCU K100](/docs/cards/others/hygon-dcu-k100) — x86-compatible domestic GPGPU
- [MetaX C600](/docs/cards/others/metax-c600) — Fully domestic GPU
- [Enflame T20](/docs/cards/others/enflame-t20) — Domestic AI training card
