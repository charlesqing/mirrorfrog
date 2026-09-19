---
id: ascend-970
title: Huawei Ascend 970 (Roadmap)
sidebar_label: Huawei Ascend 970
description: "Huawei Ascend 970 preview card: 2028 Q4 roadmap flagship announced at HUAWEI CONNECT 2025, 4 PFLOPS FP8 / 8 PFLOPS FP4, 288GB HBM, 14.4 TB/s bandwidth, 4 TB/s interconnect, targeting trillion-parameter MoE."
keywords: [Huawei Ascend 970, Ascend 970, roadmap, FP8, FP4, trillion-parameter MoE, 2028]
---

# Huawei Ascend 970 (Roadmap)

## Product Overview

**Huawei Ascend 970** is the **long-range roadmap flagship AI chip** announced at **HUAWEI CONNECT 2025**, planned for **Q4 2028**, continuing the **950 → 960 → 970** one-chip-per-year, compute-doubling cadence.

The Ascend 970 aims squarely at **trillion-parameter MoE architectures and the AGI era**, with order-of-magnitude leaps in FP4/FP8 compute, interconnect bandwidth, and memory bandwidth — Huawei's planned "ultimate flagship" AI chip.

> 📌 This card is a **roadmap preview**: the single-chip specs below are official Huawei planning targets and may change after formal launch.

## Core Specifications (roadmap)

| Parameter | Value (planned) |
|------|--------------|
| **Architecture** | Da Vinci v7 (presumed, SIMD + SIMT) |
| **Process** | N+3 (SMIC domestic, presumed) |
| **FP8 Compute** | **4 PFLOPS** |
| **FP4 Compute** | **8 PFLOPS** |
| **BF16/FP16 Compute** | 2 PFLOPS (planned) |
| **INT8 Compute** | 4 POPS (planned) |
| **Memory** | **288 GB HBM** (in-house) |
| **Memory Bandwidth** | **14.4 TB/s** (~18x the 910C's 784 GB/s) |
| **Interconnect Bandwidth** | **4 TB/s** (~10x the 910C's 400 Gbps) |
| **Package** | Quad-die co-packaging (660mm², planned) |
| **TDP** | 800 W (presumed, roadmap) |
| **Debut** | **2028 Q4 (roadmap)** |
| **Systems** | Atlas 960 SuperPoD (15488-card cluster) |

## Generational Comparison with 950/960

| Model | FP8 | FP4 | Memory | Memory Bandwidth | Interconnect | Planned |
|------|-----|-----|------|----------|------|----------|
| Ascend 950PR/DT | 1 PFLOPS | 2 PFLOPS | 128-144 GB | 1.6-4 TB/s | 2 TB/s | 2026 |
| Ascend 960 | 2 PFLOPS | 4 PFLOPS | 288 GB | 9.6 TB/s | 2.2 TB/s | 2027 Q4 |
| **Ascend 970** | **4 PFLOPS** | **8 PFLOPS** | **288 GB** | **14.4 TB/s** | **4 TB/s** | **2028 Q4** |

## Key Technology Directions

- **HiF4 data format**: Huawei's in-house 4-bit precision, with better inference accuracy than industry FP4 schemes
- **Dynamic sparse computing + MoE adaptation**: for trillion-parameter mixture-of-experts architectures
- **Quad-die co-packaging**: breaks single-die area limits, doubling compute
- **UnifiedBus interconnect**: interconnect bandwidth ~10x the 910C

## Use Cases (planned)

- ✅ Trillion-parameter MoE LLM training / inference
- ✅ National intelligent computing centers (15488-card Atlas 960 SuperPoD)
- ✅ AGI-era hyperscale AI infrastructure

## Vendor Information

| Parameter | Value |
|------|------|
| **Manufacturer** | Huawei Technologies Co., Ltd. (HiSilicon) |
| **Website** | https://www.hiascend.com |
| **Announced** | HUAWEI CONNECT 2025 (Xu Zhijun keynote) |
| **Debut (planned)** | **2028 Q4** |

## Related Products

- [Huawei Ascend 960](/docs/cards/huawei/ascend-960) - Previous roadmap generation (15488-card SuperPod)
- [Huawei Ascend 950DT](/docs/cards/huawei/ascend-950dt) - Current training/Decode mainstay plan
- [Full comparison table](/docs/comparison)
