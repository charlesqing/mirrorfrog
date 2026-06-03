---
id: training-gpu
title: 数据中心 AI 训练 GPU 完全指南
sidebar_label: AI 训练 GPU
description: 2025 年数据中心 AI 训练 GPU 完整指南：NVIDIA H100/H200/B100/B200、AMD MI300X/MI325X/MI350、Huawei Ascend 910B/910C 规格对比与选型建议。
keywords: [AI 训练 GPU, NVIDIA H100, AMD MI300X, 数据中心 GPU, LLM 训练, AI 加速器]
---

# 数据中心 AI 训练 GPU 完整指南

数据中心 AI 训练 GPU 是用于大规模深度学习模型（如 LLM、CV、多模态）训练的专用加速器。**这是当前 AI 行业最核心的硬件类别**。

## 主流产品对比

| 型号 | 厂商 | 显存 | FP8 算力 | TDP | 显存带宽 | 价格（参考） | 适用规模 |
|------|------|------|----------|-----|----------|------------|----------|
| **NVIDIA Rubin R200** | NVIDIA | 288GB HBM4 | **50 PFLOPS FP4 稀疏** | ~1,800W | **22 TB/s** | TBD | **2026 H2 旗舰** |
| **NVIDIA B300 Ultra** | NVIDIA | 288GB HBM3e | 14 PFLOPS | 1,400W | 8 TB/s | ~$8/hr (云) | 旗舰 |
| **NVIDIA B200** | NVIDIA | 192GB HBM3e | 9 PFLOPS | 1,000W | 8 TB/s | $5.87/hr | 旗舰 |
| **NVIDIA B100** | NVIDIA | 192GB HBM3e | 7 PFLOPS | 700W | 8 TB/s | N/A | 旗舰 |
| **NVIDIA H200** | NVIDIA | 141GB HBM3e | 3,958 TFLOPS | 700W | 4.8 TB/s | ~$30-35K | 高端 |
| **NVIDIA H100** | NVIDIA | 80GB HBM3 | 3,958 TFLOPS | 700W | 3.35 TB/s | ~$25-30K | 主流 |
| **AMD MI400** | AMD | **432GB HBM4** | **40 PFLOPS FP4 dense** | ~1,000W | **19.6 TB/s** | TBD | **2026 旗舰** |
| **AMD MI355X** | AMD | 288GB HBM3E | 10.1 PFLOPS (MXFP6) | 1,400W | 8 TB/s | 待定 | 旗舰 |
| **AMD MI350X** | AMD | 288GB HBM3E | 9.2 PFLOPS (MXFP6) | 750W | 8 TB/s | 待定 | 旗舰 |
| **AMD MI325X** | AMD | 256GB HBM3E | 2,614 TFLOPS | 750W | 6.48 TB/s | ~$20K | 高端 |
| **AMD MI300X** | AMD | 192GB HBM3 | 2,614 TFLOPS | 750W | 5.3 TB/s | ~$15K | 主流 |
| **Huawei Ascend 920** | 华为 | ~96GB HBM | **900+ TFLOPS (BF16)** | ~400W | **4 Tbps** | TBD | **2025 H2 国产旗舰** |
| **Huawei Ascend 910C** | 华为 | 128GB HBM2e | 780 TFLOPS (BF16) | 310W×2 | 1.2 TB/s | 国内定价 | 中国市场 |
| **Huawei Ascend 910B** | 华为 | 64GB HBM2e | 320 TFLOPS (FP16) | 310W | 1.2 TB/s | 国内定价 | 中国市场 |

## 选型建议

### 按规模选择

- **万亿参数 LLM（GPT-4 级）**：**NVIDIA Rubin R200 (2026 H2)**, NVIDIA B300 Ultra, **AMD MI400 (2026) Helios 机柜**
- **百亿到千亿参数 LLM（Llama 70B, Qwen 72B）**：NVIDIA H100/H200, AMD MI300X/MI325X
- **十亿到百亿参数 LLM（Llama 7B-13B）**：NVIDIA H100, A100, AMD MI300X
- **小规模训练 / 推理**：NVIDIA A100 40GB, RTX 6000 Ada
- **中国市场（2025 H2+）**：**Huawei Ascend 920**（900+ BF16 TFLOPS, 4 Tbps）

### 按预算选择

- **高端预算（$30K+/GPU）**：NVIDIA B200, B100, H200
- **主流预算（$10K-25K/GPU）**：NVIDIA H100, AMD MI300X
- **性价比预算（$5K-15K/GPU）**：AMD MI300X, NVIDIA A100 80GB

### 按地区选择

- **北美 / 欧洲**：NVIDIA + AMD 自由选择
- **中国**：Huawei Ascend 910B/910C + 国产替代
- **云端（无偏好）**：任何厂商

## 关键技术概念

- **Tensor Core / Matrix Core**：GPU 上的矩阵加速单元
- **HBM（高带宽内存）**：3D 堆叠显存，AI 训练的关键
- **FP8 / FP4**：低精度浮点，Blackwell 时代新增
- **NVLink / Infinity Fabric / HCCS**：GPU 间高速互联
- **Transformer Engine**：自动 FP8 精度转换

## 详细产品页

- [NVIDIA H100](/docs/cards/nvidia/h100) - 上一代经典
- [NVIDIA H200](/docs/cards/nvidia/h200) - 显存升级
- [NVIDIA B100](/docs/cards/nvidia/b100) - Blackwell 入门
- [NVIDIA B200](/docs/cards/nvidia/b200) - 旗舰
- [NVIDIA B300 Ultra](/docs/cards/nvidia/b300-ultra) - 最新
- [NVIDIA Rubin R200](/docs/cards/nvidia/rubin-r200) - 2026 H2 旗舰
- [AMD MI250](/docs/cards/amd/mi250) - 上代 HPC
- [AMD MI300X](/docs/cards/amd/mi300x) - 192GB 显存
- [AMD MI325X](/docs/cards/amd/mi325x) - 256GB 升级
- [AMD MI350](/docs/cards/amd/mi350) - CDNA 4 旗舰
- [AMD MI400](/docs/cards/amd/mi400) - 2026 HBM4 旗舰
- [Huawei Ascend 910B](/docs/cards/huawei/ascend-910b) - 中国市场
- [Huawei Ascend 910C](/docs/cards/huawei/ascend-910c) - 国产最强
- [Huawei Ascend 920](/docs/cards/huawei/ascend-920) - 2025 H2 国产替代

## 相关类型

- [训练专用 AI ASIC (TPU, Gaudi, Trainium)](/docs/types/training-asic)
- [晶圆级超算训练 (Cerebras, Dojo)](/docs/types/training-wafer)
- [AI 推理 GPU](/docs/types/inference-gpu)
- [完整对比表](/docs/comparison)
