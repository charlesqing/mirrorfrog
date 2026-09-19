---
id: hygon-dcu-z100
title: Hygon DCU Z100
sidebar_label: DCU Z100
description: "Hygon DCU Z100 (DCU series) GPGPU accelerator card: 7nm, 8192 compute cores, 32GB HBM2, FP64 10.8 TFLOPS, compatible with the ROCm/DTK software stack, a Chinese AI+HPC compute card."
keywords: [Hygon DCU Z100, Hygon DCU Z100, DCU, GPGPU, 32GB HBM2, ROCm, DTK, CUDA compatible, Chinese GPU]
vendor: others
vendor_full: "Hygon"
series: "DCU"
release_date: "2022"
status: "Mass production"
---

# Hygon DCU Z100

## Product Overview

The **Hygon DCU Z100** is a GPGPU accelerator card in Hygon Information's **DCU series** (of the "Shensuan No. 1" generation), based on **deep customization under AMD CDNA technology licensing** (architecture code gfx906, first-generation CDNA), and is the core of Hygon's "CPU + DCU" heterogeneous computing solution. Descended from the AMD ecosystem, the Z100 can be **natively compatible with the ROCm open computing platform**, and through Hygon's proprietary **DTK (DCU Toolkit)** enables low-cost migration of CUDA applications, making it one of the most mature domestic "CUDA-like" ecosystem accelerator cards.

According to Peking University's high-performance computing system procurement award announcement, **the Z100 has 8192 general-purpose compute cores, 32GB HBM2 memory, and FP64 compute of 10.8 TFLOPS**, with hardware parameters broadly at the same generation level as the NVIDIA A100 and AMD MI100. The Z100 and the trimmed **Z100L** belong to the same Shensuan No. 1 product family, widely deployed in national supercomputing centers (such as Kunshan, Chengdu, and Zhengzhou) and in telecom operators' and banks' intelligent computing centers.

## Core Specifications

| Parameter | Value |
|------|------|
| **Architecture** | GPGPU, deeply customized based on AMD CDNA licensing (gfx906 / first-generation CDNA) |
| **Process Node** | 7nm (estimated, based on public information for the same-generation Z100L) |
| **Compute Cores** | **8192** general-purpose compute cores (Peking University award announcement) |
| **FP64 Compute** | **10.8 TFLOPS** (Peking University HPC system award announcement, authoritative source) |
| **FP32 Compute** | Not disclosed (estimated ~10.8 TFLOPS, on par with FP64, a CDNA-like architecture trait) |
| **FP16 / BF16 Compute** | Not disclosed (estimated ~21.6 TFLOPS) |
| **INT8 Compute** | Not disclosed (estimated ~43.2 TOPS) |
| **Memory Capacity** | **32 GB** |
| **Memory Type** | **HBM2** |
| **Memory Bandwidth** | Not disclosed (Z100L is 1024 GB/s; the Z100 should be higher, estimated ~1.2 TB/s) |
| **TDP** | ~250 W (undisclosed, estimated from product materials) |
| **Interconnect** | **xHMI interconnect** (DCU series, bandwidth ~184 GB/s); PCIe 4.0 |
| **Interface** | PCIe 4.0 ×16 |
| **Launch** | 2022 (Shensuan No. 1) |
| **Mass Production/Availability** | In mass production |

> ⚠️ **Specification notes**: **FP64 10.8 TFLOPS / 8192 cores / 32GB HBM2** come from Peking University's high-performance computing system procurement award announcement (HCZB-2021-ZB0364), an authoritative public source. FP32/FP16/INT8 compute, memory bandwidth, and TDP are not listed separately by the vendor; the estimates in the table derive from industry comparison materials and same-generation Z100L parameters, and are **marked as estimates, for reference only**. Hygon DCUs excel at full precision, with double-precision (FP64) performance benchmarked against the A100/MI100.

## Key Features

- **CUDA-like ecosystem**: based on the ROCm open ecosystem, with the DTK toolchain supporting automatic HIP/CUDA migration
- **Full-precision computing**: FP64/FP32/FP16/INT8 full-precision capability, with double precision especially strong
- **x86 synergy**: paired with Hygon C86 series CPUs to form a fully domestic "CPU+DCU" heterogeneous system
- **Large model adaptation**: already adapted to mainstream large models such as LLaMa, GLM, Tongyi Qianwen, and DeepSeek

## Vendor Information

| Item | Details |
|------|------|
| **Company** | Hygon Information Technology Co., Ltd. |
| **Headquarters** | Tianjin |
| **Founded** | 2014 |
| **IPO** | STAR Market 688041 |
| **Technology Source** | AMD x86 / CDNA licensing + proprietary DCU architecture |

## Use Cases

- ✅ **High-performance computing (HPC) / scientific computing** (FP64 double-precision advantage)
- ✅ **Large model training and inference** (low ROCm/CUDA migration cost)
- ✅ **National supercomputing / intelligent computing centers** (domestic, self-controlled)
- ✅ **Finance / energy / telecom operator data centers**
- ❌ Ultra-low-power edge scenarios (high TDP, data center positioning)
- ❌ Scenarios with strong native CUDA dependence unwilling to migrate

## Related Cards

- [Hygon DCU Z100L](/docs/cards/others/hygon-dcu-z100l) — Same-generation trimmed version (reduced compute/bandwidth)
- [Hygon DCU K100 AI](/docs/cards/others/hygon-dcu-k100) — Shensuan No. 3 AI-optimized version (FP16 192 TFLOPS)
- [Cambricon MLU590 (Siyuan 590)](/docs/cards/others/cambricon-mlu-590) — Chinese AI training competitor

## References

- [Hygon DCU (Baidu Baike, product line/specifications)](https://baike.baidu.com/item/%E6%B5%B7%E5%85%89DCU/68580827)
- [Orient Securities research report · key Hygon DCU Z100 metrics (FP64 10.8TFlops, 8192 cores)](https://ima.qq.com/wiki/?shareId=63e04a4eab88851ca9be10b944549c8ac69718236859cdacd38b12ba1bb61730)
- [Chinese DCU in practice: deploying large model inference on the Hygon Z100](https://blog.csdn.net/weixin_28839699/article/details/159218236)
