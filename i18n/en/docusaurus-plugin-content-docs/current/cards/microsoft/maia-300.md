---
id: maia-300
title: Microsoft Azure Maia 300 (Third-Generation Custom AI Inference Accelerator · Multi-Chiplet N2P)
sidebar_label: Maia 300
description: "Microsoft's third-generation custom AI accelerator Maia 300: multi-chiplet architecture with compute chiplets on TSMC N2P, 8 HBM4 stacks delivering 288GB @ 18 TB/s, FP8 6.9 / FP4 13.8 PFLOPS, 950W TDP, 96 accelerators per 167kW rack, production deployment in 2027."
keywords: [Maia 300, Microsoft Maia, Azure, custom silicon, TSMC N2P, HBM4, MXFP4, inference accelerator, OCP, chiplet]
---

# Microsoft Azure Maia 300 (Third-Generation Custom AI Inference Accelerator · Multi-Chiplet N2P)

## Product Overview

**Microsoft Azure Maia 300** is Microsoft's third-generation custom AI accelerator, announced on **October 12, 2026** at the **Open Compute Project (OCP) Global Summit** in San Jose by **Scott Guthrie**, Executive Vice President for Cloud and AI. It is the first Maia part to use a **multi-chiplet design**, splitting compute, memory-controller, and I/O functions across separate dies: compute chiplets are built on **TSMC N2P** (2nm-class), while the memory and I/O chiplets use a process better suited to bandwidth, connectivity, and cost (3nm-class supporting silicon).

Maia 300 is an **inference-first** architecture purpose-built for long-context reasoning, latency-sensitive conversational experiences, and sustained multi-step agentic tasks. Rani Borkar, corporate VP for Azure hardware systems and infrastructure, said: "We believe we have built the best product for these workloads. We will back that confidence with action by deploying Maia at gigawatt scale starting next year." Starting in **2027**, Microsoft will scale the Azure Maia family to **multi-gigawatt deployments**, making it the primary inference system across Microsoft's products and services.

Architecturally, Maia 300 evolves the **SDLA (software-defined dataflow architecture)** introduced with Maia 200 in three key ways: memory moves from the SoC's **uniform memory access (UMA)** organization to a locality-aware **non-uniform (NUMA)** organization across chiplets, letting software place data next to the compute that uses it; new narrow-precision formats with **hardware-accelerated data type conversion** reduce the bytes moved per token; and the rack doubles to 96 accelerators while the scale-up domain grows to a superpod of **12,288 accelerators**.

Relative to Maia 200, the **multi-chiplet architecture raises system compute FLOPs by 36%**, while adding **2.5× HBM bandwidth**, **33% more capacity**, and roughly **2× HBM bandwidth per watt**. Microsoft claims Maia 300 delivers **40% more tokens per megawatt** than leading GPU-based systems, and in the full 96-accelerator configuration delivers up to **7×** the rack-scale token throughput of Maia 200 with **more than 2.5× the performance per watt**.

## Key Specifications

| Parameter | Value |
|------|------|
| **Architecture** | Maia 300 (multi-chiplet: compute chiplets + memory-controller chiplets + I/O chiplets; SDLA software-defined dataflow architecture) |
| **Process** | TSMC N2P (2nm-class, compute chiplets) |
| **Memory** | 288 GB |
| **Memory Type** | HBM4 (8 stacks, 36 GB each) |
| **Memory Bandwidth** | 18 TB/s |
| **FP8** | 6.9 PFLOPS |
| **FP4** | 13.8 PFLOPS |
| **FP16** | Not disclosed |
| **INT8** | Not disclosed |
| **TDP** | 950 W |
| **Interconnect** | 3.2 TB/s bi-directional scale-up per accelerator; two-tier Ethernet scale-up with custom AI transport; on-die AI network controller exposing 32 × 400 Gb/s Ethernet ports; host interface PCIe Gen6 x16 |
| **Release / Production** | Released 2026-10-12; production deployment begins in 2027 |

> **Compute caveat**: Microsoft's official Azure blog **does not state absolute compute figures**, publishing only the relative claim that system compute FLOPs improve **36%** over Maia 200. The FP8 / FP4 values in this table come from the **Maia 300 technical paper** published alongside the announcement (FP4 13.8 POPS, FP8 6.9 POPS) and cross-checked by multiple outlets; this pair is internally consistent with the official +36% figure (Maia 200's 10.1 POPS FP4 × 1.36 ≈ 13.8).
>
> **Efficiency claim caveat**: Microsoft states 40% more tokens per megawatt than leading GPU systems but **does not name the comparison GPU, model, or serving configuration**, and Maia runs only inside Microsoft, so the claim cannot be independently verified externally.
>
> **TDP caveat**: 950 W is the thermal design power of the **entire SoC**, not a board or rack power figure.

## Key Features

### Multi-Chiplet Architecture: Matching Process to Function

- **Compute chiplets placed on TSMC N2P**, extracting the advanced process's greatest performance-per-watt benefit
- **Memory-controller and I/O split onto dies optimized for bandwidth, connectivity, and cost**, letting each function use the technology best suited to its role while increasing the silicon area dedicated to compute performance
- Official figures: this strategy raises system **compute FLOPs by 36%**, adds **2.5× HBM bandwidth**, and provides **14% more scale-up bandwidth**

### Inference-First Low-Precision Design

- **Enhanced MXFP4** and **sub-3-bit storage formats**, paired with **hardware-accelerated data type conversion**
- Narrower representations reduce memory footprint and data movement, supporting larger models, longer contexts, and more concurrent sessions within the same power envelope

### Memory Hierarchy: NUMA + Software-Managed Scratchpad

- Memory moves from UMA to a **NUMA** organization across chiplets, with memory located near each compute region
- SDLA explicitly controls **DMA engines, on-die SRAM, HBM, and the network-on-chip**, placing data next to the compute that uses it so data travels shorter distances and spends less energy in transit
- **On-die SRAM used as a software-managed scratchpad** to ease pressure on HBM
- Vector engine ISA enhancements for key inference kernels including **softmax** and **low-precision type casting**

### One Scale-Up Fabric: From Pod to Superpod

- **Half-switched in-rack topology**: each accelerator divides its scale-up connectivity between direct links and switched paths — direct links connect two accelerators in a tray, while the switched fabric connects all 96 accelerators in the rack into one pod; all in-rack connectivity uses electrical links to reduce power and cost
- **Optical second tier across racks**: second-tier switches connect up to **128 racks** into a superpod, with optics providing the reach required to extend the scale-up network across pods
- **One fabric rather than separate scale-up and scale-out domains**: integrated network controllers and specialized AI transport use the same communication semantics inside the pod and across the superpod, so an accelerator can initiate communication to any accelerator in the superpod without involving the host or a discrete scale-out NIC
- **Three latency domains**: directly connected accelerator pairs (lowest latency), within-pod (one switch hop), and across pods (three switch hops), letting software keep tensor-parallel traffic in the lowest-latency domains
- **Bandwidth allocated to the workload**: the split between in-rack and cross-rack bandwidth per accelerator is not fixed at design time but becomes a runtime parameter set by job packing

### Rack-Scale Architecture

- **96 accelerators within 167 kW**: spread across **24 four-accelerator trays**, eliminating separate host trays so power and thermal resources are managed as one system
- **Consolidated switch architecture**: six high-radix switch ASICs integrated into three liquid-cooled switch trays
- **Disaggregated inference**: after prefill completes, KV state moves directly to selected decode workers over the same scale-up fabric rather than leaving the domain through a host-mediated scale-out path
- **Flexible cooling**: liquid cooling removes more than 80% of rack thermal load (accelerators, voltage regulators, switch ASICs) while air cooling covers memory, storage, and ancillaries; the rack can connect directly to facility water or use a heat-exchanger unit in air-cooled datacenters

## Use Cases

- ✅ **Long-context reasoning** and latency-sensitive conversational experiences
- ✅ **Sustained multi-step agentic tasks** (multi-step agentic work behind GitHub coding experiences)
- ✅ **Cloud-scale model serving** (Microsoft Foundry)
- ✅ **Inference and data generation for the MAI team** (developing next-generation in-house models)
- ✅ **Latency-sensitive clinical documentation workflows** (Dragon Copilot)
- ❌ Frontier pre-training (Microsoft continues to train models with NVIDIA and AMD)
- ❌ External rental (Microsoft says "our own AI services business is large enough. We want to serve ourselves first")

## Comparison

- [Microsoft Maia 200](/docs/cards/microsoft/maia-200) — Predecessor (monolithic N3P, 6 HBM3e stacks, 216GB @ 7 TB/s, 750W)
- [NVIDIA B200](/docs/cards/nvidia/b200) — Mainstream GPU inference competitor
- [NVIDIA GB300](/docs/cards/nvidia/gb300) — Rackscale competitor
- [AMD MI455X](/docs/cards/amd/mi455x) — Same-generation open-ecosystem competitor

## Data Sources

- [Microsoft Azure official blog: Deep dive into Azure Maia 300 architecture](https://azure.microsoft.com/en-us/blog/deep-dive-into-azure-maia-300-architecture/) — N2P compute chiplets and multi-chiplet split, +36% compute FLOPs, 8 HBM4 stacks / 288 GB / 18 TB/s, 2.5× bandwidth / +33% capacity / ~2× bandwidth per watt vs Maia 200, NUMA memory organization, SDLA, 96 accelerators / 24 trays / 167 kW, two-tier scale-up with 12,288-accelerator superpod, 7× rack token throughput and 2.5× perf-per-watt
- [StorageReview: Microsoft Maia 300 Puts 288GB of HBM4 at 18TB/s on an N2P Chiplet and 96 Accelerators in a 167kW Rack](https://www.storagereview.com/news/microsoft-maia-300-hbm4-n2p-chiplet-96-accelerator-rack) — Full specification table from the Microsoft technical paper: FP4 13.8 POPS / FP8 6.9 POPS, 3.2 TB/s bi-directional scale-up, rack 27.6 TB HBM / 1,728 TB/s, rack FP4 1,324 POPS, 32 × 400Gb/s Ethernet ports, PCIe Gen6 x16
- [Notebookcheck: Microsoft Maia 300 AI chip arrives with monstrous 288 GB HBM4 memory and 18 TB/s bandwidth](https://www.notebookcheck.net/Microsoft-Maia-300-AI-chip-arrives-with-monstrous-288-GB-HBM4-memory-and-18-TB-s-bandwidth.1422220.0.html) — 8 × 36 GB HBM4 stacks, 9 Gb/s pin speed, FP4 13.8 PFLOPS / FP8 6.9 PFLOPS, 950 W TDP, cross-check
- [Forbes Middle East: Microsoft Unveils Maia 300 AI Chip](https://www.forbesmiddleeast.com/innovation/artificial-intelligence-machine-learning/microsoft-unveils-maia-300-ai-chip-plans-multi-gigawatt-rollout-of-in-house-silicon-from-2027) — OCP Summit announcement, +40% tokens per megawatt, 7× rack token throughput for the 96-accelerator rack, technical paper authors Rani Borkar and Saurabh Dighe
