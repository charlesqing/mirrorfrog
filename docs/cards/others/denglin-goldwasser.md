---
id: denglin-goldwasser
title: "登临科技 Goldwasser（GPU+）"
description: "登临科技 Goldwasser 系列国产 GPU 类 AI 加速卡，2020 年基于 TSMC 12nm 量产，GPU+ 片内异构（通用计算 + 数据流）存算架构，训推一体，INT8 最高 512 TOPS。"
keywords: [登临, Goldwasser, GPU+, 数据流, 存算, 训推一体, 12nm, 推理训练, 登临科技]
vendor: others
vendor_full: "Suzhou Denglin Technology Co., Ltd. (GLead)"
series: "Goldwasser UL / L / XL"
release_date: "2020-06"
status: "量产"
---

# 登临科技 Goldwasser（GPU+）

## 产品概述

**登临科技（Denglin / GLead）** 成立于 2017 年，核心团队多来自图芯（Vivante）等 GPU 企业，致力于以自研 **GPU+** 架构打造高性能、高能效的通用 AI 加速方案。其首款产品 **Goldwasser** 系列于 **2020 年 6 月** 在 **TSMC 12nm** 工艺上 Full Mask 量产成功，并在智能安防、互联网、智慧城市等多行业领军企业完成量产导入。

Goldwasser 的核心创新在于 **GPU+（软件定义的片内异构架构）**：通过在单芯片内有机配合"可编程 GPGPU 引擎"与"高效 Tensor 引擎"，以 **数据流驱动** 的方式解决通用性与效率的矛盾，可同时支持 **推理与训练（训推一体）**。它兼容 CUDA / OpenCL 编程模型，降低了客户从 NVIDIA 生态迁移的成本——这也是其对外强调的关键差异化。

Goldwasser 提供覆盖边缘到数据中心的多个型号：边缘 **Goldwasser UL**（25-35W，32-64 TOPS）、半高半长服务器卡 **Goldwasser L**（40-70W，128-256 TOPS）、全高全长 **Goldwasser XL**（512 TOPS）。

## 核心规格

| 项目 | 参数 |
|------|------|
| **架构** | GPU+ 片内异构（可编程 GPGPU 引擎 + 高效 Tensor 引擎，数据流驱动，兼容 CUDA/OpenCL） |
| **制程** | TSMC 12nm |
| **FP16 / BF16 算力** | 未公开（训推一体，具体浮点指标官方未单列） |
| **INT8 算力** | **32-512 TOPS**（按型号：UL 32-64 / L 128-256 / XL 512 TOPS） |
| **FP32 算力** | 未公开 |
| **显存容量** | 未公开 |
| **显存类型** | 未公开 |
| **显存带宽** | 未公开 |
| **TDP** | **40-70 W**（Goldwasser L 典型区间；UL 25-35W，XL 未公开） |
| **互联** | 未公开 |
| **接口** | PCIe（具体版本官方未单列） |
| **发布** | 2020-06 |
| **量产/上市** | 2020-06（Full Mask 量产） |

> **说明**：实测中 Goldwasser 在 **40W TDP** 下可输出 **128 TOPS**（即 Goldwasser L 下限水平），官方称同等工艺下可比主流产品在不同神经网络上提升 3-10 倍计算效率，并降低对外部存储吞吐的依赖。FP16/BF16、FP32 与显存规格官方未公开披露，故标"未公开"。

## 关键特性
- **GPU+ 片内异构 = 通用 + 高效**：以数据流方式调度 GPGPU 引擎与 Tensor 引擎，兼顾 CUDA 兼容生态与高计算密度。
- **训推一体**：同一架构同时支持 AI 推理与训练，区别于多数纯推理 ASIC。
- **软件定义**：通过软件定义使不同神经网络均能达到硬件性能与能效最大化，规避系统级异构的数据交换开销。
- **CUDA/OpenCL 兼容**：显著降低客户迁移成本，可直接复用现有生态。
- **全场景覆盖**：从边缘 25W 到数据中心 512 TOPS，型号梯度完整。

## 厂商信息
| 项目 | 内容 |
|------|------|
| **公司** | 苏州登临科技股份有限公司（GLead） |
| **总部** | 中国苏州（上海、北京、杭州、成都、西安、深圳等地有研发/办公点） |
| **成立** | 2017 年 |

## 适用场景
- ✅ **云端/边缘 AI 推理与训练**（训推一体，覆盖安防、互联网、智慧城市）
- ✅ **CUDA 生态存量模型迁移**（硬件兼容 CUDA/OpenCL）
- ✅ **高算力密度数据中心加速卡**（Goldwasser XL 512 TOPS）
- ❌ **极致低功耗端侧**（UL 最低 25W，仍高于多数端侧 NPU）
- ❌ **完全自主指令集生态**（以兼容 CUDA 为主，自研生态尚在完善）

## 相关卡
- [清微智能 TX81](/docs/cards/others/tsingmicro-tx81) — 国产可重构计算创新架构
- [瀚博 Vastai VA10](/docs/cards/others/vastai-va10) — 国产云端推理加速卡
- [Lightmatter Envise](/docs/cards/others/lightmatter-envise) — 国际存算路线对比

## 参考资料
- [登临科技 Goldwasser 量产与规格（博客园 AMD/GPU 分析）](https://www.cnblogs.com/wujianming-110117/p/17190478.html)
- [登临 Goldwasser 量产导入、训推一体与实测数据（PCA 中国）](https://www.pcachina.com/article/3000137816)
- [登临科技官方产品中心](https://denglinai.com)
