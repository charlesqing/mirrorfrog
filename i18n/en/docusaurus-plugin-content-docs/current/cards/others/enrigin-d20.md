---
id: enrigin-d20
title: "ENRIGIN D20"
vendor: others
vendor_full: "ENRIGIN"
series: "ENRIGIN D series"
chip_id: "enrigin-d20"
release_date: "2025-11-11"
launch_price: "Undisclosed"
status: "Mass production"
description: "ENRIGIN D20 smart accelerator card: dual-chip AI inference card on a fully domestic supply chain — INT8 320 TOPS, 128GB LPDDR5X (Max variant 256GB), 145W, PCIe Gen5 x16. Launched November 2025; powers DeepSeek/Qwen large-model appliance deployments."
keywords: [ENRIGIN, D20, dual-chip, 320 TOPS, INT8, LPDDR5X, 128GB, PCIe 5.0, inference card, domestic supply chain, China AI chip]
---

# ENRIGIN D20

> ENRIGIN's new-generation fully domestic AI inference accelerator, launched November 2025. Uses a **dual-chip-per-card** architecture (two proprietary AI chips on a single PCIe card, connected via PCIe 5.0 bifurcation at 2×x8) with chip design, fabrication, and packaging all completed domestically — the first China-designed, China-fabricated, China-packaged cloud AI inference card to reach volume production. The D20 Max carries 256GB of memory, and appliance partners (Ping Gao's AI Station) run DeepSeek 671B at full capacity.

---

## Core Specifications

| Spec | Value |
|------|-------|
| **Architecture** | 2x ENRIGIN proprietary AI chips (dual-chip card, direct bifurcation interconnect) |
| **Process** | Undisclosed |
| **INT8** | 320 TOPS (whole-card, dual-chip combined) |
| **Precision support** | FP32 / TF32 / BF16 / FP16 / INT8 |
| **Memory** | 128 GB LPDDR5X |
| **Higher variants** | D20 Pro 128GB / D20 Max 256GB per card (4-card aggregate up to 1TB) |
| **Memory bandwidth** | Undisclosed |
| **TDP** | 145 W (whole card) |
| **Interface** | PCIe Gen5 x16 (2x x8 bifurcation, single slot) |
| **Video codec** | 256-decode / 40-encode channels (1080p@30fps) |
| **Cooling / form** | Full-height full-length single-slot PCIe card; active/passive cooling (FH3/4L); ECC |
| **Launch** | 2025-11-11 (chip in production since 2025-09) |
| **Price** | Undisclosed |

> 📌 **Sourcing note (2026-09 cross-validation)**: INT8 320 TOPS / 128GB LPDDR5X / 145W / PCIe 5.0 figures come from ENRIGIN's official product page and launch coverage (Elecfans, Securities Times, China Daily) — multiple sources in agreement. **FP16/BF16 peak compute is not officially published** and is left unlisted per the no-estimates policy. INT8 320 TOPS is the whole-card dual-chip figure (per-chip ≈160 TOPS is an inference, not an official figure, for reference only).

---

## Highlights

- **Dual chips per card**: two chips in a single slot with direct interconnect — no PCIe Switch needed — doubling compute and memory density while cutting cost and power
- **Massive memory**: 128-256GB LPDDR5X designed for hundred-billion-parameter model inference (memory-first strategy compensating for process-node gaps)
- **Full-stack software**: proprietary software stack with 200+ mainstream models; migrating from GPU to D10 requires a one-line change, and D10→D20 requires none
- **Liquid-cooled appliance ecosystem**: Ping Gao AI Station (single/dual/quad-card) and a 4U 16-card AI server (5 POPS INT8, 4TB memory per machine)

---

## Positioning

ENRIGIN was founded in November 2022: **D10** (volume production May 2025 — first fully domestic end-to-end AI accelerator) → **D20** (November 2025, dual-chip) → **T800** (flagship training chip, production 2026). It targets government, finance, healthcare, and rail-transit private deployments, with a deep appliance partnership with Ping Gao (688227); Qwen 235B and DeepSeek 685B are adapted.

---

## Use Cases

- Private large-model inference (32B on a single card; full 671B on appliance clusters)
- High-concurrency inference for AI data centers (4TB-memory server configurations)
- Search/ads/recommendation, computer vision, and speech-to-text workloads
- Xinchuang environments (Hygon CPU + Kylin/openEuler OS certifications)
- ❌ Large-model training (D series is inference-only; training awaits T800)

---

## Related Cards

- [Enflame S60](/docs/cards/others/enflame-s60) — same-generation domestic inference card comparison
- [Iluvatar Zhikai 100](/docs/cards/others/iluvatar-mr100) — domestic inference card comparison
- [Kunlun P800](/docs/cards/others/kunlun-p800) — domestic inference/training comparison
- [NVIDIA L4](/docs/cards/nvidia/l4) — inference-tier comparison

## References

- [ENRIGIN D20 product page (official)](https://www.enrigin.com.cn/product/d20)
- [ENRIGIN D20 launch coverage (Elecfans)](https://www.elecfans.com)
- [Ping Gao AI Station PYD20 appliances (China Daily Finance)](https://caijing.chinadaily.com.cn/a/202512/26/WS694e3b54a310942cc4998c42.html)
