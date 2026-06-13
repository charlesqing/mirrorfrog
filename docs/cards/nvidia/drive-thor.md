---
id: drive-thor
title: NVIDIA DRIVE Thor (1000 TOPS 自动驾驶 SoC)
sidebar_label: DRIVE Thor
description: NVIDIA DRIVE Thor 详尽规格：Blackwell 架构 GPU、1000 INT8 TOPS / 2000 FP4 TFLOPS、Neoverse V3AE CPU、64GB LPDDR5X、273 GB/s、车规 ASIL-D、ZEEKR 极氪首发。
keywords: [NVIDIA DRIVE Thor, DRIVE Thor, Blackwell 自动驾驶, 1000 TOPS INT8, 2000 FP4 TFLOPS, Neoverse V3AE, ASIL-D, ZEEKR 极氪]
---

# NVIDIA DRIVE Thor (1000 TOPS 自动驾驶)

## 产品概述

**NVIDIA DRIVE Thor** 是 NVIDIA 第四代车规级自动驾驶 SoC，**2022-09 GTC 公布**，**2024 年流片**，**2025 年 8-9 月 Developer Kit GA**，**2025 H2 起 ZEEKR 极氪量产**。**4nm Samsung 代工**（推测），**Blackwell GPU 架构**（车规定制版），**1,000 INT8 TOPS / 2,000 FP4 TFLOPS**（超过 Orin 254 TOPS **4×**），**ARM Neoverse V3AE**（v9.2-A）CPU，**64 GB LPDDR5X 4266 MHz**、**273 GB/s 内存带宽**，**256 GB UFS**，**350W 系统功耗**。**全球首款**集成 **Inference Transformer Engine**（Transformer DNN 推理加速 9×）的车规 SoC，支持 **FP4/FP8/INT8/FP16** 量化。DriveOS 7 + Halos 安全系统，**ISO 26262 ASIL-D** + **ISO 21434** 双认证。

## 核心规格

| 项目 | 参数 |
|------|------|
| **架构** | **Blackwell GPU 架构**（车规定制，无 HBM 显存） |
| **制程** | **4nm Samsung 4LPP**（推测） |
| **GPU 算力** | **1,000 INT8 TOPS** / **2,000 FP4 TFLOPS**（Orin 254 TOPS 的 **4×**） |
| **GPU 算力** | 1,000 FP8 TFLOPS（Transformer 优化） |
| **FP4 算力** | 2,000 FP4 TFLOPS（量化感知训练 + 部署） |
| **CPU** | **ARM Neoverse V3AE**（v9.2-A，SMP）14 核（推测） |
| **CPU 性能** | **2.3×** Orin（Cortex-A78A）SPECrate 2017_int_base |
| **Neural Engine 集成** | **Inference Transformer Engine**（首颗车规 SoC 集成） |
| **Transformer 加速** | **9×** DNN 推理（vs 不带 Transformer Engine） |
| **内存** | **64 GB LPDDR5X** @ 4266 MHz |
| **内存带宽** | **273 GB/s**（256-bit LPDDR5X） |
| **存储** | **256 GB UFS** |
| **PVA 视觉加速** | 512 INT16 GMAC/s（Orin 是 2048 INT8 GMAC/s × 2） |
| **ISP** | **3.5 Gigapixels/s**（Orin 1.85 GP/s 的 1.9×） |
| **视频编码** | 3.1 Gigapixels/s H.265 |
| **视频解码** | 2.9 Gigapixels/s H.265 |
| **摄像头接口** | 16× GMSL 2 + 2× GMSL 3（共 18 路） |
| **以太网** | 76 Gb/s（用于激光雷达 / 毫米波雷达） |
| **车规接口** | 4× CAN、PCIe Gen 5 |
| **安全 MCU** | Renesas U2A16（ASIL-D 独立监控） |
| **系统功耗** | **350W**（SKU10/SKU12 两档） |
| **工作温度** | 0-35°C（SKU10）/ 0-45°C（SKU12） |
| **电压输入** | 9-16V（静态）/ 7-32V（瞬态） |
| **尺寸** | DevKit 15×37×15 cm / 6.2 kg |
| **首发 OEM** | **ZEEKR 极氪**（2025 H2 量产）、Volvo EX90（2025-2026） |
| **首发日期** | **2024 量产、2025-08-25 DevKit 预售、2025-09 DevKit 发货** |
| **DevKit 价格** | **$5,499**（DRIVE AGX Thor Developer Kit） |
| **TDP** | 500 W |

## 与 Orin 对比

| 指标 | DRIVE Thor | DRIVE Orin | 提升 |
|------|------------|------------|------|
| 架构 | **Blackwell** | Ampere | 新一代 |
| 制程 | 4nm | 8nm Samsung | 2× 晶体管密度 |
| GPU 算力 (INT8) | **1,000 TOPS** | 254 TOPS | **4×** |
| GPU 算力 (FP4) | **2,000 TFLOPS** | N/A | 全新增益 |
| Transformer 加速 | **9×**（专用引擎） | 无 | 全新增益 |
| CPU | **Neoverse V3AE** | Cortex-A78A | **2.3× SPECrate** |
| 内存 | **64 GB LPDDR5X** | 32 GB LPDDR5 | 2× 容量 |
| 内存带宽 | **273 GB/s** | 204.8 GB/s | +33% |
| ISP | **3.5 GP/s** | 1.85 GP/s | 1.9× |
| 视频编码 | 3.1 GP/s | 1.0 GP/s | 3.1× |
| 系统功耗 | 350W | 60W | 5.8× |
| 摄像头 | 16× GMSL 2 + 2× GMSL 3 | 16× GMSL 2 | +2× GMSL 3 |
| 安全 MCU | Renesas U2A16 | 集成 | 独立监控 |
| 软件栈 | DriveOS 7 + Halos | DriveOS 6 | 新一代安全 |
| 认证 | **ASIL-D + ISO 21434** | ASIL-B | 最高安全 |

## 适用场景

- **L2+ 至 L4 自动驾驶**（Tesla FSD、Mercedes Drive Pilot、Volvo XC90）
- **舱驾一体**（cluster + infotainment + ADAS + parking 单一 SoC）
- **车端大模型推理**（LLM、VLM、端侧 GPT for 车机）
- **生成式 AI 在车端**（DriveAGX + Cosmos 仿真训练）
- **机器人 / 工业自动化**（DRIVE Thor + Isaac Sim）
- **多 SoC 协同**（DRIVE Hyperion 9 平台 2 颗 Thor = 254 TOPS×2 → 508 TOPS→ 2000 TOPS）

## 厂商信息

| 项目 | 信息 |
|------|------|
| **厂商** | **NVIDIA Corporation** |
| **设计** | NVIDIA 美国圣克拉拉（车规定制） |
| **代工** | **Samsung 韩国**（4nm 4LPP） |
| **软件栈** | **DriveOS 7**（安全 RTOS）、**DriveWorks** SDK、**Halos** 全栈安全 |
| **AI 框架** | **TensorRT**、**CUDA**、**Triton Inference Server**、**TensorRT-LLM** |
| **首发客户** | **ZEEKR 极氪**（2025 H2 量产车）、Volvo EX90（2026）、Polestar、Mercedes-Benz |
| **DevKit 价格** | **$5,499**（2025-09 发货） |
| **车规认证** | **ISO 26262 ASIL-D**、**ISO/SAE 21434**（网络安全） |
| **Hyperion 9 平台** | 双 Thor SoC + DriveOS + 14 摄像头 + 9 雷达 + 1 激光雷达 + 12 超声波 |

## 关键特性

- **Blackwell GPU 架构**（车规定制版）
- **1,000 INT8 TOPS**（Orin 254 TOPS 的 4×）
- **2,000 FP4 TFLOPS**（车规首颗 FP4 支持）
- **Inference Transformer Engine**（车规首颗 Transformer 加速，9× 加速）
- **Neoverse V3AE CPU**（ARM v9.2-A，2.3× Orin CPU）
- **64 GB LPDDR5X** 273 GB/s（车规 SoC 最大内存）
- **18 路摄像头**（16× GMSL 2 + 2× GMSL 3）
- **76 Gb/s 以太网**（车规 10 倍常规）
- **ISO 26262 ASIL-D**（最高汽车功能安全等级）
- **ISO/SAE 21434**（汽车网络安全）
- **DriveOS 7** 安全 RTOS + **Halos** 全栈安全系统
- **Multi-Instance GPU (MIG)** 支持（IVI + ADAS 域隔离）

## 相关卡

- [NVIDIA DRIVE Orin (254 TOPS 自动驾驶)](../nvidia/jetson-orin) — 前代车规
- [NVIDIA Jetson Thor (机器人 SoC)](../nvidia/jetson-thor) — 机器人同代
- [NVIDIA H100 / B200 (数据中心)](../nvidia/b200) — 同代数据中心
- [NVIDIA RTX 5090 (消费 GPU)](../nvidia/rtx-5090) — 消费端
- [Mobileye EyeQ6 / 高通 Snapdragon Ride](https://www.mobileye.com/) — 竞品车规
- [Tesla AI 训练芯片 Dojo V1/V2](../others/tesla-dojo) — 训练配套
- [NVIDIA Halos 安全系统](https://www.nvidia.com/en-us/automotive/halos/)
- [NVIDIA DRIVE AGX Thor Developer Kit](https://developer.nvidia.com/drive/agx)
