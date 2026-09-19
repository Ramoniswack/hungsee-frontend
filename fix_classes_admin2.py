import re

with open('src/app/admin/classes/page.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

text = re.sub(
    r'<td className="p-4">\s*<span className="px-3 py-1 bg-white/5 rounded-full text-xs font-bold text-white tracking-widest">\{cls.capacity',
    r'<td className="p-4 hidden sm:table-cell">\n                      <span className="px-3 py-1 bg-white/5 rounded-full text-xs font-bold text-white tracking-widest">{cls.capacity',
    text
)

text = re.sub(
    r'<td className="p-4">\s*<div className="flex items-center gap-3">\s*<div className="w-8 h-8 rounded-full',
    r'<td className="p-4 hidden md:table-cell">\n                      <div className="flex items-center gap-3">\n                        <div className="w-8 h-8 rounded-full',
    text
)

with open('src/app/admin/classes/page.tsx', 'w', encoding='utf-8') as f:
    f.write(text)
