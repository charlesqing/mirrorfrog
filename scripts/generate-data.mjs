// 构建时数据生成器
//
// 扫描 docs/cards 下所有 .md/.mdx 的 frontmatter + 核心规格表 → static/chips.json
// 扫描 blog/ 下所有 .md/.mdx 的 frontmatter → 取最近 5 篇 → static/news.json
//
// 用法：node scripts/generate-data.mjs
// 自动由 npm prebuild / prestart 钩子触发
import { readFileSync, writeFileSync, readdirSync, statSync, mkdirSync, existsSync } from 'fs';
import { join, dirname, basename, extname, relative } from 'path';
import { fileURLToPath } from 'url';
import matter from 'gray-matter';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ROOT = join(__dirname, '..');
const DOCS_CARDS = join(ROOT, 'docs', 'cards');
const BLOG = join(ROOT, 'blog');
const STATIC = join(ROOT, 'static');

// ---- key 标准化映射 ----
const KEY_MAP = {
  '架构': 'architecture', 'architecture': 'architecture', 'arch': 'architecture',
  '制程': 'process', 'process': 'process', '工艺': 'process', 'foundry': 'process',
  '显存': 'memory.capacity', '内存': 'memory.capacity', '容量': 'memory.capacity',
  'memory': 'memory.capacity', 'memory size': 'memory.capacity',
  '显存类型': 'memory.type', '内存类型': 'memory.type', '类型': 'memory.type', 'memory type': 'memory.type',
  '显存带宽': 'memory.bandwidth', '内存带宽': 'memory.bandwidth', '带宽': 'memory.bandwidth',
  'memory bandwidth': 'memory.bandwidth', 'bandwidth': 'memory.bandwidth',
  '统一内存': 'memory.capacity', 'unified memory': 'memory.capacity',
  '内存容量': 'memory.capacity', 'memory capacity': 'memory.capacity',
  'fp8': 'compute.fp8', 'fp8 算力': 'compute.fp8', 'fp8 tensor': 'compute.fp8', 'fp8 tensor core': 'compute.fp8',
  'fp16': 'compute.fp16', 'fp16 算力': 'compute.fp16', 'fp16 tensor': 'compute.fp16', 'fp16 tensor core': 'compute.fp16',
  'fp16/bf16': 'compute.fp16', 'fp16/bf16 tensor': 'compute.fp16',
  'fp32': 'compute.fp32', 'fp32 算力': 'compute.fp32',
  'fp64': 'compute.fp64',
  'int8': 'compute.int8', 'int8 算力': 'compute.int8', 'int8 tensor': 'compute.int8',
  'tdp': 'tdp', '功耗': 'tdp', 'power': 'tdp', 'power consumption': 'tdp',
  '发布': 'release', '发布时间': 'release', '首发': 'release', '首发日期': 'release',
  'release': 'release', 'release date': 'release', 'launch': 'release', 'launch date': 'release',
};

function normalizeKey(rawKey) {
  if (!rawKey) return null;
  const clean = String(rawKey).replace(/[*_`]/g, '').trim();
  const lower = clean.toLowerCase();
  return KEY_MAP[clean] || KEY_MAP[lower] || null;
}

function setNested(obj, path, value) {
  if (value == null || value === '') return;
  const parts = path.split('.');
  let cur = obj;
  for (let i = 0; i < parts.length - 1; i++) {
    cur[parts[i]] = cur[parts[i]] || {};
    cur = cur[parts[i]];
  }
  cur[parts[parts.length - 1]] = value;
}

function walk(dir, exts) {
  const results = [];
  if (!existsSync(dir)) return results;
  for (const f of readdirSync(dir)) {
    const full = join(dir, f);
    if (statSync(full).isDirectory()) {
      results.push(...walk(full, exts));
    } else if (exts.includes(extname(f).toLowerCase())) {
      results.push(full);
    }
  }
  return results;
}

function parseSpecsTable(markdown) {
  const result = {};
  const m = markdown.match(/^##\s+核心规格[^\n]*\n([\s\S]*?)(?=^##\s+|\Z)/m);
  if (!m) return result;
  const block = m[1];
  const lines = block.split('\n');
  let inTable = false;
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed.startsWith('|')) {
      inTable = false;
      continue;
    }
    inTable = true;
    if (/^\|[\s-:|]+\|$/.test(trimmed)) continue;
    const cells = trimmed.split('|').map(s => s.trim()).filter(Boolean);
    if (cells.length < 2) continue;
    const [rawKey, rawVal] = cells;
    const normKey = normalizeKey(rawKey);
    if (!normKey) continue;
    const value = rawVal.replace(/[*_`]/g, '').trim();
    if (!value) continue;
    setNested(result, normKey, value);
  }
  return result;
}

function parseChip(filePath) {
  const raw = readFileSync(filePath, 'utf8');
  const { data, content } = matter(raw);
  const rel = relative(join(ROOT, 'docs'), filePath).replace(/\\/g, '/');
  const parts = rel.split('/');
  const vendor = parts[1];
  const id = data.id || basename(filePath, extname(filePath));
  const specs = parseSpecsTable(content);
  return {
    id,
    title: data.title || id,
    vendor,
    slug: `/docs/cards/${vendor}/${id}`,
    description: data.description || '',
    keywords: Array.isArray(data.keywords) ? data.keywords : [],
    specs,
  };
}

function parseChips() {
  const files = walk(DOCS_CARDS, ['.md', '.mdx']);
  const chips = [];
  for (const f of files) {
    try {
      chips.push(parseChip(f));
    } catch (e) {
      console.warn(`[data] 跳过 ${relative(ROOT, f)}: ${e.message}`);
    }
  }
  chips.sort((a, b) => a.vendor.localeCompare(b.vendor) || a.id.localeCompare(b.id));
  return chips;
}

function parseNews() {
  const files = walk(BLOG, ['.md', '.mdx']);
  const posts = [];
  for (const f of files) {
    const name = basename(f);
    if (name.startsWith('_') || name === 'authors.yml' || name === 'tags.yml') continue;
    const dateMatch = name.match(/^(\d{4})-(\d{2})-(\d{2})-(.+?)\.mdx?$/);
    let dateFromName = null;
    if (dateMatch) {
      dateFromName = `${dateMatch[1]}-${dateMatch[2]}-${dateMatch[3]}`;
    }
    try {
      const raw = readFileSync(f, 'utf8');
      const { data } = matter(raw);
      const date = data.date
        ? new Date(data.date).toISOString().slice(0, 10)
        : dateFromName;
      if (!date) continue;
      const slug = data.slug || (dateMatch ? dateMatch[4] : basename(f, extname(f)));
      posts.push({
        title: data.title || slug,
        date,
        slug,
        url: `/blog/${slug}`,
        description: (data.description || '').slice(0, 120),
        tags: Array.isArray(data.tags) ? data.tags : [],
      });
    } catch (e) {
      console.warn(`[data] 跳过 blog ${name}: ${e.message}`);
    }
  }
  posts.sort((a, b) => b.date.localeCompare(a.date));
  return posts.slice(0, 5);
}

function main() {
  if (!existsSync(STATIC)) mkdirSync(STATIC, { recursive: true });

  const chips = parseChips();
  writeFileSync(join(STATIC, 'chips.json'), JSON.stringify(chips, null, 2) + '\n', 'utf8');
  console.log(`[data] chips.json: ${chips.length} 款芯片`);

  const news = parseNews();
  writeFileSync(join(STATIC, 'news.json'), JSON.stringify(news, null, 2) + '\n', 'utf8');
  console.log(`[data] news.json: ${news.length} 条最新动态`);
}

main();
