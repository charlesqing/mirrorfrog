---
id: biren-br104
title: Biren BR104 (Chinese AI Training/Inference)
sidebar_label: Biren
description: Biren Technology BR104 detailed specs: 7nm, 1024 TOPS INT8, 64GB HBM2E, BIRENSUPA software stack, Chinese AI startup Big Five.
keywords: [Biren, BR104, Chinese AI chip, BIRENSUPA, domestic substitution, Chinese AI startup Big Five]
---

# Biren BR104 (Chinese AI Training/Inference)

## Product Overview

**Biren Technology** is a Chinese AI chip startup, **founded 2019-09**, headquartered in Shanghai. **BR104** is its first mass-produced AI training/inference chip, **2022-Q3 released**, **7nm process**, **1024 TOPS INT8** compute (**~2x H100**), **64GB HBM2E** memory, **896 GB/s bandwidth**. Paired with proprietary **BIRENSUPA** software stack (CUDA-like).

**Strategic position**: Biren is one of the "**Chinese AI Startup Big Five**" alongside **Moore Threads, Jingjiamicro, VeriSilicon, and Iluvatar CoreX**. **Funding $700M+** (Series B 2021-Q1 set China semiconductor single-round funding record), **targeting STAR Market IPO** (2026-2027 expected).

## Core Specs

| Item | Parameter |
|------|------|
| **Architecture** | Biren BR104 (proprietary) |
| **Process** | TSMC 7nm (2022 mass production), future SMIC domestic |
| **GPU Chiplets** | **2x BR104 compute chiplets** (dual chiplet) |
| **Compute Cores** | 64x Biren proprietary ISA (GPGPU-like) |
| **HBM** | **64GB HBM2E** |
| **Memory Bandwidth** | **896 GB/s** |
| **INT8** | **1024 TOPS** |
| **BF16** | **256 TFLOPS** |
| **FP32** | 128 TFLOPS |
| **TDP** | **300 W** |
| **Form Factor** | PCIe Gen4 x16 |
| **Interconnect** | BirenLink (proprietary, NVLink-like) |
| **Mass Production** | 2022-Q4 |
| **Unit Price** | ~$3,500-5,500 |

## Dual Chiplet Design

| Dimension | Spec |
|------|------|
| **Chiplet Count** | 2x BR104 compute chiplets |
| **Packaging** | CoWoS (TSMC packaging) |
| **Interconnect** | Internal SerDes, 400 GB/s bidirectional |
| **HBM** | 32GB x 2 (each chiplet)|
| **Per Chiplet INT8** | 512 TOPS |
| **Dual Chiplet INT8** | **1024 TOPS** (theoretical, stackable)|
| **Advantage** | higher yield (dual chiplet vs single large die)|
| **Disadvantage** | slightly higher internal interconnect latency |

> **Biren 7nm dual chiplet vs Huawei 7nm dual chiplet**: Both adopt same architecture to circumvent SMIC 7nm yield issues. **Biren BR104 beat Huawei Ascend 910C by 1 year (2022 vs 2023)**.

## vs NVIDIA H100

| Metric | Biren BR104 | NVIDIA H100 | Difference |
|------|--------------|--------------|------|
| INT8 | 1024 TOPS | 1513 TOPS | H100 +48% |
| BF16 | 256 TF | 756 TF | H100 3x |
| Memory | 64GB HBM2E | 80GB HBM3 | H100 +25% |
| Bandwidth | 896 GB/s | 3.35 TB/s | **H100 3.7x** |
| TDP | 300W | 700W | **BR104 -57%** |
| Software | BIRENSUPA | CUDA | H100 mature |
| Price | ~$4K | ~$25-30K | **BR104 -85%** |

> **BR104 advantage**: **TDP only 300W (57% H100 savings)**, **price 15% of H100**, **domestically designed**. Under H100 export controls, a **critical domestic substitution option**.

## BIRENSUPA Software Stack

| Layer | Tool | NVIDIA Equivalent |
|------|------|-------------|
| **AI framework** | PyTorch-BIREN | PyTorch + CUDA |
| | TensorFlow-BIREN | TensorFlow |
| | **BIRENSUPA** | unified compute platform |
| **Compiler** | BPA Compiler | nvcc |
| **Runtime** | BIRENSUPA Runtime | CUDA Runtime |
| **Math Library** | BIREN Bblas | cuBLAS |
| **Deep Learning** | BIREN DNN | cuDNN |
| **Communication** | BIREN Collective | NCCL |

> Warning: **Ecosystem limitation**: vs CUDA 18-year ecosystem, **BIRENSUPA only 3-4 years**, operator coverage ~ **60-70%** (vs CUDA 99%+), **complex LLM model migration requires heavy manual optimization**.

## Vendor Information

| Item | Content |
|------|------|
| **Company** | Biren Technology |
| **Founder** | Zhang Wen (CEO, former SenseTime VP) |
| **Founded** | 2019-09 |
| **Headquarters** | Pudong New District, Shanghai |
| **Funding** | **$700M+** (Series B 2021-Q1 set China semiconductor single-round funding record) |
| **Valuation (2025)** | ~¥30B |
| **2025 Revenue** | ~¥1.5B |
| **Employees** | ~1500 |
| **Status** | **preparing STAR Market IPO** (2026-2027 expected) |
| **Key Customers** | China Mobile, Inspur, Lenovo, ByteDance, Zhipu AI, SenseTime |
| **Ecosystem Partners** | PaddlePaddle, MindSpore, Alibaba T-Head |

## Chinese AI Startup Big Five

| Company | Founded | Representative Product | Compute | Funding | Status |
|------|------|----------|------|------|------|
| **Biren Technology** | 2019 | **BR104** | 1024 INT8 TOPS | **$700M+** | preparing IPO |
| **Moore Threads** | 2020 | MTT S5000 | 100 INT8 TOPS | $500M+ | preparing IPO |
| **Iluvatar CoreX** | 2018 | MR 100/200 | 256 INT8 TOPS | $400M+ | HK listed |
| **Cambricon** | 2016 | MLU 590 | 256 INT8 TOPS | STAR Market listed | listed |
| **Jingjiamicro** | 2006 | JM9 | military primary | ChiNext listed | listed |

## Key Features

- **Dual chiplet 7nm**: circumvents SMIC 7nm yield issues
- **1024 INT8 TOPS**: among top Chinese AI chips
- **TDP 300W**: 57% power savings vs H100
- **Domestic software stack**: BIRENSUPA fully proprietary
- **Drawbacks**: no FP8, weak ROCm/CUDA compatibility, 3-4 year ecosystem

## Use Cases

- ✅ **Domestic AI training** (H100 export control replacement)
- ✅ **LLM training** (256 BF16 TF + 64GB HBM2E)
- ✅ **Government/SOE AI projects** (domestic policy mandate)
- ✅ **AI compute center construction** ("East Data West Computing" hub)
- ✅ **Internet companies** (ByteDance, SenseTime, Zhipu)
- ❌ International market (no CUDA compatibility)
- ❌ Cutting-edge FP8 model training

## Biren Product Line

| Product | Released | Compute | Status |
|------|------|------|------|
| **BR104** | 2022-Q4 | 1024 INT8 TOPS | **mass production** |
| BR106 (est.) | 2025 H2 | 2048 INT8 TOPS | roadmap |
| BR200 (est.) | 2026 H2 | 4096 INT8 TOPS | roadmap |

## Related Products

- [Moore Threads MTT S5000](/docs/cards/others/moore-threads-mtt-s5000) - Chinese GPU comparison
- [Cambricon MLU 590](/docs/cards/others/cambricon-mlu) - Chinese AI training
- [Huawei Ascend 910C](/docs/cards/huawei/ascend-910c) - strongest Chinese chip
- [Huawei Ascend 920](/docs/cards/huawei/ascend-920) - Chinese next-gen
- [Tenstorrent](/docs/cards/others/tenstorrent) - RISC-V AI
- [NVIDIA H100](/docs/cards/nvidia/h100) - performance comparison
- [SambaNova SN40L](/docs/cards/others/sambanova-sn40l) - US RDU startup
