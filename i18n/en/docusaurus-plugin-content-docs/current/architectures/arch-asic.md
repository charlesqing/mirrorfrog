---
id: arch-asic
title: ASIC (Application-Specific Integrated Circuit)
sidebar_label: ASIC
description: "ASIC architecture details: AWS Trainium/Inferentia, Qualcomm AI 100 and other dedicated chips optimized for specific AI workloads."
keywords: [ASIC, Application-Specific IC, AWS Trainium, AWS Inferentia, Qualcomm AI 100, inference optimization]
---

# ASIC (Application-Specific Integrated Circuit) Architecture

## What is an ASIC

**ASIC (Application-Specific Integrated Circuit)** is a custom AI accelerator designed for **specific applications**. Compared to the **general-purpose nature** of GPUs, ASICs deliver **higher energy efficiency** and **lower per-token cost** for **specific workloads**.

**Representative products**:
- **AWS Trainium / Trainium 2**: Training + inference fungible
- **AWS Inferentia / Inferentia 2**: Inference only
- **Qualcomm AI 100 (AIC100)**: Low-power data center inference
- **Google TPU** (partially classified as ASIC)

## ASIC vs GPU

| Dimension | ASIC | GPU |
|-----------|------|-----|
| General-purpose | **Weak** (specific workloads) | **Strong** (any AI task) |
| Energy efficiency | **2-3× better than GPU** | Medium |
| Performance/watt | **High** | Medium |
| Per-token cost | **Low** | Medium |
| Development cycle | 2-3 years | 1-2 years |
| Ecosystem | **Vendor-proprietary** | CUDA mature |
| Flexible upgrades | Difficult (fixed tape-out) | Easy (driver updates) |
| Best for | Large-scale inference | General AI |

## AWS Trainium / Inferentia

### AWS Trainium
- **Trainium 1** (2020): First AWS in-house training chip
- **Trainium 2** (2024-12 GA): 96GB HBM, 1,299 FP8 TFLOPS, 4× Trainium 1
- **Trainium 3** (late 2025): Rumored 2× Trainium 2
- **NeuronLink** interconnect, 64-chip UltraServer
- **Neuron SDK** (PyTorch / TensorFlow integration)
- Customers: Anthropic, AWS internal

### AWS Inferentia
- **Inferentia 1** (2019): 128 TOPS INT8
- **Inferentia 2** (2023): 32GB HBM2e, ~190 TOPS, 12-chip interconnect
- **Inf1 / Inf2 instances** (AWS EC2 rental)
- Inference cost **70% lower** than GPU

## Qualcomm AI 100 (AIC100)

- **Released 2020** (pre-pandemic)
- **400 TOPS INT8**, **75W TDP**
- **2.67 TOPS/W** (performance/watt leads GPU)
- **Qualcomm AI Engine Direct SDK**
- Customers: Hugging Face Inference API, Oracle Cloud

## ASIC Use Cases

- ✅ **Large-scale data center inference** (Inf2, Trn2)
- ✅ Ultra-large LLM inference (Hugging Face)
- ✅ Training + inference fungible (Trainium 2)
- ✅ Cost-effective inference (Inferentia 1/2)
- ✅ Low-power data center (Qualcomm AI 100)
- ❌ Multi-task general purpose (use GPU)
- ❌ Rapid new algorithm iteration (use GPU)

## Detailed Product Pages

### AWS
- [AWS Trainium](/docs/cards/aws/trainium) - 2019 first-gen training, Neuron SDK
- [AWS Trainium 2](/docs/cards/aws/trainium-2) - 2024-12 GA, 96GB HBM 1299 FP8 TFLOPS 4× Trainium 1
- [AWS Trainium 3](/docs/cards/aws/trainium-3) - 2025-12-02 GA, 3nm 144GB HBM 2.7 TB/s 4.4× Trainium 2, NeuronLink-V3
- [AWS Inferentia](/docs/cards/aws/inferentia) - 2019 first-gen inference, 128 TOPS INT8
- [AWS Inferentia 2](/docs/cards/aws/inferentia-2) - 2023 second-gen inference, 32GB HBM2e 190 TOPS

### Qualcomm
- [Qualcomm Cloud AI 100 (AIC100)](/docs/cards/others/qualcomm-ai100) - 2020, 400 TOPS INT8 75W
- [Qualcomm AI 200 / AI 300](/docs/cards/others/qualcomm-ai-200) - 2025-2026, 5nm Hexagon NPU + Oryon CPU Cloud inference

### Chinese AI Startups
- [Cambricon MLU 370](/docs/cards/others/cambricon-mlu-370) - 2021-Q4 7nm 96 INT8 TOPS 35W (EOL 2023)
- [Cambricon MLU 590](/docs/cards/others/cambricon-mlu) - 7nm 96GB HBM2 256 INT8 TOPS 250W, STAR Market
- [Cambricon MLU 690](/docs/cards/others/cambricon-mlu-690) - 2025-2026 estimated 5nm 192GB HBM3E 2 PF FP8
- [Biren BR104](/docs/cards/others/biren-br104) - 7nm 1024 INT8 TOPS 64GB HBM2E dual chiplet 300W $700M+ funding
- [Moore Threads MTT S5000](/docs/cards/others/moore-threads-mtt-s5000) - 7nm 48GB GDDR6 50 BF16 TF MUSA architecture
- [Alibaba Hanguang 800](/docs/cards/others/alibaba-hanguang-800) - 12nm 820 INT8 TOPS 168W 100K+ deployed

### Tenstorrent
- [Tenstorrent Blackhole](/docs/cards/others/tenstorrent-blackhole) - 120 Tensix cores 5 RISC-V/core 8GB SRAM 16 BF16 PF cluster Jim Keller architecture

## Related Architectures

- [GPU](/docs/architectures/arch-gpu) - General AI
- [TPU](/docs/architectures/arch-tpu) - Google data center
- [LPU](/docs/architectures/arch-lpu) - Ultra-low latency LLM
- [NPU](/docs/architectures/arch-npu) - Edge/data center NPU
- [Complete Comparison Table](/docs/comparison)
