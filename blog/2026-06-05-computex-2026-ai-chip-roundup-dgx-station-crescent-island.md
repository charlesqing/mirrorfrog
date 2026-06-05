---
slug: computex-2026-ai-chip-roundup-dgx-station-crescent-island
title: "Computex 2026 AI 算力卡大事件：DGX Station for Windows、Intel Crescent Island 等重磅发布"
authors: aicomputecards
tags: [新闻, AI芯片, product-launch, news]
date: 2026-06-05
description: Computex 2026 圆满收官：NVIDIA DGX Station for Windows（20 PFLOPS，748GB 内存）、Intel Crescent Island AI GPU（480GB LPDDR5x）、RTX Spark 等 AI 算力新品密集发布。
---

# Computex 2026 AI 算力卡大事件

**2026 年 6 月 1-5 日，中国台北** —— Computex 2026（台北国际电脑展）本周圆满收官。本届展会以 "AI Together" 为主题，NVIDIA、Intel、AMD、Qualcomm 等巨头密集发布了多款 AI 算力新品，以下是 MirrorFrog 为你梳理的**算力卡圈本周最值得关注的动态**。

## ① NVIDIA DGX Station for Windows：桌面的 AI 超算

NVIDIA 在 Computex 2026 主题演讲中正式发布了 **DGX Station for Windows**，号称"全球最强大的桌面 AI 超级计算机"。

### 核心规格

| 项目 | 参数 |
|------|------|
| **芯片** | GB300 Grace Blackwell Ultra Desktop Superchip |
| **GPU 内存** | 252 GB HBM3e（7.1 TB/s） |
| **CPU 内存** | 496 GB LPDDR5X（396 GB/s） |
| **统一内存** | **748 GB**（NVLink-C2C 互联） |
| **FP4 算力** | **20 PFLOPS**（稀疏） |
| **FP8 算力** | 10 PFLOPS（稀疏） |
| **网络** | ConnectX-8 SuperNIC，最高 **800 Gb/s** |
| **模型容量** | 可运行 **1 万亿参数** 模型 |
| **系统功耗** | 1,600 W |
| **操作系统** | Microsoft Windows |
| **出货时间** | **2026 Q4** |

**意义**：DGX Station 将以前需要数据中心级集群的 AI 算力（20 PFLOPS FP4）压缩到一台桌面工作站中。748GB 统一内存意味着开发者可以在本地运行千亿甚至万亿参数的大模型，无需依赖云端。

---

## ② Intel Crescent Island：推理专用 AI GPU

Intel 在 Computex 上详细披露了其面向数据中心 AI 推理的新一代 GPU **Crescent Island**。

| 项目 | 参数 |
|------|------|
| **内存** | 最高 **480 GB LPDDR5x** |
| **功耗** | **350 W**（PCIe 形态） |
| **精度支持** | FP4/MXFP4 → FP64（全精度覆盖） |
| **目标** | AI 推理工作负载（Agentic Inference） |
| **定位** | 性价比高于 HBM 方案 |
| **出货** | **2026 下半年** |

**意义**：Crescent Island 是 Intel 在 AI 推理市场的重要布局。480GB 超大 LPDDR5x 内存（非 HBM）意味着**成本远低于** NVIDIA H200/B200 等同级竞品，瞄准企业级推理部署场景。

---

## ③ Intel Xeon 6+（Clearwater Forest）：首款 Intel 18A 数据中心 CPU

Intel 还发布了代号 **Clearwater Forest** 的全新 **至强 6+ 处理器**，这是 Intel 首款采用 **18A 工艺** 的数据中心 CPU：

- **288 个 Darkmont 架构核心**
- L2 288MB + L3 576MB 缓存
- 12 通道 DDR5-8000 内存
- Foveros Direct 3D 先进封装
- **AI Agent 时代** CPU 重返基础设施中心

---

## ④ NVIDIA RTX Spark 生态落地

本周 NVIDIA 与 **联发科** 合作的 **RTX Spark** 超级芯片持续发酵。多家 OEM 亮相了基于 RTX Spark 的笔记本和紧凑型桌面原型机：

- **华硕**、**戴尔**、**惠普**、**联想**、**微软 Surface**、**微星** 均确认首发
- 配备 **20 核 Grace CPU + Blackwell GPU**（6144 CUDA 核心）
- AI 算力 **1 PFLOPS**
- **2026 年秋季** 零售上市

---

## ⑤ Intel × 鸿海（Foxconn）AI 基础设施合作

Intel 与鸿海宣布联合布局 AI 基础设施，覆盖从 **芯片 → 服务器 → 机架级系统** 的完整链条，瞄准 AI 推理需求激增带来的数据中心市场机遇。

---

## ⑥ 国产 AI 芯片动态

据 IDC 2025 年度报告，中国 AI 加速卡市场总出货量达 **约 400 万张**，本土厂商合计出货约 **165 万张**，市占率突破 **41%**。华为昇腾 950 系列已进入量产交付阶段，寒武纪 MLU690 开始向互联网客户出货。

---

## 本周算力圈速览

| 厂商 | 产品 | 亮点 | 时间 |
|------|------|------|------|
| NVIDIA | DGX Station for Windows | 20 PFLOPS, 748GB 统一内存 | Q4 2026 |
| NVIDIA | RTX Spark | 1 PFLOPS AI PC 芯片 | 2026 秋 |
| Intel | Crescent Island GPU | 480GB LPDDR5x, 350W | 2026 H2 |
| Intel | Xeon 6+ (Clearwater Forest) | 288 核, Intel 18A | 2026 H2 |
| Intel + 鸿海 | AI 基础设施合作 | 芯片→机柜 全链路 | 战略合作 |
| 华为 | 昇腾 950PR/DT | 1 PFLOPS FP8, 自研 HBM | 已量产 |
| 寒武纪 | MLU690 | 2 PFLOPS FP8, 192GB HBM3E | 出货中 |

---

*数据来源：NVIDIA GTC Taipei 2026 / Computex 2026 官方发布、Intel 新闻稿、凤凰科技、IT之家。*
