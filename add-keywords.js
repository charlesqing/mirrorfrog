const fs = require('fs');
const path = require('path');

// 根据文件路径和 title 生成关键词
function generateKeywords(filePath, title) {
  const basename = path.basename(filePath, path.extname(filePath));
  const dir = path.dirname(filePath).split('/').pop();
  const keywords = new Set();

  // 从 title 提取关键词
  if (title) {
    const titleWords = title.match(/[\u4e00-\u9fff\w]+/g) || [];
    titleWords.forEach(w => {
      if (w.length > 1) keywords.add(w);
    });
  }

  // 根据目录添加通用关键词
  const dirKeywords = {
    'nvidia': ['NVIDIA', '英伟达', 'GPU', 'CUDA'],
    'amd': ['AMD', 'Instinct', 'ROCm', 'GPU'],
    'intel': ['Intel', 'Gaudi', 'Habana', 'Arc'],
    'huawei': ['华为', '昇腾', 'Ascend', 'Atlas'],
    'google': ['Google', 'TPU', 'Tensor'],
    'aws': ['AWS', 'Trainium', 'Inferentia'],
    'apple': ['Apple', 'M系列', 'M1', 'M2', 'M3', 'M4', 'M5'],
    'others': ['AI芯片', '加速卡'],
    'npu': ['NPU', '神经网络处理器', 'AI推理'],
    'tpu': ['TPU', 'Tensor Processing Unit'],
    'ipu': ['IPU', 'Graphcore', '智能处理器'],
    'lpu': ['LPU', 'Groq', '推理加速'],
    'dpu': ['DPU', '数据处理器'],
    'fpga': ['FPGA', '可编程逻辑', 'AI加速'],
    'asic': ['ASIC', '定制芯片', 'AI加速'],
    'tools': ['AI工具', '算力卡工具'],
    'about': ['MirrorFrog', 'AI算力卡百科'],
    'reference': ['参考', '术语', 'AI芯片术语'],
    'types': ['AI芯片类型', '训练GPU', '推理GPU'],
    'architectures': ['架构', 'GPU架构', 'AI芯片架构'],
  };

  if (dirKeywords[dir]) {
    dirKeywords[dir].forEach(k => keywords.add(k));
  }

  // 从文件名推断
  if (basename.includes('h100')) keywords.add('H100');
  if (basename.includes('h200')) keywords.add('H200');
  if (basename.includes('b200')) keywords.add('B200');
  if (basename.includes('b100')) keywords.add('B100');
  if (basename.includes('gb200')) keywords.add('GB200');
  if (basename.includes('gb300')) keywords.add('GB300');
  if (basename.includes('mi300')) keywords.add('MI300X');
  if (basename.includes('mi400')) keywords.add('MI400');
  if (basename.includes('mi350') || basename.includes('mi355')) keywords.add('MI350');
  if (basename.includes('ascend-910') || basename.includes('ascend-910')) keywords.add('昇腾910');
  if (basename.includes('ascend-920') || basename.includes('ascend-920')) keywords.add('昇腾920');
  if (basename.includes('tpu')) keywords.add('TPU');
  if (basename.includes('jetson')) keywords.add('Jetson');
  if (basename.includes('l4') || basename.includes('l40')) keywords.add('L4');
  if (basename.includes('rtx')) keywords.add('RTX');
  if (basename.includes('dojo')) keywords.add('Dojo');
  if (basename.includes('wse') || basename.includes('cerebras')) keywords.add('Cerebras');
  if (basename.includes('groq') || basename.includes('lpu')) keywords.add('Groq LPU');
  if (basename.includes('graphcore') || basename.includes('ipu')) keywords.add('Graphcore IPU');
  if (basename.includes('cambricon') || basename.includes('mlu')) keywords.add('寒武纪');
  if (basename.includes('muxi') || basename.includes('mtl')) keywords.add('摩尔线程');

  // 通用关键词
  keywords.add('AI芯片');
  keywords.add('算力卡');

  return [...keywords].slice(0, 10); // 最多10个关键词
}

// 解析 front matter
function parseFrontMatter(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return null;
  const fm = {};
  const lines = match[1].split('\n');
  let currentKey = null;
  let currentValue = '';

  for (const line of lines) {
    const keyMatch = line.match(/^(\w+):\s*(.*)/);
    if (keyMatch) {
      if (currentKey) {
        fm[currentKey] = currentValue.trim();
      }
      currentKey = keyMatch[1];
      currentValue = keyMatch[2];
    } else if (line.startsWith('  ')) {
      currentValue += '\n' + line;
    }
  }
  if (currentKey) {
    fm[currentKey] = currentValue.trim();
  }
  return fm;
}

// 添加 keywords 到 front matter
function addKeywordsToFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  const fmMatch = content.match(/^---\n([\s\S]*?)\n---/);
  if (!fmMatch) {
    console.log(`SKIP (no front matter): ${filePath}`);
    return;
  }

  if (fmMatch[1].includes('keywords:')) {
    console.log(`SKIP (has keywords): ${filePath}`);
    return;
  }

  const titleMatch = fmMatch[1].match(/title:\s*(.+)/);
  const title = titleMatch ? titleMatch[1].replace(/^['"]|['"]$/g, '') : '';

  const keywords = generateKeywords(filePath, title);
  const keywordsYaml = `keywords:\n${keywords.map(k => `  - '${k.replace(/'/g, "''")}'`).join('\n')}`;

  // 在 --- 前插入 keywords
  const newContent = content.replace(/^---\n([\s\S]*?)\n---/, (match, fmContent) => {
    // 在 sidebar_label 或 description 后插入，或在 --- 前插入
    if (fmContent.includes('sidebar_label:')) {
      return `---\n${fmContent.replace(/(sidebar_label:[^\n]*\n)/, `$1${keywordsYaml}\n`)}\n---`;
    } else if (fmContent.includes('description:')) {
      return `---\n${fmContent.replace(/(description:[^\n]*\n)/, `$1${keywordsYaml}\n`)}\n---`;
    } else {
      return `---\n${fmContent}\n${keywordsYaml}\n---`;
    }
  });

  fs.writeFileSync(filePath, newContent, 'utf8');
  console.log(`ADDED: ${filePath} | keywords: ${keywords.join(', ')}`);
}

// 主逻辑
const docsDir = process.argv[2] || './docs';
const files = [];

function walkDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walkDir(fullPath);
    } else if (entry.isFile() && (entry.name.endsWith('.md') || entry.name.endsWith('.mdx'))) {
      files.push(fullPath);
    }
  }
}

walkDir(docsDir);
console.log(`Found ${files.length} files to check...\n`);

let added = 0;
let skipped = 0;
for (const file of files) {
  const content = fs.readFileSync(file, 'utf8');
  if (!content.startsWith('---')) {
    console.log(`SKIP (no FM): ${file}`);
    skipped++;
    continue;
  }
  if (content.includes('\nkeywords:')) {
    skipped++;
    continue;
  }
  addKeywordsToFile(file);
  added++;
}

console.log(`\nDone! Added keywords to ${added} files, skipped ${skipped} files.`);
