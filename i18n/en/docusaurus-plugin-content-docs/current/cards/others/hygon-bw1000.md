---
id: hygon-bw1000
title: "Hygon DCU BW1000 (3rd-Gen Shensuan)"
vendor: others
vendor_full: "Hygon"
series: "Shensuan DCU"
chip_id: "hygon-bw1000"
release_date: "2025"
launch_price: "Undisclosed"
status: "Mass production"
description: "Hygon BW1000 (3rd-gen Shensuan DCU): flagship GPGPU with FP16 480 TFLOPS, FP64 30 TFLOPS, 64GB HBM2e at 1.6TB/s, ~300W typical TDP, no FP8 support. CUDA-like DTK/HIP ecosystem, deployed on the Info High-Speed Rail computing platform."
keywords: [Hygon, BW1000, Shensuan 3, DCU, 480 TFLOPS, FP64, HBM2e, CUDA-like, DTK, Info High-Speed Rail, domestic GPU, China AI chip]
---

# Hygon DCU BW1000 (3rd-Gen Shensuan)

> Hygon's third-generation flagship DCU (Shensuan No.3 / DCU-3, production model BW1000, series code DCU 8300) for large-model training, scientific computing, and government workloads. Deployed at scale on the Info High-Speed Rail (XinxigaoTie) AI computing platform — the first platform to schedule BW1000 clusters in production.

---

## Core Specifications

| Spec | Value |
|------|-------|
| **Architecture** | GPGPU (CUDA-like, DTK/HIP software stack, Chiplet packaging) |
| **Process** | Undisclosed |
| **FP16** | 480 TFLOPS (per Moark deployment docs; Hygon has not published official figures) |
| **FP32** | 60 TFLOPS |
| **FP64** | 30 TFLOPS (strength: scientific computing / CAE simulation) |
| **Precision support** | FP16 / BF16 / TF32 / FP32 / FP64 / INT8 |
| **FP8 support** | Not supported (quantized alternatives required for FP8 models) |
| **Memory** | 64 GB HBM2e |
| **Memory bandwidth** | 1.6 TB/s |
| **TDP** | ~300 W (typical) |
| **Interconnect** | PCIe 5.0 x16 (host interface) |
| **Launch** | Released 2025, scaling through 2026 |
| **Price** | Undisclosed |

> 📌 **Sourcing note (2026-09 cross-validation)**: FP16/FP32/FP64/memory/bandwidth/TDP figures are taken from the Moark (moark.com) deployment documentation, corroborated by Baidu Baike; both sources agree. Hygon has never officially published compute figures — media claims of 5nm process and 800 TFLOPS conflict with each other and are not adopted. Process node is left unlisted (only Chiplet packaging is confirmed).

---

## Highlights

- **CUDA-like ecosystem**: full DTK/HIP software stack compatible with ROCm/CUDA programming models; native support for PyTorch, TensorFlow, and PaddlePaddle with operator coverage over 99% of CUDA equivalents
- **Full-precision scientific computing**: 30 TFLOPS FP64 is top-tier, excelling at CAE simulation, weather modeling, and computational fluid dynamics
- **Seamless migration**: DeepSeek models adapted on launch day; Tencent Hunyuan, DeepSeek V3/R1, and Qwen3 fully supported
- **Cluster-ready**: BW1000 clusters live on the Info High-Speed Rail platform, supporting 50+ industry large-model programs

---

## Positioning

The BW1000 is Hygon's third-generation DCU flagship: Shensuan No.1 (V100-class) → Shensuan No.2 (A100-class, ~180 TFLOPS FP16 range) → **Shensuan No.3 BW1000** (H800/H200 inference-subset class). Paired with Hygon C86 CPUs in a CPU+DCU heterogeneous architecture, it targets finance, government, and energy xinchuang (domestic substitution) deployments.

---

## Use Cases

- Large-model training and inference (hundred-billion-parameter scale; near-A100 LLM training performance)
- Scientific computing and CAE simulation (FP64 strength; 256-card parallel runs show up to 700x speedup)
- Government/finance xinchuang compute centers (Info High-Speed Rail cluster scheduling)
- ❌ Direct FP8 model deployment (conversion required)

---

## Related Cards

- [Hygon DCU K100](/docs/cards/others/hygon-dcu-k100) — Shensuan No.2 series workhorse
- [Hygon DCU Z100](/docs/cards/others/hygon-dcu-z100) — Shensuan No.1 series
- [NVIDIA H200](/docs/cards/nvidia/h200) — international flagship comparison
- [NVIDIA H20](/docs/cards/nvidia/h20) — H20 substitution window comparison
- [Cambricon MLU 690](/docs/cards/cambricon/mlu-690) — domestic training-card rival

## References

- [Hygon BW1000 deployment documentation (Moark)](https://www.moark.com/docs/compute/clusters_gpu/hygon_gpu)
- [Hygon BW1000 DCU hands-on guide (DevPress/CSDN)](https://devpress.csdn.net/v1/article/detail/162963776)
