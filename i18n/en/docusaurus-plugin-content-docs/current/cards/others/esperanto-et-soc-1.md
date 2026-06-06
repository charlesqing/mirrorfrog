---
id: esperanto-et-soc-1
title: Esperanto ET-SoC-1 (RISC-V Heterogeneous AI)
sidebar_label: Esperanto
description: "Esperanto ET-SoC-1 detailed specs: 7nm, 1300+ RISC-V cores, INT8 inference, low-power, ET-Minion + ET-Maxion heterogeneous architecture."
keywords: [Esperanto, ET-SoC-1, RISC-V AI, heterogeneous AI, ET-Minion, ET-Maxion, 1300 cores]
---

# Esperanto ET-SoC-1 (RISC-V Heterogeneous AI)

## Product Overview

**Esperanto Technologies** is a US RISC-V AI chip company, **founded 2014** (by RISC-V founding fathers **Darryl Gove** + **Dave Patterson** and others), headquartered in Mountain View, California. **ET-SoC-1** is its first RISC-V heterogeneous AI inference chip, **2022-Q3 released**, **TSMC 7nm**, **1,300+ RISC-V cores** (**one of the largest RISC-V chips in industry**), **42 TFLOPS INT8** inference, **~75W TDP**. It is the **RISC-V camp's representative in AI inference**.

**Core architecture**:
- **ET-Minion**: 4096-bit vector RISC-V cores (1000+, handles ML operators)
- **ET-Maxion**: superscalar RISC-V cores (8, handles control + scalar)

## Core Specs

| Item | Parameter |
|------|------|
| **Architecture** | Esperanto ET-SoC-1 (heterogeneous RISC-V) |
| **Process** | TSMC 7nm |
| **Total Cores** | **1,332 RISC-V cores** |
| **ET-Minion** | **1,324 cores** (vectorized AI cores, 4096-bit SIMD) |
| **ET-Maxion** | **8 cores** (superscalar scalar cores, Rocket RISC-V) |
| **L2 Cache** | shared 256MB |
| **HBM** | 16GB HBM2E (optional 4GB HBM2E) |
| **Memory Bandwidth** | 410 GB/s |
| **INT8** | **42 TOPS** |
| **FP16** | 21 TFLOPS |
| **FP32** | 10.5 TFLOPS |
| **TDP** | **~75 W** |
| **Form Factor** | PCIe Gen4 x16 |
| **Interconnect** | proprietary interconnect (PCIe + Ethernet) |
| **Mass Production** | 2023-Q2 |
| **Unit Price** | ~$1,500-3,000 |

## Heterogeneous RISC-V Architecture

| Dimension | ET-Minion | ET-Maxion |
|------|-----------|-----------|
| **Type** | vectorized AI cores | superscalar scalar cores |
| **Count** | 1,324 | 8 |
| **Vector Width** | 4096-bit SIMD | - |
| **Frequency** | 1.5 GHz | 2 GHz |
| **Best For** | matmul + activation functions | scheduling + control + scalar |
| **NVIDIA Analog** | Tensor Core | CUDA core |
| **ARM Analog** | NEON (analogy) | Cortex-A |

### 1,324 ET-Minion Cores

```
Single core: 4096-bit x 1.5 GHz x 2 (MAC) = 12.3 GOPS INT8
1324 cores: 12.3 x 1324 = 16.3 TOPS INT8 (single card)
With sparsity + efficient encoding: 42 TOPS INT8 nominal
```

**Advantages**:
- **Fully RISC-V ISA** (no proprietary instruction extensions)
- **Portable**: all ET-Minion cores run **standard RISC-V V extension**
- **Debuggable**: GDB debug all cores (vs GPU black box)

## 75W TDP Air-Cooled

| Metric | Esperanto ET-SoC-1 | NVIDIA L4 | NVIDIA H100 |
|------|---------------------|-----------|-------------|
| **INT8** | 42 TOPS | 485 TOPS | 1,513 TOPS |
| **TDP** | 75W | 72W | 700W |
| **Efficiency** | **0.56 TOPS/W** | 6.7 TOPS/W | 2.16 TOPS/W |
| **Price** | ~$2K | ~$2.5K | ~$25-30K |
| **Software** | RISC-V toolchain | CUDA | CUDA |

> **Esperanto advantage**: **very low price ($2K)** + **RISC-V open**, but **compute and efficiency both behind L4** (one generation behind NVIDIA).

## Software Stack

| Layer | Tool | Description |
|------|------|------|
| **AI framework** | PyTorch (via TVM)| auto-compile to ET-Minion |
| | TensorFlow (via TVM)| compatible |
| | **ET-SDK** | proprietary SDK (C/C++) |
| **Compiler** | **TVM** + **MLC-LLM** | auto operator mapping |
| **Runtime** | ET-Runtime | 1,324 core scheduling |
| **Optimization** | **ET-Quant** | INT8 quantization |
| **Debugging** | GDB + standard RISC-V toolchain | fully open |

> Warning: **Ecosystem limitation**: vs CUDA 18-year ecosystem, Esperanto only 3-4 years, **operator coverage ~50-60%**. **LLM inference requires manual optimization or MLC-LLM compilation**.

## Vendor Information

| Item | Content |
|------|------|
| **Company** | Esperanto Technologies |
| **Founder** | **Darryl Gove** (former ARM Chief Architect)|
| | **Dave Patterson** (RISC-V founding father, UC Berkeley Professor, Turing Award winner)|
| | **Jeff Bonde** (RISC-V veteran engineer)|
| **Founded** | 2014 |
| **Headquarters** | Mountain View, California, USA |
| **Funding** | **$280M+** (Series B 2022-Q1 led by: Fidelity)|
| **Valuation (2025)** | ~$1B (unicorn borderline)|
| **2024 Revenue** | ~$15M (early stage)|
| **Employees** | ~150 |
| **Fab** | TSMC 7nm |
| **Customers** | US National Labs (HPC), Rivos servers, RISC-V software ecosystem |
| **Strategic Partner** | **Rivos** (RISC-V server chips, adopting ET-SoC-1 IP)|

## Use Cases

- ✅ **RISC-V software ecosystem building** (ET-SoC-1 is RISC-V's first real AI deployment)
- ✅ **Government / National Lab HPC** (US DOE, national security)
- ✅ **Low-power AI inference** (75W air-cooled)
- ✅ **Domestic substitution** (RISC-V no ARM/CUDA lock-in)
- ✅ **Academic research** (debuggable RISC-V cores)
- ❌ **Production LLM inference** (compute insufficient)
- ❌ **CUDA proprietary workloads**
- ❌ **AI training** (inference only)

## Key Features

- **1,332 RISC-V cores**: largest RISC-V chip in industry
- **Fully open ISA**: standard RISC-V V extension (no proprietary instructions)
- **Debuggable**: GDB debug all cores
- **Low power**: 75W TDP air-cooled
- **Low price**: ~$2K (vs H100 $25K)
- **Drawbacks**: low compute (42 TOPS INT8 far below L4 485 TOPS), weak ecosystem

## Heterogeneous RISC-V Camp

| Company | Product | RISC-V Cores | Compute INT8 | Status |
|------|------|-----------|-----------|------|
| **Esperanto** | **ET-SoC-1** | **1,332** | **42 TOPS** | 2023 mass production |
| Tenstorrent | Wormhole | 80 Tensix cores (RISC-V control)| 320 TOPS | 2023 mass production |
| Rivos | Server SoC | ET-SoC-1 IP | - | 2026 expected |
| SiPearl | Rhea | 72-core RISC-V | 80 TOPS | 2025 expected |

## RISC-V AI Strategic Significance

- **Founded by RISC-V founding father**: Dave Patterson (Turing Award laureate, RISC-V originator)
- **First truly commercial RISC-V AI chip**
- **Rivos server partnership**: ET-SoC-1 IP integrated into Rivos server SoC
- **Fully open ISA**: no ARM / CUDA proprietary lock-in
- **China Xinchuang compatible**: RISC-V is the only choice for China's Xinchuang CPU

## Related Products

- [Tenstorrent](/docs/cards/others/tenstorrent) - RISC-V heterogeneous
- [Lightelligence Tianjic](/docs/cards/others/lightelligence) - RISC-V photonics
- [Cambricon MLU 590](/docs/cards/others/cambricon-mlu) - Chinese RISC-V compatible
- [Moore Threads MTT S5000](/docs/cards/others/moore-threads-mtt-s5000) - Chinese GPU
- [Biren BR104](/docs/cards/others/biren-br104) - Chinese AI
- [NVIDIA L4](/docs/cards/nvidia/l4) - edge AI comparison
- [Apple M4 Max](/docs/cards/others/apple-m4-max) - workstation comparison
- [Qualcomm AI 100](/docs/cards/others/qualcomm-ai100) - edge AI comparison
