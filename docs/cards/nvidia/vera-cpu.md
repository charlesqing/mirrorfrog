---
title: "NVIDIA Vera CPU"
description: "NVIDIA Vera CPU，88个自研Olympus核心，支持Armv9.2指令集，1.5TB LPDDR5X内存，1.2TB/s带宽，2026年GTC发布的AI专用CPU"
id: vera-cpu
date: "2026-03-17"
vendor: "nvidia"
category: "数据中心CPU"
---

# NVIDIA Vera CPU

NVIDIA Vera CPU 是 NVIDIA 在 2026 年 GTC 大会发布的 AI 专用 CPU，采用 88 个自研 Olympus 核心，支持 Armv9.2 指令集，配备最高 1.5TB LPDDR5X 内存，内存带宽达 1.2 TB/s，作为 Vera Rubin 平台的主机 CPU，负责数据搬运调度、内存管理与系统控制编排。

## 核心规格

| **规格** | **参数** |
|---------|---------|
| **CPU 架构** | ARM 架构（Olympus 核心） |
| **指令集** | ARMv9.2（完全兼容） |
| **核心数量** | 88 个 Olympus 核心 |
| **线程数量** | 176 个线程（空间多线程） |
| **单核性能** | 前代产品的 2 倍 |
| **最大内存容量** | 1.5 TB（LPDDR5X） |
| **内存带宽** | 1.2 TB/s |
| **互联技术** | NVLink-C2C（1.8 TB/s） |
| **片上互连** | 第二代 NVIDIA SCF（3.4 TB/s 对分带宽） |
| **TDP** | 未公开（推测 350-500W） |
| **发布时间** | 2026 年 3 月 17 日 |
| **量产时间** | 2026 年下半年 |

## 架构与规格

Vera CPU 采用**单体计算芯片设计**，避免跨小芯片通信延迟，可在所有核心满载时保持稳定的延迟和吞吐量，性能可预测性强。

### 关键技术创新

1. **88 个自研 Olympus 核心**
   - 支持空间多线程技术（176 个线程）
   - 单核心性能为前代产品的 2 倍
   - 能效表现行业领先

2. **全球首款支持 FP8 精度的 CPU**
   - 完全兼容 ARMv9.2 指令集
   - 硬件级 FP8 计算支持

3. **第二代 NVIDIA SCF（可扩展一致性结构）**
   - 提供 3.4 TB/s 对分带宽
   - 片上网格 + 统一缓存
   - 可无延迟扩展 88 个核心

4. **NVLink-C2C 互联**
   - 相干带宽可达 1.8 TB/s
   - 实现 CPU 之间、CPU 与 GPU 之间的无缝数据共享
   - 支持统一内存系统

5. **全机密计算**
   - 支持硬件级强制安全隔离
   - 可对敏感数据和代码实现保护

## 内存子系统

- **最大内存容量**：1.5 TB（是上一代产品的 3 倍）
- **内存类型**：LPDDR5X
- **内存带宽**：1.2 TB/s（相比传统 CPU 带宽翻倍、功耗减半）

## 配套平台

### Vera Rubin NVL72
- **72 颗** Rubin R200 GPU
- **36 颗** Vera CPU
- **总内存**：54 TB LPDDR5X
- **TDP**：~180kW（必须全液冷）

### HGX Rubin NVL8
- **8 颗** Rubin R200 GPU
- **2 颗** Vera CPU
- 面向中小规模 AI 训练与推理

## 部署形态

1. **高密度液冷 Vera CPU 机架**
   - 基于 NVIDIA MGX 构建
   - 最大可集成 256 个 Vera CPU
   - 支持同时运行超过 2.25 万个并发环境
   - 面向 AI 工厂规模的强化学习和代理式 AI 场景

2. **标准服务器配置**
   - 支持双插槽、单插槽标准配置
   - 可适配通用数据中心需求

3. **独立 CPU 平台**
   - 可作为高性能独立 CPU 使用
   - 支持超大规模云、数据分析、存储、企业业务、HPC 等负载

## 性能优势

- **软件环境运行速度**：相比传统架构 CPU 提升最高 50%
- **效率**：是传统架构 CPU 的 2 倍
- **强化学习评估周期**：满负载情况下可缩短 50%
- **AI 工作流**：与 NVIDIA GPU 无缝协作，保障 AI 工作流全速运行

## 应用场景

Vera CPU 专为**AI 时代**设计，适用于：
- 强化学习（RL）与代理式 AI
- 数据中心主机 CPU（数据搬运调度、内存管理、系统控制编排）
- 超大规模云
- 数据分析与存储
- 企业业务与 HPC

## 参考资料

- [NVIDIA 官方 Vera CPU 页面](https://www.nvidia.cn/data-center/vera-cpu/)
- [NVIDIA Rubin 平台深度拆解](https://lucy.suiyan.cc/blog/2026-06-01_nvidia-vera-rubin-gpu/)
- [英伟达 GTC 2026 重磅前瞻](https://www.163.com/dy/article/KNMD49PM0556GROA.html)
