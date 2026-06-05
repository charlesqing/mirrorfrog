---
id: cambricon-mlu
title: Cambricon MLU 590 (China AI Training/Inference)
sidebar_label: Cambricon
description: "Cambricon MLU 590 detailed specs: 7nm, 256 TOPS INT8, 96GB HBM2, MindSpore framework, STAR Market listed, national AI team mainstay."
keywords: [Cambricon, MLU 590, China AI chip, MindSpore, STAR Market, national AI team]
---
 
# Cambricon MLU 590 (China AI Training/Inference)
 
## Overview
 
**Cambricon Technologies** is a leading Chinese AI chip company, founded in **2016** (spun out from the Institute of Computing Technology, Chinese Academy of Sciences), with its **STAR Market IPO on 2020-07-20** (ticker 688256). The **MLU 590** is its latest-generation dual-purpose training and inference AI accelerator: **7nm process**, **256 TOPS INT8** compute, **96GB HBM2** memory, **600 GB/s bandwidth**. Paired with the **MindSpore** full-stack AI framework (led by CAICT), key customers include government, state-owned enterprises, and Chinese internet companies.
 
**Strategic position**: Under NVIDIA H100/H200 export controls, Cambricon is one of China's **national team mainstays** for **AI domestic replacement** (alongside Huawei Ascend and Hygon DCU).
 
## Core Specifications
 
| Item | Spec |
|------|------|
| **Architecture** | Cambricon MLU 5th Gen (MLUv05) |
| **Process** | TSMC 7nm (with some SMIC localization) |
| **HBM** | **96 GB HBM2** |
| **Memory Bandwidth** | **600 GB/s** |
| **INT8 Compute** | **256 TOPS** |
| **BF16 Compute** | **125 TFLOPS** |
| **FP32 Compute** | **62.5 TFLOPS** |
| **TDP** | **~250 W** |
| **PCIe** | PCIe 4.0 x16 |
| **Interconnect** | MLU-Link (proprietary, NVLink-like) |
| **Form Factor** | PCIe / OAM module |
| **Mass Production** | 2023-Q4 |
| **Unit Price (OAM)** | ~$3,500-5,000 |
 
## vs Previous MLU 370
 
| Metric | MLU 590 | MLU 370 | Improvement |
|------|---------|---------|------|
| Process | 7nm | 7nm | Same |
| HBM | 96GB HBM2 | 48GB HBM2 | 2x |
| Bandwidth | 600 GB/s | 307 GB/s | 1.95x |
| INT8 | 256 TOPS | 128 TOPS | 2x |
| BF16 | 125 TFLOPS | 64 TFLOPS | 1.95x |
| Interconnect Bandwidth | MLU-Link 600 GB/s | 200 GB/s | 3x |
| TDP | 250W | 150W | +67% |
| Perf/W | 1.0 TOPS/W | 0.85 TOPS/W | +18% |
 
## Siyuan 590 Training Cluster
 
| Item | Config |
|------|------|
| **Board** | 8x Siyuan 590 OAM |
| **Node** | 2x Siyuan 590 servers |
| **Cluster** | 1024 nodes = 8192 cards |
| **Total Compute** | 1.05 EFLOPS BF16 |
| **Total HBM** | 786 TB |
| **Interconnect** | MLU-Link fully connected |
 
## Software Stack
 
| Layer | Framework/Tool | Notes |
|------|-----------|------|
| **AI Frameworks** | **MindSpore** (Huawei/CAICT-led) | PyTorch compatible |
| | PyTorch (Cambricon backend) | MLU device mapping |
| | TensorFlow (Cambricon backend) | Legacy ecosystem |
| **Compiler** | BANG C/C++ | Cambricon proprietary language |
| **Operator Library** | CNML | CUDA cuDNN-like |
| **Model Zoo** | ModelZoo | CV/NLP/Multimodal |
 
> ⚠️ **Ecosystem limitations**: Compared to NVIDIA CUDA + 10 years of software, Cambricon's ecosystem is only **3-4 years** old. PyTorch models need conversion, BANG C has a steep learning curve, and **model migration cost is relatively high**.
 
## Vendor Information
 
| Item | Details |
|------|------|
| **Company** | Cambricon Technologies |
| **Founders** | Chen Tianshi and Chen Yunji brothers (CAS ICT) |
| **Founded** | 2016-03 |
| **IPO** | 2020-07-20 STAR Market (688256) |
| **Market Cap (2026-05)** | ~CNY 320B |
| **2025 Revenue** | ~CNY 7.2B (+340% YoY) |
| **Headquarters** | Haidian District, Beijing |
| **Website** | https://www.cambricon.com |
| **Key Customers** | China Mobile, Inspur, Sugon, ByteDance, Zhipu AI |
| **National Policy** | "East Data West Compute" recommended chip |
 
## Key Features
 
- **High localization**: HBM from Samsung/SK Hynix, domestic packaging (JCET)
- **Siyuan architecture evolution**: MLU 100 (2018) -> 270 (2019) -> 290 (2020) -> 370 (2021) -> 590 (2023) -> 690 (2025 speculative)
- **Unified training + inference**: Same hardware supports both
- **MindSpore ecosystem binding**: Deep collaboration with Huawei (Ascend also uses MindSpore)
- **Multimodal support**: CV / NLP / Speech / Multimodal LLM
- **Weakness**: No FP8 support (NVIDIA Hopper/Blackwell 2-4x advantage), ecosystem weaker than CUDA
 
## DeepSeek / Zhipu Performance Reference
 
- DeepSeek V3 training: Siyuan 590 cluster performance approximately **50-60% of H100 cluster**
- Zhipu GLM-4 inference: Siyuan 590 single card 256 GB/s x 4 = 1 TB/s total bandwidth, **50 tok/s inference speed** (FP16 70B)
- Stable Diffusion XL training: Siyuan 590 approx **80% A100 speed** (BF16)
 
## Use Cases
 
- ✅ China market LLM training and inference
- ✅ Government, SOE AI projects (policy-mandated)
- ✅ Large model inference deployment
- ✅ Domestic replacement projects
- ✅ Intelligent computing center construction ("East Data West Compute" hubs)
- ❌ International market (CUDA ecosystem lock-in)
- ❌ Cutting-edge frontier model training (FP8 missing)
 
## Cambricon vs Huawei Ascend
 
| Dimension | Cambricon MLU 590 | Huawei Ascend 910C |
|------|----------------|----------------|
| **Compute** | 125 BF16 TFLOPS | 780 BF16 TFLOPS |
| **Memory** | 96GB HBM2 | 128GB HBM2E |
| **Ecosystem** | MindSpore (PyTorch-compatible) | MindSpore + CANN |
| **National Support** | STAR Market listed | Huawei in-house |
| **Market Position** | General + intelligent computing centers | Data center + gov/enterprise cloud |
| **2025 Revenue** | ~CNY 7.2B | Included in Huawei Cloud |
 
## Related Cards
 
- [Huawei Ascend 910C](/docs/cards/huawei/ascend-910c) - Domestic strongest
- [Huawei Ascend 920](/docs/cards/huawei/ascend-920) - Next generation
- [Huawei Ascend 910B](/docs/cards/huawei/ascend-910b) - Previous generation
- [NVIDIA H100](/docs/cards/nvidia/h100) - Performance comparison
- [Moore Threads MTT S5000](/docs/cards/others/moore-threads-mtt-s5000) - Domestic GPU startup
- [Tenstorrent](/docs/cards/others/tenstorrent) - RISC-V AI startup
- [SambaNova SN40L](/docs/cards/others/sambanova-sn40l) - US RDU startup
