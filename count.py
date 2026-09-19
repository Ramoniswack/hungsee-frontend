import re

with open('src/app/page.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

a_open = text.count('<a ') + text.count('<a>')
a_close = text.count('</a>')
link_open = text.count('<Link ') + text.count('<Link>')
link_close = text.count('</Link>')

print(f"page.tsx: <a open={a_open} close={a_close} | <Link open={link_open} close={link_close}")

with open('src/components/Navbar.tsx', 'r', encoding='utf-8') as f:
    text2 = f.read()

a_open2 = text2.count('<a ') + text2.count('<a>')
a_close2 = text2.count('</a>')
link_open2 = text2.count('<Link ') + text2.count('<Link>')
link_close2 = text2.count('</Link>')

print(f"Navbar.tsx: <a open={a_open2} close={a_close2} | <Link open={link_open2} close={link_close2}")
