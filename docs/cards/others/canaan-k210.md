---
id: canaan-k210
title: "嘉楠 勘智 K210"
description: "嘉楠勘智 K210：全球首款量产 RISC-V 边缘 AI SoC，双核 64 位 + KPU，约 0.8 TOPS、0.3W 亚瓦级，端侧视听一体。"
keywords: [嘉楠, K210, Canaan, Kendryte, RISC-V, KPU, 0.8 TOPS, 端侧AI, 开发板]
vendor: others
vendor_full: "Canaan Inc.（嘉楠科技）"
series: "勘智 Kendryte 系列"
release_date: "2018"
status: "量产"
---

# 嘉楠 勘智 K210

## 产品概述

**勘智 K210** 是嘉楠科技（Canaan）旗下 Kendryte 团队于 **2018 年 9 月 6 日**发布的**全球首款基于 RISC-V 架构的量产商用边缘 AI 芯片**。它完全自研，集成视觉神经网络加速器 **KPU** 与音频处理单元 **APU**，是首批实现"视听一体"的端侧 SoC，可在 0.3W 功耗下提供约 1 TOPS（KPU 峰值 0.8 TOPS）算力。

K210 凭借开源生态（Sipeed Maix 系列开发板、MaixPy MicroPython）成为**端侧 AI 与嵌入式教育的常客**，广泛用于智能门锁、智能抄表、人脸门禁、农业监测等场景。

> **后续说明**：据 Jon Peddie Research 报道，Canaan 已于 **2025 年 6 月 23 日关停 Kendryte AI 部门**。K210 芯片本身仍为量产历史产品，开发板生态活跃，但原厂 AI 业务已终止。

## 核心规格

| 项目 | 参数 |
|------|------|
| **架构** | 双核 64 位 RISC-V（@400MHz，各带 FPU）+ KPU + APU + FFT 引擎 |
| **制程** | 28nm（TSMC） |
| **FP16 / BF16 算力** | 未公开 |
| **INT8 算力** | 约 0.8 TOPS（KPU 峰值；部分开发板标注 0.23 TOPS 乘法算子算力） |
| **FP32 算力** | 未公开（16 位定点乘法约 0.3 TOPS 级） |
| **显存容量** | 8MB 片上 SRAM（无需外置内存） |
| **显存类型** | 片上 SRAM |
| **显存带宽** | 未公开 |
| **TDP** | 约 0.3 W（典型），峰值 < 1 W |
| **互联** | DVP 摄像头、I2S/I2C/UART/GPIO、FPIOA 全可编程 IO |
| **接口** | SoC 板载 / 开发板（Maix 系列） |
| **发布** | 2018-09 |
| **量产/上市** | 2018 量产 |

## 关键特性
- **全球首款 RISC-V 边缘 AI 芯片**：完全自主 IP，量产商用先例。
- **视听一体**：KPU 视觉 + APU 8 麦克风阵列语音，单芯片看与听。
- **8MB 片上 SRAM**：模型权重常驻片上，无需外置 DDR。
- **亚瓦级功耗**：0.3W 典型，与 MCU 同级，适合电池/常电场景。
- **工业温宽**：-40℃ ~ +125℃，可车载/工业部署。
- **FPIOA 可编程 IO**：任意外设映射任意引脚，简化板级设计。
- **活跃生态**：MaixPy（MicroPython）+ C SDK，TensorFlow/Keras/Darknet 转 K-Model。

## 厂商信息
| 项目 | 内容 |
|------|------|
| **公司** | 嘉楠科技 Canaan Inc.（Nasdaq: CAN） |
| **总部** | 中国北京（杭州、新加坡设有机构） |
| **成立** | 2013 |

## 适用场景
- ✅ 端侧视觉/听觉、智能门锁、智能抄表、教育开发板、服务机器人、农业/能耗监测
- ❌ 大模型推理、高分辨率多路视频、高性能通用计算

## 相关卡
- [/docs/cards/others/canaan-k510](/docs/cards/others/canaan-k510) — 同系列下一代（3 TOPS）
- [/docs/cards/others/hailo](/docs/cards/others/hailo) — 国际边缘 NPU 对照
- [/docs/cards/others/moore-threads-mtt-s5000](/docs/cards/others/moore-threads-mtt-s5000) — 国产 GPU 计算卡对照

## 参考资料
- [K210 puts RISC-V AI on the edge in 2018（Jon Peddie Research）](https://www.jonpeddie.com/news/k210-puts-risc-v-ai-on-the-edge-in-2018)
- [嘉楠科技发布自研芯片勘智 K210（中国日报）](https://tech.chinadaily.com.cn/a/201907/16/WS5d2d7cd2a310a6dd41e862fd.html)
- [中金公司：嘉楠自研 AI 芯片受关注（新浪财经）](https://finance.sina.com.cn/stock/relnews/hk/2020-07-10/doc-iirczymm1596591.shtml)
