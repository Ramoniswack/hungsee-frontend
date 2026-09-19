import re

with open('src/app/admin/dashboard/page.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

# Add data labels
text = re.sub(
    r'<td className="p-4">(\s*<p style={{ fontFamily: "\'Inter\', sans-serif", fontSize: \'0.95rem\', fontWeight: 600, color: \'var\(--text-main, #ffffff\)\' }}>\{cls.name\}</p>\s*</td>)',
    r'<td className="p-4" data-label="Class">\g<1>',
    text
)
text = re.sub(
    r'<td className="p-4">\s*(<div className="flex items-center gap-3">\s*<div className="w-8 h-8 rounded-full bg-gray-700)',
    r'<td className="p-4" data-label="Trainer">\n                              <div className="flex items-center gap-3 justify-end">\n                                <div className="w-8 h-8 rounded-full bg-gray-700',
    text
)
text = re.sub(
    r'<td className="p-4">\s*(<div className="flex items-center gap-3 w-32">)',
    r'<td className="p-4" data-label="Capacity">\n                              <div className="flex items-center gap-3 w-32 justify-end">',
    text
)

with open('src/app/admin/dashboard/page.tsx', 'w', encoding='utf-8') as f:
    f.write(text)
