---
id: alibaba-zhenwu-810e
title: Alibaba T-Head Zhenwu 810E (Training-Inference AI Chip)
sidebar_label: Zhenwu 810E
description: "Alibaba T-Head Zhenwu 810E detailed specs: 96 GB HBM2e memory, 700 GB/s inter-chip interconnect (7 proprietary ICN links), PCIe 5.0, and a board-level power of about 400 W; unveiled in January 2026 as the first-generation baseline product of the Zhenwu series, with single-card bandwidth comparable to the NVIDIA H20."
keywords: [Zhenwu 810E, Zhenwu 810E, T-Head, Alibaba, PPU, 96GB HBM2e, 700GB/s, Chinese AI chip]
---

# Alibaba T-Head Zhenwu 810E

## Product Overview

**Zhenwu 810E** is Alibaba T-Head's **first-generation training-inference integrated AI chip** of the **Zhenwu series**, unveiled in **January 2026** and positioned in T-Head's official roadmap as the **baseline (first-generation) product** of the series.

The 810E features a **training-inference integrated** design that serves both large model training and high-density inference. It is equipped with **96 GB HBM2e** memory and an inter-chip interconnect bandwidth of **700 GB/s** (composed of **7 proprietary ICN high-speed links**), delivering **single-card bandwidth comparable to the NVIDIA H20**. According to the South China Morning Post, T-Head describes the 810E as a Parallel Processing Unit (PPU) for AI training and inference.

In terms of power, the 810E's board-level power is about **400 W**, lower than the H20's 550 W, giving it better energy efficiency at equivalent bandwidth. The interface is **PCIe 5.0 ×16**.

> ⚠️ **Timeline discrepancy (important)**: The roadmap chart of some English media (WCCFtech) marks the 810E as "2024 Q2", which is inconsistent with the "**January 2026 unveiling**" reported by TrendForce, Synced, and domestic media (TMTPost, etc.). This site adopts **January 2026** (cross-validated by multiple sources); the 2024 Q2 entry in the roadmap chart is likely an internal project initiation or tape-out date.

## Core Specifications

| Parameter | Value |
|------|------|
| **Architecture** | T-Head proprietary parallel computing architecture (PPU) |
| **Process Node** | Not disclosed |
| **Memory Capacity** | **96 GB** HBM2e |
| **Inter-Chip Interconnect Bandwidth** | **700 GB/s** (7× proprietary ICN links) |
| **Interface** | **PCIe 5.0 ×16** |
| **TDP** | 400 W (board-level power, estimated) |
| **Debut** | **January 2026** |
| **Series Positioning** | First-generation baseline product of the Zhenwu series |
| **Comparison Baseline** | Single-card bandwidth comparable to the NVIDIA H20 |
| **Price** | Not disclosed |

> ⚠️ **Specification notes**: Process node, absolute compute, and memory bandwidth are all undisclosed. The 400 W TDP is an industry-estimated value (based on the statement that it is below the H20's 550 W); refer to T-Head's subsequent official datasheet for confirmation.

## Generational Comparison with the M890

| Parameter | Zhenwu 810E | Zhenwu M890 | Improvement |
|------|-----------|-----------|------|
| Memory Capacity | 96 GB HBM2e | **144 GB** HBM3 | +50% |
| Inter-Chip Interconnect Bandwidth | 700 GB/s | **800 GB/s** | +14% |
| Architecture | Proprietary parallel computing architecture (first generation) | Proprietary parallel computing architecture (full upgrade) | **3×** overall performance |
| Positioning | Training-inference integrated (baseline) | Training-inference integrated (Agentic-optimized) | — |
| Unveiled | January 2026 | May 2026 | 4 months apart |

> 📌 Only **4 months** separate the 810E from the M890, reflecting T-Head's significantly accelerated iteration cadence in 2026 and its established "one generation per year" roadmap commitment.

## Relationship to the Site's Alibaba PPU Card

The site's "Alibaba PPU" card records the **early project-stage information** of the Zhenwu series (temporary codename "PPU", 96 GB HBM2e, 700 GB/s, 400 W, TSMC tape-out in 2023). As the Zhenwu brand entered commercial use, the temporary codename was superseded by official models such as the **Zhenwu 810E / M890**. Refer to this card and the "Zhenwu M890" card for the latest information.
