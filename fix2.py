import re

with open('src/app/member/classes/page.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

text = text.replace(
    "background: activeDate === d.date ? 'rgba(147, 197, 253, 0.05)' : 'rgba(15, 23, 42, 0.5)',",
    "background: activeDate === d.date ? 'var(--bg-active, rgba(147, 197, 253, 0.05))' : 'var(--bg-inactive, rgba(15, 23, 42, 0.5))',"
)

text = text.replace(
    "color: activeDate === d.date ? '#93c5fd' : 'var(--text-muted-lighter, #64748b)'",
    "color: activeDate === d.date ? 'var(--text-main, #93c5fd)' : 'var(--text-muted-lighter, #64748b)'"
)

text = text.replace(
    "background: activeFilter === cat ? '#ffffff' : 'rgba(255,255,255,0.05)',",
    "background: activeFilter === cat ? 'var(--bg-active, #ffffff)' : 'var(--bg-inactive, rgba(255,255,255,0.05))',"
)
text = text.replace(
    "color: activeFilter === cat ? '#0f172a' : 'var(--text-muted, #cbd5e1)'",
    "color: activeFilter === cat ? 'var(--text-inverted, #0f172a)' : 'var(--text-muted, #cbd5e1)'"
)

with open('src/app/member/classes/page.tsx', 'w', encoding='utf-8') as f:
    f.write(text)
