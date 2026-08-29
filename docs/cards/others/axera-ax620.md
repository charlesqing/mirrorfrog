---
id: axera-ax620
title: "爱芯元智 AX620 (AX620A)"
description: "爱芯元智 AX620A：12nm 边缘视觉 AI SoC，14.4 TOPS INT4（3.6 TOPS INT8）、自研 AI-ISP + 混合精度 NPU，智能摄像头常客。"
keywords: [爱芯元智, AX620, AX620A, AXERA, 边缘视觉, AI-ISP, 3.6 TOPS, 智能摄像头]
vendor: others
vendor_full: "AXERA（爱芯元智半导体）"
series: "AX620 系列"
release_date: "2021"
status: "量产"
---

# 爱芯元智 AX620 (AX620A)

## 产品概述

**AX620A**（常称 AX620）是爱芯元智（AXERA）于 **2021 年 7 月**流片点亮、面向**智慧城市与消费视觉**的**高算力、高能效比、低功耗 AI SoC**。它集成四核 ARM Cortex-A7、自研 **AI-ISP**（业内率先将 AI 用于图像信号处理）与**混合精度 NPU**，定位比旗舰 AX630A 略低（算力约为其一半），但对标家用智能网络摄像机、门禁与工业相机等场景做了深度优化。

AX620A 的 NPU 提供 **14.4 TOPS@INT4 / 3.6 TOPS@INT8** 算力（注：部分概览称"约 10 TOPS 级"，实为 INT4 口径；INT8 峰值为 3.6 TOPS），最大支持 4K30fps ISP 与 4 路摄像头接入，凭借"混合精度 NPU + 自研 AI-ISP"两大核心技术实现极高芯片效能比。

## 核心规格

| 项目 | 参数 |
|------|------|
| **架构** | 四核 ARM Cortex-A7 + 自研混合精度 NPU + AI-ISP |
| **制程** | 12nm（FinFET，TSMC） |
| **FP16 / BF16 算力** | 未公开 |
| **INT8 算力** | 3.6 TOPS |
| **INT4 算力** | 14.4 TOPS |
| **FP32 算力** | 未公开 |
| **显存容量** | 未公开（板载 LPDDR4/LPDDR4X） |
| **显存类型** | LPDDR4 / LPDDR4X |
| **显存带宽** | 未公开 |
| **TDP** | 未公开（推测 < 2 W；同代 AX630A < 3 W） |
| **互联** | MIPI-CSI（多路）、MIPI-DSI、千兆以太网（RGMII）、USB2.0/3.0、I2C/UART/PWM/GPIO |
| **接口** | SoC 板载（IPC / 摄像头模组） |
| **发布** | 2021-07（点亮） |
| **量产/上市** | 2021–2022 量产 |

## 关键特性
- **自研 AI-ISP**：黑光全彩、低光降噪，近黑暗环境仍呈清晰彩色图像。
- **混合精度 NPU**：INT4 / INT8 灵活部署，提升算力利用率、降低 DDR 需求。
- **4K30 ISP**：最大 4K@30fps 图像处理，2DOL/3D 降噪、暗角补偿。
- **多路接入**：最多 4 路摄像头，双路 1080p 异显，适配门禁差异化应用。
- **超低功耗**：小型化封装、低功耗，适配常电/电池视觉终端。
- **双场景覆盖**：单芯片可覆盖智慧城市与消费 IPC 两类市场，降低综合成本。

## 厂商信息
| 项目 | 内容 |
|------|------|
| **公司** | 爱芯元智半导体股份有限公司（AXERA，0600.HK） |
| **总部** | 中国上海 |
| **成立** | 2019-05 |

## 适用场景
- ✅ 智能摄像头/IPC、门禁设备、家用网络摄像机、智慧城市、工业相机
- ❌ 大模型推理、4K 以上高分辨率多路并发

## 相关卡
- [/docs/cards/others/axera-ax650](/docs/cards/others/axera-ax650) — 同厂商第三代高算力版
- [/docs/cards/others/hailo-15](/docs/cards/others/hailo-15) — 智能摄像头 SoC 对照
- [/docs/cards/others/moore-threads-mtt-s5000](/docs/cards/others/moore-threads-mtt-s5000) — 国产 GPU 计算卡对照

## 参考资料
- [爱芯元智官网（AXERA）](https://www.axera-tech.com/)
- [AI 替代传统 ISP 的 Plan B（与非网，AX620A 规格）](https://m.eefocus.com/e/519594)
- [爱芯元智获 A++ 轮融资（搜狐，含 AX620A 规格）](https://www.sohu.com/a/517490251_121239677)
- [AX620 / AX620A 技术规格（Alldatasheet AI）](https://www.alldatasheetcn.com/ai/ai.jsp?Searchword=AX620)
