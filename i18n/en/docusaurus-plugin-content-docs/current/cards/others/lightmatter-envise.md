---
id: lightmatter-envise
title: Lightmatter Envise (Silicon Photonics AI Inference Chip)
sidebar_label: Lightmatter Envise
description: Lightmatter Envise detailed specs: 3nm, 2 PF FP16, 65W, photonic computing, MIPS processor, photonic interconnect, 8-card 16 PF.
keywords: [Lightmatter, Envise, silicon photonics, optical computing, 2 PF, 65W, 8-card]
---

# Lightmatter Envise (Silicon Photonics AI Inference Chip)

## Product Overview

**Lightmatter Envise** is the world's first **Silicon Photonics AI inference chip**, **2022-11 released**, **2023 mass production**. Based on **3nm process**, integrating **Photonic Compute Cores** + **MIPS RISC-V processors** + **silicon photonic interconnect**. **2 PFLOPS FP16** compute (**65W TDP**), **one of the most power-efficient AI inference chips** (**30 TOPS/W**, 5-10x higher than NVIDIA H100). Paired with an **8-card system at 16 PFLOPS** + **optical interconnect**.

**Revolutionary significance**: first AI chip to replace electronic matrix multiplication with photonics, **speed of light = 0 latency + 0 power consumption** (theoretical), actual 80-90% power savings. Represents a **paradigm shift in AI chip architecture**, known alongside Lightelligence and LightOn as the "Silicon Photonics Big Three".

## Core Specs

| Item | Parameter |
|------|------|
| **Architecture** | Lightmatter Passage Silicon Photonics (opto-electronic hybrid) |
| **Process** | TSMC 3nm |
| **Photonic Cores** | **4 Photonic Tensor Cores (each 4x4 array)** |
| **Digital Cores** | **64x MIPS RISC-V processors** |
| **HBM** | 64GB HBM3 |
| **Memory Bandwidth** | 1.6 TB/s |
| **FP16** | **2 PFLOPS** |
| **FP32** | ~1 PFLOPS |
| **INT8** | 4 POPS |
| **TDP** | **65 W** (**one of the lowest AI inference TDP in industry**) |
| **Efficiency** | **30 TOPS/W** (H100 ~3 TOPS/W, **10x advantage**) |
| **Form Factor** | OAM |
| **Interconnect** | **Lightmatter Passage optical interconnect** (PCIe + fiber) |
| **Mass Production** | 2023 H2 |
| **Unit Price** | ~$5,000-8,000 (estimated) |

## Photonic Computing Principle

| Dimension | Traditional GPU | Lightmatter Envise |
|------|----------|---------------------|
| **Compute Medium** | Electronic (CMOS transistors) | **Photonic (silicon photonic waveguides + modulators)** |
| **Matrix Multiplication** | MAC arrays (transistor switching) | **Mach-Zehnder Interferometer (MZI) mesh** |
| **Signal Propagation** | Copper wire + resistance | **Optical waveguide + all-optical propagation** |
| **Latency** | Nanosecond-level | **0 latency (speed of light)** |
| **Power** | Quadratic law (CV^2) | **Linear (modulator only)** |
| **Frequency** | 1-2 GHz | **>100 GHz (theoretical)** |
| **Thermal Design** | Complex liquid cooling | **Natural air cooling (65W)** |
| **Drawback** | - | **Not general-purpose, only for matmul** (activation functions still need digital) |

### MZI Matrix Multiplication

```
Input vector (4-dim): [x0, x1, x2, x3] (optical signals)
Weight matrix W (4x4): configured via MZI mesh
Output: y = W x x (optical signal superposition)
ADC: convert to digital (the only electronic step)
```

**Key advantages**:
- Matrix mul **0 power** (light itself)
- Only ADC/DAC consume energy (10% of total compute)
- **Reconfigurable**: MZI mesh is programmable (same hardware for different matrices)

## MIPS RISC-V Processors

| Dimension | Spec |
|------|------|
| **Architecture** | **MIPS RISC-V compatible** (64-bit) |
| **Core Count** | **64 cores** (multi-threaded) |
| **Frequency** | 2 GHz |
| **Cache** | L1 32KB + L2 1MB per core |
| **Role** | Scheduling + activation functions + preprocessing |
| **Rationale** | MIPS lower power than ARM Cortex-A78 (4x cores, more power efficient) |

> **Why MIPS RISC-V**: Silicon photonic cores only handle matmul, **non-matrix ops (softmax, layernorm, attention)** still require digital processors. MIPS vs ARM **same perf, 30% power savings**.

## 8-Card System 16 PFLOPS

| Item | Configuration |
|------|------|
| **Envise Cards** | 8 |
| **Total Compute** | **16 PFLOPS FP16** |
| **Total HBM** | 512GB |
| **Optical Interconnect BW** | **1.6 TB/s intra-domain** (Passage) |
| **Rack TDP** | ~520 W (8 cards only)|
| **Rack Form Factor** | 1U / 2U server |
| **Price** | ~$50-70K (8-card system)|

**vs NVIDIA H100 8-card**:
- Compute 16 PF vs 32 PF (H100 FP8 dense 2 PF x 8)
- Power 520W vs 5600W (H100 700W x 8) -- **Envise 10x advantage**
- Efficiency 30 TOPS/W vs 3 TOPS/W -- **10x advantage**
- **Latency** 50% lower (optical interconnect)

## Vendor Information

| Item | Content |
|------|------|
| **Company** | Lightmatter, Inc. |
| **Founder** | Nicholas Harris (MIT PhD) |
| **Founded** | 2017 |
| **Headquarters** | Boston, Massachusetts, USA |
| **Funding** | **$420M+** (Series D 2023-Q2 led by: USIT + Google Ventures) |
| **Valuation (2025)** | ~$1.2B (unicorn)|
| **2025 Revenue** | ~$30M (early commercialization)|
| **Customers** | Google internal testing, Meta, Anthropic, government HPC |
| **CEO** | Nicholas Harris |
| **CTO** | Darius Bunandar |
| **Fab** | TSMC 3nm + AIM Photonics (silicon photonics process)|
| **Patents** | 200+ silicon photonics AI patents |

## Lightmatter Product Line

| Product | Positioning | Compute | Released |
|------|------|------|------|
| **Envise** | AI inference chip | 2 PF FP16 | 2022-11 |
| **Passage M1000** | optical interconnect chip (PCIe Gen5 fiber)| 1.6 TB/s intra-domain | 2022-11 |
| **Idiom** | software stack (PyTorch / TensorFlow compatible)| - | continuously updated |
| **Envise X** (estimated) | 2nd-gen silicon photonics, 5 PF FP16 | 5 PF | 2026 H2 estimated |

## Software Stack Idiom

| Layer | Tool | Description |
|------|------|------|
| **AI framework** | **Idiom** | PyTorch 1:1 compatible (auto-maps matmul to photonics)|
| | TensorFlow (experimental)| compatible |
| **Compiler** | **Lightflow Compiler** | matrix ops -> silicon photonics config + MIPS code |
| **Runtime** | Idiom Runtime | photonic + digital core co-scheduling |
| **Model Zoo** | ModelZoo | LLaMA / Mistral / Qwen / SDXL |

> Warning: **Ecosystem limitation**: Silicon photonics only handles matmul, **softmax / attention / layernorm etc handled by MIPS**. Models must go through Idiom compiler optimization. **PyTorch models run directly at 50-70% lower performance**, requiring manual `lightmatter.optimize(model)`.

## Use Cases

- ✅ **Low-power AI inference** (data center PUE optimized)
- ✅ **Edge AI** (65W air-cooled, no liquid cooling needed)
- ✅ **Green AI** (carbon-neutral target enterprises)
- ✅ **LLM inference** (2 PF FP16 fits 70B FP16 + KV Cache)
- ✅ **Government/research HPC** (US DOE, NSA interest)
- ❌ **AI training** (Envise inference only, training needs GPU)
- ❌ **CUDA proprietary workloads** (requires Idiom porting)
- ❌ **Non-matmul tasks** (e.g., RNN weak performance)

## Lightmatter vs NVIDIA H100

| Metric | Lightmatter Envise | NVIDIA H100 |
|------|--------------------|--------------|
| **Compute FP16** | 2 PF | 2 PF FP8 sparse |
| **TDP** | **65W** | 700W |
| **Efficiency** | **30 TOPS/W** | 3 TOPS/W |
| **Memory** | 64GB HBM3 | 80GB HBM3 |
| **Latency** | **0 latency matmul** | nanosecond-level |
| **Training Support** | No | Yes |
| **Ecosystem** | Idiom (new) | CUDA (mature) |
| **Production Maturity** | early mass production | fully mature |
| **Price** | ~$5-8K | ~$25-30K |

> **Envise killer feature**: **TDP 65W vs H100 700W = 10x efficiency advantage**, **deployment cost (rack density + cooling) far below H100**. It is **one of the best HW solutions for hyperscale AI inference**.

## Silicon Photonics AI Big Three

| Company | Codename | Compute | TDP | Mass Production |
|------|------|------|-----|------|
| **Lightmatter** | Envise | 2 PF | 65W | 2023 H2 |
| **Lightelligence** | Tianjic | 1.6 PF | ~100W | 2022 pilot |
| **LightOn** | Alfred | 1.2 PF | 80W | 2023 experimental |

## Key Features

- **Silicon Photonics Computing**: first commercial photonic AI inference chip
- **30 TOPS/W**: H100 10x efficiency advantage
- **65W TDP**: air-cooled deployment, no liquid cooling
- **MIPS RISC-V**: 64-core digital processor for non-matrix ops
- **Optical Interconnect**: Passage 1.6 TB/s intra-domain
- **Drawbacks**: inference only, no training support, new ecosystem

## Related Products

- [Cerebras WSE-3](/docs/cards/cerebras/wse-3) - Wafer-scale comparison
- [Groq LPU v2](/docs/cards/others/groq-lpu-v2) - LPU comparison
- [Groq LPU v1](/docs/cards/others/groq-lpu) - Groq 1st gen
- [Groq 3 LPX (post-NVIDIA acquisition)](/docs/cards/nvidia/groq-3-lpx) - Groq 3rd gen
- [NVIDIA H100](/docs/cards/nvidia/h100) - traditional GPU comparison
- [Apple M4 Max](/docs/cards/others/apple-m4-max) - consumer comparison
- [Tenstorrent](/docs/cards/others/tenstorrent) - RISC-V AI
