import React, { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import styles from './TcoCalculator.module.css';
import LeadCapture from './LeadCapture';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { useTcoT, segLabel, segShort, type TcoT } from './tco-i18n';
import {
  computeTco, computeBvr, sensitivityScenarios, sanitizeNumber, toUSD, yearDiscountFactor,
  CNY_TO_USD, DEFAULT_IDLE_RATIO, DEFAULT_PUE, DEFAULT_DISCOUNT,
  DEFAULT_QTY, DEFAULT_USAGE, DEFAULT_ELEC_PRICE, DEFAULT_YEARS, DEFAULT_DC_COST,
  DEFAULT_SERVER_COST, DEFAULT_NETWORK_RATIO, DEFAULT_OPS_PER_K, DEFAULT_CLOUD_PRICE,
  type DeploymentMode, type TcoInput, type ClusterInput, type CostBreakdown,
} from '../utils/tco-model';

// ===== 常量与工具 =====

interface Chip {
  id: string; name: string; vendor: string; tdp: number;
  fp16Tflops?: number | null;
  currency?: 'USD' | 'CNY' | null;
  originalPrice?: number;       // 原始币种价格
  originalPriceLabel?: string;  // 原始币种 + 来源标签
}
interface PricingInfo {
  official_msrp?: number | null;
  market_price?: number | null;
  currency?: 'USD' | 'CNY';
  source: string;
  note?: string;
}
interface PricingData { [vendor: string]: { [chipId: string]: PricingInfo } }
interface CompareItem {
  chip: Chip; quantity: number;
  /** 加入对比时采用的部署模式 —— 不同模式的条目不可直接比较大小写，但需如实标注 */
  mode: DeploymentMode;
  /** 展示口径 TCO（与 hero 一致：集群含服务器 / 网络 / 人力） */
  tco: number;
  procurement: number;   // GPU 采购（一次性）
  server: number;        // 服务器节点（一次性，仅集群）
  network: number;       // 网络设备（一次性，仅集群）
  electricity: number;   // 电费（折现）
  dc: number;            // 租金（折现）
  cooling: number;       // 冷却（折现）
  ops: number;           // 人力 OPEX（折现，仅集群）
  tcoPerTflops?: number | null;
}

const COLORS = ['#7F77DD', '#1D9E75', '#E0A030', '#E8633A']; // 品牌紫 / 青 / 琥珀 / 珊瑚
const COLORS_CLUSTER = ['#5A8DEE', '#C2559E', '#4DA8A0'];   // 集群附加：服务器蓝 / 网络品红 / 人力青

/**
 * 成本分段定义 —— 饼图 / 柱图 / 成本行 / 对比柱状图**共用这一份**。
 * 任何新增成本项只改这里，避免出现「柱图 5 段、饼图 7 段」这类同源不同口径。
 */
const COST_SEGMENTS: { key: keyof Omit<CompareItem, 'chip' | 'quantity' | 'mode' | 'tco' | 'tcoPerTflops'>; color: string }[] = [
  { key: 'procurement', color: COLORS[0] },
  { key: 'server', color: COLORS_CLUSTER[0] },
  { key: 'network', color: COLORS_CLUSTER[1] },
  { key: 'electricity', color: COLORS[1] },
  { key: 'dc', color: COLORS[2] },
  { key: 'cooling', color: COLORS[3] },
  { key: 'ops', color: COLORS_CLUSTER[2] },
];
/** 一次性支出项（柱图 hover 注记需要区分） */
const ONE_TIME_KEYS = COST_SEGMENTS.filter(s => s.key === 'procurement' || s.key === 'server' || s.key === 'network').map(s => s.key);

// ===== 工具函数 =====
function flatPricing(p: PricingData) {
  const o: Record<string, PricingInfo> = {};
  Object.keys(p).forEach(v => Object.keys(p[v]).forEach(c => o[c] = p[v][c]));
  return o;
}
function fmt(n: number) {
  if (n >= 1e6) return '$' + (n / 1e6).toFixed(1) + 'M';
  if (n >= 1e3) return '$' + (n / 1e3).toFixed(0) + 'K';
  return '$' + n.toLocaleString(undefined, { maximumFractionDigits: 0 });
}
function fmtFull(n: number) { return '$' + n.toLocaleString(undefined, { maximumFractionDigits: 0 }); }
function fmtOriginal(amount: number, currency: 'USD' | 'CNY' | undefined) {
  if (currency === 'CNY') return '¥' + amount.toLocaleString(undefined, { maximumFractionDigits: 0 });
  return fmtFull(amount);
}

// ===== URL 状态同步（P2-3）=====
const URL_KEYS = ['chip', 'qty', 'usage', 'price', 'years', 'dc', 'pue', 'idle', 'dr', 'manual', 'cur', 'mode', 'server', 'netr', 'ops', 'cloud'] as const;
type UrlKey = typeof URL_KEYS[number];
function readUrlParams(): Partial<Record<UrlKey, string>> {
  if (typeof window === 'undefined') return {};
  const u = new URLSearchParams(window.location.search);
  const out: Partial<Record<UrlKey, string>> = {};
  URL_KEYS.forEach(k => { const v = u.get(k); if (v != null) out[k] = v; });
  return out;
}
function writeUrlParams(state: Record<UrlKey, string | number | null>) {
  if (typeof window === 'undefined') return;
  const u = new URLSearchParams(window.location.search);
  URL_KEYS.forEach(k => {
    const v = state[k];
    if (v == null || v === '') u.delete(k);
    else u.set(k, String(v));
  });
  const newQs = u.toString();
  const newUrl = window.location.pathname + (newQs ? '?' + newQs : '') + window.location.hash;
  window.history.replaceState(null, '', newUrl);
}

// ===== 芯片中文名映射（保持原状；厂商名在 tco-i18n 字典中按 locale 取）=====

/**
 * `docs/cards/others/` 下聚集了 127 款（占全库一半以上）不同厂商的卡片，vendor 字段粒度不足。
 * 这里按 id 前缀再拆一层，使选择器里每个分组都在可浏览的量级；未命中的前缀仍归入 others。
 * 注意：`kunlun-*` 归到 `baidu`，让「昆仑芯」的卡片与 baidu 目录下的合并成一组。
 */
const PREFIX_GROUP: Record<string, string> = {
  apple: 'apple',
  metax: 'metax',
  'moore-threads': 'moore-threads',
  biren: 'biren',
  alibaba: 'alibaba',
  cambricon: 'cambricon',
  iluvatar: 'iluvatar',
  enflame: 'enflame',
  kunlun: 'baidu',
  hygon: 'hygon',
  horizon: 'horizon',
  sophgo: 'sophgo',
  tesla: 'tesla',
  qualcomm: 'qualcomm',
  mediatek: 'mediatek',
};
function groupOf(c: { id: string; vendor: string }): string {
  if (c.vendor !== 'others') return c.vendor;
  for (const p of Object.keys(PREFIX_GROUP)) {
    if (c.id === p || c.id.startsWith(p + '-')) return PREFIX_GROUP[p];
  }
  return 'others';
}
const ZH_NAMES: Record<string, string> = {
  'a100': 'NVIDIA A100', 'h100': 'NVIDIA H100 SXM', 'h100-nvl': 'NVIDIA H100 NVL',
  'h200': 'NVIDIA H200 SXM', 'h20': 'NVIDIA H20', 'h800': 'NVIDIA H800',
  'b100': 'NVIDIA B100', 'b200': 'NVIDIA B200', 'b300-ultra': 'NVIDIA B300 Ultra',
  'l2': 'NVIDIA L2', 'l4': 'NVIDIA L4', 'l40s': 'NVIDIA L40S', 't4': 'NVIDIA T4',
  'rtx-4090': 'NVIDIA RTX 4090', 'rtx-5080': 'NVIDIA RTX 5080', 'rtx-5090': 'NVIDIA RTX 5090',
  'rtx-5090-d-v2': 'NVIDIA RTX 5090 D v2', 'rtx-6000-ada': 'NVIDIA RTX 6000 Ada',
  'rtx-pro-6000-blackwell': 'NVIDIA RTX Pro 6000 Blackwell', 'rtx-spark': 'NVIDIA RTX Spark',
  'gb200': 'NVIDIA GB200', 'gb300': 'NVIDIA GB300',
  'rubin': 'NVIDIA Rubin', 'rubin-cpx': 'NVIDIA Rubin CPX', 'rubin-r200': 'NVIDIA Rubin R200',
  'drive-thor': 'NVIDIA DRIVE Thor', 'jetson-orin': 'NVIDIA Jetson Orin', 'jetson-thor': 'NVIDIA Jetson Thor',
  'vera-cpu': 'NVIDIA Vera CPU',
  'mi210': 'AMD Instinct MI210', 'mi250': 'AMD Instinct MI250', 'mi300a': 'AMD Instinct MI300A',
  'mi300x': 'AMD Instinct MI300X', 'mi325x': 'AMD Instinct MI325X',
  'mi350': 'AMD Instinct MI350X', 'mi355x': 'AMD Instinct MI355X', 'mi400': 'AMD Instinct MI400',
  'ryzen-ai-max': 'AMD Ryzen AI Max',
  'gaudi-1': 'Intel Gaudi 1', 'gaudi-2': 'Intel Gaudi 2', 'gaudi-3': 'Intel Gaudi 3', 'gaudi-4': 'Intel Gaudi 4',
  'max-series': 'Intel Max Series', 'flex-series': 'Intel Flex 系列',
  'arc-pro-b60': 'Intel Arc Pro B60', 'arc-pro-b50': 'Intel Arc Pro B50',
  'core-ultra-2': 'Intel Core Ultra Series 2', 'jaguar-shores': 'Intel Jaguar Shores',
  'crescent-island': 'Intel Crescent Island',
  'ascend-910b': '华为昇腾 910B', 'ascend-910c': '华为昇腾 910C', 'ascend-910d': '华为昇腾 910D',
  'ascend-920': '华为昇腾 920', 'ascend-950': '华为昇腾 950',
  'ascend-950dt': '华为昇腾 950DT', 'ascend-950pr': '华为昇腾 950PR',
  'tpu-v4': 'Google TPU v4', 'tpu-v5e': 'Google TPU v5e', 'tpu-v5p': 'Google TPU v5p',
  'tpu-v6e': 'Google TPU v6e', 'tpu-v6p': 'Google TPU v6p',
  'tpu-8i': 'Google TPU 8i', 'tpu-8t': 'Google TPU 8t', 'tpu-ironwood': 'Google TPU Ironwood',
  'edge-tpu': 'Google Edge TPU',
  'trainium': 'AWS Trainium', 'trainium-2': 'AWS Trainium 2', 'trainium-3': 'AWS Trainium 3',
  'inferentia': 'AWS Inferentia', 'inferentia-2': 'AWS Inferentia 2',
  'biren-br104': '壁仞 BR104', 'cambricon-mlu-590': '寒武纪 MLU590',
  'cambricon-mlu-370': '寒武纪 MLU370', 'cambricon-mlu-690': '寒武纪 MLU690',
  'kunlun-m100': '百度昆仑 M100', 'kunlun-m300': '百度昆仑 M300', 'kunlun-p800': '百度昆仑 P800',
  'metax-c600': '沐曦 C600', 'hygon-dcu-k100': '海光 DCU K100',
  'moore-threads-mtt-s5000': '摩尔线程 MTT S5000',
  'enflame-t20': '燧原 T20', 'furiosaai-rngd': 'FuriosaAI RNGD',
  'qualcomm-ai-100': '高通 AI 100', 'qualcomm-ai200': '高通 AI200', 'qualcomm-ai250': '高通 AI250',
  'qualcomm-snapdragon-x-elite': '骁龙 X Elite',
  'alibaba-hanguang-800': '阿里含光 800', 'alibaba-ppu': '阿里 PPU',
  'apple-a17-pro': 'Apple A17 Pro', 'apple-a18': 'Apple A18', 'apple-a18-pro': 'Apple A18 Pro',
  'apple-a19': 'Apple A19', 'apple-a19-pro': 'Apple A19 Pro',
  'apple-m1-pro': 'Apple M1 Pro', 'apple-m1-max': 'Apple M1 Max',
  'apple-m1-ultra': 'Apple M1 Ultra', 'apple-m2-max': 'Apple M2 Max', 'apple-m2-ultra': 'Apple M2 Ultra',
  'apple-m3-max': 'Apple M3 Max', 'apple-m3-ultra': 'Apple M3 Ultra',
  'apple-m4-pro': 'Apple M4 Pro', 'apple-m4-max': 'Apple M4 Max', 'apple-m4-ultra': 'Apple M4 Ultra',
  'apple-m5-ultra': 'Apple M5 Ultra',
  'mediatek-dimensity-9400': '联发科天玑 9400',
  'graphcore-ipu': 'Graphcore IPU', 'wse-2': 'Cerebras WSE-2', 'wse-3': 'Cerebras WSE-3', 'wse-4': 'Cerebras WSE-4',
  'groq-lpu': 'Groq LPU', 'groq-lpu-v2': 'Groq LPU v2', 'groq-3-lpx': 'Groq 3 LPX',
  'etched-sohu': 'Etched Sohu', 'd-matrix-corsair': 'D-Matrix Corsair',
  'sambanova-sn40l': 'SambaNova SN40L', 'sn50': 'SambaNova SN50',
  'tenstorrent-grayskull': 'Tenstorrent Grayskull', 'tenstorrent-wormhole': 'Tenstorrent Wormhole',
  'tenstorrent-blackhole': 'Tenstorrent Blackhole',
  'tesla-dojo': 'Tesla Dojo D1', 'tesla-dojo-v2': 'Tesla Dojo v2',
  'maia-200': 'Microsoft Maia 200', 'mtia-v1': 'Meta MTIA v1', 'mtia-v2': 'Meta MTIA v2', 'mtia-v3': 'Meta MTIA v3',
  'hailo': 'Hailo-8', 'hailo-15': 'Hailo-15',
  'lightelligence': '光子智能 Lightelligence', 'lightmatter-envise': 'Lightmatter Envise',
  'lighton': 'LightOn', 'mobilint': 'Mobilint', 'akida-2': 'BrainChip Akida 2',
  'blaize-xplorer': 'Blaze Xplorer', 'rebellions-rbln': 'Rebellions RBLN',
  'ibm-northpole': 'IBM NorthPole', 'hbm-pim': 'SK海力士 HBM-PIM',
};
function zhName(id: string, fallback: string): string { return ZH_NAMES[id] || fallback.replace(/\([^)]*\)/g, '').trim(); }
/** 按 locale 取芯片显示名：EN 优先查字典覆盖表，未命中回落 ZH_NAMES */
function displayName(id: string, fallback: string, t: TcoT): string {
  if (t.lang === 'en') {
    const en = t.chipNames[id];
    if (en) return en;
  }
  return zhName(id, fallback);
}
function vendorLabel(v: string, t: TcoT): string { return t.vendors[v] || v; }

// ===== 数字滚动动画 Hook =====
// 仅在 animateKey 变化（如切换芯片）时播放数字滚动动画；
// 拖动 slider 等连续变更时直接显示目标值，避免数字抖动。
function useCountUp(target: number, animateKey: string | number = ''): number {
  const [val, setVal] = useState(target);
  const rafRef = useRef<number | null>(null);
  const prevKey = useRef(animateKey);
  useEffect(() => {
    const keyChanged = animateKey !== prevKey.current;
    prevKey.current = animateKey;
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    if (!keyChanged) { setVal(target); return; }
    const from = val;
    const start = performance.now();
    const duration = 500;
    const step = (ts: number) => {
      const p = Math.min(1, (ts - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(from + (target - from) * eased);
      if (p < 1) rafRef.current = requestAnimationFrame(step);
    };
    rafRef.current = requestAnimationFrame(step);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [target, animateKey]);
  return val;
}
function AnimatedMoney({ value, animateKey = '' }: { value: number; animateKey?: string | number }) {
  const v = useCountUp(value, animateKey);
  return <span className={styles.tcoValue}>{fmtFull(Math.round(v))}</span>;
}

// ===== 自定义下拉框（搜索+分组 + P4-1 ARIA + 键盘导航）=====
function ChipSelect({ chips, value, onChange, id }: {
  chips: Chip[]; value: string; onChange: (v: string) => void; id?: string;
}) {
  const t = useTcoT();
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState('');
  const [activeIdx, setActiveIdx] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onDoc = (e: MouseEvent) => { if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false); };
    document.addEventListener('mousedown', onDoc);
    return () => document.removeEventListener('mousedown', onDoc);
  }, []);

  const filtered = useMemo(() => {
    const ql = q.trim().toLowerCase();
    if (!ql) return chips;
    return chips.filter(c =>
      displayName(c.id, c.name, t).toLowerCase().includes(ql) ||
      c.id.toLowerCase().includes(ql) ||
      vendorLabel(groupOf(c), t).toLowerCase().includes(ql)
    );
  }, [chips, q, t]);

  const grouped = useMemo(() => {
    const g: Record<string, Chip[]> = {};
    filtered.forEach(c => { const k = groupOf(c); (g[k] = g[k] || []).push(c); });
    return g;
  }, [filtered]);

  // 把分组扁平化为可键盘导航的列表
  const flatList = useMemo(() => {
    const list: Chip[] = [];
    Object.keys(grouped).sort().forEach(v => list.push(...grouped[v]));
    return list;
  }, [grouped]);

  useEffect(() => { if (open) setActiveIdx(0); }, [open, q]);

  // 键盘导航（P4-1）
  const onKeyDown = (e: React.KeyboardEvent) => {
    if (!open) {
      if (e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowDown') {
        e.preventDefault(); setOpen(true); return;
      }
      return;
    }
    if (e.key === 'Escape') { e.preventDefault(); setOpen(false); return; }
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIdx(i => Math.min(flatList.length - 1, i + 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIdx(i => Math.max(0, i - 1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      const c = flatList[activeIdx];
      if (c) { onChange(c.id); setOpen(false); setQ(''); }
    }
  };

  const current = chips.find(c => c.id === value);
  const activeId = flatList[activeIdx]?.id;

  return (
    <div ref={ref} className={styles.selectWrap} onKeyDown={onKeyDown}>
      <button
        type="button"
        id={id}
        role="combobox"
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-controls="tco-chip-listbox"
        aria-activedescendant={open && activeId ? `tco-opt-${activeId}` : undefined}
        aria-label={t.select.triggerAria}
        onClick={() => setOpen(!open)}
        className={styles.selectTrigger}
      >
        <span className={styles.selectTriggerText}>
          {current ? `${displayName(current.id, current.name, t)} — ${current.tdp}W` : t.select.placeholder}
        </span>
        <span className={`${styles.selectArrow} ${open ? styles.selectArrowOpen : ''}`}>▼</span>
      </button>
      {open && (
        <div className={styles.selectDropdown} role="presentation">
          <div className={styles.selectSearch}>
            <input
              autoFocus
              value={q}
              onChange={e => setQ(e.target.value)}
              placeholder={t.select.searchPlaceholder}
              className={styles.selectSearchInput}
              aria-label={t.select.searchAria}
            />
          </div>
          <div className={styles.selectList} ref={listRef} role="listbox" id="tco-chip-listbox" aria-label={t.select.listAria}>
            {flatList.length === 0 ? (
              <div className={styles.selectEmpty}>{t.select.noMatch}</div>
            ) : Object.keys(grouped).sort().map(v => (
              <div key={v}>
                <div className={styles.selectGroupHeader}>
                  {vendorLabel(v, t)} ({grouped[v].length})
                </div>
                {grouped[v].map(c => {
                  const flatIdx = flatList.findIndex(x => x.id === c.id);
                  const isActive = flatIdx === activeIdx;
                  const isSelected = c.id === value;
                  return (
                    <button
                      type="button"
                      key={c.id}
                      id={`tco-opt-${c.id}`}
                      role="option"
                      aria-selected={isSelected}
                      onClick={() => { onChange(c.id); setOpen(false); setQ(''); }}
                      onMouseEnter={() => setActiveIdx(flatIdx)}
                      className={`${styles.selectItem} ${isSelected || isActive ? styles.selectItemActive : ''}`}
                    >
                      <span>{displayName(c.id, c.name, t)}</span>
                      <span className={styles.selectItemTdp}>{c.tdp}W</span>
                    </button>
                  );
                })}
              </div>
            ))}
          </div>
          <div className={styles.selectFooter}>{t.select.footer(filtered.length)}</div>
        </div>
      )}
    </div>
  );
}

// ===== 饼图（P4-2 加 title/aria-label）=====
const Pie = React.memo(function Pie({ data, hoverIdx, setHover, totalLabel }: {
  data: { label: string; value: number; color: string }[];
  hoverIdx: number | null;
  setHover: (i: number | null) => void;
  totalLabel?: string;
}) {
  const t = useTcoT();
  const centerTotalLabel = totalLabel ?? t.pie.total;
  const total = data.reduce((s, d) => s + d.value, 0);
  if (!total) return <div className={styles.tcoEmpty}><div className={styles.tcoEmptyEmoji}>📊</div><div>{t.pie.noData}</div></div>;
  let acc = 0;
  const segs = data.map(d => { const s = (acc / total) * 360; acc += d.value; const e = (acc / total) * 360; return { ...d, s, e }; });
  const cx = 80, cy = 80, r = 70;
  function pol(a: number) { const rad = (a - 90) * Math.PI / 180; return `${cx + r * Math.cos(rad)},${cy + r * Math.sin(rad)}`; }
  const active = hoverIdx !== null ? segs[hoverIdx] : null;
  const displayTotal = active ? active.value : total;
  const displayLabel = active ? active.label : centerTotalLabel;
  return (
    <div className={styles.pieWrap}>
      <svg viewBox="0 0 160 160" width={140} height={140} style={{ flexShrink: 0 }}
        role="img" aria-label={t.pie.aria(segs.length, fmtFull(Math.round(total)))}>
        <title>{t.pie.title}</title>
        {segs.map((d, i) => {
          const large = d.e - d.s > 180 ? 1 : 0;
          const isHover = hoverIdx === i;
          return (
            <path key={i} d={`M${cx},${cy} L${pol(d.s)} A${r},${r} 0 ${large},1 ${pol(d.e)} Z`}
              fill={d.color} opacity={hoverIdx === null || isHover ? 1 : 0.35}
              onMouseEnter={() => setHover(i)} onMouseLeave={() => setHover(null)}
              onFocus={() => setHover(i)} onBlur={() => setHover(null)} tabIndex={-1}
              style={{ cursor: 'pointer', transition: 'opacity 0.2s', transform: isHover ? 'scale(1.04)' : 'scale(1)', transformOrigin: `${cx}px ${cy}px` }}
            >
              <title>{d.label}: {fmtFull(Math.round(d.value))} ({((d.value / total) * 100).toFixed(1)}%)</title>
            </path>
          );
        })}
        <circle cx={cx} cy={cy} r={52} className={styles.pieCenter} />
        <text x={cx} y={cy - 4} textAnchor="middle" className={styles.pieCenterLabel}>{displayLabel}</text>
        <text x={cx} y={cy + 14} textAnchor="middle" className={styles.pieCenterValue}>{fmt(displayTotal)}</text>
      </svg>
      <div className={styles.pieLegend} role="list" aria-label={t.pie.legendAria}>
        {segs.map((d, i) => (
          <div key={i} role="listitem"
            onMouseEnter={() => setHover(i)} onMouseLeave={() => setHover(null)}
            className={`${styles.pieLegendItem} ${hoverIdx === i ? styles.pieLegendHover : ''}`}
          >
            <span className={styles.pieLegendDot} style={{ background: d.color }} aria-hidden="true" />
            <span className={styles.pieLegendName}>{d.label}</span>
            <span className={styles.pieLegendValue}>{fmt(d.value)}</span>
            <span className={styles.pieLegendPct}>{((d.value / total) * 100).toFixed(1)}%</span>
          </div>
        ))}
      </div>
    </div>
  );
});

// ===== 柱状图（P4-2；分段与饼图共用 COST_SEGMENTS，口径永远一致）=====
type BarSeg = { key: string; label: string; color: string };
const Bars = React.memo(function Bars({ data, segs, hoverYear, setHover, oneTimeTotal }: {
  data: { year: number; values: Record<string, number> }[];
  segs: BarSeg[];
  hoverYear: number | null; setHover: (y: number | null) => void;
  /** 一次性支出合计（采购 + 服务器 + 网络），用于第 1 年注记——与成本行同源 */
  oneTimeTotal: number;
}) {
  const tr = useTcoT();
  const totalOf = (d: { values: Record<string, number> }) => segs.reduce((s, g) => s + (d.values[g.key] ?? 0), 0);
  const max = Math.max(...data.map(totalOf), 1);
  const hoverEntry = hoverYear !== null ? data.find(d => d.year === hoverYear) : null;
  const hoverTotal = hoverEntry ? totalOf(hoverEntry) : 0;
  return (
    <div>
      <div className={styles.barHoverLabel} aria-live="polite">
        {hoverEntry ? (
          <>{tr.bars.yearCum(hoverEntry.year, fmt(hoverTotal))}
            {hoverEntry.year === 1 && oneTimeTotal > 0 && <span className={styles.barHoverNote}>{tr.bars.oneTimeNote(fmt(oneTimeTotal))}</span>}
          </>
        ) : tr.bars.hoverHint}
      </div>
      <div className={styles.barArea} role="img" aria-label={tr.bars.aria(data.length)}>
        {data.map(d => {
          const t = totalOf(d);
          const h = (t / max) * 100;
          let acc = 0;
          const stops: string[] = [];
          segs.forEach(g => {
            const v = d.values[g.key] ?? 0;
            if (v <= 0 || t <= 0) return;
            const p0 = (acc / t) * 100; acc += v; const p1 = (acc / t) * 100;
            stops.push(`${g.color} ${p0}%,${g.color} ${p1}%`);
          });
          const grad = stops.length ? `linear-gradient(to top,${stops.join(',')})` : 'transparent';
          const isHover = hoverYear === d.year;
          return (
            <div key={d.year} className={styles.barCol}
              onMouseEnter={() => setHover(d.year)} onMouseLeave={() => setHover(null)}
              onFocus={() => setHover(d.year)} onBlur={() => setHover(null)} tabIndex={-1}
            >
              <div className={`${styles.barTopLabel} ${isHover ? styles.barTopLabelHover : ''}`}>{fmt(t)}</div>
              <div className={styles.barSlot}>
                <div className={styles.barFill}
                  style={{ height: `${h}%`, background: grad, opacity: hoverYear === null || isHover ? 1 : 0.4 }}
                  role="img" aria-label={tr.bars.yearTotalAria(d.year, fmtFull(Math.round(t)))}
                />
              </div>
              <div className={`${styles.barBottomLabel} ${isHover ? styles.barBottomLabelHover : ''}`}>{tr.bars.yearAxis(d.year)}</div>
            </div>
          );
        })}
      </div>
      <div className={styles.barLegend}>
        {segs.map(g => (
          <span key={g.key} className={styles.barLegendItem}><span className={styles.barLegendDot} style={{ background: g.color }} />{g.label}</span>
        ))}
      </div>
    </div>
  );
});

// ===== 多芯片对比柱状图（P3-1；分段同样取自 COST_SEGMENTS）=====
const CompareChart = React.memo(function CompareChart({ compare }: { compare: CompareItem[] }) {
  const tr = useTcoT();
  const [hoverId, setHoverId] = useState<string | null>(null);
  if (compare.length === 0) return null;
  const max = Math.max(...compare.map(x => x.tco), 1);
  const segs = COST_SEGMENTS.filter(s => compare.some(x => (x[s.key] ?? 0) > 0));
  return (
    <div className={styles.compareChart}>
      <div className={styles.compareChartTitle}>{tr.compareChart.title(segs.map(s => segShort(tr, s.key)).join(' / '))}</div>
      <div className={styles.barArea} role="img" aria-label={tr.compareChart.aria(compare.length)}>
        {compare.map(item => {
          const t = item.tco;
          const h = (t / max) * 100;
          let acc = 0;
          const stops: string[] = [];
          segs.forEach(s => {
            const v = item[s.key] ?? 0;
            if (v <= 0 || t <= 0) return;
            const p0 = (acc / t) * 100; acc += v; const p1 = (acc / t) * 100;
            stops.push(`${s.color} ${p0}%,${s.color} ${p1}%`);
          });
          const grad = stops.length ? `linear-gradient(to top,${stops.join(',')})` : 'transparent';
          const isHover = hoverId === item.chip.id;
          const detail = segs.filter(s => (item[s.key] ?? 0) > 0)
            .map(s => `${segShort(tr, s.key)} ${fmtFull(Math.round(item[s.key]))}`).join(tr.lang === 'en' ? '; ' : '，');
          return (
            <div key={item.chip.id} className={`${styles.barCol} ${isHover ? styles.barColHover : ''}`}>
              <div className={styles.barTopLabel}>{fmt(t)}</div>
              <div className={styles.barSlot}>
                <div className={styles.barFill}
                  style={{ height: `${h}%`, background: grad, opacity: hoverId === null || isHover ? 1 : 0.4 }}
                  role="img" tabIndex={0}
                  aria-label={tr.compareChart.itemAria(
                    displayName(item.chip.id, item.chip.name, tr),
                    item.mode === 'cluster' ? tr.compareChart.modeCluster : tr.compareChart.modeNode,
                    fmtFull(Math.round(t)), detail,
                  )}
                  onMouseEnter={() => setHoverId(item.chip.id)} onMouseLeave={() => setHoverId(null)}
                  onFocus={() => setHoverId(item.chip.id)} onBlur={() => setHoverId(null)}
                />
              </div>
              <div className={styles.barBottomLabel} style={{ maxWidth: 80, textAlign: 'center', fontSize: '0.66rem', lineHeight: 1.2, marginTop: 4 }}>
                {displayName(item.chip.id, item.chip.name, tr).split(' ').pop()}
              </div>
            </div>
          );
        })}
      </div>
      <div className={styles.barLegend}>
        {segs.map(s => (
          <span key={s.key} className={styles.barLegendItem}><span className={styles.barLegendDot} style={{ background: s.color }} />{segShort(tr, s.key)}</span>
        ))}
      </div>
    </div>
  );
});

// ===== 敏感性分析（P3-2；与主模型共用 computeTco，集群 / 单节点自动同口径）=====
function Sensitivity({ base, input, mode, cluster }: {
  base: number;
  input: TcoInput;
  mode: DeploymentMode;
  cluster: ClusterInput;
}) {
  const t = useTcoT();
  // 情景定义在 tco-model 里，评估也走同一个 computeTco —— 不会再出现「敏感性用 A 公式、hero 用 B 公式」
  const scenarios = sensitivityScenarios(input);
  return (
    <div className={styles.sensitivityBox}>
      <div className={styles.sensitivityTitle}>{t.sensitivity.title}</div>
      <div className={styles.sensitivityGrid}>
        {scenarios.map((s, i) => {
          const tcoUp = computeTco({ ...input, ...s.overrides }, mode, cluster).tco;
          const delta = tcoUp - base;
          const pct = base > 0 ? (delta / base) * 100 : 0;
          const color = Math.abs(pct) > 20 ? 'var(--ifm-color-danger)' :
                        Math.abs(pct) > 10 ? 'var(--ifm-color-warning)' : 'var(--ifm-color-success)';
          return (
            <div key={s.label} className={styles.sensitivityItem}>
              <div className={styles.sensitivityLabel}>{t.sensitivity.scenarios[i]}</div>
              <div className={styles.sensitivityValue} style={{ color }}>
                {delta >= 0 ? '+' : ''}{fmtFull(Math.round(delta))} ({pct >= 0 ? '+' : ''}{pct.toFixed(1)}%)
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ===== 导出 CSV（含汇率与原币种；成本明细与页面同取一份 breakdown）=====
function exportCSV(
  chip: Chip, qty: number, years: number, usage: number, price: number,
  dcCost: number, idleRatio: number, pue: number, discount: number,
  unitPriceUSD: number, originalPrice: number | null, originalCurrency: 'USD' | 'CNY' | null,
  isManualPrice: boolean, mode: DeploymentMode, bb: CostBreakdown, totalTco: number,
  compare: CompareItem[], tr: TcoT
) {
  const isCluster = mode === 'cluster';
  const rows: string[][] = [];
  rows.push([tr.csv.reportTitle]);
  rows.push([tr.csv.generatedAt, new Date().toISOString()]);
  rows.push([]);
  rows.push([tr.csv.paramsSection]);
  rows.push([tr.csv.chip, displayName(chip.id, chip.name, tr)]);
  rows.push([tr.csv.tdp, String(chip.tdp)]);
  rows.push([tr.csv.qty, String(qty)]);
  rows.push([tr.csv.mode, isCluster ? tr.csv.modeCluster : tr.csv.modeNode]);
  rows.push([tr.csv.usage, `${(usage * 100).toFixed(0)}%`]);
  rows.push([tr.csv.elecPrice, String(price)]);
  rows.push([tr.csv.years, String(years)]);
  rows.push([tr.csv.dcRent, String(dcCost)]);
  rows.push([tr.csv.idleRatio, `${(idleRatio * 100).toFixed(0)}%`]);
  rows.push([tr.csv.pue, String(pue)]);
  rows.push([tr.csv.discountRate, `${(discount * 100).toFixed(1)}%`]);
  rows.push([tr.csv.unitPrice, String(Math.round(unitPriceUSD))]);
  if (originalPrice != null && originalCurrency) {
    rows.push([tr.csv.originalPrice, tr.lead.priceWithCurrency(fmtOriginal(originalPrice, originalCurrency), originalCurrency)]);
    rows.push([tr.csv.fxLabel, tr.csv.fxRate(String(CNY_TO_USD))]);
  }
  rows.push([tr.csv.priceSource, isManualPrice ? tr.csv.sourceManual : tr.csv.sourceDb]);
  rows.push([]);
  rows.push([tr.csv.detailSection]);
  rows.push([tr.csv.item, tr.csv.amount, tr.csv.share]);
  const t = totalTco || 1;
  COST_SEGMENTS.forEach(s => {
    const v = bb[s.key];
    if (v <= 0) return;
    const suffix = s.key === 'procurement' ? tr.costSuffix.card : ONE_TIME_KEYS.includes(s.key) ? tr.costSuffix.oneTime : tr.costSuffix.discounted;
    rows.push([`${segLabel(tr, s.key)}${suffix}`, String(Math.round(v)), `${(v / t * 100).toFixed(1)}%`]);
  });
  rows.push([isCluster ? tr.csv.totalCluster : tr.csv.total, String(Math.round(totalTco)), '100.0%']);
  rows.push([tr.csv.annual, String(Math.round(totalTco / years)), '']);
  rows.push([tr.csv.perCardAnnual, String(Math.round(totalTco / qty / years)), '']);
  if (chip.fp16Tflops) {
    rows.push([tr.csv.fp16, String(chip.fp16Tflops), '']);
    rows.push([tr.csv.perTflops, String(Math.round(totalTco / (chip.fp16Tflops * qty * years))), '']);
  }
  rows.push([]);
  if (compare.length > 0) {
    rows.push([tr.csv.compareSection]);
    const cmpSegs = COST_SEGMENTS.filter(s => compare.some(x => (x[s.key] ?? 0) > 0));
    const withTflops = compare.some(c => c.tcoPerTflops != null);
    const header = [tr.csv.colChip, tr.csv.colMode, tr.csv.colQty, tr.csv.colTco, ...cmpSegs.map(s => `${segShort(tr, s.key)} ($)`)];
    if (withTflops) header.push(tr.csv.colPerTflops);
    rows.push(header);
    compare.forEach(c => {
      const row: string[] = [
        displayName(c.chip.id, c.chip.name, tr),
        c.mode === 'cluster' ? tr.csv.compareModeCluster : tr.csv.compareModeNode,
        String(c.quantity),
        String(Math.round(c.tco)),
      ];
      cmpSegs.forEach(s => row.push(String(Math.round(c[s.key] ?? 0))));
      if (withTflops) row.push(c.tcoPerTflops != null ? String(Math.round(c.tcoPerTflops)) : '');
      rows.push(row);
    });
  }
  const csv = '\uFEFF' + rows.map(r => r.map(c => `"${(c || '').replace(/"/g, '""')}"`).join(',')).join('\n');
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = tr.csv.fileName(chip.id, qty, years, isCluster, new Date().toISOString().slice(0, 10));
  a.click(); URL.revokeObjectURL(url);
}

// ===== 主组件 =====
export default function TcoCalculator() {
  const { i18n } = useDocusaurusContext();
  const t = useTcoT();
  const [chips, setChips] = useState<Chip[]>([]);
  const [pricing, setPricing] = useState<Record<string, PricingInfo>>({});
  const [chipId, setChipId] = useState('');
  const [qty, setQty] = useState(DEFAULT_QTY);
  const [usage, setUsage] = useState(DEFAULT_USAGE);
  const [price, setPrice] = useState(DEFAULT_ELEC_PRICE);
  const [years, setYears] = useState(DEFAULT_YEARS);
  const [dcCost, setDcCost] = useState(DEFAULT_DC_COST);
  const [idleRatio, setIdleRatio] = useState(DEFAULT_IDLE_RATIO);
  const [pue, setPue] = useState(DEFAULT_PUE);
  const [discount, setDiscount] = useState(DEFAULT_DISCOUNT);
  const [manualPrice, setManualPrice] = useState<number | null>(null);
  const [compare, setCompare] = useState<CompareItem[]>([]);
  const [pieHover, setPieHover] = useState<number | null>(null);
  const [barHover, setBarHover] = useState<number | null>(null);
  const [toast, setToast] = useState('');

  // ===== 部署模式与 Build vs Rent（集群级升级）=====
  const [mode, setMode] = useState<DeploymentMode>('node');
  const [serverCost, setServerCost] = useState(DEFAULT_SERVER_COST);      // 每 8 卡服务器节点价（CPU/主板/内存/存储/机箱）
  const [networkRatio, setNetworkRatio] = useState(DEFAULT_NETWORK_RATIO); // 网络设备占 GPU 采购价比（交换机/光模块/DPU）
  const [opsPerK, setOpsPerK] = useState(DEFAULT_OPS_PER_K);              // 每千卡年人力 OPEX（SRE/机房运维）
  const [cloudPrice, setCloudPrice] = useState(DEFAULT_CLOUD_PRICE);      // 云 GPU 租赁价 $/GPU/hr（对照价）

  // 初始加载数据 + 读取 URL
  const urlLoaded = useRef(false);
  useEffect(() => {
    Promise.all([
      fetch('/chips.json').then(r => r.json()),
      fetch('/pricing.json').then(r => r.json()),
    ]).then(([chipsData, pricingData]: [any[], PricingData]) => {
      setChips(chipsData.map((c: any) => ({
        id: c.id, name: c.title || c.id, vendor: c.vendor || 'unknown',
        tdp: c.tdpW || 0, fp16Tflops: c.fp16Tflops || null,
      })));
      setPricing(flatPricing(pricingData));
      // 读取 URL 参数（P2-3）。所有数值一律过 sanitizeNumber：
      // 空值回落默认、NaN/±Infinity 回落默认、越界夹到区间——`?qty=0` 曾让 hero 显示 NaN、
      // `?years=0` 曾让折现因子与分母双双归零得到 Infinity。
      const u = readUrlParams();
      if (u.chip && chipsData.some((c: any) => c.id === u.chip)) setChipId(u.chip);
      setQty(sanitizeNumber(u.qty, DEFAULT_QTY, 1, 65536));
      setUsage(sanitizeNumber(u.usage, DEFAULT_USAGE, 0.1, 1));
      setPrice(sanitizeNumber(u.price, DEFAULT_ELEC_PRICE, 0.01, 5));
      setYears(sanitizeNumber(u.years, DEFAULT_YEARS, 1, 8));
      setDcCost(sanitizeNumber(u.dc, DEFAULT_DC_COST, 0, 50000));
      setPue(sanitizeNumber(u.pue, DEFAULT_PUE, 1.05, 1.6));
      setIdleRatio(sanitizeNumber(u.idle, DEFAULT_IDLE_RATIO, 0.05, 0.4));
      setDiscount(sanitizeNumber(u.dr, DEFAULT_DISCOUNT, 0, 0.2));
      if (u.manual != null) {
        const mp = sanitizeNumber(u.manual, Number.NaN, 0, 1e7);
        if (Number.isFinite(mp) && mp > 0) setManualPrice(mp);
      }
      if (u.cur != null) setCurrencyView(sanitizeNumber(u.cur, 0, 0, 1) >= 0.5 ? 1 : 0); // 0=USD, 1=CNY
      if (u.mode === 'cluster') setMode('cluster');
      setServerCost(sanitizeNumber(u.server, DEFAULT_SERVER_COST, 0, 1e6));
      setNetworkRatio(sanitizeNumber(u.netr, DEFAULT_NETWORK_RATIO, 0.02, 0.4));
      setOpsPerK(sanitizeNumber(u.ops, DEFAULT_OPS_PER_K, 0, 1e7));
      setCloudPrice(sanitizeNumber(u.cloud, DEFAULT_CLOUD_PRICE, 0.1, 50));
      urlLoaded.current = true;
    });
  }, []);

  // 货币选择（CNY 展示原币种价格，但 TCO 统一用 USD）
  const [currencyView, setCurrencyView] = useState(0);  // 0=USD, 1=CNY
  // 当 pricing 加载后才设置 URL
  useEffect(() => {
    if (!urlLoaded.current) return;
    writeUrlParams({
      chip: chipId || null, qty, usage, price, years, dc: dcCost,
      pue: pue === DEFAULT_PUE ? null : pue,
      idle: idleRatio === DEFAULT_IDLE_RATIO ? null : idleRatio,
      dr: discount === DEFAULT_DISCOUNT ? null : discount,
      manual: manualPrice,
      cur: currencyView === 0 ? null : currencyView,
      mode: mode === 'cluster' ? 'cluster' : null,
      server: serverCost === 30000 ? null : serverCost,
      netr: networkRatio === 0.12 ? null : networkRatio,
      ops: opsPerK === 150000 ? null : opsPerK,
      cloud: cloudPrice === 2.5 ? null : cloudPrice,
    });
  }, [chipId, qty, usage, price, years, dcCost, idleRatio, pue, discount, manualPrice, currencyView, mode, serverCost, networkRatio, opsPerK, cloudPrice]);

  const chip = chips.find(c => c.id === chipId);
  const chipPriceInfo = chip ? pricing[chipId] : null;
  const dbPriceUSD = chipPriceInfo ? toUSD(chipPriceInfo.market_price ?? chipPriceInfo.official_msrp ?? 0, chipPriceInfo.currency) : 0;
  const dbPriceOriginal = chipPriceInfo?.market_price ?? chipPriceInfo?.official_msrp ?? null;
  const dbPriceCurrency = chipPriceInfo?.currency ?? null;
  const unitPriceUSD = manualPrice != null ? manualPrice : dbPriceUSD;

  // ===== 计算：全部走 tco-model 纯函数 =====
  // hero / 成本行 / 饼图 / 柱图 / 敏感性 / CSV / BVR / 对比卡都读同一份 tcoResult，
  // 从根上杜绝「同一份数据两套算法」。
  const isCluster = mode === 'cluster';
  const tdpKW = chip ? chip.tdp / 1000 : 0;
  const tcoInput: TcoInput = {
    unitPriceUSD, tdpW: chip ? chip.tdp : 0, qty, usage, price, years, dcCost, idleRatio, pue, discount,
  };
  const clusterInput: ClusterInput = { serverCost, networkRatio, opsPerK };
  const tcoResult = computeTco(tcoInput, mode, clusterInput);
  const {
    breakdown, tco: displayTco, oneTimeTotal, discountFactor, annualDeviceElec, annualCooling, annualDc, annualOps,
  } = tcoResult;
  const proc = breakdown.procurement;
  const elec = breakdown.electricity;
  const dc = breakdown.dc;
  const cool = breakdown.cooling;
  /** 分段值表：图表 / 成本行 / 对比卡统一按 COST_SEGMENTS 的 key 取值 */
  const costMap: Record<string, number> = {
    procurement: proc,
    server: breakdown.server,
    network: breakdown.network,
    electricity: elec,
    dc,
    cooling: cool,
    ops: breakdown.ops,
  };
  /** 当前口径下实际非零的分段（饼图 / 柱图共用同一份） */
  const activeSegs = COST_SEGMENTS.filter(s => (costMap[s.key] ?? 0) > 0);

  // ===== Build vs Rent：own(u) = A/u + B，平衡点 u* = A / (云价 − B) =====
  const { A: bvrA, B: bvrB, breakevenUsage, ownAt } = computeBvr(tcoInput, mode, clusterInput, cloudPrice);
  const ownPerHourNow = ownAt(usage);
  const bvrRows: { u: number; own: number; delta: number; annual: number }[] = useMemo(() => {
    return [0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 0.95].map(u => {
      const own = bvrA / u + bvrB;
      const delta = own - cloudPrice;               // 正 = 自建更贵
      return { u, own, delta, annual: delta * 8760 * qty };
    });
  }, [bvrA, bvrB, cloudPrice, qty]);

  // 每 TFLOPS 年均 TCO（P3-3；随部署模式口径走 displayTco）
  const tcoPerTflops = chip?.fp16Tflops && chip.fp16Tflops > 0 && qty > 0
    ? displayTco / (chip.fp16Tflops * qty * years) : null;

  // 留资报告的个性化段落：当前 TCO 计算上下文
  const getTcoContext = useCallback(() => {
    if (!chip) return '';
    const lines = [
      t.context.chip(displayName(chip.id, chip.name, t), chip.vendor),
      t.context.qty(qty),
      t.context.mode(isCluster),
      t.context.params(`${Math.round(usage * 100)}`, price.toFixed(2), years),
      t.context.unitPrice(Math.round(unitPriceUSD).toLocaleString()),
      t.context.totalTco(years, Math.round(displayTco).toLocaleString()),
    ];
    if (tcoPerTflops != null) lines.push(t.context.perTflops(tcoPerTflops.toFixed(2)));
    if (compare.length > 0) {
      lines.push('');
      lines.push(t.context.compareList);
      for (const c of compare) {
        lines.push(t.context.compareItem(displayName(c.chip.id, c.chip.name, t), c.quantity, Math.round(c.tco).toLocaleString()));
      }
    }
    return lines.join('\n');
  }, [chip, qty, usage, price, years, unitPriceUSD, isCluster, displayTco, tcoPerTflops, compare, t]);

  // 留资报告的焦点芯片：主选 + 对比列表（用于生成规格/定价/替代方案章节）
  const getFocusChipIds = useCallback(
    () => (chip ? [chip.id, ...compare.map(c => c.chip.id)] : []),
    [chip, compare],
  );

  // 饼图：分段取自 COST_SEGMENTS，与柱图 / 成本行 / CSV / 对比图同源
  const pieData = activeSegs.map(s => ({ label: segLabel(t, s.key), value: costMap[s.key] ?? 0, color: s.color }));

  // 累计 TCO 柱状图：每根柱子 = 截至该年的累计（逐年折现）构成。
  // 一次性支出（采购 / 服务器 / 网络）只计入第 1 年；分段 key 与 COST_SEGMENTS 一致。
  const barData = useMemo(() => {
    const cum: Record<string, number> = {};
    const annualByKey: Record<string, number> = {
      electricity: annualDeviceElec, dc: annualDc, cooling: annualCooling, ops: annualOps,
    };
    const oneTimeByKey: Record<string, number> = {
      procurement: proc, server: breakdown.server, network: breakdown.network,
    };
    return Array.from({ length: years }, (_, i) => {
      const y = i + 1;
      const sf = yearDiscountFactor(discount, y); // 单年折现因子
      Object.keys(annualByKey).forEach(k => { cum[k] = (cum[k] ?? 0) + annualByKey[k] * sf; });
      if (y === 1) Object.keys(oneTimeByKey).forEach(k => { cum[k] = (cum[k] ?? 0) + oneTimeByKey[k]; });
      return { year: y, values: { ...cum } };
    });
  }, [years, proc, breakdown.server, breakdown.network, annualDeviceElec, annualDc, annualCooling, annualOps, discount]);

  const addCompare = useCallback(() => {
    if (!chip || !displayTco || !proc) {
      setToast(t.toast.needChip);
      setTimeout(() => setToast(''), 2000);
      return;
    }
    if (!chip.tdp || chip.tdp <= 0) {
      setToast(t.toast.noTdp);
      setTimeout(() => setToast(''), 2000);
      return;
    }
    // 存入的必须与 hero 同口径（displayTco + 同一份 breakdown），
    // 否则对比卡显示裸卡金额、而 tcoPerTflops 却是集群口径，卡片自相矛盾。
    setCompare(prev => [...prev.filter(p => p.chip.id !== chip.id), {
      chip, quantity: qty, mode,
      tco: displayTco,
      procurement: proc,
      server: breakdown.server,
      network: breakdown.network,
      electricity: elec,
      dc,
      cooling: cool,
      ops: breakdown.ops,
      tcoPerTflops,
    }].slice(-4));
    setToast(t.toast.added(displayName(chip.id, chip.name, t), isCluster ? t.toast.modeCluster : t.toast.modeNode));
    setTimeout(() => setToast(''), 2000);
  }, [chip, qty, mode, isCluster, displayTco, proc, breakdown.server, breakdown.network, elec, dc, cool, breakdown.ops, tcoPerTflops, t]);

  const removeCompare = (id: string) => setCompare(p => p.filter(x => x.chip.id !== id));
  const clearCompare = () => setCompare([]);

  // 货币切换：用户切到 CNY 时显示原币种价格
  const displayInCNY = currencyView === 1;

  return (
    <div className={styles.wrapper}>
      {toast && <div className={styles.toast} role="status" aria-live="polite">{toast}</div>}

      {/* 双栏布局：左 = 参数（sticky），右 = 结果 + BVR + 对比 */}
      <div className={styles.toolLayout}>
        <div className={styles.toolLeft}>

      {/* Parameters */}
      <div className={styles.card}>
        <div className={styles.cardTitle}>{t.params.title}</div>

        {/* 部署模式切换 */}
        <div className={styles.modeRow} role="tablist" aria-label={t.params.modeAria}>
          <button type="button" role="tab" aria-selected={mode === 'node'}
            className={`${styles.modeBtn} ${mode === 'node' ? styles.modeBtnActive : ''}`}
            onClick={() => setMode('node')}>
            {t.params.modeNode}
          </button>
          <button type="button" role="tab" aria-selected={mode === 'cluster'}
            className={`${styles.modeBtn} ${mode === 'cluster' ? styles.modeBtnActive : ''}`}
            onClick={() => setMode('cluster')}>
            {t.params.modeCluster}
          </button>
        </div>

        <div style={{ marginBottom: 14 }}>
          <label className={styles.label} htmlFor="tco-chip-select">
            {t.params.selectLabel} <span className={styles.labelHint}>{t.params.selectHint}</span>
          </label>
          {chips.length === 0 ? (
            <div className={styles.loadingPlaceholder}>{t.params.loading}</div>
          ) : (
            <ChipSelect chips={chips} value={chipId} onChange={(v) => { setChipId(v); setManualPrice(null); }} id="tco-chip-select" />
          )}
          {chip && chip.tdp > 50000 && (
            <div className={styles.warningBox} role="alert">
              <span>⚠️</span>
              <span><strong>{t.params.warningSystemTitle}</strong>{t.params.warningSystemBody(fmtFull(chip.tdp))}</span>
            </div>
          )}
          {chip && (!chip.tdp || chip.tdp <= 0) && (
            <div className={styles.warningBox} role="alert">
              <span>⚠️</span>
              <span><strong>{t.params.warningNoTdpTitle}</strong>{t.params.warningNoTdpBody}</span>
            </div>
          )}
          {chip && (
            <div className={styles.priceBox}>
              {dbPriceUSD > 0 ? (
                <>
                  <span className={styles.priceValue}>
                    {displayInCNY && dbPriceOriginal != null && dbPriceCurrency === 'CNY'
                      ? fmtOriginal(dbPriceOriginal, 'CNY')
                      : fmtFull(Math.round(dbPriceUSD))}
                  </span>
                  {dbPriceCurrency === 'CNY' && (
                    <span className={styles.currencyBadge}>CNY → USD ${Math.round(dbPriceUSD).toLocaleString()}</span>
                  )}
                  {chipPriceInfo?.market_price != null && chipPriceInfo?.official_msrp != null && (
                    <span className={styles.priceMsrp}>{t.params.msrpLabel(fmtFull(Math.round(toUSD(chipPriceInfo.official_msrp, chipPriceInfo.currency))))}</span>
                  )}
                  <span className={styles.priceSource}>{chipPriceInfo?.source}</span>
                  {/* 仅当数据库定价本身是人民币时，这个「原币价 / 统一价」切换才有意义 */}
                  {dbPriceCurrency === 'CNY' && (
                    <button type="button" onClick={() => setCurrencyView(currencyView === 0 ? 1 : 0)}
                      className={styles.pricePreset} style={{ marginLeft: 4 }}
                      title={displayInCNY ? t.params.currencyToggleTitleToUSD : t.params.currencyToggleTitleToCNY}>
                      {displayInCNY ? t.params.showUSD : t.params.showOriginal}
                    </button>
                  )}
                </>
              ) : (
                <span className={styles.priceNone}>{t.params.noPrice}</span>
              )}
            </div>
          )}
          {/* P0-2 手动输入价格 */}
          {chip && (
            <div className={styles.manualPriceRow}>
              <span className={styles.manualPriceLabel}>{t.params.manualLabel}</span>
              <input
                type="number"
                className={`${styles.input} ${styles.manualPriceInput}`}
                min={0}
                step={100}
                placeholder={t.params.manualPlaceholder}
                value={manualPrice ?? ''}
                onChange={e => setManualPrice(e.target.value === '' ? null : Number(e.target.value))}
                aria-label={t.params.manualAria}
              />
              {manualPrice != null && (
                <button type="button" onClick={() => setManualPrice(null)}
                  className={styles.pricePreset} title={t.params.resetTitle}>
                  {t.params.resetBtn}
                </button>
              )}
            </div>
          )}
          {chip && manualPrice != null && (
            <div className={styles.manualPriceNote}>{t.params.manualNote(`$${manualPrice.toLocaleString()}`)}</div>
          )}
        </div>

        <div className={styles.formRow}>
          <div className={styles.formCol}>
            <label className={styles.label} htmlFor="tco-qty">{t.params.qtyLabel}</label>
            <div className={styles.qtyRow}>
              <button type="button" onClick={() => setQty(Math.max(1, qty - 1))} className={styles.qtyBtn} aria-label={t.params.qtyDecAria}>−</button>
              <input id="tco-qty" type="number" className={`${styles.input} ${styles.qtyInput}`} min={1} value={qty} onChange={e => setQty(Math.max(1, Number(e.target.value)))} aria-label={t.params.qtyAria}/>
              <button type="button" onClick={() => setQty(qty + 1)} className={styles.qtyBtn} aria-label={t.params.qtyIncAria}>+</button>
            </div>
            <div className={styles.qtyPresets}>
              {[1, 8, 64, 256].map(v => (
                <button key={v} type="button" onClick={() => setQty(v)} className={`${styles.qtyPreset} ${qty === v ? styles.qtyPresetActive : ''}`}>
                  {v === 1 ? t.params.qtyPresetSingle : t.params.qtyPreset(v)}
                </button>
              ))}
            </div>
          </div>
          <div className={styles.formCol}>
            <label className={styles.label} htmlFor="tco-usage">
              {t.params.usageLabel} <span className={styles.labelValue}>{(usage * 100).toFixed(0)}%</span>
            </label>
            <input id="tco-usage" type="range" className={styles.range} min={0.1} max={1} step={0.05} value={usage}
              onChange={e => setUsage(Number(e.target.value))} aria-valuetext={t.params.percentAria(`${(usage * 100).toFixed(0)}%`)}/>
            <div className={styles.rangeScale}><span>10%</span><span>50%</span><span>100%</span></div>
          </div>
        </div>

        {/* 集群级参数 */}
        {isCluster && (
          <div className={styles.clusterRow}>
            <div className={styles.formCol}>
              <label className={styles.label} htmlFor="tco-server">{t.params.serverLabel}</label>
              <input id="tco-server" type="number" className={styles.input} min={0} step={1000}
                value={serverCost} onChange={e => setServerCost(Math.max(0, Number(e.target.value)))}/>
              <div className={styles.rangeScale}><span>{t.params.serverHint}</span></div>
            </div>
            <div className={styles.formCol}>
              <label className={styles.label} htmlFor="tco-netr">
                {t.params.netrLabel} <span className={styles.labelValue}>{(networkRatio * 100).toFixed(0)}%</span>
              </label>
              <input id="tco-netr" type="range" className={styles.range} min={0.02} max={0.4} step={0.01}
                value={networkRatio} onChange={e => setNetworkRatio(Number(e.target.value))}
                aria-valuetext={t.params.percentAria(`${(networkRatio * 100).toFixed(0)}%`)}/>
              <div className={styles.rangeScale}><span>2%</span><span>40%</span></div>
            </div>
            <div className={styles.formCol}>
              <label className={styles.label} htmlFor="tco-ops">{t.params.opsLabel}</label>
              <input id="tco-ops" type="number" className={styles.input} min={0} step={10000}
                value={opsPerK} onChange={e => setOpsPerK(Math.max(0, Number(e.target.value)))}/>
              <div className={styles.rangeScale}><span>{t.params.opsHint}</span></div>
            </div>
          </div>
        )}

        <div className={styles.formRow}>
          <div className={styles.formCol}>
            <label className={styles.label} htmlFor="tco-price">{t.params.elecLabel}</label>
            <input id="tco-price" type="number" className={styles.input} min={0.01} max={5} step={0.01} value={price} onChange={e => setPrice(Number(e.target.value))}/>
            <div className={styles.pricePresets}>
              {[{ l: t.params.elecPresets[0], v: 0.08 }, { l: t.params.elecPresets[1], v: 0.12 }, { l: t.params.elecPresets[2], v: 0.20 }, { l: t.params.elecPresets[3], v: 0.04 }].map(p => (
                <button key={p.l} type="button" onClick={() => setPrice(p.v)}
                  className={`${styles.pricePreset} ${Math.abs(price - p.v) < 0.001 ? styles.pricePresetActive : ''}`}>
                  {p.l}
                </button>
              ))}
            </div>
          </div>
          <div className={styles.formCol}>
            <label className={styles.label} htmlFor="tco-years">
              {t.params.yearsLabel}<span className={styles.labelValue}>{t.params.yearsValue(years)}</span>
            </label>
            <input id="tco-years" type="range" className={styles.range} min={1} max={8} step={1} value={years}
              onChange={e => setYears(Number(e.target.value))} aria-valuetext={t.params.yearsValue(years)}/>
            <div className={styles.rangeScale}><span>{t.params.yearsScale[0]}</span><span>{t.params.yearsScale[1]}</span><span>{t.params.yearsScale[2]}</span></div>
          </div>
        </div>

        {/* P1-1 / P1-2 / P1-3 高级参数（默认折叠） */}
        <details className={styles.advancedDetails}>
          <summary className={styles.advancedSummary}>
            {t.params.advancedTitle}
          </summary>
          <div className={`${styles.formRow} ${styles.advancedBody}`}>
            <div className={styles.formCol}>
              <label className={styles.label} htmlFor="tco-idle">
                {t.params.idleLabel} <span className={styles.labelValue}>{(idleRatio * 100).toFixed(0)}%</span>
              </label>
              <input id="tco-idle" type="range" className={styles.range} min={0.05} max={0.40} step={0.05} value={idleRatio}
                onChange={e => setIdleRatio(Number(e.target.value))} aria-valuetext={t.params.percentAria(`${(idleRatio * 100).toFixed(0)}%`)}/>
              <div className={styles.small}>{t.params.idleHint}</div>
            </div>
            <div className={styles.formCol}>
              <label className={styles.label} htmlFor="tco-pue">
                PUE <span className={styles.labelValue}>{pue.toFixed(2)}</span>
              </label>
              <input id="tco-pue" type="range" className={styles.range} min={1.05} max={1.6} step={0.05} value={pue}
                onChange={e => setPue(Number(e.target.value))} aria-valuetext={`PUE ${pue.toFixed(2)}`}/>
              <div className={styles.pricePresets}>
                {[{ l: t.params.puePresets[0], v: 1.05 }, { l: t.params.puePresets[1], v: 1.10 }, { l: t.params.puePresets[2], v: 1.30 }, { l: t.params.puePresets[3], v: 1.50 }].map(p => (
                  <button key={p.l} type="button" onClick={() => setPue(p.v)}
                    className={`${styles.pricePreset} ${Math.abs(pue - p.v) < 0.01 ? styles.pricePresetActive : ''}`}>
                    {p.l}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className={styles.formRow}>
            <div className={styles.formCol}>
              <label className={styles.label} htmlFor="tco-dc">{t.params.dcLabel}</label>
              <input id="tco-dc" type="number" className={styles.input} min={0} max={50000} step={50} value={dcCost} onChange={e => setDcCost(Number(e.target.value))}/>
              <div className={styles.small}>{t.params.dcHint}</div>
            </div>
            <div className={styles.formCol}>
              <label className={styles.label} htmlFor="tco-dr">
                {t.params.discountLabel} <span className={styles.labelValue}>{(discount * 100).toFixed(1)}%</span>
              </label>
              <input id="tco-dr" type="range" className={styles.range} min={0} max={0.20} step={0.01} value={discount}
                onChange={e => setDiscount(Number(e.target.value))} aria-valuetext={t.params.percentAria(`${(discount * 100).toFixed(1)}%`)}/>
              <div className={styles.small}>{t.params.discountHint}</div>
            </div>
          </div>
        </details>
      </div>

        </div>
        <div className={styles.toolRight}>

      {/* Results */}
      <div className={styles.card}>
        <div className={styles.cardTitle}>
          {t.results.title}
          {chip && <span className={styles.resultChip}>{t.results.resultChip(displayName(chip.id, chip.name, t), qty, years, discount > 0)}</span>}
        </div>

        {!chip ? (
          <div className={styles.tcoEmpty}>
            <div className={styles.tcoEmptyEmoji}>🖥️</div>
            <p className={styles.tcoEmptyTitle}>{t.results.emptySelectTitle}</p>
            <small>{t.results.emptySelectSub(chips.length)}</small>
          </div>
        ) : !unitPriceUSD ? (
          <div className={styles.tcoEmpty}>
            <div className={styles.tcoEmptyEmoji}>💰</div>
            <p className={styles.tcoEmptyTitle}>{t.results.emptyPriceTitle}</p>
            <small>{t.results.emptyPriceSub}</small>
          </div>
        ) : (
          <>
            <div className={styles.tcoBox}>
              <div className={styles.resultHeader}>
                {t.results.header(years, isCluster, discount > 0)}
                {isCluster && <span className={styles.chartHint}>{t.results.headerClusterHint}</span>}
              </div>
              <div className={styles.tcoValue}><AnimatedMoney value={displayTco} animateKey={`${chipId}-${mode}`} /></div>
              <div className={styles.tcoSub}>
                {t.results.annual} <AnimatedMoney value={displayTco / years} animateKey={`${chipId}-${mode}`} /> · {t.results.perCardAnnual} <AnimatedMoney value={displayTco / qty / years} animateKey={`${chipId}-${mode}`} />
                {tcoPerTflops != null && <> · <strong>{t.results.perTflops(`$${tcoPerTflops.toFixed(2)}`)}</strong></>}
              </div>
            </div>

            {/* 成本行与饼图 / 柱图 / CSV 共用 activeSegs，条目随模式自动增减且口径一致 */}
            {activeSegs.map(seg => {
              const v = costMap[seg.key] ?? 0;
              const label = seg.key === 'procurement' && !isCluster ? t.results.costRowProcurement : segLabel(t, seg.key);
              const suffix = seg.key === 'procurement' ? '' : ONE_TIME_KEYS.includes(seg.key) ? t.costSuffix.oneTime : t.costSuffix.discounted;
              const pct = displayTco > 0 ? (v / displayTco) * 100 : 0;
              return (
                <div key={seg.key} className={styles.costRow}>
                  <div className={styles.costRowBar} style={{ width: `${pct}%`, background: seg.color }} />
                  <span className={styles.costDot} style={{ background: seg.color }} aria-hidden="true" />
                  <span className={styles.costName}>{label}{suffix}</span>
                  <span className={styles.costValue}><AnimatedMoney value={v} animateKey={chipId} /></span>
                  <span className={styles.costPct}>{pct.toFixed(1)}%</span>
                </div>
              );
            })}

            <div className={styles.chartRow}>
              <div className={styles.chartCard}>
                <div className={styles.chartTitle}>{t.results.chartCostTitle} <span className={styles.chartHint}>{t.results.chartCostHint}</span></div>
                <Pie data={pieData} hoverIdx={pieHover} setHover={setPieHover} />
              </div>
              <div className={styles.chartCard}>
                <div className={styles.chartTitle}>{t.results.chartBarTitle} <span className={styles.chartHint}>{t.results.chartBarHint}</span></div>
                <Bars data={barData} segs={activeSegs.map(s => ({ key: s.key, label: segLabel(t, s.key), color: s.color }))} hoverYear={barHover} setHover={setBarHover} oneTimeTotal={oneTimeTotal} />
              </div>
            </div>

            <div className={styles.insightBox}>
              <div className={styles.insightTitle}>{t.insights.title}</div>
              <div className={styles.insightRow}>
                <strong>{t.insights.procVsElec}</strong>
                {proc > elec ? <span className={styles.insightGood}>{t.insights.procDominant}</span> : <span className={styles.insightBad}>{t.insights.elecDominant}</span>}
              </div>
              <div className={styles.insightRow}>
                <strong>{t.insights.perWatt}</strong> {chip.tdp > 0 ? <><AnimatedMoney value={displayTco / qty / chip.tdp} animateKey={`${chipId}-${mode}`} /> / W</> : '—'}
              </div>
              <div className={styles.insightRow}>
                <strong>{t.insights.annualElec}</strong> {tdpKW > 0 ? <><AnimatedMoney value={annualDeviceElec} animateKey={chipId} />{t.insights.annualElecValue('', pue.toFixed(2))}</> : '—'}
              </div>
              {tcoPerTflops != null && (
                <div className={styles.insightRow}>
                  <strong>{t.insights.perTflops}</strong>{t.insights.perTflopsValue(`$${tcoPerTflops.toFixed(2)}`, chip.fp16Tflops ?? 0)}
                </div>
              )}
              {breakevenUsage != null && (
                <div className={styles.insightRow}>
                  <strong>{t.insights.bvr}</strong>
                  {usage >= breakevenUsage
                    ? <span className={styles.insightGood}>{t.insights.bvrGood(`${(usage * 100).toFixed(0)}%`, `${(breakevenUsage * 100).toFixed(0)}%`)}</span>
                    : <span className={styles.insightBad}>{t.insights.bvrBad(`${(usage * 100).toFixed(0)}%`, `${(breakevenUsage * 100).toFixed(0)}%`)}</span>}
                </div>
              )}
            </div>

            <Sensitivity base={displayTco} input={tcoInput} mode={mode} cluster={clusterInput} />

            <div className={styles.actionRow}>
              <button type="button" onClick={addCompare} className={styles.btnAdd}>{t.actions.addToCompare}</button>
              <button type="button" onClick={() => chip && exportCSV(
                chip, qty, years, usage, price, dcCost, idleRatio, pue, discount,
                unitPriceUSD, dbPriceOriginal, dbPriceCurrency, manualPrice != null,
                mode, breakdown, displayTco, compare, t
              )} className={styles.btnCsv} title={t.actions.csvTitle}>{t.actions.csvBtn}</button>
            </div>
          </>
        )}
      </div>

      {/* Build vs Rent */}
      {chip && (
        <div className={styles.card}>
          <div className={styles.cardTitle}>{t.bvr.title}</div>
          {!unitPriceUSD ? (
            <div className={styles.tcoEmpty}>
              <div className={styles.tcoEmptyEmoji}>💰</div>
              <p className={styles.tcoEmptyTitle}>{t.bvr.emptyPriceTitle}</p>
              <small>{t.bvr.emptyPriceSub}</small>
            </div>
          ) : (
            <>
            <div className={styles.bvrGrid}>
            <div className={styles.bvrCol}>
              <label className={styles.label} htmlFor="tco-cloud">{t.bvr.cloudLabel}</label>
              <input id="tco-cloud" type="number" className={styles.input} min={0.1} max={50} step={0.1}
                value={cloudPrice} onChange={e => setCloudPrice(Math.max(0.01, Number(e.target.value)))}/>
              <div className={styles.pricePresets}>
                {[{ l: 'H100 $2.0', v: 2.0 }, { l: 'H100 $2.5', v: 2.5 }, { l: 'H200 $3.2', v: 3.2 }, { l: 'B200 $5.5', v: 5.5 }].map(p => (
                  <button key={p.l} type="button" onClick={() => setCloudPrice(p.v)}
                    className={`${styles.pricePreset} ${Math.abs(cloudPrice - p.v) < 0.001 ? styles.pricePresetActive : ''}`}>
                    {p.l}
                  </button>
                ))}
              </div>
              <p className={styles.bvrNow}>
                {t.bvr.nowPrefix(`${(usage * 100).toFixed(0)}%`)}<strong>${ownPerHourNow.toFixed(2)}</strong>/GPU/hr
                {t.bvr.vsCloud}<strong>${cloudPrice.toFixed(2)}</strong>/GPU/hr
                {ownPerHourNow < cloudPrice ? (
                  <span className={styles.bvrGood}>{t.bvr.saveAnnually(`$${Math.round((cloudPrice - ownPerHourNow) * 8760 * qty).toLocaleString()}`)}</span>
                ) : (
                  <span className={styles.bvrBad}>{t.bvr.wasteAnnually(`$${Math.round((ownPerHourNow - cloudPrice) * 8760 * qty).toLocaleString()}`)}</span>
                )}
              </p>
            </div>
            <div className={styles.bvrKpi} role="status">
              <div className={styles.bvrKpiLabel}>{t.bvr.breakevenLabel}</div>
              <div className={styles.bvrKpiValue}>
                {breakevenUsage != null ? `${(breakevenUsage * 100).toFixed(0)}%` : '—'}
              </div>
              <div className={styles.bvrKpiHint}>
                {breakevenUsage != null
                  ? t.bvr.breakevenHint(`${(breakevenUsage * 100).toFixed(0)}%`)
                  : t.bvr.alwaysRent(`$${bvrB.toFixed(2)}`)}
              </div>
            </div>
          </div>
          <div className={styles.bvrTableWrap}>
            <table className={styles.bvrTable}>
              <caption className={styles.srOnly}>{t.bvr.caption(qty, isCluster ? t.bvr.modeCluster : t.bvr.modeNode)}</caption>
              <thead>
                <tr>
                  <th scope="col">{t.bvr.thUsage}</th>
                  <th scope="col">{t.bvr.thOwn}</th>
                  <th scope="col">{t.bvr.thCloud(`$${cloudPrice.toFixed(2)}`)}</th>
                  <th scope="col">{t.bvr.thDelta(qty)}</th>
                </tr>
              </thead>
              <tbody>
                {bvrRows.map(r => (
                  <tr key={r.u} className={Math.abs(r.u - usage) < 0.026 ? styles.bvrRowActive : ''}>
                    <td>{Math.round(r.u * 100)}%</td>
                    <td>${r.own.toFixed(2)}</td>
                    <td className={r.delta <= 0 ? styles.bvrGood : styles.bvrBad}>
                      {r.delta <= 0 ? t.bvr.cheaper : t.bvr.pricier}{Math.abs(r.delta).toFixed(2)}/hr
                    </td>
                    <td className={r.delta <= 0 ? styles.bvrGood : styles.bvrBad}>
                      {r.delta <= 0 ? '−$' : '+$'}{Math.abs(Math.round(r.annual)).toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
            </>
          )}
        </div>
      )}

      {/* Compare */}
      {compare.length > 0 && (
        <div className={styles.compareSection}>
          <div className={styles.compareHeader}>
            {t.compare.title}
            <span className={styles.compareHint}>{t.compare.hint(discount > 0)}</span>
            {new Set(compare.map(c => c.mode)).size > 1 && (
              <span className={styles.compareHint}>{t.compare.mixedModes}</span>
            )}
            <button type="button" onClick={clearCompare} className={styles.compareClear}>{t.compare.clearAll}</button>
          </div>
          <div className={styles.compareGrid}>
            {compare.map(entry => (
              <div key={entry.chip.id} className={styles.compareCard}>
                <button type="button" onClick={() => removeCompare(entry.chip.id)} title={t.compare.removeTitle} className={styles.compareRemove} aria-label={t.compare.removeAria}>×</button>
                <div className={styles.compareName}>{displayName(entry.chip.id, entry.chip.name, t)}</div>
                <div className={styles.compareQty}>
                  × {entry.quantity}
                  {entry.chip.fp16Tflops ? ` · ${entry.chip.fp16Tflops} TFLOPS` : ''}
                  {' · '}{entry.mode === 'cluster' ? t.compare.modeCluster : t.compare.modeNode}
                </div>
                <div className={styles.compareTco}>{fmtFull(Math.round(entry.tco))}</div>
                {entry.tcoPerTflops != null && (
                  <div className={styles.compareTflops}>{t.compare.perTflops(`$${entry.tcoPerTflops.toFixed(2)}`)}</div>
                )}
                {/* 成本构成同样取自 COST_SEGMENTS：集群条目会多出服务器 / 网络 / 人力 */}
                <div className={styles.compareCosts}>
                  {COST_SEGMENTS.filter(s => (entry[s.key] ?? 0) > 0).map(s => (
                    <span key={s.key} className={styles.compareCostItem}>{segShort(t, s.key)} {fmt(entry[s.key] ?? 0)}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <CompareChart compare={compare} />
        </div>
      )}

        </div>
      </div>

      {/* Lead capture：下载完整选型报告（位于工具区下方，不再与结果卡争视觉） */}
      <div className={styles.leadSection}>
        <LeadCapture source="tco" lang={t.lang} chipCount={chips.length} getExtraSections={getTcoContext} getFocusChipIds={getFocusChipIds} />
      </div>
    </div>
  );
}
