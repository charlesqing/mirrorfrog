---
id: metax-c500
title: MetaX 沐曦 曦云 C500 (2022)
sidebar_label: 曦云C500
description: "沐曦 曦云C500 详尽规格：自研XCORE 1.0架构，64GB HBM2e，FP32 54 TFLOPS，TF32 140 TFLOPS，FP16 280 TFLOPS，INT8 560 TOPS，MetaXLink，PCIe Gen5，2022年发布"
keywords: [MetaX C500, 沐曦, 曦云C500, XCORE 1.0, 64GB HBM2e, FP16 280 TFLOPS, 国产GPU, MXMACA, CUDA兼容]
---

# MetaX 沐曦 曦云 C500 (2022)

## 产品概述

**曦云 C500** 是沐曦集成电路于 **2022 年**发布的**首款训推一体通用 GPU**，基于自研 **XCORE 1.0 架构**设计，配备 **64GB HBM2e 显存**，支持 FP64/FP32/TF32/FP16/BF16/INT8 多精度混合计算，FP16 算力 **280 TFLOPS**，INT8 算力 **560 TOPS**，接口支持 **PCIe Gen5** 和 **MetaXLink** 多卡互联，是沐曦"曦云"C 系列的首款产品。

**定位**：**训推一体 GPU**，兼顾 AI 训练和推理场景，性能优于 NVIDIA H20（据第三方评测）。

## 核心规格

| 项目 | 参数 |
|------|------|
| **架构** | 自研 **XCORE 1.0**（数十个核心 IP） |
| **制程** | 未公开（推测 7nm） |
| **FP32** | **54 TFLOPS**（矢量 18 + 矩阵 36） |
| **TF32** | **140 TFLOPS** |
| **FP16** | **280 TFLOPS** |
| **BF16** | **280 TFLOPS** |
| **INT8** | **560 TOPS** |
| **显存容量** | **64 GB HBM2e** |
| **显存带宽** | 未公开（推测 ~1.6 TB/s） |
| **TDP** | 350 W（推测） |
| **互联** | **MetaXLink**（7 个高速互连接口，最多 64 卡互联） |
| **接口** | **PCIe Gen5** + MetaXLink |
| **FP64 支持** | ✅（科学计算/气象预测） |
| **发布** | **2022 年** |
| **量产** | 2023 年起 |
| **软件栈** | **MXMACA**（兼容 CUDA，迁移成本降低 90%） |

> ⚠️ **规格说明**：制程、TDP、显存带宽官方未完整公开，以沐曦后续官方数据表为准。

## 曦云C系列产品线

| 产品 | 架构 | 显存 | FP16 TFLOPS | 发布 | 状态 |
|------|------|------|----------------|------|------|
| **曦云C500** | XCORE 1.0 | 64GB HBM2e | **280 TFLOPS** | **2022** | 在售 |
| 曦云C550 | XCORE 1.x | 未公开 | 未公开 | 2024 | 在售 |
| 曦云C588 | XCORE 1.x | 未公开 | 未公开 | 2024+ | 在售 |
| [曦云C600](/docs/cards/others/metax-c600) | XCORE 1.5 | 144GB HBM3e | FP8 1000 TFLOPS | 2025 | 风险量产 |

## 与 NVIDIA H20 对比

| 指标 | 曦云C500 | NVIDIA H20 | 差异 |
|------|-----------|-------------|------|
| FP16 | **280 TFLOPS** | ~300 TFLOPS | -7%（接近） |
| INT8 | **560 TOPS** | ~600 TOPS | -7%（接近） |
| 显存 | **64GB HBM2e** | 96GB HBM3 | -33% |
| 互联 | MetaXLink | NVLink | 待对比 |
| 生态 | MXMACA（CUDA 兼容）| CUDA | H20 成熟 |
| 价格 | 约 3.89 万元/卡 | ~20 万元/卡 | **C500 便宜 80%** |

> **第三方评测**：据公开资料，曦云 C500 系列训推一体 GPU 性能**优于 H20**。

## MXMACA 软件生态

| 层级 | 工具 | 说明 |
|------|------|------|
| **软件栈** | **MXMACA** | 沐曦统一计算架构 |
| **AI 框架** | PyTorch | 原生支持 |
| **分布式** | DeepSpeed | 分布式训练 |
| **CUDA 兼容** | 自动迁移工具 | 代码迁移成本降低 **90% 以上** |
| **大模型** | 支持国产千卡集群 | 已验证全参数训练 |

## 适用场景

- ✅ **国产大模型训练**（280 TFLOPS FP16，64GB 显存）
- ✅ **AI 推理即服务**（560 TOPS INT8）
- ✅ **科学计算**（FP64 双精度支持）
- ✅ **气象预测**（HPC 传统场景）
- ✅ **国产智算中心**（性价比优势）
- ✅ **CUDA 迁移场景**（90%+ 迁移成本降低）
- ❌ **FP8 推理**（未直接支持 FP8 格式）
- ❌ **超大规模集群**（MetaXLink 待验证 vs NVLink）

## 相关卡

- [MetaX 沐曦 曦云 C600](/docs/cards/others/metax-c600) - 新一代（FP8 1000 TFLOPS）
- [Kunlun 昆仑芯 P800](/docs/cards/others/kunlun-p800) - 国产 AI 算力
- [Huawei 昇腾 910C](/docs/cards/huawei/ascend-910c) - 国产训练卡竞品
- [NVIDIA H20](/docs/cards/nvidia/h20) - 合规版竞品

## 参考资料

- [模力方舟 - 曦云 C500](https://moark.com/docs/compute/clusters_gpu/mx_gpu)
- [百度百科：曦云C系列GPU](https://baike.baidu.com/item/%E6%9B%A6%E4%BA%91C%E7%B3%BB%E5%88%97GPU/67620459)
- [性能优于H20，沐曦曦云C500 GPU上量](https://zhuanlan.zhihu.com/p/1946735914928800463)
- [沐曦官网 - 曦云C500](https://www.metax-tech.com/prod.html?cid=107&id=21)
