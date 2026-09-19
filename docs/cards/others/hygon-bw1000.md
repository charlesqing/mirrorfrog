---
id: hygon-bw1000
title: "海光 深算三号 BW1000"
vendor: others
vendor_full: "Hygon（海光信息）"
series: "深算 DCU"
chip_id: "hygon-bw1000"
release_date: "2025"
launch_price: "未公开"
status: "量产"
description: "海光信息深算三号 BW1000：旗舰 DCU 通用 GPU，FP16 480 TFLOPS、FP64 30 TFLOPS，64GB HBM2e、1.6TB/s 带宽，典型功耗约 300W，不支持 FP8，类 CUDA（DTK/HIP）生态，已上线信息高铁智算平台。"
keywords: [海光, 深算三号, BW1000, Hygon, DCU, 480 TFLOPS, FP64, HBM2e, 类CUDA, DTK, 信息高铁, 国产GPU]
---

# 海光 深算三号 BW1000

> 海光信息第三代 DCU 旗舰（深算三号 / DCU-3，量产型号 BW1000，系列编号 DCU 8300），面向大模型训练、科学计算与政务协同。已上线信息高铁智算算力网 AI 开放平台，是国内首个 BW1000 集群规模化调度平台。

---

## 核心规格

| 规格 | 参数 |
|------|------|
| **架构** | GPGPU（类 CUDA，DTK/HIP 软件栈，Chiplet 封装） |
| **制程** | 未公开 |
| **FP16** | 480 TFLOPS（模力方舟部署文档口径，海光官方未直接公布） |
| **FP32** | 60 TFLOPS |
| **FP64** | 30 TFLOPS（科学计算/CAE 仿真强项） |
| **精度支持** | FP16 / BF16 / TF32 / FP32 / FP64 / INT8 |
| **FP8 支持** | 不支持（FP8 模型需量化替代方案） |
| **显存** | 64 GB HBM2e |
| **显存带宽** | 1.6 TB/s |
| **TDP** | 约 300 W（典型功耗） |
| **互联** | PCIe 5.0 x16（主机接口） |
| **发布** | 2025 年发布，2026 年规模化部署 |
| **价格** | 未公开 |

> 📌 **口径说明（2026-09 交叉验证）**：BW1000 的 FP16/FP32/FP64/显存/带宽/功耗取自模力方舟（moark.com）部署文档并经百度百科转引，两源一致；海光官方从未正式公布算力数字，媒体报道的 5nm 制程与 800 TFLOPS 等说法互相矛盾，均不采信。制程按官方可查信息留空（仅确认 Chiplet 封装）。

---

## 技术亮点

- **类 CUDA 生态**：DTK/HIP 全栈软件平台，兼容 ROCm/CUDA 编程模型，PyTorch、TensorFlow、PaddlePaddle 原生适配，算子覆盖对标 CUDA 超 99%
- **全精度科学计算**：FP64 30 TFLOPS 为业界顶尖水平，CAE 仿真、气象、流体力学场景强项
- **无感迁移**：DeepSeek 新模型发布当日即可完成适配调优，已适配腾讯混元、DeepSeek V3/R1、Qwen3 等主流大模型
- **集群化部署**：信息高铁平台率先上线 BW1000 算力集群，支撑 50 余个行业大模型研发

---

## 产品定位

深算三号是海光 DCU 产品线第三代旗舰：深算一号（对标 V100）→ 深算二号（对标 A100，FP16 约 180 TFLOPS 区间口径）→ **深算三号 BW1000**（对标 H800/H200 推理子集）。与海光 C86 CPU 构成"CPU+DCU"异构协同，主打金融、政务、能源等信创场景的国产替代。

---

## 应用场景

- 大模型训练与推理（千亿参数级，接近 A100 的 LLM 训练表现）
- 科学计算与 CAE 仿真（FP64 强项，256 卡并行可达 700 倍加速）
- 政务/金融信创智算中心（信息高铁平台集群调度）
- ❌ FP8 量化模型直接部署（需转换方案）

---

## 相关卡

- [Hygon DCU K100](/docs/cards/others/hygon-dcu-k100) — 深算二号系列主力卡
- [Hygon DCU Z100](/docs/cards/others/hygon-dcu-z100) — 深算一号系列
- [NVIDIA H200](/docs/cards/nvidia/h200) — 国际旗舰对标
- [NVIDIA H20](/docs/cards/nvidia/h20) — H20 替代窗口对标
- [Cambricon MLU 690](/docs/cards/cambricon/mlu-690) — 国产训练卡竞品

## 参考资料

- [海光 BW1000（模力方舟部署文档）](https://www.moark.com/docs/compute/clusters_gpu/hygon_gpu)
- [海光 BW1000 DCU 初探（开发实践指南）](https://devpress.csdn.net/v1/article/detail/162963776)
