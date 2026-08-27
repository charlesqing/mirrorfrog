// scripts/generate-comparisons.mjs
// 自动生成 X-vs-Y 对比静态落地页，提升长尾 SEO 收录。
// 读取 static/chips.json，针对热门对比对生成 docs/compare/<a>-vs-<b>.mdx。
// 运行：node scripts/generate-comparisons.mjs
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const CHIPS_PATH = path.join(ROOT, 'static', 'chips.json');
const OUT_DIR = path.join(ROOT, 'docs', 'compare');

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

// 从字符串提取首个数字（支持千分位逗号、小数、负号）
const num = (s) => {
  if (s == null) return null;
  const m = String(s).replace(/,/g, '').match(/-?\d+(\.\d+)?/);
  return m ? parseFloat(m[0]) : null;
};

const v = (val) => (val == null || String(val).trim() === '' ? '—' : String(val));

// TDP 展示：优先用 specs.tdp（带单位），否则用 tdpW 补 W
const tdpDisplay = (c) => g(c, 'specs', 'tdp') ?? (c.tdpW != null ? `${c.tdpW} W` : '—');

// FP8 展示：缺失时给出可读文案而非裸「—」
const fp8Display = (c) => g(c, 'specs', 'compute', 'fp8') ?? '暂无公开 FP8 算力数据';

const SPEC_ROWS = [
  ['厂商', (c) => g(c, 'vendor')],
  ['架构', (c) => g(c, 'specs', 'architecture')],
  ['制程', (c) => g(c, 'specs', 'process')],
  ['发布时间', (c) => g(c, 'specs', 'release')],
  ['FP8 算力', (c) => g(c, 'specs', 'compute', 'fp8')],
  ['FP16 算力', (c) => g(c, 'specs', 'compute', 'fp16')],
  ['FP32 算力', (c) => g(c, 'specs', 'compute', 'fp32')],
  ['INT8 算力', (c) => g(c, 'specs', 'compute', 'int8')],
  ['显存类型', (c) => g(c, 'specs', 'memory', 'type')],
  ['显存容量', (c) => g(c, 'specs', 'memory', 'capacity')],
  ['显存带宽', (c) => g(c, 'specs', 'memory', 'bandwidth')],
  ['TDP 功耗', (c) => g(c, 'specs', 'tdp')],
];

function buildTable(a, b) {
  const header = `| 规格 | ${a.title} | ${b.title} |`;
  const sep = `| --- | --- | --- |`;
  const rows = SPEC_ROWS.map(([label, fn]) => `| ${label} | ${v(fn(a))} | ${v(fn(b))} |`);
  return [header, sep, ...rows].join('\n');
}

function buildDiffs(a, b) {
  const out = [];
  const fa = num(g(a, 'specs', 'compute', 'fp8'));
  const fb = num(g(b, 'specs', 'compute', 'fp8'));
  if (fa != null && fb != null && fa !== fb) {
    const hi = fa > fb ? a : b;
    const lo = fa > fb ? b : a;
    const hiN = fa > fb ? fa : fb;
    const loN = fa > fb ? fb : fa;
    out.push(
      `- **FP8 算力**：${hi.title} 以约 ${hiN.toLocaleString()} TFLOPS 领先 ${lo.title} 的 ${loN.toLocaleString()} TFLOPS，在大规模 Transformer 训练/推理中优势明显。`
    );
  }
  const ta = a.tdpW ?? num(g(a, 'specs', 'tdp'));
  const tb = b.tdpW ?? num(g(b, 'specs', 'tdp'));
  if (ta != null && tb != null && ta !== tb) {
    const lo = ta < tb ? a : b;
    const hi = ta < tb ? b : a;
    out.push(
      `- **功耗**：${lo.title} 的 TDP 为 ${tdpDisplay(lo)}，低于 ${hi.title} 的 ${tdpDisplay(hi)}，对数据中心 PUE 与散热更友好。`
    );
  }
  const ca = num(g(a, 'specs', 'memory', 'capacity'));
  const cb = num(g(b, 'specs', 'memory', 'capacity'));
  if (ca != null && cb != null && ca !== cb) {
    const hi = ca > cb ? a : b;
    const lo = ca > cb ? b : a;
    out.push(
      `- **显存容量**：${hi.title} 配备 ${g(hi, 'specs', 'memory', 'capacity')}，多于 ${lo.title} 的 ${g(lo, 'specs', 'memory', 'capacity')}，对超大模型单卡承载更从容。`
    );
  }
  if (out.length === 0) {
    out.push(`- 两款芯片定位接近，建议结合具体工作负载、软件栈成熟度与供应链可得性综合评估。`);
  }
  return out.join('\n');
}

function buildAdvice(a, b) {
  const adv = [];
  const isNv = (c) => c.vendor === 'nvidia';
  const isDomestic = (c) => ['huawei', 'cambricon', 'others'].includes(c.vendor) && /(昇腾|寒武纪|摩尔|沐曦|天数|昆仑|璧仞|燧原)/.test(c.title + c.vendor);
  if ((isNv(a) && isDomestic(b)) || (isNv(b) && isDomestic(a))) {
    const nv = isNv(a) ? a : b;
    const dom = isNv(a) ? b : a;
    adv.push(
      `若项目对 **CUDA 生态、NCCL 通信与现有代码零改造迁移** 要求高，${nv.title} 是风险最低的选择；若关注 **自主可控、供应确定性或特定国产化合规**，则 ${dom.title} 更具战略价值。`
    );
  }
  adv.push(
    `追求极致单卡算力与成熟工具链时优先考虑 ${a.title}；若预算、功耗墙或本地化支持是硬约束，${b.title} 往往更贴合。建议用本站的 [AI 算力卡对比工具](/compare) 把多款芯片并排验证后再决策。`
  );
  return adv.map((s) => `- ${s}`).join('\n');
}

function buildFaq(a, b) {
  const qa = [
    [
      `${a.title} 和 ${b.title} 的主要区别是什么？`,
      `核心差异在架构与算力密度：${a.title} 采用 ${v(g(a, 'specs', 'architecture'))} 架构，FP8 算力约 ${fp8Display(a)}，显存 ${v(g(a, 'specs', 'memory', 'capacity'))}；${b.title} 采用 ${v(g(b, 'specs', 'architecture'))} 架构，FP8 算力约 ${fp8Display(b)}，显存 ${v(g(b, 'specs', 'memory', 'capacity'))}。完整参数见上方对比表。`,
    ],
    [
      `${a.title} 的功耗（TDP）是多少？`,
      `${a.title} 的 TDP 为 ${tdpDisplay(a)}，实际整机功耗还需计入服务器主板、风扇与 PUE。`,
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
  return qa
    .map(([q, ans]) => `### ${q}\n\n${ans}`)
    .join('\n\n');
}

function genMdx(a, b) {
  const title = `${a.title} vs ${b.title}`;
  const slugPair = `${a.id}-vs-${b.id}`;
  const kw = [
    a.title,
    b.title,
    `${a.title} vs ${b.title}`,
    'AI 芯片对比',
    '算力卡对比',
    'GPU 对比',
  ];
  const description = `${a.title} 与 ${b.title} 规格对比：架构、FP8/FP16/FP32 算力、显存容量与带宽、TDP 功耗、发布时间一览，附关键差异、选型建议与常见问题。`;

  const intro = `在 AI 基础设施选型中，**${a.title}** 与 **${b.title}** 是经常被放在一起比较的两款加速器。本文从架构、算力、显存、功耗到发布节奏做逐项对照，帮助你快速判断哪一款更契合训练或推理工作负载。`;

  return `---
title: ${title}
description: ${description}
keywords: [${kw.join(', ')}]
sidebar_label: ${a.title} vs ${b.title}
---

import Link from '@docusaurus/Link';

# ${a.title} vs ${b.title}：规格对比与选型指南

${intro}

## 规格对比表

${buildTable(a, b)}

## 关键差异

${buildDiffs(a, b)}

## 选型建议

${buildAdvice(a, b)}

## 常见问题（FAQ）

${buildFaq(a, b)}

## 相关页面

- [${a.title}](${a.slug})
- [${b.title}](${b.slug})
- [AI 算力卡对比工具](/compare) — 在线并排对比 2–4 款芯片
`;
}

// ---- 主流程 ----
fs.mkdirSync(OUT_DIR, { recursive: true });
let ok = 0;
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
  fs.writeFileSync(file, genMdx(a, b), 'utf8');
  ok++;
  written.push(`${a.id}-vs-${b.id}.mdx`);
}

console.log(`[done] 生成 ${ok} 个对比页，跳过 ${skip} 个。`);
console.log(written.join('\n'));
