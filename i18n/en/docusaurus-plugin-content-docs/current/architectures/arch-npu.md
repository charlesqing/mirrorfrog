---
id: arch-npu
title: NPU (Neural Processing Unit)
sidebar_label: NPU
description: "NPU architecture details: Huawei Ascend, Intel Gaudi, Hailo, and other dedicated neural processing units covering data center and edge scenarios."
keywords: [NPU, Neural Processing Unit, Huawei Ascend, Intel Gaudi, Hailo, Apple Neural Engine, neural processing]
---

# NPU (Neural Processing Unit) Architecture

## What is an NPU

**NPU (Neural Processing Unit)** is a processor **purpose-built for neural network inference**. **Broadly**, it includes all "non-GPU, non-CPU" AI accelerators. **Narrowly**, it specifically refers to **edge/on-device** low-power AI chips (distinct from data center ASIC/WSE/LPU).

**Typical NPUs**: Huawei Ascend, Intel Gaudi, Hailo, Apple Neural Engine (SoC-integrated).

## NPU vs GPU vs TPU

| Dimension | NPU | GPU | TPU |
|-----------|-----|-----|-----|
| Primary positioning | Inference (some training) | Training + inference | Training + inference |
| Deployment scenario | **Edge / on-device / data center** | Data center / workstation | Google Cloud only |
| Power | **&lt; 100W** | 100-1000W | 100-700W |
| Ecosystem | **Fragmented (vendor SDKs)** | CUDA mature | JAX/TF |
| General-purpose | Medium | **Strong** | Medium |
| Programming | Vendor SDK | CUDA | XLA |

## Major NPU Vendors

### Huawei Ascend (Da Vinci Architecture)
- **Ascend 910B / 910C / 910D**: Data center training + inference
- **Ascend 310**: Edge inference (10-22W)
- **MindSpore** ecosystem
- Dominant in China market

### Intel Gaudi (Habana Labs)
- **Gaudi 1 / 2 / 3**: Data center training + inference
- **SynapseAI SDK**
- Cost-effectiveness approach

### Hailo
- **Hailo-8 / 8L / 15**: Edge vision AI inference
- **Dataflow Architecture** (similar to WSE)
- **&lt; 10W** ultra-low power

### Apple Neural Engine
- **Integrated into M-Series / A-Series SoCs**
- **16-76 TOPS** (by SoC generation)
- On-device Apple Intelligence

### Edge NPUs (PC Integrated)
- **Intel Meteor Lake / Lunar Lake / Arrow Lake-H / Panther Lake**
- **AMD Ryzen AI (XDNA)** (based on Xilinx)
- **Qualcomm Hexagon NPU** (Snapdragon X Elite)
- **Apple M-Series** ANE

## Mainstream NPU Spec Comparison

| NPU | Compute | TDP | Memory | Deployment |
|-----|---------|-----|--------|------------|
| **Huawei Ascend 910C** | 780 TFLOPS BF16 | 310W | 128GB HBM2e | Data center |
| **Huawei Ascend 310P** | 22 TOPS INT8 | 8W | 24GB LPDDR4X | Edge |
| **Intel Gaudi 3** | 1,835 TFLOPS BF16 | 900W | 128GB HBM2e | Data center |
| **Hailo-8** | 26 TOPS | 2.5W | 4GB | Edge |
| **Apple M4 ANE** | 38 TOPS | Integrated | Shared UMA | On-device |
| **Qualcomm Hexagon NPU** | 45 TOPS | Integrated | Shared | On-device PC |

## NPU Use Cases

- ✅ **Edge / on-device AI inference** (low power, always-on)
- ✅ Custom data center AI acceleration (Huawei, Intel)
- ✅ Large model inference optimization (specific models)
- ✅ On-device GenAI (Apple Intelligence, Copilot+ PC)
- ❌ General AI training (use GPU / TPU)
- ❌ Large model training (H100/B200 superior)

## Detailed Product Pages

### Huawei Ascend (Da Vinci Architecture)
- [Huawei Ascend 910B](/docs/cards/huawei/ascend-910b) - 2022, 7nm 64-core Da Vinci 320 TFLOPS BF16
- [Huawei Ascend 910C](/docs/cards/huawei/ascend-910c) - 2023-Q4, dual chiplet 128GB HBM2e 780 TFLOPS BF16
- [Huawei Ascend 910D](/docs/cards/huawei/ascend-910d) - 2024-H2, domestic 6nm SMIC + domestic HBM
- [Huawei Ascend 920](/docs/cards/huawei/ascend-920) - 2025-H2, 6nm SMIC 192GB HBM2e 4 Tbps, China's highest 900+ BF16 TFLOPS = 3× H20

### Intel Gaudi (Habana Labs)
- [Intel Gaudi 1](/docs/cards/intel/gaudi-1) - 2020 first generation
- [Intel Gaudi 2](/docs/cards/intel/gaudi-2) - 2022 second generation, 24-core Tensor processor 432 GB/s
- [Intel Gaudi 3](/docs/cards/intel/gaudi-3) - 2024 third generation, 128GB HBM2e 1835 BF16 TFLOPS
- [Intel Gaudi 4](/docs/cards/intel/gaudi-4) - 2026-Q2 estimated 3nm 192GB HBM3E 3.7 PF FP8 18A 24× 200GbE RoCE

### Intel Core Ultra (On-Device PC NPU)
- [Intel Core Ultra 2 (Lunar Lake)](/docs/cards/intel/core-ultra-2) - Foveros 3D NPU 4.0 48 TOPS Xe2 GPU 60+ TOPS

### Qualcomm (On-Device PC + Mobile NPU)
- [Qualcomm Snapdragon X Elite](/docs/cards/others/qualcomm-snapdragon-x-elite) - 12-core Oryon @ 4.2 GHz, Hexagon 45 TOPS, 75 TOPS AI Copilot+ PC
- [Qualcomm AI 200 / AI 300](/docs/cards/others/qualcomm-ai-200) - 5nm Hexagon NPU + Oryon CPU Cloud inference

### MediaTek (Mobile NPU)
- [MediaTek Dimensity 9400](/docs/cards/others/mediatek-dimensity-9400) - 3nm N3E, Cortex-X925, NPU 890 8th gen, **world's first Agentic AI engine**, on-device LoRA training

### Apple (On-Device ANE)
- [Apple A17 Pro](/docs/cards/others/apple-a17-pro) - **World's first 3nm chip**, 35 TOPS NE
- [Apple A18](/docs/cards/others/apple-a18) - iPhone 16 entry 5-core GPU 35 TOPS NE hardware ray tracing
- [Apple A18 Pro](/docs/cards/others/apple-a18-pro) - iPhone 16 Pro 35 TOPS NE Apple Intelligence
- [Apple A19](/docs/cards/others/apple-a19) - iPhone 17 entry 5-core GPU 8GB $799
- [Apple A19 Pro](/docs/cards/others/apple-a19-pro) - iPhone 17 Pro 3nm N3P, GPU Neural Accelerators 4× A18 Pro
- [Apple M1 Pro](/docs/cards/others/apple-m1-pro) - MacBook Pro 2021 10-core CPU 200 GB/s
- [Apple M1 Max](/docs/cards/others/apple-m1-max) - MacBook Pro 2021 32-core GPU 400 GB/s 64GB UMA
- [Apple M2 Max](/docs/cards/others/apple-m2-max) - 96GB UMA 400 GB/s
- [Apple M3 Max](/docs/cards/others/apple-m3-max) - 128GB LPDDR5 400 GB/s 18 TOPS NE
- [Apple M4 Max](/docs/cards/others/apple-m4-max) - 128GB LPDDR5X 546 GB/s 38 TOPS NE
- [Apple M-Series Overview](/docs/cards/others/apple-m-series) - M1/M2/M3/M4/M5 full comparison

### Korean AI Trio (Data Center + Edge NPU)
- [Rebellions RDU](/docs/cards/others/rebellions-rbln) - 2024-Q2 5nm 16 INT8 TOPS 15-30W Korea
- [Mobilint Regulus](/docs/cards/others/mobilint) - 2023-Q2 5nm 32 INT8 TOPS 12W Korea
- [FuriosaAI RNGD](/docs/cards/others/furiosaai-rngd) - 2024-Q3 5nm 512GB HBM3 200K tok/s Korea 450W

### Chinese AI Startups (Data Center NPU)
- [Cambricon MLU 370](/docs/cards/others/cambricon-mlu-370) - 2021-Q4 7nm 96 INT8 TOPS 35W (EOL 2023)
- [Cambricon MLU 590](/docs/cards/others/cambricon-mlu) - 7nm 96GB HBM2 256 INT8 TOPS 250W STAR Market
- [Cambricon MLU 690](/docs/cards/cambricon/mlu-690) - 2025-2026 estimated 5nm 192GB HBM3E 2 PF FP8

### Edge NPU
- [Hailo-15](/docs/cards/others/hailo-15) - 2024-Q4 7-20 TOPS AI-ISP Gen3 vision AI
- [Hailo-8](/docs/cards/others/hailo) - 2019, 26 TOPS 2.5W edge evergreen

## Related Architectures

- [GPU](/docs/architectures/arch-gpu) - General AI
- [TPU](/docs/architectures/arch-tpu) - Data center dedicated
- [ASIC](/docs/architectures/arch-asic) - Inference optimized
- [Neuromorphic](/docs/architectures/arch-neuromorphic) - Neuromorphic computing
- [Complete Comparison Table](/docs/comparison)
