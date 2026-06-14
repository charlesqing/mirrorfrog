---
id: enflame-i20
title: "Enflame CloudBlaze i20 (2022)"
sidebar_label: CloudBlaze i20
description: "Enflame CloudBlaze i20 detailed specs: Suisi 2.5 chip, 12nm, inference accelerator, PCIe form factor, released 2022, targeting computer vision, NLP and other inference scenarios"
keywords: [Enflame, CloudBlaze i20, Suisi 2.5, 12nm, inference card, AI inference, domestic AI chip]
---

# Enflame CloudBlaze i20 (2022)

## Product Overview

**CloudBlaze i20** is Enflame's second-generation **AI inference accelerator** released in **2022**, based on self-developed **Suisi 2.5 chip**, using **12nm process**, targeting data center inference scenarios, with high performance and energy efficiency, broad model coverage, easy deployment and maintenance features, can be widely used in computer vision, speech recognition and synthesis, natural language processing, search and recommendation and other inference scenarios.

**Positioning**: **AI inference specialized** (inference-optimized), forming a complete product matrix with CloudBlaze T series (training specialized).

## Core Specifications

| Item | Parameter |
|------|-----------|
| **Architecture** | Suisi 2.5 (Enflame self-developed) |
| **Process** | **12nm** (mature process, cost advantage) |
| **FP16** | Not disclosed (estimated ~100 TFLOPS) |
| **INT8** | Not disclosed (estimated ~200 TOPS) |
| **Memory Capacity** | Not disclosed (estimated 16–32GB) |
| **Memory Bandwidth** | Not disclosed |
| **TDP** | 200 W (estimated) |
| **Form Factor** | **PCIe standard card** (full-height full-length) |
| **Interconnect** | Supports multi-card inference |
| **Release** | **2022** |
| **Mass Production** | Since 2022 |
| **Software Stack** | Enflame intelligence computing software stack (PyTorch/TensorFlow compatible) |

> ⚠️ **Specification Note**: Detailed specifications of CloudBlaze i20 are not fully disclosed by official sources. Some values above are estimates, subject to Enflame's subsequent official data sheet.

## Suisi Chip Evolution

| Chip | Process | Application | Product |
|------|---------|-------------|---------|
| Suisi 1.0 | 12nm (estimated) | First generation | CloudBlaze T10, i10 |
| Suisi 1.5 | 12nm | First generation upgrade | CloudBlaze T20 |
| **Suisi 2.0** | **7nm** | Second-generation training | **CloudBlaze T21** |
| **Suisi 2.5** | **12nm** | Second-generation inference | **CloudBlaze i20** |
| Suisi 3.0 (estimated) | 7nm/5nm | Third generation | CloudBlaze T30 (TBD) |

## Comparison with CloudBlaze i10

| Metric | CloudBlaze i10 | **CloudBlaze i20** | Improvement |
|--------|-----------------|---------------------|-------------|
| Chip | Suisi 1.x | **Suisi 2.5** | New generation |
| Model coverage | Basic | **Broader** | Enhanced generalization support |
| Cost-performance | Baseline | **Better** | 12nm mature process |
| Supply chain | Baseline | **More stable** | 12nm capacity sufficient |

## Application Scenarios

- ✅ **Computer vision inference** (detection/tracking/classification)
- ✅ **Speech recognition and synthesis**
- ✅ **Natural language processing** (NLP inference)
- ✅ **Search and recommendation** (internet scenarios)
- ✅ **General internet/traditional industries/new infrastructure**
- ✅ **Cost-performance sensitive scenarios** (12nm cost advantage)
- ❌ **Large model training** (inference-specialized card)
- ❌ **Ultra-high compute requirements** (training cards better)

## Enflame Product Matrix

| Series | Positioning | Representative Product | Chip |
|--------|---------------|----------------------|-------|
| **CloudBlaze T Series** | Training | T20, T21 | Suisi 1.5/2.0 |
| **CloudBlaze i Series** | Inference | i10, i20 | Suisi 1.x/2.5 |
| **CloudBlaze S Series** | Training+Inference | S60 (estimated) | Suisi 3.0 (estimated) |

## Related Cards

- [Enflame CloudBlaze T20](/en/docs/cards/others/enflame-t20) - Same-generation training card
- [Enflame CloudBlaze T21](/en/docs/cards/others/enflame-t21) - Next-generation training card
- [Iluvatar ZhiKai 100](/en/docs/cards/others/iluvatar-mr100) - Domestic inference card competitor
- [Cambricon MLU590](/en/docs/cards/others/cambricon-mlu-590) - Domestic training+inference competitor

## References

- [Enflame Hardware Documentation Center - CloudBlaze i20](https://support.enflame-tech.com/onlinedoc_hw/2-i2x/i20/index.html)
- [256 TOPS compute + ultra-large storage bandwidth, Enflame's second-generation cloud AI inference card is here](https://zhuanlan.zhihu.com/p/442347969)
- [Enflame Official Website](https://www.enflame-tech.com/)
