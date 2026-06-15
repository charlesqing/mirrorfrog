---
id: vera-cpu
title: "NVIDIA Vera CPU"
description: "NVIDIA Vera CPU, 88 custom Olympus cores, ARMv9.2 instruction set, 1.5TB LPDDR5X memory, 1.2TB/s bandwidth, AI-specific CPU released at GTC 2026"
date: "2026-03-17"
vendor: "nvidia"
category: "Data Center CPU"
---

# NVIDIA Vera CPU

NVIDIA Vera CPU is NVIDIA's AI-specific CPU announced at GTC 2026, featuring 88 custom Olympus cores, supporting ARMv9.2 instruction set, equipped with up to 1.5TB LPDDR5X memory and 1.2TB/s bandwidth, serving as the host CPU for the Vera Rubin platform, responsible for data movement scheduling, memory management, and system control orchestration.

## Key Specifications

| **Specification** | **Value** |
|-------------------|------------|
| **CPU Architecture** | ARM architecture (Olympus cores) |
| **Instruction Set** | ARMv9.2 (fully compatible) |
| **Core Count** | 88 Olympus cores |
| **Thread Count** | 176 threads (spatial multithreading) |
| **Single-Core Performance** | 2× previous generation |
| **Max Memory Capacity** | 1.5 TB (LPDDR5X) |
| **Memory Bandwidth** | 1.2 TB/s |
| **Interconnect** | NVLink-C2C (1.8 TB/s) |
| **On-Chip Interconnect** | 2nd-gen NVIDIA SCF (3.4 TB/s bisection bandwidth) |
| **TDP** | Not disclosed (estimated 350-500W) |
| **Release Date** | March 17, 2026 |
| **Mass Production** | Second half of 2026 |

## Architecture & Specifications

Vera CPU adopts a **monolithic compute chip design**, avoiding cross-chiplet communication latency, maintaining stable latency and throughput under all-core load, with predictable performance.

### Key Technical Innovations

1. **88 Custom Olympus Cores**
   - Supports spatial multithreading (176 threads)
   - Single-core performance 2× previous generation
   - Industry-leading energy efficiency

2. **World's First CPU Supporting FP8 Precision**
   - Fully compatible with ARMv9.2 instruction set
   - Hardware-level FP8 compute support

3. **2nd-Gen NVIDIA SCF (Scalable Coherent Fabric)**
   - Provides 3.4 TB/s bisection bandwidth
   - On-chip mesh + unified cache
   - Latency-free scaling to 88 cores

4. **NVLink-C2C Interconnect**
   - Coherent bandwidth up to 1.8 TB/s
   - Enables seamless data sharing between CPUs and between CPU and GPU
   - Supports unified memory system

5. **Full Confidential Computing**
   - Supports hardware-enforced security isolation
   - Protects sensitive data and code

## Memory Subsystem

- **Max Memory Capacity**: 1.5 TB (3× previous generation)
- **Memory Type**: LPDDR5X
- **Memory Bandwidth**: 1.2 TB/s (2× bandwidth, 1/2 power vs traditional CPU)

## Companion Platform

### Vera Rubin NVL72
- **72×** Rubin R200 GPUs
- **36×** Vera CPUs
- **Total Memory**: 54 TB LPDDR5X
- **TDP**: ~180kW (full liquid cooling required)

### HGX Rubin NVL8
- **8×** Rubin R200 GPUs
- **2×** Vera CPUs
- For small-to-medium scale AI training and inference

## Deployment Formats

1. **High-Density Liquid-Cooled Vera CPU Rack**
   - Based on NVIDIA MGX
   - Supports up to 256 Vera CPUs
   - Supports over 22,500 concurrent environments
   - For AI factory-scale reinforcement learning and agentic AI

2. **Standard Server Configuration**
   - Supports dual-socket and single-socket standard configurations
   - Adaptable to general data center needs

3. **Independent CPU Platform**
   - Can be used as high-performance independent CPU
   - Supports hyperscale cloud, data analytics, storage, enterprise workloads, HPC

## Performance Advantages

- **Software environment runtime speed**: Up to 50% faster than traditional architecture CPUs
- **Efficiency**: 2× traditional architecture CPUs
- **RL evaluation cycle**: Can be shortened by 50% under full load
- **AI workflow**: Seamless collaboration with NVIDIA GPUs, ensuring full-speed AI workflow

## Application Scenarios

Vera CPU is designed for the **AI era**, suitable for:
- Reinforcement learning (RL) and agentic AI
- Data center host CPU (data movement scheduling, memory management, system control orchestration)
- Hyperscale cloud
- Data analytics and storage
- Enterprise workloads and HPC

## References

- [NVIDIA Official Vera CPU Page](https://www.nvidia.cn/data-center/vera-cpu/)
- [NVIDIA Rubin Platform Deep Dive](https://lucy.suiyan.cc/blog/2026-06-01_nvidia-vera-rubin-gpu/)
- [NVIDIA GTC 2026 Major Preview](https://www.163.com/dy/article/KNMD49PM0556GROA.html)
