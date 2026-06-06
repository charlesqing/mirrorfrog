---
id: furiosaai-rngd
title: FuriosaAI RNGD (South Korea AI Inference, 2024)
sidebar_label: FuriosaAI RNGD
description: FuriosaAI RNGD detailed specs: 5nm, 512 GB HBM3, 200K tokens/s LLM inference, KT / Korea Telecom / G42 cloud customers, South Korea AI chip representative.
keywords: [FuriosaAI, RNGD, South Korea AI, 5nm, HBM3, 200K tokens/s, KT customer, South Korea AI startup]
---

# FuriosaAI RNGD (South Korea AI Inference, 2024)

## Product Overview

**FuriosaAI** is a South Korean AI inference chip company, **founded 2017**, Seoul. **RNGD** (Renegade) is its 2nd-gen AI inference chip, **2024-Q3 released**, **TSMC 5nm**, **512GB HBM3** (**one of the largest single-card HBM in the industry**), **512 TFLOPS BF16**, **200K tokens/s LLM inference** (**industry-leading, LPU-class**). Paired with **Tensor Contraction Processor (TCP)** architecture + **SDK** compatible with PyTorch / TensorFlow / ONNX.

**Strategic significance**: FuriosaAI is the **national representative for South Korea's AI compute**, customers include **KT (Korea Telecom), South Korea National AI, SK Group**, LG AI Research, Samsung SDS, **G42 (UAE cloud)**. It is the **core replacement option for South Korea under NVIDIA H100 export control risks**.

## Core Specs

| Item | Parameter |
|------|------|
| **Architecture** | FuriosaAI TCP (Tensor Contraction Processor) |
| **Process** | **TSMC 5nm** |
| **TCP Core Count** | **2x TCP tiles** (256 tensor contraction units per tile) |
| **HBM** | **512GB HBM3** (**one of the largest HBM capacities in industry**)|
| **HBM Channels** | 8 stacks x 64GB HBM3 |
| **Memory Bandwidth** | **~6.4 TB/s** |
| **BF16 dense** | **512 TFLOPS** |
| **FP16 dense** | 512 TFLOPS |
| **INT8** | 1 POPS |
| **TDP** | **~450W** |
| **Form Factor** | OAM / PCIe Gen5 x16 |
| **Interconnect** | FuriosaLink (proprietary, NVLink 3-like)|
| **Mass Production** | **2024-Q3** |
| **Unit Price (OAM)** | **~$20,000-25,000** (estimated)|

## Tensor Contraction Processor (TCP) Architecture

| Dimension | Traditional GPU | FuriosaAI TCP |
|------|----------|-----------------|
| **Execution Model** | Scalar MAC arrays | **Tensor Contraction** |
| **Parallelism** | Thread-level (CUDA cores)| **Tensor-level (higher-dimensional)** |
| **On-chip Memory** | Shared L2 + registers | **Large distributed SRAM** (64MB per tile)|
| **Dataflow** | Cache lines + HBM | **Graph streaming (optimal tensor contraction path)** |
| **Power** | 70-700W | **450W** |
| **Target** | Training + inference | **LLM inference (optimized)** |

### TCP Tile Detail

```
Single TCP Tile:
- 256 Tensor Contraction units
- 64MB SRAM
- Fully connected NoC (Network on Chip)
- 8 DMA engines

RNGD Full Card:
- 2 TCP Tiles (total 512 TC units)
- 128MB SRAM shared
- 1 TB/s intra-domain
```

**Key advantages**:
- **Tensor contraction replaces matmul**: higher-dimensional ops (**LLM Attention optimized**)
- **0 cache overhead**: data flows inside SRAM
- **LLM inference performance 200K tokens/s**

## 200K tokens/s LLM Inference

| Model | Quantization | FuriosaAI RNGD | NVIDIA H100 | Advantage |
|------|------|------------------|--------------|------|
| **Llama 2 70B** | FP16 | **~5K tok/s** | ~3K tok/s | **RNGD 1.7x** |
| **Llama 2 70B** | INT8 | **~10K tok/s** | ~6K tok/s | **RNGD 1.7x** |
| **Llama 3 8B** | FP16 | **~30K tok/s** | ~15K tok/s | **RNGD 2x** |
| **Mixtral 8x7B** | INT8 | **~20K tok/s** | ~12K tok/s | **RNGD 1.7x** |
| **Total Throughput (Mixed)** | - | **200K+ tok/s** | ~150K tok/s | **RNGD 1.3x** |

> **FuriosaAI killer feature**: **512GB HBM3 single card = largest HBM capacity in industry**, fits **Llama 2 70B FP16** (140GB) + **large KV Cache** (300+GB), **single-card 5K tok/s inference** (H100 1.7x).

## vs NVIDIA H100

| Metric | FuriosaAI RNGD | NVIDIA H100 | Difference |
|------|------------------|--------------|------|
| **Process** | TSMC 5nm | TSMC 4N | comparable |
| **BF16** | 512 TF | 1.5 PF (FP8 sparse) | H100 3x |
| **Memory** | **512GB HBM3** | 80GB HBM3 | **RNGD 6.4x** |
| **Bandwidth** | 6.4 TB/s | 3.35 TB/s | **RNGD 1.9x** |
| **TDP** | 450W | 700W | **RNGD -36%** |
| **Efficiency** | 1.14 TOPS/W | 2.16 TOPS/W | H100 1.9x |
| **Software** | SDK (new) | CUDA (mature) | H100 advantage |
| **Price** | ~$22K | ~$25-30K | comparable |
| **LLM 70B Inference** | **5K tok/s** | ~3K tok/s | **RNGD 1.7x** |

> **RNGD advantage**: **512GB HBM3 = largest in industry** + **70B LLM single-card 5K tok/s** + **TDP 450W 36% more energy-efficient than H100**.

## Vendor Information

| Item | Content |
|------|------|
| **Company** | FuriosaAI |
| **Founder** | **June Paik** (CEO, former Samsung semiconductor)|
| **Founded** | 2017 |
| **Headquarters** | Seoul, South Korea + San Jose, USA |
| **Funding** | **$300M+** (Series B 2024-Q1 led by: Korea National Fund + KT)|
| **Valuation (2025)** | **$1.5B+** (unicorn)|
| **2024 Revenue** | ~$40M |
| **Employees** | ~200 |
| **Fab** | TSMC 5nm |
| **Key Customers** | **KT (Korea Telecom)**, **SK Group**, **LG AI Research**, **Samsung SDS**, **G42 (UAE cloud)**, **NAVER** |
| **Government Support** | South Korea National AI Semiconductor Strategy, K-Cloud project |
| **Status** | preparing 2026-2027 IPO |

## South Korea AI Startup Duo

| Dimension | FuriosaAI | Rebellions |
|------|-----------|-------------|
| **Product** | **RNGD** | **RBLN / ATOM** |
| **Architecture** | TCP (Tensor Contraction) | RDU (Reconfigurable Dataflow) |
| **Process** | 5nm | 5nm |
| **Compute** | 512 BF16 TF | 16 INT8 TOPS (RBLN) |
| **Memory** | **512GB HBM3** (largest in industry)| 16GB LPDDR5X (RBLN) |
| **TDP** | 450W | 15-30W (RBLN) |
| **Target** | data center inference | **edge + data center** |
| **Customers** | KT / SK / G42 | KT / SK / Samsung / Naver |
| **Funding** | $300M+ | $200M+ |
| **Valuation** | $1.5B+ | $1B+ |
| **IPO** | 2026-2027 | 2026 |

## Use Cases

- ✅ **Very large LLM inference** (512GB HBM3 fits 70B FP16 + large KV Cache)
- ✅ **South Korea / UAE AI** (sovereign AI compute)
- ✅ **Data center inference** (TDP 450W energy-efficient)
- ✅ **KT / SK / Naver LLM inference** (HyperCLOVA X)
- ✅ **UAE cloud G42** (Jais / Falcon LLM)
- ❌ **AI training** (inference optimized only)
- ❌ **CUDA proprietary workloads** (requires SDK porting)
- ❌ **International market** (Korea / Middle East primary)

## Key Features

- **512GB HBM3**: largest HBM capacity in industry (NVIDIA H200 141GB 3.6x)
- **TCP Tensor Contraction**: beyond traditional matmul
- **200K tokens/s LLM inference**: industry-leading
- **TDP 450W**: 36% more energy-efficient than H100
- **South Korea + UAE sovereign AI**: stable customer base
- **Drawbacks**: compute below H100 (3x), 3-year SDK ecosystem

## Related Products

- [Rebellions RBLN](/docs/cards/others/rebellions-rbln) - South Korea duo
- [Groq LPU v2](/docs/cards/others/groq-lpu-v2) - LPU inference
- [Groq 3 LPX (post-NVIDIA acquisition)](/docs/cards/nvidia/groq-3-lpx) - Groq 3rd gen
- [Cerebras WSE-3](/docs/cards/cerebras/wse-3) - Wafer-scale
- [SambaNova SN40L](/docs/cards/others/sambanova-sn40l) - Dataflow
- [NVIDIA H100](/docs/cards/nvidia/h100) - industry comparison
- [NVIDIA H200](/docs/cards/nvidia/h200) - 141GB memory
- [Huawei Ascend 910C](/docs/cards/huawei/ascend-910c) - Chinese comparison
