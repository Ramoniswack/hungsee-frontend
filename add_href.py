import re

with open('src/components/Navbar.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

# Make sure the mobile Join Now has href="/register"
text = text.replace("<Link\\n                onClick", "<Link href=\"/register\"\n                onClick")

with open('src/components/Navbar.tsx', 'w', encoding='utf-8') as f:
    f.write(text)
