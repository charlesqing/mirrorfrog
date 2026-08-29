---
id: rockchip-rk3588
title: "瑞芯微 RK3588"
description: "瑞芯微 RK3588：8nm 八核 AIoT SoC，6 TOPS NPU（INT8）、8K 视频编解码，边缘盒子/开发板主力。"
keywords: [瑞芯微, RK3588, Rockchip, AIoT, 6 TOPS, NPU, 8K, 边缘盒子]
vendor: others
vendor_full: "Rockchip（瑞芯微电子）"
series: "RK35 系列"
release_date: "2022"
status: "量产"
---

# 瑞芯微 RK3588

## 产品概述

**RK3588** 是瑞芯微（Rockchip）推出的**旗舰级 AIoT 应用处理器 SoC**，采用 **8nm 先进制程**，集成四核 Cortex-A76 + 四核 Cortex-A55 八核 CPU、Mali-G610 MC4 GPU 与 **6 TOPS 三核自研 NPU**。它于 **2021 年底发布、2022 年量产**，凭借"CPU+GPU+NPU+VPU"四合一架构，成为边缘盒子、开发板（Orange Pi、香橙派、Firefly 等）与工业 HMI 的主力芯片。

RK3588 支持 **8K@60fps 视频解码、8K@30fps 编码**与 **32MP ISP（HDR/3DNR）**，NPU 支持 INT4/INT8/INT16/FP16/BF16/TF32 混合精度，可运行 YOLO、分割、OCR 及轻量大模型。其定位是"全能型主控"，与专用 AI 加速芯片（如 BM1684X）常组成异构方案。

## 核心规格

| 项目 | 参数 |
|------|------|
| **架构** | 八核 64 位（4×Cortex-A76 + 4×Cortex-A55）+ Mali-G610 MC4 + 三核自研 NPU |
| **制程** | 8nm |
| **FP16 / BF16 算力** | 支持 FP16/BF16（NPU 混合精度；具体 TFLOPS 未单列，约 3 TFLOPS 级估算） |
| **INT8 算力** | 6 TOPS |
| **FP32 算力** | 未公开（GPU 另计，非 NPU 指标） |
| **显存容量** | 最高 32GB（LPDDR4 / LPDDR4X / LPDDR5） |
| **显存类型** | LPDDR4 / LPDDR4X / LPDDR5 |
| **显存带宽** | 未公开 |
| **TDP** | 约 5–8 W（系统级，依配置） |
| **互联** | PCIe 3.0/2.0、SATA3.0、USB3.1 Type-C、千兆以太网、eDP/DP/HDMI2.1/MIPI |
| **接口** | SoC 板载（开发板 / 边缘盒子） |
| **发布** | 2021 末（发布）/ 2022（量产） |
| **量产/上市** | 2022 量产 |

## 关键特性
- **6 TOPS 三核 NPU**：支持 INT4/INT8/INT16/FP16/BF16/TF32 混合精度。
- **8K 多媒体**：8K@60fps 解码、8K@30fps 编码，多屏异显。
- **32MP ISP**：HDR、3DNR，多摄像头输入（MIPI CSI-2 + DVP + HDMI RX）。
- **丰富高速接口**：PCIe、Type-C、SATA、千兆以太网，易扩展。
- **双 OS**：Android 与 Linux，生态成熟、开发板众多。
- **高能效比**：8nm 工艺，边缘场景能效优于传统 x86 方案。

## 厂商信息
| 项目 | 内容 |
|------|------|
| **公司** | 瑞芯微电子股份有限公司（Rockchip） |
| **总部** | 中国福州 |
| **成立** | 2001 |

## 适用场景
- ✅ 边缘 AI 盒子、8K 多媒体终端、工业 HMI、智能座舱、ARM PC、多屏显示
- ❌ 数据中心训练、超高密度（>16 路）视频分析（弱于专用 AI 芯片 BM1684X）

## 相关卡
- [/docs/cards/others/rockchip-rk3576](/docs/cards/others/rockchip-rk3576) — 同系列中端（6 TOPS 低功耗）
- [/docs/cards/others/hailo](/docs/cards/others/hailo) — 国际边缘 NPU 对照
- [/docs/cards/others/moore-threads-mtt-s5000](/docs/cards/others/moore-threads-mtt-s5000) — 国产 GPU 计算卡对照

## 参考资料
- [瑞芯微 RK3588 产品页（官方）](https://www.rock-chips.com/a/cn/product/RK35xilie/2022/0926/1656.html)
- [Rockchip RK3588 英文规格（官方）](https://www.rock-chips.com/a/en/products/RK35_Series/2022/0926/1660.html)
- [RK3588 产品概览（rockchips.net）](https://www.rockchips.net/product/rk3588)
