---
id: enflame-i10
title: "Enflame CloudBlaze i10"
vendor: others
vendor_full: "Enflame"
series: "CloudBlaze"
chip_id: "enflame-i10"
release_date: "2020-12-21"
launch_price: "Not disclosed"
status: "Mass production"
---

# Enflame CloudBlaze i10

> Enflame's first AI inference accelerator, based on self-developed Suisi 1.0 chip, released in December 2020, single-slot design, targeting cloud AI inference scenarios.

---

## Core Specifications

| Specification | Value |
|--------------|-------|
| **Architecture** | Suisi 1.0 (DTU dataflow architecture) |
| **Process** | GF 12nm FinFET |
| **TDP** | 150 W |
| **Memory** | 16 GB HBM2 (estimated) |
| **Memory Bandwidth** | 512 GB/s (estimated) |
| **FP32 Compute** | 17.6 TFLOPS |
| **FP16 / BF16 Compute** | 70.4 TFLOPS |
| **INT8 Compute** | 140.8 TOPS (estimated) |
| **Interface** | PCIe 4.0 x16, **single-slot** |
| **Launch Date** | 2020-12-21 |
| **Price** | Not disclosed (estimated ¥25,000) |

---

## Technical Highlights

- **Single-slot design**: One of the few high-performance AI inference cards with single-slot design, allowing 8 cards to be deployed in 1U servers, significantly improving inference density
- **Suisi 1.0 chip**: Same chip as CloudBlaze T10, optimized software stack for inference scenarios
- **TopsInference engine**: Companion TopsInference acceleration engine supporting INT8/FP16 mixed-precision inference
- **Multi-scenario coverage**: Suitable for computer vision, natural language processing, speech recognition and synthesis, knowledge graph and other inference scenarios
- **High-density deployment**: Single-slot design enables 1U servers to configure 8 i10 cards, greatly improving inference throughput

---

## Product Positioning

CloudBlaze i10 is the inference product in Enflame's "training + inference" product matrix. Its single-slot high-density design is its biggest feature. It targets NVIDIA T4 and focuses on cloud AI inference scenarios.

---

## Application Scenarios

- Cloud AI inference services (CV, NLP, ASR/TTS)
- Internet recommendation system inference
- Smart city video analytics
- Financial real-time risk control inference
- Edge inference servers

---

## Reference Price

| Channel | Price | Description |
|---------|-------|-------------|
| Official pricing | Not disclosed | Released in 2020, estimated ¥25,000/card |
| Channel estimate | ≈ ¥20,000–30,000 | Estimated based on T4 pricing ratio |

---

## Related Products

- [CloudBlaze T10](/docs/cards/others/enflame-t10) — Concurrent training card
- [CloudBlaze i20](/docs/cards/others/enflame-i20) — Second-generation inference card (Suisi 2.0)
- [CloudBlaze T20](/docs/cards/others/enflame-t20) — Second-generation training card

---

## References

- [CloudBlaze i10 product page — Enflame](https://www.enflame-tech.com/product-technologies/i10)
- [Enflame releases AI inference card "CloudBlaze i10" — 36Kr](https://36kr.com/p/1020274791925001)
- [CloudBlaze i10 — Baidu Baike](https://baike.baidu.com/item/%E4%BA%91%E7%87%A7i10/59760275)
