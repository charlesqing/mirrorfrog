---
id: sophgo-bm1684
title: "算能 BM1684"
description: "算能（原比特大陆算丰）BM1684 边缘 AI 推理处理器：12nm、17.6 TOPS INT8、12GB LPDDR4X，主打视频结构化与多路视觉分析。"
keywords: [算能, BM1684, SOPHGO, 边缘AI, 视频推理, 17.6 TOPS, INT8, 安防]
vendor: others
vendor_full: "SOPHGO（算能科技）"
series: "SOPHON BM 系列"
release_date: "2019"
status: "量产"
---

# 算能 BM1684

## 产品概述

**BM1684** 是算能科技（SOPHGO，原比特大陆算丰 AI 业务）推出的**第三代智能视觉深度学习处理器**，于 **2019 年**发布并量产。它采用算能自研 TPU（张量处理器）架构，集成 8 核 ARM Cortex-A53 与 64 个 NPU 核心，是面向**边缘计算**与**视频结构化**场景的高能效推理芯片。

BM1684 首发即定位于**智慧城市、智能安防、智能交通**等需要高密度视频分析的场景，典型应用包括人脸识别、车牌识别、行为分析、明厨亮灶等。凭借 12nm 工艺与约 16W 的典型功耗，它可在无风扇或被动散热条件下长时间稳定运行，是早期国产边缘 AI 推理卡的代表作之一，常见于算能 SE5 计算盒、EC-1684JD4 等整机形态。

## 核心规格

| 项目 | 参数 |
|------|------|
| **架构** | 算能第三代自研 TPU 架构，集成 8 核 ARM Cortex-A53 @ 2.3GHz + 64 个 NPU 核心 |
| **制程** | 12nm（TSMC） |
| **FP16 / BF16 算力** | 未公开（公开资料仅披露 INT8 / FP32） |
| **INT8 算力** | 17.6 TOPS（Winograd 加速下可达 35.2 TOPS） |
| **FP32 算力** | 2.2 TFLOPS |
| **显存容量** | 12GB（板载） |
| **显存类型** | LPDDR4X |
| **显存带宽** | 未公开 |
| **TDP** | 约 16 W（典型功耗；部分整机标 15W） |
| **互联** | 双千兆以太网、多芯片可级联 |
| **接口** | SoC 板载（计算盒 / 模组 / 微服务器形态） |
| **发布** | 2019 |
| **量产/上市** | 2019 量产 |

## 关键特性
- **高密视频分析**：支持 16 路高清视频同步 AI 分析，32 路 1080P 解码（H.264/H.265）。
- **混合精度**：支持 FP32 / INT8，Winograd 卷积加速下 INT8 翻倍至 35.2 TOPS。
- **全栈框架**：原生支持 PyTorch、TensorFlow、Caffe、MXNet、PaddlePaddle、ONNX 等。
- **SophonSDK 工具链**：提供编译器、量化工具、推理引擎，模型一键转 BModel。
- **低功耗高能效**：典型 16W 即可提供 17.6 TOPS，适合常年在线边缘部署。
- **云边端协同**：算法可云边端统一管理，本地推理保障数据隐私与低延迟。

## 厂商信息
| 项目 | 内容 |
|------|------|
| **公司** | 算能科技（SOPHGO，由比特大陆算丰 AI 业务于 2019 年分拆独立） |
| **总部** | 中国北京 |
| **成立** | 2019（算能公司；BM1684 由比特大陆算丰团队研发） |

## 适用场景
- ✅ 视频结构化、智能安防、智慧交通、智慧城市、工业质检、边缘服务器
- ❌ 大模型训练、数据中心高并发推理（算力与显存规模受限）

## 相关卡
- [/docs/cards/others/sophgo-bm1684x](/docs/cards/others/sophgo-bm1684x) — 同系列第四代、算力翻倍
- [/docs/cards/others/moore-threads-mtt-s5000](/docs/cards/others/moore-threads-mtt-s5000) — 国产 GPU 计算卡对照
- [/docs/cards/others/hailo](/docs/cards/others/hailo) — 国际边缘 NPU 对照

## 参考资料
- [算能 BM1684 生态产品（EC-1684JD4）](https://sophgo.com/ecology/detail.html?id=34)
- [BM1684 核心规格与行业应用（万物纵横）](https://iotdt.com/news/xingyezixun/1610.html)
