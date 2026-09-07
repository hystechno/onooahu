"""Crop AI watermark, convert pin sources to JPG, add Ono Oahu text overlays."""
import os
from PIL import Image, ImageDraw, ImageFont

FONTS = {
    "title": ("C:/Windows/Fonts/georgiab.ttf", 52),
    "desc": ("C:/Users/Stuart/AppData/Roaming/kimi-desktop/daimon-share/daimon/runtime/python/.venv/Lib/site-packages/matplotlib/mpl-data/fonts/ttf/DejaVuSans-Bold.ttf", 26),
    "url": ("C:/Users/Stuart/AppData/Roaming/kimi-desktop/daimon-share/daimon/runtime/python/.venv/Lib/site-packages/matplotlib/mpl-data/fonts/ttf/DejaVuSans.ttf", 20),
}
ACCENT = (212, 165, 116)  # #d4a574
W, H = 1000, 1500
IMG = "public/images"


def prep(src, dst):
    img = Image.open(src)
    img = img.crop((0, 0, img.width, img.height - 96))  # strip AI watermark
    img = img.resize((W, H), Image.LANCZOS)
    img.convert("RGB").save(dst, "JPEG", quality=92)
    os.remove(src)
    print("saved", dst)


def wrap(draw, text, font, max_w):
    lines, cur = [], ""
    for word in text.split():
        test = (cur + " " + word).strip()
        if draw.textlength(test, font=font) <= max_w:
            cur = test
        else:
            if cur:
                lines.append(cur)
            cur = word
    if cur:
        lines.append(cur)
    return lines


def make_pin(src, dst, title, desc, url):
    img = Image.open(src).convert("RGBA")
    overlay = Image.new("RGBA", img.size, (0, 0, 0, 0))
    od = ImageDraw.Draw(overlay)
    od.rectangle([0, 0, W, 190], fill=(0, 0, 0, 170))
    od.rectangle([0, H - 130, W, H], fill=(0, 0, 0, 160))
    img = Image.alpha_composite(img, overlay)
    draw = ImageDraw.Draw(img)

    tf = ImageFont.truetype(*FONTS["title"])
    df = ImageFont.truetype(*FONTS["desc"])
    uf = ImageFont.truetype(*FONTS["url"])

    tlines = wrap(draw, title, tf, W - 80)
    th = sum(tf.getbbox(l)[3] - tf.getbbox(l)[1] for l in tlines) + 14 * (len(tlines) - 1)
    y = (190 - th) / 2 - 6
    for l in tlines:
        bbox = tf.getbbox(l)
        draw.text(((W - (bbox[2] - bbox[0])) / 2, y), l, font=tf, fill=(255, 255, 255, 255))
        y += (bbox[3] - bbox[1]) + 14

    dlines = wrap(draw, desc, df, W - 80)
    dh = sum(df.getbbox(l)[3] - df.getbbox(l)[1] for l in dlines) + 10 * (len(dlines) - 1)
    total = dh + 12 + 24
    y = H - 130 + (130 - total) / 2
    for l in dlines:
        bbox = df.getbbox(l)
        draw.text(((W - (bbox[2] - bbox[0])) / 2, y), l, font=df, fill=(255, 255, 255, 255))
        y += (bbox[3] - bbox[1]) + 10
    y += 12
    bbox = uf.getbbox(url)
    draw.text(((W - (bbox[2] - bbox[0])) / 2, y), url, font=uf, fill=ACCENT + (255,))

    img.convert("RGB").save(dst, "JPEG", quality=92)
    print("saved", dst)


prep(f"{IMG}/pin-cheap-eats-1-src.png", f"{IMG}/pin-cheap-eats-1-clean.jpg")
prep(f"{IMG}/pin-cheap-eats-2-src.png", f"{IMG}/pin-cheap-eats-2-clean.jpg")

make_pin(
    f"{IMG}/pin-cheap-eats-1-clean.jpg",
    f"{IMG}/pinterest-pin-cheap-eats-1.jpg",
    "10 Best Cheap Eats on Oahu",
    "Every plate under $15 — loco moco, poke, malasadas & more",
    "onooahu.com",
)
make_pin(
    f"{IMG}/pin-cheap-eats-2-clean.jpg",
    f"{IMG}/pinterest-pin-cheap-eats-2.jpg",
    "Oahu on a Budget: Eat Like a Local",
    "The 10 best cheap eats on Oahu, all under $15",
    "onooahu.com",
)
