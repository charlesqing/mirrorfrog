---
id: rtx-spark
title: NVIDIA DGX Spark (GB10 Grace Blackwell)
sidebar_label: DGX Spark
description: NVIDIA DGX Spark 官方规格：GB10 Grace Blackwell 超级芯片、20 核 Arm CPU、128 GB LPDDR5X 统一内存、273 GB/s 带宽、1 PFLOPS FP4、140 W TDP。可运行 2,000 亿参数模型，双机互联达 4,050 亿。128GB 版 $6,950，64GB 版 $4,999（2026-10-23）。
keywords: [NVIDIA DGX Spark, GB10, Grace Blackwell, Arm CPU, unified memory, 128GB LPDDR5X, 1 PFLOPS FP4, 273 GB/s]
---

# NVIDIA DGX Spark (GB10 Grace Blackwell)

## 产品概述

**NVIDIA DGX Spark**（原代号 **Project DIGITS**）于 **2025-10-13** 发布、**2025-10-15** 开放订购，是搭载 **GB10 Grace Blackwell 超级芯片**的桌面级 AI 计算机。

**核心设计是统一内存架构**：GB10 将 20 核 Arm CPU 与 Blackwell GPU 封装在同一芯片内，两者**一致性访问同一块 128 GB LPDDR5X**，**没有独立显存**。这是 DGX Spark 最重要的设计选择——70B 模型按 8-bit 权重仅权重就需约 70 GB，超出任何单张消费级显卡的显存容量，但在 Spark 的统一内存池中轻松容纳。

**代价是带宽**：**273 GB/s** 仅为数据中心卡 HBM 带宽（H200 为 4.8 TB/s）的约 1/17。生成 token 本质是内存带宽受限操作，因此大模型推理速度远低于租用 H100 / B200。

> 📌 **此前本站错误订正**：
> 1. **产品名**：正式产品名为 **DGX Spark**，本页标题已更正
> 2. **带宽**：官方为 **273 GB/s**，此前记「300 GB/s」已更正
> 3. **模型容量**：官方为**单机 2,000 亿参数**、双机 **4,050 亿参数**，此前记「1,200 亿参数 / 100 万 token 上下文」无官方来源，已移除
> 4. **TDP**：官方为 **140 W（GB10 芯片）/ 240 W（电源）**，此前记「~100W（推测）」已更正
> 5. **上市时间**：**2025-10-15 开订**（非「2026 年秋季」）；「6,144 CUDA 核心」「~100 FPS @1440p DLSS 4.5」等数字未在官方产品页出现，已移除

## 核心规格

| 项目 | 参数 |
|------|------|
| **架构** | Blackwell GPU + Arm CPU（联发科合作） |
| **CPU** | 最多 **20 核 Arm**（10× Cortex-X925 + 10× Cortex-A725） |
| **GPU** | Blackwell，第五代 Tensor Core、第四代 RT Core |
| **统一内存** | **128 GB LPDDR5X**（CPU + GPU 一致性共享） |
| **显存类型** | **LPDDR5X**（256-bit 接口） |
| **显存带宽** | **273 GB/s** |
| **互联** | NVLink C2C（CPU-GPU）；ConnectX-7 200 Gbps |
| **FP4** | **1 PFLOPS**（NVIDIA 官方口径） |
| **FP8** | 未公布 |
| **FP16/FP16 算力** | 未公布 |
| **FP32** | 未公布 |
| **INT8** | 未公布 |
| **TDP** | **140 W**（GB10 芯片 TDP） |
| **模型容量** | 单机可运行最高 **2,000 亿参数**模型 |
| **微调上限** | **700 亿参数**（支持 LoRA / QLoRA） |
| **双机互联** | 两台互联可达 **4,050 亿参数**（ConnectX-7） |
| **发布/量产** | **2025-10-13 发布，2025-10-15 开订** |

> 📌 **带宽更正**：NVIDIA 官方产品页口径为 **273 GB/s（256-bit 接口）**。此前本站记「300 GB/s」为约数，已按官方口径更正。
>
> 📌 **TDP 口径**：**140 W 是 GB10 芯片 TDP**，240 W 是整机电源功率。两者不可混用。
>
> 📌 **内存容量**：官方确认 **128 GB 为标准配置**，64 GB 版本仅通过 OEM 合作伙伴提供（2026-10 新增）。

## DGX Spark 产品线与定价（官方）

| 型号 | 内存 | 模型上限 | 价格 | 上市 |
|------|------|----------|------|------|
| **DGX Spark 128 GB** | 128 GB LPDDR5X | 2,000 亿参数（双机 4,050 亿） | **$6,950** | 在售 |
| **DGX Spark 64 GB** | 64 GB LPDDR5X | 约 1,000 亿参数 | **$4,999** | **2026-10-23** |

> 📌 **定价时间线**：发布价 **$3,999** → 2026-02 官网提价至 **$4,699** → 2026-10 128GB 版本升至约 **$6,950**（全球内存紧缺推高定价）。**64 GB 版本 $4,999 于 2026-10-23 由 OEM 合作伙伴（宏碁、华硕、戴尔、技嘉、惠普、微星）独家销售**。

## 关键规格补充（官方产品页）

| 项目 | 参数 |
|------|------|
| **存储** | 最高 **4 TB NVMe M.2**（自加密） |
| **网络** | 10 GbE RJ-45、**ConnectX-7 @ 200 Gbps**、Wi-Fi 7 |
| **电源** | **240 W** 电源，**140 W** GB10 TDP |
| **尺寸重量** | 150 × 150 × 50.5 mm，**1.2 kg** |
| **集群** | 最多 **4 台** 通过 ConnectX 互联 |
| **操作系统** | **DGX OS**（Ubuntu 基础），预装 NVIDIA AI Enterprise |
| **软件栈** | PyTorch、TensorFlow、RAPIDS、NGC；兼容 Ollama、vLLM |
| **配套产品** | 与 Razer 合作的便携式紧凑 AI 加速器（CES 2026 发布） |

## 平台生态

| 合作伙伴 | 合作内容 |
|----------|----------|
| **Microsoft** | OpenShell 框架，将 Windows 转变为 AI Agent 平台 |
| **Adobe** | Photoshop / Premiere 核心重写，GPU 加速 |
| **联发科（MediaTek）** | Arm CPU 架构协同设计 |
| **Dell, HP, Lenovo, Asus, MSI 等** | 首发 OEM 笔记本/桌面 |
| **Razer** | 便携式紧凑 AI 加速器（CES 2026） |

## 与 DGX Station for Windows 对比

| 指标 | DGX Spark (GB10) | DGX Station for Windows |
|------|-------------------|------------------------|
| **内存** | 128 GB LPDDR5X | 748 GB（252 GB HBM3e + 496 GB LPDDR5X） |
| **显存带宽** | 273 GB/s | 7.1 TB/s (GPU) |
| **AI 算力** | 1 PFLOPS FP4 | 20 PFLOPS FP4 |
| **TDP** | 140 W（芯片） | 1,600 W |
| **目标** | 个人 AI Agent / 开发原型 | 桌面 AI 超算 / 万亿参数模型 |
| **价格** | $4,999 - $6,950 | 未公布 |

## 厂商信息

| 项目 | 内容 |
|------|------|
| **制造商** | NVIDIA |
| **芯片** | GB10 Grace Blackwell Superchip |
| **官网** | https://www.nvidia.com |
| **发布** | **2025-10-13**（Project DIGITS 更名为 DGX Spark） |
| **开订** | 2025-10-15 |

## 适用场景

- ✅ **个人 AI Agent**：本地运行 2,000 亿参数模型
- ✅ **开发者原型机**：DGX OS 开箱即用，兼容主流推理栈
- ✅ **创作者工作站**：Adobe 工作负载 GPU 加速
- ✅ **本地 LLM 推理**：128 GB 统一内存容纳多数模型
- ✅ **模型微调**：最高 700 亿参数 LoRA / QLoRA
- ❌ **大规模训练**（273 GB/s 带宽是硬瓶颈）
- ❌ **高吞吐服务**（数据中心 H200/B200 带宽为其 17×）
- ❌ **HPC 科学计算**

## 数据来源

- [NVIDIA 官方产品页：DGX Spark](https://www.nvidia.com/en-us/products/workstations/dgx-spark/) — GB10 规格、20 核 Arm、128 GB LPDDR5X、**273 GB/s / 256-bit**、1 PFLOPS FP4、140 W TDP、240 W 电源、4 TB NVMe、ConnectX-7、150×150×50.5mm / 1.2 kg
- [NVIDIA 新闻稿：DGX Spark Arrives for the World's AI Developers（2025-10-13）](https://nvidianews.nvidia.com/news/dgx-spark-available) — 发布与开订时间、2,000 亿参数单机 / 4,050 亿双机、700 亿微调上限
- [ServeTheHome（2026-10-03）：DGX Spark 128 GB 调价至约 $6,950](https://www.servethehome.com/) — 全球内存紧缺下的价格变动、64 GB $4,999 版本
- [Tom's Hardware / The Register：DGX Spark 64GB 版 2026-10-23 由 OEM 上市](https://www.theregister.com/) — 64 GB 版本上市日期、OEM 合作伙伴名单
- [NVIDIA 开发者社区：DGX Spark 论坛（2026-02 官方提价至 $4,699 公告）](https://forums.developer.nvidia.com/) — $3,999 → $4,699 调价记录

## 相关产品

- [NVIDIA DGX Station for Windows](/docs/cards/nvidia/gb300) - 桌面 AI 超算
- [NVIDIA Rubin R200](/docs/cards/nvidia/rubin-r200) - 数据中心训练旗舰
- [NVIDIA B200](/docs/cards/nvidia/b200) - 数据中心训练
- [Apple M5 Ultra](/docs/cards/others/apple-m5-ultra) - 竞品对比
- [RTX 5090](/docs/cards/nvidia/rtx-5090) - 消费级 GPU
