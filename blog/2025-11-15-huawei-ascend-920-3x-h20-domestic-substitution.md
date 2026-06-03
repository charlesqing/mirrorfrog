---
slug: huawei-ascend-920-3x-h20-domestic-substitution
title: 'Huawei Ascend 920：4 Tbps 国产最高带宽 + 3× H20 算力的国产替代'
authors: [aicomputecards]
tags: [product-launch, strategy, news]
description: Huawei Ascend 920 是 2025 H2 量产的下一代昇腾芯片：6nm SMIC 国产、4 Tbps HBM 带宽、900+ BF16 TFLOPS = 3× NVIDIA H20 算力，是中国国产替代的关键胜利。
---

**Huawei Ascend 920（昇腾 920）** 于 **2025 H2 大规模量产**，是中国国产 AI 芯片的**重大突破**。本文将分析其规格、与 NVIDIA H20 的对比、CloudMatrix 384 Ultra 系统，以及对中国 AI 产业的意义。

{/* truncate */}

## 核心规格

| 项目 | Ascend 910C | **Ascend 920** | 提升 |
|------|-------------|----------------|------|
| 架构 | Da Vinci v3 | **Da Vinci v4** | 新一代 |
| 制程 | 7nm | **6nm（SMIC 国产）** | 更先进 |
| 小芯片数 | 2×（双 die） | 2× | 同 |
| HBM 容量 | ~128 GB | **~96 GB** | 略降 |
| HBM 带宽 | 3.2 Tbps | **4 Tbps** | **1.25×** |
| BF16 算力 | 780 TFLOPS | **900+ TFLOPS** | **1.15×** |
| FP16 算力 | 1,560 TFLOPS | 1,800 TFLOPS | 1.15× |
| INT8 算力 | 3,120 TOPS | 3,600 TOPS | 1.15× |
| TDP | ~310 W | ~400 W | +29% |
| 发布时间 | 2025-04 | **2025 H2** | — |

> **4 Tbps 带宽 = 国产最高 HBM 带宽**，比 Ascend 910C 提升 25%。900+ BF16 TFLOPS 算力也超过 910C。

## Ascend 920 vs NVIDIA H20（对标）

NVIDIA H20 是 NVIDIA 在美国出口管制下**专门为中国市场设计**的"合规"AI 芯片：

| 指标 | Ascend 920 | NVIDIA H20 |
|------|------------|------------|
| 定位 | 国产替代 | 中国合规 AI 芯片 |
| 制程 | 6nm（SMIC） | TSMC 4N（受限后部分国产） |
| 显存 | ~96 GB | 96 GB HBM3 |
| 显存带宽 | **4 Tbps** | 4.0 Tbps |
| BF16 算力 | **900 TFLOPS** | 296 TFLOPS |
| **BF16 算力比** | **3×** | 1×（基准） |
| 互联 | HCCS 1.2 Tbps | NVLink 900 GB/s |
| 软件 | CANN + MindSpore | CUDA（受限） |
| 进口合规 | ✅ 国产 | ⚠️ 美国出口管制 |

> 💡 **Ascend 920 在 BF16 算力上**显著领先 H20（**3 倍**），且 4 Tbps 带宽与 H20 持平。这是国产替代的**关键胜利**。

## CloudMatrix 384 Ultra 系统

Ascend 920 将被用于 **CloudMatrix 384 Ultra** 超节点系统：

| 项目 | 配置 |
|------|------|
| **芯片数** | 384 颗 Ascend 920 |
| **机柜数** | 16（12 计算 + 4 网络） |
| **HBM 总量** | ~36 TB（96GB × 384） |
| **互联** | 全光网状，**8,000+ LPO 光模块** |
| **BF16 算力（系统）** | **~345 PFLOPS**（推测 900 × 384） |
| **TDP（系统）** | ~150 kW |

> **CloudMatrix 384 Ultra 系统级 BF16 算力 ~345 PFLOPS** ≈ NVIDIA GB200 NVL72 集群（~144 PF FP8 dense）的 **2.4 倍**。

## 为什么 920 是国产替代关键胜利？

### 1. 算力首次超越 H20

| 时期 | 国产 | NVIDIA 中国版 | 倍数 |
|------|------|---------------|------|
| 2023 | 910B = 320 TFLOPS | H20 = 296 TFLOPS | 1.08× |
| 2024 | 910B = 320 TFLOPS | H20 = 296 TFLOPS | 1.08× |
| 2025 H1 | 910C = 780 TFLOPS | H20 = 296 TFLOPS | 2.6× |
| **2025 H2** | **920 = 900 TFLOPS** | H20 = 296 TFLOPS | **3.0×** |

> **2025 H2 起，国产 AI 芯片算力首次稳定超越 H20 三倍**。

### 2. 6nm SMIC 国产工艺

Ascend 920 采用 **SMIC N+1 / N+2 6nm 工艺**：

- ✅ 完全自主可控
- ✅ 不受美国出口管制
- ⚠️ 良率和成本仍逊于 TSMC 4N

### 3. 4 Tbps 国产最高 HBM

Ascend 920 的 4 Tbps HBM 带宽：
- 国内**首次达到 4 Tbps 级**（之前最高 3.2 Tbps）
- 与 H20 持平
- 推测使用 **CXMT 长鑫存储 HBM3** 或自研 HBM

### 4. CANN + MindSpore 软件栈

- **CANN 8.x**（Compute Architecture for Neural Networks）：类比 CUDA
- **MindSpore 2.4+**：Huawei 自研 AI 框架
- **PyTorch 2.3+ MindSpore 后端**：兼容 PyTorch
- **vLLM 0.7+ Ascend 后端**：低延迟推理
- **ONNX-Runtime Ascend 后端**：跨框架推理
- **Atlas 900/950 系列服务器**：OEM 整机

## 中国市场部署现状

### 已规模化客户

| 客户 | 应用 |
|------|------|
| **中国移动** | 大模型训练（9 9.8 亿客户） |
| **中国电信** | 智能客服 + 业务洞察 |
| **中国联通** | 政务 + 行业 AI |
| **国家电网** | 电网调度 + 故障预测 |
| **中国石油** | 勘探 + 物流优化 |
| **各大银行** | 风控 + 反欺诈 |
| **互联网公司**（百度、阿里、腾讯） | LLM 推理 |

### 行业布局

- **政府**：100% 国产化要求
- **金融**：政策性要求国产
- **电信**：HBM 国产化进度快
- **能源**：HBM 国产化进度快
- **互联网**：部分敏感业务国产化
- **教育 / 医疗**：渐进国产化

## 局限与挑战

| 局限 | 影响 |
|------|------|
| **FP8/FP4 支持** | Ascend 920 仍以 BF16/FP16 为主，FP8 优化中 |
| **HBM 容量** | 96 GB 低于 NVIDIA Rubin R200 288 GB / AMD MI400 432 GB |
| **CUDA 兼容性** | CANN 8 仍需迁移，CUDA 应用直接运行受限 |
| **SMIC 6nm 良率** | 比 TSMC 4N 良率低 10-20% |
| **HBM 来源** | CXMT 长鑫 HBM 产能有限 |
| **互联带宽** | HCCS 1.2 Tbps 远低于 NVLink 6 (3.5 TB/s) |

## 与同期国产芯片对比

| 厂商 | 芯片 | BF16 算力 | HBM 带宽 | 量产时间 |
|------|------|-----------|----------|----------|
| **Huawei** | Ascend 920 | 900 TFLOPS | 4 Tbps | 2025 H2 |
| **Huawei** | Ascend 910C | 780 TFLOPS | 3.2 Tbps | 2025-04 |
| **Cambricon** | 思元 590 | ~480 TFLOPS | 2.4 Tbps | 2024 |
| **Moore Threads** | MTT S5000 | ~250 TFLOPS | 1.6 Tbps | 2024 |
| **Biren** | BR104 | ~300 TFLOPS | 1.6 Tbps | 2024 |
| **Iluvatar** | CoreX Bi-150 | ~200 TFLOPS | 1.2 Tbps | 2024 |

> **Huawei Ascend 920 在国产 AI 芯片中保持明显领先**。

## 详细产品页

- [Huawei Ascend 920 完整规格](/docs/cards/huawei/ascend-920)
- [Huawei Ascend 910C（前代）](/docs/cards/huawei/ascend-910c)
- [Huawei Ascend 910B（初代量产）](/docs/cards/huawei/ascend-910b)
- [Huawei Ascend 910D（高端）](/docs/cards/huawei/ascend-910d)
- [NVIDIA H100 NVL（对标）](/docs/cards/nvidia/h100-nvl)
- [AMD MI300X（海外替代）](/docs/cards/amd/mi300x)
- [未来路线图](/docs/roadmap)

## 总结

Huawei Ascend 920 是 2025 H2 中国 AI 芯片的**关键胜利**：

1. **900+ BF16 TFLOPS = 3× H20**——首次稳定超越 H20 三倍
2. **6nm SMIC 国产**——自主可控
3. **4 Tbps 国产最高 HBM 带宽**——HBM 国产化突破
4. **CloudMatrix 384 Ultra 系统**——单系统超越 GB200 NVL72
5. **CANN + MindSpore**——软件生态完善

2025 H2 起，中国 AI 产业进入**"国产芯片可独立支撑大规模 AI 应用"**的新阶段。
