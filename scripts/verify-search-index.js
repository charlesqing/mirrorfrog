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

const INDEX = path.join(__dirname, '..', 'build', 'search-index.json');
const LIMIT = 25 * 1024 * 1024;

let failed = 0;
const check = (name, ok, detail = '') => {
  console.log(`${ok ? '✓' : '✗'} ${name}${detail ? ` — ${detail}` : ''}`);
  if (!ok) failed += 1;
};

if (!fs.existsSync(INDEX)) {
  console.error('✗ 未找到 build/search-index.json，请先 npm run build');
  process.exit(1);
}

const size = fs.statSync(INDEX).size;
const shards = JSON.parse(fs.readFileSync(INDEX, 'utf8'));

// 1. 体积必须低于 Pages 硬限制（留 20% 余量触发阈值）
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
function search(raw) {
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
}

const queries = ['H200', '昇腾 950', 'MI450', 'Blackwell', '液冷', '算力', '天数智芯', 'FP4', 'token'];
for (const q of queries) {
  const hits = search(q);
  check(`查询「${q}」有命中`, hits.length > 0, `${hits.length} 条，首条 ${hits[0] ? hits[0].url : '-'}`);
}

// 5. 抽样验证：命中 URL 必须是站内真实路径
const sample = search('昇腾 950').filter((h) => h.url && h.url.startsWith('/'));
check('中文命中 URL 为站内路径', sample.length > 0, sample[0] ? sample[0].url : '无');

console.log(failed === 0 ? '\n全部通过' : `\n${failed} 项失败`);
process.exit(failed === 0 ? 0 : 1);
