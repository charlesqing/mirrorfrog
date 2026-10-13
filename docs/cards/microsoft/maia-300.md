---
id: maia-300
title: Microsoft Azure Maia 300（第三代自研 AI 推理加速器 · 多芯粒 N2P）
sidebar_label: Maia 300
description: 微软第三代自研 AI 加速器 Maia 300：多芯粒架构，计算芯粒采用台积电 N2P，8 组 HBM4 提供 288GB @ 18 TB/s，FP8 6.9 / FP4 13.8 PFLOPS，950W TDP，96 卡 / 167kW 机架，2027 年投产部署。
keywords: [Maia 300, Microsoft Maia, Azure, 自研芯片, TSMC N2P, HBM4, MXFP4, 推理加速器, OCP, chiplet]
---

# Microsoft Azure Maia 300（第三代自研 AI 推理加速器 · 多芯粒 N2P）

## 产品概述

**Microsoft Azure Maia 300** 是微软第三代自研 AI 加速器，于 **2026 年 10 月 12 日**在**开放计算项目（OCP）全球峰会**（圣何塞）上由云与 AI 执行副总裁 **Scott Guthrie** 宣布。它是微软 Maia 家族首个采用**多芯粒（multi-chiplet）设计**的产品，将计算、内存控制器与 I/O 功能拆分到不同裸晶——计算芯粒采用 **TSMC N2P**（2nm 级）工艺，而内存与 I/O 芯粒采用更适合带宽、连接性与成本的工艺（辅助裸晶为 3nm 级）。

Maia 300 定位为**推理优先（inference-first）**架构，专为长上下文推理、延迟敏感型对话交互以及持续多步骤的智能体任务设计。微软执行副总裁 Rani Borkar 的表述是："我们有信心自己为这些负载打造了最好的产品。" 从 **2027 年**起，微软将 Azure Maia 家族扩展至**数吉瓦级部署**，使其成为微软产品与服务的主要推理系统。

架构上，Maia 300 延续 Maia 200 引入的 **SDLA（软件定义数据流架构）**，并在三处做了关键演进：内存从 SoC 内的**统一内存访问（UMA）**组织改为跨芯粒的**非统一（NUMA）**组织，让软件把数据放到使用它的计算旁边；引入**硬件加速数据格式转换**的新窄精度格式以减少每 token 的数据搬运；机架规模翻倍至 96 颗加速器，scale-up 域扩展到 **12,288 颗加速器**的超节点。

相对 Maia 200，Maia 300 的**多芯粒架构使系统算力 FLOPs 提升 36%**，同时 HBM 带宽提升 **2.5 倍**、容量增加 **33%**、每瓦 HBM 带宽约为 **2 倍**。微软官方宣称：相较领先的 GPU 系统，Maia 300 **每兆瓦 token 产出提高 40%**；在完整 96 加速器配置下，机架级 token 吞吐最高可达 Maia 200 的 **7 倍**，每瓦性能提升 **2.5 倍以上**。

## 核心规格

| 项目 | 参数 |
|------|------|
| **架构** | Maia 300（多芯粒：计算芯粒 + 内存控制芯粒 + I/O 芯粒；SDLA 软件定义数据流架构） |
| **制程** | TSMC N2P（2nm 级，计算芯粒） |
| **显存** | 288 GB |
| **显存类型** | HBM4（8 组堆栈，每组 36 GB） |
| **显存带宽** | 18 TB/s |
| **FP8** | 6.9 PFLOPS |
| **FP4** | 13.8 PFLOPS |
| **FP16** | 未公布 |
| **INT8** | 未公布 |
| **TDP** | 950 W |
| **互联** | 单加速器双向 scale-up 3.2 TB/s；两层以太网 scale-up + 自定义 AI 传输；片上 AI 网络控制器提供 32 × 400 Gb/s 以太网端口；主机接口 PCIe Gen6 x16 |
| **发布** | 2026-10-12 发布；2027 年开始生产部署 |

> 📌 **算力口径说明**：微软官方 Azure 博客**未直接给出绝对算力数值**，仅公布相对口径「系统算力 FLOPs 较 Maia 200 提升 **36%**」。本表 FP8 / FP4 数值来自微软随发布公开的 **Maia 300 技术论文**（FP4 13.8 POPS、FP8 6.9 POPS），并经多家媒体交叉核对；该组数值与官方 +36% 口径自洽（Maia 200 的 10.1 POPS FP4 × 1.36 ≈ 13.8）。
>
> 📌 **效率宣称口径**：微软称「每兆瓦 token 产出较领先的 GPU 系统提高 40%」，但**未点名对比的 GPU 型号、模型与服务配置**，且 Maia 仅在微软内部运行，外部无法独立验证。
>
> 📌 **TDP 口径**：950 W 为**整颗 SoC** 的热设计功耗，非板卡或机架功率。

## 关键特性

### 多芯粒架构：按功能选配工艺

- **计算芯粒置于 TSMC N2P**，发挥先进工艺在每瓦性能上的最大收益
- **内存控制器与 I/O 拆分到为带宽、连接性与成本优化的独立裸晶**，让每类功能用最适合的技术实现，同时提升分配给计算性能的硅面积
- 官方口径：此策略使系统**算力 FLOPs 提升 36%**、HBM 带宽提升 **2.5 倍**、scale-up 带宽提升 **14%**

### 推理优先的低精度设计

- **增强版 MXFP4** 与**亚 3-bit 存储格式**，配合**硬件加速的数据类型转换**
- 更窄的表示降低内存占用与数据搬运量，从而在**同一功耗包络内**支持更大模型、更长上下文与更多并发会话

### 内存层级：NUMA + 软件管理暂存区

- 内存从 UMA 改为跨芯粒的 **NUMA** 组织，每个计算区域就近配内存
- SDLA 显式控制 **DMA 引擎、片上 SRAM、HBM 与片上网络**，把数据放到使用它的计算旁边，缩短数据行进距离以降低搬运能耗
- **片上 SRAM 作为软件管理的暂存区（scratchpad）**，缓解 HBM 压力
- 向量引擎为关键推理内核（**softmax、低精度类型转换**等）做了 ISA 增强

### 统一 scale-up fabric：从 pod 到 superpod

- **机架内半交换拓扑**：每颗加速器把 scale-up 连接分为直连链路与交换路径——直连链路连接同一托盘内的两颗加速器，交换 fabric 连接机架内全部 96 颗加速器组成一个 pod；机架内全部使用电连接以降低功耗与成本
- **跨机架光互连第二层**：第二层交换机最多连接 **128 个机架**组成 **superpod**，光互连提供跨 pod 扩展所需的距离
- **统一 fabric 而非分离的 scale-up / scale-out 域**：集成网络控制器与专用 AI 传输在 pod 内与 superpod 跨机架使用相同通信语义，加速器可直接向 superpod 内任意加速器发起通信，无需经主机或独立 scale-out NIC
- **三个延迟域**：直连加速器对（最低延迟）→ 同 pod 内（一跳）→ 跨 pod（三跳），软件可将张量并行流量保持在最低延迟域内
- **带宽按需分配**：机架内与跨机架带宽的划分在系统设计时并不固定，而是依据作业打包（job packing）作为运行时参数设定

### 机架级架构

- **96 颗加速器 / 167 kW**：分布在 **24 个四加速器托盘**，取消独立主机托盘，将功率与热资源作为统一系统管理
- **整合交换架构**：6 颗高基数交换 ASIC 集成在 3 个液冷交换托盘
- **预填 / 解码解耦**：prefill 计算完成后，KV 状态经同一 scale-up fabric 直接移交选定 decode worker，不经由主机中转的独立 scale-out 路径
- **灵活冷却**：液冷移除机架 80% 以上的热负载（加速器、稳压器、交换 ASIC），风冷覆盖内存、存储等辅助部件；既可直接接入设施水，也可用换热器（HXU）部署于风冷机房

## 适用场景

- ✅ **长上下文推理**与延迟敏感型对话交互
- ✅ **持续多步骤的智能体任务**（GitHub 编码体验背后的多步骤智能体工作）
- ✅ **云规模模型服务**（Microsoft Foundry）
- ✅ **MAI 团队的推理与数据生成**（训练下一代自研模型）
- ✅ **对延迟敏感的医疗文档工作流**（Dragon Copilot）
- ❌ 面向训练的前沿预训练（微软仍与 NVIDIA、AMD 合作训练模型）
- ❌ 对外出租（微软称"我们自己的 AI 服务业务已经足够大，先服务好自己"）

## 相关产品对比

- [Microsoft Maia 200](/docs/cards/microsoft/maia-200) — 前代（单片 N3P，6 组 HBM3e，216GB @ 7 TB/s，750W）
- [NVIDIA B200](/docs/cards/nvidia/b200) — 主流 GPU 推理竞品
- [NVIDIA GB300](/docs/cards/nvidia/gb300) — 机架级竞品
- [AMD MI455X](/docs/cards/amd/mi455x) — 同代开放生态竞品

## 数据来源

- [微软 Azure 官方博客：Deep dive into Azure Maia 300 architecture](https://azure.microsoft.com/en-us/blog/deep-dive-into-azure-maia-300-architecture/) — N2P 计算芯粒与多芯粒拆分、算力 FLOPs +36%、8 组 HBM4 / 288 GB / 18 TB/s、较 Maia 200 带宽 2.5 倍 / 容量 +33% / 每瓦 HBM 带宽约 2 倍、NUMA 内存组织、SDLA、96 加速器 / 24 托盘 / 167 kW、两层 scale-up 与 12,288 加速器 superpod、机架级 7 倍 token 吞吐与 2.5 倍每瓦性能
- [StorageReview：Microsoft Maia 300 Puts 288GB of HBM4 at 18TB/s on an N2P Chiplet and 96 Accelerators in a 167kW Rack](https://www.storagereview.com/news/microsoft-maia-300-hbm4-n2p-chiplet-96-accelerator-rack) — 微软技术论文完整规格表：FP4 13.8 POPS / FP8 6.9 POPS、3.2 TB/s 双向 scale-up、机架 27.6 TB HBM / 1,728 TB/s、机架 FP4 1,324 POPS、32 × 400Gb/s 以太网端口、PCIe Gen6 x16
- [Notebookcheck：Microsoft Maia 300 AI chip arrives with monstrous 288 GB HBM4 memory and 18 TB/s bandwidth](https://www.notebookcheck.net/Microsoft-Maia-300-AI-chip-arrives-with-monstrous-288-GB-HBM4-memory-and-18-TB-s-bandwidth.1422220.0.html) — 8 × 36 GB HBM4 堆栈、9 Gb/s 引脚速率、FP4 13.8 PFLOPS / FP8 6.9 PFLOPS、950 W TDP、交叉核对
- [Forbes Middle East：Microsoft Unveils Maia 300 AI Chip](https://www.forbesmiddleeast.com/innovation/artificial-intelligence-machine-learning/microsoft-unveils-maia-300-ai-chip-plans-multi-gigawatt-rollout-of-in-house-silicon-from-2027) — OCP 峰会发布、每兆瓦 token +40%、96 卡机架 7 倍 token 吞吐、技术论文作者 Rani Borkar 与 Saurabh Dighe
