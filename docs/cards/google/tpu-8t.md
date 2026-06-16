---
id: tpu-8t
title: Google Cloud TPU 8t (训练专用)
sidebar_label: Google TPU 8t
description: Google TPU 8t 训练专用 ASIC：TSMC 2nm、双计算Die、8×HBM3e 12层、9,600 芯片 Pod、121 EFLOPS FP4、2026-04-22 Cloud Next '26 公布。
keywords: [Google TPU 8t, Trillium 2, 训练 TPU, TSMC 2nm, 9600芯片Pod, 121 EFLOPS FP4, Arm Axion, Cloud Next 2026]
---

# Google Cloud TPU 8t (训练专用)

## 产品概述

**Google TPU 8t** 是 2026-04-22 **Google Cloud Next '26** 公布的**最新一代训练专用 TPU**，与同期公布的 TPU 8i 推理专用形成 **8t + 8i 拆分架构**。采用 **TSMC 2nm** 制程、**双计算 Die** 设计、**8×HBM3e 12层** 显存堆栈。单 Pod 集成 **9,600 芯片**，HBM 总量 **2 PB**，总算力 **121 EFLOPS FP4**（Ironwood 的 3×）。继承与 **Broadcom（博通）** 的长期合作。

TPU 8t 专为 **Google Gemini 3 / Gemini 4 等 frontier 模型训练**设计，集成 **Arm Axion CPU**（Google 自研 64 核 Arm Neoverse V2）实现 TPU + CPU 协同。配备 **SparseCore** 加速 MoE 路由和推荐系统。量产目标 **2027 年底**。

## 核心规格

| 项目 | 参数 |
| **发布** | 2026-04-22 |
|------|------|
| **架构** | TPU 8t（训练专用） |
| **制程** | **TSMC 2nm** |
| **Die 设计** | **双计算 Die** |
| **显存** | 8× **HBM3e 12层**（单芯片推测 ~256GB） |
| **HBM 带宽** | ~7 TB/s（推测每芯片） |
| **Pod 芯片数** | **9,600 芯片** |
| **Pod HBM 总量** | **2 PB** |
| **Pod FP4 算力** | **121 EFLOPS**（3× Ironwood） |
| **集成 CPU** | **Arm Axion（Google 自研，64 核 Neoverse V2）** |
| **SparseCore** | 加速 MoE / 推荐系统 |
| **互联** | ICI 3D Torus |
| **散热** | 第4代液冷 |
| **TDP** | 1,300 W |
| **代工合作伙伴** | **Broadcom（博通）** |
| **公布时间** | 2026-04-22（Google Cloud Next '26） |
| **量产目标** | **2027 年底** |

> 📌 **8t 命名**：TPU 8 代 + **t = training（训练）**。8t 与 8i 同代，**仅用于训练**。

## TPU 8t vs TPU v7 Ironwood（训练对比）

| 指标 | TPU v7 Ironwood | **TPU 8t** | 提升 |
|------|-----------------|------------|------|
| 形态 | 推理为主 | **训练专用** | 形态拆分 |
| 制程 | — | **TSMC 2nm** | 新一代 |
| Die 设计 | — | **双计算 Die** | 架构升级 |
| 显存 | 8× HBM3（192GB） | **8× HBM3e 12层** | 升级 |
| Pod 芯片数 | 9,216 | **9,600** | +4% |
| Pod HBM | — | **2 PB** | 远超 |
| Pod FP4 算力 | ~42 EFLOPS（推测） | **121 EFLOPS** | ~3× |
| 集成 CPU | 无 | **Arm Axion 64 核** | 新增 |
| 量产 | 已开放 | **2027 年底** | — |

## TPU 8t 训练范式优化

| 优化方向 | 内容 |
|----------|------|
| **MoE 训练** | Expert Parallel 原生支持（DeepSeek / Mixtral 风格） |
| **Long-context 训练** | 1M+ token 上下文训练优化 |
| **RLHF / 后训练** | Online RL（DPO / PPO / GRPO）原生优化 |
| **多模态训练** | 视觉-语言联合训练（ViT + LLM 同步） |
| **AXIOM** | Arm Axion CPU 协同（数据预处理 / 权重初始化） |

## Arm Axion CPU 集成

| 项目 | 参数 |
|------|------|
| **架构** | Arm Neoverse V2（64 核） |
| **TDP** | 180 W |
| **作用** | Host CPU + 数据加载 + 预处理 + 推理调度 |
| **意义** | **Google 自研 Arm CPU 首次进入 TPU 节点** |

> **Axion 集成 = TPU 节点向"超节点"演进**：TPU 8t 不再是纯加速器，而是 **TPU + Axion CPU 协同系统**，对标 NVIDIA Vera CPU。

## 部署推荐配置

| 场景 | 推荐配置 |
|------|----------|
| **Gemini 3 训练** | TPU 8t pod 9,216 颗（**单 pod 即可训练 frontier 模型**） |
| **Llama 4 训练** | TPU 8t pod（千亿级模型） |
| **多模态训练** | TPU 8t + Vision Transformer |
| **科学计算** | TPU 8t + JAX 0.5+ |
| **RLHF 后训练** | TPU 8t（**TPU 8t 原生优化**） |

## 软件生态

- **JAX 0.5+**：Google 主力训练框架
- **PyTorch/XLA 2.5+**：PyTorch 兼容
- **TensorFlow 2.17+**：旧框架
- **Paxml / Orbax**：Google 内部 LLM 训练栈
- **MaxText**：Google 参考实现
- **vLLM 0.8+**（实验性）：推理支持

## 适用场景

- ✅ **Frontier 模型训练**（Gemini 3/4、Anthropic、外部客户）
- ✅ **MoE 大模型训练**（原生支持）
- ✅ **Long-context 训练**（1M+ token）
- ✅ **多模态训练**（ViT + LLM）
- ❌ 推理场景（**应用 TPU 8i** 而非 8t）
- ❌ 非 Google Cloud 部署

## 厂商信息

| 项目 | 内容 |
|------|------|
| **厂商** | Google Cloud |
| **首次公布** | **2026-04-22**（Google Cloud Next 2026） |
| **产品页** | https://cloud.google.com/tpu |
| **云端部署** | 仅 Google Cloud |
| **代号** | Trillium 2 |

## 相关产品

- [Google TPU 8i](/docs/cards/google/tpu-8i) - **同期推理专用 TPU**
- [Google TPU v7 Ironwood](/docs/cards/google/tpu-ironwood) - 上一代 TPU
- [Google TPU v6e Trillium](/docs/cards/google/tpu-v6e) - 上代推理 TPU
- [AWS Trainium 3](/docs/cards/aws/trainium-3) - 同代训练 ASIC
- [NVIDIA Rubin R200](/docs/cards/nvidia/rubin-r200) - 同代 GPU
- [完整对比表](/docs/comparison)
