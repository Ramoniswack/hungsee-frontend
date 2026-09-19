import re

with open('src/components/Navbar.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

text = text.replace("Join Now\\n            </Link>", "Join Now\\n            </a>")
text = text.replace("Join Now</Link>", "Join Now</a>")

with open('src/components/Navbar.tsx', 'w', encoding='utf-8') as f:
    f.write(text)
