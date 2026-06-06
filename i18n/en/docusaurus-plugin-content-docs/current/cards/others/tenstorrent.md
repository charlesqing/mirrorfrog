---
id: tenstorrent
title: Tenstorrent Grayskull / Wormhole
sidebar_label: Tenstorrent Wormhole
description: "Tenstorrent Grayskull/Wormhole detailed specs: Tensix architecture, on-chip SRAM, Ethernet interconnect, RISC-V open-source ecosystem."
keywords: [Tenstorrent, Tensix, Wormhole, Grayskull, RISC-V, Open-source AI Chip]
---

# Tenstorrent Grayskull / Wormhole

## Product Overview

Tenstorrent, led by legendary architect **Jim Keller**, develops AI accelerators based on the **RISC-V** architecture. The **Tensix core** integrates a RISC-V CPU, matrix/vector/data transfer engines. **Wormhole** connects via **standard Ethernet RDMA** (no NVLink lock-in), and the software stack — **TT-Metalium** and **TT-BUDA** — is fully open-source.

## Core Specifications

| Item | Grayskull (e150/e300) | Wormhole (n150/n300) |
|------|----------------------|----------------------|
| **Architecture** | Tensix | Tensix |
| **Process** | TSMC 12nm | TSMC 12nm |
| **Tensix Cores** | 120 | 144 |
| **On-chip SRAM** | 120 MB | 144 MB |
| **FP32** | ~50 TFLOPS | ~75 TFLOPS |
| **INT8** | ~300 TOPS | ~450 TOPS |
| **Interconnect** | PCIe 4.0 | 8× 100GbE RDMA |
| **TDP** | 75W / 300W | 150W / 300W |

## Manufacturer Info

| Item | Detail |
|------|--------|
| **Manufacturer** | Tenstorrent Inc. |
| **Website** | https://tenstorrent.com |
| **Product Page** | https://tenstorrent.com/hardware/ |
| **TT-Metalium (driver)** | https://github.com/tenstorrent/tt-metal |
| **TT-BUDA** | https://github.com/tenstorrent/tt-buda |
| **Documentation** | https://docs.tenstorrent.com |

## Key Features

- **Tensix Architecture**: RISC-V + Matrix + Vector + Data Transfer
- **No HBM**: fully on-chip SRAM (suited for specific models)
- **Ethernet Interconnect**: avoids NVLink vendor lock-in
- **Fully Open-Source Software Stack**
- **Next-gen Blackhole**: 2025 release, 2× performance

## Use Cases

- Open-source AI developers
- Medium-scale AI training
- Academic research
- RISC-V ecosystem

## Related Comparisons

- [Groq LPU](/docs/cards/others/groq-lpu) — similar innovation
- [SambaNova SN40L](/docs/cards/others/sambanova-sn40l) — similar positioning
- [NVIDIA H100](/docs/cards/nvidia/h100) — mainstream
