import re

with open('src/app/member/layout.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

text = text.replace("'1px solid rgba(255,255,255,0.2)'", "'1px solid var(--border-color, rgba(255,255,255,0.2))'")

with open('src/app/member/layout.tsx', 'w', encoding='utf-8') as f:
    f.write(text)
