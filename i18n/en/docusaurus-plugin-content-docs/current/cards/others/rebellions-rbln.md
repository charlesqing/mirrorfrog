---
id: rebellions-rbln
title: Rebellions RBLN / ATOM (South Korea AI Inference, 2024)
sidebar_label: Rebellions
description: "Rebellions RBLN / ATOM detailed specs: 5nm, 16 INT8 TOPS, 15-30W, RDU architecture, KT deployment, South Korea AI duo."
keywords: [Rebellions, RBLN, ATOM, South Korea AI, RDU, 5nm, edge AI, KT deployment]
---

# Rebellions RBLN / ATOM (South Korea AI Inference, 2024)

## Product Overview

**Rebellions** is a South Korean AI inference chip company, **founded 2020**, Seoul. **RBLN** (Rebellions Neural Processing Unit) is its data center AI inference chip, **2024-Q2 released**, **TSMC 5nm**, **16 INT8 TOPS** (estimated), **15-30W TDP**. Paired with **RDU (Reconfigurable Dataflow Unit)** heterogeneous dataflow architecture + **SDK** compatible with PyTorch / ONNX.

**Strategic significance**: Rebellions is **one of South Korea's AI Startup Duo** (alongside FuriosaAI), **first customers: KT (Korea Telecom), SK Group, Samsung, Naver**. **ATOM** is the 2025 next-gen chip (**128GB HBM, 400 TFLOPS**), **competing with NVIDIA H100 / L4**.

## Core Specs (RBLN Current)

| Item | Parameter |
|------|------|
| **Architecture** | Rebellions RDU (Reconfigurable Dataflow) |
| **Process** | **TSMC 5nm** |
| **RDU Core Count** | **8x RDU cores** (32 MB SRAM per core) |
| **On-chip SRAM** | **256MB** |
| **LPDDR5X** | 16GB |
| **Memory Bandwidth** | **102 GB/s** |
| **INT8** | **16 TOPS** |
| **BF16** | 8 TFLOPS |
| **TDP** | **15-30W** (**air-cooled, Edge-friendly**) |
| **Form Factor** | M.2 / PCIe Gen4 / OAM |
| **Interconnect** | PCIe Gen4 |
| **Mass Production** | 2024-Q2 |
| **Unit Price** | ~$500-1500 |

## ATOM Next-Gen (2025 Est.)

| Item | Parameter |
|------|------|
| **Architecture** | Rebellions RDU 2.0 |
| **Process** | TSMC 5nm |
| **RDU Core Count** | 32x RDU cores |
| **HBM** | **128GB HBM3** |
| **Memory Bandwidth** | **~3 TB/s** |
| **BF16** | **400 TFLOPS** (**competing with H100 inference**) |
| **INT8** | 800 TOPS |
| **TDP** | **~250W** |
| **Mass Production** | **2025-Q3** (estimated) |

## RDU Architecture

| Dimension | Traditional GPU | Rebellions RDU |
|------|----------|-----------------|
| **Execution Model** | Imperative | **Dataflow (Reconfigurable)** |
| **Parallelism** | Thread-level | **Operator-level (dataflow)** |
| **On-chip Memory** | Shared L2 + registers | **Large distributed SRAM (32MB per core)** |
| **Dataflow** | Cache lines | **Graph streaming** (reconfigurable) |
| **Power** | 70-700W | **15-30W** (Edge-friendly) |
| **Target** | data center | **edge + data center** |
| **Reconfigurable** | CUDA programs | **dataflow graph reconfiguration** |

### RDU Core

```
Single RDU Core:
- 32 MB SRAM
- 256 8-bit MACs
- Dataflow scheduler
- Scalar + vector + tensor units

RBLN 8-core:
- 8 x 32 MB = 256 MB SRAM
- 8 x 256 MAC = 2048 MACs
- Dataflow interconnect
```

## South Korea AI Startup Duo

| Dimension | Rebellions RBLN / ATOM | FuriosaAI RNGD |
|------|--------------------------|------------------|
| **Target Market** | **edge + data center** | **data center inference** |
| **Architecture** | RDU (Reconfigurable Dataflow) | TCP (Tensor Contraction) |
| **Process** | 5nm | 5nm |
| **RBLN Compute** | 16 INT8 TOPS | - |
| **ATOM Compute** | 400 BF16 TF (est.) | 512 BF16 TF |
| **ATOM Memory** | 128GB HBM3 | 512GB HBM3 |
| **TDP** | 15-30W (RBLN) / 250W (ATOM) | 450W |
| **Deployment** | KT edge + cloud | KT / SK / G42 data center |
| **Funding** | $200M+ | $300M+ |
| **Valuation** | $1B+ | $1.5B+ |
| **IPO** | 2026 | 2026-2027 |

## Vendor Information

| Item | Content |
|------|------|
| **Company** | Rebellions Inc. |
| **Co-Founder** | **Sungkyung Kim** (CEO, former Samsung semiconductor)|
| **Co-Founder** | **Woosung Kim** (CTO)|
| **Founded** | 2020 |
| **Headquarters** | Seoul, South Korea + Silicon Valley, USA |
| **Funding** | **$200M+** (Series B 2024-Q2 led by: KT + Korea Development Bank)|
| **Valuation (2025)** | **$1B+** (unicorn)|
| **2024 Revenue** | ~$25M |
| **Employees** | ~150 |
| **Fab** | TSMC 5nm |
| **Key Customers** | **KT (Korea Telecom)**, **SK Group**, **Samsung SDS**, **Naver HyperCLOVA X**, **Korea Investment & Securities** |
| **Government Support** | South Korea National AI Semiconductor Strategy, K-Cloud project |
| **Status** | preparing 2026 IPO |

## Use Cases

- ✅ **Edge AI inference** (15-30W air-cooled)
- ✅ **South Korea sovereign AI** (KT / SK / Naver customers)
- ✅ **LLM inference** (ATOM 128GB HBM fits 70B)
- ✅ **Data center inference** (ATOM 250W energy-efficient)
- ✅ **Multimodal AI** (image + text)
- ❌ **AI training** (inference only)
- ❌ **CUDA proprietary workloads** (requires SDK porting)
- ❌ **International market** (Korea / Asia primary)

## Key Features

- **RDU dataflow architecture**: reconfigurable + Edge-friendly
- **15-30W TDP**: one of the lowest data center inference TDP in industry
- **ATOM 128GB HBM**: 2025 competing with H100
- **South Korea national AI**: KT / SK / Naver customer base
- **Drawbacks**: compute below H100 (2x), 2-year SDK ecosystem

## Rebellions Product Line

| Product | Released | Compute | TDP | Target |
|------|------|------|-----|------|
| **ISM** (1st gen) | 2022 | 8 INT8 TOPS | 10W | Edge early |
| **RBLN** (2nd gen) | **2024-Q2** | **16 INT8 TOPS** | **15-30W** | **Edge + data center** |
| **ATOM** (3rd gen) | **2025-Q3 est.** | **400 BF16 TF** | **250W** | **data center** |
| ATOM Pro (est.) | 2026 | 800 BF16 TF | 400W | high-end data center |

## Rebellions vs NVIDIA L4 vs FuriosaAI

| Metric | Rebellions RBLN | NVIDIA L4 | FuriosaAI RNGD |
|------|-------------------|-----------|------------------|
| **INT8** | 16 TOPS | 485 TOPS | 1000 TOPS |
| **TDP** | **15-30W** | 72W | 450W |
| **Efficiency** | 0.5-1 TOPS/W | 6.7 TOPS/W | 2.2 TOPS/W |
| **Memory** | 16GB LPDDR5X | 24GB GDDR6 | 512GB HBM3 |
| **Price** | ~$1K | ~$2.5K | ~$22K |
| **Target** | Edge / Inference | data center inference | large model inference |

> **Rebellions RBLN advantage**: **15-30W TDP** (L4 40% energy savings) + **low price** (L4 40% price).
> **L4 advantage**: **485 TOPS** (RBLN 30x compute) + **CUDA ecosystem**.
> **RNGD advantage**: **512GB HBM3** (RBLN 32x memory).

## Related Products

- [FuriosaAI RNGD](/docs/cards/others/furiosaai-rngd) - South Korea duo
- [Groq LPU v2](/docs/cards/others/groq-lpu-v2) - LPU inference
- [SambaNova SN40L](/docs/cards/others/sambanova-sn40l) - Dataflow
- [Blaize Xplorer X1600](/docs/cards/others/blaize-xplorer) - Edge AI
- [Hailo-8 / Hailo-15](/docs/cards/others/hailo) - Edge AI
- [Qualcomm AI 100](/docs/cards/others/qualcomm-ai100) - Edge AI
- [NVIDIA L4](/docs/cards/nvidia/l4) - edge inference
- [Cambricon MLU 590](/docs/cards/others/cambricon-mlu) - Chinese comparison
