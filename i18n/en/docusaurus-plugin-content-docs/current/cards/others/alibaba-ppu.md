---
id: alibaba-ppu
title: Alibaba PPU (Incang 800 Next Generation)
sidebar_label: Alibaba PPU
description: Alibaba Pingtouge next-generation AI inference chip (Incang 800 next-gen), 96GB HBM2e, 700GB/s, 400W, TSMC tape-out 2023, testing 2025, comprehensive performance close to H20.
keywords: [Alibaba PPU, Pingtouge, T-Head, Incang 800 next-gen, HBM2e, 96GB, 400W, domestic AI chip]
---

# Alibaba PPU (Incang 800 Next Generation)#

## Product Overview#

**Alibaba PPU** is a **next-generation AI inference chip** developed by **Pingtouge (T-Head)**, Alibaba's semiconductor subsidiary. It is the **next-generation product of Incang 800**. **Tape-out completed at TSMC in 2023**, originally planned for 2024 mass production, but affected by US sanctions, production was transferred to domestic enterprises. As of September 2025, the official name has not been announced ("PPU" is a temporary project-phase identifier).

PPU outperforms NVIDIA H20 in **memory capacity (96GB HBM2e)** and **PCIe 5.0 interface**. Single-card BOM cost is **40% lower** than H20, which can drive Alibaba Cloud public cloud inference instance prices down by **50%**.

> ⚠️ **Naming Note**: PPU is a temporary project-phase identifier. The official commercial model name has not been announced. Industry sources speculate it is the next-generation product of Incang 800.

## Core Specifications (Public)#

| Item | Parameter |
|------|-----------|
| **Architecture** | Pingtouge self-developed NPU architecture |
| **Process** | **7nm** (estimated, transferred to domestic production after sanctions) |
| **HBM** | **96 GB HBM2e** |
| **Memory Bandwidth** | **700 GB/s** |
| **TDP** | **400W** |
| **Interface** | **PCIe 5.0 ×16** |
| **Inter-chip Interconnect** | 700 GB/s (specific protocol not disclosed) |
| **Mass Production** | Originally 2024, delayed due to sanctions |
| **Commercial Availability** | Testing in 2025, not yet announced |

> 📝 **Data Note**: Core metrics such as FP32/FP16/INT8 compute and high-speed interconnect technology have not been publicly disclosed. Actual performance requires subsequent empirical verification.

## PPU vs NVIDIA H20 Comparison#

| Metric | Alibaba PPU | NVIDIA H20 | Comparison |
|--------|--------------|-------------|-------------|
| HBM Capacity | **96GB HBM2e** | 96GB HBM3 | Capacity comparable |
| Memory Bandwidth | 700 GB/s | >1 TB/s | H20 bandwidth lead |
| TDP | 400W | 400W | Comparable |
| Interface | **PCIe 5.0 ×16** | PCIe 5.0 | PPU interface more advanced |
| Single-card Cost | **-40% vs H20** | Baseline | PPU significant cost advantage |
| Ecosystem | Self-developed HALO stack | CUDA | H20 ecosystem mature |
| Comprehensive Performance | Close to H20 | Baseline | PPU is important breakthrough |

## Deployment Status#

- **China Unicom Sanjiangyuan Green Computing Power Center**: Alibaba Cloud signed 1,024 devices, 16,384 Pingtouge compute cards, contributing 1,945 P compute (largest brand in project procurement)
- **Alibaba Internal**: Taobao search recommendation, Alibaba Cloud PAI platform, Cainiao logistics scheduling (Incang 800 already deployed, PPU will gradually replace)

## Strategic Significance#

- **Domestic substitution**: Affected by US sanctions, transferred to domestic production, important breakthrough in domestic AI chip supply chain autonomy
- **Cost advantage**: Single-card BOM cost 40% lower than H20, driving Alibaba Cloud inference instance prices down 50%
- **Performance breakthrough**: Comprehensive performance close to H20, significant upgrade from Incang 800 (12nm, 820 TOPS)#

## Manufacturer Information#

| Item | Content |
|------|---------|
| **Manufacturer** | Alibaba Pingtouge Semiconductor (T-Head) |
| **Product Page** | https://www.t-head.cn/ |
| **Software Stack** | HALO (Hanguang Accelerated Linear Operator) |
| **Ecosystem Positioning** | Alibaba Cloud internal deployment + future external sales |

## Related Products#

- [Alibaba Incang 800](/docs/cards/others/alibaba-hanguang-800) - Previous-generation chip (2019 release)#
- [NVIDIA H20](/docs/cards/nvidia/h20) - Primary competitor
- [Huawei Ascend 910C](/docs/cards/huawei/ascend-910c) - Same-period domestic AI chip
- [Full comparison table](/docs/comparison)
