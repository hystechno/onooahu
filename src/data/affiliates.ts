// ==========================================
// AFFILIATE CONTENT DATA
// ==========================================
// This file maps neighborhoods and contexts to relevant
// affiliate offers. It powers the TravelCTA components.
//
// When you get approved by Travelpayouts, update
// src/utils/travelpayouts.ts with your real partner ID.
// ==========================================

export interface NeighborhoodHotelContext {
  slug: string;
  searchKeywords: string;
  iataCode: string;
  topHotels: string[];
  avgPriceNightly: string;
  description: string;
}

export interface ActivityContext {
  title: string;
  url: string;
  image: string;
  price: string;
  category: string;
}

// Hotel search contexts for each neighborhood
export const neighborhoodHotelContexts: Record<string, NeighborhoodHotelContext> = {
  waikiki: {
    slug: 'waikiki',
    searchKeywords: 'Waikiki Beach Honolulu',
    iataCode: '-1594773',
    topHotels: ['Royal Hawaiian', 'Moana Surfrider', 'Sheraton Waikiki', 'Outrigger Reef', 'Hilton Hawaiian Village'],
    avgPriceNightly: '$250–$450',
    description: 'Waikiki has the widest hotel selection on Oahu — from luxury beachfront resorts to budget-friendly boutique hotels. Most are within walking distance of the restaurants on our guide.',
  },
  'north-shore': {
    slug: 'north-shore',
    searchKeywords: 'North Shore Oahu',
    iataCode: '-1594515',
    topHotels: ['Turtle Bay Resort', 'Courtyard Oahu North Shore', 'Sunset Beach vacation rentals'],
    avgPriceNightly: '$300–$600',
    description: 'The North Shore has fewer hotels than Waikiki, but Turtle Bay Resort is a standout — a 400-acre oceanfront property near all the shrimp trucks and surf breaks. Vacation rentals are also popular here.',
  },
  chinatown: {
    slug: 'chinatown',
    searchKeywords: 'Chinatown Honolulu Downtown',
    iataCode: '-1594773',
    topHotels: ['Hotel Renew', 'Alohilani Resort', 'The Laylow'],
    avgPriceNightly: '$180–$350',
    description: 'Downtown Honolulu and Chinatown have boutique hotels with character — many in historic buildings. You\'ll be steps from the best dim sum, cocktail bars, and markets.',
  },
  kakaako: {
    slug: 'kakaako',
    searchKeywords: 'Kakaako Honolulu Ward Village',
    iataCode: '-1594773',
    topHotels: ['Alohilani Resort', 'Prince Waikiki', 'The Modern Honolulu'],
    avgPriceNightly: '$200–$400',
    description: 'Kakaako is adjacent to Waikiki but with a more local, creative energy. Hotels here tend to be newer and design-forward, with easy access to the neighborhood\'s craft breweries and innovative restaurants.',
  },
  kaimuki: {
    slug: 'kaimuki',
    searchKeywords: 'Kaimuki Honolulu',
    iataCode: '-1594773',
    topHotels: ['Kaimuki vacation rentals', 'Waikiki hotels (10 min drive)'],
    avgPriceNightly: '$150–$280',
    description: 'Kaimuki is primarily residential — most visitors stay in nearby Waikiki or Diamond Head area and drive over. Vacation rentals through Booking.com offer the most authentic neighborhood experience.',
  },
  'windward-coast': {
    slug: 'windward-coast',
    searchKeywords: 'Kailua Oahu Windward',
    iataCode: '-1594515',
    topHotels: ['Paradise Bay Resort', 'Kailua vacation rentals'],
    avgPriceNightly: '$200–$400',
    description: 'Kailua and the Windward Coast are known for vacation rentals — beach cottages, mountain-view homes, and B&Bs. Booking a rental here puts you close to Lanikai Beach and the area\'s best local eats.',
  },
};

// Top activities to recommend per neighborhood
export const neighborhoodActivities: Record<string, ActivityContext[]> = {
  waikiki: [
    {
      title: 'Sunset Catamaran Cruise',
      url: 'https://www.viator.com/searchResults/all?text=Waikiki+sunset+cruise',
      image: '/images/activity-cruise.jpg',
      price: '$89',
      category: 'Water Activities',
    },
    {
      title: 'Traditional Hawaiian Luau',
      url: 'https://www.viator.com/searchResults/all?text=Waikiki+luau',
      image: '/images/activity-luau.jpg',
      price: '$125',
      category: 'Cultural',
    },
    {
      title: 'Diamond Head Hike',
      url: 'https://www.viator.com/searchResults/all?text=Diamond+Head+hike',
      image: '/images/activity-hike.jpg',
      price: '$45',
      category: 'Adventure',
    },
  ],
  'north-shore': [
    {
      title: 'Shark Cage Diving',
      url: 'https://www.viator.com/searchResults/all?text=North+Shore+shark+dive',
      image: '/images/activity-shark.jpg',
      price: '$135',
      category: 'Adventure',
    },
    {
      title: 'Surf Lesson at Haleiwa',
      url: 'https://www.viator.com/searchResults/all?text=North+Shore+surf+lesson',
      image: '/images/activity-surf.jpg',
      price: '$95',
      category: 'Water Activities',
    },
    {
      title: 'Food Truck Tour',
      url: 'https://www.viator.com/searchResults/all?text=North+Shore+food+tour',
      image: '/images/activity-foodtour.jpg',
      price: '$110',
      category: 'Food & Drink',
    },
  ],
  chinatown: [
    {
      title: 'Chinatown Food & History Walk',
      url: 'https://www.viator.com/searchResults/all?text=Honolulu+Chinatown+food+tour',
      image: '/images/activity-foodtour.jpg',
      price: '$85',
      category: 'Food & Drink',
    },
    {
      title: 'Craft Cocktail Bar Crawl',
      url: 'https://www.viator.com/searchResults/all?text=Honolulu+cocktail+tour',
      image: '/images/activity-cocktails.jpg',
      price: '$75',
      category: 'Nightlife',
    },
  ],
  kakaako: [
    {
      title: 'Street Art Walking Tour',
      url: 'https://www.viator.com/searchResults/all?text=Kakaako+street+art+tour',
      image: '/images/activity-art.jpg',
      price: '$35',
      category: 'Cultural',
    },
    {
      title: 'Craft Brewery Tour',
      url: 'https://www.viator.com/searchResults/all?text=Honolulu+brewery+tour',
      image: '/images/activity-beer.jpg',
      price: '$65',
      category: 'Food & Drink',
    },
  ],
  kaimuki: [
    {
      title: 'Local Food Tour',
      url: 'https://www.viator.com/searchResults/all?text=Honolulu+local+food+tour',
      image: '/images/activity-foodtour.jpg',
      price: '$80',
      category: 'Food & Drink',
    },
  ],
  'windward-coast': [
    {
      title: 'Kayaking to the Mokulua Islands',
      url: 'https://www.viator.com/searchResults/all?text=Kailua+kayak+Mokulua',
      image: '/images/activity-kayak.jpg',
      price: '$120',
      category: 'Water Activities',
    },
    {
      title: 'Kualoa Ranch Movie Tour',
      url: 'https://www.viator.com/searchResults/all?text=Kualoa+Ranch+tour',
      image: '/images/activity-ranch.jpg',
      price: '$55',
      category: 'Adventure',
    },
    {
      title: 'Beach Hopping Tour',
      url: 'https://www.viator.com/searchResults/all?text=Windward+Oahu+beach+tour',
      image: '/images/activity-beach.jpg',
      price: '$95',
      category: 'Scenic',
    },
  ],
};

// General Oahu-wide activities for blog posts and generic pages
export const oahuTopActivities: ActivityContext[] = [
  {
    title: 'Pearl Harbor USS Arizona Memorial',
    url: 'https://www.viator.com/searchResults/all?text=Pearl+Harbor+tour',
    image: '/images/activity-pearl.jpg',
    price: '$55',
    category: 'Historical',
  },
  {
    title: 'Circle Island Tour',
    url: 'https://www.viator.com/searchResults/all?text=Oahu+circle+island+tour',
    image: '/images/activity-circle.jpg',
    price: '$110',
    category: 'Scenic',
  },
  {
    title: 'Snorkeling at Hanauma Bay',
    url: 'https://www.viator.com/searchResults/all?text=Hanauma+Bay+snorkel',
    image: '/images/activity-snorkel.jpg',
    price: '$45',
    category: 'Water Activities',
  },
  {
    title: 'Polynesian Cultural Center',
    url: 'https://www.viator.com/searchResults/all?text=Polynesian+Cultural+Center',
    image: '/images/activity-pcc.jpg',
    price: '$90',
    category: 'Cultural',
  },
];

// ==========================================
// HELPER FUNCTIONS
// ==========================================

export function getHotelContextForNeighborhood(slug: string): NeighborhoodHotelContext | undefined {
  return neighborhoodHotelContexts[slug];
}

export function getActivitiesForNeighborhood(slug: string): ActivityContext[] {
  return neighborhoodActivities[slug] || oahuTopActivities;
}

export function getOahuActivities(): ActivityContext[] {
  return oahuTopActivities;
}
