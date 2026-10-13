---
id: hygon-dcu-4
title: "Hygon DCU 4 (ShenSuan No. 4): Specs, HySwitch 2.0, 192-Card Interconnect"
sidebar_label: "Hygon DCU 4"
description: "Hygon Information's ShenSuan No. 4 DCU: a GPGPU coprocessor expected in H2 2026 with roughly 2x the performance of the prior generation, FP4 support, and the second-generation HySwitch 2.0 Scale up switch chip enabling 192-card interconnect per chip. Compute, memory, bandwidth, and TDP are all undisclosed."
keywords: [Hygon DCU 4, ShenSuan No. 4, Hygon Information, GPGPU, HySwitch 2.0, 192-card interconnect, FP4, DTK, CUDA-compatible, Chinese AI chip]
---

# Hygon DCU 4 (ShenSuan No. 4)

## Product Overview

**Hygon's ShenSuan No. 4 DCU** is the newest generation of GPGPU coprocessor in the **ShenSuan** line from Hygon Information (688041.SH), and the next-generation AI compute core of the company's **"CPU + DCU" dual-chip strategy**. On **September 29, 2026**, Hygon confirmed on its investor interaction platform that **the new generation of general-purpose processors and coprocessors is progressing on schedule and in line with expectations, with ShenSuan No. 4 expected to launch in H2 2026**.

Four facts are currently public: **roughly 2x the performance of the prior generation**, **FP4 support**, pairing with the **second-generation Scale up switch chip HySwitch 2.0**, and **192-card interconnect per chip**. The **192-card interconnect** is the most consequential architectural number of this generation — combined with the Scale up capability of HySwitch 2.0, it means **just two network tiers can support clusters of tens of thousands of cards**, a step-change in Hypon's large-scale training fabric and a direct competitive answer to the thousand-card supernode roadmap taken by other domestic AI chip vendors.

The DCU line sits on a mature software foundation. DCU products are built on a **GPGPU architecture** with full-precision compute capability, and the in-house **DTK** heterogeneous computing platform and **DAS** AI software stack have **integrated over 2,000 operators and support more than 100 mainstream AI tools**. As of H1 2026, Hygon had completed **full adaptation and optimization for over 400 mainstream large models** including **DeepSeek, Qwen3, Hunyuan, and Zhipu**, covering **99% of non-closed-source models worldwide**. DCU products have landed in **more than 20 key industries and over 300 application scenarios**, serving government departments, state-owned banks, the three major telecom carriers, and internet companies. In 2025, DCU shipments reached roughly 80,000 units, up about 150% year over year, placing the line among the leaders in domestic AI accelerators.

Hygon's recent financials underline the shipment base for the new product. In **H1 2026, revenue reached RMB 9.099 billion, up 66.52% year over year, with RMB 1.798 billion in net profit attributable to shareholders, up 49.69%**. Second-quarter net profit grew 61% quarter over quarter, and R&D spending of RMB 2.652 billion equaled **29.15% of revenue**.

> ⚠️ **Disclosure status (important)**: Hygon has **not published** ShenSuan No. 4's **compute figures, memory capacity, memory type, memory bandwidth, or TDP**. Every one of those fields in the table below is marked "**Not disclosed**", with **no speculative fill**. Circulating claims about FP6 support and 100,000-card clusters come from unofficial channels and are not adopted here. The only quantifiable official statement is "**roughly 2x the performance of the prior generation**" — note this is a **relative multiple, not an absolute compute figure**, and Hygon has not specified which baseline part or test methodology it refers to.

## Key Specifications

| Parameter | Value |
|------|------|
| **Architecture** | GPGPU (ShenSuan series, CUDA-compatible ecosystem) |
| **Process** | Not disclosed |
| **Memory** | Not disclosed |
| **Memory Type** | Not disclosed |
| **Memory Bandwidth** | Not disclosed |
| **FP8** | Not disclosed |
| **FP4** | Supported |
| **FP16** | Not disclosed |
| **INT8** | Not disclosed |
| **TDP** | Not disclosed |
| **Interconnect** | HySwitch 2.0 (192-card interconnect per chip) |
| **Release / Production** | Expected to launch in H2 2026 |

> 📌 **On undisclosed fields**: process node, memory capacity, memory type, memory bandwidth, FP8 / FP16 / INT8 compute, and TDP — eight fields in total — have not been disclosed by Hygon and are all marked "Not disclosed" with no speculation.
>
> 📌 **The one quantifiable metric**: the official wording is "**roughly 2x the performance of the prior generation**", with no absolute compute figure, baseline part, or test methodology given. The preceding generation is the **ShenSuan No. 3 (DCU K100 AI version, 2024, 192 TFLOPS FP16 / 392 TOPS INT8 / 64GB HBM2e)**.
>
> 📌 **On FP4**: Hygon has made no standalone statement on FP4 support for ShenSuan No. 4; the capability comes from market interpretation of the new part's positioning and the industry-wide FP4 trend. Under a strict evidentiary standard, treat it as **unconfirmed by the vendor**.

## Key Features

### 1. HySwitch 2.0 and 192-Card Scale up Interconnect

- ShenSuan No. 4 pairs with the **second-generation Scale up switch chip HySwitch 2.0**
- **A single chip supports 192-card interconnect** — a key metric for the DCU line's Scale up direction, far exceeding the interconnect scale of prior generations
- **Two network tiers support clusters of tens of thousands of cards**, sharply reducing both the tier count and latency overhead of large-scale clusters
- Separating Scale up (chip-to-chip) from Scale out (node-to-node) is the cluster-scaling route widely adopted by domestic AI chip vendors

### 2. "CPU + DCU" Dual-Chip Synergy

- Hygon is one of the few domestic firms able to develop and commercially operate **both x86 high-end general-purpose processors (CPU) and CUDA-like ecosystem coprocessors (DCU)** at scale
- The CPU is x86 instruction-set compatible, with a significant ecosystem maturity advantage; the DCU is GPGPU-based with full-precision compute capability
- This "dual-chip synergy" gives Hygon integrated delivery capability at the whole-system and cluster level

### 3. DTK and DAS Software Ecosystem

| Layer | Content |
|------|---------|
| **Heterogeneous computing platform** | **DTK** (DCU Toolkit), built on the open-source ecosystem, supporting mainstream AI tools |
| **AI software stack** | **DAS**, with **over 2,000 operators** integrated |
| **Tooling** | Support for **more than 100 mainstream AI tools** |
| **Model adaptation** | Full adaptation and optimization completed for **over 400 mainstream large models** including DeepSeek, Qwen3, Hunyuan, and Zhipu |
| **Coverage** | Covers **99% of non-closed-source large models worldwide** |
| **Ecosystem alliance** | The "**Guanghe Organization**" has aggregated **over 6,000** ecosystem partners |

### 4. Deployment and Customers

- Landed in **more than 20 key industries and over 300 application scenarios**
- Customers span government departments, state-owned banks, the three major telecom carriers, and internet companies
- Deep partnerships established with leading internet firms including **ByteDance, Tencent, Alibaba, and Baidu** for joint technology R&D and custom services
- Applied across big data processing, artificial intelligence, and commercial computing

### 5. H1 2026 Financials

| Metric | H1 2026 | Change |
|------|---------|--------|
| **Revenue** | RMB 9.099 B | +66.52% YoY |
| **Net profit attributable to shareholders** | RMB 1.798 B | +49.69% YoY |
| **Net profit excluding non-recurring items** | RMB 1.631 B | +49.67% YoY |
| **Q2 net profit** | RMB 1.111 B | +61% QoQ |
| **R&D spending** | RMB 2.652 B | +55.05% YoY |
| **R&D as share of revenue** | 29.15% | — |
| **Basic EPS** | RMB 0.78 | +50% YoY |

- Full-year 2025 R&D expense was **RMB 4.145 billion**, up 42.45% year over year
- 3,007 R&D personnel, 80.83% of total headcount, of whom 78.65% hold a master's degree or above
- 2,099 intellectual property projects cumulatively, including 1,204 invention patents

## Use Cases

- ✅ **Domestic AI compute infrastructure buildout** (serving both the Xinchuang and general internet markets)
- ✅ **Training clusters from thousands to tens of thousands of cards** (HySwitch 2.0, 192-card Scale up, two network tiers)
- ✅ **Large-model training and inference** (400+ adapted models, covering 99% of non-closed-source models)
- ✅ **Scientific and commercial computing** (GPGPU full-precision compute)
- ✅ **Integrated CPU + DCU delivery** (x86 plus CUDA-like dual-chip synergy)
- ❌ Procurement evaluation that requires concrete peak compute or memory figures (**key specs not yet disclosed**)
- ❌ Deployment before H2 2026 (the product is expected to launch in H2 2026)

## Comparison

- [Hygon DCU K100 AI version (ShenSuan No. 3)](/docs/cards/others/hygon-dcu-k100) — preceding generation (2024, 192 TFLOPS FP16, 392 TOPS INT8, 64GB HBM2e)
- [Hygon DCU Z100 (ShenSuan No. 1)](/docs/cards/others/hygon-dcu-z100) — an earlier generation (2022)
- [Hygon DCU Z100L](/docs/cards/others/hygon-dcu-z100l) — the trimmed ShenSuan No. 1
- [Full comparison table](/docs/comparison)

## Data Sources

- [Ijiwei (Aijiwei): Hygon Information — new generation processor R&D progressing on schedule (2026-09-29)](https://www.laoyaoba.com/n/1114115) — official investor platform statements: ShenSuan No. 4 expected H2 2026, roughly 2x prior-generation performance, paired with the second-generation Scale up switch HySwitch2.0, 192-card interconnect per chip, tens of thousands of cards on two network tiers
- [Ijiwei (Aijiwei): Hygon Information — ShenSuan No. 4 R&D progressing smoothly (2026-09-29)](https://www.laoyaoba.com/n/1114119) — official confirmation of R&D progress; H1 2026 revenue of RMB 9.099 B and net profit of RMB 1.798 B; 400+ adapted large models; 20+ industries and 300+ scenarios
- [Shenzhen Chamber of Commerce for Electronics: Hygon breaks RMB 9 billion in H1 revenue with net profit up nearly 50%](https://www.seccw.cn/Document/detail/id/48860.html) — H1 2026 report data: R&D of RMB 2.652 B at 29.15% of revenue, 3,007 R&D staff at 80.83% of headcount, 2,009 intellectual property items, 6,000+ partners in the Guanghe Organization
- [Qilu.com Finance: From Xinchuang substitute to market mainstay — a 2026 landscape of domestic GPU vendors](https://caijing.iqilu.com/cjzx/2026/0901/5940740.shtml) — ShenSuan No. 3 released and in market in 2025, ShenSuan No. 4 expected H2 2026, and roughly 80,000 DCU shipped in 2025, up about 150% year over year
