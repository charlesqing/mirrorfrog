---
title: "NVIDIA Rubin R200"
description: "NVIDIA Rubin R200 GPU, based on 3nm process, 336 billion transistors, 288GB HBM4 memory, 50 PFLOPS FP4 compute, next-generation AI training and inference GPU released at GTC 2026"
slug: "nvidia-rubin-r200"
date: "2026-03-17"
vendor: "nvidia"
category: "Data Center GPU"
---

# NVIDIA Rubin R200

NVIDIA Rubin R200 is NVIDIA's next-generation AI GPU announced at GTC 2026, built on TSMC 3nm process with 336 billion transistors, equipped with 288GB HBM4 memory, delivering 50 PFLOPS FP4 inference compute, succeeding the Blackwell architecture.

## Key Specifications

| **Specification** | **Value** |
|-------------------|------------|
| **GPU Architecture** | Rubin Architecture (MCM multi-chip module design) |
| **Process Node** | TSMC 3nm (4NP custom process) |
| **Transistor Count** | 336 billion |
| **FP4 Inference Compute** | 50 PFLOPS |
| **FP8 Training Compute** | 35 PFLOPS |
| **FP16 Compute** | Estimated ~25 PFLOPS |
| **FP32 Compute** | 130 TFLOPS |
| **FP64 Compute** | 200 TFLOPS |
| **INT8 Compute** | Estimated ~100 PFLOPS |
| **Memory Capacity** | 288 GB |
| **Memory Type** | HBM4 |
| **Memory Bandwidth** | 22 TB/s |
| **Interconnect** | NVLink 6 (3.6 TB/s unidirectional) |
| **TDP** | 1,800-2,300W (liquid cooling required) |
| **Release Date** | March 17, 2026 |
| **Mass Production** | Second half of 2026 |
| **Pricing** | $350-400M per NVL72 rack |

## Architecture & Specifications

Rubin R200 adopts a **multi-chip module (MCM) design**, with the core comprising:
- **2 compute dies (GPU dies)**
- **2 I/O dies** (handling HBM controllers and NVLink physical layer)
- **8 HBM4 memory stacks**

### Key Technical Innovations

1. **Third-Generation Transformer Engine**
   - Supports hardware-level adaptive precision compression
   - Dynamically switches precision without rewriting model code (FP4/FP6/FP8/FP16/BF16/TF32/FP32/FP64)

2. **NVLink 6 Interconnect**
   - Single GPU full interconnect bandwidth of 3.6 TB/s (bidirectional)
   - NVL72 rack total bandwidth of 260 TB/s

3. **HBM4 Memory**
   - 288GB capacity (1.5× increase over Blackwell B200's 192GB HBM3e)
   - 22 TB/s bandwidth (2.75× increase over Blackwell B200's 8 TB/s)

## Performance Comparison

| **Comparison** | **Blackwell B200** | **Rubin R200** | **Improvement** |
|-----------------|-------------------|----------------|---------------|
| Transistor Count | 208 billion | 336 billion | 1.6× |
| Memory Capacity | 192GB HBM3e | 288GB HBM4 | 1.5× |
| Memory Bandwidth | 8 TB/s | 22 TB/s | 2.75× |
| NVLink Bandwidth | 1.8 TB/s | 3.6 TB/s | 2× |
| FP4 Inference | ~10 PFLOPS | 50 PFLOPS | 5× |
| TDP | 1,000W | 1,800-2,300W | 1.8-2.3× |

## Platform Configurations

### Vera Rubin NVL72
- **72×** Rubin R200 GPUs
- **36×** Vera CPUs
- **Total Compute**: ~3.6 EFLOPS FP4
- **Total Memory**: 20.7 TB HBM4
- **Total Bandwidth**: 1.58 PB/s
- **TDP**: ~180kW (full liquid cooling required)
- **Pricing**: $3.5-4M

### Vera Rubin NVL144 (Planned)
- **144×** Rubin R200 GPUs
- **72×** Vera CPUs
- **Total Compute**: ~7.2 EFLOPS FP4
- **LLM Inference Cost**: Reduced to 1/10 of Blackwell platform

## Mass Production & Delivery

- **Mass Production**: Second half of 2026
- **First Customers**: AWS, Azure, Google Cloud, Oracle Cloud
- **On-Premises Users**: Q1 2027 availability
- **Partner Products**: Market delivery in second half of 2026

## Application Scenarios

Rubin R200 targets **data center and supercomputing scenarios**, suitable for:
- Trillion-parameter LLM training
- High-performance AI inference (low latency, high throughput)
- Reinforcement learning (RL) and agentic AI
- Scientific computing and AI factories

## References

- [NVIDIA Official News](https://investor.nvidia.com/news/press-release-details/2026/NVIDIA-Kicks-Off-the-Next-Generation-of-AI-With-Rubin--Six-New-Chips-One-Incredible-AI-Supercomputer/default.aspx)
- [NVIDIA Rubin GPU Deep Dive](https://lucy.suiyan.cc/blog/2026-06-01_nvidia-vera-rubin-gpu/)
- [NVIDIA GTC 2026 Major Preview](https://www.163.com/dy/article/KNMD49PM0556GROA.html)
