---
id: arch-wse
title: WSE (Wafer-Scale Engine)
sidebar_label: WSE
description: "WSE architecture details: Cerebras full wafer as a single chip, 900K cores, 44 GB SRAM, purpose-built for ultra-large model training."
keywords: [WSE, Wafer-Scale Engine, Cerebras, CS-3, WSE-3, wafer-scale, 900K cores, 44GB SRAM]
---

# WSE (Wafer-Scale Engine) Architecture

## What is WSE

**WSE (Wafer-Scale Engine)** is **Cerebras Systems**' **wafer-scale AI processor**, using an **entire 12-inch wafer** as a single chip (vs traditional GPUs occupying only a small piece of the wafer).

**Cerebras WSE-3** (announced 2024-04) features **4 trillion transistors, 900,000 cores, 44 GB SRAM**, purpose-built for **ultra-large-scale AI training** (Llama 3 405B, GPT-4 class).

## WSE Core Innovation

### Wafer-Scale Integration
- Traditional GPU chips ~800 mm² (~3% wafer area)
- **WSE entire wafer = 46,225 mm²** (57× larger)
- **On-chip SRAM 44GB** (vs H100 80GB HBM, but SRAM is 1000× faster than HBM)
- **On-chip interconnect 214 PB/s** (Fabric bandwidth)

### Sparse Linear Algebra Cores (SLAK)
- Optimized for **GEMM** (matrix multiply) and **sparse** operations
- **Faster than GPU tensor cores** (specific workloads)

### SwarmX Interconnect
- **Multi-WSE systems**: Cerebras CS-3 clusters
- Connected via SwarmX fabric (~1.2 TB/s)
- **CS-3 Cluster = 2,048 WSE = 8 ExaFLOPS**

## Mainstream WSE Comparison

| WSE | Year | Transistors | Cores | SRAM | Process | Compute (FP16) |
|-----|------|-------------|-------|------|---------|----------------|
| **WSE-1** | 2019 | 1.2T | 400K | 18 GB | TSMC 16nm | - |
| **WSE-2** | 2021 | 2.6T | 850K | 40 GB | TSMC 7nm | ~62 PFLOPS |
| **WSE-3** | 2024 | **4T** | **900K** | **44 GB** | TSMC 5nm | **125 PFLOPS** |
| **WSE-4 (CS-4, estimated)** | **2027 expected** | ~5T | ~1.5M | ~80 GB | **TSMC 3nm** | ~200 PFLOPS |

> ⚠️ **WSE-4 is not officially announced**; specifications above are estimates. Cerebras filed for **IPO on 2026-04-17**; WSE-4 will be the **first public product after IPO**.

## WSE vs GPU

| Dimension | WSE-3 | H100 SXM | MI300X |
|-----------|-------|----------|--------|
| Transistors | **4 trillion** | 80 billion | 153 billion |
| Cores | 900K (sparse cores) | 14,592 CUDA | 14,592 SP |
| Memory | **44 GB SRAM** | 80GB HBM3 | 192GB HBM3 |
| Memory bandwidth | **~1 PB/s** | 3.35 TB/s | 5.3 TB/s |
| TDP | ~15 kW | 700W | 750W |
| Compute (FP16) | 125 PFLOPS | 989 TFLOPS | 1.5 PFLOPS |
| Deployment | **Full system** (Cerebras CS-3) | PCIe/SXM card | PCIe card |
| Best for | **Ultra-large model training** | General training | General training |

## WSE Use Cases

- ✅ **Ultra-large LLM training** (Llama 3 405B, GPT-4 class)
- ✅ Genomics (biomedical)
- ✅ Scientific computing (HPC)
- ✅ Long sequence training (44GB SRAM enables massive batches)
- ❌ General AI inference (use GPU)
- ❌ Edge deployment (15kW TDP)
- ❌ Small/medium model training (cost-inefficient)

## Commercial Deployments

- **G42** (UAE AI company, $900M order)
- **Mayo Clinic** (medical AI)
- **Argonne National Lab** (scientific computing)
- **Llama 3 405B training** (Meta collaboration with Cerebras)

## 2026 Cerebras IPO (Major Event)

| Item | Details |
|------|---------|
| **IPO filing date** | **2026-04-17** (S-1 filed) |
| **Target listing date** | **2026-05** (Nasdaq: **CBRS**) |
| **Valuation** | **$22-25B** |
| **2025 revenue** | ~$510M (YoY +150%) |
| **2025 net loss** | ~$200M (still losing, but narrowing) |
| **Key deal** | **OpenAI $10B inference compute long-term contract** |
| **Major customers** | OpenAI, G42, Mistral, Meta, Mayo Clinic |
| **Underwriters** | Goldman Sachs / Morgan Stanley / J.P. Morgan |

> 💡 **IPO strategic significance**:
> - Cerebras is the **world's second-largest wafer-scale AI company** (behind NVIDIA by market cap)
> - **OpenAI $10B contract** = largest single-customer inference compute order in history
> - **WSE-4 (CS-4)** will be the **first public post-IPO product** (expected 2027)
> - Competing with NVIDIA Groq 3 LPX for the ultra-low-latency inference market

## Detailed Product Pages

- [Cerebras WSE-2](/docs/cards/cerebras/wse-2) - 2021 second generation
- [Cerebras WSE-3](/docs/cards/cerebras/wse-3) - 2024 third generation
- [Cerebras WSE-4](/docs/cards/cerebras/wse-4) - 2027 expected (first post-IPO generation)

## Related Architectures

- [GPU](/docs/architectures/arch-gpu) - General AI
- [TPU](/docs/architectures/arch-tpu) - Google data center
- [RPU/RDU](/docs/architectures/arch-rpu-rdu) - Reconfigurable architecture
- [Complete Comparison Table](/docs/comparison)
