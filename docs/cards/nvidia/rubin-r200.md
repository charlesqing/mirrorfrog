---
title: "NVIDIA Rubin GPU（业界通称 R200）"
description: "NVIDIA Rubin GPU（业界通称 R200）：台积电 3nm 制程、3360 亿晶体管、288GB HBM4 显存、19.2 TB/s 带宽、NVFP4 推理 50 PFLOPS（稀疏），2026 年下半年已规模出货的 Vera Rubin NVL72 核心加速器"
id: rubin-r200
date: "2026-03-17"
vendor: "nvidia"
category: "数据中心GPU"
---

# NVIDIA Rubin GPU（业界通称 R200）

**NVIDIA Rubin GPU**（NVIDIA 官方产品名；业界与供应链通称 **R200 / VR200**，无官方数字型号）是 NVIDIA 在 2026 年发布的新一代 AI GPU，采用台积电 3nm 制程，集成 3360亿晶体管，配备 **288GB HBM4** 显存、**19.2 TB/s** 带宽，NVFP4 推理算力达 **50 PFLOPS（稀疏）**，全面接替 Blackwell 架构。

**出货状态：已规模出货。** Rubin 于 2026 年 1 月宣布进入全面量产，2026 年 6 月起在 GTC Taipei 宣布量产爬坡，**2026 年下半年（H2 2026）已向 CoreWeave、AWS、Google Cloud、Microsoft Azure、Oracle Cloud 等伙伴规模交付 Vera Rubin NVL72 系统**。

## 核心规格

| **规格** | **参数** |
|---------|---------|
| **架构** | Rubin 架构（MCM 多芯片模块设计） |
| **制程** | 台积电 3nm（计算 die N3P+ I/O die） |
| **晶体管数量** | 3360 亿 |
| **SM 数量** | 224 个 |
| **FP4 稀疏** | 50 PFLOPS（NVFP4 推理） |
| **FP4 训练算力** | 35 PFLOPS（dense） |
| **FP8 算力** | 17.5 PFLOPS（dense） |
| **FP16 算力** | 4 PFLOPS（dense） |
| **FP32 算力** | 130 TFLOPS |
| **FP64 算力** | 33 TFLOPS |
| **INT8 算力** | 250 TOPS |
| **显存容量** | 288 GB |
| **显存类型** | HBM4 |
| **显存带宽** | 19.2 TB/s |
| **互联** | NVLink 6（3 TB/s） |
| **TDP** | 1800 W（Max-Q 功耗档） |
| **发布** | 2026 年 1 月 6 日（CES 2026 宣布量产） |
| **量产时间** | 2026 年 H2 规模出货 |

> **TDP 口径说明**：Vera Rubin NVL72 提供两种功耗档，硬件设计相同 —— **Max-Q（约 1.8 kW / GPU，机柜约 190 kW）** 与 **Max-P（约 2.3 kW / GPU，机柜约 230 kW）**。本表采用标准 Max-Q 档。该数值由分析师与供应链披露，NVIDIA 官方规格页未公布单卡 TDP。
> **显存带宽口径**：NVIDIA 2026 年 1月技术博客与早期报道给出 22 TB/s，**2026 年 9 月更新的官方产品页已下修为 19.2 TB/s**，本表采用最新官方值。

## 架构与规格

Rubin GPU 采用**多芯片模块（MCM）设计**，核心包含：
- **2 颗计算 die**（GPU 核心）
- **2 颗 I/O die**（负责 HBM 控制器与 NVLink 物理层）
- **8 颗 HBM4 显存堆栈**

### 关键技术创新

1. **第三代 Transformer Engine**
   - 支持硬件级自适应精度压缩
   - 不需要重写模型代码即可动态切换精度（FP4/FP6/FP8/FP16/BF16/TF32/FP32/FP64）

2. **NVLink 6 互联**
   - 单 GPU 互联带宽 3 TB/s（官方产品页口径）
   - NVL72 机柜总带宽 216 TB/s

3. **HBM4 显存**
   - 容量 288GB（相比 Blackwell B300 的 288GB HBM3e 持平）
   - 带宽 19.2 TB/s（相比 Blackwell 的 8 TB/s 提升 2.4 倍）

## 性能对比

| **对比项** | **Blackwell B300** | **Rubin GPU** | **提升比例** |
|-----------|-------------------|----------------|------------|
| 晶体管数 | 2080 亿 | 3360 亿 | 1.6 倍 |
| 显存容量 | 288GB HBM3e | 288GB HBM4 | 持平 |
| 显存带宽 | 8 TB/s | 19.2 TB/s | 2.4 倍 |
| NVLink 带宽 | 1.8 TB/s | 3 TB/s | 1.7 倍 |
| FP4 推理算力（稀疏） | 20 PFLOPS | 50 PFLOPS | 2.5 倍 |
| TDP | 1,400 W | 1,800 W | 1.3 倍 |

## 平台配置

### Vera Rubin NVL72
- **72 颗** Rubin R200 GPU
- **36 颗** Vera CPU
- **总算力**：NVFP4 推理 3,600 PFLOPS（稀疏）/ 训练 2,520 PFLOPS（密集）
- **总显存**：20.7 TB HBM4
- **总带宽**：1.4 PB/s
- **TDP**：约 190 kW（Max-Q 档）/ 最高 220 kW（Max-P 档），全液冷

### Rubin CPX（2026 年底上市）
- **128 GB GDDR7** 显存，面向百万 token 长上下文的 prefill 阶段
- **Vera Rubin NVL144 CPX** 机柜：8 EFLOPS NVFP4、100 TB 快速显存、1.7 PB/s 聚合带宽

## 量产与交付

- **宣布量产**：2026 年 1 月 6 日 CES 2026 宣布六款芯片全部进入全面量产
- **全面生产确认**：2026 年 10 月 21 日 GTC 柏林主题演讲，黄仁勋宣布 Vera Rubin 平台进入**全面生产（Full Production）**，性能预计两年内较 Blackwell 再提升 30 倍
- **规模出货**：**2026 年下半年（H2 2026）已向合作伙伴规模交付 Vera Rubin NVL72 系统**，首批包括 CoreWeave、AWS、Google Cloud、Microsoft Azure、Oracle Cloud、Lambda、Nebius、Nscale
- **放量节奏（2026-10）**：鸿海在 10 月上旬确认 Vera Rubin NVL72 量产机柜已完成组装并出货（首批交付微软），**Q4 起放量出货**、2027 年成为主力产品；马斯克在 10 月 20 日 SpaceX 财报电话会上称 SpaceX 正以**每月约 20 万颗 GB300** 的速度上线英伟达芯片，2027 年转向以 Vera Rubin 为主（并规划 44 万颗 Vera Rubin 训练集群）
- **Google Cloud A5X**：GTC 柏林（10-21）宣布搭载 Vera Rubin NVL72 的 A5X 实例下月 GA，Google Cloud 计划最多部署 **96 万块 Rubin GPU**
- **命名说明**：原「Rubin NVL144」按 die 计数命名，现官方统一改称 **Vera Rubin NVL72**（按 72 个 GPU 封装计数）
- **带宽双口径**：NVIDIA 技术博客/HGX 页给 **22 TB/s**，Vera Rubin NVL72 产品页给 **19.2 TB/s**，官方尚未调和；本卡与全站对比表统一采用产品页口径 19.2 TB/s
- **HBM4 供货**：SK 海力士、三星、美光三家均已通过 NVIDIA HBM4 认证（2026 年 6 月起）
- **MLPerf Inference v6.1 首秀**（2026-09-16 出结果）：Qwen3-VL 吞吐较 GB300 NVL72 最高提升 **3.7 倍**、DeepSeek-R1 最高提升 **2.5 倍**
- **Rubin Ultra**：原规划 4 die 版已调整为 2 die 版，2027 年下半年推出
- **自建机房采购**：2027 年第一季度

> 📌 **七芯片堆栈**（Vera Rubin 平台完整组成）：Vera CPU + Rubin GPU + NVLink 6 交换机 + ConnectX-9 SuperNIC + BlueField-4 DPU + Spectrum-6 以太网交换机 + **Groq 3 LPX**（专为智能体解码阶段设计的低延迟推理加速器）。

## 应用场景

Rubin GPU 面向**数据中心与超算场景**，适用于：
- 万亿参数大模型训练
- 高性能 AI 推理（低延迟、高吞吐）
- 强化学习（RL）与代理式 AI
- 科学计算与 AI 工厂

## 数据来源

- [NVIDIA Vera Rubin NVL72 官方规格页](https://www.nvidia.com/en-us/data-center/vera-rubin-nvl72/) — 单 GPU：NVFP4 推理 50 PFLOPS（稀疏）、训练 35 PFLOPS（密集）、FP8 17.5 PFLOPS（密集）、FP16 4 PFLOPS、FP32 130 TFLOPS、288GB HBM4 | 19.2 TB/s、NVLink 6 3 TB/s
- [NVIDIA Rubin 平台官方页](https://www.nvidia.com/en-us/data-center/technologies/rubin/) — 3360 亿晶体管、台积电 3nm、七芯片五机架架构
- [NVIDIA 官方新闻：Vera Rubin 全面投产](https://nvidianews.nvidia.com/news/vera-rubin-full-production-agentic-ai-factory) — 量产与规模出货状态
- [NVIDIA HGX Rubin NVL8 官方规格页](https://www.nvidia.com/en-us/data-center/hgx/) — 单 GPU 规格与 22 TB/s 早期口径

## 相关产品

- [NVIDIA GB300](/docs/cards/nvidia/gb300) - 前代机柜级平台
- [NVIDIA B300 Ultra](/docs/cards/nvidia/b300-ultra) - 前代单卡旗舰
- [AMD MI455X](/docs/cards/amd/mi455x) - 同代竞品（432GB HBM4）
