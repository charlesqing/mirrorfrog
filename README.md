# AI 算力卡百科 · MirrorFrog

<!-- badges -->
[![License](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](LICENSE)
[![Docusaurus](https://img.shields.io/badge/Docusaurus-3.10.1-3ecc7d?logo=docusaurus)](https://docusaurus.io/)
[![Cloudflare Pages](https://img.shields.io/badge/deploy-Cloudflare%20Pages-f38020?logo=cloudflare)](https://pages.cloudflare.com/)
[![Translations](https://img.shields.io/badge/i18n-zh--Hans%20%7C%20en-6366f1)](https://mirrorfrog.com/en/)
[![Cards](https://img.shields.io/badge/cards-111%2B-ff6b6b)](https://mirrorfrog.com/docs/comparison)
[![Blog](https://img.shields.io/badge/blog-24%20posts-ffa726)](https://mirrorfrog.com/blog)

> 🌐 **Complete encyclopedia of 100+ AI accelerator cards** — specs, performance, industry news.
> Covers NVIDIA, AMD, Intel, Google TPU, AWS, Huawei Ascend, Cambricon, and more.

📖 **在线访问**: [mirrorfrog.com](https://mirrorfrog.com) | [English](https://mirrorfrog.com/en/)

🔍 **站内搜索**: 导航栏右侧搜索框 / `Ctrl+K`

---

## 🚀 快速开始

```bash
git clone https://github.com/charlesqing/mirrorfrog.git
cd mirrorfrog
npm install
npm run start        # http://localhost:3000
npm run build        # 生产构建
```

---

## 📦 核心功能

| 功能 | 说明 |
|------|------|
| **111+ 款 AI 算力卡** | NVIDIA/AMD/Intel/Google/AWS/华为昇腾/寒武纪/摩尔线程等 |
| **完整对比表** | 并排对比 FP8/FP16/INT8 算力、显存、带宽、TDP |
| **架构详解** | GPU / TPU / NPU / LPU / ASIC / WSE / IPU / PIM 等 11 种架构 |
| **行业动态** | 24 篇深度博客文章（2025-2026 年最新发布、M&A、路线图） |
| **未来路线图** | 2025-2027 年芯片发布时间线 |
| **中英文双语** | 197 页文档 + 24 篇博客完整翻译 |
| **RSS / Atom Feed** | [RSS](https://mirrorfrog.com/blog/rss.xml) · [Atom](https://mirrorfrog.com/blog/atom.xml) |
| **站内搜索** | 离线本地搜索，支持中文 |
| **暗色模式** | 自动跟随系统 / 手动切换 |

---

## 🏗️ 技术栈

| 技术 | 说明 |
|------|------|
| [Docusaurus 3.10](https://docusaurus.io/) | 静态站点生成器 |
| MDX | 文档格式 |
| [@easyops-cn/docusaurus-search-local](https://github.com/easyops-cn/docusaurus-search-local) | 离线全文搜索 |
| [Docusaurus i18n](https://docusaurus.io/docs/i18n) | 中英文双语 |
| JSON-LD / Schema.org | 结构化数据 SEO |
| [Cloudflare Pages](https://pages.cloudflare.com/) | 部署平台 |

---

## 📝 贡献指南

欢迎提交 PR！请参照以下流程：

### 添加新芯片卡片
1. 在 `docs/cards/{vendor}/` 下创建 `.md` 文件
2. 填写 front matter：`id`, `title`, `sidebar_label`, `description`, `keywords`
3. 包含核心规格表格（架构、制程、显存、算力、TDP 等）
4. 在 `sidebars.ts` 中注册新文件

### 修改现有数据
1. 认领或创建 [Issue](https://github.com/charlesqing/mirrorfrog/issues)
2. 提交 PR 时附加官方规格来源链接

### 本地预览
```bash
npm run start -- --locale zh-Hans    # 中文
npm run start -- --locale en         # 英文
npm run build && npx docusaurus serve  # 生产预览
```

### 翻译质量
- **不要使用** `<!-- truncate -->` 注释（MDX 不兼容）
- Front matter 中 `description` 含冒号时用双引号包裹
- 正文中 `<数字` 需转义为 `&lt;数字`（如 `<70GB` → `&lt;70GB`）

---

## 📂 目录结构

```
mirrorfrog/
├── docs/                    # 中文文档源文件 (197 页)
│   ├── cards/              # 111 款芯片卡片 (nvidia/amd/intel/google/aws/huawei/cerebras/others)
│   ├── architectures/      # 架构详解 (GPU/TPU/NPU/LPU/ASIC 等)
│   ├── asic/ gpu/ npu/ tpu/ lpu/ ipu/ dpu/ fpga/  # 分类索引
│   ├── types/              # 按场景分类 (training/inference/edge 等)
│   ├── comparison.mdx      # 完整对比表
│   ├── roadmap.mdx         # 路线图
│   └── intro.mdx           # 首页介绍
├── blog/                   # 中文博客 (24 篇)
├── i18n/en/                # 英文翻译 (220 页)
├── sidebars.ts             # 侧边栏配置
├── docusaurus.config.ts    # Docusaurus 配置
├── scripts/                # 构建脚本
└── static/                 # 静态资源
```

---

## 📊 最新更新

| 日期 | 内容 |
|------|------|
| 2026-06-06 | 全站 220 页英文翻译完成；修复 636 个 broken links；新增 Changelog |
| 2026-06-05 | 站内搜索上线；新增 Ascend 950 / Crescent Island 卡片 |
| 2026-06-04 | 路线图更新；Computex 2026 汇总博客 |

详见 [Changelog](https://mirrorfrog.com/docs/changelog)

---

## 📄 许可证

Apache-2.0
