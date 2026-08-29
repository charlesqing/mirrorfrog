---
id: hygon-dcu-z100l
title: 海光 DCU Z100L
sidebar_label: DCU Z100L
description: "海光 DCU Z100L（深算系列）GPGPU 加速卡：Z100 精简版，7nm、3840 核心、32GB HBM2、1024 GB/s，FP32 ~12 TFLOPS，面向性价比 HPC/AI 场景。"
keywords: [海光 DCU Z100L, Hygon DCU Z100L, 深算, GPGPU, 32GB HBM2, ROCm, DTK, 性价比, 国产 GPU]
vendor: others
vendor_full: "Hygon"
series: "深算"
release_date: "2022"
status: "量产"
---

# 海光 DCU Z100L

## 产品概述

**海光 DCU Z100L** 是海光信息**深算系列**中的**精简版 GPGPU 加速卡**，与 **Z100** 同属"深算一号"代际，基于 **AMD CDNA 授权深度定制（gfx906）**。相比 Z100，Z100L 在计算单元数量、算力与显存带宽上有所下调，但保留 **32GB HBM2 大显存**与 **ROCm/DTK 兼容 CUDA** 的软件生态优势，主打**性价比 HPC 与中小模型训推**场景，是信创服务器（搭配海光 C86 CPU）的标配 GPU 方案之一。

Z100L 常见于国家超算中心（成都、西安等）、运营商与金融行业国产化替代项目，与天数智芯天垓100等并列为国产 GPGPU 主流选择。

## 核心规格

| 项目 | 参数 |
|------|------|
| **架构** | GPGPU，基于 AMD CDNA 授权深度定制（gfx906 / CDNA 第一代） |
| **制程** | 7nm |
| **计算单元** | **60 组计算单元 / 3840 个计算核心**（百度百科） |
| **FP64 算力** | **10.1 TFLOPS** |
| **FP32 算力** | **10.1 – 12.2 TFLOPS** |
| **FP16 / BF16 算力** | **20.2 – 24.5 TFLOPS** |
| **INT8 算力** | **40.5 – 49.1 TOPS** |
| **显存容量** | **32 GB** |
| **显存类型** | **HBM2** |
| **显存带宽** | **1024 GB/s（1 TB/s）** |
| **TDP** | **250 W / 280 W**（按不同资料） |
| **互联** | **xHMI 互联**（~184 GB/s）；PCIe 4.0 |
| **接口** | PCIe 4.0 ×16 |
| **散热形态** | 风冷 / 冷板液冷 / 浸没液冷 |
| **发布** | 2022（深算一号） |
| **量产/上市** | 已量产 |

> ⚠️ **规格说明**：Z100L 的 FP64 10.1 / FP32 10.1–12.2 / FP16 20.2–24.5 / INT8 40.5–49.1 TFLOPS、32GB HBM2、1024 GB/s、xHMI 184 GB/s 来自海光产品资料与行业对比测试（含公开的 Z100L 规格 PDF）；计算单元数量采用百度百科的"60 组 CU / 3840 核心"口径（另有资料记作 64 CU，以百度百科为准）。TDP 存在 250W/280W 两种说法，均列出。

## 关键特性

- **大显存性价比**：32GB HBM2 + 1 TB/s 带宽，适配中大模型与 HPC
- **类 CUDA 生态**：DTK（基于 ROCm）兼容 HIP/CUDA，迁移成本低
- **全精度能力**：FP64/FP32/FP16/INT8 全精度，双精度适合科学计算
- **多形态散热**：支持风冷、冷板液冷、浸没液冷，适配不同机房

## 厂商信息

| 项目 | 内容 |
|------|------|
| **公司** | 海光信息技术股份有限公司 |
| **总部** | 天津 |
| **成立** | 2014 年 |
| **上市** | 科创板 688041 |
| **技术来源** | AMD x86 / CDNA 授权 + 自研 DCU 架构 |

## 适用场景

- ✅ **科学计算 / HPC**（FP64 双精度，对标 AMD MI50/MI60、NVIDIA V100 部分指标）
- ✅ **中小模型训练与推理**（性价比场景）
- ✅ **信创服务器标配 GPU**（海光 C86 CPU + DCU 整机）
- ✅ **金融 / 运营商国产化替代**
- ❌ 超大模型训练（显存 32GB、算力受限）
- ❌ 极致低功耗边缘场景

## 相关卡

- [海光 DCU Z100](/docs/cards/others/hygon-dcu-z100) — 同代完整版（8192 核心）
- [海光 DCU K100 AI 版](/docs/cards/others/hygon-dcu-k100) — 深算三号 AI 优化版（FP16 192 TFLOPS）
- [寒武纪 思元590 (MLU590)](/docs/cards/others/cambricon-mlu-590) — 国产 AI 训练竞品

## 参考资料

- [海光 DCU 百度百科（Z100L：3840 核心 / 32GB HBM2 / 1TB/s）](https://baike.baidu.com/item/%E6%B5%B7%E5%85%89DCU/68580827)
- [CSDN · Z100L 核心规格（FP64 10.1 / FP32 12.2 / FP16 24.5 / INT8 49.1）](https://blog.csdn.net/zhangfeng1133/article/details/161699435)
- [CSDN · 海光 DCU 基础认知（gfx906 / 3840 核心 / 1024 GB/s）](https://blog.csdn.net/2401_88400778/article/details/162203030)
