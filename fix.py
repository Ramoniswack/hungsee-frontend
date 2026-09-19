import re

with open('src/app/member/book/[id]/page.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

# Replace hardcoded button color
text = text.replace("color: '#0f172a'", "color: 'var(--text-inverted, #0f172a)'")

with open('src/app/member/book/[id]/page.tsx', 'w', encoding='utf-8') as f:
    f.write(text)
