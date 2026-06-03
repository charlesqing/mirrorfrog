---
id: arch-wse
title: WSE (Wafer-Scale Engine) 晶圆级引擎
sidebar_label: WSE
description: WSE 架构详解：Cerebras 整片晶圆作为单芯片、44 万核心、44 GB SRAM、专为超大模型训练设计。
keywords: [WSE, Wafer-Scale Engine, Cerebras, CS-3, WSE-3, 晶圆级, 44 万核心, 44GB SRAM]
---

# WSE (Wafer-Scale Engine) 架构

## 什么是 WSE

**WSE（Wafer-Scale Engine）** 是 **Cerebras Systems** 推出的**晶圆级 AI 处理器**，将**整片 12 英寸晶圆**作为单芯片（vs 传统 GPU 仅占晶圆一小块）。

**Cerebras WSE-3**（2024-04 发布）拥有 **4 万亿晶体管、90 万核心、44 GB SRAM**，专为**超大规模 AI 训练**（Llama 3 405B、GPT-4 类）设计。

## WSE 核心创新

### 晶圆级集成
- 传统 GPU 芯片 ~800 mm²（~3% 晶圆面积）
- **WSE 整片晶圆 = 46,225 mm²**（57× 倍）
- **片上 SRAM 44GB**（vs H100 80GB HBM，但 SRAM 比 HBM 快 1000×）
- **片上互联 214 PB/s**（Fabric 带宽）

### 稀疏线性代数核（SLAK）
- 专为**GEMM**（矩阵乘）和 **sparse** 操作优化
- **比 GPU tensor core 更快**（特定工作负载）

### SwarmX 互联
- **多 WSE 系统**：Cerebras CS-3 集群
- 通过 SwarmX fabric 连接（~1.2 TB/s）
- **CS-3 Cluster = 2,048 WSE = 8 ExaFLOPS**

## 主流 WSE 对比

| WSE | 年份 | 晶体管 | 核心 | SRAM | 工艺 | 算力（FP16） |
|-----|------|--------|------|------|------|--------------|
| **WSE-1** | 2019 | 1.2T | 40 万 | 18 GB | TSMC 16nm | - |
| **WSE-2** | 2021 | 2.6T | 85 万 | 40 GB | TSMC 7nm | ~62 PFLOPS |
| **WSE-3** | 2024 | **4T** | **90 万** | **44 GB** | TSMC 5nm | **125 PFLOPS** |
| **WSE-4 (CS-4, 推测)** | **2027 预计** | ~5T | ~150 万 | ~80 GB | **TSMC 3nm** | ~200 PFLOPS |

> ⚠️ **WSE-4 未官方公布**，以上为推测。Cerebras 已于 **2026-04-17 申请 IPO**，WSE-4 将是 IPO 后的**第一代公开产品**。

## WSE vs GPU

| 维度 | WSE-3 | H100 SXM | MI300X |
|------|-------|----------|--------|
| 晶体管 | **4 万亿** | 800 亿 | 1530 亿 |
| 核心 | 90 万（稀疏核） | 14,592 CUDA | 14,592 SP |
| 内存 | **44 GB SRAM** | 80GB HBM3 | 192GB HBM3 |
| 内存带宽 | **~1 PB/s** | 3.35 TB/s | 5.3 TB/s |
| TDP | ~15 kW | 700W | 750W |
| 算力（FP16） | 125 PFLOPS | 989 TFLOPS | 1.5 PFLOPS |
| 部署 | **整机**（Cerebras CS-3） | PCIe/SXM 卡 | PCIe 卡 |
| 适用 | **超大模型训练** | 通用训练 | 通用训练 |

## WSE 适用场景

- ✅ **超大 LLM 训练**（Llama 3 405B、GPT-4 类）
- ✅ 基因组学（生物医药）
- ✅ 科学计算（HPC）
- ✅ 长序列训练（44GB SRAM 可加载超大 batch）
- ❌ 通用 AI 推理（应使用 GPU）
- ❌ 边缘部署（15kW TDP）
- ❌ 中小模型训练（成本不划算）

## 商业部署

- **G42**（阿联酋 AI 公司，9 亿美元订单）
- **Mayo Clinic**（医疗 AI）
- **Argonne National Lab**（科学计算）
- **Llama 3 405B 训练**（Meta 与 Cerebras 合作）

## 2026 Cerebras IPO（重大事件）

| 项目 | 内容 |
|------|------|
| **IPO 申请日期** | **2026-04-17**（S-1 提交） |
| **目标上市日期** | **2026-05**（Nasdaq: **CBRS**） |
| **估值** | **$22-25B** |
| **2025 营收** | ~$510M（同比 +150%） |
| **2025 净亏损** | ~$200M（仍亏损，但亏损率收窄） |
| **关键大单** | **OpenAI $10B 推理算力长期合同** |
| **主要客户** | OpenAI、G42、Mistral、Meta、Mayo Clinic |
| **投行** | 高盛 / 摩根士丹利 / 摩根大通 |

> 💡 **IPO 战略意义**：
> - Cerebras 是**全球第二大晶圆级 AI 公司**（仅次于 NVIDIA 市值）
> - **OpenAI $10B 合同** = 单一客户史上最大推理算力订单
> - **WSE-4 (CS-4)** 将是 **IPO 后第一代公开产品**（2027 预计）
> - 与 NVIDIA Groq 3 LPX 竞争超低延迟推理市场

## 详细产品页

- [Cerebras WSE-2](/docs/cards/cerebras/wse-2) - 2021 第二代
- [Cerebras WSE-3](/docs/cards/cerebras/wse-3) - 2024 第三代
- [Cerebras WSE-4](/docs/cards/cerebras/wse-4) - 2027 预计（IPO 后首代）

## 相关架构

- [GPU](/docs/architectures/arch-gpu) - 通用 AI
- [TPU](/docs/architectures/arch-tpu) - Google 数据中心
- [RPU/RDU](/docs/architectures/arch-rpu-rdu) - 可重构架构
- [完整对比表](/docs/comparison)
