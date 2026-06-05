---
id: rubin-r200
title: NVIDIA Rubin R200 (Vera Rubin Platform)
sidebar_label: NVIDIA Rubin R200
description: NVIDIA Vera Rubin platform: Rubin GPU + Vera CPU 6-die CoWoS-L package, 288GB HBM4, 22 TB/s, 50 PF FP4 sparse, ConnectX-9 28.8 TB/s, shipping H2 2026.
keywords: [NVIDIA Rubin, Vera Rubin, R200, HBM4, 50 PFLOPS FP4, NVLink 6, ConnectX-9, 6-die package, Vera CPU]
---

# NVIDIA Rubin R200 (Vera Rubin Platform)

## Product Overview

**NVIDIA Rubin R200** (codename **Vera Rubin**, honoring dark matter astronomer Vera Rubin) is the **next-generation flagship platform** after Blackwell, **shipping H2 2026**. It features the **industry's first 6-die CoWoS-L package** — 1 Vera CPU + 2 Rubin GPU dies + I/O / HBM base dies — with each Rubin GPU delivering **288GB HBM4**, **22 TB/s bandwidth**, and **50 PFLOPS FP4 sparse** compute.

The Vera Rubin platform also includes **dual independent ConnectX-9 NICs** (28.8 TB/s aggregate per GPU) and **next-gen NVLink 6** (3.5 TB/s/GPU). **Rubin NVL72 rack** = 576 Rubin GPUs + 288 Vera CPUs = **28.8 EF FP4 sparse / 1.5 ExaFLOPS FP8** compute.

## Core Specifications (per GPU)

| Parameter | Value |
|-----------|-------|
| **Architecture** | Rubin (Vera Rubin platform) |
| **Process Node** | TSMC 3NP / 4NP (hybrid) |
| **Package** | **6-die CoWoS-L** (1× Vera CPU + 2× Rubin die + 3× I/O/HBM) |
| **Transistor Count** | ~340 billion (per GPU) |
| **Memory** | **288 GB HBM4** (288 GB/GPU inferred) |
| **Memory Bandwidth** | **22 TB/s** |
| **FP4 Sparse** | **50 PFLOPS** (**industry's first 50 PF-class**) |
| **FP8 Sparse** | **25 PFLOPS** |
| **FP16/BF16 Dense** | **12.5 PFLOPS** |
| **NVLink 6** | **3.5 TB/s/GPU** (6th Gen, 2× previous gen) |
| **DC Networking** | **ConnectX-9, 28.8 TB/s/GPU** (dual 14.4 TB/s ports) |
| **TDP** | ~1,800 W (**liquid cooling required**) |
| **Launch** | **H2 2026** |

> :warning: **Data convention**: NVIDIA continues using **sparse** compute as the official standard after Blackwell. Not directly comparable with AMD/Google **dense** compute figures. All FP4 50 PF / FP8 25 PF on this page are sparse.

## Rubin R200 vs B300 Ultra Generational Upgrade

| Metric | B300 Ultra | **Rubin R200** | Improvement |
|--------|------------|----------------|-------------|
| Architecture | Blackwell Ultra | **Rubin** | Next-gen |
| Process Node | TSMC 4NP | **TSMC 3NP** | More advanced |
| Package | 2 die (CoWoS-L) | **6 die (CoWoS-L)** | **3× die count** |
| Memory | 288 GB HBM3e | **288 GB HBM4** | HBM3e → HBM4 |
| Memory Bandwidth | 8 TB/s | **22 TB/s** | **2.75×** |
| FP4 Sparse | 14 PFLOPS | **50 PFLOPS** | **3.6×** |
| NVLink | 1.8 TB/s (Gen 5) | **3.5 TB/s (Gen 6)** | 2× |
| DC Networking | ConnectX-8 1.6 Tbps | **ConnectX-9 28.8 Tbps** | **18×** |
| TDP | 1,400 W | ~1,800 W | +29% |
| Release | 2026-01 | **H2 2026** | — |

## Vera CPU (First Integrated ARM CPU)

| Parameter | Value |
|-----------|-------|
| **Architecture** | Vera (ARM-compatible Olympus cores) |
| **Core Count** | **88 Olympus cores** (estimated) |
| **Process Node** | TSMC 3NP |
| **GPU Pairing** | 1:1 (**1 Vera : 2 Rubin GPU dies**) |
| **Key Role** | Host CPU + interconnect controller + prefetcher |

> **Naming origin**: At GTC 2024, NVIDIA named the next-generation platform "Vera Rubin" in honor of astronomer **Vera Florence Cooper Rubin** (1928–2016), whose galaxy rotation curve research confirmed the existence of **dark matter** — a philosophical echo of an "invisible AI compute revolution."

## NVLink 6 Interconnect (Rack-Scale)

| Parameter | Value |
|-----------|-------|
| **Per-GPU Bandwidth** | **3.5 TB/s** (bidirectional) |
| **GPU-to-GPU Hops** | 1 (**fully-connected NVLink switch**) |
| **GPUs per Rack** | **72** (Vera Rubin NVL72) |
| **Total GPU Bandwidth per Rack** | 252 TB/s NVLink aggregate |

## ConnectX-9 Networking

| Parameter | Value |
|-----------|-------|
| **Ports per GPU** | **2 × 14.4 Tbps** (independent NICs) |
| **Aggregate per GPU** | **28.8 TB/s** |
| **Rack-Scale** | 9,216 ports (Rubin NVL576) |
| **Network Topology** | 3D Torus / fully connected |

> **Dual ConnectX-9 = 28.8 TB/s means the GPU will never be the network bottleneck** — this is the ultimate form of in-network computing.

## Rubin NVL72 / NVL576 Racks

| Config | NVL72 | NVL576 |
|--------|-------|--------|
| **GPU Count** | 72 | 576 |
| **CPU Count** | 36 | 288 |
| **Total HBM** | 20.7 TB HBM4 | 165 TB HBM4 |
| **NVLink Aggregate** | 252 TB/s | 2,016 TB/s |
| **FP4 Sparse Compute** | 3.6 EFLOPS | **28.8 EFLOPS** |
| **FP8 Sparse Compute** | 1.8 EFLOPS | 14.4 EFLOPS |
| **Rack TDP** | ~130 kW | ~1 MW |
| **Networking** | ConnectX-9 | ConnectX-9 × 1152 ports |

> **Rubin NVL576 = 28.8 EFLOPS FP4** = 1.5 ExaFLOPS FP8 = **world's most powerful AI supernode** (vs GB300 NVL72 at ~0.5 EF FP8, a **5.7× improvement**).

## Recommended Deployment Configurations

| Scenario | Recommended Config |
|----------|-------------------|
| **100B+ model training** | Rubin NVL72 (**single rack runs 100B models**) |
| **1T+ giant model training** | Rubin NVL576 + NVLink Quantum-2 / Quantum-3 |
| **Ultra-low latency inference** | Rubin R200 + FP4 + inference optimization software |
| **Multimodal long context** | Rubin R200 (288GB HBM4 fully retains KV) |
| **Scientific computing** | Vera CPU + massive CPU cores + Rubin GPU acceleration |

## Cooling & Infrastructure

- **TDP ~1,800 W/GPU** — **liquid cooling required (Direct Liquid Cooling, DLC)**
- 30% higher than B300 Ultra (1,400 W); data center replanning needed
- **Rubin NVL72 = 130 kW/rack** (~2× GB300 NVL72)
- **Rubin NVL576 = 1 MW/rack** — requires dedicated 1MW liquid-cooled rack

## Software Ecosystem

- **CUDA 13.x** (new Rubin microarchitecture support)
- **cuDNN 10.x**
- **TensorRT-LLM 1.0+** (FP4 / NVFP4 fully optimized)
- **vLLM 0.8+** (Vera Rubin optimized)
- **NCCL 2.21+** (ConnectX-9 + NVLink 6 support)
- **NVFP4** (inherited from Blackwell Ultra, 2nd gen)

## Use Cases

- ✅ **Ultra-large-scale LLM training** (100B+ parameters, 10K+ GPU clusters)
- ✅ **Ultra-low-latency giant model inference** (1T+ parameters real-time response)
- ✅ **Scientific research** (climate simulation, biopharma, cryptography)
- ✅ **Multimodal generation** (text-to-video, 4D content creation)
- ❌ Small-to-medium model training (cost-prohibitive; B300 Ultra more economical)
- ❌ Edge deployment (power/size not feasible)

## Vendor Information

| Parameter | Value |
|-----------|-------|
| **Vendor** | NVIDIA Corporation |
| **Official Announcement** | First disclosed at GTC 2024-03 |
| **Product Page** | https://www.nvidia.com/en-us/data-center/ |
| **Launch** | **H2 2026** |
| **Generation Naming** | Vera Rubin (honoring dark matter astronomer) |
| **Generation Cadence** | Blackwell (2024–2026) → **Vera Rubin (2026–2028)** → Feynman (2028+) |

## Related Products

- [NVIDIA B300 Ultra](/docs/cards/nvidia/b300-ultra) — Previous Blackwell Ultra generation
- [NVIDIA B200](/docs/cards/nvidia/b200) — Previous flagship
- [NVIDIA H200](/docs/cards/nvidia/h200) — Previous workhorse
- [AMD MI400](/docs/cards/amd/mi400) — Same-generation competitor
- [Google TPU v7 Ironwood](/docs/cards/google/tpu-ironwood) — Inference ASIC counterpart
- [AWS Trainium 3](/docs/cards/aws/trainium-3) — Training ASIC counterpart
- [Full Comparison Table](/docs/comparison)
