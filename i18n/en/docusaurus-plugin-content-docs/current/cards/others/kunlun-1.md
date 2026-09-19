---
id: kunlun-1
title: Baidu Kunlunxin Kunlun 1 (818-300)
sidebar_label: Kunlun 1 (818-300)
description: "Baidu's first self-developed full-function cloud AI chip Kunlun 1 (training-oriented 818-300, released 2018 / mass-produced 2019): Samsung 14nm, XPU architecture, 260 TOPS INT8, 512 GB/s, ~100W."
keywords: [Kunlunxin Kunlun 1, Baidu Kunlun, 818-300, 260 TOPS, 14nm, XPU, domestic AI chip, training chip]
vendor: others
vendor_full: "Kunlunxin (Baidu)"
series: "Kunlun"
release_date: "2018"
status: "Mass production"
---

# Baidu Kunlunxin Kunlun 1 (818-300)

## Product Overview

The **Kunlun 1 (training-oriented 818-300)** is Baidu's **self-developed, China's first full-function cloud AI chip**, first unveiled by Robin Li on **July 4, 2018 at the Baidu AI Developer Conference (Baidu Create 2018)**, comprising the training chip **Kunlun 818-300** and the inference chip **Kunlun 818-100**. In 2021, Baidu spun off its chip business as **Kunlunxin**, and the Kunlun 1 became the starting point of the Kunlunxin product line.

The Kunlun 1 adopts Baidu's proprietary **XPU neural processor architecture** with **Samsung's 14nm low-power process + I-Cube packaging**, delivering **260 TOPS** of compute and **512 GB/s** of memory bandwidth at **100+ watts** — "the highest designed compute of any AI chip in the industry" at the time. It was specially optimized for speech, NLP, image, search ranking, and autonomous driving scenarios, supports multiple deep learning frameworks including PaddlePaddle, and is the culmination of Baidu's 8 years of AI accelerator development (20+ iterations). It later evolved into the **Kunlun 2 (second generation)** and the **Kunlunxin M series / P800**.

## Core Specifications

| Parameter | Value |
|-----------|-------|
| **Architecture** | Baidu's proprietary XPU neural processor architecture |
| **Process Node** | Samsung 14nm, I-Cube™ (Interposer-Cube) packaging |
| **INT8 Compute** | **260 TOPS** |
| **FP16 / BF16 Compute** | Not disclosed (officially only 260 TOPS integer compute was published) |
| **FP32 Compute** | Not disclosed |
| **Memory Bandwidth** | **512 GB/s** |
| **Memory Capacity** | Not disclosed |
| **Memory Type** | Not disclosed (high-bandwidth memory, on-board) |
| **TDP** | **~100 – 150 W** (initially announced as 100+W; later materials cite 150W) |
| **Interconnect** | PCIe (full-function cloud, specific generation not disclosed) |
| **Interface** | PCIe (specific generation not disclosed) |
| **Launch** | 2018-07 (Baidu Create 2018) |
| **Mass Production/Availability** | Mass production in early 2019 (volume shipments from 2020) |

> ⚠️ **Specification Notes**: The figures **260 TOPS / 512 GB/s / Samsung 14nm / 100+W** come from Baidu's official releases and reports by Huanqiu.com and Xinhua News Agency, and are authoritative. FP16/FP32 peak compute, memory capacity and type, and the specific PCIe generation were not officially disclosed and are marked **Not disclosed**. The launch date follows the July 2018 Baidu Create conference; for the mass production milestone, some sources cite early 2019 and others cite volume shipments in 2020 — both are noted in the table.

## Key Features

- **Full-function cloud coverage**: spans data centers, public clouds, autonomous vehicle R&D, and other cloud-edge scenarios
- **Proprietary XPU architecture**: specially optimized for speech, NLP, image, and search ranking
- **Low cost**: roughly a 10x cost reduction at equivalent performance (officially claimed)
- **Easy to use**: supports multiple frameworks including PaddlePaddle, flexible programming, supports both training and inference
- **High compute density**: 260 TOPS, the industry's highest designed compute at launch

## Vendor Information

| Parameter | Value |
|-----------|-------|
| **Company** | Kunlunxin (Beijing) Technology Co., Ltd. (formerly Baidu's AI chip division, spun off in 2021) |
| **Headquarters** | Beijing |
| **Founded** | Chip business from 2018; company spun off in 2021 |
| **Predecessor** | Baidu |

## Use Cases

- ✅ **Cloud AI training and inference** (search ranking, speech, NLP, image)
- ✅ **Autonomous driving vehicle R&D compute**
- ✅ **Large-scale recommendation systems**
- ✅ **Baidu ecosystem and domestic AI platforms**
- ❌ Ultra-low-power edge scenarios (data center positioning)
- ❌ Later-generation large models (compute and memory constrained; succeeded by the Kunlun 2 / P800)

## Related Cards

- [Kunlunxin P800](/docs/cards/others/kunlun-p800) — New-generation training flagship (generational successor)
- [Kunlunxin M100](/docs/cards/others/kunlun-m100) — Kunlunxin inference/edge product
- [Kunlunxin M300](/docs/cards/others/kunlun-m300) — Kunlunxin inference product
- [Baidu Kunlunxin R200](/docs/cards/baidu/r200) — Baidu-family AI accelerator card

## References

- [Huanqiu Smart · Baidu releases China's first full-function cloud AI chip "Kunlun"](https://smart.huanqiu.com/article/9CaKrnKaeGq)
- [Xinhua Finance · First in the nation! Baidu releases the cloud AI chip "Kunlun"](http://fintech.xinhua08.com/a/20180705/1767873.shtml)
- [Huanqiu.com · Baidu's first self-developed cloud general-purpose chip completes development, manufactured by Samsung](https://www.huanqiu.com/article/3wFpfHwjK3Z)
