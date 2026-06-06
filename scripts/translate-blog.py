#!/usr/bin/env python3
"""
Blog auto-translation helper.
After creating a new Chinese blog post in blog/, run this to create the English version.
Usage: python scripts/translate-blog.py blog/2026-XX-XX-my-post.md
"""
import os, sys, re

if len(sys.argv) < 2:
    print("Usage: python scripts/translate-blog.py blog/YYYY-MM-DD-slug.md")
    sys.exit(1)

src_path = sys.argv[1]
if not os.path.exists(src_path):
    print(f"Error: {src_path} not found")
    sys.exit(1)

basename = os.path.basename(src_path)
target_dir = "i18n/en/docusaurus-plugin-content-blog"
target_path = os.path.join(target_dir, basename)

if os.path.exists(target_path):
    print(f"English translation already exists: {target_path}")
    print("Delete it first if you want to regenerate.")
    sys.exit(0)

os.makedirs(target_dir, exist_ok=True)

with open(src_path, "r", encoding="utf-8") as f:
    content = f.read()

# Basic checks
issues = []
if "<!-- truncate -->" in content:
    issues.append("REMOVE <!-- truncate --> (breaks MDX build)")
    content = re.sub(r"\n<!-- truncate -->\n?", "\n", content)

fm_match = re.match(r"^---\n(.*?)\n---", content, re.DOTALL)
if fm_match:
    fm = fm_match.group(1)
    if "description:" in fm:
        desc_match = re.search(r"description:\s*(.+)", fm)
        if desc_match:
            val = desc_match.group(1).strip()
            if ":" in val and not val.startswith('"'):
                issues.append("WRAP description in double quotes (contains colon)")

if issues:
    print("\n⚠️  Warnings:")
    for issue in issues:
        print(f"  - {issue}")
    if "REMOVE" in " ".join(issues):
        # Save fixed version
        with open(src_path, "w", encoding="utf-8") as f:
            f.write(content)
        print("\n  ✓ <!-- truncate --> auto-removed from source")

print(f"\n✅ Ready to create English translation at: {target_path}")
print(f"\n📝 Write the translated file to: {target_path}")
print(f"   Then commit both files together.")
