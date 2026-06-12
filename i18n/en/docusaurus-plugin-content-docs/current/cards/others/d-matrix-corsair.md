---
id: d-matrix-corsair
title: d-Matrix CORSair (Digital In-Memory Computing Inference Accelerator)
sidebar_label: d-Matrix CORSair
description: d-Matrix CORSair detailed specs - Digital In-Memory Computing (DIMC) architecture, 2,400 TFLOPS FP8, 256GB LPDDR5X, 150TB/s bandwidth, PCIe Gen5, Q2 2025 market release.
keywords: [d-Matrix, CORSair, DIMC, in-memory computing, LPDDR5X, SRAM, AI inference, Chiplet, DMX Link]
---

# d-Matrix CORSair (Digital In-Memory Computing Inference Accelerator)#

## Product Overview#

**d-Matrix CORSair** is a **data center AI inference accelerator** released by d-Matrix on **November 19, 2024** at the SC24 Supercomputing conference. It adopts the industry's first **Digital In-Memory Compute (DIMC) architecture**. Each card features **2GB high-performance on-chip SRAM** and up to **256GB off-chip LPDDR5X memory**, delivering **2,400 TFLOPS FP8** compute, with memory bandwidth up to **150 TB/s** (DIMC architecture advantage).

> **Core Innovation**: CORSair breaks the traditional "compute-memory separation" architecture, performing matrix operations as close to storage as possible, fundamentally solving the **memory bandwidth bottleneck** in large model inference. Compared to GPU solutions, it achieves up to **10× interaction speed**, **3× TCO performance ratio**, and **3× energy efficiency improvement**.

## Core Specifications#

| Item | Parameter |
|------|-----------|
| **Architecture** | DIMC (Digital In-Memory Computing) + Chiplet |
| **Compute (FP8)** | **2,400 TFLOPS** (8-bit peak) |
| **Compute (FP4)** | Not disclosed (supports Micro-scaling/MX formats) |
| **On-chip Memory** | **2GB high-performance SRAM** |
| **Off-chip Memory** | Up to **256GB LPDDR5X** |
| **Memory Bandwidth** | **150 TB/s** (DIMC architecture) |
| **Interconnect** | **DMX Link** (inter-die) + **DMX Bridge** (cross-card) |
| **Form Factor** | **PCIe Gen5 full-height full-length (FHFL)** |
| **TDP** | Not disclosed (supports air/liquid cooling) |
| **Process** | Not disclosed (Chiplet multi-die packaging) |
| **Announcement Date** | **November 19, 2024** (SC24) |
| **Market Release** | **Q2 2025** (broad release) |
| **Early Sampling** | **Q4 2024** onwards |

## DIMC Architecture Detailed#

### Traditional Architecture vs DIMC Architecture#

| Dimension | Traditional GPU Architecture | **d-Matrix DIMC Architecture** |
|-----------|----------------|--------------------------|
| Compute & Memory | Separated (HBM connected to GPU cores via interface) | **Integrated** (matrix operations completed inside memory) |
| Memory Bandwidth Bottleneck | Severe (HBM3e max 8TB/s) | **Broken** (DIMC provides 150TB/s) |
| Data Transfer Energy | High (accounts for 60-80% of total energy) | **Low** (compute executed where data is stored) |
| Inference Latency | Higher (1-10 ms/token) | **Extremely low** (1 ms/token @ Llama 3 8B) |

### Chiplet Packaging Design#

- **Each card contains 2 dies**
- **Each die consists of 4 Chiplets**
- **Each Chiplet equipped with**:
  - 2GB SRAM (high-performance memory)#
  - LPDDR5X channels (connecting to 256GB off-chip memory)#
  - RISC-V scheduling engine (managing task scheduling and data flow)#
- **DMX Link**: High-efficiency die-to-die interconnect within package
- **DMX Bridge**: Cross-card interconnect (two cards can be connected via DMX Bridge)#

## Inference Performance#

### Real-world Workload Performance#

| Model | CORSair Performance | vs GPU Solution |
|-------|---------------------|----------------------|
| **Llama 3 8B** | **60,000 tokens/sec** (single server) | **10× interaction speed** |
| **Llama 3 70B** | **30,000 tokens/sec** (single rack) | **3× TCO performance ratio** |
| **Latency (8B)** | **1 ms/token** | **10× reduction** |
| **Latency (70B)** | **2 ms/token** | **3× reduction** |
| **Energy Efficiency** | Not disclosed (TDP not disclosed) | **3× improvement** |

> **Key Advantage**: CORSair is specifically optimzed for **inference-intensive** enterprise AI workloads, solving the "high latency, high power consumption, high cost" pain points of large model inference.

## Comparison with Competitors#

| Metric | d-Matrix CORSair | NVIDIA H200 | NVIDIA B200 | Groq LPU |
|--------|---------------------|---------------|---------------|----------|
| FP8 Compute | 2,400 TFLOPS | 1,970 TFLOPS | 4,500 TFLOPS | ~1,000 TFLOPS (estimated) |
| Memory Capacity | **256GB LPDDR5X** | 141GB HBM3e | 192GB HBM3e | ~100GB (estimated) |
| Memory Bandwidth | **150TB/s** (DIMC) | 4.8TB/s | 8TB/s | ~10TB/s (SRAM) |
| Inference Latency | **1-2 ms/token** | 5-10 ms/token | 3-5 ms/token | **<1 ms/token** |
| TDP | Not disclosed | 700W | 1,000W | ~500W (estimated) |
| Cost | **Low** (LPDDR5X vs HBM) | High | High | Medium |
| Positioning | **Inference (in-memory compute)** | Training+inference | Training+inference | Inference (SRAM) |

## Software Stack & Ecosystem#

### Aviator Software Stack#

- **Unified management**: All d-Matrix hardware innovations managed through Aviator software stack
- **Ecosystem compatibility**: Provides AI developers with consistent user experience and toolchain as existing ecosystem
- **PyTorch support**: Seamless migration of existing PyTorch models
- **ONNX support**: Supports ONNX format model import
- **Micro-scaling/MX format**: Industry's first native support for block floating-point numerical formats (become OCP standard)#

### OEM/System Integrator Partnerships#

- **Supermicro**: Liquid-cooled/air-cooled AI servers with CORSair
- **GigIO**: High-density inference nodes
- **Liquid**: Liquid cooling solutions
- **Market release**: Q2 2025 broad release#

## Comparison with Previous-Generation Products#

| Metric | d-Matrix previous-gen (2023) | **CORSair (2025)** | Improvement |
|--------|---------------------|---------------------|-------------|
| Architecture | Early DIMC prototype | **Production DIMC + Chiplet** | Mature |
| Compute (FP8) | ~500 TFLOPS (estimated) | **2,400 TFLOPS** | **4.8×** |
| Memory Capacity | ~64GB (estimated) | **256GB** | **4×** |
| Memory Bandwidth | ~10TB/s (DIMC) | **150TB/s** | **15×** |
| Form Factor | Engineering sample card | **PCIe Gen5 FHFL (production)** | Commercialized |
| Software Stack | Early version | **Aviator (mature)** | Complete |

## Launch Date & Availability#

- **Official Announcement**: November 19, 2024 (SC24 Supercomputing conference)#
- **Early Sampling**: Q4 2024 onwards (early access customers)#
- **Broad Market Release**: **Q2 2025** (already released)#
- **Availability**:
  - Direct purchase (d-Matrix official website)#
  - Through OEM partners (Supermicro, GigIO, Liquid)#
  - Cloud service (expected 2026)#

## Technical Highlights#

### 1. Digital In-Memory Computing (DIMC)#
- **Breaks memory wall**: Performs matrix operations inside memory, eliminateng data transfer bottleneck
- **150TB/s effective bandwidth**: Far exceeds HBM3e (4.8TB/s) and HBM4 (8TB/s)#
- **Low latency**: 1-2 ms/token (70B model), suitable for real-time interactive scenarios#

### 2. Chiplet Architecture#
- **Modular design**: 4 Chiplets form one die, 2 dies form one card
- **Flexible expansion**: Multi-card interconnect via DMX Link and DMX Bridge
- **Cost optimzation**: LPDDR5X is **3-5× cheaper** than HBM3e#

### 3. Block Floating-Point Format Support#
- **Micro-scaling/MX format**: Industry's first native support (become OCP standard)#
- **Precision-efficiency balance**: MXFP8 precision close to FP16, compute 2× that of FP16
- **OCP standard**: Standard format jointly promoted by Meta, AMD, Intel, and other companies#

## Suitable Scenarios#

- **Real-time dialog AI**: 1-2 ms/token latency, suitable for customer service, assistants, etc.
- **Large-scale inference service**: 60,000 tokens/sec (8B model), supports high concurrency
- **Enterprise-grade AI workloads**: TCO 3× lower than GPU solutions
- **Edge inference**: PCIe Gen5 standard form factor, suitable for edge data center deployment#

## External Links#

- [d-Matrix Official Announcement](https://www.d-matrix.ai/announcements/d-matrix-unveils-corsair-the-worlds-most-efficient-ai-computing-platform-for-inference-in-datacenters/)
- [d-Matrix Official Website](https://www.d-matrix.ai/)
- [Sohu: d-Matrix takes different path, challenging HBM with LPDDR5 and SRAM solution](https://www.sohu.com/a/931650332_122396381)
- [Zhihu: CORSair design](https://zhuanlan.zhihu.com/p/1954690028753130167)
- [Tencent News: In-memory computing drives inference acceleration](https://news.qq.com/rain/a/20250904A0240W00)
