// Travelpayouts affiliate utility
// All partner IDs are placeholders — swap with your real IDs once approved
// Travelpayouts dashboard: https://www.travelpayouts.com/en/

// ==========================================
// PLACEHOLDER CONFIG — UPDATE AFTER APPROVAL
// ==========================================

const TP_PARTNER_ID = '722884';
const TP_MARKER = TP_PARTNER_ID;

// ==========================================
// BRAND-SPECIFIC PROGRAM SUB-IDs
// ==========================================

const PROGRAM_SUBS = {
  bookingcom: 'bookingcom_',
  viator: 'viator_',
  getyourguide: 'gyg_',
  rentalcars: 'rentalcars_',
  klook: 'klook_',
};

// ==========================================
// URL GENERATORS
// ==========================================

/**
 * Generate a Booking.com deep-link for a destination search.
 * @param destination — city/neighborhood name (e.g., "Waikiki")
 * @param checkin — YYYY-MM-DD (optional)
 * @param checkout — YYYY-MM-DD (optional)
 * @param guests — number of adults (optional, default 2)
 * @param subId — tracking sub-ID for attribution
 */
export function getBookingLink(
  destination: string,
  checkin?: string,
  checkout?: string,
  guests: number = 2,
  subId?: string
): string {
  const iataMap: Record<string, string> = {
    waikiki: '-1594773',
    honolulu: '-1594773',
    'north shore': '-1594515',
    'oahu': '-1501585',
    kakaako: '-1594773',
    kaimuki: '-1594773',
    chinatown: '-1594773',
    windward: '-1594515',
  };

  const destKey = destination.toLowerCase();
  const destIata = iataMap[destKey] || '-1501585'; // fallback to Oahu

  const params = new URLSearchParams({
    label: `gen${TP_MARKER}_dtl`,
    aid: TP_MARKER,
    no_rooms: '1',
    group_adults: String(guests),
    group_children: '0',
    iata: destIata,
  });

  if (checkin) params.set('checkin', checkin);
  if (checkout) params.set('checkout', checkout);
  if (subId) params.set('utm_content', subId);

  return `https://www.booking.com/searchresults.html?${params.toString()}`;
}

/**
 * Generate a Booking.com hotel search widget redirect URL.
 * Uses the classic widget flow: user picks dates on our site, then gets
 * redirected to Booking.com results with our affiliate marker.
 */
export function getBookingWidgetSearchUrl(
  destination: string,
  checkin?: string,
  checkout?: string,
  adults: number = 2,
  children: number = 0,
  rooms: number = 1
): string {
  // Build the search results URL with all params
  const params = new URLSearchParams({
    ss: destination,
    aid: TP_MARKER,
    label: `gen${TP_MARKER}_index_search`,
    lang: 'en-us',
    no_rooms: String(rooms),
    group_adults: String(adults),
    group_children: String(children),
  });

  if (checkin) params.set('checkin', checkin);
  if (checkout) params.set('checkout', checkout);

  return `https://www.booking.com/searchresults.html?${params.toString()}`;
}

/**
 * Generate a Viator activity/tour deep-link.
 * @param city — destination name
 * @param category — activity type slug (e.g., "Food Tours", "Snorkeling")
 * @param subId — tracking sub-ID
 */
export function getViatorLink(
  city: string = 'Oahu',
  category?: string,
  subId?: string
): string {
  const citySlug = city.toLowerCase().replace(/\s+/g, '-');
  const base = `https://www.viator.com/searchResults/all`;
  const params = new URLSearchParams({
    text: city,
    pid: TP_MARKER,
    mcid: PROGRAM_SUBS.viator + (subId || citySlug),
  });
  if (category) params.set('category', category);
  return `${base}?${params.toString()}`;
}

/**
 * Generate a GetYourGuide activity link.
 */
export function getGetYourGuideLink(
  city: string = 'Oahu',
  subId?: string
): string {
  const citySlug = city.toLowerCase().replace(/\s+/g, '-');
  const params = new URLSearchParams({
    partner_id: TP_MARKER,
    cmp: PROGRAM_SUBS.getyourguide + (subId || citySlug),
  });
  return `https://www.getyourguide.com/-l${city === 'Oahu' ? '94' : ''}?${params.toString()}`;
}

/**
 * Generic hotel search URL — used as a fallback before partner ID is set.
 * Points to Booking.com search results for "Hotels in Oahu".
 */
export function getGenericHotelSearchUrl(destination: string = 'Oahu'): string {
  const q = encodeURIComponent(`Hotels in ${destination}`);
  return `https://www.booking.com/searchresults.html?ss=${q}`;
}

// ==========================================
// CONTEXT-AWARE URL HELPERS
// ==========================================

/**
 * Get a contextual hotel booking link for a neighborhood.
 */
export function getNeighborhoodHotelLink(neighborhoodSlug: string): string {
  const nameMap: Record<string, string> = {
    waikiki: 'Waikiki Beach',
    'north-shore': 'North Shore Oahu',
    chinatown: 'Chinatown Honolulu',
    kakaako: 'Kakaako Honolulu',
    kaimuki: 'Kaimuki Honolulu',
    'windward-coast': 'Kailua Oahu',
  };

  const destName = nameMap[neighborhoodSlug] || 'Oahu';
  return getBookingLink(destName, undefined, undefined, 2, `neighborhood_${neighborhoodSlug}`);
}

/**
 * Get an activity link for a neighborhood.
 */
export function getNeighborhoodActivitiesLink(neighborhoodSlug: string): string {
  const nameMap: Record<string, string> = {
    waikiki: 'Waikiki',
    'north-shore': 'North Shore',
    chinatown: 'Honolulu',
    kakaako: 'Honolulu',
    kaimuki: 'Honolulu',
    'windward-coast': 'Kailua',
  };

  const city = nameMap[neighborhoodSlug] || 'Oahu';
  return getViatorLink(city, undefined, `neighborhood_${neighborhoodSlug}`);
}

/**
 * Get a contextual hotel link for a specific restaurant (nearby hotels).
 */
export function getRestaurantNearbyHotelsLink(
  restaurantName: string,
  neighborhood: string
): string {
  const dest = neighborhood === 'Waikiki' ? 'Waikiki Beach' : `${neighborhood} Oahu`;
  return getBookingLink(dest, undefined, undefined, 2, `restaurant_${restaurantName.toLowerCase().replace(/\s+/g, '-')}`);
}

/**
 * Get a "things to do" link for Oahu activities (used on blog posts, etc.).
 */
export function getOahuActivitiesLink(): string {
  return getViatorLink('Oahu', undefined, 'oahu_things_to_do');
}

// ==========================================

export interface AffiliatePartner {
  name: string;
  program: string;
  commission: string;
  status: 'placeholder' | 'live';
}

export const affiliatePartners: AffiliatePartner[] = [
  { name: 'Booking.com', program: 'Travelpayouts', commission: '5% of booking value', status: 'live' },
  { name: 'Viator', program: 'Travelpayouts', commission: '8% of activity value', status: 'live' },
  { name: 'GetYourGuide', program: 'Travelpayouts', commission: '8% of activity value', status: 'live' },
];
