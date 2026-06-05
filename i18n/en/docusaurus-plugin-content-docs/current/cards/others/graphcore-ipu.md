---
id: graphcore-ipu
title: Graphcore IPU (Bow)
sidebar_label: Graphcore IPU
description: "Graphcore Bow IPU detailed specs: 1472 processor cores, 900MB SRAM, MIMD architecture, company sold in 2024."
keywords: [Graphcore, IPU, Bow, MIMD architecture, acquired]
---
 
# Graphcore IPU (Bow)
 
## Overview
 
Graphcore IPU (Intelligence Processing Unit) is an AI processor using a **MIMD (Multiple Instruction Multiple Data)** architecture with **1,472 independent processor cores**, each with its own memory. In 2024, Graphcore faced financial difficulties and was **acquired by SoftBank**.
 
## Core Specifications (Bow IPU / GC200)
 
| Item | Spec |
|------|------|
| **Architecture** | GC200 IPU (MIMD) |
| **Process** | TSMC 7nm |
| **IPU Cores** | 1,472 independent processors |
| **On-chip SRAM** | 900 MB |
| **FP32 Compute** | 350 TFLOPS (sparse) |
| **FP16 Compute** | 350 TFLOPS |
| **INT8 Compute** | 700 TOPS |
| **TDP** | 185 W |
| **Interconnect** | IPU-Link (PCIe 4.0) |
| **Form Factor** | PCIe 4.0 x16 |
 
## Vendor Information
 
| Item | Details |
|------|------|
| **Manufacturer** | Graphcore Ltd. (acquired by SoftBank) |
| **Website** | https://www.graphcore.ai |
| **Product Page** | https://www.graphcore.ai/products/ipu |
| **Status** | Company acquired 2024, future uncertain |
 
## Use Cases
 
- Graph Neural Networks (GNN)
- Natural Language Processing
- Recommendation systems
 
## Architecture Family
 
- [IPU Architecture](/docs/architectures/arch-ipu) - Multiple Instruction Multiple Data (MIMD) graph compute
 
## Related Comparisons
 
- [Tenstorrent Overview](/docs/cards/others/tenstorrent) - Another RISC-V AI chip
- [SambaNova SN40L](/docs/cards/others/sambanova-sn40l) - Dataflow RDU
- [Esperanto ET-SoC-1](/docs/cards/others/esperanto-et-soc-1) - RISC-V heterogeneous 1332 cores
- [Full Comparison Table](/docs/comparison)
