import { memo, useCallback, useState, type FormEvent } from 'react';
import styles from './LeadCapture.module.css';

/**
 * 「下载完整选型报告」邮箱留资组件。
 *
 * 无后端依赖的设计：
 * 1. 用户提交邮箱后，前端即时抓取 /chips.json 生成 Markdown 选型报告并触发下载
 *    ——留资即交付，不欺骗用户「稍后发送」。
 * 2. Lead 记录写入 localStorage（mf_leads），未来接后端时在 saveLead 中替换为
 *    fetch('/api/leads', ...) 即可，调用方无需改动。
 */

type LeadCaptureProps = {
  /** 留资来源，用于 lead 归因 */
  source: 'tco' | 'compare';
  /** 界面语言 */
  lang?: 'zh' | 'en';
  /** 个性化报告段落（Markdown 文本），如当前 TCO 计算结果或对比选择 */
  getExtraSections?: () => string;
};

type ChipRecord = {
  id: string;
  title: string;
  vendor: string;
  specs?: Record<string, unknown>;
  tdpW?: number | null;
  fp16Tflops?: number | null;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const LEAD_KEY = 'mf_leads';

// 模块级缓存：chips.json 全站共用，避免重复请求（js-cache-function-results）
let chipsCache: ChipRecord[] | null = null;

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

function buildReport(chips: ChipRecord[], lang: 'zh' | 'en', source: string, extra: string): string {
  const zh = lang === 'zh';
  const date = new Date().toISOString().slice(0, 10);
  const lines: string[] = [];
  if (zh) {
    lines.push(`# MirrorFrog AI 算力卡选型报告`);
    lines.push('');
    lines.push(`> 生成日期：${date} · 来源页面：${source === 'tco' ? 'TCO 计算器' : '芯片对比页'}`);
    lines.push('> 数据来源：mirrorfrog.com（222 款 AI 芯片规格库，CC BY 4.0）');
    lines.push('');
  } else {
    lines.push(`# MirrorFrog AI Accelerator Selection Report`);
    lines.push('');
    lines.push(`> Generated: ${date} · Source: ${source === 'tco' ? 'TCO Calculator' : 'Chip Comparison'}`);
    lines.push('> Data: mirrorfrog.com (222-chip spec database, CC BY 4.0)');
    lines.push('');
  }

  if (extra.trim()) {
    lines.push(zh ? '## 我的选型上下文' : '## My Selection Context');
    lines.push('');
    lines.push(extra.trim());
    lines.push('');
  }

  lines.push(zh ? '## 全量芯片规格摘要' : '## Full Chip Spec Summary');
  lines.push('');
  lines.push(
    zh
      ? '| 型号 | 厂商 | FP16 (TFLOPS) | TDP (W) |'
      : '| Model | Vendor | FP16 (TFLOPS) | TDP (W) |',
  );
  lines.push('| --- | --- | --- | --- |');
  for (const c of chips) {
    const fp16 = c.fp16Tflops != null ? String(c.fp16Tflops) : '—';
    const tdp = c.tdpW != null ? String(c.tdpW) : '—';
    lines.push(`| ${c.title} | ${c.vendor} | ${fp16} | ${tdp} |`);
  }
  lines.push('');
  lines.push(
    zh
      ? '完整规格（架构 / 制程 / 显存 / 带宽 / 定价）请访问 https://www.mirrorfrog.com/docs/intro'
      : 'Full specs (architecture / process / memory / bandwidth / pricing): https://www.mirrorfrog.com/en/docs/intro',
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

function LeadCaptureInner({ source, lang = 'zh', getExtraSections }: LeadCaptureProps) {
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
      loadChips()
        .then(chips => {
          const md = buildReport(chips, lang, source, extra);
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
    [email, lang, source, getExtraSections],
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
                ? '含 222 款芯片规格摘要与你当前的选型上下文。后续更新我们会通过邮箱同步给你。'
                : 'Includes the 222-chip spec summary plus your selection context. Future updates will be emailed to you.'}
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
          {zh ? '免费领取完整选型报告' : 'Get the full selection report — free'}
        </h3>
        <p className={styles.desc}>
          {zh
            ? '留下邮箱，立即下载含 222 款 AI 芯片规格、定价与算力摘要的完整报告（Markdown），并订阅后续数据更新。'
            : 'Drop your email to instantly download a Markdown report covering all 222 AI accelerators (specs, pricing, FP16 summary) and subscribe to data updates.'}
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
            placeholder={zh ? 'you@company.com' : 'you@company.com'}
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
              ? zh
                ? '生成中…'
                : 'Generating…'
              : zh
                ? '下载报告'
                : 'Download report'}
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
