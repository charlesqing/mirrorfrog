---
id: innosilicon-fenghua-1
title: "Innosilicon Fenghua 1"
description: "China's first 4K-class high-performance data center GPU, released in 2021-11, with 5 TFLOPS FP32, 160 GPixel/s rendering, up to 16GB GDDR6/GDDR6X, 304 GB/s, desktop power of only 20W, and Innolink Chiplet dual-die expansion support"
keywords: [Innosilicon, Innosilicon, Fenghua 1, Fenghua 1, domestic GPU, GDDR6X, Innolink, Chiplet, cloud office, cloud gaming, SR-IOV]
vendor: others
vendor_full: "Innosilicon"
series: "Fenghua"
release_date: "2021-11"
status: "Mass production"
---

# Innosilicon Fenghua 1

## Product Overview

**Innosilicon**, founded in 2006, is a leading Chinese one-stop IP and chip customization company focused on the three major tracks of **compute, storage, and connectivity**. Starting from interface IPs such as DDR and USB, the company has completed over 300 advanced-process tape-outs and supported the mass production of more than ten billion high-end SoC chips, covering full process offerings from 55nm to 3nm at major foundries including TSMC, Samsung, SMIC, GlobalFoundries, UMC, Intel, and Huali, with customers including AMD, Microsoft, Qualcomm, and Amazon. **In 2018, Innosilicon was the first to overcome the GDDR6 high-bandwidth memory technology bottleneck**, and this self-developed memory IP capability became a key foundation for the later "Fenghua" GPU series.

**Fenghua 1 (Fenghua No.1)** was **officially launched in Shanghai on 2021-11-26**, hailed by the company and media as **China's first 4K-class high-performance GPU / data center GPU**, filling two gaps at once: domestic 4K-class desktop graphics cards and server graphics cards. The chip adopts **a full set of Innosilicon's own high-end IPs** (including the GDDR6/GDDR6X Combo memory IP, HDMI/DP display IPs, PCIe SerDes, etc.), integrating **graphics rendering + low-latency video codec + AI compute** on a single chip.

Fenghua 1's core positioning is **empowering 5G data center multi-stream cloud applications and metaverse scenarios**: cloud office, cloud phones, cloud gaming, cloud desktops, and cloud rendering. The chip supports **SR-IOV hardware virtualization**, allowing a single card to be split into multiple virtual functions for concurrent multi-user use, and has built-in **China-patented physical unclonable function (PUF) technology** for information security. Thanks to its excellent energy efficiency, typical chip power for desktop 4K heavy rendering is only about **20W**, and typical power for multi-stream heavy cloud rendering is about **50W**, supporting **fanless cooling** designs.

Fenghua 1 also **successfully implemented China's self-defined Innolink Chiplet multi-die technology for the first time**: the server-oriented "B card" formed via Innolink expansion doubles performance directly over the single-die "A card". The Fenghua series was later followed by **Fenghua 2** (2022-08, low-power desktop class) and **Fenghua 3** (2025-09, full-function GPU integrating a domestic open-source RISC-V CPU with a CUDA-compatible GPU).

## Core Specifications

The following are the **A card (single-die)** specifications, taken from the Innosilicon official product page and parameters published at the 2021-11-26 launch event.

| Parameter | Value |
|-----------|-------|
| **Architecture** | Innosilicon proprietary GPU architecture (full set of self-developed IPs) |
| **Process Node** | Not disclosed |
| **FP16 / BF16 Compute** | Not disclosed |
| **INT8 Compute** | **12.5 TOPS** (official site) / **25 TOPS** (launch event and research report figures, see note below) |
| **FP32 Compute** | **5 TFLOPS** |
| **Rendering (Pixel Fill Rate)** | **160 GPixel/s** |
| **Memory Capacity** | 4GB / 8GB / **16GB** (expandable up to 16GB) |
| **Memory Type** | **GDDR6 / GDDR6X Combo** (Innosilicon's own, max per-bit rate 19 Gbps) |
| **Memory Bandwidth** | **Up to 304 GB/s** (dynamically adjustable) |
| **TDP** | **~20 W for desktop 4K heavy rendering; ~35~50 W for multi-stream cloud rendering** (measured typical power; fanless design supported) |
| **Interconnect** | **Innolink Chiplet** multi-die interconnect (China's own standard, used for A card → B card performance doubling) |
| **Interface** | PCIe 4.0 x8 (official site) / PCIe 4.0 x16 (launch event figure), backward compatible with PCIe 3.0 / 2.0 |
| **Display Outputs** | HDMI 2.0 or HDMI 2.1 / DP 1.4 / VGA, multiple independent outputs |
| **Video Encoding** | 4 channels of 4K@60fps, 16 channels of 1080P@60fps (low-latency hardware encoding) |
| **Video Decoding** | 2 channels of 4K@60fps, 8 channels of 1080P@60fps (low-latency hardware decoding) |
| **Graphics APIs** | OpenGL 4.3, OpenGL ES 3.2, Vulkan 1.2, DirectX 11/12 |
| **Compute APIs** | OpenCL 1.2 / 2.1EP / 3.0 |
| **Video APIs** | VAAPI, OpenMAX, FFmpeg |
| **AI Frameworks** | Caffe, TensorFlow (incl. TFLite), ONNX, PyTorch |
| **Virtualization** | SR-IOV hardware virtualization, up to 16 VFs (official site) / 32 channels (launch event figure), Android container support |
| **Security** | Built-in China-patented physical unclonable function (PUF) technology |
| **Launch** | **2021-11-26** (Shanghai launch event) |
| **Mass Production/Availability** | In mass production and commercial use; shipment volumes not disclosed |

### A Card vs B Card (Innolink Chiplet Dual-Die)

| Metric | Fenghua 1 A Card | Fenghua 1 B Card |
|--------|------------------|------------------|
| FP32 floating point | 5 TFLOPS | **10 TFLOPS** |
| Rendering capability | 160 GPixel/s | **320 GPixel/s** |
| AI compute (INT8) | 25 TOPS | **50 TOPS** |
| Codec capability | 4x 4K@60 / 16x 1080P@60 / 32x 720P@30 | 8x 4K@60 / 32x 1080P@60 / 64x 720P@30 |
| Concurrent users | 16x 1080P / 32x 720P | 32x 1080P / 64x 720P |
| Memory | Up to 16GB | **32GB** |

> ⚠️ **Official Site vs Launch Event Discrepancies**
> The Innosilicon official product page currently lists **AI performance of 12.5 TOPS (INT8)**, **PCIe 4.0 x8**, **HDMI 2.0**, and **SR-IOV with up to 16 VFs**; whereas the 2021-11-26 launch press release and subsequent securities research reports (CITIC Securities, China Merchants Securities) generally list **AI performance of 25 TOPS (INT8)**, **PCIe 4.0 x16**, **HDMI 2.1**, and **32-channel SR-IOV**.
> Possible explanation: the official page may correspond to a specific mass-production board model/configuration, while the launch data reflects the chip's fully equipped capability; it is also possible the official page is a later revision. **For procurement or selection, refer to the vendor's official specification sheet.**

## Key Features

- **China's first 4K-class high-performance GPU**: covers both 4K high-definition desktop and high-performance server application areas
- **Full set of self-developed IPs**: the GDDR6/GDDR6X Combo memory IP, HDMI/DP, and PCIe SerDes are all Innosilicon's own, cross-process and cross-package, ensuring supply chain security
- **Self-developed GDDR6X Combo memory technology**: max per-bit transfer rate of 19 Gbps and bandwidth up to 304 GB/s — rare high-speed memory self-development among domestic GPUs
- **First implementation of China's own Innolink Chiplet standard**: dual-die expansion delivers linear performance doubling, an early practice of domestic GPU chiplets
- **Rendering + codec + AI three-in-one**: single-chip integration, suited to "render-as-you-encode" pipelines in cloud rendering/cloud gaming
- **Outstanding energy efficiency**: typical power of about 20W for desktop 4K heavy rendering, fanless design possible, far better than competitors at similar compute
- **Strong virtualization**: SR-IOV hardware virtualization + Android container support, one card serving multiple cloud users
- **PUF hardware security**: built-in China-patented physical unclonable function technology
- **Broad domestic platform support**: supports Kunpeng, Ampere, Phytium and other ARM server platforms; x86 / ARM / LoongArch instruction sets; Windows, Android, Kylin, UOS, Ubuntu, CentOS and other operating systems
- **Limitations**: process node not disclosed; FP16/BF16 compute not disclosed; the 5 TFLOPS FP32 level is unsuitable for large-model training; software ecosystem far behind CUDA

## Vendor Information

| Parameter | Value |
|-----------|-------|
| **Company** | Innosilicon |
| **Headquarters** | Wuhan, Hubei Province (East Lake High-Tech Development Zone); R&D centers in Zhuhai, Suzhou, Xi'an, Beijing, Shanghai, Shenzhen, Dalian, and Chengdu |
| **Founded** | **2006** (founder Ao Hai returned to China to establish it) |
| **R&D Scale** | R&D team of over one thousand |
| **Technical Accumulation** | Over 300 advanced-process tape-outs; thousands of core IPs; 200+ global core patents; participation in multiple international standards |
| **Mass Production Scale** | Supported mass production of over **10 billion** high-end SoC chips; 1 million FinFET wafers licensed for mass production |
| **Process Coverage** | 55nm — **3nm**, covering TSMC / Samsung / SMIC / GlobalFoundries / UMC / Intel / Huali |
| **Business Status** | A rare continuously profitable company in China's hard-tech sector (profitable for consecutive years), not reliant on external financing |
| **Key Technical Team** | Chief algorithm scientist Dr. Yang Xile (former Imagination architect of 25 years, holder of 125 core GPU graphics patents); DX team lead Zhang Tao (former AMD graphics framework leader) |
| **Fenghua Series Evolution** | Fenghua 1 (2021-11) → Fenghua 2 (2022-08) → **Fenghua 3 (2025-09, full-function GPU)** |
| **Official Website** | https://www.innosilicon.com.cn |

## Use Cases

- ✅ 5G data center multi-stream cloud office / cloud desktops / cloud phones
- ✅ Cloud gaming, cloud rendering (rendering + low-latency encoding in one)
- ✅ High-density server graphics rendering
- ✅ Remote desktop and desktop virtualization (SR-IOV multi-stream)
- ✅ Lightweight AI inference such as AI super-resolution and image recognition
- ✅ 4K desktop office, CAD design, graphics workstations, EDA, GIS real-scene mapping
- ✅ Smart cockpits, smart helmets, AR/VR, smart terminals
- ✅ Fanless / low-power embedded and edge computing devices
- ❌ Large-model AI training (5 TFLOPS FP32, no HBM, no large-scale interconnect)
- ❌ Large-model inference (max 16GB memory, 12.5~25 TOPS AI compute insufficient)
- ❌ FP8 / BF16 precision training workloads (no disclosed support)
- ❌ Direct migration from the CUDA proprietary ecosystem

## Related Cards

- [Innosilicon Fenghua 2](/docs/cards/others/innosilicon-fenghua-2) — Next generation in the same series, shifting to an ultra-low-power desktop positioning
- [Jingjia Micro JM9 Series](/docs/cards/others/jingjia-jm9) — Contemporary domestic Xinchuang GPU with overlapping positioning
- [Jingjia Micro JM9271](/docs/cards/others/jingjia-jm9271) — Contemporary domestic high-end GPU model
- [Moore Threads MTT S5000](/docs/cards/others/moore-threads-mtt-s5000) — Domestic full-function GPU on a unified training-plus-inference route
- [MetaX C600](/docs/cards/others/metax-c600) — Domestic high-end GPU, comparison against the HBM3e large-compute route

## References

- [Innosilicon official website — "Fenghua 1" 4K-class server graphics card product page](http://innosilicon.com.cn/gpu/fenghua1)
- [China's first 4K-class high-performance GPU "Fenghua 1" launched in Shanghai (China News Service Shanghai, 2021-11-29)](https://www.sh.chinanews.com.cn/kjjy/2021-11-29/93803.shtml)
- [Chip company introduction · job-seeking insider | Issue 1: Innosilicon (eefocus, company history and Fenghua series evolution)](https://m.eefocus.com/article/1990512.html)
