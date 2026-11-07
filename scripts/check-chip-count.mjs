import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const chips = JSON.parse(fs.readFileSync(path.join(root, 'static/chips.json'), 'utf8'));
const expected = chips.length;

// 只扫描「面向用户的站点规模声明」文件；历史快照文档（seo.md / research outline）不在范围内
const FILES = [
  'docusaurus.config.ts',
  'static/llms.txt',
  'docs/intro.mdx',
  'docs/open-dataset.mdx',
  'docs/comparison.mdx',
  'docs/compute-card-guide.mdx',
  'docs/tco-calculator.mdx',
  'src/components/I18nTitle.tsx',
  'src/data/home-content.zh.ts',
  'src/data/home-content.en.ts',
  'i18n/en/docusaurus-plugin-content-docs/current/open-dataset.mdx',
  'i18n/en/docusaurus-plugin-content-docs/current/tco-calculator.mdx',
  'i18n/en/docusaurus-plugin-content-docs/current/compute-card-guide.mdx',
];

// 负向后顾排除 "1,000 cards" / "4,096 chips" 这类复合数值被截成 "000" / "096" 的假阳性
const RE = /(?<![\d,.])(\d{3})\s*\+?\s*(?:款|chips\b|cards\b)/g;
let bad = 0;
console.log(`chips.json = ${expected} 款；扫描 ${FILES.length} 个规模声明文件`);
for (const f of FILES) {
  const p = path.join(root, f);
  if (!fs.existsSync(p)) { console.log(`  MISSING ${f}`); bad++; continue; }
  const text = fs.readFileSync(p, 'utf8');
  const nums = [...text.matchAll(RE)].map((m) => Number(m[1]));
  const wrong = nums.filter((n) => n !== expected);
  if (wrong.length) {
    console.log(`  FAIL ${f}: 声明值 [${nums.join(', ')}]，与 ${expected} 不符 -> [${wrong.join(', ')}]`);
    bad++;
  } else {
    console.log(`  OK   ${f}: ${nums.length ? nums.join(', ') : '无数字声明'}`);
  }
}
if (bad) {
  console.error(`\n数量声明漂移：${bad} 个文件与 chips.json (${expected}) 不一致`);
  process.exit(1);
}
console.log('\n全部规模声明与 chips.json 一致');
