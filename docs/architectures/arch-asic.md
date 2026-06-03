---
id: arch-asic
title: ASIC (Application-Specific IC) 专用集成电路
sidebar_label: ASIC
description: ASIC 架构详解：AWS Trainium/Inferentia、Qualcomm AI 100 等专用芯片，为特定 AI 工作负载优化。
keywords: [ASIC, Application-Specific IC, AWS Trainium, AWS Inferentia, Qualcomm AI 100, 推理优化]
---

# ASIC (Application-Specific Integrated Circuit) 架构

## 什么是 ASIC

**ASIC（Application-Specific Integrated Circuit）** 是为**特定应用**定制的 AI 加速器，相比 GPU 的**通用性**，ASIC 在**特定工作负载**下提供**更高能效比**和**更低单位 token 成本**。

**代表产品**：
- **AWS Trainium / Trainium 2**：训练 + 推理 fungible
- **AWS Inferentia / Inferentia 2**：纯推理
- **Qualcomm AI 100 (AIC100)**：低功耗数据中心推理
- **Google TPU**（部分分类为 ASIC）

## ASIC vs GPU

| 维度 | ASIC | GPU |
|------|------|-----|
| 通用性 | **弱**（特定工作负载） | **强**（任意 AI 任务） |
| 能效比 | **2-3× 优于 GPU** | 中 |
| 性能/瓦特 | **高** | 中 |
| 单位 token 成本 | **低** | 中 |
| 开发周期 | 2-3 年 | 1-2 年 |
| 生态 | **厂商自研** | CUDA 成熟 |
| 灵活升级 | 难（流片固定） | 易（驱动更新） |
| 适用 | 大规模推理 | 通用 AI |

## AWS Trainium / Inferentia

### AWS Trainium
- **Trainium 1**（2020）：首款 AWS 自研训练芯片
- **Trainium 2**（2024-12 GA）：96GB HBM、1,299 FP8 TFLOPS、4× Trainium 1
- **Trainium 3**（2025 末）：传闻 2× Trainium 2
- **NeuronLink** 互联，64 颗 UltraServer
- **Neuron SDK**（PyTorch / TensorFlow 集成）
- 客户：Anthropic、AWS 内部

### AWS Inferentia
- **Inferentia 1**（2019）：128 TOPS INT8
- **Inferentia 2**（2023）：32GB HBM2e，~190 TOPS，12 芯片互联
- **Inf1 / Inf2 实例**（AWS EC2 租赁）
- 推理成本比 GPU **低 70%**

## Qualcomm AI 100 (AIC100)

- **2020 发布**（疫情前）
- **400 TOPS INT8**，**75W TDP**
- **2.67 TOPS/W**（性能/瓦特领先 GPU）
- **Qualcomm AI Engine Direct SDK**
- 客户：Hugging Face Inference API、Oracle Cloud

## ASIC 适用场景

- ✅ **大规模数据中心推理**（Inf2、Trn2）
- ✅ 超大规模 LLM 推理（Hugging Face）
- ✅ 训练 + 推理 fungible（Trainium 2）
- ✅ 性价比推理（Inferentia 1/2）
- ✅ 低功耗数据中心（Qualcomm AI 100）
- ❌ 多任务通用（应使用 GPU）
- ❌ 新算法快速迭代（应使用 GPU）

## 详细产品页

### AWS
- [AWS Trainium](/docs/cards/aws/trainium) - 2019 第一代训练, Neuron SDK
- [AWS Trainium 2](/docs/cards/aws/trainium-2) - 2024-12 GA, 96GB HBM 1299 FP8 TFLOPS 4× Trainium 1
- [AWS Trainium 3](/docs/cards/aws/trainium-3) - 2025-12-02 GA, 3nm 144GB HBM 2.7 TB/s 4.4× Trainium 2, NeuronLink-V3
- [AWS Inferentia](/docs/cards/aws/inferentia) - 2019 第一代推理, 128 TOPS INT8
- [AWS Inferentia 2](/docs/cards/aws/inferentia-2) - 2023 第二代推理, 32GB HBM2e 190 TOPS

### Qualcomm
- [Qualcomm Cloud AI 100 (AIC100)](/docs/cards/others/qualcomm-ai100) - 2020, 400 TOPS INT8 75W
- [Qualcomm AI 200 / AI 300](/docs/cards/others/qualcomm-ai-200) - 2025-2026, 5nm Hexagon NPU + Oryon CPU Cloud 推理

### 国产 AI 创业
- [Cambricon MLU 370](/docs/cards/others/cambricon-mlu-370) - 2021-Q4 7nm 96 INT8 TOPS 35W, 寒武纪 (EOL 2023)
- [Cambricon MLU 590](/docs/cards/others/cambricon-mlu) - 7nm 96GB HBM2 256 INT8 TOPS 250W, 科创板
- [Cambricon MLU 690](/docs/cards/others/cambricon-mlu-690) - 2025-2026 推测 5nm 192GB HBM3E 2 PF FP8 国产 FP8
- [Biren BR104](/docs/cards/others/biren-br104) - 7nm 1024 INT8 TOPS 64GB HBM2E 双 chiplet 300W $700M+ 融资
- [Moore Threads MTT S5000](/docs/cards/others/moore-threads-mtt-s5000) - 7nm 48GB GDDR6 50 BF16 TF MUSA 架构
- [Alibaba Hanguang 800](/docs/cards/others/alibaba-hanguang-800) - 12nm 820 INT8 TOPS 168W 阿里 100K+ 部署

### Tenstorrent
- [Tenstorrent Blackhole](/docs/cards/others/tenstorrent-blackhole) - 120 Tensix 核 5 RISC-V/核 8GB SRAM 16 BF16 PF 集群 Jim Keller 架构

## 相关架构

- [GPU](/docs/architectures/arch-gpu) - 通用 AI
- [TPU](/docs/architectures/arch-tpu) - Google 数据中心
- [LPU](/docs/architectures/arch-lpu) - 超低延迟 LLM
- [NPU](/docs/architectures/arch-npu) - 端侧/数据中心 NPU
- [完整对比表](/docs/comparison)
