---
id: sophgo-bm1688
title: "算能 BM1688"
description: "算能高集成边缘 TPU BM1688：16 TOPS INT8（32 TOPS INT4）、4 TFLOPS FP16/BF16，面向边缘大模型与多路视觉。"
keywords: [算能, BM1688, SOPHGO, 边缘AI, 16 TOPS, INT8, 边缘大模型, 安防]
vendor: others
vendor_full: "SOPHGO（算能科技）"
series: "SOPHON BM 系列"
release_date: "2023"
status: "量产"
---

# 算能 BM1688

## 产品概述

**BM1688** 是算能科技（SOPHGO）于 **2023 年**发布的**高集成边缘 TPU 处理器**，定位为面向深度学习与机器视觉的"边缘智能心脏"。相较 BM1684X，它进一步强化了**集成度**与**专业影像能力**，在单芯片内集成 8 核 ARM Cortex-A53、自研 NPU、专业安防 ISP 与视频编解码单元。

BM1688 提供 **16 TOPS INT8 / 32 TOPS INT4 / 4 TFLOPS FP16-BF16 / 0.5 TFLOPS FP32** 算力，支持 16 路高清视频智能分析、16 路硬解码与 10 路硬编码，并集成 4Kp60 专业安防 ISP（支持双目深度、图像拼接、鱼眼展开等硬件加速）。它可本地运行 ChatGLM3-6B、Qwen-7B、Qwen2.5-VL-3B 等边缘大模型，是智能摄像头、边缘盒子与微服务器的理想选择。

## 核心规格

| 项目 | 参数 |
|------|------|
| **架构** | 算能高集成边缘 TPU，集成 8 核 ARM Cortex-A53 @ 1.6GHz + 自研 NPU |
| **制程** | 未公开（推测 12nm 级，与 BM1684X 同代） |
| **FP16 / BF16 算力** | 4 TFLOPS |
| **INT8 算力** | 16 TOPS（INT4 可达 32 TOPS） |
| **FP32 算力** | 0.5 TFLOPS |
| **显存容量** | 8 / 16GB（LPDDR4/LPDDR4X 64-bit @ 4266 Mbps，另支持 DDR4 2×32-bit） |
| **显存类型** | LPDDR4 / LPDDR4X |
| **显存带宽** | 未公开 |
| **TDP** | 未公开（配套整机典型约 7.2 W，单芯片更低） |
| **互联** | 双千兆以太网、PCIe、USB、HDMI、MIPI-CSI、CAN FD |
| **接口** | SoC 板载（微服务器 SE9 / 模组） |
| **发布** | 2023 |
| **量产/上市** | 2023 发布并量产 |

## 关键特性
- **边缘大模型**：支持 ChatGLM3-6B、Qwen-7B、Qwen2.5-VL-3B 等本地推理。
- **专业安防 ISP**：4Kp60 图像处理，双目深度、拼接、鱼眼展开硬件加速。
- **多路视频**：16 路高清智能分析、16 路解码、10 路编码。
- **全精度支持**：INT4 / INT8 / FP16-BF16 / FP32 混合精度。
- **丰富外设**：PCIe / USB / HDMI / MIPI-CSI / CAN FD，二次开发便捷。
- **全栈框架**：PyTorch、TensorFlow 等主流框架，SophonSDK 一站式工具链。

## 厂商信息
| 项目 | 内容 |
|------|------|
| **公司** | 算能科技（SOPHGO） |
| **总部** | 中国北京 |
| **成立** | 2019 |

## 适用场景
- ✅ 智能摄像头、边缘盒子、微服务器、智慧城市、智慧交通、大模型私有化部署
- ❌ 大模型训练、超高密度（>16 路）并发分析（弱于 BM1684X）

## 相关卡
- [/docs/cards/others/sophgo-bm1684x](/docs/cards/others/sophgo-bm1684x) — 同系列高算力版
- [/docs/cards/others/sophgo-bm1684](/docs/cards/others/sophgo-bm1684) — 同系列前代
- [/docs/cards/others/moore-threads-mtt-s5000](/docs/cards/others/moore-threads-mtt-s5000) — 国产 GPU 计算卡对照
- [/docs/cards/others/hailo-15](/docs/cards/others/hailo-15) — 智能摄像头 SoC 对照

## 参考资料
- [算能 BM1688 产品介绍（官方）](https://www.sophgo.com/sophon-u/product/introduce/bm1688.html)
- [16TOPS 算力 AI 处理器 BM1688（天启 AIBOX-1688）](https://www.t-firefly.com.cn/product/industry/aibox1688)
- [算能发展历程（BM1688 于 2023 发布）](https://www.sophgo.com/about-us/index.html)
