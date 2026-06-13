---
id: moore-threads-mtt-s4000
title: Moore Threads 摩尔线程 MTT S4000 (2023)
sidebar_label: MTT S4000
description: "摩尔线程 MTT S4000 详尽规格：第三代MUSA架构，曲院GPU，48GB GDDR6，768 GB/s，FP32 25 TFLOPS，TF32 50 TFLOPS，INT8 200 TOPS，PCIe 5.0，MTLink，2023年12月发布"
keywords: [摩尔线程, MTT S4000, Moore Threads, 第三代MUSA, 曲院GPU, 48GB GDDR6, 大模型智算加速卡, 国产AI芯片]
---

# Moore Threads 摩尔线程 MTT S4000 (2023)

## 产品概述

**MTT S4000** 是摩尔线程于 **2023 年 12 月**发布的**大模型智算加速卡**，基于自研 **曲院 GPU 架构**（第三代 MUSA 内核架构）打造，配备 **48GB GDDR6 显存**（带宽 **768 GB/s**），FP32 算力 **25 TFLOPS**，TF32 算力 **50 TFLOPS**，INT8 算力 **200 TOPS**，为千亿规模大语言模型的训练、微调和推理进行了定制优化，结合先进的图形渲染能力、视频编解码能力和超高清 8K HDR 显示输出。

**定位**：**全功能元计算卡**（训推一体 + 图形渲染），为 KUAE 智算中心解决方案的核心组件。

## 核心规格

| 项目 | 参数 |
|------|------|
| **架构** | 自研 **曲院 GPU**（第三代 MUSA 内核架构） |
| **制程** | 未公开（推测 7nm/6nm） |
| **FP32** | **25 TFLOPS** |
| **TF32** | **50 TFLOPS** |
| **INT8** | **200 TOPS** |
| **FP16/BF16** | 支持（具体数值未公开） |
| **显存容量** | **48 GB GDDR6** |
| **显存带宽** | **768 GB/s** |
| **TDP** | **450 W** |
| **互联** | **MTLink**（x8 Serdes，最高 56Gbps PAM4） |
| **接口** | **PCIe 5.0 x16**，4× DisplayPort |
| **供电** | CPU 8-pin × 1 |
| **发布** | **2023 年 12 月** |
| **量产** | 2024 年起 |
| **软件栈** | MUSA 软件栈（兼容 CUDA） |

## MUSA 架构演进

| 架构 | 内核 | 代表产品 | 发布 |
|------|------|----------|------|
| 第一代 MUSA | 春晓 | MTT S80/S70（消费级）| 2022 |
| 第二代 MUSA | 曲院（改进）| MTT S3000 | 2023 |
| **第三代 MUSA** | **曲院 GPU** | **MTT S4000** | **2023.12** |

## 与 MTT S3000 对比

| 指标 | MTT S3000 | **MTT S4000** | 提升 |
|------|-------------|----------------|------|
| 架构 | 第二代 MUSA | **第三代 MUSA（曲院 GPU）** | 新一代 |
| 显存 | 未公开 | **48GB GDDR6** | 更大 |
| 带宽 | 未公开 | **768 GB/s** | 更高 |
| FP32 | 未公开 | **25 TFLOPS** | 公开数值 |
| TDP | 未公开 | **450W** | 数据中心级 |
| 发布 | 2023 年 | **2023.12** | 同期改进 |

## KUAE 智算中心解决方案

MTT S4000 是摩尔线程 **KUAE 智算中心解决方案**的核心组件：

- **千亿参数大模型**训练、微调、推理全栈支持
- **MTLink** 多卡高速互联（x8 Serdes，56Gbps PAM4）
- **MUSA 软件栈**完整支持 PyTorch/DeepSpeed 等主流框架
- **CUDA 兼容层**，降低模型迁移成本

## 适用场景

- ✅ **千亿参数大模型训练**（定制优化）
- ✅ **大模型推理即服务**（INT8 200 TOPS）
- ✅ **图形渲染 + AI 混合负载**（全功能 GPU）
- ✅ **视频编解码**（8K HDR 显示输出）
- ✅ **国产智算中心**（KUAE 解决方案）
- ❌ **超高 FP16 训练算力**（25 TFLOPS FP32 低于 H100）
- ❌ **超大规模集群**（MTLink 待验证 vs NVLink）

## 产品矩阵

| 系列 | 定位 | 代表产品 |
|------|------|----------|
| **MTT S 系列** | 服务器 GPU（数据中心）| S3000、S4000、S5000 |
| **MTT S 系列（消费级）** | 桌面 GPU | S80、S70 |
| **KUAE** | 智算中心解决方案 | S4000 + MTLink + MUSA 软件栈 |

## 相关卡

- [Moore Threads MTT S3000](/docs/cards/others/moore-threads-mtt-s3000) - 同代服务器 GPU
- [Moore Threads MTT S5000](/docs/cards/others/moore-threads-mtt-s5000) - 新一代（推测）
- [MetaX 沐曦 曦云 C500](/docs/cards/others/metax-c500) - 国产训推一体竞品
- [Cambricon MLU590](/docs/cards/others/cambricon-mlu-590) - 国产训练卡竞品

## 参考资料

- [摩尔线程 MTT S4000 产品规格书](https://docs.mthreads.com/s4000/s4000-doc-online/product_specifications/)
- [摩尔线程 MTT S4000 参数 - 中关村在线](https://detail.zol.com.cn/2162/2161613/param.shtml)
- [MTT S4000 技术规格解析 - 百度文库](https://wenku.baidu.com/view/a2ab64390340be1e650e52ea551810a6f524c8b7.html)
- [摩尔线程官网](https://www.mthreads.com/product/S4000)
