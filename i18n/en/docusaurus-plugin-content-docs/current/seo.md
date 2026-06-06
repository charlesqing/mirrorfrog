---
id: seo
title: SEO Strategy and Search Engine Optimization
sidebar_label: SEO Strategy
description: "Complete SEO strategy for MirrorFrog AI Compute Cards Wiki: keyword research, technical SEO, content SEO, backlink strategy, webmaster platform submission."
keywords: [SEO, search engine optimization, keywords, Baidu SEO, Google SEO, Bing SEO, AI chip SEO, webmaster platform, sitemap, robots.txt, JSON-LD, hreflang, Core Web Vitals]
---

# MirrorFrog AI Compute Cards Wiki - SEO Strategy

This document details the SEO strategy for **mirrorfrog.com**, covering **keyword research, technical SEO, content SEO, backlink strategy, and webmaster platform submission** in four major areas. Based on public data from Google Trends, Baidu Index, DailySearchVolume, SemiAnalysis, IDC, etc. for 2026-05 through 2026-06.

## 1. Keyword Research

### 1.1 Top Brand Keywords (Very High Search Volume, High Competition)

| Keyword | Search Volume | Priority | Content Strategy |
|---------|--------------|----------|------------------|
| **NVIDIA** | 2,308,150/month (US) | Medium | Not a direct competitor; **create comparison/selection pages** |
| **H100 / H200 / B200** | 50K-200K/month each | **High** | Each chip has an independent detail page + comparison page |
| **GPU / AI chip** | 1M+/month | Medium | Architecture page (arch-gpu) + introduction page |
| **Blackwell** | 200K/month | **High** | Vera Rubin platform deep-dive + Blackwell architecture comparison |
| **Vera Rubin** | 50K+/month | **High** | 6-chip packaging technical article |
| **AI 芯片 (AI chip)** | 200K+/month (Baidu) | **High** | Main Chinese-language battlefield, 109 cards + industry insights |
| **国产 AI 芯片 (domestic AI chip)** | 50K+/month (Baidu) | **High** | Domestic topic pages: Huawei Ascend / Cambricon / MetaX / Moore Threads |

### 1.2 Long-Tail Keywords (High Value, Moderate Competition)

**English**:
- `H100 vs H200 vs B200 which to rent 2026` ⭐
- `Best GPU for AI training 2026`
- `Blackwell B200 vs Hopper H100 benchmark`
- `FP4 inference Blackwell performance`
- `NVL72 rack scale comparison`
- `Groq LPU NVIDIA acquisition 2026`
- `MI400 Helios rack open interconnect`
- `Vera Rubin NVL576 power consumption`
- `HBM4 SK Hynix Samsung Micron 2026`
- `TPU 8i 8t split training inference Google`

**Chinese**:
- `H100 H200 B200 怎么选 2026` ⭐
- `国产 AI 芯片 出货量 2026`
- `华为昇腾 950PR 性能对比 H20`
- `寒武纪 590 690 规格`
- `Vera Rubin 6 芯片 平台 解析`
- `Groq 收购 NVIDIA 200 亿 美元`
- `AMD MI400 Helios 72 GPU 机柜`
- `HBM4 量产 三家 SK海力士 三星 美光`
- `TPU 8i 8t 拆分 训练 推理`
- `AI 集群 电力 1MW 核电机柜`
- `AI PC NPU 对比 Lunar Lake Snapdragon X Elite Ryzen AI Max`

### 1.3 Industry Hot Topic Keywords (Seasonal Surges)

| Event | Keywords | Content |
|-------|----------|---------|
| **NVIDIA acquires Groq** | `NVIDIA Groq acquisition` | Blog + architecture page |
| **Cerebras IPO 2026** | `Cerebras IPO CBRS` | Blog |
| **Huawei Ascend 950PR mass production** | `Ascend 950PR mass production performance` | Blog + card page |
| **Apple M5 Ultra 2026** | `Apple M5 Ultra LPDDR6` | Card page + blog |
| **Intel cancels Falcon Shores** | `Intel Jaguar Shores` | Blog + card page |
| **Vera Rubin launch** | `Vera Rubin 50 PFLOPS` | 6 deep-dive articles |

### 1.4 Search Intent Distribution

| Search Type | Share (estimated) | Content Type |
|-------------|-------------------|--------------|
| **Informational** | 60% | Card detail pages / architecture pages / industry insight blogs |
| **Commercial Investigation** | 30% | Comparison tables / selection guides / vs. articles |
| **Transactional** | 8% | Roadmaps / price tables |
| **Navigational** | 2% | Card detail pages / vendor pages |

## 2. Technical SEO (On-Page + Off-Page)

### 2.1 URL Structure

✅ **Best practices adopted**:

```
https://mirrorfrog.com/                                          # Homepage
https://mirrorfrog.com/docs/intro                                # Introduction
https://mirrorfrog.com/docs/comparison                           # Comparison table
https://mirrorfrog.com/docs/roadmap                              # Roadmap
https://mirrorfrog.com/docs/architectures/arch-tpu               # Architecture
https://mirrorfrog.com/docs/cards/nvidia/h100                    # Card detail
https://mirrorfrog.com/docs/cards/google/tpu-ironwood            # Card detail
https://mirrorfrog.com/blog/                                     # Blog home
https://mirrorfrog.com/blog/nvidia-vera-rubin-platform-6-chips-deep-dive  # Blog post
https://mirrorfrog.com/en/                                       # English version
https://mirrorfrog.com/en/docs/...                               # English docs
```

**Rules**:
- ✅ Use `/docs/cards/<vendor>/<card-name>.html` hierarchical structure
- ✅ Use English hyphens `-` (not underscores)
- ✅ All lowercase paths
- ✅ No `.html` suffix (Docusaurus default)
- ❌ Avoid date prefixes in URLs (corrected)
- ❌ Avoid query parameters
- ❌ Avoid more than 3 directory levels

### 2.2 `<title>` Tags

✅ **Optimized**:

| Page | Title Length | Keyword Coverage |
|------|-------------|------------------|
| Homepage | 60-70 chars | "AI Compute Cards Wiki", "AI 算力卡百科", "NVIDIA H100 H200 B200", "Vera Rubin", "国产 AI 芯片", "MirrorFrog" |
| Card page | 50-60 chars | `<Card Name>` specs price performance `<Year>`, "MirrorFrog" |
| Architecture page | 50-60 chars | `<Architecture>` architecture details, "MirrorFrog" |
| Blog post | 50-60 chars | `<Title>` \| AI Compute Card Blog \| MirrorFrog |

### 2.3 `<meta description>`

✅ **Optimized**:

- **Homepage**: Full comparison of 109 AI chips covering NVIDIA/AMD/Google/AWS/Huawei/Cambricon, etc.
- **Card pages**: 1-2 sentence spec summary + key parameters per card
- **Blog posts**: Core viewpoint + figures

**Rules**:
- Length 150-160 characters (Google truncation)
- Chinese 80-100 characters
- Include primary keyword + call to action
- Unique per page

### 2.4 `<meta keywords>`

✅ **Configured**: 60+ general keywords + brand terms

**Note**: Google does not use the keywords tag, but **Baidu, Bing, Yandex, Naver** still do. Full keyword list is in `docusaurus.config.ts`.

### 2.5 Open Graph + Twitter Card

✅ **Configured**:

```typescript
{
  'og:type': 'website',          // Blog posts use 'article'
  'og:site_name': 'MirrorFrog AI Compute Cards Wiki',
  'og:locale': 'zh_CN',
  'og:locale:alternate': 'en_US',
  'og:image': 'https://mirrorfrog.com/img/og-cover.png',  // 1200x630px
  'og:image:width': '1200',
  'og:image:height': '630',
  'og:image:alt': 'AI Compute Cards Wiki - 109 AI Compute Cards Complete Spec Comparison',
  'twitter:card': 'summary_large_image',
  'twitter:site': '@mirrorfrog',
}
```

**OG image requirements**:
- 1200×630px PNG/JPG
- Key visuals: Logo + title + 6 major vendor logos
- File &lt; 1MB

### 2.6 JSON-LD Structured Data

✅ **Implemented**:

| Schema | Page | Fields |
|--------|------|--------|
| **WebSite** | Homepage | name, url, inLanguage, potentialAction (SearchAction) |
| **Organization** | Homepage | name, logo, sameAs (GitHub, Twitter) |
| **SoftwareApplication** | Homepage | name, applicationCategory, offers |
| **BreadcrumbList** | All (auto) | itemListElement |
| **Article** | Blog (auto) | headline, datePublished, author |
| **FAQPage** | Some blogs | mainEntity (Q&A) |
| **Product** | Cards (suggested) | name, description, brand, offers |

### 2.7 Hreflang Multilingual SEO

✅ **Implemented**:

```html
<link rel="alternate" hreflang="zh-Hans" href="https://mirrorfrog.com/" />
<link rel="alternate" hreflang="en" href="https://mirrorfrog.com/en/" />
<link rel="alternate" hreflang="x-default" href="https://mirrorfrog.com/" />
```

Docusaurus automatically generates `x-default` and locale-specific hreflang tags for every page.

### 2.8 Canonical URL

✅ **Auto-generated by Docusaurus** based on `url` and `baseUrl` config:
- `https://mirrorfrog.com/docs/cards/nvidia/h100` (default zh-Hans)
- `https://mirrorfrog.com/en/docs/cards/nvidia/h100` (English)

### 2.9 Sitemap

✅ **Enabled**:

- `https://mirrorfrog.com/sitemap.xml` (zh-Hans default)
- `https://mirrorfrog.com/en/sitemap.xml` (English)
- Includes all 109 cards + 15 blogs + 11 architectures + 9 types + intro/comparison/roadmap/timeline/seo
- **changefreq**: weekly
- **priority**: 0.7 (default; can be higher for detail pages)
- **lastmod**: uses frontmatter `last_updated` field (when enabled)

### 2.10 Robots.txt

✅ **Implemented** (see `static/robots.txt`):

- Allow all crawlers
- Block API and search paths
- Allow **AI search crawlers** (GPTBot / ClaudeBot / PerplexityBot / Google-Extended / Applebot-Extended / anthropic-ai / CCBot) — improves LLM citation rate
- Block **SEO crawlers** (AhrefsBot / SemrushBot / MJ12bot / DotBot / BLEXBot) — protects analytics data
- Submit multiple sitemaps (per locale)

### 2.11 Performance (Core Web Vitals)

**Targets**:

| Metric | Target | Actual |
|--------|--------|--------|
| **LCP** (Largest Contentful Paint) | &lt; 2.5s | &lt; 1.5s with Cloudflare CDN |
| **FID** (First Input Delay) | &lt; 100ms | &lt; 50ms |
| **CLS** (Cumulative Layout Shift) | &lt; 0.1 | &lt; 0.05 |
| **TTFB** (Time To First Byte) | &lt; 600ms | &lt; 100ms with Cloudflare |
| **Speed Index** | &lt; 3.0s | &lt; 2.0s |

**Optimizations**:
- ✅ Cloudflare CDN (edge caching)
- ✅ HTTP/3 + Brotli
- ✅ Cloudflare Auto Minify (HTML/CSS/JS)
- ✅ Image lazy loading (Docusaurus default)
- ✅ Code splitting (Docusaurus + @docusaurus/faster Rspack)
- ✅ Build artifacts `Cache-Control: public, max-age=31536000, immutable` (_headers)
- ✅ HTML `must-revalidate` (_headers)

### 2.12 Mobile Friendliness

✅ **Docusaurus default responsive**:
- Mobile-first
- viewport meta
- Touch-friendly
- Apple Web App tags

## 3. Content SEO

### 3.1 Keyword Density

- Card pages: Core keyword (product name) density 2-3%
- Architecture pages: Architecture name density 1-2% (avoid stuffing)
- Blogs: Long-tail keyword density 0.5-1%

### 3.2 Content Length

- **Card detail pages**: 1,500-3,000 words (with full spec tables)
- **Architecture pages**: 3,000-5,000 words
- **Blog posts**: 5,000-15,000 words (deep long-form)
- **Comparison tables**: Dynamically generated (no word count)

### 3.3 Heading Hierarchy

✅ **Unique H1**: 1 H1 per page (page title)
✅ **H2 sections**: 3-8 major sections
✅ **H3 subsections**: 2-5 H3s per H2
❌ Avoid skipping levels (H1 → H3)

### 3.4 Internal Link Structure

✅ **Cross-linking complete**:

**Architecture → Cards (forward)**: 11 architecture pages link to 109 cards
- `arch-tpu.md` → 9 TPU cards
- `arch-gpu.md` → 35+ GPU cards
- `arch-npu.md` → 25+ NPU cards
- `arch-apu.md` → 14 APU cards
- `arch-asic.md` → 12 ASIC cards
- `arch-lpu.md` → 3 LPU cards
- `arch-wse.md` → 3 WSE cards
- `arch-ipu.md` → 1 IPU card
- `arch-rpu-rdu.md` → 7 RDU cards
- `arch-pim.md` → 1 PIM card
- `arch-neuromorphic.md` → 1 Neuromorphic card

**Cards → Architecture (back)**: 109/109 cards have "## Architecture" or "## Related Products" footer

**Sidebar navigation**:
- By type (8 types)
- By vendor (8 vendors)
- By architecture (11 architectures)

**Blog internal links**:
- Each blog post ends with "## Related Products" linking 3-5 cards
- Card pages cite blog posts

### 3.5 Image SEO

- ✅ All images have `alt` attributes
- ✅ Descriptive filenames (`h100-architecture.png` not `IMG_1234.png`)
- ✅ Compressed (PNG &lt; 500KB, JPG &lt; 200KB)
- ✅ Lazy loading (Docusaurus default)
- ✅ WebP format (suggested)

### 3.6 Content Update Frequency

- ✅ **Every Wednesday**: Publish new blog
- ✅ **Monthly**: Update roadmap + timeline
- ✅ **Quarterly**: Refresh flagship card prices (H100/B200, etc.)
- ✅ **Ongoing**: Add new cards (R7-R10 completed +25 cards)

## 4. Backlink Strategy (Off-Page SEO)

### 4.1 Immediate (Week 1)

1. **GitHub README Badge**
   - Add to [anomalyco/mirrorfrog](https://github.com/anomalyco/mirrorfrog) README:
     - `[![Website](https://img.shields.io/badge/website-mirrorfrog.com-blue)](https://mirrorfrog.com)`
     - `[![License](https://img.shields.io/badge/license-MIT-green)](LICENSE)`

2. **GitHub Topics**
   - Add topics: `ai-compute`, `gpu`, `nvidia`, `docusaurus`, `ai-wiki`, `ai-chips`

3. **Webmaster Platform Submission** (**Critical!**)
   - **Google Search Console** (required)
     - Verify domain (DNS TXT record)
     - Submit sitemap
   - **Bing Webmaster Tools** (required)
     - Verify + submit sitemap
   - **Baidu Search Resource Platform** (**core for Chinese SEO**)
     - Verify site (HTML tag / DNS / file)
     - Submit sitemap
     - Active push (API)
     - Crawl diagnostics
   - **360 Webmaster Platform** (Chinese SEO)
   - **Sogou Webmaster Platform** (Chinese SEO)
   - **Yandex Webmaster** (Russia)

4. **Search Engine Active Push**
   - **Baidu**: `https://data.zz.baidu.com/urls?site=mirrorfrog.com&token=YOUR_TOKEN`
   - **Bing**: `https://api.bing.com/IndexNow?key=YOUR_KEY`

### 4.2 Short to Medium Term (Month 1-3)

1. **Social Media Publishing**
   - **Zhihu Column** "AI Chip": Publish 5-10 deep-dive articles
   - **CSDN / Juejin / SegmentFault**: Tech blog syndication
   - **WeChat Official Account**: Reposts + originals
   - **Reddit** r/MachineLearning / r/LocalLLama / r/hardware
   - **Hacker News**: Show HN
   - **X (Twitter) @mirrorfrog**: Tweet every blog post
   - **LinkedIn**: Tech sharing
   - **YouTube**: AI chip comparison videos

2. **Tech Communities**
   - **36Kr / TMT Post / Huxiu**: Contribute or get cited
   - **Synced Review / QbitAI**: AI industry insight contributions
   - **V2EX / NodeSeek**: Chinese tech communities
   - **ProductHunt** (English)

3. **Industry Sites**
   - **Tom's Hardware** / **AnandTech** / **TechPowerUp** comment sections
   - **ServeTheHome** (strong data center SEO)
   - **SemiAnalysis** comment section (comments containing mirrorfrog.com links)

### 4.3 Medium Term (Month 3-6)

1. **Content Partnerships**
   - Invite AI industry KOLs to co-publish deep reports
   - Establish content partnerships with cloud providers (Alibaba Cloud / Tencent Cloud / Huawei Cloud)
   - Establish content partnerships with AI startups (Cambricon / Enflame)

2. **Media PR**
   - Apply for Gartner / Forrester / IDC report citations
   - Publish quarterly industry analysis reports on Synced Review, 36Kr

3. **PBN Use with Caution** (not recommended)

### 4.4 Long Term (Month 6-12)

1. **Brand Term Building**
   - "MirrorFrog" as the AI chip encyclopedia brand term
   - "MirrorFrog AI Wiki", "MirrorFrog AI Compute", etc.

2. **Content Moat**
   - 109+ card detail pages (continuously growing)
   - 15+ blog posts (continuously growing)
   - 11 architecture deep-dives (continuously growing)
   - 9 type comparisons (continuously growing)
   - All content **open source** (GitHub)

## 5. Webmaster Platform Submission Checklist

### 5.1 Google Search Console

1. Add property: `https://mirrorfrog.com` (domain verification)
2. Submit Sitemap: `https://mirrorfrog.com/sitemap.xml`
3. Submit Sitemap: `https://mirrorfrog.com/en/sitemap.xml`
4. URL Inspection: Test 5-10 key URLs
5. Mobile-Friendly Test
6. Core Web Vitals (CrUX) monitoring
7. Request indexing (homepage + 5 new pages)

### 5.2 Bing Webmaster Tools

1. Add site: `https://mirrorfrog.com`
2. Submit Sitemap (same as above)
3. Submit URL Submission API (IndexNow)
4. Crawl settings: 100 URL/day limit
5. SEO Analyzer report

### 5.3 Baidu Search Resource Platform (**Core for Chinese SEO**)

1. Add site: `mirrorfrog.com`
2. Verification method (choose one):
   - HTML tag verification (add to `headTags`)
   - DNS TXT record
   - File verification (upload baidu_verify_xxx.html)
3. Submit Sitemap: `https://mirrorfrog.com/sitemap.xml`
4. **Active push (API)**: Bulk push all URLs
   - Push ≤ 5,000 per day
5. Crawl diagnostics: Test 5-10 key URLs
6. Mobile adaptation: Declare "responsive" or "code adaptation"
7. HTTPS certification
8. Site health check
9. Search keyword monitoring
10. Traffic and keywords

### 5.4 360 Webmaster Platform

1. Add site
2. Submit Sitemap
3. Link submission (API)
4. Keyword monitoring

### 5.5 Sogou Webmaster Platform

1. Add site
2. Submit Sitemap
3. Indexing check

### 5.6 IndexNow (Required, **Fastest**)

**Benefits**: Indexed by Bing/Yandex/Seznam within 5-30 seconds after push
**Implementation**:
1. Generate API Key: Random 8-128 character string
2. Deploy to `https://mirrorfrog.com/<KEY>.txt`
3. Call API on each new content publish:
   ```
   POST https://api.indexnow.org/IndexNow
   Body: { "host": "mirrorfrog.com", "key": "KEY", "urlList": ["https://mirrorfrog.com/..."] }
   ```

## 6. Key Metrics Monitoring

### 6.1 Must-Watch Metrics

| Metric | Tool | Monitoring Frequency |
|--------|------|---------------------|
| Index count | Google Search Console + Baidu | Daily |
| Keyword ranking | Google Search Console + Baidu Keywords | Weekly |
| Clicks | Google Search Console | Weekly |
| Impressions | Google Search Console | Weekly |
| Average CTR | Google Search Console | Weekly |
| Average position | Google Search Console | Weekly |
| Core Web Vitals | Google Search Console | Monthly |
| Backlinks | Ahrefs / Semrush | Monthly |
| Domain Rating (DR) | Ahrefs | Monthly |

### 6.2 Conversion Goals

- **Primary goal**: User stays on site &gt; 3 minutes + browses &gt; 3 pages
- **Secondary goal**: RSS / Atom Feed subscription
- **Tertiary goal**: GitHub Star / Watch / Fork

## 7. Risks and Notes

### 7.1 Avoid SEO Traps

❌ **Keyword Stuffing** — Explicitly penalized by Google
❌ **Hidden Text / Hidden Links** — Penalty
❌ **Doorway Pages** — Penalty
❌ **Mirror Sites / Duplicate Content** — Use canonical
❌ **Low-Quality Backlinks (Spam)** — Use disavow tool
❌ **Excessive H1 / Multiple H1** — Google has confirmed multiple H1 is fine, but best practice is one
❌ **Cloaking** (showing different content to crawlers) — Permanent blacklist

### 7.2 Chinese SEO Special Notes

⚠️ **Baidu Algorithms**:
- Hurricane Algorithm 5.0 (2024): Targets cross-domain content farms
- Drizzle Algorithm 3.0: B2B domain
- Gale Algorithm 4.0: Aggregation pages
- Blue Sky Algorithm: Directory sites
- **Penalizes clickbait / misinformation / duplicate content**

⚠️ **Baidu Chinese SEO Must-Do**:
- ✅ ICP filing (ICP registration / Public Security filing)
- ✅ Active push (API)
- ✅ Mobile adaptation
- ✅ HTTPS (required)
- ✅ Chinese URLs (recommended, Chinese + Pinyin in URL)
- ❌ Avoid JS-only content (Baidu crawler has poor JS support)
- ⚠️ Docusaurus SPA routing is a challenge for Baidu crawler → Use SSR pre-rendering (achieved via build)

⚠️ **Baidu vs Google Differences**:
- Baidu values **homepage authority** more
- Baidu is sensitive to **backlink quantity** (Chinese site backlinks are more effective)
- Baidu is sensitive to **Chinese character count** (density)
- Baidu is sensitive to **update frequency** (consistent updates matter)

### 7.3 International SEO Notes

✅ **hreflang** correctly implemented (done)
✅ **x-default** specifies default locale (done)
✅ **Do not** use IP-based redirect (harmful for SEO)
✅ **Do not** use cookie-based language switcher (crawlers cannot access)
✅ Use Docusaurus default path-based routing (`/en/` subdirectory, **best**)

## 8. Implementation Checklist

### 8.1 Must-Do Before Launch

- [x] `wrangler.toml` updated to `mirrorfrog.com`
- [x] `docusaurus.config.ts` URL updated
- [x] Title / Tagline / Description / Keywords optimized
- [x] Open Graph / Twitter Card configured
- [x] JSON-LD schemas (WebSite + Organization + SoftwareApplication)
- [x] Hreflang multilanguage tags
- [x] Robots.txt
- [x] Sitemap enabled
- [x] `_redirects` (Cloudflare Pages)
- [x] `_headers` (HSTS + Cache-Control)
- [x] Verification tags placeholders (to be replaced with real codes)
- [x] Cross-linking (architecture ↔ cards ↔ blog)
- [ ] Submit to Google Search Console
- [ ] Submit to Bing Webmaster
- [ ] Submit to Baidu Search Resource Platform (**critical**)
- [ ] Submit to 360 / Sogou
- [ ] Deploy IndexNow API
- [ ] ICP filing (required for mainland China access)
- [ ] Public Security filing (required for mainland China access)
- [ ] DNS A record pointing to Cloudflare Pages
- [ ] Cloudflare Pages deploy
- [ ] Real OG image (1200x630px) — pending design
- [ ] manifest.json — pending generation
- [ ] apple-touch-icon.png — pending generation

### 8.2 First Week Post-Launch

- [ ] Monitor GSC index count
- [ ] Monitor Baidu index count
- [ ] Submit first 5-10 URLs via active push
- [ ] Monitor Core Web Vitals
- [ ] Monitor 404 errors
- [ ] Monitor crawler errors (robots.txt / DNS)

### 8.3 Ongoing (Monthly)

- [ ] Publish 1-2 blog posts
- [ ] Add 5-10 new cards
- [ ] Update roadmap
- [ ] Monitor keyword ranking changes
- [ ] Monitor backlink growth
- [ ] Monitor competitors (NVIDIA Developer Blog, ServeTheHome, etc.)

## 9. Tool List

| Category | Tool | Purpose |
|----------|------|---------|
| **Keyword Research** | Google Trends, Baidu Index, 5118, SEMrush, Ahrefs, Zhanzhang Home | Keyword research |
| **Technical SEO Audit** | Screaming Frog, Sitebulb, Ahrefs Site Audit | Crawl diagnostics |
| **Content SEO** | Surfer SEO, Clearscope, MarketMuse | Content optimization |
| **Webmaster Platforms** | Google Search Console, Bing Webmaster, Baidu Search Resource Platform | Index submission |
| **Performance Monitoring** | PageSpeed Insights, GTmetrix, WebPageTest, Chrome DevTools | Core Web Vitals |
| **Backlink Monitoring** | Ahrefs, Semrush, Majestic, Moz | Backlinks |
| **Log Analysis** | Cloudflare Logs, Google Analytics 4 | User behavior |
| **IndexNow** | api.indexnow.org | Fast indexing |
| **A/B Testing** | Google Optimize, VWO, Optimizely | Title/description testing |
| **Schema Testing** | Schema Markup Validator, Rich Results Test | Structured data validation |

## 10. Summary

**MirrorFrog AI Compute Cards Wiki** SEO advantages:

1. ✅ **Content depth**: 109 cards + 15 blogs + 11 architectures + 9 types = **144+ pages**, 1,500-15,000 words of high-quality long-form content per page
2. ✅ **Technical SEO complete**: sitemap, robots.txt, JSON-LD, hreflang, canonical, Open Graph, HSTS
3. ✅ **Multilingual**: zh-Hans + en, covering global Chinese speakers + English market
4. ✅ **Update frequency**: Weekly blog + monthly roadmap + quarterly new cards
5. ✅ **Open source credibility**: GitHub repository, full stack auditable
6. ✅ **AI search optimized**: Allow AI crawlers (GPTBot/ClaudeBot/PerplexityBot) to crawl, improving LLM citation rate
7. ✅ **Excellent performance**: Cloudflare CDN + HTTP/3 + Brotli + Rspack bundling

**SEO implementation timeline**:
- **Week 1**: DNS / Cloudflare / webmaster platform submission / IndexNow
- **Month 1**: 5 blog posts + 10 new cards + Zhihu/Juejin/36Kr publishing
- **Month 3**: 100 backlinks + 5 KOL citations
- **Month 6**: Target **1000+ indexed pages** (Google) + **5000+ indexed pages** (Baidu)
- **Year 1**: Target **DR 30+** (domain rating) + **10K+ monthly traffic**

> 💡 **Core KPI**: **Long-term, consistent, high-quality content output + perfect technical SEO + multi-platform webmaster tool submission + AI search citation rate** = Top 10 ranking on Google/Baidu/Bing.
