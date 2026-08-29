---
id: canaan-k510
title: "嘉楠 勘智 K510"
description: "嘉楠勘智 K510：三核 RISC-V 边缘 AI SoC，约 3 TOPS KPU，28nm，图像/语音端侧，K210 性能 3 倍。"
keywords: [嘉楠, K510, Canaan, Kendryte, RISC-V, KPU, 3 TOPS, 端侧AI]
vendor: others
vendor_full: "Canaan Inc.（嘉楠科技）"
series: "勘智 Kendryte 系列"
release_date: "2021"
status: "量产"
---

# 嘉楠 勘智 K510

## 产品概述

**勘智 K510** 是嘉楠科技（Canaan）于 **2021 年 7 月**（世界人工智能大会）发布的**第二代边缘 AI 芯片**，定位中高端边缘推理市场。相比 K210，其总线架构、IP 核心与视频子系统全面重构，官方称性能为 K210 的 **3 倍**。

K510 搭载升级版 **KPU2.0**（通用神经网络引擎 GNNE），集中突破"存储墙"与"性能墙"，提供约 **3 TOPS** 算力；同时集成全新 ISP（2D/3D 降噪、WDR、鱼眼校正）、H.264 编码与千兆以太网，面向无人机航拍、高清视频会议、机器人、辅助驾驶与工业/专业相机等场景。

## 核心规格

| 项目 | 参数 |
|------|------|
| **架构** | 三核 64 位 RISC-V（2×@800MHz + 1×DSP @800MHz）+ KPU（GNNE）+ FFT/VAD |
| **制程** | 28nm |
| **FP16 / BF16 算力** | 未公开 |
| **INT8 算力** | 约 3 TOPS（KPU/GNNE 峰值） |
| **FP32 算力** | 未公开 |
| **显存容量** | 1.5MB 片上 SRAM（1MB + 512KB）+ 外置 LPDDR3/LPDDR4 |
| **显存类型** | LPDDR3 / LPDDR4 |
| **显存带宽** | 未公开 |
| **TDP** | 约 2 W（典型） |
| **互联** | MIPI CSI / DSI、千兆以太网、USB OTG、I2S/I2C/UART/GPIO |
| **接口** | SoC 板载 / 开发板 |
| **发布** | 2021-07 |
| **量产/上市** | 2021 发布（开发板生态跟进） |

## 关键特性
- **KPU2.0 约 3 TOPS**：较 K210 提升 3 倍，突破存储墙/性能墙。
- **全新 ISP**：2D/3D 降噪、WDR 宽动态、鱼眼校正、硬件 3A。
- **多媒体**：H.264 编码 1080p60，JPEG 编解码，MIPI CSI/DSI。
- **多框架**：支持 TensorFlow、PyTorch、ONNX、TVM、Caffe 等。
- **灵活 OS**：裸机、嵌入式 RTOS、Linux 均可部署。
- **典型功耗约 2W**：兼顾性能与边缘功耗约束。

## 厂商信息
| 项目 | 内容 |
|------|------|
| **公司** | 嘉楠科技 Canaan Inc.（Nasdaq: CAN） |
| **总部** | 中国北京 |
| **成立** | 2013 |

## 适用场景
- ✅ 无人机高清航拍、高清全景视频会议、机器人、辅助驾驶、工业/专业相机、STEAM 教育
- ❌ 大模型推理、超低功耗常电（弱于 K210 的 0.3W）

## 相关卡
- [/docs/cards/others/canaan-k210](/docs/cards/others/canaan-k210) — 同系列第一代（0.8 TOPS）
- [/docs/cards/others/hailo](/docs/cards/others/hailo) — 国际边缘 NPU 对照
- [/docs/cards/others/moore-threads-mtt-s5000](/docs/cards/others/moore-threads-mtt-s5000) — 国产 GPU 计算卡对照

## 参考资料
- [Kendryte K510 三核 RISC-V AI 处理器（CNX Software）](https://cnx-software.cn/2021/07/15/kendryte-k510-tri-core-risc-v-ai-processor/)
- [Canaan K510 Datasheet（官方 PDF）](https://bbs.aw-ol.com/assets/uploads/files/1642150340131-k510_full-datasheet.pdf)
- [Kendryte K510 发布（CNX Software 英文）](https://www.cnx-software.com/2021/07/09/kendryte-k510-tri-core-risc-v-ai-processor-3-tops/?amp=1)
