---
slug: huawei-ascend-950-mass-production-china-ai-chip-2026
title: "Huawei Ascend 950 Mass Production and the Full Picture of China's AI Chip Ecosystem"
authors: aicomputecards
tags: [news, ai-chip, domestic-chips, ascend]
date: 2026-06-04
description: "Huawei Ascend 950PR/950DT enters mass production, self-developed HBM breakthrough, China's AI chip industry forms a tri-polar landscape of Huawei, Cambricon, and Moore Threads in 2026."
---

# Huawei Ascend 950 Mass Production and the Full Picture of China's AI Chip Ecosystem

**June 2026 —** Huawei's Ascend 950 series (950PR / 950DT) has entered formal mass production and delivery, a landmark event for China's AI chip industry in 2026. Meanwhile, Cambricon's MLU690 has begun shipping and Moore Threads has announced MTT S5000 specifications, formally establishing China's tri-polar AI chip landscape.

## Ascend 950 Series: A Historic Breakthrough with Self-Developed HBM

Huawei HiSilicon's **Ascend 950 series** is the fourth-generation Ascend AI chip, first revealed at Huawei Connect 2025 in September and entering **mass production in Q1 2026**.

### 950PR (Prefill Inference Specialized)

| Item | Specification |
|------|---------------|
| **Architecture** | Da Vinci v5 (SIMD + SIMT dual-model) |
| **Process** | N+2 (SMIC domestic) |
| **HBM** | **HiBL 1.0 (Huawei self-developed)** , 128 GB |
| **FP8 Compute** | **1 PFLOPS** (HiF8 format) |
| **TDP** | ~400 W |
| **Target** | Inference Prefill (video recommendation, real-time interaction) |

### 950DT (Decode + Training Specialized)

| Item | Specification |
|------|---------------|
| **Architecture** | Da Vinci v5 (SIMD + SIMT dual-model) |
| **Process** | N+2 (SMIC domestic) |
| **HBM** | **HiZQ 2.0 (Huawei self-developed)** , 144 GB, 4 TB/s |
| **FP8 Compute** | **1 PFLOPS** (HiF8 format) |
| **TDP** | ~500 W |
| **Target** | Inference Decode + Model Training |

### Historical Significance

**Self-developed HBM** (HiBL 1.0 / HiZQ 2.0) represents the most important technical breakthrough of Huawei Ascend 950 — this is the first time a Chinese enterprise has achieved self-developed mass production of HBM memory, completely eliminating dependence on SK Hynix / Samsung HBM supply. Combined with the domestic N+2 process, Ascend 950 has achieved full-chain domestic production from **HBM → Compute Die → Packaging → System**.

## Cambricon MLU690: China's Only Native FP8 Support

Cambricon's seventh-generation AI chip **MLU 690 (Siyuan 690)** began volume production and shipping in H1 2026. This is the **first domestic AI chip with native FP8 precision support**.

| Item | MLU 690 |
|------|---------|
| **Process** | 5nm (TSMC / SMIC) |
| **FP8 dense** | **2 PFLOPS** |
| **HBM** | **192GB HBM3E, 5 TB/s** |
| **TDP** | ~500 W |
| **Unit Price (OAM)** | ~$8,000-12,000 |

MLU 690's FP8 compute power (2 PFLOPS dense) is on paper comparable to NVIDIA Blackwell (B200 FP8 4.5 PFLOPS sparse). Leveraging its financing advantage as a **STAR Market listed company**, Cambricon targets 2026 revenue of ¥15-20B (2025: ¥7.2B).

## Moore Threads MTT S5000: From Graphics to Training-Inference Unified

Moore Threads publicly disclosed detailed specifications of the **MTT S5000** in February 2026, featuring the fourth-generation MUSA "Pinghu" architecture, single-card AI compute of **1,000 TFLOPS**, 80GB GDDR6X memory, 1.6 TB/s bandwidth.

Moore Threads pursues a **full-function GPU** path (graphics rendering + AI compute + general-purpose compute), closest to NVIDIA's strategy. The founding team comes from former NVIDIA China, and the **MUSIFY** toolchain helps auto-migrate CUDA code to the MUSA platform, lowering ecosystem migration costs.

## China's Tri-Polar AI Chip Landscape

| Dimension | Huawei Ascend | Cambricon | Moore Threads |
|-----------|--------------|-----------|---------------|
| **Core Architecture** | Da Vinci v5 | MLUv07 | MUSA 4th Gen |
| **Process** | N+2 domestic | 5nm | 6nm |
| **FP8 Compute** | ~1 PFLOPS | **2 PFLOPS** | 0.5 PFLOPS (estimated) |
| **HBM Self-Sufficiency** | **✅ Self-developed HiBL/HiZQ** | ❌ Purchased | ❌ Purchased |
| **Ecosystem** | CANN + MindSpore | NeuWare + MindSpore | MUSA + MUSIFY |
| **Advantage** | Full-chain domestic | Highest FP8 compute | Full-function + CUDA migration |
| **2025 Revenue** | (Huawei internal) | ¥7.2B | ¥2.2B |

## Global Market Comparison (Q2 2026 Update)

| Tier | Vendor | Flagship Chip | FP8/PFLOPS | HBM | Mass Production |
|------|--------|---------------|------------|-----|-----------------|
| **Tier 1** | NVIDIA | Rubin R200 | 25 PF (sparse) | 288GB HBM4 | 2026 H2 |
| **Tier 2** | AMD | MI400 | 20 PF (dense) | 432GB HBM4 | 2026 |
| | Huawei | Ascend 950DT | 1 PF (dense) | 144GB self-developed HBM | 2026 Q1 |
| | Cambricon | MLU690 | 2 PF (dense) | 192GB HBM3E | 2026 H1 |
| | AWS | Trainium 3 | 5.7 PF (dense) | 144GB HBM | 2025 Q4 GA |
| **Tier 3** | Intel | Gaudi 3 | 1.8 PF | 128GB HBM2e | In production |
| | Google | TPU v7 | 4.6 PF(TFLOPS) | 192GB HBM | 2025 |
| | Moore Threads | MTT S5000 | 1 PF | 80GB GDDR6X | 2025 Q1 |

> **Note**: NVIDIA uses **sparse** compute as standard, while AMD / Huawei / Cambricon use **dense** — not directly comparable.

## Outlook for H2 2026

- **NVIDIA Rubin R200**: Official shipment in H2 2026, 288GB HBM4, 6-chip CoWoS-L packaging
- **Huawei Ascend 960**: Roadmap H2 2027, expected FP8 compute doubled to 2 PFLOPS
- **Cambricon MLU790**: Expected 2027, 3nm, 384GB HBM4, 2.5 PFLOPS
- **Moore Threads**: Next-gen GPU expected with HBM3, 2× MTT S5000 compute

By 2026, China's AI chip industry has formed a complete product matrix from **Training (Cambricon MLU690 / Ascend 950DT) → Inference (Ascend 950PR / Moore Threads S5000) → Systems (CloudMatrix / Distributed Clusters)**.

---

*This article is based on public information from Huawei Connect 2025 (2025-09-18), industry analysis reports from April 2026, and the latest market data as of June 2026.*
