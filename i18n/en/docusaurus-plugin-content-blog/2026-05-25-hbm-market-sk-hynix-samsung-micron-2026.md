---
slug: hbm-market-sk-hynix-samsung-micron-2026
title: 'HBM Three-Way Battle: SK Hynix / Samsung / Micron Fight for AI Memory Supremacy'
authors: [aicomputecards]
tags: [tech-deep-dive, strategy]
description: "Deep dive into 2026 HBM market landscape: SK Hynix 70% share / Samsung HBM4 catching up / Micron HBM3e advantage / How capacity constraints limit AI chip supply."
---

The bottleneck for AI compute has shifted from **compute itself** to **memory bandwidth and capacity**. **HBM (High Bandwidth Memory)** , as a core component of AI chips, has a 2026 market size of **$80B+**, but there are only **3 suppliers** globally — **SK Hynix, Samsung, Micron**. This article provides an in-depth analysis of this "memory three kingdoms" battle.

{/* truncate */}

## Why Is HBM Critical in the AI Era?

### The Memory Wall

AI model sizes have grown from BERT (340M parameters) in 2018 to Llama 3 (405B) in 2024 and Gemini (estimated 1T+) in 2026, with **compute growing 1,000×** but **memory bandwidth only growing 10-20×**.

This is the famous **von Neumann bottleneck**:

| Metric | 2018 (V100) | 2024 (H100) | 2026 (Rubin R200) | Growth |
|--------|-------------|-------------|--------------------|--------|
| Compute (FP16/BF16) | 125 TFLOPS | 989 TFLOPS | 25 PFLOPS | 200× |
| Memory Capacity | 32 GB | 80 GB | 288 GB | 9× |
| Memory Bandwidth | 900 GB/s | 3.35 TB/s | 22 TB/s | 24× |

> **Compute growth far outpaces memory bandwidth growth**, causing GPUs to frequently "wait for data." HBM is the core solution to alleviate this bottleneck.

### HBM vs GDDR vs SRAM

| Memory Type | Bandwidth (per pin) | Capacity Density | Power | Use Case |
|-------------|---------------------|------------------|-------|----------|
| **HBM4** | **6.4 Gbps/pin** | High (12-Hi) | Medium | AI training / inference GPU |
| HBM3e | 4.8 Gbps/pin | High (8-Hi/12-Hi) | Medium | AI training / inference GPU |
| HBM3 | 4.0 Gbps/pin | Medium | Medium | AI training |
| HBM2e | 3.2 Gbps/pin | Medium | Medium | AI inference |
| GDDR6X | 1.6 Gbps/pin | Medium | Med-High | Consumer GPUs |
| GDDR7 | 2.5 Gbps/pin | Medium | Medium | Consumer / Workstation |
| LPDDR5X | 0.85 Gbps/pin | High | Low | Edge AI / Mobile |
| SRAM (on-chip) | 10+ Gbps/pin | Very Low | Very High | LPU / Cache |

> HBM is the optimal balance of bandwidth and capacity. **SRAM is fastest but capacity is too small (100× cost per GB vs HBM)** , **GDDR has large capacity but insufficient bandwidth**.

## Three-Vendor Landscape

### 1. SK Hynix: Current HBM Dominator (70% Share)

**SK Hynix** is the **absolute leader** in the HBM market:

| Item | SK Hynix Status |
|------|-----------------|
| **Market Share** | **~70%** (2025 total HBM market) |
| **HBM4 Progress** | **First mass production Q1 2026**, NVIDIA exclusive supply |
| **HBM3e Supply** | NVIDIA main supplier (80%), some AMD |
| **Core Technology** | **Advanced MR-MUF** (Mass Reflow Molded Underfill) |
| **Capacity** | 2026 plan: **25,000 HBM wafers/month** |
| **Key Customers** | NVIDIA (90%), AMD, some Google |
| **2025 Revenue (HBM)** | ~$30B (YoY +80%) |
| **2025 Net Margin** | ~35% (far above traditional DRAM business) |

#### SK Hynix Key Advantages

- **Earliest to mass-produce HBM3 (2018)** : Technological first-mover
- **Deep NVIDIA partnership**: HBM3, HBM3e all launched with NVIDIA first
- **Advanced MR-MUF process**: Leading packaging yield
- **HBM4 head start**: First mass production Q1 2026

#### Key Events

| Time | Event |
|------|-------|
| 2014 | Co-developed HBM with AMD |
| 2018 | First HBM2 mass production (NVIDIA V100) |
| 2020 | HBM2e mass production |
| 2022 | HBM3 mass production (NVIDIA H100) |
| 2024 | HBM3e 12-Hi mass production (NVIDIA B200) |
| 2026 Q1 | **HBM4 first mass production** (NVIDIA Rubin R200) |

### 2. Samsung: HBM4 Chaser (20% Share)

**Samsung** is the HBM market **challenger**, but hampered by yield and NVIDIA certification:

| Item | Samsung Status |
|------|----------------|
| **Market Share** | **~20%** (2025 total HBM market) |
| **HBM4 Progress** | Q2 2026 mass production (1 quarter behind SK Hynix) |
| **HBM3e Supply** | Awaiting NVIDIA certification, primarily for AMD / Google |
| **Core Technology** | **TC-NCF** (Thermal Compression Non-Conductive Film) |
| **Capacity** | 2026 plan: 10,000 HBM wafers/month |
| **Key Customers** | AMD (some MI300X), Google TPU, Cerebras |
| **2025 Revenue (HBM)** | ~$8B (YoY +150%, but only 1/4 of SK Hynix) |
| **2025 Net Margin** | ~5% (low yield → low margins) |

#### Samsung Key Issues

- **HBM3 NVIDIA certification not passed**: Multiple sample submissions failed 2023-2024
- **Low yield**: HBM3e yield ~50% (SK Hynix ~70%)
- **Technology path divergence**: Samsung bets on TC-NCF (vs SK Hynix's MR-MUF)
- **2024 significant losses**: HBM business massive investment but slow returns

#### Samsung 2025-2026 Breakthroughs

| Time | Event |
|------|-------|
| 2024-12 | HBM3e 8-Hi passed AMD certification |
| 2025-03 | HBM3e 12-Hi passed Google TPU certification |
| 2025-Q4 | HBM4 trial production, Q2 2026 mass production |
| 2025-Q4 | NVIDIA HBM3e 12-Hi certification **passed** (partial orders) |

> **Late 2025, Samsung finally obtained partial NVIDIA HBM3e 12-Hi orders**, a turning point for Samsung's HBM business.

### 3. Micron: HBM Dark Horse (10% Share)

**Micron** is the HBM market **dark horse**, becoming NVIDIA's second supplier with **HBM3E 12-Hi 9.2 Gbps speed**:

| Item | Micron Status |
|------|---------------|
| **Market Share** | **~10%** (2025 total HBM market) |
| **HBM4 Progress** | Q3 2026 mass production (2 quarters behind SK Hynix) |
| **HBM3e Supply** | NVIDIA second supplier (~30% share) |
| **Core Technology** | **1znm DRAM** + Advanced Packaging |
| **Capacity** | 2026 plan: 5,000 HBM wafers/month |
| **Key Customers** | NVIDIA (partial), AMD, Intel |
| **2025 Revenue (HBM)** | ~$4B (YoY +200%) |
| **2025 Net Margin** | ~10% |

#### Micron Key Advantages

- **HBM3E 12-Hi 9.2 Gbps**: Industry's highest speed (ahead of SK Hynix's 9 Gbps)
- **US-based manufacturing**: Idaho/New York fabs, CHIPS Act compliant
- **NVIDIA second supplier**: Avoiding single-source risk
- **2025 breakthrough**: Revenue +200% YoY, fastest growth among the three

#### Micron Key Events

| Time | Event |
|------|-------|
| 2024 | First HBM3E 8-Hi mass production |
| 2025-Q1 | HBM3E 12-Hi mass production (industry first) |
| 2025-Q2 | **NVIDIA H100/B200 certification** passed |
| 2025-Q3 | Partial B200 orders (~30% share) |
| 2026-Q3 | HBM4 expected mass production |

> **Micron is the fastest growing among the three, +200% YoY in 2025**. But capacity of only 5,000 wafers/month limits its market share growth.

## HBM Technology Roadmap

### HBM4 Key Specifications

| Item | HBM3e | **HBM4** | Improvement |
|------|-------|----------|-------------|
| Per stack capacity | 24 GB (12-Hi) | **36-48 GB** (16-Hi) | 1.5-2× |
| Per pin speed | 9.2 Gbps | **12-16 Gbps** | 1.3-1.7× |
| Per stack bandwidth | 1.2 TB/s | **1.5-2 TB/s** | 1.3-1.7× |
| Power | 7W/stack | 8W/stack | Slight increase |
| Manufacturing process | 1z/1β DRAM | 1γ/1δ DRAM | Shrunk |
| Packaging | CoWoS-S | **CoWoS-L** | Larger interposer |
| Mass production | 2024-2025 | **2026 Q1 (SK) / Q2 (Sam) / Q3 (Mic)** | — |

### HBM4E / HBM5 Roadmap

| Year | Model | Capacity | Speed | Process |
|------|-------|----------|-------|---------|
| 2026 | **HBM4** | 36-48 GB | 12-16 Gbps | 1γ/1δ |
| 2027 | **HBM4E** | 48-64 GB | 16-20 Gbps | 1δ |
| 2028 | **HBM5** | 64-80 GB | 20-24 Gbps | 1ε |
| 2029 | **HBM5E** | 80-96 GB | 24-28 Gbps | 1ε+ |

## Capacity and Pricing

### HBM Capacity (2026 Plan)

| Vendor | 2025 Actual | 2026 Plan | 2027 Plan | Market Share |
|--------|-------------|-----------|-----------|--------------|
| **SK Hynix** | 18,000 wafers/month | **25,000** | 35,000 | 60-70% |
| **Samsung** | 6,000 wafers/month | 10,000 | 18,000 | 15-20% |
| **Micron** | 3,500 wafers/month | 5,000 | 12,000 | 10-15% |
| **Total** | 27,500 | **40,000** | 65,000 | 100% |

> **2026 HBM capacity tight**: Demand ~50,000 wafers/month, supply only 40,000 wafers/month, **20% shortfall**.

### HBM Pricing (per GB)

| Model | 2024 | 2025 | 2026 | 2027 (E) |
|-------|------|------|------|-----------|
| **HBM4** | N/A | N/A | **$20-25/GB** | $15-18/GB |
| HBM3e 12-Hi | $18-22/GB | $15-18/GB | $12-15/GB | $10-12/GB |
| HBM3e 8-Hi | $14-18/GB | $11-14/GB | $9-11/GB | $8-10/GB |
| HBM3 8-Hi | $10-12/GB | $8-10/GB | $6-8/GB | $5-7/GB |

> **HBM accounts for 30-50% of AI chip cost**. NVIDIA B200's HBM cost is approximately $5,000-8,000 (192GB HBM3e × ~$30/GB).

## HBM and AI Chip Supply Correlation

### NVIDIA Rubin R200 HBM Supply Chain

| HBM Source | Share | Notes |
|------------|-------|-------|
| **SK Hynix HBM4** | **70%** | First batch, exclusive supply Q1-Q2 2026 |
| **Micron HBM4** | **20%** | From Q3 2026, CHIPS Act benefits |
| **Samsung HBM4** | **10%** | From Q4 2026 (certification delay) |

> **NVIDIA still heavily dependent on SK Hynix**. This is a **single point of failure risk** for NVIDIA's supply chain.

### AMD MI400 HBM Supply Chain

| HBM Source | Share | Notes |
|------------|-------|-------|
| **SK Hynix HBM3e** | 50% | Main supplier |
| **Samsung HBM3e** | 30% | Expanded after 2025 breakthrough |
| **Micron HBM3e** | 20% | Backup supply |

### Google TPU HBM Supply Chain

| HBM Source | Share | Notes |
|------------|-------|-------|
| **Samsung HBM3e** | 60% | Early partnership |
| **SK Hynix HBM3e** | 30% | Partial orders |
| **Micron HBM3e** | 10% | New entrant |

### Huawei Ascend 920 HBM Supply Chain

| HBM Source | Share | Notes |
|------------|-------|-------|
| **CXMT (ChangXin Memory Technologies)** | 70% | Domestic HBM, 4 Tbps |
| **Samsung HBM3** | 20% | Restricted by US export controls |
| **SK Hynix** | 10% | Restricted by US export controls |

> **Huawei affected by US export controls**, forced to accelerate domestic CXMT HBM substitution.

## Investment Analysis

### Three Vendors 2025-2026 Performance

| Vendor | 2025 Revenue (HBM) | YoY | 2026 (E) Revenue | Net Margin |
|--------|--------------------|-----|-------------------|------------|
| **SK Hynix** | ~$30B | +80% | ~$50B | ~35% |
| **Samsung** | ~$8B | +150% | ~$15B | ~10% |
| **Micron** | ~$4B | +200% | ~$10B | ~15% |

### Stock Performance (2025 to Date)

| Vendor | 2025 Increase | 2026 Increase (YTD) |
|--------|---------------|----------------------|
| **SK Hynix** | +120% | +35% |
| **Samsung** | +15% | +10% |
| **Micron** | +90% | +25% |
| **NVIDIA** | +180% | +40% |

> **SK Hynix is the biggest beneficiary of AI memory**, +120% in 2025, far ahead of Samsung (only +15%).

## Risks and Challenges

### 1. HBM Capacity Tightness

- **2026 20% shortfall** (demand 50K wafers vs supply 40K)
- **NVIDIA Rubin R200 shipments** may be delayed due to HBM supply constraints
- **Customer prepayment deposits** have become the norm

### 2. US Export Controls

- **HBM exports to China** strictly limited by US Commerce Department
- **Samsung, SK Hynix** China-based fabs restricted
- **Huawei** accelerating domestic CXMT HBM substitution

### 3. Technology Path Divergence

- **SK Hynix**: MR-MUF path, leading
- **Samsung**: TC-NCF path, behind but catching up
- **Micron**: Somewhere in between

### 4. Competitive Technologies

- **Samsung HBM-PIM**: HBM with built-in processing units (processing-in-memory)
- **TSMC SoIC**: 3D stacked SRAM + Logic
- **Micron HBM-CX**: Compute Express Link integration

## Future Outlook

### Short-term (2026-2027)

- **HBM remains tight**: Demand > supply
- **Prices remain high**: HBM4 $20-25/GB
- **Three coexist**: SK Hynix 70% + Samsung 20% + Micron 10%

### Mid-term (2027-2029)

- **HBM4E / HBM5**: Capacity 64-96 GB, speed 20-28 Gbps
- **Domestic HBM rises**: CXMT mass produces 8-Hi
- **New entrants**: YMTC may enter HBM market

### Long-term (2029+)

- **HBM6 / 3D HBM**: Stack more layers, TSV alternatives
- **PIM-HBM**: HBM with built-in processing units
- **Alternative technologies**: On-chip SRAM capacity breakthroughs (e.g., Cerebras WSE)

## Detailed Product Pages

- [NVIDIA Rubin R200 (HBM4 debut)](/docs/cards/nvidia/rubin-r200)
- [AMD MI400 (CDNA Next + HBM4)](/docs/cards/amd/mi400)
- [Google TPU 8t + 8i (HBM integrated)](/docs/cards/google/tpu-8t)
- [Cerebras WSE-3 (Wafer-scale SRAM vs HBM)](/docs/cards/cerebras/wse-3)
- [Full Comparison Table](/docs/comparison)

## Summary

The HBM three-way battle will continue for 3-5 years:

1. **SK Hynix unshakeable in the short term** — HBM4 debut + deep NVIDIA lock-in
2. **Samsung breakthrough late 2025** — HBM3e 12-Hi finally NVIDIA-certified
3. **Micron fastest growing** — HBM3E 9.2 Gbps industry fastest
4. **Capacity constraints persist** — 20% shortfall in 2026
5. **Domestic HBM rises** — CXMT 4 Tbps breakthrough

**HBM is not a supporting actor — it's the "electricity, water, and gas" of the AI era**.
