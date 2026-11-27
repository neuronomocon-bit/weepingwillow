#!/bin/sh
# gn-next.sh <panel id> [chapter]  (chapter defaults to ch02-caleb-ward)
# Files the newest gn-<id>.png download into <chapter>/art, re-renders that page, and writes a
# 900px audit preview to <chapter>/renders/_audit-<id>.png (gitignored) for the on-arrival check.
cd "$(dirname "$0")"
CH=${2:-ch02-caleb-ward}
sleep 1
node render.js "$CH" "$(echo "$1" | sed 's/p0*\([0-9]*\)-.*/\1/')" 2>&1 | grep -i "filed\|WARN\|ERROR"
python -c "
from PIL import Image
im=Image.open('$CH/art/$1.png'); im.thumbnail((900,900)); im.save('$CH/renders/_audit-$1.png')"
echo "preview: $CH/renders/_audit-$1.png"
