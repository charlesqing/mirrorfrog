---
slug: 2026-h2-top-ai-chip-selection-guide
title: '2026 H2 顶级 AI 芯片选型指南：从 H100 到 Rubin、MI400、TPU 8t、TPU 8i'
authors: [aicomputecards]
tags: [selection-guide, benchmarks, cloud-pricing]
description: 2026 H2 顶级 AI 芯片完整选型指南：NVIDIA Rubin R200、AMD MI400、TPU 8t/8i、Trainium 3、Ascend 920、Groq 3 LPX。从训练到推理、从 LLM 70B 到 1T+ 模型的完整选型树。
---

2026 H2 是 AI 算力市场最丰富的时代：NVIDIA Rubin R200、AMD MI400、Trainium 3、TPU 8t/8i、Ascend 920、Groq 3 LPX 全部就位。本文提供**完整选型树**，帮助你根据**模型规模、训练/推理、延迟要求、预算、地区**选择最合适的产品。

{/* truncate */}

## 选型决策树

```
开始
├─ 任务类型？
│   ├─ 训练 ──────────── [训练选型]
│   └─ 推理 ──────────── [推理选型]
└─ 地区？
    ├─ 北美 / 欧洲 ──── 全产品可选
    ├─ 中国 ────────── Huawei Ascend 系列
    └─ AWS Cloud ───── Trainium / Inferentia
```

## 训练选型

### 100B+ LLM 训练

| 优先级 | 方案 | 单机柜算力 | 100B 模型训练时间 |
|--------|------|------------|---------------------|
| **1** | NVIDIA Rubin NVL72 | 3.6 EF FP4 | **~1-2 天**（300B tokens） |
| 2 | AWS Trn3 UltraServer (2+) | 104 PF FP8 | ~3-5 天 |
| 3 | AMD Helios | 2.88 EF FP4 dense | ~1-2 天 |
| 4 | Google TPU 8t pod (大 pod) | 590+ EF FP8 dense | ~数小时（Google 内部） |

**推荐**：
- 商业云端：NVIDIA Rubin NVL72
- 成本敏感：AWS Trn3 UltraServer
- 开放生态：AMD Helios
- Google Cloud：TPU 8t pod

### 70B LLM 训练

| 方案 | 配置 | 价格 | 推荐场景 |
|------|------|------|----------|
| NVIDIA H200 | 8 卡 H200 | ~$264K | 主流 |
| NVIDIA B200 | 8 卡 B200 | ~$400K | 高端 |
| NVIDIA B300 Ultra | 8 卡 B300 | ~$500K | 最新 |
| AMD MI300X | 8 卡 MI300X | ~$120K | 性价比 |
| AMD MI325X | 8 卡 MI325X | ~$160K | 高显存 |
| Trainium 2 | trn2.48xlarge × 4 | ~$32/hr | AWS 客户 |
| Trainium 3 | trn3 UltraServer | ~$5M | 超大规模 |

**推荐**：
- 商业主流：NVIDIA H200 8 卡
- 性能优先：NVIDIA B300 Ultra 8 卡
- 性价比：AMD MI300X 8 卡
- AWS 云：Trainium 3 UltraServer

### 7B-13B LLM 训练

| 方案 | 配置 | 价格 | 推荐 |
|------|------|------|------|
| NVIDIA A100 80GB | 8 卡 A100 | ~$160K | 主流 |
| NVIDIA H100 | 8 卡 H100 | ~$240K | 高端 |
| NVIDIA RTX 6000 Ada | 4-8 卡 | ~$27K | 工作站 |
| AMD MI300X | 8 卡 MI300X | ~$120K | 性价比 |
| Intel Gaudi 3 | 8 卡 Gaudi 3 | ~$80K | 预算敏感 |

**推荐**：
- 商业主流：NVIDIA A100 80GB
- 高端：NVIDIA H100
- 工作站：NVIDIA RTX 6000 Ada
- 性价比：AMD MI300X
- 预算敏感：Intel Gaudi 3

### 1B-3B LLM 训练

| 方案 | 配置 | 推荐 |
|------|------|------|
| NVIDIA RTX 4090 | 单卡 | 本地 |
| NVIDIA RTX 5090 | 单卡 | 本地高端 |
| NVIDIA A100 40GB | 4 卡 | 商业 |
| Intel Gaudi 2 | 8 卡 | 预算 |
| Apple M3 Ultra | 单工作站 | 本地 LLM |

## 推理选型

### 70B+ LLM 推理（单卡）

| 方案 | FP16 70B 可装？ | 算力 | 推荐 |
|------|-----------------|------|------|
| **NVIDIA B300 Ultra (288 GB)** | ✅ 装 1 个 | 7 PF FP8 | 首选 |
| **Google TPU 8i (288 GB HBM)** | ✅ 装 1 个 | 11 PF FP8 | Google Cloud |
| **AMD MI400 (432 GB HBM4)** | ✅ 装 1 个 | 20 PF FP8 dense | 2026 |
| **NVIDIA H200 (141 GB)** | ❌ 需 TP2 | 1.0 PF FP8 | 上一代 |
| **AMD MI325X (256 GB)** | ✅ 装 1 个 | 2.6 PF FP8 | 上一代 |
| **NVIDIA Groq 3 LPX (128 GB SRAM/机柜)** | ✅ 装 1 个 | 5.5 PF (机柜) | 超低延迟 |

**推荐**：
- 商业云：NVIDIA B300 Ultra 或 TPU 8i
- 大显存：AMD MI400 / TPU 8i
- 超低延迟：Groq 3 LPX
- 性价比：AMD MI325X

### 7B-30B LLM 推理

| 方案 | 显存 | 算力 | 价格 | 推荐 |
|------|------|------|------|------|
| **NVIDIA L40S** | 48 GB | 733 TF FP8 | ~$8K | 通用 |
| **NVIDIA A100 80GB** | 80 GB | 624 TOPS INT8 | ~$15K | 大模型 |
| **NVIDIA H100** | 80 GB | 4 PF FP8 | ~$30K | 高性能 |
| **Google TPU 8i** | 288 GB | 11 PF FP8 | 仅云 | Google Cloud |
| **AWS Inferentia 2** | 32 GB | 190 TOPS | Inf2 实例 | AWS |
| **Apple M3 Ultra** | 192 GB | 80 核 GPU | ~$5K | 本地 |

**推荐**：
- 商业云：NVIDIA L40S / A100
- AWS 云：Inferentia 2
- Google Cloud：TPU 8i
- 本地：Apple M3 Ultra

### 超低延迟推理（Agentic AI）

| 方案 | TTFT | TPOT | 价格 | 推荐 |
|------|------|------|------|------|
| **Groq 3 LPX** | **< 20ms** | **< 5ms** | $8-10M/机柜 | **首选** |
| Groq LPU v1 | ~50ms | ~10ms | $1.8M/机柜 | 备选 |
| TPU 8i | ~100ms | ~15ms | 云端 | Google Cloud |
| NVIDIA H200 | ~200ms | ~30ms | $30K | 通用 |
| AWS Inferentia 2 | ~200ms | ~30ms | AWS 实例 | AWS |

**推荐**：
- Agentic AI（1000+ 调用/秒）：**Groq 3 LPX**（唯一选择）
- Real-time Code Gen：Groq 3 LPX
- 中等延迟需求：TPU 8i / H200

## 模型规模速查

| 模型规模 | 单卡可装（FP16） | 推荐训练 | 推荐推理 |
|----------|------------------|----------|----------|
| 1B-3B | 任何 8GB+ GPU | RTX 4090 / A100 | RTX 4090 / L4 |
| 7B | 24 GB | A100 40GB × 4 | L4 / L40S |
| 13B | 32 GB | A100 40GB × 4 | L4 / L40S |
| 30B | 64 GB | A100 80GB × 4 | L40S / H100 |
| 70B | 141 GB | H200 × 8 | **B300 Ultra 单卡 / TPU 8i** |
| 405B | 800 GB | NVL72 | B300 Ultra × 4 / Rubin R200 |
| 1T+ | 2 TB | Rubin NVL576 | Rubin R200 × 多卡 / LPX 协同 |

## 预算速查

| 月预算 | 推荐训练配置 | 推荐推理配置 |
|--------|--------------|--------------|
| **< $5K** | RTX 4090 / 集群 | L4 / T4 |
| **$5K-20K** | 8× A100 80GB | L40S / H100 单卡 |
| **$20K-100K** | 8× H100 / MI300X | H200 / B200 |
| **$100K-500K** | 8× B200 / NVL72 | B300 Ultra / TPU 8i |
| **$500K-5M** | Rubin NVL72 / Helios | Rubin NVL72 / Helios |
| **$5M-50M** | Rubin NVL576 (8+) | Groq 3 LPX 机柜 |
| **$50M+** | 多数据中心 | 混合方案 |

## 地区速查

### 中国市场（必须国产）

| 场景 | 推荐 | 理由 |
|------|------|------|
| 政府/电信 | **Huawei Ascend 920** | 国产最强 |
| 互联网大模型 | **Huawei Ascend 920 + CloudMatrix 384 Ultra** | 系统级 |
| 边缘 AI | **Huawei Ascend 310** | 国产 |
| 国家级 AI | **Huawei CloudMatrix 384 Ultra** | 单系统 345 PFLOPS |

### 北美 / 欧洲（自由选择）

| 优先级 | 厂商 | 理由 |
|--------|------|------|
| 1 | **NVIDIA** | 生态成熟、性能最强 |
| 2 | AMD | 性价比、开放生态 |
| 3 | AWS | 仅在 AWS 云 |
| 4 | Google | 仅在 Google Cloud |

### AWS Cloud（仅 AWS 生态）

| 场景 | 推荐 |
|------|------|
| 训练 | **Trainium 3 UltraServer**（3nm, 4.4×） |
| 推理 | **Inferentia 2**（便宜） |
| 通用 | **NVIDIA H100**（p5.48xlarge） |

### Google Cloud（仅 Google 生态）

| 场景 | 推荐 |
|------|------|
| 训练 | **TPU 8t pod**（9,216 chip） |
| 推理 | **TPU 8i**（288GB HBM） |
| 通用 | **NVIDIA H100 / A100** |

## 延迟要求速查

| 延迟要求 | 训练 | 推理 |
|----------|------|------|
| **> 1s** | 任何方案 | 任何方案 |
| **100ms-1s** | 任何方案 | NVIDIA H200 / TPU 8i |
| **50-100ms** | — | TPU 8i / H200 NVL |
| **20-50ms** | — | **Groq 3 LPX** |
| **< 20ms** | — | **Groq 3 LPX rack** |

## 2026 H2 选型速查表

| 需求 | 推荐方案 | 备选 |
|------|----------|------|
| 万亿参数 LLM 训练 | **NVIDIA Rubin NVL72** | AMD Helios |
| 700B LLM 训练 | **AMD Helios (open)** 或 NVIDIA Rubin NVL72 | Trainium 3 |
| 70B LLM 推理（单卡） | **NVIDIA B300 Ultra** | TPU 8i / MI400 |
| 70B LLM 训练 | **NVIDIA H200 / B200** | AMD MI300X / MI325X |
| 7B-13B LLM 训练 | **NVIDIA A100 / H100** | AMD MI300X / Gaudi 3 |
| 本地 7B LLM | **NVIDIA RTX 4090 / 5090** | Apple M3 Ultra |
| **超低延迟 LLM 推理** | **Groq 3 LPX** | TPU 8i |
| **Agentic AI** | **Groq 3 LPX rack** | 唯一选择 |
| 中国市场 | **Huawei Ascend 920** | Ascend 910C |
| AWS 云 | **Trainium 3** | NVIDIA H100 |
| Google Cloud | **TPU 8t (训练) + 8i (推理)** | NVIDIA H100 |
| 机器人 / 物理 AI | **Jetson AGX Thor T5000** | Jetson Orin |
| 工业边缘 | **Jetson AGX Orin 64GB** | Hailo-15 |
| 性价比深度学习 | **AMD MI300X** | Intel Gaudi 3 |
| Intel 生态保留 | **Intel Jaguar Shores** (2027-2028) | Gaudi 3 |
| 超低延迟 AI | **Groq 3 LPX** (256 LPU) | 唯一 |

## 详细产品页索引

### 训练 GPU
- [NVIDIA Rubin R200](/docs/cards/nvidia/rubin-r200)
- [NVIDIA B300 Ultra](/docs/cards/nvidia/b300-ultra)
- [NVIDIA H200](/docs/cards/nvidia/h200)
- [AMD MI400](/docs/cards/amd/mi400)
- [AMD MI300X](/docs/cards/amd/mi300x)
- [Huawei Ascend 920](/docs/cards/huawei/ascend-920)

### 训练 ASIC
- [Google TPU 8t](/docs/cards/google/tpu-8t)
- [Google TPU v7 Ironwood](/docs/cards/google/tpu-ironwood)
- [AWS Trainium 3](/docs/cards/aws/trainium-3)
- [Intel Gaudi 3](/docs/cards/intel/gaudi-3)

### 推理 GPU
- [NVIDIA L40S](/docs/cards/nvidia/l40s)
- [NVIDIA L4](/docs/cards/nvidia/l4)
- [AMD MI325X](/docs/cards/amd/mi325x)
- [Huawei Ascend 910C](/docs/cards/huawei/ascend-910c)

### 推理 ASIC
- [Google TPU 8i](/docs/cards/google/tpu-8i)
- [NVIDIA Groq 3 LPX](/docs/cards/nvidia/groq-3-lpx)
- [AWS Inferentia 2](/docs/cards/aws/inferentia-2)

### 晶圆级
- [Cerebras WSE-3](/docs/cards/cerebras/wse-3)
- [Cerebras WSE-4](/docs/cards/cerebras/wse-4)

### 其他
- [Apple M3 Ultra (192GB UMA)](/docs/cards/others/apple-m3-ultra)
- [Groq LPU v1](/docs/cards/others/groq-lpu)
- [Jetson AGX Thor T5000](/docs/cards/nvidia/jetson-thor)

## 总结

2026 H2 选型核心原则：

1. **训练 + 推理 = 同一芯片**？多数场景用 NVIDIA B300 Ultra / H200 同时解决。
2. **超低延迟推理**？选 **Groq 3 LPX**，无替代。
3. **AWS 云**？选 **Trainium 3**，每美元性能 2-3×。
4. **Google Cloud**？选 **TPU 8t (训练) + TPU 8i (推理)**。
5. **中国市场**？**Huawei Ascend 920** + **CloudMatrix 384 Ultra**。
6. **开放生态**？**AMD Helios**（UALoF 开放互联）。
7. **预算敏感**？**AMD MI300X** 或 **Intel Gaudi 3**。
8. **本地 LLM**？**Apple M3 Ultra** (192GB UMA)。

**没有最好，只有最合适**。结合你的模型规模、延迟要求、预算、地区，参考本文的选型树和速查表。
