/**
 * 主页内容（中文）
 */

export interface HotChip {
  name: string;
  vendor: string;
  arch: string;
  mem: string;
  bw: string;
  fp16Tflops: number;
  category: '训练' | '推理' | '消费' | '边缘' | '晶圆' | '神经形态';
  bwRatio: number;
  slug: string;
  released: string;
}

export interface HomeContent {
  heroTitle: string;
  heroSubtitle: string;
  searchPlaceholder: string;
  searchLabel: string;
  searchClear: string;
  searchEmptyPrefix: string;
  searchEmptyLink: string;
  hotChipsTitle: string;
  hotChipsDesc: string;
  hotChipsHeader: [string, string, string, string, string, string];
  viewFullComparison: string;
  latestNewsTitle: string;
  latestNewsDescPrefix: string;
  latestNewsDescLink: string;
  ctaFullComparison: string;
  ctaRoadmap: string;
  ctaBlog: string;
  ctaContribute: string;
  metaDescription: string;
  hotChips: HotChip[];
  categoryColors: Record<string, string>;
  vendorWeight: Record<string, number>;
  categoryWeight: Record<string, number>;
  rankDesc: string;
  footerArrow: string;
  ctaTitle: string;
  ctaSubtitle: string;
}

export const ZH_CONTENT: HomeContent = {
  heroTitle: '',
  heroSubtitle: '全球最全面的 AI 算力卡百科 · 持续更新',
  searchPlaceholder: '搜索芯片、厂商、架构（如 H100、昇腾、Hopper、HBM3）',
  searchLabel: '搜索 AI 算力卡',
  searchClear: '清除',
  searchEmptyPrefix: '未找到「',
  searchEmptySuffix: '」相关芯片。',
  searchEmptyLink: '查看完整对比表 →',
  hotChipsTitle: '🔥 热门芯片',
  hotChipsDesc: '按"重要性 + 时效性 + 算力"综合排序 — 得分越高排名越靠前。',
  hotChipsHeader: ['芯片名称', '厂商', '架构', '显存', '显存带宽', '分类'],
  viewFullComparison: '查看完整对比表（100+ 款）→',
  latestNewsTitle: '📰 最新动态',
  latestNewsDescPrefix: '行业新闻、产品发布、技术深度、选型指南。',
  latestNewsDescLink: '查看所有文章 →',
  ctaTitle: '更多资源',
  ctaSubtitle: '对比、规划、了解行业最新动态',
  ctaFullComparison: '完整对比表',
  ctaRoadmap: '未来路线图',
  ctaBlog: '行业动态',
  ctaContribute: '提交数据',
  metaDescription: '全球最全面的 AI 算力卡信息百科：NVIDIA H100/H200/B200、AMD MI300X/MI355X、Google TPU v7、AWS Trainium 3、Huawei Ascend 910C/920/950 等 100+ 款芯片的详尽规格、对比、动态',
  rankDesc: '按"重要性 + 时效性 + 算力"综合排序',
  footerArrow: '→',
  hotChips: [
    { name: 'H100 SXM',      vendor: 'NVIDIA',  arch: 'Hopper',          mem: '80 GB HBM3',     bw: '3.35 TB/s',  fp16Tflops: 989,  category: '训练', bwRatio: 0.42, slug: '/docs/cards/nvidia/h100',         released: '2022-10-01' },
    { name: 'H200 SXM',      vendor: 'NVIDIA',  arch: 'Hopper',          mem: '141 GB HBM3e',   bw: '4.8 TB/s',   fp16Tflops: 989,  category: '训练', bwRatio: 0.60, slug: '/docs/cards/nvidia/h200',         released: '2024-06-01' },
    { name: 'B200',          vendor: 'NVIDIA',  arch: 'Blackwell',       mem: '192 GB HBM3e',   bw: '8 TB/s',     fp16Tflops: 2250, category: '训练', bwRatio: 1.00, slug: '/docs/cards/nvidia/b200',         released: '2024-10-01' },
    { name: 'B300 Ultra',    vendor: 'NVIDIA',  arch: 'Blackwell Ultra', mem: '288 GB HBM3e',   bw: '8 TB/s',     fp16Tflops: 2700, category: '训练', bwRatio: 1.00, slug: '/docs/cards/nvidia/b300-ultra',  released: '2025-10-01' },
    { name: 'MI300X',        vendor: 'AMD',     arch: 'CDNA 3',          mem: '192 GB HBM3',    bw: '5.3 TB/s',   fp16Tflops: 1300, category: '训练', bwRatio: 0.66, slug: '/docs/cards/amd/mi300x',          released: '2023-12-01' },
    { name: 'MI355X',        vendor: 'AMD',     arch: 'CDNA 3.5',        mem: '288 GB HBM3e',   bw: '8 TB/s',     fp16Tflops: 2600, category: '训练', bwRatio: 1.00, slug: '/docs/cards/amd/mi355x',          released: '2025-10-01' },
    { name: 'TPU Ironwood',  vendor: 'Google',  arch: 'TPU v7',          mem: '192 GB HBM',     bw: '5 TB/s',     fp16Tflops: 2400, category: '训练', bwRatio: 0.63, slug: '/docs/cards/google/tpu-ironwood', released: '2025-11-01' },
    { name: '昇腾 910C',     vendor: '华为',    arch: 'Da Vinci',        mem: '128 GB HBM2e',   bw: '1.2 TB/s',   fp16Tflops: 320,  category: '训练', bwRatio: 0.15, slug: '/docs/cards/huawei/ascend-910c',  released: '2024-04-01' },
    { name: '昇腾 920',      vendor: '华为',    arch: 'Da Vinci',        mem: '96 GB HBM',      bw: '4 TB/s',     fp16Tflops: 800,  category: '训练', bwRatio: 0.50, slug: '/docs/cards/huawei/ascend-920',   released: '2025-09-01' },
    { name: '昇腾 950DT',    vendor: '华为',    arch: 'Da Vinci v5',     mem: '144 GB HiZQ 2.0', bw: '4 TB/s',    fp16Tflops: 1000, category: '训练', bwRatio: 0.50, slug: '/docs/cards/huawei/ascend-950',   released: '2026-04-01' },
    { name: '昇腾 950PR',    vendor: '华为',    arch: 'Da Vinci v5',     mem: '128 GB HiBL 1.0', bw: '3 TB/s',    fp16Tflops: 1000, category: '推理', bwRatio: 0.38, slug: '/docs/cards/huawei/ascend-950',   released: '2026-04-01' },
    { name: 'WSE-3',         vendor: 'Cerebras', arch: 'WSE-3',          mem: '40 GB SRAM',     bw: '21 PB/s 片上', fp16Tflops: 125, category: '晶圆', bwRatio: 1.00, slug: '/docs/cards/cerebras/wse-3',  released: '2024-03-01' },
  ],
  categoryColors: {
    '训练': '#1a7f37',
    '推理': '#0969da',
    '消费': '#bf8700',
    '边缘': '#8250df',
    '晶圆': '#cf222e',
    '神经形态': '#6e7781',
  },
  vendorWeight: {
    'NVIDIA': 1.0,
    'AMD': 0.9,
    'Google': 0.85,
    '华为': 0.85,
    'Intel': 0.75,
    'Cerebras': 0.7,
  },
  categoryWeight: {
    '训练': 1.0,
    '推理': 0.8,
    '消费': 0.6,
    '边缘': 0.5,
    '晶圆': 0.4,
    '神经形态': 0.3,
  },
};
