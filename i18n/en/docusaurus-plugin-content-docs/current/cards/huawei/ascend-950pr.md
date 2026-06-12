---
id: ascend-950pr
title: Huawei Ascend 950PR
sidebar_label: Ascend 950PR
description: "Huawei Ascend 950PR detailed specs: 1.56 PFLOPS FP4, 112GB HiBL HBM, 1.4 TB/s bandwidth, SMIC N+3, monolithic design, shipping Q1 2026."
keywords: [Huawei Ascend 950PR, Ascend 950PR, Ascend 950, HiBL HBM, SMIC N+3, monolithic, CANN Next, long context inference]
---

# Huawei Ascend 950PR

## Product Overview

**Huawei Ascend 950PR** (**Ascend 950PR**) is Hauwei's **flagship AI inference acceleration chip** officially released on **March 20, 2026**, with **Q1 2026 shipment**. It adopts a **monolithic design** (non-MCM), equipped with **112GB Hauwei self-developed HiBL 1.0 HBM**, delivering **1.56 PFLOPS FP4** compute, making it Hauwei's first product to significantly surpass NVIDIA compliance-version H20 in inference performance (FP4 performance reaches **2.8×** that of H20).

**Strategic Position**: 950PR is the **first product** in Hauwei's four-generation Ascend roadmap (2026-2028: 950PR → 950DT → 960 → 970), paired with **CANN Next** software stack (CUDA compatibility layer), marking Hauwei's critical transition from "usable" to "easy to use".

## Core Specifications

| Item | Parameter |
|------|-----------|
| **Architecture** | Ascend 950 (monolithic design) |
| **Process** | **SMIC N+3** (equivalent to 5nm-class) |
| **Packaging** | Monolithic Die, non-MCM |
| **HBM** | **112 GB HiBL 1.0** (Atlas 350 accelerator) / 128 GB (bare chip) |
| **HBM Bandwidth** | **1.4 TB/s** (Atlas 350) / 1.6 TB/s (bare chip) |
| **FP4** | **1.56 PFLOPS** |
| **FP8 / MXFP8** | **1 PFLOPS** |
| **FP16** | Not publicly disclosed (estimated ~780 TFLOPS) |
| **Interconnect Bandwidth** | **2 TB/s** (self-developed LingQu protocol) |
| **Memory Access Granularity** | **128 bytes** (vs. previous gen 512 bytes, small tensor efficiency +4×) |
| **TDP** | **600 W** (Atlas 350 accelerator) |
| **Board Form Factor** | Atlas 350 accelerator (PCIe / OAM) |
| **Mass Production** | **Q1 2026** (March 20-21 official release) |
| **Unit Price (Atlas 350)** | **~¥111,000** (≈$16,000) |

> ⚠️ **Monolithic Design Trade-off**: Avoids advanced packaging (TSMC CoWoS) restrictions, but bare die size and yield rate are lower than MCM solutions. This is an **engineering compromise** under US export controls, not a technical preference.

## Comparison with Ascend 910C

| Metric | Ascend 910C | **Ascend 950PR** | Improvement |
|--------|------------|----------------|-------------|
| Process | SMIC N+2 (equiv. 7nm) | **SMIC N+3 (equiv. 5nm)** | Significant upgrade |
| HBM | ~64GB HBM2E | **112GB HiBL 1.0** | +75% |
| Bandwidth | ~2 TB/s (estimated) | **1.4 TB/s** | Flat/+ improvement |
| FP4 | Not supported | **1.56 PF** | New |
| FP8 | Not supported | **1 PF** | New |
| Interconnect | ~800 GB/s | **2 TB/s** | 2.5× |
| Memory Granularity | 512 bytes | **128 bytes** | 4× small tensor efficiency |
| TDP | ~400W | **600W** | +50% |
| Software | CANN (poor compatibility) | **CANN Next (CUDA compatible)** | Significant improvement |

## Comparison with Competitors (2026 Inference Cards)

| Metric | Ascend 950PR | NVIDIA H20 (compliance) | NVIDIA L40S | Gap |
|--------|--------------|---------------------|---------------|------|
| FP4 | 1.56 PF | ~0.56 PF | 0.16 PF | **+178% vs H20** |
| HBM | 112GB | 96GB | 48GB | +17% vs H20 |
| Bandwidth | 1.4 TB/s | 4.0 TB/s | 0.86 TB/s | **-65% vs H20** |
| TDP | 600W | 400W | 350W | +50% vs H20 |
| Software | CANN Next | CUDA | CUDA | Ecosystem disadvantage |
| Price | ~$16,000 | ~$20,000+ | ~$10,000 | Price advantage |

> **Bandwidth Disadvantage Explanation**: 950PR's 1.4 TB/s is significantly lower than H20's 4.0 TB/s, but in **inference pre-fill stage**, compute (FP4) is the bottleneck, so bandwidth disadvantage has limited impact. Generation (Decode) stage is bandwidth-sensitive, which is 950PR's weakness.

## LingQu Interconnect Protocol

| Item | Parameter |
|------|-----------|
| **Protocol Name** | LingQu |
| **Bandwidth** | **2 TB/s** (inter-chip) |
| **vs. Previous Gen** | Ascend 910 series: ~800 GB/s (**2.5×**) |
| **Cluster Expansion** | Supports UnifiedBus 2.0, expandable to **1 million NPUs** |
| **vs. NVIDIA** | NVLink 5: 1.8 TB/s (single GPU); NVLink 6: 3.5 TB/s (Rubin) |

## Atlas 950 SuperCluster Rack Solution

| Item | Parameter |
|------|-----------|
| **Max Scale** | **1 million NPUs** |
| **vs. NVIDIA NVL144** | Total compute **6.7×**, memory capacity **15×**, interconnect bandwidth **62×** (Huawei claimed, not third-party verified) |
| **Switch** | Hauwei self-developed Qingtian series |
| **Target Scenario** | National-level AI training clusters, large model inference cloud services |

## CANN Next Software Stack

| Layer | Tool | Description |
|------|------|-------------|
| **CUDA Compatibility Layer** | CANN Next Runtime | ~80% standard PyTorch inference code requires only configuration changes, no major rewrites |
| **Graph Compiler** | CANN Graph | Similar to XLA, automatic operator fusion |
| **Quantization Tool** | CANN Quant | FP8 / MXFP8 post-training quantization |
| **Communication Library** | HCCL | Collective communication (AllReduce, etc.), similar to NCCL |
| **Model Library** | ModelZoo | Pre-optimized LLMs (Qwen, ChatGLM, etc.) |

## Customers and Orders (2026)

| Customer | Order Amount | Description |
|----------|---------------|-------------|
| **ByteDance** | $5.6B (confirmed) | Largest single order in 2026 |
| **Alibaba Cloud** | Large amount (undisclosed) | For Tongyi Qianwen inference |
| **Tencent** | Large amount (undisclosed) | For Hunyuan large model |
| **Baidu** | Large amount (undisclosed) | For ERNIE 4.0 |

**2026 Total Sales Estimated**: $12B, first time matching NVIDIA revenue scale in China AI chip market.

## Ascend Roadmap (2026-2028)

| Product | Launch Date | Positioning |
|----------|--------------|--------------|
| **950PR** | Q1 2026 | Flagship inference (this page) |
| **950DT** | Q4 2026 | Decode + training scenario |
| **960** | Q4 2027 | Target to match Blackwell architecture |
| **970** | Q4 2028 | Target to match Rubin architecture |

## Key Features

- **Monolithic design**: Avoids US advanced packaging controls, but sacrifices maximum bare die size
- **FP4 leadership**: 1.56 PFLOPS, surpassing NVIDIA H20 (compliance version) by 2.8×
- **LingQu 2 TB/s interconnect**: Domestic protocol, supports ultra-large clusters
- **CANN Next CUDA compatibility**: Reduces migration cost, key to ecosystem improvement
- **600W TDP**: High power consumption, requires liquid cooling or enhanced air cooling
- **Weakness**: HBM bandwidth only 1.4 TB/s (vs H20 4.0 TB/s), generation stage performance limited

## Suitable Scenarios

- ✅ **Ultra-long context inference** (Pre-fill stage, FP4 compute bottleneck scenario)
- ✅ **Domestic AI cloud services** (Alibaba Cloud, Tencent Cloud, Baidu Cloud)
- ✅ **Government/SOE AI projects** (supply chain security priority)
- ✅ **Large model inference as a service (MaaS)**
- ❌ Large-scale training (bandwidth disadvantage)
- ❌ International market (export controls + ecosystem disadvantage)

## Related Cards

- [Huawei Ascend 910C](/docs/cards/huawei/ascend-910c) - Previous generation (in mass production)
- [Huawei Ascend 910D](/docs/cards/huawei/ascend-910d) - Training flagship
- [Huawei Ascend 920](/docs/cards/huawei/ascend-920) - Previous generation mainstream
- [NVIDIA H20](/docs/cards/nvidia/h20) - Competitor (compliance version)
- [NVIDIA L40S](/docs/cards/nvidia/l40s) - Competitor (inference)

## References

- [TechInsider: Huawei Ascend 950PR Analysis](https://tech-insider.org/huawei-ascend-950pr-ai-chip-nvidia-china-2026/)
- [Zhihu: Ascend 950PR performance analysis](https://zhuanlan.zhihu.com/p/2020594571902470013)
- [Huawei Full Connection Conference 2025: Ascend roadmap](https://zhuanlan.zhihu.com/p/1952370354703015943)
- [Baidu Baike: Ascend 950PR chip](https://baike.baidu.com/item/%E6%98%87%E8%85%BE950PR%E8%8A%AF%E7%89%87/66772899)
