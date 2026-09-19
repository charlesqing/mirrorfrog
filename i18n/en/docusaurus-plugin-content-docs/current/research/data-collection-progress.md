# Year-End Comparison Article - Data Collection Progress Tracker

> **Created**: 2026-06-28
> **Last updated**: 2026-06-28
> **Goal**: collect complete data for the "Domestic AI Chips vs International AI Chips: 2026 Year-End Comparison" article

---

## 📊 Collected Data Summary

### 1. Ascend 910C (Huawei)

**Data source**: Lennart Heim analysis (republished on Zhihu)

| Metric | Value | Confidence | Notes |
|------|------|--------|------|
| **FP16** | ~800 TFLOPS | Medium | Heim estimate, not officially published |
| **Memory bandwidth** | ~3.2 TB/s | Medium | Heim estimate |
| **Performance benchmark** | ~80% of H100 | Medium | Heim assessment |
| **Architecture** | dual 910B die stacking | High | confirmed |
| **Logic area** | 60% larger than H100 | Medium | Heim analysis |
| **FP32** | ~320 TFLOPS (derived) | Low | Derived from architecture, unverified |

**To be added**:
- [ ] Official FP32 data (or reliable third-party tests)
- [ ] INT8 compute
- [ ] FP8 support status
- [ ] Actual training performance test data

---

### 2. B200/GB200 (NVIDIA)

**Data source**: Zhihu technical breakdowns, EET China

| Metric | Value | Confidence | Notes |
|------|------|--------|------|
| **Transistor count** | 208 billion | High | Official data |
| **FP16** | 2,250 TFLOPS | High | EET China report |
| **FP4** | 18 PFLOPS (peak) | High | Official data |
| **Memory** | 192 GB HBM3e | High | Official data |
| **Memory bandwidth** | 8 TB/s | High | Official data |
| **TDP** | 1000W (per GPU) | High | HGX B200 configuration |
| **GB200 TDP** | 2700W (2 GPU + 1 CPU) | High | Official data |
| **NV-HBI** | 10 TB/s | High | Dual-die interconnect bandwidth |

**To be added**:
- [ ] Actual FP32 performance tests
- [ ] Actual deployment cases and performance benchmarks
- [ ] Pricing information

---

### 3. Suisi 2.0 / Yunsui T21 (Enflame)

**Data source**: Baidu Baike, Enflame official

| Metric | Value | Confidence | Notes |
|------|------|--------|------|
| **FP32** | 40 TFLOPS | High | Official data |
| **TF32** | 160 TFLOPS | High | Official data |
| **INT8** | 256 TOPS | High | Official data |
| **Memory** | 64 GB HBM2E | High | Official data |
| **Memory bandwidth** | 1.8 TB/s | High | Official data |
| **TDP** | ~300W (estimated) | Medium | OAM module |
| **Architecture** | GCU-CARA | High | Enflame in-house |
| **Process** | 12nm (GlobalFoundries) | High | Official data |
| **Interconnect** | GCU-LARE, 300GB/s | High | Official data |

**Product positioning**: cloud training

**To be added**:
- [ ] T21 exact TDP
- [ ] Actual training performance tests
- [ ] Next-generation product (Suisi 3.0) specs

---

### 4. Kunlun R200 (Baidu)

**Data source**: Zhihu technical spec analysis

| Metric | Value | Confidence | Notes |
|------|------|--------|------|
| **FP32** | 32 TFLOPS | High | Official data |
| **FP16** | 128 TFLOPS | High | Official data |
| **INT8** | 256 TOPS | High | Official data |
| **Memory** | 16/32 GB GDDR6 | High | Official data |
| **Memory bandwidth** | 512 GB/s | High | Official data |
| **TDP** | 150W | High | Official data |
| **Architecture** | XPU-R | High | Baidu in-house |
| **Interface** | PCIe Gen4 x16 | High | Official data |

**Product positioning**: inference-focused, with some training capability

**To be added**:
- [ ] R300 (next generation) specs
- [ ] Actual performance test data

---

### 5. Tiangai 150 (BI-V150) (Iluvatar CoreX)

**Data source**: SMZDM unboxing review (2026-01-08)

| Metric | Value | Confidence | Notes |
|------|------|--------|------|
| **FP32** | 48 TFLOPS | Medium | Unboxing review data |
| **FP16** | ~192 TFLOPS (derived) | Low | Derived from FP32 × 4 |
| **Memory** | 64 GB HBM2e | High | Official data |
| **Memory bandwidth** | ~2 TB/s (derived) | Low | Derived from HBM2e |
| **TDP** | 350W | High | Official data |
| **Process** | 7nm | High | Official data |
| **Architecture** | ivcore11 | High | Iluvatar CoreX in-house |
| **Interface** | PCIe 4.0 x16 | High | Official data |

**Product positioning**: general-purpose compute GPU (training + inference)

**To be added**:
- [ ] Official FP16 data (currently a derived value)
- [ ] Official INT8 data
- [ ] Official memory bandwidth data
- [ ] Actual performance test data

**Update log (2026-06-28)**:
- ✅ Added FP32 = 48 TFLOPS (source: SMZDM unboxing review)
- ⚠️ FP16 is a derived value and needs official confirmation

---

### 6. Hanbo SV100 series (Hanbo Semiconductor)

**Data source**: Zhihu article (published 2022)

| Metric | Value | Confidence | Notes |
|------|------|--------|------|
| **INT8** | >200 TOPS | Medium | Official data (2022) |
| **Supported precisions** | FP16, BF16, INT8 | High | Official data |
| **TDP** | 75W (VA1 accelerator card) | High | Official data |
| **Memory** | 32 GB | High | VA1 accelerator card |
| **Video decoding** | 64+ channels of 1080p | High | Official data |
| **Architecture** | general-purpose DSA | High | Hanbo in-house |

**Product positioning**: cloud AI inference

**To be added**:
- [ ] SG100 (GPU) specs
- [ ] Latest product specs (2026)
- [ ] Actual performance test data

---

### 7. 2026 Q1 market data

**Data source**: Songguo Market Insights (Baidu Baijiahao)

| Metric | Value | YoY Change |
|------|------|---------|
| **Domestic AI chip market share** | 52.3% | +32.3pp (from 20% to 52.3%) |
| **NVIDIA market share** | 42.7% | -52.3pp (from 95% to 42.7%) |
| **Milestone** | First time above 50% | A historic first |

**Key insights**:
- ✅ Policy-driven procurement dominates (localization rate >70% in strategic sectors such as government, finance, and energy)
- ✅ Ecosystem migration begins: DeepSeek V4 completed its migration from CUDA to CANN
- ⚠️ After the policy dividend fades in 2027-2028, market-based competition will be the real test

**To be added**:
- [ ] 2026 Q2 data (available in July)
- [ ] Specific shipment data by vendor
- [ ] Market share broken down by use case (training vs inference)

---

### 8. TsingMicro (reconfigurable AI chip RPU)

**Data source**: Sohu news (2025-07-27)

| Metric | Value | Confidence | Notes |
|------|------|--------|------|
| **Architecture** | reconfigurable (RPU) | High | Tsinghua technology transfer |
| **Product** | TX81 (cloud) | Medium | Mass production in 2025 |
| **Orders** | ~20,000 cards | Medium | Reported figure |
| **Shipments** | >20 million units (cumulative, including edge) | Medium | Reported figure |
| **Key feature** | dynamic reconfiguration, adapts to different tasks | High | Official claim |

**Product positioning**: differentiated route (non-GPU architecture)

**To be added**:
- [ ] TX81 detailed compute data
- [ ] Cloud product specs
- [ ] Actual performance test data

---

## 🔍 Data To Be Collected

### High priority (within this week)

#### Domestic chips

- [ ] **Tiangai 150 (BI-V150)**: FP32/FP16/INT8 compute, memory bandwidth ← **urgently needed**
- [ ] **Enflame Yunsui T21**: full TDP power figure
- [ ] **Kunlun R300**: full specs
- [ ] **Hanbo SG100**: full specs (GPU product)
- [ ] **TsingMicro TX81**: detailed compute data

#### International chips

- [ ] **MI300X/MI325X**: actual performance test data, pricing
- [ ] **TPU v6 (Trillium)**: spec data
- [ ] **L40S/L4**: inference performance data

#### Market data

- [ ] H1 2026 shipment data (IDC, CCID)
- [ ] Revenue data by vendor (Huawei, Cambricon, Enflame, etc.)
- [ ] Major customer procurement announcements (ByteDance, Alibaba, Baidu, etc.)

### Medium priority (within July)

- [ ] Latest versions and features of each chip's software stack
- [ ] Actual model migration cases and timelines
- [ ] Developer community activity data

### Low priority (August-September)

- [ ] Detailed energy-efficiency tests of each chip
- [ ] Actual deployment case studies
- [ ] User satisfaction and feedback

---

## 📅 Data Collection Schedule

### Week 1-2 (2026-06-28 ~ 2026-07-11)

**Goal**: complete high-priority chip spec collection

- [x] Create the data collection tracker file
- [x] Collect Ascend 910C specs (FP16 ~800 TFLOPS)
- [x] Collect full B200/GB200 specs
- [x] Collect 2026 Q1 market share data
- [x] Collect Suisi 2.0/T21 specs
- [x] Collect Kunlun R200 specs
- [ ] Collect Tiangai 150 detailed specs ← **in progress**
- [ ] Update the Ascend 910C page (FP16 updated to 800 TFLOPS)

### Week 3-4 (2026-07-12 ~ 2026-07-25)

**Goal**: complete market data and ecosystem comparison

- [ ] Search for H1 2026 shipment data
- [ ] Collect software stack and ecosystem comparison material
- [ ] Create draft comparison tables for each chip

### Week 5-8 (2026-07-26 ~ 2026-08-22)

**Goal**: fill in missing data, start article writing

- [ ] Collect major customer procurement cases
- [ ] Collect actual deployment performance test data
- [ ] Follow vendor product launches and technical announcements
- [ ] Complete the draft of Chapter 1 (Introduction)

---

## 🔗 Data Source Records

### Sources used

1. **Lennart Heim's Ascend 910C analysis** - republished on Zhihu
   - URL: https://zhuanlan.zhihu.com/p/1899027682508911963
   - Accessed: 2026-06-28
   - Credibility: Medium (third-party analysis, not official)

2. **NVIDIA B200 key technology breakdown** - Zhihu
   - URL: https://zhuanlan.zhihu.com/p/687969500
   - Accessed: 2026-06-28
   - Credibility: High (based on official release information)

3. **Domestic AI chip share tops 50% for the first time** - Baidu Baijiahao
   - URL: https://baijiahao.baidu.com/s?id=1864839570642939212
   - Accessed: 2026-06-28
   - Credibility: Medium (market analysis, needs cross-validation)

4. **Suisi 2.0 Baidu Baike entry** - Baidu Baike
   - URL: https://baike.baidu.com/item/%E9%82%83%E6%80%9D2.0/59307653
   - Accessed: 2026-06-28
   - Credibility: High (official data))

5. **Kunlun R200 technical spec analysis** - Zhihu
   - URL: https://zhuanlan.zhihu.com/p/1983541153107288527
   - Accessed: 2026-06-28
   - Credibility: High (based on official data)

6. **Tiangai 150 product documentation** - Moark
   - URL: https://moark.com/docs/compute/clusters_gpu/iluvatar/iluvatar_BI-V150_gpu
   - Accessed: 2026-06-28
   - Credibility: High (official documentation)

### Data pending verification

- ⚠️ Ascend 910C FP16 ~800 TFLOPS: more sources needed for verification
- ⚠️ Domestic chip market share 52.3%: needs verification against IDC or MIIT official data
- ⚠️ B200 FP16 2,250 TFLOPS: needs verification against an official whitepaper or reliable reviews
- ❓ Tiangai 150 FP32/FP16/INT8 compute: not officially published, urgently needed

---

## 📝 Data Update Log

### 2026-06-28

**New data**:
- ✅ Ascend 910C: FP16 updated to ~800 TFLOPS (previously miswritten as 376 TFLOPS)
- ✅ Ascend 910C: memory bandwidth updated to ~3.2 TB/s
- ✅ B200: full specs (transistors, FP16, memory, bandwidth, TDP)
- ✅ 2026 Q1 market share data: domestic 52.3%, NVIDIA 42.7%
- ✅ Suisi 2.0/T21: full specs (FP32 40 TFLOPS, TF32 160 TFLOPS, etc.)
- ✅ Kunlun R200: full specs (FP32 32 TFLOPS, FP16 128 TFLOPS, etc.)
- ✅ Tiangai 150: basic info (64GB HBM2e, 350W TDP, 7nm)
- ✅ TsingMicro: company info and product positioning

**Pending verification**:
- ❓ Ascend 910C FP32 compute: derived at ~320 TFLOPS, needs confirmation
- ❓ Tiangai 150 FP32/FP16/INT8 compute: not officially published, urgently needed
- ❓ Enflame T21 TDP: no official data found

**Next steps**:
- Continue collecting specs for domestic chips such as Tiangai 150 and Hanbo SG100
- Verify the accuracy of collected data
- Update existing chip pages on the site (e.g. Ascend 910C FP16 data)

---

## 📊 Data Completeness Assessment

### Domestic chips (needed for the comparison table)

| Chip | FP32 | FP16 | INT8 | Memory | Bandwidth | TDP | Completeness |
|------|-------|-------|-------|------|------|-----|--------|
| Ascend 910C | ❓ Derived | ✅ ~800 | ❌ | ✅ 64GB | ✅ ~3.2 | ✅ 310W | 60% |
| MLU690 | ✅ 150 | ✅ 600 | ✅ 1200 | ✅ 64GB | ❓ ~2TB | ✅ 280W | 80% |
| Tiangai 150 | ❌ | ❌ | ❌ | ✅ 64GB | ❌ | ✅ 350W | 30% |
| Enflame T21 | ✅ 40 | ❓ Estimated ~160 | ✅ 256 | ✅ 64GB | ✅ 1.8TB | ❓ ~300W | 70% |
| Kunlun R200 | ✅ 32 | ✅ 128 | ✅ 256 | ✅ 16/32GB | ✅ 512GB | ✅ 150W | 90% |

### International chips (needed for the comparison table)

| Chip | FP32 | FP16 | INT8 | Memory | Bandwidth | TDP | Completeness |
|------|-------|-------|-------|------|------|-----|--------|
| H100 | ✅ 60 | ✅ 989 | ✅ 1979 | ✅ 80GB | ✅ 3.35TB | ✅ 700W | 100% |
| H200 | ✅ 60 | ✅ 989 | ✅ 1979 | ✅ 141GB | ✅ 4.8TB | ✅ 700W | 100% |
| B200 | ✅ 80 | ✅ 2250 | ✅ 4500 | ✅ 192GB | ✅ 8TB | ✅ 1000W | 100% |
| MI300X | ✅ 163 | ✅ 1271 | ✅ 2542 | ✅ 192GB | ❓ ~5.3TB | ✅ 750W | 90% |

**Summary**:
- ✅ International chip data is highly complete (90-100%)
- ⚠️ Domestic chip data is moderately complete (30-90%), with Tiangai 150 the most lacking
- 🔴 **Urgently needed**: Tiangai 150 compute data, official Ascend 910C FP32 data

---

**Notes**:
- Confidence levels: **High** = official data or reliable reviews, **Medium** = cross-validated by multiple sources, **Low** = single source or derived
- All data must cite its source and confidence level before use
- All key data must be re-verified before the article is published
