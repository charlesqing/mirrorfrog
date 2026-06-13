---
id: core-ultra-2
title: Intel Core Ultra Series 2 (Lunar Lake NPU 48 TOPS AI PC)
sidebar_label: Core Ultra 2 (Lunar Lake)
description: Intel Core Ultra Series 2 (Lunar Lake) 详尽规格：Foveros 3D 封装、4P Lion Cove + 4E Skymont、NPU 4.0 48 TOPS、Xe2 GPU 60+ TOPS、内存 on-package、AI PC 旗舰。
keywords: [Intel Core Ultra Series 2, Lunar Lake, LNL, NPU 4.0, 48 TOPS, Xe2 GPU, on-package LPDDR5X, Foveros, AI PC]
---

# Intel Core Ultra Series 2 (Lunar Lake NPU 48 TOPS)

## 产品概述

**Intel Core Ultra Series 2**（代号 **Lunar Lake / LNL**）是 Intel 2024-09-03 发布、2024-09-24 销售的 **第二代 AI PC 移动 SoC**，**Foveros 3D 封装**（Compute Tile + Platform Controller Tile 双晶片），**TSMC N3B + N6 工艺**。**4 核 P-core (Lion Cove) + 4 核 E-core (Skymont)** @ 5.0 GHz，**Intel Arc 130V/140V GPU（Xe2 架构）**（>60 TOPS 算力），**NPU 4.0 48 TOPS**（Meteor Lake 11 TOPS 的 **4×**），**16/32 GB LPDDR5X on-package**（消除内存走线延迟）。**Core Ultra 7 258V / 268V、Core Ultra 9 288V** 等型号。**全球首款**满足 **Microsoft Copilot+ PC** 标准的 x86 芯片（40+ TOPS NPU）。

## 核心规格

| 项目 | 参数 |
|------|------|
| **架构** | **Foveros 3D 封装**（Compute Tile + Platform Controller Tile） |
| **制程** | **TSMC N3B**（Compute Tile）+ **TSMC N6**（Platform Controller Tile） |
| **CPU 核心** | 8（**4P Lion Cove + 4E Skymont**） |
| **CPU 频率** | 5.0 GHz P / 3.7 GHz E（Core Ultra 7 268V） |
| **L2 缓存** | 12 MB |
| **L3 缓存** | 8-12 MB（型号相关） |
| **GPU 架构** | **Intel Arc 130V / 140V (Xe2)** |
| **GPU 算力** | **> 60 TOPS**（Xe2，3.5× Meteor Lake） |
| **NPU** | **NPU 4.0**，**48 TOPS INT8**（3× Meteor Lake 11 TOPS） |
| **AI 总算力** | **> 120 TOPS**（NPU 48 + GPU 60 + CPU 算力） |
| **内存** | **16/32 GB LPDDR5X on-package**（与 SoC 一体封装，8533 MT/s） |
| **内存带宽** | ~136 GB/s（128-bit，8533 MT/s） |
| **PCIe** | 4× PCIe Gen 5 + 4× PCIe Gen 4 |
| **TDP** | 17 W |
| **Wi-Fi** | Wi-Fi 7 (BE201) |
| **Bluetooth** | Bluetooth 5.4 |
| **首发型号** | Core Ultra 5 226V / 228V / 236V / 238V、Core Ultra 7 256V / 258V / 266V / 268V、Core Ultra 9 288V |
| **首发日期** | **2024-09-03 公布、2024-09-24 上市** |
| **Core Ultra 7 258V 价格** | **~$499**（OEM 笔记本参考价） |

## 与 Meteor Lake (Core Ultra Series 1) 对比

| 指标 | Lunar Lake (Series 2) | Meteor Lake (Series 1) | 提升 |
|------|------------------------|------------------------|------|
| 制程 | N3B + N6 | Intel 4 + TSMC N5/N6 | 第三代 3nm |
| CPU 核心 | 4P Lion Cove + 4E Skymont | 6P Meteor Lake + 8E | 不同微架构 |
| P 核 IPC | +14% vs Redwood Cove | 基准 | 显著 |
| E 核 IPC | +38% vs Crestmont | 基准 | 显著 |
| GPU | **Xe2** | Xe-LPG | 新一代 |
| GPU TOPS | **>60** | ~17 | 3.5× |
| NPU | **NPU 4.0 48 TOPS** | NPU 3.0 11 TOPS | **4×** |
| 内存 | **LPDDR5X on-package** | LPDDR5X 独立 | on-package 减延迟 |
| AI PC 认证 | **Copilot+ PC** | 普通 AI PC | 旗舰 |
| 续航 | 提升 40%（推测） | 基准 | 显著 |
| 线程数 | 8 (4P+4E) | 22 (6P+8E+LP-E) | 减少 |

## AI PC 性能

| 模型 / 任务 | NPU 4.0 (48 TOPS) | 备注 |
|-------------|-------------------|------|
| Phi-3 3.8B (Q4) | 实时对话 | Copilot+ 本地 LLM |
| Llama 3 8B (Q4) | ~12 tok/s | ONNX DirectML |
| Stable Diffusion XL | 1.5 it/s | 图像生成 |
| Whisper Large V3 | 5× 实时 | 语音转录 |
| **Windows Copilot Recall** | 实时 | 历史回溯 |
| **Live Captions 实时翻译** | 实时 | 100+ 语言 |
| **Windows Studio Effects** | 实时 | 背景虚化、眼神接触 |
| Cocreator (Paint) | 实时 | 草图转图像 |

> **Copilot+ PC 认证**：Core Ultra Series 2 是 **全球首批**通过 Microsoft **Copilot+ PC** 标准的 x86 芯片（要求 NPU ≥ 40 TOPS、内存 ≥ 16 GB、存储 ≥ 256 GB），解锁 **Recall**（历史回溯）、**Live Captions**（实时翻译）、**Cocreator**（草图转图像）等独占 AI 功能。

## 适用场景

- **Copilot+ PC 笔记本**（Surface Pro 11、Surface Laptop 7、Lenovo Yoga Slim 7i、HP OmniBook Ultra、ASUS Zenbook S 14）
- **本地 LLM 推理**（Phi-3 3.8B、Llama 3 8B 量化）
- **AI 增强视频会议**（Windows Studio Effects：背景虚化、眼神接触、自动取景）
- **创意工作**（Adobe Lightroom AI 降噪、Premiere Pro AI 自动剪辑）
- **游戏本**（Xe2 GPU 60+ TOPS + XeSS 2 帧生成）
- **企业办公**（续航 20+ 小时、AI 安全检测）
- **教育/学生**（Copilot 学习辅助）

## 厂商信息

| 项目 | 信息 |
|------|------|
| **厂商** | **Intel Corporation**（美国圣克拉拉） |
| **代工** | **TSMC 台湾**（N3B Compute Tile + N6 Platform Controller Tile） |
| **封装** | **Intel Foveros 3D**（自有先进封装，Oregon 工厂） |
| **软件栈** | **Windows 11 24H2**（Copilot+ PC）、Linux（Ubuntu 24.04、Fedora 40） |
| **AI 框架** | **OpenVINO**、**ONNX Runtime**、**DirectML**、**Windows ML** |
| **OEM 客户** | Microsoft Surface、Dell XPS 13、Lenovo Yoga、HP OmniBook、ASUS Zenbook、Samsung Galaxy Book |
| **首发价格** | Core Ultra 7 258V 笔记本 **$1,099-$1,499** |
| **对标竞品** | AMD Ryzen AI 300 (Strix Point / Strix Halo)、Qualcomm Snapdragon X Elite |

## 关键特性

- **Foveros 3D 封装**（Compute Tile + Platform Controller Tile 异构集成）
- **TSMC N3B** Compute Tile（第三代 3nm）
- **4P Lion Cove + 4E Skymont**（P 核 IPC +14%，E 核 IPC +38%）
- **NPU 4.0 48 TOPS**（3× Meteor Lake）
- **Intel Arc Xe2 GPU**（>60 TOPS，3.5× Meteor Lake）
- **AI 总算力 120+ TOPS**（NPU + GPU + CPU 合计）
- **LPDDR5X on-package**（8533 MT/s，16/32 GB）
- **Copilot+ PC 认证**（Recall、Live Captions、Cocreator）
- **Wi-Fi 7 + Bluetooth 5.4**
- **4× PCIe Gen 5 + 4× PCIe Gen 4**
- **Thread Director 改进**（更智能调度 P/E/LP-E 核）
- **17W / 28W / 37W cTDP 灵活配置**

## 相关卡

- [Intel Gaudi 3 (数据中心训练)](./gaudi-3) — 数据中心
- [Intel Gaudi 4 (数据中心训练 推测)](./gaudi-4) — 数据中心后继
- [AMD Ryzen AI Max (Strix Halo / XDNA 2)](../amd/ryzen-ai-max) — 同代 AI PC 竞品
- [NVIDIA RTX 5090 (消费 GPU)](../nvidia/rtx-5090) — 桌面 GPU
- [Apple M4 Pro (64GB UMA)](../others/apple-m4-pro) — Apple Silicon 竞品
- [Qualcomm AI 200 / 300 (Cloud AI)](../others/qualcomm-ai-200) — 竞品
- [架构分类: APU 加速处理](../../architectures/arch-apu) — APU 架构
- [Intel Core Ultra 官方页面](https://www.intel.com/content/www/us/en/products/details/processors/core-ultra.html)
