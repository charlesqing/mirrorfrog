---
id: ascend-950
title: Huawei Ascend 950 (昇腾 950PR / 950DT)
sidebar_label: Huawei Ascend 950
description: Huawei Ascend 950 系列 (950PR/950DT) 详尽规格：1 PFLOPS FP8、自研 HBM、SIMT 双编程模型、HiF8 低精度高保真格式，2026 H1 量产。
keywords: [Huawei Ascend 950, 昇腾 950, 950PR, 950DT, HiF8, 自研 HBM, FP8, FP4, CloudMatrix 384]
---

# Huawei Ascend 950 (昇腾 950PR / 950DT)

## 产品概述

**Huawei Ascend 950** 系列（**950PR** / **950DT**）是昇腾第四代 AI 芯片，**2026 年初正式发布量产**。首次引入 **FP8 / FP4 低精度格式**，单卡 **FP8 算力 1 PFLOPS**。同时首次采用 **华为自研 HBM**（950PR 使用 HiBL 1.0，950DT 使用 HiZQ 2.0），彻底摆脱对外部 HBM 供应的依赖。

**950PR（Prefill 推理）** 和 **950DT（Decode + 训练）** 是华为昇腾"场景细分"策略的首次尝试——同一架构不同内存配置，精准匹配不同 AI 负载需求。

## 核心规格

| 项目 | Ascend 950PR | Ascend 950DT |
|------|-------------|-------------|
| **架构** | Da Vinci v5（第四代昇腾） | Da Vinci v5（第四代昇腾） |
| **制程** | N+2（SMIC 国产化） | N+2（SMIC 国产化） |
| **编程模型** | **SIMD + SIMT 双模型** | **SIMD + SIMT 双模型** |
| **HBM 类型** | **HiBL 1.0**（自研，成本优先） | **HiZQ 2.0**（自研，带宽优先） |
| **HBM 容量** | **128 GB** | **144 GB** |
| **HBM 带宽** | **1.6 TB/s** | **4 TB/s** |
| **FP8 算力** | **1 PFLOPS**（HiF8 格式） | **1 PFLOPS**（HiF8 格式） |
| **FP4 算力** | **2 PFLOPS** | **2 PFLOPS** |
| **BF16/FP16 算力** | ~500 TFLOPS | ~500 TFLOPS |
| **INT8 算力** | ~2,000 TOPS | ~2,000 TOPS |
| **TDP** | ~400 W | ~500 W |
| **PCIe** | Gen 5 ×16 | Gen 5 ×16 |
| **互联** | **灵衢 2 TB/s** | **灵衢 2 TB/s** |
| **价格** | **¥7 万/卡**（H200 的 1/3） | ~¥12-15 万/卡（推测） |
| **首发** | **2026 H1** | **2026 H1** |

## 950PR vs 950DT 差异化定位

| 维度 | 950PR | 950DT |
|------|-------|-------|
| **目标场景** | 推理 Prefill（首Token生成） | 推理 Decode（逐Token生成）+ 训练 |
| **HBM 容量** | 128 GB（较小，Prefill 内存需求低） | 144 GB（更大，训练需更大内存） |
| **HBM 带宽** | **1.6 TB/s**（Prefill 带宽需求适中） | **4 TB/s**（Decode 和训练高带宽需求） |
| **典型应用** | 视频推荐、实时交互、搜索 | 对话生成、文本续写、模型训练 |
| **定价** | 较低（成本优化） | 较高（高性能） |

## 关键技术突破

### 1. 自研 HBM（HiBL 1.0 / HiZQ 2.0）
- **HiBL 1.0**（950PR）：低成本方案，解决 HBM 供应被卡脖子问题
- **HiZQ 2.0**（950DT）：高带宽方案，4 TB/s 对标 NVIDIA HBM3e
- 填补国内空白，彻底摆脱对 SK Hynix / Samsung 的依赖

### 2. HiF8 格式——精度革命
- 华为自研 FP8 变体，精度接近 FP16，算力比 FP16 提升 2×
- 解决大模型训练中"低精度→精度损失"的矛盾
- 配合 FP4 格式，整体算力利用率提升 **30%+**

### 3. SIMD + SIMT 双编程模型
- **SIMD**：高效向量计算（延续 910C 的 Da Vinci 核心优势）
- **SIMT**：新增模型，支持灵活调度
- 内存访问粒度从 512 字节 → **128 字节**
- 离散内存访问效率提升 **4 倍**
- 提供 ASIC（昇腾 Core）和 GPGPU 双生子型号

### 4. CloudMatrix 384 系统
- 384 颗 950 芯片组成超级节点
- 总算力：**384×1 PFLOPS FP8 ≈ 384 PFLOPS**
- AI 集群性能超越 NVIDIA GB300 NVL72

## 与前代 910C 对比

| 指标 | Ascend 910C | **Ascend 950** | 提升 |
|------|-------------|----------------|------|
| **架构** | Da Vinci v4（SIMD） | Da Vinci v5（**SIMD + SIMT**） | 双模型 |
| **制程** | 7nm 级 | **N+2** | 更先进 |
| **HBM** | HBM2e（外购） | **自研 HiBL / HiZQ** | 自主可控 |
| **HBM 容量** | 128 GB（双芯片） | **128-144 GB** | 相当 |
| **FP8/BF16 算力** | 780 TFLOPS BF16 | **1 PFLOPS FP8** | **~2.5×** |
| **FP4 支持** | ❌ 不支持 | ✅ **支持** | 新增 |
| **TDP** | ~310 W | ~400-500 W | +29-61% |
| **编程模型** | SIMD 专有 | **SIMD + SIMT + ASIC/GPGPU 双生** | 开放 |
| **自研 HBM** | ❌ 外购 | ✅ **自研** | 里程碑 |

## 厂商信息

| 项目 | 内容 |
|------|------|
| **制造商** | 华为技术有限公司（海思半导体） |
| **官网** | https://www.hiascend.com |
| **CANNN** | https://www.hiascend.com/en/software/cann |
| **首发** | **2026 H1（量产）** |
| **定价（推测）** | 950PR ~¥8-10万，950DT ~¥12-15万 |

## 适用场景

- ✅ **大模型训练**（950DT，FP8 1 PFLOPS）
- ✅ **推理 Prefill**（950PR，视频推荐 / 实时交互）
- ✅ **推理 Decode**（950DT，对话生成 / 文本续写）
- ✅ **国产化 AI 集群**（CloudMatrix 384）
- ✅ **政企 AI 基础设施**（自研 HBM，供应链安全）
- ❌ **CUDA 生态锁定**（需迁移至 CANN / MindSpore）
- ❌ **FP4 训练**（950 支持推理 FP4，训练仍以 FP8/BF16 为主）

## 相关产品

- [Huawei Ascend 920](/docs/cards/huawei/ascend-920) - 前代路线图
- [Huawei Ascend 910C](/docs/cards/huawei/ascend-910c) - 前代量产
- [NVIDIA B300 Ultra](/docs/cards/nvidia/b300-ultra) - 同代竞品
- [AMD MI355X](/docs/cards/amd/mi355x) - 同代对比
- [Cambricon MLU690](/docs/cards/cambricon/mlu-690) - 国产竞品
