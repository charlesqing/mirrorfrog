---
id: tenstorrent-blackhole
title: Tenstorrent Blackhole (RISC-V 2nd Gen, 2024)
sidebar_label: Blackhole
description: Tenstorrent Blackhole 详尽规格：6nm、120 Tensix 核、8GB SRAM、16 BF16 PF 集群、RISC-V 异构、Jim Keller 架构。
keywords: [Tenstorrent Blackhole, RISC-V 2nd gen, Tensix, 120 核, 8GB SRAM, 16 PF 集群, Jim Keller]
---

# Tenstorrent Blackhole (RISC-V 2nd Gen, 2024)

## 产品概述

**Tenstorrent Blackhole** 是 Tenstorrent **第二代 RISC-V AI 芯片**，**2024 H1 发布**，**6nm 制程**（TSMC），**120 个 Tensix 核**（**Wormhole 80 核的 1.5×**），**8GB SRAM**（**业界最大 AI 芯片 SRAM 之一**），**16 BF16 PFLOPS 集群算力**（**8 卡互联**）。架构由传奇 CPU 设计师 **Jim Keller**（前 Apple A14/M1、AMD Zen、Tenstorrent CTO）领导设计。

**关键定位**：Tenstorrent 是 **唯一同时具备 RISC-V + 自研 ASIC + 高级架构师**的 AI 创业公司。**Blackhole 是公司 2024 旗舰**，**客户：富士康（代工）、LG AI Research、RIKEN（日本理研）、Bosch、Mercedes-Benz**。

## 核心规格

| 项目 | 参数 |
|------|------|
| **架构** | Tenstorrent Tensix + RISC-V |
| **制程** | **TSMC 6nm**（vs Wormhole 12nm）|
| **Tensix 核数** | **120 个**（vs Wormhole 80 个）|
| **每 Tensix 核** | 5 个小型 RISC-V 核 + 1 个 NoC + 1 MB SRAM |
| **片上 SRAM** | **8GB**（120 Tensix × 1MB = 120MB，可能有 L2 共享）|
| **LPDDR4X** | 24GB（可能 16GB/32GB 版本）|
| **内存带宽** | 307 GB/s（LPDDR4X）|
| **BF16** | 单卡 1.2 PFLOPS（8 卡 = **16 PFLOPS**） |
| **INT8** | 单卡 4.8 POPS（推测）|
| **TDP** | **~300W** |
| **板卡形态** | PCIe Gen5 ×16 |
| **互连** | **Ethernet**（标准，开放）|
| **量产** | 2024 H2 |
| **单价** | ~$1,500-3,000 |

## Tensix 核架构

| 维度 | 规格 |
|------|------|
| **每核** | **5× RISC-V Baby + 1× NoC 核** |
| **Baby RISC-V** | 1 个 32-bit scalar + 2 个 32-bit SIMD + 2 个 32-bit DSP |
| **NoC 核** | Network on Chip 调度 |
| **每核 SRAM** | **1 MB** |
| **单核 BF16** | ~10 TFLOPS |
| **单卡 BF16** | 120 × 10 = **1.2 PFLOPS** |

```
Tensix 核内部:
  ┌──────────────────────────────────────┐
  │  RISC-V 1  │  RISC-V 2  │  RISC-V 3  │  32-bit scalar/SIMD/DSP
  │            │            │            │
  │  RISC-V 4  │  RISC-V 5  │  NoC 核    │
  │            │            │            │
  │  1 MB SRAM (双端口)                  │
  │  Tensix Compute: 矩阵 + 向量 + 标量  │
  └──────────────────────────────────────┘
```

> **Tensix 创新**：**5 个 RISC-V + 1 个 NoC 共享 1MB SRAM**，比传统 GPU 的"CUDA core + Tensor core + shared memory"更灵活，**可独立运行 6 个 RISC-V 线程**（vs GPU 仅 32 线程/warp）。

## 8GB 片上 SRAM 优势

| 维度 | 优势 |
|------|------|
| **LLM 推理** | 7B FP16 = 14GB 略超，7B INT4 = 3.5GB **可全 SRAM** |
| **13B LLM** | INT4 = 6.5GB **可全 SRAM** |
| **70B LLM** | INT4 = 35GB 需 LPDDR4X，但权重加载到 SRAM 后推理无 HBM 等待 |
| **延迟** | 矩阵乘在 SRAM 内，**延迟 < 1ms** |
| **能效** | SRAM 比 HBM 省 10× 功耗 |

> **Blackhole 8GB SRAM 优势**：**7B/13B LLM 完全片上推理**，**比 H100 装 80GB 慢但能效更高**（待定测试）。

## 8 卡集群 16 PFLOPS

| 项目 | 配置 |
|------|------|
| **Blackhole 卡数** | 8 |
| **BF16 算力** | **16 PFLOPS**（8 × 1.2 PF）|
| **总 SRAM** | 64GB |
| **总 LPDDR4X** | 192GB |
| **互联** | **标准 Ethernet**（100G/200G 开放）|
| **机柜 TDP** | ~2.4 kW |
| **机柜价格** | ~$30K |

**Tenstorrent Wormhole 4U 服务器**（标准化）：
- **Grayskull** (1st gen) — 2021, 120W, 32 GB
- **Wormhole** (2nd gen) — 2023, 200W, 80 Tensix
- **Blackhole** (3rd gen) — 2024, 300W, 120 Tensix

## 与 NVIDIA H100 对比

| 指标 | Tenstorrent Blackhole 8 卡 | NVIDIA H100 单卡 | 差异 |
|------|------------------------------|---------------------|------|
| **BF16 算力** | **16 PF** | 1.5 PF (FP8 sparse) | **Blackhole 10×** |
| **TDP** | 2400W | 700W | Blackhole 3.4× |
| **能效** | 6.7 TOPS/W | 2.16 TOPS/W | **Blackhole 3×** |
| **内存** | 192GB LPDDR4X | 80GB HBM3 | Blackhole 2.4× |
| **带宽** | 2.5 TB/s | 3.35 TB/s | **H100 1.3×** |
| **软件** | TT-Metalium | CUDA | **H100 成熟** |
| **价格** | ~$30K (8 卡) | ~$25-30K | 相当 |

> **Blackhole 8 卡集群 vs H100 单卡**：**集群算力 10× 但功耗 3.4×**（能效 3×），**适合超大规模 LLM 推理**（Llama 3 405B 拆分到 8 卡）。

## 厂商信息

| 项目 | 内容 |
|------|------|
| **公司** | Tenstorrent Inc. |
| **CTO** | **Jim Keller**（前 Apple A14/M1、AMD Zen、Intel、特斯拉 AI 芯片）|
| **CEO** | **Ljubisa Bajic**（前 AMD）|
| **成立** | 2016 |
| **总部** | 美国加州圣何塞 + 多伦多 |
| **融资** | **$700M+**（B 轮 2024-Q1 领投：Bezos Expeditions + Samsung Securities）|
| **估值（2025）** | **$3B+**（独角兽）|
| **2024 营收** | ~$80M |
| **员工** | ~500 人 |
| **代工** | TSMC 6nm + **三星 4nm（路线图）**|
| **战略合作** | **富士康**（代工 + 服务器）、**LG AI Research**、**RIKEN 日本理研**、**Bosch**、**Mercedes-Benz**、**LG**、**Rapidus**（日本 2nm）|
| **状态** | **未上市**（考虑 2026-2027 IPO）|

## Tenstorrent 产品线

| 产品 | 发布 | Tensix 核 | 制程 | BF16 | 客户 |
|------|------|-----------|------|------|------|
| **Grayskull** | 2021 | 120 | 12nm | 368 TF | 早期客户 |
| **Wormhole** | 2023 | 80 | 12nm | 600 TF | LG / RIKEN |
| **Blackhole** | **2024 H1** | **120** | **6nm** | **1.2 PF** | **富士康 / LG / Bosch** |
| **Quasar** (推测) | 2025 H2 | 200 | 5nm | 3 PF | 路线图 |
| **Grendel** (推测) | 2026 | 256 | 4nm | 6 PF | 长期 |

## 软件栈 TT-Metalium / TT-Forge

| 层级 | 工具 | 说明 |
|------|------|------|
| **AI 框架** | **TT-Forge** | PyTorch 1:1 兼容（自动映射到 Tensix）|
| | **TT-Metalium** | 低级 C++ 编程（直接控制 Tensix 核）|
| | JAX / TensorFlow | 兼容（实验）|
| **编译器** | **TT-Forge Compiler** | 模型 → Tensix 二进制 |
| **运行时** | TT-Runtime | 多卡协调（标准 Ethernet）|
| **开源** | **完全开源**（GitHub 10K+ stars）| 与 CUDA 私有对立 |

> **Tenstorrent 杀手锏**：**完全开源软件栈**（vs CUDA 18 年私有），**6 个 RISC-V 线程 / Tensix**（vs GPU 32 线程/warp 黑盒），**标准 Ethernet 互联**（vs NVLink 私有）。

## 适用场景

- ✅ **RISC-V 软件生态**（完全开源 + 异构 RISC-V）
- ✅ **大企业 LLM 推理**（Jim Keller 品牌）
- ✅ **汽车 AI**（Bosch、Mercedes-Benz 客户）
- ✅ **政府 / 国家实验室 HPC**（RIKEN 日本、LG 韩国）
- ✅ **代工客户**（富士康生产线部署）
- ✅ **预算敏感**（~$1,500 / 卡，远低于 H100 $25K）
- ❌ **AI 训练为主**（Blackhole 弱训练生态）
- ❌ **CUDA 专有工作负载**（需 TT-Forge 移植）
- ❌ **延迟极敏感**（HBM 带宽优势）

## 关键特性

- **120 Tensix 核 + 5 RISC-V/核**：业界最大 RISC-V 核数（600 个 RISC-V）
- **8GB SRAM**：业界最大 AI 芯片 SRAM 之一
- **完全开源软件**：vs CUDA 私有
- **标准 Ethernet 互联**：vs NVLink 私有
- **Jim Keller 架构**：传奇设计师（Apple A14、AMD Zen）
- **缺点**：LPDDR4X 慢、训练生态弱、量产仅 1 年

## Jim Keller 职业轨迹

| 公司 | 角色 | 贡献 |
|------|------|------|
| **DEC Alpha** | 架构师 | Alpha 21264 |
| **AMD K8** | 首席架构师 | Athlon 64 |
| **AMD K8/K10** | 主架构师 | Barcelona |
| **Apple** | 芯片架构师 | Apple A4/A5 |
| **AMD Zen** | 主架构师 | **Zen / Zen 2**（Ryzen 1000-3000） |
| **Tesla** | 硬件副总裁 | 自研 AI 芯片（未发布） |
| **Intel** | 高级副总裁 | 短暂任职 |
| **Tenstorrent** | **CTO** | **Grayskull/Wormhole/Blackhole** |

> **Jim Keller 在 Tenstorrent** 是 **公司技术 + 品牌核心**，每代芯片均由他领导设计。

## 美国 AI 芯片创业四小龙

| 公司 | 架构 | 2024 旗舰 | 融资 | 状态 |
|------|------|-----------|------|------|
| **SambaNova** | Dataflow | SN40L | $1.1B+ | 商业化领先 |
| **Cerebras** | 晶圆级 | WSE-3 | $1.5B+ | 2026 IPO |
| **Groq** | LPU | LPU v2 | $1B+ | 2026 NVIDIA 收购 |
| **Tenstorrent** | **RISC-V** | **Blackhole** | **$700M+** | 2026-2027 IPO |

## 相关卡

- [Tenstorrent](/docs/cards/others/tenstorrent) - 总览（Wormhole）
- [Esperanto ET-SoC-1](/docs/cards/others/esperanto-et-soc-1) - RISC-V 异构
- [SambaNova SN40L](/docs/cards/others/sambanova-sn40l) - Dataflow
- [Groq LPU v2](/docs/cards/others/groq-lpu-v2) - LPU
- [Cerebras WSE-3](/docs/cards/cerebras/wse-3) - 晶圆级
- [Cambricon 寒武纪 MLU 590](/docs/cards/others/cambricon-mlu) - 国产 RISC-V
- [NVIDIA H100](/docs/cards/nvidia/h100) - 业界对比
- [Lightelligence 天机芯](/docs/cards/others/lightelligence) - RISC-V 硟光
