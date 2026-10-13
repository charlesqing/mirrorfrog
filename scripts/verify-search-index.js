/**
 * 搜索索引瘦身的功能回归测试（配合 scripts/shrink-search-index.js 使用）。
 *
 * 背景：postbuild 会裁剪正文并移除 lunr position 元数据，以绕开
 * Cloudflare Pages 的 25 MiB 单文件限制。本测试确保「瘦身后还能搜到」。
 *
 * 关键：lunr.Index.load() 不会序列化分词器，所以中文查询不能直接用
 * idx.search()——必须像插件客户端那样先分词再 query.term()
 * （见 plugin dist/client/client/theme/worker.js）。
 *
 * 运行：node scripts/search-index.test.js（退出码即结果，可接入 CI）
 */
const fs = require('fs');
const path = require('path');
const lunr = require('lunr');

require('lunr-languages/lunr.stemmer.support')(lunr);
lunr.wordcut = require('lunr-languages/wordcut');
const tk = require('@easyops-cn/docusaurus-search-local/dist/server/server/utils/tokenizer');
tk.loadUserDict(undefined, undefined);

const BUILD = path.join(__dirname, '..', 'build');
const collect = (dir, acc = []) => {
  if (!fs.existsSync(dir)) return acc;
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) collect(p, acc);
    else if (/^search-index.*\.json$/.test(e.name)) acc.push(p);
  }
  return acc;
};
const INDEXES = collect(BUILD);
const LIMIT = 25 * 1024 * 1024;

let failed = 0;
const check = (name, ok, detail = '') => {
  console.log(`${ok ? '✓' : '✗'} ${name}${detail ? ` — ${detail}` : ''}`);
  if (!ok) failed += 1;
};

if (INDEXES.length === 0) {
  console.error('✗ 未找到任何 build/**/search-index*.json，请先 npm run build');
  process.exit(1);
}

// 每个 locale 独立校验（i18n 站 zh/en 各有一份，2026-10-13 曾漏检 en 那份）
for (const INDEX of INDEXES) {
  const rel = path.relative(BUILD, INDEX);
  console.log(`\n── ${rel} ──`);
  const size = fs.statSync(INDEX).size;
  const shards = JSON.parse(fs.readFileSync(INDEX, 'utf8'));

  // 1. 体积必须低于 Pages 硬限制
  check('索引体积低于 25 MiB', size < LIMIT, `${(size / 1048576).toFixed(2)} MiB`);

  // 2. 每个分片都能被 lunr 正常加载
  const loaded = shards.map((s) => {
    try {
      return lunr.Index.load(s.index);
    } catch (e) {
      console.error('  分片加载失败:', e.message);
      return null;
    }
  });
  check('全部分片可被 lunr.Index.load 加载', loaded.every(Boolean), `${loaded.length} 个分片`);

  // 3. 每个分片索引都建立了倒排词条（空索引意味着重建失败）
  const termsOk = shards.every((s) => Object.keys(s.index?.invertedIndex || {}).length > 0);
  check('各分片倒排索引非空', termsOk);

  // 4. 查询回归：英文/型号走 idx.search，中文先分词再 query.term
  const search = (raw) => {
    const hits = [];
    shards.forEach((s, si) => {
      const idx = loaded[si];
      if (!idx) return;
      let results = [];
      if (/^[\x00-\x7F]+$/.test(raw)) {
        results = idx.search(raw);
      } else {
        const tokens = tk.tokenizer(raw).map((t) => String(t));
        results = idx.query((q) => {
          for (const t of tokens) q.term(t, { wildcard: lunr.Query.wildcard.NONE });
        });
      }
      for (const r of results) {
        const doc = s.documents.find((d) => String(d.i) === r.ref);
        if (doc) hits.push({ url: doc.u, title: doc.s || doc.t || '', score: r.score });
      }
    });
    return hits;
  };

  const queries = ['H200', '昇腾 950', 'MI450', 'Blackwell', '液冷', '算力', 'FP4', 'token'];
  for (const q of queries) {
    const hits = search(q);
    check(`查询「${q}」有命中`, hits.length > 0, `${hits.length} 条，首条 ${hits[0] ? hits[0].url : '-'}`);
  }
}

// 5. 兜底：整个产物目录不得有任何文件超过 Pages 限制
const oversized = [];
const walk = (dir) => {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p);
    else if (fs.statSync(p).size >= LIMIT) oversized.push(`${path.relative(BUILD, p)} ${(fs.statSync(p).size / 1048576).toFixed(2)} MiB`);
  }
};
walk(BUILD);
check('产物目录中无超过 25 MiB 的文件', oversized.length === 0, oversized.join('; ') || '无超限文件');

console.log(failed === 0 ? '\n全部通过' : `\n${failed} 项失败`);
process.exit(failed === 0 ? 0 : 1);
