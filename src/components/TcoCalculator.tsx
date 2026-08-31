import React, { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import styles from './TcoCalculator.module.css';
import LeadCapture from './LeadCapture';

// ===== 常量与工具 =====
const CNY_TO_USD = 7.2;            // 人民币兑美元汇率（P0-1）
const DEFAULT_IDLE_RATIO = 0.15;   // 空闲功耗占 TDP 比例（P1-1）
const DEFAULT_PUE = 1.3;           // 数据中心 PUE（P1-2；风冷 1.3 / 液冷 1.1 / 极致 1.05）
const DEFAULT_DISCOUNT = 0.08;     // 折现率（P1-3；8%/年）

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
  tco: number; procurement: number; electricity: number; dc: number; cooling: number;
  tcoPerTflops?: number | null;
}

const COLORS = ['#7F77DD', '#1D9E75', '#E0A030', '#E8633A']; // 品牌紫 / 青 / 琥珀 / 珊瑚

// ===== 工具函数 =====
function flatPricing(p: PricingData) {
  const o: Record<string, PricingInfo> = {};
  Object.keys(p).forEach(v => Object.keys(p[v]).forEach(c => o[c] = p[v][c]));
  return o;
}
function toUSD(amount: number, currency: 'USD' | 'CNY' | undefined): number {
  if (amount == null) return 0;
  if (currency === 'CNY') return amount / CNY_TO_USD;
  return amount;
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
function clamp(n: number, min: number, max: number) { return Math.max(min, Math.min(max, n)); }

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

// ===== 厂商/芯片中文名映射（保持原状）=====
const VENDOR_LABEL: Record<string, string> = {
  nvidia: '🟢 NVIDIA', amd: '🔴 AMD', intel: '🔵 Intel', huawei: '🔴 华为海思',
  google: '🟡 Google', aws: '🟠 AWS', cerebras: '🟣 Cerebras', meta: '🔵 Meta',
  microsoft: '🔵 Microsoft', apple: '⚫ Apple', qualcomm: '🔵 Qualcomm',
  mediatek: '🟢 MediaTek', others: '🟤 其它',
  // 国产厂商（目录型 vendor，此前缺失标签会直接显示原始 ID）
  cambricon: '🟠 寒武纪', baidu: '🟠 昆仑芯', iluvatar: '🟠 天数智芯',
  enflame: '🟠 燧原', metax: '🟠 沐曦',
};
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
function vendorLabel(v: string): string { return VENDOR_LABEL[v] || v; }

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
      zhName(c.id, c.name).toLowerCase().includes(ql) ||
      c.id.toLowerCase().includes(ql) ||
      c.vendor.toLowerCase().includes(ql)
    );
  }, [chips, q]);

  const grouped = useMemo(() => {
    const g: Record<string, Chip[]> = {};
    filtered.forEach(c => { (g[c.vendor] = g[c.vendor] || []).push(c); });
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
        aria-label="选择芯片"
        onClick={() => setOpen(!open)}
        className={styles.selectTrigger}
      >
        <span className={styles.selectTriggerText}>
          {current ? `${zhName(current.id, current.name)} — ${current.tdp}W` : '— 请选择芯片 —'}
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
              placeholder="🔍 搜索芯片名称或厂商…"
              className={styles.selectSearchInput}
              aria-label="搜索芯片"
            />
          </div>
          <div className={styles.selectList} ref={listRef} role="listbox" id="tco-chip-listbox" aria-label="芯片列表">
            {flatList.length === 0 ? (
              <div className={styles.selectEmpty}>未找到匹配的芯片</div>
            ) : Object.keys(grouped).sort().map(v => (
              <div key={v}>
                <div className={styles.selectGroupHeader}>
                  {vendorLabel(v)} ({grouped[v].length})
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
                      <span>{zhName(c.id, c.name)}</span>
                      <span className={styles.selectItemTdp}>{c.tdp}W</span>
                    </button>
                  );
                })}
              </div>
            ))}
          </div>
          <div className={styles.selectFooter}>共 {filtered.length} 款芯片 · ↑↓ 导航 · Enter 确认 · Esc 关闭</div>
        </div>
      )}
    </div>
  );
}

// ===== 饼图（P4-2 加 title/aria-label）=====
const Pie = React.memo(function Pie({ data, hoverIdx, setHover, totalLabel = '总计' }: {
  data: { label: string; value: number; color: string }[];
  hoverIdx: number | null;
  setHover: (i: number | null) => void;
  totalLabel?: string;
}) {
  const total = data.reduce((s, d) => s + d.value, 0);
  if (!total) return <div className={styles.tcoEmpty}><div className={styles.tcoEmptyEmoji}>📊</div><div>暂无数据</div></div>;
  let acc = 0;
  const segs = data.map(d => { const s = (acc / total) * 360; acc += d.value; const e = (acc / total) * 360; return { ...d, s, e }; });
  const cx = 80, cy = 80, r = 70;
  function pol(a: number) { const rad = (a - 90) * Math.PI / 180; return `${cx + r * Math.cos(rad)},${cy + r * Math.sin(rad)}`; }
  const active = hoverIdx !== null ? segs[hoverIdx] : null;
  const displayTotal = active ? active.value : total;
  const displayLabel = active ? active.label : totalLabel;
  return (
    <div className={styles.pieWrap}>
      <svg viewBox="0 0 160 160" width={140} height={140} style={{ flexShrink: 0 }}
        role="img" aria-label={`成本构成饼图，共 ${segs.length} 项，总计 ${fmtFull(Math.round(total))}`}>
        <title>成本构成饼图</title>
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
      <div className={styles.pieLegend} role="list" aria-label="成本图例">
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

// ===== 柱状图（P4-2）=====
const Bars = React.memo(function Bars({ data, hoverYear, setHover, baseProc }: {
  data: { year: number; procurement: number; electricity: number; dc: number; cooling: number }[];
  hoverYear: number | null; setHover: (y: number | null) => void;
  baseProc: number;
}) {
  const max = Math.max(...data.map(d => d.procurement + d.electricity + d.dc + d.cooling), 1);
  const c = { procurement: COLORS[0], electricity: COLORS[1], dc: COLORS[2], cooling: COLORS[3] };
  const hoverEntry = hoverYear !== null ? data.find(d => d.year === hoverYear) : null;
  return (
    <div>
      <div className={styles.barHoverLabel} aria-live="polite">
        {hoverEntry ? (
          <>第 {hoverEntry.year} 年累计 TCO: {fmt(hoverEntry.procurement + hoverEntry.electricity + hoverEntry.dc + hoverEntry.cooling)}
            {hoverEntry.year === 1 && hoverEntry.procurement > 0 && <span className={styles.barHoverNote}>（含一次性采购 {fmt(baseProc)}）</span>}
          </>
        ) : '悬停/聚焦查看各年累计 TCO'}
      </div>
      <div className={styles.barArea} role="img" aria-label={`TCO 累计随年限变化柱状图，共 ${data.length} 年`}>
        {data.map(d => {
          const t = d.procurement + d.electricity + d.dc + d.cooling;
          const h = (t / max) * 100;
          const p1 = (d.procurement / t) * 100, p2 = (d.electricity / t) * 100, p3 = (d.dc / t) * 100;
          const grad = `linear-gradient(to top,${c.procurement} ${p1}%,${c.electricity} ${p1}%,${c.electricity} ${p1 + p2}%,${c.dc} ${p1 + p2}%,${c.dc} ${p1 + p2 + p3}%,${c.cooling} ${p1 + p2 + p3}%)`;
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
                  role="img" aria-label={`第 ${d.year} 年总计 ${fmtFull(Math.round(t))}`}
                />
              </div>
              <div className={`${styles.barBottomLabel} ${isHover ? styles.barBottomLabelHover : ''}`}>{d.year}年</div>
            </div>
          );
        })}
      </div>
      <div className={styles.barLegend}>
        <span className={styles.barLegendItem}><span className={styles.barLegendDot} style={{ background: c.procurement }} />采购</span>
        <span className={styles.barLegendItem}><span className={styles.barLegendDot} style={{ background: c.electricity }} />电费</span>
        <span className={styles.barLegendItem}><span className={styles.barLegendDot} style={{ background: c.dc }} />租金</span>
        <span className={styles.barLegendItem}><span className={styles.barLegendDot} style={{ background: c.cooling }} />冷却</span>
      </div>
    </div>
  );
});

// ===== 多芯片对比柱状图（P3-1）=====
const CompareChart = React.memo(function CompareChart({ compare }: { compare: CompareItem[] }) {
  const [hoverId, setHoverId] = useState<string | null>(null);
  if (compare.length === 0) return null;
  const max = Math.max(...compare.map(c => c.tco), 1);
  const c = { procurement: COLORS[0], electricity: COLORS[1], dc: COLORS[2], cooling: COLORS[3] };
  return (
    <div className={styles.compareChart}>
      <div className={styles.compareChartTitle}>对比柱状图（堆叠：采购/电费/租金/冷却）</div>
      <div className={styles.barArea} role="img" aria-label={`${compare.length} 款芯片 TCO 对比柱状图`}>
        {compare.map(item => {
          const t = item.tco;
          const h = (t / max) * 100;
          const p1 = (item.procurement / t) * 100, p2 = (item.electricity / t) * 100, p3 = (item.dc / t) * 100;
          const grad = `linear-gradient(to top,${c.procurement} ${p1}%,${c.electricity} ${p1}%,${c.electricity} ${p1 + p2}%,${c.dc} ${p1 + p2}%,${c.dc} ${p1 + p2 + p3}%,${c.cooling} ${p1 + p2 + p3}%)`;
          const isHover = hoverId === item.chip.id;
          return (
            <div key={item.chip.id} className={`${styles.barCol} ${isHover ? styles.barColHover : ''}`}>
              <div className={styles.barTopLabel}>{fmt(t)}</div>
              <div className={styles.barSlot}>
                <div className={styles.barFill}
                  style={{ height: `${h}%`, background: grad, opacity: hoverId === null || isHover ? 1 : 0.4 }}
                  role="img" tabIndex={0}
                  aria-label={`${zhName(item.chip.id, item.chip.name)} TCO ${fmtFull(Math.round(t))}，采购 ${fmtFull(Math.round(item.procurement))}，电费 ${fmtFull(Math.round(item.electricity))}，租金 ${fmtFull(Math.round(item.dc))}，冷却 ${fmtFull(Math.round(item.cooling))}`}
                  onMouseEnter={() => setHoverId(item.chip.id)} onMouseLeave={() => setHoverId(null)}
                  onFocus={() => setHoverId(item.chip.id)} onBlur={() => setHoverId(null)}
                />
              </div>
              <div className={styles.barBottomLabel} style={{ maxWidth: 80, textAlign: 'center', fontSize: '0.66rem', lineHeight: 1.2, marginTop: 4 }}>
                {zhName(item.chip.id, item.chip.name).split(' ').pop()}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
});

// ===== 敏感性分析（P3-2）=====
function Sensitivity({ base, params }: {
  base: number;
  params: {
    tdpKW: number; qty: number; usage: number; price: number; years: number; dcCost: number; pue: number; idleRatio: number; discount: number; unitPriceUSD: number;
  };
}) {
  // 计算各参数 ±20% 时 TCO 的变化（用基础公式重算）
  const calc = (overrides: Partial<typeof params>): number => {
    const p = { ...params, ...overrides };
    const tdpKW = p.tdpKW, qty = p.qty, usage = p.usage, price = p.price, years = p.years;
    const dcCost = p.dcCost, pue = p.pue, idleRatio = p.idleRatio, discount = p.discount, unitPrice = p.unitPriceUSD;
    const proc = unitPrice * qty;
    const annualDeviceElec = tdpKW * qty * (idleRatio + (1 - idleRatio) * usage) * 8760 * price;
    const annualCooling = annualDeviceElec * (pue - 1);
    const annualDc = dcCost * qty;
    // 折现
    const r = discount;
    const discountFactor = r > 0 ? (1 - Math.pow(1 + r, -years)) / r : years;
    const opDiscounted = (annualDeviceElec + annualCooling + annualDc) * discountFactor;
    return proc + opDiscounted;
  };
  const items = [
    { label: '电价 +20%', delta: 0.2, params: { price: params.price * 1.2 } },
    { label: '使用率 +20%', delta: 0.2, params: { usage: clamp(params.usage * 1.2, 0.1, 1) } },
    { label: '使用年限 +1年', delta: 1 / Math.max(params.years, 1), params: { years: params.years + 1 }, relative: false },
    { label: 'PUE →1.5', delta: 0.3, params: { pue: 1.5 } },
    { label: '空闲比率 →30%', delta: 0.15, params: { idleRatio: 0.3 } },
  ];
  return (
    <div className={styles.sensitivityBox}>
      <div className={styles.sensitivityTitle}>🔬 敏感性分析（TCO 对各参数的弹性）</div>
      <div className={styles.sensitivityGrid}>
        {items.map(item => {
          const tcoUp = calc(item.params);
          const delta = tcoUp - base;
          const pct = base > 0 ? (delta / base) * 100 : 0;
          const color = Math.abs(pct) > 20 ? 'var(--ifm-color-danger)' :
                        Math.abs(pct) > 10 ? 'var(--ifm-color-warning)' : 'var(--ifm-color-success)';
          return (
            <div key={item.label} className={styles.sensitivityItem}>
              <div className={styles.sensitivityLabel}>{item.label}</div>
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

// ===== 导出 CSV（含汇率与原币种）=====
function exportCSV(
  chip: Chip, qty: number, years: number, usage: number, price: number,
  dcCost: number, idleRatio: number, pue: number, discount: number,
  unitPriceUSD: number, originalPrice: number | null, originalCurrency: 'USD' | 'CNY' | null,
  isManualPrice: boolean, costs: { proc: number; elec: number; dc: number; cool: number; tco: number },
  compare: CompareItem[]
) {
  const rows: string[][] = [];
  rows.push(['AI 算力卡 TCO 计算报告']);
  rows.push(['生成时间', new Date().toISOString()]);
  rows.push([]);
  rows.push(['【参数】']);
  rows.push(['芯片', zhName(chip.id, chip.name)]);
  rows.push(['TDP (W)', String(chip.tdp)]);
  rows.push(['数量', String(qty)]);
  rows.push(['使用率', `${(usage * 100).toFixed(0)}%`]);
  rows.push(['电价 ($/kWh)', String(price)]);
  rows.push(['使用年限', String(years)]);
  rows.push(['单卡年租金 ($)', String(dcCost)]);
  rows.push(['空闲功耗比率', `${(idleRatio * 100).toFixed(0)}%`]);
  rows.push(['PUE', String(pue)]);
  rows.push(['折现率', `${(discount * 100).toFixed(1)}%`]);
  rows.push(['单卡价格 ($)', String(Math.round(unitPriceUSD))]);
  if (originalPrice != null && originalCurrency) {
    rows.push(['原始价格', `${fmtOriginal(originalPrice, originalCurrency)}（${originalCurrency}）`]);
    rows.push(['汇率', `1 USD = ${CNY_TO_USD} CNY`]);
  }
  rows.push(['价格来源', isManualPrice ? '用户手动输入' : 'pricing.json']);
  rows.push([]);
  rows.push(['【成本明细 (TCO 已折现)】']);
  rows.push(['项目', '金额 ($)', '占比']);
  const t = costs.tco || 1;
  rows.push(['采购成本', String(Math.round(costs.proc)), `${(costs.proc / t * 100).toFixed(1)}%`]);
  rows.push(['运营电费（折现）', String(Math.round(costs.elec)), `${(costs.elec / t * 100).toFixed(1)}%`]);
  rows.push(['租金（折现）', String(Math.round(costs.dc)), `${(costs.dc / t * 100).toFixed(1)}%`]);
  rows.push(['冷却（折现）', String(Math.round(costs.cool)), `${(costs.cool / t * 100).toFixed(1)}%`]);
  rows.push(['TCO 总计', String(Math.round(costs.tco)), '100.0%']);
  rows.push(['年均 TCO', String(Math.round(costs.tco / years)), '']);
  rows.push(['每卡年均', String(Math.round(costs.tco / qty / years)), '']);
  if (chip.fp16Tflops) {
    rows.push(['FP16 算力 (TFLOPS)', String(chip.fp16Tflops), '']);
    rows.push(['每 TFLOPS TCO ($)', String(Math.round(costs.tco / (chip.fp16Tflops * qty * years))), '']);
  }
  rows.push([]);
  if (compare.length > 0) {
    rows.push(['【多芯片对比】']);
    const header = ['芯片', '数量', 'TCO ($)', '采购 ($)', '电费 ($)', '租金 ($)', '冷却 ($)'];
    if (compare.some(c => c.tcoPerTflops != null)) header.push('每 TFLOPS TCO');
    rows.push(header);
    compare.forEach(c => {
      const row: string[] = [zhName(c.chip.id, c.chip.name), String(c.quantity), String(Math.round(c.tco)),
        String(Math.round(c.procurement)), String(Math.round(c.electricity)),
        String(Math.round(c.dc)), String(Math.round(c.cooling))];
      if (c.tcoPerTflops != null) row.push(String(Math.round(c.tcoPerTflops)));
      rows.push(row);
    });
  }
  const csv = '\uFEFF' + rows.map(r => r.map(c => `"${(c || '').replace(/"/g, '""')}"`).join(',')).join('\n');
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = `TCO_${chip.id}_${qty}卡_${years}年_${new Date().toISOString().slice(0, 10)}.csv`;
  a.click(); URL.revokeObjectURL(url);
}

// ===== 主组件 =====
export default function TcoCalculator() {
  const [chips, setChips] = useState<Chip[]>([]);
  const [pricing, setPricing] = useState<Record<string, PricingInfo>>({});
  const [chipId, setChipId] = useState('');
  const [qty, setQty] = useState(8);
  const [usage, setUsage] = useState(0.9);
  const [price, setPrice] = useState(0.10);
  const [years, setYears] = useState(3);
  const [dcCost, setDcCost] = useState(500);
  const [idleRatio, setIdleRatio] = useState(DEFAULT_IDLE_RATIO);
  const [pue, setPue] = useState(DEFAULT_PUE);
  const [discount, setDiscount] = useState(DEFAULT_DISCOUNT);
  const [manualPrice, setManualPrice] = useState<number | null>(null);
  const [compare, setCompare] = useState<CompareItem[]>([]);
  const [pieHover, setPieHover] = useState<number | null>(null);
  const [barHover, setBarHover] = useState<number | null>(null);
  const [toast, setToast] = useState('');

  // ===== 部署模式与 Build vs Rent（集群级升级）=====
  const [mode, setMode] = useState<'node' | 'cluster'>('node');
  const [serverCost, setServerCost] = useState(30000);    // 每 8 卡服务器节点价（CPU/主板/内存/存储/机箱）
  const [networkRatio, setNetworkRatio] = useState(0.12); // 网络设备占 GPU 采购价比（交换机/光模块/DPU）
  const [opsPerK, setOpsPerK] = useState(150000);         // 每千卡年人力 OPEX（SRE/机房运维）
  const [cloudPrice, setCloudPrice] = useState(2.5);      // 云 GPU 租赁价 $/GPU/hr（对照价）

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
      // 读取 URL 参数（P2-3）
      const u = readUrlParams();
      if (u.chip) setChipId(u.chip);
      if (u.qty) setQty(Number(u.qty));
      if (u.usage) setUsage(Number(u.usage));
      if (u.price) setPrice(Number(u.price));
      if (u.years) setYears(Number(u.years));
      if (u.dc) setDcCost(Number(u.dc));
      if (u.pue) setPue(Number(u.pue));
      if (u.idle) setIdleRatio(Number(u.idle));
      if (u.dr) setDiscount(Number(u.dr));
      if (u.manual) setManualPrice(Number(u.manual));
      if (u.cur) setCurrencyView(Number(u.cur));  // 0=USD, 1=CNY
      if (u.mode === 'cluster') setMode('cluster');
      if (u.server) setServerCost(Number(u.server));
      if (u.netr) setNetworkRatio(Number(u.netr));
      if (u.ops) setOpsPerK(Number(u.ops));
      if (u.cloud) setCloudPrice(Number(u.cloud));
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

  // 计算 TCO
  const tdpKW = chip ? chip.tdp / 1000 : 0;
  const proc = unitPriceUSD * qty;
  // 设备年电费：考虑空闲功耗
  const annualDeviceElec = tdpKW * qty * (idleRatio + (1 - idleRatio) * usage) * 8760 * price;
  // 冷却为设备电的一部分（PUE 已把冷却计入设施总电，不可再单独相加，否则双重计算）
  const annualCooling = annualDeviceElec * (pue - 1);
  const annualDc = dcCost * qty;
  // 运营成本 = 设备电 + 冷却 + 租金 = 设施总电 + 租金（正确，无重复）
  const annualOp = annualDeviceElec + annualCooling + annualDc;
  // 折现
  const discountFactor = discount > 0 ? (1 - Math.pow(1 + discount, -years)) / discount : years;
  const opDiscounted = annualOp * discountFactor;
  const elec = annualDeviceElec * discountFactor;   // 电费 = 设备 IT 电
  const cool = annualCooling * discountFactor;       // 冷却 = 设备电 × (PUE-1)
  const dc = annualDc * discountFactor;
  const tco = proc + opDiscounted;
  const costs = { proc, elec, dc, cool, tco };

  // ===== 集群级扩展：叠加服务器 / 网络 / 人力 OPEX =====
  const isCluster = mode === 'cluster';
  const servers = Math.max(1, Math.ceil(qty / 8));
  const serverCostTotal = isCluster ? servers * serverCost : 0;
  const networkCost = isCluster ? proc * networkRatio : 0;
  const procCluster = proc + serverCostTotal + networkCost;          // 集群一次性采购
  const opsHumanAnnual = isCluster ? (qty / 1000) * opsPerK : 0;     // 千卡人力年成本
  const annualOpCluster = annualDeviceElec + annualCooling + annualDc + opsHumanAnnual;
  const tcoCluster = procCluster + annualOpCluster * discountFactor; // 集群级 TCO（折现）

  // ===== Build vs Rent：自建每 GPU-hour 成本 own(u) = A/u + B（可精确反解盈亏平衡利用率）=====
  const bvrC1 = procCluster;
  const bvrC2 = (tdpKW * qty * idleRatio * 8760 * price * pue + annualDc + opsHumanAnnual) * years;
  const bvrC3 = tdpKW * qty * (1 - idleRatio) * 8760 * price * pue * years;
  const bvrDenom = 8760 * years * Math.max(qty, 1);
  const bvrA = (bvrC1 + bvrC2) / bvrDenom;
  const bvrB = bvrC3 / bvrDenom;
  // 平衡点：A/u* + B = cloudPrice → u* = A / (cloudPrice − B)；云价 ≤ B 时自建永远更便宜
  const breakevenUsage = cloudPrice > bvrB ? clamp(bvrA / (cloudPrice - bvrB), 0, 1) : null;
  const ownPerHourNow = usage > 0 ? bvrA / usage + bvrB : Infinity;
  const bvrRows: { u: number; own: number; delta: number; annual: number }[] = useMemo(() => {
    return [0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 0.95].map(u => {
      const own = bvrA / u + bvrB;
      const delta = own - cloudPrice;               // 正 = 自建更贵
      return { u, own, delta, annual: delta * 8760 * qty };
    });
  }, [bvrA, bvrB, cloudPrice, qty]);

  // 每 TFLOPS TCO（P3-3）
  const tcoPerTflops = chip?.fp16Tflops && chip.fp16Tflops > 0 && qty > 0
    ? tco / (chip.fp16Tflops * qty * years) : null;

  // 留资报告的个性化段落：当前 TCO 计算上下文
  const getTcoContext = useCallback(() => {
    if (!chip) return '';
    const lines = [
      `- 芯片：${zhName(chip.id, chip.name)}（${chip.vendor}）`,
      `- 数量：${qty} 卡`,
      `- 使用率：${Math.round(usage * 100)}% · 电价：$${price.toFixed(2)}/kWh · 年限：${years} 年`,
      `- 单价：$${Math.round(unitPriceUSD).toLocaleString()}`,
      `- ${years} 年 TCO：$${Math.round(tco).toLocaleString()}`,
    ];
    if (tcoPerTflops != null) lines.push(`- 每 TFLOPS 年成本：$${tcoPerTflops.toFixed(2)}`);
    if (compare.length > 0) {
      lines.push('');
      lines.push('**对比列表**');
      for (const c of compare) {
        lines.push(`- ${zhName(c.chip.id, c.chip.name)} × ${c.quantity}：TCO $${Math.round(c.tco).toLocaleString()}`);
      }
    }
    return lines.join('\n');
  }, [chip, qty, usage, price, years, unitPriceUSD, tco, tcoPerTflops, compare]);

  // 留资报告的焦点芯片：主选 + 对比列表（用于生成规格/定价/替代方案章节）
  const getFocusChipIds = useCallback(
    () => (chip ? [chip.id, ...compare.map(c => c.chip.id)] : []),
    [chip, compare],
  );

  const pieData = useMemo(() => [
    { label: '采购', value: proc, color: COLORS[0] },
    { label: '电费', value: elec, color: COLORS[1] },
    { label: '租金', value: dc, color: COLORS[2] },
    { label: '冷却', value: cool, color: COLORS[3] },
  ].filter(i => i.value > 0), [proc, elec, dc, cool]);

  // P0-2 累计 TCO：每根柱子 = 截至该年的累计（已折现）TCO，
  // 堆叠为累计构成（采购 / 电费 / 租金 / 冷却）。柱子逐年升高，契合「TCO 随年限变化」标题。
  const barData = useMemo(() => {
    let cumProc = 0, cumElec = 0, cumDc = 0, cumCool = 0;
    return Array.from({ length: years }, (_, i) => {
      const y = i + 1;
      const sf = discount > 0 ? Math.pow(1 + discount, -(y - 1)) : 1; // 单年折现因子
      cumProc += y === 1 ? proc : 0;
      cumElec += annualDeviceElec * sf;
      cumDc += annualDc * sf;
      cumCool += annualCooling * sf;
      return { year: y, procurement: cumProc, electricity: cumElec, dc: cumDc, cooling: cumCool };
    });
  }, [years, proc, annualDeviceElec, annualDc, annualCooling, discount]);

  const addCompare = useCallback(() => {
    if (!chip || !tco || !proc) {
      setToast('⚠️ 请先选择芯片并填写价格');
      setTimeout(() => setToast(''), 2000);
      return;
    }
    if (!chip.tdp || chip.tdp <= 0) {
      setToast('⚠️ 此芯片缺少单卡 TDP，无法估算电费，暂不支持加入对比');
      setTimeout(() => setToast(''), 2000);
      return;
    }
    setCompare(prev => [...prev.filter(p => p.chip.id !== chip.id), {
      chip, quantity: qty, tco, procurement: proc, electricity: elec, dc, cooling: cool,
      tcoPerTflops,
    }].slice(-4));
    setToast(`✓ 已将 ${zhName(chip.id, chip.name)} 加入对比`);
    setTimeout(() => setToast(''), 2000);
  }, [chip, qty, tco, proc, elec, dc, cool, tcoPerTflops]);

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
        <div className={styles.cardTitle}>⚙️ 参数设置</div>

        {/* 部署模式切换 */}
        <div className={styles.modeRow} role="tablist" aria-label="部署模式">
          <button type="button" role="tab" aria-selected={mode === 'node'}
            className={`${styles.modeBtn} ${mode === 'node' ? styles.modeBtnActive : ''}`}
            onClick={() => setMode('node')}>
            单节点 / 裸卡
          </button>
          <button type="button" role="tab" aria-selected={mode === 'cluster'}
            className={`${styles.modeBtn} ${mode === 'cluster' ? styles.modeBtnActive : ''}`}
            onClick={() => setMode('cluster')}>
            集群级（含服务器 / 网络 / 人力）
          </button>
        </div>

        <div style={{ marginBottom: 14 }}>
          <label className={styles.label} htmlFor="tco-chip-select">
            选择芯片 <span className={styles.labelHint}>支持搜索 · 按厂商分组 · 键盘 ↑↓ Enter</span>
          </label>
          {chips.length === 0 ? (
            <div className={styles.loadingPlaceholder}>正在加载芯片数据…</div>
          ) : (
            <ChipSelect chips={chips} value={chipId} onChange={(v) => { setChipId(v); setManualPrice(null); }} id="tco-chip-select" />
          )}
          {chip && chip.tdp > 50000 && (
            <div className={styles.warningBox} role="alert">
              <span>⚠️</span>
              <span><strong>整机系统</strong>：此芯片 TDP 为 {fmtFull(chip.tdp)}，是整套机柜功耗而非单卡。TCO 计算结果不适用。</span>
            </div>
          )}
          {chip && (!chip.tdp || chip.tdp <= 0) && (
            <div className={styles.warningBox} role="alert">
              <span>⚠️</span>
              <span><strong>缺少单卡 TDP</strong>：此卡片未提供单卡功耗（如整机超级节点），无法估算电费与冷却成本，TCO 仅含采购与租金。</span>
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
                    <span className={styles.priceMsrp}>指导价 {fmtFull(Math.round(toUSD(chipPriceInfo.official_msrp, chipPriceInfo.currency)))}</span>
                  )}
                  <span className={styles.priceSource}>{chipPriceInfo?.source}</span>
                  <button type="button" onClick={() => setCurrencyView(currencyView === 0 ? 1 : 0)}
                    className={styles.pricePreset} style={{ marginLeft: 4 }} title="切换显示币种">
                    {displayInCNY ? '¥→$' : '$→¥'}
                  </button>
                </>
              ) : (
                <span className={styles.priceNone}>暂无定价信息 — 请手动输入预估价格</span>
              )}
            </div>
          )}
          {/* P0-2 手动输入价格 */}
          {chip && (
            <div className={styles.manualPriceRow}>
              <span className={styles.manualPriceLabel}>手动价格 ($):</span>
              <input
                type="number"
                className={`${styles.input} ${styles.manualPriceInput}`}
                min={0}
                step={100}
                placeholder="输入预估价格"
                value={manualPrice ?? ''}
                onChange={e => setManualPrice(e.target.value === '' ? null : Number(e.target.value))}
                aria-label="手动输入单卡价格（美元）"
              />
              {manualPrice != null && (
                <button type="button" onClick={() => setManualPrice(null)}
                  className={styles.pricePreset} title="清除手动价格，恢复数据库价格">
                  ↺ 恢复
                </button>
              )}
            </div>
          )}
          {chip && manualPrice != null && (
            <div className={styles.manualPriceNote}>✓ 已使用您手动输入的价格（${'$'}{manualPrice.toLocaleString()}），结果将标注为「用户估算」</div>
          )}
        </div>

        <div className={styles.formRow}>
          <div className={styles.formCol}>
            <label className={styles.label} htmlFor="tco-qty">数量（张）</label>
            <div className={styles.qtyRow}>
              <button type="button" onClick={() => setQty(Math.max(1, qty - 1))} className={styles.qtyBtn} aria-label="减少数量">−</button>
              <input id="tco-qty" type="number" className={`${styles.input} ${styles.qtyInput}`} min={1} value={qty} onChange={e => setQty(Math.max(1, Number(e.target.value)))} aria-label="芯片数量"/>
              <button type="button" onClick={() => setQty(qty + 1)} className={styles.qtyBtn} aria-label="增加数量">+</button>
            </div>
            <div className={styles.qtyPresets}>
              {[1, 8, 64, 256].map(v => (
                <button key={v} type="button" onClick={() => setQty(v)} className={`${styles.qtyPreset} ${qty === v ? styles.qtyPresetActive : ''}`}>
                  {v === 1 ? '单卡' : v + '卡'}
                </button>
              ))}
            </div>
          </div>
          <div className={styles.formCol}>
            <label className={styles.label} htmlFor="tco-usage">
              数据中心使用率 <span className={styles.labelValue}>{(usage * 100).toFixed(0)}%</span>
            </label>
            <input id="tco-usage" type="range" className={styles.range} min={0.1} max={1} step={0.05} value={usage}
              onChange={e => setUsage(Number(e.target.value))} aria-valuetext={`${(usage * 100).toFixed(0)} 百分比`}/>
            <div className={styles.rangeScale}><span>10%</span><span>50%</span><span>100%</span></div>
          </div>
        </div>

        {/* 集群级参数 */}
        {isCluster && (
          <div className={styles.clusterRow}>
            <div className={styles.formCol}>
              <label className={styles.label} htmlFor="tco-server">服务器节点价（$/8 卡）</label>
              <input id="tco-server" type="number" className={styles.input} min={0} step={1000}
                value={serverCost} onChange={e => setServerCost(Math.max(0, Number(e.target.value)))}/>
              <div className={styles.rangeScale}><span>CPU / 主板 / 内存 / 存储</span></div>
            </div>
            <div className={styles.formCol}>
              <label className={styles.label} htmlFor="tco-netr">
                网络设备占比 <span className={styles.labelValue}>{(networkRatio * 100).toFixed(0)}%</span>
              </label>
              <input id="tco-netr" type="range" className={styles.range} min={0.02} max={0.4} step={0.01}
                value={networkRatio} onChange={e => setNetworkRatio(Number(e.target.value))}
                aria-valuetext={`${(networkRatio * 100).toFixed(0)} 百分比`}/>
              <div className={styles.rangeScale}><span>2%</span><span>40%</span></div>
            </div>
            <div className={styles.formCol}>
              <label className={styles.label} htmlFor="tco-ops">人力 OPEX（$/千卡/年）</label>
              <input id="tco-ops" type="number" className={styles.input} min={0} step={10000}
                value={opsPerK} onChange={e => setOpsPerK(Math.max(0, Number(e.target.value)))}/>
              <div className={styles.rangeScale}><span>SRE / 机房运维</span></div>
            </div>
          </div>
        )}

        <div className={styles.formRow}>
          <div className={styles.formCol}>
            <label className={styles.label} htmlFor="tco-price">电价（$/kWh）</label>
            <input id="tco-price" type="number" className={styles.input} min={0.01} max={5} step={0.01} value={price} onChange={e => setPrice(Number(e.target.value))}/>
            <div className={styles.pricePresets}>
              {[{ l: '中国 $0.08', v: 0.08 }, { l: '美国 $0.12', v: 0.12 }, { l: '欧洲 $0.20', v: 0.20 }, { l: '中东 $0.04', v: 0.04 }].map(p => (
                <button key={p.l} type="button" onClick={() => setPrice(p.v)}
                  className={`${styles.pricePreset} ${Math.abs(price - p.v) < 0.001 ? styles.pricePresetActive : ''}`}>
                  {p.l}
                </button>
              ))}
            </div>
          </div>
          <div className={styles.formCol}>
            <label className={styles.label} htmlFor="tco-years">
              使用年限（年）<span className={styles.labelValue}>{years} 年</span>
            </label>
            <input id="tco-years" type="range" className={styles.range} min={1} max={8} step={1} value={years}
              onChange={e => setYears(Number(e.target.value))} aria-valuetext={`${years} 年`}/>
            <div className={styles.rangeScale}><span>1年</span><span>4年</span><span>8年</span></div>
          </div>
        </div>

        {/* P1-1 / P1-2 / P1-3 高级参数（默认折叠） */}
        <details className={styles.advancedDetails}>
          <summary className={styles.advancedSummary}>
            ⚙️ 高级参数（空闲功耗 / PUE / 折现）
          </summary>
          <div className={`${styles.formRow} ${styles.advancedBody}`}>
            <div className={styles.formCol}>
              <label className={styles.label} htmlFor="tco-idle">
                空闲功耗比率 <span className={styles.labelValue}>{(idleRatio * 100).toFixed(0)}%</span>
              </label>
              <input id="tco-idle" type="range" className={styles.range} min={0.05} max={0.40} step={0.05} value={idleRatio}
                onChange={e => setIdleRatio(Number(e.target.value))} aria-valuetext={`${(idleRatio * 100).toFixed(0)} 百分比`}/>
              <div className={styles.small}>GPU 空闲时约占 TDP 的比例</div>
            </div>
            <div className={styles.formCol}>
              <label className={styles.label} htmlFor="tco-pue">
                PUE <span className={styles.labelValue}>{pue.toFixed(2)}</span>
              </label>
              <input id="tco-pue" type="range" className={styles.range} min={1.05} max={1.6} step={0.05} value={pue}
                onChange={e => setPue(Number(e.target.value))} aria-valuetext={`PUE ${pue.toFixed(2)}`}/>
              <div className={styles.pricePresets}>
                {[{ l: '极致 1.05', v: 1.05 }, { l: '液冷 1.10', v: 1.10 }, { l: '风冷 1.30', v: 1.30 }, { l: '普通 1.50', v: 1.50 }].map(p => (
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
              <label className={styles.label} htmlFor="tco-dc">单卡年租金（$/年）</label>
              <input id="tco-dc" type="number" className={styles.input} min={0} max={50000} step={50} value={dcCost} onChange={e => setDcCost(Number(e.target.value))}/>
              <div className={styles.small}>含机柜/网络/维护</div>
            </div>
            <div className={styles.formCol}>
              <label className={styles.label} htmlFor="tco-dr">
                折现率 <span className={styles.labelValue}>{(discount * 100).toFixed(1)}%</span>
              </label>
              <input id="tco-dr" type="range" className={styles.range} min={0} max={0.20} step={0.01} value={discount}
                onChange={e => setDiscount(Number(e.target.value))} aria-valuetext={`${(discount * 100).toFixed(1)} 百分比`}/>
              <div className={styles.small}>未来现金流折现到当前（年化）</div>
            </div>
          </div>
        </details>
      </div>

        </div>
        <div className={styles.toolRight}>

      {/* Results */}
      <div className={styles.card}>
        <div className={styles.cardTitle}>
          📊 TCO 计算结果
          {chip && <span className={styles.resultChip}>{zhName(chip.id, chip.name)} × {qty}，{years} 年{discount > 0 ? '（已折现）' : ''}</span>}
        </div>

        {!chip ? (
          <div className={styles.tcoEmpty}>
            <div className={styles.tcoEmptyEmoji}>🖥️</div>
            <p className={styles.tcoEmptyTitle}>请在上方选择一款芯片开始计算</p>
            <small>支持 {chips.length} 款 AI 算力卡</small>
          </div>
        ) : !unitPriceUSD ? (
          <div className={styles.tcoEmpty}>
            <div className={styles.tcoEmptyEmoji}>💰</div>
            <p className={styles.tcoEmptyTitle}>该芯片暂无定价信息</p>
            <small>请在上方「手动价格」输入框填写预估价格</small>
          </div>
        ) : (
          <>
            <div className={styles.tcoBox}>
              <div className={styles.resultHeader}>{years} 年 TCO 总计{discount > 0 ? '（折现）' : ''}</div>
              <div className={styles.tcoValue}><AnimatedMoney value={tco} animateKey={chipId} /></div>
              <div className={styles.tcoSub}>
                年均 <AnimatedMoney value={tco / years} animateKey={chipId} /> · 每卡年均 <AnimatedMoney value={tco / qty / years} animateKey={chipId} />
                {tcoPerTflops != null && <> · <strong>每 TFLOPS TCO ${tcoPerTflops.toFixed(2)}</strong></>}
              </div>
            </div>

            {[
              { name: '采购成本', value: proc, color: COLORS[0] },
              { name: '电费成本（折现）', value: elec, color: COLORS[1] },
              { name: '数据中心租金（折现）', value: dc, color: COLORS[2] },
              { name: '冷却成本（折现）', value: cool, color: COLORS[3] },
            ].map(item => {
              const pct = tco > 0 ? (item.value / tco) * 100 : 0;
              return (
                <div key={item.name} className={styles.costRow}>
                  <div className={styles.costRowBar} style={{ width: `${pct}%`, background: item.color }} />
                  <span className={styles.costDot} style={{ background: item.color }} aria-hidden="true" />
                  <span className={styles.costName}>{item.name}</span>
                  <span className={styles.costValue}><AnimatedMoney value={item.value} animateKey={chipId} /></span>
                  <span className={styles.costPct}>{pct.toFixed(1)}%</span>
                </div>
              );
            })}

            <div className={styles.chartRow}>
              <div className={styles.chartCard}>
                <div className={styles.chartTitle}>成本构成 <span className={styles.chartHint}>(hover/聚焦查看)</span></div>
                <Pie data={pieData} hoverIdx={pieHover} setHover={setPieHover} />
              </div>
              <div className={styles.chartCard}>
                <div className={styles.chartTitle}>TCO 累计随年限 <span className={styles.chartHint}>(累计·已折现)</span></div>
                <Bars data={barData} hoverYear={barHover} setHover={setBarHover} baseProc={proc} />
              </div>
            </div>

            <div className={styles.insightBox}>
              <div className={styles.insightTitle}>💡 关键洞察</div>
              <div className={styles.insightRow}>
                <strong>采购 vs 电费：</strong>
                {proc > elec ? <span className={styles.insightGood}>采购成本占主导，关注性能性价比</span> : <span className={styles.insightBad}>电费超过采购成本！建议选择能效更高的芯片</span>}
              </div>
              <div className={styles.insightRow}>
                <strong>每瓦 TCO（全周期）：</strong> {chip.tdp > 0 ? <><AnimatedMoney value={tco / qty / chip.tdp} animateKey={chipId} /> / W</> : '—'}
              </div>
              <div className={styles.insightRow}>
                <strong>电费年增长率：</strong> {tdpKW > 0 ? <><AnimatedMoney value={annualDeviceElec} animateKey={chipId} /> / 年（设备电，PUE={pue.toFixed(2)} 已含冷却）</> : '—'}
              </div>
              {tcoPerTflops != null && (
                <div className={styles.insightRow}>
                  <strong>每 TFLOPS TCO：</strong> ${tcoPerTflops.toFixed(2)} / TFLOPS（按 FP16 算力 {chip.fp16Tflops} TFLOPS 归一化）
                </div>
              )}
              {isCluster && (
                <div className={styles.insightRow}>
                  <strong>集群级 TCO：</strong>
                  <AnimatedMoney value={tcoCluster} animateKey={`${chipId}-${mode}`} />（{qty} 卡 = {servers} 台服务器节点 · 网络 ${Math.round(networkCost).toLocaleString()} · 人力 ${Math.round(opsHumanAnnual * years).toLocaleString()}，均{discount > 0 ? '已折现' : '未折现'}）
                </div>
              )}
              {breakevenUsage != null && (
                <div className={styles.insightRow}>
                  <strong>Build vs Rent：</strong>
                  {usage >= breakevenUsage
                    ? <span className={styles.insightGood}>当前利用率 {(usage * 100).toFixed(0)}% 已高于平衡点 {(breakevenUsage * 100).toFixed(0)}%，自建更划算</span>
                    : <span className={styles.insightBad}>当前利用率 {(usage * 100).toFixed(0)}% 低于平衡点 {(breakevenUsage * 100).toFixed(0)}%，租赁更划算</span>}
                </div>
              )}
            </div>

            <Sensitivity base={tco} params={{
              tdpKW, qty, usage, price, years, dcCost, pue, idleRatio, discount, unitPriceUSD,
            }} />

            <div className={styles.actionRow}>
              <button type="button" onClick={addCompare} className={styles.btnAdd}>➕ 加入对比</button>
              <button type="button" onClick={() => chip && exportCSV(
                chip, qty, years, usage, price, dcCost, idleRatio, pue, discount,
                unitPriceUSD, dbPriceOriginal, dbPriceCurrency, manualPrice != null, costs, compare
              )} className={styles.btnCsv} title="导出当前计算结果为 CSV（含汇率与原币种）">📥 导出 CSV</button>
            </div>
          </>
        )}
      </div>

      {/* Build vs Rent */}
      {chip && (
        <div className={styles.card}>
          <div className={styles.cardTitle}>⚖️ 自建 vs 云租赁（Build vs Rent）</div>
          <div className={styles.bvrGrid}>
            <div className={styles.bvrCol}>
              <label className={styles.label} htmlFor="tco-cloud">云 GPU 租赁价（$/GPU/hr）</label>
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
                当前 {(usage * 100).toFixed(0)}% 利用率：自建 <strong>${ownPerHourNow.toFixed(2)}</strong>/GPU/hr
                {' '}vs 云 <strong>${cloudPrice.toFixed(2)}</strong>/GPU/hr
                {ownPerHourNow < cloudPrice ? (
                  <span className={styles.bvrGood}> · 自建每年省 ${Math.round((cloudPrice - ownPerHourNow) * 8760 * qty).toLocaleString()}</span>
                ) : (
                  <span className={styles.bvrBad}> · 自建每年多花 ${Math.round((ownPerHourNow - cloudPrice) * 8760 * qty).toLocaleString()}</span>
                )}
              </p>
            </div>
            <div className={styles.bvrKpi} role="status">
              <div className={styles.bvrKpiLabel}>盈亏平衡利用率</div>
              <div className={styles.bvrKpiValue}>
                {breakevenUsage != null ? `${(breakevenUsage * 100).toFixed(0)}%` : '—'}
              </div>
              <div className={styles.bvrKpiHint}>
                {breakevenUsage != null
                  ? `利用率持续高于 ${(breakevenUsage * 100).toFixed(0)}% 时，自建比租云更划算`
                  : `云价 ≤ 自建固定成本下限（$${bvrB.toFixed(2)}/hr），租赁始终更优`}
              </div>
            </div>
          </div>
          <div className={styles.bvrTableWrap}>
            <table className={styles.bvrTable}>
              <caption className={styles.srOnly}>不同利用率下自建与云租赁的每小时成本对比（{qty} 卡集群）</caption>
              <thead>
                <tr>
                  <th scope="col">利用率</th>
                  <th scope="col">自建 $/GPU/hr</th>
                  <th scope="col">对比云 ${cloudPrice.toFixed(2)}</th>
                  <th scope="col">年化差额（{qty} 卡）</th>
                </tr>
              </thead>
              <tbody>
                {bvrRows.map(r => (
                  <tr key={r.u} className={Math.abs(r.u - usage) < 0.026 ? styles.bvrRowActive : ''}>
                    <td>{Math.round(r.u * 100)}%</td>
                    <td>${r.own.toFixed(2)}</td>
                    <td className={r.delta <= 0 ? styles.bvrGood : styles.bvrBad}>
                      {r.delta <= 0 ? '省 $' : '贵 $'}{Math.abs(r.delta).toFixed(2)}/hr
                    </td>
                    <td className={r.delta <= 0 ? styles.bvrGood : styles.bvrBad}>
                      {r.delta <= 0 ? '−$' : '+$'}{Math.abs(Math.round(r.annual)).toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Compare */}
      {compare.length > 0 && (
        <div className={styles.compareSection}>
          <div className={styles.compareHeader}>
            📊 多芯片 TCO 对比
            <span className={styles.compareHint}>(最多 4 款{discount > 0 ? '·已折现' : ''})</span>
            <button type="button" onClick={clearCompare} className={styles.compareClear}>清空全部</button>
          </div>
          <div className={styles.compareGrid}>
            {compare.map(entry => (
              <div key={entry.chip.id} className={styles.compareCard}>
                <button type="button" onClick={() => removeCompare(entry.chip.id)} title="删除此对比项" className={styles.compareRemove} aria-label="删除对比项">×</button>
                <div className={styles.compareName}>{zhName(entry.chip.id, entry.chip.name)}</div>
                <div className={styles.compareQty}>× {entry.quantity}{entry.chip.fp16Tflops ? ` · ${entry.chip.fp16Tflops} TFLOPS` : ''}</div>
                <div className={styles.compareTco}>{fmtFull(Math.round(entry.tco))}</div>
                {entry.tcoPerTflops != null && (
                  <div className={styles.compareTflops}>${entry.tcoPerTflops.toFixed(2)} / TFLOPS</div>
                )}
                <div className={styles.compareCosts}>
                  <span className={styles.compareCostItem}>采购 {fmt(entry.procurement)}</span>
                  <span className={styles.compareCostItem}>电费 {fmt(entry.electricity)}</span>
                  <span className={styles.compareCostItem}>租金 {fmt(entry.dc)}</span>
                  <span className={styles.compareCostItem}>冷却 {fmt(entry.cooling)}</span>
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
        <LeadCapture source="tco" lang="zh" getExtraSections={getTcoContext} getFocusChipIds={getFocusChipIds} />
      </div>
    </div>
  );
}
