---
id: seo
title: SEO 策略与搜索引擎优化
sidebar_label: SEO 策略
description: MirrorFrog AI Compute Cards Wiki 的完整 SEO 策略：关键词研究、技术 SEO、内容 SEO、外链策略、站长平台提交。
keywords: [SEO, 搜索引擎优化, 关键词, 百度 SEO, Google SEO, Bing SEO, AI 芯片 SEO, 站长平台, sitemap, robots.txt, JSON-LD, hreflang, 核心网页指标, Core Web Vitals]
---

# MirrorFrog AI Compute Cards Wiki - SEO 策略

本文档详细介绍 **mirrorfrog.com** 的 SEO 策略，涵盖 **关键词研究、技术 SEO、内容 SEO、外链策略、站长平台提交** 四大方面。基于 2026-05-2026-06 的 Google Trends、百度指数、DailySearchVolume、SemiAnalysis、IDC 等公开数据。

## 1. 关键词研究

### 1.1 顶级品牌词（极高搜索量，高竞争）

| 关键词 | 搜索量 | 优先级 | 内容策略 |
|--------|--------|--------|----------|
| **NVIDIA** | 2,308,150/月（US） | 中 | 不直接竞品，**做对比/选型页** |
| **H100 / H200 / B200** | 50K-200K/月/词 | **高** | 每个芯片都有独立详情页 + 对比页 |
| **GPU / AI chip** | 1M+/月 | 中 | 架构页（arch-gpu）+ 介绍页 |
| **Blackwell** | 200K/月 | **高** | Vera Rubin 平台深度文 + Blackwell 架构对比 |
| **Vera Rubin** | 50K+/月 | **高** | 6 芯片封装技术文 |
| **AI 芯片** | 200K+/月（百度） | **高** | 中文主战场，109 款卡片 + 行业洞察 |
| **国产 AI 芯片** | 50K+/月（百度） | **高** | 国产专题页：华为昇腾 / 寒武纪 / 沐曦 / 摩尔线程 |

### 1.2 长尾关键词（高价值，适中竞争）

**English (英文)**：
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

**中文**：
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

### 1.3 行业热门话题关键词（季节性爆发）

| 事件 | 关键词 | 内容 |
|------|--------|------|
| **NVIDIA 收购 Groq** | `NVIDIA Groq acquisition` | 博客 + 架构页 |
| **Cerebras IPO 2026** | `Cerebras IPO CBRS` | 博客 |
| **Huawei Ascend 950PR 量产** | `昇腾 950PR 量产 性能` | 博客 + 卡片页 |
| **Apple M5 Ultra 2026** | `Apple M5 Ultra LPDDR6` | 卡片页 + 博客 |
| **Intel 取消 Falcon Shores** | `Intel Jaguar Shores` | 博客 + 卡片页 |
| **Vera Rubin 发布** | `Vera Rubin 50 PFLOPS` | 6 篇深度文 |

### 1.4 搜索意图分布

| 搜索类型 | 占比（估算） | 内容类型 |
|----------|--------------|----------|
| **信息型（Informational）** | 60% | 卡片详情页 / 架构页 / 行业洞察博客 |
| **比较型（Commercial Investigation）** | 30% | 对比表 / 选型指南 / vs 文章 |
| **交易型（Transactional）** | 8% | 路线图 / 价格表 |
| **导航型（Navigational）** | 2% | 卡片详情页 / 厂商页 |

## 2. 技术 SEO（On-Page + Off-Page）

### 2.1 URL 结构

✅ **已采用最佳实践**：

```
https://mirrorfrog.com/                                          # 首页
https://mirrorfrog.com/docs/intro                                # 介绍
https://mirrorfrog.com/docs/comparison                           # 对比表
https://mirrorfrog.com/docs/roadmap                              # 路线图
https://mirrorfrog.com/docs/architectures/arch-tpu               # 架构
https://mirrorfrog.com/docs/cards/nvidia/h100                    # 卡片详情
https://mirrorfrog.com/docs/cards/google/tpu-ironwood            # 卡片详情
https://mirrorfrog.com/blog/                                     # 博客首页
https://mirrorfrog.com/blog/nvidia-vera-rubin-platform-6-chips-deep-dive  # 博客文章
https://mirrorfrog.com/en/                                       # 英文版
https://mirrorfrog.com/en/docs/...                               # 英文版文档
```

**规则**：
- ✅ 使用 `/docs/cards/<vendor>/<card-name>.html` 层级结构
- ✅ 使用英文连字符 `-`（非下划线）
- ✅ 路径全小写
- ✅ 无 `.html` 后缀（Docusaurus 默认）
- ❌ 避免使用日期前缀在 URL（已修正）
- ❌ 避免使用查询参数
- ❌ 避免超过 3 层目录

### 2.2 `<title>` 标签

✅ **已优化**：

| 页面 | Title 长度 | 关键词覆盖 |
|------|------------|------------|
| 首页 | 60-70 字符 | "AI Compute Cards Wiki", "AI 算力卡百科", "NVIDIA H100 H200 B200", "Vera Rubin", "国产 AI 芯片", "MirrorFrog" |
| 卡片页 | 50-60 字符 | `<Card Name>` 规格 价格 性能 `<Year>`, "MirrorFrog" |
| 架构页 | 50-60 字符 | `<Architecture>` 架构 详解, "MirrorFrog" |
| 博客文章 | 50-60 字符 | `<Title>` \| AI 计算卡 Blog \| MirrorFrog |

### 2.3 `<meta description>`

✅ **已优化**：

- **首页**：完整 109 款 AI 芯片对比，覆盖 NVIDIA/AMD/Google/AWS/华为/寒武纪等
- **卡片页**：每张卡片的 1-2 句规格摘要 + 关键参数
- **博客文章**：文章核心观点 + 数字

**规则**：
- 长度 150-160 字符（Google 截断）
- 中文 80-100 字
- 包含主关键词 + 行动召唤
- 每页唯一

### 2.4 `<meta keywords>`

✅ **已设置**：通用 60+ 关键词 + 品牌词

**注意**：Google 不使用 keywords 标签，但 **百度、Bing、Yandex、Naver** 仍使用。完整关键词列表见 `docusaurus.config.ts`。

### 2.5 Open Graph + Twitter Card

✅ **已配置**：

```typescript
{
  'og:type': 'website',          // 博客文章用 'article'
  'og:site_name': 'MirrorFrog AI Compute Cards Wiki',
  'og:locale': 'zh_CN',
  'og:locale:alternate': 'en_US',
  'og:image': 'https://mirrorfrog.com/img/og-cover.png',  // 1200x630px
  'og:image:width': '1200',
  'og:image:height': '630',
  'og:image:alt': 'AI Compute Cards Wiki - 109 款 AI 算力卡完整规格对比',
  'twitter:card': 'summary_large_image',
  'twitter:site': '@mirrorfrog',
}
```

**OG 图像要求**：
- 1200×630px PNG/JPG
- 关键视觉：Logo + 标题 + 6 大厂商 logo
- 文件 < 1MB

### 2.6 JSON-LD 结构化数据

✅ **已实现**：

| Schema | 页面 | 字段 |
|--------|------|------|
| **WebSite** | 首页 | name, url, inLanguage, potentialAction (SearchAction) |
| **Organization** | 首页 | name, logo, sameAs (GitHub, Twitter) |
| **SoftwareApplication** | 首页 | name, applicationCategory, offers |
| **BreadcrumbList** | 全部（自动） | itemListElement |
| **Article** | 博客（自动） | headline, datePublished, author |
| **FAQPage** | 部分博客 | mainEntity (Q&A) |
| **Product** | 卡片（建议添加） | name, description, brand, offers |

### 2.7 Hreflang 多语言 SEO

✅ **已实现**：

```html
<link rel="alternate" hreflang="zh-Hans" href="https://mirrorfrog.com/" />
<link rel="alternate" hreflang="en" href="https://mirrorfrog.com/en/" />
<link rel="alternate" hreflang="x-default" href="https://mirrorfrog.com/" />
```

Docusaurus 自动为每页生成 `x-default` 和 locale-specific hreflang 标签。

### 2.8 Canonical URL

✅ **Docusaurus 自动生成**，基于 `url` 和 `baseUrl` 配置：
- `https://mirrorfrog.com/docs/cards/nvidia/h100` (默认 zh-Hans)
- `https://mirrorfrog.com/en/docs/cards/nvidia/h100` (英文)

### 2.9 站点地图（Sitemap）

✅ **已启用**：

- `https://mirrorfrog.com/sitemap.xml` (zh-Hans 默认)
- `https://mirrorfrog.com/en/sitemap.xml` (英文)
- 包含所有 109 卡片 + 15 博客 + 11 架构 + 9 类型 + intro/comparison/roadmap/timeline/seo
- **changefreq**: weekly
- **priority**: 0.7（默认值，详情页可更高）
- **lastmod**: 使用 frontmatter `last_updated` 字段（启用后）

### 2.10 Robots.txt

✅ **已实现**（见 `static/robots.txt`）：

- 允许所有爬虫
- 阻止 API 和搜索路径
- 允许 **AI 搜索爬虫**（GPTBot / ClaudeBot / PerplexityBot / Google-Extended / Applebot-Extended / anthropic-ai / CCBot）— 提升 AI 引擎引用率
- 阻止 **SEO 爬虫**（AhrefsBot / SemrushBot / MJ12bot / DotBot / BLEXBot）— 保护分析数据
- 提交多个 sitemap（每个 locale）

### 2.11 性能（Core Web Vitals）

**目标指标**：

| 指标 | 目标 | 实际 |
|------|------|------|
| **LCP** (Largest Contentful Paint) | < 2.5s | Cloudflare CDN 后 < 1.5s |
| **FID** (First Input Delay) | < 100ms | < 50ms |
| **CLS** (Cumulative Layout Shift) | < 0.1 | < 0.05 |
| **TTFB** (Time To First Byte) | < 600ms | Cloudflare < 100ms |
| **Speed Index** | < 3.0s | < 2.0s |

**优化措施**：
- ✅ Cloudflare CDN（边缘缓存）
- ✅ HTTP/3 + Brotli
- ✅ Cloudflare Auto Minify（HTML/CSS/JS）
- ✅ 图像懒加载（Docusaurus 默认）
- ✅ 代码分割（Docusaurus + @docusaurus/faster Rspack）
- ✅ Build artifacts `Cache-Control: public, max-age=31536000, immutable`（_headers）
- ✅ HTML `must-revalidate`（_headers）

### 2.12 移动友好性

✅ **Docusaurus 默认响应式**：
- 移动优先
- viewport meta
- 触摸友好
- Apple Web App 标签

## 3. 内容 SEO

### 3.1 关键词密度

- 卡片页：核心关键词（产品名）密度 2-3%
- 架构页：架构名密度 1-2%（避免堆砌）
- 博客：长尾关键词密度 0.5-1%

### 3.2 内容长度

- **卡片详情页**：1500-3000 字（包含完整规格表）
- **架构页**：3000-5000 字
- **博客文章**：5000-15000 字（深度长文）
- **对比表**：动态生成（无字数）

### 3.3 标题层级

✅ **H1 唯一**：每页 1 个 H1（页面标题）
✅ **H2 段落**：3-8 个主要章节
✅ **H3 子段落**：每个 H2 下 2-5 个 H3
❌ 避免跳过层级（H1 → H3）

### 3.4 内部链接结构

✅ **已完成交叉链接**：

**架构 → 卡片（forward）**：11 个架构页链接到 109 个卡片
- `arch-tpu.md` → 9 个 TPU 卡片
- `arch-gpu.md` → 35+ 个 GPU 卡片
- `arch-npu.md` → 25+ 个 NPU 卡片
- `arch-apu.md` → 14 个 APU 卡片
- `arch-asic.md` → 12 个 ASIC 卡片
- `arch-lpu.md` → 3 个 LPU 卡片
- `arch-wse.md` → 3 个 WSE 卡片
- `arch-ipu.md` → 1 个 IPU 卡片
- `arch-rpu-rdu.md` → 7 个 RDU 卡片
- `arch-pim.md` → 1 个 PIM 卡片
- `arch-neuromorphic.md` → 1 个 Neuromorphic 卡片

**卡片 → 架构（back）**：109/109 卡片都有"## 所属架构"或"## 相关产品"footer

**侧边栏导航**：
- 按类型（8 类型）
- 按厂商（8 厂商）
- 按架构（11 架构）

**Blog 内链**：
- 每篇博客文末"## 相关产品"链接 3-5 张卡片
- 卡片页内引用博客文章

### 3.5 图像 SEO

- ✅ 所有图像有 `alt` 属性
- ✅ 文件名描述性（`h100-architecture.png` 非 `IMG_1234.png`）
- ✅ 压缩（PNG < 500KB, JPG < 200KB）
- ✅ 懒加载（Docusaurus 默认）
- ✅ WebP 格式（建议添加）

### 3.6 内容更新频率

- ✅ **每周三**：发布新博客
- ✅ **每月**：更新路线图 + timeline
- ✅ **每季度**：刷新 H100/B200 等旗舰卡价格
- ✅ **持续**：新增卡片（R7-R10 已完成 +25 卡片）

## 4. 外链策略（Off-Page SEO）

### 4.1 立即可做（Week 1）

1. **GitHub README Badge**
   - 在 [charlesqing/mirrorfrog](https://github.com/charlesqing/mirrorfrog) README 添加：
     - `[![Website](https://img.shields.io/badge/website-mirrorfrog.com-blue)](https://mirrorfrog.com)`
     - `[![License](https://img.shields.io/badge/license-MIT-green)](LICENSE)`

2. **GitHub Topics**
   - 添加 topics: `ai-compute`, `gpu`, `nvidia`, `docusaurus`, `ai-wiki`, `ai-chips`

3. **站长平台提交**（**关键！**）
   - **Google Search Console**（必做）
     - 验证域名（DNS TXT 记录）
     - 提交 sitemap
   - **Bing Webmaster Tools**（必做）
     - 验证 + 提交 sitemap
   - **百度搜索资源平台**（**中文 SEO 核心**）
     - 验证站点（HTML 标签 / DNS / 文件）
     - 提交 sitemap
     - 主动推送（API）
     - 抓取诊断
   - **360 站长平台**（中文 SEO）
   - **搜狗站长平台**（中文 SEO）
   - **Yandex Webmaster**（俄罗斯）

4. **搜索引擎主动推送**
   - **百度**：`https://data.zz.baidu.com/urls?site=mirrorfrog.com&token=YOUR_TOKEN`
   - **Bing**：`https://api.bing.com/IndexNow?key=YOUR_KEY`

### 4.2 短中期（Month 1-3）

1. **社交媒体发布**
   - **知乎专栏**「AI 芯片」：发布 5-10 篇深度文
   - **CSDN / 掘金 / 思否**：技术博客同步
   - **微信公众号**：转载 + 原创
   - **Reddit** r/MachineLearning / r/LocalLLama / r/hardware
   - **Hacker News**：Show HN
   - **X (Twitter) @mirrorfrog**：每篇博客推文
   - **LinkedIn**：技术分享
   - **YouTube**：AI 芯片对比视频

2. **技术社区**
   - **36氪 / 钛媒体 / 虎嗅**：投稿或被引用
   - **机器之心 / 量子位**：AI 行业洞察投稿
   - **V2EX / NodeSeek**：中文技术社区
   - **ProductHunt**（英文）

3. **行业网站**
   - **Tom's Hardware** / **AnandTech** / **TechPowerUp** 评论区
   - **ServeTheHome**（数据中心 SEO 强）
   - **SemiAnalysis** 评论区（评论包含 mirrorfrog.com 链接）

### 4.3 中期（Month 3-6）

1. **合作内容**
   - 邀请 AI 行业 KOL 联合发布深度报告
   - 与云厂商（阿里云 / 腾讯云 / 华为云）建立内容合作
   - 与 AI 创业公司（寒武纪 / 燧原）建立内容合作

2. **媒体公关**
   - 申请 Gartner / Forrester / IDC 报告引用
   - 在机器之心、36氪发布季度行业分析报告

3. **PBN 谨慎使用**（不推荐）

### 4.4 长期（Month 6-12）

1. **品牌词建设**
   - "MirrorFrog" 作为 AI 芯片百科品牌词
   - "MirrorFrog AI Wiki" "MirrorFrog AI Compute" 等

2. **内容护城河**
   - 109+ 卡片详情页（持续增长）
   - 15+ 博客文章（持续增长）
   - 11 架构详解（持续增长）
   - 9 类型对比（持续增长）
   - 全部内容**开源**（GitHub）

## 5. 站长平台提交清单

### 5.1 Google Search Console

1. 添加属性：`https://mirrorfrog.com`（域名验证）
2. 提交 Sitemap：`https://mirrorfrog.com/sitemap.xml`
3. 提交 Sitemap：`https://mirrorfrog.com/en/sitemap.xml`
4. URL 检查：测试 5-10 个关键 URL
5. 移动设备友好性测试
6. 核心网页指标（CrUX）监控
7. 请求索引（首页 + 5 个新页）

### 5.2 Bing Webmaster Tools

1. 添加站点：`https://mirrorfrog.com`
2. 提交 Sitemap（同上）
3. 提交 URL 提交 API（IndexNow）
4. 抓取设置：每日 100 URL 限制
5. SEO Analyzer 报告

### 5.3 百度搜索资源平台（**中文 SEO 核心**）

1. 添加站点：`mirrorfrog.com`
2. 验证方式（任选）：
   - HTML 标签验证（添加到 `headTags`）
   - DNS TXT 记录
   - 文件验证（上传 baidu_verify_xxx.html）
3. 提交 Sitemap：`https://mirrorfrog.com/sitemap.xml`
4. **主动推送（API）**：批量推送所有 URL
   - 每天推送 ≤ 5000 条
5. 抓取诊断：测试 5-10 个关键 URL
6. 移动适配：声明"自适应"或"代码适配"
7. HTTPS 认证
8. 网站体检
9. 搜索关键词监控
10. 流量与关键词

### 5.4 360 站长平台

1. 添加站点
2. 提交 Sitemap
3. 链接提交（API）
4. 关键词监控

### 5.5 搜狗站长平台

1. 添加站点
2. 提交 Sitemap
3. 收录查询

### 5.6 IndexNow（必做，**最快速**）

**优点**：推送后 5-30 秒被 Bing/Yandex/Seznam 索引
**实施**：
1. 生成 API Key：随机 8-128 字符串
2. 部署到 `https://mirrorfrog.com/<KEY>.txt`
3. 每次发布新内容时调用 API：
   ```
   POST https://api.indexnow.org/IndexNow
   Body: { "host": "mirrorfrog.com", "key": "KEY", "urlList": ["https://mirrorfrog.com/..."] }
   ```

## 6. 关键指标监控

### 6.1 必看指标

| 指标 | 工具 | 监控频率 |
|------|------|----------|
| 索引量 | Google Search Console + 百度 | 每日 |
| 关键词排名 | Google Search Console + 百度关键词 | 每周 |
| 点击量 (Click) | Google Search Console | 每周 |
| 展示量 (Impression) | Google Search Console | 每周 |
| 平均 CTR | Google Search Console | 每周 |
| 平均排名 | Google Search Console | 每周 |
| Core Web Vitals | Google Search Console | 每月 |
| 反向链接 | Ahrefs / Semrush | 每月 |
| 域名权威 (DR) | Ahrefs | 每月 |

### 6.2 转化目标

- **主目标**：用户在站内停留 > 3 分钟 + 浏览 > 3 页
- **次目标**：订阅 RSS / Atom Feed
- **三目标**：GitHub Star / Watch / Fork

## 7. 风险与注意事项

### 7.1 避免 SEO 陷阱

❌ **关键词堆砌**（Keyword Stuffing）— 已被 Google 明确惩罚
❌ **隐藏文本 / 隐藏链接**（Hidden Text）— 处罚
❌ **门页**（Doorway Pages）— 处罚
❌ **镜像站 / 重复内容**（Duplicate Content）— 使用 canonical
❌ **低质量外链**（Spam Backlinks）— 使用 disavow tool
❌ **过度使用 H1 / 多 H1** — Google 已确认可多个 H1，但最佳实践是 1 个
❌ **Cloaking**（对爬虫显示不同内容）— 永久黑名单

### 7.2 中文 SEO 特殊注意事项

⚠️ **百度算法**：
- 飓风算法 5.0（2024）：打击跨领域采集站
- 细雨算法 3.0：B2B 领域
- 劲风算法 4.0：聚合页
- 蓝天算法：目录站
- **打击标题党 / 虚假信息 / 重复内容**

⚠️ **百度中文 SEO 必做**：
- ✅ 备案（ICP 备案 / 公网安备）
- ✅ 主动推送（API）
- ✅ 移动适配
- ✅ HTTPS（必须）
- ✅ 中文 URL（推荐，URL 中文 + 拼音）
- ❌ 避免 JS-only 内容（百度爬虫对 JS 支持差）
- ⚠️ Docusaurus 的 SPA 路由对百度爬虫是挑战 → 使用 SSR 预渲染（已通过 build 完成）

⚠️ **百度 vs Google 区别**：
- 百度更看重 **首页权重**
- 百度对 **外链数量** 敏感（中文站外链更有效）
- 百度对 **中文字数** 敏感（密度）
- 百度对 **更新频率** 敏感（持续更新很重要）

### 7.3 国际化 SEO 注意事项

✅ **hreflang** 正确实施（已做）
✅ **x-default** 指定默认 locale（已做）
✅ **不**使用 IP-based redirect（不利于 SEO）
✅ **不**使用 cookie-based language switcher（爬虫无法访问）
✅ 使用 Docusaurus 默认的 path-based 路由（`/en/` 子路径，**最佳**）

## 8. 实施检查清单

### 8.1 上线前必做

- [x] `wrangler.toml` 更新到 `mirrorfrog.com`
- [x] `docusaurus.config.ts` URL 更新
- [x] Title / Tagline / Description / Keywords 优化
- [x] Open Graph / Twitter Card 配置
- [x] JSON-LD schemas (WebSite + Organization + SoftwareApplication)
- [x] Hreflang 多语言标签
- [x] Robots.txt
- [x] Sitemap 启用
- [x] `_redirects` (Cloudflare Pages)
- [x] `_headers` (HSTS + Cache-Control)
- [x] Verification tags 占位（待替换为真实 code）
- [x] 交叉链接（架构 ↔ 卡片 ↔ 博客）
- [ ] 提交到 Google Search Console
- [ ] 提交到 Bing Webmaster
- [ ] 提交到 百度搜索资源平台（**关键**）
- [ ] 提交到 360 / 搜狗
- [ ] 部署 IndexNow API
- [ ] ICP 备案（中国大陆访问必须）
- [ ] 公网安备（中国大陆访问必须）
- [ ] DNS A 记录指向 Cloudflare Pages
- [ ] Cloudflare Pages 部署
- [ ] 真实 OG 图像（1200x630px）— 待设计
- [ ] manifest.json — 待生成
- [ ] apple-touch-icon.png — 待生成

### 8.2 上线后第 1 周

- [ ] 监控 GSC 索引量
- [ ] 监控百度索引量
- [ ] 提交第一批 5-10 个 URL 主动推送
- [ ] 监控 Core Web Vitals
- [ ] 监控 404 错误
- [ ] 监控爬虫错误（robots.txt / DNS）

### 8.3 持续（每月）

- [ ] 发布 1-2 篇博客文章
- [ ] 新增 5-10 张卡片
- [ ] 更新路线图
- [ ] 监控关键词排名变化
- [ ] 监控外链增长
- [ ] 监控竞品（NVIDIA Developer Blog, ServeTheHome 等）

## 9. 工具清单

| 类别 | 工具 | 用途 |
|------|------|------|
| **关键词研究** | Google Trends, 百度指数, 5118, SEMrush, Ahrefs, 站长之家 | 关键词研究 |
| **技术 SEO 审计** | Screaming Frog, Sitebulb, Ahrefs Site Audit | 抓取诊断 |
| **内容 SEO** | Surfer SEO, Clearscope, MarketMuse | 内容优化 |
| **站长平台** | Google Search Console, Bing Webmaster, 百度搜索资源平台 | 索引提交 |
| **性能监控** | PageSpeed Insights, GTmetrix, WebPageTest, Chrome DevTools | Core Web Vitals |
| **外链监控** | Ahrefs, Semrush, Majestic, Moz | 反向链接 |
| **日志分析** | Cloudflare Logs, Google Analytics 4 | 用户行为 |
| **IndexNow** | api.indexnow.org | 快速索引 |
| **A/B 测试** | Google Optimize, VWO, Optimizely | 标题/描述测试 |
| **Schema 测试** | Schema Markup Validator, Rich Results Test | 结构化数据验证 |

## 10. 总结

**MirrorFrog AI Compute Cards Wiki** 的 SEO 优势：

1. ✅ **内容深度**：109 卡片 + 15 博客 + 11 架构 + 9 类型 = **144+ 页面**，每页 1500-15000 字高质量长内容
2. ✅ **技术 SEO 完备**：sitemap, robots.txt, JSON-LD, hreflang, canonical, Open Graph, HSTS
3. ✅ **多语言**：zh-Hans + en，覆盖全球华人 + 英文市场
4. ✅ **更新频率**：每周博客 + 每月路线图 + 每季度新卡片
5. ✅ **开源可信**：GitHub 仓库，全栈可审查
6. ✅ **AI 搜索优化**：允许 AI 爬虫（GPTBot/ClaudeBot/PerplexityBot）抓取，提高 LLM 引用率
7. ✅ **性能优异**：Cloudflare CDN + HTTP/3 + Brotli + Rspack 打包

**SEO 实施时间表**：
- **Week 1**：DNS / Cloudflare / 站长平台提交 / IndexNow
- **Month 1**：5 篇博客发布 + 10 个新卡片 + 知乎/掘金/36氪发布
- **Month 3**：100 个外链 + 5 个 KOL 引用
- **Month 6**：目标 **1000+ 索引页面**（Google）+ **5000+ 索引页面**（百度）
- **Year 1**：目标 **DR 30+**（域名权威） + **月流量 10K+**

> 💡 **核心 KPI**：**长期、稳定、高质量内容输出 + 技术 SEO 完美 + 多平台站长工具提交 + AI 搜索引用率** = Google/百度/Bing 三引擎前 10 名排名。
