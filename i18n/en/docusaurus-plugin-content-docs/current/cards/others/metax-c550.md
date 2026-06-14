---
id: metax-c550
title: "MetaX XiYun C550"
vendor: others
vendor_full: "MetaX"
series: "XiYun"
chip_id: "metax-c550"
release_date: "2024-06-01"
launch_price: "Not disclosed"
status: "Mass production"
---

# MetaX XiYun C550

> MetaX Integrated Circuit's iterative upgrade model based on XiYun C500, released in 2024, FP16 peak compute 22.4 TFLOPS, memory bandwidth ~1600–1800 GB/s, performance targeting international mainstream AI training cards.

---

## Core Specifications

| Specification | Value |
|--------------|-------|
| **Architecture** | XCORE 1.0 (XiYun architecture, C500 iteration) |
| **Process** | 7 nm (estimated) |
| **TDP** | 300 W (estimated) |
| **Memory** | 64 GB HBM2e (same as C500) |
| **Memory Bandwidth** | ~1600–1800 GB/s |
| **FP32 Compute** | 15 TFLOPS (same as C500, estimated) |
| **FP16 / BF16 Compute** | **22.4 TFLOPS** |
| **INT8 Compute** | 44.8 TOPS (estimated) |
| **Interface** | PCIe 4.0 x16 (estimated) |
| **Interconnect** | MetaXLink (estimated) |
| **Release** | 2024-06 (estimated) |
| **Price** | Not disclosed (estimated ¥45,000) |

---

## Technical Highlights

- **C500 iterative upgrade**: Improved FP16 compute to 22.4 TFLOPS based on C500
- **Ultra-high memory bandwidth**: ~1600–1800 GB/s, close to A100 level
- **Multi-precision mixed compute**: Supports FP32/FP16/BF16/INT8
- **MetaXLink interconnect**: Supports multi-card expansion, building large-scale training clusters
- **MXMACA software stack**: CUDA ecosystem compatible, reducing migration costs

---

## Product Positioning

XiYun C550 is MetaX's iterative upgrade model based on C500, FP16 compute improved by ~49% (15→22.4 TFLOPS), memory bandwidth also significantly improved. Targeting NVIDIA A100 40GB, focusing on AI training and inference scenarios.

---

## Application Scenarios

- AI model training (CV, NLP, multimodal)
- Large model pre-training and fine-tuning
- Scientific computing and simulation
- Data center AI computing infrastructure
- Domestic A100 replacement scenarios

---

## Comparison with C500

| Metric | XiYun C500 | XiYun C550 | Improvement |
|--------|--------------|----------------|-------------|
| **FP16 Compute** | 15 TFLOPS | **22.4 TFLOPS** | +49% |
| **Memory Bandwidth** | ~1200 GB/s | ~1600–1800 GB/s | +33–50% |
| **Release Time** | 2023 | 2024 | Iteration |
| **Price** | ~¥38,900 | Not disclosed | — |

---

## Reference Price

| Channel | Price | Description |
|---------|-------|-------------|
| Official pricing | Not disclosed | Released in 2024, estimated ¥40,000–50,000/card |
| Channel estimate | ≈ ¥45,000 | Estimated based on C500 pricing ratio |

---

## Related Products

- [XiYun C500](./metax-c500) — First training-inference integrated GPU
- [XiYun C588](./metax-c588) — Flagship iterative model
- [XiYun C600](./metax-c600) — Fully domestic version

---

## References

- [What are the specific parameters of MetaX C550 chip's FP16 compute and memory bandwidth? — CSDN Q&A](https://ask.csdn.net/questions/9676882)
- [Pure domestic GPU performance comparison, who is the king of domestic computing power? — Zhihu](https://zhuanlan.zhihu.com/p/1952634570550780313)
- [XiYun C Series GPU — Baidu Baike](https://baike.baidu.com/item/%E6%9B%A6%E4%BA%91C%E7%B3%BB%E5%88%97GPU/67620459)
