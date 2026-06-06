---
id: arch-ipu
title: IPU (Intelligence Processing Unit)
sidebar_label: IPU
description: "IPU architecture details: Graphcore's in-house BSP architecture, 1,472 cores, massively parallel MIMD, low-latency fine-grained computation."
keywords: [IPU, Intelligence Processing Unit, Graphcore, Bow, BSP, Bulk Synchronous Parallel, MIMD]
---

# IPU (Intelligence Processing Unit) Architecture

## What is an IPU

**IPU (Intelligence Processing Unit)** is **Graphcore**'s (UK) **intelligence processing unit**, adopting a **massively parallel MIMD** (Multiple Instruction, Multiple Data) architecture. Unlike GPU's SIMD, **each core independently executes different instructions**.

**Core features**:
- **1,472 independent processor cores** (Bow IPU)
- **900 MB on-chip SRAM** (In-Processor Memory)
- **BSP (Bulk Synchronous Parallel)** programming model
- Ideal for **fine-grained parallelism** (e.g., recommendation systems, graph neural networks)

## IPU Core Architecture

### Bow IPU
- **1,472 cores** (Tile processors)
- Each Tile = 1 core + 624KB SRAM
- **On-chip SRAM total 900 MB**
- **Tile-to-Tile interconnect**: Graphcore interconnect (IPU-Links)
- **Exchange chip** (GW-Link) connects multiple IPUs

### BSP Programming Model
- **Bulk Synchronous Parallel**
- Three-phase loop: compute + communicate + synchronize
- Ideal for **sparse graphs, dynamic graphs, fine-grained parallelism**

### Poplar SDK
- **C++ / Python** SDK
- **TensorFlow / PyTorch** integration
- **ONNX** conversion tools

## Mainstream IPU Products

| IPU | Year | Cores | SRAM | Compute (FP16) | TDP |
|-----|------|-------|------|----------------|-----|
| **Colossus MK1 GC2** | 2018 | 1,216 | 304 MB | - | 150W |
| **Bow IPU GC200** | 2020 | **1,472** | **900 MB** | - | 150W |
| **Bow Pod** | 2020 | 4× GC200 | 3.6 GB | - | - |
| **Bow Pod64** | 2020 | 16× GC200 | 14.4 GB | - | - |

## IPU vs GPU

| Dimension | IPU | GPU |
|-----------|-----|-----|
| Architecture | **MIMD** (independent instructions) | SIMT (unified instructions) |
| Parallel granularity | **Fine** (core-level independent) | Coarse (warp-level) |
| Memory | **On-chip SRAM** (900MB) | HBM (80GB) |
| Programming model | **BSP** | CUDA |
| Best for | **Sparse graphs, dynamic graphs, recommendation systems** | Dense matrix (LLM, CNN) |
| Large model training | Medium | **Strong** |
| Ecosystem | Small | **CUDA mature** |

## IPU Use Cases

- ✅ **Recommendation systems** (DLRM, embedding lookups)
- ✅ **Graph neural networks** (GNN)
- ✅ Molecular dynamics simulation
- ✅ Financial modeling
- ⚠️ LLM training (ecosystem and performance lag behind GPU)
- ❌ Large-scale LLM inference (use GPU/TPU)

## Commercial Deployments

- **Microsoft Azure** (IPU instances)
- **Graphcore IPUs** available in European and North American data centers
- **Glow** compiler
- Complementary to NVIDIA GPU (partial inference offload to IPU)

## Detailed Product Pages

- [Graphcore IPU](/docs/cards/others/graphcore-ipu) - Full specifications

## Related Architectures

- [GPU](/docs/architectures/arch-gpu) - General AI
- [NPU](/docs/architectures/arch-npu) - Data center NPU
- [RPU/RDU](/docs/architectures/arch-rpu-rdu) - Reconfigurable dataflow
- [Complete Comparison Table](/docs/comparison)
