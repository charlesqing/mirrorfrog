---
id: wse-2
title: Cerebras WSE-2 (CS-2)
sidebar_label: Cerebras WSE-2
description: "Cerebras WSE-2 detailed specifications: 2.6 trillion transistors, 850,000 cores, 40GB on-chip SRAM, wafer-scale AI training chip."
keywords: [Cerebras WSE-2, CS-2, wafer-scale chip, AI training supercomputer, Weight Streaming]
---

# Cerebras WSE-2 (CS-2)

## Overview

The Cerebras WSE-2 (Wafer-Scale Engine 2), released in 2021, is the **world's largest single-chip processor**. It packs **2.6 trillion transistors**, **850,000 AI cores**, and **40GB on-chip SRAM** (no HBM), all on a single wafer. WSE-2 solves the memory wall problem of traditional GPUs but requires a complete CS-2 system.

## Core Specifications

| Item | Parameter |
|------|-----------|
| **Architecture** | WSE-2 (Wafer-Scale Engine) |
| **Process** | TSMC 7nm |
| **Transistors** | **2.6 trillion** |
| **Cores** | **850,000** |
| **On-Chip SRAM** | **40 GB** |
| **On-Chip Interconnect** | 220 PB/s |
| **TDP (System)** | 15 kW |
| **Form Factor** | CS-2 complete system |

## Vendor Information

| Item | Details |
|------|------|
| **Manufacturer** | Cerebras Systems |
| **Website** | https://www.cerebras.net |
| **Product Page** | https://www.cerebras.net/product-cs-2/ |
| **Software** | https://www.cerebras.net/software/ |
| **Documentation** | https://docs.cerebras.net |

## Key Features

- **Single wafer-scale chip**: no stitching
- **Extremely high core density**: ideal for sparse computation
- **Weight Streaming**: model weights streamed on-chip
- **No model parallelism needed**: single chip trains large models

## Use Cases

- Large model training (no sharding needed)
- LLM pre-training
- Scientific computing

## Related Product Comparisons

- [Cerebras WSE-3](/docs/cards/cerebras/wse-3) - Successor
- [NVIDIA H100](/docs/cards/nvidia/h100) - Mainstream alternative
- [Tesla Dojo](/docs/cards/others/tesla-dojo) - Another wafer-scale approach
