---
slug: ai-startup-survival-2026-tenstorrent-sambanova-graphcore
title: 'AI Chip Startup Survival Report: Tenstorrent / SambaNova / Graphcore in 2026'
authors: [aicomputecards]
tags: [strategy, news]
description: "2026 AI chip startup survival landscape: Tenstorrent raises $700M / SambaNova RDU 2nd gen / Graphcore acquired by SoftBank / Cerebras IPO / Groq acquired by NVIDIA. Which ones will survive?"
---

**2026 AI chip market enters a "winner takes all" phase**. NVIDIA holds 90%+ market share, AMD struggles at 10%, and Google/AWS/Huawei/Cerebras each occupy niche segments. But **a group of AI chip startups** are fighting to survive in the cracks — this article analyzes the 2026 status and future of **Tenstorrent, SambaNova, Graphcore, Cambricon, Moore Threads, Biren, and Iluvatar**.

{/* truncate */}

## 2026 AI Chip Market Landscape

### Top Tier: Duopoly + 5 Challengers

| Vendor | Market Share | 2025 Revenue | Status |
|--------|-------------|--------------|--------|
| **NVIDIA** | **90%+** | ~$130B | Dominant |
| **AMD** | 5% | ~$5B (MI business) | 2nd place |
| **Huawei** | 1% (China 60%) | ~$3B (Ascend) | China dominant |
| **Google TPU** | 1% (internal) | N/A | Internal use |
| **AWS Trainium** | &lt;1% (internal) | N/A | Internal use |
| **Cerebras** | &lt;1% | $510M | IPO pending |
| **Groq (NVIDIA)** | &lt;1% | N/A | Integrated into NVIDIA |

### Startups

| Vendor | Founded | Total Funding | 2025 Revenue | Status |
|--------|---------|---------------|--------------|--------|
| **Tenstorrent** | 2016 | **$700M+** | ~$30M (est.) | Fundraising |
| **SambaNova** | 2017 | **$1.1B+** | ~$80M (est.) | Revenue growing |
| **Graphcore** | 2016 | **$700M+** | N/A | **Acquired by SoftBank** (2024) |
| **Cambricon** | 2016 | A-share listed | ~$80M | A-share $25B market cap |
| **Moore Threads** | 2020 | $500M+ | ~$30M | Preparing for IPO |
| **Biren** | 2019 | $700M+ | ~$20M | Preparing for IPO |
| **Iluvatar** | 2018 | $400M+ | ~$15M | Listed on HKEX |
| **Lightmatter** | 2017 | $300M+ | ~$5M | Silicon photonics |
| **Esperanto** | 2014 | $120M | &lt;$5M | RISC-V AI |
| **Mythic** | 2012 | $200M+ | &lt;$5M | Edge AI |

## Ten Startup Deep Dives

### 1. Tenstorrent: RISC-V Dark Horse

**Tenstorrent** is led by legendary chip designer **Jim Keller** (formerly designed AMD Zen / Apple A14 / Tesla FSD):

| Item | Details |
|------|---------|
| **Founder** | **Jim Keller** (legendary architect) |
| **Founded** | 2016 |
| **HQ** | Toronto / Austin / Silicon Valley |
| **Funding** | **$700M+** (2024-12 valuation $2B) |
| **2025 Revenue** | ~$30M (est.) |
| **Core Products** | **Wormhole n150/n300**, **Blackhole** |
| **Fab** | TSMC 12nm + GlobalFoundries |
| **Software** | **Fully open-source** (TT-Metalium) |
| **Customers** | **LG**, **BOSCH**, **AutoDesk**, **RIKEN** (Japan) |
| **2026 Plan** | Grendel next-gen + strategic partnerships (speculated with OpenAI/AMD) |

#### Tenstorrent Key Products

| Product | Process | Compute | Memory | Price | Status |
|---------|---------|---------|--------|-------|--------|
| **Wormhole n150** | 12nm | 80 TOPS (FP8) | 12GB | ~$2K | 2023 |
| **Wormhole n300** | 12nm | 160 TOPS (FP8) | 24GB | ~$4K | 2024 |
| **Blackhole p150** | 6nm | 320 TOPS (FP8) | 16GB | ~$3K | 2025 |
| **Blackhole p300** | 6nm | 800 TOPS (FP8) | 24GB | ~$6K | 2025 |
| **Grendel** | 4nm (est.) | 1.5 POPS (FP8) | 32GB | TBD | 2026-2027 |

#### Tenstorrent Key Advantages

- **Jim Keller's personal brand**: Top-tier industry architect
- **Fully open-source software**: TT-Metalium (GitHub 13K+ stars)
- **RISC-V ecosystem**: Deep collaboration with SiFive / RISC-V International
- **Government / academic customers**: RIKEN (Japan), multiple US universities

#### Tenstorrent Key Challenges

- **High TDP**: Blackhole p300 ~150W (vs H100 700W but still weaker performance)
- **Weak ecosystem**: PyTorch compatibility still improving
- **Low market awareness**: Hard to acquire enterprise customers vs NVIDIA

### 2. SambaNova: Enterprise RDU Appliances

**SambaNova** is the representative of enterprise AI appliances:

| Item | Details |
|------|---------|
| **Founders** | Kunle Olukotun (Stanford professor) + 2 Stanford alumni |
| **Founded** | 2017 |
| **HQ** | Palo Alto |
| **Funding** | **$1.1B+** (2021 valuation $5B) |
| **2025 Revenue** | ~$80M (est.) |
| **Core Product** | **SN40L RDU** (Reconfigurable Dataflow Unit) |
| **Fab** | TSMC 7nm |
| **Customers** | **US Government**, **Accenture**, **Hewlett Packard Enterprise** |
| **2026 Plan** | **SN50 next-gen** (larger RDU) |

#### SambaNova SN40L Specifications

| Item | Spec |
|------|------|
| **Architecture** | RDU (Reconfigurable Dataflow Unit) |
| **Process** | TSMC 7nm |
| **RDU Cores** | 1,040 tiles |
| **HBM Capacity** | 128 GB HBM3 |
| **HBM Bandwidth** | 3.2 TB/s |
| **FP16 Compute** | 600 TFLOPS |
| **BF16 Compute** | 300 TFLOPS |
| **TDP** | ~600 W |
| **Price** | ~$150K / system |

#### SambaNova Business Model

- **Does not sell chips** — **sells appliances** (SambaSystems)
- **SambaFlow** software stack (Apache 2.0)
- **Focus on enterprise private deployment**: Government, banking, telecom
- **2025 Customers**: US Air Force, Accenture, HPE

#### SambaNova Key Challenges

- **Small market share**: Huge gap vs NVIDIA giant
- **Appliance model hard to scale**: Each customer requires customization
- **2024 20% layoffs** (restructuring)

### 3. Graphcore: Acquired by SoftBank

**Graphcore** was a UK AI chip pioneer, but was **acquired by SoftBank** in 2024:

| Item | Details |
|------|---------|
| **Founders** | Nigel Toon + Simon Knowles |
| **Founded** | 2016 |
| **HQ** | Bristol (UK) |
| **Funding** | $700M+ (2020 valuation $2.8B) |
| **2024 Revenue** | ~$30M (est.) |
| **Core Products** | **Bow GC200 IPU** + **Bow Pod** |
| **Fab** | TSMC 7nm |
| **2024-10 Acquisition** | **Acquired by SoftBank** (undisclosed, est. $600M) |
| **2026 Status** | SoftBank subsidiary, focused on Japan market |

#### Graphcore Key Events

| Time | Event |
|------|-------|
| 2018 | Bow IPU debut |
| 2020 | Peak valuation $2.8B |
| 2022 | Revenue far below expectations |
| 2023 | Multiple layoffs |
| **2024-10** | **SoftBank acquisition** |
| 2025 | Pivoted to Japan market (SoftBank Japan + Saudi G42) |
| 2026 | SoftBank internal use + Japan National AI Strategy |

#### Graphcore Future

- **No longer pursuing independent IPO**
- **Integrated by SoftBank** into ARM ecosystem
- **Bow Pod 128** remains flagship
- **Possible 2027 exit** (SoftBank divestiture)

### 4. Cambricon: A-share $25B

**Cambricon** is China's first AI chip stock:

| Item | Details |
|------|---------|
| **Founded** | 2016 |
| **Co-founders** | Chen Yunji, Chen Tianshi (brothers, CAS ICT) |
| **Listed** | **2020-07 STAR Market** (A-share 688256) |
| **Market Cap** | **~$25B** (2026-05) |
| **2025 Revenue** | ~$80M |
| **Core Products** | Siyuan 290 / 590 / Siyuan 690 (next-gen) |
| **Fab** | SMIC |
| **Customers** | Government, telecom, internet |

#### Cambricon Siyuan 590

| Item | Spec |
|------|------|
| **Process** | 7nm |
| **BF16 Compute** | 480 TFLOPS |
| **INT8 Compute** | 960 TOPS |
| **HBM Capacity** | 64 GB |
| **HBM Bandwidth** | 2.4 Tbps |
| **TDP** | ~300 W |
| **Price** | ~$5K (est.) |

#### Cambricon Challenges

- **Weak software ecosystem**: MLU programming model gap vs CUDA
- **Market share squeezed by Huawei**: Ascend 910C leading in compute since 2025
- **Poor profitability**: Still loss-making

### 5. Moore Threads: A-share Under Review

**Moore Threads** is China's #2 GPU vendor:

| Item | Details |
|------|---------|
| **Founded** | 2020 |
| **Founder** | Zhang Jianzhong (former NVIDIA Global VP, China GM) |
| **Funding** | $500M+ |
| **2025 Revenue** | ~$30M |
| **Core Products** | MTT S4000 / S5000 |
| **Fab** | SMIC 7nm |
| **A-share Status** | **Applied for STAR Market IPO late 2025** |

#### Moore Threads MTT S5000

| Item | Spec |
|------|------|
| **Process** | 7nm (SMIC) |
| **FP16 Compute** | 250 TFLOPS |
| **INT8 Compute** | 500 TOPS |
| **Memory** | 32GB GDDR6X |
| **Memory Bandwidth** | 1.6 Tbps |
| **TDP** | ~300 W |
| **Price** | ~$3K |

#### Moore Threads Challenges

- **Weak ecosystem**: MUSA vs CUDA gap
- **Market share**: Far below Huawei
- **A-share IPO pending**

### 6. Biren: HKEX Under Review

**Biren** is China's #3 GPU vendor:

| Item | Details |
|------|---------|
| **Founded** | 2019 |
| **Founder** | Zhang Wen (Harvard PhD, former NVIDIA) |
| **Funding** | $700M+ |
| **2025 Revenue** | ~$20M |
| **Core Product** | BR104 |
| **Fab** | SMIC 7nm |
| **HKEX Status** | **Applied for HKEX listing late 2025** |

#### Biren BR104

| Item | Spec |
|------|------|
| **Process** | 7nm (SMIC) |
| **FP16 Compute** | 300 TFLOPS |
| **INT8 Compute** | 600 TOPS |
| **Memory** | 32GB GDDR6 |
| **Memory Bandwidth** | 1.6 Tbps |
| **TDP** | ~300 W |
| **Price** | ~$3K |

#### Biren Key Events

- **2023 US export controls** limited advanced process access
- **2024 IPO postponed** (performance missed targets)
- **Late 2025 re-applied** for HKEX listing

### 7. Iluvatar: HKEX Listed

**Iluvatar** is listed on HKEX:

| Item | Details |
|------|---------|
| **Founded** | 2018 |
| **Listed** | 2023 HKEX |
| **Core Products** | Tianhai 100 / Bi-150 |
| **Fab** | SMIC 7nm |
| **Market Cap** | ~$500M |

### 8. Lightmatter: Silicon Photonics Computing

**Lightmatter** is a silicon photonics pioneer:

| Item | Details |
|------|---------|
| **Founded** | 2017 |
| **Funding** | $300M+ |
| **Core Product** | **Envise** silicon photonics AI accelerator |
| **Process** | TSMC 5nm + proprietary photonics chip |
| **Customers** | Major datacenters |

#### Lightmatter Envise

| Item | Spec |
|------|------|
| **Architecture** | Silicon photonics + electronic hybrid |
| **Compute** | 1 PFLOP (FP16) |
| **Power** | 50% less than traditional GPU |
| **2026 Status** | Commercial pilot |

### 9. Esperanto: RISC-V AI

**Esperanto** is a RISC-V AI accelerator representative:

| Item | Details |
|------|---------|
| **Founded** | 2014 |
| **Funding** | $120M+ |
| **Core Product** | ET-SoC-1 (1,000+ RISC-V cores) |
| **Fab** | TSMC 7nm |
| **2026 Status** | Key customers: HPC / recommendation systems |

### 10. Mythic: Edge AI

**Mythic** is an edge AI analog computing company:

| Item | Details |
|------|---------|
| **Founded** | 2012 |
| **Funding** | $200M+ |
| **Core Product** | M1076 analog AI chip |
| **Process** | TSMC 40nm |
| **2026 Status** | Pivoting / edge market |

## Startup Classification and Future

### Category 1: Likely to Succeed (5-10 year IPO or acquisition)

| Vendor | Path | Key Support |
|--------|------|-------------|
| **Tenstorrent** | Independent IPO or acquisition | Jim Keller + RISC-V + open source |
| **Cambricon** | Continue A-share listing | China national AI strategy |
| **Moore Threads** | A-share IPO | Zhang Jianzhong (NVIDIA China background) |

### Category 2: Likely to Survive (Niche Markets)

| Vendor | Niche Market |
|--------|--------------|
| **SambaNova** | US Government + enterprise private deployment |
| **Lightmatter** | Silicon photonics + datacenter low-power |
| **Esperanto** | HPC + recommendation systems |
| **Biren / Iluvatar** | China domestic substitution government market |

### Category 3: Likely to Disappear

| Vendor | Risk |
|--------|------|
| **Graphcore** | SoftBank subsidiary, uncertain future |
| **Mythic** | Analog computing surpassed by digital |
| **Small startups** | Triple pressure: funding + customers + ecosystem |

## Investment Logic

### Why Can Startups Survive?

1. **Niche markets**: Government / defense / academic / specialized industries (NVIDIA doesn't address)
2. **Differentiated architecture**: RISC-V / silicon photonics / analog / dataflow (NVIDIA won't pursue)
3. **Localization**: China / Europe / Japan / India (data sovereignty + politics)
4. **Key customer lock-in**: Tenstorrent + LG, SambaNova + US Air Force

### Why Do Startups Die?

1. **NVIDIA ecosystem crushing**: CUDA + cuDNN + TensorRT unbeatable
2. **High capital consumption**: 7nm tape-out $30M+, 5nm $80M+
3. **Software migration costs**: 6-12 months to migrate from CUDA to non-NVIDIA platforms
4. **High customer concentration**: Losing a key customer = death

## Detailed Product Pages

- [Tenstorrent (Tensix architecture)](/docs/cards/others/tenstorrent)
- [SambaNova SN40L](/docs/cards/others/sambanova-sn40l)
- [Graphcore IPU](/docs/cards/others/graphcore-ipu)
- [Cerebras WSE-3 (IPO peer)](/docs/cards/cerebras/wse-3)
- [Cambricon Siyuan 590](https://www.cambricon.com/)
- [Full Comparison Table](/docs/comparison)

## Summary

AI chip startups face "winner takes all":

1. **Tenstorrent** most likely to succeed (Jim Keller + RISC-V + open source)
2. **SambaNova** successfully pivoted (enterprise appliances + US Government)
3. **Graphcore** acquired by SoftBank (fate transferred to Japan)
4. **Cambricon / Moore Threads / Biren** benefit from China domestic substitution
5. **Lightmatter / Esperanto** survive in niche markets
6. **Mythic and smaller companies** unlikely to survive

**Over the next 5 years, the AI chip industry will experience "big fish eat small fish"** — startups will either IPO, get acquired, or disappear.
