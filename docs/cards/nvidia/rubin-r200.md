---
id: rubin-r200
title: NVIDIA Rubin R200 (Vera Rubin Platform)
sidebar_label: NVIDIA Rubin R200
description: NVIDIA Vera Rubin 平台：Rubin GPU + Vera CPU 6 芯片封装，288GB HBM4、22 TB/s、50 PF FP4 稀疏，ConnectX-9 28.8 TB/s，2026 H2 出货。
keywords: [NVIDIA Rubin, Vera Rubin, R200, HBM4, 50 PFLOPS FP4, NVLink 6, ConnectX-9, 6 芯片封装, Vera CPU]
---

# NVIDIA Rubin R200 (Vera Rubin Platform)

## 产品概述

**NVIDIA Rubin R200**（代号 **Vera Rubin**，纪念 Vera Rubin 暗物质天文学家）是 Blackwell 之后的**下一代旗舰平台**，**2026 H2 正式出货**。采用**业界首个 6 芯片封装**（6-die CoWoS-L）—— 1 颗 Vera CPU + 2 颗 Rubin GPU die + I/O / HBM base die，单颗 Rubin GPU 配备 **288GB HBM4**、**22 TB/s 带宽**、**50 PFLOPS FP4 稀疏**算力。

Vera Rubin 平台还包含**双独立 ConnectX-9 NIC**（每 GPU 28.8 TB/s 聚合）和**新版 NVLink 6**（3.5 TB/s/GPU）。**Rubin NVL72 机柜** = 576 颗 Rubin GPU + 288 颗 Vera CPU = **28.8 EF FP4 稀疏 / 1.5 ExaFLOPS FP8** 算力。

## 核心规格（每 GPU）

| 项目 | 参数 |
|------|------|
| **架构** | Rubin（Vera Rubin 平台） |
| **制程** | TSMC 3NP / 4NP（混合） |
| **封装** | **6 芯片 CoWoS-L**（1× Vera CPU + 2× Rubin die + 3× I/O/HBM） |
| **晶体管数** | ~3,400 亿（每 GPU） |
| **显存** | **288 GB HBM4**（288 GB/颗 GPU 推断） |
| **显存带宽** | **22 TB/s** |
| **FP4 稀疏** | **50 PFLOPS**（**业界首款 50 PF 级别**） |
| **FP8 稀疏** | **25 PFLOPS** |
| **FP16/BF16 密集** | **12.5 PFLOPS** |
| **NVLink 6** | **3.5 TB/s/GPU**（第 6 代，2× 上一代） |
| **DC 网络** | **ConnectX-9, 28.8 Tbps/GPU**（双 14.4 Tbps 端口） |
| **TDP** | ~1,800 W（**液冷必需**） |
| **首发** | **2026 H2** |

> ⚠️ **数据约定**：NVIDIA Blackwell 之后继续采用 **sparse（稀疏）算力** 为官方标准，与 AMD/Google **dense（密集）** 算力不可直接比较。本页 FP4 50 PF / FP8 25 PF 均为稀疏。

## Rubin R200 vs B300 Ultra 代际升级

| 指标 | B300 Ultra | **Rubin R200** | 提升 |
|------|------------|----------------|------|
| 架构 | Blackwell Ultra | **Rubin** | 新一代 |
| 制程 | TSMC 4NP | **TSMC 3NP** | 更先进 |
| 封装 | 2 die (CoWoS-L) | **6 die (CoWoS-L)** | **3× 芯片数** |
| 显存 | 288 GB HBM3e | **288 GB HBM4** | HBM3e → HBM4 |
| 显存带宽 | 8 TB/s | **22 TB/s** | **2.75×** |
| FP4 稀疏 | 14 PFLOPS | **50 PFLOPS** | **3.6×** |
| NVLink | 1.8 TB/s (Gen 5) | **3.5 TB/s (Gen 6)** | 2× |
| DC 网络 | ConnectX-8 1.6 Tbps | **ConnectX-9 28.8 Tbps** | **18×** |
| TDP | 1,400 W | ~1,800 W | +29% |
| 发布时间 | 2026-01 | **2026 H2** | — |

## Vera CPU（首次集成 ARM CPU）

| 项目 | 参数 |
|------|------|
| **架构** | Vera（ARM-compatible Olympus 核心） |
| **核心数** | **88 个 Olympus 核心**（推测） |
| **制程** | TSMC 3NP |
| **每 GPU 配对** | 1:1（**1 颗 Vera : 2 颗 Rubin GPU die**） |
| **关键角色** | host CPU + 互联主控 + 预取器 |

> **命名由来**：NVIDIA 在 2024 GTC 上将下一代平台命名为 "Vera Rubin"，纪念天文学家 **Vera Florence Cooper Rubin**（1928-2016），其星系自转曲线研究证实了**暗物质**的存在 —— 与"看不见的 AI 算力革命"形成哲学呼应。

## NVLink 6 互联（机柜级）

| 项目 | 参数 |
|------|------|
| **每 GPU 带宽** | **3.5 TB/s**（双向） |
| **GPU-to-GPU 跳数** | 1（**全互联 NVLink switch**） |
| **机柜内 GPU 数** | **72 颗**（Vera Rubin NVL72） |
| **机柜内 GPU 总带宽** | 252 TB/s NVLink 聚合 |

## ConnectX-9 网络

| 项目 | 参数 |
|------|------|
| **每 GPU 端口** | **2 × 14.4 Tbps**（独立 NIC） |
| **每 GPU 聚合** | **28.8 Tbps** |
| **机柜级** | 9,216 端口（Rubin NVL576） |
| **网络拓扑** | 3D Torus / 全互联 |

> **双 ConnectX-9 = 28.8 TB/s 意味着 GPU 不会成为网络瓶颈**，这是"in-network computing"的终极形态。

## Rubin NVL72 / NVL576 机柜

| 配置 | NVL72 | NVL576 |
|------|-------|--------|
| **GPU 数** | 72 | 576 |
| **CPU 数** | 36 | 288 |
| **HBM 总量** | 20.7 TB HBM4 | 165 TB HBM4 |
| **NVLink 聚合** | 252 TB/s | 2,016 TB/s |
| **FP4 稀疏算力** | 3.6 EFLOPS | **28.8 EFLOPS** |
| **FP8 稀疏算力** | 1.8 EFLOPS | 14.4 EFLOPS |
| **TDP（机柜）** | ~130 kW | ~1 MW |
| **网络** | ConnectX-9 | ConnectX-9 × 1152 端口 |

> **Rubin NVL576 = 28.8 EFLOPS FP4** = 1.5 ExaFLOPS FP8 = **全球最强 AI 超级节点**（vs GB300 NVL72 的 ~0.5 EF FP8，**5.7× 提升**）。

## 部署推荐配置

| 场景 | 推荐配置 |
|------|----------|
| **100B+ 模型训练** | Rubin NVL72（**单机柜即可运行 100B 模型**） |
| **1T+ 巨型模型训练** | Rubin NVL576 + NVLink Quantum-2 / Quantum-3 |
| **超低延迟推理** | Rubin R200 + FP4 + 推理优化软件 |
| **多模态长上下文** | Rubin R200（288GB HBM4 完整保留 KV） |
| **科学计算** | Vera CPU + 大量 CPU 核 + Rubin GPU 加速 |

## 散热与基础设施

- **TDP ~1,800 W/颗** —— **必须液冷（Direct Liquid Cooling, DLC）**
- 较 B300 Ultra（1,400 W）提升 30%，机房需重新规划
- **Rubin NVL72 = 130 kW/机柜**（约 2 个 GB300 NVL72）
- **Rubin NVL576 = 1 MW/机柜** —— 需专用 1MW 液冷机柜

## 软件生态

- **CUDA 13.x**（新增 Rubin 微架构支持）
- **cuDNN 10.x**
- **TensorRT-LLM 1.0+**（FP4 / NVFP4 全优化）
- **vLLM 0.8+**（Vera Rubin 优化版）
- **NCCL 2.21+**（ConnectX-9 + NVLink 6 支持）
- **NVFP4**（继承自 Blackwell Ultra，2nd gen）

## 适用场景

- ✅ **超大规模 LLM 训练**（100B+ 参数，万卡级集群）
- ✅ **超低延迟超大模型推理**（1T+ 参数实时响应）
- ✅ **科学研究**（气候模拟、生物制药、密码学）
- ✅ **多模态生成**（文生视频、4D 内容创作）
- ❌ 中小模型训练（成本过高，B300 Ultra 更经济）
- ❌ 边缘部署（功耗/体积不可接受）

## 厂商信息

| 项目 | 内容 |
|------|------|
| **厂商** | NVIDIA Corporation |
| **官方公告** | 2024-03 GTC 大会首次披露 |
| **产品页** | https://www.nvidia.com/en-us/data-center/ |
| **首发** | **2026 H2** |
| **代际命名** | Vera Rubin（纪念暗物质天文学家） |
| **代际周期** | Blackwell (2024-2026) → **Vera Rubin (2026-2028)** → Feynman (2028+) |

## 相关产品

- [NVIDIA B300 Ultra](/docs/cards/nvidia/b300-ultra) - 前一代 Blackwell Ultra
- [NVIDIA B200](/docs/cards/nvidia/b200) - 前代旗舰
- [NVIDIA H200](/docs/cards/nvidia/h200) - 上代主力
- [AMD MI400](/docs/cards/amd/mi400) - 同代竞争对手
- [Google TPU v7 Ironwood](/docs/cards/google/tpu-ironwood) - 推理 ASIC 对标
- [AWS Trainium 3](/docs/cards/aws/trainium-3) - 训练 ASIC 对标
- [完整对比表](/docs/comparison)
