---
id: consumer
title: 消费级 AI 显卡
sidebar_label: 消费级 AI
description: 2025 年消费级 AI 显卡：NVIDIA RTX 4090/4080 SUPER 完整规格对比，专为 Stable Diffusion、本地 LLM 推理设计。
keywords: [消费级 GPU, RTX 4090, 本地 LLM, Stable Diffusion, AI 显卡]
---

# 消费级 AI 显卡

消费级 AI 显卡是**个人开发者和创作者**最常用的 AI 硬件。它们在 **Stable Diffusion、本地 LLM、LoRA 微调**等场景中性价比极高。

## 主流消费级 AI 显卡对比

| 型号 | 显存 | FP8 算力 | TDP | 价格 | 适用 |
|------|------|----------|-----|------|------|
| **NVIDIA RTX 4090** | 24GB GDDR6X | 2,642 TFLOPS | 450W | $1,599+ | LLM 70B (4-bit), SD XL |
| **NVIDIA RTX 4080 SUPER** | 16GB GDDR6X | N/A | 320W | $999 | SD XL, LLM 13B |
| **NVIDIA RTX 4070 Ti SUPER** | 16GB GDDR6X | N/A | 285W | $799 | SD 1.5, LLM 7B |
| **NVIDIA RTX 4060 Ti 16GB** | 16GB GDDR6 | N/A | 160W | $399 | 入门 AI |
| **NVIDIA RTX 3090** | 24GB GDDR6X | N/A | 350W | 二手 | 性价比（已停产） |

## 关键考虑

- **24GB 显存门槛**：本地 LLM 推理需要大量显存（>12GB）
- **数据中心级功能缺失**：无 ECC、无 MIG、无 vGPU
- **驱动限制**：GeForce 驱动 vs NVIDIA RTX Enterprise

## 选型建议

### 按预算

- **$1,500+**：RTX 4090 (24GB)
- **$1,000**：RTX 4080 SUPER (16GB)
- **$800**：RTX 4070 Ti SUPER (16GB)
- **$400**：RTX 4060 Ti 16GB

### 按工作负载

- **本地 70B LLM (4-bit 量化)**：RTX 4090 (24GB)
- **本地 13B LLM**：RTX 4080 SUPER (16GB)
- **Stable Diffusion XL**：RTX 4070 Ti SUPER (16GB)
- **Stable Diffusion 1.5**：RTX 4060 Ti 8GB 起

## 注意事项

- **电源要求**：RTX 4090 需 850W+ 电源
- **物理尺寸**：RTX 4090 是三槽厚
- **驱动锁定**：消费级驱动对 AI 训练有限制（应使用 NVIDIA Studio 驱动）
- **vRAM 不足**：70B 模型需要 CPU offload 或模型量化

## 详细产品页

- [NVIDIA RTX 4090](/docs/cards/nvidia/rtx-4090) - 消费级旗舰
- [NVIDIA RTX 6000 Ada](/docs/cards/nvidia/rtx-6000-ada) - 工作站版（48GB）
- [NVIDIA L40S](/docs/cards/nvidia/l40s) - 数据中心版
- [Apple M-Series](/docs/cards/others/apple-m-series) - Apple Silicon 本地 LLM

## 相关类型

- [专业工作站 AI 显卡](/docs/types/workstation)
- [边缘 AI 设备](/docs/types/edge)
- [完整对比表](/docs/comparison)
