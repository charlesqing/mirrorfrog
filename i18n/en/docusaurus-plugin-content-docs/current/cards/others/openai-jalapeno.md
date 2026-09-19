---
id: openai-jalapeno
title: OpenAI Jalapeño (In-House AI Inference Chip)
sidebar_label: OpenAI Jalapeño
description: "OpenAI Jalapeño detailed specs: TSMC 3nm, 6-stack HBM4 216GB @15.4TB/s, 700W, designed around speculative decoding, 1.7x the tokens/kW of the GB300, co-developed with Broadcom."
keywords: [OpenAI, Jalapeño, in-house chip, AI inference, ASIC, Broadcom, TSMC 3nm]
---

# OpenAI Jalapeño (In-House AI Inference Chip)

> OpenAI's first in-house AI inference chip, officially released on June 24, 2026, co-developed with Broadcom, built on TSMC's 3nm process, reducing inference cost by about 50%.

## Product Overview

**OpenAI Jalapeño** (named after the jalapeño pepper) is **OpenAI's first in-house AI inference chip**, launched jointly with Broadcom and **officially released on 2026-06-24**. Positioned as an **application-specific integrated circuit (ASIC)**, it is designed specifically for large language model inference tasks and is not a general-purpose GPU.

**Strategic significance**: this marks OpenAI's transformation from a pure model company into a **full-stack AI infrastructure provider**, standing alongside Google's TPU, Amazon's Trainium, and Microsoft's Maia as a major member of the tech giants' in-house AI chip camp.

## Core Specifications

| Parameter | Value |
|-----------|-------|
| **Architecture** | Systolic Array, designed around **Speculative Decoding** |
| **Process Node** | **TSMC 3nm** |
| **Transistor Count** | Not disclosed |
| **HBM** | **6-stack HBM4** |
| **HBM Capacity** | **216 GB** |
| **HBM Bandwidth** | **15.4 TB/s** |
| **Compute (Inference)** | Not disclosed (targets parity with Blackwell) |
| **Energy Efficiency** | Under DeepSeek R1 workloads, **1.7x the tokens/kW of the GB300** (per OpenAI) |
| **TDP** | **700 W** |
| **Interconnect** | Broadcom Tomahawk switch chips |
| **Packaging** | Boards, racks, and systems provided by Celestica |
| **Design Tools** | OpenAI frontier models assisted architecture exploration, power simulation, and reinforcement learning optimization |
| **Launch** | 2026-06-24 |
| **Tape-Out** | **2025-09** (a 9-month sprint from RTL freeze to tape-out) |
| **Deployment** | **Carrying ChatGPT traffic about 10 weeks after first silicon**; gigawatt-scale data center by the end of 2026 |
| **Availability** | **Internal use only** (OpenAI + Microsoft); not sold externally |

> ⚠️ **Note**: The Jalapeño is an **OpenAI internal-use chip** and is not sold externally. Broadcom CEO Hock Tan has said it may be sold to third parties in the future, subject to sufficient supply.
>
> 📌 **2026-09 Update**: Hot Chips 2026 and subsequent disclosures confirmed the memory and energy-efficiency specs — 6 stacks of HBM4 totaling 216GB, 15.4TB/s bandwidth, 700W TDP, designed around speculative decoding; OpenAI says the tokens/kW under DeepSeek R1 inference workloads is **1.7x** that of the GB300.

## Jalapeño vs Other AI Accelerators

| Metric | Jalapeño | NVIDIA Blackwell | Google TPU v6e | AWS Trainium 3 |
|--------|----------|------------------|-------------------|-------------------|
| **Type** | Inference ASIC | Training+inference GPU | Training+inference TPU | Training ASIC |
| **Process** | TSMC 3nm | TSMC 4nm | TSMC 4nm | TSMC 5nm (estimated) |
| **Sold Externally** | ❌ Internal only | ✅ | ✅ (GCP) | ✅ (AWS) |
| **Inference Cost** | **-50%** | Baseline | Baseline | Baseline |
| **Performance per Watt** | **Significantly better** | Baseline | Baseline | Baseline |
| **Design Cycle** | **9 months** | ~18 months | ~18 months | ~18 months |

> **Key Insight**: The Jalapeño's **performance per watt significantly exceeds the most advanced AI accelerators today**, with inference cost reduced by about **50%**.

## Technical Highlights

### 1. 9-Month Sprint to Tape-Out

Designing an ASIC chip from scratch typically takes **1.5 to 2 years**. The Jalapeño went from initial design to manufacturing tape-out in just **9 months**.

OpenAI hardware lead Richard Ho attributes this to **deep hardware-software co-development**:
- OpenAI used its own frontier models to assist architecture exploration
- Power simulation and reinforcement learning optimization
- Broadcom provided industry-leading silicon implementation capabilities

### 2. AI-Assisted Chip Design

The Jalapeño is **the first AI chip designed with AI assistance**:
- OpenAI used models such as GPT-5.3-Codex-Spark to assist architecture exploration
- Used AI for power simulation and optimization
- Used reinforcement learning to optimize chip placement and routing

As OpenAI President Greg Brockman put it:

> "We use the frontier models that serve our users to optimize the infrastructure that runs future models."

### 3. Purpose-Built for Inference

Unlike general-purpose GPUs, the Jalapeño is an ASIC **built from the ground up around OpenAI's deep understanding of LLM inference workloads**:

- **Reducing data movement**: the core of the architecture is minimizing data movement
- **Balancing compute-memory-network resource allocation**: bringing actual utilization closer to theoretical peak
- **Combining high throughput with low latency**: aiming to combine the throughput of today's leading accelerators with the low latency of the fastest dedicated inference systems

### 4. Full-Stack Platform (Multi-Generational Roadmap)

The Jalapeño is **the first step in a multi-generational compute platform**:

- **End of 2026**: initial deployment (gigawatt-scale data center)
- **2027-2028**: gradual expansion
- **Platform composition**:
  - OpenAI-designed accelerators
  - Broadcom's chip implementation, networking, and connectivity technologies
  - Celestica's board, rack, and systems expertise
  - Broadcom Tomahawk switch chips (networking)

## Why Build In-House Chips?

### 1. Explosive Growth in Compute Demand

- ChatGPT processes **hundreds of millions of API calls per day**
- Training frontier models such as GPT-5, Claude, and Gemini requires **tens of thousands of GPUs**
- NVIDIA GPUs are in short supply, with lead times as long as **6-12 months**

### 2. Inference Cost Pressure

- OpenAI spends roughly **billions of dollars per year** on compute
- Inference accounts for **60-70%** of operating costs
- Even **marginal reductions** in inference cost significantly improve the profitability model

### 3. Hardware-Software Co-Optimization

- General-purpose GPUs cannot be extremely optimized for specific models (e.g., GPT-5)
- In-house chips can be **deeply tailored to one's own models**, achieving higher energy efficiency

## Impact on the AI Chip Market

### 1. Accelerated "De-NVIDIA-ization"

Another footnote in tech giants' collective challenge to NVIDIA's market dominance:

| Vendor | In-House Chip | Type | Status |
|--------|---------------|------|--------|
| **Google** | TPU v6e / Ironwood | Training+inference | ✅ In commercial use |
| **Amazon** | Trainium 3 | Training | ✅ Released |
| **Microsoft** | Maia 100 | Training+inference | ✅ Released |
| **Meta** | MTIA | Training+inference | ✅ Released |
| **OpenAI** | Jalapeño | Inference | 🚧 Deployment end of 2026 |
| **Apple** | Neural Engine | Endpoint inference | ✅ In commercial use |

### 2. Upgraded Dimensions of AI Chip Competition

The Jalapeño's release marks a fundamental leap in the competitive dimensions of the AI industry:

- **From a single contest of model capability**
- **To a full-stack infrastructure race of "model + chip + system + network"**

### 3. "AI-Designed AI Chips" as a New Paradigm

When OpenAI goes from developer of GPT-5 to designer of the Jalapeño, and when **9 months becomes the new speed benchmark for chip development**, the chip war is only just beginning.

## Use Cases

- ✅ **OpenAI internal workloads** (ChatGPT, Codex, API)
- ✅ **Microsoft Azure data centers** (possibly deployed in partnership with OpenAI)
- ✅ **Large-scale interactive scenarios for future Agent products**
- ❌ **Third-party users** (not sold externally at present)
- ❌ **Training tasks** (the Jalapeño is designed for inference)

## Hot Chips 2026 System Disclosure (2026-08 Update)

OpenAI gave a closing systems disclosure of the Jalapeño at Hot Chips 2026 (talk title: *You Can Just Build Things … Chips*), its **first public release of the inference ASIC's architecture design and performance test results**:

| Parameter | Disclosure |
|-----------|------------|
| **TDP** | About **700 W** |
| **Development Cycle** | Just **9 months** from initial RTL to tape-out |
| **Design Method** | AI-accelerated HW/SW co-design |
| **Early Silicon Results** | Industry-leading performance per watt on multi-chip low-latency workloads |
| **Positioning** | "The best compute platform" for OpenAI inference workloads |
| **Form Factor** | ASIC + host machine / accelerator card rack pairs |

> **Key Insight**: The Jalapeño debuted alongside Google's TPU 8i, Microsoft's Maia 200, and Meta's MTIA 400 at the same conference, all pointing to an industry-level migration — **ASICs are accelerating their penetration into the inference market where scale is large enough, model structures are stable, and TCO sensitivity is high**, while GPUs continue to cover frontier training and broader general-purpose workloads through architectural diversification.

## Vendor Information

| Parameter | Value |
|-----------|-------|
| **Company** | OpenAI |
| **Partners** | Broadcom, TSMC, Celestica |
| **CEO** | Sam Altman |
| **President** | Greg Brockman |
| **Hardware Lead** | Richard Ho |
| **Founded** | 2015-12 |
| **Jalapeño Launch** | 2026-06-24 |

## References

- [OpenAI official announcement](https://openai.com/blog) (technical white paper to be published)
- [Broadcom CEO Hock Tan interview](https://www.broadcom.com)
- [Bloomberg: Jalapeño cuts inference cost by 50%](https://www.bloomberg.com)
- [SemiWiki: Jalapeño technical details](https://semiwiki.com)
- [Tom's Hardware: Jalapeño architecture analysis](https://www.tomshardware.com)
- [Hot Chips 2026 and subsequent 2026-09 disclosures: 6-stack HBM4 216GB @ 15.4TB/s, 700W, tokens/kW 1.7x GB300]

---

**Disclaimer**: Some specifications in this article are estimates; refer to OpenAI's official technical white paper. OpenAI will publish a detailed performance technical white paper in the coming months.

**Last Updated**: 2026-09-05
