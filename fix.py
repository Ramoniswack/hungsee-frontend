import re

with open('src/app/page.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

# Fix desktop button
text = text.replace("Join Now\n            </Link>", "Join Now\n            </a>")
# Fix mobile button
text = text.replace("Join Now</Link>", "Join Now</a>")

with open('src/app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(text)
