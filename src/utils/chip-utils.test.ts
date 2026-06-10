/**
 * 芯片排序和评分工具函数测试
 */
import { describe, it, expect } from 'vitest';
import { rankScore, sortChips, type HotChip, type HomeContent } from '../utils/chip-utils';

const MOCK_CONTENT: HomeContent = {
  vendorWeight: {
    'NVIDIA': 1.0,
    'AMD': 0.9,
  },
  categoryWeight: {
    '训练': 1.0,
    '推理': 0.9,
  },
  hotChips: [],
};

const MOCK_CHIPS: HotChip[] = [
  {
    name: 'H100 SXM',
    vendor: 'NVIDIA',
    arch: 'Hopper',
    mem: '80 GB HBM3',
    bw: '3.35 TB/s',
    fp16Tflops: 989,
    category: '训练',
    bwRatio: 0.42,
    slug: '/docs/cards/nvidia/h100',
    released: '2022-10-01',
  },
  {
    name: 'B200',
    vendor: 'NVIDIA',
    arch: 'Blackwell',
    mem: '192 GB HBM3e',
    bw: '8 TB/s',
    fp16Tflops: 2250,
    category: '训练',
    bwRatio: 1.0,
    slug: '/docs/cards/nvidia/b200',
    released: '2024-10-01',
  },
  {
    name: 'MI300X',
    vendor: 'AMD',
    arch: 'CDNA 3',
    mem: '192 GB HBM3',
    bw: '5.3 TB/s',
    fp16Tflops: 1300,
    category: '训练',
    bwRatio: 0.66,
    slug: '/docs/cards/amd/mi300x',
    released: '2023-12-01',
  },
];

describe('rankScore', () => {
  it('应返回数字类型的评分', () => {
    const score = rankScore(MOCK_CHIPS[0], MOCK_CONTENT);
    expect(typeof score).toBe('number');
    expect(score).toBeGreaterThan(0);
  });

  it('较新的芯片评分应高于较旧的芯片', () => {
    const scoreNew = rankScore(MOCK_CHIPS[1], MOCK_CONTENT); // B200, 2024
    const scoreOld = rankScore(MOCK_CHIPS[0], MOCK_CONTENT); // H100, 2022
    expect(scoreNew).toBeGreaterThan(scoreOld);
  });

  it('算力（fp16Tflops）越高的芯片评分越高', () => {
    const scoreHigh = rankScore(MOCK_CHIPS[1], MOCK_CONTENT); // B200, 2250 TFLOPS
    const scoreLow = rankScore(MOCK_CHIPS[0], MOCK_CONTENT); // H100, 989 TFLOPS
    expect(scoreHigh).toBeGreaterThan(scoreLow);
  });

  it('使用默认权重当厂商不在列表中', () => {
    const chip: HotChip = {
      ...MOCK_CHIPS[0],
      vendor: 'Unknown',
    };
    const score = rankScore(chip, MOCK_CONTENT);
    expect(score).toBeGreaterThan(0);
  });
});

describe('sortChips', () => {
  it('应返回排序后的芯片数组', () => {
    const sorted = sortChips(MOCK_CHIPS, MOCK_CONTENT);
    expect(sorted).toHaveLength(MOCK_CHIPS.length);
    expect(sorted[0].name).toBe('B200'); // B200 评分最高
  });

  it('评分相近时按发布日期降序排列', () => {
    const chips: HotChip[] = [
      { ...MOCK_CHIPS[0], name: 'Chip A', released: '2024-01-01' },
      { ...MOCK_CHIPS[0], name: 'Chip B', released: '2024-06-01' },
    ];
    const sorted = sortChips(chips, MOCK_CONTENT);
    expect(sorted[0].name).toBe('Chip B'); // 更晚发布
  });

  it('不应修改原数组', () => {
    const original = [...MOCK_CHIPS];
    sortChips(MOCK_CHIPS, MOCK_CONTENT);
    expect(MOCK_CHIPS).toEqual(original);
  });
});
