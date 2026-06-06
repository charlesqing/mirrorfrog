---
id: mediatek-dimensity-9400
title: MediaTek Dimensity 9400 (Cortex-X925 NPU 890 Agentic AI)
sidebar_label: Dimensity 9400
description: MediaTek Dimensity 9400 detailed specs: 3nm N3E 2nd-gen, 8-core All Big Core (Cortex-X925 @ 3.62 GHz), Immortalis-G925 MC12 GPU, NPU 890 8th-gen, Agentic AI, LPDDR5X 10667 Mbps.
keywords: [MediaTek Dimensity 9400, Cortex-X925, Immortalis-G925, NPU 890, Agentic AI, on-device LoRA training, on-device video generation]
---

# MediaTek Dimensity 9400 (Cortex-X925 Agentic AI)

## Product Overview

**MediaTek Dimensity 9400** is MediaTek's **2024 mobile flagship SoC** released **2024-10-09**, **TSMC 2nd-gen 3nm (N3E)** process, **291 B transistors**. **2nd-gen All Big Core design**: **1x Cortex-X925 @ 3.62 GHz** (ARM's largest IPC improvement ever) + **3x Cortex-X4** + **4x Cortex-A720**, **Arm Immortalis-G925 MC12 GPU**, **MediaTek 8th-gen NPU 890** (**world's first** to support **Agentic AI Engine**, **on-device LoRA training**, **on-device video generation**). **LPDDR5X 10667 Mbps** (**world's fastest phone memory**), **12 MB L3 + 10 MB SLC**. First shipped in **Vivo X200**, **OPPO Find X8**, **Xiaomi 15**.

## Core Specs

| Item | Parameter |
|------|------|
| **Architecture** | ARM v9.2 (2nd-gen 3nm All Big Core) |
| **Process** | TSMC **2nd-gen 3nm (N3E)** |
| **Transistors** | **291 B** |
| **CPU Cores** | 8 (**All Big Core**: 1+3+4 design) |
| **Prime Core** | **1x Cortex-X925 @ 3.62 GHz** (ARM "Black Hawk", IPC +15% vs Cortex-X4) |
| **Big Cores** | 3x Cortex-X4 @ 3.25 GHz |
| **Mid Cores** | 4x Cortex-A720 @ 2.0 GHz |
| **L2 Cache** | 2 MB (X925) + 1 MB (X4) + 512 KB (A720) |
| **L3 Cache** | **12 MB** |
| **SLC** | 10 MB |
| **GPU** | **Arm Immortalis-G925 MC12** (12-core, hardware RT 2) |
| **GPU Performance** | vs Immortalis-G720 (Dimensity 9300) **+41% Peak** / **+40% RT** / **-44% power** |
| **NPU** | **MediaTek 8th-gen NPU 890** (1 performance core + 1 flexible core) |
| **AI Engine** | **Dimensity Agentic AI Engine (DAE)** (**world's first** Agentic AI Engine) |
| **AI Performance** | 100% faster Diffusion inference, 80% faster LLM prompt, >50 token MLLM generation, 35% power savings |
| **AI Features** | on-device LoRA training, on-device video generation (Diffusion Transformer), Agentic AI, MoE LLM support |
| **Memory** | **LPDDR5X 10667 Mbps** (**world's fastest phone memory**) |
| **Max Memory** | 24 GB |
| **Storage** | UFS 4.0 (4-channel) |
| **5G** | 3GPP Release-17, 4CC-CA, sub-6 GHz 7 Gbps |
| **Wi-Fi** | **Wi-Fi 7** (dedicated 4nm co-processor, 7.3 Gbps) |
| **Bluetooth** | Bluetooth 6.0 |
| **Launch Devices** | Vivo X200 Pro (2024-10), OPPO Find X8, Xiaomi 15 |
| **Launch Date** | **2024-10-09** |
| **Vivo X200 Pro Price** | **~$900-$1,100** |

## vs Snapdragon 8 Gen 3 / Dimensity 9300

| Metric | Dimensity 9400 | Snapdragon 8 Gen 3 | Dimensity 9300 |
|------|----------------|---------------------|----------------|
| Process | 3nm N3E | 4nm TSMC N4P | 4nm TSMC N4P |
| CPU Cores | 8 (All Big) | 8 (1+5+2) | 8 (4+4) |
| Prime Core | **Cortex-X925 @ 3.62 GHz** | Cortex-X4 @ 3.3 GHz | Cortex-X4 @ 3.25 GHz |
| GPU | Immortalis-G925 MC12 | Adreno 750 | Immortalis-G720 MC12 |
| NPU | **NPU 890 (8th gen)** | Hexagon NPU | NPU 790 (7th gen) |
| Memory | **LPDDR5X 10667** | LPDDR5X 8533 | LPDDR5X 9600 |
| Agentic AI | **world's first** | none | none |
| On-device LoRA | **supported** | not supported | not supported |
| On-device Video Gen | **supported** | not supported | not supported |

## AI Performance Benchmarks

| Model / Task | Dimensity 9400 (NPU 890) | Notes |
|-------------|---------------------------|------|
| **Stable Diffusion 3.5** | **2x Dimensity 9300** | Diffusion Transformer |
| **Llama 3 8B (Q4)** | **1.8x Dimensity 9300** | 80% faster LLM prompt |
| **Phi-3.5 Mini (3.8B)** | 50+ tokens/sec | MLLM generation |
| **On-device LoRA Training (1B)** | **world first** | fine-tune 1B model |
| **On-device Video Gen (SD Video)** | **world first** | generate 4s 480p video in seconds |
| **GPT-4V-class VLM (Qwen-VL)** | real-time | multimodal understanding |
| **MoE LLM (Mixtral 8x7B)** | supported | NPU flexible core scheduling |
| **ETHZ v6 AI Benchmark** | **#1 in industry** | leading AI performance |

> **Agentic AI Engine (DAE)**: Dimensity 9400 is the **world's first** mobile SoC supporting **Agentic AI Engine**. Agentic AI differs from traditional Generative AI: AI Agents can autonomously sense environments, make decisions, invoke tools, and execute multi-step tasks. Dimensity 9400's NPU 890, through its **performance core + flexible core** dual-core architecture, improves energy efficiency by 35%.

## Use Cases

- **Vivo X200 / X200 Pro** (2024-10, ~$900 starting)
- **OPPO Find X8 / Find X8 Pro** (2024-10, ~$700 starting)
- **Xiaomi 15 / 15 Pro** (2024-10, $700 starting)
- **Mobile LLM inference** (80% faster LLM prompt)
- **On-device AI training** (1B model LoRA training)
- **On-device video generation** (Diffusion Transformer generates 4s video in seconds)
- **AI Agent applications** (autonomous multi-step tasks)
- **Mobile gaming** (Immortalis-G925 hardware RT 2 + 41% performance boost)
- **Imaging** (Imagiq 1090 full HDR zoom, Generative AI Zoom 100x)

## Vendor Information

| Item | Information |
|------|------|
| **Vendor** | **MediaTek Inc.** (Hsinchu, Taiwan) |
| **Design** | MediaTek HQ design + ARM core IP license |
| **Fab** | **TSMC Taiwan** (3nm N3E line) |
| **Software Stack** | Android 15 (OriginOS 5 / ColorOS 15 / HyperOS 2) |
| **AI Framework** | **MediaTek Dimensity Agentic AI Engine (DAE)**, **MediaTek NeuroPilot** SDK, **Android NNAPI**, **ExecuTorch**, **LiteRT** |
| **Launch Customers** | **Vivo** X200 (2024-10), **OPPO** Find X8, **Xiaomi** 15 |
| **OEM Customers** | Vivo, OPPO, Xiaomi, Honor, Samsung Galaxy (China/India), Transsion |
| **Competitors** | Qualcomm Snapdragon 8 Gen 3 / 8 Elite, Apple A18 / A18 Pro |
| **2025 Successor** | Dimensity 9400+ (3.73 GHz X925, 2025-04) |

## Key Features

- **2nd-gen 3nm (N3E)** process
- **2nd-gen All Big Core design** (1+3+4 octa-core)
- **Cortex-X925** prime core (**ARM's largest IPC improvement ever** +15%)
- **Cortex-X925 @ 3.62 GHz** (strongest single-core mobile CPU)
- **Immortalis-G925 MC12 GPU** (41% perf / 40% RT / 44% power savings)
- **MediaTek 8th-gen NPU 890** (dual-core: 1 performance + 1 flexible)
- **Dimensity Agentic AI Engine (DAE)** (**world's first** Agentic AI Engine)
- **On-device LoRA training** (**world's first** 1B model on-device training)
- **On-device video generation** (**world's first** Diffusion Transformer video)
- **MoE LLM support** (Mixtral 8x7B flexible core scheduling)
- **LPDDR5X 10667 Mbps** (**world's fastest phone memory**)
- **Wi-Fi 7** (dedicated 4nm co-processor, 7.3 Gbps)
- **Bluetooth 6.0**, **5G sub-6 7 Gbps**, **3GPP R17**
- **Imagiq 1090** (HDR zoom, Generative AI Zoom 100x)
- **MiraVision 1090** (OLED de-burn compensation)
- **24-bit 384 KHz** Bluetooth audio

## Related Products

- [Apple A18 Pro (iPhone 16 Pro)](./apple-a18-pro) -- same-gen competitor
- [Apple A19 Pro (iPhone 17 Pro)](./apple-a19-pro) -- successor
- [Qualcomm Snapdragon X Elite (PC chip)](./qualcomm-snapdragon-x-elite) -- cross-category
- [NVIDIA Jetson Thor (robotics SoC)](../nvidia/jetson-thor) -- edge AI
- [Apple A18 (iPhone 16 base)](./apple-a18) -- same-gen base
- [Architecture: NPU Mobile SoC](../../architectures/arch-npu) -- NPU classification
- [Dimensity 9400 Official Page](https://www.mediatek.com/products/smartphones/mediatek-dimensity-9400)
