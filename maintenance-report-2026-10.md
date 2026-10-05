# Ono Oahu — Monthly Maintenance Report

**Run date:** 2026-10-04 08:00 HST (first Sunday of October — schedule guard verified)
**Base commit:** `b69219e` — "Add 5 new restaurants: Senia, Kalapawai Cafe & Deli, Young's Fish Market, Miro Kaimuki, Maguro Brothers Hawaii"
**Data snapshot:** 57 real restaurants (+2 `-hh` variants) · 9 collections · 6 neighborhoods · 13 blog posts · 126 images

## Summary

All five checks **PASS**. No fixes were required — no commit, push, or deployment was made. Content growth since the September audit (5 commits: 10 new restaurants, 3 new blog posts) arrived with sitemap, counts, and images already in sync. September's two flagged issues (orphan images, missing code-splitting) remain resolved.

## Check results

### CHECK 1 — Sitemap: ✅ PASS
- `public/sitemap.xml` is valid XML with **92 `<loc>` entries** (up from 79 in September).
- No duplicate `<loc>` entries.
- All 57 real restaurants, 9 collections, 6 neighborhoods, and 13 blog posts have entries; the 2 `-hh` happy-hour variants are correctly excluded.
- No stale entries pointing at removed content; every URL uses the `/#/` HashRouter prefix.

### CHECK 2 — Data integrity: ✅ PASS
- Every restaurant category exactly matches a collection title; no zero-result collections.
- Hardcoded counts match actual data everywhere: `src/data/restaurants.ts`, `src/sections/FeaturedCollections.tsx`, and `spots` counts in `src/data/neighborhoods.ts` (all correctly updated by the recent content commits).
- No duplicate restaurant ids; no duplicate blog slugs.
- All 13 blog hero images and all restaurant image files exist under `public/images/`.

### CHECK 3 — Assets: ✅ PASS
- 126 images in `public/images/`; **0 true orphans** (39 files are by-design shared assets: map pins, banners).
- Watermark spot-check on post-September additions: 6 images inspected including all 3 new blog heroes (`blog-date-night.jpg`, `blog-family-restaurants.jpg`, `blog-plate-lunch.jpg`), a native-resolution corner crop of the plate-lunch hero, `senia.jpg`, and `maguro-brothers.jpg` — **no `AI生成` watermark found**.
- **0 files over 1 MB** — nothing needs compression.

### CHECK 4 — SEO/tech: ✅ PASS
- `rm -rf dist && npm.cmd run build` completed clean in ~19 s, no TypeScript errors.
- Code-split bundle holds: largest chunk is the entry at **456.86 kB** (gzip 148 kB) — up from ~402 kB as 3 new blog bodies landed, but still under the 500 kB warning threshold. Vendor chunks: react 48 kB, gsap 70 kB.
- All 13 blog slugs verified present in the built JS chunks.
- `SEOHead` is used by all 12 page components, so meta/OG tags render per-route.

### CHECK 5 — Live site: ✅ PASS
- `https://www.onooahu.com/` → **200**.
- `https://www.onooahu.com/sitemap.xml` → **200**, byte-identical to the repo's `public/sitemap.xml`.
- Sample hero images all **200**: `blog-date-night.jpg`, `blog-plate-lunch.jpg`, `blog-family-restaurants.jpg`, `senia.jpg`, `maguro-brothers.jpg`.

## Fixes applied

None required.

## Files changed

None. This report file (`maintenance-report-2026-10.md`) is the only new artifact and is left uncommitted, consistent with prior no-op runs.

## Commit & deployment

None — no changes to ship; the live site already matches the repo.

## Recommendations

1. **AdSense publisher ID still a placeholder** — `ca-pub-XXXXXXXXXXXXXXXX` remains in `index.html` (line 38) and `src/components/AdSenseSlot.tsx` (line 19). Fill in the real ID once the AdSense account is approved. *(Carried over from September.)*
2. **10 of 13 blogs are hero-only** — only `best-desserts-oahu`, `westman-cafe-kakaako`, and `earls-late-night-happy-hour-waikiki` have galleries. The 3 newest blogs (family, plate lunch, romantic) shipped without galleries; consider backfilling.
3. **14 restaurants share non-dedicated images** (up from 13) — fine as placeholders, but dedicated photos would improve the detail pages.
4. **Handoff doc §3 counts are stale** — `ONO_OAHU_KIMI_WORK_HANDOFF.md` still says 47 restaurants / 8 collections / 89 images; reality is 57 / 9 / 126 (plus 13 blogs). Update at the next content edit.
5. **Optional: further bundle diet** — blog bodies currently live in the 456.86 kB entry chunk. If the entry approaches 500 kB again, lazy-load blog content or split `blogPosts` data per-post.
6. **Housekeeping** — refresh `caniuse-lite` (`npx update-browserslist-db@latest`) at the next dependency touch.

## Notes

- The first-Sunday guard on the weekly cron (`0 8 * * 0` Pacific/Honolulu) is confirmed working: it correctly skipped Sept 20 and Sept 27, and fired the full audit today, Oct 4.
