import re

with open('src/app/admin/classes/page.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

text = re.sub(
    r'<td className="p-4">\s*(<p style={{ fontFamily: "\'Inter\', sans-serif", fontSize: \'0.9rem\', color: \'var\(--text-muted-light, #cbd5e1\)\' }}>\{trainer\?\.name\}</p>)',
    r'<td className="p-4" data-label="Trainer">\n                          \g<1>',
    text
)

text = re.sub(
    r'<td className="p-4">\s*(<span className="px-3 py-1 bg-white/5 rounded-full text-xs font-bold text-white tracking-widest">\{cls.capacity - cls.slots\} / \{cls.capacity\}</span>)',
    r'<td className="p-4" data-label="Bookings">\n                        \g<1>',
    text
)

with open('src/app/admin/classes/page.tsx', 'w', encoding='utf-8') as f:
    f.write(text)
