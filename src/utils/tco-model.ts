/**
 * TCO / Build-vs-Rent 纯计算模型。
 *
 * 从 TcoCalculator 组件中抽出，目的有二：
 *   1. 让「集群叠加 / 折现 / BVR 闭式解」这些容易算错的逻辑可被单元测试覆盖；
 *   2. 建立**单一口径来源**——hero、成本行、饼图、柱图、敏感性分析、CSV 导出、
 *      多芯片对比卡全部从这里取值，从根上杜绝「同一份数据两套算法」。
 *
 * 约定：
 *   - 金额单位一律为 USD（人民币定价请在数据层用 toUSD() 换汇后再传入）。
 *   - 任何「无数据」都返回 null / 0 以外的语义明确的值，不返回 NaN。
 */

/** 人民币兑美元汇率（与 static/pricing.json 的 CNY 条目配套） */
export const CNY_TO_USD = 7.2;
/** 空闲功耗占 TDP 比例：实际功耗 = TDP × (idle + (1 − idle) × 使用率) */
export const DEFAULT_IDLE_RATIO = 0.15;
/** 数据中心 PUE：风冷 1.3 / 液冷 1.1 / 极致 1.05 */
export const DEFAULT_PUE = 1.3;
/** 折现率（年化） */
export const DEFAULT_DISCOUNT = 0.08;
/** 每 8 卡一台服务器节点 */
export const CARDS_PER_SERVER = 8;

export const DEFAULT_QTY = 8;
export const DEFAULT_USAGE = 0.9;
export const DEFAULT_ELEC_PRICE = 0.1;
export const DEFAULT_YEARS = 3;
export const DEFAULT_DC_COST = 500;
export const DEFAULT_SERVER_COST = 30000;
export const DEFAULT_NETWORK_RATIO = 0.12;
export const DEFAULT_OPS_PER_K = 150000;
export const DEFAULT_CLOUD_PRICE = 2.5;

export type DeploymentMode = 'node' | 'cluster';

export interface TcoInput {
  /** 单卡价格（USD）。为 0 时视为「无定价」，调用方应先做空态处理 */
  unitPriceUSD: number;
  /** 单卡 TDP（W）。0 表示卡片未提供功耗 */
  tdpW: number;
  qty: number;
  /** 数据中心使用率 0..1 */
  usage: number;
  /** 电价 $/kWh */
  price: number;
  years: number;
  /** 单卡年租金 $/年 */
  dcCost: number;
  /** 空闲功耗比率 0..1 */
  idleRatio: number;
  pue: number;
  /** 折现率，0 表示不折现 */
  discount: number;
}

export interface ClusterInput {
  /** 每 8 卡服务器节点价（CPU/主板/内存/存储/机箱） */
  serverCost: number;
  /** 网络设备占 GPU 采购价比例 */
  networkRatio: number;
  /** 每千卡年人力 OPEX */
  opsPerK: number;
}

export const DEFAULT_CLUSTER: ClusterInput = {
  serverCost: DEFAULT_SERVER_COST,
  networkRatio: DEFAULT_NETWORK_RATIO,
  opsPerK: DEFAULT_OPS_PER_K,
};

/** 成本分段：key 与 CostBreakdown 字段一一对应，图表与成本行共用同一套定义 */
export interface CostBreakdown {
  /** 一次性：GPU 采购 */
  procurement: number;
  /** 一次性：服务器节点（仅集群） */
  server: number;
  /** 一次性：网络设备（仅集群） */
  network: number;
  /** 折现：设备电费 */
  electricity: number;
  /** 折现：机柜租金 */
  dc: number;
  /** 折现：冷却（设备电 × (PUE − 1)） */
  cooling: number;
  /** 折现：人力 OPEX（仅集群） */
  ops: number;
}

export type CostKey = keyof CostBreakdown;

export interface TcoResult {
  mode: DeploymentMode;
  /** 展示口径的 TCO 总计 = 各分段之和 */
  tco: number;
  breakdown: CostBreakdown;
  /** 一次性支出合计（采购 + 服务器 + 网络），用于柱图「含一次性采购」注记 */
  oneTimeTotal: number;
  /** 年设备电（未折现） */
  annualDeviceElec: number;
  /** 年冷却（未折现） */
  annualCooling: number;
  /** 年租金（未折现） */
  annualDc: number;
  /** 年人力 OPEX（未折现，仅集群） */
  annualOps: number;
  /** 折现因子：Σ (1+r)^-t */
  discountFactor: number;
}

export interface BvrResult {
  /** own(u) = A/u + B 中的固定成本项（$/GPU/hr） */
  A: number;
  /** own(u) = A/u + B 中的变动成本项（$/GPU/hr） */
  B: number;
  /** 盈亏平衡利用率 0..1；null 表示云价低于自建固定成本下限（租赁恒优） */
  breakevenUsage: number | null;
  /** 指定利用率下的自建 $/GPU/hr（u = 0 时为 Infinity） */
  ownAt: (u: number) => number;
}

export function clamp(n: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, n));
}

export function toUSD(amount: number | null | undefined, currency: 'USD' | 'CNY' | undefined | null): number {
  if (amount == null) return 0;
  if (currency === 'CNY') return amount / CNY_TO_USD;
  return amount;
}

/**
 * URL / 输入框数值消毒：空、NaN、±Infinity 一律回落 fallback，再夹到 [min, max]。
 * 用于堵住 `?qty=0` → NaN、`?years=0` → Infinity 这类链接污染。
 */
export function sanitizeNumber(
  raw: string | null | undefined,
  fallback: number,
  min: number,
  max: number,
): number {
  if (raw == null || String(raw).trim() === '') return fallback;
  const n = Number(raw);
  if (!Number.isFinite(n)) return fallback;
  return clamp(n, min, max);
}

/** 折现因子：Σ_{t=1..years} (1+r)^-t = (1 − (1+r)^-years) / r；r = 0 时退化为年限 */
export function discountFactorOf(discount: number, years: number): number {
  if (years <= 0) return 0;
  return discount > 0 ? (1 - Math.pow(1 + discount, -years)) / discount : years;
}

/**
 * 单年折现因子（年末现金流口径）：第 y 年 = (1+r)^-y。
 *
 * 必须与 discountFactorOf 同口径，二者满足恒等式
 *   `discountFactorOf(d, n) === Σ_{t=1..n} yearDiscountFactor(d, t)`
 * ——柱状图靠这条恒等式才能在最后一年精确收敛到 hero 的 TCO；
 * 若写成 (1+r)^-(y-1)（年初口径），末年累计会比 hero 高约 (1+r) 倍的运营部分。
 */
export function yearDiscountFactor(discount: number, year: number): number {
  return discount > 0 ? Math.pow(1 + discount, -year) : 1;
}

/**
 * 主 TCO 模型。
 *
 *   node    : TCO = 采购 + (设备电 + 冷却 + 租金) × 折现因子
 *   cluster : TCO = (采购 + 服务器 + 网络) + (设备电 + 冷却 + 租金 + 人力) × 折现因子
 *
 * 注意冷却与设备电的关系：PUE 已把冷却计入设施总电，这里用
 * `冷却 = 设备电 × (PUE − 1)` 单独列示，**不再把 (设备电 × PUE) 与冷却相加**，避免双重计算。
 */
export function computeTco(
  input: TcoInput,
  mode: DeploymentMode = 'node',
  cluster: ClusterInput = DEFAULT_CLUSTER,
): TcoResult {
  const isCluster = mode === 'cluster';
  const { unitPriceUSD, tdpW, qty, usage, price, years, dcCost, idleRatio, pue, discount } = input;

  const tdpKW = Math.max(0, tdpW) / 1000;
  const discountFactor = discountFactorOf(discount, years);

  const procurement = unitPriceUSD * qty;
  const servers = Math.max(1, Math.ceil(qty / CARDS_PER_SERVER));
  const server = isCluster ? servers * cluster.serverCost : 0;
  const network = isCluster ? procurement * cluster.networkRatio : 0;

  const annualDeviceElec = tdpKW * qty * (idleRatio + (1 - idleRatio) * usage) * 8760 * price;
  const annualCooling = annualDeviceElec * (pue - 1);
  const annualDc = dcCost * qty;
  const annualOps = isCluster ? (qty / 1000) * cluster.opsPerK : 0;

  const breakdown: CostBreakdown = {
    procurement,
    server,
    network,
    electricity: annualDeviceElec * discountFactor,
    dc: annualDc * discountFactor,
    cooling: annualCooling * discountFactor,
    ops: annualOps * discountFactor,
  };

  const oneTimeTotal = procurement + server + network;
  const tco = oneTimeTotal + breakdown.electricity + breakdown.dc + breakdown.cooling + breakdown.ops;

  return {
    mode,
    tco,
    breakdown,
    oneTimeTotal,
    annualDeviceElec,
    annualCooling,
    annualDc,
    annualOps,
    discountFactor,
  };
}

/**
 * Build vs Rent 闭式解。
 *
 * 自建单位成本对利用率 u 的解析式：own(u) = A/u + B
 *   A = (一次性采购 + 固定运营) / (8760 × years × qty)   —— 固定成本摊到「已利用的小时」
 *   B = 每 GPU 小时的变动电费（PUE 已含）
 * 平衡点：own(u*) = 云价 → u* = A / (云价 − B)。
 * 当云价 ≤ B 时，自建的最优单位成本已高于云价，租赁恒优 → 返回 null。
 */
export function computeBvr(
  input: TcoInput,
  mode: DeploymentMode,
  cluster: ClusterInput,
  cloudPrice: number,
): BvrResult {
  const { annualDc, annualOps, breakdown } = computeTco(input, mode, cluster);
  const { tdpW, qty, price, pue, years, idleRatio } = input;

  const tdpKW = Math.max(0, tdpW) / 1000;
  const c1 = breakdown.procurement + breakdown.server + breakdown.network;
  const c2 = (tdpKW * qty * idleRatio * 8760 * price * pue + annualDc + annualOps) * years;
  const c3 = tdpKW * qty * (1 - idleRatio) * 8760 * price * pue * years;
  const denom = 8760 * Math.max(years, 0) * Math.max(qty, 1);

  if (denom <= 0) {
    return { A: 0, B: 0, breakevenUsage: null, ownAt: () => Infinity };
  }

  const A = (c1 + c2) / denom;
  const B = c3 / denom;
  const ownAt = (u: number) => (u > 0 ? A / u + B : Infinity);
  const breakevenUsage = cloudPrice > B ? clamp(A / (cloudPrice - B), 0, 1) : null;

  return { A, B, breakevenUsage, ownAt };
}

/** 敏感性分析：把某个输入参数按情景覆盖后重算 TCO，与主模型共用同一函数 */
export function sensitivityScenarios(input: TcoInput): { label: string; overrides: Partial<TcoInput> }[] {
  return [
    { label: '电价 +20%', overrides: { price: input.price * 1.2 } },
    { label: '使用率 +20%', overrides: { usage: clamp(input.usage * 1.2, 0.1, 1) } },
    { label: '使用年限 +1 年', overrides: { years: input.years + 1 } },
    { label: 'PUE → 1.5', overrides: { pue: 1.5 } },
    { label: '空闲比率 → 30%', overrides: { idleRatio: 0.3 } },
  ];
}
