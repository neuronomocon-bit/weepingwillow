# -*- coding: utf-8 -*-
"""Cross-check the record against the prose. Every number in the notes must
match what tools/voice-audit.js reports."""
import io, os, re, glob

os.chdir(r'C:\Users\kschiffer\Projects\weepingwillow')

# canonical counts, the build method
actual = {}
for p in sorted(glob.glob('chapters-book2/[0-9]*.md')):
    n = int(re.match(r'(\d+)', os.path.basename(p)).group(1))
    body = u"\n".join(io.open(p, encoding='utf-8').read().split(u"\n")[1:])
    actual[n] = len(body.split())
total = sum(actual.values())

print("CANONICAL COUNTS")
for n in sorted(actual):
    print("  Ch%-3d %s" % (n, "{:,}".format(actual[n])))
print("  TOTAL %s\n" % "{:,}".format(total))

briefs = io.open('series-bible/08-book2-chapter-briefs.md', encoding='utf-8').read()
fails = []

# 1. every drafted chapter has an As Written block with the right number
for n in sorted(actual):
    m = re.search(u'### Chapter %d [\u2014-].*?(?=\n### Chapter |\\Z)' % n, briefs, re.S)
    blk = m.group(0) if m else u''
    w = re.search(r'As Written \(([\d,]+) words', blk)
    if not w:
        fails.append("Ch%d has no As Written block" % n)
    elif w.group(1) != "{:,}".format(actual[n]):
        fails.append("Ch%d As Written says %s, actual %s" % (n, w.group(1), "{:,}".format(actual[n])))

# 2. status tables agree
for f in ['CLAUDE.md', 'review-progress.md']:
    s = io.open(f, encoding='utf-8').read()
    for n in sorted(actual):
        if "{:,}".format(actual[n]) not in s:
            fails.append("%s never mentions Ch%d's count %s" % (f, n, "{:,}".format(actual[n])))
    if "{:,}".format(total) not in s:
        fails.append("%s never mentions the total %s" % (f, "{:,}".format(total)))

# 3. no superseded numbers anywhere
stale = ['21,319', '24,927', '28,039', '30,833', '30,790', '3,610', '3,618', '3,350',
         '3,349', '3,111', '2,792', '3,084', '3,013', '3,078', '3,006', '3,260', '2,932', '2,761']
for f in ['CLAUDE.md', 'review-progress.md', 'series-bible/08-book2-chapter-briefs.md',
          'series-bible/02-characters.md', 'series-bible/14-audit-method.md',
          'series-bible/archive/README.md', 'series-bible/06-book2-outline.md']:
    s = io.open(f, encoding='utf-8').read()
    for t in stale:
        # 3,286 and 3,387 are legitimate historical draft sizes; the rest are superseded
        if t in s:
            for line in s.split(u"\n"):
                if t in line and 'was ' not in line and 'from 3,387' not in line:
                    fails.append("%s: stale figure %s -> %s" % (f, t, line.strip()[:95]))

# 4. old targets gone
for f in ['CLAUDE.md', 'review-progress.md', 'series-bible/06-book2-outline.md',
          'series-bible/08-book2-chapter-briefs.md']:
    s = io.open(f, encoding='utf-8').read()
    for line in s.split(u"\n"):
        if u'78,000' in line and u'was' not in line and u'old' not in line.lower():
            fails.append("%s: live 78,000 target -> %s" % (f, line.strip()[:95]))

print("CROSS-CHECK")
if fails:
    for x in fails:
        print("  FAIL " + x)
else:
    print("  clean — every recorded number matches the prose")
