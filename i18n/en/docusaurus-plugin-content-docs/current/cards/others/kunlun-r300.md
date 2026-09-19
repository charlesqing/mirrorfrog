---
id: kunlun-r300
title: "Kunlun R300"
vendor: others
vendor_full: "Kunlunxin"
series: "Kunlun Gen 2"
chip_id: "kunlun-r300"
release_date: "2021-08"
launch_price: "Undisclosed"
status: "Mass production"
description: "Kunlun R300: OAM accelerator module (OCP-OAI standard) built on the 2nd-gen Kunlun XPU-R chip — FP16 128 TFLOPS, INT8 256 TOPS, 32GB GDDR6 at 512GB/s, 150W. Same silicon as the R200 PCIe card, packaged for R480-X8 servers in large-scale training/inference clusters."
keywords: [Kunlunxin, R300, Baidu, XPU-R, OAM, OCP-OAI, 128 TFLOPS, 256 TOPS, R480-X8, AI accelerator, China AI chip]
---

# Kunlun R300

> **Kunlun R300** is an **OAM accelerator module** (OCP-OAI standard) built on the **2nd-generation Kunlun XPU-R chip** by Kunlunxin (a Baidu company). Same silicon as the R200 full-height PCIe card but in module form: R300 modules populate the R480-X8 server baseboard (8 modules per board) for large-scale data-center training and inference clusters.

---

## Core Specifications

| Spec | Value |
|------|-------|
| **Architecture** | Kunlun Gen-2 XPU-R (proprietary architecture, on-chip video codec) |
| **Process** | 7nm |
| **FP16** | 128 TFLOPS |
| **INT8** | 256 TOPS |
| **FP32** | 32 TFLOPS |
| **Memory** | 32 GB GDDR6 |
| **Memory bandwidth** | 512 GB/s |
| **TDP** | 150 W |
| **Form factor** | OAM accelerator module (OCP-OAI standard, UBB baseboard) |
| **Chip-to-chip** | 200 GB/s (dual-ring topology inside R480-X8) |
| **Launch** | 2021-08 (with Kunlun Gen-2) |
| **Price** | Undisclosed |

> 📌 **Form-factor clarification (2026-09 cross-validation)**: The R300 is not a new chip — it is the **OAM module variant of Kunlun Gen 2**. Kunlunxin's product matrix lists the R200 as the PCIe card, the R300 as the OAM module line, and the R480-X8 as the 8-module server baseboard; compute specifications are identical across all three (FP16 128 / INT8 256 / FP32 32 / 32GB GDDR6 / 512GB/s / 150W).

---

## Highlights

- **OCP-OAI standard**: UBB server baseboard carrying 8 OAM modules (R480-X8) delivers roughly 1 PFLOPS FP16 per server
- **Integrated codec**: on-chip video encode/decode enables decode-plus-AI-inference pipelines without host data shuttling
- **Hardware virtualization**: per-chip virtualization improves cloud resource utilization
- **10K-card cluster building block**: a foundational compute unit of Baidu Cloud's 10K-card Kunlun cluster (lit up in 2024 — China's first at-scale cluster on proprietary silicon)

---

## Positioning

Kunlun product lineage: Kunlun Gen 1 (K100/K200 PCIe cards) → **Kunlun Gen 2 (R200 PCIe card / R300 OAM module / R480-X8 server)** → Kunlun Gen 3 → P800 (2024, third-gen training card). The R300 serves Baidu Cloud and China Mobile-class carrier AI data centers (Kunlun-based servers took the top share in China Mobile's 2025-2026 inference-type AI server tender, CUDA-ecosystem segment).

---

## Use Cases

- Data-center-scale training and inference (R480-X8 8-module servers)
- Search, recommendation, and video-analytics inference for Baidu's core businesses
- Carrier and xinchuang AI data-center tenders
- ❌ Single-card developer setups (choose the R200 PCIe form factor)

---

## Related Cards

- [Kunlun P800](/docs/cards/others/kunlun-p800) — Kunlun Gen-3 training card
- [Kunlun 1](/docs/cards/others/kunlun-1) — first-generation chip
- [Baidu Kunlun R200](/docs/cards/baidu/r200) — same silicon, PCIe form factor
- [NVIDIA T4](/docs/cards/nvidia/t4) — inference-tier comparison
- [Huawei Ascend 910B](/docs/cards/huawei/ascend-910b) — domestic training-card rival

## References

- [Kunlunxin official product introduction (R200/R480-X8)](https://www.kunlunxin.com)
- [Kunlunxin R480 / R300 (Kunlun Gen-2) spec archive](https://chips.techbuzzchina.com/chips/kunlunxin-r480)
