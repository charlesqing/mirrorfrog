---
id: lightelligence
title: Lightelligence Tianjic (Silicon Photonics AI Accelerator)
sidebar_label: Lightelligence
description: "Lightelligence Tianjic detailed specs: 7nm, 1.6 PF FP16, 100W, photonic matrix compute, Chinese Academy of Sciences + Tsinghua incubation, photonics Big Three."
keywords: [Lightelligence, Tianjic, silicon photonics, optical AI, 1.6 PF, Chinese Academy of Sciences, photonics Big Three]
---

# Lightelligence Tianjic (Silicon Photonics AI Accelerator)

## Product Overview

**Lightelligence** is China's leading **silicon photonics AI chip** company, **founded 2017**, incubated by **Tsinghua University + Chinese Academy of Sciences Shanghai Institute of Optics and Fine Mechanics**, headquartered in Shanghai. **Tianjic** is its first commercial silicon photonics AI accelerator, **2022 released**, **7nm process**, **1.6 PFLOPS FP16** compute, **~100W TDP**. It is **China's competitor to Lightmatter Envise**, known alongside Lightmatter and LightOn as the "**Silicon Photonics Big Three**".

**Strategic significance**: Under US technology export controls on Lightmatter, **Lightelligence is China's only commercial silicon photonics AI company**, undertaking **National 863 Major Project** and **National Natural Science Foundation key projects**, with primary customers being **Chinese supercomputing centers, government HPC, AI for Science projects**.

## Core Specs

| Item | Parameter |
|------|------|
| **Architecture** | Lightelligence Tianjic (Optical Matrix Multiplication) |
| **Process** | TSMC 7nm (photonic + electronic hybrid)|
| **Photonic Cores** | **64 MZIs (Mach-Zehnder Interferometers)** |
| **Digital Cores** | **32x RISC-V processors** (scheduling + activation) |
| **HBM** | 32GB HBM2E |
| **Memory Bandwidth** | 819 GB/s |
| **FP16** | **1.6 PFLOPS** |
| **FP32** | ~0.8 PFLOPS |
| **INT8** | 3.2 POPS |
| **TDP** | **~100 W** |
| **Efficiency** | **16 TOPS/W** (H100 ~3 TOPS/W, **5x advantage**) |
| **Form Factor** | PCIe Gen4 x16 |
| **Interconnect** | proprietary optical interconnect (PCIe + fiber)|
| **Mass Production** | 2023 H2 |
| **Unit Price** | ~$3,500-5,500 |

## Photonic Computing Principle

| Dimension | Traditional GPU | Lightelligence Tianjic |
|------|----------|------------------------|
| **Compute Medium** | Electronic (CMOS transistors) | **Photonic (silicon photonic waveguides + MZI)** |
| **Matrix Multiplication** | MAC arrays | **MZI mesh (optical propagation matmul)** |
| **Signal Propagation** | Copper wire + resistance | **Optical waveguide (zero resistance)** |
| **Power Source** | CV^2 (transistor switching) | **MZI modulators only** |
| **Thermal Design** | Complex liquid cooling | **Natural air cooling (100W)** |
| **Frequency** | 1-2 GHz | **>40 GHz (theoretical)** |
| **Precision** | FP64/FP32/FP16/INT8 | **FP16/INT8 primarily** |
| **Drawback** | - | **Non-matrix ops still need electronics, model limited** |

### MZI Matrix Multiplication Principle

```
Input vector (8-dim): [x0, x1, x2, x3, x4, x5, x6, x7] (optical signals)
Weight matrix W (8x8): configured into 64 MZIs
Output: y = W x x (optical signal superposition)
ADC: convert to digital (only 1 electronic step)
```

**Key advantages**:
- **64 MZIs compute simultaneously** (1 cycle = 8x8 = 64 multiply-adds)
- **Speed of light = zero wait** (vs GPU HBM-limited)
- **Efficiency 16 TOPS/W** (GPU 5-10x advantage)

## 32 RISC-V Processors

| Dimension | Spec |
|------|------|
| **Architecture** | **RISC-V 64-bit** (custom SiFive cores) |
| **Core Count** | 32 |
| **Frequency** | 1.5 GHz |
| **Cache** | L1 32KB + L2 512KB per core |
| **Role** | Scheduling + activation functions + non-matrix ops |
| **Domestic** | 100% RISC-V (vs ARM proprietary) |

> **Why RISC-V**: Compared to ARM Cortex-A78, **RISC-V saves 20% power at same performance**, and is **fully independent and controllable** (meets China's Xinchuang requirements).

## Vendor Information

| Item | Content |
|------|------|
| **Company** | Lightelligence |
| **Founder** | Shen Zhihua (Chinese Academy of Sciences Shanghai Institute of Optics + Tsinghua) |
| **Founded** | 2017 |
| **Headquarters** | Jiading District, Shanghai |
| **Funding** | **$280M+** (Series C 2022 led by: Northern Light Venture Capital) |
| **Valuation (2025)** | ~¥15B |
| **2024 Revenue** | ~¥0.8B (early commercialization)|
| **Employees** | ~500 |
| **National Projects** | National 863 Major Project, National Natural Science Foundation key |
| **Fab** | TSMC 7nm + proprietary silicon photonics process (CAS Institute of Microelectronics)|
| **Patents** | 150+ silicon photonics AI patents |
| **Customers** | Chinese supercomputing centers (Wuxi, Changsha, Shenzhen), government HPC, AI for Science |

## Silicon Photonics Big Three

| Company | Country | Product | Compute | TDP | Mass Production |
|------|------|------|------|-----|------|
| **Lightmatter** | US | **Envise** | 2 PF | 65W | 2023 H2 |
| **Lightelligence** | China | **Tianjic** | 1.6 PF | 100W | 2023 H2 |
| **LightOn** | France | **Alfred** | 1.2 PF | 80W | 2023 experimental |

> **Lightelligence advantage**: **only commercial silicon photonics AI in China** (Lightmatter under US export controls), **key national policy support**.

## Use Cases

- ✅ **AI for Science** (protein structure, climate, materials simulation)
- ✅ **Supercomputing centers** (China Wuxi, Changsha, Shenzhen supercomputers)
- ✅ **Government HPC** (national security, AI inversion)
- ✅ **Low-power AI inference** (100W air-cooled deployment)
- ✅ **Domestic projects** (RISC-V + silicon photonics)
- ❌ AI training (inference only)
- ❌ International market (export controls)
- ❌ Non-matmul tasks (RNN weak performance)

## Key Features

- **Silicon Photonics Computing**: China's only commercial photonic AI chip
- **16 TOPS/W**: H100 5x efficiency advantage
- **RISC-V 32-core**: fully independent and controllable
- **100W TDP**: air-cooled deployment
- **National policy support**: 863 Major Project
- **Drawbacks**: ecosystem only 1 year, 1 year behind Lightmatter

## Related Products

- [Lightmatter Envise](/docs/cards/others/lightmatter-envise) - US competitor
- [Cambricon MLU 590](/docs/cards/others/cambricon-mlu) - Chinese AI
- [Huawei Ascend 910C](/docs/cards/huawei/ascend-910c) - strongest Chinese chip
- [Moore Threads MTT S5000](/docs/cards/others/moore-threads-mtt-s5000) - Chinese GPU
- [Tenstorrent](/docs/cards/others/tenstorrent) - RISC-V AI
- [NVIDIA H100](/docs/cards/nvidia/h100) - traditional GPU comparison
