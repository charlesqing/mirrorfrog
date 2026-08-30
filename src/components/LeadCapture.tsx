import { memo, useCallback, useState, type FormEvent } from 'react';
import styles from './LeadCapture.module.css';

/**
 * 「下载选型报告」邮箱留资组件。
 *
 * 报告以用户上下文为中心（不是 222 款全量倾倒）：
 *   1. 你的选型方案 —— 调用方注入的 TCO 摘要 / 对比清单（getExtraSections）
 *   2. 焦点芯片规格与定价 —— getFocusChipIds 指定的芯片，完整 specs + pricing.json 定价
 *   3. 同档替代方案 —— 按 FP16 算力最接近自动推荐 3 款（引回站内的钩子）
 *   4. 无焦点时回退 —— 全量规格表（用户未做筛选时默认输出全库参考）
 *
 * 无后端依赖：提交即生成 Markdown 下载（留资即交付）；lead 存 localStorage，
 * 接后端只改 saveLead()。
 */

type LeadCaptureProps = {
  /** 留资来源，用于 lead 归因 */
  source: 'tco' | 'compare';
  /** 界面语言 */
  lang?: 'zh' | 'en';
  /** 个性化报告段落（Markdown 文本），如当前 TCO 计算结果或对比选择 */
  getExtraSections?: () => string;
  /** 焦点芯片 id 列表（第一个为主选），用于生成规格 + 定价 + 替代方案章节 */
  getFocusChipIds?: () => string[];
};

type ChipRecord = {
  id: string;
  title: string;
  vendor: string;
  slug?: string;
  specs?: Record<string, unknown>;
  tdpW?: number | null;
  fp16Tflops?: number | null;
};

type PriceInfo = {
  official_msrp?: number | null;
  market_price?: number | null;
  currency?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const LEAD_KEY = 'mf_leads';
const ALTERNATIVES_COUNT = 3;

// 模块级缓存：chips/pricing 全站共用，避免重复请求（js-cache-function-results）
let chipsCache: ChipRecord[] | null = null;
let pricingCache: Record<string, PriceInfo> | null = null;

function loadChips(): Promise<ChipRecord[]> {
  if (chipsCache) return Promise.resolve(chipsCache);
  return fetch('/chips.json')
    .then(r => {
      if (!r.ok) throw new Error(`HTTP ${r.status}`);
      return r.json() as Promise<ChipRecord[]>;
    })
    .then(data => {
      chipsCache = data;
      return data;
    });
}

function loadPricing(): Promise<Record<string, PriceInfo>> {
  if (pricingCache) return Promise.resolve(pricingCache);
  return fetch('/pricing.json')
    .then(r => (r.ok ? r.json() : {}) as Record<string, Record<string, PriceInfo>>)
    .then(data => {
      const flat: Record<string, PriceInfo> = {};
      for (const vendor of Object.keys(data)) {
        for (const id of Object.keys(data[vendor])) flat[id] = data[vendor][id];
      }
      pricingCache = flat;
      return flat;
    });
}

// ===== 报告生成 =====

const SPEC_LABEL_ZH: Record<string, string> = {
  'architecture': '架构', 'process': '制程', 'memory.type': '显存类型',
  'memory.capacity': '显存容量', 'memory.bandwidth': '显存带宽',
  'compute.fp8': 'FP8 算力', 'compute.fp16': 'FP16 算力', 'compute.fp32': 'FP32 算力',
  'compute.fp64': 'FP64 算力', 'compute.int8': 'INT8 算力', 'tdp': 'TDP 功耗', 'release': '发布时间',
  'interface': '接口', 'price': '首发价格', 'tdpW': 'TDP（数值 W）',
};

function flattenSpecs(specs: Record<string, unknown>): [string, string][] {
  const out: [string, string][] = [];
  for (const [k, v] of Object.entries(specs)) {
    if (v == null || v === '') continue;
    if (typeof v === 'object') {
      for (const [k2, v2] of Object.entries(v as Record<string, unknown>)) {
        if (v2 == null || v2 === '') continue;
        out.push([`${k}.${k2}`, String(v2)]);
      }
    } else {
      out.push([k, String(v)]);
    }
  }
  return out;
}

function fmtPrice(info: PriceInfo | undefined, zh: boolean): string {
  if (!info || (info.market_price == null && info.official_msrp == null)) {
    return zh ? '未公开' : 'N/A';
  }
  const cur = info.currency === 'CNY' ? 'CNY' : 'USD';
  const sym = cur === 'CNY' ? '¥' : '$';
  const n = info.market_price ?? info.official_msrp ?? 0;
  const base = `${sym}${n.toLocaleString()}（${cur}）`;
  if (info.market_price != null && info.official_msrp != null && info.market_price !== info.official_msrp) {
    return `${base}，MSRP ${sym}${info.official_msrp.toLocaleString()}`;
  }
  return base;
}

function chipUrl(c: ChipRecord, zh: boolean): string {
  const base = 'https://www.mirrorfrog.com';
  if (!c.slug) return base;
  return `${base}${zh ? '' : '/en'}${c.slug}`;
}

function pickAlternatives(focus: ChipRecord, chips: ChipRecord[]): ChipRecord[] {
  const candidates = chips.filter(c => c.id !== focus.id);
  // 排序：同厂商优先，再按就近度
  const byVendorFirst = (dist: (c: ChipRecord) => number) => (a: ChipRecord, b: ChipRecord): number => {
    const va = a.vendor === focus.vendor ? 0 : 1;
    const vb = b.vendor === focus.vendor ? 0 : 1;
    if (va !== vb) return va - vb;
    return dist(a) - dist(b);
  };
  // 主排序键：FP16 算力就近（数据缺失的芯片排到候选池末尾）
  if (focus.fp16Tflops != null && focus.fp16Tflops > 0) {
    const dist = (c: ChipRecord) => Math.abs((c.fp16Tflops ?? 0) - focus.fp16Tflops!);
    return candidates
      .filter(c => c.fp16Tflops != null && c.fp16Tflops > 0)
      .sort(byVendorFirst(dist))
      .slice(0, ALTERNATIVES_COUNT);
  }
  // 兜底：无 FP16 数据时按 TDP 功耗就近（如 H100 无 fp16 字段时给出同功耗档位）
  if (focus.tdpW != null && focus.tdpW > 0) {
    const dist = (c: ChipRecord) => Math.abs((c.tdpW ?? 0) - focus.tdpW!);
    return candidates
      .filter(c => c.tdpW != null && c.tdpW > 0)
      .sort(byVendorFirst(dist))
      .slice(0, ALTERNATIVES_COUNT);
  }
  return [];
}

function chipRow(c: ChipRecord, pricing: Record<string, PriceInfo>, zh: boolean): string {
  const fp16 = c.fp16Tflops != null ? `${c.fp16Tflops}` : '—';
  const tdp = c.tdpW != null ? `${c.tdpW}` : '—';
  const price = fmtPrice(pricing[c.id], zh);
  return `| [${c.title}](${chipUrl(c, zh)}) | ${c.vendor} | ${fp16} | ${tdp} | ${price} |`;
}

function buildReport(
  chips: ChipRecord[],
  pricing: Record<string, PriceInfo>,
  lang: 'zh' | 'en',
  source: string,
  extra: string,
  focusIds: string[],
): string {
  const zh = lang === 'zh';
  const date = new Date().toISOString().slice(0, 10);
  const lines: string[] = [];

  lines.push(zh ? '# MirrorFrog AI 算力卡选型报告' : '# MirrorFrog AI Accelerator Selection Report');
  lines.push('');
  lines.push(
    zh
      ? `> 生成日期：${date} · 来源：${source === 'tco' ? 'TCO 计算器' : '芯片对比页'} · 数据：mirrorfrog.com（CC BY 4.0）`
      : `> Generated: ${date} · Source: ${source === 'tco' ? 'TCO Calculator' : 'Chip Comparison'} · Data: mirrorfrog.com (CC BY 4.0)`,
  );
  lines.push('');

  if (extra.trim()) {
    lines.push(zh ? '## 你的选型方案' : '## Your Selection');
    lines.push('');
    lines.push(extra.trim());
    lines.push('');
  }

  const focusChips = focusIds
    .map(id => chips.find(c => c.id === id))
    .filter((c): c is ChipRecord => c != null);

  if (focusChips.length > 0) {
    // 焦点芯片：完整规格 + 定价
    lines.push(zh ? '## 焦点芯片规格与定价' : '## Focus Chips: Specs & Pricing');
    for (const c of focusChips) {
      lines.push('');
      lines.push(`### ${c.title}`);
      lines.push('');
      lines.push(zh ? '| 规格 | 值 |' : '| Spec | Value |');
      lines.push('| --- | --- |');
      if (c.specs) {
        for (const [k, v] of flattenSpecs(c.specs)) {
          lines.push(`| ${SPEC_LABEL_ZH[k] ?? k} | ${v} |`);
        }
      }
      lines.push(
        zh
          ? `| 参考定价 | ${fmtPrice(pricing[c.id], zh)} |`
          : `| Reference Price | ${fmtPrice(pricing[c.id], zh)} |`,
      );
      lines.push(
        zh
          ? `| 详情页 | ${chipUrl(c, zh)} |`
          : `| Detail Page | ${chipUrl(c, zh)} |`,
      );
      // 同档替代方案（只为第一个焦点芯片推荐）
      if (c === focusChips[0]) {
        const alts = pickAlternatives(c, chips);
        if (alts.length > 0) {
          lines.push('');
          lines.push(
            zh
              ? `### 同档替代方案（${c.fp16Tflops != null && c.fp16Tflops > 0 ? `FP16 算力最接近 ${ALTERNATIVES_COUNT} 款` : `TDP 功耗最接近 ${ALTERNATIVES_COUNT} 款`}）`
              : `### Closest Alternatives (top ${ALTERNATIVES_COUNT} by ${c.fp16Tflops != null && c.fp16Tflops > 0 ? 'FP16 TFLOPS' : 'TDP'})`,
          );
          lines.push('');
          lines.push(
            zh
              ? '| 型号 | 厂商 | FP16 (TFLOPS) | TDP (W) | 参考定价 |'
              : '| Model | Vendor | FP16 (TFLOPS) | TDP (W) | Price |',
          );
          lines.push('| --- | --- | --- | --- | --- |');
          for (const a of alts) lines.push(chipRow(a, pricing, zh));
        }
      }
    }
  } else {
    // 无焦点芯片（用户未做筛选）：默认输出全量规格表 —— 有筛选时是焦点报告，
    // 无筛选时用户要的就是全库参考，全量表符合预期（体积 ~12KB 可接受）
    lines.push(zh ? '## 全量芯片规格摘要' : '## Full Chip Spec Summary');
    lines.push('');
    lines.push(
      zh
        ? '| 型号 | 厂商 | FP16 (TFLOPS) | TDP (W) | 参考定价 |'
        : '| Model | Vendor | FP16 (TFLOPS) | TDP (W) | Price |',
    );
    lines.push('| --- | --- | --- | --- | --- |');
    for (const c of chips) lines.push(chipRow(c, pricing, zh));
  }

  lines.push('');
  lines.push(
    zh
      ? `## 完整数据（${chips.length} 款 · 14 厂商）`
      : `## Full Database (${chips.length} chips · 14 vendors)`,
  );
  lines.push('');
  lines.push(
    zh
      ? `- 在线浏览：https://www.mirrorfrog.com/docs/intro`
      : `- Browse online: https://www.mirrorfrog.com/en/docs/intro`,
  );
  lines.push(
    zh
      ? `- 机器可读数据集：https://www.mirrorfrog.com/chips.json（CC BY 4.0，引用请注明来源 MirrorFrog）`
      : `- Machine-readable dataset: https://www.mirrorfrog.com/chips.json (CC BY 4.0, cite MirrorFrog)`,
  );
  return lines.join('\n');
}

// Lead 持久化：当前 localStorage，接后端时替换此函数即可
function saveLead(email: string, source: string): void {
  try {
    const raw = window.localStorage.getItem(LEAD_KEY);
    const leads: { email: string; source: string; at: string }[] = raw ? JSON.parse(raw) : [];
    leads.push({ email, source, at: new Date().toISOString() });
    window.localStorage.setItem(LEAD_KEY, JSON.stringify(leads.slice(-50)));
    // TODO(backend): 上报 lead——替换为 fetch('/api/leads', {method:'POST', body: JSON.stringify(...)})
  } catch {
    /* 隐私模式下静默失败，下载流程不受影响 */
  }
}

function LeadCaptureInner({ source, lang = 'zh', getExtraSections, getFocusChipIds }: LeadCaptureProps) {
  const zh = lang === 'zh';
  const [email, setEmail] = useState('');
  const [state, setState] = useState<'idle' | 'busy' | 'done' | 'error'>('idle');

  const handleSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault();
      const valid = EMAIL_RE.test(email.trim());
      if (!valid) {
        setState('error');
        return;
      }
      setState('busy');
      const extra = getExtraSections ? getExtraSections() : '';
      const focusIds = getFocusChipIds ? getFocusChipIds() : [];
      Promise.all([loadChips(), loadPricing()])
        .then(([chips, pricing]) => {
          const md = buildReport(chips, pricing, lang, source, extra, focusIds);
          const blob = new Blob([md], { type: 'text/markdown;charset=utf-8' });
          const url = URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = `MirrorFrog-Selection-Report-${new Date().toISOString().slice(0, 10)}.md`;
          document.body.appendChild(a);
          a.click();
          a.remove();
          URL.revokeObjectURL(url);
          saveLead(email.trim(), source);
          setState('done');
        })
        .catch(() => setState('error'));
    },
    [email, lang, source, getExtraSections, getFocusChipIds],
  );

  if (state === 'done') {
    return (
      <aside className={styles.wrap} aria-live="polite">
        <div className={styles.doneBox}>
          <div className={styles.doneIcon} aria-hidden="true">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M4 10.5l4 4 8-9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div>
            <p className={styles.doneTitle}>
              {zh ? '报告已开始下载' : 'Report download started'}
            </p>
            <p className={styles.doneText}>
              {zh
                ? '含你的选型方案、焦点芯片完整规格与定价、同档替代方案。后续数据更新将通过邮箱同步。'
                : 'Includes your selection, focus chip specs & pricing, and closest alternatives. Future data updates will be emailed.'}
            </p>
          </div>
        </div>
      </aside>
    );
  }

  return (
    <aside className={styles.wrap}>
      <div className={styles.cover} aria-hidden="true">
        <div className={styles.coverBar} />
        <div className={styles.coverLine1} />
        <div className={styles.coverLine2} />
        <div className={styles.coverBadge}>222</div>
      </div>
      <div className={styles.body}>
        <h3 className={styles.title}>
          {zh ? '免费领取你的选型报告' : 'Get your selection report — free'}
        </h3>
        <p className={styles.desc}>
          {zh
            ? '留下邮箱，立即下载围绕你当前选型生成的报告（Markdown）：所选芯片完整规格与定价、同档替代方案，并订阅后续数据更新。'
            : 'Drop your email to instantly download a Markdown report built around your selection — focus chip specs & pricing, closest alternatives — and subscribe to data updates.'}
        </p>
        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          <label className={styles.srLabel} htmlFor={`lc-email-${source}`}>
            {zh ? '邮箱地址' : 'Email address'}
          </label>
          <input
            id={`lc-email-${source}`}
            type="email"
            required
            className={`${styles.input}${state === 'error' ? ` ${styles.inputError}` : ''}`}
            placeholder="you@company.com"
            value={email}
            onChange={e => {
              setEmail(e.target.value);
              if (state === 'error') setState('idle');
            }}
            aria-invalid={state === 'error'}
            aria-describedby={`lc-hint-${source}`}
          />
          <button type="submit" className={styles.btn} disabled={state === 'busy'}>
            {state === 'busy'
              ? zh ? '生成中…' : 'Generating…'
              : zh ? '下载报告' : 'Download report'}
          </button>
        </form>
        <p id={`lc-hint-${source}`} className={styles.hint} aria-live="polite">
          {state === 'error'
            ? zh
              ? '邮箱格式有误，或数据加载失败，请重试。'
              : 'Invalid email or data failed to load — please retry.'
            : zh
              ? '无需注册 · 数据 CC BY 4.0 · 随时可退订'
              : 'No signup wall · Data under CC BY 4.0 · Unsubscribe anytime'}
        </p>
      </div>
    </aside>
  );
}

const LeadCapture = memo(LeadCaptureInner);
export default LeadCapture;
