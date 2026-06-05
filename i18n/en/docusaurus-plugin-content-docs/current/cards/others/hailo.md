---
id: hailo
title: Hailo-8 / Hailo-8L / Hailo-15
sidebar_label: Hailo-8 / 15
description: "Hailo-8/Hailo-8L/Hailo-15 edge AI accelerator detailed specs: 26-40 TOPS INT8, low power, vision AI inference."
keywords: [Hailo-8, Hailo-8L, Hailo-15, edge AI, vision inference, 26 TOPS, 40 TOPS]
---
 
# Hailo-8 / Hailo-8L / Hailo-15 Edge AI Accelerator
 
## Overview
 
Hailo is an **edge AI inference accelerator** from Israel's **Hailo Technologies**, designed for **computer vision** and **multimodal LLM**. **Hailo-8** (released 2019, 26 TOPS) has been commercially deployed as an alternative to **NVIDIA Jetson Orin**, in Raspberry Pi AI Kits, smart cameras, industrial vision, and more.
 
The latest product is **Hailo-15** (released 2024, integrating VPU + AI accelerator, single-chip vision AI processor).
 
## Product Line Comparison
 
| Item | Hailo-8 | Hailo-8L | Hailo-15-15 | Hailo-15-30 |
|------|---------|----------|-------------|-------------|
| **INT8 Compute** | 26 TOPS | 13 TOPS | 20 TOPS | 40 TOPS |
| **Process** | TSMC 14nm | TSMC 14nm | TSMC 7nm | TSMC 7nm |
| **TDP** | 2.5 W | 1.5 W | 6 W | 9 W |
| **Efficiency** | 10.4 TOPS/W | 8.7 TOPS/W | 3.3 TOPS/W | 4.4 TOPS/W |
| **Memory** | 4GB LPDDR4 | 4GB LPDDR4 | Integrated VPU + 4GB | Integrated VPU + 8GB |
| **Form Factor** | M.2 / mPCIe / BGA | M.2 / BGA | SoC (incl. ISP/VPU) | SoC |
| **Launch** | 2019 | 2020 | 2024 | 2024 |
 
> **Hailo-15** integrates **ISP (Image Signal Processor) + VPU (Video Encode/Decode) + AI accelerator**, replacing multi-chip solutions with a single chip.
 
## Architecture Highlights
 
### Dataflow Architecture
- Cerebras WSE-like **spatial architecture**, weights resident in on-chip SRAM
- No external memory access latency (CV models fully resident)
- **Deterministic latency**: Single-image inference latency < 5 ms (ResNet-50)
 
### Model Compression
- Hailo **Dataflow Compiler** auto-quantization (INT8/INT4/mixed precision)
- Supports pruning, layer fusion, memory optimization
- Model compression rate ~3-5x (FP32 -> INT8) with < 1% accuracy loss
 
### Multi-Model Parallelism
- Single card can run **multiple models** simultaneously (e.g., detection + classification + segmentation)
- Hardware resource partitioning with strong isolation
 
## Software Ecosystem
 
### Toolchain
- **Hailo Dataflow Compiler** (HDF -> HAR conversion)
- **Hailo Model Zoo** (30+ pre-trained models, including YOLOv5/v8, ResNet, EfficientNet)
- **HailoRT** (runtime, C/C++/Python API)
- **Hailo Python API** (gRPC-style)
 
### Frameworks
- **TensorFlow / PyTorch / ONNX** (export then compile)
- **GStreamer** (video stream integration)
- **ROS** (robotics)
 
### Operating Systems
- Linux (ARM/x86)
- Windows (select models)
- Integrated with **NVIDIA JetPack** (GPU acceleration alternative)
 
## Deployment Examples
 
- **Hailo-8 M.2 + Raspberry Pi 5** — 13 TOPS AI Kit ($70)
- **Smart cameras** (Axis, Qihoo 360) — edge video analytics
- **Industrial vision** (production line defect detection)
- **Autonomous driving** (Tier 1 supplier ADAS forward-facing)
- **Robotics** (service robot vision SLAM)
 
## Performance Benchmarks (YOLOv5s 640x640)
 
| Device | FPS | Latency | TDP |
|------|-----|------|-----|
| **Hailo-8** | 600 FPS | 1.7 ms | 2.5 W |
| **Hailo-8L** | 300 FPS | 3.3 ms | 1.5 W |
| **NVIDIA Jetson Orin Nano 8GB** | 125 FPS | 8 ms | 7-15 W |
| **NVIDIA Jetson Xavier NX** | 90 FPS | 11 ms | 10-20 W |
| **CPU (i7-12700H)** | 25 FPS | 40 ms | 45 W |
 
> Hailo-8 on YOLOv5s is **6.7x faster than Jetson Xavier NX, with 4-8x lower power**.
 
## Vendor Information
 
| Item | Details |
|------|------|
| **Vendor** | Hailo Technologies (Israel) |
| **Product Page** | https://hailo.ai/ |
| **Pricing** | Hailo-8 M.2: $200 / Hailo-8L: $150 / Hailo-15 Kit: $300+ |
| **Funding** | Series C $136M (2023-04, total $340M) |
| **Target Market** | Edge AI, smart cameras, industrial vision, robotics |
 
## Use Cases
 
- ✅ **Edge vision AI inference** (cameras, robots)
- ✅ Industrial vision (production line inspection)
- ✅ ADAS (Advanced Driver Assistance Systems)
- ✅ Edge LLM (Phi-3, Llama 2 7B quantized)
- ❌ Large model training
- ❌ Data center inference (NV H100 better perf/watt)
 
## Related Cards
 
- [NVIDIA Jetson Orin](/docs/cards/nvidia/jetson-orin) - Comparable edge AI
- [NVIDIA Jetson Thor](/docs/cards/nvidia/jetson-thor) - Next-gen edge
- [Google TPU v6e](/docs/cards/google/tpu-v6e) - Data center comparison
