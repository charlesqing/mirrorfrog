---
id: ascend-310b
title: Huawei Ascend 310B
sidebar_label: Huawei Ascend 310B
description: Huawei Ascend 310B 昇腾边缘推理衍生芯片：低成本低功耗定位，存在命名复用（早期 12nm 约 16 TOPS vs 2025 新一代 7nm 高算力），本文厘清两代差异。
keywords: [Huawei Ascend 310B, 昇腾 310B, 边缘 AI, 低功耗, 命名复用, INT8]
---

# Huawei Ascend 310B

## 产品概述

**Huawei Ascend 310B**（昇腾 310B）是昇腾 310 家族的**低功耗边缘推理版本**，基于华为自研 **达芬奇（DaVinci）架构**，2021 年前后随 Atlas 310B / OrangePi AIpro 等边缘产品量产，定位嵌入式与轻量边缘场景。

> ⚠️ **数据订正（2026-10 联网核实）**：本站此前称华为在 2025 年「重新启用 310B 命名」推出 7nm 新一代、INT8 120–200 TOPS、TDP 5–15 W 的说法，**未找到任何一手来源支撑**（华为官网、昇腾社区、开发者套件文档均无此产品）。已删除该「第二代」设定，全表改为可核验的公开口径。

## 核心规格

| 项目 | 参数 |
|------|------|
| **架构** | 达芬奇 DaVinci |
| **制程** | 12nm |
| **INT8** | **20 TOPS** |
| **FP16** | **10 TFLOPS** |
| **显存** | **12 GB LPDDR4X** |
| **显存类型** | LPDDR4X |
| **显存带宽** | **51.2 GB/s** |
| **TDP** | 8 W |
| **AI Core** | 1 × DaVinci V300 |
| **CPU** | 4 × Taishan V200M |
| **接口** | PCIe / SERDES ×8 |
| **发布** | 2021 年前后 |

> 📌 **算力存在两档配置**：310B 模组按选配分 **20 TOPS@INT8 + 10 TFLOPS@FP16** 与 **8 TOPS@INT8 + 4 TFLOPS@FP16** 两档。上表取满配档。OrangePi AIpro 开发板因散热 / 频率限制实际为 8–20 TOPS 区间。

> 📌 **TDP 口径**：上表取 **芯片级 ≤8 W**。模组 / 开发板整机功耗更高（部分模组标称 24 W、工业级核心板标称低于 25 W），属不同统计口径。

> 📌 **内存为 LPDDR4X 而非 HBM**：昇腾 310B 采用板载 LPDDR4X（12 GB，51.2 GB/s），**不使用 HBM**。本站此前的「≤5 W 无风扇」描述实为早期 310 家族其他型号口径，已更正。


## 与 310 家族定位

| 型号 | 定位 | INT8 | 功耗 |
|------|------|------|------|
| Ascend 310（初代） | 终端/边缘推理 | 16 TOPS | 8W |
| **Ascend 310B** | 边缘推理（20/8 TOPS 两档） | 20 TOPS | ≤8W |
| Ascend 310P | 边缘推理升级 | 140 TOPS | 72W |

## 关键特性

- **低功耗**：芯片级 ≤8 W，可被动散热
- **高集成度**：CPU + NPU + DVPP 异构架构，板载 LPDDR4X
- **硬件编解码**：40 路 1080P@30FPS 解码、20 路 1080P@30FPS 编码
- **CANN 生态**：兼容 PyTorch / TensorFlow，AscendCL 开发
- **不支持大规模训练**：仅适合推理，小规模微调需在云端服务器完成

## 厂商信息

| 项目 | 内容 |
|------|------|
| **公司** | 华为技术有限公司（海思） |
| **官网** | https://www.hiascend.com |
| **架构** | 达芬奇（DaVinci） |

## 适用场景

- ✅ 智能摄像头 / IPC
- ✅ 工业网关、边缘盒子
- ✅ 端云协同低延迟推理
- ✅ 电池供电 / 无风扇设备

## 相关产品对比

- [华为 Ascend 310](/docs/cards/huawei/ascend-310) - 升腾边缘开山之作
- [华为 Ascend 310P](/docs/cards/huawei/ascend-310p) - 升腾边缘推理升级
- [华为 Ascend 510](/docs/cards/huawei/ascend-510) - 升腾边缘推理主力

## 数据来源

- [昇腾开源生态：HD200IS A2 DK 昇腾 310B 高可靠智能计算开发套件](https://ascendai.csdn.net/69d4d22d72111d255bf7da29.html) — 310B 官方技术指标：1×DaVinci V300 @1.224GHz、20 TOPS@INT8、10 TFLOPS@FP16、LPDDR4X 12GB / 51.2 GB/s、4×Taishan V200M @1.6GHz
- [鲲鹏昇腾开发者社区：昇腾310B加持的算力矩阵（香橙派四款AI产品解析）](https://hwcomputing.csdn.net/6a426a6210ee7a33f283eb7d.html) — 20/8 TOPS 两档配置、芯片级 ≤8W / 满配典型 24W、64 位 ARMv8-A
- [昇腾社区：OrangePi AIpro 图像处理技术](https://www.hiascend.com/forum/thread-02177214232262595081-1-1.html) — 310B 20 TOPS INT8 实际应用口径
- [昇腾官网](https://www.hiascend.com) — 产品与 CANN 软件栈

