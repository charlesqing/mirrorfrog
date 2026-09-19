---
id: metax-c600
title: MetaX C600 (2025)
sidebar_label: MetaX C600
description: "MetaX C600 detailed specs: in-house XCORE 1.5 architecture, domestic 7nm process, 1000 TFLOPS FP8 (rivaling the H100), 144GB HBM3e, 3.6 TB/s, fully domestic GPU, released in 2025"
keywords: [MetaX C600, MetaX, MetaX C600, XCORE 1.5, 7nm, 144GB HBM3e, FP8 1000 TFLOPS, fully domestic GPU, MXMACA, CUDA compatible]
---

# MetaX C600 (2025)

## Product Overview

The **MetaX C600** is the first **end-to-end domestic general-purpose GPU**, released by MetaX Integrated Circuits in **October 2025**. Based on the in-house **XCORE 1.5 architecture** and a domestic **7nm process** (SMIC), it integrates **144GB HBM3e memory** (3.6 TB/s bandwidth) with **peak FP8 compute of 1000 TFLOPS** (benchmarked against the NVIDIA H100's 989 TFLOPS FP8), 400W TDP, and the **MXMACA software stack** compatible with the CUDA ecosystem.

It is the first domestic general-purpose GPU with an end-to-end domestic production chain (IP design → wafer manufacturing → packaging and testing), achieving 100% de-Americanization from chip design to manufacturing.

**MetaX Product Lines**:
- **N Series**: inference chips
- **C Series**: general-purpose GPUs (training + inference) — C500 (64GB HBM) → **C600 (this page)** → C700 (planned for 2027 H2)
- **G Series**: graphics rendering

## Core Specifications

| Parameter | Value |
|------|------|
| **Architecture** | In-house **XCORE 1.5** (dozens of core IPs) |
| **Process** | **7nm** (domestic SMIC process) |
| **FP8** | **1000 TFLOPS** (rivals the H100's 989 TFLOPS) |
| **FP32** | 15 TFLOPS |
| **FP16 / BF16** | **~500 TFLOPS** (shares Tensor Cores with FP8 at a 1:2 ratio) |
| **INT8** | **~1,000 TOPS** |
| **Precision Support** | FP8 / FP16 / BF16 / FP32 / INT8 / INT4 mixed precision |
| **Memory Capacity** | **144GB HBM3e** |
| **Memory Bandwidth** | **3.6 TB/s** |
| **TDP** | 400 W |
| **Energy Efficiency** | 2.5 TFLOPS/W (FP8) |
| **Interconnect** | In-house **MetaXLink** high-speed interconnect, **320 GB/s** bidirectional per card, flexible networking of 2-64 cards |
| **Maximum Cluster** | **256-card supernode** (supports interconnection of 1,024+ cards in a single cluster) |
| **Reliability** | ECC memory correction + RAS fault tolerance + multi-tenant hardware isolation |
| **Packaging** | 2.5D advanced packaging (JCET / Tongfu Microelectronics) |
| **EDA** | Domestic solutions such as Empyrean |
| **Release** | July 2025 (debut at WAIC 2025) / official release in October 2025 |
| **Mass Production** | Risk production by end of 2025 |
| **Security Certification** | National Security and Reliability Assessment **Level I** (2026-05-26, the first fully domestic flagship GPGPU on the list) |

## End-to-End Domestic Production

The MetaX C600 is the first general-purpose GPU that is **domestic across the entire chain**:

| Stage | Domestic Solution | Description |
|------|---------|------|
| **IP Design** | MetaX in-house XCORE 1.5 | Fully independent from instruction set to compute units |
| **Wafer Manufacturing** | SMIC and others | Domestic 7nm process |
| **Packaging & Testing** | JCET, Tongfu Microelectronics | 2.5D advanced packaging |
| **EDA Tools** | Empyrean and others | Domestic EDA tools being adopted step by step |
| **Software Stack** | MXMACA | In-house, CUDA compatible |

> **Strategic significance**: completely eliminating dependence on overseas supply chains and building secure, reliable, independent compute infrastructure.

## MXMACA Software Ecosystem

| Layer | Tool | Description |
|------|------|------|
| **Software Stack** | **MXMACA** | MetaX unified compute architecture |
| **AI Frameworks** | PyTorch | Native support |
| | DeepSpeed | Distributed training |
| **CUDA Compatibility** | Automatic migration tools | Cuts code migration cost by **over 90%** |
| **Large Models** | Supports domestic thousand-card clusters | Completed full-parameter training of multiple models in cooperation with the Chinese Academy of Sciences |
| **Ecosystem Strategy** | "1+6+X" | GPU foundation empowering finance, healthcare, energy, education/research, transportation, and entertainment |

## Vendor Information

| Parameter | Details |
|------|------|
| **Company** | MetaX Integrated Circuits (Shanghai) Co., Ltd. |
| **Nanjing Team** | R&D team of nearly 100 people ("strongest brains") |
| **Project Initiation** | February 2024 (C600 initiated, investment of about 1.37 billion RMB) |
| **Tape-Out** | October 2024 |
| **Release** | October 2025 |
| **Mass Production** | Risk production by end of 2025 |
| **IPO Status** | Completed two rounds of inquiry responses, pursuing a STAR Market listing |
| **Revenue** | 320 million RMB in H1 2025, with 1.43 billion RMB in orders on hand |
| **Deployed** | 25,000+ GPUs |
| **Pricing** | C500 about 38,900 RMB per card (1/3 of the A100) |
| **C700 Plan** | Production in 2027 H2, over 80 billion transistors |

## Use Cases

- ✅ **Domestic large-model training** (thousand-card clusters verified for full-parameter training)
- ✅ **Generative AI inference** (extra-large 144GB HBM3e memory)
- ✅ **Domestic intelligent computing centers** (end-to-end domestic production; de-Americanization is a hard requirement)
- ✅ **Government/SOE projects** (mandatory independent and controllable requirements)
- ✅ **FP8 inference** (1000 TFLOPS, rivaling the H100)
- ✅ **CUDA migration scenarios** (90%+ reduction in migration cost)
- ❌ **Graphics rendering** (general-purpose but not graphics-dedicated; the G Series is a better fit)
- ❌ **Native CUDA ecosystem** (migration via MXMACA required)
- ❌ **Early-stage production supply** (risk production only by end of 2025)

## Comparison with NVIDIA H100

| Metric | MetaX C600 | NVIDIA H100 | Difference |
|------|-----------|-------------|------|
| **Process** | 7nm (domestic) | TSMC 4nm | H100 more advanced |
| **FP8** | **1000 TFLOPS** | 989 TFLOPS | C600 +1% |
| **FP16** | Not disclosed (estimated ~300 TFLOPS) | 989 TFLOPS | To be confirmed |
| **FP32** | 15 TFLOPS | 67 TFLOPS | H100 4.5x |
| **Memory** | **144GB HBM3e** | 80GB HBM3 | **C600 +80%** |
| **Bandwidth** | 3.6 TB/s | 3.35 TB/s | C600 +7% |
| **Energy Efficiency** | 2.5 TFLOPS/W | ~1.4 TFLOPS/W | C600 has the edge (FP8) |
| **Ecosystem** | MXMACA (CUDA compatible) | CUDA | H100 more mature |
| **Price** | To be announced (C500 is 1/3 of the A100) | ~$30k+ | C600 expected to be cheaper |
| **Domestic Production** | ✅ 100% | ❌ | Unique to C600 |

## Key Timeline

| Date | Event |
|------|------|
| 2024-02 | C600 project initiated (investment of 1.37 billion RMB) |
| 2024-10 | C600 tape-out delivered |
| 2025-07 | C600 Baidu Baike entry created |
| **2025-10** | **C600 officially released in Nanjing** (this page) |
| End of 2025 | C600 risk production |
| 2027 H2 | C700 targeted for production |

## Production Status Confirmation (2026-09 Update)

| Parameter | Status |
|------|------|
| **Mass Production Time** | Mass production achieved in **May 2026** |
| **Process** | Domestic 7nm |
| **Memory** | 144 GB HBM3e |
| **FP8 Compute** | About 1,000 TFLOPS |
| **Compliance** | Completed the **national security and stability testing** |
| **Interconnect** | In-house MetaXLink, already applied at thousand-card scale (bandwidth close to H100 level), now pushing toward 10,000-card deployments |

> 📌 **Procurement positioning**: the C600 is MetaX's **currently purchasable flagship on sale**. Until the next-generation C700 enters production in the second half of 2027, the C600 serves as the transitional supply of high-end domestic GPUs — for domestic compute projects that need to **land right now**, it is one of the options worth evaluating.

## Related Cards

- [Kunlunxin P800](/docs/cards/others/kunlun-p800) — Strongest domestic AI compute
- [Hygon DCU K100](/docs/cards/others/hygon-dcu-k100) — x86-compatible GPGPU
- [Cambricon MLU 590](/docs/cards/others/cambricon-mlu) — Domestic AI training card
- [Moore Threads MTT S5000](/docs/cards/others/moore-threads-mtt-s5000) — Domestic GPU
- [NVIDIA H100](/docs/cards/nvidia/h100) — FP8 benchmark
- [NVIDIA H200](/docs/cards/nvidia/h200) — FP8 benchmark
- [Enflame T20](/docs/cards/others/enflame-t20) — Domestic AI training card
