# TCO 计算器代码审查报告

**审查时间**：2026-06-13
**审查范围**：未提交到 GitHub 的所有变更
**变更文件**：9 个（4 个核心 + 2 个数据文件 + 3 个脚本 + 1 个分析报告）

---

## 📊 变更概览

| 文件 | 状态 | 行数变化 | 主要内容 |
|------|------|----------|----------|
| `docs/tco-calculator.mdx` | 新建+修改 | +152 | TCO 计算器页面 |
| `src/components/TcoCalculator.tsx` | 新建+重写 | +605 | React 组件（重写） |
| `src/css/tco-calculator.css` | 新建后删除 | 0 | 已删除（已合并到组件） |
| `static/pricing.json` | 新建+扩展 | +761 | 140 款芯片定价 |
| `static/chips.json` | 自动生成 | +99 | 自动从 MD 提取，补充 TDP |
| `docusaurus.config.ts` | 修改 | +2 | 添加 TCO 计算器菜单 |
| `website-analysis-report-2026-06-12.md` | 新建 | - | 网站分析报告 |
| `scripts/update_pricing.py` | 新建（未跟踪） | - | 定价补全脚本 |
| `scripts/update_tdp.py` | 新建（未跟踪） | - | TDP 补全脚本 |
| `scripts/fix_tdp_v2.py` | 新建（未跟踪） | - | TDP 修复脚本 |

---

## 🐛 发现的问题

### 🔴 P0 - 严重问题（需要立即修复）

#### 1. `chips.json` 不应手动编辑（数据一致性风险）
- **问题**：`static/chips.json` 是由 `scripts/generate-data.mjs` 自动从 MD 文件生成的，但 TDP 补充是直接修改 JSON
- **风险**：下次 `npm run prestart` 会重新生成 JSON，手动添加的 TDP 数据会被覆盖丢失
- **影响**：所有 TDP 修复**会丢失**！
- **位置**：`scripts/generate-data.mjs` 第 173 行
- **修复方案**：
  1. 将 TDP 修复改回 MD 文件（`docs/cards/**/<chip>.md`）
  2. 或者在 `generate-data.mjs` 中添加 TDP 兜底映射
  3. 立即将所有手动 TDP 同步到 MD 文件

#### 2. TDP 字段存在非数值字符串（解析会出错）
- **问题**：部分芯片 TDP 是非数字字符串，如 `Cancelled`、`~1,000 W（液冷必需）`、`< 1.5 W`、`约 150 W`、`~500–600W`（使用 en-dash）
- **影响**：
  - `Cancelled` → 解析为 0（可能是无害的）
  - `~500–600W` → en-dash（–）在 `parseTdp` 中会被忽略，但显示会变成 `500–600W`
  - `约 150 W` → 正常解析为 150
- **位置**：`src/components/TcoCalculator.tsx` 第 36 行 `parseTdp` 函数
- **修复方案**：
  1. 在 `parseTdp` 中使用 `/[\d,]+/g` 改为提取所有数字并取最大
  2. 或者在 `generate-data.mjs` 提取阶段清理 TDP 字符串

#### 3. `src/css/tco-calculator.css` 文件删除未提交
- **问题**：CSS 文件被删除，但因之前已 `git add`，文件状态仍显示为 `new file`
- **影响**：如直接 `git commit`，可能会留下已删除的空文件状态
- **修复方案**：在提交前执行 `git add -u` 同步删除

---

### 🟡 P1 - 重要问题（建议修复）

#### 4. 多个脚本未跟踪（`scripts/*.py`）
- **问题**：`scripts/update_pricing.py`、`scripts/update_tdp.py`、`scripts/fix_tdp_v2.py` 都是数据补全脚本，但都未跟踪到 Git
- **风险**：脚本中的定价数据是手动编写的，没有来源标注，未来无法验证
- **建议**：
  1. 不要将一次性脚本提交（已经过时）
  2. 但应在 `scripts/` 添加正式的 `backfill_tdp.py` 工具，用于将来数据维护

#### 5. `ZH_NAMES` 映射表维护成本高
- **问题**：硬编码 100+ 芯片的中文名映射，如果 chips.json 改名/新增芯片，需要手动维护
- **位置**：`src/components/TcoCalculator.tsx` 第 36-92 行
- **建议**：
  1. 移到 `src/data/zh-names.json` 独立文件
  2. 或者从 `chips.json` 的 `title` 字段直接提取（已经存在），但需要统一中英文

#### 6. TCO 组件中 `pricing` 状态变量有未使用字段
- **问题**：`PricingInfo` 接口有 `currency`、`last_updated` 字段，但代码中从未使用
- **影响**：增加 TypeScript 类型噪音
- **位置**：`src/components/TcoCalculator.tsx` 第 4 行
- **建议**：移除未使用字段或真正使用

#### 7. `wse-2/wse-3/sambanova-sn40l` 整机架系统 TDP 异常
- **问题**：`wse-2: 3,000,000W`、`wse-3: 5,000,000W`、`sambanova-sn40l: 200,000W` 是整机架功耗而非单卡
- **影响**：TCO 计算会算成天文数字
- **位置**：`scripts/fix_tdp_v2.py`
- **建议**：
  1. 在 UI 中标注"整机系统"并禁用 TCO 计算
  2. 或用 0 标记为不可计算

#### 8. `Apple M 系列` 节点 ID 重复
- **问题**：`ZH_NAMES` 中 `apple-m-series` 是占位，但 `apple-m1-pro` 等具体 ID 也存在，可能两者同时显示
- **建议**：删除 `apple-m-series` 占位（如果实际没有这个 ID 的卡片）

---

### 🟢 P2 - 小问题（可选优化）

#### 9. `docusaurus.config.ts` 菜单顺序可能与文档不同步
- **位置**：`docusaurus.config.ts` 第 304-307 行
- **问题**：手动指定了 `{to: '/docs/roadmap', label: '路线图'}`，但 `sidebars.ts` 中的位置可能不一致
- **建议**：验证 sidebar_position 与菜单顺序一致

#### 10. `tco-calculator.mdx` 重复说明问题
- **问题**：页面有"什么是 TCO"说明，但组件内部有"关键洞察"区域，可能内容重复
- **位置**：`docs/tco-calculator.mdx` 第 14-24 行（已删除）
- **现状**：已删除
- **建议**：保留现状

#### 11. 定价数据来源不可追溯
- **问题**：`pricing.json` 中的 `source` 字段只有简短的"AMD 官方指导价"，没有具体链接
- **建议**：对于未官方发布的芯片（如 `rubin`、`groq-3-lpx`），应使用"预测价格"并明确标注

#### 12. `AnimatedMoney` 组件 `big` prop 未使用
- **问题**：`AnimatedMoney` 接受 `big?: boolean` 参数但未使用
- **位置**：`src/components/TcoCalculator.tsx` 第 165 行
- **建议**：删除未使用的 prop

#### 13. `docusaurus.config.ts` 变更 diff 不一致
- **问题**：diff 显示先添加 `{to: '/docs/roadmap', label: '路线图'}`，再删除（修复重复）
- **位置**：`docusaurus.config.ts`
- **现状**：已修复
- **建议**：提交前用 `git add -p` 整理成干净的 diff

---

## 🛠️ 必须修复的清单

按优先级：

### 1. 【紧急】同步 TDP 修复到 MD 源文件
- **原因**：`chips.json` 是自动生成的，下次构建会覆盖
- **方法**：编写一个反向同步脚本，从 `chips.json` 提取 TDP 写回 MD 文件 frontmatter 或规格表

### 2. 【紧急】修复 `parseTdp` 处理非数字字符串
- **原因**：en-dash、空格、`<` 等字符可能影响 TCO 计算
- **方法**：使用更鲁棒的正则 `/(\d+(?:[,.]\d+)*)/g`，取最大值

### 3. 【高优】添加 `git add -u` 同步删除
- **方法**：在提交前执行 `git add -u`

### 4. 【高优】清理 TCO 组件未使用字段
- **方法**：删除 `currency`、`last_updated`、未使用 `big` prop

### 5. 【中优】为整机系统芯片加 UI 提示
- **方法**：当 TDP > 50000W 时显示"整机系统"警告

---

## ✅ 好的地方

- ✅ `chips.json` 自动生成机制完善（`generate-data.mjs`）
- ✅ React 组件使用 hooks 规范（useState、useEffect、useMemo、useRef）
- ✅ 数字滚动动画使用 `requestAnimationFrame` 而非 `setInterval`，性能好
- ✅ CSV 导出使用 UTF-8 BOM，Excel 中文兼容
- ✅ 中文/英文名称统一映射，提升国际化体验
- ✅ 定价数据有 `source` 字段标注，可追溯
- ✅ 拓扑：组件、CSS、页面、菜单、数据各司其职

---

## 📝 建议的提交策略

1. **第一个 commit**：数据修复（独立）
   - `static/pricing.json` - 定价补全
   - `static/chips.json` - TDP 补全
   - `scripts/fix_tdp_v2.py` - 工具脚本

2. **第二个 commit**：TCO 功能（独立）
   - `docs/tco-calculator.mdx`
   - `src/components/TcoCalculator.tsx`
   - `docusaurus.config.ts`

3. **第三个 commit**：删除无用文件
   - `src/css/tco-calculator.css`（删除）

这样回滚任何一个功能都很容易。
