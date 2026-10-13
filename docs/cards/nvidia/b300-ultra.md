---
id: b300-ultra
title: NVIDIA B300 Ultra (Blackwell Ultra)
sidebar_label: NVIDIA B300 Ultra
description: NVIDIA Blackwell Ultra B300 详尽规格：288GB HBM3e、8 TB/s、FP4 稀疏 20 PFLOPS（密集 15 PFLOPS）、FP8 稀疏 10 PFLOPS、TDP 1,400W。
keywords: [NVIDIA B300, Blackwell Ultra, GB300, 288GB HBM3e, NVFP4, 密集 FP4 15 PFLOPS, 1,400W]
---

# NVIDIA B300 Ultra (Blackwell Ultra)

## 产品概述

**NVIDIA B300 / B300 Ultra**（代号 **Miranda / GB300**）是 Blackwell 架构的**中期升级版本**，**2026 年上半年规模出货**。最大升级是显存从 192GB → **288GB HBM3e**，FP4 稀疏算力达 **20 PFLOPS**（密集 15 PFLOPS），TDP **1,400W**（必须液冷）。

**专为超大 LLM 推理时代设计** —— 288GB 显存可单卡加载 70B 模型（FP16），剩余 100GB+ 空间用于 KV Cache。相比 B200，**密集 FP4 算力提升 1.5 倍**（9 → 15 PFLOPS），注意力（softmax）吞吐提升约 2 倍。

## 核心规格

| 项目 | 参数 |
|------|------|
| **架构** | Blackwell Ultra（双die） |
| **制程** | TSMC 4NP |
| **GPU 芯片** | 2 颗 Blackwell Die（CoWoS-L 封装） |
| **显存** | **288 GB HBM3e**（12-Hi 堆叠） |
| **显存带宽** | **8 TB/s** |
| **FP4 Tensor Core** | **20 PFLOPS**（稀疏） |
| **FP4 Tensor Core（密集）** | **15 PFLOPS** |
| **FP8 Tensor Core** | **10 PFLOPS**（稀疏） |
| **FP8 Tensor Core（密集）** | **5 PFLOPS** |
| **FP16 Tensor Core** | **5 PFLOPS**（稀疏；密集 2.5 PFLOPS） |
| **TDP** | 1400 W |
| **NVLink 带宽** | **1.8 TB/s**（第 5 代） |
| **PCIe** | Gen 6（首次） |
| **DC 网络** | **ConnectX-8, 800 Gb/s** |
| **首发** | **2026 年上半年规模出货** |

> **算力口径**：官方同时公布密集与稀疏两套数字，本表主值为**稀疏**，密集值单列。NVIDIA GB300 NVL72 机柜级对应值为 FP4 1,440 PFLOPS（稀疏）/ 1,080 PFLOPS（密集）、FP8 720 PFLOPS、FP16/BF16 360 PFLOPS，均为 72 GPU 合计。

## B200 vs B300 Ultra 升级对比

| 指标 | B200 | B300 Ultra | 提升 |
|------|------|------------|------|
| 架构 | Blackwell | **Blackwell Ultra** | 中期升级 |
| 显存 | 192 GB HBM3e | **288 GB HBM3e** | **+50%** |
| 显存带宽 | 8 TB/s | 8 TB/s | 持平 |
| FP4 密集 | 10 PFLOPS | **15 PFLOPS** | **+50%** |
| FP4 稀疏 | 20 PFLOPS | 20 PFLOPS | 持平 |
| FP8 密集 | 5 PFLOPS | 5 PFLOPS | 持平 |
| TDP | 1,000 W | **1,400 W** | +40% |
| PCIe | Gen 5 | **Gen 6** | 2× |
| DC 网络 | ConnectX-7 (400G) | **ConnectX-8 (800G)** | 2× |
| 发布 | 2024-Q4 | **2026 上半年** | — |

> **关键：Blackwell Ultra 的增量在密集算力与显存，而非稀疏峰值。** FP4 稀疏值B200 与 B300 相同（20 PFLOPS），真正的提升是密集 FP4 从 10 提升到 15 PFLOPS，以及注意力加速（SFU EX2）吞吐从 5 提升到 10.7 TeraExponentials/s。

## H100 / H200 / B300 代际性能

| 指标 | H100 | H200 | B300 | 提升 |
|------|------|------|------|------|
| 架构 | Hopper | Hopper | **Blackwell Ultra** | — |
| 显存 | 80GB HBM3 | 141GB HBM3e | **288GB HBM3e** | 3.6× |
| 显存带宽 | 3.35 TB/s | 4.8 TB/s | 8 TB/s | 2.4× |
| FP8 密集 | 989 TFLOPS | 989 TFLOPS | **5 PFLOPS** | **5×** |
| TDP | 700W | 700W | **1,400W** | 2× |
| NVLink | 900 GB/s | 900 GB/s | **1,800 GB/s** | 2× |
| 发布时间 | 2023-03 | 2024 | **2026 上半年** | — |

## 推理性能实测（MLPerf Inference v5.1，官方提交结果）

| 系统 | DeepSeek-R1 吞吐（Offline, tok/s） | Server 场景（tok/s） |
|------|-----------------------------------|----------------------|
| **GB300 NVL72**（72 GPU） | **420,659** | **209,328** |
| **GB200 NVL72**（72 GPU，Blackwell） | 289,712 | 167,578 |

> Blackwell Ultra（GB300）相比同代Blackwell（GB200）在 DeepSeek-R1 上吞吐提升约 **45%**，这一增益主要来自显存容量（288GB）与注意力加速，而非 Tensor Core 稀疏峰值。

## 训练性能实测（MLPerf Training v5.1）

| 系统 | Llama 3.1 405B 训练时间（分钟） |
|------|--------------------------------|
| **8× GB300 NVL72**（512 GPU） | **64.6** |
| 8× GB200 NVL72（512 GPU） | 121.8 |
| 64× HGX H100（512 GPU） | 269.1 |

> Blackwell Ultra 训练 Llama 3.1 405B 的用时约为 GB200 的一半、H100 的四分之一。

## FP4 vs FP8 量化

> **NVFP4**（NVIDIA FP4）是 Blackwell 新增的 4 位浮点格式，相比 FP8 **再降约 50% 显存占用**，精度损失通常在 1% 以内（官方实测），是长上下文推理降低 KV Cache 压力的关键手段。

## 部署推荐配置（DeepSeek）

| 场景 | 推荐配置 |
|------|----------|
| **DeepSeek R1 在线服务** | B300 + **NVFP4 + EP2**（专家并行） |
| **DeepSeek V3 推理 + 训练** | B300 + **NVFP4 + TP2**（张量并行） |
| **长上下文文档理解** | B300（充分利用 288GB 显存） |
| **成本敏感型推理** | B300 Spot + **FP4 量化** |

> EP2 = Expert Parallel 2（专家并行 2），适合 MoE 模型（DeepSeek 即 MoE）
> TP2 = Tensor Parallel 2（张量并行 2），通用加速

## 8 卡 DGX B300 系统

| 项目 | 参数 |
|------|------|
| **GPU 总显存** | **2.3 TB HBM3e**（288GB × 8） |
| **GPU 互联** | NVLink 5.0 + ConnectX-8 |
| **峰值功耗** | **~14 kW**（整机系统） |
| **适用模型** | 400B+ 参数模型完整加载 |
| **散热** | **必须液冷（DLC）** |

## 云端实例价格对比（2026-10）

| 供应商 | 实例类型 | 配置 | 按需价格 |
|--------|----------|------|----------|
| **AWS** | p6e.48xlarge | 8× B300 | ~$98 / 小时 |
| **Azure** | ND B300 v6 | 8× B300 | ~$97 / 小时 |
| **Google Cloud** | A4 Ultra（megagpu-8g） | 8× B300 | ~$98 / 小时 |
| **AWS** | p5.48xlarge | 8× H100 SXM5 | ~$98 / 小时 |

> **关键洞察**：B300 8卡实例的按需价格与上一代 H100 8 卡实例**基本持平**，但同等价格下吞吐量显著更高 —— 这是 Blackwell Ultra 在推理侧最具说服力的经济性优势。

## 散热与基础设施

- **TDP 1,400W** —— 最高功耗档**必须液冷**（Direct Liquid Cooling, DLC）；存在 1,100W 风冷档
- 风冷方案仅适用于 1,100W 档（vs H100 700W 风冷）
- **8 卡 DGX B300 ≈ 14 kW**
- 机房需重新规划电力和散热

## 软件要求

- **CUDA 12.x**
- **cuDNN 9.x**
- **TensorRT-LLM 0.15+**
- **NVFP4 支持**（需 TensorRT 10+）
- **vLLM 0.6+**（GB300 优化版）

## 适用场景

- ✅ **大规模推理服务**（70B+ 模型，10万+ tok/s）
- ✅ **推理密集型负载**（DeepSeek R1、o1 类推理模型）
- ✅ **长上下文 KV Cache**（288GB 完整保留）
- ✅ **400B+ 参数模型部署**（8 卡 DGX B300 完整加载）
- ✅ **多节点训练集群**（6.4 Tbps GPU 互联）
- ❌ 中小规模推理（H200 更经济）
- ❌ 无液冷机房（基础设施投入大）

## 厂商信息

| 项目 | 内容 |
|------|------|
| **厂商** | NVIDIA Corporation |
| **产品页** | https://www.nvidia.com/en-us/data-center/blackwell/ |
| **首发** | 2026 上半年规模出货 |
| **云端部署** | AWS / Azure / Google Cloud / Oracle Cloud |
| **OEM 合作伙伴** | Dell / HPE / Supermicro / Lenovo |

## 数据来源

- [NVIDIA 官方技术博客：Inside NVIDIA Blackwell Ultra](https://developer.nvidia.com/blog/inside-nvidia-blackwell-ultra-the-chip-powering-the-ai-factory-era/) — Table 2 芯片对比表：NVFP4 密集 15 / 稀疏 20 PetaFLOPS、FP8 密集 5 / 稀疏 10 PetaFLOPS、最大功耗 1,400W、288GB HBM3E、8 TB/s
- [NVIDIA GB300 NVL72 官方规格页](https://www.nvidia.com/en-us/data-center/gb300-nvl72/) — 机柜级 FP4 1,440（稀疏）/ 1,080 PFLOPS（密集）、FP8 720 PFLOPS、ConnectX-8 800 Gb/s
- [NVIDIA Blackwell 架构页](https://www.nvidia.com/en-us/data-center/technologies/blackwell-architecture/) — 2080 亿晶体管、双 die 与NV-HBI 10 TB/s

## 相关产品

- [NVIDIA B200](/docs/cards/nvidia/b200) - 前一代 Blackwell
- [NVIDIA H200](/docs/cards/nvidia/h200) - Hopper 旗舰
- [NVIDIA H100](/docs/cards/nvidia/h100) - 上一代主力
- [AMD MI355X](/docs/cards/amd/mi350) - 同代竞争对手
- [Google TPU v7 Ironwood](/docs/cards/google/tpu-ironwood) - 192GB 推理 ASIC
- [完整对比表](/docs/comparison)
