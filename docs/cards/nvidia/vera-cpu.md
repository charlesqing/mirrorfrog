---
id: vera-cpu
title: NVIDIA Vera CPU (2026)
sidebar_label: NVIDIA Vera CPU
description: "NVIDIA Vera CPU 详尽规格：88 核 Armv9.2 自研架构，176 线程，LPDDR5X 1.5TB 内存，1.2 TB/s 带宽，NVLink-C2C 1.8 TB/s，专为 Agentic AI 推理设计，2026 年 3 月发布"
keywords: [NVIDIA Vera, Vera CPU, Rubin platform, Armv9.2, NVLink-C2C, Agentic AI, FP8, LPDDR5X, 88 cores, 1.5TB memory]
---

# NVIDIA Vera CPU (2026)

Vera CPU 是 NVIDIA 在 **GTC 2026（2026 年 3 月）**正式发布的自研 Arm 架构 CPU，作为 **Vera Rubin** 超级计算平台的核心组成部分。它是全球首款原生支持 **FP8 精度**的 CPU，专为 **Agentic AI（智能体 AI）**推理与强化学习设计。

## 核心规格

| 项目 | 参数 |
|------|------|
| **架构** | NVIDIA 自研 Arm 架构，兼容 Armv9.2 指令集 |
| **核心数** | 88 核 |
| **线程数** | 176 线程（NVIDIA 空间多线程技术） |
| **发布时间** | 2026 年 3 月（GTC 2026） |
| **量产时间** | 2026 年 Q3（随 Rubin 平台出货） |

## 内存与带宽

| 项目 | 参数 |
|------|------|
| **内存类型** | LPDDR5X |
| **最大容量** | 1.5 TB（单颗） |
| **内存带宽** | 1.2 TB/s |
| **Vera Rubin NVL72 总计** | 36 颗 Vera CPU 共 54 TB LPDDR5X 系统内存 |

## CPU-GPU 互联

| 项目 | 参数 |
|------|------|
| **互联技术** | NVLink-C2C（第二代） |
| **相干带宽** | 1.8 TB/s（CPU-GPU 之间） |
| **对比 PCIe Gen6** | 带宽是 PCIe Gen6 的 7 倍 |
| **架构优势** | 统一内存寻址，CPU 与 GPU 共享虚拟地址空间 |

## AI 推理性能

Vera CPU 针对 **AI 推理管道**进行了专项优化：

- **全球首款原生 FP8 CPU**：每个核心配备 6 个 128 位 SVE2 SIMD 单元
- **数据处理性能**：是上一代 Grace CPU 的 **2 倍**
- **智能体推理**：单机架 256 颗液冷 Vera CPU 可同时运行 **22,500 个并行 CPU 沙箱**
- **长上下文支持**：1.5 TB 大容量内存可缓存超长上下文（1M+ token）

## Vera Rubin 平台整合

Vera CPU 与 Rubin GPU 采用 **共同封装（CoWoS-L）**设计：

```
┌─────────────────────────────────────────────┐
│        Vera Rubin NVL72 机架（单机架）       │
├─────────────────────────────────────────────┤
│  36 × Vera CPU  +  72 × Rubin R100 GPU   │
│  NVLink-C2C 1.8 TB/s 全互连             │
│  总计：54 TB LPDDR5X + 576 GB HBM4      │
└─────────────────────────────────────────────┘
```

## 适用场景

| 场景 | 说明 |
|------|------|
| **Agentic AI 推理** | 多步骤推理、工具调用、环境交互的复杂计算 |
| **强化学习** | 高吞吐 CPU 沙箱并行模拟 |
| **LLM 训练** | 混专家（MoE）模型训练，仅需 1/4 数量 GPU 达到 Blackwell 同等性能 |
| **数据预处理** | 数据压缩/解压、分词、特征工程 |

## 竞品对比

| 对比项 | Vera CPU | Grace CPU（上一代） | AMD EPYC 9005 |
|---------|-----------|---------------------|----------------|
| 核心数 | 88 | 72 | 192 |
| 架构 | Armv9.2 自研 | Armv9 自研 | x86-64 (Zen 5) |
| 内存 | LPDDR5X 1.5TB | LPDDR5X 960GB | DDR5 6TB |
| 内存带宽 | 1.2 TB/s | 1.0 TB/s | ~0.6 TB/s |
| CPU-GPU 互联 | NVLink-C2C 1.8 TB/s | NVLink-C2C 900 GB/s | PCIe Gen6 256 GB/s |

## 参考来源

- [NVIDIA 官方新闻：Vera Rubin 平台发布](https://investor.nvidia.com/news/press-release-details/2026/NVIDIA-Kicks-Off-the-Next-Generation-of-AI-With-Rubin--Six-New-Chips-One-Incredible-AI-Supercomputer/default.aspx)
- [Tech Insider: Vera Rubin Platform Analysis](https://tech-insider.org/nvidia-vera-rubin-platform-gtc-2026-rubin-r100-gpu/)
- [百度百科：Vera CPU](https://baike.baidu.com/item/Vera%20CPU/65759277)

## 相关芯片

- [NVIDIA Rubin R100](/docs/cards/nvidia/rubin) — Vera Rubin 平台的 GPU 部分
- [NVIDIA Rubin R200 Ultra](/docs/cards/nvidia/rubin-r200) — Rubin Ultra 版本
