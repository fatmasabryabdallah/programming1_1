import re
import os
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent

html_files = list((ROOT).glob('*.html'))

link_re = re.compile(r'(?:href|src)\s*=\s*"([^"]+)"')

broken = []

def is_local(h):
    if h.startswith(('http://','https://','mailto:','tel:','#','data:')):
        return False
    return True

for f in html_files:
    text = f.read_text(encoding='utf-8', errors='ignore')
    for m in link_re.findall(text):
        if not is_local(m):
            continue
        # strip query/hash
        path = m.split('?')[0].split('#')[0]
        # if path is absolute-like, strip leading /
        candidate = (ROOT / path).resolve()
        if not candidate.exists():
            broken.append((str(f.relative_to(ROOT)), m))

if not broken:
    print('No broken local href/src references found.')
else:
    print('Broken references:')
    for f, target in broken:
        print(f'- In {f}: {target}')
    print('\nTotal broken:', len(broken))
