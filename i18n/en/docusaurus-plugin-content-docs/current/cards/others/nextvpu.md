---
id: nextvpu
title: "NextVPU N Series VPU (Visual AI)"
description: "The NextVPU N series visual VPU (CVKit AI core) is a low-power domestic visual AI chip delivering up to 2.4 TOPS INT8 / 1.2 TOPS FP16, targeting security, robotics, automotive, and consumer AI cameras."
keywords: [NextVPU, NextVPU, Qilin, Orion, VPU, visual NPU, CVKit, 2.4 TOPS, low power, security]
vendor: others
vendor_full: "Shanghai NextVPU Technology Co., Ltd."
series: "N / D / V Series"
release_date: "2020"
status: "Mass production"
---

# NextVPU N Series VPU (Visual AI)

## Product Overview

**NextVPU** is an AI computer vision chip company headquartered in Zhangjiang, Shanghai, founded around 2016, dedicated to giving "vision" capabilities to devices such as robots, drones, AGVs, vehicles, and smart home products. Its core products are **VPUs (Vision Processing Units)** built on the self-developed **CVKit™ AI compute core**, emphasizing chip utilization in terms of "actual frames processed per TOPS, actual performance per watt, and inference accuracy" rather than nominal compute.

NextVPU has released the **N series (consumer/security AI cameras), D series (3D vision/SLAM), and V series (automotive)** vision chips. The N series is based on a new-generation multi-core architecture, offering 8M/4M/2M pixel-level image processing respectively, with peak compute of **2.4 TOPS INT8 / 1.2 TOPS FP16**, positioned as low-power high-performance SoCs. Some reports refer to NextVPU's vision chip product lines as the "Qilin" and "Orion" series (apparently early product codenames, not fully verified).

The company completed a RMB 200 million Series D funding round in 2023, and its chips are shipping in volume across industrial, automotive, and consumer electronics scenarios, achieving domestic substitution of products from overseas giants.

## Core Specifications

| Parameter | Value |
|-----------|-------|
| **Architecture** | CVKit™ AI compute core (vision NPU, multi-core heterogeneous vision SoC) |
| **Process Node** | Not disclosed |
| **FP16 / BF16 Compute** | **1.2 TOPS** (FP16, N series top specification) |
| **INT8 Compute** | **2.4 TOPS** (INT8, N series top; N163 2.4 / N161 1.2 / N160 1.0 TOPS) |
| **FP32 Compute** | Not disclosed |
| **Memory Capacity** | Built-in 1Gbit DDR3L (integrated packaging on some models) |
| **Memory Type** | DDR3L |
| **Memory Bandwidth** | Not disclosed |
| **TDP** | Not disclosed (low-power positioning; specific value not officially broken out) |
| **Interconnect** | Not disclosed |
| **Interface** | MIPI / DVP image interfaces, USB2.0, 100M Ethernet, SDIO, PWM, SPI, I2C, etc. (SoC) |
| **Launch** | 2020 (N series launch, specific month not disclosed) |
| **Mass Production/Availability** | In mass production (volume shipments across industrial/automotive/consumer electronics) |

> **Note**: The process node, FP32, and specific TDP values are not officially disclosed and are marked "Not disclosed". The "Qilin/Orion" series names appear in some sources as suspected early codenames; this card follows the official N/D/V series. "2.4 TOPS INT8 / 1.2 TOPS FP16" is the N series top specification (CVKit™ core); the compute tiers across models (N163/N161/N160) are 2.4/1.2/1.0 TOPS.

## Key Features

- **Self-developed CVKit™ high-efficiency vision core**: industry-leading actual processing frame rates and per-watt performance, emphasizing chip utilization over nominal compute.
- **High-quality ISP**: built-in 3D noise reduction, dynamic contrast enhancement, and cutting-edge HDR, suited to harsh lighting such as low light, compatible with MIPI/DVP and global/rolling shutter sensors.
- **Full precision coverage**: supports FP16 / INT8 / INT4, meeting varied precision needs.
- **Low-power SoC form factor**: aimed at endpoint cameras, robots, and vehicles, with built-in DDR reducing external components.
- **One-stop development**: provides the InferStudio development platform with "one-click" evaluation and porting for mainstream algorithm frameworks.

## Vendor Information

| Parameter | Value |
|-----------|-------|
| **Company** | Shanghai NextVPU Technology Co., Ltd. (NextVPU) |
| **Headquarters** | Shanghai, China (Zhangjiang Science City IC Industrial Park) |
| **Founded** | 2016 (founder Feng Xinpeng, CTO Zhou Ji; cumulative funding of about RMB 500 million) |

## Use Cases

- ✅ **Consumer/professional security AI cameras**: 8M/4M/3M pixel-level intelligent vision
- ✅ **Robot 3D vision and SLAM** (D series), automotive CMS electronic mirrors (V series)
- ✅ **Low-power endpoint vision inference**: smart home, drones, AGVs
- ❌ **Data center high-compute training/inference** (endpoint low-power VPU positioning, limited compute)
- ❌ **General-purpose GPU computing** (vision-dedicated NPU, not a general-purpose compute card)

## Related Cards

- [TsingMicro TX81](/docs/cards/others/tsingmicro-tx81) — Domestic reconfigurable/novel architecture comparison
- [Vastai VA10](/docs/cards/others/vastai-va10) — Domestic cloud vision inference accelerator card
- [Lightmatter Envise](/docs/cards/others/lightmatter-envise) — International compute-in-memory/novel architecture route comparison

## References

- [NextVPU N series chip official product page](https://www.nextvpu.com/?p=371)
- [NextVPU completes RMB 200 million Series D funding (China Security and Protection Association)](https://news.21csp.com.cn/c13/202312/11422537.html)
- [NextVPU launches N series chips, security as a key application (Security Online)](https://www.anfang.cn/zixun/32542.html)
