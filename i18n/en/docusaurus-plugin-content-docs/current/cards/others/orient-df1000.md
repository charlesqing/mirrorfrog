---
id: orient-df1000
title: "Orient Silicon DF1000"
vendor: others
vendor_full: "Orient Silicon"
series: "DF"
chip_id: "orient-df1000"
release_date: "2026-07-13"
launch_price: "Undisclosed"
status: "Announced"
description: "Orient Silicon DF1000: the world's first software-defined near-memory 3D AI chip, delivering 520 TFLOPS BF16, 6.4TB/s near-memory bandwidth, and 900GB/s scale-up interconnect on a 14nm fully domestic supply chain — no HBM, no EUV dependency. Unveiled July 2026 in Shanghai."
keywords: [Orient Silicon, DF1000, 3D AI chip, near-memory computing, software-defined, 520 TFLOPS, BF16, 3D hybrid bonding, domestic supply chain, China AI chip]
---

# Orient Silicon DF1000

> The world's first **software-defined near-memory 3D AI chip**, unveiled in Shanghai on July 13, 2026. Built on 14nm mature process with a fully domestic supply chain (design → fabrication → 3D advanced packaging → test, all in China), it uses DRAM-Logic wafer-level hybrid bonding to break through the memory wall, bandwidth wall, and power wall — **with no HBM dependency and no need for EUV-class lithography**.

---

## Core Specifications

| Spec | Value |
|------|-------|
| **Architecture** | Software-defined near-memory computing (software-defined architecture + 3D-stacked DRAM-Logic hybrid bonding) |
| **Process** | 14nm (mature node + 3D advanced packaging in lieu of leading-edge process) |
| **BF16** | 520 TFLOPS (official launch figure) |
| **Memory** | Undisclosed (3D-stacked DRAM; HBM not required) |
| **Memory bandwidth** | 6.4 TB/s (near-memory access bandwidth) |
| **Interconnect** | 900 GB/s (scale-up) |
| **Precision support** | BF16 headline figure; other precision peaks undisclosed |
| **TDP** | Undisclosed |
| **Launch** | 2026-07-13 (Shanghai) |
| **Cluster validation** | 128-card cluster, fully functional stable operation |
| **Price** | Undisclosed |

> 📌 **Sourcing note (2026-09 cross-validation)**: BF16 520 TFLOPS / 6.4TB/s / 900GB/s / 14nm figures come from the July 13, 2026 launch coverage by CGTN, ZhiDongXi (Leiphone), Cailian Press, and Yicai (First Financial) — multiple independent sources in agreement, high confidence. Memory capacity and TDP were not disclosed; left unlisted per the no-estimates policy.

---

## Highlights

- **3D hybrid bonding**: DRAM-Logic wafer-level vertical stacking with sub-micron interconnect pitch, fundamentally bypassing HBM dependency
- **Software-defined architecture**: spatial parallelism plus time-division multiplexing of hardware resources raises utilization and reduces reliance on leading-edge process nodes
- **Fully domestic supply chain**: chip design, wafer fabrication, 3D packaging, and test all completed domestically
- **Full-stack product matrix**: DF1000 accelerator card, TY64 supernode (33 PFLOPS BF16 per node), QY100 8-card server, and HS512 AI cluster

---

## Positioning

Orient Silicon (Shanghai Orient Computing Core Technology Co., Ltd.) was founded in May 2024, headquartered in Zhangjiang, Shanghai, by Dr. Wei Shaojun — former director of Tsinghua University's Institute of Microelectronics and chair of the IC Design branch of the China Semiconductor Industry Association. The company closed an A+ round in April 2026 at a post-money valuation of RMB 12.275 billion. The DF1000 represents the domestic "advanced packaging + architecture innovation" route as an alternative to advanced process nodes. Roadmap: **DF2000 in Q4 2026 (2x performance), DF3000 in Q4 2027**.

---

## Use Cases

- Large-model training and inference (520 TFLOPS BF16, validated on a 128-card cluster)
- AI data center builds (HS512 cluster solution)
- Government/enterprise deployments with strict supply-chain sovereignty requirements
- ❌ Workloads requiring mature out-of-the-box software ecosystems (self-developed stack, maturity to be observed)

---

## Related Cards

- [Zhonghao XuYu TPU](/docs/cards/others/zhonghao-tpu) — fellow novel-architecture card (all-optical supernode)
- [Huawei Ascend 910C](/docs/cards/huawei/ascend-910c) — domestic training flagship comparison
- [NVIDIA H100](/docs/cards/nvidia/h100) — international flagship comparison
- [Cerebras WSE-3](/docs/cards/cerebras/wse-3) — wafer-scale architecture comparison

## References

- [Orient Silicon unveils DF1000 3D AI chip (CGTN)](https://news.cgtn.com/news/2026-07-13/Orient-Silicon-unveils-DF1000-3D-AI-chip-in-Shanghai-1OKpuMTIMXC/p.html)
