---
id: sophgo-bm1684x
title: "算能 BM1684X"
description: "算能第四代 TPU BM1684X：12nm、32 TOPS INT8（64 TOPS INT4）、16 TFLOPS FP16/BF16，支持大模型边缘推理。"
keywords: [算能, BM1684X, SOPHGO, 边缘AI, 32 TOPS, INT8, 大模型, LLM边缘]
vendor: others
vendor_full: "SOPHGO（算能科技）"
series: "SOPHON BM 系列"
release_date: "2022"
status: "量产"
---

# 算能 BM1684X

## 产品概述

**BM1684X** 是算能科技（SOPHGO）于 **2022 年**发布的**第四代张量处理器（TPU）**，是 BM1684 的迭代旗舰。它采用 12nm 工艺，集成 8 核 ARM Cortex-A53 与自研 NPU（Bernoulli 架构），提供 **32 TOPS INT8 / 64 TOPS INT4 / 16 TFLOPS FP16/BF16 / 2 TFLOPS FP32** 的峰值算力，并强化 NMS/SORT 等后处理引擎。

BM1684X 面向**边缘大模型推理**与**高密度视频分析**，可本地部署 Llama3、ChatGLM、Qwen 等大模型，同时支持 32 路 1080P 视频解码与 16 路全流程 AI 分析。它常与 RK3588 等主控组成异构边缘盒子，对标 NVIDIA Jetson Orin NX。

> **规格校正说明**：部分早期或非官方资料将 BM1684X 制程标为 16nm、内存标为 32GB LPDDR。经核对算能官方及合作伙伴（Firefly、天启、万物纵横）规格书，实际为 **12nm 工艺、板载内存最大 16GB LPDDR4X**（6/12/16GB 可选）；32GB 见于多节点服务器整机而非单芯片配置。

## 核心规格

| 项目 | 参数 |
|------|------|
| **架构** | 算能第四代自研 TPU（Bernoulli 架构），集成 8 核 ARM Cortex-A53 @ 2.3GHz |
| **制程** | 12nm（TSMC；部分资料误标 16nm，已校正） |
| **FP16 / BF16 算力** | 16 TFLOPS |
| **INT8 算力** | 32 TOPS（INT4 可达 64 TOPS） |
| **FP32 算力** | 2 TFLOPS |
| **显存容量** | 6 / 12 / 16GB（最大 16GB LPDDR4X） |
| **显存类型** | LPDDR4 / LPDDR4X |
| **显存带宽** | 约 68.3 GB/s（16GB 配置，128-bit @ 4266 Mbps） |
| **TDP** | ≤ 18–20 W（满载，被动无风扇散热） |
| **互联** | 双千兆以太网、PCIe 3.0（16 通道）、多芯片级联 |
| **接口** | SoC 板载 / PCIe 3.0（模组、计算盒、微服务器） |
| **发布** | 2022 |
| **量产/上市** | 2022 量产 |

## 关键特性
- **大模型边缘部署**：支持 Llama3-8B、ChatGLM2/3-6B、Qwen-7B、Qwen2.5-VL-7B 等本地私有化推理。
- **混合精度**：INT8 / FP16-BF16 / INT4 / FP32 全栈精度，TPU-MLIR 编译器自动量化。
- **高密度视频**：32 路 1080P@25fps 解码、12 路编码，独立 VPU 与 TPU 物理隔离。
- **全栈框架**：PyTorch、TensorFlow、PaddlePaddle、ONNX、Caffe、Darknet、MXNet。
- **完整工具链**：SophonSDK 一站式编译/量化/推理，Docker 容器化管理。
- **工业宽温**：-20℃ ~ +60℃ 稳定运行，金属无风扇机身。

## 厂商信息
| 项目 | 内容 |
|------|------|
| **公司** | 算能科技（SOPHGO） |
| **总部** | 中国北京 |
| **成立** | 2019 |

## 适用场景
- ✅ 边缘大模型推理、智慧安防、智慧城市、智慧交通、工业质检、多路视频结构化
- ❌ 单芯片独立显示主控（无 GPU，需搭配主控 SoC）

## 相关卡
- [/docs/cards/others/sophgo-bm1684](/docs/cards/others/sophgo-bm1684) — 同系列第三代前代
- [/docs/cards/others/sophgo-bm1688](/docs/cards/others/sophgo-bm1688) — 同系列高集成边缘版
- [/docs/cards/others/moore-threads-mtt-s5000](/docs/cards/others/moore-threads-mtt-s5000) — 国产 GPU 计算卡对照
- [/docs/cards/others/hailo](/docs/cards/others/hailo) — 国际边缘 NPU 对照

## 参考资料
- [算能 BM1684X 核心板 AIO-1684XQ 规格](https://en.sophgo.com/ecology/detail.html?id=42)
- [AIBOX-1684X 大模型人工智能盒子（Firefly）](https://www.t-firefly.com/product/industry/aibox1684x)
- [算能 BM1684X 技术参数与架构解析（万物纵横）](https://iotdt.com/news/xingyezixun/1019.html)
