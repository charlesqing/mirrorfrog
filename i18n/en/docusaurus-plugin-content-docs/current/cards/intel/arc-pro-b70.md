---
id: arc-pro-b70
title: Intel Arc Pro B70
sidebar_label: Arc Pro B70
description: "Intel Arc Pro B70 official specs: Xe2 architecture, TSMC N5, 32GB GDDR6 256-bit @ 608 GB/s, 22.94 TFLOPS FP32, 367 TOPS INT8, 230W TBP, shipping Q1 2026, targeting AI inference and professional workstations."
keywords: [Intel Arc Pro B70, Xe2, Battlemage, TSMC N5, 32GB GDDR6, 608 GB/s, 367 TOPS, professional GPU, AI inference]
---

# Intel Arc Pro B70

## Product Overview

**Intel Arc Pro B70** is the newest member of Intel's Arc Pro B series of professional workstation graphics cards. Its official status is **Launched**, with a **release date of Q1 2026**. It is built on the **Xe2 (Battlemage) microarchitecture** using **TSMC N5** process technology, extending the second-generation Xe architecture shared with Intel's consumer discrete GPUs.

In specifications, B70 is the direct successor to Arc Pro B60: **memory capacity increases from 24GB to 32GB** (GDDR6, 256-bit bus, **608 GB/s** bandwidth), **FP32 compute rises from 12.28 to 22.94 TFLOPS**, **INT8 compute rises from 197 to 367 TOPS**, and **TBP increases from 200W to 230W**. The GPU contains **32 Xe-cores**, 8 render slices, 32 ray-tracing units, plus **256 XMX (Xe Matrix Extensions) AI engines** and 256 Xe vector engines.

**Product positioning**: the combination of 32GB memory and 608 GB/s bandwidth makes it a **sweet spot for LLM inference and multi-GPU workstation platforms**. Like the B60, B70 targets AI inference, professional graphics (AEC/CAD/3D rendering), and ISV-certified stability scenarios, with support for the IPEX (PyTorch extension), OpenVINO, and oneAPI software stacks. Note that Intel's official specification table states B70's peak compute figure in **INT8 (TOPS)** terms and **does not publish FP8 or FP4 AI-training precision numbers**.

## Key Specifications

| Item | Specification |
|------|------|
| **Architecture** | Intel Xe2 (Battlemage) |
| **Process** | **TSMC N5** |
| **Memory** | **32 GB GDDR6** |
| **Memory Type** | GDDR6 (256-bit) |
| **Memory Bandwidth** | **608 GB/s** |
| **FP8** | Not disclosed |
| **FP4** | Not disclosed |
| **FP16** | Not disclosed |
| **FP32** | **22.94 TFLOPS** |
| **INT8** | **367 TOPS** |
| **TDP** | **230 W** |
| **Interconnect** | **PCIe 5.0 x16** |
| **Release / Production** | **Q1 2026**, official status Launched |

> 📌 **Additional official specification fields** (from Intel's spec table):
>
> - **Xe-cores**: 32; render slices: 8; ray-tracing units: 32
> - **XMX AI engines**: 256; Xe vector engines: 256
> - **Clocks**: maximum dynamic graphics frequency 2800 MHz, base graphics clock 2280 MHz
> - **TDP (TBP)**: **230 W**; Intel separately lists a low-power range of 160-290 W
> - **ECC**: the official specification table lists **ECC memory support**
> - **Device ID**: 0xE223; display output supports 4 monitors (DP 2.1 up to UHBR 13.5 / HDMI), max resolution 7680 x 4320@120Hz
> - **Warranty**: 3 years; no embedded options offered
>
> ⚠️ **Precision caveat**: Intel officially publishes only **INT8 (367 TOPS)** and **FP32 (22.94 TFLOPS)**, and **does not publish FP8 / FP4 / FP16 compute**. Direct horizontal comparison with other GPUs' FP8 figures is therefore not possible; use the INT8 basis when evaluating.

## Key Features

- **32GB GDDR6 at 608 GB/s**: an increase over the B60 (24GB / 456 GB/s) in both capacity and bandwidth, key for serving larger models and longer contexts
- **256 XMX AI engines**: purpose-built for matrix operations and AI inference workloads, reaching 367 TOPS at INT8
- **22.94 TFLOPS FP32**: graphics and general compute performance suited to 3D rendering and visualization
- **TSMC N5 process**: consistent with the Battlemage architecture generation
- **ISV certification**: stability-optimized for AEC (architecture, engineering, construction) and professional graphics workstations
- **Full software ecosystem**: oneAPI, OpenVINO, Intel Extension for PyTorch (IPEX), and XeSS super-resolution
- **ECC memory support**: advantageous for long-running inference services
- **PCIe 5.0 x16**: full host bandwidth, enabling multi-GPU workstation platforms

## Use Cases

- ✅ **LLM inference workstations** (32GB can hold larger quantized models)
- ✅ **Multi-GPU parallel inference** (scaling via Project Battlematrix-class workstation platforms)
- ✅ **AI development and model fine-tuning** (IPEX + oneAPI software stack)
- ✅ **Professional graphics and 3D rendering** (32 RTUs, 22.94 TFLOPS FP32)
- ✅ **AEC/CAD engineering workstations** (ISV certified, ECC memory)
- ❌ **Large-scale model training** (no official FP8/FP4 figure, limited memory capacity)
- ❌ **Direct compute comparison against datacenter GPUs** (INT8 and FP8 bases are not directly convertible)

## Comparison

- [Intel Arc Pro B60](/docs/cards/intel/arc-pro-b60) - Predecessor (24GB / 456 GB/s / 12.28 TFLOPS FP32 / 197 TOPS INT8 / 200W)
- [Intel Arc Pro B50](/docs/cards/intel/arc-pro-b50) - Entry-level model
- [Intel Arc B580](/docs/cards/intel/arc-b580) - Consumer model
- [NVIDIA RTX PRO 6000 Blackwell](/docs/cards/nvidia/rtx-pro-6000-blackwell) - Contemporary professional competitor (96GB GDDR7)
- [NVIDIA RTX 6000 Ada](/docs/cards/nvidia/rtx-6000-ada) - Previous-generation professional competitor

## Data Sources

- [Intel official specifications: Intel Arc Pro B70 Graphics](https://www.intel.cn/content/www/cn/zh/products/sku/245797/intel-arc-pro-b70-graphics/specifications.html) — source of all spec fields: Xe2 / TSMC N5 / 32 Xe-cores / 256 XMX / 32GB GDDR6 256-bit / 608 GB/s / 22.94 TFLOPS FP32 / 367 TOPS INT8 / 230W TBP / PCIe 5.0 x16 / Q1'26
- [Intel official (Japan site, same SKU 245797 specification table)](https://www.intel.com/content/www/jp/ja/products/sku/245797/intel-arc-pro-b70-graphics/specifications.html) — cross-verification of specification values
- [Intel official (Taiwan site, same SKU 245797 specification table)](https://www.intel.com.tw/content/www/tw/zh/products/sku/245797/intel-arc-pro-b70-graphics/specifications.html) — cross-verification of specification values