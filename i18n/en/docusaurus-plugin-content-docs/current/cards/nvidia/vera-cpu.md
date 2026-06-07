---
id: vera-cpu
title: NVIDIA Vera CPU (2026)
sidebar_label: NVIDIA Vera CPU
description: "NVIDIA Vera CPU full specs: 88-core custom Armv9.2, 176 threads, 1.5TB LPDDR5X, 1.2 TB/s bandwidth, NVLink-C2C 1.8 TB/s, purpose-built for Agentic AI inference, released March 2026"
keywords: [NVIDIA Vera, Vera CPU, Rubin platform, Armv9.2, NVLink-C2C, Agentic AI, FP8, LPDDR5X, 88 cores, 1.5TB memory]
---

# NVIDIA Vera CPU (2026)

The **Vera CPU** is NVIDIA's second-generation custom Arm CPU, officially launched at **GTC 2026 (March 2026)** as the central processor of the **Vera Rubin** supercomputing platform. It is the world's first CPU with **native FP8 support**, purpose-built for **Agentic AI** inference and reinforcement learning workloads.

## Key Specifications

| Item | Specification |
|------|---------------|
| **Architecture** | NVIDIA custom Arm, compatible with Armv9.2 ISA |
| **Cores** | 88 cores |
| **Threads** | 176 threads (NVIDIA Spatial Multithreading) |
| **Release** | March 2026 (GTC 2026) |
| **Production** | Q3 2026 (shipping with Rubin platform) |

## Memory & Bandwidth

| Item | Specification |
|------|---------------|
| **Memory Type** | LPDDR5X |
| **Max Capacity** | 1.5 TB (per CPU) |
| **Memory Bandwidth** | 1.2 TB/s |
| **Vera Rubin NVL72 Total** | 36 Vera CPUs = 54 TB LPDDR5X system memory |

## CPU-GPU Interconnect

| Item | Specification |
|------|---------------|
| **Interconnect** | NVLink-C2C (2nd gen) |
| **Coherent Bandwidth** | 1.8 TB/s (CPU↔GPU) |
| **vs PCIe Gen6** | 7× the bandwidth of PCIe Gen6 |
| **Architecture** | Unified virtual address space (CPU + GPU) |

## AI Inference Performance

Vera CPU is heavily optimized for the **AI inference pipeline**:

- **World's first native FP8 CPU**: 6× 128-bit SVE2 SIMD units per core
- **Data processing**: **2×** the performance of previous-gen Grace CPU
- **Agentic inference**: Single rack of 256 liquid-cooled Vera CPUs can run **22,500 concurrent CPU sandboxes**
- **Long context**: 1.5 TB large memory cache for 1M+ token contexts

## Vera Rubin Platform Integration

Vera CPU and Rubin R100 GPU use **coWoS-L (Chip-on-Wafer-on-Substrate with LSI)** packaging:

```
┌─────────────────────────────────────────────┐
│        Vera Rubin NVL72 Rack (1 rack)      │
├─────────────────────────────────────────────┤
│  36 × Vera CPU  +  72 × Rubin R100 GPU   │
│  NVLink-C2C 1.8 TB/s full interconnect   │
│  Total: 54 TB LPDDR5X + 576 GB HBM4    │
└─────────────────────────────────────────────┘
```

## Use Cases

| Scenario | Description |
|----------|-------------|
| **Agentic AI Inference** | Multi-step reasoning, tool use, environment interaction |
| **Reinforcement Learning** | High-throughput CPU sandbox parallel simulation |
| **LLM Training** | MoE model training — same performance as Blackwell with **¼ the GPU count** |
| **Data Preprocessing** | Data compression/decompression, tokenization, feature engineering |

## Competitive Comparison

| Feature | Vera CPU | Grace CPU (prev-gen) | AMD EPYC 9005 |
|---------|-----------|----------------------|---------------|
| Cores | 88 | 72 | 192 |
| Architecture | Custom Armv9.2 | Custom Armv9 | x86-64 (Zen 5) |
| Memory | LPDDR5X 1.5TB | LPDDR5X 960GB | DDR5 6TB |
| Memory Bandwidth | 1.2 TB/s | 1.0 TB/s | ~0.6 TB/s |
| CPU-GPU Interconnect | NVLink-C2C 1.8 TB/s | NVLink-C2C 900 GB/s | PCIe Gen6 256 GB/s |

## References

- [NVIDIA Official News: Vera Rubin Platform Unveiled](https://investor.nvidia.com/news/press-release-details/2026/NVIDIA-Kicks-Off-the-Next-Generation-of-AI-With-Rubin--Six-New-Chips-One-Incredible-AI-Supercomputer/default.aspx)
- [Tech Insider: Vera Rubin Platform Analysis](https://tech-insider.org/nvidia-vera-rubin-platform-gtc-2026-rubin-r100-gpu/)
- [Baidu Baike: Vera CPU](https://baike.baidu.com/item/Vera%20CPU/65759277)

## Related Chips

- [NVIDIA Rubin R100](/en/docs/cards/nvidia/rubin) — GPU part of the Vera Rubin platform
- [NVIDIA Rubin R200 Ultra](/en/docs/cards/nvidia/rubin-r200) — Rubin Ultra version
- [NVIDIA NVLink 6 Switch](/en/docs/cards/nvidia/nvlink-6) — Platform interconnect switch
