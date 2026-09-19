---
id: enrigin-d20
title: "江原 D20"
vendor: others
vendor_full: "ENRIGIN（江原科技）"
series: "江原 D 系列"
chip_id: "enrigin-d20"
release_date: "2025-11-11"
launch_price: "未公开"
status: "量产"
description: "江原科技 D20 智能加速卡：全国产供应链一卡双芯 AI 推理卡，INT8 320 TOPS、128GB LPDDR5X（Max 256GB）、145W、PCIe Gen5 x16，支持 FP32/FP16/BF16/INT8，2025 年 11 月发布，适配 DeepSeek/Qwen 大模型一体机。"
keywords: [江原科技, D20, ENRIGIN, 一卡双芯, 320 TOPS, INT8, LPDDR5X, 128GB, PCIe 5.0, 推理卡, 全国产供应链, 品高股份, 国产AI芯片]
---

# 江原 D20

> 江原科技（ENRIGIN）新一代全国产 AI 推理加速卡，2025 年 11 月发布。采用**一卡双芯**架构（单张 PCIe 卡集成 2 颗自研 AI 芯片，PCIe Bifurcation 2×x8 直连），芯片设计、制造、封装全流程国产化，是国内首款实现"设计+制造+封装+境内流片量产"的云端 AI 推理卡。D20 Max 单卡 256GB 显存，配套品高股份品原 AI 一体机可运行 DeepSeek 671B 满血版。

---

## 核心规格

| 规格 | 参数 |
|------|------|
| **架构** | 江原自研 AI 芯片 ×2（一卡双芯，Bifurcation 直连互联） |
| **制程** | 未公开 |
| **INT8** | 320 TOPS（一卡双芯整卡口径） |
| **精度支持** | FP32 / TF32 / BF16 / FP16 / INT8 |
| **显存** | 128 GB LPDDR5X |
| **高配变体** | D20 Pro 单卡 128GB / D20 Max 单卡 256GB（4 卡互联聚合最高 1TB） |
| **显存带宽** | 未公开 |
| **TDP** | 145 W（整卡） |
| **接口** | PCIe Gen5 x16（2× x8 Bifurcation，共享单槽） |
| **视频编解码** | 256 路解码 / 40 路编码（1080p@30fps） |
| **散热形态** | 全高全长单宽 PCIe 卡，主动/被动散热（FH3/4L），ECC |
| **发布** | 2025-11-11（芯片 2025-09 量产） |
| **价格** | 未公开 |

> 📌 **口径说明（2026-09 交叉验证）**：INT8 320 TOPS / 128GB LPDDR5X / 145W / PCIe 5.0 取自江原官网产品页与发布会报道（电子发烧友、证券时报、中国日报），多源一致。**FP16/BF16 峰值算力官方未公布**，按「未公开不填估算」原则留空。INT8 320 TOPS 为双芯合计整卡值（单芯约 160 TOPS 量级，非官方口径，仅供参考）。

---

## 技术亮点

- **一卡双芯**：单插槽集成两颗芯片，直连通信省去 PCIe Switch，算力与存储密度翻倍、成本功耗更低
- **超大显存**：128-256GB LPDDR5X 专为千亿参数大模型推理设计（存储优先路线，弥补制程差距）
- **全栈自研软件**：自研软件栈 + 200+ 主流模型适配，从 GPU 迁移到 D10 只改一行代码、D10→D20 零改动
- **液冷一体机生态**：品高股份品原 AI Station（D20-S/D/D-Q 单/双/四卡）与 4U16 卡智算服务器（整机 5 POPS INT8、4TB 显存）

---

## 产品定位

江原科技成立于 2022 年 11 月：**D10**（2025 年 5 月量产，首款全国产全流程 AI 加速卡）→ **D20**（2025 年 11 月，一卡双芯）→ **T800**（旗舰训练芯片，2026 年量产）。主打政务、金融、医疗、轨交等私有化部署场景，与品高股份（688227）深度绑定落地一体机，Qwen 235B / DeepSeek 685B 已适配。

---

## 应用场景

- 大模型私有化推理（32B 单卡、671B 满血版一体机集群）
- 智算中心/云中心高并发推理（4TB 显存整机方案）
- 搜广推、计算机视觉、语音转写等多场景算法
- 信创环境部署（海光 CPU + 麒麟/欧拉 OS 认证）
- ❌ 大模型训练（D 系列为推理卡，训练待 T800）

---

## 相关卡

- [Enflame S60](/docs/cards/others/enflame-s60) — 同代国产推理卡对照
- [Iluvatar 智铠 100](/docs/cards/others/iluvatar-mr100) — 国产推理卡对照
- [Kunlun 昆仑芯 P800](/docs/cards/others/kunlun-p800) — 国产推理/训练对照
- [NVIDIA L4](/docs/cards/nvidia/l4) — 推理档位对标

## 参考资料

- [江原 D20 智能加速卡（官网产品页）](https://www.enrigin.com.cn/product/d20)
- [江原 D20 发布报道（电子发烧友）](https://www.elecfans.com)
- [品高股份品原一体机 PYD20（中国日报财经）](https://caijing.chinadaily.com.cn/a/202512/26/WS694e3b54a310942cc4998c42.html)
