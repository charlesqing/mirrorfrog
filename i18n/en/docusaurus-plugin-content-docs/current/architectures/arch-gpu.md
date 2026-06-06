---
id: arch-gpu
title: GPU (Graphics Processing Unit)
sidebar_label: GPU
description: "GPU architecture AI compute card details: NVIDIA, AMD, Intel data center and consumer GPUs, mature CUDA/OpenCL ecosystem, mainstream AI training/inference platforms."
keywords: [GPU, Graphics Processing Unit, NVIDIA CUDA, AMD ROCm, Intel, general-purpose parallel computing, AI training]
---

# GPU (Graphics Processing Unit) Architecture

## What is a GPU

**GPU (Graphics Processing Unit)** was originally designed for graphics rendering. Its **parallel architecture** (thousands of small ALUs) naturally suits AI matrix operations. In 2007, NVIDIA released **CUDA**, transforming GPUs into **GPGPU** (General-Purpose GPU), kicking off the AI acceleration era.

**Currently 90%+ of AI training and 70%+ of inference** runs on GPUs. The **CUDA ecosystem** is the biggest moat.

## GPU vs Other AI Chips

| Dimension | GPU | TPU | ASIC | NPU |
|-----------|-----|-----|------|-----|
| General-purpose | **Strongest** | Medium (Google Cloud only) | Weak | Medium |
| Compute density | High | **Extremely high** | High | Medium |
| Ecosystem | **CUDA dominant** | JAX/TF | Vendor-proprietary | Fragmented |
| Programming model | CUDA/OpenCL/SYCL | XLA | Vendor SDK | Vendor SDK |
| Price | High | High (cloud only) | Medium | Medium |
| Best for | General AI / training / inference | Data center training | Inference optimization | Edge/on-device |

## Major Vendors

### NVIDIA (~90% AI GPU market share)
- **Data Center**: H100 / H200 / B100 / B200 / B300 / A100
- **Inference**: L2 / L4 / L40S / T4
- **Workstation/Consumer**: RTX 4090 / RTX 5090 / RTX 5080 / RTX 6000 Ada
- **Edge**: Jetson Orin / Jetson Thor

### AMD (~5% AI GPU market share)
- **Data Center Training**: MI250 / MI300X / MI300A / MI325X / MI350
- **Ecosystem**: ROCm (CUDA alternative, performance lags)

### Intel (~3% AI GPU market share)
- **Data Center**: Intel Max Series (Ponte Vecchio) / Flex Series
- **Consumer**: Arc series
- **Integrated GPU**: Meteor Lake / Lunar Lake NPU

## Mainstream GPU Spec Comparison

| GPU | Architecture | Memory | FP16 Tensor | TDP | Use Case |
|-----|-------------|--------|-------------|-----|----------|
| **NVIDIA B300 Ultra** | Blackwell Ultra | 288GB HBM3e | 15 PFLOPS | 1,400W | Top-tier training |
| **NVIDIA B200** | Blackwell | 192GB HBM3e | 2.25 PFLOPS | 1,000W | Data center |
| **NVIDIA H200** | Hopper | 141GB HBM3e | 1.98 PFLOPS | 700W | Training/inference |
| **NVIDIA H100** | Hopper | 80GB HBM3 | 1.98 PFLOPS | 700W | Training/inference |
| **NVIDIA RTX 5090** | Blackwell | 32GB GDDR7 | 419 TFLOPS | 575W | Consumer flagship |
| **AMD MI355X** | CDNA 4 | 288GB HBM3E | 10 PFLOPS | 1,400W | Training |
| **AMD MI300X** | CDNA 3 | 192GB HBM3 | 1.5 PFLOPS | 750W | Training |

## Programming Models

### CUDA (NVIDIA)
- **CUDA C/C++** — low-level API
- **cuDNN** — neural network primitives
- **cuBLAS** — matrix operations
- **Triton** — Python high-level compiler
- **Ecosystem**: PyTorch / TensorFlow / JAX / vLLM

### ROCm (AMD)
- **HIP** — CUDA-compatible API
- **MIOpen** — deep learning library
- **Performance**: ~70-90% of NVIDIA (workload-dependent)

### SYCL / oneAPI (Intel)
- **DPC++** — C++ + SYCL
- **oneMKL** — math library
- **Smaller ecosystem**, but open source

## GPU Use Cases

- ✅ General AI training / inference (mature CUDA ecosystem)
- ✅ LLM training (GPT-3 / LLaMA / Mixtral)
- ✅ Stable Diffusion training
- ✅ Scientific computing (HPC)
- ✅ Multi-workload data center
- ❌ Extreme energy efficiency (use ASIC)
- ❌ Edge/on-device (use NPU)

## Selection Guide

| Workload | Recommended GPU |
|----------|-----------------|
| Training GPT-4 class models | B200 / B300 / H200 |
| Training 70B LLM | H100 8-way / MI300X 8-way |
| Training 13B LLM | H100 / A100 |
| Inference 70B+ LLM | H100 NVL / H200 |
| Inference 13B LLM | L40S / L4 |
| Stable Diffusion XL | RTX 4090 / RTX 5090 |
| Edge AI inference | Jetson Orin / Thor |
| HPC + AI joint | MI300A / H100 |

## Detailed Product Pages

### NVIDIA Data Center (H Series / A Series)
- [NVIDIA H100](/docs/cards/nvidia/h100) - Training and inference fungible
- [NVIDIA H200](/docs/cards/nvidia/h200) - 141GB HBM3e
- [NVIDIA A100](/docs/cards/nvidia/a100) - Previous-gen workhorse 40/80GB HBM2e
- [NVIDIA H100 NVL](/docs/cards/nvidia/h100-nvl) - 94GB dual-die PCIe

### NVIDIA Blackwell (B Series)
- [NVIDIA B100](/docs/cards/nvidia/b100) - Blackwell entry 700W
- [NVIDIA B200](/docs/cards/nvidia/b200) - Blackwell workhorse 1000W 208GB HBM3e
- [NVIDIA B300 Ultra](/docs/cards/nvidia/b300-ultra) - Blackwell top-tier 1400W (B300 series flagship)
- [NVIDIA GB200 NVL72](/docs/cards/nvidia/gb200) - Grace Blackwell 200, 72×B200 + 36×Grace, 1.1 EFLOPS BF16 NVL72 1×72
- [NVIDIA GB300 NVL72](/docs/cards/nvidia/gb300) - Grace Blackwell 300, 1.08 EFLOPS BF16 ConnectX-9 1.6T, NVL72 1×72

### NVIDIA Vera Rubin Platform (2026 H2)
- [NVIDIA Vera Rubin R200](/docs/cards/nvidia/rubin-r200) - 6-chip CoWoS-L package, 288GB HBM4 22 TB/s, 50 PFLOPS FP4 sparse, ConnectX-9 28.8 TB/s
- **Rubin NVL72** (1 rack): 72×R200 + 36×Vera, 1.4 EFLOPS FP4 sparse
- **Rubin NVL576** (8 racks): 576×R200 + 288×Vera, 28.8 EFLOPS FP4 sparse, **1.1 MW per room**

### NVIDIA Inference / Edge
- [NVIDIA L4](/docs/cards/nvidia/l4) - Inference sub-flagship 24GB GDDR6 121 TOPS INT8
- [NVIDIA L40S](/docs/cards/nvidia/l40s) - Inference flagship 48GB GDDR6 362 TOPS INT8 Ada Lovelace
- [NVIDIA L2](/docs/cards/nvidia/l2) - Entry inference 24GB GDDR6 193 TOPS INT8 Ada
- [NVIDIA T4](/docs/cards/nvidia/t4) - Entry Turing 16GB GDDR6 130 TOPS INT8
- [NVIDIA Jetson Orin](/docs/cards/nvidia/jetson-orin) - Edge AI 8-32GB 40-275 TOPS
- [NVIDIA DRIVE Thor](/docs/cards/nvidia/drive-thor) - Automotive Blackwell 1000 INT8 TOPS / 2000 FP4 TFLOPS, ZEEKR 2025 H2 first shipment ISO 26262 ASIL-D
- [NVIDIA RTX 5090](/docs/cards/nvidia/rtx-5090) - Consumer flagship 32GB GDDR7 1676 AI TOPS GB202
- [NVIDIA RTX 5080](/docs/cards/nvidia/rtx-5080) - Consumer sub-flagship 16GB GDDR7 1801 AI TOPS GB203
- [NVIDIA RTX 4090](/docs/cards/nvidia/rtx-4090) - Previous-gen consumer flagship 24GB GDDR6X 1321 AI TOPS
- [NVIDIA RTX 6000 Ada](/docs/cards/nvidia/rtx-6000-ada) - Workstation 48GB GDDR6 1457 TOPS

### AMD
- [AMD MI210](/docs/cards/amd/mi210) - CDNA 2 64GB HBM2e 22.6 TF FP64 PCIe, preferred for Europe's LUMI supercomputer
- [AMD MI250](/docs/cards/amd/mi250) - CDNA 2 128GB HBM2e
- [AMD MI300X](/docs/cards/amd/mi300x) - CDNA 3 192GB HBM3 5.3 TB/s
- [AMD MI300A](/docs/cards/amd/mi300a) - CDNA 3 + Zen 4 APU 128GB HBM3
- [AMD MI325X](/docs/cards/amd/mi325x) - 256GB HBM3e 6 TB/s 1.3 PF FP8
- [AMD MI355X](/docs/cards/amd/mi355x) - 288GB HBM3E 8 TB/s 4.6 PF FP8 UALoF 600 GB/s
- [AMD MI350](/docs/cards/amd/mi350) - CDNA 4 288GB HBM3E
- [AMD MI400](/docs/cards/amd/mi400) - CDNA Next 432GB HBM4 40 PF FP4 dense, Helios 72-GPU rack

### Intel
- [Intel Max Series (Ponte Vecchio)](/docs/cards/intel/max-series) - HBM2e 128GB data center GPU
- [Intel Flex Series (Arctic Sound)](/docs/cards/intel/flex-series) - Inference GPU 150W 12 TFLOPS FP32
- [Intel Gaudi 2](/docs/cards/intel/gaudi-2) - Data center 96GB HBM2e
- [Intel Gaudi 3](/docs/cards/intel/gaudi-3) - 128GB HBM2e 1835 BF16 TFLOPS
- [Intel Gaudi 4](/docs/cards/intel/gaudi-4) - 2026-Q2 estimated 3nm 192GB HBM3E 3.7 PF FP8 18A
- [Intel Jaguar Shores](/docs/cards/intel/jaguar-shores) - Successor to canceled Falcon Shores, rack-scale 2027-2028
- [Intel Core Ultra 2 (Lunar Lake)](/docs/cards/intel/core-ultra-2) - Foveros 3D NPU 4.0 48 TOPS

## Related Architectures

- [TPU](/docs/architectures/arch-tpu) - Google data center dedicated
- [NPU](/docs/architectures/arch-npu) - Edge/on-device NPU
- [ASIC](/docs/architectures/arch-asic) - Inference optimized
- [APU](/docs/architectures/arch-apu) - CPU+GPU integrated
- [Complete Comparison Table](/docs/comparison)
