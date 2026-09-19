# Domestic AI Chips vs International AI Chips: 2026 Year-End Comprehensive Comparison - Article Plan

> **Article status**: In planning
> **Planned release**: End of December 2026
> **Last updated**: 2026-06-28
> **Article positioning**: Year-end flagship comparison analysis article, comprehensive comparison

---

## Article Outline

### I. Introduction (1,500 words)

**Core content**:
- Overview of the 2026 AI chip market landscape
- Impact of US export controls on the Chinese market
- Background and significance of the rise of domestic chips
- Explanation of the comparison dimensions used in this article

**Key data points**:
- 2026 global AI chip market size
- China AI chip market size (domestic share)
- Estimated shipment volumes of major vendors

---

### II. Domestic AI Chip Progress (4,000 words)

#### 2.1 Huawei Ascend series
- **Ascend 910C**: specs, performance, ecosystem, market performance
- **Ascend 910B**: positioning, use cases
- **Progress highlights**: successful DeepSeek V4 Pro training case

#### 2.2 Cambricon MLU series
- **MLU690**: detailed specs, performance benchmarked against the H100
- **MLU370/590**: positioning, use cases
- **Progress highlights**: orders from ByteDance, Alibaba, and Baidu

#### 2.3 Other domestic chip vendors
- **Enflame**: Yunsui T20/T21
- **Kunlun**: R200/R300 (Baidu in-house)
- **Moore Threads**: MTT S5000
- **T-Head**: Hanguang 800 (inference)
- **Iluvatar CoreX**: Tiangai 150, Zhikai 100 (if ByteDance procurement is confirmed)
- **TsingMicro**, **Hanbo Semiconductor**, etc.

**Data to collect for this section**:
- [ ] Detailed specs of each chip (compute, memory, power)
- [ ] 2026 shipment data
- [ ] List of major customers
- [ ] Actual deployment case studies

---

### III. International AI Chip Progress (3,000 words)

#### 3.1 NVIDIA
- **H100/H200**: current mainstream training cards
- **B200/GB200**: Blackwell architecture, mass production in 2026
- **L40S/L4**: inference-only cards
- **Progress highlights**: B200 performance gains, supply situation

#### 3.2 AMD
- **MI300X**: benchmarked against the H100
- **MI325X**: upgraded version
- **Progress highlights**: growing market share

#### 3.3 Intel
- **Gaudi 3**: training + inference
- **Progress highlights**: ecosystem building

#### 3.4 Google
- **TPU v5e/v5p**: cloud training
- **TPU v6 (Trillium)**: launching in 2026
- **Progress highlights**: Google Cloud exclusive

#### 3.5 Others
- **Cerebras**: WSE-3 (full systems)
- **SambaNova**: SN40L
- **Graphcore**: Bow IPU (has exited the Chinese market)

**Data to collect for this section**:
- [ ] B200/GB200 detailed specs and performance data
- [ ] MI300X/MI325X actual performance tests
- [ ] TPU v6 specs
- [ ] Supply situation of international chips in the Chinese market

---

### IV. Key Metric Comparison (3,500 words)

#### 4.1 Compute comparison table

| Chip | FP32 | FP16 | INT8 | FP8 | Architecture |
|------|------|------|------|------|------|
| **Domestic** | | | | | |
| Ascend 910C | ? | 376 TFLOPS | ? | ? | Da Vinci 3.0 |
| MLU690 | 150 TFLOPS | 600 TFLOPS | 1,200 TOPS | ? | MLUarch 04 |
| Tiangai 150 | ? | ? | ? | Supported | ivcore11 |
| Enflame T21 | ? | ? | ? | ? | DTU 2.0 |
| **International** | | | | | |
| H100 SXM | 60 TFLOPS | 989 TFLOPS | 1,979 TOPS | 3,958 TOPS | Hopper |
| H200 SXM | 60 TFLOPS | 989 TFLOPS | 1,979 TOPS | 3,958 TOPS | Hopper |
| B200 | 80 TFLOPS | 2,250 TFLOPS | 4,500 TOPS | 9,000 TOPS | Blackwell |
| MI300X | 163 TFLOPS | 1,271 TFLOPS | 2,542 TOPS | ? | CDNA 3 |

**Notes**:
- "?" means data to be filled in
-  Some FP8 data comes from the web and needs verification

#### 4.2 Memory comparison table

| Chip | Memory Capacity | Memory Type | Memory Bandwidth |
|------|---------|---------|---------|
| Ascend 910C | 64 GB | HBM2E | 2 TB/s (estimated) |
| MLU690 | 64 GB | HBM3 | 2 TB/s (estimated) |
| H100 SXM | 80 GB | HBM3 | 3.35 TB/s |
| H200 SXM | 141 GB | HBM3e | 4.8 TB/s |
| B200 | 192 GB | HBM3e | 8 TB/s |

#### 4.3 Power comparison table

| Chip | TDP | Efficiency (FP16/W) |
|------|-----|-------------------|
| Ascend 910C | 310W | 1.21 TFLOPS/W |
| MLU690 | 280W | 2.14 TFLOPS/W |
| H100 SXM | 700W | 1.41 TFLOPS/W |
| B200 | 1000W | 2.25 TFLOPS/W |

#### 4.4 Process node comparison table

| Vendor | Process | Transistor Count (estimated) |
|------|------|------------------|
| Huawei/Cambricon | 7nm (TSMC) | ~50 billion |
| NVIDIA H100/H200 | 4nm (TSMC) | 80 billion |
| NVIDIA B200 | 4nm (TSMC) | 208 billion |
| AMD MI300X | 5nm (TSMC) | 153 billion |

#### 4.5 Price comparison table

| Chip | International Price (USD) | Domestic Price (CNY) | Notes |
|------|----------------|----------------|------|
| H100 | $30,000-$40,000 | - | Subject to export controls |
| H200 | $40,000-$50,000 | - | Subject to export controls |
| B200 | $50,000-$60,000 | - | Subject to export controls |
| Ascend 910C | - | ¥150,000-¥200,000 (estimated) | Domestic sales only |
| MLU690 | - | ¥120,000-¥150,000 (estimated) | Domestic sales only |

**Data to collect for this section**:
- [ ] Ascend 910C detailed compute data (not officially published)
- [ ] Tiangai 150 detailed compute data
- [ ] Enflame T21 detailed specs
- [ ] B200 actual performance test data
- [ ] Actual domestic chip prices (vendor quotes vary widely)

---

### V. Ecosystem Comparison (2,500 words)

#### 5.1 Software stack maturity

| Vendor | Software Stack | Framework Support | Operator Coverage | Migration Difficulty |
|------|--------|---------|-----------|---------|
| NVIDIA | CUDA | Full support | ~100% | - |
| AMD | ROCm | Mainstream support | ~90% | Medium |
| Huawei | CANN | Mainstream support | ~80% | Medium |
| Cambricon | NeuWare | Mainstream support | ~75-85% | Medium |
| Iluvatar CoreX | IXUCA | Mainstream support | ~70% | Low (CUDA-compatible) |
| Enflame | DTU Toolkit | Partial support | ~60% | High |

#### 5.2 Model adaptation status

**Adaptation status of mainstream large models**:

| Model | H100 | 910C | MLU690 | Tiangai 150 | Notes |
|------|------|------|--------|---------|------|
| Llama 3 (70B) | ✅ Native | ✅ Adapted | ✅ Adapted | ⚠️ Partial | |
| Qwen2.5 (72B) | ✅ Native | ✅ Adapted | ✅ Adapted | ⚠️ Partial | |
| DeepSeek V3 | ✅ Native | ✅ Training-verified | ⚠️ Inference | ❌ Not supported | |
| GLM-4 (9B) | ✅ Native | ✅ Adapted | ✅ Adapted | ✅ Adapted | |
| Baichuan 2 (13B) | ✅ Native | ✅ Adapted | ✅ Adapted | ✅ Adapted | |

#### 5.3 Developer friendliness

- **Documentation quality**
- **Community activity**
- **Technical support**
- **Learning curve**

**Data to collect for this section**:
- [ ] Latest versions and features of each software stack
- [ ] Actual model migration cases and timelines
- [ ] Developer community activity data (GitHub stars, issues, etc.)

---

### VI. Market Performance (2,000 words)

#### 6.1 Shipment comparison (2026 estimates)

| Vendor | 2026 Shipments (10k units) | YoY Growth | Major Customers |
|------|---------------------|---------|---------|
| NVIDIA (global) | 150-200 | +30% | Global tech giants |
| Huawei (Ascend) | 20-30 | +100% | Governments, SOEs, tech companies |
| Cambricon (MLU) | 10-15 | +150% | ByteDance, Alibaba, Baidu |
| AMD (global) | 30-40 | +80% | Meta, Microsoft, etc. |
| Other domestic | 10-20 | +200% | Various AI companies |

#### 6.2 Market share (China market)

| Type | 2024 | 2026 (est.) | Trend |
|------|--------|---------------|---------|
| International chips (NVIDIA/AMD) | ~80% | ~40% | ⬇️ Sharp decline |
| Domestic chips (Huawei/Cambricon etc.) | ~20% | ~60% | ⬆️ Rapid rise |

#### 6.3 Major customer distribution

**Major domestic chip customers**:
- Tech companies: Ascend 910C, MLU690, Tiangai 150
- Tech companies: Ascend 910C, MLU690
- Tencent: Ascend 910C, exploring other domestic chips
- Government/SOEs: Ascend 910C (localization requirements)
- Intelligent computing centers: mixed deployment of multiple domestic chips

**Data to collect for this section**:
- [ ] Q1-Q3 2026 shipment data by vendor
- [ ] Major customer procurement announcements
- [ ] Intelligent computing center deployment cases

---

### VII. Future Outlook (1,500 words)

#### 7.1 2027 technology roadmap

**Domestic chips**:
- Huawei: Ascend 920 (5nm, 2027-Q2)
- Cambricon: MLU790 (5nm, 2027-Q4)
- Enflame: Yunsui T30 (5nm, 2027)
- Others: continued monitoring

**International chips**:
- NVIDIA: X100 (3nm, end of 2027)
- AMD: MI400 (3nm, 2027)
- Intel: Gaudi 4 (5nm, 2027)

#### 7.2 Technology gap forecast

| Dimension | 2026 Gap | 2027 Forecast | 2030 Target |
|------|-----------|-----------|-----------|
| Compute | 40-50% behind | 30-40% behind | Catch up |
| Memory | 20-30% behind | 10-20% behind | Catch up |
| Process | 1-2 generations behind | 1 generation behind | Catch up |
| Ecosystem | 3-5 years behind | 2-3 years behind | Narrow to 1-2 years |

#### 7.3 Market trend forecast

- **Continued rise in localization rate**: reaching 70% by 2027
- **Export controls persist**: the US may tighten further
- **Accelerated technology iteration**: domestic chips moving from "usable" to "good to use"
- **Stronger ecosystem building**: vendors increasing software investment

---

### VIII. Conclusion (1,000 words)

**Core viewpoints**:
1. Domestic AI chips made significant progress in 2026, with the gap narrowing from "generational" to "one generation"
2. Substitution capability is already in place for specific scenarios (inference, localization projects)
3. The ecosystem gap remains clear and requires sustained investment
4. The market landscape is being reshaped, with the localization rate rising rapidly
5. The next 3-5 years are the critical window for domestic chips

**Recommendations for different roles**:
- **Enterprise procurement**: how to choose (domestic vs international)
- **Developers**: which ecosystem to learn
- **Investors**: which vendors to watch
- **Policymakers**: how to support domestic chip development

---

## Data Collection Plan

### Phase 1: Now - September 2026 (research period)

#### Weekly tasks

**Week 1-2 (2026-06-28 ~ 2026-07-11)**:
- [x] Create the article outline
- [ ] Collect detailed specs of domestic chips (Ascend 910C, MLU690, Tiangai 150, Enflame T21)
- [ ] Collect the latest material on international chips (B200/GB200, MI300X/MI325X, TPU v6)

**Week 3-4 (2026-07-12 ~ 2026-07-25)**:
- [ ] Create draft comparison tables for each chip
- [ ] Collect software stack and ecosystem comparison material
- [ ] Search for H1 2026 shipment and market share data

**Week 5-8 (2026-07-26 ~ 2026-08-22)**:
- [ ] Collect major customer procurement cases
- [ ] Collect actual deployment performance test data
- [ ] Follow vendor product launches and technical announcements

**Week 9-12 (2026-08-23 ~ 2026-09-30)**:
- [ ] Organize all collected material
- [ ] Create charts and data visualizations
- [ ] Complete the article first draft (80% of content)

### Phase 2: October - November 2026 (data update period)

- [ ] Update each chip's latest data (new releases, spec updates)
- [ ] Collect Q1-Q3 2026 shipment data
- [ ] Follow vendors' promotions and pricing strategies during Double 11/Double 12
- [ ] Complete the article first draft (100% of content)

### Phase 3: December 2026 (finalization and release period)

- [ ] Final data verification and updates
- [ ] Article polishing and proofreading
- [ ] Create accompanying data visualizations (charts, comparison tables)
- [ ] Publish the article

---

## Data Source Checklist

### Official sources

- [ ] Huawei Ascend official site: https://www.hiascend.com/
- [ ] Cambricon official site: https://www.cambricon.com/
- [ ] NVIDIA official site: https://www.nvidia.com/
- [ ] AMD official site: https://www.amd.com/
- [ ] Vendor developer communities and documentation centers

### Industry reports

- [ ] IDC China AI Chip Market Report (2026)
- [ ] Gartner AI Chip Hype Cycle (2026)
- [ ] Brokerage research reports (CICC, Huatai, CITIC, etc.)

### Technical communities

- [ ] Vendors' GitHub open-source projects
- [ ] Zhihu technical articles and discussions
- [ ] CSDN technical blogs
- [ ] Vendor developer forums

### News and media

- [ ] Reuters, Bloomberg (international market news)
- [ ] Caixin, Yicai (domestic market news)
- [ ] TechCrunch, The Information (tech news)

---

## Article Supporting Assets

### Charts to create

1. **Compute comparison radar chart**: FP32, FP16, INT8, memory bandwidth, energy efficiency
2. **Memory capacity comparison bar chart**: memory capacity of each chip
3. **Power comparison bar chart**: TDP of each chip
4. **Market share pie chart**: 2024 vs 2026 (estimated)
5. **Technology roadmap timeline**: 2024-2027 new product release plans by vendor
6. **Ecosystem maturity score radar chart**: software stack, framework support, operator coverage, community activity

### Interactive elements (if the site supports them)

- [ ] Filterable comparison table (sortable by compute, power, price, etc.)
- [ ] Chip detail cards (hover to show details)
- [ ] Interactive ecosystem comparison chart

---

## Publishing and Promotion Plan

### Publishing channels

1. **MirrorFrog website**: blog post + comparison table page
2. **Zhihu**: simultaneous publication (with backlinks)
3. **CSDN**: technical article publication
4. **WeChat official account**: if available
5. **Various tech communities**: V2EX, Reddit (r/MachineLearning), etc.

### Promotion timeline

- **Official announcement**: around 2026-12-20
- **Social media promotion**: within 1 week of publication
- **Tech community sharing**: within 2 weeks of publication

---

## Risks and Countermeasures

### Risk 1: Key data unavailable

**Risk**: some chips (e.g. Ascend 910C) have no officially published detailed specs

**Countermeasures**:
- Use third-party test data
- Use estimated values (marked "estimated")
- Contact vendors for materials

### Risk 2: Inaccurate market data

**Risk**: shipment and market share figures are estimates and may be inaccurate

**Countermeasures**:
- Cross-validate with multiple sources
- Note data sources and confidence levels
- Use range estimates (e.g. 200k-300k units)

### Risk 3: Article too long

**Risk**: the article may exceed 15,000 words, hurting readability

**Countermeasures**:
- Split into a series (Part 1/2/3)
- Create a standalone interactive comparison table page
- Offer a PDF download version

---

## Next Steps

### Immediate (this week)

1. [ ] Create `docs/research/2026-year-end-comparison-outline.md` (this document)
2. [ ] Create `docs/research/data-collection-tracker.xlsx` (data collection tracker)
3. [ ] Set up monthly reminders (automated tasks): check vendor product launches and technical updates

### Ongoing (monthly)

1. [ ] Update each chip's latest data
2. [ ] Collect new test reports and case studies
3. [ ] Follow industry news and developments

### Before year-end

1. [ ] Complete the article (by 2026-11-30)
2. [ ] Complete chart creation (by 2026-12-10)
3. [ ] Complete proofreading and publication (by 2026-12-20)

---

**Article goals**:
- ✅ Become the most comprehensive AI chip comparison article of late 2026
- ✅ Provide readers with an objective, well-substantiated decision reference
- ✅ Boost MirrorFrog's authority and traffic
- ✅ Lay the groundwork for the 2027 article series

**Success metrics**:
- Article length: 10,000-15,000 words
- Chips compared: ≥15
- Data tables: ≥10
- Charts: ≥6
- Expected readership: 5,000+ (website + external platforms)
