const fs   = require('fs');
const path = require('path');

const ROOT    = path.join(__dirname, '..');
const BUILD   = path.join(ROOT, 'build');
const DOCS    = path.join(ROOT, 'docs');
const SITE_URL = process.argv[2] || 'https://mirrorfrog.com';
const SITEMAP = path.join(BUILD, 'sitemap.xml');

// ================================================================
// 1. 注入 JSON‑LD（读 .mdx front matter，不解析 HTML）
// ================================================================
function injectJsonLd() {
  if (!fs.existsSync(DOCS)) { console.log('[jsonld] docs/ 不存在，跳过'); return; }

  let count = 0;

  function walkMdx(dir) {
    for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
      const fp = path.join(dir, e.name);
      if (e.isDirectory()) walkMdx(fp);
      else if (e.name.endsWith('.mdx') || e.name.endsWith('.md')) injectFromMdx(fp);
    }
  }

  function injectFromMdx(mdxPath) {
    const raw = fs.readFileSync(mdxPath, 'utf8');
    const fm = raw.match(/^---\n([\s\S]*?)\n---/);
    if (!fm) return;

    // 解析 front matter（支持单引号、双引号、无引号）
    const get = (key) => {
      const m = fm[1].match(new RegExp(`^${key}\\s*:\\s*['"]?(.*?)['"]?\\s*$`, 'm'));
      return m ? m[1].trim() : '';
    };

    const title = get('title');
    const desc  = get('description');
    if (!title) return;

    // 计算对应的 HTML 路径
    // docs/asic/aws-trainium.mdx → build/docs/asic/aws-trainium/index.html
    const relMd   = path.relative(DOCS, mdxPath).replace(/\.(mdx|md)$/, '');
    const htmlPath = path.join(BUILD, 'docs', relMd, 'index.html');
    if (!fs.existsSync(htmlPath)) return;

    let html = fs.readFileSync(htmlPath, 'utf8');
    if (html.includes('"@type":"Product"')) return; // 已注入

    // URL：始终用正斜杠
    const url = (SITE_URL + '/docs/' + relMd + '/').replace(/\\/g, '/').replace(/\/+$/, '/');

    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": title,
      "description": desc || title,
      "url": url,
      "@id": url
    };

    // 注入到 </head> 前
    const tag = '\n<script type="application/ld+json">\n' + JSON.stringify(jsonLd, null, 2) + '\n</script>\n</head>';
    html = html.replace(/<\/head>/i, tag);
    fs.writeFileSync(htmlPath, html, 'utf8');
    count++;
  }

  walkMdx(DOCS);
  console.log(`[jsonld] 已注入 ${count} 个页面`);
}

// ================================================================
// 2. 优化 sitemap.xml
// ================================================================
function optimizeSitemap() {
  if (!fs.existsSync(SITEMAP)) { console.log('[sitemap] sitemap.xml 不存在，跳过'); return; }

  let xml = fs.readFileSync(SITEMAP, 'utf8');
  const blocks = [];
  const re = /<url>[\s\S]*?<\/url>/g;
  let m;
  while ((m = re.exec(xml)) !== null) blocks.push(m[0]);

  let out = '<?xml version="1.0" encoding="UTF-8"?>\n';
  out += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n';
  out += '          xmlns:xhtml="http://www.w3.org/1999/xhtml">\n';

  for (const block of blocks) {
    const loc = (block.match(/<loc>(.*?)<\/loc>/) || [])[1] || '';
    if (!loc) continue;

    let pri = 0.7, freq = 'weekly';
    const isEn = loc.includes('/en/');

    if (loc === SITE_URL + '/' || loc.endsWith('/docs/intro') || loc.endsWith('/docs/intro/')) {
      pri = 1.0; freq = 'daily';
    } else if (loc.includes('/docs/types/') || loc.includes('/docs/comparison') || loc.includes('/docs/roadmap') || loc.includes('/docs/timeline')) {
      pri = 0.9; freq = 'weekly';
    } else if (loc.includes('/docs/cards/')) {
      pri = 0.8; freq = 'monthly';
    } else if (loc.includes('/blog/')) {
      pri = 0.6; freq = 'weekly';
    } else if (loc.includes('/docs/tools/') || loc.includes('/docs/about/') || loc.includes('/docs/reference/')) {
      pri = 0.5; freq = 'monthly';
    }

    out += '  <url>\n';
    out += `    <loc>${esc(loc)}</loc>\n`;

    const lm = (block.match(/<lastmod>(.*?)<\/lastmod>/) || [])[1];
    if (lm) out += `    <lastmod>${lm}</lastmod>\n`;

    out += `    <changefreq>${freq}</changefreq>\n`;
    out += `    <priority>${pri.toFixed(1)}</priority>\n`;

    // 多语言链接
    if (isEn) {
      const zh = loc.replace('/en/', '/');
      out += `    <xhtml:link rel="alternate" hreflang="zh-Hans" href="${esc(zh)}" />\n`;
      out += `    <xhtml:link rel="alternate" hreflang="en" href="${esc(loc)}" />\n`;
      out += `    <xhtml:link rel="alternate" hreflang="x-default" href="${esc(zh)}" />\n`;
    } else if (!loc.includes('/404') && !loc.includes('/search')) {
      const enUrl = loc.replace(SITE_URL, SITE_URL + '/en');
      out += `    <xhtml:link rel="alternate" hreflang="zh-Hans" href="${esc(loc)}" />\n`;
      out += `    <xhtml:link rel="alternate" hreflang="en" href="${esc(enUrl)}" />\n`;
    }

    out += '  </url>\n';
  }

  out += '</urlset>';
  fs.writeFileSync(SITEMAP, out, 'utf8');
  console.log(`[sitemap] 已优化 ${blocks.length} 个 URL`);
}

function esc(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

// ================================================================
// 主流程
// ================================================================
console.log('[post-build] 开始...');
injectJsonLd();
optimizeSitemap();
console.log('[post-build] 完成！');
