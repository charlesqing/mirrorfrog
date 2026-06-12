---
id: rtx-pro-6000-blackwell
title: NVIDIA RTX Pro 6000 Blackwell
sidebar_label: RTX Pro 6000 Blackwell
description: NVIDIA RTX Pro 6000 Blackwell professional GPU - Blackwell architecture, 96GB GDDR7 ECC, 125 TFLOPS FP32, 600W TDP, premier choice for AI workstations.
keywords: [RTX Pro 6000 Blackwell, Blackwell, professional GPU, GDDR7, AI workstation, ECC memory]
---

# NVIDIA RTX Pro 6000 Blackwell#

## Product Overview#

**NVIDIA RTX Pro 6000 Blackwell** is a professional workstation GPU based on the **Blackwell architecture**, released by NVIDIA in **March 2025**. It is the successor to the RTX 6000 Ada. It features **96GB GDDR7 ECC memory** (first adoption of GDDR7 in professional cards), **125 TFLOPS FP32** compute, and **752 5th-generation Tensor Cores**, delivering up to **4,000 TFLOPS FP4** inference compute. It supports **PCIe 5.0** and **Multi-Instance GPU (MIG)**, making it a flagships workstation card for **AI development, large model training, and professional graphics**.

**Strategic Position**: In NVIDIA's professional GPU product line, the RTX Pro 6000 Blackwell is the **flagship model for 2025-2026**, replacing the RTX 6000 Ada. Compared to the consumer-grade RTX 5090, it offers **double the memory capacity** (96GB vs 32GB), supports **ECC memory** and **professional drivers**, making it the preferred choice for **enterprise AI workstations**.

## Core Specifications#

| Item | Parameter |
|------|-----------|
| **Architecture** | NVIDIA Blackwell 2.0 (GB202) |
| **Process** | TSMC 4nm |
| **Transistors** | 92.2 billion |
| **Die Size** | 750 mm² |
| **CUDA Cores** | 24,064 |
| **Tensor Cores** | 752 (5th-generation) |
| **RT Cores** | 188 (4th-generation) |
| **FP32** | 125 TFLOPS |
| **FP4 Tensor Core** | 4,000 TFLOPS (inference) |
| **Memory** | **96 GB GDDR7 ECC** |
| **Memory Bandwidth** | 1.79 TB/s (512-bit) |
| **TDP** | 600W (server version) / 300W (Max-Q version) |
| **PCIe** | Gen 5 x16 |
| **ECC** | Supported |
| **MIG** | Supported (up to 4 instances) |
| **Launch Date** | March 2025 |
| **Price** | Approximately $8,000-$10,000 (estimated) |

## Comparison with RTX 6000 Ada#

| Metric | RTX Pro 6000 Blackwell | RTX 6000 Ada | Improvement |
|--------|------------------------|--------------|-------------|
| Architecture | Blackwell 2.0 | Ada Lovelace | New generation |
| Process | TSMC 4nm | TSMC 4N | Similar |
| Memory | 96GB GDDR7 | 48GB GDDR6 | +100% |
| Bandwidth | 1.79 TB/s | 960 GB/s | +86% |
| FP32 | 125 TFLOPS | 91.1 TFLOPS | +37% |
| FP8 | ~2,000 TFLOPS (estimated) | 1,458 TFLOPS | +37% |
| TDP | 600W | 300W | +100% |
| PCIe | Gen 5 | Gen 4 | Upgraded |

## Version Differences#

| Version | TDP | Cooling | Suitable Scenarios |
|---------|-----|---------|---------------------|
| **Server Version** | 600W | Passive cooling | Data center, supports 8-card parallel |
| **Workstation Version** | 600W | Dual-fan active cooling | Small studios, supports 1-4 card config |
| **Max-Q Version** | 300W | Single turbo fan | Mobile workstation, ~15-20% performance loss |

## Key Features#

- **96GB GDDR7 ECC Memory**: First adoption of GDDR7 in professional cards, capacity is 2× that of RTX 6000 Ada
- **5th-Generation Tensor Cores**: Supports FP4 inference, delivering up to 4,000 TFLOPS
- **PCIe 5.0**: Bandwidth doubled (vs PCIe 4.0)
- **Multi-Instance GPU (MIG)**: Can partition single GPU into 4 independent instances, each with up to 24GB memory
- **NVIDIA Confidential Computing**: First professional GPU to support confidential computing
- **8th-Gen NVENC + 6th-Gen NVDEC**: H.264 decode throughput improved 2×, adds 4:2:2 H.264 and HEVC decode support

## Manufacturer Information#

| Item | Content |
|------|---------|
| **Company** | NVIDIA Corporation |
| **Official Website** | https://www.nvidia.com |
| **Product Page** | https://www.nvidia.com/zh-tw/products/workstations/professional-desktop-gpus/rtx-pro-6000-family/ |
| **Launch** | March 2025 |
| **Architecture** | Blackwell 2.0 |

## Suitable Scenarios#

- ✅ **AI development workstations** (model training, fine-tuning, inference)
- ✅ **Large model local inference** (70B+ usable)
- ✅ **Professional graphics** (CAD, 3D rendering)
- ✅ **Data science** (with ECC memory)
- ✅ **Video editing and encoding** (8th-gen NVENC)

## Related Products Comparison#

- [NVIDIA RTX 6000 Ada](/docs/cards/nvidia/rtx-6000-ada) - Previous generation
- [NVIDIA RTX 5090](/docs/cards/nvidia/rtx-5090) - Consumer-grade version (32GB memory)
- [NVIDIA L40S](/docs/cards/nvidia/l40s) - Data center version
- [NVIDIA L4](/docs/cards/nvidia/l4) - Low-power data center version

## External Links#

- [NVIDIA Official Product Page](https://www.nvidia.com/zh-tw/products/workstations/professional-desktop-gpus/rtx-pro-6000-family/)
- [TechPowerUp GPU Database](https://www.techpowerup.com/gpu-specs/rtx-pro-6000-blackwell.c4272)
- [Baidu Baike](https://baike.baidu.com/item/NVIDIA%20RTX%20PRO%206000%20Blackwell%20GPU/67184750)
