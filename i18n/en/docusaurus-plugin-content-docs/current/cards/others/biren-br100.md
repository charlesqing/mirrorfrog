---
id: biren-br100
title: Biren BR100
sidebar_label: BR100
description: "Biren BR100 flagship general-purpose GPU (2022): dual chiplets, TSMC 7nm, 1024 TFLOPS BF16, 2048 TOPS INT8, 64GB HBM2e, ~2.3 TB/s, 550W, benchmarked against the NVIDIA A100/H100."
keywords: [Biren BR100, Biren BR100, Biliren, BIRENSUPA, 1024 TFLOPS, 2048 TOPS, HBM2e, Chinese GPU, 7nm, Chiplet]
vendor: others
vendor_full: "Biren Technology"
release_date: "2022"
status: "Released"
---

# Biren BR100

## Product Overview

**Biren BR100** is Biren Technology's first **flagship general-purpose GPU**, officially unveiled at **Hot Chips 34 in August 2022**. Built on the proprietary **"Biliren" architecture** with **TSMC 7nm process + 2.5D CoWoS packaging**, it integrates about **77 billion transistors** and **64GB HBM2e** memory in a **dual-chiplet** design, making it the most powerful Chinese general-purpose GPU of its time. The BR100 delivers **1024 TFLOPS BF16**, **2048 TOPS INT8**, and **256 TFLOPS FP32** peak compute — on paper surpassing the NVIDIA A100 and approaching the H100 on some metrics.

The BR100 ships in **OAM (OCP Accelerator Module)** form factor, paired with Biren's proprietary **BIRENSUPA** software stack (CUDA-like) and **BLink** inter-chip interconnect, targeting large model training and inference. Due to subsequent geopolitical factors and TSMC foundry restrictions, mass production and commercial deployment of the BR100 were significantly affected.

## Core Specifications

| Parameter | Value |
|------|------|
| **Architecture** | Biliren (Biren proprietary ISA), dual chiplet |
| **Process Node** | TSMC 7nm, 2.5D CoWoS packaging |
| **Transistor Count** | ~77 billion |
| **BF16 Compute** | **1024 TFLOPS** |
| **TF32+ Compute** | 512 TFLOPS |
| **INT8 Compute** | **2048 TOPS** |
| **FP32 Compute** | 256 TFLOPS |
| **FP64 Compute** | **Not supported** |
| **Memory Capacity** | **64 GB** |
| **Memory Type** | **HBM2e** |
| **Memory Bus Width** | 4096 bit |
| **Memory Bandwidth** | **~2.3 TB/s** (some sources cite 1.64 TB/s) |
| **TDP** | **550 W** |
| **Interconnect** | **BLink™** (8 ports, 512 GB/s aggregated) |
| **Interface** | OAM; PCIe 5.0 ×16, CXL 2.0 support |
| **Video Codec** | 64-stream HEVC/H.264 encode / 512-stream decode |
| **Launch** | 2022-08 (Hot Chips 34) |
| **Mass Production/Availability** | Released; mass production affected by foundry restrictions |

> ⚠️ **Specification notes**: BF16 1024 / INT8 2048 / FP32 256 TFLOPS, 64GB HBM2e, 550W, and BLink 512 GB/s are Biren's official 2022 disclosures (consistent across multiple industry research reports and WCCFtech/aiwiki). Memory bandwidth has two reported figures, 1.64 TB/s and 2.3 TB/s; the table uses ~2.3 TB/s with the discrepancy noted. FP64 is not supported. These are **vendor-claimed values, not verified by large-scale independent third-party benchmarks**.

## Key Features

- **Dual-chiplet design**: two compute dies + 896 GB/s die-to-die interconnect, breaking past reticle size limits
- **Six Biliren features**: TF32+, TDA tensor data access accelerator, C-Warp CUDA-like Warp scheduling, BLink interconnect, HBM unified addressing, and security virtualization
- **BIRENSUPA software stack**: CUDA-like software ecosystem, lowering migration cost
- **BLink interconnect**: 8-port high-bandwidth inter-chip interconnect, supporting multi-card training

## Vendor Information

| Item | Details |
|------|------|
| **Company** | Biren Technology |
| **Founded** | 2019-09 |
| **IPO** | 2025-01, HKEX |
| **Headquarters** | Shanghai |
| **Software** | BIRENSUPA (CUDA-like software stack) |

## Use Cases

- ✅ **Large model training** (high BF16/INT8 compute, 10,000-card cluster exploration)
- ✅ **Large model inference** (high throughput)
- ✅ **High-end Chinese GPU alternative** (on-paper benchmark against A100/H100)
- ❌ Double-precision scientific computing (no FP64 support)
- ❌ Native CUDA ecosystem (requires migration to BIRENSUPA)
- ❌ International markets (export controls and foundry restrictions)

## Related Cards

- [Biren BR104](/docs/cards/others/biren-br104) — Single-die trimmed version (about 1/2 the compute, 300W)
- [Cambricon MLU590](/docs/cards/others/cambricon-mlu-590) — Chinese training competitor
- [MetaX Xiyun C600](/docs/cards/others/metax-c600) — Chinese general-purpose GPU competitor
- [NVIDIA H100](/docs/cards/nvidia/h100) — International benchmark (if the project has this page)

## References

- [Biren BR100 series spec comparison (industry research report, BR100/BR104 vs H100/A100)](https://ima.qq.com/wiki/?shareId=952d76f07147ed72484cc63e3f68abe7f3e8d4ff0568deebd14efa979d5312ea)
- [WCCFtech · Biren BR100: 77B transistors, 7nm, 2048 TOPS INT8, 1024 TFLOPS BF16](https://wccftech.com/china-most-powerful-gpu-birentech-br100-77-billion-transistors-7nm-faster-ai-than-nvidia-a100)
- [Biren Technology AI Wiki](https://aiwiki.ai/wiki/biren)
