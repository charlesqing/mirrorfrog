"""
将 chips.json 中已规范化的 TDP 数据同步到 docs/cards/ 下的 MD 源文件。

策略：
1. 从 chips.json 读取每个芯片的 vendor 和 specs.tdp
2. 找到对应的 MD 文件: docs/cards/{vendor}/{id}.md
3. 如果文件中已有 | **TDP** | xxx | 行，则替换它
4. 如果没有，则不修改（保持原状）
"""
import json
import re
from pathlib import Path

ROOT = Path('.')

with open(ROOT / 'static/chips.json', 'r', encoding='utf-8') as f:
    chips = json.load(f)


def normalize_tdp(tdp_str):
    if not tdp_str:
        return None
    s = str(tdp_str).strip()
    if s in ('Cancelled', '', 'N/A', 'TBD'):
        return None
    s_clean = s.replace('–', '-').replace('—', '-').replace('～', '-').replace('~', '-').replace('至', '-')
    nums = re.findall(r'(\d+(?:[.,]\d+)?)', s_clean)
    if not nums:
        return None
    val = nums[0].replace(',', '')
    try:
        v = float(val)
        if 'kW' in s or 'kw' in s.lower():
            v *= 1000
        return f'{int(v)} W' if v == int(v) else f'{v} W'
    except Exception:
        return None


# Pattern: | **TDP** | value |  (with any spaces)
TDP_PATTERN = re.compile(r'^\|\s*\*\*TDP\*\*\s*\|\s*([^|]+?)\s*\|\s*$', re.MULTILINE)

updated = 0
skipped = 0
not_found = 0
errs = 0

for chip in chips:
    chip_id = chip['id']
    vendor = chip['vendor']
    raw_tdp = chip.get('specs', {}).get('tdp', '')
    norm = normalize_tdp(raw_tdp)
    if not norm:
        skipped += 1
        continue

    md_path = ROOT / 'docs' / 'cards' / vendor / f'{chip_id}.md'
    if not md_path.exists():
        not_found += 1
        continue

    try:
        text = md_path.read_text(encoding='utf-8')
    except UnicodeDecodeError:
        errs += 1
        continue

    m = TDP_PATTERN.search(text)
    if not m:
        # No TDP row in spec table — skip (don't inject)
        not_found += 1
        continue

    old_val = m.group(1).strip()
    new_line = f'| **TDP** | {norm} |'
    if old_val == norm:
        skipped += 1
        continue

    new_text = TDP_PATTERN.sub(new_line, text, count=1)
    md_path.write_text(new_text, encoding='utf-8')
    updated += 1
    print(f'  ✅ {vendor}/{chip_id}: "{old_val}" -> "{norm}"')

print(f'\n📊 Summary:')
print(f'  Updated:  {updated}')
print(f'  Skipped:  {skipped} (already up-to-date or no data)')
print(f'  Not found: {not_found} (no TDP row in MD or no MD file)')
print(f'  Errors:   {errs}')
