---
id: sophgo-bm1688
title: "Sophgo BM1688"
description: "Sophgo's highly integrated edge TPU BM1688: 16 TOPS INT8 (32 TOPS INT4), 4 TFLOPS FP16/BF16, for edge large models and multi-stream vision."
keywords: [Sophgo, BM1688, SOPHGO, edge AI, 16 TOPS, INT8, edge large model, security]
vendor: others
vendor_full: "SOPHGO"
series: "SOPHON BM Series"
release_date: "2023"
status: "Mass production"
---

# Sophgo BM1688

## Product Overview

The **BM1688** is the **highly integrated edge TPU processor** released by SOPHGO in **2023**, positioned as the "edge intelligence heart" for deep learning and machine vision. Compared with the BM1684X, it further strengthens **integration** and **professional imaging capability**, integrating an 8-core ARM Cortex-A53, a proprietary NPU, a professional security ISP, and a video codec unit on a single chip.

The BM1688 delivers **16 TOPS INT8 / 32 TOPS INT4 / 4 TFLOPS FP16-BF16 / 0.5 TFLOPS FP32** of compute, supports intelligent analysis of 16 HD video streams, 16-channel hardware decoding, and 10-channel hardware encoding, and integrates a 4Kp60 professional security ISP (with hardware acceleration for binocular depth, image stitching, fisheye expansion, etc.). It can run edge large models such as ChatGLM3-6B, Qwen-7B, and Qwen2.5-VL-3B locally, making it ideal for smart cameras, edge boxes, and micro-servers.

## Core Specifications

| Parameter | Value |
|-----------|-------|
| **Architecture** | Sophgo highly integrated edge TPU, integrating 8-core ARM Cortex-A53 @ 1.6GHz + proprietary NPU |
| **Process Node** | Not disclosed (estimated 12nm-class, same generation as the BM1684X) |
| **FP16 / BF16 Compute** | 4 TFLOPS |
| **INT8 Compute** | 16 TOPS (up to 32 TOPS at INT4) |
| **FP32 Compute** | 0.5 TFLOPS |
| **Memory Capacity** | 8 / 16GB (LPDDR4/LPDDR4X 64-bit @ 4266 Mbps, also supports DDR4 2×32-bit) |
| **Memory Type** | LPDDR4 / LPDDR4X |
| **Memory Bandwidth** | Not disclosed |
| **TDP** | Not disclosed (paired whole devices typically draw about 7.2 W; lower for the chip alone) |
| **Interconnect** | Dual Gigabit Ethernet, PCIe, USB, HDMI, MIPI-CSI, CAN FD |
| **Interface** | SoC on-board (micro-server SE9 / module) |
| **Launch** | 2023 |
| **Mass Production/Availability** | Released and mass-produced in 2023 |

## Key Features

- **Edge large models**: supports local inference of ChatGLM3-6B, Qwen-7B, Qwen2.5-VL-3B, and more.
- **Professional security ISP**: 4Kp60 image processing with hardware acceleration for binocular depth, stitching, and fisheye expansion.
- **Multi-stream video**: 16-channel HD intelligent analysis, 16-channel decoding, 10-channel encoding.
- **Full precision support**: INT4 / INT8 / FP16-BF16 / FP32 mixed precision.
- **Rich peripherals**: PCIe / USB / HDMI / MIPI-CSI / CAN FD, convenient secondary development.
- **Full-stack frameworks**: mainstream frameworks such as PyTorch and TensorFlow, with the SophonSDK one-stop toolchain.

## Vendor Information

| Parameter | Value |
|-----------|-------|
| **Company** | SOPHGO |
| **Headquarters** | Beijing, China |
| **Founded** | 2019 |

## Use Cases

- ✅ Smart cameras, edge boxes, micro-servers, smart cities, intelligent transportation, private large-model deployment
- ❌ Large-model training, ultra-high-density (>16-channel) concurrent analytics (weaker than the BM1684X)

## Related Cards

- [/docs/cards/others/sophgo-bm1684x](/docs/cards/others/sophgo-bm1684x) — High-compute version in the same series
- [/docs/cards/others/sophgo-bm1684](/docs/cards/others/sophgo-bm1684) — Predecessor in the same series
- [/docs/cards/others/moore-threads-mtt-s5000](/docs/cards/others/moore-threads-mtt-s5000) — Domestic GPU compute card comparison
- [/docs/cards/others/hailo-15](/docs/cards/others/hailo-15) — Smart camera SoC comparison

## References

- [Sophgo BM1688 product introduction (official)](https://www.sophgo.com/sophon-u/product/introduce/bm1688.html)
- [16 TOPS AI processor BM1688 (Tianqi AIBOX-1688)](https://www.t-firefly.com.cn/product/industry/aibox1688)
- [Sophgo company history (BM1688 released in 2023)](https://www.sophgo.com/about-us/index.html)
