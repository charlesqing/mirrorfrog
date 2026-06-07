/**
 * 主页内容（英文）
 */

import type { HomeContent, HotChip } from './home-content.zh';

const EN_HOT_CHIPS: HotChip[] = [
  { name: 'H100 SXM',     vendor: 'NVIDIA',  arch: 'Hopper',          mem: '80 GB HBM3',      bw: '3.35 TB/s',  fp16Tflops: 989,  category: 'Training', bwRatio: 0.42, slug: '/docs/cards/nvidia/h100',         released: '2022-10-01' },
  { name: 'H200 SXM',     vendor: 'NVIDIA',  arch: 'Hopper',          mem: '141 GB HBM3e',    bw: '4.8 TB/s',   fp16Tflops: 989,  category: 'Training', bwRatio: 0.60, slug: '/docs/cards/nvidia/h200',         released: '2024-06-01' },
  { name: 'B200',         vendor: 'NVIDIA',  arch: 'Blackwell',       mem: '192 GB HBM3e',    bw: '8 TB/s',     fp16Tflops: 2250, category: 'Training', bwRatio: 1.00, slug: '/docs/cards/nvidia/b200',         released: '2024-10-01' },
  { name: 'B300 Ultra',   vendor: 'NVIDIA',  arch: 'Blackwell Ultra', mem: '288 GB HBM3e',    bw: '8 TB/s',     fp16Tflops: 2700, category: 'Training', bwRatio: 1.00, slug: '/docs/cards/nvidia/b300-ultra',  released: '2025-10-01' },
  { name: 'MI300X',       vendor: 'AMD',     arch: 'CDNA 3',          mem: '192 GB HBM3',     bw: '5.3 TB/s',   fp16Tflops: 1300, category: 'Training', bwRatio: 0.66, slug: '/docs/cards/amd/mi300x',          released: '2023-12-01' },
  { name: 'MI355X',       vendor: 'AMD',     arch: 'CDNA 3.5',        mem: '288 GB HBM3e',    bw: '8 TB/s',     fp16Tflops: 2600, category: 'Training', bwRatio: 1.00, slug: '/docs/cards/amd/mi355x',          released: '2025-10-01' },
  { name: 'TPU Ironwood', vendor: 'Google',  arch: 'TPU v7',          mem: '192 GB HBM',      bw: '5 TB/s',     fp16Tflops: 2400, category: 'Training', bwRatio: 0.63, slug: '/docs/cards/google/tpu-ironwood', released: '2025-11-01' },
  { name: 'Ascend 910C',  vendor: 'Huawei',  arch: 'Da Vinci',        mem: '128 GB HBM2e',    bw: '1.2 TB/s',   fp16Tflops: 320,  category: 'Training', bwRatio: 0.15, slug: '/docs/cards/huawei/ascend-910c',  released: '2024-04-01' },
  { name: 'Ascend 920',   vendor: 'Huawei',  arch: 'Da Vinci',        mem: '96 GB HBM',       bw: '4 TB/s',     fp16Tflops: 800,  category: 'Training', bwRatio: 0.50, slug: '/docs/cards/huawei/ascend-920',   released: '2025-09-01' },
  { name: 'Ascend 950DT', vendor: 'Huawei',  arch: 'Da Vinci v5',     mem: '144 GB HiZQ 2.0', bw: '4 TB/s',     fp16Tflops: 1000, category: 'Training', bwRatio: 0.50, slug: '/docs/cards/huawei/ascend-950',   released: '2026-04-01' },
  { name: 'Ascend 950PR', vendor: 'Huawei',  arch: 'Da Vinci v5',     mem: '128 GB HiBL 1.0', bw: '3 TB/s',     fp16Tflops: 1000, category: 'Inference', bwRatio: 0.38, slug: '/docs/cards/huawei/ascend-950',  released: '2026-04-01' },
  { name: 'WSE-3',        vendor: 'Cerebras', arch: 'WSE-3',          mem: '40 GB SRAM',      bw: '21 PB/s on-chip', fp16Tflops: 125, category: 'Wafer', bwRatio: 1.00, slug: '/docs/cards/cerebras/wse-3',  released: '2024-03-01' },
];

export const EN_CONTENT: HomeContent = {
  heroTitle: '',
  heroSubtitle: "The world's most comprehensive AI compute chip encyclopedia · Continuously updated",
  searchPlaceholder: 'Search chips, vendors, architectures (e.g. H100, Hopper, HBM3)',
  searchLabel: 'Search AI compute chips',
  searchClear: 'Clear',
  searchEmptyPrefix: 'No results for "',
  searchEmptySuffix: '".',
  searchEmptyLink: 'View full comparison table →',
  hotChipsTitle: '🔥 Hot Chips',
  hotChipsDesc: 'Ranked by importance, recency, and FP16/BF16 performance — higher score means higher rank.',
  hotChipsHeader: ['Chip', 'Vendor', 'Arch', 'Memory', 'Bandwidth', 'Category'],
  viewFullComparison: 'View full comparison table (100+ chips) →',
  latestNewsTitle: '📰 Latest News',
  latestNewsDescPrefix: 'Industry news, product launches, technical deep-dives, and selection guides.',
  latestNewsDescLink: 'View all articles →',
  ctaTitle: 'More Resources',
  ctaSubtitle: 'Compare, plan, and stay up to date',
  ctaFullComparison: 'Full Comparison',
  ctaRoadmap: 'Roadmap',
  ctaBlog: 'Industry News',
  ctaContribute: 'Contribute Data',
  metaDescription: "The world's most comprehensive AI compute chip encyclopedia: NVIDIA H100/H200/B200, AMD MI300X/MI355X, Google TPU v7, AWS Trainium 3, Huawei Ascend 910C/920/950, and 100+ more chips with detailed specs, comparisons, and news.",
  rankDesc: 'Ranked by importance, recency, and FP16/BF16 performance',
  footerArrow: '→',
  hotChips: EN_HOT_CHIPS,
  categoryColors: {
    'Training': '#1a7f37',
    'Inference': '#0969da',
    'Consumer': '#bf8700',
    'Edge': '#8250df',
    'Wafer': '#cf222e',
    'Neuromorphic': '#6e7781',
  },
  vendorWeight: {
    'NVIDIA': 1.0,
    'AMD': 0.9,
    'Google': 0.85,
    'Huawei': 0.85,
    'Intel': 0.75,
    'Cerebras': 0.7,
  },
  categoryWeight: {
    'Training': 1.0,
    'Inference': 0.8,
    'Consumer': 0.6,
    'Edge': 0.5,
    'Wafer': 0.4,
    'Neuromorphic': 0.3,
  },
};
