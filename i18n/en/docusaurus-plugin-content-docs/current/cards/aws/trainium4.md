---
id: trainium4
title: AWS Trainium 4
sidebar_label: AWS Trainium 4
description: "AWS Trainium 4 previewed specs: first revealed at re:Invent on 2025-12-02, 6x Trainium 3 FP4 performance, 3x FP8, 4x memory bandwidth, 2x HBM capacity, NVIDIA NVLink Fusion support, delivery expected from 2027. Process node, HBM capacity and TDP not disclosed."
keywords: [AWS Trainium 4, Trainium4, NVLink Fusion, re:Invent 2025, FP4, 6x performance, 2027 delivery, AWS custom silicon]
---

# AWS Trainium 4

## Product Overview

**AWS Trainium 4** is AWS's fifth-generation custom AI accelerator, first publicly previewed on **2025-12-02** during the opening keynote of **re:Invent 2025**. According to AWS, Trainium 4 delivers **6x FP4 performance**, **3x FP8 performance**, **4x memory bandwidth**, and **2x HBM capacity** versus Trainium 3, with **delivery beginning in 2027**.

The most significant structural change announced is the **interconnect strategy**. Jointly with NVIDIA at re:Invent 2025, AWS confirmed that Trainium 4 will support **NVIDIA NVLink Fusion** high-speed interconnect and work alongside the **NVIDIA MGX rack architecture** — meaning Trainium 4 can be co-located with NVIDIA GPUs within the same rack. This is widely read as AWS acknowledging that NVIDIA's networking ecosystem has become the default customer expectation, while keeping high-margin workloads on its own ASICs. This is the **first product** of a multigenerational NVIDIA–AWS NVLink Fusion collaboration.

**Critical disclosure boundary**: to date, AWS has **never officially disclosed Trainium 4's process node, absolute HBM capacity in GB, absolute memory bandwidth in TB/s, or any absolute compute figure in PFLOPS**. All public information consists of **relative multiples versus Trainium 3**. Widespread reports that it will use HBM4 are **supply-chain rumors, not official AWS statements**, and are not treated as fact here. Every field requiring an absolute number is marked "not disclosed" on this page rather than filled with estimates.

Trainium 4 already has substantial capacity pre-booked, and AWS is simultaneously in talks to sell physical Trainium chips directly to external enterprises.

## Key Specifications

| Item | Specification |
|------|------|
| **Architecture** | Not disclosed |
| **Process** | Not disclosed |
| **Memory** | Not disclosed |
| **Memory Type** | Not disclosed |
| **Memory Bandwidth** | Not disclosed |
| **FP8** | Not disclosed |
| **FP4** | Not disclosed |
| **FP16** | Not disclosed |
| **FP32** | Not disclosed |
| **INT8** | Not disclosed |
| **TDP** | Not disclosed |
| **Interconnect** | NVIDIA **NVLink Fusion** (co-location with NVIDIA GPUs / MGX racks) |
| **Release / Production** | **First previewed 2025-12-02** (re:Invent 2025); **delivery expected from 2027** |

> ⚠️ **Why almost the entire table reads "not disclosed"**: AWS's public statements on Trainium 4 are **entirely relative multiples** (6x the FP4 performance of Trainium 3, 3x FP8, 4x memory bandwidth, 2x HBM capacity) with **no absolute specifications whatsoever**. Process node, HBM capacity in GB, absolute TB/s, absolute PFLOPS, and TDP are all missing. The "not disclosed" cells above **carry no multiples**, so downstream data pipelines do not mistake them for absolute metrics.
>
> Multiplying Trainium 3's 2.52 PFLOPS by these multiples to derive figures such as "15.1 PFLOPS FP8" would be **self-derived arithmetic rather than official data**. This page deliberately avoids that conversion so as not to contaminate cross-chip compute comparisons.
>
> The "HBM4" claim currently appears only in supply-chain rumors and secondary reporting; **AWS has not confirmed it**, so memory type is likewise marked as not disclosed.
>
> **The one known interconnect fact**: Trainium 4 supports NVIDIA NVLink Fusion and can be co-located with NVIDIA GPUs / MGX racks.

## Key Features

- **6x FP4 performance over Trainium 3**: the headline metric. Trainium 3's known weakness was precisely FP4 (a significant gap versus contemporary NVIDIA Blackwell), so the 6x gain signals AWS is prioritizing **FP4 low-precision inference** as the primary target workload
- **3x FP8 performance over Trainium 3**: the dominant precision for training workloads, improved 3x
- **4x memory bandwidth / 2x HBM capacity**: bandwidth gains exceed capacity gains, indicating a design emphasis on **mitigating the memory wall** rather than simply adding capacity — particularly relevant to long-context and MoE inference
- **NVLink Fusion enters AWS custom silicon for the first time**: Trainium 4 will interoperate with NVIDIA Blackwell GPUs and NVIDIA CPUs within the same MGX rack
- **From internal cost-reduction tool to external product**: AWS is in talks to sell physical Trainium chips directly to external companies, beyond cloud instance rental
- **Substantial pre-booked capacity**: Trainium 3 was near full allocation shortly after shipping, and Trainium 4 capacity was booked well over a year before availability

## Use Cases

- ✅ **Large-model training and inference on AWS** (EC2 Trn4 instances, expected 2027)
- ✅ **FP4 low-precision inference** (the primary source of the performance gain)
- ✅ **Long-context / MoE-architecture inference** (design prioritizes bandwidth 4x over capacity 2x)
- ✅ **Hybrid architecture deployments** (co-located with NVIDIA GPUs to reduce full-migration risk)
- ✅ **AWS AI Factories** (managed AI infrastructure deployed in customers' own data centers, able to host Trainium)
- ❌ **Procurement decisions requiring concrete specifications** (no absolute compute, capacity, or process data)
- ❌ **Deployment before 2027** (official guidance is delivery starting 2027)

## Comparison

- [AWS Trainium 3](/docs/cards/aws/trainium-3) - Predecessor (3nm / 144GB HBM3e / 2.52 PFLOPS FP8, fully disclosed specs)
- [AWS Trainium 2](/docs/cards/aws/trainium-2) - Two generations back
- [AWS Inferentia 2](/docs/cards/aws/inferentia-2) - AWS inference counterpart product line
- [NVIDIA B200](/docs/cards/nvidia/b200) - GPU counterpart in Trainium 4 hybrid racks
- [Google TPU v7 Ironwood](/docs/cards/google/tpu-ironwood) - Contemporary custom cloud ASIC approach

> Note for cross-generation comparison: Trainium 3's **absolute values are fully disclosed by AWS**, while Trainium 4 offers **only multiples**. The two cannot be placed into the same absolute compute comparison table.

## Data Sources

- [NVIDIA official blog: NVIDIA and AWS Expand Full-Stack Partnership](https://blogs.nvidia.com/blog/aws-partnership-expansion-reinvent/) — confirms Trainium 4 NVLink Fusion support and NVIDIA MGX rack integration as the first product of the multigenerational collaboration
- [AWS official: Trainium product page](https://aws.amazon.com/machine-learning/trainium/) — AWS Trainium product line official entry point
- [China Daily Asia: Amazon to use Nvidia tech in AI chips, roll out new servers](https://www.chinadailyasia.com/article/624722) — on-site re:Invent 2025 reporting confirming the NVLink Fusion adoption and that no release date was given that day
- [TokenPost: Trainium4 targets 6x FP4 performance](https://tw.tokenpost.com/news/blockchain/45660) — cites AWS earnings materials stating Trainium4 supply is expected from 2027, and notes official performance figures are pre-launch targets