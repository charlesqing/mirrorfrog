---
id: max-series
title: Intel Max Series (Ponte Vecchio)
sidebar_label: Intel Max Series
description: "Intel Max 1550/1350 (Ponte Vecchio) detailed specs: Xe-HPC architecture, 128GB HBM2e, 52.3 TFLOPS FP32, 600W TDP, Aurora supercomputer core."
keywords: [Intel Max 1550, Ponte Vecchio, Xe-HPC, Aurora supercomputer, Intel data center GPU]
---
 
# Intel Max Series (Ponte Vecchio)
 
## Overview
 
Intel Max Series (codenamed **Ponte Vecchio**) is Intel's flagship HPC GPU, built on the **Xe-HPC architecture**. The Max 1550 is packaged from 47 chiplets and serves as the core component of the Aurora supercomputer (the second exascale supercomputer in the US). Two models are available: Max 1550 (top-tier) and Max 1350 (mainstream).
 
## Core Specifications
 
| Item | Max 1550 | Max 1350 |
|------|----------|----------|
| **Architecture** | Xe-HPC (Ponte Vecchio) | Xe-HPC |
| **Process** | Intel 7 + TSMC 5nm + TSMC 7nm | Same |
| **Xe Cores** | 512 | 336 |
| **Memory** | **128 GB HBM2e** | 96 GB HBM2e |
| **Bandwidth** | **3,276.8 GB/s** | 2,457.6 GB/s |
| **FP32** | **52.3 TFLOPS** | 34.4 TFLOPS |
| **FP64** | 26.2 TFLOPS | 17.2 TFLOPS |
| **FP16 Matrix (XMX)** | 838 TFLOPS | 550 TFLOPS |
| **INT8 (XMX)** | 1,677 TOPS | 1,101 TOPS |
| **TDP** | **600 W** | 450 W |
| **Interconnect** | Xe Link, PCIe 5.0 | Xe Link, PCIe 5.0 |
| **Form Factor** | OAM | OAM |
 
## Vendor Information
 
| Item | Details |
|------|------|
| **Manufacturer** | Intel Corporation |
| **Website** | https://www.intel.com |
| **Product Page** | https://www.intel.com/content/www/us/en/products/details/discrete-gpus/data-center-gpu/max-series.html |
| **Driver** | https://www.intel.com/content/www/us/en/download/1934878.html |
| **oneAPI** | https://www.intel.com/content/www/us/en/developer/tools/oneapi/overview.html |
| **Release** | 2023 (Aurora deployment) |
 
## Key Features
 
- **47-chiplet package**: Includes compute, I/O, base, and HBM dies
- **Xe Link high-speed interconnect**: NVLink alternative
- **oneAPI programming model**: Unified across CPU/GPU
- **FP64 strength**: Important for traditional HPC
 
## Use Cases
 
- HPC scientific computing (strong FP64)
- Aurora supercomputer (second US exascale system)
- AI training
- Memory-bound workloads
 
## Related Comparisons
 
- [NVIDIA A100](/docs/cards/nvidia/a100) - Contemporary product
- [AMD MI250](/docs/cards/amd/mi250) - Direct HPC competitor
- [Intel Gaudi 3](/docs/cards/intel/gaudi-3) - Same-vendor next-gen
