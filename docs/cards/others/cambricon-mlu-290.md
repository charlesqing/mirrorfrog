---
id: cambricon-mlu-290
title: 寒武纪 思元290 (MLU290)
sidebar_label: 思元290 (MLU290)
description: "寒武纪思元290 (MLU290) 首颗训练芯片（2020/2021）：MLUv02 扩展架构，7nm，512 TOPS INT8，32GB HBM2，350W，OAM 形态。"
keywords: [寒武纪 思元290, Cambricon MLU290, 训练芯片, MLUv02 Extended, 512 TOPS, HBM2, 国产 AI 训练卡]
vendor: others
vendor_full: "Cambricon"
series: "思元 (Siyuan)"
release_date: "2020"
status: "量产"
---

# 寒武纪 思元290 (MLU290)

## 产品概述

**寒武纪思元290（MLU290）** 是寒武纪**首颗训练级 AI 芯片**，**2020 年发布、2021 年初量产**，采用 **台积电 7nm 工艺**，集成 **460 亿个晶体管**，基于 **MLUv02 扩展架构（MLUv02 Extended）**。它标志着寒武纪从"云端推理"迈向"云端训练 + 推理 + 混合计算"的全场景覆盖，与同期的**玄思1000 智能加速器**（2U 内集成 4 颗思元290）组成训练集群方案。

相比思元270，思元290 实现**峰值算力提升 4 倍、内存带宽提高 12 倍、芯片间通讯带宽提高 19 倍**。它是寒武纪训练产品线的起点，后续演进为 **思元370（Chiplet 训推一体）** 与 **思元590（第三代旗舰）**。

## 核心规格

| 项目 | 参数 |
|------|------|
| **架构** | 寒武纪 MLUv02 扩展架构（MLUv02 Extended） |
| **制程** | **TSMC 7nm** |
| **晶体管数** | 460 亿 |
| **INT8 算力** | **512 TOPS** |
| **INT16 算力** | 256 TOPS |
| **CINT32 算力** | 64 TOPS |
| **FP16 / BF16 算力** | 256 TFLOPS（推测，来源于整合参数表；官方发布材料未列浮点算力） |
| **FP32 算力** | 32 TFLOPS（推测，同上） |
| **显存容量** | **32 GB** |
| **显存类型** | **HBM2** |
| **显存位宽** | 4096 bit |
| **显存带宽** | **1.23 TB/s（1228 GB/s）** |
| **MLU Core** | 64 个 |
| **TDP** | **350 W** |
| **互联** | **MLU-Link™**（单卡聚合带宽 600 GB/s，多卡集群互联） |
| **接口** | OAM（开放加速模块，54V）；系统接口 PCIe 4.0 ×16 |
| **发布** | 2020（发布）/ 2021-01（量产） |
| **量产/上市** | 已量产 |

> ⚠️ **规格说明**：INT8 512 TOPS / INT16 256 TOPS / CINT32 64 TOPS / 32GB HBM2 / 1228 GB/s / 350W 为寒武纪官方（WAIC 2021、启智社区算力榜）一致数据。FP16 256 TFLOPS、FP32 32 TFLOPS 来自第三方整合参数表，官方发布稿未明确列出，标注为**推测**。

## 关键特性

- **首颗训练芯片**：全面支持 AI 训练、推理或混合型计算加速
- **MLU-Link™ 多芯互联**：首次引入寒武纪自研芯片间互联，支撑多卡训练集群
- **高带宽显存**：32GB HBM2 + 1.23 TB/s 带宽，适配中大模型训练
- **OAM 形态**：开放加速模块设计，便于整机厂集成
- **Transformer 优化**：针对大模型训练做优化

## 厂商信息

| 项目 | 内容 |
|------|------|
| **公司** | 中科寒武纪科技股份有限公司（Cambricon） |
| **总部** | 北京 |
| **成立** | 2016 年 |
| **上市** | 科创板 688256 |

## 适用场景

- ✅ **中小模型训练**（视觉、NLP、推荐）
- ✅ **云端推理**（高吞吐）
- ✅ **科研超算平台 / 企业级 AI 训练集群**
- ✅ **混合精度训练**
- ❌ 超大模型训练（32GB 显存受限）
- ❌ CUDA 生态强依赖（需迁移至 Cambricon NeuWare）

## 相关卡

- [寒武纪 思元590 (MLU590)](/docs/cards/others/cambricon-mlu-590) — 第三代旗舰训推一体卡（算力约 2×）
- [寒武纪 思元370 (MLU370)](/docs/cards/others/cambricon-mlu-370) — Chiplet 训推一体卡
- [寒武纪 思元270 (MLU270)](/docs/cards/others/cambricon-mlu-270) — 同代推理卡
- [寒武纪 MLU690](/docs/cards/cambricon/mlu-690) — 下一代旗舰（规划）

## 参考资料

- [寒武纪官网 · 2021 WAIC 思元290 发布报道](https://www.cambricon.com/index.php?m=content&c=index&a=show&catid=127&id=41)
- [启智社区国产算力英雄榜 · MLU290 规格](https://openi.pcl.ac.cn/computingpower/domestic)
- [Cambricon AI Wiki · MLU 系列参数整合](https://aiwiki.ai/wiki/cambricon)
