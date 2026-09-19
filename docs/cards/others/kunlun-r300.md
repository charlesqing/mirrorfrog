---
id: kunlun-r300
title: "昆仑芯 R300"
vendor: others
vendor_full: "Kunlunxin（昆仑芯科技）"
series: "昆仑芯 2 代"
chip_id: "kunlun-r300"
release_date: "2021-08"
launch_price: "未公开"
status: "量产"
description: "昆仑芯 R300：基于昆仑芯 2 代 XPU-R 芯片的 OAM 加速模组（OCP-OAI 标准），FP16 128 TFLOPS、INT8 256 TOPS、32GB GDDR6、512GB/s、150W，与 R200 PCIe 卡同芯不同形态，适配 R480-X8 服务器大规模训练/推理。"
keywords: [昆仑芯, R300, Kunlunxin, 百度, XPU-R, OAM, OCP-OAI, 128 TFLOPS, 256 TOPS, R480-X8, 万卡集群, 国产AI芯片]
---

# 昆仑芯 R300

> **昆仑芯 R300** 是昆仑芯科技（百度旗下）基于**昆仑芯 2 代 XPU-R 芯片**打造的 **OAM 加速模组**（OCP-OAI 标准）。与 R200 PCIe 全高卡同芯不同形态：R300 以模组形态适配 R480-X8 服务器基板（单板 8 模组），面向数据中心大规模训练/推理集群。

---

## 核心规格

| 规格 | 参数 |
|------|------|
| **架构** | 昆仑芯 2 代 XPU-R（自研架构，含视频编解码单元） |
| **制程** | 7nm |
| **FP16** | 128 TFLOPS |
| **INT8** | 256 TOPS |
| **FP32** | 32 TFLOPS |
| **显存** | 32 GB GDDR6 |
| **显存带宽** | 512 GB/s |
| **TDP** | 150 W |
| **板卡形态** | OAM 加速模组（OCP-OAI 标准，UBB 基板搭载） |
| **片间互联** | 200 GB/s（R480-X8 内双环形拓扑） |
| **发布** | 2021-08（随昆仑芯 2 代发布） |
| **价格** | 未公开 |

> 📌 **形态澄清（2026-09 交叉验证）**：R300 不是新一代芯片，而是昆仑芯 2 代的 **OAM 模组形态**——昆仑芯官网产品矩阵中 R200 为 PCIe 卡、R300 为加速器组/R480-X8 服务器模组线，芯片算力规格完全相同（FP16 128 / INT8 256 / FP32 32 / 32GB GDDR6 / 512GB/s / 150W）。

---

## 技术亮点

- **OCP-OAI 标准**：UBB 服务器基板 + 8 个 OAM 模组（R480-X8），单机 FP16 算力约 1 PFLOPS
- **编解码一体**：片上集成音视频编解码模块，"解码 + AI 计算"一体化，视频分析场景免数据搬运
- **硬件虚拟化**：支持单芯片虚拟化切分，提升云端资源利用率
- **万卡集群主力**：百度智能云万卡集群（2024 年点亮，国内首个自研芯片万卡集群）的基础算力单元之一

---

## 产品定位

昆仑芯产品形态谱系：昆仑芯 1 代（K100/K200 PCIe 卡）→ **昆仑芯 2 代（R200 PCIe 卡 / R300 OAM 模组 / R480-X8 服务器）** → 昆仑芯 3 代 → P800（2024，第三代训练卡）。R300 主要服务百度智能云及中国移动等运营商智算中心的大规模部署（中国移动 2025-2026 推理型 AI 服务器集采"类 CUDA 生态"标段，昆仑芯方案中标份额第一）。

---

## 应用场景

- 数据中心大规模训练/推理（R480-X8 八模组整机）
- 搜索/推荐/视频分析等百度核心业务推理
- 运营商与智算中心国产化集采
- ❌ 单卡开发者场景（选 R200 PCIe 卡形态）

---

## 相关卡

- [Kunlun 昆仑芯 P800](/docs/cards/others/kunlun-p800) — 昆仑芯 3 代训练卡
- [Kunlun 昆仑芯 1](/docs/cards/others/kunlun-1) — 第一代芯片
- [Baidu 昆仑芯 R200](/docs/cards/baidu/r200) — 同芯 PCIe 卡形态
- [NVIDIA T4](/docs/cards/nvidia/t4) — 推理档位对标
- [Huawei Ascend 910B](/docs/cards/huawei/ascend-910b) — 国产训练卡竞品

## 参考资料

- [昆仑芯官网产品介绍（R200/R480-X8）](https://www.kunlunxin.com)
- [Kunlunxin R480 / R300（Kunlun Gen-2）规格档案](https://chips.techbuzzchina.com/chips/kunlunxin-r480)
