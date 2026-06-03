---
slug: ai-startup-survival-2026-tenstorrent-sambanova-graphcore
title: 'AI 芯片创业公司生存报告：Tenstorrent / SambaNova / Graphcore 的 2026'
authors: [aicomputecards]
tags: [strategy, news]
description: 2026 年 AI 芯片创业公司生存现状：Tenstorrent 融资 7 亿美元 / SambaNova RDU 二代 / Graphcore 被软银收购 / Cerebras IPO / Groq 被 NVIDIA 收购。哪些能活下来？
---

**2026 年 AI 芯片市场进入「赢家通吃」阶段**。NVIDIA 占据 90%+ 份额，AMD 10% 挣扎，Google/AWS/Huawei/Cerebras 各占细分市场。但**还有一批 AI 芯片创业公司**在夹缝中求生——本文分析 **Tenstorrent、SambaNova、Graphcore、Cambricon、Moore Threads、Biren、Iluvatar** 的 2026 现状与未来。

{/* truncate */}

## 2026 年 AI 芯片市场格局

### 头部：双寡头 + 5 个挑战者

| 厂商 | 市场份额 | 2025 营收 | 状态 |
|------|----------|----------|------|
| **NVIDIA** | **90%+** | ~$130B | 主导 |
| **AMD** | 5% | ~$5B (MI 业务) | 第二 |
| **Huawei** | 1% (中国 60%) | ~$3B (昇腾) | 中国主导 |
| **Google TPU** | 1% (内部) | N/A | 内部使用 |
| **AWS Trainium** | &lt;1% (内部) | N/A | 内部使用 |
| **Cerebras** | &lt;1% | $510M | 即将 IPO |
| **Groq (NVIDIA)** | &lt;1% | N/A | 已并入 NVIDIA |

### 创业公司

| 厂商 | 创立 | 融资总额 | 2025 营收 | 状态 |
|------|------|----------|----------|------|
| **Tenstorrent** | 2016 | **$700M+** | ~$30M (推测) | 融资中 |
| **SambaNova** | 2017 | **$1.1B+** | ~$80M (推测) | 营收增长 |
| **Graphcore** | 2016 | **$700M+** | N/A | **被软银收购**（2024） |
| **Cambricon 寒武纪** | 2016 | A股上市 | ~$80M | A股 250亿市值 |
| **Moore Threads 摩尔线程** | 2020 | $500M+ | ~$30M | 准备上市 |
| **Biren 壁仞** | 2019 | $700M+ | ~$20M | 准备上市 |
| **Iluvatar 天数智芯** | 2018 | $400M+ | ~$15M | 港股上市 |
| **Lightmatter** | 2017 | $300M+ | ~$5M | 硅光计算 |
| **Esperanto** | 2014 | $120M | &lt;$5M | RISC-V AI |
| **Mythic** | 2012 | $200M+ | &lt;$5M | 边缘 AI |

## 十大创业公司详解

### 1. Tenstorrent：RISC-V 黑马

**Tenstorrent** 由传奇芯片设计师 **Jim Keller** 领导（曾设计 AMD Zen / Apple A14 / Tesla FSD）：

| 项目 | 详情 |
|------|------|
| **创始人** | **Jim Keller**（传奇架构师） |
| **创立** | 2016 |
| **总部** | 多伦多 / 奥斯汀 / 硅谷 |
| **融资** | **$700M+**（2024-12 估值 $2B） |
| **2025 营收** | ~$30M（推测） |
| **核心产品** | **Wormhole n150/n300**, **Blackhole** |
| **代工** | TSMC 12nm + GlobalFoundries |
| **软件** | **完全开源**（TT-Metalium） |
| **客户** | **LG**, **BOSCH**, **AutoDesk**, **RIKEN**（日本） |
| **2026 计划** | Grendel 下一代 + 战略合作（推测与 OpenAI/AMD） |

#### Tenstorrent 关键产品

| 产品 | 工艺 | 算力 | 显存 | 价格 | 状态 |
|------|------|------|------|------|------|
| **Wormhole n150** | 12nm | 80 TOPS (FP8) | 12GB | ~$2K | 2023 |
| **Wormhole n300** | 12nm | 160 TOPS (FP8) | 24GB | ~$4K | 2024 |
| **Blackhole p150** | 6nm | 320 TOPS (FP8) | 16GB | ~$3K | 2025 |
| **Blackhole p300** | 6nm | 800 TOPS (FP8) | 24GB | ~$6K | 2025 |
| **Grendel** | 4nm (推测) | 1.5 POPS (FP8) | 32GB | TBD | 2026-2027 |

#### Tenstorrent 关键优势

- **Jim Keller 个人品牌**：业内顶级架构师
- **完全开源软件**：TT-Metalium（GitHub 13K+ stars）
- **RISC-V 生态**：与 SiFive / RISC-V International 深度合作
- **政府 / 学术客户**：RIKEN（日本）、多所美国大学

#### Tenstorrent 关键挑战

- **TDP 偏高**：Blackhole p300 ~150W（vs H100 700W 性能仍弱）
- **生态薄弱**：PyTorch 兼容性仍在改善
- **市场认知度低**：相比 NVIDIA 难以获得企业客户

### 2. SambaNova：企业 RDU 一体机

**SambaNova** 是企业级 AI 一体机的代表：

| 项目 | 详情 |
|------|------|
| **创始人** | Kunle Olukotun（Stanford 教授）+ 2 位 Stanford 校友 |
| **创立** | 2017 |
| **总部** | 帕罗奥图 |
| **融资** | **$1.1B+**（2021 估值 $5B） |
| **2025 营收** | ~$80M（推测） |
| **核心产品** | **SN40L RDU**（可重构数据流单元） |
| **代工** | TSMC 7nm |
| **客户** | **美国政府**, **Accenture**, **Hewlett Packard Enterprise** |
| **2026 计划** | **SN50 下一代**（更大 RDU） |

#### SambaNova SN40L 规格

| 项目 | 参数 |
|------|------|
| **架构** | RDU（Reconfigurable Dataflow Unit） |
| **工艺** | TSMC 7nm |
| **RDU 核心** | 1,040 个 tiles |
| **HBM 容量** | 128 GB HBM3 |
| **HBM 带宽** | 3.2 TB/s |
| **FP16 算力** | 600 TFLOPS |
| **BF16 算力** | 300 TFLOPS |
| **TDP** | ~600 W |
| **价格** | ~$150K / 系统 |

#### SambaNova 商业模式

- **不卖芯片**——**卖一体机**（SambaSystems）
- **SambaFlow** 软件栈（Apache 2.0）
- **专注企业私有部署**：政府、银行、电信
- **2025 客户**：美国空军、Accenture、HPE

#### SambaNova 关键挑战

- **市场份额小**：与 NVIDIA 巨头差距巨大
- **一体机模式难以扩展**：每个客户需要定制
- **2024 裁员 20%**（重组）

### 3. Graphcore：被软银收购

**Graphcore** 是英国 AI 芯片先驱，但 2024 年被**软银收购**：

| 项目 | 详情 |
|------|------|
| **创始人** | Nigel Toon + Simon Knowles |
| **创立** | 2016 |
| **总部** | 布里斯托尔（英国） |
| **融资** | $700M+（2020 估值 $2.8B） |
| **2024 营收** | ~$30M（推测） |
| **核心产品** | **Bow GC200 IPU** + **Bow Pod** |
| **代工** | TSMC 7nm |
| **2024-10 收购** | **被软银收购**（金额未披露，推测 $600M） |
| **2026 状态** | 软银子公司，专注日本市场 |

#### Graphcore 关键事件

| 时间 | 事件 |
|------|------|
| 2018 | Bow IPU 首发 |
| 2020 | 估值 $2.8B 巅峰 |
| 2022 | 营收远低于预期 |
| 2023 | 多次裁员 |
| **2024-10** | **软银收购** |
| 2025 | 转向日本市场（日本 SoftBank + 沙特 G42） |
| 2026 | 软银内部使用 + 日本国家 AI 战略 |

#### Graphcore 未来

- **不再追求独立 IPO**
- **被软银整合**到 ARM 生态
- **Bow Pod 128** 仍是旗舰
- **可能 2027 退出**（软银撤资）

### 4. Cambricon 寒武纪：A 股 250 亿

**Cambricon** 是中国 AI 芯片第一股：

| 项目 | 详情 |
|------|------|
| **创立** | 2016 |
| **联合创始人** | 陈云霁、陈天石（兄弟，中科院计算所） |
| **上市** | **2020-07 科创板**（A股 688256） |
| **市值** | **~250 亿美元**（2026-05） |
| **2025 营收** | ~$80M |
| **核心产品** | 思元 290 / 590 / 思元 690（下一代） |
| **代工** | 中芯国际 SMIC |
| **客户** | 政府、电信、互联网 |

#### Cambricon 思元 590

| 项目 | 参数 |
|------|------|
| **制程** | 7nm |
| **BF16 算力** | 480 TFLOPS |
| **INT8 算力** | 960 TOPS |
| **HBM 容量** | 64 GB |
| **HBM 带宽** | 2.4 Tbps |
| **TDP** | ~300 W |
| **价格** | ~$5K（推测） |

#### Cambricon 挑战

- **软件生态薄弱**：MLU 编程模型 vs CUDA 差距大
- **市场份额被 Huawei 挤压**：昇腾 910C 2025 起算力领先
- **盈利能力差**：仍亏损

### 5. Moore Threads 摩尔线程：A 股在审

**Moore Threads** 是中国 GPU 第二：

| 项目 | 详情 |
|------|------|
| **创立** | 2020 |
| **创始人** | 张建中（原 NVIDIA 全球副总裁、中国区总经理） |
| **融资** | $500M+ |
| **2025 营收** | ~$30M |
| **核心产品** | MTT S4000 / S5000 |
| **代工** | SMIC 7nm |
| **A 股状态** | **2025 末申请科创板上市** |

#### Moore Threads MTT S5000

| 项目 | 参数 |
|------|------|
| **制程** | 7nm (SMIC) |
| **FP16 算力** | 250 TFLOPS |
| **INT8 算力** | 500 TOPS |
| **显存** | 32GB GDDR6X |
| **显存带宽** | 1.6 Tbps |
| **TDP** | ~300 W |
| **价格** | ~$3K |

#### Moore Threads 挑战

- **生态薄弱**：MUSA vs CUDA 差距
- **市场份额**：远低于 Huawei
- **A 股 IPO 待批**

### 6. Biren 壁仞：港股在审

**Biren** 是中国 GPU 第三：

| 项目 | 详情 |
|------|------|
| **创立** | 2019 |
| **创始人** | 张文（哈佛大学博士，前 NVIDIA） |
| **融资** | $700M+ |
| **2025 营收** | ~$20M |
| **核心产品** | BR104 |
| **代工** | SMIC 7nm |
| **港股状态** | **2025 末申请港股上市** |

#### Biren BR104

| 项目 | 参数 |
|------|------|
| **制程** | 7nm (SMIC) |
| **FP16 算力** | 300 TFLOPS |
| **INT8 算力** | 600 TOPS |
| **显存** | 32GB GDDR6 |
| **显存带宽** | 1.6 Tbps |
| **TDP** | ~300 W |
| **价格** | ~$3K |

#### Biren 关键事件

- **2023 美国出口管制**导致先进工艺受限
- **2024 推迟 IPO**（业绩未达预期）
- **2025 末重新申请**港股上市

### 7. Iluvatar 天数智芯：港股上市

**Iluvatar** 已港股上市：

| 项目 | 详情 |
|------|------|
| **创立** | 2018 |
| **上市** | 2023 港股 |
| **核心产品** | 天垓 100 / Bi-150 |
| **代工** | SMIC 7nm |
| **市值** | ~$5 亿美元 |

### 8. Lightmatter：硅光计算

**Lightmatter** 是硅光计算先锋：

| 项目 | 详情 |
|------|------|
| **创立** | 2017 |
| **融资** | $300M+ |
| **核心产品** | **Envise** 硅光 AI 加速器 |
| **工艺** | TSMC 5nm + 自研硅光芯片 |
| **客户** | 主要数据中心 |

#### Lightmatter Envise

| 项目 | 参数 |
|------|------|
| **架构** | 硅光 + 电子混合 |
| **算力** | 1 PFLOP (FP16) |
| **功耗** | 比传统 GPU 降 50% |
| **2026 状态** | 商业试点 |

### 9. Esperanto：RISC-V AI

**Esperanto** 是 RISC-V AI 加速器代表：

| 项目 | 详情 |
|------|------|
| **创立** | 2014 |
| **融资** | $120M+ |
| **核心产品** | ET-SoC-1（1,000+ RISC-V 核心） |
| **代工** | TSMC 7nm |
| **2026 状态** | 主要客户：超算中心 / 推荐系统 |

### 10. Mythic：边缘 AI

**Mythic** 是边缘 AI 模拟计算：

| 项目 | 详情 |
|------|------|
| **创立** | 2012 |
| **融资** | $200M+ |
| **核心产品** | M1076 模拟 AI 芯片 |
| **工艺** | TSMC 40nm |
| **2026 状态** | 转型 / 边缘市场 |

## 创业公司分类与未来

### 类别 1：可能成功的（5-10 年内能 IPO 或被收购）

| 厂商 | 路径 | 关键支撑 |
|------|------|----------|
| **Tenstorrent** | 独立 IPO 或被收购 | Jim Keller + RISC-V + 开源 |
| **Cambricon** | A 股继续上市 | 中国国家 AI 战略 |
| **Moore Threads** | A 股 IPO | 张建中（NVIDIA 中国背景） |

### 类别 2：可能存活的（细分市场）

| 厂商 | 细分市场 |
|------|----------|
| **SambaNova** | 美国政府 + 企业私有部署 |
| **Lightmatter** | 硅光计算 + 数据中心低功耗 |
| **Esperanto** | 超算 + 推荐系统 |
| **Biren / Iluvatar** | 中国国产替代政府市场 |

### 类别 3：可能消失的

| 厂商 | 风险 |
|------|------|
| **Graphcore** | 软银子公司，未来不明 |
| **Mythic** | 模拟计算已被数字超越 |
| **小型创业公司** | 资金 + 客户 + 生态三重压力 |

## 投资逻辑

### 创业公司为何能活？

1. **细分市场**：政府 / 国防 / 学术 / 特殊行业（NVIDIA 不做）
2. **差异化架构**：RISC-V / 硅光 / 模拟 / 数据流（NVIDIA 不会走）
3. **本地化**：中国 / 欧洲 / 日本 / 印度（数据主权 + 政治）
4. **大客户绑定**：Tenstorrent + LG、SambaNova + 美国空军

### 创业公司为何会死？

1. **NVIDIA 生态碾压**：CUDA + cuDNN + TensorRT 难以超越
2. **资金消耗大**：7nm 工艺流片 $30M+，5nm $80M+
3. **软件迁移成本高**：从 CUDA 迁移到非 NVIDIA 平台需要 6-12 月
4. **客户集中度高**：失去大客户 = 死亡

## 详细产品页

- [Tenstorrent (Tensix 架构)](/docs/cards/others/tenstorrent)
- [SambaNova SN40L](/docs/cards/others/sambanova-sn40l)
- [Graphcore IPU](/docs/cards/others/graphcore-ipu)
- [Cerebras WSE-3 (IPO 同类)](/docs/cards/cerebras/wse-3)
- [Cambricon 思元 590](https://www.cambricon.com/)
- [完整对比表](/docs/comparison)

## 总结

AI 芯片创业公司「赢家通吃」：

1. **Tenstorrent** 最有可能成功（Jim Keller + RISC-V + 开源）
2. **SambaNova** 转型成功（企业一体机 + 美国政府）
3. **Graphcore** 已被软银收购（命运移交日本）
4. **Cambricon / Moore Threads / Biren** 受益于中国国产化
5. **Lightmatter / Esperanto** 细分市场存活
6. **Mythic 等小型公司** 难以存活

**未来 5 年，AI 芯片行业将经历「大鱼吃小鱼」**——创业公司要么 IPO，要么被收购，要么消失。
