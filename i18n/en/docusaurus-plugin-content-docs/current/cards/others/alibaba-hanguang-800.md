---
id: alibaba-hanguang-800
title: Alibaba Hanguang 800 (Internal AI Inference, 2021)
sidebar_label: Alibaba Hanguang 800
description: "Alibaba Hanguang 800 detailed specs: 12nm, 820 INT8 TOPS, 700 GB/s, 168W, T-Head (Alibaba), Taobao / Alibaba Cloud inference, Alibaba's first-gen AI chip."
keywords: [Alibaba Hanguang, Hanguang 800, T-Head, Alibaba Cloud, 12nm, 820 TOPS, 168W, Chinese AI chip]
---

# Alibaba Hanguang 800 (Internal AI Inference, 2021)

## Product Overview

**Alibaba Hanguang 800** is Alibaba subsidiary **T-Head Semiconductor**'s **first-generation AI inference chip**, **announced at the 2019-09 Hangzhou Apsara Conference**, **mass production in 2021**. Based on **TSMC 12nm**, **820 INT8 TOPS** compute (**the leading inference chip of its era**), **700 GB/s memory bandwidth**, **168W TDP**. Paired with the **HALO** (Hanguang Accelerated Linear Operator) software stack.

**Strategic significance**: Hanguang 800 marks the **beginning of self-developed AI chips at Chinese internet companies**. **Alibaba's Taobao search/recommendation, Alibaba Cloud PAI platform, and Cainiao logistics** fully deployed Hanguang 800, **replacing NVIDIA T4/L4 inference**. **Alibaba Cloud 2021 revenue exceeded ¥100B**, with AI inference compute 70% from self-developed chips.

## Core Specs

| Item | Parameter |
|------|------|
| **Architecture** | Hanguang NPU (proprietary) |
| **Process** | TSMC 12nm |
| **Compute Cores** | **170,000 NPU Cores** (proprietary ISA) |
| **On-chip SRAM** | 32MB |
| **HBM** | **32GB HBM2** (4 stacks) |
| **Memory Bandwidth** | **700 GB/s** |
| **INT8** | **820 TOPS** |
| **BF16** | **128 TFLOPS** (**among the top inference BF16 of its era**) |
| **FP16** | 128 TFLOPS |
| **TDP** | **168W** |
| **Form Factor** | PCIe Gen3 x16 |
| **Interconnect** | PCIe + proprietary RLLink |
| **Mass Production** | 2021-Q3 |
| **Unit Price** | not disclosed (internal Alibaba) |

## Why 12nm Process

| Dimension | Hanguang 800 (12nm) | Contemporary NVIDIA T4 (12nm) | Contemporary Huawei Ascend 310 (12nm) |
|------|--------------------|------------------------|--------------------------------|
| **Process** | 12nm | 12nm | 12nm |
| **INT8** | **820 TOPS** | 130 TOPS | 16 TOPS (310) / 22 TOPS |
| **BF16** | 128 TFLOPS | - | - |
| **TDP** | 168W | 70W | 8W (310) |
| **Volume** | internal Alibaba 100K+ | NVIDIA general | Huawei Cloud + Edge |

> **12nm choice rationale**: **Mature process + stable mass production** (vs 7nm early yield issues), **sufficient performance + cost advantage**. **Alibaba 2021 overall strategy**: **proprietary + cost-effective + no reliance on US advanced process**.

## Hanguang vs Contemporaries

| Metric | Alibaba Hanguang 800 | NVIDIA T4 | Huawei Ascend 310 | Google Edge TPU |
|------|------------------|-----------|---------------------|------------------|
| **Process** | 12nm | 12nm | 12nm | 28nm |
| **INT8** | **820 TOPS** | 130 TOPS | 16-22 TOPS | 4 TOPS |
| **TDP** | 168W | 70W | 8W | 2W |
| **Efficiency** | 4.88 TOPS/W | 1.86 TOPS/W | 2-2.75 TOPS/W | 2 TOPS/W |
| **Memory** | 32GB HBM2 | 16GB GDDR6 | 8GB LPDDR4 | 8MB SRAM |
| **Price** | not disclosed | ~$2K | not disclosed | ~$60 |

> **Hanguang 800 advantage**: **INT8 compute 6.3x T4**, **efficiency 2.6x T4**, **the leading inference chip of 2021**.

## Internal Alibaba Deployment Scenarios

| Scenario | Business | Savings |
|------|------|------|
| **Taobao search & recommendation** | 1 billion product search ranking | **50% GPU cost savings** (vs V100)|
| **Alibaba Cloud PAI Platform** | ML inference service | **5x T4 compute per card** |
| **Cainiao Logistics Scheduling** | 10M+ package route optimization | **scheduling latency 50ms** |
| **Tmall Image Recognition** | product images 1M+/day | **replaced T4 90% workload** |
| **Alipay Risk Control** | real-time fraud detection | **millisecond-level decisions** |
| **DingTalk AI Assistant** | LLM inference | **cost reduced by 70%** |

> **Hanguang 800 commercialization significance**: **Alibaba's first self-developed AI chip 100% replacing NVIDIA internally**. **Single chip 5x T4 compute + 70% cost savings**.

## HALO Software Stack

| Layer | Tool | Description |
|------|------|------|
| **AI framework** | **HALO** (Hanguang Accelerated Linear Operator)| unified programming platform |
| | PyTorch (HALO backend)| automatic NPU mapping |
| | TensorFlow (HALO backend)| compatible |
| | **HALO-MLA** | Multi-Level API (high-level)|
| | **HALO-Lite** | lightweight API (inference)|
| **Compiler** | **HALO Compiler** | PyTorch / TF -> NPU |
| **Runtime** | HALO Runtime | scheduling |
| **Quantization** | **HALO Quant** | INT8 automatic |
| **Model Zoo** | HALO ModelZoo | 100+ inference models |

> **HALO advantage**: **internal Alibaba 100+ models** pre-optimized (Taobao search, recommendation, risk control, image, NLP), **ready to use out of the box**.

## Vendor Information

| Item | Content |
|------|------|
| **Company** | Alibaba / T-Head Semiconductor |
| **Business Unit** | Alibaba Cloud + T-Head Semiconductor |
| **Founded** | T-Head 2018-09 (C-SKY + DAMO Academy merger) |
| **Hanguang 800 Team** | Alibaba DAMO Academy + T-Head (Shanghai + Hangzhou) |
| **Total Investment** | **$5B+** (2018-2023 cumulative) |
| **First Chip** | Hanguang 800 (2019 released, mass production in 2021)|
| **Follow-ups** | **Xuantie C910** (RISC-V CPU), **Yushan 600** (SSD controller), **Zhenyue 510** (enterprise SSD) |
| **Customers** | internal Alibaba 100% + Alibaba Cloud PAI platform |
| **Employees** | T-Head ~1500 (semiconductor)|
| **Fab** | TSMC 12nm + 5nm (2024 estimated)|

## T-Head Product Line

| Product | Type | Released | Compute | Purpose |
|------|------|------|------|------|
| **Hanguang 800** | **AI Inference** | **2019-09 / mass production 2021** | **820 INT8 TOPS** | **internal Alibaba + Alibaba Cloud** |
| **Xuantie C910** | RISC-V CPU | 2019 | 2.5 GHz 12-core | IoT / Edge |
| **Xuantie C906** | RISC-V CPU | 2019 | 1 GHz | MCU |
| **Yushan 600** | SSD Controller | 2020 | PCIe Gen4 | data center SSD |
| **Zhenyue 510** | Enterprise SSD | 2022 | 16TB | Alibaba Cloud Pangu |
| **Hanguang 900 (estimated)** | AI inference next-gen | 2024 estimated | 2-3 PF | 2024+ |

## Alibaba AI Strategy

| Dimension | 2019 Hanguang 800 Era | 2024+ Estimated |
|------|---------------------|------------|
| **Business** | internal Alibaba + Alibaba Cloud | Alibaba Cloud + external customers |
| **Applications** | Search / Recommendation / Logistics | + LLM (Qwen) / Multimodal |
| **Compute** | 820 INT8 TOPS | 2-3 PF (estimated) |
| **Memory** | 32GB HBM2 | 96-128GB HBM3 (estimated) |
| **Mass Production** | 10K+ units / year | 100K+ units / year |
| **T-Head Team** | semiconductor independent | Alibaba Cloud full-stack integration |

## Key Features

- **820 INT8 TOPS**: the leading inference chip of 2021
- **128 BF16 TFLOPS**: supports LLM inference
- **32GB HBM2**: 32GB memory for LLaMA 1 65B inference
- **HALO software stack**: internal Alibaba 100+ models
- **100% in-house replacement**: Alibaba Taobao / Tmall / Alipay / Cainiao / DingTalk
- **TDP 168W**: single GPU replacement
- **Drawbacks**: discontinued (2023-12), never sold externally, 4-year ecosystem

## vs Chinese AI Chips (2021 Era)

| Metric | Alibaba Hanguang 800 | Huawei Ascend 310 | Cambricon MLU 370 |
|------|--------------------|---------------------|------------------|
| **Process** | 12nm | 12nm | 7nm |
| **INT8** | **820 TOPS** | 22 TOPS | 96 TOPS |
| **TDP** | 168W | 8W | 35W |
| **Memory** | 32GB HBM2 | 8GB LPDDR4 | 48GB HBM2 |
| **Deployment** | internal Alibaba | Huawei Cloud | government/enterprise cloud |

> **2021 Hanguang 800 compute was 37x Ascend 310**, but post-2022, Huawei Ascend 910 series + Cambricon 590 quickly caught up, **Hanguang 800's advantage faded**.

## Use Cases

- ✅ **internal Alibaba AI inference** (Taobao / Tmall / Alipay / Cainiao / DingTalk)
- ✅ **Alibaba Cloud PAI inference service** (PAI-EAS)
- ✅ **LLM inference** (Qwen 7B / 14B / 72B optimized)
- ✅ **Search / Recommendation / Image / NLP** (100+ models pre-optimized)
- ✅ **Alibaba e-commerce** (Taobao search ranking)
- ❌ **External sales** (internal + Alibaba Cloud only)
- ❌ **AI training** (inference only)
- ❌ **CUDA proprietary workloads** (requires HALO porting)

## Key Timeline

| Time | Event |
|------|------|
| 2018-09 | Alibaba founded T-Head Semiconductor (C-SKY + DAMO Academy) |
| **2019-09** | **Hanguang 800 announced at Hangzhou Apsara Conference** (DAMO Academy R&D) |
| 2020 | T-Head internal testing + small-scale Alibaba deployment |
| **2021-Q3** | **Hanguang 800 mass production**, internal Alibaba 100K+ units deployed |
| 2022 | Hanguang 800 deployed to Alibaba Cloud PAI platform |
| 2023 | internal Alibaba inference compute 70% Hanguang 800 |
| 2023-12 | Hanguang 800 officially discontinued (transitioning to next-gen) |
| 2024+ | Next-gen Hanguang (estimated 900 series) |

## Related Products

- [Huawei Ascend 910C](/docs/cards/huawei/ascend-910c) - Chinese data center comparison
- [Huawei Ascend 910B](/docs/cards/huawei/ascend-910b) - Huawei previous-gen
- [Cambricon MLU 590](/docs/cards/others/cambricon-mlu) - Chinese AI
- [Cambricon MLU 370](/docs/cards/others/cambricon-mlu) - Cambricon 2021
- [Moore Threads MTT S5000](/docs/cards/others/moore-threads-mtt-s5000) - Chinese GPU
- [Biren BR104](/docs/cards/others/biren-br104) - Chinese AI
- [NVIDIA T4](/docs/cards/nvidia/t4) - competitor to Hanguang 800
- [NVIDIA L4](/docs/cards/nvidia/l4) - inference comparison
- [FuriosaAI RNGD](/docs/cards/others/furiosaai-rngd) - South Korea 2024
- [Rebellions RBLN](/docs/cards/others/rebellions-rbln) - South Korea 2024
