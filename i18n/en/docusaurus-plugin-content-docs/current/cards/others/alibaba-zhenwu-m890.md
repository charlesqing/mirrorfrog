---
id: alibaba-zhenwu-m890
title: Alibaba T-Head Zhenwu M890 (Training-Inference AI Chip)
sidebar_label: Zhenwu M890
description: "Alibaba T-Head Zhenwu M890 detailed specs: 144 GB HBM3, 800 GB/s inter-chip interconnect, native support for full precision from FP32 to FP4, 600 TFLOPS FP16; announced at the Alibaba Cloud Summit on May 20, 2026, alongside the proprietary ICN Switch 1.0 and Panjiu AL128 supernode server."
keywords: [Zhenwu M890, Zhenwu M890, T-Head, Alibaba, PPU, 144GB, ICN Switch, Panjiu AL128, Agentic, Chinese AI chip]
---

# Alibaba T-Head Zhenwu M890

## Product Overview

**Zhenwu M890** is the **next-generation training-inference integrated AI chip** (PPU, Parallel Processing Unit) officially released by Alibaba's **T-Head Semiconductor** at the **Alibaba Cloud Summit on May 20, 2026**, and is T-Head's **first training-inference chip explicitly optimized for Agentic scenarios**.

The M890 adopts a **proprietary parallel computing architecture** with **144 GB** of memory and inter-chip interconnect bandwidth of **800 GB/s**, natively supporting **FP32 through FP4** full-precision data formats and covering the full spectrum from "high-precision training → low-precision inference → ultra-low-precision inference". Officially, its **overall performance is 3× that of the previous-generation Zhenwu 810E**.

On compute, the M890's **FP16 compute is about 600 TFLOPS** (0.6 PFLOPS), benchmarked against the NVIDIA **A100** level and about 3× the H20; however, T-Head has not disclosed the official absolute FLOPS value, process node, TDP, or MLPerf results, and the "3× performance" claim is currently a vendor-stated figure lacking independent third-party verification.

**System-level support**: Released alongside was the proprietary interconnect chip **ICN Switch 1.0** (switching bandwidth 25.6 Tb/s, P2P latency below 150 ns, supporting 64-card full-bandwidth interconnect) and the **Panjiu AL128 supernode server** — the latter logically combines **128 M890 cards** into a single compute node, providing PB/s-class bandwidth for massive concurrent Agent inference and large model training. The Panjiu AL128 is already live on the Alibaba Cloud Bailian platform, supporting mainstream large models such as Qwen, DeepSeek, and Kimi.

**Commercial progress**: As of May 2026, the Zhenwu series has shipped a cumulative **560,000 units**, serving **more than 400 customers** across **over 20 industries**, with more than 60% serving external commercial customers. By vertical, intelligent driving deployments exceed 130,000 cards (serving over 30 automakers and autonomous driving companies), and the finance industry has deployed 100,000 cards (150+ customers).

## Core Specifications

| Parameter | Value |
|------|------|
| **Architecture** | T-Head proprietary parallel computing architecture (PPU) |
| **Process Node** | Not disclosed (industry estimates 4nm / 5nm) |
| **Memory Capacity** | **144 GB** (HBM3) |
| **Inter-Chip Interconnect Bandwidth** | **800 GB/s** (proprietary ICN links) |
| **Precision Support** | Native FP32 / FP16 / FP8 / **FP4** |
| **FP16** | **600 TFLOPS** |
| **Interface** | **PCIe 5.0 ×16** |
| **TDP** | Not disclosed |
| **Interconnect Chip** | ICN Switch 1.0 (25.6 Tb/s, P2P < 150 ns, 64-card full-bandwidth interconnect) |
| **Debut** | **May 20, 2026** (2026 Alibaba Cloud Summit) |
| **Software Stack** | T-Head SAIL (proprietary full stack) |
| **Price** | Not disclosed (mainly offered via Alibaba Cloud compute services) |

> ⚠️ **Specification notes**: T-Head has **not disclosed** the M890's official absolute FLOPS value, process node, TDP, memory bandwidth, or MLPerf results. The FP16 600 TFLOPS in the table above is derived from the launch-event statement benchmarking against the A100 and is a **vendor-stated figure**, not an officially published value.

## Zhenwu Series Roadmap

| Time | Model | Memory | Inter-Chip Interconnect | Performance |
|------|------|------|----------|------|
| **2026 Q2** | Zhenwu 810E | 96 GB HBM2e | 700 GB/s | Baseline (first generation) |
| **2026 Q2** | **Zhenwu M890** | **144 GB** | **800 GB/s** | **3× the 810E** |
| 2027 Q3 | Zhenwu V900 | 216 GB | 1,200 GB/s | 3× the M890 |
| 2028 Q3 | Zhenwu J900 | Not disclosed | Not disclosed | Breakthrough architectural innovation |

> 📌 T-Head publicly revealed the Zhenwu series roadmap for the first time at the M890 launch event, committing to a **one-generation-per-year** cadence.

## Positioning and Competition

The Zhenwu M890 explicitly targets NVIDIA's **Hopper generation** (H100 / H20) rather than the latest Blackwell / Rubin products. Its core differentiation lies not in single-card absolute compute but in the system-level synergy of the **"chip + cloud + model" trinity**: Zhenwu chips run on Alibaba Cloud, where Tongyi Qianwen runs on top, enabling extreme optimization at the architectural level — something chip-only companies find hard to replicate.

**Key limitations**:
- The software ecosystem as a whole still lags one step behind NVIDIA CUDA (the T-Head SAIL stack needs time to mature)
- Success depends heavily on the development pace of Alibaba Cloud and Tongyi Qianwen
- Lacks independent third-party benchmark verification; vendor-stated performance awaits validation
