---
id: iluvatar-tg100
title: "Iluvatar TianGai 100 (BI-V100)"
sidebar_label: TianGai 100 (BI-V100)
description: "Iluvatar TianGai 100 (BI-V100) detailed specs: 7nm, 32GB HBM2, board power 250W, FP16 128 TFLOPS, INT8 256 TOPS, PCIe Gen4, released 2021, first domestic fully self-developed cloud training GPU"
keywords: [Iluvatar, TianGai 100, BI-V100, Iluvatar CoreX, 7nm, 32GB HBM2, 250W, training GPU, general-purpose GPU, domestic AI chip]
---

# Iluvatar TianGai 100 (BI-V100)

## Product Overview

**TianGai 100** (model **BI-V100**) is Iluvatar's **first domestic fully self-developed general-purpose GPU training accelerator** officially released in **March 2021**, using **7nm process**, equipped with **32GB HBM2 memory**, board-level power consumption **250W**, supporting FP32/FP16/INT8 mixed-precision training, compatible with international mainstream GPU general computing models, supporting PyTorch/TensorFlow and other mainstream AI frameworks, is the founding work of Iluvatar's "TianGai" training product series.

**Strategic Significance**: Achieved a major breakthrough from 0 to 1 for domestic general-purpose GPU products, filling the gap in domestic cloud training GPUs.

## Core Specifications

| Item | Parameter |
|------|-----------|
| **Architecture** | Iluvatar self-developed general-purpose GPU architecture |
| **Process** | **7nm** (estimated TSMC) |
| **FP16** | **128 TFLOPS** |
| **INT8** | **256 TOPS** |
| **INT32** | **32 TFLOPS** |
| **Memory Capacity** | **32 GB HBM2** |
| **Memory Bandwidth** | Not disclosed (estimated ~1 TB/s) |
| **TDP** | **250 W** (board-level power consumption) |
| **Interface** | **PCIe Gen4.0 x16** |
| **Inter-chip Interconnect** | 64 GB/s bidirectional bandwidth |
| **Cooling** | Passive cooling |
| **Dimensions** | Full-length full-height dual-slot PCIe card |
| **Release** | **March 2021** |
| **Mass Production** | Since 2021 |
| **Software Stack** | Iluvatar computing software stack (PyTorch/TensorFlow compatible) |

> ⚠️ **Specification Note**: Memory bandwidth not fully disclosed by official sources, subject to Iluvatar's subsequent official data sheet.

## TianGai Series Product Line

| Product | Release | FP16 TFLOPS | Memory | Status |
|----------|----------|----------------|----------|--------|
| **TianGai 100 (BI-V100)** | **2021** | **128 TFLOPS** | 32GB HBM2 | On sale |
| TianGai 150 (BI-V150) | 2023 | Not disclosed (estimated higher) | Not disclosed | On sale |
| TongYang TY1000 | 2024+ | Not disclosed | Not disclosed | Next generation |

## Software Ecosystem

| Layer | Tool | Description |
|-------|------|-------------|
| **AI Framework** | PyTorch / TensorFlow | Native compatibility |
| **Programming Language** | CUDA C++ / OpenCL | Supports mainstream programming models |
| **Operator Library** | Iluvatar computing software stack | Native operators + custom operators |
| **Cluster Training** | Supports distributed training | Multi-card interconnect |

## Application Scenarios

- ✅ **Domestic large model training** (below 100 billion parameters)
- ✅ **AI framework migration** (CUDA programming model compatible)
- ✅ **Government/state-owned enterprise AI projects** (supply chain security)
- ✅ **Scientific computing** (FP32/INT32 support)
- ❌ **Ultra-high compute requirements** (FP16 128 TFLOPS lower than H100)
- ❌ **Emerging FP8 precision** (FP8 not supported)

## Comparison with ZhiKai 100 (MR100)

| Metric | TianGai 100 (BI-V100) | ZhiKai 100 (MR100) | Difference |
|--------|---------------------------|--------------------------|-----------|
| **Positioning** | Training (Training) | Inference (Inference) | Different scenarios |
| **FP16** | 128 TFLOPS | 96 TFLOPS | TianGai stronger |
| **INT8** | 256 TOPS | 192 TOPS | TianGai stronger |
| **Video Decoding** | Not supported | 128-channel 1080P | ZhiKai exclusive |
| **TDP** | 250W | Estimated 250-300W | Similar |

## Related Cards

- [Iluvatar ZhiKai 100](/en/docs/cards/others/iluvatar-mr100) - Same series inference card
- [Iluvatar TianGai 150](/en/docs/cards/others/iluvatar-tg150) - Next-generation training card
- [Cambricon MLU370](/en/docs/cards/others/cambricon-mlu-370) - Domestic training card competitor
- [Huawei Ascend 910B](/en/docs/cards/huawei/ascend-910b) - Domestic training card competitor

## References

- [Iluvatar Official Website - TianGai 100](https://www.iluvatar.com/productDetails?fullCode=cpjs-yj-xlxltt-tg100)
- [TianGai 100 Product Specification (Excel)](http://114.252.144.16:8989/wdap/include/Pubview.do?fileid=4028a47d98bffb920199ec0bfb310ea3&wid=6778d4c883b545c89c61d2ce9b0b4083)
- [Iluvatar TianGai Series GPU Parameter Summary](https://zhuanlan.zhihu.com/p/2023398793224230881)
- [OpenI: TianGai 100 Computing Platform](https://openi.pcl.ac.cn/iluvatar/TianGai100)
