---
id: arch-rpu-rdu
title: RPU / RDU (Reconfigurable Dataflow) Architecture
sidebar_label: RPU / RDU
description: "RPU/RDU architecture details: Tenstorrent Grayskull/Wormhole, SambaNova SN40L reconfigurable dataflow architecture, compiler-driven automatic parallelization."
keywords: [RPU, RDU, Reconfigurable Dataflow Unit, Tenstorrent, SambaNova, Grayskull, Wormhole, SN40L]
---

# RPU / RDU (Reconfigurable Dataflow) Architecture

## What is RPU / RDU

**RPU (Reconfigurable Processing Unit)** is **Tenstorrent**'s reconfigurable processing unit, and **RDU (Reconfigurable Dataflow Unit)** is **SambaNova**'s analogous architecture.

**Core concept**: Use **compiler-driven automatic parallelization** to map neural networks onto many small **tensor cores**, eliminating **traditional SIMT scheduling overhead**, achieving better performance/watt than traditional GPUs.

**Representative products**:
- **Tenstorrent Grayskull** (2021): 150W entry
- **Tenstorrent Wormhole** (2023): 16 cores, 200W
- **Tenstorrent Blackhole** (2024): 120 cores, 300W
- **SambaNova SN40L** (2023): 1,020 cores, 1,000 TFLOPS

## RPU/RDU vs GPU

| Dimension | RPU/RDU | GPU (H100) |
|-----------|---------|------------|
| Programming model | **Compiler auto-parallel** | CUDA manual optimization |
| Core structure | **Small tensor cores × hundreds** | Tensor Core × 132 |
| Control flow | **Static dataflow** | Dynamic SIMT |
| Flexibility | **High** (each core independently programmable) | Medium (warp scheduling) |
| Performance/watt | **High** (compiler optimized) | Medium |
| Ecosystem | Small (proprietary SDK) | **CUDA mature** |
| Price | **Low** | High |

## Tenstorrent Series

### Grayskull (e75 / e150)
- **Released 2021-07**
- **120 Tensix cores** (each with 5 RISC-V + 1 tensor engine)
- **150W TDP**
- Primarily for developers

### Wormhole (n150 / n300)
- **Released 2023**
- **8 / 16 Tensix cores**
- **200W TDP**
- Edge servers

### Blackhole (p100a / p150a)
- **Released 2024**
- **120 Tensix cores**
- **300W TDP**
- Data center class

## SambaNova SN40L

- **Released 2023**
- **40 GB HBM / 1,020 RDU cores**
- **600 TFLOPS BF16**
- **150W TDP** (unbelievable)
- Customer: **San Diego Supercomputer Center (SDSC)**
- Ideal for **single-card 70B+ LLM inference** (40GB HBM + RDU efficient execution)

## Software Ecosystem

### Tenstorrent
- **TT-Buda** (compiler, originally acquired Buda)
- **TT-Metalium** (low-level SDK)
- **PyTorch / TensorFlow** integration
- Open source ecosystem

### SambaNova
- **SambaFlow** (compiler)
- **DataScale SN40L** system
- **Enterprise LLM inference** service

## Use Cases

- ✅ **Large model inference** (SN40L single-card 70B+)
- ✅ LLM training (Tenstorrent Blackhole multi-card)
- ✅ Data center energy efficiency optimization (compiler auto-parallel)
- ✅ Research / HPC (open source RISC-V architecture)
- ❌ General GPU computing (small ecosystem)
- ❌ Mainstream deep learning (CUDA performance more mature)

## Detailed Product Pages

### Tenstorrent (RISC-V Tensor Core RDU)
- [Tenstorrent Overview (Grayskull/Wormhole)](/docs/cards/others/tenstorrent) - Full specifications
- [Tenstorrent Blackhole](/docs/cards/others/tenstorrent-blackhole) - 2024 H1 6nm 120 Tensix cores 8GB SRAM 16 BF16 PF cluster Jim Keller architecture

### SambaNova (Dataflow RDU)
- [SambaNova SN40L](/docs/cards/others/sambanova-sn40l) - 2024-09 1,020 RDU cores 638 BF16 TF 128GB HBM3
- [SambaNova SN50](/docs/cards/others/sn50) - 2026 H2 estimated 3nm 256GB HBM3E 1.5 PF

### Other RPU/RDU Architectures
- [Blaize Xplorer](/docs/cards/others/blaize-xplorer) - GSP graph stream 7K TOPS/W 22W 160 TOPS INT8 Edge AI
- [Lightelligence (China)](/docs/cards/others/lightelligence) - Photonic computing 1.6 PF FP16 100W 16 TOPS/W CAS + Tsinghua
- [LightOn Alfred (France)](/docs/cards/others/lighton) - Photonic computing 1.2 PF FP16 80W 15 TOPS/W Microsoft + OVHcloud
- [Esperanto ET-SoC-1](/docs/cards/others/esperanto-et-soc-1) - RISC-V heterogeneous 1332 cores 42 TOPS INT8 75W founded by Dave Patterson

## Related Architectures

- [GPU](/docs/architectures/arch-gpu) - General AI
- [TPU](/docs/architectures/arch-tpu) - Data center
- [WSE](/docs/architectures/arch-wse) - Wafer-scale
- [Complete Comparison Table](/docs/comparison)
