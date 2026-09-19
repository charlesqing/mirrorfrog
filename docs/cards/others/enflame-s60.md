---
id: enflame-s60
title: "燧原科技 云燧 S60"
vendor: others
vendor_full: "Enflame"
series: "云燧"
chip_id: "enflame-s60"
release_date: "2024-03-01"
launch_price: "未公开"
status: "量产"
description: "燧原科技 云燧 S60 官方规格：48GB 显存、672 GB/s 带宽、PCIe Gen5 x16、最大功耗 300W，支持 FP32/FP16/BF16/INT8，面向大模型推理，DeepSeek 全量模型适配。"
---

# 燧原科技 云燧 S60

> 燧原科技第三代人工智能推理加速卡，基于自研 GCU320（邃思320）芯片，2024年3月发布，最大功耗 300W，面向数据中心大规模部署与大模型推理（DeepSeek 满血版一体机方案）。

---

## 核心规格

| 规格 | 参数 |
|------|------|
| **架构** | GCU320（邃思320） |
| **制程** | 未公开 |
| **TDP** | 300 W（官方产品手册，最大功耗） |
| **显存** | **48 GB**（官方产品手册） |
| **显存带宽** | **672 GB/s**（官方产品手册） |
| **精度支持** | FP32 / FP16 / BF16 / INT8（官方未公布各精度峰值算力） |
| **接口** | PCIe Gen5 x16，全高全长双槽位 |
| **视频解码** | 最高 256 路 |
| **ECC / 安全** | ECC、Secure Boot、SR-IOV（4 VF） |
| **发布** | 2024-03 |
| **价格** | 未公开 |

> 📌 **数据订正（2026-09 交叉验证）**：本页此前记「1.6 TB/s 带宽 / FP16 100 TFLOPS（预估）」与官方手册不符。燧原官方 S60 产品手册实锤：**48GB 显存、672 GB/s、PCIe Gen5 x16、最大功耗 300W、支持 FP32/FP16/BF16/INT8**，但未公布各精度峰值算力——已按「未公开不填估算」原则修正。

---

## 技术亮点

- **第三代推理卡**：基于邃思320（GCU320）芯片，是燧原科技第三代AI推理产品
- **大模型推理优化**：专为 LLaMA、DeepSeek 等大语言模型推理场景优化，官方推出支持满血版 671B 的大模型一体机
- **搜广推支持**：支撑腾讯搜广推日均百亿次调用（招股书口径）
- **易迁移**：模型覆盖面广、易用性强，支持从 NVIDIA GPU 平滑迁移
- **高密度部署**：最大功耗 300W，风冷被动散热，适合大规模数据中心部署

---

## 产品定位

云燧S60是燧原科技面向数据中心大规模部署的新一代AI推理加速卡，对标NVIDIA L4/L40。作为第三代产品，S60 在显存容量（48GB）与视频解码（256 路）上显著优于上一代云燧 i20（16GB），是燧原"卡—模型—整机"闭环（DeepSeek 全量模型适配）的代表产品。

---

## 应用场景

- 大语言模型推理（LLaMA、DeepSeek、ChatGLM等）
- 搜索、广告、推荐系统推理
- 计算机视觉推理（CV，256 路视频解码）
- 自然语言处理推理（NLP）
- 数据中心大规模推理部署

---

## 参考价格

- 官方定价：未公开

---

## 相关产品

- [云燧 T20](/docs/cards/others/enflame-t20) — 第二代训练卡
- [云燧 T21](/docs/cards/others/enflame-t21) — 第二代训练卡（OAM）
- [云燧 i20](/docs/cards/others/enflame-i20) — 第二代推理卡
- [燧原 L600](/docs/cards/others/enflame-l600) — 第四代训推一体芯片

---

## 参考资料

- [燧原S60产品页 — 燧原科技](https://www.enflame-tech.com/product-technologies/s60)
- [燧原S60 — 百度百科](https://baike.baidu.com/item/%E7%87%A7%E5%8E%9FS60/67341897)
- [7万卡落地！燧原S60凭什么成国产AI算力"顶流"？ — 与非网](https://www.eefocus.com/article/1870798.html)
- [燧原S60产品手册 — 燧原硬件文档中心](https://support.enflame-tech.com/onlinedoc_hw/5-s6x/S60/product_manual/)
