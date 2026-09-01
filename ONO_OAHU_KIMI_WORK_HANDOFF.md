# Ono Oahu — Kimi Work Automation Handoff

**Project:** Ono Oahu (onooahu.com) — Curated Oahu Restaurant Guide
**Prepared:** September 1, 2026
**Owner:** Stuart / hys.techno@gmail.com
**Purpose:** Complete project handoff for automated content creation, social media publishing, and site maintenance via Kimi Work

---

## 1. PROJECT OVERVIEW

### What It Is
Ono Oahu is a curated, SEO-optimized dining guide for Oahu, Hawaii. It serves tourists (6M+ annual visitors) and local residents with vetted restaurant recommendations, neighborhood guides, collections, and blog content.

### Business Goals
1. **Organic traffic growth** via SEO-optimized blog content and restaurant pages
2. **Social media growth** via Pinterest pins and Instagram posts (account: "Your Oahu Guide")
3. **Monetization** through affiliate partnerships (Travelpayouts/Booking.com hotels, Viator/GetYourGuide activities), AdSense ads, and sponsored content
4. **Content cadence:** 2 new blog posts per week (Monday + Thursday), each with 2 Pinterest pins and repurposed Instagram content

### Core Principles
- **Curated, not comprehensive** — only the best restaurants
- **Every restaurant personally vetted or extensively researched**
- **Tourist-first utility** — reservations, hours, what to order, parking tips
- **No paid placements without disclosure**

---

## 2. SOURCE CODE & REPOSITORY

### Locations
- **Local repo:** `/mnt/agents/output/app`
- **GitHub:** `hystechno/onooahu` (branch: `main`)
- **Latest commit:** `b87d98a` — Add photo gallery to desserts blog post
- **Live site:** https://www.onooahu.com (Vercel production)

### Tech Stack
- **Framework:** React 19 + TypeScript + Vite
- **Styling:** Tailwind CSS + shadcn/ui components
- **Routing:** React Router with **HashRouter** (ALL URLs use `/#/` prefix — critical for sitemap and links)
- **Fonts:** Noto Serif (headings) + Noto Sans (body)
- **Colors:** Primary accent `#d4a574` (warm tan/gold), dark `#1a1a1a`, cream `#f5ede4`, text gray `#666666`

### Key Files
| File | Purpose |
|------|---------|
| `src/data/restaurants.ts` | **CENTRAL DATA FILE** — 47 restaurants, 9 collections, 8 blog posts |
| `src/data/neighborhoods.ts` | 6 neighborhood definitions with spot counts |
| `src/data/affiliates.ts` | Affiliate link configuration |
| `src/pages/BlogPost.tsx` | Blog post renderer (parses markdown-ish content, renders gallery) |
| `src/pages/BlogListingPage.tsx` | Blog index page |
| `src/pages/DiscoverPage.tsx` | Restaurant discovery with filters (uses `realRestaurants` excluding `-hh` variants) |
| `src/pages/RestaurantDetail.tsx` | Individual restaurant pages |
| `src/sections/FeaturedCollections.tsx` | Homepage collection cards (hardcoded counts — MUST match data) |
| `src/components/SEOHead.tsx` | Canonical URLs, OG tags, meta |
| `src/utils/schema.ts` | JSON-LD schema generators (article, breadcrumb, restaurant) |
| `public/sitemap.xml` | Sitemap — ALL URLs need `/#/` prefix |
| `public/robots.txt` | Crawler rules |

### Data Model (blogPosts array in restaurants.ts)
```typescript
{
  slug: 'best-desserts-oahu',           // URL slug
  title: "Oahu's Best Desserts...",      // Full title
  category: 'Food',                      // Display category
  date: 'August 18, 2026',               // Display date
  excerpt: '...',                        // Summary / meta description
  image: '/images/blog-desserts.jpg',    // Hero image path
  gallery: [                             // OPTIONAL — photo gallery grid
    '/images/ig-dessert-1-leonards.jpg',
    ...
  ],
  content: `...`                         // Body text — see content format below
}
```

### Blog Content Format (parsed by BlogPost.tsx)
- `## Heading` → h2 section heading
- `**Bold line**` (entire line wrapped in `**`) → bold intro line (used for "Must Try:" and "Pro tip:")
- `- item` → bullet list item
- Anything else → paragraph
- No image embedding inside content — images go in `gallery` array instead

### ⚠️ Critical Data Integrity Rules (learned from past bugs)
1. **Restaurant categories must EXACTLY match collection titles** or collection filters show 0 results (e.g., `'Local Institutions'` not `'Local Institution'`)
2. **`-hh` suffix IDs are happy hour variants** — they are excluded from counts/Discover page via `!r.id.endsWith('-hh')`
3. **Hardcoded counts** in `FeaturedCollections.tsx` and `neighborhoods.ts` must match actual data — verify after any restaurant additions
4. **All sitemap URLs need `/#/` prefix** (HashRouter)

---

## 3. CURRENT CONTENT INVENTORY

### Restaurants: 47 (real, excluding `-hh` variants)
Spread across 6 neighborhoods: Waikiki (10), North Shore (9), Chinatown (5), Kaka'ako (5), Kaimuki (2), Windward Coast (3), plus others.

### Collections: 9
| Collection | Count |
|------------|-------|
| Hidden Gems | 19 |
| Beachfront Dining | 7 |
| Plate Lunch Legends | 4 |
| Japanese | 4 |
| Sunset Happy Hours | 3 |
| Fine Dining | 3 |
| Local Institutions | 3 |
| Vietnamese Fusion | 2 |
| Fresh Seafood | 2 |

### Blog Posts: 8
| Slug | Title | Hero Image | Gallery |
|------|-------|-----------|---------|
| `best-poke-bowls` | The 10 Best Poke Bowls on Oahu | blog-poke.jpg | No |
| `north-shore-guide` | North Shore Guide | blog-northshore.jpg | No |
| `happy-hour-gems` | Happy Hour Hidden Gems | blog-happyhour.jpg | No |
| `westman-cafe-kakaako` | Westman Cafe feature | westman-cafe-*.jpg (8 photos) | Yes |
| `earls-late-night-happy-hour-waikiki` | Earl's Late Night Happy Hour | earls-*.jpg | Yes |
| `best-breakfast-brunch` | Best Breakfast & Brunch on Oahu | blog-brunch.jpg | No |
| `north-shore-food-tour` | The Ultimate North Shore Food Tour | blog-northshore-tour.jpg | No |
| `best-desserts-oahu` | Oahu's Best Desserts and Sweet Treats | blog-desserts.jpg | Yes (6 ig-dessert-*.jpg) |

### Images: 89 files in `public/images/`
- Restaurant photos: `[restaurant-name].jpg`
- Blog heroes: `blog-*.jpg`
- Pinterest pins (final, with text overlay): `pinterest-pin-*.jpg`
- Pinterest source images (no text): `pin-*-clean.jpg`
- Instagram carousel images: `ig-dessert-*.jpg`
- Ad banners: `banners/` subfolder (7 standard IAB sizes)
- Hero carousel cards: `hero-card-1..8.jpg`
- Neighborhood cards: `neighborhood-*.jpg`
- Collection cards: `collection-*.jpg`

---

## 4. WORKFLOWS (What Kimi Work Should Automate)

### Workflow A: Weekly Blog Post + Social Content (Monday & Thursday, 2:00 PM HST)

**Step 1 — Pick a topic** from the rotation (or generate a new one using restaurants in the database):
1. ~~Oahu's Best Desserts~~ ✅ DONE (Aug 18)
2. "Honolulu Chinatown Food Crawl" — The Pig and the Lady, Fete, Piggy Smalls, Mei Sum Dim Sum, Skull & Crown
3. "Best Cheap Eats on Oahu Under $15" — Rainbow Drive-In, Zippy's, Leonard's, Kono's, Matsumoto, Ted's, Alicia's Market
4. "Waikiki Happy Hour Guide" — Monkeypod, SKY Waikiki, Herringbone, Tommy Bahama
5. "Best Sushi on Oahu" — Doraku, Banzai Sushi, Yauatcha, Sushi Sho
6. "Family-Friendly Restaurants on Oahu" — Duke's, Farm to Barn, Seven Brothers, Zippy's

**Step 2 — Write the blog** (1500+ words):
- Use ONLY restaurants that exist in `src/data/restaurants.ts` — include real addresses, phone numbers, hours, must-try dishes
- Structure: intro hook → numbered sections per restaurant (## headings) → **Must Try:** / **Pro tip:** lines → tips section at the end
- Follow the tone of existing posts: conversational, local-expert voice, sensory details

**Step 3 — Generate hero image** (16:9, save as `public/images/blog-[topic].jpg`):
- Food photography style, warm tropical lighting, no text in image

**Step 4 — Add blog post to `src/data/restaurants.ts`** blogPosts array:
- New slug, date, excerpt, image path
- Optionally generate individual food photos (1:1) and add as `gallery` array

**Step 5 — Create 2 Pinterest pins** (2:3 ratio, 1000×1500px):
1. Generate 2 clean vertical food images (no text) → `pin-[topic]-1-clean.jpg`, `pin-[topic]-2-clean.jpg`
2. Add text overlay with Python PIL:
   - Fonts: `/usr/share/fonts/truetype/noto/NotoSerif-Bold.ttf` (52px) for title, `NotoSans-SemiBold.ttf` (26px) for description, `NotoSans-Regular.ttf` (20px) for URL
   - Semi-transparent black bars: top bar (190px tall, alpha 170) for title, bottom bar (130px, alpha 160) for description + URL
   - URL line color: `(212, 165, 116)` (the site's `#d4a574` accent)
   - Save as `pinterest-pin-[topic]-1.jpg` and `pinterest-pin-[topic]-2.jpg`
3. Write Pinterest title + description (with hashtags) for each pin

**Step 6 — Create Instagram caption + 5 hashtags** for "Your Oahu Guide" account:
- Repurpose blog content into emoji-structured caption with numbered spots
- Hashtag format: `#YourOahuGuide` + 4 topic-relevant tags

**Step 7 — Update sitemap** (`public/sitemap.xml`):
```xml
<url>
  <loc>https://www.onooahu.com/#/blog/[slug]</loc>
  <lastmod>[YYYY-MM-DD]</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.7</priority>
</url>
```

**Step 8 — Build, deploy, push:**
```bash
cd /mnt/agents/output/app
rm -rf dist && npm run build
# Deploy to Vercel (see Workflow B)
git add -A && git commit -m "Add [blog title] blog post with hero image and Pinterest pins"
git push origin main
```

### Workflow B: Vercel Deployment (API method)

The site deploys via Vercel REST API (credentials stored in prior session — retrieve from environment or re-authenticate):
1. Walk `dist/`, compute SHA1 + size for each file
2. POST `https://api.vercel.com/v13/deployments?teamId=[TEAM_ID]` with file manifest
3. If response returns `missing` files array → upload each to `https://api.vercel.com/v2/files` (octet-stream, `x-vercel-digest` header)
4. Re-create deployment (now all files cached)
5. Poll `GET /v13/deployments/{id}` until `readyState === 'READY'`

**Note:** Vercel credentials (token, team ID, project ID) need to be re-established in the Kimi Work environment — they were session-specific.

### Workflow C: Pre-Deployment Verification Checklist
- [ ] `npm run build` succeeds with no TypeScript errors
- [ ] New blog appears in `dist` JS bundle (`grep "slug-name" dist/assets/index-*.js`)
- [ ] New images exist in `dist/images/`
- [ ] Sitemap updated
- [ ] If restaurants were added: verify collection counts in `FeaturedCollections.tsx` and `neighborhoods.ts` match actual data
- [ ] Categories exactly match collection titles

### Workflow D: Social Media Publishing (Manual Handoff)
Kimi Work prepares; user publishes:
- **Pinterest:** Upload `pinterest-pin-*.jpg` with prepared title + description, link to blog URL
- **Instagram:** Upload hero or carousel images with prepared caption + hashtags, link in bio

---

## 5. SCHEDULED AUTOMATION STATE

Active cron reminders (Hawaii time):
| Day | Time | Status | Purpose |
|-----|------|--------|---------|
| Monday | 2:00 PM HST | ⏸️ Paused (resume before next cycle) | Blog + pins creation |
| Thursday | 2:00 PM HST | ✅ Active | Blog + pins creation |

---

## 6. ASSETS OUTSIDE THE REPO (in /mnt/agents/output/)

| File/Folder | Description |
|-------------|-------------|
| `ONO_OAHU_PROJECT_HANDOFF.md` | Original handoff doc (May 2026, now outdated — use THIS file) |
| `banners/` | Ad banner source files + embed codes |
| `design/design.md` | Design system notes |
| `ono-oahu-git-repo.zip`, `onooahu-repo.bundle` | Repo backups (May 2026 — stale) |
| Various `*.png` screenshots | Historical QA screenshots — safe to ignore |
| `/mnt/agents/upload/` | User-uploaded real photos (Duke's, Earl's, North Shore, restaurant photos, domain screenshots) |

---

## 7. KNOWN ISSUES & WATCH-OUTS

1. **Bundle size warning** — main JS chunk >500KB; consider code-splitting (not urgent)
2. **Older blogs lack galleries** — only desserts, Westman, and Earl's posts have photo galleries; older posts are hero-only
3. **GitHub push occasionally fails** with TLS errors — just retry
4. **Vercel "missing files" on first deploy attempt** is normal — upload them, then re-create the deployment
5. **Never use restaurant data not in the database** — blog content must reference real entries so internal links work

---

## 8. QUICK-START FOR KIMI WORK

To continue this project:
1. Clone/pull `hystechno/onooahu` → `/mnt/agents/output/app`
2. Read `src/data/restaurants.ts` for the full data model
3. Follow **Workflow A** for each scheduled content day
4. Follow **Workflow B** for deployment (re-establish Vercel credentials first)
5. Follow **Workflow C** checklist before every deploy
6. Hand off social content (Workflow D) to the user for manual posting
