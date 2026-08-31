---
id: axera-ax650
title: "爱芯元智 AX650 (AX650N)"
description: "爱芯元智 AX650N：2023 年第三代端侧视觉 SoC，18 TOPS INT8（72 TOPS INT4）、8K 视频、原生支持 Transformer，智能摄像头/边缘盒子。"
keywords: [爱芯元智, AX650, AX650N, AXERA, 端侧AI, 18 TOPS, INT8, 8K, Transformer]
vendor: others
vendor_full: "AXERA（爱芯元智半导体）"
series: "AX650 系列"
release_date: "2023"
status: "量产"
---

# 爱芯元智 AX650 (AX650N)

## 产品概述

**AX650N**（常称 AX650）是爱芯元智（AXERA）于 **2023 年 3 月 6 日**发布的**第三代高算力、高能效比智能视觉 SoC**，是继 AX620、AX630 系列后的旗舰端侧芯片。它集成八核 ARM Cortex-A55 @1.7GHz、自研高性能 **混合精度 NPU**、AI-ISP 与 VPU，是端侧/边缘侧 **Transformer 模型的最佳落地平台之一**。

AX650N 提供 **18 TOPS@INT8 / 72 TOPS@INT4** 的最新官方算力（早期发布信息为 10.8 TOPS@INT8 / 43.2 TOPS@INT4），支持 INT4/INT8/INT16/FP16/FP32 混合精度，原生支持 ViT/DeiT/Swin/DETR/DINOv2 等 Transformer 网络，典型功耗仅约 4W。其视频能力达 8K@30fps 编码、8K@60fps 解码与 32 路 1080p 并行解码，广泛应用于智能城市、智慧交通、智能制造与视频会议。

> **规格校正说明**：概览中"约 43 TOPS"对应的是早期发布的 **INT4（43.2 TOPS）** 口径，并非 INT8；最新官方规格为 **INT8 18 TOPS / INT4 72 TOPS**。已按官方最新数据记录。

## 核心规格

| 项目 | 参数 |
|------|------|
| **架构** | 八核 ARM Cortex-A55 @1.7GHz + 自研混合精度 NPU + AI-ISP + VPU |
| **制程** | 未公开（推测 12nm 或 14nm 级，与 AX620 同代） |
| **FP16 / BF16 算力** | 未公开（支持混合精度，具体 TFLOPS 未单列） |
| **INT8 算力** | 18 TOPS（官方最新规格；早期发布信息为 10.8 TOPS） |
| **INT4 算力** | 72 TOPS（官方最新规格；早期发布信息为 43.2 TOPS） |
| **FP32 算力** | 支持（混合精度） |
| **显存容量** | 8GB（标准 64-bit LPDDR4X，最大 32GB LPDDR4X） |
| **显存类型** | LPDDR4X（64-bit） |
| **显存带宽** | 未公开 |
| **TDP** | 约 4 W（典型） |
| **互联** | 双千兆以太网、USB3.0/2.0、PCIe 2.0/SATA3.0、HDMI 2.0b、MIPI D-PHY、I2S/I2C/UART/SPI |
| **接口** | SoC 板载（核心板 / 边缘盒子 / 加速卡） |
| **发布** | 2023-03 |
| **量产/上市** | 2023 量产 |

## 关键特性
- **原生 Transformer 支持**：ViT/DeiT/Swin/SwinV2/DETR/DINOv2 端侧高效部署。
- **8K 视频**：8K@30fps 编码、8K@60fps 解码、32 路 1080p@30fps 并行解码。
- **AI-ISP**：AI-HDR、AI-3DNR，低光环境实时超清画质。
- **超低功耗**：典型约 4W，高能效比适配边缘常年在线。
- **丰富接口**：双千兆网、USB3.0、PCIe2.0/SATA、HDMI2.0b、多路 MIPI。
- **多形态落地**：IPC、边缘盒子、加速卡（如 1050 系列、AXera-Pi Pro 开发板）。

## 厂商信息
| 项目 | 内容 |
|------|------|
| **公司** | 爱芯元智半导体股份有限公司（AXERA，0600.HK） |
| **总部** | 中国上海 |
| **成立** | 2019-05 |

## 适用场景
- ✅ 智能摄像头、边缘 AI 盒子、视频会议、智慧城市/交通/制造、Transformer 端侧推理
- ❌ 大模型训练、超大规模云端推理

## 相关卡
- [/docs/cards/others/axera-ax620](/docs/cards/others/axera-ax620) — 同厂商第二代视觉 SoC
- [/docs/cards/others/hailo-15](/docs/cards/others/hailo-15) — 智能摄像头 SoC 对照
- [/docs/cards/others/moore-threads-mtt-s5000](/docs/cards/others/moore-threads-mtt-s5000) — 国产 GPU 计算卡对照

## 参考资料
- [Axera 发布第三代智能视觉芯片 AX650N（官方新闻）](https://axera-tech.com/en/news/2819.html)
- [AX650N（百度百科）](https://baike.baidu.com/item/AX650N/68124449)
- [AX650 核心板规格（爱芯元智官网）](https://www.axera-tech.com/zh-hans/node/2992)
