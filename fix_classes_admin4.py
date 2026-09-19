import re

with open('src/app/admin/classes/page.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

text = text.replace(
    r'<p style={{ fontFamily: "\'Inter\', sans-serif", fontSize: \'0.9rem\', color: \'var(--text-muted-light, #cbd5e1)\' }}>{trainer?.name}</p>',
    r'<p style={{ fontFamily: "\'Inter\', sans-serif", fontSize: \'0.9rem\', color: \'var(--text-muted-light, #cbd5e1)\' }}>{trainer?.name}</p>'.replace("\\'", "'")
)

with open('src/app/admin/classes/page.tsx', 'w', encoding='utf-8') as f:
    f.write(text)
