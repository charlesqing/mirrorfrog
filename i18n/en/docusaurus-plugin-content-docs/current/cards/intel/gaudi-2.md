---
id: gaudi-2
title: Intel Gaudi 2
sidebar_label: Intel Gaudi 2
description: "Intel Gaudi 2 detailed specs: 96GB HBM2e, 432 TFLOPS BF16, 600W TDP, 24x 100GbE integrated NIC, Habana Labs training accelerator."
keywords: [Intel Gaudi 2, Habana, HBM2e, training ASIC, AI training accelerator]
---
 
# Intel Gaudi 2 (Habana Labs)
 
## Overview
 
Intel Gaudi 2, developed by Intel-acquired **Habana Labs**, is a dedicated accelerator for deep learning training and inference. Its biggest feature is the integrated **24x 100GbE RDMA** NICs, eliminating the need for separate InfiniBand or Ethernet cards for large-scale distributed training clusters. Gaudi 2 performance rivals NVIDIA H100, **at a better price**.
 
## Core Specifications
 
| Item | Spec |
|------|------|
| **Architecture** | Gaudi 2 (Habana custom) |
| **Process** | TSMC 7nm |
| **Compute Engines** | 24x TPC (Tensor Processor Core) |
| **Matrix Engines** | 2x MME (Matrix Multiplication Engine) |
| **Memory** | 96 GB HBM2e |
| **Memory Bandwidth** | 2.46 TB/s |
| **FP32** | N/A (inference path) |
| **BF16/FP16** | 432 TFLOPS |
| **FP8** | 865 TFLOPS (AMD estimate) |
| **INT8** | 865 TOPS |
| **TDP** | 600 W |
| **Networking** | **24x 100GbE RDMA** (integrated NIC) |
| **PCIe** | Gen 4 x16 |
| **Form Factor** | OAM (HL-225H) / PCIe |
 
## Vendor Information
 
| Item | Details |
|------|------|
| **Manufacturer** | Intel Corporation (Habana Labs) |
| **Website** | https://habana.ai |
| **Product Page** | https://habana.ai/products/gaudi2/ |
| **Driver/SDK** | https://developer.habana.ai/downloads/ |
| **SynapseAI SDK** | https://developer.habana.ai/ |
 
## Key Features
 
- **Integrated 24x 100GbE NICs**: No need for separate InfiniBand
- **TPC + MME heterogeneous compute**: Flexible matrix and vector operations
- **OpenEthernet standard**: Avoids vendor lock-in
- **MLPerf benchmark validated**: Strong H100 alternative
 
## Use Cases
 
- LLM training (tens to hundreds of billions of parameters)
- Large-scale distributed training clusters
- Multimodal AI
 
## Related Comparisons
 
- [Intel Gaudi 3](/docs/cards/intel/gaudi-3) - Successor
- [NVIDIA H100](/docs/cards/nvidia/h100) - Contemporary competitor
- [AMD MI300X](/docs/cards/amd/mi300x) - Memory advantage
