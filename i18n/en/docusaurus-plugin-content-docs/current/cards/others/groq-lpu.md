---
id: groq-lpu
title: Groq LPU
sidebar_label: Groq LPU
description: "Groq LPU (Language Processing Unit) detailed specs: ~1,000 TOPS INT8 estimated, 228MB SRAM, deterministic low-latency LLM inference."
keywords: [Groq LPU, Language Processing Unit, LLM inference, low latency, GroqCloud]
---
 
# Groq LPU (Language Processing Unit)
 
## Overview
 
Groq LPU (Language Processing Unit) is Groq's proprietary **deterministic LLM inference processor**, renowned for its **extremely low inference latency** (LLM token generation measured in milliseconds). It employs a **compiler-defined hardware** architecture: no cache misses, no out-of-order execution, all latency predictable. **GroqCloud** provides API services.
 
## Core Specifications (GroqChip v1)
 
| Item | Spec |
|------|------|
| **Architecture** | Tensor Streaming Processor (TSP) |
| **Process** | TSMC 14nm |
| **On-chip SRAM** | 228 MB |
| **INT8 Compute (est.)** | 1,000 TOPS |
| **FP16** | 188 TFLOPS (official) |
| **Interconnect** | GroqSync (deterministic interconnect) |
| **TDP** | 300 W (system-level) |
| **Form Factor** | GroqRack (8 GroqChips) |
 
## Vendor Information
 
| Item | Details |
|------|------|
| **Manufacturer** | Groq Inc. |
| **Website** | https://groq.com |
| **Product Page** | https://groq.com/products/ |
| **API Console** | https://console.groq.com |
| **SDK** | https://github.com/groqcloud |
| **Documentation** | https://docs.groq.com |
 
## Key Features
 
- **Deterministic architecture**: All execution predictable
- **Ultra-low latency**: LLM inference 5-10x faster than GPU
- **Compiler-driven**: Software-defined hardware
- **Streaming tensor architecture**
 
## Use Cases
 
- **Real-time LLM inference** (Chatbot, Code assistant)
- Low-latency AI services
- GroqCloud API (per-token billing)
 
## Related Comparisons
 
- [NVIDIA H100 / H200](/docs/cards/nvidia/h200) - Mainstream inference
- [AWS Inferentia 2](/docs/cards/aws/inferentia-2) - Cloud inference
- [SambaNova SN40L](/docs/cards/others/sambanova-sn40l) - Another innovative architecture
