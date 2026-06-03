const matter = require('gray-matter');
const path = require('path');
const fs = require('fs');

/**
 * Docusaurus 插件：为每张卡页面注入 JSON-LD Product Schema
 *
 * 读取 .mdx 文件的 front matter，提取 title / description / keywords，
 * 生成 schema.org/Product 结构化数据，注入到 <head>。
 */
module.exports = function jsonLdPlugin(context, options) {
  return {
    name: 'docusaurus-plugin-jsonld',

    // 在渲染完成后注入 <script type="application/ld+json">
    injectHtmlTags({content}) {
      // 仅在浏览器端执行，SSR 阶段不注入
      return {};
    },

    // 通过 docusaurusNode 生命周期为每个 MDX 页面注入 JSON-LD
    extendCli(cli) {
      // 不需要 CLI 命令
    },

    // 关键：在 renderMarkdown 之后、HTML 生成之前注入
    // 使用 postBuild 或 configurePostRender 不可用，改用 lifecycle：
    postBuild(props) {
      // postBuild 只能操作构建产物，无法注入 <head>
      // 采用方案：写一个客户端 component，在路由切换时动态注入
    },

    // 正确的 Docusaurus 插件方式：提供 theme 组件
    getThemePath() {
      return path.resolve(__dirname, 'theme');
    },

    // 向 docusaurus 声明我们提供 JSON-LD 注入能力
    // 实际注入通过 SSR 时的 headTags 完成
    // 需要在 loadContent / contentLoaded 阶段操作
    loadContent() {
      // 扫描 docs/ 下所有 .mdx，解析 front matter
      const docsDir = path.resolve(context.siteDir, 'docs');
      const siteUrl = context.siteConfig.url || 'https://mirrorfrog.com';
      const entries = [];

      function walk(dir) {
        if (!fs.existsSync(dir)) return;
        for (const f of fs.readdirSync(dir)) {
          const full = path.join(dir, f);
          if (fs.statSync(full).isDirectory()) { walk(full); continue; }
          if (!f.endsWith('.mdx')) continue;
          const raw = fs.readFileSync(full, 'utf8');
          const { data } = matter(raw);
          if (!data.title) continue;
          // 计算页面 URL slug
          let slug = data.slug || null;
          // 从文件路径推导 slug
          let relPath = path.relative(docsDir, full);
          relPath = relPath.replace(/\.mdx$/, '');
          // 处理 index.mdx
          if (relPath.endsWith('/index')) relPath = relPath.slice(0, -6);
          const urlPath = slug !== null ? slug : ('/docs/' + relPath);
          const url = siteUrl + (urlPath.startsWith('/') ? urlPath : '/' + urlPath);
          entries.push({
            title: data.title,
            description: data.description || '',
            keywords: Array.isArray(data.keywords) ? data.keywords : [],
            url,
            filePath: relPath,
          });
        }
      }
      walk(docsDir);

      // 将结果写入临时文件，供 getClientModules / theme 读取
      const outPath = path.resolve(context.generatedFilesDir, 'jsonld-data.json');
      fs.mkdirSync(path.dirname(outPath), {recursive: true});
      fs.writeFileSync(outPath, JSON.stringify(entries, null, 2), 'utf8');
      return {entries, jsonldDataPath: outPath};
    },

    // 将 JSON-LD 数据作为 prop 传递给客户端
    contentLoaded({content, actions}) {
      const {addRoute, createData} = actions;
      // 不需要额外路由，数据已写入 generatedFilesDir
    },
  };
};
