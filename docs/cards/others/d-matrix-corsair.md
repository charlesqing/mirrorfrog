---
id: d-matrix-corsair
title: d-Matrix CORSair (数字存内计算推理加速卡)
sidebar_label: d-Matrix CORSair
description: d-Matrix CORSair 详尽规格：数字存内计算（DIMC）架构、2400 TFLOPS FP8、256GB LPDDR5X、150TB/s 带宽、PCIe Gen5、2025年Q2上市。
keywords: [d-Matrix, CORSair, DIMC, 存内计算, LPDDR5X, SRAM, AI 推理, Chiplet, DMX Link]
---

# d-Matrix CORSair (数字存内计算推理加速卡)

## 产品概述

**d-Matrix CORSair** 是 d-Matrix 公司于 **2024年11月19日** 在 SC24 超算会议上发布的**数据中心 AI 推理加速卡**，采用业界首创的**数字存内计算（Digital In-Memory Compute, DIMC）架构**。每张卡搭载 **2GB 高性能片上 SRAM** 和最高 **256GB 片外 LPDDR5X 内存**，提供 **2,400 TFLOPS FP8** 算力，内存带宽高达 **150 TB/s**（DIMC 架构优势）。

> **核心创新**：CORSair 打破传统"计算与内存分离"的架构，将矩阵运算尽可能靠近存储发生，从根本上解决大模型推理的**内存带宽瓶颈**。相比 GPU 方案，可实现最高 **10× 交互速度**、**3× TCO 性能比**、**3× 能效提升**。

## 核心规格

| 项目 | 参数 |
|------|------|
| **架构** | DIMC（数字存内计算）+ Chiplet |
| **算力（FP8）** | **2,400 TFLOPS**（8位峰值） |
| **算力（FP4）** | 未公开（支持 Micro-scaling/MX 格式） |
| **片上内存** | **2GB 高性能 SRAM** |
| **片外内存** | 最高 **256GB LPDDR5X** |
| **内存带宽** | **150 TB/s**（DIMC 架构） |
| **互联** | **DMX Link**（芯粒间）+ **DMX Bridge**（跨卡） |
| **形态** | **PCIe Gen5 全高全长（FHFL）** |
| **TDP** | 未公开（风冷/液冷均支持） |
| **制程** | 未公开（Chiplet 多芯片封装） |
| **发布时间** | **2024年11月19日**（SC24） |
| **上市时间** | **2025年Q2**（广泛上市） |
| **早期送样** | **2024年Q4** 起 |

## DIMC 架构详解

### 传统架构 vs DIMC 架构

| 维度 | 传统 GPU 架构 | **d-Matrix DIMC 架构** |
|--------|----------------|--------------------------|
| 计算与内存 | 分离（HBM 与 GPU 核心通过接口连接） | **集成**（矩阵运算在内存内部完成） |
| 内存带宽瓶颈 | 严重（HBM3e 最高 8TB/s） | **突破**（DIMC 提供 150TB/s） |
| 数据搬运能耗 | 高（占总能耗 60-80%） | **低**（计算在数据存储位置执行） |
| 推理延迟 | 较高（1-10 ms/token） | **极低**（1 ms/token @ Llama 3 8B） |

### Chiplet 封装设计

- **每张卡包含 2 颗芯片**
- **每颗芯片由 4 个 Chiplet 组成**
- **每个 Chiplet 配备**：
  - 2GB SRAM（高性能内存）
  - LPDDR5X 通道（连接片外 256GB 内存）
  - RISC-V 调度引擎（管理任务调度和数据流）
- **DMX Link**：封装内芯粒间高能效 die-to-die 互联
- **DMX Bridge**：跨卡互联（两张卡可通过 DMX Bridge 连接）

## 推理性能

### 真实工作负载性能

| 模型 | CORSair 性能 | vs GPU 方案 |
|--------|----------------|--------------|
| **Llama 3 8B** | **60,000 tokens/秒**（单服务器） | **10× 交互速度** |
| **Llama 3 70B** | **30,000 tokens/秒**（单机架） | **3× TCO 性能比** |
| **延迟（8B）** | **1 ms/token** | **10× 降低** |
| **延迟（70B）** | **2 ms/token** | **3× 降低** |
| **能效** | 未公开（TDP 未公开） | **3× 提升** |

> **关键优势**：CORSair 专门针对**推理密集型**企业级 AI 工作负载优化，解决大模型推理的"高延迟、高功耗、高成本"痛点。

## 与竞品对比

| 指标 | d-Matrix CORSair | NVIDIA H200 | NVIDIA B200 | Groq LPU |
|------|---------------------|---------------|---------------|----------|
| FP8 算力 | 2,400 TFLOPS | 1,970 TFLOPS | 4,500 TFLOPS | ~1,000 TFLOPS（估算） |
| 内存容量 | **256GB LPDDR5X** | 141GB HBM3e | 192GB HBM3e | ~100GB（估算） |
| 内存带宽 | **150TB/s**（DIMC） | 4.8TB/s | 8TB/s | ~10TB/s（SRAM） |
| 推理延迟 | **1-2 ms/token** | 5-10 ms/token | 3-5 ms/token | **\&lt;1 ms/token** |
| TDP | 未公开 | 700W | 1,000W | ~500W（估算） |
| 成本 | **低**（LPDDR5X vs HBM） | 高 | 高 | 中 |
| 定位 | **推理（存内计算）** | 训练+推理 | 训练+推理 | 推理（SRAM） |

## 软件栈与生态

### Aviator 软件栈

- **统一管理**：所有 d-Matrix 硬件创新通过 Aviator 软件栈统一管理
- **生态兼容**：为 AI 开发者提供与现有生态一致的使用体验与工具链
- **PyTorch 支持**：无缝迁移现有 PyTorch 模型
- **ONNX 支持**：支持 ONNX 格式模型导入
- **Micro-scaling/MX 格式**：业界首批原生支持块浮点数值格式（已成为 OCP 标准）

### OEM/系统集成商合作

- **Supermicro**：搭载 CORSair 的液冷/风冷 AI 服务器
- **GigaIO**：高密度推理节点
- **Liquid**：液冷解决方案
- **上市时间**：2025年Q2 广泛上市

## 与前代产品对比

| 指标 | d-Matrix 前代（2023） | **CORSair（2025）** | 提升 |
|------|---------------------|---------------------|------|
| 架构 | 早期 DIMC 原型 | **量产 DIMC + Chiplet** | 成熟 |
| 算力（FP8） | ~500 TFLOPS（估算） | **2,400 TFLOPS** | **4.8×** |
| 内存容量 | ~64GB（估算） | **256GB** | **4×** |
| 内存带宽 | ~10TB/s（DIMC） | **150TB/s** | **15×** |
| 形态 | 工程样卡 | **PCIe Gen5 FHFL（量产）** | 商用化 |
| 软件栈 | 早期版本 | **Aviator（成熟）** | 完善 |

## 发布时间与获取方式

- **官方发布**：2024年11月19日（SC24 超算会议）
- **早期送样**：2024年Q4 起（早期访问客户）
- **广泛上市**：**2025年Q2**（已上市）
- **获取方式**：
  - 直接采购（d-Matrix 官网）
  - 通过 OEM 合作伙伴（Supermicro、GigaIO、Liquid）
  - 云服务（预计 2026 年上线）

## 技术亮点

### 1. 数字存内计算（DIMC）
- **打破内存墙**：将矩阵运算在内存内部完成，消除数据搬运瓶颈
- **150TB/s 有效带宽**：远超 HBM3e（4.8TB/s）和 HBM4（8TB/s）
- **低延迟**：1-2 ms/token（70B 模型），适合实时交互场景

### 2. Chiplet 架构
- **模块化设计**：4 个 Chiplet 组成一颗芯片，2 颗芯片组成一张卡
- **灵活扩展**：通过 DMX Link 和 DMX Bridge 实现多卡互联
- **成本优化**：LPDDR5X 比 HBM3e 便宜 **3-5×**

### 3. 块浮点格式支持
- **Micro-scaling/MX 格式**：业界首批原生支持（已成为 OCP 标准）
- **精度与效率平衡**：MXFP8 精度接近 FP16，算力比 FP16 提升 **2×**
- **OCP 标准**：与 Meta、AMD、Intel 等公司共同推动的标准格式

## 适用场景

- **实时对话 AI**：1-2 ms/token 延迟，适合客服、助手等场景
- **大规模推理服务**：60,000 tokens/秒（8B 模型），支持高并发
- **企业级 AI 工作负载**：TCO 比 GPU 方案低 **3×**
- **边缘推理**：PCIe Gen5 标准形态，适合边缘数据中心部署

## 外部链接

- [d-Matrix 官方发布稿](https://www.d-matrix.ai/announcements/d-matrix-unveils-corsair-the-worlds-most-efficient-ai-computing-platform-for-inference-in-datacenters/)
- [d-Matrix 官网](https://www.d-matrix.ai/)
- [搜狐：D-Matrix 另辟蹊径，欲以 LPDDR5 和 SRAM 方案挑战 HBM](https://www.sohu.com/a/931650332_122396381)
- [知乎：CORSair 的设计](https://zhuanlan.zhihu.com/p/1954690028753130167)
- [腾讯新闻：内存计算驱动推理加速](https://news.qq.com/rain/a/20250904A0240W00)
