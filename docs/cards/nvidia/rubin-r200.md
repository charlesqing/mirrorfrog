---
title: "NVIDIA Rubin GPU（业界通称 R200）"
description: "NVIDIA Rubin GPU（业界通称 R200）：台积电 3nm 制程、3360 亿晶体管、288GB HBM4 显存、19.2 TB/s 带宽、NVFP4 推理 50 PFLOPS（稀疏），2026 年下半年已规模出货的 Vera Rubin NVL72 核心加速器"
keywords: [NVIDIA Rubin R200, 英伟达 Rubin, Rubin R200, R200 GPU, Vera Rubin NVL72, HBM4, NVLink 6, NVFP4]
id: rubin-r200
date: "2026-03-17"
vendor: "nvidia"
category: "数据中心GPU"
---

# NVIDIA Rubin GPU（业界通称 R200）

> **注意区分**：搜索 "R200" 时可能命中两款完全不同的芯片——本页是 **NVIDIA Rubin GPU（业界通称 R200）**；百度也有一款 **[昆仑芯 R200](/docs/cards/baidu/r200)**（XPU-R 架构、7nm、256 TOPS INT8 的推理加速卡）。若你要找的是后者，请移步其卡片页。

**NVIDIA Rubin GPU**（NVIDIA 官方产品名；业界与供应链通称 **R200 / VR200**，无官方数字型号）是 NVIDIA 在 2026 年发布的新一代 AI GPU，采用台积电 3nm 制程，集成 3360亿晶体管，配备 **288GB HBM4** 显存、**19.2 TB/s** 带宽，NVFP4 推理算力达 **50 PFLOPS（稀疏）**，全面接替 Blackwell 架构。

**出货状态：已规模出货。** Rubin 于 2026 年 1 月宣布进入全面量产，2026 年 6 月起在 GTC Taipei 宣布量产爬坡，**2026 年下半年（H2 2026）已向 CoreWeave、AWS、Google Cloud、Microsoft Azure、Oracle Cloud 等伙伴规模交付 Vera Rubin NVL72 系统**。

## 核心规格

| **规格** | **参数** |
|---------|---------|
| **架构** | Rubin 架构（MCM 多芯片模块设计） |
| **制程** | 台积电 3nm（计算 die N3P+ I/O die） |
| **晶体管数量** | 3360 亿 |
| **SM 数量** | 224 个 |
| **FP4 稀疏** | 50 PFLOPS（NVFP4 推理） |
| **FP4 训练算力** | 35 PFLOPS（dense） |
| **FP8 算力** | 17.5 PFLOPS（dense） |
| **FP16 算力** | 4 PFLOPS（dense） |
| **FP32 算力** | 130 TFLOPS |
| **FP64 算力** | 33 TFLOPS |
| **INT8 算力** | 250 TOPS |
| **显存容量** | 288 GB |
| **显存类型** | HBM4 |
| **显存带宽** | 19.2 TB/s |
| **互联** | NVLink 6（3 TB/s） |
| **TDP** | 1800 W（Max-Q 功耗档） |
| **发布** | 2026 年 1 月 6 日（CES 2026 宣布量产） |
| **量产时间** | 2026 年 H2 规模出货 |

> **TDP 口径说明**：Vera Rubin NVL72 提供两种功耗档，硬件设计相同 —— **Max-Q（约 1.8 kW / GPU，机柜约 190 kW）** 与 **Max-P（约 2.3 kW / GPU，机柜约 230 kW）**。本表采用标准 Max-Q 档。该数值由分析师与供应链披露，NVIDIA 官方规格页未公布单卡 TDP。
> **显存带宽口径**：NVIDIA 2026 年 1月技术博客与早期报道给出 22 TB/s，**2026 年 9 月更新的官方产品页已下修为 19.2 TB/s**，本表采用最新官方值。

## 架构与规格

Rubin GPU 采用**多芯片模块（MCM）设计**，核心包含：
- **2 颗计算 die**（GPU 核心）
- **2 颗 I/O die**（负责 HBM 控制器与 NVLink 物理层）
- **8 颗 HBM4 显存堆栈**

### 关键技术创新

1. **第三代 Transformer Engine**
   - 支持硬件级自适应精度压缩
   - 不需要重写模型代码即可动态切换精度（FP4/FP6/FP8/FP16/BF16/TF32/FP32/FP64）

2. **NVLink 6 互联**
   - 单 GPU 互联带宽 3 TB/s（官方产品页口径）
   - NVL72 机柜总带宽 216 TB/s

3. **HBM4 显存**
   - 容量 288GB（相比 Blackwell B300 的 288GB HBM3e 持平）
   - 带宽 19.2 TB/s（相比 Blackwell 的 8 TB/s 提升 2.4 倍）

## 性能对比

| **对比项** | **Blackwell B300** | **Rubin GPU** | **提升比例** |
|-----------|-------------------|----------------|------------|
| 晶体管数 | 2080 亿 | 3360 亿 | 1.6 倍 |
| 显存容量 | 288GB HBM3e | 288GB HBM4 | 持平 |
| 显存带宽 | 8 TB/s | 19.2 TB/s | 2.4 倍 |
| NVLink 带宽 | 1.8 TB/s | 3 TB/s | 1.7 倍 |
| FP4 推理算力（稀疏） | 20 PFLOPS | 50 PFLOPS | 2.5 倍 |
| TDP | 1,400 W | 1,800 W | 1.3 倍 |

## 平台配置

### Vera Rubin NVL72
- **72 颗** Rubin R200 GPU
- **36 颗** Vera CPU
- **总算力**：NVFP4 推理 3,600 PFLOPS（稀疏）/ 训练 2,520 PFLOPS（密集）
- **总显存**：20.7 TB HBM4
- **总带宽**：1.4 PB/s
- **TDP**：约 190 kW（Max-Q 档）/ 最高 220 kW（Max-P 档），全液冷

### Rubin CPX（2026 年底上市）
- **128 GB GDDR7** 显存，面向百万 token 长上下文的 prefill 阶段
- **Vera Rubin NVL144 CPX** 机柜：8 EFLOPS NVFP4、100 TB 快速显存、1.7 PB/s 聚合带宽

## 量产与交付

- **宣布量产**：2026 年 1 月 6 日 CES 2026 宣布六款芯片全部进入全面量产
- **全面生产确认**：2026 年 10 月 21 日 GTC 柏林主题演讲，黄仁勋宣布 Vera Rubin 平台进入**全面生产（Full Production）**，性能预计两年内较 Blackwell 再提升 30 倍
- **规模出货**：**2026 年下半年（H2 2026）已向合作伙伴规模交付 Vera Rubin NVL72 系统**，首批包括 CoreWeave、AWS、Google Cloud、Microsoft Azure、Oracle Cloud、Lambda、Nebius、Nscale
- **放量节奏（2026-10）**：鸿海在 10 月上旬确认 Vera Rubin NVL72 量产机柜已完成组装并出货（首批交付微软），**Q4 起放量出货**、2027 年成为主力产品；马斯克在 10 月 20 日 SpaceX 财报电话会上称 SpaceX 正以**每月约 20 万颗 GB300** 的速度上线英伟达芯片，2027 年转向以 Vera Rubin 为主（并规划 44 万颗 Vera Rubin 训练集群）
- **Google Cloud A5X**：GTC 柏林（10-21）宣布搭载 Vera Rubin NVL72 的 A5X 实例下月 GA，Google Cloud 计划最多部署 **96 万块 Rubin GPU**
- **命名说明**：原「Rubin NVL144」按 die 计数命名，现官方统一改称 **Vera Rubin NVL72**（按 72 个 GPU 封装计数）
- **规格双口径已定论（2026-10-29）**：研发期公布的 22 TB/s / NVLink 3.6 TB/s 属初步架构目标；官方最新数据手册确认为**量产规格 HBM4 19.2 TB/s / NVLink 6 3 TB/s**（NVL72 机架合计 HBM4 1400 TB/s、NVLink 216 TB/s，网络带宽反而从 28.8 上调至 32.4 TB/s），并称已发布的第三方跑分本就按量产规格测得；本卡与全站对比表采用 19.2 TB/s 口径
- **系统级出货规格细化（2026-11-01 报道）**：据 ServeTheHome 对 NVIDIA 官网与架构数据手册 9 月更新的梳理，单卡算力与 288GB HBM4 容量不变，但 **HGX Rubin NVL8** 调整幅度最大——每卡由 8 个 HBM4 堆栈改为启用 7 个，可用显存约 250–252GB，系统显存从 2.3 TB 降至 2.0 TB，聚合显存带宽从 176 TB/s 降至 130 TB/s（降幅 26%），NVLink 从 28.8 TB/s 降至 24 TB/s，FP4 训练从 280 降至 270 PFLOPS、FP8 训练从 140 降至 130 PFLOPS，FP4 推理保持 400 PFLOPS；NVL72 的 20.7 TB 总显存不变。NVIDIA 未说明调整原因，采购方应以最终系统级规格表而非发布会口径核算
- **HBM4 供货**：SK 海力士、三星、美光三家均已通过 NVIDIA HBM4 认证（2026 年 6 月起）
- **MLPerf Inference v6.1 首秀**（2026-09-16 出结果）：Qwen3-VL 吞吐较 GB300 NVL72 最高提升 **3.7 倍**、DeepSeek-R1 最高提升 **2.5 倍**
- **Rubin Ultra**：原规划 4 die 版已调整为 2 die 版，2027 年下半年推出
- **自建机房采购**：2027 年第一季度

> 📌 **七芯片堆栈**（Vera Rubin 平台完整组成）：Vera CPU + Rubin GPU + NVLink 6 交换机 + ConnectX-9 SuperNIC + BlueField-4 DPU + Spectrum-6 以太网交换机 + **Groq 3 LPX**（专为智能体解码阶段设计的低延迟推理加速器）。

## 应用场景

Rubin GPU 面向**数据中心与超算场景**，适用于：
- 万亿参数大模型训练
- 高性能 AI 推理（低延迟、高吞吐）
- 强化学习（RL）与代理式 AI
- 科学计算与 AI 工厂

## 2026-11 补充：AI 工厂交付与云端可用

NVIDIA 官网新闻页在 11 月初集中列出几项 Rubin 平台的交付进展：Vera Rubin DSX AI 工厂参考设计与 DSX POD（模块化集装箱整机，官方称现场公用设施就绪后部署周期可从约六个月缩短至 14 天，冷却用水最多减少 100%、同等 AI 产出功耗最多降低 30%）；Vera Rubin NVL72 与 Vera CPU 上线 CoreWeave，Cognition 是首个在其上跑生产级 agentic AI 负载的客户；OCP Global Summit 上宣布向生态开放 Vera Rubin 平台。以上均为 NVIDIA 官方口径，尚未见第三方实测验证，各项百分比不可直接代入 [TCO 计算器](/docs/tco-calculator) 的采购模型。

另据 Dell / HPE 的 NVL72 预售页（11-05 更新）：每机架 72 块 Rubin GPU 加 36 颗 Vera CPU、单卡 288GB HBM4、机架合计约 20.7TB，均为液冷且无风冷选项；HPE 标注 2026 年 12 月可用，Dell 标注 2026 年下半年。这与本站 10-29 定论的单卡 19.2 TB/s、288GB 口径一致。

## 2026-11-08 补充：机架级内存调度与推理吞吐口径

NVIDIA 本周在官方博客给出 Vera Rubin NVL72 的内存策略：每 GPU 的 HBM 容量相比 GB300 只增加约 3%，增益来自系统级设计——权重与 KV Cache 压到 NVFP4、模型权重摊到全部 72 块 GPU 以释放本地 HBM、Vera CPU 的大容量内存作为缓冲层、Dynamo 负责上下文迁移、RAG 索引与非活跃上下文下沉到更便宜的存储层。公司宣称相对 GB300 NVL72 可获得最高 30 倍的成本调整后 agentic 推理吞吐。

> 口径说明：30 倍是「最高可达」的厂商口径，尚无独立基准验证，也不能直接代入 [TCO 计算器](/docs/tco-calculator)。可确认的方向是：内存从单卡固定上限变成机架级可调度的共享资源，长上下文与多轮 agent 负载的成本将由压缩、调度与软件栈决定，而不只由堆 HBM 决定。

另据 NAVER 11 月 6 日监管文件，NVIDIA 对这家韩国互联网公司的 10 亿美元投资已完成缴款，持股 4.13%，资金将用于世宗数据中心的 GPU 基础设施与 GPUaaS 业务。这是资本层面动作，不改变本卡规格。
> 同一份文件与韩联社、韩国时报 11 月 6 日报道还给出交割细节：NAVER 定向增发 655 万 8435 股普通股，收到约 1.3 万亿韩元，NVIDIA 成为第三大股东；首个落点是世宗「阁世宗」数据中心，由 Naver Cloud 运营，计划 2027 年上半年启动 55MW、2028 年扩到 200MW，长期构想 1GW；资产管理公司 Brookfield 与 NAVER 签有最高 90 亿美元的计算基础设施保障协议。这是主权 AI 侧的资本与机房安排，不含 Rubin 机柜采购数量或交付时间表。


## 2026-11-08 补充：交付节奏出现两种口径

台股投资论坛 11 月 8 日流传的一份供应链说法称，Rubin 机柜 2026 年底交付指引从原先的至少 7 至 8 千柜（乐观情形 1.1 至 1.2 万柜）下修，业内认为 4 至 5 千柜更合理；列举的原因包括 HBM4 良率波动、长时间压测下的系统稳定性、互联协议栈与软件验证工作量、液冷与供电工程问题，并称放量时点可能推到 2027 年一季度后半段。同一份说法还称二线服务器厂商与部分 neocloud 拿到的机柜数下调幅度大于一线代工厂。

> 口径说明：这是投资论坛转述的未具名供应链信息，NVIDIA 与相关厂商均未确认，也不是官方指引或媒体独立核实。它与本站此前记录的「全面生产」「CoreWeave 已上线 NVL72」并不必然矛盾——量产状态、出货批次与客户实际上架是三件事。本卡不据此调整任何规格或状态；采购方该盯的是可验证的交付凭证（厂商官网可用日期、云厂商实例 GA、季度财报中的机架收入确认），而不是论坛里的柜数。同一批说法里关于 Google TPU 与外租算力的推断同样未经证实，本站不收录。

## 2026-11-13 补充：MLPerf v6.1 公开条目与厂商倍数

NVIDIA 开发者页已列出 MLPerf Inference v6.1 Closed Division 的 Vera Rubin NVL72 条目：DeepSeek-R1 Offline、72 颗 VR200、1,183,327 tokens/sec；Qwen3-VL 235B 为 2,393 samples/sec，同页 GB300 NVL72 为 1,305 samples/sec。这些是公开提交条目，不是预览数字。

NVIDIA 在 v6.1 预览材料里另称，指定 Qwen3 VL 负载下 Vera Rubin NVL72 相对 GB300 NVL72 吞吐最高 3.7 倍，材料注明提交后的结果当时尚未经 MLCommons 认证。同一批材料还有「每美元吞吐最高 10 倍」「每兆瓦 token 吞吐最高 35 倍」，负载与分母各不相同，不能互相印证，也不能直接换算成客户的实际支出。

11 月 12 日 AMD 用自测的 21,333 tokens/s/GPU 对比上面那条公开 DeepSeek-R1 结果，称最高高 30%。两边比的不是同一场测试：AMD 是内部 MLPerf 配置测试，NVIDIA 是公开提交。用 [MI455X 卡片](/docs/cards/amd/mi455x) 对照看会更清楚。

> 口径说明：以上为 NVIDIA 公开基准条目与厂商宣传材料，3.7 倍、10 倍、35 倍均为厂商口径且负载不同；本页规格表不改，不把吞吐倍数当作算力规格。

## 数据来源

- [NVIDIA Vera Rubin NVL72 官方规格页](https://www.nvidia.com/en-us/data-center/vera-rubin-nvl72/) — 单 GPU：NVFP4 推理 50 PFLOPS（稀疏）、训练 35 PFLOPS（密集）、FP8 17.5 PFLOPS（密集）、FP16 4 PFLOPS、FP32 130 TFLOPS、288GB HBM4 | 19.2 TB/s、NVLink 6 3 TB/s
- [NVIDIA Rubin 平台官方页](https://www.nvidia.com/en-us/data-center/technologies/rubin/) — 3360 亿晶体管、台积电 3nm、七芯片五机架架构
- [NVIDIA 官方新闻：Vera Rubin 全面投产](https://nvidianews.nvidia.com/news/vera-rubin-full-production-agentic-ai-factory) — 量产与规模出货状态
- [NVIDIA HGX Rubin NVL8 官方规格页](https://www.nvidia.com/en-us/data-center/hgx/) — 单 GPU 规格与 22 TB/s 早期口径

## 相关产品

- [NVIDIA GB300](/docs/cards/nvidia/gb300) - 前代机柜级平台
- [NVIDIA B300 Ultra](/docs/cards/nvidia/b300-ultra) - 前代单卡旗舰
- [AMD MI455X](/docs/cards/amd/mi455x) - 同代竞品（432GB HBM4）
