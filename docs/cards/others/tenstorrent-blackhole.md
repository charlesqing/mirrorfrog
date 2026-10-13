---
id: tenstorrent-blackhole
title: Tenstorrent Blackhole (RISC-V, 2024)
sidebar_label: Blackhole
description: Tenstorrent Blackhole 官方规格：6nm、120 Tensix 核、180MB 片上 SRAM、GDDR6 28-32GB / 448-512 GB/s、300W。在售三款 PCIe 卡 p100a $999 / p150a $1,399 / p150b $1,399，TT-QuietBox 2 桌面工作站 $9,999，Galaxy 机架 32 芯片 23 PFLOPS FP8。
keywords: [Tenstorrent Blackhole, RISC-V, Tensix, p100a, p150a, QuietBox, GDDR6, TT-Metalium, Jim Keller]
---

# Tenstorrent Blackhole (RISC-V, 2024)

## 产品概述

**Tenstorrent Blackhole** 是 Tenstorrent 第三代 RISC-V AI 芯片（2024 发布），**6nm 制程（TSMC）**，架构由传奇 CPU 设计师 **Jim Keller** 领导设计。

**核心更正**：Blackhole 用的是 **GDDR6**（不是 LPDDR），片上 SRAM 为 **180 MB**（不是此前本站记的 8 GB——8 GB 是 SRAM/Galaxy 服务器级别的聚合口径，与单芯片无关）。Blackhole 在售形态为三款 PCIe 卡：**p100a / p150a / p150b**。

Blackhole 的架构亮点是**完全开源**（RISC-V ISA + MIT 许可的 TT-Metalium / TT-NN / TT-Forge 工具链），面向主权 AI、国防与合规审计场景——这是欧盟 AI 法案等监管框架下的第一类需求。

## 核心规格（在售 PCIe 卡）

| 项目 | 参数 |
|------|------|
| **架构** | Tensix + RISC-V（140 Tensix 整 die，PCIe 卡裁至 120 Tensix） |
| **制程** | **TSMC 6nm** |
| **Tensix 核数** | **120**（整 die 140） |
| **片上 SRAM** | **180 MB**（120 × 1.5 MB L1） |
| **显存** | **32 GB**（p150a/p150b；p100a 为 28 GB） |
| **显存类型** | **GDDR6** |
| **显存带宽** | **448 GB/s**（p100a）/ **512 GB/s**（p150a、p150b） |
| **FP8** | **664 TFLOPS**（BlockFP8，在售卡口径） |
| **FP4** | 未公布 |
| **FP16/FP16 算力** | **372 TFLOPS**（整 die 口径） |
| **FP32** | 未公布 |
| **INT8** | 未公布 |
| **TDP** | **300 W** |
| **互联** | **PCIe Gen5 x16**；p150a 另含 **4× QSFP-DD 800G** |
| **发布/量产** | **2024 发布，现已量产在售** |

> 📌 **整 die vs 在售卡口径差异**（官方文档两套口径并存，务必区分）：
> - **整 die**：140 Tensix、**745 TFLOPS FP8**、372 TFLOPS FP16、~194 MB SRAM、32 GB GDDR6、10× 400G 链路（≈1 TB/s）
> - **在售 PCIe 卡**：裁至 **120 Tensix**、**664 TFLOPS BlockFP8**、**180 MB SRAM**、300W
>
> 📌 **此前本站错误**：「8GB SRAM」实为 Galaxy 服务器 32 芯片聚合 SRAM（6.2 GB @2.9 PB/s）附近的量级，与单芯片无关；「24GB LPDDR4X」实为 **GDDR6**。本页已按官方口径更正。

## 在售型号与定价（官方商城）

| 型号 | Tensix | 显存 | 带宽 | 散热 | 以太网 | 价格 |
|------|--------|------|------|------|--------|------|
| **p100a** | 120 | 28 GB GDDR6 | 448 GB/s | 主动 | 无 | **$999** |
| **p150a** | 120 | 32 GB GDDR6 | 512 GB/s | 主动 | **4× QSFP-DD 800G** | **$1,399** |
| **p150b** | 120 | 32 GB GDDR6 | 512 GB/s | 被动 | 4× QSFP-DD 800G | **$1,399** |

> 📌 **定价更正**：此前本站记「单价 ~$1,500-3,000」「8 卡集群 ~$30K」，均无来源。官方商城实际为 **p100a $999 / p150a、p150b $1,399**；QSFP-DD 800G 线缆 $200。

## Tensix 核架构

| 维度 | 规格 |
|------|------|
| **每核** | 5× RISC-V Baby + 1× NoC 核 + 向量单元 |
| **Baby RISC-V** | 1 个 32-bit scalar + 2 个 32-bit SIMD + 2 个 32-bit DSP |
| **NoC 核** | Network on Chip 调度 |
| **每核 SRAM** | **1.5 MB L1** |
| **矩阵引擎** | 8×8 BF16 |

```
Tensix 核内部:
  ┌──────────────────────────────────────┐
  │  RISC-V 1  │  RISC-V 2  │  RISC-V 3  │  32-bit scalar/SIMD/DSP
  │            │            │            │
  │  RISC-V 4  │  RISC-V 5  │  NoC 核    │
  │            │            │            │
  │  1.5 MB L1 SRAM                       │
  │  Tensix Compute: 矩阵 + 向量 + 标量  │
  └──────────────────────────────────────┘
```

> **Tensix 创新**：**5 个 RISC-V + 1 个 NoC 共享 1.5 MB SRAM**，比传统 GPU 的"CUDA core + Tensor core + shared memory"更灵活，**可独立运行 6 个 RISC-V 线程**。

## RISC-V 核心数量（Blackhole 特色）

Blackhole 是**业界 RISC-V 核数最多的 AI 芯片之一**：
- **16 个 64-bit「Big RISC-V」核**——可原生运行 Linux，使 Blackhole 成为**独立 AI 计算机**而非纯加速卡
- **752 个 Baby RISC-V 核**（700 个在 Tensix 内 + 52 个用于 DRAM / 以太网 / 管理 / PCIe）
- **合计 768 个 RISC-V 核**

## TT-QuietBox 2 桌面工作站（2026-03-11 发布）

| 项目 | 参数 |
|------|------|
| **芯片** | 4 × Blackhole p150c（统一 mesh） |
| **Tensix 总数** | **480** |
| **显存** | **128 GB GDDR6** + **512 GB DDR5**（EPYC 8124P 主机） |
| **算力** | **2,654 TFLOPS**（BlockFP8） |
| **互联** | **16× 800G QSFP-DD** |
| **功耗** | **1,650 W** |
| **散热** | 液冷，标准 120V 插座 |
| **价格** | **$9,999** |
| **上市** | **2026 Q2 交付** |
| **预装模型** | GPT-OSS 120B、Llama 3.1 70B（476.5 tok/s）、Qwen3-32B、Flux、Wan 2.2、Boltz-2 |
| **操作系统** | Ubuntu 24.04，开箱即用 |

> 📌 **此前本站记「TT-QuietBox ~$30K / 8 卡 16 PFLOPS」无来源**。官方 QuietBox 2 为 **4 芯片 / $9,999**；8 卡集群另有独立服务器产品（TT-QuietBox Server **$70,000 起**）。

## Galaxy Blackhole 机架服务器

| 项目 | 参数 |
|------|------|
| **芯片数** | **32** |
| **算力** | **23 PFLOPS FP8** |
| **显存** | **1 TB GDDR6 @ 16 TB/s** |
| **聚合片上 SRAM** | **6.2 GB @ 2.9 PB/s** |
| **以太网** | **56× 800G** |
| **互联方式** | **Tenstorrent 自研，用自家芯片做交换机**——无 InfiniBand、无 NVLink |
| **Supercluster 36** | 36 台互联 |

> 💡 **技术亮点**：Tenstorrent 用自己的芯片充当网络交换机，实现**全以太网**的集群扩展，官方口径单机扩展至 32 芯片 mesh。

## 与 NVIDIA H100 对比（p150a 单卡）

| 指标 | Tenstorrent p150a | NVIDIA H100 SXM5 | 差异 |
|------|--------------------|------------------|------|
| **显存** | 32 GB GDDR6 | 80 GB HBM3 | H100 2.5× |
| **带宽** | 512 GB/s | 3.35 TB/s | **H100 6.5×** |
| **片上 SRAM** | 180 MB | 无同等量级 | Blackhole 优势 |
| **TDP** | 300 W | 700 W | Blackhole 2.3× 节能 |
| **软件** | TT-Metalium（全开源 MIT） | CUDA（闭源） | 透明度 vs 成熟度 |
| **价格** | $1,399 | ~$25,000-30,000 | **Blackhole ~20× 便宜** |

> **诚实的权衡**：Blackhole 提供**低价 + 完全可审计**的硬件，但在**显存容量、内存带宽、软件成熟度**三项上全面落后 H100。原始内存带宽上单张 p150a 落后 H100 SXM5 约 6×，大 batch 场景无法靠 SRAM 弥补。

## 厂商信息

| 项目 | 内容 |
|------|------|
| **公司** | Tenstorrent Inc. |
| **CTO** | **Jim Keller**（前 Apple A4/A5、AMD Zen、Tesla、Intel） |
| **CEO** | **Ljubisa Bajic**（前 AMD） |
| **成立** | 2016 |
| **总部** | 美国加州圣何塞 + 多伦多 |
| **代工** | TSMC 6nm |
| **战略合作** | 富士康、LG AI Research、RIKEN、Bosch、Mercedes-Benz、Rapidus |
| **软件开源** | TT-Metalium / TT-NN / TT-Forge（MIT 许可） |
| **状态** | 未上市 |

## Tenstorrent 产品线（官方）

| 产品 | 发布 | Tensix 核 | 制程 | 内存 | 算力 |
|------|------|-----------|------|------|------|
| **Grayskull** | 2021 | 120 | 12nm | LPDDR4 12-24 GB | ~315 INT8 TOPS |
| **Wormhole** | 2023 | 80 | 12nm | GDDR6 288-576 GB/s | ~328 TFLOPS FP8 |
| **Blackhole** | **2024** | **140**（卡裁 120） | **6nm** | **GDDR6 28-32 GB** | **745 TFLOPS FP8**（整 die）|
| **Blackhole Galaxy** | 2025 | 32 × 140 | 6nm | 1 TB GDDR6 | 23 PFLOPS FP8 |

## 软件栈 TT-Metalium / TT-Forge / TT-NN

| 层级 | 工具 | 说明 |
|------|------|------|
| **AI 框架** | **TT-Forge**（MLIR 编译器，2026-03 公测）| PyTorch / JAX / ONNX 协同 |
| | **TT-Metalium** | 低级 C++ 编程（直接控制 Tensix 核）|
| | **TT-NN** | 神经网络算子库 |
| **开源** | **完全开源（MIT）** | GitHub 社区驱动，含悬赏机制 |

> ⚠️ **软件成熟度**：TT-Metalium 的内核开发更接近写 FPGA 逻辑而非 CUDA，需要显式 DMA 与 tile pipeline 编程，调试痛苦；预优化模型与算子库相比 CUDA 生态仍很薄。

## 适用场景

- ✅ **主权 AI / 国防 / 金融合规**（全栈可审计，EU AI Act 需求）
- ✅ **政府 / 国家实验室 HPC**（RIKEN 日本、LG 韩国）
- ✅ **预算敏感**（$999 / 卡，比 H100 便宜约 20×）
- ✅ **汽车 AI**（Bosch、Mercedes-Benz 客户）
- ✅ **边缘 / 桌面部署**（Blackhole 可原生跑 Linux；QuietBox 2 即插即用）
- ❌ **大规模训练为主**（训练生态弱）
- ❌ **CUDA 专有工作负载**（需 TT-Forge 移植）
- ❌ **带宽敏感的大 batch 推理**（512 GB/s vs H100 3.35 TB/s）

## Jim Keller 职业轨迹

| 公司 | 角色 | 贡献 |
|------|------|------|
| **DEC Alpha** | 架构师 | Alpha 21264 |
| **AMD K8** | 首席架构师 | Athlon 64 |
| **AMD K8/K10** | 主架构师 | Barcelona |
| **Apple** | 芯片架构师 | Apple A4/A5 |
| **AMD Zen** | 主架构师 | **Zen / Zen 2**（Ryzen 1000-3000） |
| **Tesla** | 硬件副总裁 | 自研 AI 芯片 |
| **Intel** | 高级副总裁 | 短暂任职 |
| **Tenstorrent** | **CTO** | **Grayskull/Wormhole/Blackhole** |

## 相关卡

- [Tenstorrent](/docs/cards/others/tenstorrent) - 总览（Wormhole）
- [Esperanto ET-SoC-1](/docs/cards/others/esperanto-et-soc-1) - RISC-V 异构
- [SambaNova SN40L](/docs/cards/others/sambanova-sn40l) - Dataflow
- [Groq LPU v2](/docs/cards/others/groq-lpu-v2) - LPU
- [Cerebras WSE-3](/docs/cards/cerebras/wse-3) - 晶圆级
- [NVIDIA H100](/docs/cards/nvidia/h100) - 业界对比

## 数据来源

- [Tenstorrent 官方商城（Blackhole / Workstations / QuietBox Servers）](https://tenstorrent.com) — p100a $999、p150a / p150b $1,399、Workstation $9,999 起、QuietBox Server $70,000 起
- [Tenstorrent 官方产品页：Blackhole（p100a / p150a / p150b）](https://tenstorrent.com/blackhole) — 120 Tensix、GDDR6 28/32GB、448/512 GB/s、300W、QSFP-DD 800G
- [Tenstorrent 官方文档：Blackhole Hardware Overview](https://tenstorrent.com/docs/blackhole) — 整 die 140 Tensix / 745 TFLOPS FP8 / 372 TFLOPS FP16 / ~194MB SRAM、768 个 RISC-V 核、16 个 Big RISC-V 可原生跑 Linux
- [Tenstorrent Galaxy 服务器产品页](https://tenstorrent.com/galaxy) — 32 芯片 23 PFLOPS FP8、1TB GDDR6 @16TB/s、6.2GB SRAM @2.9PB/s、56× 800G
- [ServeTheHome / Tenstorrent 官方新闻：TT-Deploy 与 TT-Forge Beta](https://tenstorrent.com) — 2026 年软件栈与产品线现状
