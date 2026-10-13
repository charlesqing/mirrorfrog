/**
 * 搜索索引瘦身：解决 Cloudflare Pages「单文件 ≤ 25 MiB」部署失败。
 *
 * 背景：@easyops-cn/docusaurus-search-local 把每段正文全文写进 search-index.json，
 * 站点内容增长后该文件从 30.3 MiB → 33 MiB，超过 Pages 硬限制导致 CI 部署失败
 * （构建本身通过，卡在 wrangler 的资产校验环节）。
 *
 * 方案：postbuild 阶段裁剪每段正文到 MAX_BODY 字符，并**移除 lunr 的 position 元数据**，
 * 再用与插件一致的 lunr 配置重建索引。
 *
 * 实测（2026-10-13，2073 篇文档 / 20638 段）：
 *   原始（position + 全文）        33.01 MiB  → 部署失败
 *   仅去 position                   ≈ 23 MiB   → 勉强在线上
 *   去 position + 正文裁 400 字     ≈ 14 MiB   → 留足余量，可再增长 70%
 *
 * 去掉 position 是主要收益（索引体积减半）：该元数据仅用于页面内搜索词高亮，
 * 本站未启用 highlightSearchTermsOnTargetPage（插件默认 false），故移除无副作用。
 *
 * 关键约束（改动时务必保持，否则搜索会失效）：
 *   - lunr 版本、language=['zh','en']、zh 分词器、multiLanguage 必须与插件一致
 *   - this.ref('i') / this.field('t') 必须一致
 *   - ref 必须转成字符串（插件原注释：The ref must be a string）
 *   - 不得加回 metadataWhitelist=['position']
 */
const fs = require('fs');
const path = require('path');

// Cloudflare Pages 单文件上限 25 MiB。
// TARGET 留出余量（22 MiB）：内容继续增长时靠下面的收敛循环继续裁，
// 不依赖「调参后重新提交」，否则每隔一段时间部署就会再次失败。
const MAX_BODY = Number(process.env.SEARCH_MAX_BODY || 400);
const BUILD_DIR = path.join(__dirname, '..', 'build');
const LIMIT_BYTES = 25 * 1024 * 1024;
const TARGET_BYTES = Number(process.env.SEARCH_TARGET_BYTES || LIMIT_BYTES * 0.88);

/**
 * 收集所有 locale 的索引文件。
 * 关键：i18n 站每个 locale 各有一份（build/search-index.json 与
 * build/en/search-index.json），**必须全部处理**——只处理根目录那份时，
 * 英文那份仍会超过 25 MiB 导致部署失败（2026-10-13 实锤）。
 */
function collectIndexFiles(dir, acc = []) {
  if (!fs.existsSync(dir)) return acc;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) collectIndexFiles(p, acc);
    else if (/^search-index.*\.json$/.test(entry.name)) acc.push(p);
  }
  return acc;
}

function initLunr(lunr, language) {
  require('lunr-languages/lunr.stemmer.support')(lunr);
  if (language.includes('zh')) {
    lunr.wordcut = require('lunr-languages/wordcut');
    const { tokenizer, loadUserDict } = require(
      '@easyops-cn/docusaurus-search-local/dist/server/server/utils/tokenizer'
    );
    loadUserDict(undefined, undefined);
    require('@easyops-cn/docusaurus-search-local/dist/server/shared/lunrLanguageZh').lunrLanguageZh(
      lunr,
      tokenizer
    );
  }
  require('lunr-languages/lunr.multi')(lunr);
  return lunr.multiLanguage(...language);
}

function buildOnce(shards, plugin, lunr, maxBody) {
  let trimmed = 0;

  const out = shards.map((shard) => {
    const documents = (shard.documents || []).map((doc) => {
      if (typeof doc.t === 'string' && doc.t.length > maxBody) {
        trimmed += 1;
        return { ...doc, t: doc.t.slice(0, maxBody) };
      }
      return doc;
    });

    const index = lunr(function () {
      this.use(plugin);
      this.tokenizer = lunr.zh.tokenizer;
      this.ref('i');
      this.field('t');
      // 刻意不设 metadataWhitelist=['position']：该元数据占索引约一半体积，
      // 仅用于页面内搜索词高亮，本站未启用 highlightSearchTermsOnTargetPage。
      documents.forEach((doc) => {
        this.add({ ...doc, i: doc.i.toString() });
      });
    });

    return { documents, index };
  });

  return { out, trimmed };
}

function shrinkOne(indexFile, lunr, plugin) {
  const before = fs.statSync(indexFile).size;
  if (before < TARGET_BYTES) {
    console.log(
      `[search-index] ${path.relative(BUILD_DIR, indexFile)}: ${(before / 1048576).toFixed(2)} MiB，低于目标，跳过`
    );
    return;
  }

  const shards = JSON.parse(fs.readFileSync(indexFile, 'utf8'));

  // 收敛循环：若裁到 MAX_BODY 仍超标（内容继续增长），逐级下调直到达标。
  // 每轮都从原始 shards 重建，避免对已裁剪数据二次截断导致索引与文档不一致。
  let maxBody = MAX_BODY;
  let result = buildOnce(shards, plugin, lunr, maxBody);
  let attempts = 0;
  const MIN_BODY = 60;

  while (JSON.stringify(result.out).length > TARGET_BYTES && maxBody > MIN_BODY) {
    maxBody = Math.max(MIN_BODY, Math.floor(maxBody / 2));
    result = buildOnce(shards, plugin, lunr, maxBody);
    attempts += 1;
    console.log(`[search-index] ${path.relative(BUILD_DIR, indexFile)}: 仍超标，正文上限下调至 ${maxBody} 字符后重试`);
    if (attempts > 6) break;
  }

  fs.writeFileSync(indexFile, JSON.stringify(result.out), 'utf8');
  const after = fs.statSync(indexFile).size;

  console.log(
    `[search-index] ${path.relative(BUILD_DIR, indexFile)}: ${(before / 1048576).toFixed(2)} MiB → ${(after / 1048576).toFixed(2)} MiB` +
      `（裁剪 ${result.trimmed} 段正文，上限 ${maxBody} 字符${attempts ? `，迭代 ${attempts} 次` : ''}）`
  );
  if (after >= LIMIT_BYTES) {
    console.error(`[search-index] 错误：${path.relative(BUILD_DIR, indexFile)} 仍超过 25 MiB，部署会失败`);
    process.exitCode = 1;
  }
}

function shrink() {
  const files = collectIndexFiles(BUILD_DIR);
  if (files.length === 0) {
    console.log('[search-index] 未找到任何 search-index*.json，跳过');
    return;
  }

  const oversize = files.filter((f) => fs.statSync(f).size >= TARGET_BYTES);
  if (oversize.length === 0) {
    const summary = files.map((f) => `${path.relative(BUILD_DIR, f)} ${(fs.statSync(f).size / 1048576).toFixed(2)} MiB`);
    console.log(`[search-index] ${summary.join(' / ')} — 均低于目标，跳过`);
    return;
  }

  const lunr = require('lunr');
  const plugin = initLunr(lunr, ['zh', 'en']);
  oversize.forEach((f) => shrinkOne(f, lunr, plugin));

  // 最终兜底：扫描整个产物目录，确保没有其他文件超限（部署失败的硬条件）
  const remaining = collectIndexFiles(BUILD_DIR).filter((f) => fs.statSync(f).size >= LIMIT_BYTES);
  if (remaining.length) {
    console.error('[search-index] 警告：以下索引仍超限 →', remaining.join(', '));
  }
}

try {
  shrink();
} catch (err) {
  // 绝不因本脚本异常而中断构建：那会导致「本可部署的版本」被卡住，
  // 反而比重建索引失败更糟。索引偏大时 wrangler 会给出明确报错。
  console.error('[search-index] 瘦身失败（不阻断构建）:', err && err.message);
  console.error('[search-index] 索引仍为原始大小，Cloudflare Pages 可能因超过 25 MiB 拒绝部署。');
}
