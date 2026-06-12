---
id: maia-200
title: Microsoft Maia 200 (Microsoft 2nd-gen AI inference accelerator)
sidebar_label: Maia 200
description: Microsoft Maia 200 detailed specs - TSMC 3nm, 216GB HBM3e, 7TB/s bandwidth, 10+ PFLOPS FP4, 750W TDP, launched January 2026, Azure deployment.
keywords: [Maia 200, Microsoft AI chip, Azure, TSMC 3nm, FP4, HBM3e, inference accelerator, self-developed chip]
---

# Microsoft Maia 200 (Microsoft 2nd-gen AI inference accelerator)#

## Product Overview#

**Microsoft Maia 200** is Microsoft's **second-generation self-developed AI accelerator** officially released on **January 26, 2026**, specifically designed for **hyperscale AI inference**. It adopts **TSMC 3nm process**, integrating **over 140 billion transistors**, delivering **10+ PFLOPS FP4** and **5+ PFLOPS FP8** compute per chip. It introduces **native FP8/FP4 tensor cores** for the first time in Microsoft's self-developed chips, and features **216GB HBM3e** memory with **7TB/s** ultra-high bandwidth.

> **Positioning**: Maia 200 is Microsoft's highest-performance self-developed silicon to date, and the **most cost-effective inference system** ever deployed on Azure—delivering **30% better performance per dollar** compared to the latest-generation hardware in the Azure fleet.

## Core Specifications#

| Item | Parameter |
|------|-----------|
| **Architecture** | Maia 200 SoC (Tile-Cluster-SoC three-tier hierarchical architecture) |
| **Process** | **TSMC 3nm (N3P)** |
| **Transistor Count** | **Over 140 billion** |
| **FP4 Compute** | **10+ PFLOPS** (native tensor cores) |
| **FP8 Compute** | **5+ PFLOPS** (native tensor cores) |
| **HBM Type** | HBM3e |
| **HBM Capacity** | **216 GB** |
| **HBM Bandwidth** | **7 TB/s** |
| **On-chip SRAM** | **272 MB** |
| **Scale-up Bandwidth** | **2.8 TB/s** (bidirectional per accelerator) |
| **TDP** | **750 W** (SoC) |
| **Cluster Scale** | Up to **6,144** accelerators |
| **Network** | Standards-based Ethernet two-tier scale-up network |
| **Launch Date** | **January 26, 2026** |
| **First Deployment** | US Central (near Des Moines, Iowa) |
| **Subsequent Deployment** | US West 3 (near Phoenix, Arizona) |

## Architecture Details#

### Tile-Cluster-SoC Three-Tier Hierarchical Architecture#
- **Tile**: Basic compute unit, containing tensor cores, SRAM, DMA engines
- **Cluster**: Multiple Tiles connected via on-chip network (NoC), sharing L2 SRAM
- **SoC (System-on-Chip)**: Multiple Clusters connected via global NoC, interfacing with HBM3e and high-speed network

### Memory Subsystem Optimization#
- **Optimized for narrow-precision data types**: FP4/FP8 have small data width, memory bandwidth is the key bottleneck
- **Dedicated DMA engines**: High-bandwidth data transfer, reducing CPU intervention
- **272MB on-chip SRAM**: Stores hot weights and activation values, reducing HBM access frequency
- **Dedicated on-chip network (NoC)**: High-bandwidth, low-latency on-chip communication

### Expansion Network Design#
- **Standards-based Ethernet**: No dependency on proprietary network architectures (e.g., NVIDIA NVLink)
- **Two-tier scale-up network**: Achieved through custom transport layer and tightly integrated NIC
- **Unified Maia AI transport protocol**: Seamless communication within node, within rack, and across racks, minimizing network hops
- **Supports up to 6,144 accelerator clusters**: Enables predictable, high-performance collective communication operations

## Comparison with Competitors#

| Metric | Maia 200 | AWS Trainium 3 | Google TPU v7 | NVIDIA H200 |
|--------|----------|-----------------|----------------|---------------|
| FP4 Compute | **10+ PFLOPS** | ~3.3 PFLOPS | ~5 PFLOPS (estimated) | 1.98 PFLOPS |
| FP8 Compute | **5+ PFLOPS** | ~6.6 PFLOPS | ~5 PFLOPS | 1.97 PFLOPS |
| HBM Capacity | **216 GB** | 128 GB (estimated) | 192 GB | 141 GB |
| HBM Bandwidth | **7 TB/s** | ~3.5 TB/s (estimated) | ~4 TB/s | 4.8 TB/s |
| Process | **TSMC 3nm** | TSMC 4nm (estimated) | TSMC 4nm | TSMC 4NP |
| Cluster Scale | **6,144** | 16,384 (Trn2 UltraCluster) | 9,216 (Ironwood) | 576 (NVL576) |
| Performance per Dollar | **+30%** (vs Azure prev-gen) | — | — | — |

> **Key Advantage**: Maia 200's FP4 performance is **3× that of AWS Trainium 3**, and FP8 performance **exceeds Google TPU v7**.

## Azure Deployment & Ecosystem#

### First Deployment Regions#
- **US Central** (near Des Moines, Iowa): Starting January 2026
- **US West 3** (near Phoenix, Arizona): Coming soon
- **Future expansion**: More Azure regions will be deployed sequentially

### Supported Workloads#
- **OpenAI GPT-5.2 series**: Providing compute for Microsoft Foundry and Microsoft 365 Copilot
- **Microsoft Superintelligence Team**: Used for synthetic data generation and reinforcement learning, optimizing next-generation self-developed models
- **Synthetic data pipeline**: Unique design accelerating high-quality, domain-specific data generation and filtering

### Maia SDK (Preview)#
- **Triton compiler**: Kernel compilation optimzed for Maia 200 architecture
- **PyTorch support**: Seamless migration of existing PyTorch models
- **NPL low-level programming language**: For fine-grained control requirements
- **Maia simulator and cost calculator**: Optimize efficiency early in code lifecycle

## Energy Efficiency & TCO#

| Metric | Maia 200 | Azure previous-gen hardware |
|--------|----------|-------------------|
| Performance per dollar | **+30%** | Baseline |
| Power (single accelerator) | 750W | ~800-1,000W (estimated) |
| Cooling Solution | **2nd-gen closed-loop liquid cooling (HXU)** | Air/liquid hybrid |
| TCO (total cost of ownership) | **Reduced** (efficiency improvement + Ethernet standard network) | Baseline |

## Comparison with Previous-Gen Maia 100#

| Metric | Maia 100 (2023) | **Maia 200 (2026)** | Improvement |
|--------|---------------------|---------------------|-------------|
| Process | TSMC 5nm | **TSMC 3nm** | More advanced |
| Transistor Count | ~50 billion (estimated) | **140 billion+** | **2.8×** |
| FP4 Support | ❌ Not supported | ✅ **Supported** | New |
| FP8 Support | ✅ Supported (non-native) | ✅ **Native tensor cores** | Optimized |
| HBM Capacity | 64 GB (estimated) | **216 GB** | **3.4×** |
| HBM Bandwidth | ~1.6 TB/s (estimated) | **7 TB/s** | **4.4×** |
| TDP | 500W (estimated) | **750W** | 1.5× |
| Deployment Scale | Thousands (Azure) | **6,144+** | Expanded |

## Technical Highlights#

### 1. Native FP4/FP8 Tensor Cores#
- **FP4**: 4-bit floating point, model memory footprint reduced by 75% (vs FP16), inference throughput improved by **4×**
- **FP8**: 8-bit floating point, precision close to FP16, compute power 2× that of FP16
- **Sparsity optimization**: Supports structured sparsity, FP4 sparse mode can reach **20+ PFLOPS**

### 2. Ethernet Standards-Based Network#
- **No proprietary network**: Scale-up design based on standards-based Ethernet, reducing deployment cost and complexity
- **Custom transport layer**: Optimized for AI workloads, performance close to proprietary networks
- **Two-tier network topology**: Minimizes network hops, improving large-scale cluster performance

### 3. Liquid Cooling Native Design#
- **2nd-gen HXU**: Closed-loop liquid cooling heat exchanger unit, natively supports data center deployment
- **Chip-level telemetry**: Real-time monitoring of temperature, voltage, frequency, improving reliability
- **Azure control plane integration**: Security, telemetry, diagnostics, and management at chip and rack levels

## Launch Date & Availability#

- **Official Launch**: January 26, 2026 (Microsoft Executive VP Scott Guthrie announced on official blog)
- **First Deployment**: Starting January 2026, US Central region
- **Availability**: **Azure cloud service only** (physical chips not sold separately)
  - Microsoft Foundry (formerly Azure AI)
  - Microsoft 365 Copilot
  - Azure Virtual Machines (Maia 200 instances)
- **Maia SDK Preview**: Already open for application

## External Links#

- [Microsoft Official Blog: Maia 200 Launch](https://blogs.microsoft.com/blog/2026/01/26/maia-200-the-ai-accelerator-built-for-inference/)
- [Baidu Baike: Maia 200](https://baike.baidu.com/item/Maia%20200/67292913)
- [Zhihu: Microsoft Maia 200 technical analysis](https://zhuanlan.zhihu.com/p/2002518726923289374)
- [Sohu: Microsoft's new self-developed AI chip Maia 200 unveiled](https://www.sohu.com/a/980576658_129720)
