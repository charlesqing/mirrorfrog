/**
 * Post-build 脚本：
 * 1. 优化 sitemap.xml — 为每张卡页面补充 lastmod、按类型设置 priority
 * 2. 为每张卡页面（build/docs/**/*.html）注入 JSON-LD Product Schema
 *
 * 用法：node scripts/post-build.mjs <siteUrl>
 * 示例：node scripts/post-build.mjs https://mirrorfrog.com
 */
import { readFileSync, writeFileSync, readdirSync, statSync, readlinkSync } from 'fs';
import { join, relative, dirname, extname, basename } from 'path';
import { fileURLToPath } from 'url';
import matter from 'gray-matter';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ROOT = join(__dirname, '..');
const BUILD = join(ROOT, 'build');
const DOCS = join(ROOT, 'docs');
const siteUrl = process.argv[2] || 'https://mirrorfrog.com';

// ---- 工具 ----
function walkDir(dir) {
  const results = [];
  if (!statSync(dir).isDirectory()) return results;
  for (const f of readdirSync(dir)) {
    const full = join(dir, f);
    const s = statSync(full);
    if (s.isDirectory()) results.push(...walkDir(full));
    else if (extname(f) === '.html') results.push(full);
  }
  return results;
}

/** 从 .mdx 路径推断 URL */
function mdxPathToUrl(relMdx) {
  let p = relMdx.replace(/\\/g, '/').replace(/\.mdx$/, '');
  if (p.endsWith('/index')) p = p.slice(0, -6);
  return siteUrl + '/docs/' + p;
}

/** 读取所有 .mdx 的 front matter，建立 url → data 映射 */
function loadAllDocs() {
  const map = new Map(); // url → {title, description, keywords, mdxPath}
  function walk(dir) {
    if (!statSync(dir).isDirectory()) return;
    for (const f of readdirSync(dir)) {
      const full = join(dir, f);
      if (statSync(full).isDirectory()) { walk(full); continue; }
      if (!f.endsWith('.mdx')) continue;
      const raw = readFileSync(full, 'utf8');
      const { data } = matter(raw);
      if (!data.title) continue;
      const rel = relative(DOCS, full).replace(/\\/g, '/');
      const url = mdxPathToUrl(rel);
      map.set(url, {
        title: data.title,
        description: data.description || '',
        keywords: Array.isArray(data.keywords) ? data.keywords : [],
        mdxPath: rel,
      });
    }
  }
  walk(DOCS);
  return map;
}

// ---- 1. 注入 JSON-LD ----
function injectJsonLd() {
  const docsMap = loadAllDocs();
  const htmlFiles = walkDir(join(BUILD, 'docs'));
  let count = 0;

  for (const htmlFile of htmlFiles) {
    // 从 HTML 文件路径推导 URL
    const rel = relative(join(BUILD, 'docs'), htmlFile).replace(/\\/g, '/').replace(/\.html$/, '');
    const urlPath = rel === 'intro' ? '/' : ('/docs/' + rel);
    const url = siteUrl + (urlPath.startsWith('/') ? urlPath : '/' + urlPath);

    const meta = docsMap.get(url) || docsMap.get(url + '/');
    if (!meta) continue;

    const jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: meta.title,
      description: meta.description,
      keywords: meta.keywords.join(', '),
      url,
      brand: { '@type': 'Brand', name: meta.title.split(' ')[0] || '' },
    };

    const scriptTag = `<script type="application/ld+json">\n${JSON.stringify(jsonLd, null, 2)}\n</script>`;

    let html = readFileSync(htmlFile, 'utf8');
    // 注入到 </head> 前
    if (!html.includes('application/ld+json')) {
      html = html.replace('</head>', scriptTag + '\n</head>');
      writeFileSync(htmlFile, html, 'utf8');
      count++;
    }
  }
  console.log(`[JSON-LD] 已为 ${count} 个页面注入 Product Schema`);
}

// ---- 2. 优化 sitemap.xml ----
function optimizeSitemap() {
  const sitemapPath = join(BUILD, 'sitemap.xml');
  if (!statSync(sitemapPath).isFile()) {
    console.warn('[sitemap] sitemap.xml 未找到，跳过');
    return;
  }

  let xml = readFileSync(sitemapPath, 'utf8');
  const docsMap = loadAllDocs();

  // 按 URL 模式设置 priority & changefreq
  // Docusaurus 已生成基础 sitemap，这里做精细化调整
  // 直接重写整个 sitemap 更可靠
  const urls = [];
  const urlRegex = /<url>([\s\S]*?)<\/url>/g;
  let m;
  while ((m = urlRegex.exec(xml)) !== null) {
    const block = m[1];
    const loc = (block.match(/<loc>(.*?)<\/loc>/) || [])[1];
    if (!loc) continue;
    let priority = 0.7;
    let changefreq = 'weekly';
    let lastmod = (block.match(/<lastmod>(.*?)<\/lastmod>/) || [])[1] || '';

    // 判断页面类型
    if (loc === siteUrl + '/' || loc.endsWith('/docs/intro')) {
      priority = 1.0; changefreq = 'daily';
    } else if (loc.includes('/docs/types/') || loc.includes('/docs/comparison') || loc.includes('/docs/roadmap') || loc.includes('/docs/timeline')) {
      priority = 0.9; changefreq = 'weekly';
    } else if (loc.includes('/docs/cards/')) {
      priority = 0.8; changefreq = 'monthly';
    } else if (loc.includes('/blog/')) {
      priority = 0.6; changefreq = 'weekly';
    } else if (loc.includes('/docs/tools/') || loc.includes('/docs/about/') || loc.includes('/docs/reference/')) {
      priority = 0.5; changefreq = 'monthly';
    }

    // 尝试从 .mdx 文件获取最后修改时间
    if (!lastmod) {
      for (const [url, meta] of docsMap) {
        if (loc === url || loc + '/' === url) {
          // 用文件 mtime 作为 lastmod
          const mdxFull = join(DOCS, meta.mdxPath);
          try {
            const ts = statSync(mdxFull).mtime;
            lastmod = ts.toISOString().split('T')[0];
          } catch {}
          break;
        }
      }
    }

    urls.push({ loc, priority, changefreq, lastmod });
  }

  // 重写 sitemap
  const today = new Date().toISOString().split('T')[0];
  const lines = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
  ];
  for (const u of urls) {
    lines.push('  <url>');
    lines.push(`    <loc>${escapeXml(u.loc)}</loc>`);
    if (u.lastmod) lines.push(`    <lastmod>${u.lastmod}</lastmod>`);
    lines.push(`    <changefreq>${u.changefreq}</changefreq>`);
    lines.push(`    <priority>${u.priority.toFixed(1)}</priority>`);
    // 多语言交替链接
    if (u.loc.includes('/en/')) {
      const zh = u.loc.replace('/en/', '/');
      lines.push(`    <xhtml:link rel="alternate" hreflang="zh-Hans" href="${escapeXml(zh)}" />`);
      lines.push(`    <xhtml:link rel="alternate" hreflang="en" href="${escapeXml(u.loc)}" />`);
      lines.push(`    <xhtml:link rel="alternate" hreflang="x-default" href="${escapeXml(zh)}" />`);
    } else if (!u.loc.includes('/docs/') && !u.loc.includes('/blog/')) {
      // 首页等核心页面
      lines.push(`    <xhtml:link rel="alternate" hreflang="zh-Hans" href="${escapeXml(u.loc)}" />`);
      lines.push(`    <xhtml:link rel="alternate" hreflang="en" href="${escapeXml(u.loc.replace(siteUrl, siteUrl + '/en'))}" />`);
    }
    lines.push('  </url>');
  }
  lines.push('</urlset>');
  writeFileSync(sitemapPath, lines.join('\n'), 'utf8');
  console.log(`[sitemap] 已优化 ${urls.length} 个 URL 的 sitemap.xml`);
}

function escapeXml(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

// ---- 主流程 ----
console.log('[post-build] 开始处理...');
injectJsonLd();
optimizeSitemap();
console.log('[post-build] 完成！');
