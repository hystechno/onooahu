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
    image: '/images/dukes-waikiki.jpg',
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
    image: '/images/earls-waikiki.jpg',
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
  // Japanese
  {
    id: 'marukame-udon',
    name: 'Marukame Udon',
    neighborhood: 'Waikiki',
    category: 'Japanese',
    rating: 4.6,
    price: '$',
    description: 'Fresh udon noodles made right in front of you. The line moves fast and it is worth every minute. The Nikutama (beef and soft-boiled egg) udon is the signature — springy noodles in a rich dashi broth, topped with sweet beef and a runny egg. Grab tempura from the self-serve counter to complete the meal. One of the best cheap eats on the island.',
    address: '2310 Kuhio Ave, Honolulu, HI 96815',
    phone: '(808) 931-6000',
    hours: 'Daily: 10AM-10PM',
    mustTry: ['Nikutama Udon', 'Tempura', 'Curry Udon'],
    image: '/images/marukame-udon.jpg',
    tags: ['cheap eats', 'fresh noodles', 'counter service', 'long lines'],
  },
  {
    id: 'tonkatsu-ginza-bairin',
    name: 'Tonkatsu Ginza Bairin',
    neighborhood: 'Waikiki',
    category: 'Japanese',
    rating: 4.5,
    price: '$$',
    description: 'The best tonkatsu on the island. This Tokyo-imported chain serves kurobuta (Berkshire pork) cutlets that are thick, juicy, and encased in a shatteringly crisp panko crust. You grind your own sesame seeds at the table and mix them with house tonkatsu sauce. The set meals come with unlimited rice, miso soup, and cabbage salad.',
    address: '2250 Kalakaua Ave #B-1, Honolulu, HI 96815',
    phone: '(808) 926-8085',
    hours: 'Daily: 11AM-9:30PM',
    mustTry: ['Kurobuta Pork Cutlet', 'Tenderloin Set', 'Ground Sesame Sauce'],
    image: '/images/tonkatsu-ginza-bairin.jpg',
    tags: ['imported chain', 'premium pork', 'set meals'],
  },
  {
    id: 'sushi-sho',
    name: 'Sushi Sho',
    neighborhood: 'Waikiki',
    category: 'Japanese',
    rating: 4.9,
    price: '$$$$$',
    description: 'An intimate 10-seat omakase counter inside the Ritz-Carlton Residences Waikiki. Chef Keiji Nakazawa blends traditional Edomae techniques with Hawaiian ingredients — think aged tuna with Waianae sea salt, and locally caught fish prepared with rice seasoned in red vinegar. Reservations open months in advance. A once-in-a-lifetime meal for serious sushi devotees.',
    address: '383 Kalaimoku St, Honolulu, HI 96815',
    phone: '(808) 922-0011',
    hours: 'Dinner: Tue-Sat (Reservations required)',
    mustTry: ['Omakase Menu', 'Aged Maguro', 'Hawaiian Snapper'],
    image: '/images/sushi-sho.jpg',
    tags: ['omakase', 'Edomae', 'reservations required', 'special occasion'],
  },
  // Vietnamese & Asian Fusion
  {
    id: 'pig-and-the-lady',
    name: 'The Pig and the Lady',
    neighborhood: 'Chinatown',
    category: 'Vietnamese Fusion',
    rating: 4.7,
    price: '$$$',
    description: "Chef Andrew Le's Vietnamese-fusion restaurant is one of the most exciting spots in Chinatown. The pho French dip — with a side of concentrated pho broth for dipping — is the dish that put this place on the map. Le is a James Beard semifinalist, and the menu reads like a love letter to his mother's Vietnamese cooking filtered through Hawaii's multicultural lens. The space is loud, energetic, and always full.",
    address: '83 N King St, Honolulu, HI 96817',
    phone: '(808) 585-8255',
    hours: 'Tue-Sat: Lunch & Dinner',
    mustTry: ['Pho French Dip', 'Laotian Fried Chicken', 'P&L Pho'],
    image: '/images/pig-and-the-lady.jpg',
    tags: ['James Beard', 'Chinatown', 'pho', 'loud atmosphere'],
  },
  {
    id: 'piggy-smalls',
    name: 'Piggy Smalls',
    neighborhood: 'Chinatown',
    category: 'Vietnamese Fusion',
    rating: 4.5,
    price: '$$',
    description: "The Pig and the Lady's more casual little sibling. Piggy Smalls serves Vietnamese-inspired comfort food in a fast-casual format — think banh mi burgers, rice bowls with lemongrass chicken, and Vietnamese iced coffee on tap. The space is small and unpretentious, perfect for a quick lunch or a low-key dinner before exploring Chinatown's bar scene.",
    address: '1200 Ala Moana Blvd, Honolulu, HI 96814',
    phone: '(808) 369-1011',
    hours: 'Mon-Sat: 11AM-9PM',
    mustTry: ['Banh Mi Burger', 'Lemongrass Chicken Bowl', 'Vietnamese Coffee'],
    image: '/images/piggy-smalls.jpg',
    tags: ['casual', 'counter service', 'Chinatown sibling'],
  },
  // Fine Dining
  {
    id: 'fete',
    name: 'Fete',
    neighborhood: 'Chinatown',
    category: 'Fine Dining',
    rating: 4.8,
    price: '$$$$',
    description: "A Chinatown standout from Chef Robynne Mai'i, a James Beard Award winner. Fete's menu is inventive, locally driven, and deeply personal — each dish tells a story about Hawaii's food culture. The restaurant occupies a historic Chinatown building with exposed brick, dim lighting, and an open kitchen that fills the room with energy. This is the most important fine dining restaurant in Honolulu right now.",
    address: '2 N Hotel St, Honolulu, HI 96817',
    phone: '(808) 369-1390',
    hours: 'Wed-Sat: Dinner service',
    mustTry: ['Tasting Menu', 'Fresh Catch', 'Housemade Pasta'],
    image: '/images/fete.jpg',
    tags: ['James Beard', 'tasting menu', 'farm to table', 'special occasion'],
  },
  {
    id: 'merrimans-honolulu',
    name: "Merriman's Honolulu",
    neighborhood: "Kaka'ako",
    category: 'Fine Dining',
    rating: 4.7,
    price: '$$$$',
    description: "Peter Merriman's flagship Honolulu location in Ward Village. The father of Hawaii Regional Cuisine brings farm-to-table dining to an elegant waterfront setting with sunset views over the harbor. The macadamia nut-crusted mahi mahi is the signature dish, but the entire menu is a masterclass in local sourcing. Over 90% of ingredients come from Hawaii farms and fisheries.",
    address: '1108 Auahi St, Honolulu, HI 96814',
    phone: '(808) 518-8100',
    hours: 'Daily: 4:30PM-9PM',
    mustTry: ['Macadamia Nut Crusted Mahi', 'Kahuku Shrimp', 'Kona Lobster'],
    image: '/images/merrimans-honolulu.jpg',
    tags: ['Hawaii Regional Cuisine', 'farm to table', 'sunset views', 'Peter Merriman'],
  },
  // Local Institutions
  {
    id: 'zippys',
    name: "Zippy's",
    neighborhood: 'Honolulu',
    category: 'Local Institutions',
    rating: 4.3,
    price: '$',
    description: "If you want to understand local food culture, Zippy's is required eating. Open late (many locations 24 hours), affordable, and serving everything from chili rice to oxtail soup to Korean chicken. Every local has a Zippy's order. The Napoleon Bakery attached to most locations makes the best coco puffs on the island — cream-filled pastry pillows covered in chocolate chantilly.",
    address: 'Multiple locations across Oahu',
    phone: '(808) 973-0880',
    hours: 'Most locations 24 hours',
    mustTry: ['Chili Rice', 'Oxtail Soup', 'Coco Puff'],
    image: '/images/zippys.jpg',
    tags: ['24 hours', 'local chain', 'Chili', 'late night', 'bakery'],
  },
  {
    id: 'highway-inn',
    name: 'Highway Inn',
    neighborhood: 'Waipahu',
    category: 'Local Institutions',
    rating: 4.5,
    price: '$$',
    description: "Serving traditional Hawaiian food since 1947, making it one of the oldest continuously operating Hawaiian restaurants on the island. The Waipahu flagship feels like stepping into a family gathering. Their Hawaiian plate with lau lau, kalua pig, lomi salmon, and poi is the gold standard — everything made from scratch using recipes that haven't changed in decades. The pipikaula (dried beef) is smoky and chewy in the best way.",
    address: '94-830 Moloalo St, Ste 101, Waipahu, HI 96797',
    phone: '(808) 677-9494',
    hours: 'Mon-Thu: 9:30AM-8PM, Fri: 9:30AM-8:30PM, Sat: 9AM-8:30PM, Sun: 9AM-3PM',
    mustTry: ['Hawaiian Plate', 'Pipikaula', 'Squid Luau', 'Poi'],
    image: '/images/highway-inn.jpg',
    tags: ['traditional Hawaiian', 'since 1947', 'lau lau', 'family style'],
  },
  {
    id: 'side-street-inn',
    name: 'Side Street Inn On Da Strip',
    neighborhood: 'Honolulu',
    category: 'Local Institutions',
    rating: 4.6,
    price: '$$',
    description: "Where off-duty chefs eat after their shifts. The pan-fried pork chops are the stuff of legend — thick-cut, perfectly seasoned, and served with a mountain of fried rice. The portions are massive, the beer is cold, and the atmosphere is pure local hangout. If you want to eat where the people who cook for a living choose to eat, this is the spot.",
    address: '614 Kapahulu Ave, Honolulu, HI 96815',
    phone: '(808) 739-3939',
    hours: 'Daily: 3PM-Midnight',
    mustTry: ['Pan-Fried Pork Chops', 'Fried Rice', 'Kim Chee'],
    image: '/images/side-street-inn.jpg',
    tags: ['chef hangout', 'pork chops', 'huge portions', 'late night'],
  },
  // Seafood Specialists
  {
    id: 'nicos-pier-38',
    name: "Nico's Pier 38",
    neighborhood: 'Kalihi',
    category: 'Fresh Seafood',
    rating: 4.6,
    price: '$$',
    description: "Sits right at Pier 38, literally next to the Honolulu Fish Auction where much of Oahu's commercial catch comes in. The fish here is as fresh as it gets. The casual counter serves plate lunches with the day's catch — furikake pan-seared ahi, grilled mahi, garlic shrimp — while the restaurant side offers a more upscale sit-down experience. Both are excellent, but the counter is where locals line up at lunch.",
    address: '1129 N Nimitz Hwy, Honolulu, HI 96817',
    phone: '(808) 540-1377',
    hours: 'Mon-Sat: 6:30AM-9PM, Sun: 10AM-9PM',
    mustTry: ['Furikake Pan-Seared Ahi', 'Fish and Chips', 'Daily Specials'],
    image: '/images/nicos-pier-38.jpg',
    tags: ['fresh catch', 'fish auction', 'plate lunch', 'harbor views'],
  },
  {
    id: 'taniokas-seafoods',
    name: "Tanioka's Seafoods and Catering",
    neighborhood: 'Waipahu',
    category: 'Fresh Seafood',
    rating: 4.7,
    price: '$',
    description: 'The poke counter at Tanioka\'s is one of the best on the island. Also famous for their spam musubi — thick, perfectly seasoned, and wrapped while still warm. The party platters are a staple at every local gathering. This is a takeout-only spot with no seating, but the quality of the poke (try the shoyu ahi or the spicy ahi) makes it worth the drive to Waipahu.',
    address: '94-903 Farrington Hwy, Waipahu, HI 96797',
    phone: '(808) 675-0229',
    hours: 'Daily: 8AM-5PM',
    mustTry: ['Shoyu Ahi Poke', 'Spicy Ahi Poke', 'Spam Musubi', 'Fried Marlin'],
    image: '/images/taniokas-seafoods.jpg',
    tags: ['poke', 'takeout only', 'spam musubi', 'local favorite'],
  },
  // North Shore & Windward
  {
    id: 'romys-kahuku-prawns',
    name: "Romy's Kahuku Prawns & Shrimp",
    neighborhood: 'North Shore',
    category: 'Hidden Gems',
    rating: 4.6,
    price: '$$',
    description: "Head to Kahuku for prawns and shrimp harvested from nearby ponds, served in a variety of savory sauces. The butter garlic shrimp plate is the signature — sweet, meaty prawns swimming in a rich garlic butter sauce with two scoops of rice. Romy's sits in a rustic outdoor setting with picnic tables and views of the prawn ponds. Cash only, and the wait can be long, but this is North Shore shrimp at its best.",
    address: '56-800 Kamehameha Hwy, Kahuku, HI 96731',
    phone: '(808) 293-2022',
    hours: 'Thu-Mon: 10AM-5PM (Closed Tue-Wed)',
    mustTry: ['Butter Garlic Shrimp', 'Spicy Garlic Prawns', 'Fried Shrimp'],
    image: '/images/romys-kahuku-prawns.jpg',
    tags: ['shrimp truck', 'cash only', 'prawn farm', 'long lines'],
  },
  {
    id: 'haleiwa-joes-haiku',
    name: "Haleiwa Joe's Haiku Gardens",
    neighborhood: 'Windward Coast',
    category: 'Fine Dining',
    rating: 4.6,
    price: '$$$',
    description: "Tucked into the lush Haiku Gardens in Kaneohe, this is one of the most scenic dining spots on the Windward side. The open-air restaurant overlooks a botanical garden with mountain views, koi ponds, and tropical flowers. The menu focuses on fresh seafood and prime steaks, and the Sunday brunch is a local tradition. Reservations essential — this place books up weeks in advance.",
    address: '46-336 Haiku Rd, Kaneohe, HI 96744',
    phone: '(808) 247-6671',
    hours: 'Mon-Sat: Dinner, Sun: Brunch & Dinner',
    mustTry: ['Fresh Catch', 'Prime Rib', 'Sunday Brunch', 'Mai Tai'],
    image: '/images/haleiwa-joes-haiku.jpg',
    tags: ['garden dining', 'scenic', 'Sunday brunch', 'reservations'],
  },
  {
    id: 'mokes-bread-and-breakfast',
    name: "Moke's Bread & Breakfast",
    neighborhood: 'Windward Coast',
    category: 'Hidden Gems',
    rating: 4.7,
    price: '$$',
    description: "The lilikoi pancakes at Moke's are famous for a reason. Fluffy, tangy, sweet, and unlike anything you'll find on the mainland. The batter incorporates fresh lilikoi (passion fruit) puree, and they're served with house-made coconut syrup. The Kailua location fills up fast on weekends with locals and post-beach crowds. A true Windward Coast breakfast institution.",
    address: '27 Hoolai St, Kailua, HI 96734',
    phone: '(808) 261-5555',
    hours: 'Daily: 6:30AM-1PM',
    mustTry: ['Lilikoi Pancakes', 'Loco Moco', 'Kailua Benedict'],
    image: '/images/mokes-bread-and-breakfast.jpg',
    tags: ['breakfast', 'pancakes', 'lilikoi', 'Kailua favorite'],
  },
  {
    id: 'faria',
    name: 'Faria',
    neighborhood: 'Windward Coast',
    category: 'Hidden Gems',
    rating: 4.5,
    price: '$$$',
    description: "One of the most exciting new restaurants on Oahu. Portuguese-inspired with an incredible tinned fish board, pasteis de nata (custard tarts), and house-cured meats. Honolulu Magazine's top new restaurant pick. The intimate space on Kailua's main drag fills a gap in the island's dining scene — European-influenced small plates with a serious wine list. The kind of place that makes you feel like you discovered something special.",
    address: '306 Kuulei Rd, Kailua, HI 96734',
    phone: '(808) 263-3279',
    hours: 'Tue-Sat: Dinner',
    mustTry: ['Tinned Fish Board', 'Pasteis de Nata', 'Bacalhau'],
    image: '/images/faria.jpg',
    tags: ['Portuguese', 'small plates', 'wine bar', 'new'],
  },
  // Brunch & Breakfast
  {
    id: 'koko-head-cafe',
    name: 'Koko Head Cafe',
    neighborhood: 'Kaimuki',
    category: 'Hidden Gems',
    rating: 4.5,
    price: '$$',
    description: "Brunch with a local twist from Chef Lee Anne Wong. The cornflake French toast and kimchi fried rice are favorites, but the real star is the Dumplings All Day Wong — crispy-bottomed pork dumplings in a spicy black vinegar sauce. Expect a wait on weekends; this place doesn't take reservations for brunch. The Kaimuki location gives it a neighborhood feel that makes the wait feel worthwhile.",
    address: '1145C 12th Ave, Honolulu, HI 96816',
    phone: '(808) 732-8920',
    hours: 'Wed-Mon: 7AM-2PM (Closed Tue)',
    mustTry: ['Dumplings All Day Wong', 'Cornflake French Toast', 'Kimchi Fried Rice'],
    image: '/images/koko-head-cafe.jpg',
    tags: ['brunch', 'no reservations', 'celebrity chef', 'Kaimuki'],
  },
  {
    id: 'mud-hen-water',
    name: 'Mud Hen Water',
    neighborhood: 'Kaimuki',
    category: 'Hidden Gems',
    rating: 4.5,
    price: '$$$',
    description: "Chef Ed Kenney's hyper-local gem in Kaimuki. The menu changes with what's fresh from local farms — you might find breadfruit gnocchi one week and grilled akule the next. The cocktail list is built around Hawaiian-grown ingredients too. Kenney is one of the pioneers of Hawaii Regional Cuisine, and Mud Hen Water represents his most personal, experimental work.",
    address: '3452 Waialae Ave, Honolulu, HI 96816',
    phone: '(808) 737-7919',
    hours: 'Tue-Sat: 5:30PM-9PM',
    mustTry: ['Breadfruit Gnocchi', 'Farm Vegetables', 'Hawaiian Cocktails'],
    image: '/images/mud-hen-water.jpg',
    tags: ['farm to table', 'seasonal menu', 'Ed Kenney', 'cocktails'],
  },
  // Dim Sum & Chinese
  {
    id: 'yauatcha-waikiki',
    name: 'Yauatcha Waikiki',
    neighborhood: 'Waikiki',
    category: 'Hidden Gems',
    rating: 4.4,
    price: '$$$',
    description: "Upscale dim sum in the International Market Place from the London-based Hakkasan Group. Handcrafted dumplings, wok dishes, and creative cocktails in a sleek, modern space. The har gow and siu mai are executed with precision, but the real surprises are the venison puffs and the rainbow selection of macarons for dessert. Happy hour makes the dim sum more accessible.",
    address: '2330 Kalakaua Ave, Honolulu, HI 96815',
    phone: '(808) 777-6633',
    hours: 'Daily: 11AM-10PM',
    mustTry: ['Har Gow', 'Venison Puffs', 'Macarons', 'Cocktails'],
    image: '/images/yauatcha-waikiki.jpg',
    tags: ['dim sum', 'International Market Place', 'desserts', 'happy hour'],
  },
  // Craft Cocktails
  {
    id: 'bevy',
    name: 'Bevy',
    neighborhood: "Kaka'ako",
    category: 'Hidden Gems',
    rating: 4.5,
    price: '$$',
    description: "An artsy industrial-chic bar in Kaka'ako serving European-inspired cocktails alongside a generous happy hour menu. The Lavender Mule (vodka, lavender, lime, house ginger, sage) and the Oaxaca Old Fashioned are standouts. $1 oysters during happy hour (Tue-Sat 4-7PM) make this a pre-dinner ritual for locals. The patio seating is perfect for Kaka'ako's warm evenings.",
    address: '661 Auahi St, Honolulu, HI 96813',
    phone: '(808) 768-8406',
    hours: 'Tue-Sat: 4PM-12AM (Sun-Mon: Closed)',
    mustTry: ['Lavender Mule', 'Oaxaca Old Fashioned', '$1 Oysters (HH)'],
    image: '/images/bevy.jpg',
    tags: ['craft cocktails', 'oysters', 'happy hour', 'patio', 'Kakaako'],
  },
  {
    id: 'konos-northshore',
    name: "Kono's Northshore",
    neighborhood: 'North Shore',
    category: 'Plate Lunch Legends',
    rating: 4.6,
    price: '$',
    description: "A North Shore institution since 2002, Kono's has built its reputation on one thing: 12-hour slow-roasted kalua pig. The result is melt-in-your-mouth tender pork that's packed into massive breakfast bombers — burritos stuffed with eggs, breakfast potatoes, cheese, and that famous kalua pig. The fast-casual spot is a post-surf staple for locals and a must-visit for anyone driving the Kamehameha Highway. No reservations needed — order at the counter and grab a seat.",
    address: '66-250 Kamehameha Hwy, Haleiwa, HI 96712',
    phone: '(808) 744-6705',
    hours: 'Daily: 7AM-7PM',
    mustTry: ['Breakfast Bomber', 'Kalua Pig Plate', 'Kalua Pig Sandwich'],
    image: '/images/konos-northshore.jpg',
    tags: ['plate lunch', 'kalua pig', 'breakfast', 'local', 'takeout', 'North Shore'],
  },
  {
    id: 'banzai-sushi',
    name: 'Banzai Sushi Bar',
    neighborhood: 'North Shore',
    category: 'Japanese',
    rating: 4.5,
    price: '$$$',
    description: "Named best sushi by the American Tasting Institute, Banzai Sushi is the North Shore's premier destination for fresh, locally sourced Japanese cuisine. Chef Hide is obsessive about quality, serving up pristine sashimi, creative specialty rolls, and dishes that extend well beyond the sushi bar — think Wagyu beef, tempura, and seared furikake ahi. The intimate Haleiwa space fills up fast; arrive early to put your name on the waitlist and explore the surrounding plaza.",
    address: '66-246 Kamehameha Hwy, Haleiwa, HI 96712',
    phone: '(808) 451-2699',
    hours: 'Wed-Sun: 4PM-9PM (Mon-Tue: Closed)',
    mustTry: ['Pipeline Sashimi Combo', 'Wagyu Beef', 'Seared Furikake Ahi', 'Wabi Sabi Roll'],
    image: '/images/banzai-sushi.jpg',
    tags: ['sushi', 'sashimi', 'Japanese', 'fresh fish', 'North Shore', 'dinner'],
  },
  {
    id: 'mei-sum-dimsum',
    name: 'Mei Sum Dim Sum',
    neighborhood: 'Chinatown',
    category: 'Hidden Gems',
    rating: 4.4,
    price: '$',
    description: "A Chinatown reader favorite and Honolulu Magazine's top dim sum pick, Mei Sum serves classic Cantonese dim sum all day — no cart service needed, just order at the counter and eat. The har gow are plump with sweet shrimp, the siu mai are juicy and packed with pork, and the baked char siu bao arrive warm from the oven with caramelized BBQ pork filling. A family-run spot that's been a Chinatown staple for decades, now located on Nuuanu Avenue.",
    address: '1170 Nuuanu Ave, Honolulu, HI 96817',
    phone: '(808) 531-3268',
    hours: 'Daily: 8AM-8PM',
    mustTry: ['Har Gow', 'Siu Mai', 'Baked Char Siu Bao', 'Egg Tarts', 'Mochi Rice'],
    image: '/images/mei-sum-dimsum.jpg',
    tags: ['dim sum', 'Chinese', 'Cantonese', 'takeout', 'cheap eats', 'Chinatown', 'all day'],
  },
  {
    id: 'matsumoto-shaveice',
    name: "Matsumoto Shave Ice",
    neighborhood: 'North Shore',
    category: 'Hidden Gems',
    rating: 4.5,
    price: '$',
    description: "Since 1951, Matsumoto Shave Ice has been the definitive North Shore refreshment stop. What started as a grocery store in Haleiwa has become an iconic destination, serving fluffy, finely shaved ice drenched in vibrant house-made syrups. Locals know to add ice cream at the bottom and condensed milk on top (a 'snow cap') for the full experience. The line often wraps around the block, but it moves quickly — and that first bite of lilikoi or mango shave ice after a hot day at the beach is pure Hawaii.",
    address: '66-111 Kamehameha Hwy, Haleiwa, HI 96712',
    phone: '(808) 637-4827',
    hours: 'Daily: 9AM-6PM',
    mustTry: ['Lilikoi Shave Ice', 'Mango Shave Ice', 'Matsumoto Special (with ice cream)', 'Snow Cap'],
    image: '/images/matsumoto-shaveice.jpg',
    tags: ['shave ice', 'dessert', 'local', 'cheap eats', 'North Shore', 'iconic'],
  },
  {
    id: 'teds-bakery',
    name: "Ted's Bakery",
    neighborhood: 'North Shore',
    category: 'Hidden Gems',
    rating: 4.4,
    price: '$',
    description: "Located just off the highway near Sunset Beach, Ted's Bakery is a North Shore institution famous for one thing: the chocolate haupia cream pie. Layers of chocolate pudding, haupia (coconut pudding), and whipped cream on a flaky crust — it's the dessert that launched a thousand food blog posts. But Ted's is more than pie: they serve solid plate lunches, breakfast fried rice, and garlic shrimp plates that fuel surfers between sessions. Grab a slice and eat it on the beach across the street.",
    address: '59-024 Kamehameha Hwy, Haleiwa, HI 96712',
    phone: '(808) 638-8207',
    hours: 'Daily: 7AM-6:30PM',
    mustTry: ['Chocolate Haupia Cream Pie', 'Garlic Shrimp Plate', 'Fried Rice Special', 'Haupia Pie'],
    image: '/images/teds-bakery.jpg',
    tags: ['bakery', 'pie', 'dessert', 'plate lunch', 'North Shore', 'cheap eats', 'iconic'],
  },
  {
    id: 'seven-brothers',
    name: 'Seven Brothers',
    neighborhood: 'North Shore',
    category: 'Hidden Gems',
    rating: 4.3,
    price: '$',
    description: "A family-owned burger empire run by — you guessed it — seven brothers, this North Shore staple started at the Kahuku Sugar Mill in 2009 and has since expanded across the island. The burgers are juicy and oversized, topped with creative combinations like coconut macadamia shrimp, teriyaki pineapple, and house-made sauces. The coconut chocolate chip banana bread is legendary in its own right. The Kahuku at the Mill location has the biggest menu and the most atmosphere — post up after a day at the beach.",
    address: '66-197 Kamehameha Hwy, Haleiwa, HI 96712',
    phone: '(808) 744-3000',
    hours: 'Mon-Sat: 11AM-9PM (Sun: Closed)',
    mustTry: ['The Original Burger', 'Coconut Macadamia Shrimp Burger', 'Coconut Chocolate Chip Banana Bread'],
    image: '/images/seven-brothers.jpg',
    tags: ['burgers', 'family-owned', 'local', 'North Shore', 'cheap eats', 'casual'],
  },
  {
    id: 'kamehameha-bakery',
    name: 'Kamehameha Bakery',
    neighborhood: 'Kalihi',
    category: 'Hidden Gems',
    rating: 4.5,
    price: '$',
    description: "A Kalihi institution that opens at 2 AM to serve the early-risers and night-owls alike, Kamehameha Bakery is famous for one extraordinary creation: the Poi Haupia. This fluffy, bright purple taro bun is filled with creamy coconut pudding, creating a handheld masterpiece that's simultaneously unique to Hawaii and utterly addictive. The bakery case also overflows with sweet bread, banana bread, danishes, and pan de coco. Cash only, no seating — grab a few and go.",
    address: '1284 Kalani St #D106, Honolulu, HI 96817',
    phone: '(808) 845-5831',
    hours: 'Mon-Fri: 2AM-4PM, Sat-Sun: 3AM-4PM',
    mustTry: ['Poi Haupia', 'Sweet Bread', 'Banana Bread', 'Pan de Coco'],
    image: '/images/kamehameha-bakery.jpg',
    tags: ['bakery', 'local', 'cheap eats', 'Kalihi', 'late night', 'cash only', 'iconic'],
  },
  {
    id: 'alicias-market',
    name: "Alicia's Market",
    neighborhood: 'Kalihi',
    category: 'Hidden Gems',
    rating: 4.6,
    price: '$',
    description: "Tucked away on a quiet Kalihi street, Alicia's Market is the definition of a local secret. This small takeout counter serves some of the best poke on the island — spicy ahi, shoyu ahi, and their signature pipikaula (dried beef) are standouts. The plate lunches are generous and affordable, with crispy pork belly, garlic chicken, and a rotating selection of daily specials. Recently moved back to its original Mokauea Street location after a brief relocation. No frills, just incredible food.",
    address: '267 Mokauea St, Honolulu, HI 96819',
    phone: '(808) 841-1922',
    hours: 'Tue-Sat: 8AM-4PM (Sun-Mon: Closed)',
    mustTry: ['Spicy Ahi Poke', 'Pipikaula', 'Crispy Pork Belly Plate', 'Garlic Chicken'],
    image: '/images/alicias-market.jpg',
    tags: ['poke', 'plate lunch', 'local', 'Kalihi', 'takeout', 'cheap eats', 'hidden gem'],
  },
  {
    id: 'farm-to-barn',
    name: 'Farm to Barn',
    neighborhood: 'North Shore',
    category: 'Hidden Gems',
    rating: 4.4,
    price: '$$',
    description: "A charming red barn cafe in the heart of Haleiwa, Farm to Barn lives up to its name with a menu built around fresh, local ingredients and plant-forward options. The barn burritos, uala (sweet potato) waffles, and vibrant grain bowls are popular with health-conscious locals and visitors alike. The outdoor seating area — complete with picnic tables, lawn games, and a relaxed country atmosphere — makes it a favorite for families. The attached juicery serves fresh-pressed juices and smoothies that pair perfectly with a North Shore morning.",
    address: '66-443 Kamehameha Hwy, Haleiwa, HI 96712',
    phone: '(808) 744-4100',
    hours: 'Daily: 7AM-4PM',
    mustTry: ['Barn Burrito', 'Uala Waffles', 'Grain Bowl', 'Fresh-Pressed Juice'],
    image: '/images/farm-to-barn.jpg',
    tags: ['healthy', 'cafe', 'breakfast', 'juicery', 'North Shore', 'family-friendly', 'outdoor seating'],
  },
  {
    id: 'haleiwa-beach-house',
    name: 'Haleiwa Beach House',
    neighborhood: 'North Shore',
    category: 'Beachfront Dining',
    rating: 4.2,
    price: '$$$',
    description: "A stunning two-story oceanfront restaurant in Haleiwa, Haleiwa Beach House serves contemporary Hawaiian seafood with panoramic Pacific views. The menu focuses on fresh island fish, locally sourced produce, and Hawaiian-influenced preparations — think macadamia nut-crusted catch, Kona lobster tail, and grilled monchong. The upstairs dining room and wraparound lanai are ideal for sunset dinners, while the downstairs bar offers a more casual vibe with craft cocktails and pupu plates. Reservations recommended for dinner.",
    address: '62-540 Kamehameha Hwy, Haleiwa, HI 96712',
    phone: '(808) 637-9898',
    hours: 'Daily: 11AM-9PM (Fri-Sat until 10PM)',
    mustTry: ['Macadamia Nut-Crusted Fish', 'Kona Lobster Tail', 'Grilled Monchong', 'Haleiwa Sunset Cocktail'],
    image: '/images/haleiwa-beach-house.jpg',
    tags: ['seafood', 'Hawaiian', 'oceanfront', 'sunset', 'North Shore', 'dinner', 'reservations'],
  },
];

export const collections = [
  {
  slug: 'beachfront',
  title: 'Beachfront Dining',
  description: 'The best restaurants on Oahu where the sand meets your table. From casual barefoot bars to upscale oceanfront dining, these spots offer unforgettable meals with Pacific views.',
  image: '/images/collection-beachfront.jpg',
  count: 7,
  filter: (r: Restaurant) => r.category === 'Beachfront Dining',
  },
  {
  slug: 'hidden-gems',
  title: 'Hidden Gems',
  description: 'Off-the-beaten-path spots that locals guard jealously. James Beard winners, tiny takeout counters, and neighborhood secrets that define real Hawaiian food culture.',
  image: '/images/collection-hidden.jpg',
  count: 19,
  filter: (r: Restaurant) => r.category === 'Hidden Gems',
  },
  {
  slug: 'plate-lunch',
  title: 'Plate Lunch Legends',
  description: 'The backbone of Hawaiian comfort food — two scoops rice, one scoop mac salad, and your choice of protein. These are the iconic spots that perfected the plate lunch.',
  image: '/images/collection-plate.jpg',
  count: 4,
  filter: (r: Restaurant) => r.category === 'Plate Lunch Legends',
  },
  {
  slug: 'happy-hours',
  title: 'Sunset Happy Hours',
  description: 'Where to score discounted tropical cocktails, pupu platters, and the best golden-hour views on the island. Because every day in Hawaii should end with a mai tai.',
  image: '/images/collection-sunset.jpg',
  count: 3,
  filter: (r: Restaurant) => r.category === 'Sunset Happy Hours',
  },
  {
  slug: 'japanese',
  title: 'Japanese',
  description: 'From hand-pulled udon noodles to 10-seat omakase counters, Oahu\'s Japanese food scene rivals Tokyo\'s. These spots serve the freshest sashimi, crispiest tonkatsu, and most precise sushi on the island.',
  image: '/images/hero-card-2.jpg',
  count: 4,
  filter: (r: Restaurant) => r.category === 'Japanese',
  },
  {
  slug: 'vietnamese-fusion',
  title: 'Vietnamese Fusion',
  description: 'Where pho meets French dip and banh mi gets the burger treatment. Chef Andrew Le\'s Vietnamese-inspired creations have redefined what Asian fusion can be in Honolulu.',
  image: '/images/hero-card-4.jpg',
  count: 2,
  filter: (r: Restaurant) => r.category === 'Vietnamese Fusion',
  },
  {
  slug: 'fine-dining',
  title: 'Fine Dining',
  description: 'Special-occasion restaurants where Hawaii\'s best chefs showcase local ingredients through refined, ambitious cooking. James Beard winners, tasting menus, and wine lists worth exploring.',
  image: '/images/hero-card-6.jpg',
  count: 3,
  filter: (r: Restaurant) => r.category === 'Fine Dining',
  },
  {
  slug: 'local-institutions',
  title: 'Local Institutions',
  description: 'The spots that define Oahu\'s food culture — open-late diners, family-run Hawaiian food joints, and chef hangouts that have been feeding locals for generations. No tourist traps, just real Hawaii.',
  image: '/images/hero-card-7.jpg',
  count: 3,
  filter: (r: Restaurant) => r.category === 'Local Institutions',
  },
  {
  slug: 'seafood',
  title: 'Fresh Seafood',
  description: 'From pier-side fish counters to upscale harbor restaurants, these spots serve the freshest catch in Hawaii — much of it landed hours before it hits your plate.',
  image: '/images/hero-card-1.jpg',
  count: 2,
  filter: (r: Restaurant) => r.category === 'Fresh Seafood',
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
  image: '/images/earls-waikiki.jpg',
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
{
  slug: 'best-breakfast-brunch',
  title: "The Best Breakfast & Brunch Spots on Oahu",
  category: 'Food',
  date: 'August 10, 2026',
  excerpt: 'From fluffy souffle pancakes to oceanfront breakfast and legendary malasadas, these are the morning spots that make waking up early in Hawaii worth it.',
  image: '/images/blog-brunch.jpg',
  content: `Breakfast in Hawaii hits different. Maybe it's the tropical air, the sound of waves in the distance, or the fact that Hawaiian breakfast culture runs deep — from traditional loco moco gravy boats to Japanese-inspired souffle pancakes that jiggle their way onto your Instagram feed.

In this guide, we're sharing the best breakfast and brunch spots on Oahu, from iconic institutions that locals have been frequenting for generations to trendy newcomers redefining what morning food can be. Whether you're an early riser chasing sunrise or a brunch-for-lunch type, these spots deliver.

## 1. Moke's Bread & Breakfast (Kailua)

Tucked away in Kailua on the Windward side, Moke's is the kind of place that makes you consider moving to the neighborhood just to eat here every weekend. The lilikoi pancakes are the main event — fluffy, golden, and drenched in house-made passion fruit syrup that strikes the perfect balance between tart and sweet. The loco moco here is also exceptional: a handmade beef patty over rice, topped with a fried egg and brown gravy that tastes like it simmered all morning.

The atmosphere is pure old-school Hawaii — unpretentious, friendly, and always bustling with a mix of locals, surfers, and visitors who got the tip. Expect a wait on weekends. It's worth it.

**Must Try:** Lilikoi Pancakes, Loco Moco, Kailua Benedict

## 2. Liliha Bakery (Kalihi)

Open 24 hours and baking since 1950, Liliha Bakery is a Honolulu institution that feels like stepping into a time capsule — in the best way possible. The counter stools, the regulars who have been coming for decades, and the smell of fresh bread and pancakes on the griddle create an atmosphere that can't be manufactured.

While their coco puffs (cream puffs filled with chocolate custard and topped with chantilly frosting) get most of the attention, the all-day breakfast menu is where Liliha truly shines. The pancakes are perfectly fluffy, the bacon is thick-cut and crispy, and the portions are generous. Open at 2 AM for the night owls and early enough for the sunrise crowd.

**Must Try:** Coco Puffs, Pancakes, Chantilly Cake

## 3. Duke's Waikiki (Waikiki)

Yes, Duke's is famous for dinner and mai tais at sunset, but their breakfast might be the most underrated meal here. Picture this: toes in the sand, waves crashing 20 feet away, a plate of fresh tropical fruit and macadamia nut pancakes in front of you. The Barefoot Bar serves breakfast starting at 7 AM, and the oceanfront seating is first-come, first-served.

The Hawaiian-style breakfast plate — with Portuguese sausage, eggs, and rice — is a classic local combination that pairs perfectly with the view. This is the breakfast experience visitors dream about and locals still make time for.

**Must Try:** Hawaiian Breakfast Plate, Macadamia Nut Pancakes, Fresh Tropical Fruit

## 4. Westman Cafe (Kakaako)

The newest spot on this list, Westman Cafe burst onto the Kakaako breakfast scene in early 2026 and immediately earned a devoted following. The bright, airy space with light wood and turquoise accents feels like a Melbourne cafe transplanted to Honolulu — and that's a compliment.

The souffle pancakes are the star: impossibly tall, ethereally fluffy, and served with seasonal fruit and house-made syrups. The avocado toast is elevated with local microgreens and chili flakes, and the specialty coffee program is serious. This is where Honolulu's creative crowd gathers for morning meetings and leisurely weekend brunches.

**Must Try:** Souffle Pancake, Avocado Toast, House Latte

## 5. Koko Head Cafe (Kaimuki)

Chef Lee Anne Wong's Koko Head Cafe single-handedly elevated Honolulu's breakfast game when it opened. The menu is a love letter to Hawaii's multicultural food culture — think cornflake-crusted French toast with coconut syrup, kimchi bacon hash, and miso-smoked pork belly and eggs.

The vintage-diner-meets-tropical-garden atmosphere is charming, and the open kitchen lets you watch the crew work their magic. The coffee is excellent, the cocktails (for those hair-of-the-dog mornings) are creative, and the food is consistently rated among the best breakfast on the island.

**Must Try:** Cornflake French Toast, Kimchi Bacon Hash, Miso Pork Belly & Eggs

## 6. Leonard's Bakery (Kapahulu)

Technically a bakery, not a restaurant, but no breakfast guide to Oahu is complete without Leonard's. Since 1952, this tiny Kapahulu shop has been turning out malasadas — Portuguese donuts that are fried fresh, rolled in sugar, and served warm. The original is perfect, but the filled varieties (custard, chocolate, haupia) are worth the extra calories.

The line wraps around the block every morning, but it moves fast. Grab a dozen, walk across the street to Kapiolani Park, and enjoy your breakfast with Diamond Head in the background. It's a Honolulu ritual.

**Must Try:** Original Malasada, Haupia Malasada, Custard Malasada

## 7. Zippy's (Multiple Locations)

Zippy's is Hawaii's diner — open 24 hours, affordable, and serving everything from chili rice to oxtail soup to Korean chicken. But breakfast is where Zippy's truly shines. The Portuguese sausage, eggs, and rice plate is a local staple, and the pancakes are surprisingly good for a chain.

The real secret is the Napoleon Bakery attached to most locations. Their coco puffs (cream-filled pastry pillows covered in chocolate chantilly) are legendary, and their breakfast pastries are baked fresh throughout the morning. If you're up at 3 AM jet-lagged and hungry, Zippy's is your friend.

**Must Try:** Portuguese Sausage & Eggs, Chili Rice, Napoleon Bakery Coco Puffs

## 8. Haleiwa Joe's (Kaneohe)

For a special occasion brunch, Haleiwa Joe's at Haiku Gardens is unmatched. The Sunday brunch is a local tradition — the open-air restaurant overlooks a botanical garden with mountain views, koi ponds, and tropical flowers. The menu features fresh catch, prime rib, and classic brunch dishes with a Hawaiian twist.

Reservations are essential — this place books up weeks in advance, especially for Sunday brunch. The mai tais are strong, the setting is stunning, and the food is consistently excellent. This is where locals go to celebrate birthdays, anniversaries, and "we made it through another week."

**Must Try:** Sunday Brunch, Fresh Catch, Prime Rib, Mai Tai

## Breakfast Tips for Visitors

- **Go early.** Popular spots like Leonard's and Moke's develop lines by 8 AM on weekends.
- **Try the local classics.** Loco moco, Portuguese sausage and eggs, and malasadas are Hawaiian breakfast staples for a reason.
- **Don't skip the coffee.** Hawaii grows some of the world's best coffee — Kona and Ka'u beans are served at most local cafes.
- **Be patient.** Hawaiian time is real, and breakfast here is meant to be enjoyed slowly.
- **Cash helps.** Some local institutions are still cash-only or prefer it.

Breakfast in Hawaii isn't just a meal — it's a ritual. It's the slow pour of Kona coffee, the first bite of a warm malasada, the view of the Pacific from a beachfront table. These spots capture that magic, one morning at a time.`,
},
{
  slug: 'north-shore-food-tour',
  title: "The Ultimate North Shore Food Tour: A Local's Driving Itinerary",
  category: 'Travel',
  date: 'August 12, 2026',
  excerpt: 'Map your way up Oahu\'s legendary North Shore from Haleiwa to Kahuku, hitting the best shrimp trucks, bakeries, shave ice, and oceanfront restaurants in a single unforgettable day.',
  image: '/images/blog-northshore-tour.jpg',
  content: `The North Shore of Oahu isn't just a destination — it's a 20-mile stretch of culinary pilgrimage. While most visitors make the hour-long drive from Waikiki for a single plate of garlic shrimp and a quick photo at Pipeline, locals know that the real magic of the North Shore unfolds slowly, one food stop at a time, over the course of an entire day.

This is the itinerary I give friends when they visit for the first time: a mile-by-mile food tour that starts in Haleiwa town before the crowds arrive and ends at Sunset Beach with a full belly and sandy toes. Bring cash, bring a cooler bag for leftovers, and don't plan on eating dinner — you'll still be full.

## Stop 1: Kono's Northshore — Haleiwa (7:00 AM)

Before the sun is fully up, start your day the way locals do: with a Breakfast Bomber from Kono's. This massive burrito is stuffed with Kono's famous 12-hour slow-roasted kalua pig, scrambled eggs, breakfast potatoes, and melted cheese — all wrapped in a warm flour tortilla and served with a side of house-made salsa.

Kono's opens at 7 AM, and the pre-surf crowd is already here, grabbing burritos and coffee before paddling out. The atmosphere is pure North Shore: casual, friendly, and completely unpretentious. Eat at one of the picnic tables out front, and watch the early morning surfers heading toward Haleiwa Harbor.

**What to order:** Breakfast Bomber, Kalua Pig Plate (if you're splitting with a group)
**Pro tip:** Order online ahead of time if you're in a rush — the kitchen gets slammed by 8:30 AM.

## Stop 2: Matsumoto Shave Ice — Haleiwa (8:30 AM)

Yes, it's 8:30 AM. No, that's not too early for shave ice.

Matsumoto has been serving fluffy, superfine shave ice since 1951, and the line wraps around the block by mid-morning. Arriving early means you'll actually get your order in under 10 minutes — and there's something magical about eating lilikoi shave ice with ice cream on the bottom while the morning sun is still soft.

The classic combination: lilikoi and mango syrup with vanilla ice cream and a snow cap (condensed milk). The ice is so fine it practically melts on your tongue, and the house-made syrups aren't overly sweet — they taste like actual fruit.

**What to order:** Matsumoto Special (lilikoi + mango + ice cream + snow cap)
**Pro tip:** Bring a second person to hold a spot in line while you browse the souvenir shop inside.

## Stop 3: Farm to Barn — Haleiwa (10:00 AM)

By now you've had savory and sweet — time for something fresh. Farm to Barn is a charming red barn cafe that opened in the heart of Haleiwa with a plant-forward, health-conscious menu. The Barn Burrito is a local favorite, packed with scrambled eggs, local vegetables, avocado, and house-made salsa. The uala (sweet potato) waffles are fluffy and slightly sweet, served with fresh tropical fruit and coconut syrup.

The outdoor seating area has picnic tables, lawn games, and a relaxed country vibe that feels miles away from Waikiki. It's also a great spot to charge your phone and plan the next leg of your journey.

**What to order:** Barn Burrito, Uala Waffles, fresh-pressed green juice
**Pro tip:** The attached juicery has excellent grab-and-go options for the rest of your drive.

## Stop 4: Seven Brothers — Kahuku (11:30 AM)

Drive 15 minutes north to Kahuku, home of the Seven Brothers burger empire. This family-run spot (started by, yes, seven brothers) has been a North Shore staple since 2009, and their burgers are massive, juicy, and topped with creative combinations you won't find anywhere else.

The Coconut Macadamia Shrimp Burger is the signature — a beef patty topped with crispy coconut shrimp, pineapple, and house-made sauce on a toasted bun. The coconut chocolate chip banana bread is the sleeper hit — order a slice to go, you'll want it later.

**What to order:** The Original Burger, Coconut Macadamia Shrimp Burger, Coconut Chocolate Chip Banana Bread
**Pro tip:** The Kahuku at the Mill location has the biggest menu and most seating. Call ahead for large orders.

## Stop 5: Ted's Bakery — Sunset Beach (1:00 PM)

Located just off the highway near Sunset Beach, Ted's Bakery is where you come for the chocolate haupia cream pie — and stay for the garlic shrimp plate lunch.

The pie is legendary for a reason: layers of chocolate pudding, haupia (coconut pudding), and whipped cream on a buttery, flaky crust. It's the dessert that launched a thousand food blog posts. But Ted's also serves excellent plate lunches — the garlic shrimp plate rivals anything at the food trucks, and the portions are generous.

Grab your food and walk across the street to the beach. Eating a slice of chocolate haupia pie with your toes in the sand, watching the surfers at Sunset Beach, is one of the great North Shore experiences.

**What to order:** Chocolate Haupia Cream Pie (get a whole one to take home), Garlic Shrimp Plate
**Pro tip:** Whole pies sell out by mid-afternoon on weekends. Get there early if you want one.

## Stop 6: Giovanni's Shrimp Truck — Kahuku (3:00 PM)

The granddaddy of them all. Giovanni's Shrimp Truck is the reason most people drive to the North Shore in the first place, and after five stops you're finally ready for it.

Their garlic shrimp scampi — plump shrimp swimming in a pool of buttery, garlicky, slightly spicy sauce over two scoops of white rice — is the definitive North Shore food experience. The garlic butter soaks into the rice, creating a kind of savory garlic porridge that locals fight over.

There are multiple Giovanni's locations now, but the original Kahuku truck is still the best. The line moves fast, and the outdoor seating area is shaded by a giant tree.

**What to order:** Garlic Shrimp Scampi, Spicy Garlic Shrimp
**Pro tip:** Bring wet wipes. Lots of wet wipes. The garlic sauce gets everywhere — and you'll love every minute of it.

## Stop 7: Banzai Sushi Bar — Haleiwa (5:30 PM)

After a day of eating heavy, it's time for something light and fresh. Banzai Sushi Bar, located in the Haleiwa shopping plaza, serves some of the best sushi on the island — and that's saying something in Hawaii.

Named best sushi by the American Tasting Institute, Banzai focuses on pristine, locally sourced fish. The Pipeline Sashimi Combo is the must-order: a selection of the day's freshest catch, beautifully plated and served with pickled ginger and wasabi. The Wagyu Beef and Seared Furikake Ahi round out the menu for non-sushi eaters.

Chef Hide's obsessive focus on quality means the fish is never less than perfect. This is the kind of meal that resets your palate after a day of fried shrimp and sweet desserts.

**What to order:** Pipeline Sashimi Combo, Wagyu Beef, Wabi Sabi Roll
**Pro tip:** Arrive right at 5:30 PM when they open. They don't take reservations, and the waitlist fills up fast.

## Stop 8: Haleiwa Beach House — Haleiwa (7:30 PM)

End your day where the North Shore meets the Pacific. Haleiwa Beach House is a stunning two-story oceanfront restaurant with panoramic views, and sunset dinner here is the perfect finale to your food tour.

The upstairs dining room and wraparound lanai face the water, and the menu focuses on fresh island fish with Hawaiian-influenced preparations. The macadamia nut-crusted catch is the signature — flaky white fish coated in crushed macadamia nuts and pan-seared to golden perfection. Pair it with a Haleiwa Sunset Cocktail and watch the sky turn orange and pink over the Pacific.

**What to order:** Macadamia Nut-Crusted Fish, Kona Lobster Tail, Haleiwa Sunset Cocktail
**Pro tip:** Request a lanai table when you arrive — the ocean breeze and sunset views make the meal.

## The North Shore Food Tour: Tips for Success

- **Start early.** The first food stop is at 7 AM for a reason — you'll avoid crowds and eat the freshest food of the day.
- **Bring cash.** Many shrimp trucks and small spots are still cash-only.
- **Share everything.** These portions are massive. Order one item per stop and split with your group.
- **Wear comfortable clothes.** This is a day of eating — leave the fancy outfit for another night.
- **Check the surf report.** Winter swells bring massive waves and massive crowds. Eat early or eat late.
- **Don't skip the pie.** Even if you're full. Especially if you're full. Ted's chocolate haupia cream pie is worth every calorie.

The North Shore food tour isn't just about eating — it's about experiencing rural Hawaii at the pace it was meant to be experienced. Slow, generous, and always with an ocean view. By the time you crawl back into your car at sunset, you'll understand why locals make this drive every weekend — and why you'll be back too.`,
},
];


