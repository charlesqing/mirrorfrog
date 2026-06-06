---
slug: rack-scale-ai-2026-nvl72-vs-helios-vs-lpx-vs-ultraserver
title: 'Rack-Scale AI Era: NVL72 vs Helios vs Groq 3 LPX vs Trn3 UltraServer — Four Major Solutions Compared'
authors: [aicomputecards]
tags: [tech-deep-dive, selection]
description: "2026 AI compute enters the rack-scale era: NVIDIA Rubin NVL72 (576 GPU), AMD Helios (72 MI400), Groq 3 LPX (256 LPU), AWS Trn3 UltraServer (144 chip) — deep comparison and selection guide for four major solutions."
---

**2026 AI compute enters the "rack-scale" era**. Single-chip comparisons have receded, and full-rack solutions have become the main battleground. This article provides an in-depth comparison of the five major rack-scale solutions: **NVIDIA Rubin NVL72/NVL576, AMD Helios, Groq 3 LPX, AWS Trn3 UltraServer, and Google TPU 8t pod**.

{/* truncate */}

## Why the Rack-Scale Era?

### Limitations of Single-Chip Comparisons

| Single-Chip Metric | 2018 (V100) | 2024 (H100) | 2026 (Rubin R200) | 2028 (Est.) |
|--------------------|-------------|-------------|--------------------|-------------|
| Compute | 125 TFLOPS | 989 TFLOPS | 25 PFLOPS | 80 PFLOPS |
| Memory | 32 GB | 80 GB | 288 GB | 1 TB |
| TDP | 300 W | 700 W | 1,800 W | 3,000 W |

> **Single-chip TDP is about to exceed 3,000W** — physical cooling, power delivery, and interconnect have all reached their limits.

### Advantages of Rack-Scale

- **Unified cooling**: Full-rack liquid cooling, high thermal efficiency
- **Unified power**: Centralized power delivery, optimized energy efficiency
- **Unified interconnect**: NVLink 6 / UALoF / GroqSync / NeuronLink
- **Unified management**: Single-system software stack
- **Unified procurement**: Single SKU purchase, simplified operations

## Five Major Rack-Scale Solutions

### 1. NVIDIA Rubin NVL72 / NVL576

| Item | Rubin NVL72 | **Rubin NVL576** |
|------|-------------|------------------|
| GPU Count | 72 | **576** |
| CPU Count | 36 | 288 |
| Total HBM | 20.7 TB HBM4 | 165 TB HBM4 |
| Memory Bandwidth | 1.6 PB/s | 12.7 PB/s |
| NVLink Aggregate | 252 TB/s | 2,016 TB/s |
| FP4 Sparse Compute | 3.6 EFLOPS | **28.8 EFLOPS** |
| FP8 Sparse Compute | 1.8 EFLOPS | 14.4 EFLOPS |
| DC Network | ConnectX-9 1152 ports | ConnectX-9 1152 ports |
| TDP (Rack) | ~130 kW | **~1 MW** |
| Cooling | Liquid | Liquid |
| Suitability | 100B+ model training | **1T+ giant models** |
| Price | ~$3-5M | **~$25-40M** |
| Release | 2026 H2 | 2026 H2+ |

> **Rubin NVL576 = 28.8 EFLOPS FP4 = 1.5 ExaFLOPS FP8 = World's most powerful AI super node**

### 2. AMD Helios Rack

| Item | Helios |
|------|--------|
| GPU Count | **72 MI400 GPUs** |
| CPU Count | 36 EPYC Venice CPUs |
| Total HBM | 31.1 TB HBM4 |
| Memory Bandwidth | 1.4 PB/s |
| Scale-up Interconnect | **UALoF 260 TB/s** (open standard) |
| Scale-out Network | Pensando Vulcano 800G |
| FP4 Dense Compute | **2.88 EFLOPS** |
| FP8 Dense Compute | 1.44 EFLOPS |
| TDP (Rack) | ~80 kW |
| Cooling | Liquid |
| Suitability | 700B+ model training |
| Price | ~$2-3M |
| Release | 2026 |

> **Helios surpasses NVIDIA Rubin NVL72 in dense compute** (2.88 vs 1.8 EF FP8 dense)

### 3. NVIDIA Groq 3 LPX Rack (Inference-Specialized)

| Item | Groq 3 LPX |
|------|------------|
| LPU Count | **256 Groq 3 LPUs** |
| CPU Count | None (standalone) |
| On-chip SRAM | **128 GB aggregate** |
| SRAM Bandwidth | **40 PB/s** (SRAM, not HBM) |
| Interconnect | GroqSync + NVLink-Network **640 TB/s** |
| FP8 Compute | ~640 PFLOPS |
| INT8 Compute | ~640,000 TOPS |
| TDP (Rack) | ~80 kW |
| **TTFT (Time to First Token)** | **&lt;20ms** |
| **TPOT** | **&lt;5ms** |
| Cooling | Liquid |
| Suitability | **Ultra-low latency inference** (Agentic AI) |
| Price | ~$8-10M |
| Release | 2026 H2 |

> **Groq 3 LPX is currently the only rack-scale LPU system designed specifically for Agentic AI**

### 4. AWS Trn3 UltraServer

| Item | Trn3 UltraServer |
|------|------------------|
| Chip Count | **144 Trainium 3 chips** |
| Total HBM | ~20.7 TB |
| NeuronLink-v4 | Fully interconnected, &gt;10 TB/s bidirectional |
| FP8 Dense Compute | **52 PFLOPS** |
| BF16 Dense Compute | ~187 PFLOPS |
| TDP (Rack) | ~100 kW |
| Cooling | Liquid |
| Suitability | **400B+ model training** |
| Price (Est.) | ~$3-5M |
| Release | 2025-12 GA |

> **Trn3 UltraServer = Best value large-scale training solution** (2-3× performance per dollar vs NVIDIA)

### 5. Google TPU 8t pod

| Item | TPU 8t pod |
|------|------------|
| Chip Count | **9,216 TPU 8t chips** |
| Total HBM | ~2 PB HBM |
| Interconnect | 3D Torus |
| Integrated CPU | Arm Axion (64 cores per node) |
| BF16 Dense Compute | **~32 PFLOPS × 9,216 = 295 EFLOPS** |
| FP8 Dense Compute | ~590 EFLOPS |
| Cooling | Liquid |
| Suitability | **Gemini 3/4 training** |
| Price | Google Cloud only |
| Release | 2026-04-22 |

> **TPU 8t pod = World's largest AI training cluster** (9,216 chips × 9 PFLOPS ≈ 83 EFLOPS FP4 dense)

## Five-Solution Horizontal Comparison

| Metric | NVIDIA NVL72 | AMD Helios | Groq 3 LPX | Trn3 UltraServer | TPU 8t pod |
|--------|--------------|------------|------------|------------------|------------|
| **Form Factor** | Training rack | Training rack | Inference rack | Training rack | Training pod |
| **Chip Count** | 72 GPU | 72 GPU | 256 LPU | 144 chip | 9,216 chip |
| **Total Memory** | 20.7 TB HBM | 31.1 TB HBM | 128 GB SRAM | 20.7 TB HBM | ~2 PB HBM |
| **Interconnect** | NVLink 6 252 TB/s | UALoF 260 TB/s | GroqSync 640 TB/s | NeuronLink-v4 | 3D Torus |
| **FP4 Compute** | 3.6 EF (sparse) | 2.88 EF (dense) | — | — | — |
| **FP8 Compute** | 1.8 EF (sparse) | 1.44 EF (dense) | 640 PF | 52 PF (dense) | 590 EF (dense) |
| **TDP** | 130 kW | 80 kW | 80 kW | 100 kW | ~10 MW (pod) |
| **TTFT** | ~100ms | ~100ms | **&lt;20ms** | ~100ms | ~100ms |
| **Ecosystem** | CUDA 13 | ROCm 8 | Groq SDK | Neuron 3 | JAX 0.5+ |
| **Price** | $3-5M | $2-3M | $8-10M | $3-5M | Internal use |
| **Customers** | All clouds + customers | Customers + cloud | Customers + cloud | AWS Cloud | Google Cloud |
| **Standardization** | ❌ NVLink proprietary | ✅ UALoF open | ❌ GroqSync | ❌ NeuronLink | ❌ Torus |
| **Release** | 2026 H2 | 2026 | 2026 H2 | 2025-12 GA | 2026-04 |

## Selection Recommendations

### Large-Scale Training

| Scenario | Recommended Solution | Reason |
|----------|---------------------|--------|
| **100B-700B model training** | NVIDIA Rubin NVL72 | Single rack fits 100B, strongest FP4 compute |
| **700B-1T model training** | NVIDIA Rubin NVL576 or AMD Helios | Multi-rack interconnect |
| **1T+ giant model training** | NVIDIA NVL576 (8 units) | 28.8 EFLOPS × 8 = 230 EFLOPS |
| **Hyperscale (Gemini class)** | Google TPU 8t pod (9,216 chip) | Google Cloud only |
| **AWS internal training** | Trn3 UltraServer | Best value |
| **Open ecosystem preference** | AMD Helios | UALoF open interconnect |

### Ultra-Low Latency Inference

| Scenario | Recommended Solution | Reason |
|----------|---------------------|--------|
| **Agentic AI (1000+ calls/sec)** | Groq 3 LPX | TTFT &lt;20ms, only choice |
| **Real-time Code Gen** (Copilot) | Groq 3 LPX | Sub-100ms response |
| **Trillion-parameter inference** | NVIDIA Rubin R200 + Groq 3 LPX coordinated | GPU training + LPU inference |
| **70B single-model inference** | TPU 8i (288GB HBM) | Single card fits FP16 70B |
| **Multi-modal real-time inference** | TPU 8i (air-cooled) | Flexible cooling |

### Cost-Sensitive Training

| Scenario | Recommended Solution | Reason |
|----------|---------------------|--------|
| **100B parameter training** | AWS Trn3 UltraServer | 2-3× performance per dollar vs NVIDIA |
| **Hyperscale (non-Gemini)** | AWS Trn3 UltraServer × N | $3-5M/rack |
| **70B fine-tuning** | AMD Helios single rack | Value + open ecosystem |
| **100B+ parameter training** | Trn3 UltraServer × 3 | 144 × 3 = 432 chips |

## Rack-Scale Future Trends

### 1. Per-Rack Compute Continues Growing

| Year | Per-Rack Compute | Mainstream Solution |
|------|------------------|---------------------|
| 2024 | ~0.2 EFLOPS FP8 | GB200 NVL72 |
| 2026 | 1.8-3.6 EFLOPS FP8 | Rubin NVL72 / Helios |
| 2028 | 8-15 EFLOPS FP8 | Rubin Ultra NVL72 / MI500 |
| 2030 | 30-50 EFLOPS FP8 | Feynman era |

### 2. Multi-Rack Interconnect Standards Competition

| Standard | Vendor | Status |
|----------|--------|--------|
| **NVLink Network** | NVIDIA | Proprietary, 2026 primary |
| **UALoF** | AMD/Broadcom/Intel | Open, 2026 Helios debut |
| **UALink** | Alliance | UALoF evolution |
| **NeuronLink** | AWS | Private |
| **GroqSync** | Groq (NVIDIA) | Private, ultra-low latency |

### 3. Software Ecosystem Layering

- **Training frameworks**: PyTorch + JAX + Megatron
- **Inference engines**: vLLM + TensorRT-LLM + SGLang
- **Resource scheduling**: Slurm + Kubernetes + Ray
- **Multi-rack management**: NVIDIA Base Command / AMD ROCm RunTime

## Detailed Product Pages

- [NVIDIA Rubin R200 (NVL72 / NVL576)](/docs/cards/nvidia/rubin-r200)
- [NVIDIA Groq 3 LPX](/docs/cards/nvidia/groq-3-lpx)
- [AMD MI400 (Helios rack)](/docs/cards/amd/mi400)
- [AWS Trainium 3 (Trn3 UltraServer)](/docs/cards/aws/trainium-3)
- [Google TPU 8t (9,216 pod)](/docs/cards/google/tpu-8t)
- [Google TPU 8i (inference-specialized)](/docs/cards/google/tpu-8i)
- [Future Roadmap](/docs/roadmap)

## Summary

The **primary battleground** for AI compute in 2026 is rack-scale solutions:

1. **NVIDIA Rubin NVL72/NVL576** — Strongest training, FP4 3.6/28.8 EFLOPS
2. **AMD Helios** — Open ecosystem, leading dense compute
3. **Groq 3 LPX** — Ultra-low latency inference, TTFT &lt;20ms
4. **AWS Trn3 UltraServer** — Best value, 2-3× per dollar
5. **Google TPU 8t pod** — Hyperscale, 9,216 chip cluster

**There is no best, only the most suitable**. Selection should consider:
- Model size (100B / 700B / 1T+)
- Training vs inference
- Latency requirements (normal vs Agentic)
- Ecosystem preference (CUDA / ROCm / JAX / Neuron)
- Budget ($2-10M/rack)
- Deployment location (on-prem / cloud)
