---
id: b300-ultra
title: NVIDIA B300 Ultra (Blackwell Ultra)
sidebar_label: NVIDIA B300 Ultra
description: NVIDIA Blackwell Ultra B300 详尽规格：288GB HBM3e、7 PFLOPS FP8 密集、14 PFLOPS FP4 稀疏、DeepSeek R1 实测 22,476 TGS。
keywords: [NVIDIA B300, Blackwell Ultra, GB300, 288GB HBM3e, DeepSeek R1, NVFP4, 14 PFLOPS FP4, 代际性能 8x]
---

# NVIDIA B300 Ultra (Blackwell Ultra)

## 产品概述

**NVIDIA B300 / B300 Ultra**（代号 **Miranda / GB300**）是 Blackwell 架构的**中期升级版本**，**2026-01 正式出货**。最大升级是显存从 192GB → **288GB HBM3e**，FP4 稀疏算力达 **14 PFLOPS**，TDP **1,400W**（必须液冷）。

**专为超大 LLM 推理时代设计** —— 288GB 显存可单卡加载 70B 模型（FP16），剩余 100GB+ 空间用于 KV Cache。在 DeepSeek R1 实测中，**Prefill 吞吐量 22,476 TGS**，相比 H200 提升 **8 倍**。

## 核心规格

| 项目 | 参数 |
|------|------|
| **架构** | Blackwell Ultra（GB300） |
| **制程** | TSMC 4NP |
| **GPU 芯片** | 2 颗 Blackwell Die（CoWoS-L 封装） |
| **显存** | **288 GB HBM3e**（12-Hi 堆叠） |
| **显存带宽** | **8 TB/s** |
| **FP8 Tensor Core（密集）** | **7 PFLOPS** |
| **FP8 Tensor Core（稀疏）** | **14 PFLOPS** |
| **FP4 Tensor Core（密集）** | **7 PFLOPS** |
| **FP4 Tensor Core（稀疏）** | **14 PFLOPS** |
| **FP16 Tensor Core（密集）** | **3.5 PFLOPS** |
| **INT8** | **7,000 TOPS** |
| **TDP** | **1,400 W**（**液冷必需**） |
| **NVLink 带宽** | **1.8 TB/s**（第 5 代） |
| **PCIe** | Gen 6（首次） |
| **DC 网络** | **ConnectX-8, 1.6 Tbps** |
| **首发** | **2026-01 正式出货** |

## B200 vs B300 Ultra 升级对比

| 指标 | B200 | B300 Ultra | 提升 |
|------|------|------------|------|
| 架构 | Blackwell | **Blackwell Ultra** | 中期升级 |
| 显存 | 192 GB HBM3e | **288 GB HBM3e** | **+50%** |
| 显存带宽 | 8 TB/s | 8 TB/s | 持平 |
| FP8 密集 | 4,500 TFLOPS | **7,000 TFLOPS** | **+56%** |
| FP4 稀疏 | ~9 PFLOPS | **14 PFLOPS** | **+56%** |
| TDP | 1,000 W | **1,400 W** | +40% |
| PCIe | Gen 5 | **Gen 6** | 2× |
| DC 网络 | ConnectX-7 (400G) | **ConnectX-8 (1.6T)** | 4× |
| 发布 | 2024-Q4 | **2026-01** | — |

> **关键：FP4 是 Blackwell Ultra 的新精度等级**（介于 FP8 与 INT4 之间），相比 FP8 再降 50% 显存占用。

## H100 / H200 / B300 代际性能

| 指标 | H100 | H200 | B300 | 提升 |
|------|------|------|------|------|
| 架构 | Hopper | Hopper | **Blackwell Ultra** | — |
| 显存 | 80GB HBM3 | 141GB HBM3e | **288GB HBM3e** | 3.6× |
| 显存带宽 | 3.35 TB/s | 4.8 TB/s | 8 TB/s | 2.4× |
| FP8 密集 | 989 TFLOPS | 989 TFLOPS | **7,000 TFLOPS** | **7×** |
| TDP | 700W | 700W | **1,400W** | 2× |
| NVLink | 900 GB/s | 900 GB/s | **1,800 GB/s** | 2× |
| 发布时间 | 2023-03 | 2024-Q4 | **2026-01** | — |

## DeepSeek 推理实测（vLLM 2026-02 报告）

### DeepSeek-V3.2 (GB300)
**测试配置：NVFP4 量化 + TP2（张量并行 2 卡）**

| 场景 | 吞吐量 (TGS) |
|------|--------------|
| Prefill-only（ISL=1） | **7,360** |
| 混合上下文（ISL=2k, OSL=1k） | **2,816** |

> ISL = Input Sequence Length（输入序列长度），OSL = Output Sequence Length

### DeepSeek-R1 (B300)
| 场景 | 吞吐量 (TGS) |
|------|--------------|
| Prefill-only（ISL=2k, batch=256） | **22,476** |
| 混合上下文（ISL=2k, OSL=1k） | **3,072** |

> R1 Prefill 吞吐量约为 V3.2 的 **3 倍**，得益于 R1 架构的 chain-of-thought 优化。

## FP4 vs FP8 量化（DeepSeek-R1）

| 量化方案 | Prefill 提升 | 混合上下文提升 |
|----------|--------------|----------------|
| **NVFP4 + TP2** vs FP8 | **1.8×** | **8×** |

> **NVFP4**（NVIDIA FP4）是 Blackwell 新增的 4 位浮点格式，相比 FP8 **再降 50% 显存**，**吞吐量数倍提升**。
> 在保持精度的同时（FP4 + 张量并行），DeepSeek-R1 混合上下文推理提升 **8 倍**。

## B300 vs H200 代际性能

| 指标 | B300 vs H200 |
|------|--------------|
| Prefill 吞吐量（ISL=2k） | **8×** |
| 短输出吞吐量（ISL=2k, OSL=128） | **20×** |

> **短输出场景 20× 提升** —— B300 + NVFP4 + TP2 是高并发生产环境的最佳选择。

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
| **峰值功耗** | **~14 kW**（2 个 H100 DGX） |
| **适用模型** | 400B+ 参数模型完整加载 |
| **散热** | **必须液冷（DLC）** |

## 云端价格对比（2026-03）

| 供应商 | 实例类型 | 每 GPU/小时价格 |
|--------|----------|-----------------|
| **AWS** | p6-b200.48xlarge（8 卡 B300） | **$11.70** |
| **DigitalOcean** | B300 GPU Droplet（即将推出） | ~$8.00（预估） |
| **Oracle Cloud** | OCI B300 | ~$10.00（预估） |

> **AWS p6-b200.48xlarge** 是首批 8 卡 B300 实例之一。DigitalOcean 价格**比 AWS 便宜约 30%**。

## 主流 GPU 推理成本对比（Llama 70B）

| GPU | 吞吐量 (tok/s) | 每 GPU/小时 | Token 成本（相对） |
|-----|----------------|-------------|---------------------|
| **H100 SXM** | ~21,800 | $2.00 | 1.0×（基准） |
| **H200 SXM** | ~31,700 | $3.50 | 0.83×（省 17%） |
| **B300（FP8）** | ~100,000+ | ~$8.00 | **0.58×（省 42%）** |
| **B300（FP4）** | ~150,000+ | ~$8.00 | **0.39×（省 61%）** |

> **关键洞察**：B300 单价高，但**单 Token 成本反而低 39-61%** —— 这是云端推理的最佳选择。

## 散热与基础设施

- **TDP 1,400W** —— 必须**液冷**（Direct Liquid Cooling, DLC）
- 风冷方案不可行（vs H100 700W 风冷）
- **8 卡 DGX B300 = 14kW**（= 2 个 H100 DGX）
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
| **首发** | 2026-01 正式出货 |
| **云端部署** | AWS / DigitalOcean / Oracle Cloud |
| **OEM 合作伙伴** | Dell / HPE / Supermicro / Lenovo |

## 相关产品

- [NVIDIA B200](/docs/cards/nvidia/b200) - 前一代 Blackwell
- [NVIDIA H200](/docs/cards/nvidia/h200) - Hopper 旗舰
- [NVIDIA H100](/docs/cards/nvidia/h100) - 上一代主力
- [AMD MI355X](/docs/cards/amd/mi350) - 同代竞争对手
- [Google TPU v7 Ironwood](/docs/cards/google/tpu-ironwood) - 192GB 推理 ASIC
- [完整对比表](/docs/comparison)
