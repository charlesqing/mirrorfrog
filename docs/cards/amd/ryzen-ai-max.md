---
id: ryzen-ai-max
title: AMD Ryzen AI Max (Strix Halo XDNA 2 50 TOPS 128GB UMA)
sidebar_label: Ryzen AI Max
description: AMD Ryzen AI Max+ 395 (Strix Halo) 详尽规格：16 核 Zen 5 + 40 CU RDNA 3.5 + XDNA 2 NPU 50 TOPS、128GB LPDDR5X、256 GB/s 带宽、96GB VRAM、AI PC 旗舰、3.9× M4 Pro SD 性能。
keywords: [AMD Ryzen AI Max, Strix Halo, XDNA 2, 50 TOPS, 128GB UMA, 96GB VRAM, RDNA 3.5, AI PC, Ryzen AI Max+ 395]
---

# AMD Ryzen AI Max (Strix Halo XDNA 2 128GB UMA)

## 产品概述

**AMD Ryzen AI Max / Max+ (代号 Strix Halo)** 是 AMD **2025-01 CES** 发布、**2025 H1 量产**的 **AI PC 旗舰 APU**。**TSMC N4P + N6 chiplets**，**16 核 Zen 5 CPU** @ 5.1 GHz，**40 CU RDNA 3.5 GPU**（Radeon 8060S 集成显卡，性能匹配独显），**XDNA 2 NPU 50 TOPS**（Ryzen AI 300 的 2×），**256-bit LPDDR5X-8000**，**最大 128 GB UMA**（**96 GB 可分配给 GPU 作为 VRAM**），**256 GB/s 内存带宽**。**Ryzen AI Max+ 395** 是旗舰型号。**Stable Diffusion 3.5 Large 性能 3.9× Apple MacBook Pro M4 Pro 48GB**（AMD 官方数据），**70B LLM 端侧运行**。Strix Halo 是 **AI PC 时代真正的怪兽**。

## 核心规格

| 项目 | 参数 |
|------|------|
| **架构** | **Chiplet 异构**（CPU + GPU + I/O die） |
| **制程** | **TSMC N4P**（CPU/GPU die）+ **TSMC N6**（I/O die） |
| **CPU 核心** | **16 核 Zen 5**（双 CCD） |
| **CPU 频率** | 3.0 GHz 基础 / 5.1 GHz Boost |
| **L2/L3 缓存** | 16 MB L2 / 64 MB L3 |
| **GPU 架构** | **Radeon 8060S（RDNA 3.5）** |
| **GPU CUs** | **40 CU**（相当于 RTX 4060 Laptop 性能水平） |
| **NPU 架构** | **XDNA 2**（升级自 XDNA） |
| **NPU TOPS** | **50 TOPS INT8**（Ryzen AI 300 Phoenix / Hawk Point 25-30 TOPS 的 2×） |
| **AI 总 TOPS** | **126 TOPS**（CPU + GPU + NPU 合计） |
| **内存** | **256-bit LPDDR5X-8000** |
| **最大内存** | **128 GB UMA** |
| **可分配 VRAM** | **96 GB**（AMD Variable Graphics Memory） |
| **内存带宽** | **256 GB/s**（128 GB 8 通道 LPDDR5X-8000） |
| **PCIe** | PCIe Gen 4（16 lanes） |
| **TDP** | **55W / 85W / 120W**（cTDP 灵活） |
| **Wi-Fi** | Wi-Fi 7 |
| **首发型号** | Ryzen AI Max 390、Ryzen AI Max+ 395、Ryzen AI Max+ 388、PRO 系列 |
| **首发日期** | **2025-01 CES 公布、2025 H1 量产、2025-03-17 详细发布** |
| **Ryzen AI Max+ 395 价格** | **笔记本 $1,499-$2,499** |

## 与 Apple M4 Pro / M4 Max 对比

| 指标 | Ryzen AI Max+ 395 | M4 Pro 48GB | M4 Max 128GB |
|------|-------------------|-------------|---------------|
| CPU 核心 | 16 Zen 5 | 14 (10P+4E) | 16 (12P+4E) |
| CPU 频率 | 5.1 GHz | 4.5 GHz | 4.0 GHz |
| GPU CUs | **40 RDNA 3.5** | 20 Apple GPU | 40 Apple GPU |
| NPU TOPS | **50 (XDNA 2)** | 38 (NE) | 38 (NE) |
| 内存 | **128 GB LPDDR5X** | 48 GB LPDDR5X | 128 GB LPDDR5X |
| 内存带宽 | **256 GB/s** | 273 GB/s | 546 GB/s |
| VRAM 可分配 | **96 GB** | 共享 UMA | 共享 UMA |
| Stable Diffusion 3.5 | **3.9× M4 Pro 48GB** | 基准 | 2.5× M4 Pro |
| 70B LLM (Q4) | 可装 96 GB VRAM | swap 性能损失 | 可装 |
| TDP | 55-120W | 38-46W | 70-100W |

> **Stable Diffusion 3.9× 优势**：AMD 官方测试，**Ryzen AI Max+ 395 128GB** 运行 Stable Diffusion 3.5 Large 图像生成比 **MacBook Pro M4 Pro 48GB** 快 **3.9×**。原因是 M4 Pro 48GB 需要 swap 内存（70B LLM 跑不全），而 Ryzen AI Max+ 395 96GB VRAM 装完整模型无需 swap。

## AI 性能实测

| 模型 / 任务 | Ryzen AI Max+ 395 128GB | 备注 |
|-------------|------------------------|------|
| **Llama 3 70B (Q4_K_M)** | **可装完整模型 96GB VRAM** | 端侧 70B |
| Llama 3 70B (Q4) | ~5 tok/s | M4 Pro 48GB swap 后 ~2 tok/s |
| **Stable Diffusion 3.5 Large** | **3.9× M4 Pro 48GB** | 1024×1024 图像生成 |
| **Stable Diffusion 3.5 Medium** | **3.3×**（concurrent） | 同步生成多张 |
| **Phi-4 14B** | **2.6×**（concurrent） | 与 SD 3.5 同时运行 |
| Whisper Large V3 | 实时 | ONNX 加速 |
| 视频会议 AI（背景虚化） | 实时 | NPU 4.0 等价 |
| 图像分割 | 60+ FPS | GPU 加速 |

## 与竞品对比

| 指标 | Ryzen AI Max+ 395 | Intel Core Ultra 9 288V | Qualcomm Snapdragon X Elite |
|------|-------------------|--------------------------|----------------------------|
| CPU | **16 Zen 5** | 4P+4E (8 核) | 12 Oryon |
| GPU | **40 RDNA 3.5 CUs** | 8 Xe2 (Arc 140V) | Adreno (具体未公布) |
| NPU | **50 TOPS (XDNA 2)** | 48 TOPS (NPU 4.0) | 45 TOPS (Hexagon) |
| AI 总 TOPS | **126** | 120 | 75 |
| 内存 | **128 GB LPDDR5X** | 32 GB on-package | 32-64 GB LPDDR5X |
| VRAM 可分配 | **96 GB** | 共享 UMA | 共享 UMA |
| 70B LLM 端侧 | **可装** | 装不下 | 装不下 |
| Copilot+ PC | **认证** | **认证** | **认证** |
| 续航 | ~8-12 小时 | ~20+ 小时 | ~20+ 小时 |

## 适用场景

- **AI PC 笔记本**（Framework Desktop、Asus ROG Flow Z13、HP ZBook Ultra G1a、Lenovo ThinkPad P16）
- **本地 70B LLM 推理**（128GB / 96GB VRAM 装完整 70B Q4）
- **Stable Diffusion 3.5 图像生成**（3.9× M4 Pro）
- **专业 3D 渲染 / CAD**（RDNA 3.5 40 CU 接近 RTX 4060 Laptop）
- **4K/8K 视频编辑**（DaVinci Resolve、Premiere Pro）
- **大模型微调**（LoRA QLoRA 7B-13B 本地训练）
- **科研计算**（CPU 16 核 + GPU 40 CU 混合）

## 厂商信息

| 项目 | 信息 |
|------|------|
| **厂商** | **AMD Inc.**（美国圣克拉拉） |
| **代工** | **TSMC 台湾**（N4P chiplet + N6 I/O die） |
| **软件栈** | **Windows 11 24H2**（Copilot+ PC）、Linux（Ubuntu 24.04、Fedora 41） |
| **AI 框架** | **ROCm**（AMD GPU）、**ONNX Runtime**、**DirectML**、**Lemonade SDK**（AMD 端侧 LLM）、**VLLM**、**llama.cpp**（Vulkan 后端） |
| **OEM 客户** | Framework Desktop、HP ZBook Ultra G1a、Asus ROG Flow Z13、Lenovo ThinkPad P16 |
| **首发价格** | Framework Desktop 16" $1,999 起 / HP ZBook Ultra G1a $2,499 |
| **PRO 系列** | Ryzen AI Max PRO 390 / PRO 395（工作站级，vPro、ECC RAM） |
| **对标竞品** | Intel Core Ultra 200V (Lunar Lake)、Apple M4 Pro/Max、Qualcomm Snapdragon X Elite |

## 关键特性

- **Chiplet 异构**（CPU/GPU/NPU 集成）
- **TSMC N4P** 制程（领先 Intel 4）
- **16 核 Zen 5** @ 5.1 GHz（消费 PC 顶级）
- **40 CU RDNA 3.5 GPU**（Radeon 8060S，接近 RTX 4060 Laptop 独显）
- **XDNA 2 NPU 50 TOPS**（2× Ryzen AI 300）
- **AI 总算力 126 TOPS**（CPU + GPU + NPU）
- **128 GB LPDDR5X** 统一内存（消费 PC 史上最大）
- **96 GB 可分配 VRAM**（跑 70B LLM 端侧）
- **256 GB/s 内存带宽**（256-bit 总线）
- **AMD Variable Graphics Memory**（动态调整 VRAM）
- **PCIe Gen 4** + **Wi-Fi 7**
- **55W / 85W / 120W cTDP 灵活**
- **Copilot+ PC 认证**（Recall、Live Captions、Cocreator）
- **稳定 Windows / Linux 双平台**

## 相关卡

- [AMD MI300X (1.5 TB HBM3 数据中心)](../amd/mi300x) — 数据中心 GPU
- [AMD MI355X (288GB HBM3E 数据中心)](../amd/mi355x) — 数据中心 GPU
- [AMD MI400 (CDNA Next Helios)](../amd/mi400) — 数据中心后继
- [Intel Core Ultra 2 (Lunar Lake 48 TOPS)](../intel/core-ultra-2) — 同代 AI PC 竞品
- [Apple M4 Max (128GB UMA 546 GB/s)](../others/apple-m4-max) — 桌面 GPU
- [Apple M4 Pro (64GB UMA)](../others/apple-m4-pro) — 桌面端
- [NVIDIA RTX 5090 (32GB GDDR7 消费 GPU)](../nvidia/rtx-5090) — 桌面 GPU
- [架构分类: APU 加速处理](../../architectures/arch-apu) — APU 架构
- [AMD Strix Halo 官方介绍](https://www.amd.com/en/blogs/2025/amd-ryzen-ai-max-395-processor-breakthrough-ai-.html)
