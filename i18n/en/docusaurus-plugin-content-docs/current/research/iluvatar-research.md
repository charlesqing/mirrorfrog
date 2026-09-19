# Iluvatar CoreX Product Research Collection

> **Status**: research in progress; official pages will be created after ByteDance's procurement is confirmed
> **Last updated**: 2026-06-28
> **Sources**: official site, Moark, Zhihu, industry reports

---

## Company Overview

| Item | Content |
|------|------|
| **Company name** | Shanghai Iluvatar CoreX Semiconductor Co., Ltd. |
| **English name** | Iluvatar CoreX |
| **Founded** | 2015 |
| **Founder** | Diao Shijing |
| **Headquarters** | Shanghai |
| **Positioning** | Domestic general-purpose GPU chip design company |
| **Official site** | https://www.iluvatar.com |

---

## Product Line Overview

### 1. Zhikai series (inference GPUs)

#### Zhikai 100 (MR-V100)

| Item | Specification |
|------|------|
| **Release** | Lit up in May 2022, released at the end of 2022 |
| **Product positioning** | Cloud inference general-purpose GPU |
| **Architecture** | Second-generation general-purpose GPU architecture (in-house) |
| **Process** | 7nm |
| **Packaging** | 2.5D COWOS |
| **Memory** | 32 GB HBM2E |
| **Peak compute** | |
| - FP32 | 24 TFLOPS |
| - FP16 | 96 TFLOPS |
| - INT8 | 192-384 TOPS (sources differ) |
| **TDP** | 150W (board-level power) |
| **Interface** | PCIe Gen4.0 x16 |
| **Video decoding** | 128 channels of 1080P@30fps (H.264/H.265/VP9/AVS2) |
| **Software stack** | IXUCA (CUDA-ecosystem compatible) |
| **Use cases** | AI inference, video analytics, security, internet, finance, healthcare |

**Performance benchmark**: NVIDIA RTX 4090 (inference scenarios)

**Product features**:
- Fully in-house architecture, core IP, and software stack
- CUDA-ecosystem compatible, cutting migration time by more than 50%
- Supports 800+ general-purpose instructions
- Supports mixed-precision inference with FP32, FP16, and INT8
- **FP8 not supported**

#### Zhikai 50 (MR-V50)

| Item | Specification |
|------|------|
| **Memory** | 16 GB HBM2E |
| **Peak compute** | |
| - FP32 | 16 TFLOPS |
| - FP16 | 64 TFLOPS |
| - INT8 | 256 TOPS |
| **TDP** | 75W (board-level power) |
| **Dimensions** | Half-length, half-height, single-slot PCIe card |
| **Cooling** | Passive cooling |

---

### 2. Tiangai series (training GPUs)

#### Tiangai 100 (BI-V100)

| Item | Specification |
|------|------|
| **Release** | March 2021 (China's first cloud training chip with a fully in-house GPU architecture) |
| **Product positioning** | Cloud training general-purpose GPU |
| **Architecture** | First-generation general-purpose GPU architecture (in-house) |
| **Process** | 7nm |
| **Memory** | 32 GB HBM2E |
| **TDP** | 250W (estimated) |
| **Use cases** | AI training, high-performance computing |

**Strategic significance**: marks the breakthrough of the domestic general-purpose GPU from zero to one

#### Tiangai 150 (BI-V150)

| Item | Specification |
|------|------|
| **Release** | 2023 (estimated) |
| **Product positioning** | Cloud training general-purpose GPU (upgraded version) |
| **Architecture** | ivcore11 in-house general-purpose GPU architecture |
| **Process** | 7nm |
| **Memory** | 64 GB HBM2e (a 32GB variant also exists) |
| **TDP** | 350W (peak power) |
| **Supported precisions** | FP32, FP16, INT8, FP8 (requires the ixTE library) |
| **Use cases** | Large AI model training, general-purpose computing |
| **Performance benchmark** | NVIDIA A100 (claimed) |

**Product features**:
- Compatible with mainstream international GPU general-purpose computing models
- Supports mainstream domestic and international AI ecosystems and deep learning frameworks
- Supports native operators of TensorFlow, PyTorch, etc.

---

### 3. Tongyang series (new product line)

#### Tongyang TY1000/TY1100/TY1200

**Note**: new product line with little available material; under continued monitoring.

---

## Software Stack: IXUCA

**IXUCA** (Iluvatar Unified Computing Architecture) is the unified computing architecture software stack independently developed by Iluvatar CoreX.

### Core components

| Component | Name | Function | Counterpart |
|------|------|------|------|
| **Deep learning frameworks** | PyTorch-Cambricon, TensorFlow-Cambricon | Adapted deep learning frameworks | PyTorch, TensorFlow |
| **Inference framework** | IGIE | High-performance inference framework | TensorRT |
| **Inference engine** | IxRT | Dedicated inference acceleration engine | TensorRT |
| **LLM inference framework** | IxFormer | LLM inference and training optimization | vLLM |
| **Compiler** | IXUCA Compiler | Compiler | nvcc |
| **Math libraries** | ixDNN, ixBLAS | Fundamental deep learning operators | cuDNN, cuBLAS |
| **Communication library** | ixCCL | Multi-card communication library | NCCL |
| **Management tool** | ixsmi | GPU management tool | nvidia-smi |

### Ecosystem compatibility

- ✅ **CUDA-ecosystem compatible**: supports CUDA C++ programming with low migration cost
- ✅ **Mainstream framework support**: TensorFlow, PyTorch, PaddlePaddle
- ✅ **Mainstream inference framework support**: vLLM, TGI, LMDeploy
- ✅ **200+ models adapted**: covering LLM, CV, NLP, speech, and other domains

---

## Market Dynamics

### ByteDance procurement rumors

| Item | Content |
|------|------|
| **Date** | June 15, 2026 (Reuters report) |
| **Status** | In negotiation, **not yet confirmed** |
| **Procurement scale** | At least 50,000 units (planned) |
| **Primary use** | Inference workloads |
| **Impact** | If the deal closes, Iluvatar CoreX would become the third domestic AI chip vendor to supply ByteDance at scale, after Huawei and Cambricon |

**Market reaction**:
- On June 18, 2026, the SSE STAR Market chip design theme index rose 3.85%
- Cambricon rose 13.31%
- Huatai Securities forecast: Iluvatar CoreX's 2026 revenue could exceed 3.04 billion CNY

### Shipment forecast

| Year | Chip Shipments | Revenue Forecast |
|------|-----------|---------|
| 2025 | ~42,000 units | - |
| 2026 (forecast) | >100,000 units | >3.04 billion CNY |

---

## Information Pending Confirmation

### urgently needed

1. ✅ **Zhikai 100 INT8 compute**: sources differ between 192 TOPS and 384 TOPS; needs confirmation
2. ❌ **Tiangai 100/150 detailed compute**: official FP32/FP16/INT8 figures not published
3. ❌ **Tiangai 150 memory bandwidth**: not published
4. ❌ **Tongyang series specs**: very little material
5. ❌ **ByteDance procurement confirmation**: awaiting official announcement

### Requiring continued monitoring

1. Iluvatar CoreX official developer center: https://support.iluvatar.com/
2. DeepSpark open-source community: https://www.deepspark.org.cn/
3. ByteDance procurement progress

---

## Page Creation Plan

### Conditions

- [ ] ByteDance procurement confirmed (primary trigger)
- [ ] Tiangai 150 detailed compute data obtained
- [ ] Zhikai 100 final specs confirmed (INT8 compute)

### Pages to create

1. **docs/cards/iluvatar/mr-v100.md** - Zhikai 100 (inference card)
2. **docs/cards/iluvatar/bi-v150.md** - Tiangai 150 (training card)
3. **docs/cards/iluvatar/bi-v100.md** - Tiangai 100 (optional, little material)

### References

- [Zhikai 100 - Moark](https://moark.com/docs/compute/clusters_gpu/iluvatar/iluvatar_MR-V100_gpu)
- [Tiangai 150 - Moark](https://moark.com/docs/compute/clusters_gpu/iluvatar/iluvatar_BI-V150_gpu)
- [Product specs - test page](https://www.test.jibu.club/productDetails?fullCode=cpjs-yj-tlxltt-zk100)
- [ByteDance to purchase 50,000 domestic chips - Tencent News](https://news.qq.com/rain/a/20260618A057JC00)
- [Zhikai 100 - Baidu Baike](https://baike.baidu.com/item/%E6%99%BA%E9%93%A0100/61945818)

---

**Next steps**:

1. Continue following ByteDance procurement developments
2. Try contacting Iluvatar CoreX for detailed spec sheets
3. Follow actual Tiangai 150 deployment cases to obtain performance data
4. Create the pages immediately once procurement is confirmed
