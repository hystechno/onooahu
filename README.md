# Ono Oahu

**Hawaii's Best Restaurant Guide**

Ono Oahu is a curated, SEO-optimized dining guide for Oahu, Hawaii. It serves both tourists (6M+ annual visitors) and local residents with curated restaurant reviews, neighborhood guides, and practical travel planning resources.

- **Website**: [www.onooahu.com](https://www.onooahu.com)
- **Tech Stack**: React 19 + TypeScript + Vite + Tailwind CSS + shadcn/ui
- **Hosting**: Vercel (project: `ono.oahu`)
- **Domain**: Namecheap → Vercel

---

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Build for production
npm run build

# 4. Output is in dist/
# Deploy dist/ to Vercel
```

---

## Project Structure

```
app/
├── public/                    # Static assets (images, sitemap, verification)
│   ├── images/               # Restaurant & banner photos
│   ├── sitemap.xml           # SEO sitemap (31+ URLs)
│   ├── google1aa66904dd74b553.html  # Search Console verification
│   └── robots.txt
│
├── src/
│   ├── App.tsx               # Routes (HashRouter)
│   ├── main.tsx              # Entry point
│   ├── index.css             # Global styles + Tailwind
│   ├── components/           # Reusable UI components
│   │   ├── Carousel3D.tsx    # Hero carousel (3D CSS transforms)
│   │   ├── Navigation.tsx   # Top nav + Google Translate
│   │   ├── Footer.tsx       # Footer + newsletter + disclaimer
│   │   ├── SEOHead.tsx      # Dynamic meta tags + schema
│   │   ├── HotelSearchWidget.tsx  # Travelpayouts hotel search
│   │   ├── TravelCTA.tsx    # Hotel/activity affiliate cards
│   │   ├── MonetizeBanner.tsx     # Contextual CTA banners
│   │   ├── SponsoredBadge.tsx      # FTC "Sponsored" label
│   │   ├── PageLayout.tsx   # Consistent page wrapper
│   │   ├── GoogleTranslate.tsx     # Custom language dropdown
│   │   └── AdSenseSlot.tsx  # Placeholder for AdSense
│   │
│   ├── sections/             # Homepage sections
│   │   ├── FeaturedCollections.tsx
│   │   ├── Neighborhoods.tsx
│   │   ├── Blog.tsx
│   │   ├── PlanYourTrip.tsx  # Hotel search + activity CTAs
│   │   └── Newsletter.tsx
│   │
│   ├── pages/                # Route pages
│   │   ├── Home.tsx
│   │   ├── Discover.tsx      # All restaurants grid
│   │   ├── RestaurantDetail.tsx
│   │   ├── CollectionPage.tsx
│   │   ├── NeighborhoodPage.tsx
│   │   ├── BlogPost.tsx
│   │   ├── AboutPage.tsx
│   │   └── FAQPage.tsx       # AEO-optimized + FAQPage schema
│   │
│   ├── data/
│   │   ├── restaurants.ts    # All restaurant + blog + collection data
│   │   ├── neighborhoods.ts  # 6 neighborhood objects
│   │   └── affiliates.ts     # Travel context mappings
│   │
│   ├── utils/
│   │   ├── travelpayouts.ts  # URL generators (Booking.com, Viator)
│   │   ├── affiliate.ts      # OpenTable reservation links
│   │   └── schema.ts         # Schema.org JSON-LD generators
│   │
│   └── types/
│       └── index.ts          # TypeScript interfaces
│
├── index.html                # GA4 + Google Translate scripts
├── vite.config.ts            # Vite config with path aliases
├── tailwind.config.js        # Tailwind theme + shadcn
├── tsconfig.json             # TypeScript config
├── package.json              # Dependencies
└── .gitignore                # Excludes node_modules, dist, .vercel
```

---

## Key Files for Daily Editing

| Task | File | Line Hint |
|---|---|---|
| Add a restaurant | `src/data/restaurants.ts` | Add object to `restaurants` array |
| Add a blog post | `src/data/restaurants.ts` | Add object to `blogPosts` array |
| Add a collection | `src/data/restaurants.ts` | Add to `collections` array |
| Add neighborhood | `src/data/neighborhoods.ts` | Add to `neighborhoods` array |
| Add OpenTable link | `src/utils/affiliate.ts` | Add to `RESERVATION_LINKS` |
| Add to carousel | `src/components/Carousel3D.tsx` | Add to `cards` array |
| Change GA4 ID | `index.html` | Search `G-15VDGTM9M1` |
| Add sitemap URL | `public/sitemap.xml` | Add `<url>` block |
| Add image | `public/images/` | Save file, reference as `/images/name.jpg` |

---

## Adding a New Restaurant

### Step 1: Add data

Edit `src/data/restaurants.ts` and add a new object to the `restaurants` array:

```typescript
{
  id: 'restaurant-slug',          // URL-friendly, kebab-case
  name: 'Restaurant Name',
  neighborhood: 'Neighborhood',   // Must match existing neighborhood
  category: 'Beachfront Dining',  // Or 'Sunset Happy Hours', etc.
  rating: 4.5,                    // 0-5
  price: '$$$',                     // $, $$, $$$, $$$$
  description: '3-4 sentences about what makes it special. Include must-try dishes.',
  address: '123 Street, Honolulu, HI 96815',
  phone: '(808) 123-4567',
  hours: 'Daily: 11AM-10PM',
  mustTry: ['Dish One', 'Dish Two', 'Dish Three'],
  image: '/images/restaurant-name.jpg',
  tags: ['ocean view', 'happy hour'],
},
```

### Step 2: Add reservation link

Edit `src/utils/affiliate.ts`:

```typescript
'restaurant-slug': 'https://www.opentable.com/r/restaurant-name-honolulu',
```

### Step 3: Add image

Save a photo to `public/images/restaurant-name.jpg`:
- Minimum 1200×800 pixels
- JPG format, 80-85% quality
- Descriptive filename

### Step 4: Update collection counts

In `src/data/restaurants.ts`, increment the `count` field for any collection this restaurant belongs to.

### Step 5: Update sitemap

Add to `public/sitemap.xml`:

```xml
<url>
  <loc>https://www.onooahu.com/restaurants/restaurant-slug</loc>
  <lastmod>2026-05-01</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.7</priority>
</url>
```

### Step 6: Build & deploy

```bash
npm run build
cd dist
# Deploy via Vercel CLI
```

---

## Monetization Setup

### Live Partners (Travelpayouts)

| Partner | Commission | Partner ID |
|---|---|---|
| Booking.com | ~5% of booking | `722884` |
| Viator | ~8% of activity | `722884` |
| GetYourGuide | ~8% of activity | `722884` |

### Pending

| Partner | Status |
|---|---|
| Google AdSense | Not yet applied |
| OpenTable | Application rejected April 2026 — links kept for user convenience only |

### To Update Partner IDs

Edit `src/utils/travelpayouts.ts`:

```typescript
const TP_PARTNER_ID = '722884';  // Replace with new ID
```

---

## SEO & Analytics

### Google Analytics 4
- Tracking ID: `G-15VDGTM9M1`
- Script in `index.html`

### Google Search Console
- Property: `www.onooahu.com`
- Verified via HTML file: `public/google1aa66904dd74b553.html`
- Sitemap: `https://www.onooahu.com/sitemap.xml`

### Schema.org
Dynamic JSON-LD injected via `src/components/SEOHead.tsx`:
- Organization schema (homepage)
- Restaurant schema (detail pages)
- Article schema (blog posts)
- FAQPage schema (FAQ page)
- BreadcrumbList (all pages)

---

## Deployment

### Requirements
- Vercel account with access to project `ono.oahu`
- Vercel token (stored securely)
- Node.js 20+

### Deploy Script

```bash
# Build
cd /mnt/agents/output/app
npm run build

# Configure Vercel project
cd dist
rm -rf .vercel
mkdir .vercel
echo '{"projectId":"prj_YaGHUEKSRIcZP8y9HR6REscj3BrD","orgId":"team_iSC3oF0AcCuRf838QpB2VqSC"}' > .vercel/project.json

# Deploy
npx vercel --token "$VERCEL_TOKEN" --yes --prod
```

### Important Notes
- Uses **HashRouter** — URLs are `/#/restaurants/slug`, not `/restaurants/slug`
- `dist/` is generated — never edit files directly in `dist/`
- Images in `public/images/` are copied to `dist/images/` during build
- `vercel.json` is configured to handle SPA routing

---

## Brand Assets

### Ad Banners (7 sizes)
All banners live in `public/images/banners/`:

| Size | File | Best For |
|---|---|---|
| 728×90 | `leaderboard-728x90.jpg` | Page header |
| 300×250 | `medium-rectangle-300x250.jpg` | Sidebar |
| 160×280 | `vertical-rectangle-160x280.jpg` | Compact sidebar |
| 160×600 | `skyscraper-160x600.jpg` | Tall sidebar |
| 600×160 | `wide-skyscraper-600x160.jpg` | Wide header |
| 300×400 | `skyscraper-original.jpg` | Portrait sidebar |
| 320×50 | `mobile-leaderboard-320x50.jpg` | Mobile |

### Color Palette
| Token | Hex | Usage |
|---|---|---|
| Primary bg | `#faf8f5` | Page background |
| Card bg | `#f5ede4` | Cards, sections |
| Accent | `#d4a574` | Buttons, lines, CTAs |
| Text primary | `#1a1a1a` | Headlines |
| Text secondary | `#666666` | Body text |
| Warm brown | `#8B5E3C` | Titles, map |

### Fonts
- **Serif**: Playfair Display (Google Fonts) — headings, restaurant names
- **Sans-serif**: Inter (Google Fonts) — body, UI

---

## Troubleshooting

### Site is down
1. Check `https://www.onooahu.com`
2. Check Vercel dashboard for deployment status
3. If deployment failed: fix build error → rebuild → redeploy
4. If domain issue: verify Namecheap DNS → Vercel

### Build fails
```bash
# Common fixes
cd /mnt/agents/output/app
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Images not loading
- Verify image exists in `public/images/`
- Check path starts with `/images/` (not `images/`)
- Check file is under 5MB

### Google Translate not working
- Verify `index.html` has the Google Translate script
- Check `src/components/GoogleTranslate.tsx` is mounted

---

## Team Contact

| Role | Agent |
|---|---|
| Lead / Orchestration | Aden |
| Research / Intelligence | Ming |
| Development / Deployment | Taek |
| Marketing / Content | Nala |

**Owner**: Stuart / hys.techno@gmail.com

---

## License

Proprietary. All rights reserved.

*For the full project handoff with workflows, monetization plans, and monthly schedules, see `PROJECT_HANDOFF.md`.*
