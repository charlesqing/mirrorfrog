---
id: ascend-310p
title: Huawei Ascend 310P
sidebar_label: Ascend 310P
description: "Huawei Ascend 310P edge AI inference chip: Da Vinci architecture, INT8 140-176 TOPS, FP16 70 TFLOPS, LPDDR4X memory, typical 8W power (70W per card), for edge and on-device inference."
keywords: [Huawei Ascend 310P, Ascend 310P, Da Vinci architecture, edge AI, INT8, inference chip]
---

# Huawei Ascend 310P

## Product Overview

**Huawei Ascend 310P** is a low-power AI processor from HiSilicon built on the **Da Vinci architecture** for **edge computing and on-device inference**, an upgraded version of the Ascend 310. It integrates 10 Da Vinci AI Cores, TaiShan CPU cores, and a video codec unit, with **peak INT8 compute of 140-176 TOPS** and **~70 TFLOPS FP16**; typical chip power is only **8W** (whole card such as the Atlas 300I Pro: ~70W).

**Strategic position**: The 310P is Huawei's mainstay edge AI chip, widely deployed in Atlas 300I series inference cards and AI computing boxes (e.g. OrangePi AI Station, running Llama-2-7B locally), and the first choice for domestic edge inference.

## Core Specifications

| Parameter | Value |
|------|------|
| **Architecture** | Da Vinci |
| **Process** | 12nm |
| **AI Cores** | 10 Da Vinci AI Cores (some versions: 8) |
| **FP16 Compute** | 70 TFLOPS |
| **INT8 Compute** | 140 TOPS (Atlas 300I Pro) / 176 TOPS (peak) |
| **Memory** | LPDDR4X (24GB / 48GB / 96GB, varies by board) |
| **Memory Type** | LPDDR4X |
| **Memory Bandwidth** | 204.8 GB/s |
| **Video Decoding** | 128-channel 1080P@30fps |
| **TDP** | 70 W (whole card; chip ~8W) |
| **Release** | 2022 |
| **Price** | approx. ¥15,000 (Atlas 300I Pro card) |

## Key Features

- **Low power, high efficiency**: typical 8W chip power, suited to battery-powered devices
- **Large memory bandwidth**: 384-bit LPDDR4X, 204.8 GB/s theoretical
- **Video codec**: 128-channel 1080P hardware decoding
- **CANN ecosystem**: compatible with PyTorch / TensorFlow, AscendCL development

## Vendor Information

| Parameter | Value |
|------|------|
| **Company** | Huawei Technologies Co., Ltd. (HiSilicon) |
| **Website** | https://www.hiascend.com |
| **Release** | 2022 |
| **Architecture** | Da Vinci |

## Use Cases

- ✅ **Smart video analytics** (security, industrial inspection)
- ✅ **Edge AI boxes** (local LLM inference)
- ✅ **Robots / unmanned devices**
- ✅ **Private lightweight inference**

## Related Comparisons

- [Huawei Ascend 510](/docs/cards/huawei/ascend-510) - Ascend edge inference upgrade
- [Huawei Ascend 710](/docs/cards/huawei/ascend-710) - Ascend edge inference
- [Huawei Ascend 910B](/docs/cards/huawei/ascend-910b) - Data center training

## External Links

- [Ascend community](https://www.hiascend.com)
- [Atlas 300I Pro product page](https://www.hiascend.com)
