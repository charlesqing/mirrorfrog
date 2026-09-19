---
id: blacksesame-a2000
title: "Black Sesame Huashan A2000 (Huashan A2000)"
description: "A Chinese high-compute automotive-grade chip family for physical AI and L3/L4: 7nm, proprietary Jiushao NPU with near-memory computing, hundred-MB-class on-chip cache at 8TB/s, four tiers of equivalent compute at 200/400/700/1000 TOPS, native INT4/INT8/FP8/FP16/FP32 mixed precision, and an ASIL-D three-layer safety architecture."
keywords: [Black Sesame Technologies, Black Sesame Technologies, Huashan A2000, Huashan A2000, Jiushao NPU, near-memory computing, 1000 TOPS, 7nm, L4 autonomous driving, VLA, world model, ASIL-D, FAD2.0]
vendor: others
vendor_full: "Black Sesame Technologies"
series: "Huashan"
release_date: "2024-12"
status: "Released"
---

# Black Sesame Huashan A2000 (Huashan A2000)

## Product Overview

The **Huashan A2000** is a high-compute automotive-grade chip platform from **Black Sesame Technologies (HKEX 02533.HK)** designed for next-generation AI models, and a generational leap beyond the **Huashan A1000**. Its positioning expands from "driving chip" to **"the edge compute foundation of the physical AI era"**, covering edge inference needs across the board from AI-enabled cockpits to **L3/L4 Robotaxi**, and extending into embodied intelligence and general edge AI applications ("starting with the car, but not limited to the car").

**The product history is somewhat unusual, with one naming revision:**

- On **December 30, 2024**, Black Sesame first announced the Huashan A2000 family, then comprising **A2000 Lite / A2000 / A2000 Pro**, corresponding to urban intelligent driving, full-scenario general intelligent driving, and advanced full-scenario general intelligent driving respectively.
- In **January 2025**, the A2000 chip was **successfully taped out**.
- Because its performance and integration touched the red lines of the US Department of Commerce Bureau of Industry and Security (BIS) advanced computing chip export controls, the A2000 underwent an **11-month review by the US Department of Commerce and Department of Defense**, was finally approved in **late 2025**, and on **January 4, 2026** its clearance was publicly announced, permitting global sales and applications; CEO Shan Jizhang called the company the only domestic firm to pass such a review. The key to approval was that the A2000 is an **automotive-grade autonomous-driving-optimized architecture**, lacking the extreme "performance density" and large-scale cluster interconnect bandwidth of data center GPUs, with a civilian automotive end use.
- At **CES 2026 (January 6–9, 2026)**, the A2000 made its public debut and won the **CES 2026 Best Semiconductor Product award**.
- On **January 28, 2026**, the **FAD2.0 open platform** (pre-production grade) built around the A2000 was released.
- On **April 11, 2026** (High-level Forum on Intelligent Electric Vehicle Development) and **April 20**, Shan Jizhang officially announced the **new A2000 family lineup**, with models updated to four tiers: **A2000N / A2000L / A2000U / A2000X**.

**Technical specifications**: The A2000 family took more than three years to develop, using an **advanced 7nm process**, integrating a **multi-core Arm Cortex-A78AE CPU**, a GPU, and the proprietary **Jiushao NPU** and a proprietary high-performance ISP. The Jiushao NPU adopts a "physically unique AI compute design" (large-core architecture) with **no inter-core synchronization overhead**, and natively supports **INT4 / INT8 / FP8 / FP16 / FP32 mixed precision** across the full pipeline — **FP16 models run directly without quantization**; it provides hard acceleration for non-compute operators used by Transformer-style models such as `reshape`, `transpose`, and `grid_sample`, and adjusts the ratio of exponent units to MAC units; it natively supports stochastic rounding. Another core design is **near-memory computing**: it features a **hundred-MB-class NPU-dedicated high-speed on-chip cache with bandwidth up to 8 TB/s**, forming a three-tier memory architecture of "NPU-dedicated cache + intra-core-module shared cache + deeply optimized DDR", greatly reducing latency and power. On the perception side, the ISP supports **4 exposures and 150dB HDR**, with efficient RAW pass-through to the NPU. For functional safety it uses the original **"3L" three-layer isolation architecture** (L1 high-performance compute domain ASIL-B / L2 deterministic safety domain ASIL-D dual-core lockstep / L3 independent safety domain hard isolation) + Safety NPU redundancy checks, meeting **ISO 26262 ASIL-D** overall. The flagship version supports up to **24 cameras** working simultaneously. The companion **BaRT AI toolchain** (based on MLIR) is natively compatible with PyTorch inference APIs and supports automated compilation of Triton custom operators, achieving minute-level ultra-fast compilation.

**Market progress**: The A2000 has won multiple mass-production design wins — on **February 24, 2026**, the joint solution with Guoqi Zhikong won a design win from a leading domestic automaker (covering L2+ through L3 full scenarios, with the first models expected to enter mass production within 2026); the company has established deep partnerships with five of the top six domestic automakers by sales, with head automakers such as **BYD** expected to adopt it at volume in 2026. Officially, the **A2000 series will formally start mass-production vehicle integration in the second half of 2026**. Black Sesame's business grew more than 75% in 2025, with a 2026 full-year chip shipment target far exceeding 10 million units.

## Core Specifications

| Parameter | Value |
|------|------|
| **Architecture** | Proprietary **Jiushao NPU** large-core architecture + near-memory computing; multi-core Arm Cortex-A78AE CPU + GPU + DSP + proprietary ISP |
| **Process Node** | **7nm** advanced process |
| **FP16 / BF16 Compute** | **Not disclosed** (architecture natively supports FP16 and runs without quantization, but no official FP16 TFLOPS figure is published) |
| **INT8 Compute** | **Four tiers of equivalent compute: A2000N 200 TOPS / A2000L 400 TOPS / A2000U 700 TOPS / A2000X 1000 TOPS** |
| **FP32 Compute** | Not disclosed (FP32 precision supported across the pipeline; no compute figure published) |
| **Supported Precisions** | INT4 / INT8 / INT16 / FP8 / FP16 / FP32 mixed precision, with native stochastic rounding |
| **Memory Capacity** | Not disclosed (selected by the domain controller / compute platform solution) |
| **Memory Type** | Not disclosed (DDR bandwidth utilization deeply optimized; official generation not disclosed) |
| **Memory Bandwidth** | Not disclosed (**on-chip cache bandwidth 8 TB/s, hundred-MB-class capacity**) |
| **TDP** | **Not disclosed**. > Officially only the 200 TOPS-tier version's **energy efficiency of about 3 TOPS/W** is disclosed, from which power for that tier is **estimated** at around 60–70W; power for higher tiers is not published, **pending official confirmation** |
| **Interconnect** | **High-speed coherent inter-chip interconnect supported**, with multi-chip cooperative scaling to meet L4-class (>2000 TOPS) compute needs (specific bandwidth undisclosed) |
| **Interface** | SoC onboard; the A2000 compute platform provides both desktop-grade and automotive-grade interfaces with an expandable core board design; supports 24+ cameras and 4 10-Gigabit Ethernet ports |
| **ISP** | Proprietary high-performance ISP, 4 exposures, **150dB HDR**, RAW pass-through to NPU |
| **Functional Safety** | **ISO 26262 ASIL-D**; original "3L" three-layer isolation safety architecture (L1 ASIL-B / L2 ASIL-D dual-core lockstep / L3 hard-isolated independent safety domain) + Safety NPU redundancy checks |
| **Toolchain** | **BaRT** (MLIR-based, four modules: Model Compiler / DAL / HAPPY / Runtime), natively compatible with PyTorch inference APIs, supporting automated compilation of Triton custom operators and full-flow PTQ/QAT quantization |
| **Launch** | **2024-12** (family first announced 2024-12-30); public debut at CES 2026-01; **new family lineup announced 2026-04** |
| **Mass Production/Availability** | Tape-out successful 2025-01; passed US export review 2026-01; **mass-production vehicle integration starting second half of 2026** (multiple design wins, first models expected in mass production within 2026) |

> ⚠️ **Important specification notes and uncertainty (pending official confirmation)**
>
> 1. **Compute figure discrepancy**: The official April 2026 family lineup clearly defines four tiers of **200 / 400 / 700 / 1000 TOPS equivalent compute**. But the Baidu Baike entry "Huashan A2000", based on CES 2026 coverage, records the A2000 single chip at **200 TOPS with 3 TOPS/W energy efficiency** (which actually corresponds to the entry tier of the family, later the A2000N); additionally, some early 2023 broker reports described the "Huashan A2000" as "China's first 250T high-compute chip meeting ASIL-B". These figures come from product plans at different points in time and **should not be mixed**. This card follows the **official April 2026 family lineup**.
> 2. **Naming change**: The first announcement in 2024-12 used **A2000 Lite / A2000 / A2000 Pro**; updated in 2026-04 to **A2000N / A2000L / A2000U / A2000X**. The official mapping between the two naming schemes was not given item by item; it is **inferred** that Lite≈N, A2000≈L/U, Pro≈X, **pending official confirmation**.
> 3. **"Equivalent compute" rather than physical TOPS**: Officially the term "equivalent compute" is used, emphasizing the Jiushao architecture's higher effective throughput at the same physical compute, so these figures **should not be directly compared with competitors' physical peak TOPS**.
> 4. **Power, memory type and bandwidth, transistor count, and CPU core counts are not published per tier**; this card marks them "Not disclosed" or notes them as estimates throughout.

### Family Models (official lineup as of 2026-04)

| Model | Equivalent Compute | Positioning | Typical Solution |
|------|----------|------|----------|
| **A2000N** | 200 TOPS | Cockpit AI enablement / lightweight assisted driving | Cockpit AI Box, high-performance large model inference |
| **A2000L** | 400 TOPS | Cost-effective urban NOA chip | Multi-sensor fusion urban NOA |
| **A2000U** | 700 TOPS | Full-scenario general intelligent driving chip (new-generation compute platform) | "Smart" assisted driving system based on the new AI paradigm |
| **A2000X** | **1000 TOPS** | Advanced full-scenario general intelligent driving (flagship compute platform) | Human-like AI driver, L3 autonomous driving, Robotaxi |

## Key Features

- **Jiushao NPU large-core architecture**: physically unique AI compute design with **no inter-core synchronization overhead**; models run directly, avoiding the synchronization losses of traditional multi-core architectures and achieving high effective compute
- **Full-pipeline mixed precision without quantization**: natively supports INT4/INT8/FP8/FP16/FP32 — **FP16 models run directly without quantization**, avoiding quantization precision loss; native stochastic rounding support
- **Near-memory computing + three-tier memory architecture**: **hundred-MB-class NPU-dedicated on-chip cache at 8 TB/s bandwidth**; data need not be frequently moved to external memory, greatly reducing latency and power
- **Dedicated Transformer / VLA / world model optimization**: hard acceleration for non-compute operators such as reshape/transpose/grid_sample, with adjusted ratios of exponent units to MAC units
- **"3L" three-layer isolation safety architecture**: L1 high-performance compute domain (ASIL-B) / L2 deterministic safety domain (ASIL-D dual-core lockstep, independent clock and power) / L3 hard-isolated independent safety domain (logical independence comparable to an external MCU); L2↔L3 can dynamically switch between "maximum safety mode" and "high-cooperation mode"; **ASIL-D** overall
- **Industry's highest-performance proprietary ISP**: 4 exposures, 150dB HDR, stable imaging in extreme conditions such as backlight/night/rain-snow glare, RAW pass-through to NPU
- **High-speed coherent inter-chip interconnect**: scalable to support L4-class >2000 TOPS compute needs and long-term compute evolution
- **Passed US BIS export review**: approved in late 2025 after 11 months, able to use overseas advanced process capacity and avoid domestic 7nm automotive capacity bottlenecks
- **BaRT toolchain**: MLIR-based, natively compatible with PyTorch inference APIs, supporting automated compilation of Triton custom operators and minute-level compilation; completed the first model deployment in 10 days
- **FAD2.0 open platform**: built around the A2000 high-compute board, opening Linux kernel and driver source code (with real-time patches), integrating Classic AUTOSAR and Hypervisor+RTOS, with desktop-grade + automotive-grade dual interfaces
- **CES 2026 Best Semiconductor Product award**

## Vendor Information

| Item | Details |
|------|------|
| **Company** | Black Sesame Technologies Inc. (HKEX **02533.HK**) |
| **Headquarters** | Shanghai, China (offices in Silicon Valley, Chengdu, Shenzhen, Wuhan, Chongqing, and Singapore) |
| **Founded** | 2016 |
| **Founder / CEO** | Shan Jizhang |
| **Core Proprietary IPs** | Jiushao NPU, Xingmou / NeuralIQ ISP |
| **Product Lines** | Huashan series (A500 / A1000 / A1000L / A1000 Pro / A2000 family), Wudang series (cross-domain), SESAMEX embodied AI compute platform |
| **Partnership Progress** | Deep partnerships with five of the top six domestic automakers by sales; BYD and others expected to adopt at volume in 2026; partnerships with Guoqi Zhikong, Nullmax, Midea (Meichuangxi), Zhengxing Innovation, and others |
| **Business Data** | Business growth over 75% in 2025; 2026 full-year chip shipment target far exceeding 10 million units |
| **Website** | https://www.blacksesame.com.cn |

## Use Cases

- ✅ L3 autonomous driving and Robotaxi-class L4 (A2000X single chip / multi-chip interconnect)
- ✅ Urban NOA navigation assistance (A2000L cost-effective tier)
- ✅ Edge real-time inference of VLA / VLM / world models / one-stage end-to-end large models
- ✅ Cockpit AI Box and cockpit-driving fusion (A2000N)
- ✅ Embodied intelligence / robotics edge compute (SESAMEX platform, general edge AI)
- ✅ Advanced driving platforms with ASIL-D functional safety requirements
- ✅ Perception-heavy solutions with 24 cameras + multi-sensor fusion
- ✅ FP16 deployment without quantization and fast model migration (native PyTorch APIs)
- ❌ Data center large model training (an automotive edge inference architecture; neither performance density nor cluster interconnect is designed for it)
- ❌ Large-scale AI training cluster networking (interconnect bandwidth is designed for in-vehicle multi-chip cooperation)
- ❌ Low-cost entry ADAS (choose the A1000L / A1000 or a 6B-class solution instead)
- ❌ Scenarios requiring FP64 high-precision scientific computing

## Related Cards

- [Black Sesame Huashan A1000](/docs/cards/others/blacksesame-a1000) — Same vendor's previous generation, 16nm / 58 TOPS, generational predecessor of the A2000
- [Horizon Journey 6](/docs/cards/others/horizon-journey-6) — The most direct Chinese competitor, 7nm / 560 TOPS Nash architecture, similarly positioned for cockpit-driving integration + end-to-end
- [Horizon Journey 5](/docs/cards/others/horizon-journey-5) — Previous-generation Chinese high-compute driving chip, 128 TOPS
- [NVIDIA DRIVE Thor](/docs/cards/nvidia/drive-thor) — International flagship automotive platform, the main international benchmark for the A2000X
- [Moore Threads MTT S5000](/docs/cards/others/moore-threads-mtt-s5000) — Chinese data center GPU, forming a "cloud training + in-vehicle inference" compute contrast with the A2000

## References

- [Huashan A2000 family debuts, building the compute foundation for the physical AI era (vendor official site, 2026-04-20, details of the four compute tiers, Jiushao architecture/near-memory computing)](https://blacksesame.com.cn/zh/list_11/958.html)
- [A2000 high-compute platform (Baidu Baike, includes family history, 3L safety architecture, BaRT toolchain, FAD2.0 platform)](https://baike.baidu.com/item/A2000%E9%AB%98%E7%AE%97%E5%8A%9B%E8%AE%A1%E7%AE%97%E5%B9%B3%E5%8F%B0/67317219)
- [Huashan A2000 (Baidu Baike, includes 7nm, tape-out timeline, US review and CES 2026 award, production design wins)](https://baike.baidu.com/item/%E5%8D%8E%E5%B1%B1A2000/67176891)
