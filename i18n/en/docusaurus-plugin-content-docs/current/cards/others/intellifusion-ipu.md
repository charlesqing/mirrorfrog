---
id: intellifusion-ipu
title: "Intellifusion DeepEye1000 (IPU)"
description: "Intellifusion DeepEye1000 (Yuntian Chuxin) is a domestic visual AI inference chip built on 22nm FD-SOI with compute-storage fusion and a reconfigurable compute array, delivering about 2 TOPS of INT compute for edge and endpoint security and vision applications."
keywords: [Intellifusion, Intellifusion, DeepEye1000, IPU, compute-storage fusion, visual AI, security, 22nm, edge, reconfigurable]
vendor: others
vendor_full: "Shenzhen Intellifusion Technologies Co., Ltd."
series: "DeepEye1000 / IPU Module"
release_date: "2019-11"
status: "Mass production"
---

# Intellifusion DeepEye1000 (IPU)

## Product Overview

**Intellifusion** is a Shenzhen-based AI company known for its full-stack "algorithms + chips + big data" capabilities, focusing on digital cities, smart security, and edge vision. **DeepEye1000** (also known as "Yuntian Chuxin DeepEye1000") is the company's first deep learning neural network processor chip for computer vision, released on **November 13, 2019** at the 21st China Hi-Tech Fair, and serves as the carrier of its second-generation neural network processor, the **NNP200**.

The chip is positioned for **edge and endpoint vision inference**, targeting smart security, intelligent transportation, industrial inspection, robotics, drones, and similar scenarios. Its biggest innovation is the **compute-storage fusion architecture + reconfigurable compute array**: compute efficiency exceeds 99%, DDR memory access bandwidth drops by 77% and power consumption drops by 60% compared with traditional solutions — a typical domestic "compute-storage/reconfigurable" innovative architecture rather than a general-purpose GPU.

Around DeepEye1000, Intellifusion has launched edge inference product forms such as the IPU X1000 module and IPU X1000 / X2000 / X5000 accelerator cards, commercializing this self-developed vision NPU as modules and PCIe cards.

## Core Specifications

| Parameter | Value |
|-----------|-------|
| **Architecture** | Heterogeneous multi-core visual AI coprocessor (compute-storage fusion + reconfigurable compute array, self-developed NNP200 quad-core neural network processor) |
| **Process Node** | 22nm FD-SOI |
| **FP16 / BF16 Compute** | Not disclosed (chip level; the IPU X1000 card is listed as supporting FP16 + INT16/12/8) |
| **INT8 Compute** | **2.0 TOPS** (peak, INT16/INT12/INT8 mixed precision; IPO disclosure lists 1.5 TOPS at INT12) |
| **FP32 Compute** | Not disclosed |
| **Memory Capacity** | Not disclosed (chip level); the IPU X1000 module/card comes with 16GB DDR4 |
| **Memory Type** | DDR4 (module/card form) |
| **Memory Bandwidth** | Not disclosed (officially stated that compute-storage fusion reduces DDR access bandwidth by 77%) |
| **TDP** | Not disclosed (chip level); the IPU X1000 card has typical power of about 20W (passive cooling) |
| **Interconnect** | Not disclosed |
| **Interface** | SoC (chip); the IPU X1000 card uses PCIe 2.0 ×4 |
| **Launch** | 2019-11 |
| **Mass Production/Availability** | 2019-11 (in mass production, commercially deployed at scale) |

> **Note**: Chip-level peak compute is about 2.0 TOPS (consistent across Baidu Baike and the SSE IPO inquiry response); "10 TOPS" appears in IPU X1000 accelerator card materials (with the NNP clock raised to 1GHz) and is a board/module-level figure, not the bare-chip peak — this table uses the bare-chip 2.0 TOPS. FP16/FP32 bare-chip compute has not been officially broken out and is therefore marked "Not disclosed".

## Key Features

- **Compute-storage fusion + reconfigurable compute array**: compute efficiency above 99%, significantly reducing DDR access and power consumption — the core innovation distinguishing it from general-purpose GPUs.
- **Self-developed instruction set and quad-core NNP200**: ships with a custom instruction set and programming framework, supporting porting of mainstream CNN algorithms (facial recognition, etc.).
- **Heterogeneous multi-core parallelism**: the CPU is an Alibaba T-Head XuanTie 810 (RISC-V) embedded processor (1.2GHz) + dual-core vision DSP (550MHz), supporting 4K@30fps and parallel real-time analysis of 4 HD video streams.
- **High energy efficiency**: about 2 TOPS/W, better than contemporaneous competitors such as HiSilicon's Hi3559A (about 1.5 TOPS/W).
- **Industrial grade and multiple form factors**: operating temperature of -40℃ ~ 85℃ (industrial grade); deliverable as a module (mini-PCIe) or PCIe card.

## Vendor Information

| Parameter | Value |
|-----------|-------|
| **Company** | Shenzhen Intellifusion Technologies Co., Ltd. (Intellifusion) |
| **Headquarters** | Shenzhen, China |
| **Founded** | 2014 (listed on the STAR Market in 2023) |

## Use Cases

- ✅ **Edge/endpoint vision inference**: smart security, intelligent transportation, industrial inspection
- ✅ Lightweight endpoint devices such as **AI cameras, robots, and drones**
- ✅ **Multi-stream video structuring**: a single chip supports real-time analysis of 4 channels of 1080P video
- ❌ **Large-model training / high-compute data center training** (inference positioning, limited compute)
- ❌ **General-purpose GPU compute ecosystem** (requires porting via the self-developed compilation framework, not CUDA)

## Related Cards

- [TsingMicro TX81](/docs/cards/others/tsingmicro-tx81) — Also on a domestic reconfigurable compute architecture innovation route
- [Vastai VA10](/docs/cards/others/vastai-va10) — Domestic cloud vision inference accelerator card
- [Lightmatter Envise](/docs/cards/others/lightmatter-envise) — International compute-storage (silicon photonics) route comparison

## References

- [Yuntian Chuxin DeepEye1000 - Baidu Baike](https://baike.baidu.com/item/%E4%BA%91%E5%A4%A9%E5%88%9D%E8%8A%AFTMDeepEye1000/24149249)
- [Intellifusion AI chip official product page](https://www.intellif.com/int/chips.html)
- [Intellifusion DeepEye1000 chip details (EEWorld)](https://www.eeworld.com.cn/mcu/eic511349.html)
