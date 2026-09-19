/**
 * 芯片排序和评分工具函数
 */

export interface HotChip {
  name: string;
  vendor: string;
  arch: string;
  mem: string;
  bw: string;
  fp16?: string;   // FP16 算力显示字符串，如 "989 TFLOPS"
  tdp?: string;    // TDP 显示字符串，如 "700W"
  fp16Tflops: number;
  category: string;
  bwRatio: number;
  slug: string;
  released: string;
}

export interface HomeContent {
  vendorWeight: Record<string, number>;
  categoryWeight: Record<string, number>;
  hotChips: HotChip[];
  [key: string]: unknown;
}

/**
 * 计算芯片评分
 * 综合重要性、时效性和算力性能
 */
export function rankScore(c: HotChip, content: HomeContent): number {
  const vw = content.vendorWeight[c.vendor] ?? 0.7;
  const cw = content.categoryWeight[c.category] ?? 0.3;
  const releaseDate = new Date(c.released).getTime();
  // 基准日取当前时间：时效分随时间自然衰减，无需每年手动改
  const ref = Date.now();
  const yearsOld = Math.max(0, (ref - releaseDate) / (1000 * 60 * 60 * 24 * 365.25));
  const recency = Math.max(0.3, Math.pow(0.85, yearsOld));
  const importance = vw * cw * recency;
  // 上限 12000：当代旗舰（Rubin R200 9000 / MI455X 10100）不再顶格，
  // /4000 使区间仍有区分度；未披露（0）给中性分 0.5，不当 0 处理（新品不沉底）
  const compute = c.fp16Tflops > 0 ? Math.min(c.fp16Tflops, 12000) / 4000 : 0.5;
  return importance * 0.5 + compute * 0.5;
}

/**
 * 对芯片列表进行排序
 * 按评分降序，评分相近时按发布日期降序
 */
export function sortChips(chips: HotChip[], content: HomeContent): HotChip[] {
  return [...chips].sort((a, b) => {
    const sa = rankScore(a, content);
    const sb = rankScore(b, content);
    if (Math.abs(sa - sb) > 0.001) return sb - sa;
    return b.released.localeCompare(a.released);
  });
}
