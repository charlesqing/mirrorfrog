const fs = require('fs');
const path = require('path');

const cardsDir = 'D:/GitHub/mirrorfrog/docs/cards';
const issues = [];

function scanFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n');
  
  let inSpecs = false;
  let tableStart = -1;
  let headerLine = -1;
  let separatorLine = -1;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    if (line.startsWith('## 核心') || line.startsWith('## 关键') || line.startsWith('## 技术') || line.startsWith('## 规格')) {
      inSpecs = true;
      continue;
    }
    
    if (inSpecs && line.trim().startsWith('|')) {
      if (tableStart === -1) tableStart = i;
      if (headerLine === -1) headerLine = i;
      
      // Check if this is a separator row
      if (line.replace(/[^|]/g, '').length > 0 && /^\|[\s\-:|]+\|$/.test(line)) {
        separatorLine = i;
        break;
      }
    }
    
    if (inSpecs && !line.trim().startsWith('|') && line.trim() !== '' && tableStart !== -1) {
      break;
    }
  }
  
  if (headerLine !== -1 && separatorLine !== -1) {
    const headerCols = (lines[headerLine].match(/\|/g) || []).length - 1;
    const sepCols = (lines[separatorLine].match(/\|/g) || []).length - 1;
    
    if (separatorLine !== headerLine + 1) {
      issues.push({
        file: filePath,
        issue: `Separator row not immediately after header (header: ${headerLine}, separator: ${separatorLine})`
      });
    }
  }
}

function walkDir(dir) {
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      walkDir(fullPath);
    } else if (item.endsWith('.md') && !item.startsWith('.')) {
      scanFile(fullPath);
    }
  }
}

walkDir(cardsDir);

if (issues.length > 0) {
  console.log('Found', issues.length, 'potential issues:');
  issues.forEach(issue => {
    console.log(`  ${issue.file}: ${issue.issue}`);
  });
} else {
  console.log('No table formatting issues found.');
}
