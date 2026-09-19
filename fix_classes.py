import re

with open('src/app/member/classes/page.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

# Fix Dates background
text = text.replace(
    "backgroundColor: activeDate === d.date ? '#0f172a' : 'transparent',",
    "backgroundColor: activeDate === d.date ? 'var(--bg-active, #0f172a)' : 'transparent',"
)
text = text.replace(
    "borderColor: activeDate === d.date ? '#93c5fd' : 'rgba(255,255,255,0.1)'",
    "borderColor: activeDate === d.date ? 'var(--border-active, #93c5fd)' : 'var(--border-inactive, rgba(255,255,255,0.1))'"
)

# Fix Categories background
text = text.replace(
    "backgroundColor: activeFilter === cat ? '#0b1120' : 'rgba(255,255,255,0.03)',",
    "backgroundColor: activeFilter === cat ? 'var(--bg-active, #0b1120)' : 'var(--bg-inactive, rgba(255,255,255,0.03))',"
)
text = text.replace(
    "borderColor: activeFilter === cat ? 'var(--text-main, #ffffff)' : 'transparent',",
    "borderColor: activeFilter === cat ? 'var(--border-active, #ffffff)' : 'transparent',"
)
text = text.replace(
    "borderColor: activeFilter === cat ? '#ffffff' : 'transparent',",
    "borderColor: activeFilter === cat ? 'var(--border-active, #ffffff)' : 'transparent',"
)

# Also fix the BOOK CLASS button background which is currently bg-[#0b1120]
# Actually, the BOOK CLASS button has className="... bg-[#0b1120] border-[#93c5fd]/30".
# The global .theme-light .bg-\[\#0b1120\] turns it #f1f5f9.
# But it has 	ext-white class which turns to #0f172a in light mode.
# So #f1f5f9 with #0f172a text. This is correct.

with open('src/app/member/classes/page.tsx', 'w', encoding='utf-8') as f:
    f.write(text)
