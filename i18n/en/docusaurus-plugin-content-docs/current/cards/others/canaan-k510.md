---
id: canaan-k510
title: "Canaan Kendryte K510"
description: "Canaan Kendryte K510: a tri-core RISC-V edge AI SoC with about 3 TOPS KPU on 28nm, for on-device imaging and voice, delivering 3× the K210's performance."
keywords: [Canaan, K510, Canaan, Kendryte, RISC-V, KPU, 3 TOPS, edge AI]
vendor: others
vendor_full: "Canaan Inc."
series: "Kendryte (Kanzhi) Series"
release_date: "2021"
status: "Mass production"
---

# Canaan Kendryte K510

## Product Overview

The **Kendryte K510** is the **second-generation edge AI chip** released by Canaan Inc. in **July 2021** (at the World Artificial Intelligence Conference), positioned for the mid-to-high-end edge inference market. Compared with the K210, its bus architecture, IP cores, and video subsystem were comprehensively redesigned, and officially it delivers **3×** the K210's performance.

The K510 carries an upgraded **KPU2.0** (General Neural Network Engine, GNNE) that concentrates on breaking through the "memory wall" and "performance wall", providing about **3 TOPS** of compute; it also integrates a new ISP (2D/3D noise reduction, WDR, fisheye correction), H.264 encoding, and Gigabit Ethernet, targeting drone aerial photography, HD video conferencing, robotics, assisted driving, and industrial/professional cameras.

## Core Specifications

| Parameter | Value |
|------|------|
| **Architecture** | Tri-core 64-bit RISC-V (2×@800MHz + 1×DSP @800MHz) + KPU (GNNE) + FFT/VAD |
| **Process Node** | 28nm |
| **FP16 / BF16 Compute** | Not disclosed |
| **INT8 Compute** | About 3 TOPS (KPU/GNNE peak) |
| **FP32 Compute** | Not disclosed |
| **Memory Capacity** | 1.5MB on-chip SRAM (1MB + 512KB) + external LPDDR3/LPDDR4 |
| **Memory Type** | LPDDR3 / LPDDR4 |
| **Memory Bandwidth** | Not disclosed |
| **TDP** | About 2 W (typical) |
| **Interconnect** | MIPI CSI / DSI, Gigabit Ethernet, USB OTG, I2S/I2C/UART/GPIO |
| **Interface** | SoC onboard / dev board |
| **Launch** | 2021-07 |
| **Mass Production/Availability** | Released 2021 (dev board ecosystem followed) |

## Key Features
- **KPU2.0 at about 3 TOPS**: 3× the K210, breaking through the memory/performance walls.
- **New ISP**: 2D/3D noise reduction, WDR wide dynamic range, fisheye correction, hardware 3A.
- **Multimedia**: H.264 encoding at 1080p60, JPEG codec, MIPI CSI/DSI.
- **Multi-framework**: supports TensorFlow, PyTorch, ONNX, TVM, Caffe, and more.
- **Flexible OS**: deployable on bare metal, embedded RTOS, or Linux.
- **About 2W typical power**: balancing performance against edge power constraints.

## Vendor Information
| Item | Details |
|------|------|
| **Company** | Canaan Inc. (Nasdaq: CAN) |
| **Headquarters** | Beijing, China |
| **Founded** | 2013 |

## Use Cases
- ✅ Drone HD aerial photography, HD panoramic video conferencing, robotics, assisted driving, industrial/professional cameras, STEAM education
- ❌ LLM inference, ultra-low-power always-on operation (weaker than the K210's 0.3W)

## Related Cards
- [/docs/cards/others/canaan-k210](/docs/cards/others/canaan-k210) — First generation in the same series (0.8 TOPS)
- [/docs/cards/others/hailo](/docs/cards/others/hailo) — International edge NPU comparison
- [/docs/cards/others/moore-threads-mtt-s5000](/docs/cards/others/moore-threads-mtt-s5000) — Chinese GPU compute card comparison

## References
- [Kendryte K510 tri-core RISC-V AI processor (CNX Software)](https://cnx-software.cn/2021/07/15/kendryte-k510-tri-core-risc-v-ai-processor/)
- [Canaan K510 Datasheet (official PDF)](https://bbs.aw-ol.com/assets/uploads/files/1642150340131-k510_full-datasheet.pdf)
- [Kendryte K510 announcement (CNX Software, English)](https://www.cnx-software.com/2021/07/09/kendryte-k510-tri-core-risc-v-ai-processor-3-tops/?amp=1)
