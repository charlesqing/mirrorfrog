---
id: lighton
title: LightOn (法国硟光 AI 推理)
sidebar_label: LightOn
description: LightOn 详尽规格：硟光 AI 推理、1.2 PF FP16、80W、Alfred 平台、欧洲硟光三巨头之一。
keywords: [LightOn, Alfred, 硟光, 法国 AI, photonic computing, 1.2 PF, EU AI]
---

# LightOn (法国硟光 AI 推理)

## 产品概述

**LightOn** 是法国**硟光 AI 推理芯片**公司，**2016 成立**，总部巴黎，源自 **法国国家科学研究院（CNRS）+ 巴黎综合理工学院**。**Alfred** 是其旗舰硟光推理平台，**2022 发布**，**1.2 PFLOPS FP16** 算力，**~80W TDP**，**业界能效比最高的 AI 推理芯片之一**。与 **Lightmatter（美国）、Lightelligence（中国）** 并称"**硟光三巨头**"。

**战略意义**：LightOn 是 **欧洲 AI 算力的战略选择**（法国/德国/欧盟 GDPR + AI Act 合规），**Microsoft Azure 法国数据中心** + **OVHcloud 欧洲云** 已集成 LightOn 推理 API。

## 核心规格

| 项目 | 参数 |
|------|------|
| **架构** | LightOn Alfred（Optical Processing Unit） |
| **制程** | 混合：硅光工艺 + 标准 CMOS 控制器 |
| **光子核心** | **32 个 MZI 网格**（每个 4×4） |
| **数字核心** | **24× ARM Cortex-A78**（调度 + 激活） |
| **HBM** | 32GB HBM2E（数字部分） |
| **内存带宽** | 819 GB/s |
| **FP16** | **1.2 PFLOPS** |
| **FP32** | ~0.6 PFLOPS |
| **INT8** | 2.4 POPS |
| **TDP** | 80 W |
| **能效** | **15 TOPS/W** |
| **板卡形态** | PCIe Gen4 ×16 |
| **互连** | LightOn Photonic Link |
| **量产** | 2023-H1 |
| **单价** | ~$3,000-5,000 |

## 硟光三巨头对比

| 维度 | LightOn Alfred (法国) | Lightmatter Envise (美国) | Lightelligence 天机芯 (中国) |
|------|------------------------|----------------------------|--------------------------------|
| **算力 FP16** | 1.2 PF | **2 PF** | 1.6 PF |
| **TDP** | 80W | **65W** | 100W |
| **能效** | 15 TOPS/W | **30 TOPS/W** | 16 TOPS/W |
| **量产** | 2023-H1 | **2023-H2** | 2023-H2 |
| **国家** | 🇫🇷 法国 | 🇺🇸 美国 | 🇨🇳 中国 |
| **生态** | LightOn Appliance | Idiom | 天机栈 |
| **客户** | Azure 法国、OVHcloud | Google 内部、Meta | 中国超算中心 |
| **价格** | ~$4K | ~$6K | ~$4K |

> **LightOn 优势**：**欧洲唯一商用硟光**（GDPR + AI Act 合规），**微软 + OVHcloud 集成**。**法国国家 AI 战略重点**。

## LightOn Appliance 平台

| 项目 | 规格 |
|------|------|
| **形态** | 1U / 2U 机架服务器 |
| **Alfred 卡数** | 4 / 8 |
| **总算力** | 4.8 PF / 9.6 PF FP16 |
| **总 HBM** | 128GB / 256GB |
| **光互连** | 1.6 TB/s 域内 |
| **机柜 TDP** | 320W / 640W |
| **价格** | ~$20K / $40K |

**LightOn Cloud 服务**：
- **LightOn Cloud API**（OpenAI 兼容）
- **OVHcloud AI Endpoint**（欧洲云）
- **Microsoft Azure 法国区域**（2024-Q4 集成）

## 软件栈 LightOn Appliance

| 层级 | 工具 | 说明 |
|------|------|------|
| **AI 框架** | **LightOn Appliance** | PyTorch / TensorFlow 兼容 |
| | **LightOn-Oumi** | 开源推理优化 |
| **编译器** | **Photon Compiler** | 算子 → MZI 配置 + ARM 代码 |
| **运行时** | LightOn Runtime | 多卡调度 |
| **API** | **LightOn API** | OpenAI 兼容（chat + completions） |
| **模型库** | ModelZoo | Mistral / LLaMA / Qwen / SDXL |

> **LightOn 生态优势**：**开源 Oumi 库**（GitHub 3K+ stars），**欧洲 GDPR 友好**，**Microsoft Azure 集成**。

## 厂商信息

| 项目 | 内容 |
|------|------|
| **公司** | LightOn SAS |
| **创始人** | **Igor Carron**（CEO，前 CNRS 研究员）|
| **成立** | 2016 |
| **总部** | 法国巴黎 |
| **融资** | **$50M+**（A 轮 2022 领投：BNP Paribas + European Innovation Council）|
| **估值（2025）** | ~$200M |
| **2024 营收** | ~$8M（早期商业化）|
| **员工** | ~80 人 |
| **代工** | **STMicroelectronics**（欧洲代工）+ CEA-Leti（硟光工艺）|
| **客户** | **Microsoft Azure 法国**、**OVHcloud 欧洲云**、法国国家科研中心 |
| **国家项目** | **法国 AI 国家战略**、**欧盟 Horizon Europe**、**EuroHPC** |
| **专利** | 80+ 项硟光 AI 专利 |

## 法国 / 欧洲 AI 战略意义

- **法国 AI 国家战略**：马克龙 2018 AI 战略，LightOn 是**法国 AI 算力代表**
- **欧盟 AI Act 合规**：欧洲 AI 法案，**数据 + 算力必须本地化**（LightOn 是欧洲唯一选项）
- **EuroHPC 项目**：欧洲超算，LightOn 是候选
- **GDPR 数据保护**：欧洲数据不能出境美国/中国云（LightOn 是 GDPR 原生）
- **Microsoft Azure 法国区域**：微软 + LightOn 合作
- **OVHcloud 欧洲云**：法国最大云服务商集成

## 适用场景

- ✅ **欧洲 AI 推理**（GDPR + AI Act 合规）
- ✅ **低功耗 AI 推理**（80W 风冷）
- ✅ **法国 / 欧洲政府 AI**（主权 AI）
- ✅ **Microsoft Azure 法国**集成
- ✅ **企业级 LLM 推理**（Mistral 7B/8x7B 优化）
- ❌ AI 训练（仅推理）
- ❌ 美国/中国市场（地理合规）
- ❌ CUDA 专有工作负载

## LightOn 产品线

| 产品 | 发布 | 算力 FP16 | TDP | 目标 |
|------|------|-----------|-----|------|
| **Alfred 1** | 2022 | 1.2 PF | 80W | **Cloud 推理** |
| Alfred 2 (推测) | 2025 H2 | 2.5 PF | 120W | 高端推理 |
| Alfred Mini | 2023 | 200 TF | 25W | 边缘推理 |
| Photon Link (推测) | 2026 | - | - | 光互连 IP |

## 关键特性

- **硟光计算**：欧洲唯一商用硟光 AI
- **15 TOPS/W**：H100 7× 能效
- **80W TDP**：风冷部署
- **GDPR / AI Act 合规**：欧洲主权 AI
- **Microsoft Azure 集成**：法国区域
- **开源 Oumi 库**：生态开放
- **缺点**：算力低于 Lightmatter 40%，生态 3-4 年

## 法国 AI 生态

| 公司 | 领域 |
|------|------|
| **LightOn** | **硟光 AI 推理** |
| **Mistral AI** | 开源 LLM（7B, 8x7B, 8x22B）|
| **Hugging Face** | AI 模型平台（总部巴黎） |
| **Owkin** | 医疗 AI |
| **Aleph Alpha** | 德国主权 LLM |

## 相关卡

- [Lightmatter Envise](/docs/cards/others/lightmatter-envise) - 美国硟光
- [Lightelligence 天机芯](/docs/cards/others/lightelligence) - 中国硟光
- [Groq LPU v2](/docs/cards/others/groq-lpu-v2) - LPU 推理
- [Cerebras WSE-3](/docs/cards/cerebras/wse-3) - 晶圆级
- [Blaize Xplorer X1600](/docs/cards/others/blaize-xplorer) - Edge AI
- [IBM NorthPole](/docs/cards/others/ibm-northpole) - 存内计算
- [Apple M4 Max](/docs/cards/others/apple-m4-max) - 工作站
- [Qualcomm AI 200/300](/docs/cards/others/qualcomm-ai-200) - 新入者
