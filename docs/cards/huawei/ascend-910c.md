---
id: ascend-910c
title: Huawei Ascend 910C
sidebar_label: Huawei Ascend 910C
description: Huawei（华为）Ascend 910C 详尽规格：双小芯片设计、780 BF16 TFLOPS、CloudMatrix 384 系统、国产最强 AI 芯片。
keywords: [Huawei Ascend 910C, 华为昇腾 910C, 昇腾 910C, CloudMatrix 384, 国产 AI 芯片, 双小芯片]
---

# Huawei Ascend 910C

## 产品概述

Huawei Ascend 910C 于 **2025 年 4 月**开始大规模量产，**双小芯片（dual-chiplet）设计**，将两颗 910B 计算芯片封装在一起。**800 FP16 TFLOPS** 算力（约为 H100 的 60%）。在 **CloudMatrix 384** 系统中，384 颗 Ascend 910C 组成 16 机柜的超级系统，**总 BF16 算力超过 NVIDIA GB200 NVL72**。

**重大里程碑（2026-06-05）**：深圳河套学院联合哈工大（深圳）、深圳市大数据研究院及华为等团队，依托昇腾 910C 国产 AI 算力集群，成功完成 **1.6 万亿参数 DeepSeek V4 Pro 大模型全参数后训练**，标志着国产 AI 芯片正式具备训练万亿参数大模型的能力。

## 核心规格

| 项目 | 参数 |
|------|------|
| **发布** | **2025 Q1 量产**（华为 2025 全联接大会公布官方参数） |
| **架构** | Da Vinci（双小芯片） |
| **制程** | 中芯国际 **SMIC 7nm N+2** |
| **小芯片数** | 2×（2× Ascend 910B 计算芯片，Chiplet 合封） |
| **显存** | **128 GB HBM2e** |
| **显存类型** | HBM2e |
| **显存带宽** | **3.2 TB/s** |
| **互联** | **784 GB/s**（HCCS 片间互联）+ 392 GB/s UB |
| **FP16 / BF16 算力** | **800 TFLOPS** |
| **INT8** | **1,600 TOPS** |
| **TDP** | 600 W |

> 📌 **TDP 口径说明**：本站取 **600 W**（板卡 / OAM 模组满配功耗口径）作为芯片 TDP 单一权威值。芯片本体典型功耗约 **310 W**（百度百科引官方口径），二者差异来自「芯片裸片 vs 板卡整机」统计口径不同，不做区间取值以免污染数据。

> ⚠️ **其他曾记录的传闻值已剔除**：「部分板卡配置 96 GB」「部分来源记 1.8 TB/s」「部分口径记 750–800 TFLOPS」「INT8 1,500–1,600 TOPS」均无一手来源支撑，已从规格表移除，仅保留华为 2025 全联接大会官方口径。

## CloudMatrix 384 系统

| 项目 | 配置 |
|------|------|
| **芯片数** | 384 颗 Ascend 910C |
| **机柜数** | 16（12 计算 + 4 网络） |
| **HBM 总量** | ~49 TB（128GB × 384） |
| **互联** | 全光网状，6,912 LPO 光模块 |
| **总 BF16 算力** | ~300 PFLOPS（系统级） |

## 厂商信息

| 项目 | 内容 |
|------|------|
| **制造商** | 华为技术有限公司 |
| **官网** | https://www.hiascend.com |
| **CANN** | https://www.hiascend.com/en/software/cann |
| **MindSpore** | https://www.mindspore.cn |
| **2025 年计划** | 80 万颗出货 |

## 关键特性

- **双小芯片设计**：7nm 工艺堆叠
- **无中心 I/O die**：2 个计算芯片直接封装
- **HBM2e × 8**：128 GB / 3.2 TB/s
- **通过 CoAsia、Faraday 等中介规避出口管制**

## DeepSeek 性能参考

- DeepSeek 测试 Ascend 910C 推理速度为 H100 的 **60%**（BF16）
- 不支持 FP8（NVIDIA Blackwell 2× 优势）
- 主要适用于**中国市场**

## 适用场景

- 中国市场 LLM 训练与推理
- 大模型推理部署
- 政府、国企 AI 项目
- 国产化替代

## 相关产品对比

- [Huawei Ascend 910B](/docs/cards/huawei/ascend-910b) - 前代
- [Huawei Ascend 910D](/docs/cards/huawei/ascend-910d) - 下一代
- [NVIDIA H100](/docs/cards/nvidia/h100) - 60% 性能对比
- [NVIDIA B200](/docs/cards/nvidia/b200) - CloudMatrix vs NVL72

## 数据来源

- [证券时报：华为公布昇腾AI芯片三年发展路线图](https://www.stcn.com/article/detail/3345926.html) — 910C 官方参数：800 TFLOPS FP16、784 GB/s 互联、128 GB HBM、3.2 TB/s 带宽（2025 全联接大会，徐直军公布）
- [百度百科：华为昇腾910C](https://baike.baidu.com/item/%E5%8D%8E%E4%B8%BA%E6%98%87%E8%85%BE910C/67777523) — 制程 N+2、53B 晶体管、典型功耗约 310W
- [BenchGecko：Ascend 910C 规格卡](https://benchgecko.ai/hardware/ascend-910c) — INT8 1,600 TOPS、HBM2e 128GB / 3.2 TB/s、8 组堆叠
- [华为昇腾官网](https://www.hiascend.com) — 产品与 CANN 软件栈

