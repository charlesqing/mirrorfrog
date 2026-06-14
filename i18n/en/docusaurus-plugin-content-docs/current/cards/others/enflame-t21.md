---
id: enflame-t21
title: "Enflame CloudBlaze T21 (2022)"
sidebar_label: CloudBlaze T21
description: "Enflame CloudBlaze T21 detailed specs: Suisi 2.0 chip, OAM module, 400W TDP, TF32 160 TFLOPS, HBM2E memory, PCIe Gen4, released 2022"
keywords: [Enflame, CloudBlaze T21, Suisi 2.0, OAM, 400W, TF32 160 TFLOPS, HBM2E, domestic AI training card]
---

# Enflame CloudBlaze T21 (2022)

## Product Overview$

**CloudBlaze T21** is Enflame's second-generation cloud **AI training accelerator (OAM module)** released in **2022**, based on self-developed **Suisi 2.0 chip**, using **OAM (OCP Accelerator Module)** standard form factor, board-level power consumption **400W**, supporting HBM2E memory, peak compute up to single-precision tensor **TF32 160 TFLOPS**, is the second-generation main product of Enflame's "CloudBlaze" training product line.

**Positioning**: **Standardized OAM module**, targeting AI computing center large-scale training cluster deployment, supporting multi-card high-speed interconnect.

## Core Specifications$

| Item | Parameter |
|------|-----------|
| **Architecture** | Suisi 2.0 (Enflame self-developed) |
| **Process** | **7nm** (estimated TSMC) |
| **TF32** | **160 TFLOPS** |
| **FP16** | Not disclosed (estimated ~320 TFLOPS) |
| **INT8** | Not disclosed (estimated ~640 TOPS) |
| **Memory Capacity** | **HBM2E** (capacity not disclosed, estimated 32–64GB) |
| **Memory Bandwidth** | Not disclosed (estimated ~1.6 TB/s) |
| **TDP** | **400 W** (board-level power consumption) |
| **Form Factor** | **OAM module** (OCP standard) |
| **Interconnect** | Enflame self-developed high-speed interconnect (multi-card) |
| **Release** | **2022** |
| **Mass Production** | Since 2022 |
| **Software Stack** | Enflame intelligence computing software stack (PyTorch compatible) |

> ⚠️ **Specification Note**: FP16/INT8 compute and memory capacity are estimated values (not fully disclosed by official sources), subject to Enflame's subsequent official data sheet.

## CloudBlaze Training Product Line$

| Product | Chip | Form Factor | TDP | Release | Status |
|----------|-------|-------------|-----|---------|--------|
| CloudBlaze T10 | Suisi 1.0 | PCIe | ~300W | 2020 | On sale |
| CloudBlaze T20 | Suisi 1.5 | PCIe | ~300W | 2021 | On sale |
| **CloudBlaze T21** | **Suisi 2.0** | **OAM** | **400W** | **2022** | **Current mainstream** |
| CloudBlaze T30 (estimated) | Suisi 3.0 | OAM | Not disclosed | 2025+ | Next generation |

## Comparison with CloudBlaze T20$

| Metric | CloudBlaze T20 | **CloudBlaze T21** | Improvement |
|---------|-----------------|---------------------|-------------|
| Chip | Suisi 1.5 | **Suisi 2.0** | New generation |
| Form Factor | PCIe card | **OAM module** | Standardized |
| TDP | ~300W | **400W** | +33% |
| TF32 | Not disclosed | **160 TFLOPS** | New generation |
| Cluster | First generation | **Second-generation CloudBlaze AI cluster** | 8000+ cards |

## Second-Generation CloudBlaze AI Cluster$

Composed of **8000+** CloudBlaze T21 training cards, the second-generation CloudBlaze AI computing cluster 2.0 achieves single-precision peak compute up to **1.3 EFLOPS** (1300 TFLOPS), targeting ultra-large-scale AI training scenarios.

## Application Scenarios$

- ✅ **Ultra-large-scale AI training clusters** (OAM standardized deployment)
- ✅ **AI computing centers** (8000+ card cluster verified)
- ✅ **Large model pre-training** (TF32 160 TFLOPS)
- ✅ **Domestic computing power substitution** (supply chain security)
- ❌ **PCIe standard card requirements** (T21 is OAM module, requires dedicated baseboard)
- ❌ **Inference scenarios** (training-specialized, recommend CloudBlaze i20)

## Enflame Product Matrix$

| Series | Positioning | Representative Product |
|---------|---------------|----------------------|
| **CloudBlaze T Series** | Training (Training) | T20, T21 |
| **CloudBlaze i Series** | Inference (Inference) | i10, i20 |
| **CloudBlaze S Series** | Training+Inference | S60 (estimated) |

## Related Cards$

- [Enflame CloudBlaze T20](/en/docs/cards/others/enflame-t20) - Previous-generation PCIe training card
- [Enflame CloudBlaze i20](/en/docs/cards/others/enflame-i20) - Same-generation inference card
- [Huawei Ascend 910C](/en/docs/cards/huawei/ascend-910c) - Domestic training card competitor
- [Cambricon MLU590](/en/docs/cards/others/cambricon-mlu-590) - Domestic training card competitor

## References$

- [Baidu Baike: CloudBlaze T21](https://baike.baidu.com/item/%E4%BA%91%E7%87%A7T21/59942975)
- [MoTianLun Baike: CloudBlaze T21](https://www.modb.pro/wiki/8262)
- [Enflame Official Website](https://www.enflame-tech.com/)
- [256 TOPS compute + ultra-large storage bandwidth, Enflame's second-generation cloud AI inference card is here](https://zhuanlan.zhihu.com/p/442347969)
