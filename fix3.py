import re

with open('src/app/member/classes/page.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

text = text.replace(
    "'rgba(15, 23, 42, 0.5)'",
    "'var(--bg-inactive, rgba(15, 23, 42, 0.5))'"
)
text = text.replace(
    "'rgba(255,255,255,0.1)'",
    "'var(--border-inactive, rgba(255,255,255,0.1))'"
)

with open('src/app/member/classes/page.tsx', 'w', encoding='utf-8') as f:
    f.write(text)
