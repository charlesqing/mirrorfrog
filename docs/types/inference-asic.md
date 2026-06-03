---
id: inference-asic
title: AI 推理专用 ASIC
sidebar_label: AI 推理 ASIC
description: AI 推理专用 ASIC 完整指南：AWS Inferentia 1/2、Google TPU v5e、Groq LPU，专注 LLM 推理的低延迟方案。
keywords: [AI 推理 ASIC, AWS Inferentia, Google TPU v5e, Groq LPU, 低延迟推理]
---

# AI 推理专用 ASIC

AI 推理 ASIC 是**专为推理工作负载定制**的芯片，与训练 ASIC 不同，它们更关注**延迟**、**吞吐**和**单位 token 成本**。

## 主流 AI 推理 ASIC 对比

| 型号 | 厂商 | 显存 | 算力 (INT8) | TDP | 互联 | 提供方式 |
|------|------|------|-------------|-----|------|----------|
| **Groq 3 LPX 机柜** | NVIDIA（收购 Groq） | **128GB SRAM 聚合** | ~640,000 TOPS | ~80kW (机柜) | 640 TB/s | **2026 H2 (256 LPU/机柜)** |
| **TPU 8i (Trillium 2)** | Google | **288GB HBM** | ~22,000 TOPS (FP8 密集) | N/A | 3D Torus | Google Cloud (2026-04) |
| **Google TPU v7 (Ironwood)** | Google | 192GB HBM | 4,614 TFLOPS (FP8) | N/A | 3D Torus, 9,216 Pod | Google Cloud |
| **AWS Trainium 3** | Amazon | 144GB HBM | 5,716 TFLOPS (FP8) | ~700W | NeuronLink-v4 | AWS Trn3 (2025-12 GA) |
| **AWS Inferentia 2** | Amazon | 32GB HBM2e | ~190 TOPS | ~150W | 12 芯片互联 | AWS Inf2 实例 |
| **AWS Inferentia 1** | Amazon | N/A | 128 TOPS | 35W | N/A | AWS Inf1 实例 |
| **Google TPU v5e** | Google | 16GB HBM | 197 TOPS | N/A | 2D Torus, 256 Pod | Google Cloud |
| **Groq LPU (v1)** | Groq | 228MB SRAM | 1,000 TOPS (估) | 300W (系统) | GroqSync | GroqCloud API |
| **Trainium 2** | Amazon | 96GB HBM | 1,299 TFLOPS (FP8) | ~700W | NeuronLink, 64 UltraServer | AWS Trn2 |

## 选型建议

### 按 LLM 规模

- **超大 LLM（>300B）**：**TPU 8i (288GB HBM)**, TPU v7 Ironwood (192GB 单芯片)
- **大 LLM（70B-300B）**：TPU v7 / Inferentia 2 (12 芯片 = 384GB) / Trainium 3
- **中等 LLM（7B-70B）**：Inferentia 2 / Groq LPU / TPU v5e
- **小 LLM（小于 7B）**：Inferentia 1 / Groq LPU

### 按延迟要求

- **极致低延迟（TTFT < 20ms）**：**Groq 3 LPX 机柜** (NVIDIA 收购后, 2026 H2)
- **极低延迟（小于 50ms 首次 token）**：Groq LPU (v1)
- **低延迟（小于 200ms）**：TPU 8i / TPU v5e / Inferentia 2
- **批处理吞吐优先**：Trainium 3 / TPU v7

### 按部署方式

- **AWS 云**：Inferentia 2, **Trainium 3 (2025-12 GA)**
- **Google Cloud**：TPU v5e, TPU v6e, TPU v7, **TPU 8t (训练) + 8i (推理)**
- **GroqCloud API**（被 NVIDIA 收购后）：**Groq 3 LPX (2026 H2) + Groq LPU (v1)**
- **本地 / 私有云**：Groq GroqRack, AWS Outposts, **Intel Jaguar Shores (2027-2028)**

## 关键差异

### Inferentia 2 vs Groq LPU

- **Inferentia 2**：可云端租赁，70B 模型需多芯片
- **Groq LPU**：超低延迟 LLM，但单芯片 SRAM 仅 228MB（70B 模型需 30+ 芯片）

### TPU v5e vs TPU v7

- **TPU v5e**：推理成本最低，16GB 显存
- **TPU v7 Ironwood**：192GB 大显存，单芯片可加载 70B+ 模型

## 详细产品页

- [AWS Inferentia](/docs/cards/aws/inferentia) - 第一代
- [AWS Inferentia 2](/docs/cards/aws/inferentia-2) - 32GB HBM
- [AWS Trainium 2](/docs/cards/aws/trainium-2) - 训练推理 fungible
- [AWS Trainium 3](/docs/cards/aws/trainium-3) - 2025-12 GA, 3nm
- [Google TPU v5p](/docs/cards/google/tpu-v5p) - 训练为主
- [Google TPU v6e (Trillium)](/docs/cards/google/tpu-v6e) - 训练/推理 fungible
- [Google TPU v7 (Ironwood)](/docs/cards/google/tpu-ironwood) - 推理时代旗舰
- [Google TPU 8i](/docs/cards/google/tpu-8i) - 2026-04 推理专用
- [Groq LPU](/docs/cards/others/groq-lpu) - 超低延迟
- [NVIDIA Groq 3 LPX](/docs/cards/nvidia/groq-3-lpx) - 2026 H2 256 LPU 机柜
- [Qualcomm Cloud AI 100](/docs/cards/others/qualcomm-ai100) - 低功耗推理

## 相关类型

- [AI 推理 GPU (NVIDIA L4/L40S/T4)](/docs/types/inference-gpu)
- [AI 训练 ASIC](/docs/types/training-asic)
- [完整对比表](/docs/comparison)
