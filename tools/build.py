"""Build index.html (the live game) from src/.

    python3 tools/build.py

- Inlines every deck in src/decks/*.js (each defines a DECK_xxx constant).
- Inlines the Mr Chait sticker, the home-screen icon and the fonts, so the game is one self-contained file
  that works offline and needs no other host.
- Checks every hint: a hint must never contain its own word (or the first 4 letters of any part of it).
"""
import base64, glob, io, os, re, subprocess, sys, json

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(ROOT, 'src')
b64 = lambda p: base64.b64encode(open(p, 'rb').read()).decode()


def webp_data_uri(png_path):
    try:
        from PIL import Image
        buf = io.BytesIO(); Image.open(png_path).save(buf, 'WEBP', quality=88)
        return 'data:image/webp;base64,' + base64.b64encode(buf.getvalue()).decode()
    except Exception:
        return 'data:image/png;base64,' + b64(png_path)


def check_hints(deck_files):
    js = "const fs=require('fs');let bad=0;const stop=new Set(['of','da','the','and']);" \
         "for(const f of JSON.parse(process.argv[1])){const src=fs.readFileSync(f,'utf8');" \
         "const D=eval(src.replace(/if \\(typeof module[\\s\\S]*$/,'')+';'+src.match(/const (DECK_\\w+)/)[1]);" \
         "for(const [t,w,h] of D.words){const hl=h.toLowerCase();" \
         "for(const p of w.toLowerCase().replace(/[()\\-]/g,' ').split(/\\s+/).filter(x=>x&&!stop.has(x))){" \
         "const hit=p.length>=4?hl.includes(p.slice(0,4)):new RegExp('\\\\b'+p+'\\\\b').test(hl);" \
         "if(hit){bad++;console.log('HINT GIVES IT AWAY:',w,'|',h)}}}}process.exit(bad?1:0)"
    r = subprocess.run(['node', '-e', js, json.dumps(deck_files)], capture_output=True, text=True)
    print(r.stdout, end='')
    if r.returncode:
        sys.exit('Fix the hints above, then build again.')


def main():
    deck_files = sorted(glob.glob(os.path.join(SRC, 'decks', '*.js')))
    check_hints(deck_files)
    decks = '\n'.join(open(f).read().replace("if (typeof module !== 'undefined') module.exports", '//') for f in deck_files)
    s = open(os.path.join(SRC, 'app.src.html')).read()
    s = s.replace('/*DECKS*/', decks)
    s = s.replace('__CHAIT__', webp_data_uri(os.path.join(SRC, 'assets', 'chait-sticker.png')))
    fonts = os.path.join(SRC, 'fonts')
    faces = ('<style>'
             f"@font-face{{font-family:'Luckiest Guy';src:url(data:font/woff2;base64,{b64(os.path.join(fonts, 'luckiest-guy-latin-400-normal.woff2'))}) format('woff2')}}"
             + ''.join(f"@font-face{{font-family:'Nunito';font-weight:{w};src:url(data:font/woff2;base64,{b64(os.path.join(fonts, f'nunito-latin-{w}-normal.woff2'))}) format('woff2')}}" for w in (700, 800, 900))
             + '</style>')
    s = re.sub(r'<link rel="preconnect"[^>]*>\s*<link rel="stylesheet"[^>]*>', faces, s)
    s = s.replace('<meta name="claude:viewport-fit-sides" content="cover">', '')
    icon = 'data:image/png;base64,' + b64(os.path.join(SRC, 'assets', 'app-icon.png'))
    head = ('<!doctype html><html lang="en"><head><meta charset="utf-8">'
            '<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">'
            '<meta name="apple-mobile-web-app-capable" content="yes"><meta name="apple-mobile-web-app-title" content="MadneSS">'
            f'<link rel="apple-touch-icon" href="{icon}"><link rel="icon" href="{icon}">'
            '<style>:root{padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}</style>')
    s = head + s.replace('<div class="app" id="app">', '</head><body><div class="app" id="app">', 1) + '</body></html>'
    open(os.path.join(ROOT, 'index.html'), 'w').write(s)
    print(f'Built index.html ({len(s) // 1024} KB) with {len(deck_files)} deck(s).')


if __name__ == '__main__':
    main()
