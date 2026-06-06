---
id: qualcomm-ai-200
title: Qualcomm AI 200 / AI 300 (Cloud AI Inference, 2025-2026 Est.)
sidebar_label: Qualcomm AI 200/300
description: "Qualcomm AI 200/300 detailed specs (estimated): 5nm, Cloud AI inference, NPU accelerator, PyTorch + Qualcomm AI Engine, competing with H200."
keywords: [Qualcomm AI 200, Qualcomm AI 300, Cloud AI inference, AI Engine, Snapdragon X, NPU, data center]
---

# Qualcomm AI 200 / AI 300 (Cloud AI Inference, 2025-2026 Est.)

:::warning Estimated Content
Specifications on this page are based on Qualcomm 2024-10 Snapdragon Summit public statements + Cristiano Amon roadmap + AI Engine SDK estimates. **Qualcomm has not yet officially released AI 200/300 full specifications**, **official data subject to actual 2025 H2 / 2026 H1 release**.
:::

## Product Overview

**Qualcomm AI 200 / AI 300** is Qualcomm's first data center product entering **Cloud AI Inference**, **expected 2025 H2 (AI 200) / 2026 H1 (AI 300) release**. Based on **Qualcomm proprietary Hexagon NPU** + **Oryon CPU** + **Adreno GPU** heterogeneous architecture, **Cloud AI inference primary**, competing against **NVIDIA H200** and **AMD MI355X**.

**Strategic significance**:
- Qualcomm expands from **Mobile / Edge AI** to **Cloud AI**
- Current customers: Microsoft Azure (Copilot inference), Meta (LLaMA inference), Anthropic
- Paired with **Qualcomm AI Engine SDK** (CUDA-like cross-platform)
- **Efficiency priority** (Qualcomm's traditional advantage, 10-20W vs NVIDIA 700W)

## Core Specs (Estimated)

| Item | AI 200 (2025 H2 Est.) | AI 300 (2026 H1 Est.) |
|------|------------------------|------------------------|
| **Process** | TSMC 5nm | **TSMC 3nm (N3E)** |
| **Hexagon NPU** | 2 NPU tiles | 4 NPU tiles |
| **Oryon CPU** | 80-core Oryon | 96-core Oryon |
| **Adreno GPU** | 1 integrated | 2 integrated |
| **LPDDR5X** | 128GB | **256GB** |
| **Memory Bandwidth** | 1.5 TB/s | **2.5 TB/s** |
| **INT8** | **400 TOPS** | **800 TOPS** |
| **FP16** | 200 TFLOPS | 400 TFLOPS |
| **FP8** | 400 TFLOPS | 800 TFLOPS |
| **TDP** | **150W** | **280W** |
| **Form Factor** | OAM / PCIe Gen5 | OAM / PCIe Gen5 |
| **Mass Production** | **2025 H2** | **2026 H1** |
| **Unit Price (Est.)** | ~$8,000-12,000 | ~$15,000-20,000 |

## Heterogeneous Hexagon NPU + Oryon CPU + Adreno GPU

| Component | Role | Performance |
|------|------|------|
| **Hexagon NPU** | matmul + activation functions | **80 TOPS/tile x N tiles** |
| **Oryon CPU** | scheduling + non-matrix ops + KV Cache | 80 cores 3 GHz |
| **Adreno GPU** | graphics + partial ops | integrated |
| **LPDDR5X** | unified memory pool | 128-256GB |

**Heterogeneous scheduling**:
```
LLM inference:
 Attention ops -> Hexagon NPU (matmul)
 KV Cache management -> Oryon CPU (scalar + memory)
 Softmax + LayerNorm -> Hexagon NPU (vector)
 Sampling -> Oryon CPU (scalar)
```

## Qualcomm Hexagon NPU Evolution

| Product | Released | Compute INT8 | TDP | Target |
|------|------|-----------|-----|------|
| Snapdragon 8 Gen 3 | 2023 | 45 TOPS | mobile | smartphone |
| Snapdragon X Elite | 2024 | 45 TOPS | laptop | Copilot+ PC |
| **AI 200** | **2025 H2** | **400 TOPS** | **150W** | **Cloud inference** |
| **AI 300** | **2026 H1** | **800 TOPS** | **280W** | **Cloud inference** |
| AI 400 (est.) | 2027 | 1600 TOPS | 500W | Cloud training |

## Software Stack Qualcomm AI Engine SDK

| Layer | Tool | Description |
|------|------|------|
| **AI framework** | **Qualcomm AI Engine SDK** | unified CPU + GPU + NPU |
| | **Qualcomm AI Hub** | pre-optimized model library (1000+ models) |
| | PyTorch 2 (Native) | compatible + NPU backend |
| | TensorFlow Lite | compatible |
| | ONNX Runtime | compatible |
| **Compiler** | **QNN Compiler** | cross NPU/GPU/CPU compilation |
| **Quantization** | **AI Engine Quantization** | INT8/FP8 automatic |
| **API** | **Direct NDK** | low-level C++ API |
| **Cloud Deployment** | **Qualcomm AI Inference Suite** | containerized deployment |

> **Qualcomm AI Hub advantage**: **1000+ pre-optimized models** (YOLOv8, LLaMA, Mistral, Whisper, SDXL), **plug-and-play**, ecosystem maturity superior to most AI startups.

## vs NVIDIA H200

| Metric | Qualcomm AI 200 | NVIDIA H200 | Difference |
|------|-------------------|--------------|------|
| **Process** | TSMC 5nm | TSMC 4N | comparable |
| **INT8** | 400 TOPS | 1,513 TOPS | H200 3.8x |
| **FP8** | 400 TF | 3,958 TF | H200 10x |
| **Memory** | 128GB LPDDR5X | 141GB HBM3E | H200 slightly more |
| **Bandwidth** | 1.5 TB/s | 4.8 TB/s | **H200 3.2x** |
| **TDP** | **150W** | 700W | **AI 200 -79%** |
| **Efficiency** | 2.67 TOPS/W | 2.16 TOPS/W | **AI 200 +24%** |
| **Software** | AI Engine (new) | CUDA (mature) | **H200 advantage** |
| **Price (Est.)** | ~$10K | ~$30K | **AI 200 -67%** |

> **AI 200 advantage**: **TDP only 150W (21% of H100 700W)** + **price 1/3**, making it a **high-efficiency / low-cost option** for **hyperscale LLM inference**.

## Vendor Information

| Item | Content |
|------|------|
| **Company** | Qualcomm Incorporated |
| **Business Unit** | Qualcomm CDMA Technologies (QCT) |
| **CEO** | Cristiano Amon |
| **Headquarters** | San Diego, California, USA |
| **2024 Revenue** | ~$39B (mobile SoC dominant)|
| **Data Center Business** | newly established (2024-Q3)|
| **Fab** | TSMC 5nm / 3nm |
| **Customers (signed)** | **Microsoft Azure** (Copilot inference), **Meta** (LLaMA inference), **Anthropic** (Claude inference)|
| **Partners** | Hugging Face (pre-optimized models), Red Hat (Linux containers)|

## Use Cases

- ✅ **Hyperscale LLM inference** (efficiency + price advantage)
- ✅ **Copilot+ AI inference** (Microsoft customer)
- ✅ **Hugging Face model inference** (AI Hub integration)
- ✅ **Edge / Cloud unified** (same SDK across deployment)
- ✅ **Government / SOE** (Qualcomm US brand)
- ❌ **AI training** (AI 200/300 inference only)
- ❌ **CUDA proprietary workloads** (requires AI Engine porting)
- ❌ **Cutting-edge FP4** (FP8 minimum)

## Qualcomm Cloud AI Strategy

| Dimension | Current | 2026 Target |
|------|------|----------|
| **Business Positioning** | Mobile SoC + Edge AI | **+ Cloud AI** |
| **Customers** | phone makers + automakers | **+ Microsoft / Meta / Anthropic** |
| **Compute** | 45-100 TOPS mobile | **400-800 TOPS Cloud** |
| **Software** | AI Engine + Hub | **+ AI Inference Suite** |
| **Revenue Share** | Cloud 0% | **Cloud 5-10% (2026)** |

## Key Features

- **Hexagon NPU**: from mobile to Cloud, 800 TOPS Cloud
- **Oryon CPU**: 80-96 cores, NVIDIA Grace-like
- **LPDDR5X 256GB**: Cloud-grade unified memory
- **150-280W TDP**: H100/H200 20-40% energy savings
- **AI Hub 1000+ models**: plug-and-play
- **Drawbacks**: weak CUDA compatibility, new platform, only 3 customers

## Related Products

- [Qualcomm AI 100](/docs/cards/others/qualcomm-ai100) - previous-gen (data center)
- [NVIDIA H200](/docs/cards/nvidia/h200) - direct competitor
- [NVIDIA H100](/docs/cards/nvidia/h100) - mainstream
- [AMD MI355X](/docs/cards/amd/mi355x) - industry comparison
- [Groq LPU v2](/docs/cards/others/groq-lpu-v2) - LPU inference
- [Blaize Xplorer X1600](/docs/cards/others/blaize-xplorer) - Edge AI
- [Huawei Ascend 910C](/docs/cards/huawei/ascend-910c) - Chinese comparison
- [Cambricon MLU 590](/docs/cards/others/cambricon-mlu) - Chinese AI
