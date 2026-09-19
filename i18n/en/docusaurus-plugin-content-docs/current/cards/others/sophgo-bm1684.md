---
id: sophgo-bm1684
title: "Sophgo BM1684"
description: "The Sophgo (formerly Bitmain Sophon) BM1684 edge AI inference processor: 12nm, 17.6 TOPS INT8, 12GB LPDDR4X, focused on video structuring and multi-stream vision analytics."
keywords: [Sophgo, BM1684, SOPHGO, edge AI, video inference, 17.6 TOPS, INT8, security]
vendor: others
vendor_full: "SOPHGO"
series: "SOPHON BM Series"
release_date: "2019"
status: "Mass production"
---

# Sophgo BM1684

## Product Overview

The **BM1684** is the **third-generation intelligent vision deep learning processor** launched by SOPHGO (formerly Bitmain's Sophon AI business), released and mass-produced in **2019**. It adopts Sophgo's proprietary TPU (Tensor Processor) architecture, integrating an 8-core ARM Cortex-A53 and 64 NPU cores, and is a high-efficiency inference chip for **edge computing** and **video structuring** scenarios.

At launch, the BM1684 targeted scenarios requiring high-density video analytics such as **smart cities, intelligent security, and intelligent transportation**, with typical applications including facial recognition, license plate recognition, behavior analysis, and transparent kitchen monitoring. With its 12nm process and typical power of about 16W, it can run stably for long periods under fanless or passive cooling, making it one of the representative early domestic edge AI inference chips, commonly found in whole-device forms such as Sophgo's SE5 computing box and the EC-1684JD4.

## Core Specifications

| Parameter | Value |
|-----------|-------|
| **Architecture** | Sophgo third-generation proprietary TPU architecture, integrating 8-core ARM Cortex-A53 @ 2.3GHz + 64 NPU cores |
| **Process Node** | 12nm (TSMC) |
| **FP16 / BF16 Compute** | Not disclosed (public materials only disclose integer and single-precision compute) |
| **INT8 Compute** | 17.6 TOPS (up to 35.2 TOPS with Winograd acceleration) |
| **FP32 Compute** | 2.2 TFLOPS |
| **Memory Capacity** | 12GB (on-board) |
| **Memory Type** | LPDDR4X |
| **Memory Bandwidth** | Not disclosed |
| **TDP** | About 16 W (typical power; some whole devices are rated 15W) |
| **Interconnect** | Dual Gigabit Ethernet, multi-chip cascading |
| **Interface** | SoC on-board (computing box / module / micro-server form factors) |
| **Launch** | 2019 |
| **Mass Production/Availability** | Mass production in 2019 |

## Key Features

- **High-density video analytics**: supports simultaneous AI analysis of 16 HD video streams and 32-channel 1080P decoding (H.264/H.265).
- **Mixed precision**: supports FP32 / INT8, with INT8 doubling to 35.2 TOPS under Winograd convolution acceleration.
- **Full-stack frameworks**: native support for PyTorch, TensorFlow, Caffe, MXNet, PaddlePaddle, ONNX, and more.
- **SophonSDK toolchain**: provides compiler, quantization tools, and inference engine, with one-click conversion of models to BModel.
- **Low power, high efficiency**: 17.6 TOPS at a typical 16W, suited to always-on edge deployments.
- **Cloud-edge-device collaboration**: algorithms can be managed uniformly across cloud, edge, and device, with local inference ensuring data privacy and low latency.

## Vendor Information

| Parameter | Value |
|-----------|-------|
| **Company** | SOPHGO (spun off from Bitmain's Sophon AI business in 2019) |
| **Headquarters** | Beijing, China |
| **Founded** | 2019 (the Sophgo company; the BM1684 was developed by Bitmain's Sophon team) |

## Use Cases

- ✅ Video structuring, intelligent security, intelligent transportation, smart cities, industrial quality inspection, edge servers
- ❌ Large-model training, high-concurrency data center inference (compute and memory scale limited)

## Related Cards

- [/docs/cards/others/sophgo-bm1684x](/docs/cards/others/sophgo-bm1684x) — Fourth generation in the same series, double the compute
- [/docs/cards/others/moore-threads-mtt-s5000](/docs/cards/others/moore-threads-mtt-s5000) — Domestic GPU compute card comparison
- [/docs/cards/others/hailo](/docs/cards/others/hailo) — International edge NPU comparison

## References

- [Sophgo BM1684 ecosystem product (EC-1684JD4)](https://sophgo.com/ecology/detail.html?id=34)
- [BM1684 core specifications and industry applications (IOTDT)](https://iotdt.com/news/xingyezixun/1610.html)
