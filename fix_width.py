import re

with open('src/app/admin/dashboard/page.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

# Fix dashboard page
text = text.replace('style={{ width: ${fillPercentage}% }}', 'style={{ width: `${fillPercentage}%` }}')
text = text.replace('style={{ width: % }}', 'style={{ width: `${fillPercentage}%` }}')

with open('src/app/admin/dashboard/page.tsx', 'w', encoding='utf-8') as f:
    f.write(text)

with open('src/app/admin/classes/page.tsx', 'r', encoding='utf-8') as f:
    text2 = f.read()

# Fix classes page
text2 = text2.replace('style={{ width: ${fillPercentage}% }}', 'style={{ width: `${fillPercentage}%` }}')
text2 = text2.replace('style={{ width: % }}', 'style={{ width: `${fillPercentage}%` }}')

with open('src/app/admin/classes/page.tsx', 'w', encoding='utf-8') as f:
    f.write(text2)
