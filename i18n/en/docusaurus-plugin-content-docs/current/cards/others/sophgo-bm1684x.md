---
id: sophgo-bm1684x
title: "Sophgo BM1684X"
description: "Sophgo's fourth-generation TPU BM1684X: 12nm, 32 TOPS INT8 (64 TOPS INT4), 16 TFLOPS FP16/BF16, supporting large-model edge inference."
keywords: [Sophgo, BM1684X, SOPHGO, edge AI, 32 TOPS, INT8, large model, LLM edge]
vendor: others
vendor_full: "SOPHGO"
series: "SOPHON BM Series"
release_date: "2022"
status: "Mass production"
---

# Sophgo BM1684X

## Product Overview

The **BM1684X** is the **fourth-generation Tensor Processor (TPU)** released by SOPHGO in **2022**, the iterative flagship of the BM1684. Built on a 12nm process, it integrates an 8-core ARM Cortex-A53 and a proprietary NPU (Bernoulli architecture), delivering peak compute of **32 TOPS INT8 / 64 TOPS INT4 / 16 TFLOPS FP16/BF16 / 2 TFLOPS FP32**, with strengthened post-processing engines such as NMS/SORT.

The BM1684X targets **edge large-model inference** and **high-density video analytics**: it can deploy large models such as Llama3, ChatGLM, and Qwen locally, while supporting 32-channel 1080P video decoding and 16-channel full-pipeline AI analysis. It is often paired with main controllers such as the RK3588 in heterogeneous edge boxes, benchmarked against the NVIDIA Jetson Orin NX.

> **Specification Correction Note**: Some early or unofficial sources list the BM1684X's process as 16nm and its memory as 32GB LPDDR. After checking specification sheets from Sophgo and its partners (Firefly, Tianqi, IOTDT), the actual figures are a **12nm process and on-board memory of up to 16GB LPDDR4X** (6/12/16GB options); 32GB appears in multi-node server systems rather than single-chip configurations.

## Core Specifications

| Parameter | Value |
|-----------|-------|
| **Architecture** | Sophgo fourth-generation proprietary TPU (Bernoulli architecture), integrating 8-core ARM Cortex-A53 @ 2.3GHz |
| **Process Node** | 12nm (TSMC; some sources incorrectly list 16nm, corrected) |
| **FP16 / BF16 Compute** | 16 TFLOPS |
| **INT8 Compute** | 32 TOPS (up to 64 TOPS at INT4) |
| **FP32 Compute** | 2 TFLOPS |
| **Memory Capacity** | 6 / 12 / 16GB (max 16GB LPDDR4X) |
| **Memory Type** | LPDDR4 / LPDDR4X |
| **Memory Bandwidth** | About 68.3 GB/s (16GB configuration, 128-bit @ 4266 Mbps) |
| **TDP** | ≤ 18–20 W (full load, passive fanless cooling) |
| **Interconnect** | Dual Gigabit Ethernet, PCIe 3.0 (16 lanes), multi-chip cascading |
| **Interface** | SoC on-board / PCIe 3.0 (module, computing box, micro-server) |
| **Launch** | 2022 |
| **Mass Production/Availability** | Mass production in 2022 |

## Key Features

- **Edge large-model deployment**: supports local private inference of Llama3-8B, ChatGLM2/3-6B, Qwen-7B, Qwen2.5-VL-7B, and more.
- **Mixed precision**: full-stack INT8 / FP16-BF16 / INT4 / FP32 precision, with automatic quantization by the TPU-MLIR compiler.
- **High-density video**: 32-channel 1080P@25fps decoding, 12-channel encoding, with independent physically isolated VPU and TPU.
- **Full-stack frameworks**: PyTorch, TensorFlow, PaddlePaddle, ONNX, Caffe, Darknet, MXNet.
- **Complete toolchain**: SophonSDK one-stop compilation/quantization/inference, Docker containerized management.
- **Industrial wide temperature**: stable operation from -20℃ ~ +60℃, metal fanless enclosure.

## Vendor Information

| Parameter | Value |
|-----------|-------|
| **Company** | SOPHGO |
| **Headquarters** | Beijing, China |
| **Founded** | 2019 |

## Use Cases

- ✅ Edge large-model inference, intelligent security, smart cities, intelligent transportation, industrial quality inspection, multi-stream video structuring
- ❌ Standalone display main controller (no GPU; requires pairing with a main-control SoC)

## Related Cards

- [/docs/cards/others/sophgo-bm1684](/docs/cards/others/sophgo-bm1684) — Third-generation predecessor in the same series
- [/docs/cards/others/sophgo-bm1688](/docs/cards/others/sophgo-bm1688) — Highly integrated edge version in the same series
- [/docs/cards/others/moore-threads-mtt-s5000](/docs/cards/others/moore-threads-mtt-s5000) — Domestic GPU compute card comparison
- [/docs/cards/others/hailo](/docs/cards/others/hailo) — International edge NPU comparison

## References

- [Sophgo BM1684X core board AIO-1684XQ specifications](https://en.sophgo.com/ecology/detail.html?id=42)
- [AIBOX-1684X large-model AI box (Firefly)](https://www.t-firefly.com/product/industry/aibox1684x)
- [Sophgo BM1684X technical parameters and architecture analysis (IOTDT)](https://iotdt.com/news/xingyezixun/1019.html)
