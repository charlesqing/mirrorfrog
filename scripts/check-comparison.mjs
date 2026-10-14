#!/usr/bin/env node
/**
 * check-comparison.mjs — /docs/comparison 页面与数据源漂移校验
 *
 * 唯一口径来源：static/chips.json（规格）、static/pricing.json（价格）
 * 校验对象：docs/comparison.mdx（zh）+ i18n/en/.../comparison.mdx（en）
 *
 * 检查项：
 *  1. 卡片链接存在性：/docs/cards/<vendor>/<id> 必须命中 chips.json id     [ERROR]
 *  2. 显存带宽：页面值 vs chips.specs.memory.bandwidth                    [ERROR]
 *  3. TDP：页面值 vs chips.tdpW（范围值取区间判定，容差 5%）              [WARN]
 *  4. 价格：页面金额 vs pricing.json official_msrp / market_price        [ERROR]
 *     同时检测货币口径（pricing 为 CNY 而页面写 $ → WARN）
 *  5. 数量声明：文中「N 款」须能对上 表格行数 / chips.json 总数            [ERROR]
 *
 * 用法：node scripts/check-comparison.mjs
 * 退出码：0 = 通过；1 = 存在 ERROR
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const chips = JSON.parse(fs.readFileSync(path.join(ROOT, 'static/chips.json'), 'utf8'));
const pricing = JSON.parse(fs.readFileSync(path.join(ROOT, 'static/pricing.json'), 'utf8'));
const chipById = new Map(chips.map((c) => [c.id, c]));

// pricing 扁平索引：id -> { group, ...entry }
const priceById = new Map();
for (const [group, entries] of Object.entries(pricing)) {
  for (const [id, entry] of Object.entries(entries)) priceById.set(id, { group, ...entry });
}

// 无链接、按显示名对账的价格行（页面字面名 -> pricing id）
const PRICE_ROW_BY_NAME = {
  H800: 'h800',
};

// 同一产品存在重复卡片时的价格别名（bi-v150 与 iluvatar-tg150 均为 天垓150，价格登记在 tg150 名下）
const PRICE_ALIAS = {
  'bi-v150': 'iluvatar-tg150',
};

const FILES = [
  'docs/comparison.mdx',
  path.join('i18n/en/docusaurus-plugin-content-docs/current', 'comparison.mdx'),
];

const norm = (s) => String(s).replace(/\s+/g, '').toLowerCase();
const num = (s) => Number(String(s).replace(/[,，]/g, ''));

function parseRows(text) {
  const rows = [];
  for (const [i, line] of text.split(/\r?\n/).entries()) {
    if (!/^\s*\|/.test(line)) continue;
    if (/^\s*\|[\s:|-]+\|\s*$/.test(line)) continue; // 表头分隔行
    const cells = line.trim().replace(/^\|/, '').replace(/\|$/, '').split('|').map((s) => s.trim());
    rows.push({ no: i + 1, line, cells });
  }
  return rows;
}

// "1,800-2,300W" -> [1800, 2300]；"~500W" -> [500,500]
function parseWatts(cell) {
  const m = String(cell).match(/(\d[\d,，]*(?:\.\d+)?)\s*(?:-|–|~)\s*(\d[\d,，]*(?:\.\d+)?)\s*W/i)
    || String(cell).match(/(\d[\d,，]*(?:\.\d+)?)\s*W/i);
  if (!m) return null;
  const a = num(m[1]);
  return m[2] !== undefined ? [a, num(m[2])] : [a, a];
}

function parseBandwidth(cell) {
  const m = String(cell).match(/(\d+(?:\.\d+)?)\s*(T[bB])\/s/);
  return m ? { value: m[1], unit: m[2] } : null;
}

function checkFile(rel, report) {
  const full = path.join(ROOT, rel);
  if (!fs.existsSync(full)) {
    report.errors.push(`${rel}: 文件不存在`);
    return;
  }
  const text = fs.readFileSync(full, 'utf8');
  const rows = parseRows(text);
  let section = '';
  let specRowCount = 0;
  const seenChipIds = new Set();

  for (const row of rows) {
    if (/^#\s/.test(row.line)) continue;
    if (row.cells.length === 1) {
      const h = row.cells[0].match(/^#+\s*(.*)$/);
      if (h) section = h[1];
      continue;
    }

    const isPriceSection = /(价格参考|Price Reference)/.test(section);
    const linkMatches = [...row.line.matchAll(/\[([^\]]*)\]\(\/docs\/cards\/([^)/]+)\/([^)/#?]+)/g)];
    const linkedIds = linkMatches.map((m) => m[3]);

    // 1) 链接存在性
    for (const m of linkMatches) {
      const id = m[3];
      if (!chipById.has(id)) {
        report.errors.push(`${rel}:${row.no} [${section}] 链接指向不存在的卡片: /docs/cards/${m[2]}/${id}`);
      }
    }
    if (linkedIds.length && !isPriceSection) {
      specRowCount++;
      linkedIds.forEach((id) => seenChipIds.add(id));
    }

    const primaryId = linkedIds[0] || PRICE_ROW_BY_NAME[row.cells[0]?.replace(/\[\]|\([^)]*\)/g, '').trim()];
    const chip = primaryId ? chipById.get(primaryId) : null;
    if (!chip) continue;

    if (isPriceSection) {
      // 4) 价格对账
      const entry = priceById.get(PRICE_ALIAS[chip.id] || chip.id);
      if (!entry) {
        report.warnings.push(`${rel}:${row.no} [${section}] ${chip.id} 无 pricing.json 条目`);
        continue;
      }
      const money = [];
      for (const cell of row.cells.slice(1)) {
        for (const m of cell.matchAll(/([$¥])\s*([\d,，]+)/g)) money.push({ cur: m[1], val: num(m[2]) });
      }
      const expected = [entry.official_msrp, entry.market_price].filter((v) => v != null);
      for (const m of money) {
        if (!expected.includes(m.val)) {
          report.errors.push(`${rel}:${row.no} [${section}] ${chip.id} 金额漂移: 页面 ${m.cur}${m.val} vs pricing.json ${entry.currency} official=${entry.official_msrp} / market=${entry.market_price}`);
        }
        if (entry.currency === 'CNY' && m.cur === '$') {
          report.errors.push(`${rel}:${row.no} [${section}] ${chip.id} 货币口径错误: pricing.json 为 CNY，页面写在 USD 列`);
        }
      }
    } else {
      // 2) 带宽对账
      const bwCell = row.cells.map((c) => c.match(/(\d+(?:\.\d+)?)\s*(T[bB])\/s/)).find(Boolean);
      const pageBw = bwCell ? parseBandwidth(bwCell[0]) : null;
      const cardBwRaw = chip.specs?.memory?.bandwidth;
      const cardBw = cardBwRaw ? parseBandwidth(cardBwRaw) : null;
      if (pageBw && cardBw && (pageBw.value !== cardBw.value || pageBw.unit !== cardBw.unit)) {
        report.errors.push(`${rel}:${row.no} [${section}] ${chip.id} 带宽漂移: 页面 ${pageBw.value} ${pageBw.unit}/s vs chips.json "${cardBwRaw}"`);
      }
      // 3) TDP 对账
      const tdpCell = row.cells.find((c) => /\d\s*W\b/i.test(c) && !/T[bB]\/s/.test(c));
      const pageW = tdpCell ? parseWatts(tdpCell) : null;
      if (pageW && chip.tdpW != null) {
        const [lo, hi] = pageW;
        if (chip.tdpW < lo * 0.95 || chip.tdpW > hi * 1.05) {
          report.warnings.push(`${rel}:${row.no} [${section}] ${chip.id} TDP 可能漂移: 页面 "${tdpCell?.match(/[\d.,~–-]+W/i)?.[0] || tdpCell}" vs chips.json tdpW=${chip.tdpW}`);
        }
      }
    }
  }

  // 5) 数量声明
  const claimMatches = [...text.matchAll(/(\d+)\s*\+?\s*款/g)].map((m) => Number(m[1]));
  for (const claim of claimMatches) {
    if (claim > 20 && claim !== chips.length && claim !== specRowCount && claim !== seenChipIds.size) {
      report.errors.push(`${rel}: 数量声明 "${claim} 款" 与实际不符（规格表 ${specRowCount} 行 / 涉及 ${seenChipIds.size} 款 / 全库 ${chips.length} 款）`);
    }
  }
  report.stats.push(`${rel}: 规格表 ${specRowCount} 行 · 涉及 ${seenChipIds.size} 款卡 · 全库 ${chips.length} 款`);
}

const report = { errors: [], warnings: [], stats: [] };
for (const f of FILES) checkFile(f, report);

console.log('== 统计 ==');
report.stats.forEach((s) => console.log('  ' + s));
if (report.errors.length) {
  console.log(`\n== 错误 (${report.errors.length}) ==`);
  report.errors.forEach((e) => console.log('  ✗ ' + e));
}
if (report.warnings.length) {
  console.log(`\n== 警告 (${report.warnings.length}) ==`);
  report.warnings.forEach((w) => console.log('  ⚠ ' + w));
}
if (!report.errors.length && !report.warnings.length) console.log('\n全部通过 ✓');
process.exit(report.errors.length ? 1 : 0);
