---
id: apple-a17-pro
title: Apple A17 Pro (iPhone 15 Pro 首款 3nm 硬件光追)
sidebar_label: A17 Pro
description: Apple A17 Pro 详尽规格：3nm N3B 首发、6 核 CPU + 6 核 GPU（硬件光线追踪）+ 16 核 NE 35 TOPS、iPhone 15 Pro Max、8GB LPDDR5、AV1 解码。
keywords: [Apple A17 Pro, A17 Pro, iPhone 15 Pro, 3nm N3B, hardware ray tracing, 35 TOPS NE, USB 3, AV1]
---

# Apple A17 Pro (iPhone 15 Pro 首款 3nm)

## 产品概述

**Apple A17 Pro** 是 Apple 2023-09-12 发布的 **iPhone 15 Pro / Pro Max** 专用 SoC，**全球首款 3nm 制程手机芯片**（TSMC **N3B**），**190 亿晶体管**。**6 核 CPU**（2P @ 3.78 GHz + 4E），**6 核 GPU**（首次在 iPhone 上 **硬件光线追踪**），**16 核 Neural Engine 35 TOPS**，**8 GB LPDDR5**，**USB 3**（10 Gbps，告别 Lightning 限制），**AV1 硬件解码**。A17 Pro 是 Apple **第一次**把 ProRes 硬件加速、硬件光线追踪、AV1 解码带到 iPhone，是移动端游戏机皇（可玩《生化危机 4》《刺客信条：幻景》等 3A 大作）。

## 核心规格

| 项目 | 参数 |
|------|------|
| **架构** | Apple A-Series (iPhone 移动 SoC) |
| **制程** | TSMC **3nm (N3B)** — **全球首款 3nm 芯片** |
| **晶体管** | **190 亿**（A16 160 亿的 1.2×） |
| **CPU 核心** | 6（2P @ 3.78 GHz + 4E） |
| **L1/L2/L3 缓存** | 1.4 MB L1 / 16 MB L2 / 24 MB SLC |
| **GPU 核心** | 6（**首次硬件光线追踪**） |
| **GPU 新特性** | **硬件光线追踪**、动态缓存、网格着色 |
| **Neural Engine** | 16-core, **35 TOPS INT8**（A16 17 TOPS 的 2×） |
| **统一内存** | **8 GB LPDDR5** |
| **内存带宽** | ~51.2 GB/s（8 GB @ 6400 MT/s） |
| **媒体引擎** | 硬件 H.264/HEVC/ProRes/ProRes RAW/AV1 解码 |
| **ProRes** | **首次在 iPhone 硬件加速 ProRes 编码/解码** |
| **接口** | **USB 3**（10 Gbps，告别 Lightning USB 2.0） |
| **TDP** | ~8-10 W（iPhone 持续负载） |
| **首发设备** | iPhone 15 Pro / Pro Max（$999/$1,199 起） |
| **首发日期** | **2023-09-12** |
| **iPhone 15 Pro 128GB** | **$999** |
| **iPhone 15 Pro Max 256GB** | **$1,199** |

## 与 A16 Bionic 对比

| 指标 | A17 Pro | A16 Bionic | 提升 |
|------|---------|------------|------|
| 制程 | **3nm N3B** | 4nm N4P | 全球首发 3nm |
| 晶体管 | **190 亿** | 160 亿 | +19% |
| CPU 核心 | 6 (2P+4E) | 6 (2P+4E) | 同 |
| CPU 频率 | 3.78 GHz | 3.46 GHz | +9% |
| GPU 核心 | 6 + **硬件光追** | 5 | +1 核 + 光追 |
| Neural Engine | **35 TOPS** | 17 TOPS | **2.1×** |
| 内存 | 8 GB LPDDR5 | 6 GB LPDDR5 | +2 GB |
| 接口 | **USB 3 (10 Gbps)** | Lightning USB 2.0 | 21× 提速 |
| AV1 解码 | **支持** | 不支持 | 全新增益 |
| ProRes | **硬件加速** | 软件 | 影视级 |
| 单核性能 | +10% | 基准 | 提升 |
| 多核性能 | +12% | 基准 | 提升 |

## 端侧 AI 性能

| 模型 / 任务 | 量化 | 性能 | 备注 |
|-------------|------|------|------|
| Llama 2 7B (Q4_K_M) | llama.cpp | ~10 tok/s | 8GB 装下 |
| Stable Diffusion XL (CoreML) | FP16 | 0.8 it/s | 图像生成 |
| Whisper Large V3 (CoreML) | FP16 | 2× 实时 | 语音转录 |
| 实时翻译 | Apple 内置 | 实时 | iOS 17 |
| 图像分割（Person Seg） | CoreML | 60 FPS | 视频会议 |
| 物体识别（VNCoreML） | CoreML | 120 FPS | 相机 |

> **35 TOPS 突破**：A17 Pro 的 Neural Engine 算力是 A16 的 **2.1×**，首次让 iPhone 具备 **35 TOPS** 级别的本地 AI 推理能力。虽然不及 M2/M3 系列，但已经可以流畅运行 **7B 量化 LLM**。

## 适用场景

- **iPhone 15 Pro / Pro Max**（3A 手游：《生化危机 4》《刺客信条：幻景》《原神》全高画质）
- **移动端视频制作**（外接 SSD 录制 ProRes LOG）
- **3D 建模与 AR**（Reality Composer、ARKit）
- **专业摄影**（48MP ProRAW、5× 长焦潜望）
- **开发者**：Core ML 模型部署
- **移动端 LLM 推理**（llama.cpp 跑 7B 量化）

## 厂商信息

| 项目 | 信息 |
|------|------|
| **厂商** | Apple Inc. |
| **设计** | Apple 自研（加州 Cupertino） |
| **代工** | **TSMC 台湾**（3nm N3B 产线，全球首颗 3nm） |
| **软件栈** | iOS 17 — iOS 18 |
| **AI 框架** | Core ML、MLX、Create ML |
| **首发价格** | iPhone 15 Pro 128GB **$999** / 256GB $1,099 |
| **iPhone 15 Pro Max 价格** | 256GB **$1,199** / 512GB $1,399 / 1TB $1,599 |
| **停产日期** | 2024-09（A18 Pro 发布） |
| **EOL 价格** | 已停产，二手市场 $500-$700 |

## 关键特性

- **3nm (N3B) 制程** — **全球首款 3nm 芯片**（领先 Qualcomm 半年）
- **190 亿晶体管**（A16 160 亿的 1.2×）
- **6 核 GPU + 硬件光线追踪**（iPhone 首次）
- **16 核 Neural Engine 35 TOPS**（2.1× A16）
- **8 GB LPDDR5**（A16 6 GB 的 1.3×）
- **USB 3 (10 Gbps)**（告别 Lightning USB 2.0 限制）
- **ProRes 硬件加速**（影视级视频制作）
- **AV1 硬件解码**（流媒体节能）
- **Wi-Fi 6E**、**5G sub-6 + mmWave**、**Thread**
- **ProMotion 120 Hz**、**Always-On Display**
- **钛合金边框**（iPhone 15 Pro Max 史上最轻 Pro Max）
- **Action Button**（替代静音拨杆）
- **48MP ProRAW + 5× 潜望长焦**（Pro Max）

## 相关卡

- [Apple A18 Pro (iPhone 16 Pro)](./apple-a18-pro) — 后继
- [Apple A19 Pro (iPhone 17 Pro)](./apple-a19-pro) — 后续
- [Apple M3 Pro / Max (MacBook Pro 2023)](./apple-m3-max) — 桌面端
- [Apple M2 Pro (Mac mini 2023)](./apple-m4-pro) — 桌面端
- [架构分类: NPU 移动 SoC](../../architectures/arch-npu) — NPU 分类
- [Qualcomm Snapdragon 8 Gen 3 (2023 移动)](https://www.qualcomm.com/) — 同代竞品
- [MediaTek Dimensity 9300 (2023 移动)](https://www.mediatek.com/) — 同代竞品
