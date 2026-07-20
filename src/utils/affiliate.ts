// Reservation links for user convenience (not affiliate tracked)
// OpenTable partner application was rejected April 2026
// These links still work for users but earn no commission

const RESERVATION_LINKS: Record<string, string> = {
  'dukes-waikiki': 'https://www.opentable.com/r/dukes-waikiki-reservations-honolulu',
  'earls-waikiki': 'https://www.opentable.com/r/earls-kitchen-bar-honolulu',
  'house-without-key': 'https://www.opentable.com/r/house-without-a-key-honolulu',
  'mw-restaurant': 'https://www.opentable.com/r/mw-restaurant-honolulu',
  'rainbow-drive-in': '', // No reservations - walk-in only
  'giovannis-shrimp-truck': '', // Food truck - no reservations
  'onos-seafood': '', // Takeout counter
  'helena-hawaiian-food': '', // Cash only, counter service
  'westman-cafe': '', // Walk-in cafe, no reservations
  'leonards-bakery': '', // Bakery - no reservations
  'skull-crown': '', // Bar - no reservations
  'liliha-bakery': '', // Bakery
  'mai-tai-bar': '', // Hotel bar
  'tommy-bahama': 'https://www.opentable.com/r/tommy-bahama-restaurant-bar-honolulu',
  'waiola-shave-ice': '', // Shave ice stand
  'monkeypod-waikiki': 'https://www.opentable.com/r/monkeypod-kitchen-waikiki-honolulu',
  'monkeypod-waikiki-hh': 'https://www.opentable.com/r/monkeypod-kitchen-waikiki-honolulu',
};

export function getReservationLink(restaurantId: string): string | null {
  return RESERVATION_LINKS[restaurantId] || null;
}
