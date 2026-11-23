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
CHAPTER = next((a for a in sys.argv[1:] if re.match(r'ch\d\d-', a)), os.environ.get('GN_CH', 'ch01-the-gap'))
ART = os.path.join(HERE, CHAPTER, 'art')
OUT = os.path.join(HERE, CHAPTER, 'ink')
_CH1 = CHAPTER == 'ch01-the-gap'   # VOID_PANELS / MEMORY_* below hold Chapter 1 panel ids

HOUSE = dict(smooth=60, blur=0.5, black=35, white=215, block=21, c=9, solid=62, paper=222,
             blob_black=700, blob_white=400)
MEMORY = dict(smooth=0, blur=0.5, black=60, white=235, block=25, c=9, solid=70, paper=225,
              blob_black=40, blob_white=40)
# Low-key panels (median tone < DARK_MEDIAN, e.g. the server room) crush to solid black under HOUSE,
# because its fixed solid-fill cut swallows a panel that is dark all over. DARK sets the cut relative
# to the panel instead: only its darkest 35% becomes flat black. Tuned on p07-1 / p11-1 (variant "B").
DARK_MEDIAN = 40
# Panels where the black void IS the scene (the figure emerging, the hand, the face, the too-long aisle).
# They are low-key too, but must keep HOUSE's solid blacks; the DARK variant turns them pale.
VOID_PANELS = set() if not _CH1 else {'p04-4', 'p11-3', 'p11-2', 'p12-1', 'p12-4', 'p13-1', 'p13-3', 'p13-4', 'p15-1', 'p15-2'}
DARK = dict(HOUSE, smooth=80, black=8, c=4, paper=230, block=31, solid_pct=55, blob_white=1500)

# Regions inside a present-day panel drawn in the memory style (the photo on the dashboard in p19-1
# must match the photo panel p18-3, not be inked like the windshield around it).
MEMORY_REGIONS = {} if not _CH1 else {'p19-1': [[0.47, 0.36, 0.77, 0.72]]}

MEMORY_PANELS = set() if not _CH1 else {'p14-1', 'p14-2', 'p14-3', 'p14-4', 'p14-5', 'p14-6', 'p15-3', 'p18-3'}

PROTECT = {}
_pf = os.path.join(HERE, CHAPTER, 'ink-protect.json')
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
    if P.get('solid_pct'):                                    # DARK: white point and solid cut from the panel itself
        P = dict(P, white=int(np.percentile(g, 97)))
    lv = levels(cv2.GaussianBlur(s, (0, 0), P['blur']), P['black'], P['white'])
    if P.get('solid_pct'):
        P = dict(P, solid=int(np.percentile(cv2.GaussianBlur(lv, (0, 0), 2.0), P['solid_pct'])))
    out = cv2.adaptiveThreshold(lv, 255, cv2.ADAPTIVE_THRESH_GAUSSIAN_C, cv2.THRESH_BINARY, P['block'], P['c'])
    out[cv2.GaussianBlur(lv, (0, 0), 2.0) < P['solid']] = 0
    out[lv > P['paper']] = 255
    out = clean_blobs(out, P['blob_black'], 0)
    out = clean_blobs(out, P['blob_white'], 255)
    return out


def ink(pid):
    g = cv2.imread(os.path.join(ART, f'{pid}.png'), cv2.IMREAD_GRAYSCALE)
    memory = pid in MEMORY_PANELS
    dark = not memory and pid not in VOID_PANELS and np.median(g) < DARK_MEDIAN
    out = ink_raster(g, MEMORY if memory else DARK if dark else HOUSE)

    # Protected regions (faces): a comic-style face, not a filtered photo. Skin smoothed flat,
    # only strong feature lines kept (eyes, brows, nose, mouth), real shadows filled solid.
    m = protect_mask(g.shape, pid)
    if m.any():
        sm = cv2.bilateralFilter(cv2.bilateralFilter(g, 9, 60, 7), 9, 60, 7)
        lv = levels(sm, 20, 225)
        lines = cv2.adaptiveThreshold(lv, 255, cv2.ADAPTIVE_THRESH_MEAN_C, cv2.THRESH_BINARY, 21, 11) == 0
        shadow = cv2.GaussianBlur(lv, (0, 0), 2.5) < 40
        face = np.where(lines | shadow, 0, 255).astype(np.uint8)
        face = clean_blobs(face, 120, 0)
        face = clean_blobs(face, 300, 255)
        out = np.where(out.astype(np.float32) * (1 - m) + face.astype(np.float32) * m > 127, 255, 0).astype(np.uint8)

    if pid in MEMORY_REGIONS:
        mem = ink_raster(g, MEMORY)
        h, w = g.shape
        for (x0, y0, x1, y1) in MEMORY_REGIONS[pid]:
            ys, xs = slice(int(y0 * h), int(y1 * h)), slice(int(x0 * w), int(x1 * w))
            out[ys, xs] = mem[ys, xs]

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
    print(f'{pid}: {"memory" if memory else "dark" if dark else "house"} style, {os.path.getsize(os.path.join(OUT, pid + ".png")) // 1024} KB')


TRACE = False

if __name__ == '__main__':
    ids = [a for a in sys.argv[1:] if not re.match(r'ch\d\d-', a)]
    if '--svg' in ids:
        TRACE = True
        ids.remove('--svg')
    if ids == ['--all']:
        ids = sorted(f[:-4] for f in os.listdir(ART) if f.endswith('.png'))
    for pid in ids:
        ink(pid)
