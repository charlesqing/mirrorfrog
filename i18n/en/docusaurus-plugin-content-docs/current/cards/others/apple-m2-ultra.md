---
id: apple-m2-ultra
title: Apple M2 Ultra (192GB UMA Unified Memory)
sidebar_label: M2 Ultra
description: "Apple M2 Ultra detailed specifications: 24-core CPU, 76-core GPU, 192GB UMA, 800 GB/s, 31.6 TOPS NE, UltraFusion 2.5 TB/s, Mac Studio / Mac Pro 2023."
keywords: [Apple M2 Ultra, M2 Ultra, 76-core GPU, 192GB UMA, 800 GB/s, UltraFusion, Mac Studio, Mac Pro]
---

# Apple M2 Ultra (192GB Unified Memory)

## Overview

**Apple M2 Ultra** is Apple Silicon's **2nd-generation Ultra flagship**, released **2023-06** in the **Mac Studio 2023** and **Mac Pro 2023**. It merges two M2 Max dies into a single chip via **UltraFusion 2.5 TB/s interconnect**, delivering **192GB unified memory**, **800 GB/s bandwidth**, 24-core CPU (16P+8E), 76-core GPU, and 32-core Neural Engine (31.6 TOPS). It was the **final Intel-free Mac Pro** and the most powerful Apple Silicon chip before M3 Ultra.

## Core Specifications

| Item | Parameter |
|------|-----------|
| **Architecture** | Apple Silicon (M2 Max x2, UltraFusion 2.5 TB/s) |
| **Process** | TSMC 5nm (N5P) |
| **Transistors** | 134 billion |
| **CPU Cores** | 24 (16P + 8E) |
| **GPU Cores** | 76 |
| **Neural Engine** | 32-core, 31.6 TOPS |
| **Unified Memory** | 64GB / 128GB / 192GB LPDDR5 |
| **Memory Bandwidth** | 800 GB/s |
| **FP32 GPU** | ~27.2 TFLOPS |
| **FP16 GPU** | ~54.4 TFLOPS |
| **Media Engine** | Hardware H.264/HEVC/ProRes |
| **TDP** | 100-215W |
| **Mac Studio M2 Ultra 192GB** | $5,499 (2023-06 launch) |
| **Mac Pro M2 Ultra 192GB** | $7,499 |
| **Discontinued** | 2024-10 (M4 Max/Ultra launch) |

## Comparison with M1 Ultra

| Metric | M2 Ultra | M1 Ultra | Improvement |
|--------|----------|----------|-------------|
| Process | 5nm (N5P) | 5nm | 2nd-gen 5nm |
| CPU Cores | 24 (16P+8E) | 20 (16P+4E) | +20% |
| GPU Cores | 76 | 64 | +19% |
| Neural Engine | 31.6 TOPS | 22 TOPS | +44% |
| Memory | 192GB | 128GB | +50% |
| Bandwidth | 800 GB/s | 800 GB/s | Same |

## LLM Inference Performance

| Model | Quantization | Performance (tok/s) |
|------|------|--------|
| Llama 2 70B | Q4_K_M | ~8 tok/s |
| Llama 2 13B | Q4_K_M | ~22 tok/s |
| Mixtral 8x7B | Q4_K_M | ~18 tok/s |
| Falcon 40B | Q4_K_M | ~10 tok/s |

## Vendor Information

| Item | Details |
|------|------|
| **Vendor** | Apple Inc. |
| **Product** | Mac Studio 2023 + Mac Pro 2023 |
| **Mac Studio M2 Ultra 192GB** | $5,499 |
| **Mac Pro M2 Ultra 192GB** | $7,499 |
| **Discontinued** | 2024-10 |

## Use Cases

- Local 70B LLM inference (192GB UMA, quantized)
- 8K video editing (ProRes RAW hardware acceleration)
- 3D rendering (Blender Cycles, Octane, Maya)
- On-device AI development (MLX, llama.cpp)
- Music production (Logic Pro + Dolby Atmos)

## Key Features

- **192GB UMA**: largest consumer unified memory at launch
- **UltraFusion 2.5 TB/s**: dual die seamless integration
- **76-core GPU**: leading consumer graphics
- **31.6 TOPS NE**: 2nd-gen Neural Engine
- **800 GB/s**: top-tier consumer bandwidth
- **Drawbacks**: Discontinued, no FP8 support

## Related Cards

- [Apple M1 Ultra](/docs/cards/others/apple-m1-ultra) - Previous generation
- [Apple M2 Max](/docs/cards/others/apple-m2-max) - Single-die version
- [Apple M3 Ultra](/docs/cards/others/apple-m3-ultra) - Next generation
- [Apple M4 Ultra (estimated)](/docs/cards/others/apple-m4-ultra) - 2025 rumored
- [Apple M-Series Overview](/docs/cards/others/apple-m-series) - Full series
- [NVIDIA RTX 4090](/docs/cards/nvidia/rtx-4090) - Consumer comparison
