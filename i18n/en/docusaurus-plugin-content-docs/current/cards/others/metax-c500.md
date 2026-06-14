---
id: metax-c500
title: "MetaX XiYun C500 (2022)"
sidebar_label: XiYun C500
description: "MetaX XiYun C500 detailed specs: self-developed XCORE 1.0 architecture, 64GB HBM2e, FP32 54 TFLOPS, TF32 140 TFLOPS, FP16 280 TFLOPS, INT8 560 TOPS, MetaXLink, PCIe Gen5, released 2022"
keywords: [MetaX C500, MetaX, XiYun C500, XCORE 1.0, 64GB HBM2e, FP16 280 TFLOPS, domestic GPU, MXMACA, CUDA compatible]
---

# MetaX XiYun C500 (2022)

## Product Overview

**XiYun C500** is MetaX Integrated Circuit's **first training-inference integrated general-purpose GPU** released in **2022**, based on self-developed **XCORE 1.0 architecture**, equipped with **64GB HBM2e memory**, supporting FP64/FP32/TF32/FP16/BF16/INT8 multi-precision mixed computing, FP16 compute **280 TFLOPS**, INT8 compute **560 TOPS**, interface supports **PCIe Gen5** and **MetaXLink** multi-card interconnection, is the first product of MetaX's "XiYun" C series.

**Positioning**: **Training-inference integrated GPU**, balancing AI training and inference scenarios, performance better than NVIDIA H20 (according to third-party benchmarks).

## Core Specifications

| Item | Parameter |
|------|-----------|
| **Architecture** | Self-developed **XCORE 1.0** (dozens of core IPs) |
| **Process** | Not disclosed (estimated 7nm) |
| **FP32** | **54 TFLOPS** (vector 18 + matrix 36) |
| **TF32** | **140 TFLOPS** |
| **FP16** | **280 TFLOPS** |
| **BF16** | **280 TFLOPS** |
| **INT8** | **560 TOPS** |
| **Memory Capacity** | **64 GB HBM2e** |
| **Memory Bandwidth** | Not disclosed (estimated ~1.6 TB/s) |
| **TDP** | 350 W (estimated) |
| **Interconnect** | **MetaXLink** (7 high-speed interconnect ports, up to 64 cards interconnection) |
| **Interface** | **PCIe Gen5** + MetaXLink |
| **FP64 Support** | ✅ (scientific computing/meteorological prediction) |
| **Release** | **2022** |
| **Mass Production** | Since 2023 |
| **Software Stack** | **MXMACA** (CUDA compatible, migration cost reduced by 90%) |

> ⚠️ **Specification Note**: Process, TDP, and memory bandwidth not fully disclosed by official sources, subject to MetaX's subsequent official data sheet.

## XiYun C Series Product Line

| Product | Architecture | Memory | FP16 TFLOPS | Release | Status |
|---------|--------------|--------|----------------|---------|--------|
| **XiYun C500** | XCORE 1.0 | 64GB HBM2e | **280 TFLOPS** | **2022** | On sale |
| XiYun C550 | XCORE 1.x | Not disclosed | Not disclosed | 2024 | On sale |
| XiYun C588 | XCORE 1.x | Not disclosed | Not disclosed | 2024+ | On sale |
| [XiYun C600](/en/docs/cards/others/metax-c600) | XCORE 1.5 | 144GB HBM3e | FP8 1000 TFLOPS | 2025 | Risk production |

## Comparison with NVIDIA H20

| Metric | XiYun C500 | NVIDIA H20 | Difference |
|--------|--------------|-------------|-----------|
| FP16 | **280 TFLOPS** | ~300 TFLOPS | -7% (close) |
| INT8 | **560 TOPS** | ~600 TOPS | -7% (close) |
| Memory | **64GB HBM2e** | 96GB HBM3 | -33% |
| Interconnect | MetaXLink | NVLink | TBD |
| Ecosystem | MXMACA (CUDA compatible) | CUDA | H20 mature |
| Price | ~¥38,900/card | ~¥200,000/card | **C500 80% cheaper** |

> **Third-party benchmark**: According to public information, XiYun C500 series training-inference integrated GPU performance**better than H20**.

## MXMACA Software Ecosystem

| Layer | Tool | Description |
|-------|------|-------------|
| **Software Stack** | **MXMACA** | MetaX unified computing architecture |
| **AI Framework** | PyTorch | Native support |
| **Distributed** | DeepSpeed | Distributed training |
| **CUDA Compatibility** | Automatic migration tool | Code migration cost reduced by **90%+** |
| **Large Model** | Supports domestic thousand-card cluster | Full parameter training verified |

## Application Scenarios

- ✅ **Domestic large model training** (280 TFLOPS FP16, 64GB memory)
- ✅ **AI inference as a service** (560 TOPS INT8)
- ✅ **Scientific computing** (FP64 double-precision support)
- ✅ **Meteorological prediction** (HPC traditional scenarios)
- ✅ **Domestic AI computing center** (cost-performance advantage)
- ✅ **CUDA migration scenarios** (90%+ migration cost reduction)
- ❌ **FP8 inference** (no direct FP8 format support)
- ❌ **Ultra-large-scale clusters** (MetaXLink TBD vs NVLink)

## Related Cards

- [MetaX XiYun C600](/en/docs/cards/others/metax-c600) - Next generation (FP8 1000 TFLOPS)
- [Kunlun P800](/en/docs/cards/others/kunlun-p800) - Domestic AI compute
- [Huawei Ascend 910C](/en/docs/cards/huawei/ascend-910c) - Domestic training card competitor
- [NVIDIA H20](/en/docs/cards/nvidia/h20) - Compliance version competitor

## References

- [MoLiFangZhou - XiYun C500](https://moark.com/docs/compute/clusters_gpu/mx_gpu)
- [Baidu Baike: XiYun C Series GPU](https://baike.baidu.com/item/%E6%9B%A6%E4%BA%91C%E7%B3%BB%E5%88%97GPU/67620459)
- [Performance better than H20, MetaX XiYun C500 GPU on the market](https://zhuanlan.zhihu.com/p/1946735914928800463)
- [MetaX Official Website - XiYun C500](https://www.metax-tech.com/prod.html?cid=107&id=21)
