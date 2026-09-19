import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

/**
 * TCO 计算器 / 留资组件 中英文字典。
 *
 * `ZH` 是唯一事实源；`EN: typeof ZH` 由 tsc 强制 key 对齐（新增/改名 ZH 条目时
 * 漏改 EN 会直接编译失败）。参数化文案用函数 value，签名同样被 typeof 对齐。
 *
 * 使用方式：组件内 `const t = useTcoT();`，内部按
 * `useDocusaurusContext().i18n.currentLocale === 'en'` 返回 EN 或 ZH，
 * 与 src/pages/index.tsx 的 locale 判定模式保持一致。
 */

// ===== 中文（唯一事实源）=====

const ZH = {
  /** 当前语言（'zh' | 'en'），供 displayName 等逻辑分支用 */
  lang: 'zh' as 'zh' | 'en',

  /** 厂商显示名（含分组徽标 emoji），key 为 vendor/group id */
  vendors: {
    nvidia: '🟢 NVIDIA', amd: '🔴 AMD', intel: '🔵 Intel', huawei: '🔴 华为海思',
    google: '🟡 Google', aws: '🟠 AWS', cerebras: '🟣 Cerebras', meta: '🔵 Meta',
    microsoft: '🔵 Microsoft', apple: '⚫ Apple', qualcomm: '🔵 Qualcomm',
    mediatek: '🟢 MediaTek', others: '🟤 其他厂商',
    cambricon: '🟠 寒武纪', baidu: '🟠 昆仑芯', iluvatar: '🟠 天数智芯',
    enflame: '🟠 燧原', metax: '🟠 沐曦',
    'moore-threads': '🟠 摩尔线程', biren: '🟠 壁仞', alibaba: '🟠 阿里平头哥',
    hygon: '🟠 海光', horizon: '🟠 地平线', sophgo: '🟠 算能', tesla: '⚫ Tesla',
  } as Record<string, string>,

  /** EN 侧芯片名覆盖表（仅覆盖含中文的条目；ZH 侧为空，芯片名见 TcoCalculator.ZH_NAMES） */
  chipNames: {} as Record<string, string>,

  /** 成本分段（饼图 / 柱图 / 成本行 / CSV / 对比柱状图共用） */
  segments: {
    procurement: { label: '采购（卡）', short: '采购' },
    server: { label: '服务器节点', short: '服务器' },
    network: { label: '网络设备', short: '网络' },
    electricity: { label: '电费', short: '电费' },
    dc: { label: '租金', short: '租金' },
    cooling: { label: '冷却', short: '冷却' },
    ops: { label: '人力 OPEX', short: '人力' },
  },

  /** 成本行 / CSV 里的金额性质后缀 */
  costSuffix: {
    card: '（卡）',
    oneTime: '（一次性）',
    discounted: '（折现）',
  },

  select: {
    triggerAria: '选择芯片',
    placeholder: '— 请选择芯片 —',
    searchPlaceholder: '🔍 搜索芯片名称或厂商…',
    searchAria: '搜索芯片',
    listAria: '芯片列表',
    noMatch: '未找到匹配的芯片',
    footer: (n: number) => `共 ${n} 款芯片 · ↑↓ 导航 · Enter 确认 · Esc 关闭`,
  },

  pie: {
    total: '总计',
    noData: '暂无数据',
    aria: (n: number, total: string) => `成本构成饼图，共 ${n} 项，总计 ${total}`,
    title: '成本构成饼图',
    legendAria: '成本图例',
  },

  bars: {
    yearCum: (y: number, v: string) => `第 ${y} 年累计 TCO: ${v}`,
    oneTimeNote: (v: string) => `（含一次性支出 ${v}）`,
    hoverHint: '悬停/聚焦查看各年累计 TCO',
    aria: (n: number) => `TCO 累计随年限变化柱状图，共 ${n} 年`,
    yearTotalAria: (y: number, v: string) => `第 ${y} 年总计 ${v}`,
    yearAxis: (y: number) => `${y}年`,
  },

  compareChart: {
    title: (stack: string) => `对比柱状图（堆叠：${stack}）`,
    aria: (n: number) => `${n} 款芯片 TCO 对比柱状图`,
    itemAria: (name: string, mode: string, tco: string, detail: string) =>
      `${name}（${mode}）TCO ${tco}，${detail}`,
    modeCluster: '集群',
    modeNode: '单节点',
  },

  sensitivity: {
    title: '🔬 敏感性分析（单因素情景，TCO 相对当前值的变化）',
    /** 与 tco-model.sensitivityScenarios 的固定顺序一一对应 */
    scenarios: ['电价 +20%', '使用率 +20%', '使用年限 +1 年', 'PUE → 1.5', '空闲比率 → 30%'],
  },

  csv: {
    reportTitle: 'AI 算力卡 TCO 计算报告',
    generatedAt: '生成时间',
    paramsSection: '【参数】',
    chip: '芯片',
    tdp: 'TDP (W)',
    qty: '数量',
    mode: '部署模式',
    modeCluster: '集群（含服务器 / 网络 / 人力 OPEX）',
    modeNode: '单节点 / 裸卡',
    usage: '使用率',
    elecPrice: '电价 ($/kWh)',
    years: '使用年限',
    dcRent: '单卡年租金 ($)',
    idleRatio: '空闲功耗比率',
    pue: 'PUE',
    discountRate: '折现率',
    unitPrice: '单卡价格 ($)',
    originalPrice: '原始价格',
    fxLabel: '汇率',
    fxRate: (rate: string) => `1 USD = ${rate} CNY`,
    priceSource: '价格来源',
    sourceManual: '用户手动输入',
    sourceDb: 'pricing.json',
    detailSection: '【成本明细（已折现）】',
    item: '项目',
    amount: '金额 ($)',
    share: '占比',
    totalCluster: '集群 TCO 总计',
    total: 'TCO 总计',
    annual: '年均 TCO',
    perCardAnnual: '每卡年均',
    fp16: 'FP16 算力 (TFLOPS)',
    perTflops: '每 TFLOPS 年均 TCO ($)',
    compareSection: '【多芯片对比】',
    colChip: '芯片',
    colMode: '部署模式',
    colQty: '数量',
    colTco: 'TCO ($)',
    colPerTflops: '每 TFLOPS 年均 TCO',
    compareModeCluster: '集群',
    compareModeNode: '单节点',
    fileName: (id: string, qty: number, years: number, isCluster: boolean, date: string) =>
      `TCO_${id}_${qty}卡_${years}年_${isCluster ? '集群' : '单节点'}_${date}.csv`,
  },

  /** 留资报告里的个性化上下文段（getTcoContext 输出） */
  context: {
    chip: (name: string, vendor: string) => `- 芯片：${name}（${vendor}）`,
    qty: (n: number) => `- 数量：${n} 卡`,
    mode: (isCluster: boolean): string =>
      isCluster ? '- 部署模式：集群（含服务器 / 网络 / 人力）' : '- 部署模式：单节点 / 裸卡',
    params: (usage: string, price: string, years: number) =>
      `- 使用率：${usage}% · 电价：$${price}/kWh · 年限：${years} 年`,
    unitPrice: (v: string) => `- 单价：$${v}`,
    totalTco: (years: number, v: string) => `- ${years} 年 TCO：$${v}`,
    perTflops: (v: string) => `- 每 TFLOPS 年成本：$${v}`,
    compareList: '**对比列表**',
    compareItem: (name: string, qty: number, v: string) => `- ${name} × ${qty}：TCO $${v}`,
  },

  toast: {
    needChip: '⚠️ 请先选择芯片并填写价格',
    noTdp: '⚠️ 此芯片缺少单卡 TDP，无法估算电费，暂不支持加入对比',
    added: (name: string, mode: string) => `✓ 已将 ${name}（${mode}）加入对比`,
    modeCluster: '集群',
    modeNode: '单节点',
  },

  params: {
    title: '⚙️ 参数设置',
    modeAria: '部署模式',
    modeNode: '单节点 / 裸卡',
    modeCluster: '集群级（含服务器 / 网络 / 人力）',
    selectLabel: '选择芯片',
    selectHint: '支持搜索 · 按厂商分组 · 键盘 ↑↓ Enter',
    loading: '正在加载芯片数据…',
    warningSystemTitle: '整机系统',
    warningSystemBody: (tdp: string) => `：此芯片 TDP 为 ${tdp}，是整套机柜功耗而非单卡。TCO 计算结果不适用。`,
    warningNoTdpTitle: '缺少单卡 TDP',
    warningNoTdpBody: '：此卡片未提供单卡功耗（如整机超级节点），无法估算电费与冷却成本，TCO 仅含采购与租金。',
    msrpLabel: (v: string) => `指导价 ${v}`,
    currencyToggleTitleToUSD: '当前显示数据库原始人民币价；点击切换为统一美元价（TCO 始终以美元计价）',
    currencyToggleTitleToCNY: '当前显示统一美元价；点击切换为数据库原始人民币价（TCO 始终以美元计价）',
    showUSD: '显示 $ 统一价',
    showOriginal: '显示 ¥ 原币价',
    noPrice: '暂无定价信息 — 请手动输入预估价格',
    manualLabel: '手动价格 ($):',
    manualPlaceholder: '输入预估价格',
    manualAria: '手动输入单卡价格（美元）',
    resetTitle: '清除手动价格，恢复数据库价格',
    resetBtn: '↺ 恢复',
    manualNote: (v: string) => `✓ 已使用您手动输入的价格（${v}），结果将标注为「用户估算」`,
    qtyLabel: '数量（张）',
    qtyDecAria: '减少数量',
    qtyAria: '芯片数量',
    qtyIncAria: '增加数量',
    qtyPresetSingle: '单卡',
    qtyPreset: (v: number) => `${v}卡`,
    usageLabel: '数据中心使用率',
    percentAria: (v: string) => `${v} 百分比`,
    serverLabel: '服务器节点价（$/8 卡）',
    serverHint: 'CPU / 主板 / 内存 / 存储',
    netrLabel: '网络设备占比',
    opsLabel: '人力 OPEX（$/千卡/年）',
    opsHint: 'SRE / 机房运维',
    elecLabel: '电价（$/kWh）',
    elecPresets: ['中国 $0.08', '美国 $0.12', '欧洲 $0.20', '中东 $0.04'],
    yearsLabel: '使用年限（年）',
    yearsValue: (y: number) => `${y} 年`,
    yearsScale: ['1年', '4年', '8年'],
    advancedTitle: '⚙️ 高级参数（空闲功耗 / PUE / 折现）',
    idleLabel: '空闲功耗比率',
    idleHint: 'GPU 空闲时约占 TDP 的比例',
    puePresets: ['极致 1.05', '液冷 1.10', '风冷 1.30', '普通 1.50'],
    dcLabel: '单卡年租金（$/年）',
    dcHint: '含机柜/网络/维护',
    discountLabel: '折现率',
    discountHint: '未来现金流折现到当前（年化）',
  },

  results: {
    title: '📊 TCO 计算结果',
    resultChip: (name: string, qty: number, years: number, discounted: boolean) =>
      `${name} × ${qty}，${years} 年${discounted ? '（已折现）' : ''}`,
    emptySelectTitle: '请在上方选择一款芯片开始计算',
    emptySelectSub: (n: number) => `支持 ${n} 款 AI 算力卡`,
    emptyPriceTitle: '该芯片暂无定价信息',
    emptyPriceSub: '请在上方「手动价格」输入框填写预估价格',
    header: (years: number, isCluster: boolean, discounted: boolean) =>
      `${years} 年${isCluster ? '集群' : ''} TCO 总计${discounted ? '（折现）' : ''}`,
    headerClusterHint: '（含服务器 / 网络 / 人力）',
    annual: '年均',
    perCardAnnual: '每卡年均',
    perTflops: (v: string) => `每 TFLOPS 年均 TCO ${v}`,
    costRowProcurement: '采购成本',
    chartCostTitle: '成本构成',
    chartCostHint: '(hover/聚焦查看)',
    chartBarTitle: 'TCO 累计随年限',
    chartBarHint: '(累计·已折现)',
  },

  insights: {
    title: '💡 关键洞察',
    procVsElec: '采购 vs 电费：',
    procDominant: '采购成本占主导，关注性能性价比',
    elecDominant: '电费超过采购成本！建议选择能效更高的芯片',
    perWatt: '每瓦 TCO（全周期）：',
    annualElec: '年电费（未折现）：',
    annualElecValue: (v: string, pue: string) => ` ${v} / 年（设备电；PUE=${pue} 下冷却另计）`,
    perTflops: '每 TFLOPS 年均 TCO：',
    perTflopsValue: (v: string, fp16: number) => ` ${v} / TFLOPS·年（按 FP16 算力 ${fp16} TFLOPS 归一化）`,
    bvr: 'Build vs Rent：',
    bvrGood: (usage: string, breakeven: string) =>
      `当前利用率 ${usage}% 已高于平衡点 ${breakeven}%，自建更划算`,
    bvrBad: (usage: string, breakeven: string) =>
      `当前利用率 ${usage}% 低于平衡点 ${breakeven}%，租赁更划算`,
  },

  actions: {
    addToCompare: '➕ 加入对比',
    csvTitle: '导出当前计算结果为 CSV（含部署模式、汇率与原币种）',
    csvBtn: '📥 导出 CSV',
  },

  bvr: {
    title: '⚖️ 自建 vs 云租赁（Build vs Rent）',
    emptyPriceTitle: '该芯片暂无定价信息',
    emptyPriceSub: '请先在上方「手动价格」输入框填写预估价格，再对比自建与云租赁成本',
    cloudLabel: '云 GPU 租赁价（$/GPU/hr）',
    nowPrefix: (usage: string) => `当前 ${usage}% 利用率：自建 `,
    vsCloud: ' vs 云 ',
    saveAnnually: (v: string) => ` · 自建每年省 ${v}`,
    wasteAnnually: (v: string) => ` · 自建每年多花 ${v}`,
    breakevenLabel: '盈亏平衡利用率',
    breakevenHint: (be: string) => `利用率持续高于 ${be}% 时，自建比租云更划算`,
    alwaysRent: (floor: string) => `云价 ≤ 自建固定成本下限（${floor}/hr），租赁始终更优`,
    caption: (qty: number, mode: string) => `不同利用率下自建与云租赁的每小时成本对比（${qty} 卡${mode}）`,
    modeCluster: '集群',
    modeNode: '单节点',
    thUsage: '利用率',
    thOwn: '自建 $/GPU/hr',
    thCloud: (cloud: string) => `对比云 ${cloud}`,
    thDelta: (qty: number) => `年化差额（${qty} 卡）`,
    cheaper: '省 $',
    pricier: '贵 $',
  },

  compare: {
    title: '📊 多芯片 TCO 对比',
    hint: (discounted: boolean) => `(最多 4 款${discounted ? '·已折现' : ''})`,
    mixedModes: '⚠️ 含不同部署模式的条目，金额不可直接横向比较',
    clearAll: '清空全部',
    removeTitle: '删除此对比项',
    removeAria: '删除对比项',
    modeCluster: '集群',
    modeNode: '单节点',
    perTflops: (v: string) => `${v} / TFLOPS·年`,
  },

  lead: {
    // ---- 界面 ----
    uiTitle: '免费领取你的选型报告',
    uiDesc: '留下邮箱，立即下载围绕你当前选型生成的报告（Markdown）：所选芯片完整规格与定价、同档替代方案。报告在浏览器本地生成。',
    emailLabel: '邮箱地址',
    generating: '生成中…',
    downloadBtn: '下载报告',
    errorHint: '邮箱格式有误，或数据加载失败，请重试。',
    okHint: '无需注册 · 数据 CC BY 4.0 · 报告本地生成',
    doneTitle: '报告已开始下载',
    doneText: '含你的选型方案、焦点芯片完整规格与定价、同档替代方案。报告已在浏览器本地生成，可直接留存。',
    // ---- Markdown 报告 ----
    reportTitle: '# MirrorFrog AI 算力卡选型报告',
    reportMeta: (date: string, source: string) =>
      `> 生成日期：${date} · 来源：${source} · 数据：mirrorfrog.com（CC BY 4.0）`,
    sourceTco: 'TCO 计算器',
    sourceCompare: '芯片对比页',
    yourSelection: '## 你的选型方案',
    focusSection: '## 焦点芯片规格与定价',
    specHeader: '| 规格 | 值 |',
    refPrice: (v: string) => `| 参考定价 | ${v} |`,
    detailPage: (url: string) => `| 详情页 | ${url} |`,
    altsSubtitle: (byFp16: boolean, n: number): string =>
      byFp16 ? `FP16 算力最接近 ${n} 款` : `TDP 功耗最接近 ${n} 款`,
    altsTitle: (sub: string) => `### 同档替代方案（${sub}）`,
    altHeader: '| 型号 | 厂商 | FP16 (TFLOPS) | TDP (W) | 参考定价 |',
    fullSection: '## 全量芯片规格摘要',
    dbSection: (chips: number, vendors: number) => `## 完整数据（${chips} 款 · ${vendors} 厂商）`,
    browseOnline: '- 在线浏览：https://www.mirrorfrog.com/docs/intro',
    dataset: '- 机器可读数据集：https://www.mirrorfrog.com/chips.json（CC BY 4.0，引用请注明来源 MirrorFrog）',
    naPrice: '未公开',
    priceWithCurrency: (amount: string, currency: string) => `${amount}（${currency}）`,
    msrpSuffix: (price: string) => `，MSRP ${price}`,
    /** 规格标签映射（扁平 spec key → 显示名） */
    specLabels: {
      'architecture': '架构', 'process': '制程', 'memory.type': '显存类型',
      'memory.capacity': '显存容量', 'memory.bandwidth': '显存带宽',
      'compute.fp4': 'FP4 算力', 'compute.fp8': 'FP8 算力', 'compute.fp16': 'FP16 算力', 'compute.fp32': 'FP32 算力',
      'compute.fp64': 'FP64 算力', 'compute.int8': 'INT8 算力', 'tdp': 'TDP 功耗', 'release': '发布时间',
      'interface': '接口', 'price': '首发价格', 'tdpW': 'TDP（数值 W）',
    } as Record<string, string>,
  },
};

export type TcoT = typeof ZH;

// ===== 英文 =====

const EN: typeof ZH = {
  lang: 'en',

  vendors: {
    nvidia: '🟢 NVIDIA', amd: '🔴 AMD', intel: '🔵 Intel', huawei: '🔴 HiSilicon (Huawei)',
    google: '🟡 Google', aws: '🟠 AWS', cerebras: '🟣 Cerebras', meta: '🔵 Meta',
    microsoft: '🔵 Microsoft', apple: '⚫ Apple', qualcomm: '🔵 Qualcomm',
    mediatek: '🟢 MediaTek', others: '🟤 Other vendors',
    cambricon: '🟠 Cambricon', baidu: '🟠 Baidu Kunlun', iluvatar: '🟠 Iluvatar CoreX',
    enflame: '🟠 Enflame', metax: '🟠 MetaX',
    'moore-threads': '🟠 Moore Threads', biren: '🟠 Biren', alibaba: '🟠 Alibaba T-Head',
    hygon: '🟠 Hygon', horizon: '🟠 Horizon Robotics', sophgo: '🟠 Sophgo', tesla: '⚫ Tesla',
  },

  chipNames: {
    'flex-series': 'Intel Flex Series',
    'ascend-910b': 'Huawei Ascend 910B', 'ascend-910c': 'Huawei Ascend 910C', 'ascend-910d': 'Huawei Ascend 910D',
    'ascend-920': 'Huawei Ascend 920', 'ascend-950': 'Huawei Ascend 950',
    'ascend-950dt': 'Huawei Ascend 950DT', 'ascend-950pr': 'Huawei Ascend 950PR',
    'biren-br104': 'Biren BR104',
    'cambricon-mlu-590': 'Cambricon MLU590', 'cambricon-mlu-370': 'Cambricon MLU370', 'cambricon-mlu-690': 'Cambricon MLU690',
    'kunlun-m100': 'Baidu Kunlun M100', 'kunlun-m300': 'Baidu Kunlun M300', 'kunlun-p800': 'Baidu Kunlun P800',
    'metax-c600': 'MetaX C600', 'hygon-dcu-k100': 'Hygon DCU K100',
    'moore-threads-mtt-s5000': 'Moore Threads MTT S5000',
    'enflame-t20': 'Enflame T20',
    'qualcomm-ai-100': 'Qualcomm AI 100', 'qualcomm-ai200': 'Qualcomm AI200', 'qualcomm-ai250': 'Qualcomm AI250',
    'qualcomm-snapdragon-x-elite': 'Qualcomm Snapdragon X Elite',
    'alibaba-hanguang-800': 'Alibaba Hanguang 800', 'alibaba-ppu': 'Alibaba PPU',
    'mediatek-dimensity-9400': 'MediaTek Dimensity 9400',
    'lightelligence': 'Lightelligence',
    'hbm-pim': 'SK hynix HBM-PIM',
  },

  segments: {
    procurement: { label: 'Procurement (cards)', short: 'Procurement' },
    server: { label: 'Server nodes', short: 'Servers' },
    network: { label: 'Networking', short: 'Network' },
    electricity: { label: 'Electricity', short: 'Power' },
    dc: { label: 'Facility rent', short: 'Rent' },
    cooling: { label: 'Cooling', short: 'Cooling' },
    ops: { label: 'Ops OPEX', short: 'Ops' },
  },

  costSuffix: {
    card: ' (cards)',
    oneTime: ' (one-time)',
    discounted: ' (discounted)',
  },

  select: {
    triggerAria: 'Select a chip',
    placeholder: '— Select a chip —',
    searchPlaceholder: '🔍 Search chips or vendors…',
    searchAria: 'Search chips',
    listAria: 'Chip list',
    noMatch: 'No matching chips',
    footer: (n: number) => `${n} chips · ↑↓ navigate · Enter select · Esc close`,
  },

  pie: {
    total: 'Total',
    noData: 'No data',
    aria: (n: number, total: string) => `Cost breakdown pie chart, ${n} items, total ${total}`,
    title: 'Cost breakdown pie chart',
    legendAria: 'Cost legend',
  },

  bars: {
    yearCum: (y: number, v: string) => `Year ${y} cumulative TCO: ${v}`,
    oneTimeNote: (v: string) => ` (incl. ${v} one-time spend)`,
    hoverHint: 'Hover/focus to see cumulative TCO by year',
    aria: (n: number) => `Bar chart of cumulative TCO over ${n} years`,
    yearTotalAria: (y: number, v: string) => `Year ${y} total ${v}`,
    yearAxis: (y: number) => `Yr ${y}`,
  },

  compareChart: {
    title: (stack: string) => `Comparison bar chart (stacked: ${stack})`,
    aria: (n: number) => `TCO comparison bar chart of ${n} chips`,
    itemAria: (name: string, mode: string, tco: string, detail: string) =>
      `${name} (${mode}) TCO ${tco}; ${detail}`,
    modeCluster: 'cluster',
    modeNode: 'single node',
  },

  sensitivity: {
    title: '🔬 Sensitivity analysis (one-factor scenarios, TCO change vs current)',
    scenarios: ['Electricity +20%', 'Utilization +20%', 'Lifespan +1 yr', 'PUE → 1.5', 'Idle ratio → 30%'],
  },

  csv: {
    reportTitle: 'AI Accelerator TCO Report',
    generatedAt: 'Generated at',
    paramsSection: '[Parameters]',
    chip: 'Chip',
    tdp: 'TDP (W)',
    qty: 'Qty',
    mode: 'Deployment mode',
    modeCluster: 'Cluster (incl. servers / networking / ops OPEX)',
    modeNode: 'Single node / bare card',
    usage: 'Utilization',
    elecPrice: 'Electricity ($/kWh)',
    years: 'Lifespan (years)',
    dcRent: 'Rent per card ($)',
    idleRatio: 'Idle power ratio',
    pue: 'PUE',
    discountRate: 'Discount rate',
    unitPrice: 'Unit price ($)',
    originalPrice: 'Original price',
    fxLabel: 'FX rate',
    fxRate: (rate: string) => `1 USD = ${rate} CNY`,
    priceSource: 'Price source',
    sourceManual: 'Manual input',
    sourceDb: 'pricing.json',
    detailSection: '[Cost breakdown (discounted)]',
    item: 'Item',
    amount: 'Amount ($)',
    share: 'Share',
    totalCluster: 'Cluster TCO total',
    total: 'TCO total',
    annual: 'Annualized TCO',
    perCardAnnual: 'Per card per year',
    fp16: 'FP16 TFLOPS',
    perTflops: 'TCO per TFLOPS-year ($)',
    compareSection: '[Multi-chip comparison]',
    colChip: 'Chip',
    colMode: 'Mode',
    colQty: 'Qty',
    colTco: 'TCO ($)',
    colPerTflops: 'TCO per TFLOPS-year',
    compareModeCluster: 'Cluster',
    compareModeNode: 'Single node',
    fileName: (id: string, qty: number, years: number, isCluster: boolean, date: string) =>
      `TCO_${id}_${qty}cards_${years}yr_${isCluster ? 'cluster' : 'single-node'}_${date}.csv`,
  },

  context: {
    chip: (name: string, vendor: string) => `- Chip: ${name} (${vendor})`,
    qty: (n: number) => `- Qty: ${n} cards`,
    mode: (isCluster: boolean): string =>
      isCluster ? '- Deployment: cluster (incl. servers / networking / ops)' : '- Deployment: single node / bare card',
    params: (usage: string, price: string, years: number) =>
      `- Utilization: ${usage}% · Electricity: $${price}/kWh · Lifespan: ${years} yrs`,
    unitPrice: (v: string) => `- Unit price: $${v}`,
    totalTco: (years: number, v: string) => `- ${years}-yr TCO: $${v}`,
    perTflops: (v: string) => `- TCO per TFLOPS-year: $${v}`,
    compareList: '**Comparison list**',
    compareItem: (name: string, qty: number, v: string) => `- ${name} × ${qty}: TCO $${v}`,
  },

  toast: {
    needChip: '⚠️ Select a chip and enter a price first',
    noTdp: '⚠️ This chip lacks per-card TDP; electricity cost cannot be estimated, so it cannot be added to the comparison yet',
    added: (name: string, mode: string) => `✓ Added ${name} (${mode}) to comparison`,
    modeCluster: 'cluster',
    modeNode: 'single node',
  },

  params: {
    title: '⚙️ Parameters',
    modeAria: 'Deployment mode',
    modeNode: 'Single node / bare card',
    modeCluster: 'Cluster (incl. servers / networking / ops)',
    selectLabel: 'Chip selection',
    selectHint: 'Searchable · grouped by vendor · ↑↓ + Enter',
    loading: 'Loading chip data…',
    warningSystemTitle: 'Full-system unit',
    warningSystemBody: (tdp: string) => `: TDP ${tdp} is the whole-rack power draw, not a single card. TCO results do not apply.`,
    warningNoTdpTitle: 'Missing per-card TDP',
    warningNoTdpBody: ': no per-card power is provided for this card (e.g. full-system super nodes); electricity and cooling cannot be estimated — TCO covers procurement and rent only.',
    msrpLabel: (v: string) => `MSRP ${v}`,
    currencyToggleTitleToUSD: 'Showing the database\'s original CNY price; click to switch to the unified USD price (TCO is always in USD)',
    currencyToggleTitleToCNY: 'Showing the unified USD price; click to switch to the database\'s original CNY price (TCO is always in USD)',
    showUSD: 'Show $ unified',
    showOriginal: 'Show ¥ original',
    noPrice: 'No pricing available — enter an estimated price manually',
    manualLabel: 'Manual price ($):',
    manualPlaceholder: 'Enter estimated price',
    manualAria: 'Enter per-card price in USD (manual)',
    resetTitle: 'Clear manual price and restore database price',
    resetBtn: '↺ Reset',
    manualNote: (v: string) => `✓ Using your manual price (${v}); results will be marked as "user estimate"`,
    qtyLabel: 'Qty (cards)',
    qtyDecAria: 'Decrease quantity',
    qtyAria: 'Chip quantity',
    qtyIncAria: 'Increase quantity',
    qtyPresetSingle: '1 card',
    qtyPreset: (v: number) => `${v} cards`,
    usageLabel: 'Data center utilization',
    percentAria: (v: string) => `${v} percent`,
    serverLabel: 'Server node price ($/8-card node)',
    serverHint: 'CPU / motherboard / memory / storage',
    netrLabel: 'Networking share',
    opsLabel: 'Ops OPEX ($/1k cards/yr)',
    opsHint: 'SRE / data center ops',
    elecLabel: 'Electricity ($/kWh)',
    elecPresets: ['China $0.08', 'US $0.12', 'EU $0.20', 'Middle East $0.04'],
    yearsLabel: 'Lifespan (years)',
    yearsValue: (y: number) => `${y} yrs`,
    yearsScale: ['1 yr', '4 yrs', '8 yrs'],
    advancedTitle: '⚙️ Advanced (idle power / PUE / discounting)',
    idleLabel: 'Idle power ratio',
    idleHint: 'Share of TDP while GPUs are idle',
    puePresets: ['Best 1.05', 'Liquid 1.10', 'Air 1.30', 'Typical 1.50'],
    dcLabel: 'Rent per card ($/yr)',
    dcHint: 'Rack / network / maintenance included',
    discountLabel: 'Discount rate',
    discountHint: 'Discount future cash flows to present (annualized)',
  },

  results: {
    title: '📊 TCO Results',
    resultChip: (name: string, qty: number, years: number, discounted: boolean) =>
      `${name} × ${qty}, ${years} yr${discounted ? ' (discounted)' : ''}`,
    emptySelectTitle: 'Select a chip above to start',
    emptySelectSub: (n: number) => `${n} AI accelerators supported`,
    emptyPriceTitle: 'No pricing for this chip',
    emptyPriceSub: 'Enter an estimated price in the "Manual price" field above',
    header: (years: number, isCluster: boolean, discounted: boolean) =>
      `${years}-yr${isCluster ? ' cluster' : ''} TCO total${discounted ? ' (discounted)' : ''}`,
    headerClusterHint: ' (incl. servers / networking / ops)',
    annual: 'Annualized',
    perCardAnnual: 'Per card / yr',
    perTflops: (v: string) => `TCO per TFLOPS-yr ${v}`,
    costRowProcurement: 'Procurement',
    chartCostTitle: 'Cost breakdown',
    chartCostHint: '(hover/focus for detail)',
    chartBarTitle: 'Cumulative TCO by year',
    chartBarHint: '(cumulative · discounted)',
  },

  insights: {
    title: '💡 Key insights',
    procVsElec: 'Procurement vs electricity:',
    procDominant: 'Procurement dominates — prioritize performance per dollar',
    elecDominant: 'Electricity exceeds procurement! Consider a more power-efficient chip',
    perWatt: 'TCO per watt (full lifecycle):',
    annualElec: 'Annual electricity (undiscounted):',
    annualElecValue: (v: string, pue: string) => ` ${v} / yr (IT load; cooling extra at PUE=${pue})`,
    perTflops: 'TCO per TFLOPS-yr:',
    perTflopsValue: (v: string, fp16: number) => ` ${v} / TFLOPS·yr (normalized by FP16 ${fp16} TFLOPS)`,
    bvr: 'Build vs Rent:',
    bvrGood: (usage: string, breakeven: string) =>
      `Utilization ${usage}% is above the breakeven ${breakeven}% — owning is cheaper`,
    bvrBad: (usage: string, breakeven: string) =>
      `Utilization ${usage}% is below the breakeven ${breakeven}% — renting is cheaper`,
  },

  actions: {
    addToCompare: '➕ Add to comparison',
    csvTitle: 'Export current results as CSV (mode, FX rate & original currency included)',
    csvBtn: '📥 Export CSV',
  },

  bvr: {
    title: '⚖️ Build vs Cloud Rental (Build vs Rent)',
    emptyPriceTitle: 'No pricing for this chip',
    emptyPriceSub: 'Enter an estimated price in the "Manual price" field above, then compare owning vs cloud rental',
    cloudLabel: 'Cloud GPU rental price ($/GPU/hr)',
    nowPrefix: (usage: string) => `At ${usage}% utilization: own `,
    vsCloud: ' vs cloud ',
    saveAnnually: (v: string) => ` · owning saves ${v}/yr`,
    wasteAnnually: (v: string) => ` · owning costs ${v} more/yr`,
    breakevenLabel: 'Breakeven utilization',
    breakevenHint: (be: string) => `When utilization stays above ${be}%, owning beats cloud rental`,
    alwaysRent: (floor: string) => `Cloud price ≤ own fixed-cost floor (${floor}/hr) — renting always wins`,
    caption: (qty: number, mode: string) => `Hourly cost of owning vs cloud rental at different utilization levels (${qty} cards, ${mode})`,
    modeCluster: 'cluster',
    modeNode: 'single node',
    thUsage: 'Utilization',
    thOwn: 'Own $/GPU/hr',
    thCloud: (cloud: string) => `vs cloud ${cloud}`,
    thDelta: (qty: number) => `Annual delta (${qty} cards)`,
    cheaper: 'Save $',
    pricier: 'Extra $',
  },

  compare: {
    title: '📊 Multi-chip TCO comparison',
    hint: (discounted: boolean) => `(up to 4${discounted ? ' · discounted' : ''})`,
    mixedModes: '⚠️ Entries use different deployment modes; amounts are not directly comparable',
    clearAll: 'Clear all',
    removeTitle: 'Remove this entry',
    removeAria: 'Remove comparison entry',
    modeCluster: 'Cluster',
    modeNode: 'Single node',
    perTflops: (v: string) => `${v} / TFLOPS·yr`,
  },

  lead: {
    uiTitle: 'Get your selection report — free',
    uiDesc: 'Drop your email to instantly download a Markdown report built around your selection — focus chip specs & pricing, closest alternatives. Generated locally in your browser.',
    emailLabel: 'Email address',
    generating: 'Generating…',
    downloadBtn: 'Download report',
    errorHint: 'Invalid email or data failed to load — please retry.',
    okHint: 'No signup wall · Data under CC BY 4.0 · Report generated locally',
    doneTitle: 'Report download started',
    doneText: 'Includes your selection, focus chip specs & pricing, and closest alternatives. Generated locally in your browser.',
    reportTitle: '# MirrorFrog AI Accelerator Selection Report',
    reportMeta: (date: string, source: string) =>
      `> Generated: ${date} · Source: ${source} · Data: mirrorfrog.com (CC BY 4.0)`,
    sourceTco: 'TCO Calculator',
    sourceCompare: 'Chip Comparison',
    yourSelection: '## Your Selection',
    focusSection: '## Focus Chips: Specs & Pricing',
    specHeader: '| Spec | Value |',
    refPrice: (v: string) => `| Reference Price | ${v} |`,
    detailPage: (url: string) => `| Detail Page | ${url} |`,
    altsSubtitle: (byFp16: boolean, n: number): string =>
      byFp16 ? `top ${n} by FP16 TFLOPS` : `top ${n} by TDP`,
    altsTitle: (sub: string) => `### Closest Alternatives (${sub})`,
    altHeader: '| Model | Vendor | FP16 (TFLOPS) | TDP (W) | Price |',
    fullSection: '## Full Chip Spec Summary',
    dbSection: (chips: number, vendors: number) => `## Full Database (${chips} chips · ${vendors} vendors)`,
    browseOnline: '- Browse online: https://www.mirrorfrog.com/en/docs/intro',
    dataset: '- Machine-readable dataset: https://www.mirrorfrog.com/chips.json (CC BY 4.0, cite MirrorFrog)',
    naPrice: 'N/A',
    priceWithCurrency: (amount: string, currency: string) => `${amount} (${currency})`,
    msrpSuffix: (price: string) => `, MSRP ${price}`,
    specLabels: {
      'architecture': 'Architecture', 'process': 'Process node', 'memory.type': 'Memory type',
      'memory.capacity': 'Memory capacity', 'memory.bandwidth': 'Memory bandwidth',
      'compute.fp4': 'FP4 TFLOPS', 'compute.fp8': 'FP8 TFLOPS', 'compute.fp16': 'FP16 TFLOPS', 'compute.fp32': 'FP32 TFLOPS',
      'compute.fp64': 'FP64 TFLOPS', 'compute.int8': 'INT8 TFLOPS', 'tdp': 'TDP', 'release': 'Release date',
      'interface': 'Interface', 'price': 'Launch price', 'tdpW': 'TDP (numeric W)',
    },
  },
};

/** 按 Docusaurus 当前 locale 返回 EN 或 ZH（与 src/pages/index.tsx 的判定模式一致） */
export function useTcoT(): TcoT {
  const { i18n } = useDocusaurusContext();
  return i18n.currentLocale === 'en' ? EN : ZH;
}

export type SegmentKey = keyof TcoT['segments'];

export function segLabel(t: TcoT, key: SegmentKey): string { return t.segments[key].label; }
export function segShort(t: TcoT, key: SegmentKey): string { return t.segments[key].short; }
