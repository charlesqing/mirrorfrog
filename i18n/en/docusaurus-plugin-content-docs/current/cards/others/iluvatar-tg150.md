---
id: iluvatar-tg150
title: "Iluvatar TianGai 150 (BI-V150)"
sidebar_label: TianGai 150 (BI-V150)
description: "Iluvatar TianGai 150 (BI-V150) training GPU specs: TianGai 100 upgrade, FP16 compute improved, CUDA ecosystem compatible, released 2023, supports mixed-precision training"
keywords: [Iluvatar, TianGai 150, BI-V150, Iluvatar CoreX, training GPU, general-purpose GPU, domestic AI chip, mixed-precision training]
---

# Iluvatar TianGai 150 (BI-V150)

## Product Overview

**TianGai 150** (model **BI-V150**) is Iluvatar's second-generation cloud **general-purpose GPU training accelerator** released in **2023**, an upgraded version of TianGai 100 (BI-V100). Using general-purpose GPU architecture, compatible with international mainstream GPU general computing models, supporting domestic and international mainstream AI ecosystems and deep learning frameworks and native operators, with significant performance improvements compared to the previous generation.

**Key Features**: As a next-generation product, TianGai 150 has improvements in FP16 compute and memory bandwidth, capable of handling large-scale AI training and complex computing requirements.

## Core Specifications

| Item | Parameter |
|------|-----------|
| **Architecture** | Iluvatar self-developed general-purpose GPU architecture (TianGai 100 upgrade) |
| **Process** | **7nm** (estimated, same as TianGai 100) |
| **FP16** | Not disclosed (estimated 150–200 TFLOPS) |
| **INT8** | Not disclosed (estimated 300–400 TOPS) |
| **Memory Capacity** | Estimated 32–64 GB HBM2/HBM3 |
| **Memory Bandwidth** | Not disclosed |
| **TDP** | 275 W (estimated) |
| **Interface** | PCIe Gen4 (estimated) |
| **Release** | **2023** |
| **Mass Production** | Since 2023 |
| **Software Stack** | Iluvatar computing software stack (PyTorch/TensorFlow compatible) |

> ⚠️ **Specification Note**: Detailed specifications of TianGai 150 are not fully disclosed by official sources. Some values above are estimates, subject to Iluvatar's subsequent official data sheet.

## TianGai 100 vs TianGai 150

| Metric | TianGai 100 (BI-V100) | **TianGai 150 (BI-V150)** | Improvement |
|--------|---------------------------|----------------------------------|-------------|
| Release | 2021 | **2023** | Next generation |
| FP16 | 128 TFLOPS | **Estimated 150–200 TFLOPS** | +20–55% |
| INT8 | 256 TOPS | **Estimated 300–400 TOPS** | +20–55% |
| Software Ecosystem | Initial | **More mature** | Iterative optimization |

## Hybrid Training Case

TianGai 150 has participated in actual large-scale training deployments:

- **Zhiyuan Research Institute Aquila2-70B-Expr large model hybrid training**: Using **120-node BI-V100 cluster** + **8-node BI-V150 cluster** for hybrid training, hybrid cluster performance reached **85.3%** of theoretical limit (ideal pool theoretical peak), demonstrating excellent heterogeneous computing power hybrid training capability.

## Application Scenarios

- ✅ **Large-scale AI training** (below 100 billion parameter models)
- ✅ **Heterogeneous computing clusters** (hybrid deployment with TianGai 100)
- ✅ **Scientific computing** (FP32/INT32 support)
- ✅ **Smart city** (traffic flow analysis, environmental monitoring)
- ✅ **Data center** (cloud computing, big data acceleration)
- ❌ **Ultra-high compute requirements** (FP16 still lower than H100/A100)
- ❌ **Emerging FP8 precision** (FP8 not supported)

## Product Evolution

| Product | Release | FP16 TFLOPS | Status |
|----------|----------|----------------|--------|
| TianGai 100 (BI-V100) | 2021 | 128 TFLOPS | On sale |
| **TianGai 150 (BI-V150)** | **2023** | Estimated 150–200 TFLOPS | **Current mainstream** |
| TianGai 200 (BI-V200) | TBD | Not disclosed | Next generation (estimated) |

## Related Cards

- [Iluvatar TianGai 100](/en/docs/cards/others/iluvatar-tg100) - Previous generation training card
- [Iluvatar ZhiKai 100](/en/docs/cards/others/iluvatar-mr100) - Same series inference card
- [Cambricon MLU590](/en/docs/cards/others/cambricon-mlu-590) - Domestic training card competitor
- [Huawei Ascend 910C](/en/docs/cards/huawei/ascend-910c) - Domestic training card competitor

## References

- [Iluvatar's TianGai 150 GPU performance and applications](https://zhuanlan.zhihu.com/p/701346268)
- [Domestic computing power — Iluvatar GPU computing chip performance and application scenarios](https://blog.csdn.net/2402_84466582/article/details/139410974)
- [Iluvatar Official Website](https://www.iluvatar.com/)
