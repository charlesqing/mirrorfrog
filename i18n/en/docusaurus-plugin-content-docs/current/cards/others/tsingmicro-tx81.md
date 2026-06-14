---
id: tsingmicro-tx81
title: "Tsingmicro TX81 (2024)"
sidebar_label: TX81
description: "Tsingmicro TX81 detailed specs: reconfigurable RPU architecture, C2C computing grid technology, supports trillion-parameter large models, energy efficiency 3× better than GPU, cost reduced 50%, released 2024"
keywords: [Tsingmicro, TX81, RPU, reconfigurable computing, C2C computing grid, cloud AI chip, domestic AI chip]
---

# Tsingmicro TX81 (2024)

## Product Overview

**TX81** is Tsingmicro's **cloud high-compute AI chip** mass-produced in **2024**, based on Tsingmicro's self-developed **reconfigurable computing architecture (RPU)** design, using unique **C2C (Compute-to-Compute) computing grid technology**, building high-bandwidth, low-latency data flow paths, supporting **trillion+ parameter large model deployment**, overall solution cost reduced by **50%** compared to same-industry products, energy efficiency improved by **3×**, is Tsingmicro's main chip product for large-scale AI application scenarios such as AI computing centers.

**Positioning**: **Cloud training+inference integrated chip** (RPU architecture, different from GPU/ASIC paths), relying on reconfigurable architecture's flexibility, simultaneously supporting training and inference scenarios.

## Core Specifications$

| Item | Parameter |
|------|-----------|
| **Architecture** | Self-developed **RPU (Reconfigurable Processing Unit)**, reconfigurable computing architecture |
| **Process** | Not disclosed (estimated 7nm/6nm) |
| **FP32/FP16/INT8 Compute** | Not disclosed (official sources have not disclosed specific TFLOPS/TOPS values) |
| **C2C Computing Grid** | Unique architecture, high-bandwidth, low-latency data paths, scalability and flexibility superior to traditional switch solutions |
| **Large Model Support** | **Trillion+ parameter** large model deployment |
| **Memory** | Not disclosed (estimated 32-64GB HBM2e/HBM3) |
| **Memory Bandwidth** | Not disclosed (estimated 1-2 TB/s) |
| **TDP** | 300 W (estimated) |
| **Interconnect** | C2C grid interconnect (multi-card expansion) |
| **Release** | **2024** (mass production) |
| **Mass Production** | Since 2024 |
| **Software Stack** | Tsingmicro software stack (supports PyTorch/TensorFlow adaptation) |

> ⚠️ **Specification Note**: Detailed specifications of TX81 (TDP, memory, specific compute values) are not fully disclosed by official sources. Some values above are estimates based on public reports, subject to Tsingmicro's subsequent official data sheet.

## RPU Architecture Advantages

Tsingmicro's RPU architecture is the **fourth category of general-purpose computing chips** beyond CPU, FPGA, and GPU**:

| Feature | RPU (Reconfigurable) | GPU | Advantage |
|---------|---------------------|------|----------|
| **Energy Efficiency** | Same compute power consumption **50%+ lower** than GPU | Baseline | RPU better |
| **Flexibility** | Hardware-level reconfigurable, algorithm-hardware co-optimization | Fixed architecture | RPU more flexible |
| **Scalability** | C2C computing grid, no external switch bottleneck | NVLink/InfiniBand | Architecture-level advantage |
| **Cost** | Solution cost **50% lower** than same industry | Baseline | RPU better |

## Tsingmicro Product Matrix

| Series | Positioning | Representative Product | Release |
|---------|---------------|----------------------|---------|
| **TX5 Series** | IoT/edge vision | TX510 | 2021 |
| **TX8 Series** | Cloud high compute | **TX81** | **2024** |
| **TX8 Series (Next Generation)** | Cloud high compute (upgraded) | TX82 (planned) | 2026 (planned) |

## Verified Deployments

- **REX1032 Training-Inference Integrated Server**: Equipped with TX81 chips, supports trillion-parameter large model deployment
- **Adapted to DeepSeek-R1 series models**: Has achieved server deployments in multiple industries
- **Application Scenarios**: AI computing centers, finance, energy and other industries

## Shipment Status$

| Product | Shipment Volume |
|----------|------------------|
| Reconfigurable chips (all categories, including IoT) | **Over 30 million units** |
| Cloud AI computing cards (TX81, etc.) | **Over 20,000 units** |

## Application Scenarios$

- ✅ **AI computing centers** (C2C grid architecture, low latency high bandwidth)
- ✅ **Trillion-parameter large model training/inference** (TX81 verified)
- ✅ **Cost-sensitive projects** (solution cost reduced 50%)
- ✅ **Energy efficiency-sensitive data centers** (energy efficiency improved 3×)
- ✅ **DeepSeek and other domestic large model deployments** (already adapted)
- ❌ **CUDA ecosystem strong dependency** (RPU is independent architecture, requires migration)
- ❌ **Public compute benchmarks** (official sources have not disclosed specific TFLOPS)

## Product Evolution$

| Product | Release | Status |
|----------|----------|--------|
| TX510 (IoT vision) | 2021 | On sale |
| **TX81 (cloud high compute)** | **2024** | **Current main force** |
| TX82 (cloud high compute upgraded) | 2026 (planned) | Next generation |

## Related Cards$

- [Iluvatar TianGai 100](/en/docs/cards/others/iluvatar-tg100) - Domestic training GPU
- [Enflame CloudBlaze T21](/en/docs/cards/others/enflame-t21) - Domestic training GPU
- [MetaX XiYun C500](/en/docs/cards/others/metax-c500) - Domestic training+inference GPU

## References$

- [Over 30 million units shipped! How can this reconfigurable AI chip company lead domestic substitution?](https://news.qq.com/rain/a/20251128A01WF200)
- [Just now, this Tsinghua AI chip company released重磅 in Shenzhen!](https://www.sohu.com/a/949842332_121124373)
- [Tsingmicro Official Website](http://www.tsingmicro.com/)
- [TX8 Series - Baidu Baike](https://baike.baidu.com/item/TX8%E7%B3%BB%E5%88%97/67445703)
