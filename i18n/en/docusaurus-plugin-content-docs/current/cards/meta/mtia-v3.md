---
id: mtia-v3
title: Meta MTIA v3 (Iris/MTIA 400)
sidebar_label: Meta MTIA v3
description: Meta third-generation self-developed AI training/inference chip (Iris/MTIA 400), RISC-V architecture, over 1,000 cores, >200 TFLOPS, mass production Q3 2026, co-designed with Broadcom.
keywords: [Meta MTIA v3, Iris, MTIA 400, RISC-V, self-developed chip, Broadcom, 2026 Q3]
---

# Meta MTIA v3 (Iris / MTIA 400)

## Product Overview

**Meta MTIA v3** (internal code **Iris**, model **MTIA 400**) is Meta's **third-generation self-developed AI training/inference accelerator**, with **Q3 2026 mass production**. It adopts the **RISC-V open-source architecture**, featuring **over 1,000 cores**, with compute power exceeding **200 TFLOPS**. It is a customized ASIC co-designed with **Broadcom**.

MTIA v3 is the core product of Meta's two-year four-generation self-developed chip strategy, aimed at bridging the gap between rapid model architecture evolution and traditional multi-year chip cycles, while reducing dependency on NVIDIA GPUs.

## Core Specifications (Estimated)

| Item | Parameter |
|------|-----------|
| **Architecture** | MTIA v3 (Iris) |
| **Instruction Set** | **RISC-V** (open-source architecture) |
| **Core Count** | **>1,000** |
| **Process** | TSMC 5nm (estimated) |
| **Compute Power** | **>200 TFLOPS** (FP16/BF16, estimated) |
| **HBM Capacity** | 64-96 GB (estimated) |
| **HBM Bandwidth** | ~2-3 TB/s (estimated) |
| **TDP** | ~200-300W (estimated) |
| **Launch** | **Q3 2026 mass production** |

> ⚠️ **Data Note**: Meta does not publicly disclose MTIA detailed specifications. The above parameters are estimated values based on public reports.

## MTIA Series Generation Comparison#

| Metric | MTIA v1 (Freya) | MTIA v2 (Artemis) | **MTIA v3 (Iris)** | MTIA v4 (Freya 2) |
|--------|-------------------|-------------------|------------------------|---------------------|
| Core Count | ~128 | ~512 | **>1,000** | Not yet public |
| Process | TSMC 7nm | TSMC 5nm | TSMC 5nm (estimated) | Not yet public |
| Compute (TFLOPS) | ~50 | ~100 | **>200** | Not yet public |
| HBM | 8 GB | 32 GB | 64-96 GB (estimated) | Not yet public |
| Mass Production | Q1 2023 | Q1 2025 | **Q3 2026** | Early 2027 |
| Primary Use | Inference (recommendation) | Inference + light training | **Training + inference** | Training |

## Strategic Significance#

- **Reduce external dependency**: Decrease procurement reliance on NVIDIA H100/H200, with hundreds of billions in long-term supply contracts as supplement
- **Custom optimization**: Optimized for Meta-specific workloads (Instagram feed recommendation, generative AI inference), eliminating non-core redundant functions
- **Cost advantage**: Manufacturing cost significantly lower than general-purpose GPUs, with better performance-per-watt
- **Rapid iteration**: Two-year four-generation chips, shortening traditional 3-5 year chip cycles

## Collaboration Partners#

| Item | Content |
|------|---------|
| **Chip Design** | Broadcom (co-design) |
| **Process** | TSMC (Taiwan Semiconductor) |
| **Technical Team** | Meta acquired Rivos Inc., absorbing 400+ top chip engineers |
| **Software Stack** | PyTorch / Meta internal compiler |

## Related Products#

- [Meta MTIA v4](/docs/cards/meta/mtia-v4) - Next generation (early 2027)
- [AWS Trainium 3](/docs/cards/aws/trainium-3) - Same-period training chip
- [Google TPU v7 Ironwood](/docs/cards/google/tpu-ironwood) - Same-generation ASIC
- [Full comparison table](/docs/comparison)

## References#

- Tencent Cloud Developer: Meta's latest AI chip Q3 mass production (2026-03-06)
- Xueqiu: Meta MTIA 3 technical details (2026-03-06)
- Meta AI official X account: Two-year four-generation MTIA roadmap (2026-03)
