---
id: rtx-spark
title: NVIDIA RTX Spark (AI PC Superchip)
sidebar_label: NVIDIA RTX Spark
description: "NVIDIA RTX Spark: up to 20 Arm CPU cores + 6,144 CUDA Blackwell GPU, 128GB unified LPDDR5X memory, 300 GB/s bandwidth, runs 120B parameter models with 1M token context. Launching Fall 2026."
keywords: [NVIDIA RTX Spark, AI PC, Computex 2026, Blackwell, Arm CPU, unified memory, 128GB LPDDR5X, MediaTek]
---

# NVIDIA RTX Spark (AI PC Superchip)

## 产品概述

**NVIDIA RTX Spark** 于 **2026 年 6 月 1 日**在 Computex 2026 / GTC Taipei 正式发布，是 NVIDIA 与 **联发科（MediaTek）** 合作的首款 AI PC 超级芯片。采用 **Arm CPU + Blackwell GPU** 统一内存架构，配备 **128GB LPDDR5X** 共享内存，目标是将 Windows 转变为一个"智能体 AI（Agentic AI）"平台。

RTX Spark 同时面向 **笔记本和紧凑型桌面**，预计 **2026 年秋季**上市，首发 OEM 包括 Dell、HP、Lenovo、Asus、MSI、Microsoft Surface。

## 核心规格

| 项目 | 参数 |
|------|------|
| **架构** | Blackwell GPU + Arm CPU（联发科合作） |
| **CPU** | 最多 **20 核 Arm** |
| **GPU** | **6,144 CUDA 核心**（Blackwell） |
| **统一内存** | **128 GB LPDDR5X**（CPU + GPU 共享） |
| **内存带宽** | **300 GB/s** |
| **互联** | NVLink C2C（CPU-GPU） |
| **游戏性能** | ~100 FPS @ 1440p（DLSS 4.5） |
| **模型容量** | 可运行 **1,200 亿参数** 模型 |
| **上下文** | 最长 **100 万 tokens** |
| **AI 算力** | **1 PFLOPS（FP4 稀疏，官方口径）** |
| **TDP** | ~100W（推测） |
| **首发 OEM** | Dell, HP, Lenovo, Asus, Acer, Gigabyte, Microsoft, MSI（8 家） |
| **机型** | 30+ 款笔记本 + ~10 款桌面 |
| **上市** | **2026 年秋季** |
| **定价** | 尚未公布 |
| **发布** | 2025-01-07（Project DIGITS） |

> ⚠️ **注**：NVIDIA 在 Computex 2026 的发布重点是平台定位和 AI 叙事，未公布具体的 TFLOPS/PFLOPS 官方数据、TDP 和定价。以上部分数据基于行业推测。

## DGX Spark 桌面系统（2026-10 更新）

RTX Spark 平台首个官方整机形态 **DGX Spark 64GB** 于 2026 年 10 月初正式发布：

| 项目 | 参数 |
|------|------|
| **芯片** | GB10 Grace Blackwell 超级芯片（完整集成） |
| **统一内存** | 64 GB（系统预留约 8 GB，实际可用于模型加载约 56 GB） |
| **内存带宽** | 273 GB/s |
| **互联** | NVLink-C2C |
| **本地推理能力** | 单机可流畅运行 1000 亿参数模型（Qwen3.8 27B、Gemma4 26B、Nemotron 3.5 Lightning 等已实测） |
| **双机协同** | 内置 ConnectX-7，两台 QSFP 直连后内存池化至 128 GB，支持模型上限提升至 2000 亿参数级 |
| **双机实测** | Qwen3.8 27B 集群性能较单台 128GB 系统峰值最高提升 70% |
| **起售价** | **$4,999**（约 ¥3.36 万） |
| **上市** | **2026 年 10 月 23 日**（宏碁、华硕、戴尔、技嘉、惠普、微星等 OEM） |
| **128GB 创始版** | 价格上调至 **$6,950**（AI 内存紧缺推高定价） |
| **软件栈** | 预装 DGX OS + NVIDIA AI 软件栈，原生兼容 Ollama、vLLM、PyTorch with CUDA；Sync Cluster Assistant 自动化集群配置 |

## 平台生态

| 合作伙伴 | 合作内容 |
|----------|----------|
| **Microsoft** | OpenShell 框架，将 Windows 转变为 AI Agent 平台 |
| **Adobe** | Photoshop / Premiere 核心重写，100% GPU 加速 |
| **联发科** | Arm CPU 架构协同设计 |
| **Dell, HP, Lenovo, Asus, MSI** | 首发 OEM 笔记本/桌面 |

## 与 DGX Station for Windows 对比

| 指标 | RTX Spark | DGX Station for Windows |
|------|-----------|------------------------|
| **芯片** | RTX Spark Superchip | GB300 Grace Blackwell Ultra |
| **内存** | 128GB LPDDR5X | 748GB（252GB HBM3e + 496GB LPDDR5X） |
| **内存带宽** | 300 GB/s | 7.1 TB/s (GPU) |
| **CUDA 核心** | 6,144 | ~20,000 (推测) |
| **AI 算力** | ~1 PFLOPS | 20 PFLOPS FP4 |
| **目标** | 个人 AI Agent / 笔记本 | 桌面 AI 超算 / 万亿参数模型 |
| **TDP** | TBD | 1,600W |
| **上市** | 2026 秋 | 2026 Q4 |

## 厂商信息

| 项目 | 内容 |
|------|------|
| **制造商** | NVIDIA × MediaTek（联发科） |
| **官网** | https://www.nvidia.com |
| **首发** | Computex 2026 / GTC Taipei（2026-06-01） |
| **上市** | 2026 年秋季 |

## 适用场景

- ✅ **个人 AI Agent**：本地运行 120B 参数模型，100 万 token 上下文
- ✅ **创作者工作站**：Adobe Photoshop / Premiere 100% GPU 加速
- ✅ **本地 LLM 推理**：128GB 统一内存足够多数模型
- ✅ **轻度 AI 训练**：微调 / LoRA / 小规模训练
- ❌ **大规模训练**（DGX Station 更适合）
- ❌ **HPC 科学计算**（H100 / Rubin 更适合）

## 相关产品

- [NVIDIA DGX Station for Windows](/docs/cards/nvidia/gb300) - 桌面 AI 超算
- [NVIDIA Rubin R200](/docs/cards/nvidia/rubin-r200) - 数据中心训练旗舰
- [NVIDIA B200](/docs/cards/nvidia/b200) - 数据中心训练
- [Apple M5 Ultra](/docs/cards/others/apple-m5-ultra) - 竞品对比
- [RTX 5090](/docs/cards/nvidia/rtx-5090) - 消费级 GPU
