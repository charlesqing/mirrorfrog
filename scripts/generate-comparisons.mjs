// scripts/generate-comparisons.mjs
// 自动生成 X-vs-Y 对比静态落地页，提升长尾 SEO 收录。
// 读取 static/chips.json，针对热门对比对生成 docs/compare/<a>-vs-<b>.mdx（中文）。
// 同时为国际化生成英文版到 i18n/en/.../current/compare/<a>-vs-<b>.mdx。
// 运行：node scripts/generate-comparisons.mjs
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const CHIPS_PATH = path.join(ROOT, 'static', 'chips.json');
const OUT_DIR = path.join(ROOT, 'docs', 'compare');
const EN_OUT_DIR = path.join(
  ROOT,
  'i18n',
  'en',
  'docusaurus-plugin-content-docs',
  'current',
  'compare'
);

const chips = JSON.parse(fs.readFileSync(CHIPS_PATH, 'utf8'));
const byId = new Map(chips.map((c) => [c.id, c]));

// 热门对比对（id 对）。覆盖 NVIDIA↔华为/AMD/Google/Intel、国产互比、同厂代际。
const PAIRS = [
  ['h100', 'ascend-910b'],
  ['h100', 'ascend-910c'],
  ['h200', 'ascend-910c'],
  ['b200', 'ascend-910c'],
  ['a100', 'ascend-910b'],
  ['h800', 'ascend-910c'],
  ['h20', 'ascend-910b'],
  ['gb200', 'ascend-910c'],
  ['a800', 'ascend-910b'],
  ['h100', 'mi300x'],
  ['h200', 'mi300x'],
  ['b200', 'mi300x'],
  ['b200', 'mi325x'],
  ['a100', 'mi210'],
  ['h100', 'mi250'],
  ['h100', 'tpu-v5p'],
  ['h100', 'tpu-v4'],
  ['h200', 'tpu-v6e'],
  ['b200', 'tpu-ironwood'],
  ['h100', 'gaudi-3'],
  ['a100', 'gaudi-2'],
  ['mi300x', 'ascend-910c'],
  ['mi325x', 'ascend-910c'],
  ['mi300x', 'tpu-v5p'],
  ['ascend-910b', 'mlu-690'],
  ['ascend-910c', 'mlu-690'],
  ['ascend-910c', 'metax-c600'],
  ['ascend-910c', 'moore-threads-mtt-s5000'],
  ['mlu-690', 'moore-threads-mtt-s5000'],
  ['a100', 'h100'],
  ['h100', 'h200'],
  ['h100', 'h800'],
  ['h100', 'h20'],
  ['h200', 'h200-nvl'],
  ['b200', 'gb200'],
  ['mi300x', 'mi325x'],
  ['mi250', 'mi300x'],
  ['l40s', 'l4'],
  ['rtx-4090', 'rtx-5090'],
  ['t4', 'l4'],
  ['gh200', 'gb200'],
];

// ---- 工具函数 ----
const g = (obj, ...keys) => {
  let o = obj;
  for (const k of keys) {
    if (o == null) return undefined;
    o = o[k];
  }
  return o;
};

const num = (s) => {
  if (s == null) return null;
  const m = String(s).replace(/,/g, '').match(/-?\d+(\.\d+)?/);
  return m ? parseFloat(m[0]) : null;
};

const v = (val) => (val == null || String(val).trim() === '' ? '—' : String(val));

// 清洗规格值为英文可读形式：去全角括号、去 CJK、把"级"→"-class"
const cleanEn = (s) => {
  if (s == null) return s;
  return String(s)
    .replace(/（[^）]*）/g, '')
    .replace(/级/g, '-class')
    .replace(/[一-鿿]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
};

// 按语言取值：中文原值；英文经清洗
const cell = (val, lang) => (lang === 'en' ? cleanEn(val) : val);

// TDP 展示：优先用 specs.tdp（带单位），否则用 tdpW 补 W
const tdpDisplay = (c, lang) => {
  const raw = g(c, 'specs', 'tdp');
  if (raw != null) return cell(raw, lang);
  if (c.tdpW != null) return `${c.tdpW} W`;
  return '—';
};

// FP8 展示：缺失时给出可读文案而非裸「—」
const fp8Display = (c, lang) =>
  (g(c, 'specs', 'compute', 'fp8') != null ? cell(g(c, 'specs', 'compute', 'fp8'), lang) : null) ??
  (lang === 'en' ? 'No public FP8 data' : '暂无公开 FP8 算力数据');

// 厂商展示名（中英通用，避免裸 id）
const VENDOR_DISP = {
  nvidia: 'NVIDIA', amd: 'AMD', intel: 'Intel', google: 'Google', aws: 'AWS',
  huawei: 'Huawei', cambricon: 'Cambricon', metax: 'MetaX', iluvatar: 'Iluvatar',
  enflame: 'Enflame', moore: 'Moore Threads', others: 'Other',
};
const vendorDisp = (c) =>
  VENDOR_DISP[c.vendor] || (c.vendor ? c.vendor[0].toUpperCase() + c.vendor.slice(1) : '—');

// 卡片链接：英文版指向 /en 前缀
const cardLink = (c, lang) => (lang === 'en' ? `/en${c.slug}` : c.slug);
const compareTool = (lang) => (lang === 'en' ? '/en/compare' : '/compare');

// 规格行标签（按语言）
const SPEC_LABELS = {
  zh: ['厂商', '架构', '制程', '发布时间', 'FP8 算力', 'FP16 算力', 'FP32 算力', 'INT8 算力', '显存类型', '显存容量', '显存带宽', 'TDP 功耗'],
  en: ['Vendor', 'Architecture', 'Process', 'Release Date', 'FP8 Compute', 'FP16 Compute', 'FP32 Compute', 'INT8 Compute', 'Memory Type', 'Memory Capacity', 'Memory Bandwidth', 'TDP Power'],
};

const SPEC_FNS = [
  (c) => vendorDisp(c),
  (c) => g(c, 'specs', 'architecture'),
  (c) => g(c, 'specs', 'process'),
  (c) => g(c, 'specs', 'release'),
  (c) => g(c, 'specs', 'compute', 'fp8'),
  (c) => g(c, 'specs', 'compute', 'fp16'),
  (c) => g(c, 'specs', 'compute', 'fp32'),
  (c) => g(c, 'specs', 'compute', 'int8'),
  (c) => g(c, 'specs', 'memory', 'type'),
  (c) => g(c, 'specs', 'memory', 'capacity'),
  (c) => g(c, 'specs', 'memory', 'bandwidth'),
  (c) => g(c, 'specs', 'tdp'),
];

function buildTable(a, b, lang) {
  const labels = SPEC_LABELS[lang];
  const header = `| ${labels[0]} | ${a.title} | ${b.title} |`;
  const sep = `| --- | --- | --- |`;
  const rows = SPEC_FNS.map((fn, i) => `| ${labels[i]} | ${v(cell(fn(a), lang))} | ${v(cell(fn(b), lang))} |`);
  return [header, sep, ...rows].join('\n');
}

function buildDiffs(a, b, lang) {
  const out = [];
  const fa = num(g(a, 'specs', 'compute', 'fp8'));
  const fb = num(g(b, 'specs', 'compute', 'fp8'));
  if (fa != null && fb != null && fa !== fb) {
    const hi = fa > fb ? a : b;
    const lo = fa > fb ? b : a;
    const hiN = fa > fb ? fa : fb;
    const loN = fa > fb ? fb : fa;
    out.push(
      lang === 'en'
        ? `- **FP8 compute**: ${hi.title} leads with ~${hiN.toLocaleString()} TFLOPS versus ${lo.title}'s ${loN.toLocaleString()} TFLOPS, a clear edge in large-scale Transformer training/inference.`
        : `- **FP8 算力**：${hi.title} 以约 ${hiN.toLocaleString()} TFLOPS 领先 ${lo.title} 的 ${loN.toLocaleString()} TFLOPS，在大规模 Transformer 训练/推理中优势明显。`
    );
  }
  const ta = a.tdpW ?? num(g(a, 'specs', 'tdp'));
  const tb = b.tdpW ?? num(g(b, 'specs', 'tdp'));
  if (ta != null && tb != null && ta !== tb) {
    const lo = ta < tb ? a : b;
    const hi = ta < tb ? b : a;
    out.push(
      lang === 'en'
        ? `- **Power**: ${lo.title} has a TDP of ${tdpDisplay(lo, lang)}, lower than ${hi.title}'s ${tdpDisplay(hi, lang)}, friendlier to datacenter PUE and cooling.`
        : `- **功耗**：${lo.title} 的 TDP 为 ${tdpDisplay(lo, lang)}，低于 ${hi.title} 的 ${tdpDisplay(hi, lang)}，对数据中心 PUE 与散热更友好。`
    );
  }
  const ca = num(g(a, 'specs', 'memory', 'capacity'));
  const cb = num(g(b, 'specs', 'memory', 'capacity'));
  if (ca != null && cb != null && ca !== cb) {
    const hi = ca > cb ? a : b;
    const lo = ca > cb ? b : a;
    out.push(
      lang === 'en'
        ? `- **Memory capacity**: ${hi.title} packs ${cell(g(hi, 'specs', 'memory', 'capacity'), lang)}, more than ${lo.title}'s ${cell(g(lo, 'specs', 'memory', 'capacity'), lang)}, more comfortable for single-card hosting of very large models.`
        : `- **显存容量**：${hi.title} 配备 ${g(hi, 'specs', 'memory', 'capacity')}，多于 ${lo.title} 的 ${g(lo, 'specs', 'memory', 'capacity')}，对超大模型单卡承载更从容。`
    );
  }
  if (out.length === 0) {
    out.push(
      lang === 'en'
        ? `- The two chips are positioned similarly; evaluate based on your specific workload, software-stack maturity, and supply-chain availability.`
        : `- 两款芯片定位接近，建议结合具体工作负载、软件栈成熟度与供应链可得性综合评估。`
    );
  }
  return out.join('\n');
}

function buildAdvice(a, b, lang) {
  const adv = [];
  const isNv = (c) => c.vendor === 'nvidia';
  const isDomestic = (c) =>
    ['huawei', 'cambricon', 'others'].includes(c.vendor) &&
    /(昇腾|寒武纪|摩尔|沐曦|天数|昆仑|璧仞|燧原)/.test(c.title + c.vendor);
  if ((isNv(a) && isDomestic(b)) || (isNv(b) && isDomestic(a))) {
    const nv = isNv(a) ? a : b;
    const dom = isNv(a) ? b : a;
    adv.push(
      lang === 'en'
        ? `If your project demands **CUDA ecosystem, NCCL communication, and zero-modification migration of existing code**, ${nv.title} is the lowest-risk choice; if you prioritize **sovereignty, supply certainty, or specific localization compliance**, ${dom.title} offers greater strategic value.`
        : `若项目对 **CUDA 生态、NCCL 通信与现有代码零改造迁移** 要求高，${nv.title} 是风险最低的选择；若关注 **自主可控、供应确定性或特定国产化合规**，则 ${dom.title} 更具战略价值。`
    );
  }
  adv.push(
    lang === 'en'
      ? `When chasing extreme single-card compute and a mature toolchain, prioritize ${a.title}; if budget, power wall, or local support are hard constraints, ${b.title} often fits better. Use this site's [AI Compute Card Comparison Tool](${compareTool('en')}) to validate multiple chips side-by-side before deciding.`
      : `追求极致单卡算力与成熟工具链时优先考虑 ${a.title}；若预算、功耗墙或本地化支持是硬约束，${b.title} 往往更贴合。建议用本站的 [AI 算力卡对比工具](${compareTool('zh')}) 把多款芯片并排验证后再决策。`
  );
  return adv.map((s) => `- ${s}`).join('\n');
}

function buildFaq(a, b, lang) {
  const qa =
    lang === 'en'
      ? [
          [
            `What are the main differences between ${a.title} and ${b.title}?`,
            `The core difference is architecture and compute density: ${a.title} uses ${v(cell(g(a, 'specs', 'architecture'), lang))}, FP8 ~${fp8Display(a, lang)}, memory ${v(cell(g(a, 'specs', 'memory', 'capacity'), lang))}; ${b.title} uses ${v(cell(g(b, 'specs', 'architecture'), lang))}, FP8 ~${fp8Display(b, lang)}, memory ${v(cell(g(b, 'specs', 'memory', 'capacity'), lang))}. See the comparison table above.`,
          ],
          [
            `What is the TDP (power) of ${a.title}?`,
            `${a.title} has a TDP of ${tdpDisplay(a, lang)}; actual whole-system power also includes board, fans, and PUE.`,
          ],
          [
            `Which is better for large-model training / inference?`,
            `Training values memory capacity, bandwidth, and multi-card interconnect; inference values single-card throughput and power efficiency. Combine the "Key Differences" and "Selection Advice" above with your batch size, model size, and SLA.`,
          ],
          [
            `How much do ${a.title} and ${b.title} differ in memory capacity?`,
            `${a.title} is ${v(cell(g(a, 'specs', 'memory', 'capacity'), lang))}, ${b.title} is ${v(cell(g(b, 'specs', 'memory', 'capacity'), lang))}; the gap directly affects loadable model size and context length.`,
          ],
        ]
      : [
          [
            `${a.title} 和 ${b.title} 的主要区别是什么？`,
            `核心差异在架构与算力密度：${a.title} 采用 ${v(g(a, 'specs', 'architecture'))} 架构，FP8 算力约 ${fp8Display(a, lang)}，显存 ${v(g(a, 'specs', 'memory', 'capacity'))}；${b.title} 采用 ${v(g(b, 'specs', 'architecture'))} 架构，FP8 算力约 ${fp8Display(b, lang)}，显存 ${v(g(b, 'specs', 'memory', 'capacity'))}。完整参数见上方对比表。`,
          ],
          [
            `${a.title} 的功耗（TDP）是多少？`,
            `${a.title} 的 TDP 为 ${tdpDisplay(a, lang)}，实际整机功耗还需计入服务器主板、风扇与 PUE。`,
          ],
          [
            `哪个更适合大模型训练 / 推理？`,
            `训练看重显存容量、带宽与多卡互联；推理看重单卡吞吐与功耗比。结合上方「关键差异」与「选型建议」按你的 batch size、模型参数量与 SLA 取舍。`,
          ],
          [
            `${a.title} 与 ${b.title} 的显存容量差多少？`,
            `${a.title} 为 ${v(g(a, 'specs', 'memory', 'capacity'))}，${b.title} 为 ${v(g(b, 'specs', 'memory', 'capacity'))}，差距会直接影响可加载的模型规模与上下文长度。`,
          ],
        ];
  return qa.map(([q, ans]) => `### ${q}\n\n${ans}`).join('\n\n');
}

// YAML 安全：若字符串含 ASCII 冒号等特殊字符，用 JSON 双引号包裹
const q = (s) => (/[:#[\]{}&*!|>'"%@`,]/.test(s) ? JSON.stringify(s) : s);

function genMdx(a, b, lang) {
  const title = `${a.title} vs ${b.title}`;
  const kw =
    lang === 'en'
      ? [a.title, b.title, `${a.title} vs ${b.title}`, 'AI chip comparison', 'accelerator comparison', 'GPU comparison']
      : [a.title, b.title, `${a.title} vs ${b.title}`, 'AI 芯片对比', '算力卡对比', 'GPU 对比'];
  const description =
    lang === 'en'
      ? `${a.title} vs ${b.title} spec comparison: architecture, FP8/FP16/FP32 compute, memory capacity and bandwidth, TDP power, release timing — with key differences, selection advice, and FAQ.`
      : `${a.title} 与 ${b.title} 规格对比：架构、FP8/FP16/FP32 算力、显存容量与带宽、TDP 功耗、发布时间一览，附关键差异、选型建议与常见问题。`;
  const intro =
    lang === 'en'
      ? `In AI infrastructure selection, **${a.title}** and **${b.title}** are two accelerators frequently compared. This article contrasts them item by item — architecture, compute, memory, power, and release cadence — to help you quickly judge which fits training or inference workloads.`
      : `在 AI 基础设施选型中，**${a.title}** 与 **${b.title}** 是经常被放在一起比较的两款加速器。本文从架构、算力、显存、功耗到发布节奏做逐项对照，帮助你快速判断哪一款更契合训练或推理工作负载。`;

  const headers =
    lang === 'en'
      ? { h1: `${a.title} vs ${b.title}: Spec Comparison & Buyer's Guide`, spec: '## Spec Comparison Table', diff: '## Key Differences', advice: '## Selection Advice', faq: '## FAQ', related: '## Related Pages' }
      : { h1: `${a.title} vs ${b.title}：规格对比与选型指南`, spec: '## 规格对比表', diff: '## 关键差异', advice: '## 选型建议', faq: '## 常见问题（FAQ）', related: '## 相关页面' };

  return `---
title: ${title}
description: ${q(description)}
keywords: [${kw.join(', ')}]
sidebar_label: ${a.title} vs ${b.title}
---

import Link from '@docusaurus/Link';

# ${headers.h1}

${intro}

${headers.spec}

${buildTable(a, b, lang)}

${headers.diff}

${buildDiffs(a, b, lang)}

${headers.advice}

${buildAdvice(a, b, lang)}

${headers.faq}

${buildFaq(a, b, lang)}

${headers.related}

- [${a.title}](${cardLink(a, lang)})
- [${b.title}](${cardLink(b, lang)})
- [AI 算力卡对比工具](${compareTool(lang)}) — ${lang === 'en' ? 'Compare 2–4 chips side-by-side online' : '在线并排对比 2–4 款芯片'}
`;
}

// ---- 主流程 ----
fs.mkdirSync(OUT_DIR, { recursive: true });
fs.mkdirSync(EN_OUT_DIR, { recursive: true });
let ok = 0;
let enOk = 0;
let skip = 0;
const written = [];

for (const [ida, idb] of PAIRS) {
  const a = byId.get(ida);
  const b = byId.get(idb);
  if (!a || !b) {
    console.warn(`[skip] 缺失芯片：${ida} / ${idb}`);
    skip++;
    continue;
  }
  const file = path.join(OUT_DIR, `${a.id}-vs-${b.id}.mdx`);
  fs.writeFileSync(file, genMdx(a, b, 'zh'), 'utf8');
  ok++;
  const enFile = path.join(EN_OUT_DIR, `${a.id}-vs-${b.id}.mdx`);
  fs.writeFileSync(enFile, genMdx(a, b, 'en'), 'utf8');
  enOk++;
  written.push(`${a.id}-vs-${b.id}.mdx`);
}

console.log(`[done] 生成 ${ok} 个中文对比页 + ${enOk} 个英文对比页，跳过 ${skip} 个。`);
console.log(written.join('\n'));
