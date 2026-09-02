# -*- coding: utf-8 -*-
"""Sweep every 'N days/weeks ago|earlier|later' in the locked chapters and check
it against the master timeline. This is the class that produced the Ch11
off-by-one and the Ch2 'ten months'."""
import io, os, re, glob
os.chdir(r'C:\Users\kschiffer\Projects\weepingwillow')

DAY = {1: 21, 2: 24, 3: 27, 4: None, 5: 35, 6: 37, 7: 39, 8: None,
       9: 42, 10: None, 11: 45, 12: 48}

WORD = {'one': 1, 'two': 2, 'three': 3, 'four': 4, 'five': 5, 'six': 6,
        'seven': 7, 'eight': 8, 'nine': 9, 'ten': 10, 'eleven': 11,
        'twelve': 12, 'thirteen': 13, 'fourteen': 14, 'fifteen': 15,
        'sixteen': 16, 'seventeen': 17, 'eighteen': 18, 'nineteen': 19,
        'twenty': 20, 'thirty': 30, 'forty': 40}

pat = re.compile(
    r'\b(' + '|'.join(WORD) + r'|\d+)[- ]?(days?|weeks?|months?)\s+'
    r'(ago|earlier|later|back|before|after)\b', re.I)

print("INTERVAL PHRASES IN THE PRESENT-DAY CHAPTERS")
print("Master timeline: " + ", ".join("Ch%d=Day %s" % (k, v) for k, v in sorted(DAY.items()) if v))
print()
for p in sorted(glob.glob('chapters-book2/[0-9]*.md')):
    n = int(re.match(r'(\d+)', os.path.basename(p)).group(1))
    if DAY.get(n) is None:
        continue
    t = io.open(p, encoding='utf-8').read()
    hits = []
    for m in pat.finditer(t):
        start = max(0, m.start() - 70)
        hits.append(t[start:m.end() + 40].replace(u"\n", u" "))
    if hits:
        print("-- %s  (Day %d)" % (os.path.basename(p), DAY[n]))
        for h in hits:
            print("   ..." + h + "...")
        print()
