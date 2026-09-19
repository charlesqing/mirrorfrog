---
id: blacksesame-a1000
title: "Black Sesame Huashan A1000 (Huashan A1000)"
description: "China's first single-chip driving-parking integrated automotive-grade SoC: 16nm FFC automotive process, DynamAI NN (Jiushao) NPU, 58 TOPS INT8 / 116 TOPS INT4, typical power of 18W, 8-core Cortex-A55, support for 16 cameras, certified to ISO 26262 ASIL-B and AEC-Q100 Grade 2."
keywords: [Black Sesame Technologies, Black Sesame Technologies, Huashan A1000, Huashan A1000, Jiushao, DynamAI NN, NeuralIQ ISP, 58 TOPS, driving-parking integration, automotive-grade AI chip, ASIL-B]
vendor: others
vendor_full: "Black Sesame Technologies"
series: "Huashan"
release_date: "2020-06"
status: "Mass production"
---

# Black Sesame Huashan A1000 (Huashan A1000)

## Product Overview

**Black Sesame Technologies (HKEX 02533.HK)** was founded in 2016. Founder and CEO **Shan Jizhang** previously served as R&D VP at a world-leading CMOS image sensor company, specializing in image processing and visual perception for 20 years. The core team hails from Bosch, OmniVision, NVIDIA, Ambarella, Microsoft, Qualcomm, Huawei, ZTE, and others; the company positions itself as a **Tier 2** automotive-grade intelligent driving compute chip supplier. Its two proprietary core IPs are the **NeuralIQ ISP (Xingmou image signal processor)** and the **DynamAI NN engine / Jiushao NPU (automotive-grade low-power neural network accelerator)**.

Black Sesame's automotive chips are split into two product lines: the **Huashan series** targets compute height, and the **Wudang series** targets cross-domain breadth. In August 2019 it released its first automotive-grade driving chip, the **Huashan A500** (5–10 TOPS); in **June 2020 it released the second-generation "Huashan A1000"**, the **first Chinese automotive-grade SoC that can support L2+ assisted driving and, on a single chip, a driving-and-parking integrated domain controller**.

The **A1000** uses a **16nm FFC automotive-grade process**, integrating an **8-core Arm Cortex-A55 @1.5GHz**, a five-core high-performance vision DSP, a CV hardware acceleration engine, an H.264/H.265 4K codec, and a proprietary NPU: a mixed-precision 4bit/8bit MAC array with **INT8 compute of 58 TOPS and INT4 compute of 116 TOPS**, an average convolution-layer MAC array utilization of about 80%, and support for sparse acceleration plus fixed-point 8/16bit and floating-point 16bit GEMM and nonlinear function acceleration. **Typical power is only 18W**, in an FCBGA 25×25mm package with **passive cooling** support. The NeuralIQ ISP supports **real-time processing of 16 high-definition, high-dynamic-range image streams** (1.2 Gpps), with a 3-exposure HDR dynamic range of up to 140dB, plus low-light offline noise reduction and LED flicker suppression.

**Automotive grade and safety**: The A1000 is the **first domestic driving chip to pass both ISO 26262 ASIL-B functional safety certification and AEC-Q100 Grade 2 reliability certification**, integrating an independent functional safety island and a cybersecurity island, a dual-core lockstep safety processor, ECC/Parity protection, secure boot, and on-chip OTP key management, operating from -40°C to 105°C.

**Same-generation derivative models**: the **A1000L** (16nm, 16 TOPS INT8, up to 8 cameras, for L2/L2+) and the **A1000 Pro** (announced April 2021, taped out successfully in July; 16nm, **106 TOPS INT8 / 196 TOPS INT4**, up to 20 cameras, for L3/L4, and China's first autonomous driving chip exceeding 100 TOPS). All three chips have entered mass production.

**Market adoption**: The A1000 has entered passenger and commercial vehicle domains with stable supply to multiple mainstream automakers; deployment achievements include mass-production passenger models such as the **Geely Lynk & Co series, Geely Galaxy series, and Dongfeng eπ series**, plus the **FAW Hongqi parking controller**, the **Shaanxi Automobile light-truck domain controller**, commercial-vehicle PA2.0 domain controllers, and domestically produced integrated sensing-communication-compute units. According to Frost & Sullivan, by 2022 shipments of automotive-grade high-compute SoCs (>50 TOPS), Black Sesame held **5.2% and 4.8%** share in China and globally respectively, making it the world's third-largest high-compute autonomous driving chip supplier. In 2025, the Huashan A1000 was selected as one of the third "Hubei Premium" products.

## Core Specifications

| Parameter | Value |
|------|------|
| **Architecture** | Proprietary **DynamAI NN engine / Jiushao NPU** (mixed-precision 4bit/8bit MAC array) + **NeuralIQ / Xingmou ISP** |
| **Process Node** | **16nm FFC Automotive** automotive-grade process |
| **CPU** | 8 × Arm Cortex-A55 @ 1.5 GHz, multi-level cache, TrustZone support |
| **FP16 / BF16 Compute** | Not disclosed (the NPU supports **FP16 GEMM and nonlinear function acceleration**, but no official FP16 TFLOPS figure is published) |
| **INT8 Compute** | **58 TOPS** |
| **INT4 Compute** | **116 TOPS** |
| **FP32 Compute** | Not disclosed |
| **Memory Capacity** | Not disclosed (selected by the domain controller solution) |
| **Memory Type** | **Automotive-grade 64-bit LPDDR4** |
| **Memory Bandwidth** | Not disclosed |
| **TDP** | **18 W** (typical power) |
| **Interconnect** | **PCIe Gen3 × 4 lanes** (configurable as 1×4 or 2×2, as RC or EP) → supports **multi-chip cascade expansion** |
| **Interface** | SoC onboard (FCBGA 25×25mm, 0.8mm pitch); PCIe Gen3 ×4, USB 3.0 DRD, USB 2.0, and other rich peripherals |
| **ISP** | NeuralIQ ISP, **16 HD camera inputs**, 8MP support, 1.2 Gpps high-dynamic processing, 3-exposure HDR dynamic range of 140dB |
| **Other Compute Units** | Five-core high-performance vision DSP, CV hardware acceleration, H.264/H.265 4K video codec |
| **Functional Safety / Automotive Grade** | **ISO 26262 ASIL-B** + **AEC-Q100 Grade 2**; independent functional safety island and cybersecurity island; dual-core lockstep CPU; ECC/Parity; secure boot + on-chip OTP |
| **Operating Temperature** | -40°C ~ 105°C |
| **Cooling** | Passive cooling supported |
| **Launch** | **2020-06** |
| **Mass Production/Availability** | Completed all automotive certifications and entered mass production from 2021; deployed at scale in Geely Lynk & Co/Galaxy, Dongfeng eπ, FAW Hongqi, Shaanxi Automobile, and other models and domain controller products |

> ⚠️ **Specification uncertainty**: **Memory capacity and bandwidth are not officially published** (the chip only defines a 64-bit LPDDR4 interface; capacity is selected by the domain controller vendor). **FP16/FP32 floating-point compute is not disclosed** — officially it is only stated that the NPU supports "fixed-point 8/16-bit, floating-point 16-bit GEMM and nonlinear function acceleration", with no TFLOPS figure given. On the **compute figure discrepancy**: the official and mainstream reported figures are **58 TOPS INT8 / 116 TOPS INT4**, but a few 2023 broker research reports recorded the A1000 as "40–70 TOPS"; this card follows the vendor's official website parameters. On the **mass production timeline**: Black Sesame's public statement is that "the A1000/A1000L/A1000 Pro have all entered mass production", but **the specific SOP month of the first passenger model carrying the A1000 was not consistently disclosed officially**; verifiable large-scale vehicle integration mainly occurred after 2023 (e.g., loading the A1000 in Geely Group models through the ECARX-affiliated JICA partnership), so "mass production in 2021" is understood here as **completion of automotive certifications and achieving mass-production status**.

## Key Features

- **China's first single-chip driving-parking integrated automotive-grade SoC**: through a non-time-division multiplexed design, a single chip processes driving and parking functions simultaneously, greatly simplifying the domain controller architecture
- **First domestic chip with dual certification**: passed both ISO 26262 ASIL-B functional safety and AEC-Q100 Grade 2 reliability certification
- **High performance, low power balance**: 58 TOPS INT8 / 18W typical power with passive cooling support, reducing domain controller thermal design and cost
- **Two proprietary core IPs**: NeuralIQ ISP (imaging) + DynamAI NN / Jiushao NPU (inference), with software-hardware co-design
- **Strong multi-sensor integration**: 16 HD cameras + LiDAR + millimeter-wave radar seamless integration; 140dB HDR handles backlight/night/tunnel conditions
- **Cascade expansion**: PCIe Gen3 ×4 supports multi-chip cascading for progressive L2 → L3+ upgrades
- **BEV model capable**: integrated matrix computation units, nonlinear computation units, and DSP, supporting L2++ NOA navigation and 3D surround view
- **Shanhai AI development platform**: 50+ AI reference model library conversion use cases, supporting combined QAT and post-training quantization optimization, dynamic heterogeneous multi-core task scheduling, and custom operator development
- **Cost target**: Shan Jizhang has stated the goal of keeping the BOM cost of a driving-parking integrated domain controller with 10 cameras and NOA under 3,000 RMB
- **Passenger + commercial vehicle dual-track deployment**: passenger domain controllers, parking controllers, light-truck domain controllers, roadside integrated sensing-communication-compute units

## Vendor Information

| Item | Details |
|------|------|
| **Company** | Black Sesame Technologies Inc. (HKEX **02533.HK**) |
| **Headquarters** | Shanghai, China (offices in Silicon Valley, Chengdu, Shenzhen, Wuhan, Chongqing, and Singapore) |
| **Founded** | 2016 |
| **Founder / CEO** | Shan Jizhang (former OmniVision R&D VP) |
| **Business Positioning** | Tier 2 automotive-grade intelligent driving compute chip and solution supplier |
| **Core Proprietary IPs** | NeuralIQ / Xingmou ISP, DynamAI NN / Jiushao NPU |
| **Product Lines** | Huashan series (compute height), Wudang series (cross-domain breadth), SESAMEX (embodied AI compute platform) |
| **Key Partners** | FAW, Bosch, SAIC, Geely (Lynk & Co/Galaxy), Dongfeng, JAC, SAIC-GM-Wuling, Shaanxi Automobile, ECARX/JICA, Thundersoft |
| **Market Position** | By 2022 >50 TOPS automotive-grade SoC shipments: No. 3 globally (4.8%) and No. 3 in China (5.2%) (Frost & Sullivan) |
| **Website** | https://www.blacksesame.com.cn |

## Use Cases

- ✅ Single-chip driving-parking integrated domain controllers (L2+ / L2++)
- ✅ Highway NOA / navigation-on-autopilot assistance
- ✅ Automated parking, memory parking, 3D surround view
- ✅ BEV perception model deployment (matrix + nonlinear units + DSP synergy)
- ✅ Commercial vehicle ADAS domain controllers, light/heavy truck assisted driving
- ✅ Roadside perception computing (vehicle-road cooperation FAD Edge platform, integrated sensing-communication-compute units)
- ✅ Mass-production projects sensitive to passive cooling, low power, and low BOM cost
- ❌ One-stage end-to-end large models for advanced urban NOA (insufficient compute; requires an A2000-class platform)
- ❌ Large-parameter Transformer / VLA / world model edge inference
- ❌ L4 Robotaxi single-chip solutions (requires multi-chip A1000 Pro or the A2000 family)
- ❌ Data center training / general AI inference

## Related Cards

- [Black Sesame Huashan A2000](/docs/cards/others/blacksesame-a2000) — Same vendor's next-generation flagship, 7nm Jiushao NPU, up to 1000 TOPS, generational successor to the A1000
- [Horizon Journey 5](/docs/cards/others/horizon-journey-5) — Contemporary Chinese high-compute direct competitor, 128 TOPS Bayesian architecture
- [Horizon Journey 3](/docs/cards/others/horizon-journey-3) — Contemporary Chinese mid/low-tier competitor, 5 TOPS
- [Horizon Journey 6](/docs/cards/others/horizon-journey-6) — Current Chinese flagship, 7nm / 560 TOPS
- [NVIDIA DRIVE Thor](/docs/cards/nvidia/drive-thor) — International flagship automotive platform reference

## References

- [Black Sesame Huashan A1000 automotive-grade high-performance autonomous driving chip (vendor official product spec page)](https://www.blacksesame.com.cn/45)
- [Black Sesame receives strategic investment from Bosch subsidiary, accelerating commercialization (China Automotive News, includes A500/A1000/A1000 Pro launch dates and compute)](http://www.cnautonews.com/zhinengwl/2022/01/14/detail_20220114348965.html)
- [Black Sesame Huashan A1000 chip: automotive-grade high-performance assisted driving solution (vendor official technical explainer)](https://blacksesame.com.cn/zh/list_11/826.html)
