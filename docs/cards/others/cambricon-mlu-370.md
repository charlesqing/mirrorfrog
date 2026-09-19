---
id: cambricon-mlu-370
title: Cambricon 寒武纪 MLU370-X8 (思元370)
sidebar_label: MLU370-X8
description: 寒武纪 MLU370-X8 官方规格：7nm 双芯思元370、FP16 96 TFLOPS、INT8 256 TOPS、48GB LPDDR5、614.4 GB/s、250W、MLU-Link 200GB/s，训推一体加速卡。
keywords: [Cambricon MLU370, 寒武纪 思元370, MLU370-X8, 7nm, 48GB LPDDR5, 256 TOPS, 96 TFLOPS, 250W, 国产 AI]
---

# Cambricon 寒武纪 MLU370-X8 (思元370)

## 产品概述

**Cambricon 寒武纪 MLU370-X8** 是寒武纪基于 **MLUarch03（第三代 MLU 架构）** 的**训推一体智能加速卡**，采用**双芯思元 370** 配置，**7nm 制程**，官方峰值性能 **FP16 96 TFLOPS / BF16 96 TFLOPS / INT8 256 TOPS / FP32 24 TFLOPS**，配备 **48GB LPDDR5（614.4 GB/s）**，全高全长双槽位 **250W**，MLU-Link 聚合 **200 GB/s（双向）**。配套 **NeuWare** 软件栈 + **MagicMind**。在寒武纪产品线中位于 MLU290 之上、MLU590 之下，是思元 590（2026-07 官方商用）之前寒武纪的主力出货型号之一。

> 📌 **数据订正（2026-09 交叉验证）**：本页此前误记「INT8 96 TOPS / BF16 48 TFLOPS / TDP 35W / 48GB HBM2」。寒武纪官网产品页实锤 **MLU370-X8：INT8 256 TOPS、INT16 128 TOPS、FP16/BF16 各 96 TFLOPS、FP32 24 TFLOPS、48GB LPDDR5、614.4 GB/s、250W**；思元 370 系列使用 LPDDR5 而非 HBM。

**关键定位**：
- **MLU 270**（2019）：16nm — 早期训推
- **MLU 290**（2020）：7nm，MLU-Link — 第一代 7nm 训练
- **MLU370-X8**（2021 发布 / 2022 量产）：**7nm 双芯，48GB LPDDR5，INT8 256 TOPS，250W** — **本页**
- **MLU590**（2026-07 官方正式商用）：7nm，96GB HBM2e — 现役主力
- **MLU690**（2026 初量产）：双 Die Chiplet，196GB HBM3 — 旗舰

## 核心规格

| 项目 | 参数 |
|------|------|
| **架构** | Cambricon MLUarch03（第三代，双芯思元 370） |
| **制程** | TSMC 7nm |
| **FP32** | 24 TFLOPS |
| **FP16** | **96 TFLOPS** |
| **BF16** | 96 TFLOPS |
| **INT8** | **256 TOPS** |
| **INT16** | 128 TOPS |
| **显存** | **48GB LPDDR5** |
| **显存带宽** | **614.4 GB/s** |
| **TDP** | 250 W |
| **板卡形态** | PCIe Gen4 ×16，全高全长双槽位（被动散热） |
| **互联** | MLU-Link 聚合 **200 GB/s**（双向，PCIe 4.0 的 3.1 倍） |
| **视频编解码** | 264 路 HEVC 全高清解码 / 48 路编码，最高 8K |
| **发布** | 2021（思元 370 发布） |
| **量产** | 2022 |
| **单价** | ~¥38,000-42,000（电商渠道参考） |

## 与 MLU 290 对比（2020）

| 指标 | MLU370-X8 | MLU 290 (2020) | 变化 |
|------|-----------|----------------|------|
| 制程 | 7nm | 7nm | 同代 |
| 显存 | **48GB LPDDR5** | 32GB HBM2 | 容量 +50%，换 LPDDR |
| 带宽 | **614.4 GB/s** | 307 GB/s | 2× |
| INT8 | **256 TOPS** | 64 TOPS | 4× |
| FP16/BF16 | **96 TFLOPS** | 32 TFLOPS | 3× |
| TDP | **250 W** | 50 W | 数据中心全尺寸卡 |
| 互联 | **200 GB/s** | 100 GB/s | 2× |
| 软件 | NeuWare | NeuWare 0.5 | 新代 |

## 与 NVIDIA T4 对比

| 指标 | MLU370-X8 | NVIDIA T4 | 差异 |
|------|-----------|------------|------|
| **制程** | 7nm | 12nm | MLU370 新代 |
| **INT8** | 256 TOPS | 130 TOPS | MLU370 翻倍 |
| **FP16** | 96 TFLOPS | 65 TFLOPS | MLU370 +48% |
| **BF16** | 96 TFLOPS | 不支持 | MLU370 独有 |
| **TDP** | 250W | 70W | T4 更节能 |
| **显存** | 48GB LPDDR5 | 16GB GDDR6 | MLU370 3× |
| **带宽** | 614.4 GB/s | 320 GB/s | MLU370 1.9× |
| **软件** | NeuWare + MagicMind | CUDA | T4 成熟 |

> **MLU370-X8 定位**：寒武纪官方在基础软件平台 SDK 上实测称，常见 4 个 AI 模型单卡性能与主流 350W RTX GPU 相当；多卡场景借助 MLU-Link（200GB/s）获得更优并行加速比。

## 适用场景

- ✅ **训推一体**（官方定位，FP32/FP16/BF16/INT8/INT4 全覆盖）
- ✅ **高密度推理 + 多模态并发**（264 路 HEVC 全高清解码）
- ✅ **政府/国企 AI 项目**（国产化政策）
- ✅ **单机 8 卡训练/分布式推理**（MLU-Link 200GB/s）
- ❌ **FP8**（不支持，需 MLU590/690）
- ❌ **前沿大模型训练**（建议转向思元 590/690）
- ❌ **国际市场**（无 CUDA 兼容）

## LLM 推理性能（48GB 版本）

| 模型 | 量化 | 性能（tok/s） | 备注 |
|------|------|---------------|------|
| LLaMA 1 7B | FP16 | ~25 tok/s | 主流 |
| LLaMA 1 13B | FP16 | ~12 tok/s | 完整 FP16 |
| LLaMA 1 30B | Q4_K_M | ~5 tok/s | 量化 |
| ChatGLM-6B | FP16 | ~30 tok/s | 中文 |
| Stable Diffusion 1.5 | FP16 | 2× vs MLU 290 | 图像生成 |

> **48GB LPDDR5 优势**：相比同期 NVIDIA T4 16GB，可完整装载 13B 级 LLM FP16 推理；配合 264 路视频解码能力，是 **2022-2024 国产多模态/视觉 + 中等规模 LLM 推理主力**。

## 软件栈 NeuWare

| 层级 | 工具 | 说明 |
|------|------|------|
| **AI 框架** | **NeuWare** | 统一编程平台 |
| | PyTorch (NeuWare 后端) | 自动映射 MLU |
| | TensorFlow (NeuWare 后端) | 兼容 |
| | **MindSpore** | 华为/信通院主导，PyTorch 兼容 |
| **编译器** | **BANG C/C++** | 寒武纪私有语言 |
| **算子库** | CNML | 类 CUDA cuDNN |
| **推理引擎** | MagicMind | 推理加速引擎 |
| **量化** | NeuQuant | INT8 自动 |
| **模型库** | ModelZoo | CV/NLP/LLM |

## 厂商信息

| 项目 | 内容 |
|------|------|
| **公司** | 寒武纪科技（Cambricon Technologies） |
| **创始人** | 陈天石、陈云霁兄弟（中科院计算所） |
| **成立** | 2016-03 |
| **IPO** | 2020-07-20 科创板（688256） |
| **思元 370 发布** | 2021-Q4（MLU370-X8 2022 量产） |
| **主要客户** | 中国移动、浪潮、曙光、字节跳动、智谱 AI |
| **国家项目** | "东数西算"工程推荐芯片 |

## 关键时间线

| 时间 | 事件 |
|------|------|
| 2016-03 | 寒武纪成立（中科院计算所孵化） |
| 2018-05 | 首款芯片 MLU 100 发布（16nm） |
| 2020-07-20 | **科创板 IPO 上市**（688256）|
| 2020 | MLU 290（7nm 第一代）|
| **2021-Q4** | **思元 370 发布**（本页产品）|
| 2022 | MLU370-X8 量产 + 客户部署 |
| 2024 首次亮相 | MLU 590（2026-07 官方正式商用）|
| 2026 初 | MLU 690 量产（196GB HBM3）|

## 寒武纪产品线

| 产品 | 发布 | 制程 | 显存 | INT8 | TDP | 状态 |
|------|------|------|------|------|-----|------|
| **MLU370-X8** | **2021-Q4 / 2022 量产** | **7nm 双芯** | **48GB LPDDR5** | **256 TOPS** | **250W** | **量产在售** |
| MLU590 | 2024 亮相 / 2026-07 商用 | 7nm | 96GB HBM2e | 512 TOPS | 350W | 现役主力 |
| MLU690 | 2026 初量产 | 双 Die Chiplet | 196GB HBM3 | 2400 TOPS（报道口径） | 500W | 旗舰 |

## 关键特性

- **训推一体**：官方定位，FP32/FP16/BF16/INT16/INT8/INT4 全精度覆盖
- **48GB LPDDR5**：2022 同代国产大显存（vs NVIDIA T4 16GB）
- **MLU-Link 200GB/s**：PCIe 4.0 的 3.1 倍，单机 8 卡全互联
- **264 路视频解码**：多模态/视觉场景利器
- **缺点**：无 FP8、LPDDR5 带宽弱于 HBM、前沿大模型训练需转向 590/690

## 与同期国产 AI 芯片对比（2021-2022）

| 指标 | 寒武纪 MLU370-X8 | Huawei Ascend 310 | Alibaba 含光 800 (2021) |
|------|--------------------|---------------------|--------------------------|
| **制程** | 7nm | 12nm | 12nm |
| **INT8** | 256 TOPS | 22 TOPS | **820 TOPS** |
| **TDP** | **250W** | 8W | 168W |
| **内存** | **48GB LPDDR5** | 8GB LPDDR4 | 32GB HBM2 |
| **带宽** | 614.4 GB/s | 25 GB/s | 700 GB/s |
| **目标** | 训练 + 推理 | 边缘 | 数据中心推理 |

> **2021-2022 国产 AI 三强**：**含光 800 算力最强（820 TOPS）**、**MLU370-X8 生态最完整（训推一体 + MLU-Link）**、**Ascend 310 能效最优（8W）**。

## 相关卡

- [Cambricon 寒武纪 MLU 590](/docs/cards/others/cambricon-mlu) - 下一代
- [Cambricon 寒武纪 MLU 690](/docs/cards/cambricon/mlu-690) - 旗舰
- [Huawei Ascend 910B](/docs/cards/huawei/ascend-910b) - 同期华为
- [Alibaba 含光 800](/docs/cards/others/alibaba-hanguang-800) - 同期阿里
- [Biren BR104](/docs/cards/others/biren-br104) - 国产 AI
- [Moore Threads MTT S5000](/docs/cards/others/moore-threads-mtt-s5000) - 国产 GPU
- [NVIDIA T4](/docs/cards/nvidia/t4) - MLU 370 对标
- [NVIDIA L4](/docs/cards/nvidia/l4) - 推理对比
