---
id: gaudi-1
title: Intel Gaudi 1 (Habana 1st Generation)
sidebar_label: Gaudi 1
description: "Intel Gaudi 1 detailed specs: Habana Labs 1st-gen training card, V100-class performance, cost-effective choice."
keywords: [Intel Gaudi 1, Habana Labs, HL-2000, V100 alternative, cost-effective]
---
 
# Intel Gaudi 1 (Habana Labs 1st Generation)
 
## Overview
 
**Intel Gaudi 1** (HL-2000) is the **first-generation AI training accelerator** launched by **Habana Labs** (acquired by Intel in 2019). Released in 2020, it is positioned as a **low-cost alternative to NVIDIA V100**.
 
## Core Specifications
 
| Item | Spec |
|------|------|
| **Architecture** | Habana Goya (training) |
| **Process** | TSMC 16nm |
| **TPC (Tensor Processor Cores)** | 2 x matrix multiplication engines |
| **GEMM Engine** | Integrated 8x 1024-bit MAC |
| **Memory** | 32 GB HBM2 |
| **Memory Bandwidth** | 1 TB/s |
| **FP16 Compute** | 270 TFLOPS (dense) / 540 TFLOPS (sparse) |
| **INT8** | 270 TOPS |
| **Interconnect** | **RoCE v2 100 GbE** (10 x 100GbE ports) |
| **TDP** | 250 W |
| **Interface** | PCIe Gen4 x16 |
| **Launch Price** | $8,000-$10,000 |
 
## Gaudi 1 vs V100 vs A100
 
| Metric | Gaudi 1 | V100 32GB | A100 40GB |
|------|---------|-----------|-----------|
| Architecture | Goya | Volta | Ampere |
| Process | 16nm | 12nm | 7nm |
| Memory | 32GB HBM2 | 32GB HBM2 | 40GB HBM2e |
| Bandwidth | 1 TB/s | 900 GB/s | 1.6 TB/s |
| FP16 | 270/540 TFLOPS | 125/250 TFLOPS | 312/624 TFLOPS |
| TDP | 250W | 250W | 300W |
| Interconnect | **10x 100GbE** | NVLink 2.0 | NVLink 3.0 |
| Price (Launch) | $8,000 | $8,000 | $11,000 |
 
## Unique Advantage: RoCE Interconnect
 
- **10 x 100 GbE RoCE v2 ports** (1,000 Gbps aggregate)
- **Standard Ethernet**, no proprietary NVLink required
- Multi-node training scaling **cheaper than NVLink**
- Advantageous for large-scale training clusters
 
## Software Ecosystem
 
- **SynapseAI SDK** (Habana proprietary)
- **TensorFlow / PyTorch** (officially supported)
- **ONNX** (conversion tools)
- Performance initially below NVIDIA, but **outstanding cost-effectiveness**
 
## Use Cases
 
- ✅ **Cost-effective AI training** (V100-class performance, half the price)
- ✅ Large-scale multi-node training (RoCE advantage)
- ✅ Recommendation systems / NLP training
- ❌ Inference (use Gaudi 2/3 instead)
- ❌ Mainstream ecosystem (PyTorch perf < NVIDIA)
 
## Vendor Information
 
| Item | Details |
|------|------|
| **Vendor** | Intel (Habana Labs) |
| **Product Page** | https://www.intel.com/content/www/us/en/products/details/processors/ai-accelerators/gaudi.html |
| **Pricing** | $8,000-$10,000 (discontinued, see Gaudi 2/3) |
| **Target Market** | Cost-effective training, HPC |
 
## Related Cards
 
- [Intel Gaudi 2](/docs/cards/intel/gaudi-2) - 2nd generation
- [Intel Gaudi 3](/docs/cards/intel/gaudi-3) - Latest
- [NVIDIA A100](/docs/cards/nvidia/a100) - Same-gen comparison
- [Google TPU v4](/docs/cards/google/tpu-v4) - Same-gen TPU
