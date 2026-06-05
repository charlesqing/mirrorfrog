---
id: gaudi-4
title: Intel Gaudi 4 (Q2 2026 Estimated)
sidebar_label: Gaudi 4
description: "Intel Gaudi 4 estimated specifications: 3nm, 192GB HBM3E, 3.7 PF FP8 dense, 2× Gaudi 3 performance, SynapseAI software stack."
keywords: [Intel Gaudi 4, Gaudi 4, Intel AI, 3nm, HBM3E, SynapseAI, competing with H200]
---

# Intel Gaudi 4 (Q2 2026 Estimated)

:::warning Estimated Content
Specifications on this page are estimated based on Intel's June 2025 public statements + Pat Gelsinger's 2024 roadmap + industry analyst projections. Intel's **official full specifications have not yet been released**. **Official data is subject to actual Q2 2026 release**.
:::

## Overview

**Intel Gaudi 4** is Intel's 4th-generation AI training/inference accelerator, **expected to launch in Q2 2026** (delayed from original Q4 2025). Built on the Intel 18A (1.8nm) process, it features **192GB HBM3E** memory, **3.7 PFLOPS FP8 dense** compute (2× Gaudi 3), and a **Tensor processor + GEMM engine** architecture. It is accompanied by the **SynapseAI** software stack (PyTorch / JAX / TensorFlow compatible).

**Strategic positioning**: Amid competition from NVIDIA H200/B200 and AMD MI325X/MI350, Intel Gaudi 4 is the **core product of Intel's AI business** (Gaudi 3 customers include IBM Cloud, Supermicro, ASUS, Lambda Labs). However, Intel announced on **2026-05-14 the cancellation of Falcon Shores** in favor of the rack-level **Jaguar Shores**, meaning Gaudi 4 may be the **last chip in the standalone Gaudi series**.

## Core Specifications (Estimated)

| Item | Specification |
|------|------|
| **Architecture** | Intel Gaudi 4th Gen (evolution of Gaudi 3 architecture) |
| **Process Node** | Intel 18A (1.8nm, ~2nm-class equivalent) |
| **HBM** | **192 GB HBM3E** (6 stacks) |
| **Memory Bandwidth** | **~5 TB/s** (819 GB/s per HBM3E × 6) |
| **FP8 dense** | **3.7 PFLOPS** (2× Gaudi 3) |
| **BF16 dense** | **1.85 PFLOPS** |
| **FP16 dense** | 1.85 PFLOPS |
| **FP32** | ~462 TFLOPS |
| **TDP** | **~700 W** |
| **Form Factor** | OAM / PCIe Gen5 ×16 |
| **Interconnect** | 24× 200GbE RoCE v2 (same as Gaudi 3, excellent scalability) |
| **Volume Production** | **Q2 2026** (delayed from Q4 2025) |
| **Unit Price (OAM)** | **~$25,000 - $30,000** (estimated) |

## Comparison with Gaudi 3

| Metric | Gaudi 4 (estimated) | Gaudi 3 | Improvement |
|------|------------------|---------|------|
| Process Node | Intel 18A (1.8nm) | TSMC 5nm | Major upgrade |
| HBM | 192GB HBM3E | 128GB HBM2E | +50% |
| Bandwidth | 5 TB/s | 3.7 TB/s | +35% |
| FP8 | 3.7 PF | 1.835 PF | 2× |
| BF16 | 1.85 PF | 459 TF | 4× |
| TDP | 700W | 600W | +17% |
| Process source | Intel 18A in-house | TSMC foundry | Strategic shift |
| Price (estimated) | $25-30K | $12-15K | ~2× |

## Comparison with Competitors (H1 2026 Flagships)

| Metric | Intel Gaudi 4 | NVIDIA H200 | AMD MI355X | Huawei Ascend 920 |
|------|---------------|--------------|------------|---------------|
| Memory | 192GB HBM3E | 141GB HBM3E | 288GB HBM3E | 96GB HBM2E |
| Bandwidth | 5 TB/s | 4.8 TB/s | 8 TB/s | 4 Tbps |
| FP8 dense | 3.7 PF | 1.6 PF sparse | 4.6 PF | ~1.8 PF BF16 |
| TDP | 700W | 700W | ~750W | ~600W |
| Software | SynapseAI | CUDA | ROCm | CANN |
| Price | ~$27K | $30K | ~$25K | N/A |

> **Gaudi 4 advantage**: **Strongest software independence** (24× 200GbE standard Ethernet interconnect, **no proprietary interconnect like NVLink/UALoF required**), making it the **best choice for multi-cloud, multi-vendor ecosystems**.

## 24 × 200GbE Ethernet Interconnect

| Dimension | Specification |
|------|------|
| **Port Count** | **24 × 200 GbE** (per card) |
| **Total Bandwidth** | **4.8 Tb/s** (600 GB/s bidirectional) |
| **Protocol** | RoCE v2 (RDMA over Converged Ethernet) |
| **Switches** | Compatible with any Ethernet switch (Arista, Broadcom, Juniper) |
| **Topology** | Fully connected Fat-Tree / Dragonfly+ |
| **Max Cluster** | 8,192 nodes (validated on Gaudi 3) |

**Comparison with NVIDIA NVLink + InfiniBand**:
- ✅ **Open standard** (Ethernet)
- ✅ **Lower cost** (100G/200G Ethernet vs InfiniBand)
- ✅ **Multi-vendor interoperability**
- ❌ Slightly higher latency (~1-2 μs RoCE vs ~0.5 μs IB)
- ❌ Large-scale NCCL optimization weaker than NVLink

## SynapseAI Software Stack

| Layer | Tool | Description |
|------|------|------|
| **AI Framework** | **SynapseAI** | PyTorch / JAX / TensorFlow switching |
| **Graph Compiler** | Synapse Compiler | XLA + TVM hybrid |
| **Operator Library** | Habana Custom Ops | Custom operator SDK |
| **Quantization** | Quantization Toolkit | INT8 / FP8 training |
| **Communication** | Habana CCL | Collective communication (AllReduce etc.) |
| **Graph Optimizer** | Graph Compiler | Automatic operator fusion |

> ⚠️ **Ecosystem limitation**: Compared to CUDA's 10-year ecosystem, SynapseAI is still relatively new. **80-90% of PyTorch models run with zero code changes**, but complex LLM training requires manual optimization.

## Vendor Information

| Item | Details |
|------|------|
| **Company** | Intel Corporation |
| **Business Unit** | Intel Data Center & AI Group (DCAI) |
| **Product Page** | https://www.intel.com/content/www/us/en/products/details/processors/ai-accelerators/gaudi.html |
| **Headquarters** | Santa Clara, California, USA |
| **CEO** | Lip-Bu Tan (appointed March 2025) |
| **Foundry** | Intel 18A in-house (Oregon Fab 52 + Arizona Fab 62) |
| **Target Customers** | IBM Cloud, Supermicro, ASUS, Lambda Labs, Zenlayer, India Yotta |
| **2025 Gaudi Revenue** | ~$3.5B (+50% YoY) |

## Gaudi Product Line

| Product | Launch | Compute FP8 | Memory | Status |
|------|------|----------|------|------|
| Gaudi 1 | Q3 2019 | 0 (FP16: 165 TF) | 32GB HBM2 | EOL |
| Gaudi 2 | Q3 2022 | 0 (FP16: 459 TF) | 96GB HBM2E | EOL |
| **Gaudi 3** | Q2 2024 | 1.835 PF | 128GB HBM2E | **Current flagship** |
| **Gaudi 4** | **Q2 2026** (estimated) | **3.7 PF** | **192GB HBM3E** | **Next generation** |
| Gaudi 5 | 2027+ | ? | ? | Planned |

## Key Features

- **Open Ethernet interconnect** (24× 200GbE, InfiniBand-like but more open)
- **FP8 dense** (no sparse dependency, 2× FP16 effective compute)
- **Intel 18A in-house foundry** (strategic shift from TSMC 5nm to Intel Foundry)
- **SynapseAI PyTorch compatibility** (more developer-friendly than ROCm / Cambricon ecosystem)
- **Price advantage** (estimated ~$25-30K vs H200 $30K)
- **Drawback**: 700W TDP on the high side, 5-year software ecosystem vs CUDA's 18 years

## Use Cases

- ✅ **Multi-cloud AI training** (open Ethernet, deployable in any DC)
- ✅ **Large-scale LLM training** (192GB HBM3E accommodates larger models)
- ✅ **HPC + AI convergence** (Fortran / MPI compatible)
- ✅ **Government/state-owned enterprise AI projects** (Intel brand + US manufactured)
- ✅ **Budget-sensitive** (price advantage vs H200)
- ❌ Cutting-edge FP4 models (Gaudi 4 estimated not to support FP4)
- ❌ NVLink-only workloads (e.g. NVIDIA Megatron-LM heavily optimized)

## Intel AI Strategic Shift

On 2026-05-14, Intel announced the **cancellation of Falcon Shores** (originally a Gaudi 4 + GPU fusion chip), pivoting to the rack-level **Jaguar Shores** system. This means:
- **Gaudi 4** may be the **last standalone Gaudi accelerator**
- **2027+** Intel AI roadmap shifts to **Jaguar Shores rack** (integrating Gaudi IP + Xeon + 800G NIC)
- Customers should consider a **Gaudi 4 → Jaguar Shores migration path**

## Related Cards

- [Intel Gaudi 3](/docs/cards/intel/gaudi-3) - Previous generation
- [Intel Gaudi 2](/docs/cards/intel/gaudi-2) - Prior generation
- [Intel Jaguar Shores](/docs/cards/intel/jaguar-shores) - Rack-level replacement
- [NVIDIA H200](/docs/cards/nvidia/h200) - Competitor
- [AMD MI355X](/docs/cards/amd/mi355x) - Competitor
- [Huawei Ascend 920](/docs/cards/huawei/ascend-920) - Domestic comparison
- [Intel Max Series](/docs/cards/intel/max-series) - HPC GPU
