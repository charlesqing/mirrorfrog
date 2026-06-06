---
id: training-wafer
title: Wafer-Scale AI Training Supercomputers (Cerebras, Tesla Dojo)
sidebar_label: Wafer-Scale Training
description: "Wafer-scale AI training chips: complete comparison of Cerebras WSE-2/WSE-3 and Tesla Dojo D1 / ExaPOD specs, performance, and use cases."
keywords: [wafer-scale chip, Cerebras, Tesla Dojo, WSE, AI training supercomputer]
---

# Wafer-Scale AI Training Supercomputers

Wafer-scale AI training chips are a revolutionary architecture that **treats an entire wafer as a single processor**, bypassing the interconnect bottlenecks of traditional multi-GPU setups. **Cerebras** and **Tesla Dojo** are the two major players in this space.

## Mainstream Wafer-Scale Training Systems

| Model | Vendor | Transistors | Cores | On-Chip SRAM | Compute (FP16 Sparse) | System Compute | Status |
|-------|--------|-------------|-------|--------------|----------------------|----------------|--------|
| **Cerebras WSE-4 (CS-4, estimated)** | Cerebras | ~5 trillion | ~1,500,000 | ~80GB | ~200 PFLOPS | ~200 PFLOPS | **2027 expected** |
| **Cerebras WSE-3 (CS-3)** | Cerebras | 4 trillion | 900,000 | 44GB | 125 PFLOPS | 125 PFLOPS | 2024 |
| **Cerebras WSE-2 (CS-2)** | Cerebras | 2.6 trillion | 850,000 | 40GB | ~62 PFLOPS | ~62 PFLOPS | 2021 |
| **Tesla Dojo ExaPOD** | Tesla | 18,000 billion (360× D1) | 127,440 | N/A | N/A | **100 EFLOPs** | 2023 |
| **Tesla Dojo Cabinet** | Tesla | 300 billion (6× D1 Tile) | 2,124 | N/A | N/A | ~1.7 EFLOPs | 2023 |
| **Tesla Dojo D1** | Tesla | 50 billion | 354 | N/A | 36.7 TFLOPS (BF16) | — | 2022 |

## Cerebras WSE-2 vs WSE-3 vs WSE-4 (Estimated)

| Metric | WSE-2 (CS-2) | WSE-3 (CS-3) | **WSE-4 (CS-4, estimated)** |
|--------|-------------|-------------|----------------------------|
| Process | TSMC 7nm | TSMC 5nm | **TSMC 3nm** |
| Transistors | 2.6 trillion | 4 trillion | **~5 trillion** |
| Cores | 850,000 | 900,000 | **~1,500,000** |
| On-chip SRAM | 40GB | 44GB | **~80GB** |
| FP16 sparse compute | ~62 PFLOPS | 125 PFLOPS | **~200 PFLOPS** |
| System TDP | 15 kW | 15 kW | **~30 kW** |
| Release date | 2021 | 2024 | **2027 expected** |

## Cerebras WSE Key Features

- **No memory wall**: All data on-chip SRAM (no HBM)
- **Weight Streaming**: Stream model weights to SRAM
- **No model parallelism**: Single chip can train massive models
- **CS-3 system liquid cooled**: 15kW TDP
- **Cluster option**: Multiple CS-3s can be interconnected

## Tesla Dojo Key Features

- **D1 single chip 354 cores**: Custom architecture
- **6 D1 = 1 Tile**: High-density packaging
- **ExaPOD = 360 D1 = 100 EFLOPs**: Single-cluster world leader
- **Purpose-built for FSD video training**: Tesla custom
- **Not for sale**: Tesla internal use only

## Selection Guide

- **Large model research / pharma / materials science**: Cerebras CS-3 (cloud rental via Cerebras Cloud)
- **Autonomous driving / video training**: Tesla Dojo (Tesla internal only)
- **Cloud AI services**: Cerebras Cloud accessible

## Detailed Product Pages

- [Cerebras WSE-2](/docs/cards/cerebras/wse-2) - Previous generation
- [Cerebras WSE-3](/docs/cards/cerebras/wse-3) - Current
- [Cerebras WSE-4](/docs/cards/cerebras/wse-4) - 2027 expected (first post-IPO generation)
- [Tesla Dojo](/docs/cards/others/tesla-dojo) - Autonomous driving dedicated

## Related Types

- [AI Training GPU](/docs/types/training-gpu)
- [AI Training ASIC](/docs/types/training-asic)
- [Complete Comparison Table](/docs/comparison)
