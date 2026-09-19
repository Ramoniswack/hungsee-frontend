import re

with open('src/app/member/dashboard/page.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

text = text.replace("color: '#93c5fd'", "color: 'var(--text-accent, #93c5fd)'")

with open('src/app/member/dashboard/page.tsx', 'w', encoding='utf-8') as f:
    f.write(text)
