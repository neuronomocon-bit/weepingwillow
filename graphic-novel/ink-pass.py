"""
Ink pass: turns a generated panel into true black-and-white comic ink, then traces it to vectors.

HOUSE STYLE (tuned on p01-1 with the author, 2026-11-22; variant "M"):
  1. Edge-preserving smoothing (bilateral) flattens micro-texture but keeps edges.
  2. Slight Gaussian blur + Levels.
  3. Local threshold keeps the drawing's own hatch strokes as ink lines
     (this is what saves skies and seas that a global threshold destroys).
  4. Genuinely dark areas are filled as solid black flats; near-white is cleared to paper.
  5. Cleanup: compact blobs (pebbles, stipple) and compact pinholes inside blacks are removed,
     stroke-shaped marks are kept. This is what simplifies busy ground.
  6. Protected regions (ink-protect.json: faces, hands, story objects) keep finer detail.
  7. Smooth contours: upscale 3x, soften, re-threshold, saved as 1-bit PNG. (--svg also traces to SVG.)
Memory panels get a separate fine-line treatment (fine lines, solid darks kept, very light cleanup).

Usage:
  python ink-pass.py p01-1 p01-2 ...     # -> ch01-the-gap/ink/<id>.png, <id>.svg, <id>-compare.png
  python ink-pass.py --all
"""
import sys, os, json, re
import numpy as np
import cv2
import vtracer

HERE = os.path.dirname(os.path.abspath(__file__))
ART = os.path.join(HERE, 'ch01-the-gap', 'art')
OUT = os.path.join(HERE, 'ch01-the-gap', 'ink')

HOUSE = dict(smooth=60, blur=0.5, black=35, white=215, block=21, c=9, solid=62, paper=222,
             blob_black=700, blob_white=400)
MEMORY = dict(smooth=0, blur=0.5, black=60, white=235, block=25, c=9, solid=70, paper=225,
              blob_black=40, blob_white=40)
MEMORY_PANELS = {'p14-1', 'p14-2', 'p14-3', 'p14-4', 'p14-5', 'p14-6', 'p15-3', 'p18-3'}

PROTECT = {}
_pf = os.path.join(HERE, 'ink-protect.json')
if os.path.exists(_pf):
    PROTECT = {k: v for k, v in json.load(open(_pf)).items() if not k.startswith('_')}


def levels(g, black, white, gamma=1.0):
    x = np.clip((g.astype(np.float32) - black) / max(1, white - black), 0, 1)
    return (np.power(x, gamma) * 255).astype(np.uint8)


def clean_blobs(b, max_area, val):
    """Remove compact blobs of colour `val` under max_area; keep stroke-shaped ones (hatching)."""
    mask = (b == val).astype(np.uint8)
    n, lab, st, _ = cv2.connectedComponentsWithStats(mask, 8)
    area = st[:, cv2.CC_STAT_AREA].astype(np.float32)
    bw = st[:, cv2.CC_STAT_WIDTH].astype(np.float32)
    bh = st[:, cv2.CC_STAT_HEIGHT].astype(np.float32)
    fill = area / np.maximum(bw * bh, 1)
    aspect = np.maximum(bw, bh) / np.maximum(np.minimum(bw, bh), 1)
    stroke = (aspect >= 3.0) | (fill <= 0.30)
    kill = ((area < max_area) & ~stroke) | (area < 10)
    kill[0] = False
    out = b.copy()
    out[np.isin(lab, np.where(kill)[0]) & (mask == 1)] = 255 - val
    return out


def protect_mask(shape, pid):
    h, w = shape
    m = np.zeros((h, w), np.float32)
    for (x0, y0, x1, y1) in PROTECT.get(pid, []):
        m[int(y0 * h):int(y1 * h), int(x0 * w):int(x1 * w)] = 1
    if m.any():
        k = int(max(h, w) * 0.04) | 1
        m = cv2.GaussianBlur(m, (k, k), 0)
    return m


def ink_raster(g, P):
    s = cv2.bilateralFilter(g, 9, P['smooth'], 7) if P['smooth'] else g
    lv = levels(cv2.GaussianBlur(s, (0, 0), P['blur']), P['black'], P['white'])
    out = cv2.adaptiveThreshold(lv, 255, cv2.ADAPTIVE_THRESH_GAUSSIAN_C, cv2.THRESH_BINARY, P['block'], P['c'])
    out[cv2.GaussianBlur(lv, (0, 0), 2.0) < P['solid']] = 0
    out[lv > P['paper']] = 255
    out = clean_blobs(out, P['blob_black'], 0)
    out = clean_blobs(out, P['blob_white'], 255)
    return out


def ink(pid):
    g = cv2.imread(os.path.join(ART, f'{pid}.png'), cv2.IMREAD_GRAYSCALE)
    memory = pid in MEMORY_PANELS
    out = ink_raster(g, MEMORY if memory else HOUSE)

    # Protected regions: unsmoothed tone with a straight threshold keeps features and darkness
    m = protect_mask(g.shape, pid)
    if m.any():
        fine = np.where(levels(g, 35, 215) > 140, 255, 0).astype(np.float32)
        out = np.where(out.astype(np.float32) * (1 - m) + fine * m > 127, 255, 0).astype(np.uint8)

    os.makedirs(OUT, exist_ok=True)
    cv2.imwrite(os.path.join(OUT, f'_{pid}-raw.png'), out)

    # Step 7: smooth contours, the way an inker's brush rounds off a pixel edge.
    # Upscale 3x, soften, re-threshold: stair steps become clean curves. On the pilot this
    # looked better than a vector trace, which went blobby and dropped thin hatch strokes.
    up = cv2.resize(out, None, fx=3, fy=3, interpolation=cv2.INTER_CUBIC)
    final = np.where(cv2.GaussianBlur(up, (0, 0), 1.4) > 127, 255, 0).astype(np.uint8)
    from PIL import Image
    Image.fromarray(final).convert('1').save(os.path.join(OUT, f'{pid}.png'), optimize=True)

    if TRACE:   # optional vector output (--svg); kept for Illustrator work, not used by the layout
        svg = os.path.join(OUT, f'{pid}.svg')
        src = os.path.join(OUT, f'_{pid}-trace.png')
        cv2.imwrite(src, final)
        vtracer.convert_image_to_svg_py(src, svg, colormode='binary', mode='spline', filter_speckle=12,
                                        corner_threshold=90, length_threshold=8.0, splice_threshold=45,
                                        path_precision=2)
        os.remove(src)
        t = open(svg, encoding='utf8').read()
        mw, mh = re.search(r'width="(\d+)"', t), re.search(r'height="(\d+)"', t)
        if mw and mh and 'viewBox' not in t:
            open(svg, 'w', encoding='utf8').write(t.replace('<svg ', f'<svg viewBox="0 0 {mw.group(1)} {mh.group(1)}" ', 1))

    o = cv2.cvtColor(g, cv2.COLOR_GRAY2BGR)
    i = cv2.cvtColor(out, cv2.COLOR_GRAY2BGR)
    cv2.imwrite(os.path.join(OUT, f'{pid}-compare.png'),
                np.hstack([o, np.full((o.shape[0], 16, 3), 128, np.uint8), i]))
    print(f'{pid}: {"memory" if memory else "house"} style, {os.path.getsize(os.path.join(OUT, pid + ".png")) // 1024} KB')


TRACE = False

if __name__ == '__main__':
    ids = sys.argv[1:]
    if '--svg' in ids:
        TRACE = True
        ids.remove('--svg')
    if ids == ['--all']:
        ids = sorted(f[:-4] for f in os.listdir(ART) if f.endswith('.png'))
    for pid in ids:
        ink(pid)
