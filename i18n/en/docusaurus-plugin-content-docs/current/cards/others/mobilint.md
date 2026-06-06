---
id: mobilint
title: Mobilint Regulus (South Korea NPU, 2023)
sidebar_label: Mobilint
description: "Mobilint Regulus detailed specs: 5nm, 32 TOPS INT8, 12W, Edge AI + Data Center, South Korea NPU, competing with H100 inference."
keywords: [Mobilint, Regulus, South Korea NPU, 5nm, 32 TOPS, 12W, Edge AI, South Korea AI chip]
---

# Mobilint Regulus (South Korea NPU, 2023)

## Product Overview

**Mobilint** is a South Korean AI chip company, **founded 2019**, Seoul. **Regulus** is its first commercial AI NPU, **2023-Q2 released**, **TSMC 5nm**, **32 TOPS INT8** compute, **12W TDP** (**one of the most power-efficient NPUs in industry**). Paired with **Mobilint ARIES SDK** + **PyTorch / TensorFlow / ONNX** compatibility.

**Strategic significance**: Mobilint is **one of South Korea's AI Startup Three Swordsmen** (alongside FuriosaAI and Rebellions), **customers: KT (Korea Telecom), SK Group, Samsung SDS, Naver**. **Mass production in 2024**, **targeting NVIDIA L4 inference chip**.

## Core Specs

| Item | Parameter |
|------|------|
| **Architecture** | Mobilint Aries NPU |
| **Process** | **TSMC 5nm** |
| **NPU Core Count** | **8x Aries NPU core** |
| **Per Core** | 4 MB SRAM + 4 TOPS INT8 |
| **On-chip SRAM** | **32MB** |
| **LPDDR5X** | **16GB / 32GB** |
| **Memory Bandwidth** | **204 GB/s** |
| **INT8** | **32 TOPS** |
| **FP16** | 16 TFLOPS |
| **BF16** | 16 TFLOPS |
| **TDP** | **12W** (**one of the lowest data center NPU TDPs in industry**)|
| **Efficiency** | **2.67 TOPS/W** |
| **Form Factor** | M.2 / PCIe Gen4 x4 / OAM |
| **Interconnect** | PCIe Gen4 |
| **Mass Production** | 2023-Q2 |
| **Unit Price** | ~$300-500 |

## Aries NPU Architecture

| Dimension | Mobilint Aries | Traditional GPU |
|------|-----------------|----------|
| **Execution Model** | scalar + vector + matrix | CUDA cores + Tensor cores |
| **Parallelism** | operator-level | thread-level |
| **On-chip Memory** | 4 MB SRAM / core (32 MB total) | shared L2 + registers |
| **Dataflow** | dataflow optimized | cache lines |
| **Power** | **12W** | 70-700W |
| **Target** | **Edge + entry data center** | all scenarios |

### Single Aries NPU Core

```
Single Aries Core:
- 4 MB SRAM (dual-port)
- 4 TOPS INT8 matrix unit
- 32-bit scalar + 256-bit SIMD vector
- 1 GHz clock

Mobilint Regulus:
- 8 x Aries Core = 32 TOPS INT8
- 8 x 4 MB = 32 MB on-chip SRAM
- 1 GHz x 8 = 8 GHz equivalent
```

## South Korea AI Three Swordsmen Comparison

| Dimension | Mobilint Regulus | FuriosaAI RNGD | Rebellions RBLN |
|------|---------------------|------------------|------------------|
| **Compute INT8** | 32 TOPS | 1,000 TOPS | 16 TOPS |
| **TDP** | **12W** | 450W | 15-30W |
| **Efficiency** | **2.67 TOPS/W** | 2.22 TOPS/W | 1 TOPS/W |
| **Memory** | 32GB LPDDR5X | **512GB HBM3** | 16GB LPDDR5X |
| **Price** | **~$400** | ~$22K | ~$1K |
| **Target** | **Edge + entry DC** | **data center inference** | **Edge + DC** |
| **Mass Production** | 2023-Q2 | 2024-Q3 | 2024-Q2 |
| **Customers** | KT / Samsung / Naver | KT / SK / G42 | KT / SK / Samsung |

> **Mobilint positioning**: **Edge + entry data center** (vs FuriosaAI high-end DC vs Rebellions all scenarios). **TDP 12W is the lowest among the Three Swordsmen**.

## vs NVIDIA L4

| Metric | Mobilint Regulus | NVIDIA L4 | Difference |
|------|---------------------|-----------|------|
| **INT8** | 32 TOPS | 485 TOPS | L4 15x |
| **TDP** | **12W** | 72W | **Regulus 6x power savings** |
| **Efficiency** | 2.67 TOPS/W | **6.7 TOPS/W** | L4 2.5x |
| **Memory** | 32GB LPDDR5X | 24GB GDDR6 | Regulus 1.3x |
| **Bandwidth** | 204 GB/s | 300 GB/s | L4 1.5x |
| **Price** | **~$400** | ~$2,500 | **Regulus 6x cheaper** |
| **Software** | ARIES SDK | CUDA | L4 mature |

> **Regulus advantage**: **TDP 12W** (L4 17%) + **price 16% L4** + **South Korea sovereign AI**.
> **L4 advantage**: **compute 15x** + **CUDA ecosystem** + **multi-cloud deployment**.

## Vendor Information

| Item | Content |
|------|------|
| **Company** | Mobilint |
| **Founder** | **Hyung-jin Kim** (CEO, former Samsung semiconductor) |
| **Founded** | 2019 |
| **Headquarters** | Seoul, South Korea + Silicon Valley, USA |
| **Funding** | **$100M+** (Series A 2023-Q1 led by: Korea Development Bank + SK Hynix)|
| **Valuation (2025)** | ~$500M |
| **2024 Revenue** | ~$15M |
| **Employees** | ~80 |
| **Fab** | TSMC 5nm |
| **Key Customers** | **KT (Korea Telecom)**, **SK Group**, **Samsung SDS**, **Naver** |
| **Government Support** | South Korea National AI Semiconductor Strategy |
| **Status** | mass production + 2026 planned IPO |

## Software Stack Mobilint ARIES

| Layer | Tool | Description |
|------|------|------|
| **AI framework** | **Mobilint ARIES SDK** | unified programming |
| | **PyTorch (ARIES backend)** | auto NPU mapping |
| | **TensorFlow Lite** | compatible |
| | **ONNX Runtime** | compatible |
| **Compiler** | **ARIES Compiler** | model -> NPU |
| **Runtime** | ARIES Runtime | multi-core scheduling |
| **Quantization** | **ARIES Quant** | INT8 automatic |
| **Model Zoo** | ARIES ModelZoo | 50+ inference models |

> **ARIES advantage**: **PyTorch native**, **compile 1-5 minutes** (vs Cambricon NeuWare 1-2 hours), **simple model deployment**.

## Use Cases

- ✅ **Edge AI inference** (12W air-cooled)
- ✅ **South Korea sovereign AI** (KT / SK / Naver customers)
- ✅ **Small model training** (7B LLM quantized)
- ✅ **Entry data center inference** (8-card cluster 256 TOPS)
- ✅ **Multimodal AI** (image + text)
- ✅ **ADAS / autonomous driving** (12W air-cooled)
- ❌ **AI training** (inference + small training only)
- ❌ **CUDA proprietary workloads** (requires ARIES porting)
- ❌ **International market** (Korea / Asia primary)

## Mobilint Product Line

| Product | Released | Compute | TDP | Target |
|------|------|------|-----|------|
| **Aries (Regulus)** | **2023-Q2** | **32 INT8 TOPS** | **12W** | **Edge + entry DC** |
| Aries Pro (est.) | 2025 H2 | 64 INT8 TOPS | 20W | high-end Edge |
| Aries 200 (est.) | 2026 | 200 INT8 TOPS | 80W | data center |
| Aries 1000 (est.) | 2027 | 1000 INT8 TOPS | 200W | high-end data center |

## Mobilint vs Apple A18 Pro

| Metric | Mobilint Regulus | Apple A18 Pro |
|------|---------------------|------------------|
| **INT8** | 32 TOPS | 35 TOPS |
| **TDP** | **12W** | 8-10W |
| **Efficiency** | 2.67 TOPS/W | 3.5 TOPS/W |
| **Memory** | 32GB LPDDR5X | 8GB LPDDR5X |
| **Price** | ~$400 | iPhone $999+ |
| **Target** | data center + edge | smartphone |

> **Mobilint advantage**: **32GB memory** (A18 Pro 8GB 4x) + **data center deployment** + **low price**.
> **A18 Pro advantage**: **iPhone integration** + **35 TOPS** + **30% better efficiency**.

## South Korea AI Startup Three Swordsmen Strategic Significance

- **FuriosaAI**: high-end data center inference (512GB HBM3)
- **Rebellions**: edge + data center (16-400 TOPS evolution)
- **Mobilint**: entry + edge (32 TOPS, 12W)

**Three Swordsmen complementary**: covering all South Korea AI scenarios (high-end / mid-range / entry / edge), **South Korea national AI compute fully autonomous**.

## Key Features

- **32 TOPS INT8**: entry data center NPU
- **TDP 12W**: lowest data center NPU TDP in industry
- **Price $400**: cheapest in industry
- **South Korea + TSMC 5nm**: mature manufacturing
- **ARIES SDK**: PyTorch compatible
- **Drawbacks**: low compute (vs L4 15x), 2-year ecosystem

## Related Products

- [FuriosaAI RNGD](/docs/cards/others/furiosaai-rngd) - South Korea duo
- [Rebellions RBLN](/docs/cards/others/rebellions-rbln) - South Korea duo
- [Rebellions ATOM] (est.) - Rebellions next-gen
- [Blaize Xplorer X1600](/docs/cards/others/blaize-xplorer) - Edge AI
- [Hailo-8 / Hailo-15](/docs/cards/others/hailo) - Edge
- [Qualcomm AI 100](/docs/cards/others/qualcomm-ai100) - Edge
- [Qualcomm AI 200/300](/docs/cards/others/qualcomm-ai-200) - Data center
- [NVIDIA L4](/docs/cards/nvidia/l4) - industry comparison
- [Apple A18 Pro](/docs/cards/others/apple-a18-pro) - smartphone NPU
