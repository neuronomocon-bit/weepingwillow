# -*- coding: utf-8 -*-
"""verify-record.py — cross-check the record against the prose.

Two jobs:

  1. Every word count written down in the notes must match what the prose
     actually is. The canonical count is whitespace-separated tokens over the
     chapter body with the heading line dropped, which is what
     build-manuscript.js does and what tools/voice-audit.js prints.

  2. A chapter the author has LOCKED must not change. A lock that is only a
     label in a status table does not survive a sweep across all chapters,
     which is exactly how a locked chapter would get edited by accident.

Usage:
    python tools/verify-record.py                    # check everything
    python tools/verify-record.py --lock 01-aftermath.md   # lock (or re-lock) a chapter

⚠️ Re-lock only when the author has approved the change. If this script says a
lock is broken, the default assumption is that something edited an approved
chapter by mistake: read the diff before re-locking.
"""
import io, os, re, sys, glob, json, hashlib

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
os.chdir(ROOT)
LOCKFILE = 'tools/locked-chapters.json'


def body_of(path):
    return u"\n".join(io.open(path, encoding='utf-8').read().split(u"\n")[1:])


def digest(path):
    return hashlib.sha256(io.open(path, encoding='utf-8').read().encode('utf-8')).hexdigest()


def load_locks():
    if os.path.exists(LOCKFILE):
        return json.load(io.open(LOCKFILE, encoding='utf-8'))
    return {}


def lock(name):
    p = os.path.join('chapters-book2', name)
    if not os.path.exists(p):
        print("no such chapter: " + p)
        return 1
    locks = load_locks()
    was = name in locks
    locks[name] = {"words": len(body_of(p).split()), "sha256": digest(p)}
    io.open(LOCKFILE, 'w', encoding='utf-8').write(
        unicode(json.dumps(locks, indent=2, sort_keys=True)) if sys.version_info[0] == 2
        else json.dumps(locks, indent=2, sort_keys=True))
    print(("re-locked " if was else "LOCKED ") + name + "  (%d words)" % locks[name]["words"])
    return 0


if len(sys.argv) > 2 and sys.argv[1] == '--lock':
    sys.exit(lock(sys.argv[2]))

# ---------------------------------------------------------------- counts
actual = {}
for p in sorted(glob.glob('chapters-book2/[0-9]*.md')):
    n = int(re.match(r'(\d+)', os.path.basename(p)).group(1))
    actual[n] = len(body_of(p).split())
total = sum(actual.values())

print("CANONICAL COUNTS")
for n in sorted(actual):
    print("  Ch%-3d %s" % (n, "{:,}".format(actual[n])))
print("  TOTAL %s\n" % "{:,}".format(total))

briefs = io.open('series-bible/08-book2-chapter-briefs.md', encoding='utf-8').read()
fails = []

for n in sorted(actual):
    m = re.search(u'### Chapter %d [—-].*?(?=\n### Chapter |\\Z)' % n, briefs, re.S)
    blk = m.group(0) if m else u''
    w = re.search(r'As Written \(([\d,]+) words', blk)
    if not w:
        fails.append("Ch%d has no As Written block" % n)
    elif w.group(1) != "{:,}".format(actual[n]):
        fails.append("Ch%d As Written says %s, actual %s" % (n, w.group(1), "{:,}".format(actual[n])))

for f in ['CLAUDE.md', 'review-progress.md']:
    s = io.open(f, encoding='utf-8').read()
    for n in sorted(actual):
        if "{:,}".format(actual[n]) not in s:
            fails.append("%s never mentions Ch%d's count %s" % (f, n, "{:,}".format(actual[n])))
    if "{:,}".format(total) not in s:
        fails.append("%s never mentions the total %s" % (f, "{:,}".format(total)))

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
    print("  clean, every recorded number matches the prose")

# ---------------------------------------------------------------- locks
locks = load_locks()
print("\nLOCKED CHAPTERS")
if not locks:
    print("  none")
else:
    broken = False
    for name in sorted(locks):
        p = os.path.join('chapters-book2', name)
        if not os.path.exists(p):
            print("  MISSING  " + name + " is locked but the file is gone")
            broken = True
        elif digest(p) != locks[name]["sha256"]:
            now = len(body_of(p).split())
            print("  ⚠️ CHANGED  %s  (locked at %d words, now %d)" % (name, locks[name]["words"], now))
            broken = True
        else:
            print("  ok        %s  (%d words)" % (name, locks[name]["words"]))
    if broken:
        print("\n  A locked chapter is one the author has approved. If a change above was")
        print("  not asked for, revert it. If it was, re-lock:")
        print("      python tools/verify-record.py --lock <file>")
