---
id: cambricon-mlu-370
title: Cambricon MLU 370 (2021)
sidebar_label: MLU 370
description: "Cambricon MLU 370 detailed specs: 7nm, 96 INT8 TOPS, 48GB HBM2, 35W, 2021 training + inference, predecessor to MLU 590."
keywords: [Cambricon MLU 370, Siyuan 370, 7nm, 48GB HBM2, 96 TOPS, 35W, China AI, 2021]
---
 
# Cambricon MLU 370 (2021)
 
## Overview
 
**Cambricon MLU 370 (Siyuan 370)** is Cambricon's **fourth-generation AI training/inference chip**, released in **2021-Q4**, **7nm process**, **96 INT8 TOPS** compute, **48GB HBM2** memory, **614 GB/s bandwidth**, **TDP 35W** (**one of the most energy-efficient 7nm data center AI chips in the industry**). Paired with **NeuWare 1.0** software stack + **MindSpore**. It is the **predecessor to MLU 590** and was Cambricon's flagship product before the **MLU 590 (2023)**.
 
**Key lineage**:
- **MLU 100** (2018): 16nm, 8GB, 16 TFLOPS — 1st generation
- **MLU 270** (2019): 16nm, 16GB, 128 TFLOPS — early training
- **MLU 290** (2020): 7nm, 32GB, 256 TFLOPS — 1st 7nm gen
- **MLU 370** (2021): **7nm, 48GB HBM2, 96 INT8 TOPS, 35W** — **this page**
- **MLU 590** (2023): 7nm, 96GB HBM2, 256 INT8 TOPS, 250W — existing page
- **MLU 690** (2025-2026 speculative): 5nm, 192GB HBM3E, 2 PF FP8 — existing page
 
## Core Specifications
 
| Item | Spec |
|------|------|
| **Architecture** | Cambricon MLUv04 (4th generation) |
| **Process** | TSMC 7nm |
| **Compute Cores** | **64x Siyuan 4 cores** (proprietary ISA) |
| **HBM** | **48GB HBM2** |
| **Memory Bandwidth** | **614 GB/s** |
| **INT8** | **96 TOPS** |
| **BF16** | **48 TFLOPS** |
| **FP32** | 24 TFLOPS |
| **TDP** | **35W** (**industry's most efficient 7nm data center AI**) |
| **Form Factor** | PCIe Gen4 x16 |
| **Interconnect** | MLU-Link 200 GB/s |
| **Mass Production** | 2021-Q4 |
| **Unit Price** | ~$1,500-2,500 |
 
## vs MLU 290 (2020)
 
| Metric | MLU 370 (2021) | MLU 290 (2020) | Improvement |
|------|------------------|------------------|------|
| Process | 7nm | 7nm | Same |
| HBM | **48GB HBM2** | 32GB HBM2 | +50% |
| Bandwidth | **614 GB/s** | 307 GB/s | 2x |
| INT8 | **96 TOPS** | 64 TOPS | +50% |
| BF16 | **48 TFLOPS** | 32 TFLOPS | +50% |
| TDP | **35W** | 50W | -30% |
| Interconnect | **200 GB/s** | 100 GB/s | 2x |
| Software | NeuWare 1.0 | NeuWare 0.5 | New gen |
 
## vs Contemporary NVIDIA T4 (2021)
 
| Metric | Cambricon MLU 370 | NVIDIA T4 | Difference |
|------|---------------------|------------|------|
| **Process** | 7nm | 12nm | MLU 370 newer gen |
| **INT8** | 96 TOPS | 130 TOPS | T4 +35% |
| **BF16** | **48 TFLOPS** | N/A | MLU 370 exclusive |
| **TDP** | **35W** | 70W | **MLU 370 -50%** |
| **Efficiency** | **2.74 TOPS/W** | 1.86 TOPS/W | **MLU 370 +47%** |
| **Memory** | 48GB HBM2 | 16GB GDDR6 | **MLU 370 3x** |
| **Bandwidth** | 614 GB/s | 320 GB/s | **MLU 370 1.9x** |
| **Software** | NeuWare + MindSpore | CUDA | T4 mature |
 
> **MLU 370 killer features**: **TDP only 35W (50% of T4)** + **48GB HBM2 (3x T4)** + **BF16 support** (T4 has no BF16), **domestic + energy-efficient + large memory**.
 
## Use Cases
 
- ✅ **Domestic AI inference** (energy-efficient + localized)
- ✅ **Domestic AI training** (48GB HBM2 fits moderately large models)
- ✅ **Government/SOE AI projects** (localization policy mandate)
- ✅ **Intelligent computing centers** (35W efficient, high rack density)
- ✅ **LLaMA 1 13B FP16 inference** (48GB HBM2 sufficient)
- ❌ **Cutting-edge AI training** (FP8 missing)
- ❌ **International market** (no CUDA compatibility)
- ❌ **Very large LLMs** (48GB limited)
 
## LLM Inference Performance (48GB)
 
| Model | Quantization | Performance (tok/s) | Notes |
|------|------|---------------|------|
| LLaMA 1 7B | FP16 | ~25 tok/s | Mainstream |
| LLaMA 1 13B | FP16 | ~12 tok/s | Full FP16 |
| LLaMA 1 30B | Q4_K_M | ~5 tok/s | Quantized |
| LLaMA 1 65B | Q4_K_M | ~3 tok/s | 70GB slightly exceeds |
| ChatGLM-6B | FP16 | ~30 tok/s | Chinese |
| Stable Diffusion 1.5 | FP16 | 2x vs MLU 290 | Image generation |
 
> **48GB HBM2 advantage**: Compared to contemporaneous NVIDIA T4 16GB, **can fit 13B LLM in full FP16** (26GB slightly small), was the **mainstream domestic LLM inference workhorse in 2021-2022**.
 
## Software Stack NeuWare 1.0
 
| Layer | Tool | Notes |
|------|------|------|
| **AI Frameworks** | **NeuWare 1.0** | Unified programming platform |
| | PyTorch (NeuWare backend) | Auto MLU mapping |
| | TensorFlow (NeuWare backend) | Compatible |
| | **MindSpore** | Huawei/CAICT-led, PyTorch compatible |
| **Compiler** | **BANG C/C++** | Cambricon proprietary language |
| **Operator Library** | CNML | CUDA cuDNN-like (~70% coverage) |
| **Quantization** | NeuQuant | INT8 automatic |
| **Model Zoo** | ModelZoo | CV/NLP/LLM |
 
> **MLU 370 software maturity**: Operator coverage ~70% (vs CUDA 99%+), **mainstream LLMs runnable but require manual optimization**.
 
## Vendor Information
 
| Item | Details |
|------|------|
| **Company** | Cambricon Technologies |
| **Founders** | Chen Tianshi and Chen Yunji brothers (CAS ICT) |
| **Founded** | 2016-03 |
| **IPO** | 2020-07-20 STAR Market (688256) |
| **MLU 370 Launch** | 2021-Q4 |
| **Key Customers** | China Mobile, Inspur, Sugon, ByteDance, Zhipu AI |
| **National Projects** | "East Data West Compute" recommended chip |
 
## Key Timeline
 
| Date | Event |
|------|------|
| 2016-03 | Cambricon founded (CAS ICT spinout) |
| 2018-05 | First chip MLU 100 released (16nm) |
| 2020-07-20 | **STAR Market IPO** (688256) |
| 2020 | MLU 290 (7nm 1st gen) |
| **2021-Q4** | **MLU 370 released** (this page) |
| 2022 | MLU 370 mass production + customer deployment |
| 2023-Q4 | MLU 590 released (replaces 370) |
| 2025-2026 speculative | MLU 690 released (replaces 590) |
 
## Cambricon Product Line
 
| Product | Launch | Process | Memory | INT8 | TDP | Status |
|------|------|------|------|------|-----|------|
| **MLU 370** | **2021-Q4** | **7nm** | **48GB HBM2** | **96 TOPS** | **35W** | **In production -> EOL 2023** |
| MLU 590 | 2023-Q4 | 7nm | 96GB HBM2 | 256 TOPS | 250W | Current flagship |
| MLU 690 | 2025-2026 speculative | 5nm | 192GB HBM3E | 4 POPS | 500W | Roadmap |
| MLU 790 (speculative) | 2027 | 3nm | 384GB HBM4 | 8 POPS | 800W | Long-term |
 
## Key Features
 
- **48GB HBM2**: 2021 domestic AI large memory (vs contemporary NVIDIA T4 16GB)
- **TDP 35W**: Industry's most efficient 7nm data center AI
- **Efficiency 2.74 TOPS/W**: 1.5x NVIDIA T4
- **BF16 support**: T4 has no BF16, MLU 370 exclusive
- **MindSpore ecosystem**: Deep Huawei collaboration
- **Weaknesses**: Compute below T4, ecosystem ~70% coverage, already EOL
 
## vs Contemporary Domestic AI Chips (2021-2022)
 
| Metric | Cambricon MLU 370 | Huawei Ascend 310 | Alibaba Hanguang 800 (2021) |
|------|--------------------|---------------------|--------------------------|
| **Process** | 7nm | 12nm | 12nm |
| **INT8** | 96 TOPS | 22 TOPS | **820 TOPS** |
| **TDP** | **35W** | 8W | 168W |
| **Memory** | **48GB HBM2** | 8GB LPDDR4 | 32GB HBM2 |
| **Bandwidth** | 614 GB/s | 25 GB/s | 700 GB/s |
| **Target** | Training + Inference | Edge | Data center inference |
 
> **2021-2022 domestic AI top three**: **Hanguang 800 strongest compute (820 TOPS)**, **MLU 370 largest memory (48GB)**, **Ascend 310 best efficiency (8W)**.
 
## Related Cards
 
- [Cambricon MLU 590](/docs/cards/others/cambricon-mlu) - Next generation
- [Cambricon MLU 690](/docs/cards/cambricon/mlu-690) - Speculative next-gen
- [Huawei Ascend 910B](/docs/cards/huawei/ascend-910b) - Contemporary Huawei
- [Huawei Ascend 310] (no standalone page) - Contemporary Huawei edge
- [Alibaba Hanguang 800](/docs/cards/others/alibaba-hanguang-800) - Contemporary Alibaba
- [Biren BR104](/docs/cards/others/biren-br104) - Domestic AI
- [Moore Threads MTT S5000](/docs/cards/others/moore-threads-mtt-s5000) - Domestic GPU
- [NVIDIA T4](/docs/cards/nvidia/t4) - MLU 370 competitor
- [NVIDIA L4](/docs/cards/nvidia/l4) - Inference comparison
