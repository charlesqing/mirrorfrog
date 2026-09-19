/**
 * TCO / Build-vs-Rent 计算模型测试。
 *
 * 这一组用例的作用是给「集群叠加 / 折现 / BVR 闭式解 / URL 值消毒」建立回归护栏——
 * 此前这些算法只存在于组件内部，零测试覆盖，改一处就可能悄悄改错口径。
 *
 * 注意：显式 `import ... from 'vitest'` 在 vitest 4.1.8 + vite 8 组合下会解析到
 * 错误实例并抛 `undefined.config`，因此统一使用 globals（见 vitest.config.ts）。
 */
import {
  computeTco,
  computeBvr,
  discountFactorOf,
  yearDiscountFactor,
  sanitizeNumber,
  toUSD,
  clamp,
  DEFAULT_CLUSTER,
  CNY_TO_USD,
  type TcoInput,
} from './tco-model';

/** 基准：NVIDIA B200 × 8，其余取网站默认值（与 TCO 页面默认状态一致） */
const BASE: TcoInput = {
  unitPriceUSD: 42000,
  tdpW: 1000,
  qty: 8,
  usage: 0.9,
  price: 0.1,
  years: 3,
  dcCost: 500,
  idleRatio: 0.15,
  pue: 1.3,
  discount: 0.08,
};

describe('computeTco — 单节点口径', () => {
  it('基准场景各项金额与总计可复现', () => {
    const r = computeTco(BASE, 'node');

    expect(r.breakdown.procurement).toBe(336000);
    expect(r.breakdown.electricity).toBeCloseTo(16525.17, 1);
    expect(r.breakdown.dc).toBeCloseTo(10308.39, 1);
    expect(r.breakdown.cooling).toBeCloseTo(4957.55, 1);
    expect(Math.round(r.tco)).toBe(367791);
  });

  it('单节点不产生服务器 / 网络 / 人力项', () => {
    const r = computeTco(BASE, 'node');
    expect(r.breakdown.server).toBe(0);
    expect(r.breakdown.network).toBe(0);
    expect(r.breakdown.ops).toBe(0);
    expect(r.oneTimeTotal).toBe(r.breakdown.procurement);
  });

  it('TCO 恒等于各分段之和（图表与成本行同源）', () => {
    const r = computeTco(BASE, 'node');
    const { procurement, server, network, electricity, dc, cooling, ops } = r.breakdown;
    expect(r.tco).toBeCloseTo(procurement + server + network + electricity + dc + cooling + ops, 6);
  });

  it('冷却按 设备电 × (PUE − 1) 计，不重复叠加设施总电', () => {
    const r = computeTco(BASE, 'node');
    expect(r.breakdown.cooling).toBeCloseTo(r.breakdown.electricity * (BASE.pue - 1), 6);
  });

  it('折现率为 0 时退化为「年限」次简单相加', () => {
    const r = computeTco({ ...BASE, discount: 0 }, 'node');
    expect(r.discountFactor).toBe(3);
    expect(r.tco).toBeCloseTo(336000 + (6412.32 + 1923.696 + 4000) * 3, 4);
  });
});

describe('computeTco — 集群口径', () => {
  it('叠加服务器节点、网络设备与人力 OPEX', () => {
    const r = computeTco(BASE, 'cluster');

    expect(r.breakdown.server).toBe(30000);              // ⌈8/8⌉ × $30,000
    expect(r.breakdown.network).toBeCloseTo(40320, 6);    // 336,000 × 12%
    expect(r.breakdown.ops).toBeCloseTo(3092.52, 1);      // 8/1000 × 150,000 × 折现因子
    expect(r.oneTimeTotal).toBe(406320);
    expect(Math.round(r.tco)).toBe(441204);
  });

  it('集群 TCO 恒大于同参数单节点 TCO', () => {
    expect(computeTco(BASE, 'cluster').tco).toBeGreaterThan(computeTco(BASE, 'node').tco);
  });

  it('服务器节点数按 8 卡向上取整（9 卡 = 2 台）', () => {
    const r = computeTco({ ...BASE, qty: 9 }, 'cluster');
    expect(r.breakdown.server).toBe(2 * DEFAULT_CLUSTER.serverCost);
  });
});

describe('computeBvr — 自建 vs 云租赁闭式解', () => {
  it('集群口径下平衡点约为 84.8%，与成本行口径一致', () => {
    const r = computeBvr(BASE, 'cluster', DEFAULT_CLUSTER, 2.5);
    expect(r.A).toBeCloseTo(2.026349, 5);
    expect(r.B).toBeCloseTo(0.1105, 5);
    expect(r.breakevenUsage).not.toBeNull();
    expect(r.breakevenUsage! * 100).toBeCloseTo(84.8, 1);
  });

  it('单节点口径的平衡点低于集群（少了服务器/网络/人力）', () => {
    const node = computeBvr(BASE, 'node', DEFAULT_CLUSTER, 2.5);
    const cluster = computeBvr(BASE, 'cluster', DEFAULT_CLUSTER, 2.5);
    expect(node.breakevenUsage!).toBeLessThan(cluster.breakevenUsage!);
  });

  it('云价 ≤ 固定成本下限时返回 null（租赁恒优），不会算出虚假平衡点', () => {
    const r = computeBvr(BASE, 'cluster', DEFAULT_CLUSTER, 0.05);
    expect(r.breakevenUsage).toBeNull();
  });

  it('ownAt 在 u = 0 时为 Infinity，不会产生 NaN', () => {
    const r = computeBvr(BASE, 'cluster', DEFAULT_CLUSTER, 2.5);
    expect(r.ownAt(0)).toBe(Infinity);
    expect(Number.isNaN(r.ownAt(0))).toBe(false);
    expect(r.ownAt(0.9)).toBeCloseTo(2.362, 3);
  });
});

describe('sanitizeNumber — URL / 输入值的数值消毒', () => {
  it('缺省与非法值回落默认值', () => {
    expect(sanitizeNumber(undefined, 8, 1, 65536)).toBe(8);
    expect(sanitizeNumber(null, 8, 1, 65536)).toBe(8);
    expect(sanitizeNumber('', 8, 1, 65536)).toBe(8);
    expect(sanitizeNumber('abc', 8, 1, 65536)).toBe(8);
    expect(sanitizeNumber('Infinity', 8, 1, 65536)).toBe(8);
    expect(sanitizeNumber('NaN', 8, 1, 65536)).toBe(8);
  });

  it('越界值被夹到区间内（?qty=0 / ?years=0 不再产生 NaN、Infinity）', () => {
    expect(sanitizeNumber('0', 8, 1, 65536)).toBe(1);
    expect(sanitizeNumber('0', 3, 1, 8)).toBe(1);
    expect(sanitizeNumber('-5', 8, 1, 65536)).toBe(1);
    expect(sanitizeNumber('999999', 3, 1, 8)).toBe(8);
    expect(sanitizeNumber('2', 1, 1, 1)).toBe(1);
  });

  it('合法值原样采用', () => {
    expect(sanitizeNumber('64', 8, 1, 65536)).toBe(64);
    expect(sanitizeNumber('0.85', 0.9, 0.1, 1)).toBe(0.85);
  });
});

describe('基础工具函数', () => {
  it('discountFactorOf 与手算一致，且 r = 0 退化为年限', () => {
    expect(discountFactorOf(0.08, 3)).toBeCloseTo(2.57709699, 7);
    expect(discountFactorOf(0, 3)).toBe(3);
    expect(discountFactorOf(0.08, 0)).toBe(0);
  });

  it('yearDiscountFactor 与 discountFactorOf 严格同口径', () => {
    for (const r of [0, 0.05, 0.08, 0.2]) {
      for (const n of [1, 3, 8]) {
        let sum = 0;
        for (let t = 1; t <= n; t++) sum += yearDiscountFactor(r, t);
        expect(sum).toBeCloseTo(discountFactorOf(r, n), 10);
      }
    }
  });

  it('柱状图最后一年的累计值 = hero 的 TCO（图表与 hero 必须收敛）', () => {
    for (const mode of ['node', 'cluster'] as const) {
      const r = computeTco(BASE, mode);
      let cum = r.breakdown.procurement + r.breakdown.server + r.breakdown.network;
      for (let y = 1; y <= BASE.years; y++) {
        cum += (r.annualDeviceElec + r.annualDc + r.annualCooling + r.annualOps) * yearDiscountFactor(BASE.discount, y);
      }
      expect(cum).toBeCloseTo(r.tco, 6);
    }
  });

  it('toUSD 按 7.2 汇率换算人民币价', () => {
    expect(toUSD(72000, 'CNY')).toBeCloseTo(10000, 6);
    expect(toUSD(1000, 'USD')).toBe(1000);
    expect(toUSD(null, 'USD')).toBe(0);
    expect(CNY_TO_USD).toBe(7.2);
  });

  it('clamp 双向夹取', () => {
    expect(clamp(5, 1, 3)).toBe(3);
    expect(clamp(-5, 1, 3)).toBe(1);
    expect(clamp(2, 1, 3)).toBe(2);
  });
});
