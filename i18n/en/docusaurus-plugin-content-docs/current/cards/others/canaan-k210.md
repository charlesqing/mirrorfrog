---
id: canaan-k210
title: "Canaan Kendryte K210"
description: "Canaan Kendryte K210: the world's first mass-produced RISC-V edge AI SoC, dual-core 64-bit + KPU, about 0.8 TOPS at sub-watt 0.3W, with on-device audio-visual processing."
keywords: [Canaan, K210, Canaan, Kendryte, RISC-V, KPU, 0.8 TOPS, edge AI, dev board]
vendor: others
vendor_full: "Canaan Inc."
series: "Kendryte (Kanzhi) Series"
release_date: "2018"
status: "Mass production"
---

# Canaan Kendryte K210

## Product Overview

The **Kendryte K210** is the **world's first mass-produced commercial edge AI chip based on the RISC-V architecture**, released on **September 6, 2018** by the Kendryte team under Canaan Inc. Fully developed in-house, it integrates a vision neural network accelerator **KPU** and an audio processing unit **APU**, and was among the first edge SoCs to achieve "audio-visual in one", providing about 1 TOPS of compute (KPU peak 0.8 TOPS) at 0.3W.

Thanks to its open-source ecosystem (Sipeed Maix series dev boards, MaixPy MicroPython), the K210 became a **staple of edge AI and embedded education**, widely used in smart door locks, smart metering, facial access control, agricultural monitoring, and more.

> **Follow-up note**: According to Jon Peddie Research, Canaan **shut down the Kendryte AI division on June 23, 2025**. The K210 chip itself remains a mass-produced historical product with an active dev board ecosystem, but the vendor's AI business has been terminated.

## Core Specifications

| Parameter | Value |
|------|------|
| **Architecture** | Dual-core 64-bit RISC-V (@400MHz, each with FPU) + KPU + APU + FFT engine |
| **Process Node** | 28nm (TSMC) |
| **FP16 / BF16 Compute** | Not disclosed |
| **INT8 Compute** | About 0.8 TOPS (KPU peak; some dev boards label 0.23 TOPS of multiply-operator compute) |
| **FP32 Compute** | Not disclosed (16-bit fixed-point multiply at about the 0.3 TOPS level) |
| **Memory Capacity** | 8MB on-chip SRAM (no external memory required) |
| **Memory Type** | On-chip SRAM |
| **Memory Bandwidth** | Not disclosed |
| **TDP** | About 0.3 W (typical), peak < 1 W |
| **Interconnect** | DVP camera, I2S/I2C/UART/GPIO, FPIOA fully programmable IO |
| **Interface** | SoC onboard / dev board (Maix series) |
| **Launch** | 2018-09 |
| **Mass Production/Availability** | In mass production 2018 |

## Key Features
- **World's first RISC-V edge AI chip**: fully proprietary IP, a precedent for mass commercial production.
- **Audio-visual in one**: KPU vision + APU 8-microphone-array voice; sees and hears on a single chip.
- **8MB on-chip SRAM**: model weights reside on-chip, no external DDR required.
- **Sub-watt power**: 0.3W typical, on par with MCUs, suited to battery/always-on scenarios.
- **Industrial temperature range**: -40°C ~ +125°C, enabling automotive/industrial deployment.
- **FPIOA programmable IO**: any peripheral mapped to any pin, simplifying board design.
- **Active ecosystem**: MaixPy (MicroPython) + C SDK, TensorFlow/Keras/Darknet converted to K-Model.

## Vendor Information
| Item | Details |
|------|------|
| **Company** | Canaan Inc. (Nasdaq: CAN) |
| **Headquarters** | Beijing, China (offices in Hangzhou and Singapore) |
| **Founded** | 2013 |

## Use Cases
- ✅ Edge vision/hearing, smart door locks, smart metering, educational dev boards, service robots, agricultural/energy monitoring
- ❌ LLM inference, high-resolution multi-stream video, high-performance general-purpose computing

## Related Cards
- [/docs/cards/others/canaan-k510](/docs/cards/others/canaan-k510) — Next generation in the same series (3 TOPS)
- [/docs/cards/others/hailo](/docs/cards/others/hailo) — International edge NPU comparison
- [/docs/cards/others/moore-threads-mtt-s5000](/docs/cards/others/moore-threads-mtt-s5000) — Chinese GPU compute card comparison

## References
- [K210 puts RISC-V AI on the edge in 2018 (Jon Peddie Research)](https://www.jonpeddie.com/news/k210-puts-risc-v-ai-on-the-edge-in-2018)
- [Canaan releases its proprietary Kendryte K210 chip (China Daily)](https://tech.chinadaily.com.cn/a/201907/16/WS5d2d7cd2a310a6dd41e862fd.html)
- [CICC: Canaan's proprietary AI chip draws attention (Sina Finance)](https://finance.sina.com.cn/stock/relnews/hk/2020-07-10/doc-iirczymm1596591.shtml)
