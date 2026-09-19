# MirrorFrog 全站深度审查结论报告

- **日期**：2026-09-20
- **站点**：MirrorFrog（Docusaurus，zh-Hans 默认 / en 次语言）
- **范围**：全站导航、首页、侧边栏与文档、i18n、对比表与工具、TCO 计算器与留资、构建与性能、内容规范
- **性质**：**只读审查，未对站点做任何修改**（仅创建本报告作为交付物）
- **体量基线**：366 篇文档（233 卡片 + 133 非卡片）、38 篇博客、9 个类型页、11 个架构页

---

## 一、审查方法、工具与两项重要限制

### 加载/参考的技能与规范
- `cn-web-design-guidelines-zh`（Vercel Web 界面指南：可访问性/焦点/表单/动画/排版/性能/导航/i18n/水合）
- `vercel-react-best-practices`（8 类 × 45 条 React 性能与质量规则）
- `browserskill` / `playwright-cli`（浏览器自动化，用于运行时/控制台错误检查）
- `squirrelscan-skills-audit-website`（SEO/性能/安全/技术/内容/可访问性 CLI 审计）

### 采用的手段（静态 + 构建产物验证）
- 结构盘点：`docs/` 文件树、`sidebars.ts`、`docusaurus.config.ts` 的 navbar/footer
- 代码走查：`src/pages/index.tsx`、`src/pages/compare.tsx`、`src/components/TcoCalculator.tsx`、`src/components/LeadCapture.tsx`
- **构建产物实测**：直接解析 `build/` 下的 HTML 与 JS chunk（关键结论均以产物为准，避免误判）
- i18n 覆盖统计、`http://` 外链扫描、图片 alt 扫描、JS chunk 体积统计

### ⚠️ 两项限制（影响结论完整性，建议后续补齐）
1. **squirrelscan 未能执行**：沙箱内无 `squirrel` CLI，无法跑机器化的 SEO/性能/安全/技术/内容/可访问性全量规则。已用等效静态分析 + Vercel/Playwright 规范走查替代，但覆盖度低于 squirrelscan 全量。
2. **浏览器实时爬取未能执行**：沙箱内 headless Chromium 与 `bsk doctor` 均挂起/超时，无法做运行时控制台错误、实际渲染、交互可用性真实检查。建议浏览器工具恢复后重跑。

---

## 二、总体健康度（已用构建产物验证）

| 指标 | 结果 | 说明 |
|------|------|------|
| 站内失效链接 | **0** | 构建 0 Broken link 已验证 |
| 图片 alt 缺失 | **0**（仅 2 张图） | 均已有 alt |
| 重复 H1 | **0（误报已排除）** | Docusaurus 自动降级多余 `#` 为 H2，每页恰 1 个 H1（见第四节） |
| 明文 `http://` 外链 | 9 个唯一 / 17 处 | 多为厂商主页与存档新闻，低优先级 |
| i18n 未翻译文档 | **80 篇（约 22%）** | 高优先级短板 |
| JS 构建产物 | **697 chunk / 14.2 MB** | 性能优化空间 |
| 核心交互组件 a11y | TCO、留资高质量 | 标杆实现 |

---

## 三、分板块结论（仅列"应改善/优化项"）

### 1. 导航与菜单（navbar / footer）
- navbar 6 个一级项（AI 算力卡 docSidebar / 对比表 / 路线图 / 芯片架构 dropdown×11 / 行业动态 dropdown×7 / TCO 计算器）+ localeDropdown，结构清晰；footer 4 列（按类型 8 / 按厂商 7 / 按芯片架构 5 / 资源 3），链接完整。
- **【优化】** 建议补充站点地图页或 `sitemap.xml` 的 SEO 元数据校验（squirrelscan 恢复后验证；`build/sitemap.xml` 已存在，可进一步核对收录覆盖）。

### 2. 首页（`src/pages/index.tsx`）
- SearchBox 已实现 ARIA combobox（`role`/`aria-activedescendant`/`aria-controls`）、动态 `import('fuse.js')`、200ms 防抖 —— 质量好。
- NewsSection 有 skeleton 与语义化 `<time>` —— 好。
- **【a11y·待改善】** 热门芯片区（HotChipsSection）使用 `<ul>`+grid 而非语义化 `<table>`，屏幕阅读器无法以表格语义呈现列关系。建议改 `<table>` 或显式加 `role`/结构标注。
- **【性能·待改善】** 搜索框 Enter 提交使用 `window.location.href = ...` 整页刷新，建议改用 Docusaurus `navigate()` 做 SPA 跳转，减少白屏。
- 首页热门数值与 `chips.json` 对齐（FP16=稀疏口径），未披露显示「未披露」 —— 已符合规范。

### 3. 侧边栏与文档（MD 卡片）
- 侧边栏需手动枚举新卡（历史曾漏 36 张）；当前已无遗漏（comm 校验通过）。沐曦卡片在 `others/`，注意 grep 脚本勿误杀。
- **【规范·待改善】** 43 篇文档在正文中使用了 ≥2 个 `#` 一级标题（如 `docs/asic/aws-trainium.mdx` 有 7 个）。虽然 Docusaurus 会降级处理（见第四节，不造成重复 H1），但**一级标题语义被降级为 H2 会打乱文档大纲层级**，建议将正文内多余的 `#` 改为 `##`，让文档大纲更规范。

### 4. i18n 国际化（高优先级）
- **【高·待改善】** **80/366 篇文档未翻译（约 22%）**：卡片 75 篇缺失（158/233 已译）、非卡片 5 篇缺失（128/133 已译）。未译页面在 `/en/` 下回退中文原文，导致英文站体验不一致。
- **【高·待改善】** **TCO 计算器整体仅中文**（`src/components/TcoCalculator.tsx`）：en 用户无法使用，建议补充 en 文案或在 en 下隐藏/提示。
- 博客 tags 已统一英文词表，en 从 zh 继承 —— 已符合。

### 5. 对比表与工具（`src/pages/compare.tsx`）
- 4 卡对比已用语义化 `<table>` —— 好。
- **【a11y·待改善】** `<label>` 未通过 `htmlFor` 关联 `<select>`，建议显式关联。
- **【a11y·待改善】** 清除按钮 `✕` 仅 `title` 无 `aria-label`，屏幕阅读器无法识别，建议加 `aria-label`。
- **【可用性·待改善】** 对比选择未写入 URL，不可深链/分享，建议用 query param 持久化选择。
- **【规范·待改善】** 加载态文案用 `...` 而非 `…`，建议规范为 `…`。

### 6. TCO 计算器与留资（`TcoCalculator.tsx` / `LeadCapture.tsx`）
- TcoCalculator a11y 高质量：自定义 combobox 完整 ARIA、图表 `role="img"`+aria-label、range `aria-valuetext`、`th scope`、`role="alert"`/`aria-live` —— 标杆实现。唯一短板：整体中文（见 i18n）。
- LeadCapture 邮箱表单 a11y 扎实（`type="email"`、`aria-invalid`、`aria-describedby`、关联 `label`、`noValidate`+自定义校验+内联错误、`aria-live`）—— 好。模块级 `chipsCache/pricingCache` 函数结果缓存符合性能规则。

### 7. 构建与性能
- **【性能·优化】** 构建产物 **697 个 JS chunk、约 14.2 MB**。建议评估：路由级懒加载是否充分、是否有超大依赖未拆、首屏关键 chunk 是否可做预取/压缩；首页已动态 import fuse.js（好），可继续审视其他重依赖。
- 按 `vercel-react-best-practices`：已较好践行代码分割；建议补充长列表虚拟化（热门芯片若扩展可考虑）、关键第三方资源 `defer`/按需。

### 8. 内容规范
- **【规范·低优先级】** 9 个唯一明文 `http://` 外链（17 处），多为厂商主页与存档新闻（如 `http://www.tsingmicro.com/`、`http://www.iluvatar.com/`、`http://innosilicon.com.cn/gpu/fenghua1` 等）。建议逐条核实 https 可用性并升级，避免混合内容与 SEO 扣分。
- 数值口径一致性（MDX 禁手写估算、按 `chips.json`/`pricing.json` 复算）已符合；首页 8 列 grid 溢出已修复（历史 7ca418e→cc30549）。

---

## 四、已排除的"伪问题"（重要，避免误改）

- **重复 H1（"43 篇"）—— 双重误报，已完全排除，文档无需任何修改。**
  - 实测 `build/docs/cards/nvidia/h100/index.html`：仅 **1 个 H1**；frontmatter `title` 仅作 `<title>`/侧边栏，不重复渲染。
  - 实测 `build/docs/asic/aws-trainium/index.html`：产物仅 **1 个 H1**——Docusaurus 保证每页恰 1 个 H1。
  - **"43 篇"数字本身也是误报**：初版扫描脚本未跳过代码围栏，把 bash/python 注释（`# 1. 启动实例` 等）误计为一级标题。跳过围栏后真实"多 H1"文档为 **0 篇**。
  - 结论：**不要**为"修复重复 H1"做任何批量改动。

---

## 五、按优先级排序的改善清单

**P0（高影响）**
1. ~~翻译/处理 80 篇未译文档~~ ✅ 已修复（见第七节）
2. ~~TCO 计算器 en 适配~~ ✅ 已修复（见第七节）

**P1（中影响）**
3. ~~首页热门区 ARIA~~ ✅ 已修复
4. ~~搜索 Enter 改用 SPA 跳转~~ ✅ 已修复
5. ~~`compare.tsx` 四项~~ ✅ 已修复
6. ~~43 篇多余 `#`~~ ✗ 已证伪，无需修复（见第四节）

**P2（优化项）**
7. ~~`http://` → `https://`~~ ✅ 部分完成（3 个域名实测 200 已升级；其余 6 条 https 不可用，保留）
8. 构建体积审视（697 chunk / 14.2 MB）✅ 分析完成，建议保留（见第七节）
9. 补 sitemap / SEO 元数据全量校验（squirrelscan 恢复后）
10. 运行时控制台错误与交互可用性真实检查（浏览器工具恢复后）

---

## 六、建议后续动作
- 沙箱浏览器恢复后，重跑 `bsk`/headless 实时爬取，补充运行时与控制台结论；
- `squirrel` CLI 可用后，跑一次 squirrelscan 全量规则（SEO/性能/安全/技术/内容/可访问性 15+ 项）；
- 上述 P0/P1 项可作为下一轮"审查—修复"流水线的输入。
