import re

with open('src/app/globals.css', 'r', encoding='utf-8') as f:
    text = f.read()

text = re.sub(r'/\* Responsive Table Mobile Cards \*/.*', '', text, flags=re.DOTALL)

with open('src/app/globals.css', 'w', encoding='utf-8') as f:
    f.write(text)
