---
id: moore-threads-mtt-s4000
title: "Moore Threads MTT S4000 (2023)"
sidebar_label: MTT S4000
description: "Moore Threads MTT S4000 detailed specs: third-generation MUSA architecture, Quyuan GPU, 48GB GDDR6, 768 GB/s, FP32 25 TFLOPS, TF32 50 TFLOPS, INT8 200 TOPS, PCIe 5.0, MTLink, released 2023.12"
keywords: [Moore Threads, MTT S4000, Quyuan GPU, third-generation MUSA, 48GB GDDR6, large model AI computing accelerator, domestic AI chip]
---

# Moore Threads MTT S4000 (2023)

## Product Overview

**MTT S4000** is Moore Threads' **large model AI computing accelerator** released in **December 2023**, based on self-developed **Qiyuan GPU architecture** (third-generation MUSA core architecture), equipped with **48GB GDDR6 memory** (bandwidth **768 GB/s**), FP32 compute **25 TFLOPS**, TF32 compute **50 TFLOPS**, INT8 compute **200 TOPS**, customized optimization for training, fine-tuning and inference of 100-billion-parameter large language models, combined with advanced graphics rendering capabilities, video encoding/decoding capabilities and ultra-high-definition 8K HDR display output.

**Positioning**: **Full-function meta-computing card** (training+inference integration + graphics rendering), core component of KUAE AI computing center solution.

## Core Specifications

| Item | Parameter |
|------|-----------|
| **Architecture** | Self-developed **Qiyuan GPU** (third-generation MUSA core architecture) |
| **Process** | Not disclosed (estimated 7nm/6nm) |
| **FP32** | **25 TFLOPS** |
| **TF32** | **50 TFLOPS** |
| **INT8** | **200 TOPS** |
| **FP16/BF16** | Supported (specific values not disclosed) |
| **Memory Capacity** | **48 GB GDDR6** |
| **Memory Bandwidth** | **768 GB/s** |
| **TDP** | **450 W** |
| **Interconnect** | **MTLink** (x8 Serdes, up to 56Gbps PAM4) |
| **Interface** | **PCIe 5.0 x16**, 4× DisplayPort |
| **Power** | CPU 8-pin × 1 |
| **Release** | **December 2023** |
| **Mass Production** | Since 2024 |
| **Software Stack** | MUSA software stack (CUDA compatible) |

## MUSA Architecture Evolution

| Architecture | Core | Representative Product | Release |
|--------------|------|----------------------|---------|
| First-generation MUSA | Chunxiao | MTT S80/S70 (consumer) | 2022 |
| Second-generation MUSA | Quyuan (improved) | MTT S3000 | 2023 |
| **Third-generation MUSA** | **Qiyuan GPU** | **MTT S4000** | **2023.12** |

## Comparison with MTT S3000

| Metric | MTT S3000 | **MTT S4000** | Improvement |
|--------|-------------|----------------|-------------|
| Architecture | Second-generation MUSA | **Third-generation MUSA (Qiyuan GPU)** | New generation |
| Memory | Not disclosed | **48GB GDDR6** | Larger |
| Bandwidth | Not disclosed | **768 GB/s** | Higher |
| FP32 | Not disclosed | **25 TFLOPS** | Value disclosed |
| TDP | Not disclosed | **450W** | Data center grade |
| Release | 2023 | **2023.12** | Same period improvement |

## KUAE AI Computing Center Solution

MTT S4000 is the core component of Moore Threads' **KUAE AI computing center solution**:

- **100-billion-parameter large model** training, fine-tuning, inference full-stack support
- **MTLink** multi-card high-speed interconnect (x8 Serdes, 56Gbps PAM4)
- **MUSA software stack** fully supports PyTorch/DeepSpeed and other mainstream frameworks
- **CUDA compatibility layer**, reducing model migration costs

## Application Scenarios

- ✅ **100-billion-parameter large model training** (customized optimization)
- ✅ **Large model inference as a service** (INT8 200 TOPS)
- ✅ **Graphics rendering + AI hybrid workloads** (full-function GPU)
- ✅ **Video encoding/decoding** (8K HDR display output)
- ✅ **Domestic AI computing center** (KUAE solution)
- ❌ **Ultra-high FP16 training compute** (25 TFLOPS FP32 lower than H100)
- ❌ **Ultra-large-scale clusters** (MTLink TBD vs NVLink)

## Product Matrix

| Series | Positioning | Representative Product |
|--------|---------------|----------------------|
| **MTT S Series** | Server GPU (data center) | S3000, S4000, S5000 |
| **MTT S Series (Consumer)** | Desktop GPU | S80, S70 |
| **KUAE** | AI computing center solution | S4000 + MTLink + MUSA software stack |

## Related Cards

- [Moore Threads MTT S3000](/en/docs/cards/others/moore-threads-mtt-s3000) - Same-generation server GPU
- [Moore Threads MTT S5000](/en/docs/cards/others/moore-threads-mtt-s5000) - Next generation (estimated)
- [MetaX XiYun C500](/en/docs/cards/others/metax-c500) - Domestic training+inference competitor
- [Cambricon MLU590](/en/docs/cards/others/cambricon-mlu-590) - Domestic training card competitor

## References

- [Moore Threads MTT S4000 Product Specification](https://docs.mthreads.com/s4000/s4000-doc-online/product_specifications/)
- [Moore Threads MTT S4000 Parameters - ZOL](https://detail.zol.com.cn/2162/2161613/param.html)
- [MTT S4000 Technical Specification Analysis - Baidu Wenku](https://wenku.baidu.com/view/a2ab64390340be1e650e52ea551810a6f524c8b7.html)
- [Moore Threads Official Website](https://www.mthreads.com/product/S4000)
