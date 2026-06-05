---
id: trainium-2
title: AWS Trainium 2 (Trn2)
sidebar_label: AWS Trainium 2
description: "AWS Trainium 2 detailed specifications: 96GB HBM, 1,299 FP8 TFLOPS, 8× NeuronCore-v3, 2.9 TB/s bandwidth, GA December 2024."
keywords: [AWS Trainium 2, Trainium2, NeuronCore-v3, Trn2 instances, Trn2 UltraServer]
---

# AWS Trainium 2 (Trn2)

## Overview

AWS Trainium 2 reached GA on **December 3, 2024** at re:Invent 2024, as the second-generation AWS custom AI training chip. **Performance is 4× the first generation**, delivering **1,299 TFLOPS FP8** (dense) / 2,563 TFLOPS (sparse), **96GB HBM** capacity, and **2.9 TB/s bandwidth**. Trn2 instances contain **16 Trainium2 chips**. Trn2 UltraServer connects 4 instances via NeuronLink, forming **64 chips**.

## Core Specifications

| Item | Specification |
|------|------|
| **Architecture** | Trainium2 (NeuronCore-v3) |
| **Process Node** | TSMC 4nm (estimated) |
| **NeuronCore** | 8 per chip (NeuronCore-v3) |
| **Memory** | **96 GB HBM** (3× 1st gen) |
| **Memory Bandwidth** | **2.9 TB/s** (3.6× 1st gen) |
| **FP8 Compute** | **1,299 TFLOPS** (dense) / 2,563 (sparse) |
| **BF16/FP16/TF32** | 667 TFLOPS |
| **FP32** | 181 TFLOPS |
| **TDP** | ~700 W |
| **NeuronLink** | NeuronLink-v3 (1.28 TB/s bidirectional) |
| **DMA Bandwidth** | 3.5 TB/s |

## Trainium 1 vs Trainium 2

| Metric | Trainium 1 | Trainium 2 | Improvement |
|------|------------|------------|------|
| Process | 7nm | 4nm | — |
| NeuronCore | 32 per chip | 8 per chip | Simplified |
| HBM Capacity | 32 GB | 96 GB | **3×** |
| HBM Bandwidth | 0.8 TB/s | 2.9 TB/s | **3.6×** |
| FP8 Compute | 191 TFLOPS | 1,299 TFLOPS | **6.7×** |
| BF16/FP16 | 191 TFLOPS | 667 TFLOPS | **3.4×** |
| FP32 | 48 TFLOPS | 181 TFLOPS | **3.7×** |

## Trn2 Instances and UltraServer

| Form Factor | Configuration | Compute |
|------|------|------|
| **Trn2.48xlarge** | 16 Trainium2 | 20.8 FP8 PFLOPS |
| **Trn2 UltraServer** | 64 Trainium2 (4× Trn2) | **83.2 FP8 PFLOPS** |
| **Project Rainier** | Hundreds of thousands of Trainium2 (Anthropic) | 5× Anthropic current |

## Vendor Information

| Item | Details |
|------|------|
| **Manufacturer** | Amazon (Annapurna Labs) |
| **Official Website** | https://aws.amazon.com/machine-learning/trainium/ |
| **Product Page** | https://aws.amazon.com/ec2/instance-types/trn2/ |
| **SDK** | https://awsdocs-neuron.readthedocs-hosted.com/ |
| **Release** | December 3, 2024 GA |

## Key Features

- **Logical NeuronCore Configuration (LNC)**: Multiple physical cores merged into logical cores
- **NeuronLink 2D Torus**: Low latency, high bandwidth
- **30-40% price-performance** advantage vs EC2 P5e/P5en (H100)
- **EFAv3 Interconnect**: 3.2 Tbps
- **UltraServer 64 chips**: Trillion-parameter training

## Use Cases

- LLM training (100B to trillion parameters)
- Large-scale inference
- Training + inference fungible

## Related Products

- [AWS Trainium 1](/docs/cards/aws/trainium) - Previous generation
- [NVIDIA H100](/docs/cards/nvidia/h100) - Contemporary
- [NVIDIA B200](/docs/cards/nvidia/b200) - Same generation
- [AMD MI300X](/docs/cards/amd/mi300x) - Similar memory
