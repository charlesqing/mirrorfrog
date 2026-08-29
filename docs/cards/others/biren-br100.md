---
id: biren-br100
title: 壁仞 BR100
sidebar_label: BR100
description: "壁仞 BR100 旗舰通用 GPU（2022）：双 chiplet、TSMC 7nm、1024 TFLOPS BF16、2048 TOPS INT8、64GB HBM2e、~2.3 TB/s、550W，对标 NVIDIA A100/H100。"
keywords: [壁仞 BR100, Biren BR100, 壁立仞, BIRENSUPA, 1024 TFLOPS, 2048 TOPS, HBM2e, 国产 GPU, 7nm, Chiplet]
vendor: others
vendor_full: "Biren Technology"
release_date: "2022"
status: "发布"
---

# 壁仞 BR100

## 产品概述

**壁仞 BR100** 是壁仞科技（Biren Technology）的首款**通用 GPU 旗舰芯片**，于 **2022 年 8 月 Hot Chips 34** 正式亮相，采用自研 **"壁立仞"架构**与 **TSMC 7nm 工艺 + 2.5D CoWoS 封装**，以**双 chiplet** 设计集成约 **770 亿晶体管**、**64GB HBM2e** 显存，是当时**国产算力最强的通用 GPU**。BR100 提供 **1024 TFLOPS BF16**、**2048 TOPS INT8**、**256 TFLOPS FP32** 的峰值算力，纸面性能超越 NVIDIA A100，部分指标接近 H100。

BR100 以 **OAM（OCP Accelerator Module）** 形态交付，配合壁仞自研 **BIRENSUPA** 软件栈（类 CUDA）与 **BLink** 芯片间互联，主攻大模型训练与推理。受后续地缘政治与台积电代工限制，BR100 规模量产与商用部署受到较大影响。

## 核心规格

| 项目 | 参数 |
|------|------|
| **架构** | 壁立仞（Biren 自研 ISA），双 chiplet |
| **制程** | TSMC 7nm，2.5D CoWoS 封装 |
| **晶体管数** | ~770 亿 |
| **BF16 算力** | **1024 TFLOPS** |
| **TF32+ 算力** | 512 TFLOPS |
| **INT8 算力** | **2048 TOPS** |
| **FP32 算力** | 256 TFLOPS |
| **FP64 算力** | **不支持** |
| **显存容量** | **64 GB** |
| **显存类型** | **HBM2e** |
| **显存位宽** | 4096 bit |
| **显存带宽** | **~2.3 TB/s**（部分资料记 1.64 TB/s） |
| **TDP** | **550 W** |
| **互联** | **BLink™**（8 端口，聚合 512 GB/s） |
| **接口** | OAM；PCIe 5.0 ×16，支持 CXL 2.0 |
| **视频编解码** | 64 路 HEVC/H.264 编码 / 512 路解码 |
| **发布** | 2022-08（Hot Chips 34） |
| **量产/上市** | 已发布；量产受代工限制影响 |

> ⚠️ **规格说明**：BF16 1024 / INT8 2048 / FP32 256 TFLOPS、64GB HBM2e、550W、BLink 512 GB/s 为壁仞 2022 年官方披露（多份行业研报与 WCCFtech/aiwiki 一致）。显存带宽存在 1.64 TB/s 与 2.3 TB/s 两种口径，表中以 ~2.3 TB/s 标注并注明差异。FP64 不支持。上述为**厂商官方宣称值，未经第三方大规模独立基准验证**。

## 关键特性

- **双 chiplet 设计**：两块计算 die + 896 GB/s die-to-die 互连，突破光罩尺寸限制
- **壁立仞六大特性**：TF32+、TDA 张量数据存取加速器、C-Warp 类 CUDA Warp 调度、BLink 互联、HBM 统一寻址、安全虚拟化
- **BIRENSUPA 软件栈**：类 CUDA 软件生态，降低迁移成本
- **BLink 互联**：8 端口高带宽芯片间互联，支持多卡训练

## 厂商信息

| 项目 | 内容 |
|------|------|
| **公司** | 壁仞科技（Biren Technology） |
| **成立** | 2019-09 |
| **上市** | 2025-01 港交所 |
| **总部** | 上海 |
| **软件** | BIRENSUPA（类 CUDA 软件栈） |

## 适用场景

- ✅ **大模型训练**（高 BF16/INT8 算力，万卡集群探索）
- ✅ **大模型推理**（高吞吐）
- ✅ **国产高端 GPU 替代**（纸面对标 A100/H100）
- ❌ 双精度科学计算（不支持 FP64）
- ❌ CUDA 原生生态（需迁移至 BIRENSUPA）
- ❌ 国际市场（出口管制与代工限制）

## 相关卡

- [壁仞 BR104](/docs/cards/others/biren-br104) — 单 die 精简版（约 1/2 算力，300W）
- [寒武纪 思元590 (MLU590)](/docs/cards/others/cambricon-mlu-590) — 国产训练竞品
- [沐曦 曦云 C600](/docs/cards/others/metax-c600) — 国产通用 GPU 竞品
- [NVIDIA H100](/docs/cards/nvidia/h100) — 国际对标（如项目有此页）

## 参考资料

- [壁仞 BR100 系列规格对比（行研报告，含 BR100/BR104 vs H100/A100）](https://ima.qq.com/wiki/?shareId=952d76f07147ed72484cc63e3f68abe7f3e8d4ff0568deebd14efa979d5312ea)
- [WCCFtech · Biren BR100: 77B transistors, 7nm, 2048 TOPS INT8, 1024 TFLOPS BF16](https://wccftech.com/china-most-powerful-gpu-birentech-br100-77-billion-transistors-7nm-faster-ai-than-nvidia-a100)
- [Biren Technology AI Wiki](https://aiwiki.ai/wiki/biren)
