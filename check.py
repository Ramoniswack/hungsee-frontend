import re

with open('src/app/page.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

# Try to parse the TSX to see if it throws an error
import xml.etree.ElementTree as ET
try:
    # Just a basic sanity check
    pass
except Exception as e:
    print(e)
