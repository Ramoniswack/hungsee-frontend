import re

with open('src/app/admin/classes/page.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

# Make table a mobile-cards-table
text = text.replace('className="w-full text-left border-collapse whitespace-nowrap md:min-w-[800px]"', 'className="mobile-cards-table w-full text-left border-collapse whitespace-nowrap md:min-w-[800px]"')

# Fix headers (remove hidden classes)
text = text.replace('className="p-4 hidden md:table-cell"', 'className="p-4"')
text = text.replace('className="p-4 hidden sm:table-cell"', 'className="p-4"')

# Add data-labels to td
# Date & Time:
text = re.sub(
    r'<td className="p-4">\s*(<p style={{ fontFamily: "\'Inter\', sans-serif", fontSize: \'0.9rem\', fontWeight: 600, color: \'var\(--text-main, #ffffff\)\' }}>\{cls.date\}</p>)',
    r'<td className="p-4" data-label="Date & Time">\n                        \g<1>',
    text
)

# Class Name:
text = re.sub(
    r'<td className="p-4">\s*(<p style={{ fontFamily: "\'Oswald\', sans-serif", fontSize: \'1.1rem\', fontWeight: 500, color: \'var\(--text-main, #ffffff\)\', textTransform: \'uppercase\' }}>\{cls.name\}</p>)',
    r'<td className="p-4" data-label="Class Name">\n                        <div className="flex flex-col items-end">\g<1>',
    text
)
# Close div for Class Name (after category)
text = re.sub(
    r'(<p style={{ fontFamily: "\'Inter\', sans-serif", fontSize: \'0.75rem\', color: \'#93c5fd\', textTransform: \'uppercase\', letterSpacing: \'0.05em\' }}>\{program\?\.category\}</p>\s*)</td>',
    r'\g<1></div>\n                      </td>',
    text
)

# Date & Time also needs flex-col items-end for the contents, wait, no, it can just be text-right!
text = re.sub(
    r'<td className="p-4" data-label="Date & Time">\n                        (<p style={{ fontFamily: "\'Inter\', sans-serif", fontSize: \'0.9rem\', fontWeight: 600, color: \'var\(--text-main, #ffffff\)\' }}>\{cls.date\}</p>\s*<p style={{ fontFamily: "\'Inter\', sans-serif", fontSize: \'0.8rem\', color: \'var\(--text-muted, #64748b\)\' }}>\{cls.time\}</p>\s*)</td>',
    r'<td className="p-4" data-label="Date & Time">\n                        <div className="flex flex-col items-end">\n                        \g<1></div></td>',
    text
)


# Trainer (also remove hidden)
text = re.sub(
    r'<td className="p-4 hidden md:table-cell">\s*(<p style={{ fontFamily: "\'Inter\', sans-serif", fontSize: \'0.9rem\', color: \'var\(--text-muted-light, #cbd5e1\)\' }}>\{trainer\?\.name\}</p>)',
    r'<td className="p-4" data-label="Trainer">\n                          \g<1>',
    text
)

# Bookings (also remove hidden)
text = re.sub(
    r'<td className="p-4 hidden sm:table-cell">\s*(<span className="px-3 py-1 bg-white/5 rounded-full text-xs font-bold text-white tracking-widest">\{cls.capacity - cls.slots\} / \{cls.capacity\}</span>)',
    r'<td className="p-4" data-label="Bookings">\n                        \g<1>',
    text
)

# Actions
text = text.replace(
    '<td className="p-4 text-right">',
    '<td className="p-4 text-right" data-label="Actions">'
)

with open('src/app/admin/classes/page.tsx', 'w', encoding='utf-8') as f:
    f.write(text)
