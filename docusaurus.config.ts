import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  // ========== 基础信息 ==========
  title: 'AI 算力卡百科 | 222 款 AI 芯片规格对比',
  titleDelimiter: ' | ',
  tagline: '222 款 AI 算力卡完整规格对比 · NVIDIA / AMD / 华为昇腾 · 2025-2026 行业洞察',
  favicon: 'img/favicon.ico',

  future: {v4: true},

  stylesheets: [
    {
      href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@400;500;700;900&family=JetBrains+Mono:wght@400;500;700&display=swap',
      type: 'text/css',
    },
  ],

  url: 'https://mirrorfrog.com',
  baseUrl: '/',
  // 统一 URL 尾部斜杠：让 canonical / og:url / sitemap 全部带 "/"，
  // 与 Cloudflare Pages 实际访问路径一致，消除搜索引擎信号混乱
  trailingSlash: true,

  organizationName: 'MirrorFrog',
  projectName: 'ai-compute-cards-wiki',

  // ========== 插件 ==========
  plugins: [
    [
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true,
        language: ['zh', 'en'],
        indexDocs: true,
        indexBlog: true,
        indexPages: false,
        docsRouteBasePath: '/docs',
        blogRouteBasePath: '/blog',
      },
    ],
  ],

      onBrokenLinks: 'warn',
  markdown: {
    hooks: {onBrokenMarkdownLinks: 'warn'},
  },

  // ========== i18n ==========
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans', 'en'],
    localeConfigs: {
      'zh-Hans': {label: '中文', htmlLang: 'zh-CN', direction: 'ltr'},
      en: {label: 'English', htmlLang: 'en-US', direction: 'ltr'},
    },
  },

  // ========== Presets ==========
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: undefined,
          showLastUpdateTime: false,
          routeBasePath: '/docs',
        },
        blog: {
          blogTitle: 'AI 计算卡行业动态',
          blogDescription: '2025-2026 年 AI 计算卡行业的最新发布、收购、IPO、路线图、深度分析。',
          blogSidebarTitle: '文章分类',
          blogSidebarCount: 'ALL',
          routeBasePath: '/blog',
          path: 'blog',
          showReadingTime: true,
          readingTime: ({content, frontMatter, defaultReadingTime, locale}) =>
            (defaultReadingTime({content, frontMatter, locale, options: {wordsPerMinute: 200}})),
          feedOptions: {
            type: ['rss', 'atom'],
            title: 'MirrorFrog AI 计算卡行业动态',
            description: 'AI 计算卡行业最新动态、深度技术分析、厂商战略',
            copyright: `Copyright © ${new Date().getFullYear()} MirrorFrog AI Compute Cards Wiki`,
            language: 'zh-Hans',
          },
          editUrl: undefined,
          showLastUpdateTime: false,
          postsPerPage: 10,
          archiveBasePath: 'archive',
          onUntruncatedBlogPosts: 'ignore',
        },

        // ========== Google Analytics 4 (GA4) ==========
        gtag: {
          trackingID: 'G-9VCJT24QHZ',
          anonymizeIP: true, // GDPR 合规
        },

        sitemap: {
          lastmod: 'date',
          changefreq: 'weekly',
          priority: 0.7,
          ignorePatterns: ['/tags/**', '/404.html', '/search'],
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  // ========== 注入到 <head> 的标签 ==========
  // 说明：canonical 由 Docusaurus 根据 url/baseUrl 自动生成，无需手写
  headTags: [
    // ---- GA4 gtag guard（防止 dev 模式下 gtag 未加载就调用）----
    {
      tagName: 'script',
      attributes: {type: 'text/javascript'},
      innerHTML: 'window.dataLayer=window.dataLayer||[];window.gtag=window.gtag||function(){window.dataLayer.push(arguments);}',
    },
    // ---- Favicon & App Icons ----
    {tagName: 'link', attributes: {rel: 'icon', type: 'image/png', sizes: '32x32', href: '/img/favicon-32x32.png'}},
    {tagName: 'link', attributes: {rel: 'icon', type: 'image/png', sizes: '16x16', href: '/img/favicon-16x16.png'}},
    {tagName: 'link', attributes: {rel: 'apple-touch-icon', sizes: '180x180', href: '/img/apple-touch-icon.png'}},
    {tagName: 'link', attributes: {rel: 'manifest', href: '/manifest.json'}},

    // ---- i18n 动态标题脚本 ----
    {
      tagName: 'script',
      attributes: {type: 'text/javascript'},
      innerHTML: `
        (function() {
          function updateTitle() {
            var path = window.location.pathname;
            var isEnglish = path.startsWith('/en/') || path.startsWith('/en');
            var defaultTitles = {
              zh: 'AI 算力卡百科 | 222 款 AI 芯片规格对比',
              en: 'AI Compute Cards Wiki | 222 AI Chips Specs Compared'
            };
            var currentTitle = document.title;
            if (currentTitle === defaultTitles.zh || currentTitle === defaultTitles.en || currentTitle.includes('AI 算力卡百科') || currentTitle.includes('AI Compute Cards Wiki')) {
              document.title = isEnglish ? defaultTitles.en : defaultTitles.zh;
            }
          }
          // 初始加载时执行
          if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', updateTitle);
          } else {
            updateTitle();
          }
          // 监听 Docusaurus 客户端路由切换
          window.addEventListener('docusaurus-router-outlet', updateTitle);
        })();
      `,
    },

    // ---- 基础 SEO Meta ----
    {tagName: 'meta', attributes: {name: 'description', content: '完整收录 222 款 AI 算力卡规格参数与性能对比，覆盖 NVIDIA H100/H200/B200/GB300/Rubin、AMD MI300X/MI400、华为昇腾910B/950/960/970、寒武纪 MLU370 等主流 AI 芯片，提供算力卡选型参考。'}},
    {tagName: 'meta', attributes: {name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'}},
    {tagName: 'meta', attributes: {name: 'googlebot', content: 'index, follow, max-image-preview:large'}},
    {tagName: 'meta', attributes: {name: 'baiduspider', content: 'index, follow'}},
    {tagName: 'meta', attributes: {name: 'bingbot', content: 'index, follow'}},
    {tagName: 'meta', attributes: {name: 'format-detection', content: 'telephone=no'}},
    {tagName: 'meta', attributes: {name: 'theme-color', content: '#5b4cdb'}},
    {tagName: 'meta', attributes: {name: 'application-name', content: 'MirrorFrog AI Compute Cards Wiki'}},
    {tagName: 'meta', attributes: {name: 'apple-mobile-web-app-title', content: 'MirrorFrog AI'}},
    {tagName: 'meta', attributes: {name: 'apple-mobile-web-app-capable', content: 'yes'}},
    {tagName: 'meta', attributes: {name: 'mobile-web-app-capable', content: 'yes'}},
    {tagName: 'meta', attributes: {name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent'}},

    // ---- Open Graph ----
    {tagName: 'meta', attributes: {property: 'og:type', content: 'website'}},
    {tagName: 'meta', attributes: {property: 'og:site_name', content: 'MirrorFrog AI Compute Cards Wiki'}},
    // og:locale 由 Docusaurus i18n 插件自动生成，无需手写
    {tagName: 'meta', attributes: {property: 'og:image', content: 'https://mirrorfrog.com/img/og-cover.png'}},
    {tagName: 'meta', attributes: {property: 'og:image:width', content: '1200'}},
    {tagName: 'meta', attributes: {property: 'og:image:height', content: '630'}},
    {tagName: 'meta', attributes: {property: 'og:image:alt', content: 'MirrorFrog AI 算力卡百科 - 222 款 AI 芯片规格对比'}},
    {tagName: 'meta', attributes: {property: 'og:image:type', content: 'image/png'}},

    // ---- Twitter Card ----
    {tagName: 'meta', attributes: {name: 'twitter:card', content: 'summary_large_image'}},
    // 待官方账号开通后取消注释：
    // {tagName: 'meta', attributes: {name: 'twitter:site', content: '@mirrorfrog'}},
    // {tagName: 'meta', attributes: {name: 'twitter:creator', content: '@mirrorfrog'}},
    {tagName: 'meta', attributes: {name: 'twitter:title', content: 'MirrorFrog AI 算力卡百科'}},
    {tagName: 'meta', attributes: {name: 'twitter:description', content: '完整收录 222 款 AI 算力卡规格参数与性能对比，覆盖 NVIDIA H100/H200/B200/GB300/Rubin、AMD MI300X/MI400、华为昇腾910B/950/960/970 等主流 AI 芯片。'}},
    {tagName: 'meta', attributes: {name: 'twitter:image', content: 'https://mirrorfrog.com/img/og-cover.png'}},
    {tagName: 'meta', attributes: {name: 'twitter:image:alt', content: 'MirrorFrog AI 算力卡百科 - 222 款 AI 芯片'}},

    // ---- Windows Tile ----
    {tagName: 'meta', attributes: {name: 'msapplication-TileColor', content: '#5b4cdb'}},
    {tagName: 'meta', attributes: {name: 'msapplication-config', content: '/browserconfig.xml'}},

    // ---- 搜索引擎验证 ----
    // Google Search Console (2026-08-27 已启用):
    {tagName: 'meta', attributes: {name: 'google-site-verification', content: 'iV1w9gSFQyjnSl9OlMd54hlYD09UmMocbnumV--R4ys'}},
    // Bing Webmaster: 待启用
    // {tagName: 'meta', attributes: {name: 'msvalidate.01', content: 'YOUR_BING_CODE'}},
    // Baidu Zhanzhang: 待启用
    // {tagName: 'meta', attributes: {name: 'baidu-site-verification', content: 'YOUR_BAIDU_CODE'}},

    // ---- JSON-LD: WebSite + Organization（注入到每页 <head>）----
    {tagName: 'script', attributes: {type: 'application/ld+json'}, innerHTML: JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebSite',
          '@id': 'https://mirrorfrog.com/#website',
          name: 'MirrorFrog AI 算力卡百科',
          alternateName: 'AI Compute Cards Wiki | MirrorFrog',
          url: 'https://mirrorfrog.com',
          description: '222 款 AI 算力卡完整规格对比、深度分析、选型指南。覆盖 NVIDIA、AMD、Intel、Google、AWS、华为昇腾、寒武纪等主流 AI 加速芯片。2025-2026 行业洞察持续更新。',
          inLanguage: ['zh-Hans', 'en'],
          copyrightHolder: {'@id': 'https://mirrorfrog.com/#organization'},
          potentialAction: {
            '@type': 'SearchAction',
            target: {
              '@type': 'EntryPoint',
              urlTemplate: 'https://mirrorfrog.com/search?q={search_term_string}',
            },
            'query-input': 'required name=search_term_string',
          },
        },
        {
          '@type': 'Organization',
          '@id': 'https://mirrorfrog.com/#organization',
          name: 'MirrorFrog',
          url: 'https://mirrorfrog.com',
          logo: {
            '@type': 'ImageObject',
            url: 'https://mirrorfrog.com/img/logo.png',
            width: 512,
            height: 512,
          },
          sameAs: [
            'https://github.com/charlesqing/mirrorfrog',
          ],
          contactPoint: {
            '@type': 'ContactPoint',
            contactType: 'customer support',
            url: 'https://github.com/charlesqing/mirrorfrog/issues',
          },
        },
        {
          '@type': 'SoftwareApplication',
          name: 'MirrorFrog AI Compute Cards Wiki',
          applicationCategory: 'DeveloperApplication',
          applicationSubCategory: 'AI Hardware Encyclopedia',
          operatingSystem: 'Web',
          offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD',
          },
          description: '完整收录 222 款 AI 算力卡规格参数与性能对比，覆盖 NVIDIA H100/H200/B200/GB300/Rubin、AMD MI300X/MI400、华为昇腾910B/950/960/970、寒武纪 MLU370 等主流 AI 芯片，提供算力卡选型参考。',
        },
      ],
    })},
  ],

  // ========== Theme Config ==========
  themeConfig: {
    image: 'img/og-cover.png',
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: true,
    },

    navbar: {
      title: 'MirrorFrog',
      logo: {
        alt: 'MirrorFrog',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'aiCardsSidebar',
          position: 'left',
          label: 'AI 算力卡',
        },
        {to: '/docs/comparison', label: '对比表', position: 'left'},
        {to: '/docs/roadmap', label: '路线图', position: 'left'},
        {
          label: '芯片架构',
          position: 'left',
          items: [
            {label: 'GPU 通用并行', to: '/docs/architectures/arch-gpu'},
            {label: 'TPU 张量处理', to: '/docs/architectures/arch-tpu'},
            {label: 'LPU 语言处理', to: '/docs/architectures/arch-lpu'},
            {label: 'NPU 神经处理', to: '/docs/architectures/arch-npu'},
            {label: 'APU 加速处理', to: '/docs/architectures/arch-apu'},
            {label: 'ASIC 专用芯片', to: '/docs/architectures/arch-asic'},
            {label: 'WSE 晶圆级', to: '/docs/architectures/arch-wse'},
            {label: 'IPU 智能处理', to: '/docs/architectures/arch-ipu'},
            {label: 'RPU / RDU', to: '/docs/architectures/arch-rpu-rdu'},
            {label: 'PIM 存算一体', to: '/docs/architectures/arch-pim'},
            {label: 'Neuromorphic 神经形态', to: '/docs/architectures/arch-neuromorphic'},
          ],
        },
        {
          label: '行业动态',
          position: 'left',
          items: [
            {label: '所有文章', to: '/blog'},
            {label: '产品发布', to: '/blog/tags/product-launch'},
            {label: '厂商战略', to: '/blog/tags/strategy'},
            {label: '技术深度', to: '/blog/tags/tech-deep-dive'},
            {label: '选型指南', to: '/blog/tags/selection'},
            {label: '行业新闻', to: '/blog/tags/news'},
            {label: '归档', to: '/blog/archive'},
          ],
        },
        {to: '/docs/tco-calculator', label: 'TCO 计算器', position: 'left'},
        {
          type: 'localeDropdown',
          position: 'right',
        },
      ],
    },

    footer: {
      style: 'dark',
      links: [
        {
          title: '按类型',
          items: [
            {label: 'AI 训练 GPU', to: '/docs/types/training-gpu'},
            {label: 'AI 训练 ASIC', to: '/docs/types/training-asic'},
            {label: '晶圆级训练', to: '/docs/types/training-wafer'},
            {label: 'AI 推理 GPU', to: '/docs/types/inference-gpu'},
            {label: 'AI 推理 ASIC', to: '/docs/types/inference-asic'},
            {label: '工作站 / 消费级', to: '/docs/types/workstation'},
            {label: '边缘 AI', to: '/docs/types/edge'},
            {label: '创新架构', to: '/docs/types/innovative'},
          ],
        },
        {
          title: '按厂商',
          items: [
            {label: 'NVIDIA', to: '/docs/cards/nvidia/h100'},
            {label: 'AMD', to: '/docs/cards/amd/mi300x'},
            {label: 'Intel (Habana)', to: '/docs/cards/intel/gaudi-3'},
            {label: 'Google TPU', to: '/docs/cards/google/tpu-ironwood'},
            {label: 'AWS', to: '/docs/cards/aws/trainium-2'},
            {label: '华为昇腾', to: '/docs/cards/huawei/ascend-910c'},
            {label: 'Cerebras / 其他', to: '/docs/cards/others/groq-lpu'},
          ],
        },
        {
          title: '按芯片架构',
          items: [
            {label: 'GPU / TPU / LPU', to: '/docs/architectures/arch-gpu'},
            {label: 'NPU / APU / ASIC', to: '/docs/architectures/arch-npu'},
            {label: 'WSE / IPU / RPU', to: '/docs/architectures/arch-wse'},
            {label: 'PIM 存算一体', to: '/docs/architectures/arch-pim'},
            {label: 'Neuromorphic 神经形态', to: '/docs/architectures/arch-neuromorphic'},
          ],
        },
        {
          title: '资源',
          items: [
            {label: '完整对比表', to: '/docs/comparison'},
            {label: '未来路线图', to: '/docs/roadmap'},
            {label: '行业动态', to: '/blog'},
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} MirrorFrog AI Compute Cards Wiki. Built with Docusaurus.`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
