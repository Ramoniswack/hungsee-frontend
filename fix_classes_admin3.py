import re

with open('src/app/admin/classes/page.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

text = re.sub(
    r'<td className="p-4">\s*<p style={{ fontFamily: "\'Inter\', sans-serif", fontSize: \'0.9rem\', color: \'var\(--text-muted-light, #cbd5e1\)\' }}>\{trainer\?\.name\}</p>',
    r'<td className="p-4 hidden md:table-cell">\n                        <p style={{ fontFamily: "\'Inter\', sans-serif", fontSize: \'0.9rem\', color: \'var(--text-muted-light, #cbd5e1)\' }}>{trainer?.name}</p>',
    text
)

with open('src/app/admin/classes/page.tsx', 'w', encoding='utf-8') as f:
    f.write(text)
