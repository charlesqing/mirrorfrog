---
id: rockchip-rk3576
title: "瑞芯微 RK3576"
description: "瑞芯微 RK3576：2024 年第二代 8nm AIoT SoC，6 TOPS 自研 NPU（INT8）、8K30 解码，中端 AIoT 能效标杆。"
keywords: [瑞芯微, RK3576, Rockchip, AIoT, 6 TOPS, NPU, 中端, 2024]
vendor: others
vendor_full: "Rockchip（瑞芯微电子）"
series: "RK35 系列"
release_date: "2024"
status: "量产"
---

# 瑞芯微 RK3576

## 产品概述

**RK3576** 是瑞芯微（Rockchip）于 **2024 年**（2024 年 9 月量产）推出的**第二代 8nm 高性能、低功耗 AIoT 应用处理器 SoC**。它采用八核 64 位架构（4×Cortex-A72 @2.2GHz + 4×Cortex-A53 @1.8GHz），集成 Mali-G52 MC3 GPU 与 **6 TOPS 自研 NPU**，与旗舰 RK3588 保持相同 NPU 算力规格，但以更优能效与场景化设计定位中高端边缘设备。

RK3576 支持 8K@30fps 解码、4K@60fps 编码与 16MP ISP，NPU 支持 INT4/INT8/INT16/FP16/BF16/TF32 混合精度，并对 2B 参数级多模态模型（如 Qwen2-VL-2B）做专项优化，token 生成速度达 10+ 每秒。其 NPU 满负载功耗仅约 3.2W，较 RK3588 降低约 22%，更适合电池供电与移动端侧设备。

## 核心规格

| 项目 | 参数 |
|------|------|
| **架构** | 八核 64 位（4×Cortex-A72 + 4×Cortex-A53）+ Mali-G52 MC3 + 自研 NPU |
| **制程** | 第二代 8nm |
| **FP16 / BF16 算力** | 支持 FP16/BF16（NPU 混合精度；具体值未单列） |
| **INT8 算力** | 6 TOPS（INT8；支持稀疏化加速） |
| **FP32 算力** | 未公开 |
| **显存容量** | 双通道 32-bit LPDDR4/LPDDR4x-4266 / LPDDR5-4800 |
| **显存类型** | LPDDR4 / LPDDR4X / LPDDR5 |
| **显存带宽** | 未公开 |
| **TDP** | NPU 满负载约 3.2 W（整机更低） |
| **互联** | PCIe 2.1/SATA3、USB3.0、双 RGMII、CAN FD、MIPI CSI/DSI、HDMI2.1/eDP/DP |
| **接口** | SoC 板载（核心板 / 开发板） |
| **发布** | 2024-09（量产） |
| **量产/上市** | 2024-09 量产 |

## 关键特性
- **6 TOPS 自研 NPU**：支持 INT4/INT8/INT16/FP16/BF16/TF32，动态稀疏化加速引擎。
- **中端能效标杆**：NPU 满负载仅 3.2W，较 RK3588 降约 22%。
- **8K 多媒体**：8K@30fps 解码、4K@60fps 编码，多屏异显（不同源）。
- **16MP ISP**：HDR（达 120dB）、3DNR，多路 MIPI CSI 输入。
- **2B 模型优化**：针对 Qwen2-VL-2B 等轻量大模型专项加速。
- **丰富接口**：PCIe/SATA/USB3.0/CAN FD，标准 Android/Linux SDK，支持国产 OS。

## 厂商信息
| 项目 | 内容 |
|------|------|
| **公司** | 瑞芯微电子股份有限公司（Rockchip） |
| **总部** | 中国福州 |
| **成立** | 2001 |

## 适用场景
- ✅ 中端 AIoT、边缘计算、工业控制、智能座舱、服务机器人、电池供电终端、会议白板
- ❌ 极致高密度视频分析（弱于专用 AI 加速芯片）

## 相关卡
- [/docs/cards/others/rockchip-rk3588](/docs/cards/others/rockchip-rk3588) — 同系列旗舰（同算力）
- [/docs/cards/others/hailo](/docs/cards/others/hailo) — 国际边缘 NPU 对照
- [/docs/cards/others/moore-threads-mtt-s5000](/docs/cards/others/moore-threads-mtt-s5000) — 国产 GPU 计算卡对照

## 参考资料
- [瑞芯微 RK3576 产品页（官方）](https://www.rock-chips.com/a/en/products/RK35_Series/2024/1212/2033.html)
- [RK3576 处理器（百度百科）](https://baike.baidu.com/item/RK3576%E5%A4%84%E7%90%86%E5%99%A8/67602810)
- [RK3576 Brief Datasheet V1.2（官方 PDF）](https://www.rock-chips.com/uploads/pdf/2024.3.18/191/RK3576%20Brief%20Datasheet%20V1.2-20240311.pdf)
