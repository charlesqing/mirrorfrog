---
id: denglin-goldwasser
title: "Denglin Goldwasser (GPU+)"
description: "The Denglin Goldwasser series of Chinese GPU-class AI accelerator cards entered mass production in 2020 on TSMC 12nm, using a GPU+ in-chip heterogeneous (general-purpose compute + dataflow) compute-in-memory architecture for integrated training and inference, with up to 512 TOPS INT8."
keywords: [Denglin, Goldwasser, GPU+, dataflow, compute-in-memory, training-inference integrated, 12nm, inference training, Denglin Technology]
vendor: others
vendor_full: "Suzhou Denglin Technology Co., Ltd. (GLead)"
series: "Goldwasser UL / L / XL"
release_date: "2020-06"
status: "Mass production"
---

# Denglin Goldwasser (GPU+)

## Product Overview

**Denglin Technology (Denglin / GLead)** was founded in 2017; its core team members mostly came from GPU companies such as Vivante, and it is dedicated to building high-performance, high-efficiency general-purpose AI acceleration solutions with its proprietary **GPU+** architecture. Its first product, the **Goldwasser** series, achieved Full Mask mass production on the **TSMC 12nm** process in **June 2020** and completed production introduction at industry-leading companies in smart security, the internet, smart cities, and more.

Goldwasser's core innovation is **GPU+ (a software-defined in-chip heterogeneous architecture)**: by organically combining a "programmable GPGPU engine" and an "efficient Tensor engine" within a single chip, it resolves the tension between generality and efficiency in a **dataflow-driven** manner, and simultaneously supports **inference and training (training-inference integrated)**. It is compatible with the CUDA / OpenCL programming models, lowering customers' migration cost from the NVIDIA ecosystem — a key differentiator the company emphasizes.

Goldwasser offers multiple models covering edge to data center: edge **Goldwasser UL** (25-35W, 32-64 TOPS), half-height half-length server card **Goldwasser L** (40-70W, 128-256 TOPS), and full-height full-length **Goldwasser XL** (512 TOPS).

## Core Specifications

| Parameter | Value |
|------|------|
| **Architecture** | GPU+ in-chip heterogeneous (programmable GPGPU engine + efficient Tensor engine, dataflow-driven, CUDA/OpenCL compatible) |
| **Process Node** | TSMC 12nm |
| **FP16 / BF16 Compute** | Not disclosed (training-inference integrated; specific floating-point figures not listed by the vendor) |
| **INT8 Compute** | **32-512 TOPS** (by model: UL 32-64 / L 128-256 / XL 512 TOPS) |
| **FP32 Compute** | Not disclosed |
| **Memory Capacity** | Not disclosed |
| **Memory Type** | Not disclosed |
| **Memory Bandwidth** | Not disclosed |
| **TDP** | **40-70 W** (typical range for Goldwasser L; UL 25-35W, XL undisclosed) |
| **Interconnect** | Not disclosed |
| **Interface** | PCIe (specific version not listed by the vendor) |
| **Launch** | 2020-06 |
| **Mass Production/Availability** | 2020-06 (Full Mask mass production) |

> **Note**: In testing, Goldwasser delivered **128 TOPS** at a **40W TDP** (i.e., the lower bound of Goldwasser L); the vendor claims 3-10× computational efficiency gains over mainstream products on different neural networks at the same process node, with reduced dependence on external memory throughput. FP16/BF16, FP32, and memory specifications are not officially disclosed, hence "Not disclosed".

## Key Features
- **GPU+ in-chip heterogeneity = generality + efficiency**: schedules the GPGPU engine and Tensor engine in a dataflow manner, balancing the CUDA-compatible ecosystem with high compute density.
- **Training-inference integrated**: the same architecture supports both AI inference and training, unlike most inference-only ASICs.
- **Software-defined**: software definition lets different neural networks maximize hardware performance and energy efficiency, avoiding the data-exchange overhead of system-level heterogeneity.
- **CUDA/OpenCL compatible**: significantly lowers customer migration cost; existing ecosystem assets can be reused directly.
- **Full-scenario coverage**: from 25W at the edge to 512 TOPS in the data center, with a complete model gradient.

## Vendor Information
| Item | Details |
|------|------|
| **Company** | Suzhou Denglin Technology Co., Ltd. (GLead) |
| **Headquarters** | Suzhou, China (R&D/office sites in Shanghai, Beijing, Hangzhou, Chengdu, Xi'an, Shenzhen, and elsewhere) |
| **Founded** | 2017 |

## Use Cases
- ✅ **Cloud/edge AI inference and training** (training-inference integrated, covering security, internet, smart cities)
- ✅ **Migration of existing CUDA-ecosystem models** (hardware-compatible with CUDA/OpenCL)
- ✅ **High-density data center accelerator cards** (Goldwasser XL 512 TOPS)
- ❌ **Ultra-low-power edge** (the UL starts at 25W, still above most edge NPUs)
- ❌ **Fully proprietary instruction set ecosystem** (CUDA compatibility is the priority; the proprietary ecosystem is still maturing)

## Related Cards
- [TsingMicro TX81](/docs/cards/others/tsingmicro-tx81) — Chinese reconfigurable computing innovative architecture
- [Vastai VA10](/docs/cards/others/vastai-va10) — Chinese cloud inference accelerator card
- [Lightmatter Envise](/docs/cards/others/lightmatter-envise) — International compute-in-memory route comparison

## References
- [Denglin Goldwasser mass production and specifications (cnblogs AMD/GPU analysis)](https://www.cnblogs.com/wujianming-110117/p/17190478.html)
- [Denglin Goldwasser production introduction, training-inference integration, and measured data (PCA China)](https://www.pcachina.com/article/3000137816)
- [Denglin Technology official product center](https://denglinai.com)
