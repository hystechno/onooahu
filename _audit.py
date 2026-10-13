import re, collections

src = open('src/data/restaurants.ts', encoding='utf-8').read()
blocks = re.split(r"\n  \{\n", src)
nb = collections.Counter()
cat = collections.Counter()
ids = []
for b in blocks:
    m_id = re.search(r"id: '([^']+)'", b)
    if not m_id:
        continue
    rid = m_id.group(1)
    ids.append(rid)
    m_nb = re.search(r"neighborhood: (\"[^\"]+\"|'[^']+')", b)
    m_cat = re.search(r"category: '([^']+)'", b)
    if rid.endswith('-hh'):
        continue
    nb[(m_nb.group(1).strip("'\"") if m_nb else '??')] += 1
    cat[(m_cat.group(1) if m_cat else '??')] += 1

print('TOTAL ids:', len(ids), 'non-hh:', sum(cat.values()))
print('NEIGHBORHOODS:', dict(nb.most_common()))
print('CATEGORIES:', dict(cat.most_common()))
print('IDS:', ', '.join(ids))
