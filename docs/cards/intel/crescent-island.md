---
id: crescent-island
title: Intel Crescent Island (数据中心 AI 推理 GPU)
sidebar_label: Intel Crescent Island
description: Intel Crescent Island AI GPU：Xe3P 架构、480GB LPDDR5x、350W PCIe 风冷，专为智能体 AI 推理负载优化。
keywords: [Intel Crescent Island, Xe3P, 480GB LPDDR5x, 数据中心推理 GPU, 智能体 AI, Computex 2026]
---

# Intel Crescent Island (数据中心 AI 推理 GPU)

## 产品概述

**Intel Crescent Island** 于 **2026 年 6 月 Computex** 首次披露，并在 **2026 年 8 月 Hot Chips 2026** 公布完整架构细节，是 Intel 面向数据中心 AI 推理负载的新一代 GPU 平台。基于 **Xe3P 架构**，配备高达 **480GB LPDDR5x 内存**，采用 **350W 风冷 PCIe** 形态设计。

Crescent Island 定位为 **智能体 AI（Agentic AI）推理** 的高性价比方案——相比使用 HBM 的高端 GPU，LPDDR5x 方案在同等推理负载下成本大幅降低。

## 核心规格

| 项目 | 参数 |
| **发布** | 已披露（2026-06 Computex 2026），未量产 |
|------|------|
| **架构** | Xe3P（第三代 Xe，XMX 升级至 16 深度脉动阵列） |
| **计算单元** | 32 个 Xe3P 核心 / 256 个 XMX 矩阵引擎 / 256 个矢量引擎 / 32 MB 统一 L2 |
| **内存** | **160 GB LPDDR5X**（Intel 参考卡）/ 最高 **480 GB**（ODM 伙伴版本） |
| **内存带宽** | 推测 ~684 GB/s（160GB / 640-bit 配置；480GB 版本更高） |
| **精度支持** | **原生 FP8 / FP4**（XMX 16 深度脉动阵列），兼容 BF16/FP16/FP64 |
| **FP4 算力** | 待官方公布 |
| **FP8 算力** | 待官方公布 |
| **FP16/BF16** | 待官方公布 |
| **FP32** | 待官方公布 |
| **图形/光追** | 已移除（纯 AI 推理，无 3D / 光线追踪硬件） |
| **TDP** | 350 W |
| **形态** | **PCIe Gen5 x16**（标准服务器适配，风冷） |
| **目标** | **智能体 AI 推理（Agentic Inference）** |
| **软件** | Intel 开放统一软件栈（OneAPI + vLLM / SGLang / Dynamo） |
| **首发披露** | **2026 年 6 月（Computex）/ 8 月 Hot Chips 2026 完整架构** |
| **出货** | **2026 下半年（限量出货）** |

> **注**：Crescent Island 于 2026 年 6 月 Computex 首次披露、8 月 Hot Chips 2026 公布架构细节，确认 **2026 下半年限量出货**。具体算力值（FP4/FP8/FP16）Intel 尚未公布；内存带宽 ~684 GB/s 为基于 160GB / 10.7 Gbps LPDDR5X + 640-bit 总线的行业估算值，非官方数据。

## 与同类产品对比

| 指标 | Intel Crescent Island | NVIDIA L40S | NVIDIA H200 | Intel Gaudi 3 |
|------|----------------------|-------------|-------------|---------------|
| **架构** | Xe3P | Ada Lovelace | Hopper | Gaudi 3 |
| **内存** | 480GB LPDDR5x | 48GB GDDR6 | 141GB HBM3e | 128GB HBM2e |
| **内存类型** | LPDDR5x（低成本） | GDDR6 | HBM3e（高成本） | HBM2e（中等） |
| **TDP** | 350W | 350W | 700W | 900W |
| **形态** | PCIe 风冷 | PCIe 风冷 | SXM 液冷 | OAM/PCIe |
| **目标** | **智能体推理** | 通用推理 | 训练+推理 | 训练+推理 |
| **价格定位** | 低（LPDDR5x） | 中等 | 高 | 中等 |
| **FP4 支持** | ✅ **原生** | ❌ | ❌ | ❌ |

> **Crescent Island 优势**：480GB LPDDR5x = **3.4× L40S 的内存容量**，**原生 FP4 支持**，**风冷 350W** 可放入现有服务器，是成本敏感型 AI 推理部署的理想选择。

## 厂商信息

| 项目 | 内容 |
|------|------|
| **制造商** | Intel Corporation |
| **官网** | https://www.intel.com |
| **产品页** | 待上线 |
| **首次披露** | 2026 年 6 月（Computex 2026） |
| **软件生态** | Intel 开放统一 AI 软件栈（OneAPI + PyTorch/TensorFlow）|

## 适用场景

- ✅ **智能体 AI 推理（Agentic Inference）**：海量、词元密集型工作负载
- ✅ **成本敏感型 AI 推理**：LPDDR5x 大幅降低内存成本
- ✅ **企业级推理部署**：350W 风冷可融入现有数据中心
- ✅ **内存密集型推理**：480GB 可加载超大模型
- ❌ **大规模训练**（非设计目标，Intel 另有 Gaudi 系列）
- ❌ **低延迟高吞吐推理**（HBM 方案更适合）

## 相关产品

- [Intel Gaudi 3](/docs/cards/intel/gaudi-3) - 同时期训练/推理加速器
- [Intel Gaudi 4](/docs/cards/intel/gaudi-4) - 下一代训练/推理
- [NVIDIA L40S](/docs/cards/nvidia/l40s) - 同类推理 GPU
- [NVIDIA H200](/docs/cards/nvidia/h200) - 高端训练+推理
- [全文对比表](/docs/comparison)
