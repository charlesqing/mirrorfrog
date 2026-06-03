# AI 算力卡百科

> 完整收录 100+ 款 AI 算力卡规格参数、性能对比与行业动态。
> 覆盖 NVIDIA、AMD、Intel、Google、AWS、华为昇腾、寒武纪等主流厂商。

在线访问：https://mirrorfrog.com

---

## 目录结构

```
ai-compute-cards/
├── docs/                # 文档源文件（MDX）
│   ├── gpu/            # GPU 图形处理器
│   ├── npu/           # NPU 神经网络处理器
│   ├── tpu/           # TPU / LPU / IPU
│   ├── asic/          # ASIC 定制芯片
│   ├── fpga/         # FPGA 可编程芯片
│   ├── types/         # 按架构类型浏览
│   ├── cards/         # 按厂商浏览
│   ├── tools/         # 实用工具
│   ├── reference/     # 参考与术语
│   └── about/        # 关于项目
├── blog/              # 行业动态博客（19 篇）
├── i18n/             # 国际化（zh-Hans / en）
├── scripts/           # 构建后脚本（JSON-LD / Sitemap 优化）
└── static/           # 静态资源（favicon / og-image 等）
```

---

## 快速开始

### 安装依赖

```bash
cd ai-compute-cards
npm install
```

### 本地开发

```bash
npm run start
# 默认启动在 http://localhost:3000
# 指定端口：npm run start -- --port 3000
```

支持热更新，修改 `docs/` 下的文件后浏览器自动刷新。

### 生产构建

```bash
npm run build
```

构建产物在 `build/` 目录下。

### 构建后处理（自动）

`post-build.js` 会在构建后自动执行以下操作：

1. **注入 JSON-LD 结构化数据**（Schema.org `Product` 类型），提升搜索引擎理解
2. **优化 sitemap.xml**（按页面类型设置 priority，补充多语言 `hreflang` 链接）

```bash
node scripts/post-build.js https://mirrorfrog.com
```

---

## 技术栈

| 技术 | 说明 |
|------|------|
| [Docusaurus 3.10](https://docusaurus.io/) | 静态站点生成器 |
| MDX | 文档格式（Markdown + JSX） |
| [Docusaurus i18n](https://docusaurus.io/docs/i18n) | 中英文双语支持 |
| JSON-LD / Schema.org | 结构化数据，SEO 优化 |
| Sitemap.xml | 搜索引擎爬虫索引优化 |

---

## SEO 优化说明

- 每篇文档均有 `description` 和 `keywords` front matter
- 首页 `title` 包含核心关键词（AI 算力卡、GPU、NVIDIA、昇腾等）
- 全站 Open Graph 标签（`og:title` / `og:description` / `og:image`）
- Twitter Card 支持
- JSON-LD `WebSite` / `Organization` / `Product` 结构化数据
- Sitemap 按页面类型设置不同 priority

---

## 贡献

欢迎提交 PR 补充新芯片规格或修正数据：

1. Fork 本仓库
2. 在对应目录创建 `.mdx` 文件
3. 填写 front matter（`title` / `description` / `keywords`）
4. 提交 PR

数据来源以各厂商官方规格书为准。

---

## 许可证

Apache-2.0

---

## 相关链接

- 在线站点：https://mirrorfrog.com
- 问题反馈：https://github.com/anomalyco/mirrorfrog/issues
- 源码仓库：https://github.com/anomalyco/mirrorfrog
