---
id: wse-3
title: Cerebras WSE-3 (CS-3)
sidebar_label: Cerebras WSE-3
description: "Cerebras WSE-3 detailed specifications: 4 trillion transistors, 900,000 cores, 44GB SRAM, 125 PFLOPS FP16 sparse compute, launched 2024."
keywords: [Cerebras WSE-3, CS-3, wafer-scale AI chip, 125 PFLOPS, 5nm]
---

# Cerebras WSE-3 (CS-3)

## Overview

Cerebras WSE-3 was launched in **March 2024** as the third-generation wafer-scale AI chip. It features **4 trillion transistors** (~1.5× WSE-2), **900,000 cores**, **44GB on-chip SRAM**, and up to **125 PFLOPS FP16 sparse compute**. CS-3 addresses the core bottlenecks of large-model training: the memory wall and communication overhead.

## Core Specifications

| Item | Specification |
|------|------|
| **Architecture** | WSE-3 (Wafer-Scale Engine 3) |
| **Process Node** | TSMC 5nm |
| **Transistor Count** | **4 trillion** |
| **Core Count** | **900,000** |
| **On-chip SRAM** | **44 GB** |
| **FP16 Sparse Compute** | **125 PFLOPS** |
| **TDP (system)** | 15 kW |
| **Form Factor** | CS-3 complete system |

## WSE-2 vs WSE-3

| Metric | WSE-2 | WSE-3 | Improvement |
|------|-------|-------|------|
| Process Node | 7nm | 5nm | — |
| Transistors | 2.6 trillion | **4 trillion** | 1.5× |
| Core Count | 850,000 | **900,000** | 1.06× |
| SRAM | 40 GB | 44 GB | 1.1× |
| FP16 Sparse | ~62 PFLOPS | **125 PFLOPS** | 2× |

## Vendor Information

| Item | Details |
|------|------|
| **Manufacturer** | Cerebras Systems |
| **Official Website** | https://www.cerebras.net |
| **Product Page** | https://www.cerebras.net/product-cs-3/ |
| **Release** | March 2024 |
| **Cloud Rental** | https://cerebras.net/ai-cloud/ |

## Key Features

- **CS-3 System**: 15kW liquid-cooled complete system
- **Cluster Solution**: Cerebras Cluster, multiple CS-3 interconnected
- **Weight Streaming**: No memory wall
- **Supports GPT-class model training**

## Use Cases

- Giant LLM training (no model parallelism)
- Research institutions (Genentech, Argonne National Laboratory)
- Pharmaceutical and materials science

## Related Products

- [Cerebras WSE-2](/docs/cards/cerebras/wse-2) - Previous generation
- [NVIDIA B200](/docs/cards/nvidia/b200) - Mainstream flagship
- [Tesla Dojo](/docs/cards/others/tesla-dojo) - Another wafer-scale approach
