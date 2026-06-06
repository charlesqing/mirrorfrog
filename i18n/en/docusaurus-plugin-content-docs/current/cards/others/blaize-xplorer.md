---
id: blaize-xplorer
title: Blaize Xplorer X1600 (Edge AI, 7K TOPS/W)
sidebar_label: Blaize Xplorer
description: "Blaize Xplorer X1600 detailed specs: 16nm, 160 TOPS INT8, 22W, 7K TOPS/W efficiency, Graph Streaming Processor architecture, extreme Edge AI efficiency."
keywords: [Blaize, Xplorer X1600, Edge AI, GSP, Graph Streaming Processor, 7K TOPS/W, 160 TOPS, 22W]
---

# Blaize Xplorer X1600 (Edge AI, 7K TOPS/W)

## Product Overview

**Blaize (formerly ThinCI)** is a US edge AI chip company, **founded 2011**, headquartered in Elk Grove, California. **Xplorer X1600** is its flagship edge AI inference chip, **2024 H1 released**, **TSMC 16nm**, **160 TOPS INT8**, **22W TDP**, **efficiency 7.27 TOPS/W** (**one of the highest-efficiency AI chips in the industry**). Based on proprietary **GSP (Graph Streaming Processor)** dataflow architecture, **fully programmable** (no CUDA black box).

**Strategic significance**: Blaize is **the efficiency leader in Edge AI**, competing with Hailo and Sima.ai, targeting **automotive ADAS, industrial vision, smart cities, retail analytics** etc. **2024 customers**: Motional (autonomous driving), VisionBank (smart cities), Argus (connected cars).

## Core Specs

| Item | Parameter |
|------|------|
| **Architecture** | Blaize GSP (Graph Streaming Processor) |
| **Process** | TSMC 16nm |
| **Compute Cores** | **2 GSP tiles** (each 8x10 streaming processing array) |
| **GSP Streams** | 16 parallel streams |
| **LPDDR4** | 4GB LPDDR4 |
| **Memory Bandwidth** | 51.2 GB/s |
| **INT8** | **160 TOPS** |
| **FP16** | 80 TFLOPS |
| **TDP** | **22 W** (**one of the lowest TDP high-TOPS AI chips**) |
| **Efficiency** | **7.27 TOPS/W** (H100 ~2.16, Hailo-8 ~1.4) |
| **Form Factor** | M.2 / PCIe / SoM (System on Module)|
| **Interconnect** | PCIe Gen3 x4 / USB 3.0 |
| **Mass Production** | 2024 H1 |
| **Unit Price** | ~$200-500 (SoM module)|

## GSP (Graph Streaming Processor) Architecture

| Dimension | Traditional GPU | Blaize GSP |
|------|----------|------------|
| **Execution Model** | Imperative (threads) | **Graph streaming (dataflow graph)** |
| **Parallelism** | Thread-level (1000s) | **Operator-level (streams)** |
| **On-chip Memory** | Shared L2 + registers | **Large SRAM (8MB per tile)** |
| **Dataflow** | Cache lines | **Graph streaming (zero cache miss overhead)** |
| **Power** | 70-700W | **22W** |
| **Efficiency** | 0.1-1 TOPS/W | **7.27 TOPS/W** |
| **Programmability** | CUDA | **Blaize Picasso (graphical)** |
| **Target** | Data center | **Edge AI** |

### GSP Tile Detail

```
Single GSP Tile:
- 8x10 streaming processing array (80 PEs)
- 8MB SRAM
- 16 parallel streams
- DMA engine

Xplorer X1600:
- 2 GSP Tiles
- Total 16MB SRAM
- 160 PEs
- 16 parallel streams
```

**Key advantages**:
- **Graph execution**: model compiled to graph, streamed directly on GSP
- **Zero cache overhead**: data flows inside SRAM, no HBM wait
- **High efficiency**: 22W achieving 160 TOPS (no HBM power overhead)

## 7K TOPS/W Efficiency Comparison

| Metric | Blaize Xplorer X1600 | Hailo-8 | NVIDIA L4 | NVIDIA Jetson Orin NX |
|------|----------------------|---------|-----------|------------------------|
| **INT8** | 160 TOPS | 26 TOPS | 485 TOPS | 100 TOPS |
| **TDP** | **22W** | 2.5W | 72W | 25W |
| **Efficiency** | **7.27 TOPS/W** | 10.4 TOPS/W | 6.7 TOPS/W | 4 TOPS/W |
| **Price** | ~$300 | ~$200 | ~$2,500 | ~$600 |
| **Software** | Blaize Picasso | HailoRT | CUDA | CUDA + JetPack |
| **Maturity** | early | mass production | mass production | mass production |

> **Blaize efficiency advantage**: **160 TOPS @ 22W** is **2.5x NVIDIA Jetson Orin NX 100 TOPS @ 25W** compute + 12% power savings. Key product for **industrial / automotive / smart city**.

## Software Stack Blaize Picasso

| Layer | Tool | Description |
|------|------|------|
| **AI framework** | **Blaize Picasso** | graphical model compilation (no-code)|
| | PyTorch / ONNX | model import |
| | TensorFlow | compatible |
| **Compiler** | **Picasso Compiler** | model -> GSP binary |
| **Runtime** | Blaize Runtime | Edge deployment |
| **Visualization** | **Picasso Studio** | graphical debugging + profiling |
| **Model Zoo** | ModelZoo | YOLOv8, ResNet, EfficientDet, MobileNet |

> Warning: **Ecosystem limitation**: Blaize Picasso **only 2-3 years old**, **operator coverage ~60%** (vs HailoRT 80%). **YOLOv5/v8 fully supported**, but LLM inference weak (only 7B INT4 quantized).

## Vendor Information

| Item | Content |
|------|------|
| **Company** | Blaize (formerly ThinCI) |
| **Founder** | Dinakar Munagala (CEO) + Satyam Dronamraju |
| **Founded** | 2011 (originally ThinCI, renamed Blaize 2020)|
| **Headquarters** | Elk Grove, California, USA |
| **Funding** | **$180M+** (Series C 2024-Q1 led by: Temasek + Franklin Templeton)|
| **Valuation (2025)** | ~$500M |
| **2024 Revenue** | ~$30M |
| **Employees** | ~300 |
| **Fab** | TSMC 16nm |
| **Customers** | **Motional** (autonomous driving), **VisionBank** (smart city), **Argus** (connected cars), **Blaize AI Edge** |
| **Status** | preparing SPAC IPO (2026-2027 expected)|

## Use Cases

- ✅ **Automotive ADAS** (multi-camera 8-12 streams simultaneous inference)
- ✅ **Industrial vision** (production line defect detection)
- ✅ **Smart cities** (multi-channel video analytics)
- ✅ **Retail analytics** (foot traffic + product recognition)
- ✅ **Robotics** (real-time perception)
- ✅ **Low-power AI** (battery-powered 22W)
- ❌ **LLM inference** (only 7B INT4 quantized)
- ❌ **Data center** (22W compute insufficient)
- ❌ **AI training** (inference only)

## Blaize Product Line

| Product | Released | Compute INT8 | TDP | Target |
|------|------|-----------|-----|------|
| **Xplorer X1600** | **2024 H1** | **160 TOPS** | **22W** | **Edge AI flagship** |
| Pathfinder | 2023 H1 | 80 TOPS | 12W | entry Edge |
| Xplorer S1 | 2025 H2 (est.) | 320 TOPS | 40W | high-end Edge |
| Xplorer A1 | 2026 (est.) | 640 TOPS | 80W | server Edge |

## Blaize vs Hailo-8 vs Jetson Orin

| Dimension | Blaize Xplorer X1600 | Hailo-8 | Jetson Orin NX |
|------|----------------------|---------|----------------|
| **Compute** | **160 TOPS** | 26 TOPS | 100 TOPS |
| **TDP** | 22W | 2.5W | 25W |
| **Efficiency** | 7.27 TOPS/W | 10.4 TOPS/W | 4 TOPS/W |
| **Multi-stream Video** | **12 streams 1080p YOLOv8** | 4 streams | 6 streams |
| **Software** | Picasso (new) | HailoRT (mature) | JetPack (mature) |
| **Price** | $300 | $200 | $600 |
| **Best For** | Multi-camera Edge | Single camera | Entry-level robotics |

> **Blaize killer feature**: **single chip 12 streams 1080p YOLOv8 real-time inference** (22W), the **ultimate HW solution for 100+ camera smart city deployments**.

## Key Features

- **GSP graph streaming architecture**: no HBM wait, ultra-high efficiency
- **22W TDP**: battery / solar powered deployment
- **160 TOPS**: largest 22W Edge AI compute in industry
- **12-stream YOLOv8**: smart city grade multi-camera
- **Drawbacks**: software ecosystem 2-3 years, weak LLM inference

## Related Products

- [Hailo-8 / Hailo-15](/docs/cards/others/hailo) - Edge AI comparison
- [Qualcomm AI 100](/docs/cards/others/qualcomm-ai100) - Edge AI comparison
- [Akida 2](/docs/cards/others/akida-2) - Neuromorphic Edge AI
- [NVIDIA Jetson Orin](/docs/cards/nvidia/jetson-orin) - Edge AI mainstream
- [NVIDIA Jetson Thor](/docs/cards/nvidia/jetson-thor) - next-gen Edge
- [NVIDIA L4](/docs/cards/nvidia/l4) - server Edge
- [Lightelligence Tianjic](/docs/cards/others/lightelligence) - silicon photonics
- [Esperanto ET-SoC-1](/docs/cards/others/esperanto-et-soc-1) - RISC-V
