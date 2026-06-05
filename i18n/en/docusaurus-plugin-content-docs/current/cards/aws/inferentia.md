---
id: inferentia
title: AWS Inferentia (First Generation)
sidebar_label: AWS Inferentia
description: "AWS Inferentia detailed specs: 128 TOPS INT8, NeuronCore-v1, AWS custom AI inference ASIC, Inf1 instances."
keywords: [AWS Inferentia, Inf1 instances, NeuronCore-v1, AI inference ASIC]
---

# AWS Inferentia (First Generation)

## Overview

AWS Inferentia is an **AI inference ASIC** designed by Amazon Annapurna Labs and released in 2019. It delivers **128 TOPS INT8** compute at **35W TDP** and is available through **Inf1 instances**.

## Core Specifications

| Item | Spec |
|------|------|
| **Architecture** | Inferentia (NeuronCore-v1) |
| **NeuronCore** | 4 per chip |
| **INT8 Compute** | 128 TOPS |
| **FP16/BF16** | 64 TFLOPS |
| **TDP** | 35 W |
| **Form Factor** | Inf1 instances |

## Vendor Information

| Item | Detail |
|------|------|
| **Manufacturer** | Amazon (Annapurna Labs) |
| **Website** | https://aws.amazon.com/machine-learning/inferentia/ |
| **Product Page** | https://aws.amazon.com/ec2/instance-types/inf1/ |
| **SDK** | https://awsdocs-neuron.readthedocs-hosted.com/ |

## Use Cases

- Low-latency AI inference
- Recommendation systems
- NLP inference

## Related Products

- [AWS Inferentia 2](/docs/cards/aws/inferentia-2) - Successor
- [AWS Trainium 2](/docs/cards/aws/trainium-2) - Training/inference fungible
