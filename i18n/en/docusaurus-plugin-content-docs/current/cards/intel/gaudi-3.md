---
id: gaudi-3
title: Intel Gaudi 3
sidebar_label: Intel Gaudi 3
description: "Intel Gaudi 3 detailed specifications: 128GB HBM2e, 1,835 TFLOPS BF16, 900W TDP, 24× 200GbE integrated NIC, competing with NVIDIA H100/H200."
keywords: [Intel Gaudi 3, Habana, HBM2e, AI training ASIC, cost-effective GPU]
---

# Intel Gaudi 3 (Habana Labs)

## Overview

Intel Gaudi 3 was announced in April 2024 (Intel Vision Conference) as a comprehensive upgrade over Gaudi 2. Built on a **5nm process**, it features **128GB HBM2e** memory, **1,835 TFLOPS BF16 / FP8 compute**, and **24× 200GbE RDMA integrated NICs**. According to Intel's official data, Gaudi 3 is **50% faster** than H100 in LLM training, with 50% higher inference throughput and 40% better energy efficiency.

## Core Specifications

| Item | Specification |
|------|------|
| **Architecture** | Gaudi 3 (Habana 5th Gen) |
| **Process Node** | TSMC 5nm |
| **Compute Engines** | **64× TPC** (8 per group, 8 groups) |
| **Matrix Engines** | **8× MME** (64,000 parallel ops per MME) |
| **Memory** | **128 GB HBM2e** |
| **Memory Bandwidth** | **3.67 TB/s** (+50% vs Gaudi 2) |
| **On-die SRAM** | 96 MB (12.8 TB/s bandwidth) |
| **BF16 Matrix** | **1,835 TFLOPS** (4× Gaudi 2) |
| **FP8 Matrix** | **1,835 TFLOPS** |
| **BF16 Vector** | 28.7 TFLOPS |
| **TDP** | **900 W (air-cooled)** / 1,200 W (liquid) |
| **Network** | **24× 200GbE RoCE** (integrated NIC) |
| **PCIe** | Gen 5 x16 |
| **Form Factor** | OAM 2.0 (HL-325L) / PCIe Add-in Card (HL-338) |

## Gaudi 2 vs Gaudi 3

| Metric | Gaudi 2 | Gaudi 3 | Improvement |
|------|---------|---------|------|
| Process | 7nm | 5nm | — |
| Memory | 96 GB | 128 GB | +33% |
| Bandwidth | 2.46 TB/s | 3.67 TB/s | +49% |
| BF16 Compute | 432 TFLOPS | 1,835 TFLOPS | **4.2×** |
| Network | 24× 100GbE | 24× 200GbE | 2× |
| TDP | 600 W | 900 W | +50% |
| PCIe | Gen 4 | Gen 5 | 2× |

## Vendor Information

| Item | Details |
|------|------|
| **Manufacturer** | Intel Corporation (Habana Labs) |
| **Official Website** | https://habana.ai |
| **Product Page** | https://habana.ai/products/gaudi3/ |
| **Whitepaper** | https://www.intel.com/content/www/us/en/content-details/817486/intel-gaudi-3-ai-accelerator-white-paper.html |
| **Release** | April 2024 (OEM Q2, PCIe card Q4) |

## Key Features

- **Integrated 24× 200GbE RoCE**: 1,200 GB/s bidirectional bandwidth
- **Open Ethernet standard**: Avoids vendor lock-in
- **MLPerf performance validated**
- **PyTorch optimized**: Only 3 lines of code change needed to migrate from H100
- **vs H200**: Llama 2 7B/70B, Falcon 180B inference 30% faster

## Use Cases

- LLM training and inference
- Multimodal AI
- Enterprise GenAI (cost-sensitive)
- Large-scale distributed training

## Related Products

- [Intel Gaudi 2](/docs/cards/intel/gaudi-2) - Previous generation
- [NVIDIA H100](/docs/cards/nvidia/h100) - Contemporary competitor
- [NVIDIA H200](/docs/cards/nvidia/h200) - Direct memory comparison
- [AMD MI300X](/docs/cards/amd/mi300x) - Larger memory
