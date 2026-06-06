---
id: tesla-dojo
title: Tesla Dojo D1
sidebar_label: Tesla Dojo
description: "Tesla Dojo D1 detailed specs: 50 billion transistors, 36.7 TFLOPS BF16, ExaPOD 100 EFLOPs, purpose-built for FSD video training."
keywords: [Tesla Dojo, D1, Autonomous Driving Training, FSD, Wafer-scale]
---

# Tesla Dojo D1

## Product Overview

Tesla Dojo is Tesla's custom-built AI training supercomputer. The D1 chip is purpose-built for **Full Self-Driving (FSD) video data training**. With **50 billion transistors**, BF16 compute of 36.7 TFLOPS, 6 D1 chips form a Tile, a Cabinet integrates 6 Tiles, and an **ExaPOD integrates 10 Cabinets (360 D1 chips)**.

## D1 Chip Core Specifications

| Item | Spec |
|------|------|
| **Architecture** | Tesla D1 |
| **Process** | TSMC 7nm |
| **Transistor Count** | 50 billion |
| **Compute Cores** | 354 |
| **FP32** | 9.1 TFLOPS |
| **BF16/FP16** | 36.7 TFLOPS |
| **INT8** | 36.7 TOPS |
| **TDP** | 400 W |
| **Interconnect** | Dojo proprietary interconnect (400W interface) |

## Dojo System Topology

| Level | Configuration |
|-------|---------------|
| **D1 Chip** | 1× 50 billion transistors |
| **Tile** | 6× D1 |
| **Cabinet** | 6× Tile |
| **ExaPOD** | 10× Cabinet = **360 D1 chips** |
| **ExaPOD Compute** | ~100 EFLOPs (FP16 sparse) |

## Manufacturer Info

| Item | Detail |
|------|--------|
| **Manufacturer** | Tesla, Inc. |
| **Website** | https://www.tesla.com |
| **Product** | https://www.tesla.com/dojo |
| **Use** | Tesla internal FSD training |

## Key Features

- **Tesla full-stack in-house**: chip + system + software
- **Purpose-built for FSD video training**: bypasses 4D annotation bottleneck
- **ExaPOD 100 EFLOPs**: single-cluster compute among the highest globally
- **Liquid cooling**

## Use Cases

- Tesla FSD autonomous driving model training
- Large-scale video data processing
- End-to-end autonomous driving

## Related Comparisons

- [Cerebras WSE-3](/docs/cards/cerebras/wse-3) — similar wafer-scale
- [NVIDIA B200 NVL72](/docs/cards/nvidia/b200) — mainstream wafer-scale system
- [NVIDIA H100](/docs/cards/nvidia/h100) — mainstream solution
