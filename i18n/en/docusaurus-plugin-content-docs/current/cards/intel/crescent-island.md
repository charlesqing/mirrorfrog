---
id: crescent-island
title: Intel Crescent Island (Datacenter AI Inference GPU)
sidebar_label: Intel Crescent Island
description: "Intel Crescent Island AI GPU: Xe3P architecture, 480GB LPDDR5x, 350W PCIe air-cooled, optimized for agentic AI inference workloads."
keywords: [Intel Crescent Island, Xe3P, 480GB LPDDR5x, datacenter inference GPU, agentic AI, Computex 2026]
---

# Intel Crescent Island (Datacenter AI Inference GPU)

## Overview

**Intel Crescent Island** was officially disclosed in **June 2026** at Computex 2026, as Intel's next-generation GPU platform targeting datacenter AI inference workloads. Based on the **Xe3P architecture**, it features up to **480GB LPDDR5x memory** in a **350W air-cooled PCIe** form factor.

Crescent Island is positioned as a cost-effective solution for **Agentic AI inference** — compared to high-end GPUs using HBM, the LPDDR5x approach significantly reduces cost for equivalent inference workloads.

## Core Specifications

| Item | Specification |
|------|------|
| **Architecture** | Xe3P |
| **Memory** | Up to **480 GB LPDDR5x** |
| **Memory Bandwidth** | TBA (LPDDR5x configuration) |
| **Precision Support** | **Native FP4 / MXFP4 → FP64** (full precision coverage) |
| **FP4 Compute** | TBA |
| **FP8 Compute** | TBA |
| **FP16/BF16** | TBA |
| **FP32** | TBA |
| **TDP** | **350 W** (air-cooled) |
| **Form Factor** | **PCIe** (standard server compatible) |
| **Target** | **Agentic AI Inference** |
| **Software** | Intel open unified software stack |
| **First Disclosure** | **June 2026 (Computex 2026)** |
| **Shipping** | TBA |

> **Note**: Crescent Island is in early disclosure phase; some specifications (exact compute values, shipping timeline) have not been officially announced. Intel will provide complete specifications in future updates.

## Comparison with Similar Products

| Metric | Intel Crescent Island | NVIDIA L40S | NVIDIA H200 | Intel Gaudi 3 |
|------|----------------------|-------------|-------------|---------------|
| **Architecture** | Xe3P | Ada Lovelace | Hopper | Gaudi 3 |
| **Memory** | 480GB LPDDR5x | 48GB GDDR6 | 141GB HBM3e | 128GB HBM2e |
| **Memory Type** | LPDDR5x (low cost) | GDDR6 | HBM3e (high cost) | HBM2e (medium) |
| **TDP** | 350W | 350W | 700W | 900W |
| **Form Factor** | PCIe air-cooled | PCIe air-cooled | SXM liquid | OAM/PCIe |
| **Target** | **Agentic inference** | General inference | Training + Inference | Training + Inference |
| **Price Positioning** | Low (LPDDR5x) | Medium | High | Medium |
| **FP4 Support** | ✅ **Native** | ❌ | ❌ | ❌ |

> **Crescent Island advantages**: 480GB LPDDR5x = **3.4× L40S's memory capacity**, **native FP4 support**, **350W air-cooled** fits into existing servers — ideal for cost-sensitive AI inference deployment.

## Vendor Information

| Item | Details |
|------|------|
| **Manufacturer** | Intel Corporation |
| **Official Website** | https://www.intel.com |
| **Product Page** | Coming soon |
| **First Disclosed** | June 2026 (Computex 2026) |
| **Software Ecosystem** | Intel open unified AI software stack (OneAPI + PyTorch/TensorFlow) |

## Use Cases

- ✅ **Agentic AI Inference**: Massive, token-intensive workloads
- ✅ **Cost-sensitive AI inference**: LPDDR5x significantly reduces memory cost
- ✅ **Enterprise inference deployment**: 350W air-cooled fits into existing data centers
- ✅ **Memory-intensive inference**: 480GB can load ultra-large models
- ❌ **Large-scale training** (not the design target; Intel has Gaudi series for that)
- ❌ **Low-latency high-throughput inference** (HBM solutions are more suitable)

## Related Products

- [Intel Gaudi 3](/docs/cards/intel/gaudi-3) - Contemporary training/inference accelerator
- [Intel Gaudi 4](/docs/cards/intel/gaudi-4) - Next-gen training/inference
- [NVIDIA L40S](/docs/cards/nvidia/l40s) - Comparable inference GPU
- [NVIDIA H200](/docs/cards/nvidia/h200) - High-end training + inference
- [Full Comparison Table](/docs/comparison)

## 2026-11-17 update: first FP64 benchmarks at SC26, measured against RTX PRO 6000

Intel published the first D270 (Crescent Island) results at SC26. Four financial workloads against the NVIDIA RTX PRO 6000 Blackwell Server Edition: European Monte Carlo 5.9x, European Black-Scholes 5.6x, binomial 4.6x, American Black-Scholes 1.92x, averaging about 4.5x. D270 is specified at 350W; the competitor card at 600W. The design has 32 Xe3P cores, 64 FP64 FMAs per core and 256 XMX engines, with up to 480 GB of LPDDR5X.

Two AI results came with it: 29% lower latency on Drex 2.0 decision models and 1.12x throughput on Qwen3-30B-A3B. Both are Intel tests on pre-production silicon.

Watch which card is being compared. RTX PRO 6000 is a workstation and server inference part with weak FP64 throughput. Beating it by 5.9x is not the same as beating H100 or MI430X. This page also has no FP64 peak in its spec table, only the previously recorded 1.3 PFLOPS FP8 figure. The result looks like proof that "LPDDR5X plus full-rate FP64" works, not a claim to the top of the ranking.

> Sourcing note: Intel tests, pre-production silicon, different board power and incomplete test conditions. Nothing here is added to the spec table, and the numbers are not converted into a perf-per-watt conclusion.
