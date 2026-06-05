---
id: inferentia-2
title: AWS Inferentia 2 (Inf2)
sidebar_label: AWS Inferentia 2
description: "AWS Inferentia 2 detailed specs: 32GB HBM2e, 4× NeuronCore-v2, inter-chip interconnect, Inf2.xlarge to Inf2.48xlarge instances."
keywords: [AWS Inferentia 2, Inf2 instances, large model inference, AI inference ASIC]
---

# AWS Inferentia 2 (Inf2)

## Overview

AWS Inferentia 2, released in 2022, is the second-generation AWS custom inference ASIC. The **major improvement is support for 32GB HBM2e memory** and **inter-chip interconnect**, enabling hosting of larger models (70B+). It is available through **Inf2 instances**, ranging from inf2.xlarge (single chip) to inf2.48xlarge (12 chips).

## Core Specifications

| Item | Spec |
|------|------|
| **Architecture** | Inferentia 2 (NeuronCore-v2) |
| **NeuronCore** | 4 per chip |
| **Memory** | **32 GB HBM2e** |
| **INT8 Compute (estimated)** | 190 TOPS |
| **FP16/BF16** | 190 TFLOPS (estimated) |
| **Inter-Chip Interconnect** | Supported (up to 12 chips) |
| **TDP** | ~150 W |

## Inf2 Instances

| Instance | Chips | Memory | Use |
|------|------|------|------|
| **inf2.xlarge** | 1 | 32 GB | Lightweight inference |
| **inf2.8xlarge** | 1 | 32 GB | Moderate inference |
| **inf2.24xlarge** | 6 | 192 GB | Large models |
| **inf2.48xlarge** | 12 | 384 GB | 70B+ models |

## Vendor Information

| Item | Detail |
|------|------|
| **Manufacturer** | Amazon (Annapurna Labs) |
| **Website** | https://aws.amazon.com/machine-learning/inferentia/ |
| **Product Page** | https://aws.amazon.com/ec2/instance-types/inf2/ |
| **SDK** | https://awsdocs-neuron.readthedocs-hosted.com/ |

## Key Features

- **Inter-chip interconnect**: Supports 12 chips aggregating 384GB memory
- **Can host 70B model inference** (4-bit quantization)
- **DynamoAI integration**
- **Low latency**

## Use Cases

- LLM inference (10B-70B)
- Recommendation systems
- Computer vision inference
- Cost-sensitive production deployment

## Related Products

- [AWS Inferentia 1](/docs/cards/aws/inferentia) - Previous generation
- [AWS Trainium 2](/docs/cards/aws/trainium-2) - Training/inference fungible
- [NVIDIA L40S](/docs/cards/nvidia/l40s) - Data center inference
