#!/usr/bin/env node
/**
 * 站内链接自检：扫描 docs / blog / i18n / src-pages 中的绝对链接，报告指向不存在路由的目标。
 *
 * 为什么需要它：`sidebars.ts` 是手动枚举，卡片由人手写，`/docs/compare`（不存在的目录索引）
 * 这类目标**不会让构建失败**，只在 Docusaurus 日志里以 Broken link 形式出现，容易被 tail 掉。
 * 2026-09-14 即因 6 张卡误写 `/docs/compare` 产生 12 条告警（zh 6 + en 6）。
 *
 * 用法：node scripts/check-links.mjs        # 有失效链接时 exit 1
 *
 * 注意：本脚本按「默认语言的路由形状」做静态推导，比只 build 一个语言更早发现问题；
 * 已知不覆盖：锚点有效性、相对路径（`./x.md`）目标、外部链接可达性。
 */
import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const SKIP_DIRS = new Set(['node_modules', 'build', '.git', '.docusaurus']);

/** 递归收集文件（返回 POSIX 风格相对路径） */
function walk(dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (SKIP_DIRS.has(e.name)) continue;
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, out);
    else out.push(path.relative(ROOT, p).replace(/\\/g, '/'));
  }
  return out;
}

const files = walk(ROOT);

/** 读取 frontmatter 中的 slug（可能是 /abs 或 相对片段） */
function slugOf(file) {
  const m = fs.readFileSync(file, 'utf8').match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!m) return null;
  const sm = m[1].match(/^slug:\s*["']?([^"'\r\n]+)["']?\s*$/m);
  return sm ? sm[1].trim() : null;
}

// ---------- 1. 路由集合 ----------
const routes = new Set();
const addRoute = (r) => {
  if (!r) return;
  const n = r.replace(/\/+$/, '') || '/';
  routes.add(n);
  routes.add(n + '/');
};

for (const f of files) {
  // 文档
  if (/^docs\/.*\.(md|mdx)$/.test(f)) {
    const slug = slugOf(f);
    if (slug) addRoute(slug.startsWith('/') ? slug : '/docs/' + slug);
    else addRoute('/docs/' + f.replace(/^docs\//, '').replace(/\.(md|mdx)$/, '').replace(/\/index$/, ''));
    continue;
  }
  // 独立页面
  if (/^src\/pages\/.*\.(tsx|ts|jsx|js|md|mdx)$/.test(f)) {
    addRoute('/' + f.replace(/^src\/pages\//, '').replace(/\.(tsx|ts|jsx|js|md|mdx)$/, '').replace(/\/index$/, '').replace(/^index$/, ''));
    continue;
  }
  // 博客文章
  if (/^blog\/.*\.(md|mdx)$/.test(f)) {
    const rel = f.replace(/^blog\//, '').replace(/\.(md|mdx)$/, '');
    if (rel === 'index') continue;
    const slug = slugOf(f);
    addRoute(slug ? (slug.startsWith('/') ? slug : '/blog/' + slug) : '/blog/' + rel);
    continue;
  }
  // 静态资源（static/** 原样映射到站点根）
  if (/^static\//.test(f)) addRoute('/' + f.replace(/^static\//, ''));
}

addRoute('/');
addRoute('/blog');
for (const feed of ['rss.xml', 'atom.xml', 'feed.xml']) addRoute('/blog/' + feed);

// 博客标签归档页（blog/tags.yml 中已定义的 tag）
if (fs.existsSync('blog/tags.yml')) {
  const yml = fs.readFileSync('blog/tags.yml', 'utf8');
  for (const m of yml.matchAll(/^([A-Za-z0-9_-]+):\s*$/gm)) {
    addRoute('/blog/tags/' + m[1]);
    const pm = yml.slice(m.index).match(/^\s*permalink:\s*(\S+)\s*$/m);
    if (pm) addRoute(pm[1]);
  }
  addRoute('/blog/tags');
}

// ---------- 2. 扫描链接 ----------
const LOCALE_PREFIXES = ['/en', '/zh-Hans', '/zh-Hant'];
const isExternal = (t) =>
  !t ||
  t.startsWith('#') ||
  t.startsWith('//') ||
  /^[a-z][a-z0-9+.-]*:/i.test(t); // http: https: mailto: tel: data: 等

/** 归一化为站点内绝对路径；相对路径返回 null（本脚本不解析） */
function normalize(target) {
  let s = target.split('#')[0].split('?')[0];
  for (const p of LOCALE_PREFIXES) {
    if (s === p || s.startsWith(p + '/')) {
      s = s.slice(p.length) || '/';
      break;
    }
  }
  if (!s.startsWith('/')) return null;
  return s.replace(/\/+$/, '') || '/';
}

const problems = [];
for (const f of files) {
  if (!/\.(md|mdx)$/.test(f)) continue;
  if (!/^(docs|blog|i18n|src\/pages)\//.test(f)) continue;

  fs.readFileSync(f, 'utf8')
    .split(/\r?\n/)
    .forEach((line, i) => {
      const targets = [
        ...[...line.matchAll(/\]\(([^)\s]+)\)/g)].map((m) => m[1]),
        ...[...line.matchAll(/href=["']([^"']+)["']/g)].map((m) => m[1]),
        ...[...line.matchAll(/to=["']([^"']+)["']/g)].map((m) => m[1]),
      ];
      for (const t of targets) {
        if (isExternal(t)) continue;
        const n = normalize(t);
        if (n === null) continue;
        if (routes.has(n) || routes.has(n + '/')) continue;
        problems.push({ file: f, line: i + 1, target: t, normalized: n });
      }
    });
}

// ---------- 3. 报告 ----------
console.log(`[check-links] 路由 ${[...routes].filter((r) => !r.endsWith('/')).length} 条，扫描文件 ${files.length} 个`);

if (problems.length === 0) {
  console.log('[check-links] ✓ 未发现失效的站内绝对链接');
  process.exit(0);
}

console.log(`[check-links] ✗ 发现 ${problems.length} 处失效链接：`);
const grouped = new Map();
for (const p of problems) {
  if (!grouped.has(p.normalized)) grouped.set(p.normalized, []);
  grouped.get(p.normalized).push(p);
}
for (const [target, arr] of [...grouped.entries()].sort((a, b) => b[1].length - a[1].length)) {
  console.log(`\n  目标 ${target}（${arr.length} 处）`);
  for (const p of arr) console.log(`    ${p.file}:${p.line}  ->  ${p.target}`);
}
process.exit(1);
