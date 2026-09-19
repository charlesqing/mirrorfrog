---
id: ascend-310b
title: Huawei Ascend 310B
sidebar_label: Huawei Ascend 310B
description: "Huawei Ascend 310B edge inference derivative chip: low-cost, low-power positioning, with name reuse across two generations (early 12nm ~16 TOPS vs the 2025 new-generation 7nm high-compute part); this card clarifies the difference."
keywords: [Huawei Ascend 310B, Ascend 310B, edge AI, low power, name reuse, INT8]
---

# Huawei Ascend 310B

## Product Overview

**Huawei Ascend 310B** is a **low-cost / low-power derivative** of the Ascend 310 family, positioned for embedded and lightweight edge scenarios. Note that Huawei **reused the "310B" name in 2025** for a new-generation edge AI chip, causing **two-generation name reuse** confusion in market materials; this card clarifies both.

## Core Specifications (two-generation comparison)

| Parameter | Early 310B (c. 2021) | 2025 New-Generation 310B |
|------|----------------------|------------------|
| **Release** | c. 2021 | 2025 (Huawei name reuse) |
| **Process** | 12nm (presumed) | 7nm (SMIC) |
| **Positioning** | Embedded / ultra-low power | Medium-load edge inference |
| **INT8 Compute** | ~16 TOPS | ~120-200 TOPS (third-party sources) |
| **FP16 Compute** | ~4-8 TFLOPS | Not disclosed |
| **TDP** | **≤5 W** (fanless design) | ~5-15 W (varies by board) |
| **Package** | Compact SoC / POP | More integrated module |
| **Typical Scenarios** | IPC, edge boxes, on-device devices | Smart gateways, device-cloud synergy |

> ⚠️ **Naming note**: The early 310B and the 2025 new-generation 310B are not the same product; when purchasing or cross-checking materials, be sure to distinguish them by process and compute.

## Positioning within the 310 Family

| Model | Positioning | INT8 | Power |
|------|------|------|------|
| Ascend 310 (1st gen) | On-device/edge inference | 16 TOPS | 8W |
| **Ascend 310B (early)** | Embedded ultra-low power | ~16 TOPS | ≤5W |
| **Ascend 310B (2025)** | Medium-load edge | ~120-200 TOPS | 5-15W |
| Ascend 310P | Upgraded edge inference | 140 TOPS | 72W |

## Key Features

- **Extreme low power**: the early 310B is ≤5W and supports fanless passive cooling, fitting space-constrained devices
- **High integration**: SoC / POP packaging, embeddable directly in IPC and edge boxes
- **CANN ecosystem**: compatible with PyTorch / TensorFlow, AscendCL development
- **Two coexisting generations**: distinguish the early and 2025 versions by process and compute

## Vendor Information

| Parameter | Value |
|------|------|
| **Company** | Huawei Technologies Co., Ltd. (HiSilicon) |
| **Website** | https://www.hiascend.com |
| **Architecture** | Da Vinci |

## Use Cases

- ✅ Smart cameras / IPC
- ✅ Industrial gateways, edge boxes
- ✅ Low-latency device-cloud collaborative inference
- ✅ Battery-powered / fanless devices

## Related Comparisons

- [Huawei Ascend 310](/docs/cards/huawei/ascend-310) - Ascend's edge founding chip
- [Huawei Ascend 310P](/docs/cards/huawei/ascend-310p) - Ascend edge inference upgrade
- [Huawei Ascend 510](/docs/cards/huawei/ascend-510) - Ascend edge inference workhorse

## External Links

- [Ascend community](https://www.hiascend.com)
