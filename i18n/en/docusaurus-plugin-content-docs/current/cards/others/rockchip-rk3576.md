---
id: rockchip-rk3576
title: "Rockchip RK3576"
description: "The Rockchip RK3576 is a 2024 second-generation 8nm AIoT SoC with a 6 TOPS in-house NPU (INT8) and 8K30 decoding, a mid-range AIoT energy-efficiency benchmark."
keywords: [Rockchip, RK3576, Rockchip, AIoT, 6 TOPS, NPU, mid-range, 2024]
vendor: others
vendor_full: "Rockchip"
series: "RK35 Series"
release_date: "2024"
status: "Mass production"
---

# Rockchip RK3576

## Product Overview

The **RK3576** is the **second-generation 8nm high-performance, low-power AIoT application processor SoC** launched by Rockchip in **2024** (mass production in September 2024). It adopts an octa-core 64-bit architecture (4×Cortex-A72 @2.2GHz + 4×Cortex-A53 @1.8GHz), integrating a Mali-G52 MC3 GPU and a **6 TOPS in-house NPU** — the same NPU compute specification as the flagship RK3588 — but positions itself for mid-to-high-end edge devices with better energy efficiency and scenario-oriented design.

The RK3576 supports 8K@30fps decoding, 4K@60fps encoding, and a 16MP ISP. The NPU supports INT4/INT8/INT16/FP16/BF16/TF32 mixed precision and is specially optimized for 2B-parameter multimodal models (such as Qwen2-VL-2B), reaching token generation speeds of 10+ per second. Its NPU draws only about 3.2W at full load, about 22% lower than the RK3588, making it better suited to battery-powered and mobile endpoint devices.

## Core Specifications

| Parameter | Value |
|-----------|-------|
| **Architecture** | Octa-core 64-bit (4×Cortex-A72 + 4×Cortex-A53) + Mali-G52 MC3 + in-house NPU |
| **Process Node** | Second-generation 8nm |
| **FP16 / BF16 Compute** | Supports FP16/BF16 (NPU mixed precision; specific value not broken out) |
| **INT8 Compute** | 6 TOPS (INT8; supports sparse acceleration) |
| **FP32 Compute** | Not disclosed |
| **Memory Capacity** | Dual-channel 32-bit LPDDR4/LPDDR4x-4266 / LPDDR5-4800 |
| **Memory Type** | LPDDR4 / LPDDR4X / LPDDR5 |
| **Memory Bandwidth** | Not disclosed |
| **TDP** | About 3.2 W at full NPU load (lower for the whole device) |
| **Interconnect** | PCIe 2.1/SATA3, USB3.0, dual RGMII, CAN FD, MIPI CSI/DSI, HDMI2.1/eDP/DP |
| **Interface** | SoC on-board (core board / development board) |
| **Launch** | 2024-09 (mass production) |
| **Mass Production/Availability** | Mass production in 2024-09 |

## Key Features

- **6 TOPS in-house NPU**: supports INT4/INT8/INT16/FP16/BF16/TF32, with a dynamic sparse acceleration engine.
- **Mid-range energy-efficiency benchmark**: only 3.2W at full NPU load, about 22% lower than the RK3588.
- **8K multimedia**: 8K@30fps decoding, 4K@60fps encoding, multi-screen heterogeneous display (different sources).
- **16MP ISP**: HDR (up to 120dB), 3DNR, multiple MIPI CSI inputs.
- **2B model optimization**: dedicated acceleration for lightweight large models such as Qwen2-VL-2B.
- **Rich interfaces**: PCIe/SATA/USB3.0/CAN FD, standard Android/Linux SDK, domestic OS support.

## Vendor Information

| Parameter | Value |
|-----------|-------|
| **Company** | Rockchip Electronics Co., Ltd. (Rockchip) |
| **Headquarters** | Fuzhou, China |
| **Founded** | 2001 |

## Use Cases

- ✅ Mid-range AIoT, edge computing, industrial control, smart cockpits, service robots, battery-powered terminals, conference whiteboards
- ❌ Extremely high-density video analytics (weaker than dedicated AI accelerator chips)

## Related Cards

- [/docs/cards/others/rockchip-rk3588](/docs/cards/others/rockchip-rk3588) — Series flagship (same compute)
- [/docs/cards/others/hailo](/docs/cards/others/hailo) — International edge NPU comparison
- [/docs/cards/others/moore-threads-mtt-s5000](/docs/cards/others/moore-threads-mtt-s5000) — Domestic GPU compute card comparison

## References

- [Rockchip RK3576 product page (official)](https://www.rock-chips.com/a/en/products/RK35_Series/2024/1212/2033.html)
- [RK3576 processor (Baidu Baike)](https://baike.baidu.com/item/RK3576%E5%A4%84%E7%90%86%E5%99%A8/67602810)
- [RK3576 Brief Datasheet V1.2 (official PDF)](https://www.rock-chips.com/uploads/pdf/2024.3.18/191/RK3576%20Brief%20Datasheet%20V1.2-20240311.pdf)
