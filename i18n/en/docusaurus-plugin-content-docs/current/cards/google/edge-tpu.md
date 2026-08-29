---
id: edge-tpu
title: Google Edge TPU (Coral 4 TOPS Edge Inference ASIC)
sidebar_label: Edge TPU
description: "Google Edge TPU detailed specs: 4 TOPS INT8, 2 TOPS/W, M.2/USB/PCIe multiple form factors, TensorFlow Lite, Coral USB Accelerator $60 entry point."
keywords: [Google Edge TPU, Edge TPU, Coral, 4 TOPS, 2 TOPS/W, M.2 Accelerator, TensorFlow Lite]
---

# Google Edge TPU (Coral 4 TOPS Edge Inference)

## Overview

**Google Edge TPU** (branded **Coral**) is an **edge AI inference ASIC** released by Google in **March 2019**, designed specifically for **TensorFlow Lite** model inference on edge devices with low power consumption and low latency. Delivering **4 TOPS INT8** at **2 TOPS/W** (0.5W/TOPS), it comes in multiple form factors: **Coral USB Accelerator** (USB 3.0 dongle), **M.2 Accelerator A+E key** (22×30mm), **M.2 Accelerator B+M key** (22×80mm), **Mini PCIe Accelerator** (30×26.8mm), **PCIe Accelerator** (standard PCIe card), **Dual Edge TPU M.2** (2× 4 TOPS = 8 TOPS), and **Dev Board** (complete SoC + Edge TPU Raspberry Pi-sized development board). The **Coral USB Accelerator at $59.99** is the world's most affordable and accessible entry-level AI inference device. It achieves **400 FPS** on MobileNet V2 (at 0.5W/TOPS).

## Core Specifications

| Item | Spec |
|------|------|
| **Architecture** | **Edge TPU ASIC** (Google proprietary edge inference) |
| **Process** | Estimated 28nm |
| **TOPS** | **4 TOPS INT8** (single chip) / **8 TOPS** (Dual TPU module) |
| **Energy Efficiency** | **2 TOPS/W** (0.5W/TOPS) |
| **Data Types** | INT8 fixed-point (no FP16/FP32 training) |
| **Model Format** | **TensorFlow Lite** (only, PyTorch/ONNX require conversion) |
| **MobileNet V2 Performance** | **400 FPS** (INT8 quantized) |
| **PCIe Interface** | **PCIe Gen 2 x1** (single TPU) / **2× PCIe Gen 2 x1** (dual TPU) |
| **USB Interface** | USB 3.0 (Coral USB Accelerator) |
| **M.2 Form Factor** | A+E key (M.2-2230, 22×30mm) or B+M key (M.2-2280, 22×80mm) |
| **Mini PCIe** | 30×26.8 mm half-size |
| **PCIe Card** | Standard PCIe short card |
| **Dual M.2** | 22×30 mm M.2-2230-D3-E (dual TPU sharing M.2 slot) |
| **Coral Dev Board** | NXP i.MX 8M SoC (4-core A53) + Edge TPU + GPU + Wi-Fi + Bluetooth |
| **Operating Temperature** | 0-50°C (Coral USB) / -40-85°C (industrial) |
| **Operating Systems** | Linux (Ubuntu, Raspbian, Linux Mendel for Dev Board), Windows 10, macOS |
| **Launch Date** | **March 2019** (Coral Dev Board) / July 2019 (Coral USB Accelerator) |
| **Coral USB Accelerator** | **$59.99** |
| **Coral M.2 Accelerator A+E** | **$24.99** |
| **Coral M.2 Accelerator B+M** | **$24.99** |
| **Coral Mini PCIe Accelerator** | **$24.99** |
| **Coral Dual Edge TPU M.2** | **$49.99** |
| **Coral Dev Board** | **$149.99** (discontinued, 2024) |

## Comparison with NVIDIA Jetson Nano

| Metric | Edge TPU Coral | Jetson Nano | Note |
|------|----------------|-------------|------|
| TOPS (INT8) | **4** | 0.47 (FP16) | **8.5×** |
| Energy Efficiency (TOPS/W) | **2** | 0.05 (FP16) | **40×** |
| Price | **$24.99** | $149 (4GB) | **6× cheaper** |
| Power | 0.5W | 5-10W | **10× lower** |
| Model Format | TF Lite | TF/PyTorch/ONNX | TPU limited |
| Training Support | None | Supported | Nano general-purpose |
| Interface | M.2/USB/PCIe | SoC (full board) | Coral accelerator card |
| MLPerf MobileNet V2 | 400 FPS | 64 FPS | **6.3×** |

## Measured Performance

| Model | Edge TPU (4 TOPS) | Performance (FPS) | Latency (ms) |
|------|-------------------|-----------|----------|
| MobileNet V1 (224) | 4 TOPS | 700+ | < 2ms |
| **MobileNet V2 (224)** | 4 TOPS | **400** | 2.5ms |
| MobileNet V3-Small | 4 TOPS | 250 | 4ms |
| EfficientNet B0 | 4 TOPS | 130 | 7.7ms |
| Inception V4 | 4 TOPS | 23 | 43ms |
| ResNet-50 (v1) | 4 TOPS | 50 | 20ms |
| SSD MobileNet V2 (object detection) | 4 TOPS | 60 | 17ms |
| PoseNet (pose estimation) | 4 TOPS | 100 | 10ms |
| DeepLab V3 (semantic segmentation) | 4 TOPS | 30 | 33ms |

> **Limitation**: The Edge TPU **only supports INT8 quantized models** in **TensorFlow Lite format**. PyTorch / ONNX / MXNet native models are not supported (must be converted to TFLite first). Training is not supported, inference only.

## Use Cases

- **Embedded device prototyping** (Coral USB Accelerator $60 plug-and-play)
- **Industrial IoT edge gateways** (M.2 form factor integrated into industrial PCs)
- **Smart home** (home voice assistants, pet recognition, motion detection)
- **Retail smart cameras** (footfall counting, heat map analysis)
- **Smart cameras** (person detection, license plate recognition, intrusion alerts)
- **Wearable devices** (low-power AI inference)
- **Education/maker** (Raspberry Pi 4 + Coral USB = complete AI development platform)
- **Smart agriculture** (pest/disease recognition, fruit counting)
- **Assisted driving** (blind spot detection, driver monitoring assistance)

## Vendor Information

| Item | Detail |
|------|------|
| **Vendor** | **Google LLC** (Mountain View, USA) |
| **Product Brand** | **Coral** (coral.ai) |
| **Design** | Google Research edge AI team |
| **Foundry** | Estimated 28nm TSMC or Samsung |
| **Software Stack** | **TensorFlow Lite Runtime**, **Edge TPU Compiler** (quantize TFLite → Edge TPU compilation) |
| **AI Framework** | **TensorFlow / TensorFlow Lite** (no native PyTorch/ONNX support) |
| **Price Tiers** | USB $59.99 / M.2/Mini PCIe $24.99 / Dual M.2 $49.99 / Dev Board $149.99 |
| **Availability** | 30+ countries: US, Canada, EU, Japan, Korea, Taiwan, India, etc. |
| **Coral Dev Board** | EOL 2024 (replaced by Raspberry Pi + USB solution) |
| **2025 Status** | Still purchasable, but Google's AI focus has shifted to **Cloud TPU** + **Gemini Nano on-device cloud collaboration** |

## Key Features

- **4 TOPS INT8** single chip / **8 TOPS** dual TPU module
- **2 TOPS/W excellent energy efficiency** (0.5W/TOPS)
- **6 product form factors** (USB / M.2 A+E / M.2 B+M / Mini PCIe / PCIe / Dual M.2)
- **Plug-and-play** (Linux auto-detects as PCIe device)
- **TensorFlow Lite first-class citizen** (best compatibility)
- **Coral USB $59.99** (world's most affordable AI inference device)
- **Low power** (entire board 2-5W)
- **Industrial grade** (-40-85°C operating temperature, industrial version)
- **Complete ecosystem** (coral.ai provides model library + compiler + runtime)
- **PCIe Gen 2 x1** (standard interface, works even on legacy industrial PCs)

## Related Cards

- [Google TPU v4 (Data Center Training)](/docs/cards/google/tpu-v4) — Same-vendor cloud training
- [Google TPU v5e (Data Center Training-Lite)](/docs/cards/google/tpu-v5e) — Training lite
- [Google TPU v6e (DC Inference)](/docs/cards/google/tpu-v6e) — Data center inference
- [Google TPU 8i (DC Inference Flagship)](/docs/cards/google/tpu-8i) — Latest inference
- [Hailo-15 (7-20 TOPS Smart Camera)](/docs/cards/others/hailo-15) — Competitor
- [Hailo-8L (13 TOPS Edge)](/docs/cards/others/hailo) — Same-gen competitor
- [NVIDIA Jetson Orin (40-275 TOPS Edge AI)](/docs/cards/nvidia/jetson-orin) — High-end edge comparison
- [Blaize Xplorer (160 TOPS)](/docs/cards/others/blaize-xplorer) — Edge competitor
- [Mobilint Regulus (32 TOPS Korea)](/docs/cards/others/mobilint) — Same-tier edge
- [Architecture: TPU Edge Edition](/docs/architectures/arch-tpu) — Edge TPU concept
- [Coral Official](https://www.coral.ai/)
