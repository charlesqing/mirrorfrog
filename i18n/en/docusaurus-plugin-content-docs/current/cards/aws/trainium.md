---
id: trainium
title: AWS Trainium (First Generation)
sidebar_label: AWS Trainium
description: "AWS Trainium detailed specs: 32GB HBM, 191 TFLOPS FP8, 32 NeuronCore v2, AWS custom AI training ASIC."
keywords: [AWS Trainium, NeuronCore, Trainium1, Trn1 instances, AI training ASIC]
---

# AWS Trainium (First Generation)

## Overview

AWS Trainium is an AI training ASIC designed by Amazon Annapurna Labs, launched in 2021. The **first generation** is available through Trn1 instances with **16 Trainium1 chips** per instance. Each chip contains **32 GB HBM** and delivers **191 TFLOPS FP8 compute**. The Trn1 32xlarge integrates 512 NeuronCore v2 cores.

## Core Specifications

| Item | Spec |
|------|------|
| **Architecture** | Trainium (first generation) |
| **NeuronCore** | 32 per chip (NeuronCore-v2) |
| **Memory** | 32 GB HBM |
| **Memory Bandwidth** | 0.8 TB/s |
| **FP8 Compute** | 191 TFLOPS |
| **BF16/FP16** | 191 TFLOPS |
| **FP32** | 48 TFLOPS |
| **TDP** | ~350 W |
| **NeuronLink** | NeuronLink-v2 |
| **Form Factor** | Trn1 instances (AWS) |

## Vendor Information

| Item | Detail |
|------|------|
| **Manufacturer** | Amazon (Annapurna Labs) |
| **Website** | https://aws.amazon.com/machine-learning/trainium/ |
| **Product Page** | https://aws.amazon.com/ec2/instance-types/trn1/ |
| **SDK** | https://awsdocs-neuron.readthedocs-hosted.com/ |

## Key Features

- **AWS Neuron SDK**: PyTorch, JAX integration
- **EFA interconnect**: Low-latency cluster networking
- **AWS EC2 only**

## Use Cases

- LLM training (Trn1 32xlarge)
- Recommendation systems
- Large-scale distributed training

## Related Products

- [AWS Trainium 2](/docs/cards/aws/trainium-2) - Successor (4× performance)
- [AWS Inferentia 2](/docs/cards/aws/inferentia-2) - Inference variant
- [NVIDIA H100](/docs/cards/nvidia/h100) - Same generation
