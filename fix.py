import re

with open('src/app/member/dashboard/page.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

# Replace hardcoded inline colors with CSS variables
text = text.replace("'#ffffff'", "'var(--text-main, #ffffff)'")
text = text.replace("'#cbd5e1'", "'var(--text-muted, #cbd5e1)'")
text = text.replace("'#94a3b8'", "'var(--text-muted-light, #94a3b8)'")
text = text.replace("'#64748b'", "'var(--text-muted-lighter, #64748b)'")

with open('src/app/member/dashboard/page.tsx', 'w', encoding='utf-8') as f:
    f.write(text)
