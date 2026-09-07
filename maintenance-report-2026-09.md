# Ono Oahu — Monthly Maintenance Report

**Run date:** 2026-09-07 08:00 HST (seventh consecutive daily run — first run on the fixed codebase `0afd62a`; all checks re-verified post-deploy)
**Repo state at start:** `0afd62a` — Fix maintenance issues: remove 4 orphan images, code-split main bundle (pulled `origin/main`, already up to date)
**Data snapshot:** 47 real restaurants (+ 2 `-hh` variants: `monkeypod-waikiki-hh`, `earls-waikiki-hh`), 9 collections, 6 neighborhoods, 9 blog posts, 96 files in `public/images/` (~13.3 MB after orphan cleanup)

---

## CHECK 1 — SITEMAP: ✅ PASS (no issues)

- XML valid, 78 `<loc>` entries, **no duplicates**
- Every URL uses the `/#/` prefix (except bare homepage, which is correct)
- All 47 real restaurants, 9 collection slugs, 6 neighborhood slugs, and 9 blog slugs (incl. new `chinatown-food-crawl`) have entries — **none missing**
- **No stale entries** pointing at removed entities
- Live `https://www.onooahu.com/sitemap.xml` is **byte-identical** to the repo copy

## CHECK 2 — DATA INTEGRITY: ✅ PASS (no issues)

- All 9 restaurant categories exactly match collection titles; **no zero-result collections**
- `restaurants.ts` collection `count` fields: 9/9 match actual data
- `FeaturedCollections.tsx` hardcoded counts: 6/6 match (Beachfront 7, Hidden Gems 19, Plate Lunch 4, Happy Hours 3, Japanese 4, Fine Dining 3)
- `neighborhoods.ts` spot counts: 6/6 match (Waikiki 10, North Shore 9, Chinatown 5, Kaka'ako 5, Kaimuki 2, Windward Coast 3)
- **No duplicate** restaurant ids or blog slugs
- All 49 restaurant images, 9 blog heroes, and all blog gallery files exist under `public/images/`
- Note (informational): 13 restaurants sit outside the 6 neighborhood pages (Kalihi 4, Kapahulu 4, Honolulu 2, Waipahu 2, Liliha 1) — expected per project design

## CHECK 3 — ASSETS: ✅ PASS (issues RESOLVED 2026-09-07, commit `0afd62a`)

**True orphans: 0** (was 4). The 4 orphan files flagged on 09-01 → 09-06 were owner-approved for deletion, removed, and the deletion is live in production (deleted-file probe returns 404):

| File | Size | Resolution |
|------|------|------------|
| `public/images/dukes-waikiki-new.png` | 2.12 MB | Deleted — uncompressed duplicate of live `dukes-waikiki.jpg` (identical photo, 8× the size) |
| `public/images/earls-happyhour-new.png` | 2.07 MB | Deleted — uncompressed duplicate of live `earls-waikiki.jpg` |
| `public/images/westman-cafe-food.jpg` | 126 KB | Deleted — casual phone shot; restaurant gallery already complete at 7 photos |
| `public/images/westman-cafe-mirror.jpg` | 209 KB | Deleted — visitor selfie with identifiable person; not suitable for curated gallery |

**By-design unreferenced (no action):** 16 Pinterest assets (`pin-*-clean.jpg` ×8, `pinterest-pin-*.jpg` ×8 — used by `make_pins.py` / social handoffs) and 7 ad banners in `images/banners/` (external ad embeds).

**Watermark spot-check:** ✅ 5 newest images (Chinatown hero + 4 pin files) visually inspected incl. native-res corners — no `AI生成` watermark. Pinterest text overlays are intentional. (`public/images` tree verified unchanged via git since that inspection; no newer image additions exist to re-check.)

**>1MB flag: none remaining.** All 96 files in `public/images/` are now <1MB.

## CHECK 4 — SEO/TECH: ✅ PASS (one item needs a human)

- `rm -rf dist && npm.cmd run build` — **clean build, zero TypeScript errors** (vite 7.3.0, 78 modules)
- Bundle contains **9/9 blog slugs** incl. `chinatown-food-crawl` (spread across lazy route chunks — verified present across all `dist/assets/*.js`)
- `dist/images/` complete (90 top-level entries + banners), sitemap/robots/verification file copied
- `SEOHead.tsx` is mounted on all 12 page components; `BlogPost` passes title/excerpt/hero/`type="article"`/JSON-LD schema; `RestaurantDetail` passes full restaurant data
- ⚠️ **Needs human:** `index.html` still contains `<meta name="google-publisher-verification" content="PUBLISHER_ID_PLACEHOLDER">` — requires the real AdSense publisher ID
- ✅ **RESOLVED 2026-09-07:** bundle code-split (commit `0afd62a`) — main chunk 586 KB → **387 KB** (125.8 KB gzip), `vendor-react` 48 KB and `vendor-gsap` 70 KB split into long-cacheable chunks, 11 route chunks of 2–12 KB each; the >500 KB warning is gone

## CHECK 5 — LIVE SITE: ✅ PASS

| URL | Status |
|-----|--------|
| `https://www.onooahu.com/` | 200 |
| `https://www.onooahu.com/sitemap.xml` | 200, identical to repo |
| `/images/blog-chinatown-crawl.jpg` (newest blog hero) | 200 |
| `/images/blog-desserts.jpg` (blog hero) | 200 |
| `/images/dukes-waikiki.jpg` (restaurant hero) | 200 |
| `/images/mei-sum-dimsum.jpg` (restaurant hero) | 200 |

---

## Fixes applied (2026-09-07, owner-approved)

1. **Deleted 4 orphan images** (~4.5 MB freed) — see CHECK 3 table.
2. **Code-split the bundle** — route-level `React.lazy()` + `Suspense` for the 11 non-home pages in `src/App.tsx` (cream-styled `PageLoader` fallback, Home stays eager); `manualChunks` vendor split (`vendor-react`, `vendor-gsap`) in `vite.config.ts`.

## Files changed (commit `0afd62a`)

- `public/images/dukes-waikiki-new.png` — deleted
- `public/images/earls-happyhour-new.png` — deleted
- `public/images/westman-cafe-food.jpg` — deleted
- `public/images/westman-cafe-mirror.jpg` — deleted
- `src/App.tsx` — lazy routes + Suspense fallback
- `vite.config.ts` — manualChunks vendor split

## Commit & deployment

- **Commit:** `0afd62a` — "Fix maintenance issues: remove 4 orphan images, code-split main bundle" (2026-09-07 05:02 HST), pushed to `origin/main`.
- **Deployment:** Vercel production `dpl_5N2upzTd2q1E7msPfNQNXNSh4msb` — **READY**.
- **Live verification (09-07 08:00 run):** homepage serves the new code-split bundle (`index-CLeor45i.js` + `vendor-react` + `vendor-gsap` — hash matches local build), deleted orphan probe 404s, all sampled pages/images 200, live sitemap byte-identical to repo.

## Recommendations

1. ~~Delete or integrate the 4 orphan images~~ — ✅ DONE 09-07 (`0afd62a`, deployed)
2. ~~Code-split the 586 KB bundle~~ — ✅ DONE 09-07 (586 KB → 387 KB entry + vendor/route chunks; warning gone)
3. **Fill `PUBLISHER_ID_PLACEHOLDER`** in `index.html` with the real AdSense publisher ID (or remove the tag until AdSense is set up).
4. **Galleries for older blogs** (unchanged from handoff): only `best-desserts-oahu`, `westman-cafe-kakaako`, `earls-late-night-happy-hour-waikiki` have galleries; 6 older posts are hero-only. Candidates for future photo enrichment: `best-poke-bowls`, `best-breakfast-brunch`, `north-shore-food-tour`.
5. **Refresh `caniuse-lite`** (`npx update-browserslist-db@latest`) — browsers data is 9 months old; cosmetic, low priority.
6. **Housekeeping note:** handoff doc inventory counts (47 restaurants / 8 blogs / 89 images) are stale vs. reality (47 / 9 / 96) — update `ONO_OAHU_KIMI_WORK_HANDOFF.md` §3 on the next content cycle.
7. **Dedicated photos for 13 shared-image restaurants** (found 09-04): `house-without-key`, `moku-kitchen`, `helena-hawaiian-food`, `waiola-shave-ice`, `onos-seafood`, `rainbow-drive-in`, `giovannis-shrimp-truck`, `liliha-bakery`, `mai-tai-bar`, `tommy-bahama`, `skull-crown`, `leonards-bakery`, `mw-restaurant` currently reuse hero-card/neighborhood/collection images. Pages work fine, but dedicated photos would improve OG sharing and per-restaurant SEO.
8. **Further bundle diet (optional):** the 387 KB entry still embeds all 9 full blog post bodies via `sections/Blog.tsx` (home cards need only metadata). Moving `blogPosts` content out of the eagerly-loaded path, or lazy-loading below-the-fold Home sections, could shave another ~10–15%.

---

## Run log

| Run (HST) | Base commit | Result |
|-----------|-------------|--------|
| 2026-09-01 08:00 | `b08ee2e` | All checks pass; 4 orphans + 2 >1MB PNGs flagged; no fixes needed; no deploy |
| 2026-09-02 08:00 | `b08ee2e` (unchanged) | Full re-run: identical results across all 5 checks (sitemap re-diffed live, fresh `tsc`+vite build clean, 9/9 slugs in bundle, 6/6 curl 200s); no fixes needed; no deploy |
| 2026-09-03 08:00 | `b08ee2e` (unchanged) | Full re-run: identical results across all 5 checks (sitemap re-diffed live, fresh build clean, 9/9 slugs in bundle, 5/5 curl 200s); no fixes needed; no deploy |
| 2026-09-04 08:00 | `b08ee2e` (unchanged) | Full re-run: all 5 checks pass. New insight: 13/47 restaurants use shared (non-dedicated) hero images — all 11 unique shared images verified 200 live (initial 404s on `[id].jpg` guesses were sampling error, not site issues); no fixes needed; no deploy |
| 2026-09-05 08:00 | `b08ee2e` (unchanged) | Full re-run: all 5 checks pass; live samples now drawn from actual referenced image paths in data (2 blog heroes + 1 dedicated + 1 shared restaurant image, all 200); sitemap re-diffed identical; fresh build clean, 9/9 slugs in bundle; no fixes needed; no deploy |
| 2026-09-06 08:00 | `b08ee2e` (unchanged) | Full re-run: all 5 checks pass; new live samples (haleiwa-beach-house dedicated, westman-cafe-bar) all 200; sitemap re-diffed identical; fresh build clean, 9/9 slugs in bundle; no fixes needed; no deploy |
| 2026-09-07 04:52 | `0afd62a` | **Fixes applied** (first 2 issues): deleted 4 orphan images (~4.5 MB freed — `dukes-waikiki-new.png`, `earls-happyhour-new.png`, `westman-cafe-food.jpg`, `westman-cafe-mirror.jpg`); code-split bundle via route-level `React.lazy` + `manualChunks` (main chunk 586 KB → 387 KB, vendor-react 48 KB + vendor-gsap 70 KB split out, below 500 KB warning). Fresh build clean (0 TS errors); browser-verified home/blog/restaurant lazy routes render; committed `0afd62a`, pushed, deployed to Vercel production (`dpl_5N2upzTd2q1E7msPfNQNXNSh4msb` READY); live checks: `/` 200 serving new bundle, deleted orphan 404, live images 200 |
| 2026-09-07 08:00 | `0afd62a` (pulled, up to date) | Full re-run on fixed codebase: CHECK 1 ✅ (78 URLs, 0 dupes, 0 missing/stale), CHECK 2 ✅ (all counts/categories/images), CHECK 3 ✅ (**0 true orphans, 0 files >1MB** — cleanup verified), CHECK 4 ✅ (fresh build clean, 9/9 slugs across chunks, no >500KB warning), CHECK 5 ✅ (6/6 200s; live serves code-split bundle `index-CLeor45i.js` matching local build hash; sitemap byte-identical). No new fixes needed; nothing to commit/deploy. |
