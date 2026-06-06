---
id: arch-pim
title: PIM / NDP (Processing-in-Memory)
sidebar_label: PIM / NDP
description: "PIM architecture details: Samsung HBM-PIM processing-in-memory, eliminating the memory wall, 2.5× energy efficiency improvement, top choice for memory-bound inference."
keywords: [PIM, Processing-in-Memory, NDP, Near-Data Processing, HBM-PIM, Samsung Aquabolt, in-memory computing]
---

# PIM / NDP (Processing-in-Memory) Architecture

## What is PIM

**PIM (Processing-in-Memory)**, also called **NDP (Near-Data Processing)**, integrates **compute units directly into memory chips**, allowing data to be computed **without leaving memory**. It **completely eliminates the "memory wall" bottleneck** — in traditional architectures, moving data from DRAM to the processor **consumes 100-1000× more energy than computation itself**.

**Representative products**:
- **Samsung HBM-PIM (Aquabolt-XL)**
- **Samsung HBM-CAM** (Content-Addressable Memory)
- **UPMEM PIM-DIMM** (DDR4-PIM)
- **Mythic AI AMP** (NOR Flash PIM)

## PIM Core Innovation

### The Memory Wall Problem
- 2017-2024 AI compute grew 1000×
- Memory bandwidth grew only 100×
- 99% of time + 99% of energy = **moving data**
- PIM brings compute **close to data**

### Architecture Patterns
- **HBM-PIM**: FP16 MACs integrated alongside each DRAM array bank in HBM stacks
- **UPMEM**: RISC-V cores integrated alongside each DDR4 bank
- **Mythic**: INT8 MACs integrated alongside NOR Flash arrays
- **Common thread**: **compute units embedded in storage arrays**

## Performance Advantages

### Samsung HBM-PIM (Aquabolt-XL)
- **1.2 TFLOPS FP16** (per HBM stack)
- **2× inference speedup** (vs traditional HBM + A100)
- **2.5× energy efficiency improvement**
- **TDP only +10%** (vs traditional HBM)
- Compatible with existing GPU motherboards (minimal changes)

### Applicable Scenarios
- **Memory-bound operations**: LLM decoding, RAG, recommendation systems
- **Large model inference**: KV cache acceleration
- **Vector retrieval**: embedding lookups

## PIM vs Traditional Architecture

| Dimension | PIM (HBM-PIM) | Traditional HBM + GPU | PIM (UPMEM) |
|-----------|---------------|----------------------|-------------|
| Integration | **Compute embedded in HBM** | Separate | Compute embedded in DDR |
| Compute | 1.2 TFLOPS / stack | 312 TFLOPS (A100) | 0.5 GFLOPS / DIMM |
| Energy efficiency | **2.5× improvement** | Baseline | 10-20× improvement |
| Software changes | **Minimal** (HBM compatible) | Baseline | New programming model needed |
| Best for | LLM inference, RAG | General | Big data preprocessing |

## PIM Ecosystem Challenges

- ⚠️ **Early ecosystem**: Only Samsung proprietary SDK + some OEMs
- ⚠️ **Software adaptation**: Requires rewriting operators to leverage PIM
- ⚠️ **CUDA compatibility**: Currently supports only specific operators
- ✅ **Samsung accelerating adoption**: Integration collaboration with NVIDIA H200
- ✅ **UPMEM** provides complete SDK

## Mainstream PIM Products

### Samsung HBM-PIM
- **Aquabolt** (2021-02): First generation
- **Aquabolt-XL** (2022-12): 2× compute
- **HBM3-PIM** (2024): Coming soon
- Integration collaboration with NVIDIA H200

### UPMEM
- **UPMEM-PIM DIMM** (DDR4-2400)
- Each DIMM integrates 8-16 DPUs (DRAM Processing Unit)
- Data preprocessing / database acceleration
- Commercialized 2020

### Mythic AI
- **Mythic AMP** (Analog Matrix Processor)
- **NOR Flash PIM** (INT8)
- **Edge AI** (cameras, IoT)
- Acquired by Dmatrix 2024

### Academic
- **Princeton** (PIM research pioneer)
- **ETH Zurich** (Smart Memory)
- **SK Hynix** (AiM accelerator)

## Use Cases

- ✅ **Large model inference** (LLM decoding)
- ✅ RAG (Retrieval-Augmented Generation)
- ✅ Vector databases / embedding retrieval
- ✅ Data preprocessing (database acceleration)
- ✅ Recommendation systems
- ⚠️ Training (advantages less apparent at small scale)
- ❌ Compute-intensive workloads (GPU suffices)

## Detailed Product Pages

- [Samsung HBM-PIM (Aquabolt-XL)](/docs/cards/others/hbm-pim) - Full specifications

## Related Architectures

- [GPU](/docs/architectures/arch-gpu) - General AI
- [TPU](/docs/architectures/arch-tpu) - Google data center
- [LPU](/docs/architectures/arch-lpu) - Ultra-low latency LLM
- [Complete Comparison Table](/docs/comparison)
