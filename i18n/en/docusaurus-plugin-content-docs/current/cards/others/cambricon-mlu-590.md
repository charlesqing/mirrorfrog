---
id: cambricon-mlu-590
title: Cambricon MLU590 (Siyuan 590)
sidebar_label: MLU590 (Siyuan 590)
description: Cambricon MLU590 detailed specs (2024 release) - 256 TFLOPS FP16, 512 TOPS INT8, 128 NPU cores, 7nm, MLU-Link, inference+training all-round card.
keywords: [Cambricon MLU590, Siyuan 590, Cambricon MLU590, 7nm, 256 TFLOPS FP16, 512 TOPS INT8, MLU-Link, domestic AI chip]
---

# Cambricon MLU590 (Siyuan 590)#

## Product Overview#

**Cambricon MLU590** (product name **Siyuan 590**) is Cambricon's **third-generation cloud AI training/inference chip**, **released in 2024**, with **2025 mass shipment**. It adopts **7nm process + Chiplet packaging**, delivering **256 TFLOPS FP16** and **512 TOPS INT8** compute. It is the first Cambricon chip to **surpass NVIDIA H20** in energy efficiency ratio (52.3 vs 49.8 TFLOPS/W).

**Positioning**: **Inference + training all-round card**, single-card compute is **2×** that of MLU370, with only **~50W** increase in power consumption. It is a **cost-effective choice** for domestic large model training/inference.

## Core Specifications#

| Item | Parameter |
|------|-----------|
| **Architecture** | 3rd-generation MLU architecture (Da Vinci-like) |
| **Process** | **7nm** (TSMC, estimated) |
| **Packaging** | **Chiplet** (chiplet technology) |
| **NPU Core Count** | **128** (or 32 AI large cores, two counting methods) |
| **FP16** | **256 TFLOPS** |
| **FP32** | **~64 TFLOPS** (estimated, 1/4 of FP16) |
| **INT8** | **512 TOPS** |
| **HBM Capacity** | **48 GB** (estimated, pending official confirmation) |
| **HBM Bandwidth** | **~400 GB/s** (estimated, pending official confirmation) |
| **TDP** | **250 W** (typical) / **300 W** (max) |
| **Interconnect** | **MLU-Link 3.0** (8-way high-speed interconnect, max 16 chips form supercompute node) |
| **Board Form Factor** | PCIe Gen5 ×16 / OAM |
| **Mass Production** | **2024 release, 2025 mass shipment** |
| **Unit Price (Estimated)** | **~$8,000–10,000** |

> ⚠️ **Specification Note**: HBM capacity and bandwidth are estimated values (not fully disclosed by official sources). Subject to Cambricon's subsequent official data sheet.

## Comparison with MLU370#

| Metric | MLU370 | **MLU590** | Improvement |
|--------|---------|----------------|-------------|
| Process | 7nm | **7nm (Chiplet)** | Same process, packaging upgrade |
| FP16 | 128 TFLOPS | **256 TFLOPS** | **2×** |
| INT8 | 256 TOPS | **512 TOPS** | **2×** |
| TDP | ~200W | **250–300W** | +25–50% |
| Interconnect | MLU-Link 2.0 | **MLU-Link 3.0** | Bandwidth improved |
| Energy Efficiency | ~40 TFLOPS/W | **52.3 TFLOPS/W** | +31% |

## Comparison with Competitors (2024–2025 Domestic)#

| Metric | MLU590 | NVIDIA H20 | Ascend 910C | Gap |
|--------|---------|-------------|------------|------|
| FP16 | 256 TFLOPS | ~300 TFLOPS | ~780 TFLOPS | **-15% vs H20, -67% vs 910C** |
| INT8 | 512 TOPS | ~600 TOPS | ~1,600 TOPS | Disadvantage |
| Energy Efficiency | **52.3 TFLOPS/W** | 49.8 TFLOPS/W | Not disclosed | **+5% vs H20** |
| Software Ecosystem | CANN | CUDA | CANN | Ecosystem disadvantge |
| Price | ~$8–10K | ~$20K+ | ~$12K | **Price advantage** |

> **Energy efficiency breakthrough**: MLU590 achieves **52.3 TFLOPS/W** in ResNet-50 training, first time surpassing H20's 49.8 TFLOPS/W (Chinese Academy of Sciences Institute of Computing Technology test data).

## MLU-Link 3.0 Interconnect#

| Item | Parameter |
|------|-----------|
| **Protocol** | MLU-Link 3.0 (Cambricon self-developed) |
| **Max Interconnect** | **8-way** (direct) / **16 chips** (supercompute node) |
| **vs NVLink 5** | Lower bandwidth, but open standard |
| **Cluster Expansion** | Supports PyTorch DistributedDataParallel |

## CANN Software Stack#

| Layer | Tool | Description |
|------|------|-------------|
| **AI Framework** | CANN Runtime | PyTorch / TensorFlow compatible |
| **Graph Compiler** | BangC Compiler | Similar to XLA, automatic operator fusion |
| **Quantization Tool** | CANN Quant | INT8 / FP8 post-training quantization |
| **Communication Library** | CNCL | Collective communication (similar to NCCL) |
| **Model Library** | ModelZoo | Pre-optimized ResNet / BERT / GPT |

## Suitable Scenarios#

- ✅ **Domestic large model training** (below 100B parameters, price-performance advantage)#
- ✅ **Inference as a Service** (energy efficiency surpasses H20)#
- ✅ **Government/SOE AI projects** (supply chain security)#
- ✅ **Computer vision** (ResNet-50 optimzed)#
- ❌ Trillion-parameter LLM training (compute disadvantge)#
- ❌ CUDA ecosystem strong dependency (requires migration to CANN)#

## Product Evolution#

| Product | Release | FP16 TFLOPS | Status |
|---------|---------|----------------|--------|
| MLU270 | 2020 | 16 TFLOPS | EOL |
| MLU370 | 2022 | 128 TFLOPS | Current mainstream |
| **MLU590** | **2024** | **256 TFLOPS** | **Current flagship** |
| MLU690 | 2025+ | ~512 TFLOPS (estimated) | Next generation |

## Key Features#

- **Chiplet packaging**: 7nm + Chiplet, yield and cost optimzed
- **Energy efficiency leadership**: 52.3 TFLOPS/W, surpasses H20
- **MLU-Link 3.0**: 8-way interconnect, supports medium-scale clusters
- **Inference + training all-round**: Single card handles both scenarios
- **Weaknesses**: FP16 compute still lower than H20/910C, software ecosystem 5 years vs CUDA 18 years#

## Related Cards#

- [Cambricon MLU370](/docs/cards/others/cambricon-mlu-370) - Previous generation
- [Cambricon MLU690](/docs/cards/cambricon/mlu-690) - Next generation (estimated)#
- [Huawei Ascend 910C](/docs/cards/huawei/ascend-910c) - Domestic competitor
- [NVIDIA H20](/docs/cards/nvidia/h20) - Compliance-version competitor#

## References#

- [Cambricon record: New-generation AI chip energy efficiency surpasses NVIDIA H20](https://www.toutiao.com/article/7481115658038804992/)
- [Cambricon AI chip maximum core count analysis](https://cj.sina.com.cn/articles/view/7879848900/1d5acf3c401902vsyc)
- [Siyuan 590 chip parameter analysis](https://b2bwiki.baidu.com/article/710645254767460353)
- [Baidu Baike: Siyuan 590](https://baike.baidu.com/item/%E6%80%9D%E5%85%83590/67245650)
