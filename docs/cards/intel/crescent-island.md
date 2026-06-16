---
id: crescent-island
title: Intel Crescent Island (数据中心 AI 推理 GPU)
sidebar_label: Intel Crescent Island
description: Intel Crescent Island AI GPU：Xe3P 架构、480GB LPDDR5x、350W PCIe 风冷，专为智能体 AI 推理负载优化。
keywords: [Intel Crescent Island, Xe3P, 480GB LPDDR5x, 数据中心推理 GPU, 智能体 AI, Computex 2026]
---

# Intel Crescent Island (数据中心 AI 推理 GPU)

## 产品概述

**Intel Crescent Island** 于 **2026 年 6 月**在 Computex 2026 上正式披露，是 Intel 面向数据中心 AI 推理负载的新一代 GPU 平台。基于 **Xe3P 架构**，配备高达 **480GB LPDDR5x 内存**，采用 **350W 风冷 PCIe** 形态设计。

Crescent Island 定位为 **智能体 AI（Agentic AI）推理** 的高性价比方案——相比使用 HBM 的高端 GPU，LPDDR5x 方案在同等推理负载下成本大幅降低。

## 核心规格

| 项目 | 参数 |
| **发布** | 未发布（2026 推测） |
|------|------|
| **架构** | Xe3P |
| **内存** | 高达 **480 GB LPDDR5x** |
| **内存带宽** | 待官方公布（LPDDR5x 配置） |
| **精度支持** | **原生 FP4 / MXFP4 → FP64**（全精度覆盖） |
| **FP4 算力** | 待官方公布 |
| **FP8 算力** | 待官方公布 |
| **FP16/BF16** | 待官方公布 |
| **FP32** | 待官方公布 |
| **TDP** | 350 W |
| **形态** | **PCIe**（标准服务器适配） |
| **目标** | **智能体 AI 推理（Agentic Inference）** |
| **软件** | Intel 开放统一软件栈 |
| **首发披露** | **2026 年 6 月（Computex 2026）** |
| **出货** | 待官方公布 |

> **注**：Crescent Island 处于早期披露阶段，部分规格（具体算力值、出货时间）尚未正式公布。Intel 表示将在后续更新中提供完整参数。

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
