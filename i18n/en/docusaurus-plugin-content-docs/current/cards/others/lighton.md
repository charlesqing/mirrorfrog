---
id: lighton
title: LightOn (France Silicon Photonics AI Inference)
sidebar_label: LightOn
description: LightOn detailed specs: silicon photonics AI inference, 1.2 PF FP16, 80W, Alfred platform, one of Europe's photonics Big Three.
keywords: [LightOn, Alfred, silicon photonics, France AI, photonic computing, 1.2 PF, EU AI]
---

# LightOn (France Silicon Photonics AI Inference)

## Product Overview

**LightOn** is a French **silicon photonics AI inference chip** company, **founded 2016**, headquartered in Paris, originating from **French National Center for Scientific Research (CNRS) + Ecole Polytechnique**. **Alfred** is its flagship photonics inference platform, **2022 released**, **1.2 PFLOPS FP16** compute, **~80W TDP**, **one of the most power-efficient AI inference chips**. Known as one of the "**Silicon Photonics Big Three**" alongside **Lightmatter (US)** and **Lightelligence (China)**.

**Strategic significance**: LightOn is the **strategic choice for European AI compute** (France/Germany/EU GDPR + AI Act compliance), with **Microsoft Azure France data center** + **OVHcloud European Cloud** already integrating LightOn inference API.

## Core Specs

| Item | Parameter |
|------|------|
| **Architecture** | LightOn Alfred (Optical Processing Unit) |
| **Process** | Hybrid: silicon photonics + standard CMOS controller |
| **Photonic Cores** | **32 MZI meshes** (each 4x4) |
| **Digital Cores** | **24x ARM Cortex-A78** (scheduling + activation) |
| **HBM** | 32GB HBM2E (digital portion) |
| **Memory Bandwidth** | 819 GB/s |
| **FP16** | **1.2 PFLOPS** |
| **FP32** | ~0.6 PFLOPS |
| **INT8** | 2.4 POPS |
| **TDP** | **~80 W** |
| **Efficiency** | **15 TOPS/W** |
| **Form Factor** | PCIe Gen4 x16 |
| **Interconnect** | LightOn Photonic Link |
| **Mass Production** | 2023-H1 |
| **Unit Price** | ~$3,000-5,000 |

## Silicon Photonics Big Three Comparison

| Dimension | LightOn Alfred (France) | Lightmatter Envise (US) | Lightelligence Tianjic (China) |
|------|------------------------|----------------------------|--------------------------------|
| **Compute FP16** | 1.2 PF | **2 PF** | 1.6 PF |
| **TDP** | 80W | **65W** | 100W |
| **Efficiency** | 15 TOPS/W | **30 TOPS/W** | 16 TOPS/W |
| **Mass Production** | 2023-H1 | **2023-H2** | 2023-H2 |
| **Country** | France | US | China |
| **Ecosystem** | LightOn Appliance | Idiom | Tianjic Stack |
| **Customers** | Azure France, OVHcloud | Google internal, Meta | Chinese supercomputing centers |
| **Price** | ~$4K | ~$6K | ~$4K |

> **LightOn advantage**: **Europe's only commercial silicon photonics** (GDPR + AI Act compliant), **Microsoft + OVHcloud integration**. **A key focus of France's national AI strategy**.

## LightOn Appliance Platform

| Item | Spec |
|------|------|
| **Form Factor** | 1U / 2U rack server |
| **Alfred Cards** | 4 / 8 |
| **Total Compute** | 4.8 PF / 9.6 PF FP16 |
| **Total HBM** | 128GB / 256GB |
| **Optical Interconnect** | 1.6 TB/s intra-domain |
| **Rack TDP** | 320W / 640W |
| **Price** | ~$20K / $40K |

**LightOn Cloud Services**:
- **LightOn Cloud API** (OpenAI compatible)
- **OVHcloud AI Endpoint** (European cloud)
- **Microsoft Azure France region** (2024-Q4 integrated)

## Software Stack LightOn Appliance

| Layer | Tool | Description |
|------|------|------|
| **AI framework** | **LightOn Appliance** | PyTorch / TensorFlow compatible |
| | **LightOn-Oumi** | open-source inference optimization |
| **Compiler** | **Photon Compiler** | operators -> MZI config + ARM code |
| **Runtime** | LightOn Runtime | multi-card scheduling |
| **API** | **LightOn API** | OpenAI compatible (chat + completions) |
| **Model Zoo** | ModelZoo | Mistral / LLaMA / Qwen / SDXL |

> **LightOn ecosystem advantage**: **open-source Oumi library** (GitHub 3K+ stars), **GDPR-friendly for Europe**, **Microsoft Azure integration**.

## Vendor Information

| Item | Content |
|------|------|
| **Company** | LightOn SAS |
| **Founder** | **Igor Carron** (CEO, former CNRS researcher)|
| **Founded** | 2016 |
| **Headquarters** | Paris, France |
| **Funding** | **$50M+** (Series A 2022 led by: BNP Paribas + European Innovation Council)|
| **Valuation (2025)** | ~$200M |
| **2024 Revenue** | ~$8M (early commercialization)|
| **Employees** | ~80 |
| **Fab** | **STMicroelectronics** (European fab) + CEA-Leti (silicon photonics process)|
| **Customers** | **Microsoft Azure France**, **OVHcloud European Cloud**, French National Research Center |
| **National Projects** | **France AI National Strategy**, **EU Horizon Europe**, **EuroHPC** |
| **Patents** | 80+ silicon photonics AI patents |

## France / European AI Strategic Significance

- **France AI National Strategy**: Macron 2018 AI strategy, LightOn is **France's AI compute representative**
- **EU AI Act compliance**: European AI regulation, **data + compute must be localized** (LightOn is Europe's only option)
- **EuroHPC project**: European supercomputing, LightOn is a candidate
- **GDPR data protection**: European data cannot leave for US/China cloud (LightOn is GDPR-native)
- **Microsoft Azure France region**: Microsoft + LightOn partnership
- **OVHcloud European Cloud**: France's largest cloud provider integration

## Use Cases

- ✅ **European AI inference** (GDPR + AI Act compliant)
- ✅ **Low-power AI inference** (80W air-cooled)
- ✅ **France / European government AI** (sovereign AI)
- ✅ **Microsoft Azure France** integration
- ✅ **Enterprise LLM inference** (Mistral 7B/8x7B optimized)
- ❌ AI training (inference only)
- ❌ US/China market (geographic compliance)
- ❌ CUDA proprietary workloads

## LightOn Product Line

| Product | Released | Compute FP16 | TDP | Target |
|------|------|-----------|-----|------|
| **Alfred 1** | 2022 | 1.2 PF | 80W | **Cloud inference** |
| Alfred 2 (est.) | 2025 H2 | 2.5 PF | 120W | high-end inference |
| Alfred Mini | 2023 | 200 TF | 25W | edge inference |
| Photon Link (est.) | 2026 | - | - | optical interconnect IP |

## Key Features

- **Silicon Photonics Computing**: Europe's only commercial photonic AI
- **15 TOPS/W**: H100 7x efficiency
- **80W TDP**: air-cooled deployment
- **GDPR / AI Act compliant**: European sovereign AI
- **Microsoft Azure integration**: France region
- **Open-source Oumi library**: open ecosystem
- **Drawbacks**: compute 40% below Lightmatter, 3-4 year ecosystem

## France AI Ecosystem

| Company | Domain |
|------|------|
| **LightOn** | **silicon photonics AI inference** |
| **Mistral AI** | open-source LLM (7B, 8x7B, 8x22B)|
| **Hugging Face** | AI model platform (HQ Paris) |
| **Owkin** | medical AI |
| **Aleph Alpha** | German sovereign LLM |

## Related Products

- [Lightmatter Envise](/docs/cards/others/lightmatter-envise) - US photonics
- [Lightelligence Tianjic](/docs/cards/others/lightelligence) - Chinese photonics
- [Groq LPU v2](/docs/cards/others/groq-lpu-v2) - LPU inference
- [Cerebras WSE-3](/docs/cards/cerebras/wse-3) - Wafer-scale
- [Blaize Xplorer X1600](/docs/cards/others/blaize-xplorer) - Edge AI
- [IBM NorthPole](/docs/cards/others/ibm-northpole) - Processing-in-Memory
- [Apple M4 Max](/docs/cards/others/apple-m4-max) - workstation
- [Qualcomm AI 200/300](/docs/cards/others/qualcomm-ai-200) - new entrant
