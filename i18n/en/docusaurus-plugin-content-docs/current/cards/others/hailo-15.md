---
id: hailo-15
title: Hailo-15 (7-20 TOPS Smart Camera AI Vision SoC)
sidebar_label: Hailo-15
description: "Hailo-15 detailed specs: 7/11/20 TOPS INT8 vision AI SoC, AI-ISP noise reduction < 0.01 LUX, 4K30, 5W, quad-core ARM A53, Qwen 2.5-VL 3B VLM, smart camera applications."
keywords: [Hailo-15, Hailo, AI vision processor, 20 TOPS, smart camera, AI-ISP, 4K30, Qwen 2.5-VL]
---
 
# Hailo-15 (7-20 TOPS Smart Camera SoC)
 
## Overview
 
**Hailo-15** is an **AI Vision Processor** series launched by Israel's **Hailo AI** in 2024-03, designed for **smart camera** applications. **Three models**: **Hailo-15H** (20 TOPS flagship, < 5W), **Hailo-15M** (11 TOPS mid-range), **Hailo-15L** (7 TOPS entry, < 3W). Integrates **AI-ISP Gen3** (extreme low-light < 0.01 LUX noise reduction without IR LED), **4K30 H.265 video encoding**, **12MP ISP**, **structure-defined dataflow NN Core**, **quad-core ARM A53**. Runs **Qwen 2.5-VL 3B VLM** and other large models, a single SoC handling "AI-enhanced imaging + video analytics" dual workloads. A benchmark for smart transportation, industrial vision, security surveillance, and ADAS vision.
 
## Core Specifications
 
| Item | Spec |
|------|------|
| **Architecture** | Hailo **Structure-Defined Dataflow NN Core** + ARM A53 application processor |
| **Models** | **Hailo-15H** (20 TOPS) / **Hailo-15M** (11 TOPS) / **Hailo-15L** (7 TOPS) |
| **Process** | Estimated 12nm or 7nm |
| **CPU** | Quad-core ARM Cortex-A53 @ 1.3 GHz (H/M) / 1.1 GHz (L), 10-12 k DMIPs |
| **DSP** | Vector DSP 256 MACs @ 700-750 MHz, 350-380 GOPS |
| **NN Core** | Hailo patented structure-defined dataflow architecture, 7-20 TOPS INT8 |
| **AI-ISP** | **Gen3 AI-ISP**, < 0.01 LUX extreme low-light NR (no IR LED needed) |
| **ISP** | 12MP resolution, **600 Mpixel/s** pixel rate |
| **Video Encode** | 4K30 / 4K60 H.265/HEVC + H.264/AVC, multi-stream |
| **Video Decode** | Multi-stream H.265/H.264 |
| **HDR** | High dynamic range, 3-exposure fusion, WDR low-light processing |
| **Noise Reduction** | 2DNR + 3DNR + Chroma NR |
| **Image Stabilization** | EIS digital + lens distortion correction + flip/rotate |
| **Memory** | LPDDR4/4X 32-bit @ 4266 MT/s (H) / 3200 MT/s (L) |
| **Storage** | QSPI + SDIO 3.0 + eMMC 5.1 (up to HS200) |
| **PCIe** | PCIe Gen 3.0 x2 |
| **Wired Interfaces** | USB 3.1 Gen 2, GbE (1000 Mbit/s), I2C x4, I2S x4, SPI x4, CAN |
| **Wireless** | SOM integrated 802.11 a/b/g/n/ac + BT 5.0 |
| **Security** | Secure Boot, Secure Debug, hardware encryption, TrustZone, TRNG, Firewall |
| **Power** | **< 5W** (H) / **< 3W** (L) |
| **Package** | FCCSP 15x15 mm (H/M) / 13x13 mm (L) |
| **Operating Temp** | -40C ~ +85C (industrial grade) |
| **SOM Size** | 47x30 mm (Hailo-15 SOM) |
| **Launch Date** | **2024-03** (Mouser, Digi-Key availability) |
| **Hailo-15 SOM 20 TOPS Price** | **~$250** (Mouser channel) |
 
## vs Hailo-8 / Hailo-8L
 
| Metric | Hailo-15H | Hailo-8L | Improvement |
|------|-----------|----------|------|
| TOPS | **20** | 13 | +54% |
| Integration | **SoC (CPU + ISP + AI)** | Pure AI accelerator | Fully integrated |
| AI-ISP | **Gen3** (< 0.01 LUX) | None | All-new gain |
| Video Encode | **4K30 H.265** | External | All-new gain |
| Memory | LPDDR4X 32-bit | DDR4 | LPDDR4X upgrade |
| Power | < 5W | ~2.5W | Slightly higher (more SoC) |
| Application | All-in-one smart camera | Camera + host split | Integrated |
| Price (SOM) | ~$250 | ~$150 | +$100 |
| VLM Support | **Qwen 2.5-VL 3B** | Vision only | LLM-class |
 
## On-Device AI Performance
 
| Model | Quantization | Performance | Notes |
|------|------|------|------|
| MobileNet V3 | INT8 | 1000+ FPS | Extremely fast |
| YOLOv8n | INT8 | 200+ FPS | Object detection |
| ResNet-50 | INT8 | 500+ FPS | Classification |
| **Qwen 2.5-VL 3B VLM** | INT8 | **5-8 tok/s** | Visual Q&A |
| Person detection + tracking | INT8 | 30 FPS | 4K |
| License plate recognition | INT8 | 50+ FPS | Multi-stream |
| Face recognition | INT8 | 100+ FPS | 1:N search |
| Fall detection | INT8 | 30 FPS | Elderly care |
 
> **Qwen 2.5-VL 3B on-device deployment**: Hailo-15H is among the first smart camera SoCs to support **3B visual language model** real-time inference (< 5W power). In security camera scenarios, it enables "what happened?" style VLM reasoning, upgrading traditional "object detection" to "scene understanding".
 
## Use Cases
 
- **Smart security cameras** (Hikvision, Dahua, Axis, Bosch OEM)
- **Traffic monitoring** (violation capture, license plate recognition, flow statistics)
- **Industrial vision** (defect detection, AOI automated optical inspection)
- **ADAS** (DMS driver monitoring, OMS occupant monitoring)
- **Smart retail** (foot traffic analysis, heatmaps)
- **Robot vision** (home and commercial robot cameras)
- **Access control / attendance** (face recognition, ReID)
 
## Vendor Information
 
| Item | Info |
|------|------|
| **Vendor** | **Hailo AI** (Tel Aviv, Israel, founded 2017) |
| **Design** | Hailo Israel R&D |
| **Fab** | Estimated TSMC |
| **Software Stack** | **Hailo Dataflow Compiler** (TensorFlow / ONNX / PyTorch conversion), **HailoRT** (runtime), **Hailo Model Zoo** (pre-trained model library) |
| **AI Frameworks** | TensorFlow, PyTorch, ONNX, OpenVINO, Keras |
| **Pricing** | Hailo-15H SOM 20 TOPS **~$250**, Hailo-15L SOM 7 TOPS **~$130** |
| **OEM Customers** | Hikvision, Dahua, Axis, Qihoo 360, LenelS2 |
| **Competitors** | Ambarella CV series, Synaptics VS series, Novatek NT98562 |
 
## Key Features
 
- **Three-model gradient**: H (20) / M (11) / L (7) TOPS covering premium to entry
- **AI-ISP Gen3** (extreme low-light < 0.01 LUX, no IR LED cost savings)
- **4K30 H.265 video encoding** (built-in)
- **12MP ISP** (single chip supports 4K camera)
- **Structure-defined dataflow NN Core** (Hailo patented)
- **< 5W (H) / < 3W (L)** ultra-low power (PoE Type 1 Class 2 sufficient)
- **Quad-core ARM A53** application processor (Linux/RTOS for general apps)
- **-40C ~ +85C** industrial grade (outdoor extreme weather capable)
- **47x30 mm SOM** (ultra-compact, easy integration)
- **Qwen 2.5-VL 3B VLM** on-device inference support
- **PCIe Gen 3.0 x2** high-speed interface
- **Complete software ecosystem** (Dataflow Compiler + HailoRT + Model Zoo)
 
## Related Cards
 
- [Hailo-8L (13 TOPS Edge AI)](./hailo) — Previous-gen entry
- [NVIDIA Jetson Orin (40-275 TOPS Edge AI)](../nvidia/jetson-orin) — High-end edge comparison
- [Blaize Xplorer (160 TOPS Edge)](./blaize-xplorer) — Same-gen edge
- [Mobilint Regulus (32 TOPS Korea)](./mobilint) — Same-tier edge
- [Hailo-15 Official Introduction](https://hailo.ai/products/ai-vision-processors/hailo-15h-ai-vision-processor/)
- [Architecture: Edge AI](../../architectures/arch-npu) — NPU architecture
