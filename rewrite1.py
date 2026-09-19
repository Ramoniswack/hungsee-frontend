import re

with open('src/app/admin/dashboard/page.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

# Make table a mobile-cards-table
text = text.replace('className="w-full text-left border-collapse whitespace-nowrap md:min-w-[800px]"', 'className="mobile-cards-table w-full text-left border-collapse whitespace-nowrap md:min-w-[800px]"')

# Fix headers (remove hidden classes)
text = text.replace('className="p-4 hidden md:table-cell"', 'className="p-4"')
text = text.replace('className="p-4 hidden sm:table-cell"', 'className="p-4"')

# Add data-labels to td
# Time:
text = text.replace(
    '<td className="p-4" style={{ fontFamily: "\'Inter\', sans-serif", fontSize: \'0.9rem\', color: \'var(--text-muted-light, #cbd5e1)\' }}>{cls.time}</td>',
    '<td className="p-4" data-label="Time" style={{ fontFamily: "\'Inter\', sans-serif", fontSize: \'0.9rem\', color: \'var(--text-muted-light, #cbd5e1)\' }}>{cls.time}</td>'
)

# Class:
text = text.replace(
    '<td className="p-4">\n                              <p style={{ fontFamily: "\'Inter\', sans-serif", fontSize: \'0.95rem\', fontWeight: 600, color: \'var(--text-main, #ffffff)\' }}>{cls.name}</p>\n                            </td>',
    '<td className="p-4" data-label="Class">\n                              <p style={{ fontFamily: "\'Inter\', sans-serif", fontSize: \'0.95rem\', fontWeight: 600, color: \'var(--text-main, #ffffff)\' }}>{cls.name}</p>\n                            </td>'
)

# Trainer (also remove hidden)
text = re.sub(
    r'<td className="p-4 hidden md:table-cell">\s*<div className="flex items-center gap-3">',
    r'<td className="p-4" data-label="Trainer">\n                              <div className="flex items-center gap-3 justify-end">',
    text
)

# Capacity (also remove hidden)
text = re.sub(
    r'<td className="p-4 hidden sm:table-cell">\s*<div className="flex items-center gap-3 w-32">',
    r'<td className="p-4" data-label="Capacity">\n                              <div className="flex items-center gap-3 w-32 justify-end">',
    text
)

# Status
text = text.replace(
    '<td className="p-4 text-right">',
    '<td className="p-4 text-right" data-label="Status">'
)

with open('src/app/admin/dashboard/page.tsx', 'w', encoding='utf-8') as f:
    f.write(text)
