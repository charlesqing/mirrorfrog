---
id: jaguar-shores
title: Intel Jaguar Shores (Rack-Scale System)
sidebar_label: Intel Jaguar Shores
description: "Intel Jaguar Shores rack-scale AI system: replaces cancelled Falcon Shores, launching 2027/2028, integrating Gaudi IP + Xeon 6 + 800G NIC."
keywords: [Intel Jaguar Shores, Falcon Shores cancelled, rack-scale, 2027, 2028, Gaudi IP, 800G NIC, Intel Foundry]
---
 
# Intel Jaguar Shores (Rack-Scale System)
 
## Overview
 
**Intel Jaguar Shores** is a **rack-scale AI system** project restarted by Intel after cancelling **Falcon Shores** in May 2026, expected to launch in **2027-2028**. Unlike Falcon Shores' "single GPU chip" strategy, Jaguar Shores is a **rack-scale integrated system** combining:
 
- **Gaudi-series IP AI accelerators** (replacing Gaudi 3)
- **Xeon 6 / Xeon 7 CPUs** (Clearwater Forest / Diamond Rapids)
- **800G networking NICs**
- **Intel Foundry 18A / 14A process**
 
Jaguar Shores is the flagship of Intel's **"AI systems vendor"** strategy — no longer pursuing single-chip competition with NVIDIA, but delivering **full rack-scale solutions**.
 
## Core Specifications (Speculative)
 
| Item | Spec |
|------|------|
| **Form Factor** | **Rack-scale system** (not a single chip) |
| **AI Accelerators per Rack** | 64-128 units (speculative) |
| **CPUs per Rack** | 32-64 Xeon units |
| **AI Accelerator IP** | **Gaudi v4 architecture** (evolved from Gaudi 3) |
| **Process** | **Intel Foundry 18A** (accelerators) + TSMC 3nm (partial IP) |
| **HBM Capacity (per accelerator)** | 144 GB HBM3e |
| **HBM Bandwidth (per accelerator)** | ~5 TB/s |
| **FP8 Compute (per accelerator)** | ~2,500 TFLOPS (speculative) |
| **FP8 Compute (per rack)** | ~160-320 PFLOPS |
| **Networking** | **800G integrated NIC** + topology optimization |
| **TDP (per rack)** | ~80-120 kW |
| **Launch** | **2027-2028** |
 
> ⚠️ **Not officially announced**: All specs above are speculative, **Intel has only disclosed roadmap-level information**. All figures subject to future Intel announcements.
 
## Falcon Shores Cancellation Timeline
 
| Event | Date | Details |
|------|------|------|
| **Falcon Shores first announced** | 2023 | 200 PFLOPS single chip targeting B100 |
| **Roadmap adjustment** | 2024-12 | 200 PF target cancelled, shifted to "system-level" |
| **Officially cancelled** | **2026-05-14** | Intel earnings disclosed Falcon Shores cancellation |
| **Pivot to Jaguar Shores** | 2026-05 | New rack-scale system project confirmed |
| **New direction** | 2027-2028 | No longer competing with single-chip NVIDIA |
 
> **Reasons for cancellation**:
> 1. **Third consecutive quarterly loss** (2026-Q1) tightening R&D budget
> 2. **200 PF single chip unrealistic** (Rubin R200 = 50 PF already at limits)
> 3. **HBM supply constraints** (Micron / SK Hynix prioritizing NVIDIA)
> 4. **Market shift to rack-scale** (NVIDIA NVL72, AMD Helios dominant)
 
## Jaguar Shores vs Falcon Shores
 
| Metric | Falcon Shores (Cancelled) | **Jaguar Shores** |
|------|--------------------------|-------------------|
| Form Factor | **Single-chip GPU** | **Rack-scale system** |
| Target | Compete with B100 / B200 single chip | Compete with NVL72 / Helios racks |
| Process | Intel 18A | **Intel 18A / 14A** |
| HBM Capacity | 288 GB HBM3e | **Rack-scale ~10-15 TB** |
| FP8 Compute | 200 PFLOPS (pre-cancellation target) | **Rack-scale ~160-320 PFLOPS** |
| Integrated CPU | Standalone | **Xeon 6/7 tightly coupled** |
| Integrated NIC | None | **800G integrated** |
| Launch | 2025 (cancelled) | **2027-2028** |
| Status | ❌ Cancelled | 🟡 Roadmap stage |
 
## Intel AI Strategy Restructuring (May 2026)
 
| Strategy | Details |
|------|------|
| **Gaudi product line** | Continue Gaudi 3 / Gaudi 3E (sustained through 2026) |
| **Falcon Shores** | ❌ **Cancelled** |
| **Jaguar Shores** | ✅ **Rack-scale AI system restarted** |
| **Foundry services** | Intel Foundry 18A fab for NVIDIA / AMD / AWS |
| **x86 leadership** | Strengthen Xeon 6/7 (AI server CPU dominance) |
| **Habana brand** | Retained, Jaguar Shores integrates Gaudi IP |
 
> **Intel no longer directly competes with NVIDIA on AI GPUs**:
> - Short-term: Gaudi 3 sustained (cost-effective competition)
> - Mid-term: Jaguar Shores system-level (rack-scale competition)
> - Long-term: Intel Foundry 18A fab for AI vendors (**Intel as "AI foundry"**)
 
## Recommended Deployment Configurations
 
| Scenario | Recommended Config |
|------|----------|
| **Mid-to-large LLM training** | Jaguar Shores rack + Xeon 6 hosts |
| **Enterprise AI inference** | Jaguar Shores single rack |
| **Telco/Government localization** | Intel ecosystem + Xeon + Gaudi IP |
| **x86 ecosystem preservation** | Suitable for existing Intel customers |
 
## Use Cases
 
- ✅ **Intel ecosystem retention** (existing x86 customers)
- ✅ **Rack-scale AI systems** (2027+ era)
- ✅ **Intel Foundry customers** (18A process synergy)
- ❌ Current mainstream training (2026 still NVIDIA-dominated)
- ❌ Ultra-low latency inference (Groq LPX superior)
- ❌ High-density clusters (NVL72 / Helios already GA in 2026)
 
## Vendor Information
 
| Item | Details |
|------|------|
| **Vendor** | Intel Corporation |
| **First Announced** | 2026-05 (earnings disclosure) |
| **Codename** | Jaguar Shores |
| **Form Factor** | Rack-scale system (**not a single chip**) |
| **Estimated Launch** | **2027-2028** |
| **Process** | Intel Foundry 18A / 14A |
| **Related Products** | Gaudi 3 (IP source), Xeon 6/7 (CPU synergy) |
 
## Related Products
 
- [Intel Gaudi 3](/docs/cards/intel/gaudi-3) - Current Gaudi IP source
- [Intel Gaudi 2](/docs/cards/intel/gaudi-2) - Previous generation
- [NVIDIA Rubin R200](/docs/cards/nvidia/rubin-r200) - Same-gen GPU
- [AMD MI400](/docs/cards/amd/mi400) - Same-gen GPU
- [NVIDIA B300 Ultra](/docs/cards/nvidia/b300-ultra) - Previous-gen NVIDIA
- [Full Comparison Table](/docs/comparison)
