"""Render guide.html to Lemon-Detox-Cleanse-Program-Guide.pdf.

Usage:  pip install playwright && playwright install chromium
        python build.py
For the exact brand look, install the Google fonts "Cormorant Garamond" and
"Plus Jakarta Sans" on the machine first; otherwise close fallbacks are used.
"""
from pathlib import Path
from playwright.sync_api import sync_playwright

CONFIG = {}  # add {"KEY": "value"} pairs here if you add {{KEY}} placeholders to guide.html

here = Path(__file__).parent
html = (here / "guide.html").read_text(encoding="utf-8")
for k, v in CONFIG.items():
    html = html.replace("{{" + k + "}}", v)
tmp = here / "_render.html"
tmp.write_text(html, encoding="utf-8")

out = here / "Lemon-Detox-Cleanse-Program-Guide.pdf"
with sync_playwright() as p:
    b = p.chromium.launch()
    pg = b.new_page()
    pg.goto(tmp.resolve().as_uri())
    pg.wait_for_timeout(500)
    pg.pdf(path=str(out), format="A4", print_background=True, prefer_css_page_size=True)
    b.close()
tmp.unlink()
print("wrote", out)
