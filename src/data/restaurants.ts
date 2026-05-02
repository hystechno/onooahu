export interface Restaurant {
  id: string;
  name: string;
  neighborhood: string;
  category: string;
  rating: number;
  price: string;
  description: string;
  address: string;
  phone: string;
  hours: string;
  mustTry: string[];
  image: string;
  tags: string[];
  gallery?: string[];
}

export const restaurants: Restaurant[] = [
  // Beachfront Dining
  {
    id: 'dukes-waikiki',
    name: "Duke's Waikiki",
    neighborhood: 'Waikiki',
    category: 'Beachfront Dining',
    rating: 4.5,
    price: '$$$',
    description: 'A Waikiki institution named after surfing legend Duke Kahanamoku. Located right on the sand with breathtaking ocean views, live Hawaiian music nightly, and a menu celebrating fresh island fish and classic Hawaiian comfort food. The barefoot bar is perfect for sunset cocktails.',
    address: '2335 Kalakaua Ave #116, Honolulu, HI 96815',
    phone: '(808) 922-2268',
    hours: 'Mon-Sun: 7AM-12AM',
    mustTry: ['Hula Pie', 'Fish Tacos', 'Mai Tai'],
    image: '/images/hero-card-3.jpg',
    tags: ['ocean view', 'live music', ' iconic'],
  },
  {
    id: 'earls-waikiki',
    name: "Earls Kitchen + Bar",
    neighborhood: 'Waikiki',
    category: 'Beachfront Dining',
    rating: 4.4,
    price: '$$$',
    description: "Canada's iconic restaurant chain makes its Hawaii debut on Kalakaua Avenue. This massive 13,000-square-foot, open-air space features tropical greenery, skylights, and artwork from local Hawaiian artists. The menu blends Modern American with global flavors — from wagyu beef oshi press to sticky Korean ribs — while the bi-daily happy hour offers half-price cocktails in the lounge. The late-night happy hour from 10 PM to close is a Waikiki rarity.",
    address: '2280 Kalakaua Ave, Honolulu, HI 96815',
    phone: '(808) 751-2299',
    hours: 'Mon-Sun: 11AM-Late (Fri-Sat until 1AM)',
    mustTry: ['Wagyu Beef Oshi Press', 'Sticky Korean Ribs', 'Earls Lime Margarita'],
    image: '/images/earls-waikiki.jpg',
    tags: ['new', 'happy hour', 'late night', 'live music'],
  },
  {
    id: 'monkeypod-waikiki',
    name: "Monkeypod Kitchen by Merriman",
    neighborhood: 'Waikiki',
    category: 'Beachfront Dining',
    rating: 4.7,
    price: '$$$',
    description: "Chef Peter Merriman's newest outpost, right on the waterfront at the Outrigger Reef Waikiki Beach Resort. This chef-driven concept showcases Hawaii Regional Cuisine at its finest — farm-fresh local ingredients, handcrafted cocktails including their legendary Monkeypod Mai Tai with honey-lilikoi foam, and live local music daily. The oceanfront patio offers unobstructed Diamond Head views.",
    address: '2169 Kalia Rd Unit 111, Honolulu, HI 96815',
    phone: '(808) 900-4226',
    hours: 'Daily: 7AM-11PM',
    mustTry: ['Monkeypod Mai Tai', 'Macadamia Nut Crusted Fish', 'Banana Cream Pie'],
    image: '/images/monkeypod-waikiki.jpg',
    tags: ['ocean view', 'happy hour', 'live music', 'farm to table'],
  },
  {
    id: 'house-without-key',
    name: 'House Without a Key',
    neighborhood: 'Waikiki',
    category: 'Beachfront Dining',
    rating: 4.7,
    price: '$$$$',
    description: 'The epitome of old Hawaii charm. Sip cocktails under a century-old kiawe tree while watching the sunset over Diamond Head. Live Hawaiian music and hula dancing nightly make this the most romantic spot in Waikiki.',
    address: '2199 Kalia Rd, Honolulu, HI 96815',
    phone: '(808) 923-2311',
    hours: 'Mon-Sun: 7AM-10PM',
    mustTry: ['Lobster Roll', 'Pina Colada', 'Coconut Cake'],
    image: '/images/neighborhood-waikiki.jpg',
    tags: ['sunset views', 'hula', 'romantic'],
  },
  {
    id: 'moku-kitchen',
    name: "Moku Kitchen",
    neighborhood: "Kaka'ako",
    category: 'Beachfront Dining',
    rating: 4.4,
    price: '$$$',
    description: 'A modern island eatery with an open-air vibe and locally sourced ingredients. Known for their wood-fired pizzas, fresh fish, and craft cocktails. The patio offers a lively atmosphere in the heart of Kakaako.',
    address: '660 Ala Moana Blvd #136, Honolulu, HI 96813',
    phone: '(808) 699-5000',
    hours: 'Mon-Sun: 11AM-10PM',
    mustTry: ['Wood-Fired Pizza', 'Fresh Catch', 'Lychee Martini'],
    image: '/images/neighborhood-kakaako.jpg',
    tags: ['farm-to-table', 'patio', 'craft cocktails'],
  },
  // Hidden Gems
  {
    id: 'helena-hawaiian-food',
    name: "Helena's Hawaiian Food",
    neighborhood: 'Kalihi',
    category: 'Hidden Gems',
    rating: 4.8,
    price: '$',
    description: 'A James Beard Award-winning institution serving traditional Hawaiian food since 1946. The pipikaula short ribs and kalua pig are legendary. Cash only, counter service, and absolutely worth the drive to Kalihi.',
    address: '1240 N School St, Honolulu, HI 96817',
    phone: '(808) 845-8044',
    hours: 'Tue-Fri: 10AM-7:30PM',
    mustTry: ['Pipikaula Short Ribs', 'Kalua Pig', 'Lomi Salmon'],
    image: '/images/hero-card-4.jpg',
    tags: ['James Beard', 'traditional', 'cash only'],
  },
  {
    id: 'waiola-shave-ice',
    name: 'Waiola Shave Ice',
    neighborhood: 'Kapahulu',
    category: 'Hidden Gems',
    rating: 4.6,
    price: '$',
    description: 'The best shave ice on the island, period. superfine ice that absorbs syrup like snow, with flavors ranging from classic strawberry to exotic lilikoi and li hing mui. Add azuki beans and condensed milk for the full experience.',
    address: '3113 Mokihana St, Honolulu, HI 96816',
    phone: '(808) 735-8886',
    hours: 'Mon-Sun: 9AM-6PM',
    mustTry: ['Lilikoi Shave Ice', 'Rainbow', 'Azuki Bean Bowl'],
    image: '/images/hero-card-6.jpg',
    tags: ['dessert', 'local favorite', 'cheap'],
  },
  {
    id: 'onos-seafood',
    name: "Ono Seafood",
    neighborhood: 'Kapahulu',
    category: 'Hidden Gems',
    rating: 4.7,
    price: '$$',
    description: 'A tiny takeout counter with arguably the best poke on Oahu. The aku (skipjack tuna) and spicy ahi are prepared fresh daily using family recipes. Get there early — they sell out by mid-afternoon.',
    address: '747 Kapahulu Ave, Honolulu, HI 96816',
    phone: '(808) 732-4806',
    hours: 'Mon-Sat: 9AM-6PM',
    mustTry: ['Shoyu Ahi', 'Spicy Ahi', 'Aku Poke'],
    image: '/images/hero-card-2.jpg',
    tags: ['poke', 'takeout', 'fresh daily'],
  },
  // Plate Lunch Legends
  {
    id: 'rainbow-drive-in',
    name: "Rainbow Drive-In",
    neighborhood: 'Kapahulu',
    category: 'Plate Lunch Legends',
    rating: 4.5,
    price: '$',
    description: 'A local institution since 1961. Famous for their classic plate lunch, chili, and the iconic loco moco. The gravy-smothered mix plate feeds two and costs less than a Waikiki cocktail. Pure comfort food.',
    address: '3308 Kanaina Ave, Honolulu, HI 96815',
    phone: '(808) 737-0177',
    hours: 'Mon-Sat: 7AM-9PM',
    mustTry: ['Loco Moco', 'Mix Plate', 'Chili Rice'],
    image: '/images/collection-plate.jpg',
    tags: ['plate lunch', 'local', 'cheap'],
  },
  {
    id: 'giovannis-shrimp-truck',
    name: "Giovanni's Shrimp Truck",
    neighborhood: 'North Shore',
    category: 'Plate Lunch Legends',
    rating: 4.6,
    price: '$$',
    description: 'The original North Shore shrimp truck that started it all. Their signature garlic shrimp scampi — swimming in buttery garlic sauce with two scoops of rice — is a rite of passage for any Oahu visitor.',
    address: '66-472 Kamehameha Hwy, Haleiwa, HI 96712',
    phone: '(808) 293-1839',
    hours: 'Mon-Sun: 10:30AM-6:30PM',
    mustTry: ['Garlic Shrimp Scampi', 'Hot & Spicy Shrimp', 'Lemon Butter'],
    image: '/images/hero-card-1.jpg',
    tags: ['food truck', 'garlic shrimp', 'North Shore'],
  },
  {
    id: 'liliha-bakery',
    name: 'Liliha Bakery',
    neighborhood: 'Liliha',
    category: 'Plate Lunch Legends',
    rating: 4.4,
    price: '$',
    description: 'Famous for their coco puffs — cream puffs filled with chocolate custard and topped with chantilly frosting — and all-day breakfast. A Honolulu classic that has been serving locals since 1950.',
    address: '515 N Kuakini St, Honolulu, HI 96817',
    phone: '(808) 531-1651',
    hours: 'Mon-Sun: 24 hours',
    mustTry: ['Coco Puffs', 'Pancakes', 'Chantilly Cake'],
    image: '/images/hero-card-6.jpg',
    tags: ['bakery', '24 hours', 'breakfast'],
  },
  // Sunset Happy Hours
  {
    id: 'mai-tai-bar',
    name: 'Mai Tai Bar',
    neighborhood: 'Waikiki',
    category: 'Sunset Happy Hours',
    rating: 4.3,
    price: '$$',
    description: 'Perched above Waikiki Beach at The Royal Hawaiian, this open-air bar serves legendary mai tais with Diamond Head views. Happy hour features discounted tropical cocktails and pupu platters.',
    address: '2259 Kalakaua Ave, Honolulu, HI 96815',
    phone: '(808) 923-7311',
    hours: 'Mon-Sun: 11AM-11PM',
    mustTry: ['Royal Mai Tai', 'Lava Flow', 'Ahi Poke Tacos'],
    image: '/images/collection-sunset.jpg',
    tags: ['mai tai', 'beachfront', 'happy hour'],
  },
  {
    id: 'tommy-bahama',
    name: "Tommy Bahama Restaurant",
    neighborhood: 'Waikiki',
    category: 'Sunset Happy Hours',
    rating: 4.4,
    price: '$$$',
    description: 'Rooftop dining with panoramic Waikiki sunset views. Happy hour offers half-price appetizers and tropical cocktails. The ahi poke nachos and mai tais are the perfect pre-dinner combo.',
    address: '2980 Kala Pl, Honolulu, HI 96815',
    phone: '(808) 923-8785',
    hours: 'Mon-Sun: 11AM-10PM',
    mustTry: ['Ahi Poke Nachos', 'Mai Tai', 'Coconut Shrimp'],
    image: '/images/blog-happyhour.jpg',
    tags: ['rooftop', 'sunset', 'happy hour'],
  },
  {
    id: 'skull-crown',
    name: 'Skull & Crown Trading Co.',
    neighborhood: 'Chinatown',
    category: 'Sunset Happy Hours',
    rating: 4.5,
    price: '$$',
    description: 'A hidden tiki bar in Chinatown crafting some of the island\'s most creative cocktails. The dimly lit, nautical-themed interior feels like a secret society meeting spot. The Chief Lapu Lapu is a must.',
    address: '62 N Hotel St, Honolulu, HI 96817',
    phone: '(808) 524-2091',
    hours: 'Tue-Sat: 5PM-2AM',
    mustTry: ['Chief Lapu Lapu', 'Zombie', 'Pupu Platter'],
    image: '/images/hero-card-5.jpg',
    tags: ['tiki', 'cocktails', 'hidden'],
  },
  {
    id: 'monkeypod-waikiki-hh',
    name: "Monkeypod Kitchen by Merriman",
    neighborhood: 'Waikiki',
    category: 'Sunset Happy Hours',
    rating: 4.7,
    price: '$$$',
    description: "Two happy hours daily at this oceanfront gem inside the Outrigger Reef. Early Bird (7-11am) offers $4 off handcrafted cocktails, while the afternoon session (3:30-5pm) features discounted culinary cocktails, wines by the glass, and draft beers. Their legendary Monkeypod Mai Tai with honey-lilikoi foam is worth the visit alone.",
    address: '2169 Kalia Rd Unit 111, Honolulu, HI 96815',
    phone: '(808) 900-4226',
    hours: 'Daily: 7AM-11PM (Happy Hour 7-11AM & 3:30-5PM)',
    mustTry: ['Monkeypod Mai Tai', 'Macadamia Nut Crusted Fish', 'Banana Cream Pie'],
    image: '/images/monkeypod-waikiki.jpg',
    tags: ['ocean view', 'happy hour', 'live music', 'farm to table'],
  },
  {
    id: 'earls-waikiki-hh',
    name: "Earls Kitchen + Bar",
    neighborhood: 'Waikiki',
    category: 'Sunset Happy Hours',
    rating: 4.4,
    price: '$$$',
    description: "The hottest new happy hour in Waikiki — and the only one that runs until 1 AM on weekends. Canada's Earls chain brings two daily happy hours: 2-5 PM with live music, and a late-night session from 10 PM to close. Half-price cocktails, $7 cheekies, and a dedicated lounge menu with Nashville crispy chicken skewers and sticky Korean ribs.",
    address: '2280 Kalakaua Ave, Honolulu, HI 96815',
    phone: '(808) 751-2299',
    hours: 'Happy Hour: Daily 2PM-5PM & 10PM-Close',
    mustTry: ['Nitro Espresso Martini', 'Nashville Chicken Skewers', 'Earls Old Fashioned'],
    image: '/images/collection-sunset.jpg',
    tags: ['late night', 'happy hour', 'new', 'live music'],
  },
  {
    id: 'leonards-bakery',
    name: "Leonard's Bakery",
    neighborhood: 'Kapahulu',
    category: 'Hidden Gems',
    rating: 4.7,
    price: '$',
    description: 'Home of the original malasada — hot, sugar-dusted Portuguese donuts since 1952. The line wraps around the block every morning, but the warm, fluffy malasadas fresh from the fryer are worth the wait.',
    address: '933 Kapahulu Ave, Honolulu, HI 96816',
    phone: '(808) 737-5591',
    hours: 'Mon-Sun: 5:30AM-10PM',
    mustTry: ['Original Malasada', 'Li Hing Malasada', 'Pao Doce'],
    image: '/images/hero-card-6.jpg',
    tags: ['bakery', 'malasadas', 'iconic'],
  },
  {
    id: 'mw-restaurant',
    name: "MW Restaurant",
    neighborhood: "Kaka'ako",
    category: 'Beachfront Dining',
    rating: 4.6,
    price: '$$$$',
    description: 'James Beard Award-winning chefs Michelle Karr-Ueoka and Wade Ueoka elevate local ingredients into refined, modern Hawaiian cuisine. Each dish tells a story of the islands through technique and tradition.',
    address: '1538 Kapiolani Blvd, Honolulu, HI 96814',
    phone: '(808) 955-6505',
    hours: 'Tue-Sat: 5PM-9PM',
    mustTry: ['Miso Butterfish', 'Korean Fried Chicken', 'Hawaiian Chocolate dessert'],
    image: '/images/hero-card-7.jpg',
    tags: ['fine dining', 'James Beard', 'modern Hawaiian'],
  },
  {
    id: 'westman-cafe',
    name: 'Westman Cafe',
    neighborhood: "Kaka'ako",
    category: 'Hidden Gems',
    rating: 4.5,
    price: '$$',
    description: 'A bright, airy all-day cafe in the heart of Kakaako serving souffle pancakes, artisan toasts, and specialty coffee. The light wood interior, turquoise accents, and open kitchen create a welcoming neighborhood gathering spot that has quickly become a local favorite since opening in early 2026.',
    address: '1000 Auahi St, Honolulu, HI 96814',
    phone: '(808) 555-0142',
    hours: 'Daily: 7:30AM-2PM',
    mustTry: ['Souffle Pancake', 'Avocado Toast', 'House Latte'],
    image: '/images/westman-cafe-bar.jpg',
    tags: ['breakfast', 'brunch', 'coffee', 'new'],
    gallery: [
      '/images/westman-cafe-interior.jpg',
      '/images/westman-cafe-shakshuka.jpg',
      '/images/westman-cafe-french-toast.jpg',
      '/images/westman-cafe-drinks.jpg',
      '/images/westman-cafe-menu.jpg',
      '/images/westman-cafe-seating.jpg',
    ],
  },
];

export const collections = [
  {
    slug: 'beachfront',
    title: 'Beachfront Dining',
    description: 'The best restaurants on Oahu where the sand meets your table. From casual barefoot bars to upscale oceanfront dining, these spots offer unforgettable meals with Pacific views.',
    image: '/images/collection-beachfront.jpg',
    count: 13,
    filter: (r: Restaurant) => r.category === 'Beachfront Dining',
  },
  {
    slug: 'hidden-gems',
    title: 'Hidden Gems',
    description: 'Off-the-beaten-path spots that locals guard jealously. James Beard winners, tiny takeout counters, and neighborhood secrets that define real Hawaiian food culture.',
    image: '/images/collection-hidden.jpg',
    count: 8,
    filter: (r: Restaurant) => r.category === 'Hidden Gems',
  },
  {
    slug: 'plate-lunch',
    title: 'Plate Lunch Legends',
    description: 'The backbone of Hawaiian comfort food — two scoops rice, one scoop mac salad, and your choice of protein. These are the iconic spots that perfected the plate lunch.',
    image: '/images/collection-plate.jpg',
    count: 10,
    filter: (r: Restaurant) => r.category === 'Plate Lunch Legends',
  },
  {
    slug: 'happy-hours',
    title: 'Sunset Happy Hours',
    description: 'Where to score discounted tropical cocktails, pupu platters, and the best golden-hour views on the island. Because every day in Hawaii should end with a mai tai.',
    image: '/images/collection-sunset.jpg',
    count: 8,
    filter: (r: Restaurant) => r.category === 'Sunset Happy Hours',
  },
];

export const blogPosts = [
  {
    slug: 'best-poke-bowls',
    title: 'The 10 Best Poke Bowls on Oahu',
    category: 'Food',
    date: 'March 15, 2026',
    excerpt: 'From traditional shoyu ahi to creative fusion bowls, these are the poke spots that define the Hawaiian raw fish tradition.',
    image: '/images/blog-poke.jpg',
    content: `Poke (pronounced "POH-kay") is more than just a food trend in Hawaii — it's a way of life. This traditional Hawaiian dish of cubed raw fish, seasoned with everything from soy sauce and sesame to spicy mayo and wasabi, has been enjoyed on the islands for centuries.

In this guide, we're sharing our top 10 poke spots on Oahu, from legendary institutions that have been serving the same recipes for generations to modern innovators pushing the boundaries of what poke can be.

## 1. Ono Seafood (Kapahulu)
The gold standard. This tiny takeout counter has been family-run for decades, and their shoyu ahi is the benchmark against which all other poke is measured. Get there before 2 PM — they sell out daily.

**Must Try:** Shoyu Ahi, Spicy Ahi

## 2. Tamashiro Market (Kalihi)
A wholesale fish market that happens to sell some of the freshest poke on the island. The variety here is unmatched — choose from a dozen different fish and preparations.

**Must Try:** Hawaiian Style Aku, Kimchee Tako

## 3. Fresh Catch (Multiple Locations)
Chef Reno Henriques has elevated poke to an art form. His monthly specials and creative combinations keep regulars coming back weekly.

**Must Try:** Truffle Ahi Poke, Poke of the Month

## 4. Off the Hook (Manoa)
A neighborhood favorite with a dedicated following. Their portions are generous and the fish is always impeccably fresh.

**Must Try:** Limu Ahi, Shoyu Salmon

## 5. Ahi & Vegetables (Chinatown)
Located in the heart of Chinatown, this no-frills counter serves some of the most authentic traditional poke on the island. The prices are unbeatable.

**Must Try:** Traditional Shoyu Ahi, Spicy Scallop

## 6. Nico's at Pier 38 (Kaka'ako)
Right at the fishing harbor, Nico's gets the freshest catch possible. Their poke nachos are legendary, and the harbor views make the experience complete.

**Must Try:** Poke Nachos, Furikake Ahi

## 7. Salted Lemon (Kaimuki)
A relative newcomer that has quickly earned a cult following. Their creative flavor combinations — think yuzu kosho and truffle shoyu — bring a modern twist to tradition.

**Must Try:** Yuzu Ahi, Garlic Ponzu Salmon

## 8. Alicia's Market (Kalihi)
Another hidden gem in Kalihi, Alicia's offers a wide variety of poke styles at prices that haven't changed much in years. The spicy dried shrimp poke is a sleeper hit.

**Must Try:** Spicy Dried Shrimp, Miso Ahi

## 9. Tanioka's Seafood & Catering (Waipahu)
Worth the drive to Waipahu. Tanioka's has been a west side institution for over 40 years, and their poke is consistently rated among the island's best.

**Must Try:** Hawaiian Style Ahi, Spicy Ahi Bowl

## 10. Suisan Fish Market (Hilo — Big Island detour)
Okay, this one's technically not on Oahu, but if you find yourself on the Big Island, Suisan is poke nirvana. Located right at the harbor, the fish couldn't be fresher.

**Must Try:** Sesame Ahi, Kimchee Crawfish

## Tips for Poke First-Timers

- **Go early.** The best poke counters sell out by early afternoon.
- **Ask for a taste.** Most poke shops will let you sample before buying.
- **Mix it up.** Get a half-pound of two different kinds to compare.
- **Eat it fresh.** Poke is best consumed within a few hours of purchase — don't let it sit in a hot car.
- **Try the classics first.** Before venturing into fusion flavors, try traditional shoyu or Hawaiian style to appreciate the simplicity.

Poke isn't just food in Hawaii — it's a connection to the ocean, to tradition, and to the community. Each bowl tells a story of the fishermen who caught the fish, the families who perfected the recipes, and the culture that celebrates freshness above all else.`,
  },
  {
    slug: 'north-shore-guide',
    title: "Where to Eat on the North Shore: A Local's Guide",
    category: 'Travel',
    date: 'March 8, 2026',
    excerpt: "Skip the tourist traps and discover where locals actually eat along Oahu's legendary North Shore.",
    image: '/images/blog-northshore.jpg',
    content: `The North Shore of Oahu is world-famous for its massive winter waves and surfing culture, but the food scene is equally legendary. This 7-mile stretch of coastline from Haleiwa to Sunset Beach is home to some of the island's most iconic eats — from garlic shrimp trucks to old-school Hawaiian bakeries.

Here's our local-approved guide to eating your way up the North Shore.

## Haleiwa Town

### Giovanni's Shrimp Truck
The original and still the best. Their garlic shrimp scampi — swimming in a pool of buttery garlic sauce — is the reason people drive an hour from Waikiki. Bring cash, bring wet wipes, and prepare to wait in line. It's worth it.

### Matsumoto Shave Ice
A North Shore institution since 1951. Yes, it's touristy, but there's a reason the line wraps around the block. The ice is superfine, the syrups are house-made, and adding ice cream and azuki beans transforms it into a proper dessert.

### Haleiwa Joe's
The best casual seafood on the North Shore. Their grilled fish plates and harbor views make this a perfect sunset dinner spot. The mai tais are dangerously strong.

### Waialua Bakery
A hidden gem most tourists miss. Their acai bowls are made with locally grown fruit, and the homemade breads and pastries are baked fresh every morning.

## Along Kamehameha Highway

### Ted's Bakery
Famous for their chocolate haupia cream pie — a Hawaiian classic that layers chocolate pudding, coconut haupia, and whipped cream in a buttery crust. They also do excellent plate lunches and garlic shrimp.

### Aji Limo
A food truck serving some of the most creative Mexican-Hawaiian fusion on the island. The fish tacos, made with fresh-caught ahi, are legendary.

### The Elephant Truck
Thai food from a truck? Trust us on this one. Their pad thai and green curry are made with fresh island ingredients and pack serious flavor.

## Kahuku & Beyond

### Romy's Kahuku Prawns
If you see a long line of locals on the side of the road, you've found Romy's. They farm their own prawns and cook them to order — the garlic butter prawns are life-changing.

### Fumi's Kahuku Shrimp
Another legendary shrimp truck with ocean views. Their spicy garlic shrimp has the perfect kick, and the outdoor seating area faces the water.

### Hukilau Cafe
Made famous by the movie "50 First Dates," this is where locals actually eat breakfast. The banana pancakes and loco moco are massive and delicious.

## North Shore Eating Tips

- **Bring cash.** Many shrimp trucks and small spots are cash-only.
- **Timing is everything.** Go early for breakfast spots and before noon for shrimp trucks to beat the crowds.
- **Check the surf report.** Winter swells bring massive waves and even bigger crowds — eat early or late.
- **Don't skip the fruit stands.** Roadside stands selling fresh coconut, pineapple, and tropical fruit are everywhere and worth every penny.
- **Stay for sunset.** The North Shore has some of the best sunset views on the island — grab a plate and eat on the beach.

The North Shore isn't just a day trip — it's a culinary destination. Give yourself a full day, come hungry, and don't rush. Some of the best meals on Oahu are eaten with sandy feet and an ocean view.`,
  },
  {
    slug: 'happy-hour-gems',
    title: 'Happy Hour Hidden Gems in Waikiki',
    category: 'Drinks',
    date: 'February 28, 2026',
    excerpt: 'The best deals on cocktails, pupus, and ocean views — without the crowds.',
    image: '/images/blog-happyhour.jpg',
    content: `Waikiki happy hours can be a minefield of overpriced tourist traps and watered-down mai tais. But hidden among the hotel bars and beachfront lounges are some genuine gems — places where locals actually go for discounted drinks, quality pupus, and sunset views that rival the postcard shots.

Here are our favorite hidden happy hours in Waikiki.

## The Best Happy Hours

### Mai Tai Bar at The Royal Hawaiian
Happy Hour: 3-5 PM daily

The mai tai was literally invented at this bar (okay, technically at the original in Oakland, but they perfected it here). During happy hour, their legendary Royal Mai Tai is discounted, and the pupu menu features elevated bar bites like ahi poke tacos and kalua pork sliders. The Diamond Head views from the terrace are unmatched.

### Tommy Bahama Rooftop
Happy Hour: 3-6 PM daily

Most tourists don't know Tommy Bahama has a rooftop restaurant, which makes it a local secret. Half-price appetizers include their famous ahi poke nachos and coconut shrimp. The sunset views over Waikiki Beach are spectacular.

### Azure at The Royal Hawaiian
Happy Hour: 5-7 PM Tue-Sat

For a more upscale happy hour, Azure offers discounted oysters, ceviche, and craft cocktails in an elegant oceanfront setting. The Waikiki location makes it perfect for a pre-dinner drink.

### Hula Grill
Happy Hour: 3-5 PM, 9-11 PM daily

A local favorite with two happy hours — one for sunset, one for night owls. The barefoot bar is literally on the sand, and the Hula Pie (ice cream, chocolate cookie crust, hot fudge, whipped cream) is the island's most famous dessert.

### Tiki's Grill & Bar
Happy Hour: 2-5 PM daily

Located in the Aston Waikiki Beach Hotel, Tiki's has one of the best sunset happy hours in Waikiki. Tropical cocktails are half-price, and the pupu menu includes kalua pork egg rolls and coconut shrimp.

### The M这是错误，请修复。

**Mina's Fish House**
Happy Hour: 3-5:30 PM daily

A newer addition to the Waikiki scene with a focus on fresh, locally caught seafood. Their raw bar happy hour features discounted oysters, poke, and ceviche.

## Waikiki Happy Hour Tips

- **Hotel bars are your friend.** The best happy hours are often in hotel lobby bars, which locals frequent but many tourists overlook.
- **Early bird gets the seat.** Popular spots fill up by 4 PM — arrive early for prime sunset seating.
- **Check social media.** Many places post daily specials and flash deals on Instagram.
- **Don't sleep on the pupus.** Hawaiian happy hour food is often just as good as the drinks — the poke, sliders, and seafood are genuinely excellent.
- **Walk around.** Some of the best finds are places you stumble into while exploring — Waikiki has surprises on every block.

Waikiki happy hours aren't just about cheap drinks — they're a window into the island's social culture. Grab a mai tai, order some poke, and watch the sun dip below the Pacific. That's the real Hawaii.`,
  },
  {
    slug: 'westman-cafe-kakaako',
    title: 'Westman Cafe: The Bright New Breakfast Spot in Kakaako',
    category: 'Food',
    date: 'April 20, 2026',
    excerpt: "A light-filled all-day cafe serving souffle pancakes, artisan toasts, and specialty coffee has become Kakaako's hottest new neighborhood spot.",
    image: '/images/westman-cafe-bar.jpg',
    gallery: [
      '/images/westman-cafe-shakshuka.jpg',
      '/images/westman-cafe-french-toast.jpg',
      '/images/westman-cafe-drinks.jpg',
      '/images/westman-cafe-interior.jpg',
    ],
    content: `Kakaako has a new breakfast obsession, and its name is Westman Cafe.

Tucked into the ground floor of a new development on Auahi Street, this bright, airy all-day cafe has quietly become the neighborhood's most sought-after brunch reservation since opening in early 2026. With its light wood interior, turquoise accents, Edison bulb lighting, and an open kitchen that lets you watch the action, Westman feels like the kind of place that was built specifically for Kakaako's creative, young professional crowd.

## The Space

Westman occupies a corner space that fills with natural light through floor-to-ceiling windows. The interior is anchored by a long bar with turquoise paneling and wooden stools, where solo diners and remote workers settle in with laptops and lattes. Above the bar, shelves display liquor bottles and potted plants, while a curved mirror in the back reads "THE BEST VIEW OF THE DAY" — a nod to the cafe's morning-focused ethos.

The open kitchen is a focal point. You can watch chefs prepare souffle pancakes, build avocado toasts, and pull espresso shots on professional-grade equipment. The design strikes a balance between Instagram-worthy aesthetics and genuine functionality — this isn't a place that prioritizes looks over quality.

## The Menu

Westman's menu is focused and intentional. Breakfast and brunch are the stars, served daily from 7:30 AM to 2 PM.

**The Souffle Pancake ($22)** is the dish that has everyone talking. These are not ordinary pancakes — they're tall, airy, cloud-like creations that arrive at the table dramatically deflating as you cut into them. Served with a choice of sauce (mixed berry, tropical, or maple), they're the kind of dish that makes neighboring tables stop and stare.

**The Avocado Toast ($17)** is built on sourdough from Bread Shop, a beloved Kaimuki bakery. It's topped with a perfectly poached egg, herb oil, and dukkah — an Egyptian spice blend that adds a nutty, complex crunch.

**The Salmon Gravlax Toast ($18)** is a more indulgent option, featuring cured salmon, labneh, roasted beets, and fresh dill on the same excellent sourdough.

For coffee, the **House Blend ($5)** is smooth and approachable, while the **Latte ($6)** and **Hazelnut Latte ($7)** are creamy and well-balanced. The cafe takes its coffee seriously — the beans are displayed in branded "WESTMAN CAFE" bags near the entrance.

## What to Know Before You Go

- **Reservations are recommended.** Westman uses OpenTable, and weekend brunch slots fill up quickly.
- **Come early for the pancakes.** The souffle pancakes take 20-25 minutes to prepare, and the kitchen can only make so many at once.
- **It's breakfast and brunch only for now.** The cafe closes at 2 PM daily, though there's talk of eventual dinner service.
- **Parking is street or metered.** The Ward Village area has several paid lots nearby if you can't find street parking.

## Why It Matters

Westman Cafe represents something important for Kakaako: a neighborhood spot that feels designed for locals rather than tourists. In an area that has seen rapid development and increasingly corporate dining options, Westman brings a personal, community-focused energy. The fact that they source bread from a nearby Kaimuki bakery, employ an open kitchen, and maintain a breakfast-only schedule shows a commitment to doing one thing exceptionally well rather than trying to be everything to everyone.

For Kakaako residents, Westman is already becoming the default answer to "where should we get breakfast?" For visitors, it's a chance to eat where the locals eat — and to understand why Kakaako has become Oahu's most exciting food neighborhood.

**Westman Cafe** — 1000 Auahi St, Kakaako. Open daily 7:30 AM–2 PM. Reservations via OpenTable.`,
  },
  {
    slug: 'earls-late-night-happy-hour-waikiki',
    title: "Earls Kitchen + Bar: Waikiki's Hottest New Late-Night Happy Hour",
    category: 'Drinks',
    date: 'May 15, 2026',
    excerpt: "Canada's iconic restaurant chain makes its Hawaii debut with a rare bi-daily happy hour — including a late-night session that runs until 1 AM on weekends.",
    image: '/images/collection-sunset.jpg',
    content: `Waikiki just got a major new player, and it's open until 1 AM.

Earls Kitchen + Bar, the iconic Canadian restaurant chain with over 70 locations across North America, made its Hawaii debut in October 2025 — and it's already reshaping how Waikiki thinks about late-night dining. Located on the second floor of the historic Waikiki sign building at 2280 Kalakaua Avenue, this 13,000-square-foot space is one of the largest restaurants in the neighborhood, with 300+ seats, open-air skylights, tropical greenery, and artwork exclusively from local Hawaiian artists.

But the real story here isn't the size — it's the schedule. Earls runs not one, but **two happy hours every single day**, and the second one is a Waikiki rarity: a true late-night session that starts at 10 PM and runs until close.

## The Space

Earls occupies the entire second floor of one of Waikiki's most recognizable buildings — the one with the vertical "WAIKIKI" sign. The interior was designed specifically for the Hawaii market: high ceilings with skylights that let in natural light during the day, lush tropical greenery throughout, and walls adorned with pieces from local Hawaiian artists, commissioned specifically for the space.

The layout is split between a full dining room and a dedicated lounge area — and it's the lounge where the happy hour magic happens. High-top tables, bar seating, and comfortable booths create a space that feels distinctly different from the main dining room. During the day, it's bright and airy. At 10 PM, the lighting dims, the music shifts, and the lounge transforms into Waikiki's most exciting late-night scene.

## The Bi-Daily Happy Hour

**Afternoon Session: 2 PM – 5 PM Daily**

The early happy hour is lounge-only and features half-price select cocktails, $3 off beer and cider, and $7 cheekies (bar rail mixed drinks). Live acoustic music plays during this window, making it feel like a relaxed pre-dinner hangout rather than a frantic rush for cheap drinks.

The cocktail list at Earls is built for volume without sacrificing quality. The **Earls Lime Margarita** ($8 during happy hour, $16 regular) is the bestseller — a clean, citrus-forward margarita that arrives quickly and consistently. The **Nitro Espresso Martini** ($8.50 during happy hour) is the late-night favorite, cold-brewed and nitrogen-infused for a creamy, caffeinated kick that keeps the energy going past midnight.

**Late-Night Session: 10 PM – Close Daily**

This is what makes Earls genuinely special in Waikiki. While most hotel bars last-call at 11 PM and most restaurants close by 10 PM, Earls keeps the lounge open and the deals flowing until midnight Sunday through Thursday — and **until 1 AM on Friday and Saturday**.

The late-night menu mirrors the afternoon pricing but shifts the energy entirely. The music gets louder, the crowd gets younger, and the kitchen keeps firing. This is when you'll find service industry workers, night-shift hotel staff, and locals who refuse to accept that Waikiki shuts down at 10 PM.

## What to Order

**The Nashville Crispy Chicken Skewers ($12)** are the unexpected star of the happy hour menu — tender chicken thigh marinated in house Nashville hot sauce, served on skewers with ranch dip. They're designed for sharing but rarely make it past the person who ordered them.

**The Sticky Korean Ribs ($18)** are another lounge exclusive — slow-braised pork ribs glazed with gochujang, sesame, and scallion, with enough heat to wake you up without overwhelming the palate.

For drinks, the **White Sangria ($7.50)** is the best value on the menu — a crisp, fruity sangria built with sparkling wine that drinks like vacation in a glass. The **Earls Old Fashioned ($8)** uses bourbon, demerara syrup, and orange bitters, executed with the consistency of a chain that has made millions of them.

## The Full Restaurant

Beyond the lounge, Earls operates as a serious full-service restaurant. The kitchen, led by Regional Chef Randy Pena, serves a Modern American menu with global touches from 11 AM until close.

**Standout dishes:**
- **Wagyu Beef Oshi Press ($24)** — Aburi-style pressed sushi with truffle sauce and jalapeno, the menu's most-ordered appetizer
- **Jumbo Lump Crab Cake ($29)** — U15 crab, fire-roasted corn, sriracha aioli
- **Tomahawk Maple-Glazed Pork Chop ($36)** — 14-hour brined, bone-in chop with sweet potato mash and broccolini
- **Black Truffle Butter Steak ($48)** — 8oz filet with porcini mushroom rub, truffle butter, and garlic mashed potatoes

Weekend brunch (10 AM – 2 PM, Saturday-Sunday) brings Guava Pineapple Pancakes, a Chilaquiles Brunch Bowl, and the Nashville Crispy Chicken + Waffles — a hangover cure that has already developed a devoted following.

## Why It Matters

Earls represents something Waikiki desperately needed: a quality, consistent, late-night option that isn't a hotel lobby bar or a fast-food drive-through. The bi-daily happy hour structure — afternoon for tourists catching pre-dinner drinks, late-night for locals and service industry workers — shows a sophistication in programming that most Waikiki restaurants lack entirely.

The fact that this is a Canadian chain, not a local concept, has drawn some predictable criticism from the "keep Waikiki local" crowd. But the reality is that Earls has hired over 100 local staff, sourced artwork exclusively from Hawaii-based artists, and created a space that feels more authentically connected to the community than many locally-owned hotel restaurants.

At 13,000 square feet, Earls is impossible to ignore. And with a 1 AM last call on weekends, it's about to become impossible to avoid.

**Earls Kitchen + Bar** — 2280 Kalakaua Ave, Waikiki. Open daily 11 AM–midnight (Fri-Sat until 1 AM). Happy hour 2-5 PM & 10 PM-close daily. Reservations: (808) 751-2299.`,
  },
];
