---
id: tesla-ai5
title: Tesla AI5 (In-House Automotive and Robotics AI Chip)
sidebar_label: Tesla AI5
description: "Tesla's in-house AI5 chip: 2nm mass production at Samsung's Taylor fab starting July 2026, with dual sourcing via TSMC 3nm at the same time; targets energy efficiency about 3x that of NVIDIA Blackwell at under 10% of the cost, serving FSD and Optimus."
keywords: [Tesla, Tesla AI5, FSD, Optimus, in-house chip, Samsung 2nm, TSMC 3nm, AI6]
vendor: others
vendor_full: "Tesla"
series: "Tesla AI Series"
release_date: "2026"
status: "Taped out"
---

# Tesla AI5 (In-House Automotive and Robotics AI Chip)

## Product Overview

The **AI5** is Tesla's in-house next-generation AI compute chip, serving both the **vehicle autonomous driving (FSD)** and **Optimus humanoid robot** product lines — the first time Tesla has a single chip carrying inference workloads for both vehicles and robots.

The supply chain is the most closely watched part of the AI5: **Samsung's Taylor (Texas) fab started 2nm-class mass production in July 2026**, after completing the AI5 tape-out; meanwhile, Tesla is **placing part of the capacity at TSMC on 3nm**, forming **dual sourcing** to avoid single-point dependency.

Musk's performance framing is that the AI5's **energy efficiency is about 3x that of NVIDIA Blackwell at less than 10% of the cost**. It should be noted that this is a **product claim targeted at Tesla's own inference workloads**, not a general-purpose benchmark result.

## Core Specifications

| Parameter | Value |
|-----------|-------|
| **Architecture** | Tesla proprietary NPU (AI5) |
| **Process Node** | **Samsung 2nm (Taylor fab) + TSMC 3nm** (dual sourcing) |
| **Positioning** | Vehicle autonomous driving + humanoid robot inference |
| **Compute** | Not disclosed |
| **Memory Capacity** | Not disclosed |
| **Memory Bandwidth** | Not disclosed |
| **TDP** | Not disclosed |
| **Mass Production Start** | Samsung Taylor fab, **2026-07** |
| **Expected In-Vehicle Deployment** | **Mid-2027** (production switchover) |

> ⚠️ **Data Source Note**: Tesla **has not disclosed the AI5's compute, memory, or power parameters**. The "3x energy efficiency / 10% cost" claims are Tesla product claims targeted at its own workloads and should not be treated as general-purpose benchmarks.

## Why the AI5's Cadence Is Held Back by "Stockpiling"

Musk has stated explicitly that Tesla needs to **stockpile hundreds of thousands of finished AI5 boards** beside the production line before switching vehicle production — meaning there is **roughly a one-year gap between chip mass production starting (2026-07) and actual in-vehicle deployment (mid-2027)**.

| Phase | Time | Notes |
|-------|------|-------|
| Tape-out complete | Before 2026-07 | Samsung completed the AI5 tape-out |
| Mass production start | **2026-07** | Samsung Taylor fab begins 2nm-class production |
| Stockpiling period | 2026-07 ~ mid-2027 | Hundreds of thousands of boards need to be accumulated |
| In-vehicle switchover | **Mid-2027** | Vehicle production lines switch to the AI5 |

## Tesla AI Chip Roadmap

| Chip | Generation | Foundry | Use | Status |
|------|------------|---------|-----|--------|
| [Dojo D1](/docs/cards/others/tesla-dojo) | Training | TSMC 7nm | Training cluster (since scaled back) | Released |
| Dojo v2 | Training | TSMC | Training cluster | Not mass-produced |
| **AI5** | **Inference** | **Samsung 2nm + TSMC 3nm** | **FSD + Optimus** | **Taped out, mass production started** |
| AI6 | Inference | Samsung (Texas) | Next-generation vehicles and robots | Planned |

> **Key Insight**: Tesla's chip strategy makes an interesting contrast with cloud providers — Google, AWS, Microsoft, and Meta all point their in-house chips at the **data center**, while Tesla's point at the **edge and robots**. The AI5 using an advanced node like 2nm/3nm for edge inference represents the new trend of "**advanced processes moving down to the edge**"; this also explains why Tesla locked in capacity at both Samsung and TSMC simultaneously.

## Vendor Information

| Parameter | Value |
|-----------|-------|
| **Company** | Tesla, Inc. |
| **Headquarters** | Austin, Texas, USA |
| **In-House Chip Team** | Tesla AI chip design team |
| **Foundry** | Samsung (Taylor fab, 2nm-class), TSMC (3nm) |
| **Application Products** | FSD (Full Self-Driving), Optimus (humanoid robot) |

## Use Cases

- ✅ **Vehicle autonomous driving inference** (FSD)
- ✅ **Humanoid robot inference** (Optimus)
- ✅ **Low-latency edge AI** (no cloud round trip)
- ❌ Data center large-model training
- ❌ External sales (Tesla internal use only)

## Related Cards

- [Tesla Dojo D1](/docs/cards/others/tesla-dojo) — Tesla training chip
- [Tesla Dojo v2](/docs/cards/others/tesla-dojo-v2) — Training chip successor
- [NVIDIA Drive Thor](/docs/cards/nvidia/drive-thor) — Automotive AI compute competitor
- [NVIDIA Jetson Thor](/docs/cards/nvidia/jetson-thor) — Robotics AI compute platform
- [Full Comparison Table](/docs/comparison)

## References

- [Venture Atlas: Tesla company milestones (AI5 2nm mass production at Samsung's Taylor fab)](https://www.ventureatlas.org/company/tesla)
- [Aju Daily: Tesla AI5 dual-sourced by Samsung and TSMC, AI6 planned for Samsung's Texas fab](https://www.ajudaily.com)
- [Tesla official](https://www.tesla.com)
