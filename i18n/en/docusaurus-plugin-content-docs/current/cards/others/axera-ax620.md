---
id: axera-ax620
title: "Axera AX620 (AX620A)"
description: "Axera AX620A: a 12nm edge vision AI SoC with 14.4 TOPS INT4 (3.6 TOPS INT8), proprietary AI-ISP and mixed-precision NPU, a regular in smart cameras."
keywords: [Axera, AX620, AX620A, AXERA, edge vision, AI-ISP, 3.6 TOPS, smart camera]
vendor: others
vendor_full: "AXERA (Axera Semiconductor)"
series: "AX620 Series"
release_date: "2021"
status: "Mass production"
---

# Axera AX620 (AX620A)

## Product Overview

**AX620A** (commonly known as AX620) is a **high-compute, high-energy-efficiency, low-power AI SoC** for **smart cities and consumer vision** that Axera (AXERA) taped out and lit up in **July 2021**. It integrates a quad-core ARM Cortex-A7, a proprietary **AI-ISP** (among the first in the industry to apply AI to image signal processing), and a **mixed-precision NPU**. It is positioned slightly below the flagship AX630A (about half the compute) but is deeply optimized for home smart network cameras, access control, and industrial cameras.

The AX620A's NPU provides **14.4 TOPS@INT4 / 3.6 TOPS@INT8** of compute (note: some overviews cite "about 10 TOPS class", which is actually the INT4 figure; the INT8 peak is 3.6 TOPS). It supports up to 4K30fps ISP and 4 camera inputs, achieving extremely high chip efficiency through its two core technologies: "mixed-precision NPU + proprietary AI-ISP".

## Core Specifications

| Parameter | Value |
|------|------|
| **Architecture** | Quad-core ARM Cortex-A7 + proprietary mixed-precision NPU + AI-ISP |
| **Process Node** | 12nm (FinFET, TSMC) |
| **FP16 / BF16 Compute** | Not disclosed |
| **INT8 Compute** | 3.6 TOPS |
| **INT4 Compute** | 14.4 TOPS |
| **FP32 Compute** | Not disclosed |
| **Memory Capacity** | Not disclosed (onboard LPDDR4/LPDDR4X) |
| **Memory Type** | LPDDR4 / LPDDR4X |
| **Memory Bandwidth** | Not disclosed |
| **TDP** | Not disclosed (estimated < 2 W; same-generation AX630A < 3 W) |
| **Interconnect** | MIPI-CSI (multiple lanes), MIPI-DSI, Gigabit Ethernet (RGMII), USB2.0/3.0, I2C/UART/PWM/GPIO |
| **Interface** | SoC onboard (IPC / camera module) |
| **Launch** | 2021-07 (lit up) |
| **Mass Production/Availability** | In mass production 2021–2022 |

## Key Features
- **Proprietary AI-ISP**: full-color imaging in near darkness and low-light noise reduction, delivering clear color images even in near-dark environments.
- **Mixed-precision NPU**: flexible INT4 / INT8 deployment, improving compute utilization and reducing DDR requirements.
- **4K30 ISP**: up to 4K@30fps image processing, 2DOL/3D noise reduction, and vignette compensation.
- **Multi-camera input**: up to 4 cameras and dual 1080p independent displays, suited to differentiated access-control applications.
- **Ultra-low power**: compact package and low power, fitting always-on/battery-powered vision terminals.
- **Dual-market coverage**: a single chip covers both the smart city and consumer IPC markets, reducing overall cost.

## Vendor Information
| Item | Details |
|------|------|
| **Company** | Axera Semiconductor Co., Ltd. (AXERA, 0600.HK) |
| **Headquarters** | Shanghai, China |
| **Founded** | 2019-05 |

## Use Cases
- ✅ Smart cameras/IPC, access control devices, home network cameras, smart cities, industrial cameras
- ❌ LLM inference, multi-stream concurrency above 4K resolution

## Related Cards
- [/docs/cards/others/axera-ax650](/docs/cards/others/axera-ax650) — Same vendor's third-generation high-compute version
- [/docs/cards/others/hailo-15](/docs/cards/others/hailo-15) — Smart camera SoC comparison
- [/docs/cards/others/moore-threads-mtt-s5000](/docs/cards/others/moore-threads-mtt-s5000) — Chinese GPU compute card comparison

## References
- [Axera official website (AXERA)](https://www.axera-tech.com/)
- [Plan B for AI replacing the traditional ISP (eefocus, AX620A specs)](https://m.eefocus.com/e/519594)
- [Axera raises A++ round funding (Sohu, includes AX620A specs)](https://www.sohu.com/a/517490251_121239677)
- [AX620 / AX620A technical specifications (Alldatasheet AI)](https://www.alldatasheetcn.com/ai/ai.jsp?Searchword=AX620)
