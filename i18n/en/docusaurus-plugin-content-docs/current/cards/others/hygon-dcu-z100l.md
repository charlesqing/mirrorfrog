---
id: hygon-dcu-z100l
title: Hygon DCU Z100L
sidebar_label: DCU Z100L
description: "Hygon DCU Z100L (DCU series) GPGPU accelerator card: a trimmed version of the Z100 with 7nm, 3840 cores, 32GB HBM2, 1024 GB/s, FP32 ~12 TFLOPS, for cost-effective HPC/AI scenarios."
keywords: [Hygon DCU Z100L, Hygon DCU Z100L, DCU, GPGPU, 32GB HBM2, ROCm, DTK, cost-effective, Chinese GPU]
vendor: others
vendor_full: "Hygon"
series: "DCU"
release_date: "2022"
status: "Mass production"
---

# Hygon DCU Z100L

## Product Overview

The **Hygon DCU Z100L** is the **trimmed GPGPU accelerator card** in Hygon Information's **DCU series**, of the same "Shensuan No. 1" generation as the **Z100**, based on **deep customization under AMD CDNA licensing (gfx906)**. Compared with the Z100, the Z100L is reduced in compute unit count, compute, and memory bandwidth, but retains the **32GB HBM2 large memory** and the software ecosystem advantage of **ROCm/DTK CUDA compatibility**, targeting **cost-effective HPC and small/medium model training and inference** scenarios, and is one of the standard GPU options for Xinchuang servers (paired with Hygon C86 CPUs).

The Z100L is commonly seen in national supercomputing centers (Chengdu, Xi'an, etc.), telecom operator and finance industry domestic substitution projects, and ranks alongside the Iluvatar CoreX BI-V100 as a mainstream Chinese GPGPU choice.

## Core Specifications

| Parameter | Value |
|------|------|
| **Architecture** | GPGPU, deeply customized based on AMD CDNA licensing (gfx906 / first-generation CDNA) |
| **Process Node** | 7nm |
| **Compute Units** | **60 compute units / 3840 compute cores** (Baidu Baike) |
| **FP64 Compute** | **10.1 TFLOPS** |
| **FP32 Compute** | **10.1 – 12.2 TFLOPS** |
| **FP16 / BF16 Compute** | **20.2 – 24.5 TFLOPS** |
| **INT8 Compute** | **40.5 – 49.1 TOPS** |
| **Memory Capacity** | **32 GB** |
| **Memory Type** | **HBM2** |
| **Memory Bandwidth** | **1024 GB/s (1 TB/s)** |
| **TDP** | **250 W / 280 W** (varies by source) |
| **Interconnect** | **xHMI interconnect** (~184 GB/s); PCIe 4.0 |
| **Interface** | PCIe 4.0 ×16 |
| **Cooling Form Factor** | Air cooling / cold-plate liquid cooling / immersion liquid cooling |
| **Launch** | 2022 (Shensuan No. 1) |
| **Mass Production/Availability** | In mass production |

> ⚠️ **Specification notes**: The Z100L's FP64 10.1 / FP32 10.1–12.2 / FP16 20.2–24.5 / INT8 40.5–49.1 TFLOPS, 32GB HBM2, 1024 GB/s, and xHMI 184 GB/s come from Hygon product materials and industry comparison tests (including a publicly available Z100L specification PDF); the compute unit count follows Baidu Baike's "60 CUs / 3840 cores" figure (some sources record 64 CUs; Baidu Baike prevails). TDP has two reported values, 250W and 280W; both are listed.

## Key Features

- **Large-memory cost-effectiveness**: 32GB HBM2 + 1 TB/s bandwidth, suited to medium/large models and HPC
- **CUDA-like ecosystem**: DTK (based on ROCm) is compatible with HIP/CUDA, with low migration cost
- **Full-precision capability**: FP64/FP32/FP16/INT8 full precision, with double precision suited to scientific computing
- **Multiple cooling options**: supports air cooling, cold-plate liquid cooling, and immersion liquid cooling for different data centers

## Vendor Information

| Item | Details |
|------|------|
| **Company** | Hygon Information Technology Co., Ltd. |
| **Headquarters** | Tianjin |
| **Founded** | 2014 |
| **IPO** | STAR Market 688041 |
| **Technology Source** | AMD x86 / CDNA licensing + proprietary DCU architecture |

## Use Cases

- ✅ **Scientific computing / HPC** (FP64 double precision, benchmarked on some metrics against the AMD MI50/MI60 and NVIDIA V100)
- ✅ **Small/medium model training and inference** (cost-effective scenarios)
- ✅ **Standard GPU for Xinchuang servers** (Hygon C86 CPU + DCU systems)
- ✅ **Finance / telecom operator domestic substitution**
- ❌ Ultra-large model training (32GB memory, limited compute)
- ❌ Ultra-low-power edge scenarios

## Related Cards

- [Hygon DCU Z100](/docs/cards/others/hygon-dcu-z100) — Same-generation full version (8192 cores)
- [Hygon DCU K100 AI](/docs/cards/others/hygon-dcu-k100) — Shensuan No. 3 AI-optimized version (FP16 192 TFLOPS)
- [Cambricon MLU590 (Siyuan 590)](/docs/cards/others/cambricon-mlu-590) — Chinese AI training competitor

## References

- [Hygon DCU (Baidu Baike, Z100L: 3840 cores / 32GB HBM2 / 1TB/s)](https://baike.baidu.com/item/%E6%B5%B7%E5%85%89DCU/68580827)
- [CSDN · Z100L core specifications (FP64 10.1 / FP32 12.2 / FP16 24.5 / INT8 49.1)](https://blog.csdn.net/zhangfeng1133/article/details/161699435)
- [CSDN · basic understanding of Hygon DCUs (gfx906 / 3840 cores / 1024 GB/s)](https://blog.csdn.net/2401_88400778/article/details/162203030)
