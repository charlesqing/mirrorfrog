---
id: cambricon-mlu-690
title: Cambricon MLU 690 (2025-2026 Speculative)
sidebar_label: MLU 690
description: "Cambricon MLU 690 detailed specs (speculative): 5nm, 2 PF FP8 dense, 192GB HBM3E, 2x MLU 590 performance, domestic next-gen AI."
keywords: [Cambricon MLU 690, Cambricon, 5nm, FP8, HBM3E, domestic next-gen, 2025-2026 speculative]
---
 
# Cambricon MLU 690 (2025-2026 Speculative)
 
:::warning Speculative Content
Specs on this page are based on Cambricon 2024 public statements + Chen Tianshi 2025-Q1 roadmap + industry analyst projections. **Cambricon has not officially released complete MLU 690 specs**. **Official data subject to actual 2025 H2 / 2026 H1 announcement**.
:::
 
## Overview
 
**Cambricon MLU 690** is Cambricon's seventh-generation AI training/inference chip, **expected to launch 2025 H2 to 2026 H1** (**Siyuan 690**). Based on **5nm process** (TSMC or SMIC localization), **2 PFLOPS FP8 dense** compute (2x MLU 590), **192GB HBM3E** memory, **5 TB/s bandwidth**. Paired with **MindSpore 2.0** + **Cambricon NeuWare 2.0** software stack.
 
**Strategic significance**: Amid competition from NVIDIA B200 / AMD MI355X / Huawei Ascend 920, **MLU 690 is Cambricon's key product to reclaim domestic AI leadership**. **2025 Cambricon revenue CNY 7.2B**, **MLU 690 targets CNY 15-20B** (2026).
 
## Core Specifications (Speculative)
 
| Item | Spec |
|------|------|
| **Architecture** | Cambricon MLUv07 (7th generation) |
| **Process** | **TSMC 5nm / SMIC 5nm localization (speculative)** |
| **Chiplets** | 2x chiplet |
| **HBM** | **192GB HBM3E** |
| **Memory Bandwidth** | **5 TB/s** |
| **FP8 dense** | **2 PFLOPS** |
| **FP16 / BF16 dense** | 1 PFLOPS |
| **INT8** | 4 POPS |
| **TDP** | **~500W** |
| **Form Factor** | OAM / PCIe Gen5 x16 |
| **Interconnect** | **MLU-Link 1.2 TB/s** (NVLink 5-class) |
| **Mass Production** | **2025 H2 - 2026 H1** |
| **Unit Price (OAM)** | **~$8,000-12,000** (speculative) |
 
## vs MLU 590
 
| Metric | MLU 690 (Speculative) | MLU 590 | Improvement |
|------|------------------|---------|------|
| Process | 5nm | 7nm | New gen |
| HBM | 192GB HBM3E | 96GB HBM2 | 2x |
| Bandwidth | 5 TB/s | 600 GB/s | 8x |
| FP8 dense | **2 PF** | N/A (FP16 125 TF) | New |
| FP16 / BF16 | 1 PF | 125 TF | **8x** |
| INT8 | 4 POPS | 256 TOPS | **15x** |
| Interconnect | MLU-Link 1.2 TB/s | MLU-Link 600 GB/s | 2x |
| TDP | 500W | 250W | 2x |
| Price (speculative) | ~$10K | ~$5K | 2x |
| Software | NeuWare 2.0 + MindSpore 2.0 | NeuWare 1.0 | New gen |
 
## vs NVIDIA B200
 
| Metric | Cambricon MLU 690 (Speculative) | NVIDIA B200 | Difference |
|------|------------------------|--------------|------|
| Process | 5nm | TSMC 4N | Comparable |
| Memory | 192GB HBM3E | 192GB HBM3E | Same |
| Bandwidth | 5 TB/s | 8 TB/s | B200 +60% |
| FP8 dense | 2 PF | 4.5 PF sparse | B200 2.25x |
| BF16 dense | 1 PF | 2.25 PF sparse | B200 2.25x |
| FP4 | **N/A** | 9 PF sparse | **B200 exclusive** |
| Interconnect | MLU-Link 1.2 TB/s | NVLink 5 1.8 TB/s | B200 1.5x |
| TDP | 500W | 1000W | **MLU 690 -50%** |
| Software | NeuWare + MindSpore | CUDA | B200 advantage |
| Price (speculative) | ~$10K | ~$30-40K | **MLU 690 -75%** |
 
> **MLU 690 advantages**: **TDP only 500W (50% of B200)** + **25% the price**, **FP8 and HBM3E same generation as B200**, the **best B200 alternative under export controls in China**.
 
## Cambricon Product Line
 
| Product | Launch | Process | Memory | FP16 dense | Status |
|------|------|------|------|------------|------|
| MLU 100 | 2018 | 16nm | 8GB | 16 TF | EOL |
| MLU 270 | 2019 | 16nm | 16GB | 128 TF | EOL |
| MLU 290 | 2020 | 7nm | 32GB | 256 TF | EOL |
| MLU 370 | 2021 | 7nm | 48GB HBM2 | 96 TF | In production |
| MLU 590 | 2023-Q4 | 7nm | 96GB HBM2 | 125 TF | **Current flagship** |
| **MLU 690** | **2025 H2 - 2026 H1** | **5nm** | **192GB HBM3E** | **1 PF (FP8 2 PF)** | **Roadmap** |
| MLU 790 (speculative) | 2027 | 3nm | 384GB HBM4 | 2.5 PF | Long-term |
 
## NeuWare 2.0 + MindSpore 2.0 Software Stack
 
| Layer | Tool | Notes |
|------|------|------|
| **AI Frameworks** | **MindSpore 2.0** | Huawei/CAICT-led, PyTorch compatible |
| | PyTorch (NeuWare backend) | MLU device mapping |
| | TensorFlow (NeuWare backend) | Compatible |
| **Compiler** | **BANG C/C++** | Cambricon proprietary language |
| | **NeuWare Graph Compiler** | Graph compilation optimization (MLU 690 new) |
| **Operator Library** | **CNML 2.0** | CUDA cuDNN-like, ~80% operator coverage (vs MLU 590 70%) |
| **Quantization** | **NeuQuant 2.0** | INT8/FP8 automatic |
| **Model Zoo** | ModelZoo (1000+ models) | CV/NLP/Multimodal |
| **Cluster** | **NeuWare Cluster** | 1024 nodes = 8K MLU 690 cards |
 
> **MLU 690 software improvements**: Operator coverage from 70% -> 80% vs MLU 590, **FP8 support**, **improved PyTorch compatibility**, **reduced deep learning model migration cost**.
 
## Vendor Information
 
| Item | Details |
|------|------|
| **Company** | Cambricon Technologies |
| **Founders** | Chen Tianshi and Chen Yunji brothers (CAS ICT) |
| **Founded** | 2016-03 |
| **IPO** | 2020-07-20 STAR Market (688256) |
| **Market Cap (2026 speculative)** | ~CNY 500B (+50% YoY) |
| **2025 Revenue** | ~CNY 7.2B (+340% YoY) |
| **2026 Revenue Target** | ~CNY 15-20B (MLU 690 contributes 50%) |
| **Headquarters** | Haidian District, Beijing |
| **Website** | https://www.cambricon.com |
| **Key Customers** | China Mobile, Inspur, Sugon, ByteDance, Zhipu AI, Alibaba Tongyi, Baidu Wenxin |
| **National Policy** | "East Data West Compute" recommended chip |
 
## Cambricon vs Huawei Ascend vs Moore Threads
 
| Dimension | Cambricon MLU 690 (Speculative) | Huawei Ascend 920 | Moore Threads MTT S5000 |
|------|------------------------|---------------|---------------------|
| **Compute** | 2 PF FP8 | 900 BF16 TF | 50 BF16 TF |
| **Memory** | 192GB HBM3E | 96GB HBM2E | 48GB GDDR6 |
| **FP8** | **Yes** | No | No |
| **Ecosystem** | MindSpore 2.0 | MindSpore + CANN | MUSA |
| **Market** | General + intelligent computing centers | Data center + gov/enterprise cloud | General + graphics |
| **2025 Revenue** | CNY 7.2B | Included in Huawei Cloud | CNY 2.2B |
| **Localization** | HBM Samsung + domestic CPU/packaging | Domestic (partial) | 60% localized |
 
> **MLU 690 advantages**: **Only domestic chip supporting FP8** + **HBM3E same generation as B200** + **Cambricon STAR Market listed** (strong fundraising capacity).
 
## Key Features
 
- **FP8 2 PF**: First domestic chip supporting FP8, catching up to NVIDIA Blackwell
- **HBM3E 192GB**: Same capacity as B200
- **5nm localization**: Possibly using SMIC 5nm (domestic milestone)
- **MLU-Link 1.2 TB/s**: Competing with NVLink 5
- **NeuWare 2.0**: 80% operator coverage, better PyTorch compatibility
- **Price advantage**: ~25% of B200 price
 
## Use Cases
 
- ✅ **Domestic AI training** (B200 export control alternative)
- ✅ **LLM training** (HBM3E 192GB + FP8)
- ✅ **FP8 model training** (MLU 690 exclusive domestic capability)
- ✅ **Government/SOE AI projects** (STAR Market listed)
- ✅ **Intelligent computing centers** ("East Data West Compute" hubs)
- ✅ **Internet companies** (ByteDance, Zhipu, Alibaba)
- ❌ **International market** (no CUDA compatibility)
- ❌ **FP4 model training** (FP8 only)
- ❌ **CUDA proprietary workloads**
 
## Key Risks
 
- **5nm localization progress**: SMIC 5nm yield unverified, may depend on TSMC
- **HBM3E supply**: HBM3E from SK Hynix (Korea) / Samsung, may face US sanctions
- **Software migration cost**: PyTorch model migration requires manual optimization (80% coverage, 20% still needs custom work)
- **NVIDIA countermeasures**: NVIDIA launches H20 improved versions (already H20 -> H30 -> ongoing)
 
## Related Cards
 
- [Cambricon MLU 590](/docs/cards/others/cambricon-mlu) - Previous generation
- [Huawei Ascend 920](/docs/cards/huawei/ascend-920) - Domestic strongest
- [Huawei Ascend 910C](/docs/cards/huawei/ascend-910c) - Domestic current
- [Moore Threads MTT S5000](/docs/cards/others/moore-threads-mtt-s5000) - Domestic GPU
- [Biren BR104](/docs/cards/others/biren-br104) - Domestic AI startup
- [NVIDIA B200](/docs/cards/nvidia/b200) - Industry comparison
- [NVIDIA B300 Ultra](/docs/cards/nvidia/b300-ultra) - Same generation
- [AMD MI355X](/docs/cards/amd/mi355x) - Industry comparison
- [Qualcomm AI 200/300](/docs/cards/others/qualcomm-ai-200) - New entrant
