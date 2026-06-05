---
id: tesla-dojo-v2
title: Tesla Dojo v2 (2025 Speculative)
sidebar_label: Dojo v2
description: "Tesla Dojo v2 detailed specs (speculative): 3nm, 1 PFLOPS FP8, Dojo 2 training-dedicated, custom D1 chip, 2nd Gen Fabric, Robotaxi / FSD training."
keywords: [Tesla Dojo v2, Dojo 2, 3nm, FP8, D1 chip, custom, FSD, Robotaxi, 2025 speculative]
---
 
# Tesla Dojo v2 (2025 Speculative)
 
:::warning Speculative Content
Specs on this page are based on Tesla's 2024-10 We Robot event + Elon Musk public statements + industry analyst projections. **Tesla has not officially released complete Dojo v2 specs**. **Official data subject to actual 2025 H2 announcement**.
:::
 
## Overview
 
**Tesla Dojo v2** (codenamed **Dojo 2**) is Tesla's **second-generation training AI chip**, **expected to launch 2025 H2**. Based on **TSMC 3nm process**, **1 PFLOPS FP8 dense** compute, **Tesla custom D2 chip**, **2nd Gen Fabric** interconnect. Paired with **PyTorch + Tesla Dojo SDK**, targeting **FSD (Full Self-Driving) v13/v14** + **Optimus robot** + **Robotaxi training**.
 
**Strategic significance**: Tesla is the **only company that both builds cars and develops its own AI training chips** (Apple is mobile, Meta uses GPU clusters, Microsoft/OpenAI use NVIDIA). **Dojo v2 is Tesla's key product for transitioning from NVIDIA H100 dependency to in-house**.
 
## Core Specifications (Speculative)
 
| Item | Spec |
|------|------|
| **Architecture** | Tesla D2 |
| **Process** | **TSMC 3nm (N3)** |
| **Compute Cores** | **256 SCDs per D2 chip** (Single Core for Dojo) |
| **SCD Compute** | 4 TFLOPS FP8 dense (speculative) |
| **D2 Chip** | 1 PFLOPS FP8 dense (256 x 4 TF) |
| **Tile** | **5x5 D2 = 25 chips / tile** |
| **Tile Compute** | 25 PFLOPS |
| **Cabinet** | **2 tiles = 50 chips / cabinet** |
| **Cabinet Compute** | 50 PFLOPS |
| **ExaPod** | **8 cabinets = 400 chips / ExaPod** |
| **ExaPod Compute** | **400 PFLOPS FP8** |
| **Interconnect** | **2nd Gen Fabric** (2 TB/s bidirectional, vs D1 1.6 TB/s) |
| **TDP (ExaPod)** | **~150 kW** |
| **Mass Production** | **2025 H2** |
| **Price (ExaPod)** | **~$5-10M** (speculative) |
 
## Tesla Dojo Evolution
 
| Generation | Launch | Process | Compute | Interconnect | Use Case |
|------|------|------|------|------|------|
| **Dojo v1** | 2023-07 | 7nm | 362 PFLOPS ExaPod | 1.6 TB/s | **FSD v12** |
| **Dojo v2** | **2025 H2** | **3nm** | **400-500 PFLOPS ExaPod** | **2 TB/s** | **FSD v13/v14** |
| Dojo v3 (speculative) | 2027+ | 2nm | 1 EFLOPS ExaPod | 4 TB/s | Optimus Gen 3 / Robotaxi |
 
## Dojo v1 (D1 Chip) Known Specs
 
| Item | Spec |
|------|------|
| **Architecture** | Tesla D1 |
| **Process** | TSMC 7nm |
| **Transistors** | **50 billion** |
| **Cores** | **354 SCDs** (Single Core for Dojo) |
| **Per SCD** | 64-bit scalar + 64x64 matrix + 16x16 SIMD |
| **Per SCD Compute** | 1 TFLOPS BF16 |
| **D1 Chip** | 362 TFLOPS BF16 |
| **Tile** | 5x5 = 25 D1 chips |
| **Tile Compute** | 9 PFLOPS BF16 |
| **Cabinet** | 2 tiles = 50 D1 chips |
| **ExaPod** | **10 cabinets = 500 D1 chips = 1.1 EFLOPS BF16** |
 
> **Dojo v1 ExaPod known**: 1.1 EFLOPS BF16 (7 ExaPods deployed, ~7.7 EFLOPS total)
 
## Dojo v1 vs Dojo v2 Comparison
 
| Metric | Dojo v1 (2023-07) | **Dojo v2 (2025 H2 speculative)** | Improvement |
|------|---------------------|--------------------------------|------|
| Chip | D1 | **D2** | New gen |
| Process | 7nm | **3nm** | New gen |
| SCD Count | 354 | **256 (speculative)** | -27% |
| Per-SCD Compute | 1 TF BF16 | **4 TF FP8** (speculative) | 4x |
| Per-Chip Compute | 362 TF BF16 | **1 PF FP8** (speculative) | 2.7x |
| Tile | 5x5 = 25 chips | 5x5 = 25 chips | Same |
| Cabinet | 2 tiles = 50 chips | 2 tiles = 50 chips | Same |
| ExaPod | 10 cabinets = 500 chips | **8 cabinets = 400 chips** | Optimized |
| ExaPod Compute | 1.1 EF BF16 | **400-500 PF FP8** | 30-50% improvement |
| Fabric Bandwidth | 1.6 TB/s | **2 TB/s** | +25% |
| TDP | 1+ MW | **~150 kW** | Major power savings |
 
## Dojo SDK Software Stack
 
| Layer | Tool | Notes |
|------|------|------|
| **AI Framework** | **PyTorch** | Tesla primarily uses PyTorch (vs NVIDIA CUDA) |
| | **JAX** | Experimental |
| **Compiler** | **Dojo Compiler** | Auto vectorization + matrix optimization |
| **Runtime** | Dojo Runtime | ExaPod scheduling |
| **Python API** | **dojo.torch** | Similar to torch.device('dojo') |
| **Distributed** | **Dojo Fabric** | Cross-ExaPod communication |
| **Visualization** | **Dojo Visualizer** | ExaPod 3D real-time monitoring |
 
> **Dojo software advantage**: **PyTorch native support** (vs Cerebras requiring SDK conversion), **Tesla in-house 5 years**.
 
## Tesla In-House Dojo Strategy
 
| Dimension | 2023-2024 | 2025-2026 Speculative | 2027+ Speculative |
|------|------------|------------------|-------------|
| **FSD Training** | Dojo v1 + NVIDIA H100 | **Dojo v2** | Dojo v3 |
| **Robots** | - | Optimus training | Optimus Gen 3 |
| **Robotaxi** | - | Robotaxi training | Commercialization |
| **Dojo Deployment** | 7 ExaPods | 20+ ExaPods | 50+ ExaPods |
| **Compute** | ~7.7 EF | ~10-20 EF | 50+ EF |
| **NVIDIA Dependency** | 50% training | 30% training | 10% training |
| **Cost Savings** | - | **~$2B/yr vs all NVIDIA** | **$5B/yr** |
 
> **Dojo strategic significance**: **Tesla is the only company that develops its own training chips + inference chips (FSD Computer) + data (Tesla Fleet)**. **Dojo enables Tesla to fully vertically integrate AI**.
 
## Customers (Tesla Internal Only)
 
| Scenario | Use |
|------|------|
| **FSD v12** (2024-Q4) | End-to-end neural network training |
| **FSD v13** (2025 H1) | Dojo v1 training |
| **FSD v14** (2025 H2) | **Dojo v2 training** |
| **Optimus Gen 2** (2025) | Robot AI training |
| **Robotaxi** (2026) | L4-L5 autonomous driving training |
| **xAI Grok** | Backup (Tesla xAI collaboration) |
 
## Vendor Information
 
| Item | Details |
|------|------|
| **Company** | Tesla, Inc. |
| **Business Unit** | Tesla AI / Dojo team (Palo Alto + Austin) |
| **Dojo Team** | 200+ engineers (ex-AMD / Apple / Intel) |
| **Fab** | TSMC 3nm (Dojo v2) |
| **2024 Investment** | $5B+ (Dojo R&D + manufacturing) |
| **Goal** | **FSD / Optimus / Robotaxi full-stack AI training** |
| **Status** | Continuous iteration (annual new gen) |
 
## Use Cases
 
- ✅ **FSD autonomous driving** (v13/v14 training)
- ✅ **Optimus robot** (Gen 2/3 training)
- ✅ **Robotaxi L4-L5** (2026 commercialization)
- ✅ **Tesla internal distributed training** (20+ ExaPods)
- ✅ **Cost savings** (vs NVIDIA H100 $30K/card)
- ❌ **External sales** (Tesla internal only)
- ❌ **CUDA compatibility** (requires Dojo SDK migration)
- ❌ **Inference deployment** (training only)
 
## vs NVIDIA H100 Cluster (Dojo v2 ExaPod vs 1,000x H100)
 
| Metric | Dojo v2 ExaPod (400 chips) | 1,000x NVIDIA H100 |
|------|------------------------------|----------------------|
| **FP8** | **400 PF** | 1.5 PF sparse (400W/H100) |
| **FP16** | ~200 PF | 1 PF sparse |
| **TDP** | 150 kW | 700 kW |
| **Efficiency** | 2.67 TF/W | 2.16 TF/W |
| **Price** | ~$5-10M | ~$25-30M |
| **Software** | Dojo SDK | CUDA |
| **Train LLM 405B** | ~7 days (speculative) | ~3 days |
| **Train FSD Network** | **Hours** | Days (Tesla reported) |
 
> **Dojo vs NVIDIA cluster**: **1.2x efficiency** + **50% price** + **FSD training optimized**, **Tesla 2025+ reduces NVIDIA dependency by 50%**.
 
## Dojo v2 Key Timeline (Speculative)
 
| Date | Event |
|------|------|
| 2023-07 | Dojo v1 ExaPod activated (Tesla 7 ExaPods) |
| 2024-08 | FSD v12 end-to-end NN (partial Dojo training) |
| 2024-10 | We Robot unveils Optimus Gen 2 / Robotaxi (mentions Dojo v2) |
| **2025 H2** | **Dojo v2 launch** (speculative) |
| 2026 | Optimus Gen 3 + Robotaxi commercialization (Dojo v2 training) |
| 2027+ | Dojo v3 launch (2nm) |
 
## Key Features
 
- **D2 custom chip**: Tesla 100% in-house (vs NVIDIA commercial)
- **3nm TSMC**: Same generation as NVIDIA B200
- **1 PFLOPS per chip**: Industry-leading training-dedicated
- **2 TB/s Fabric**: High bandwidth across ExaPods
- **PyTorch native**: vs Cerebras requiring SDK conversion
- **FSD / Optimus / Robotaxi full stack**: Tesla unique vertical integration
- **Weaknesses**: Tesla internal only, 2-year ecosystem, single Tesla customer
 
## Related Cards
 
- [Tesla Dojo v1](/docs/cards/others/tesla-dojo) - Previous generation
- [Cerebras WSE-3](/docs/cards/cerebras/wse-3) - Wafer-scale training
- [SambaNova SN40L](/docs/cards/others/sambanova-sn40l) - Dataflow
- [Groq LPU v2](/docs/cards/others/groq-lpu-v2) - LPU
- [NVIDIA B200](/docs/cards/nvidia/b200) - Industry comparison
- [NVIDIA GB200](/docs/cards/nvidia/gb200) - Superchip comparison
- [AMD MI400](/docs/cards/amd/mi400) - Competitor
- [Huawei Ascend 920](/docs/cards/huawei/ascend-920) - Domestic comparison
