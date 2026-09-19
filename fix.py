import re

with open('src/app/admin/dashboard/page.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

text = re.sub(
    r'<td className="p-4">\s*<div className="flex items-center gap-3">\s*<div className="w-8 h-8 rounded-full',
    r'<td className="p-4 hidden md:table-cell">\n                              <div className="flex items-center gap-3">\n                                <div className="w-8 h-8 rounded-full',
    text
)

text = re.sub(
    r'<td className="p-4">\s*<div className="flex items-center gap-3 w-32">',
    r'<td className="p-4 hidden sm:table-cell">\n                              <div className="flex items-center gap-3 w-32">',
    text
)

with open('src/app/admin/dashboard/page.tsx', 'w', encoding='utf-8') as f:
    f.write(text)
