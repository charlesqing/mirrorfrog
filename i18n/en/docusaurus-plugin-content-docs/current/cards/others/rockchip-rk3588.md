---
id: rockchip-rk3588
title: "Rockchip RK3588"
description: "The Rockchip RK3588 is an 8nm octa-core AIoT SoC with a 6 TOPS NPU (INT8) and 8K video codec, the mainstay of edge boxes and development boards."
keywords: [Rockchip, RK3588, Rockchip, AIoT, 6 TOPS, NPU, 8K, edge box]
vendor: others
vendor_full: "Rockchip"
series: "RK35 Series"
release_date: "2022"
status: "Mass production"
---

# Rockchip RK3588

## Product Overview

The **RK3588** is Rockchip's **flagship AIoT application processor SoC**, built on an **advanced 8nm process**, integrating an octa-core CPU of quad-core Cortex-A76 + quad-core Cortex-A55, a Mali-G610 MC4 GPU, and a **6 TOPS tri-core in-house NPU**. Released in **late 2021 and in mass production in 2022**, its "CPU+GPU+NPU+VPU" four-in-one architecture has made it the mainstay chip for edge boxes, development boards (Orange Pi, Firefly, etc.), and industrial HMIs.

The RK3588 supports **8K@60fps video decoding, 8K@30fps encoding**, and a **32MP ISP (HDR/3DNR)**. The NPU supports INT4/INT8/INT16/FP16/BF16/TF32 mixed precision and can run YOLO, segmentation, OCR, and lightweight large models. It is positioned as an "all-round main controller" and is often combined with dedicated AI accelerator chips (such as the BM1684X) in heterogeneous solutions.

## Core Specifications

| Parameter | Value |
|-----------|-------|
| **Architecture** | Octa-core 64-bit (4×Cortex-A76 + 4×Cortex-A55) + Mali-G610 MC4 + tri-core in-house NPU |
| **Process Node** | 8nm |
| **FP16 / BF16 Compute** | Supports FP16/BF16 (NPU mixed precision; specific TFLOPS not broken out, estimated at about the 3 TFLOPS level) |
| **INT8 Compute** | 6 TOPS |
| **FP32 Compute** | Not disclosed (GPU counted separately, not an NPU metric) |
| **Memory Capacity** | Up to 32GB (LPDDR4 / LPDDR4X / LPDDR5) |
| **Memory Type** | LPDDR4 / LPDDR4X / LPDDR5 |
| **Memory Bandwidth** | Not disclosed |
| **TDP** | About 5–8 W (system level, depending on configuration) |
| **Interconnect** | PCIe 3.0/2.0, SATA3.0, USB3.1 Type-C, Gigabit Ethernet, eDP/DP/HDMI2.1/MIPI |
| **Interface** | SoC on-board (development board / edge box) |
| **Launch** | Late 2021 (release) / 2022 (mass production) |
| **Mass Production/Availability** | Mass production in 2022 |

## Key Features

- **6 TOPS tri-core NPU**: supports INT4/INT8/INT16/FP16/BF16/TF32 mixed precision.
- **8K multimedia**: 8K@60fps decoding, 8K@30fps encoding, multi-screen heterogeneous display.
- **32MP ISP**: HDR, 3DNR, multi-camera input (MIPI CSI-2 + DVP + HDMI RX).
- **Rich high-speed interfaces**: PCIe, Type-C, SATA, Gigabit Ethernet, easy to expand.
- **Dual OS**: Android and Linux, mature ecosystem with many development boards.
- **High energy efficiency**: 8nm process, better edge-scenario energy efficiency than traditional x86 solutions.

## Vendor Information

| Parameter | Value |
|-----------|-------|
| **Company** | Rockchip Electronics Co., Ltd. (Rockchip) |
| **Headquarters** | Fuzhou, China |
| **Founded** | 2001 |

## Use Cases

- ✅ Edge AI boxes, 8K multimedia terminals, industrial HMIs, smart cockpits, ARM PCs, multi-screen display
- ❌ Data center training, ultra-high-density (>16-channel) video analytics (weaker than the dedicated AI chip BM1684X)

## Related Cards

- [/docs/cards/others/rockchip-rk3576](/docs/cards/others/rockchip-rk3576) — Series mid-range (6 TOPS low power)
- [/docs/cards/others/hailo](/docs/cards/others/hailo) — International edge NPU comparison
- [/docs/cards/others/moore-threads-mtt-s5000](/docs/cards/others/moore-threads-mtt-s5000) — Domestic GPU compute card comparison

## References

- [Rockchip RK3588 product page (official)](https://www.rock-chips.com/a/cn/product/RK35xilie/2022/0926/1656.html)
- [Rockchip RK3588 English specifications (official)](https://www.rock-chips.com/a/en/products/RK35_Series/2022/0926/1660.html)
- [RK3588 product overview (rockchips.net)](https://www.rockchips.net/product/rk3588)
