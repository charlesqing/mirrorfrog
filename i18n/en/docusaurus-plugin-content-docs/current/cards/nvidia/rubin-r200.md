---
id: rubin-r200
title: "NVIDIA Rubin R200"
description: "NVIDIA Rubin R200 GPU, based on 3nm process, 336 billion transistors, 288GB HBM4 memory, 50 PFLOPS FP4 compute, next-generation AI training and inference GPU released at GTC 2026"
date: "2026-03-17"
vendor: "nvidia"
category: "Data Center GPU"
---

# NVIDIA Rubin R200

> **Disambiguation**: searching "R200" may match two entirely different chips — this page is the **NVIDIA Rubin GPU (commonly R200)**. Baidu also has a **[Kunlunchip R200](/docs/cards/baidu/r200)** (XPU-R inference accelerator, 7nm, 256 TOPS INT8). See its card page if that is what you are looking for.

NVIDIA Rubin R200 is NVIDIA's next-generation AI GPU announced at GTC 2026, built on TSMC 3nm process with 336 billion transistors, equipped with 288GB HBM4 memory, delivering 50 PFLOPS FP4 inference compute, succeeding the Blackwell architecture.

## Key Specifications

| **Specification** | **Value** |
|-------------------|------------|
| **GPU Architecture** | Rubin Architecture (MCM multi-chip module design) |
| **Process Node** | TSMC 3nm (4NP custom process) |
| **Transistor Count** | 336 billion |
| **FP4 Inference Compute** | 50 PFLOPS |
| **FP8 Training Compute** | 35 PFLOPS |
| **FP16 Compute** | Estimated ~25 PFLOPS |
| **FP32 Compute** | 130 TFLOPS |
| **FP64 Compute** | 200 TFLOPS |
| **INT8 Compute** | Estimated ~100 PFLOPS |
| **Memory Capacity** | 288 GB |
| **Memory Type** | HBM4 |
| **Memory Bandwidth** | 22 TB/s |
| **Interconnect** | NVLink 6 (3.6 TB/s unidirectional) |
| **TDP** | 1,800-2,300W (liquid cooling required) |
| **Release Date** | March 17, 2026 |
| **Mass Production** | Second half of 2026 |
| **Pricing** | $350-400M per NVL72 rack |

## Architecture & Specifications

Rubin R200 adopts a **multi-chip module (MCM) design**, with the core comprising:
- **2 compute dies (GPU dies)**
- **2 I/O dies** (handling HBM controllers and NVLink physical layer)
- **8 HBM4 memory stacks**

### Key Technical Innovations

1. **Third-Generation Transformer Engine**
   - Supports hardware-level adaptive precision compression
   - Dynamically switches precision without rewriting model code (FP4/FP6/FP8/FP16/BF16/TF32/FP32/FP64)

2. **NVLink 6 Interconnect**
   - Single GPU full interconnect bandwidth of 3.6 TB/s (bidirectional)
   - NVL72 rack total bandwidth of 260 TB/s

3. **HBM4 Memory**
   - 288GB capacity (1.5× increase over Blackwell B200's 192GB HBM3e)
   - 22 TB/s bandwidth (2.75× increase over Blackwell B200's 8 TB/s)

## Performance Comparison

| **Comparison** | **Blackwell B200** | **Rubin R200** | **Improvement** |
|-----------------|-------------------|----------------|---------------|
| Transistor Count | 208 billion | 336 billion | 1.6× |
| Memory Capacity | 192GB HBM3e | 288GB HBM4 | 1.5× |
| Memory Bandwidth | 8 TB/s | 22 TB/s | 2.75× |
| NVLink Bandwidth | 1.8 TB/s | 3.6 TB/s | 2× |
| FP4 Inference | ~10 PFLOPS | 50 PFLOPS | 5× |
| TDP | 1,000W | 1,800-2,300W | 1.8-2.3× |

## Platform Configurations

### Vera Rubin NVL72
- **72×** Rubin R200 GPUs
- **36×** Vera CPUs
- **Total Compute**: ~3.6 EFLOPS FP4
- **Total Memory**: 20.7 TB HBM4
- **Total Bandwidth**: 1.58 PB/s
- **TDP**: ~180kW (full liquid cooling required)
- **Pricing**: $3.5-4M

### Vera Rubin NVL144 (Planned)
- **144×** Rubin R200 GPUs
- **72×** Vera CPUs
- **Total Compute**: ~7.2 EFLOPS FP4
- **LLM Inference Cost**: Reduced to 1/10 of Blackwell platform

## Mass Production & Delivery

- **Mass Production**: Second half of 2026
- **First Customers**: AWS, Azure, Google Cloud, Oracle Cloud
- **MLPerf Inference v6.1 Debut** (results published 2026-09-16): Qwen3-VL throughput up to **3.7x** GB300 NVL72, DeepSeek-R1 up to **2.5x**, with 99% scaling efficiency demonstrated on 288 GPUs
- **On-Premises Users**: Q1 2027 availability
- **Partner Products**: Market delivery in second half of 2026
- **Shipping spec locked (reported 2026-11-01)**: NVIDIA finalized HBM4 bandwidth at 19.2 TB/s per GPU (down from the preliminary 22 TB/s), NVLink scale-up at 3.0 TB/s (down from 3.6 TB/s), and raised scale-out networking to 450 GB/s. Compute and 288GB capacity are unchanged. According to ServeTheHome's review of NVIDIA's September data-sheet update, the **HGX Rubin NVL8** changed more: seven of eight HBM4 stacks are enabled per GPU, cutting usable memory to about 250-252GB, system memory from 2.3 TB to 2.0 TB, and aggregate memory bandwidth from 176 TB/s to 130 TB/s. NVIDIA has not explained the revisions; buyers should size clusters from the final system-level spec sheet.

## Application Scenarios

Rubin R200 targets **data center and supercomputing scenarios**, suitable for:
- Trillion-parameter LLM training
- High-performance AI inference (low latency, high throughput)
- Reinforcement learning (RL) and agentic AI
- Scientific computing and AI factories

## November 2026 Update: AI Factory Delivery and Rack-Level Memory

NVIDIA's November newsroom updates list several Rubin delivery milestones: the Vera Rubin DSX AI factory reference design and DSX POD (a modular containerized system the vendor says can cut on-site deployment from about six months to 14 days once utilities are ready), Vera Rubin NVL72 and the Vera CPU becoming available on CoreWeave with Cognition as the first production agentic-AI customer, and the platform opening to the OCP ecosystem. Dell and HPE NVL72 pre-order pages updated November 5 list 72 Rubin GPUs plus 36 Vera CPUs per rack, 288GB HBM4 per GPU and about 20.7TB per rack, liquid cooling only; HPE marks December 2026 availability and Dell the second half of 2026. All figures are vendor-reported and not independently benchmarked.

This week NVIDIA also detailed the NVL72 memory strategy: per-GPU HBM capacity rises only about 3% versus GB300, with gains coming from system design — NVFP4 compression of weights and KV cache, sharding weights across all 72 GPUs, using the Vera CPU large memory as a buffer tier, Dynamo for context migration, and pushing RAG indexes and inactive context to cheaper storage. The company claims up to 30x cost-adjusted agentic inference throughput over GB300 NVL72. That "up to" number is a vendor claim without independent verification and should not be entered into the [TCO calculator](/docs/tco-calculator). The durable point is that memory becomes a rack-wide schedulable pool rather than a fixed per-chip ceiling.

A NAVER regulatory filing dated November 6 says the $1 billion NVIDIA investment has completed payment, leaving NVIDIA with a 4.13% stake earmarked for GPU infrastructure at the Sejong data center and a GPU-as-a-Service business. This is a capital move and changes no specification on this page.
> The same filing, reported by Yonhap and the Korea Times on November 6, adds the mechanics: NAVER issued 6,558,435 new common shares for about 1.3 trillion won, making NVIDIA its third-largest shareholder. The first site is the Gak Sejong data center, operated by Naver Cloud, with a plan to bring 55MW online in the first half of 2027, expand to 200MW in 2028 and a longer-term 1GW concept. Brookfield has a compute-infrastructure agreement with NAVER worth up to $9 billion. This is sovereign-AI capital and data-center capacity, not a Rubin rack order or a delivery schedule.


## November 8, 2026 Update: Two Competing Views on Delivery Pace

A supply-chain account circulating on Taiwanese investment forums on November 8 claims Rubin rack delivery guidance for late 2026 was cut from at least 7,000-8,000 racks (optimistic case 11,000-12,000) to a more realistic 4,000-5,000, citing HBM4 yield variability, system stability under sustained stress testing, interconnect and software validation workload, and unresolved liquid-cooling and power issues. It suggests volume ramp may slip to the second half of Q1 2027 and that second-tier server vendors and some neoclouds face larger cuts than top-tier ODMs.

> Sourcing note: this is an unnamed supply-chain claim relayed on investment forums, unconfirmed by NVIDIA or any vendor, and not an official guideline or independently verified reporting. It does not necessarily contradict the "full production" status and CoreWeave NVL72 availability recorded above — production status, shipment batches and customer racking are three different things. No specification or status on this page changes. Buyers should watch verifiable delivery evidence (vendor availability dates, cloud instance GA, rack revenue recognition in quarterly filings) rather than forum rack counts. The same source's claims about Google TPU timing and external compute rental are likewise unverified and are not recorded here.

## 2026-11-13 update: public MLPerf v6.1 entries and vendor multiples

NVIDIA's developer page now lists the MLPerf Inference v6.1 Closed Division entries for Vera Rubin NVL72: 1,183,327 tokens/sec on DeepSeek-R1 Offline with 72 VR200 GPUs, and 2,393 samples/sec on Qwen3-VL 235B (GB300 NVL72 is listed at 1,305 samples/sec on the same page). These are public submissions, not preview figures.

In its v6.1 preview material NVIDIA separately claimed up to 3.7 times the throughput of GB300 NVL72 on cited Qwen3 VL workloads, with a note that post-submission results had not yet been verified by MLCommons. The same material quotes up to 10 times throughput per dollar on an AgentX workload and up to 35 times token throughput per megawatt on long-context models. Those figures use different workloads and denominators; they do not validate one another and cannot be converted directly into customer savings.

On November 12 AMD compared its own 21,333 tokens/s/GPU result against the public DeepSeek-R1 entry above and claimed up to 30 percent higher throughput. The two sides did not run the same test: AMD ran an internal MLPerf configuration while NVIDIA submitted a public result. The [MI455X page](/docs/cards/amd/mi455x) records the other side of that comparison.

> Sourcing note: public benchmark entries plus vendor marketing material. The 3.7x, 10x and 35x figures are vendor claims on different workloads. The spec table is unchanged; throughput multiples are not compute specifications.

## References

- [NVIDIA Official News](https://investor.nvidia.com/news/press-release-details/2026/NVIDIA-Kicks-Off-the-Next-Generation-of-AI-With-Rubin--Six-New-Chips-One-Incredible-AI-Supercomputer/default.aspx)
- [NVIDIA Rubin GPU Deep Dive](https://lucy.suiyan.cc/blog/2026-06-01_nvidia-vera-rubin-gpu/)
- [NVIDIA GTC 2026 Major Preview](https://www.163.com/dy/article/KNMD49PM0556GROA.html)
