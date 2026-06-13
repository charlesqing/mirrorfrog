"""
为缺少 TDP 字段的 MD 文件批量添加 TDP 行。
策略：找到 ## 核心规格 段落的表格，在最后一行之前插入 | **TDP** | xxx |
"""
from pathlib import Path
import re

# TDP data for missing chips
TDP_DATA = {
    'edge-tpu': '2 W',
    'tpu-8i': '200 W',
    'tpu-ironwood': '450 W',
    'tpu-v5p': '300 W',
    'tpu-v6e': '200 W',
    'ascend-910d': '310 W',
    'jaguar-shores': 'Cancelled',
    'drive-thor': '500 W',
    'groq-3-lpx': '4000 W',
    'jetson-orin': '60 W',
    'rtx-spark': '1600 W',
    'rubin': '2300 W',
    'vera-cpu': '350 W',
    'mediatek-dimensity-9400': '10 W',
    'sambanova-sn40l': '200000 W',
    'sn50': '150000 W',
}

ROOT = Path('.')

added = 0
skipped = 0
for chip_id, tdp in TDP_DATA.items():
    # Find MD file
    md_files = list(ROOT.glob(f'docs/cards/**/{chip_id}.md'))
    if not md_files:
        print(f'❌ {chip_id}: no MD file found')
        skipped += 1
        continue
    md_path = md_files[0]

    text = md_path.read_text(encoding='utf-8')

    # Skip if already has TDP
    if re.search(r'^\|\s*\*\*TDP\*\*', text, re.MULTILINE):
        print(f'⏭️  {chip_id}: already has TDP')
        skipped += 1
        continue

    # Find ## 核心规格 section
    header_match = re.search(r'^(##\s+(?:核心规格|核心规格表|Specifications?|Core\s+Specs?|Key\s+Specs?)[^\n]*)$', text, re.MULTILINE)
    if not header_match:
        print(f'❌ {chip_id}: no ## 核心规格 section')
        skipped += 1
        continue

    header_pos = header_match.end()

    # Find the next ## section or end
    rest = text[header_pos:]
    next_section = re.search(r'^##\s+', rest, re.MULTILINE)
    section_end = header_pos + (next_section.start() if next_section else len(rest))

    section = text[header_pos:section_end]

    # Find the last table row in the section
    lines = section.split('\n')
    last_table_row_idx = -1
    for i, line in enumerate(lines):
        if line.strip().startswith('|') and '---' not in line and '|' in line and '**' in line:
            last_table_row_idx = i

    if last_table_row_idx == -1:
        print(f'❌ {chip_id}: no table rows in section')
        skipped += 1
        continue

    # Insert TDP row after last table row
    new_row = f'| **TDP** | {tdp} |'
    lines.insert(last_table_row_idx + 1, new_row)
    new_section = '\n'.join(lines)
    new_text = text[:header_pos] + new_section + text[section_end:]

    md_path.write_text(new_text, encoding='utf-8')
    print(f'✅ {chip_id}: added TDP = {tdp}')
    added += 1

print(f'\n📊 Added: {added}, Skipped: {skipped}')
