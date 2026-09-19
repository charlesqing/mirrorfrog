---
id: enflame-s60
title: "Enflame CloudBlaze S60"
vendor: others
vendor_full: "Enflame"
series: "CloudBlaze"
chip_id: "enflame-s60"
release_date: "2024-03-01"
launch_price: "Not disclosed"
status: "Mass production"
description: "Enflame CloudBlaze S60 official specs: 48GB memory, 672 GB/s bandwidth, PCIe Gen5 x16, maximum power 300W, supports FP32/FP16/BF16/INT8, built for large-model inference with full DeepSeek model adaptation."
---

# Enflame CloudBlaze S60

> Enflame's third-generation AI inference accelerator, based on the self-developed GCU320 (Suiyuan 320) chip, released in March 2024, with a maximum power of 300W, targeting large-scale data center deployment and large-model inference (full-spec DeepSeek all-in-one appliance solutions).

---

## Core Specifications

| Specification | Value |
|------|------|
| **Architecture** | GCU320 (Suiyuan 320) |
| **Process** | Not disclosed |
| **TDP** | 300 W (official product manual, maximum power) |
| **Memory** | **48 GB** (official product manual) |
| **Memory Bandwidth** | **672 GB/s** (official product manual) |
| **Precision Support** | FP32 / FP16 / BF16 / INT8 (peak per-precision compute not published by the vendor) |
| **Interface** | PCIe Gen5 x16, full-height full-length dual-slot |
| **Video Decode** | Up to 256 channels |
| **ECC / Security** | ECC, Secure Boot, SR-IOV (4 VF) |
| **Release** | 2024-03 |
| **Price** | Not disclosed |

> 📌 **Data correction (2026-09 cross-validation)**: This page previously recorded "1.6 TB/s bandwidth / FP16 100 TFLOPS (estimated)", which does not match the official manual. Enflame's official S60 product manual confirms: **48GB memory, 672 GB/s, PCIe Gen5 x16, maximum power 300W, support for FP32/FP16/BF16/INT8**, but does not publish peak per-precision compute — corrected per the "no estimates when undisclosed" principle.

---

## Technical Highlights

- **Third-generation inference card**: Based on the Suiyuan 320 (GCU320) chip, Enflame's third-generation AI inference product
- **Large-model inference optimization**: Optimized for large language model inference scenarios such as LLaMA and DeepSeek; the vendor offers an all-in-one appliance supporting the full 671B model
- **Search/ads/recommendation support**: Sustains tens of billions of daily calls for Tencent's search, ads, and recommendation workloads (per the IPO prospectus)
- **Easy migration**: Broad model coverage and strong usability, supporting smooth migration from NVIDIA GPUs
- **High-density deployment**: Maximum power 300W with passive air cooling, suitable for large-scale data center deployment

---

## Product Positioning

The CloudBlaze S60 is Enflame's new-generation AI inference accelerator for large-scale data center deployment, targeting the NVIDIA L4/L40. As a third-generation product, the S60 significantly improves on memory capacity (48GB) and video decoding (256 channels) over the previous-generation CloudBlaze i20 (16GB), and is a representative product of Enflame's "card–model–system" closed loop (full DeepSeek model adaptation).

---

## Application Scenarios

- Large language model inference (LLaMA, DeepSeek, ChatGLM, etc.)
- Search, advertising, and recommendation system inference
- Computer vision inference (CV, 256-channel video decode)
- Natural language processing inference (NLP)
- Large-scale data center inference deployment

---

## Reference Price

- Official pricing: Not disclosed

---

## Related Products

- [CloudBlaze T20](/docs/cards/others/enflame-t20) — Second-generation training card
- [CloudBlaze T21](/docs/cards/others/enflame-t21) — Second-generation training card (OAM)
- [CloudBlaze i20](/docs/cards/others/enflame-i20) — Second-generation inference card
- [Enflame L600](/docs/cards/others/enflame-l600) — Fourth-generation unified training/inference chip

---

## References

- [Enflame S60 product page — Enflame](https://www.enflame-tech.com/product-technologies/s60)
- [Enflame S60 — Baidu Baike](https://baike.baidu.com/item/%E7%87%A7%E5%8E%9FS60/67341897)
- [70,000 cards deployed! Why Enflame S60 becomes the "top" of domestic AI computing power? — EE Focus](https://www.eefocus.com/article/1870798.html)
- [Enflame S60 product manual — Enflame Hardware Documentation Center](https://support.enflame-tech.com/onlinedoc_hw/5-s6x/S60/product_manual/)
