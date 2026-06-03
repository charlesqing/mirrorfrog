---
id: inference-gpu
title: 数据中心 AI 推理 GPU
sidebar_label: AI 推理 GPU
description: 2025 年数据中心 AI 推理 GPU：NVIDIA L2/L4/L40S、T4、H100/H200 完整比较和选型。
keywords: [AI 推理 GPU, NVIDIA L4, L40S, T4, 数据中心推理]
---

# 数据中心 AI 推理 GPU

数据中心 AI 推理 GPU 是**专门优化推理工作负载**的 GPU，相比训练卡更注重 **每瓦特吞吐**、**延迟** 和 **TCO**（总拥有成本）。**2025 年 LLM 推理需求爆发**，推理 GPU 市场快速扩大。

## 主流 AI 推理 GPU 对比

| 型号 | 架构 | 显存 | FP8 算力 | TDP | 形态 | 适用场景 |
|------|------|------|----------|-----|------|----------|
| **NVIDIA B300 Ultra** | Blackwell Ultra | 288GB HBM3e | 14 PFLOPS (FP4 稀疏) | 1,400W | SXM | **DeepSeek 22,476 TGS Prefill** |
| **NVIDIA B100/B200** | Blackwell | 192GB HBM3e | 7-9 PFLOPS | 700-1000W | SXM | 旗舰推理 |
| **NVIDIA H200** | Hopper | 141GB HBM3e | 3,958 TFLOPS | 700W | PCIe 5.0 | 长上下文推理 |
| **NVIDIA H100** | Hopper | 80GB HBM3 | 3,958 TFLOPS | 700W | PCIe 5.0 | 大规模 LLM 推理 |
| **NVIDIA L40S** | Ada Lovelace | 48GB GDDR6 ECC | 733 TFLOPS | 350W | PCIe 4.0 | 通用推理、Omniverse |
| **NVIDIA L4** | Ada Lovelace | 24GB GDDR6 | 485 TFLOPS | **72W** | PCIe 4.0 | 云端推理、视频 AI |
| **NVIDIA L2** | Ada Lovelace | 24GB GDDR6 | 96 TFLOPS | 50-75W | PCIe 4.0 | 边缘 / 电信推理 |
| **NVIDIA A100 80GB** | Ampere | 80GB HBM2e | 624 TOPS (INT8) | 400W | PCIe 4.0 | 大模型推理 |
| **NVIDIA T4** | Turing | 16GB GDDR6 | N/A | 70W | PCIe 3.0 | 轻量推理、vGPU |

## 选型建议

### 按 LLM 规模

- **>70B 参数 LLM**：H100/H200（多卡）/ A100 80GB（多卡）
- **30B-70B 参数 LLM**：A100 80GB 单卡 / L40S
- **7B-30B 参数 LLM**：L40S / L2 / RTX 6000 Ada
- **小于 7B 参数 LLM**：L4 / T4 / L2

### 按功耗 / 密度

- **极致低功耗（云原生）**：L4 (72W) / L2 (50-75W)
- **低功耗（vGPU）**：T4 (70W)
- **中等（通用）**：L40S (350W)
- **高性能**：H100 / H200 (700W)

### 按工作负载

- **生成式 AI 推理（LLM）**：H100 / H200 / L40S
- **云游戏 / 视频转码**：L4 (AV1) / T4
- **批量推理 / 推荐系统**：L4 / L2
- **超低延迟**：Groq LPU（非 GPU）

## 详细产品页

- [NVIDIA L2](/docs/cards/nvidia/l2) - 50-75W 边缘推理
- [NVIDIA L4](/docs/cards/nvidia/l4) - 72W 低功耗
- [NVIDIA L40S](/docs/cards/nvidia/l40s) - 通用推理
- [NVIDIA T4](/docs/cards/nvidia/t4) - vGPU 经典
- [NVIDIA A100](/docs/cards/nvidia/a100) - 大模型推理
- [NVIDIA H100](/docs/cards/nvidia/h100) - 高性能
- [NVIDIA H200](/docs/cards/nvidia/h200) - 显存升级
- [NVIDIA B200](/docs/cards/nvidia/b200) - 旗舰推理
- [NVIDIA B300 Ultra](/docs/cards/nvidia/b300-ultra) - DeepSeek 22,476 TGS

## 相关类型

- [AI 推理 ASIC (Inferentia, Groq LPU, TPU v5e)](/docs/types/inference-asic)
- [AI 训练 GPU](/docs/types/training-gpu)
- [完整对比表](/docs/comparison)
