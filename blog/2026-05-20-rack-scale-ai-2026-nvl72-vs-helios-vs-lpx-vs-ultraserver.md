---
slug: rack-scale-ai-2026-nvl72-vs-helios-vs-lpx-vs-ultraserver
title: '机柜级 AI 时代：NVL72 vs Helios vs Groq 3 LPX vs Trn3 UltraServer 四大方案对比'
authors: [aicomputecards]
tags: [tech-deep-dive, selection]
description: 2026 年 AI 算力进入机柜级时代：NVIDIA Rubin NVL72 (576 GPU)、AMD Helios (72 MI400)、Groq 3 LPX (256 LPU)、AWS Trn3 UltraServer (144 chip) 四大方案的深度对比与选型。
---

**2026 年 AI 算力进入"机柜级"时代**。单芯片对标已退潮，整机柜方案成为主战场。本文将深度对比 **NVIDIA Rubin NVL72/NVL576、AMD Helios、Groq 3 LPX、AWS Trn3 UltraServer、Google TPU 8t pod** 五大机柜级方案。

{/* truncate */}

## 为什么是机柜级时代？

### 单芯片对标的局限

| 单芯片指标 | 2018 (V100) | 2024 (H100) | 2026 (Rubin R200) | 2028 (推测) |
|------------|-------------|-------------|-------------------|-------------|
| 算力 | 125 TFLOPS | 989 TFLOPS | 25 PFLOPS | 80 PFLOPS |
| 显存 | 32 GB | 80 GB | 288 GB | 1 TB |
| TDP | 300 W | 700 W | 1,800 W | 3,000 W |

> **单芯片 TDP 即将突破 3,000W**——物理散热、电源、互联都达到极限。

### 机柜级的优势

- **统一散热**：液冷整柜，散热效率高
- **统一电源**：集中供电，能效优化
- **统一互联**：NVLink 6 / UALoF / GroqSync / NeuronLink
- **统一管理**：单系统软件栈
- **统一采购**：单 SKU 购买，简化运维

## 五大机柜级方案

### 1. NVIDIA Rubin NVL72 / NVL576

| 项目 | Rubin NVL72 | **Rubin NVL576** |
|------|-------------|------------------|
| GPU 数 | 72 | **576** |
| CPU 数 | 36 | 288 |
| HBM 总量 | 20.7 TB HBM4 | 165 TB HBM4 |
| 显存带宽 | 1.6 PB/s | 12.7 PB/s |
| NVLink 聚合 | 252 TB/s | 2,016 TB/s |
| FP4 稀疏算力 | 3.6 EFLOPS | **28.8 EFLOPS** |
| FP8 稀疏算力 | 1.8 EFLOPS | 14.4 EFLOPS |
| DC 网络 | ConnectX-9 1152 端口 | ConnectX-9 1152 端口 |
| TDP（机柜） | ~130 kW | **~1 MW** |
| 散热 | 液冷 | 液冷 |
| 适用 | 100B+ 模型训练 | **1T+ 巨型模型** |
| 价格 | ~$3-5M | **~$25-40M** |
| 发布时间 | 2026 H2 | 2026 H2+ |

> **Rubin NVL576 = 28.8 EFLOPS FP4 = 1.5 ExaFLOPS FP8 = 全球最强 AI 超级节点**

### 2. AMD Helios 机柜

| 项目 | Helios |
|------|--------|
| GPU 数 | **72 颗 MI400** |
| CPU 数 | 36 颗 EPYC Venice |
| HBM 总量 | 31.1 TB HBM4 |
| 显存带宽 | 1.4 PB/s |
| Scale-up 互联 | **UALoF 260 TB/s**（开放标准） |
| Scale-out 网络 | Pensando Vulcano 800G |
| FP4 dense 算力 | **2.88 EFLOPS** |
| FP8 dense 算力 | 1.44 EFLOPS |
| TDP（机柜） | ~80 kW |
| 散热 | 液冷 |
| 适用 | 700B+ 模型训练 |
| 价格 | ~$2-3M |
| 发布时间 | 2026 |

> **Helios 在 dense 算力上超越 NVIDIA Rubin NVL72**（2.88 vs 1.8 EF FP8 dense）

### 3. NVIDIA Groq 3 LPX 机柜（推理专用）

| 项目 | Groq 3 LPX |
|------|------------|
| LPU 数 | **256 颗 Groq 3 LPU** |
| CPU 数 | 无（独立） |
| 片上 SRAM | **128 GB 聚合** |
| SRAM 带宽 | **40 PB/s**（SRAM，非 HBM） |
| 互联 | GroqSync + NVLink-Network **640 TB/s** |
| FP8 算力 | ~640 PFLOPS |
| INT8 算力 | ~640,000 TOPS |
| TDP（机柜） | ~80 kW |
| **TTFT（首 Token 延迟）** | **< 20ms** |
| **TPOT** | **< 5ms** |
| 散热 | 液冷 |
| 适用 | **超低延迟推理**（Agentic AI） |
| 价格 | ~$8-10M |
| 发布时间 | 2026 H2 |

> **Groq 3 LPX 是当前唯一专为 Agentic AI 设计的机柜级 LPU 系统**

### 4. AWS Trn3 UltraServer

| 项目 | Trn3 UltraServer |
|------|------------------|
| 芯片数 | **144 颗 Trainium 3** |
| HBM 总量 | ~20.7 TB |
| NeuronLink-v4 | 全互联，>10 TB/s 双向 |
| FP8 dense 算力 | **52 PFLOPS** |
| BF16 dense 算力 | ~187 PFLOPS |
| TDP（机柜） | ~100 kW |
| 散热 | 液冷 |
| 适用 | **400B+ 模型训练** |
| 价格（推测） | ~$3-5M |
| 发布时间 | 2025-12 GA |

> **Trn3 UltraServer = 性价比最高的大规模训练方案**（每美元性能 2-3× NVIDIA）

### 5. Google TPU 8t pod

| 项目 | TPU 8t pod |
|------|------------|
| 芯片数 | **9,216 颗 TPU 8t** |
| HBM 总量 | ~2 PB HBM |
| 互联 | 3D Torus |
| 集成 CPU | Arm Axion（每节点 64 核） |
| BF16 dense 算力 | **~32 PFLOPS × 9,216 = 295 EFLOPS** |
| FP8 dense 算力 | ~590 EFLOPS |
| 散热 | 液冷 |
| 适用 | **Gemini 3/4 训练** |
| 价格 | 仅 Google Cloud |
| 发布时间 | 2026-04-22 |

> **TPU 8t pod = 全球最大 AI 训练集群**（9,216 颗芯片 × 9 PFLOPS ≈ 83 EFLOPS FP4 dense）

## 五大方案横向对比

| 指标 | NVIDIA NVL72 | AMD Helios | Groq 3 LPX | Trn3 UltraServer | TPU 8t pod |
|------|--------------|------------|------------|------------------|------------|
| **形态** | 训练机柜 | 训练机柜 | 推理机柜 | 训练机柜 | 训练 pod |
| **芯片数** | 72 GPU | 72 GPU | 256 LPU | 144 chip | 9,216 chip |
| **总内存** | 20.7 TB HBM | 31.1 TB HBM | 128 GB SRAM | 20.7 TB HBM | ~2 PB HBM |
| **互联** | NVLink 6 252 TB/s | UALoF 260 TB/s | GroqSync 640 TB/s | NeuronLink-v4 | 3D Torus |
| **FP4 算力** | 3.6 EF (sparse) | 2.88 EF (dense) | — | — | — |
| **FP8 算力** | 1.8 EF (sparse) | 1.44 EF (dense) | 640 PF | 52 PF (dense) | 590 EF (dense) |
| **TDP** | 130 kW | 80 kW | 80 kW | 100 kW | ~10 MW (pod) |
| **TTFT** | ~100ms | ~100ms | **< 20ms** | ~100ms | ~100ms |
| **生态** | CUDA 13 | ROCm 8 | Groq SDK | Neuron 3 | JAX 0.5+ |
| **价格** | $3-5M | $2-3M | $8-10M | $3-5M | 内部使用 |
| **客户** | 所有云 + 客户 | 客户 + 云 | 客户 + 云 | AWS Cloud | Google Cloud |
| **标准化** | ❌ NVLink 封闭 | ✅ UALoF 开放 | ❌ GroqSync | ❌ NeuronLink | ❌ Torus |
| **发布时间** | 2026 H2 | 2026 | 2026 H2 | 2025-12 GA | 2026-04 |

## 选型建议

### 大规模训练

| 场景 | 推荐方案 | 理由 |
|------|----------|------|
| **100B-700B 模型训练** | NVIDIA Rubin NVL72 | 单机柜可装 100B，FP4 算力最强 |
| **700B-1T 模型训练** | NVIDIA Rubin NVL576 或 AMD Helios | 多机柜互联 |
| **1T+ 巨型模型训练** | NVIDIA NVL576 (8 个) | 28.8 EFLOPS × 8 = 230 EFLOPS |
| **超大规模 (Gemini 级)** | Google TPU 8t pod (9,216 chip) | 仅 Google Cloud |
| **AWS 内部训练** | Trn3 UltraServer | 性价比最高 |
| **开放生态偏好** | AMD Helios | UALoF 开放互联 |

### 超低延迟推理

| 场景 | 推荐方案 | 理由 |
|------|----------|------|
| **Agentic AI (1000+ 调用/秒)** | Groq 3 LPX | TTFT < 20ms，唯一选择 |
| **Real-time Code Gen**（Copilot） | Groq 3 LPX | 100ms 以内响应 |
| **万亿参数推理** | NVIDIA Rubin R200 + Groq 3 LPX 协同 | GPU 训练 + LPU 推理 |
| **70B 单模型推理** | TPU 8i（288GB HBM） | 单卡可装 FP16 70B |
| **多模态实时推理** | TPU 8i（风冷） | 散热灵活 |

### 成本敏感训练

| 场景 | 推荐方案 | 理由 |
|------|----------|------|
| **百亿参数训练** | AWS Trn3 UltraServer | 每美元性能 2-3× NVIDIA |
| **超大规模 (Gemini 外)** | AWS Trn3 UltraServer × N | $3-5M/机柜 |
| **70B 微调** | AMD Helios 单机柜 | 性价比 + 开放生态 |
| **千亿参数训练** | Trn3 UltraServer × 3 | 144 × 3 = 432 chip |

## 机柜级的未来趋势

### 1. 单机柜算力持续增长

| 年份 | 单机柜算力 | 主流方案 |
|------|------------|----------|
| 2024 | ~0.2 EFLOPS FP8 | GB200 NVL72 |
| 2026 | 1.8-3.6 EFLOPS FP8 | Rubin NVL72 / Helios |
| 2028 | 8-15 EFLOPS FP8 | Rubin Ultra NVL72 / MI500 |
| 2030 | 30-50 EFLOPS FP8 | Feynman 时代 |

### 2. 多机柜互联标准竞争

| 标准 | 厂商 | 状态 |
|------|------|------|
| **NVLink Network** | NVIDIA | 封闭，2026 主力 |
| **UALoF** | AMD/Broadcom/Intel | 开放，2026 Helios 首发 |
| **UALink** | 联盟 | UALoF 演进版 |
| **NeuronLink** | AWS | 私有 |
| **GroqSync** | Groq (NVIDIA) | 私有，超低延迟 |

### 3. 软件生态分层

- **训练框架**：PyTorch + JAX + Megatron
- **推理引擎**：vLLM + TensorRT-LLM + SGLang
- **资源调度**：Slurm + Kubernetes + Ray
- **多机柜管理**：NVIDIA Base Command / AMD ROCm RunTime

## 详细产品页

- [NVIDIA Rubin R200 (NVL72 / NVL576)](/docs/cards/nvidia/rubin-r200)
- [NVIDIA Groq 3 LPX](/docs/cards/nvidia/groq-3-lpx)
- [AMD MI400 (Helios 机柜)](/docs/cards/amd/mi400)
- [AWS Trainium 3 (Trn3 UltraServer)](/docs/cards/aws/trainium-3)
- [Google TPU 8t (9,216 pod)](/docs/cards/google/tpu-8t)
- [Google TPU 8i (推理专用)](/docs/cards/google/tpu-8i)
- [未来路线图](/docs/roadmap)

## 总结

2026 年 AI 算力的**主战场**是机柜级方案：

1. **NVIDIA Rubin NVL72/NVL576**——训练最强，FP4 3.6/28.8 EFLOPS
2. **AMD Helios**——开放生态，dense 算力领先
3. **Groq 3 LPX**——超低延迟推理，TTFT < 20ms
4. **AWS Trn3 UltraServer**——性价比最高，2-3× 每美元
5. **Google TPU 8t pod**——超大规模，9,216 chip 集群

**没有最好，只有最合适**。选型需结合：
- 模型规模（100B / 700B / 1T+）
- 训练 vs 推理
- 延迟要求（普通 vs Agentic）
- 生态偏好（CUDA / ROCm / JAX / Neuron）
- 预算（$2-10M/机柜）
- 部署位置（自建 / 云）
