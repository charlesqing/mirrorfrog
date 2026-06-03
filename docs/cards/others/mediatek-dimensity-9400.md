---
id: mediatek-dimensity-9400
title: MediaTek Dimensity 9400 (Cortex-X925 NPU 890 Agentic AI)
sidebar_label: Dimensity 9400
description: MediaTek Dimensity 9400 详尽规格：3nm N3E 第二代、8 核 All Big Core（Cortex-X925 @ 3.62 GHz）、Immortalis-G925 MC12 GPU、NPU 890 第八代、Agentic AI、LPDDR5X 10667 Mbps。
keywords: [MediaTek Dimensity 9400, Cortex-X925, Immortalis-G925, NPU 890, Agentic AI, 端侧 LoRA 训练, 端侧视频生成]
---

# MediaTek Dimensity 9400 (Cortex-X925 Agentic AI)

## 产品概述

**MediaTek Dimensity 9400** 是 MediaTek 2024-10-09 发布的 **2024 移动旗舰 SoC**，**TSMC 第二代 3nm (N3E)** 制程，**291 亿晶体管**。**第二代 All Big Core 设计**：**1× Cortex-X925 @ 3.62 GHz**（ARM 史上最大 IPC 提升）+ **3× Cortex-X4** + **4× Cortex-A720**，**Arm Immortalis-G925 MC12 GPU**，**MediaTek 第八代 NPU 890**（**全球首款**支持 **Agentic AI 引擎**、**端侧 LoRA 训练**、**端侧视频生成**）。**LPDDR5X 10667 Mbps**（**全球最快手机内存**），**12 MB L3 + 10 MB SLC**。**Vivo X200**、**OPPO Find X8**、**Xiaomi 15** 首发。

## 核心规格

| 项目 | 参数 |
|------|------|
| **架构** | ARM v9.2（第二代 3nm All Big Core） |
| **制程** | TSMC **第二代 3nm (N3E)** |
| **晶体管** | **291 亿** |
| **CPU 核心** | 8（**All Big Core**：1+3+4 设计） |
| **超大核** | **1× Cortex-X925 @ 3.62 GHz**（ARM "Black Hawk"，IPC +15% vs Cortex-X4） |
| **大核** | 3× Cortex-X4 @ 3.25 GHz |
| **中核** | 4× Cortex-A720 @ 2.0 GHz |
| **L2 缓存** | 2 MB（X925） + 1 MB（X4） + 512 KB（A720） |
| **L3 缓存** | **12 MB** |
| **SLC** | 10 MB |
| **GPU** | **Arm Immortalis-G925 MC12**（12 核，硬件光追 2） |
| **GPU 性能** | 比 Immortalis-G720（Dimensity 9300）**+41% 峰值** / **+40% 光追** / **-44% 功耗** |
| **NPU** | **MediaTek 第八代 NPU 890**（1 performance 核 + 1 flexible 核） |
| **AI 引擎** | **Dimensity Agentic AI Engine (DAE)**（**全球首款** Agentic AI 引擎） |
| **AI 性能** | 100% 更快 Diffusion 推理、80% 更快 LLM 提示、>50 token MLLM 生成、35% 更省电 |
| **AI 特性** | 端侧 LoRA 训练、端侧视频生成（Diffusion Transformer）、Agentic AI、MoE LLM 支持 |
| **内存** | **LPDDR5X 10667 Mbps**（**全球最快手机内存**） |
| **最大内存** | 24 GB |
| **存储** | UFS 4.0（4 通道） |
| **5G** | 3GPP Release-17、4CC-CA、sub-6 GHz 7 Gbps |
| **Wi-Fi** | **Wi-Fi 7**（专用 4nm 协芯片，7.3 Gbps） |
| **Bluetooth** | Bluetooth 6.0 |
| **首发设备** | Vivo X200 Pro（2024-10）、OPPO Find X8、Xiaomi 15 |
| **首发日期** | **2024-10-09** |
| **Vivo X200 Pro 价格** | **~$900-$1,100** |

## 与 Snapdragon 8 Gen 3 / Dimensity 9300 对比

| 指标 | Dimensity 9400 | Snapdragon 8 Gen 3 | Dimensity 9300 |
|------|----------------|---------------------|----------------|
| 制程 | 3nm N3E | 4nm TSMC N4P | 4nm TSMC N4P |
| CPU 核心 | 8 (All Big) | 8 (1+5+2) | 8 (4+4) |
| 超大核 | **Cortex-X925 @ 3.62 GHz** | Cortex-X4 @ 3.3 GHz | Cortex-X4 @ 3.25 GHz |
| GPU | Immortalis-G925 MC12 | Adreno 750 | Immortalis-G720 MC12 |
| NPU | **NPU 890 (8th gen)** | Hexagon NPU | NPU 790 (7th gen) |
| 内存 | **LPDDR5X 10667** | LPDDR5X 8533 | LPDDR5X 9600 |
| Agentic AI | **全球首款** | 无 | 无 |
| 端侧 LoRA | **支持** | 不支持 | 不支持 |
| 端侧视频生成 | **支持** | 不支持 | 不支持 |

## AI 性能实测

| 模型 / 任务 | Dimensity 9400 (NPU 890) | 备注 |
|-------------|---------------------------|------|
| **Stable Diffusion 3.5** | **2× Dimensity 9300** | Diffusion Transformer |
| **Llama 3 8B (Q4)** | **1.8× Dimensity 9300** | 80% 更快 LLM 提示 |
| **Phi-3.5 Mini (3.8B)** | 50+ tokens/sec | MLLM 生成 |
| **端侧 LoRA 训练 (1B)** | **全球首次** | 微调 1B 模型 |
| **端侧视频生成 (SD 视频)** | **全球首次** | 几秒生成 4s 480p 视频 |
| **GPT-4V 类 VLM (Qwen-VL)** | 实时 | 多模态理解 |
| **MoE LLM (Mixtral 8x7B)** | 支持 | NPU 灵活核调度 |
| **ETHZ v6 AI 基准** | **业界第一** | AI 性能领先 |

> **Agentic AI 引擎 (DAE)**：Dimensity 9400 是 **全球首款**支持 **Agentic AI 引擎**的移动 SoC。Agentic AI 不同于传统 Generative AI：AI Agent 可以自主感知环境、做决策、调用工具、执行多步骤任务。Dimensity 9400 的 NPU 890 通过 **performance 核 + flexible 核** 双核架构，能效比提升 35%。

## 适用场景

- **Vivo X200 / X200 Pro**（2024-10，~$900 起步）
- **OPPO Find X8 / Find X8 Pro**（2024-10，~$700 起步）
- **Xiaomi 15 / 15 Pro**（2024-10，$700 起步）
- **移动端 LLM 推理**（80% 更快 LLM 提示）
- **端侧 AI 训练**（1B 模型 LoRA 训练）
- **端侧视频生成**（Diffusion Transformer 几秒生成 4s 视频）
- **AI Agent 应用**（自主多步骤任务）
- **移动游戏**（Immortalis-G925 硬件光追 2 + 41% 性能提升）
- **影像处理**（Imagiq 1090 全 HDR 变焦、Generative AI Zoom 100x）

## 厂商信息

| 项目 | 信息 |
|------|------|
| **厂商** | **MediaTek Inc.**（台湾新竹） |
| **设计** | MediaTek 总部设计 + ARM 核心 IP 授权 |
| **代工** | **TSMC 台湾**（3nm N3E 产线） |
| **软件栈** | Android 15 (OriginOS 5 / ColorOS 15 / HyperOS 2) |
| **AI 框架** | **MediaTek Dimensity Agentic AI Engine (DAE)**、**MediaTek NeuroPilot** SDK、**Android NNAPI**、**ExecuTorch**、**LiteRT** |
| **首发客户** | **Vivo** X200（2024-10）、**OPPO** Find X8、**Xiaomi** 15 |
| **OEM 客户** | Vivo、OPPO、Xiaomi、Honor、Samsung Galaxy（中国/印度）、传音 |
| **对标竞品** | Qualcomm Snapdragon 8 Gen 3 / 8 Elite、Apple A18 / A18 Pro |
| **2025 后继** | Dimensity 9400+（3.73 GHz X925，2025-04） |

## 关键特性

- **第二代 3nm (N3E)** 制程
- **第二代 All Big Core 设计**（1+3+4 八核）
- **Cortex-X925** 超大核（**ARM 史上最大 IPC 提升** +15%）
- **Cortex-X925 @ 3.62 GHz**（单核最强移动 CPU）
- **Immortalis-G925 MC12 GPU**（41% 性能 / 40% 光追 / 44% 省电）
- **MediaTek 第八代 NPU 890**（双核：1 性能 + 1 灵活）
- **Dimensity Agentic AI Engine (DAE)**（**全球首款** Agentic AI 引擎）
- **端侧 LoRA 训练**（**全球首次** 1B 模型端侧训练）
- **端侧视频生成**（**全球首次** Diffusion Transformer 视频）
- **MoE LLM 支持**（Mixtral 8x7B 灵活核调度）
- **LPDDR5X 10667 Mbps**（**全球最快手机内存**）
- **Wi-Fi 7**（专用 4nm 协芯片，7.3 Gbps）
- **Bluetooth 6.0**、**5G sub-6 7 Gbps**、**3GPP R17**
- **Imagiq 1090**（HDR 变焦、Generative AI Zoom 100x）
- **MiraVision 1090**（OLED de-burn 补偿）
- **24-bit 384 KHz** 蓝牙音频

## 相关卡

- [Apple A18 Pro (iPhone 16 Pro)](./apple-a18-pro) — 同代竞品
- [Apple A19 Pro (iPhone 17 Pro)](./apple-a19-pro) — 后续
- [Qualcomm Snapdragon X Elite (PC 芯片)](./qualcomm-snapdragon-x-elite) — 跨品类
- [NVIDIA Jetson Thor (机器人 SoC)](../nvidia/jetson-thor) — 边缘 AI
- [Apple A18 (iPhone 16 入门)](./apple-a18) — 同代基础
- [架构分类: NPU 移动 SoC](../../architectures/arch-npu) — NPU 分类
- [Dimensity 9400 官方页面](https://www.mediatek.com/products/smartphones/mediatek-dimensity-9400)
