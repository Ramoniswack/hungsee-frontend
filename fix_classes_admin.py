import re

with open('src/app/admin/classes/page.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

# Replace min-width
text = text.replace('min-w-[800px]', 'md:min-w-[800px]')

# Hide Trainer on mobile
text = text.replace(
    '<th className="p-4" style={{ fontFamily: "\'Inter\', sans-serif", fontSize: \'0.75rem\', fontWeight: 700, letterSpacing: \'0.1em\', textTransform: \'uppercase\', color: \'var(--text-muted, #64748b)\' }}>Trainer</th>',
    '<th className="p-4 hidden md:table-cell" style={{ fontFamily: "\'Inter\', sans-serif", fontSize: \'0.75rem\', fontWeight: 700, letterSpacing: \'0.1em\', textTransform: \'uppercase\', color: \'var(--text-muted, #64748b)\' }}>Trainer</th>'
)
text = re.sub(
    r'<td className="p-4">\s*<div className="flex items-center gap-3">\s*<div className="w-8 h-8 rounded-full',
    r'<td className="p-4 hidden md:table-cell">\n                  <div className="flex items-center gap-3">\n                    <div className="w-8 h-8 rounded-full',
    text
)

# Hide Bookings on mobile
text = text.replace(
    '<th className="p-4" style={{ fontFamily: "\'Inter\', sans-serif", fontSize: \'0.75rem\', fontWeight: 700, letterSpacing: \'0.1em\', textTransform: \'uppercase\', color: \'var(--text-muted, #64748b)\' }}>Bookings</th>',
    '<th className="p-4 hidden sm:table-cell" style={{ fontFamily: "\'Inter\', sans-serif", fontSize: \'0.75rem\', fontWeight: 700, letterSpacing: \'0.1em\', textTransform: \'uppercase\', color: \'var(--text-muted, #64748b)\' }}>Bookings</th>'
)
text = re.sub(
    r'<td className="p-4">\s*<div className="flex items-center gap-3 w-32">',
    r'<td className="p-4 hidden sm:table-cell">\n                  <div className="flex items-center gap-3 w-32">',
    text
)

with open('src/app/admin/classes/page.tsx', 'w', encoding='utf-8') as f:
    f.write(text)
