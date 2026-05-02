export interface Neighborhood {
  name: string;
  slug: string;
  description: string;
  image: string;
  spots: number;
  longDescription: string;
  highlights: string[];
}

export const neighborhoods: Neighborhood[] = [
  {
    name: 'Waikiki',
    slug: 'waikiki',
    description: 'The heart of Honolulu tourism, packed with beachfront dining, hotels, and iconic restaurants.',
    image: '/images/neighborhood-waikiki.jpg',
    spots: 25,
    longDescription: "Waikiki is Oahu's most famous neighborhood — a vibrant stretch of coastline where turquoise water meets world-class dining. From beachfront institutions like Duke's to Canada's new Earls Kitchen + Bar with its rare late-night happy hour, Waikiki offers the densest concentration of restaurants on the island. The neighborhood buzzes from sunrise breakfast spots to 1 AM last calls, with something for every budget.",
    highlights: ['Beachfront dining', 'Late night happy hour', 'Sunset cocktails', 'Hotel restaurants'],
  },
  {
    name: 'North Shore',
    slug: 'north-shore',
    description: 'Legendary surf breaks and iconic food trucks. Home to garlic shrimp, shave ice, and laid-back vibes.',
    image: '/images/neighborhood-northshore.jpg',
    spots: 18,
    longDescription: "Oahu's North Shore is world-famous for its massive winter waves, but the food scene is equally legendary. The 7-mile stretch from Haleiwa to Sunset Beach is home to iconic shrimp trucks, old-school bakeries, and farm-to-table spots that capture the laid-back, rural spirit of the island. Come hungry, leave sandy.",
    highlights: ['Food trucks', 'Shrimp plates', 'Shave ice', 'Farm-to-table'],
  },
  {
    name: 'Chinatown',
    slug: 'chinatown',
    description: 'A bustling cultural district with dim sum, noodle shops, hidden bars, and fresh markets.',
    image: '/images/neighborhood-chinatown.jpg',
    spots: 15,
    longDescription: "Honolulu's Chinatown is one of the oldest and most vibrant in the United States. By day, it's a bustling marketplace with fresh produce, fish markets, and traditional dim sum parlors. By night, it transforms into one of Oahu's hottest nightlife districts, with craft cocktail bars, hidden speakeasies, and late-night noodle shops.",
    highlights: ['Dim sum', 'Craft cocktails', 'Fresh markets', 'Late-night eats'],
  },
  {
    name: "Kaka'ako",
    slug: 'kakaako',
    description: 'An up-and-coming arts district with craft breweries, trendy cafes, and creative dining.',
    image: '/images/neighborhood-kakaako.jpg',
    spots: 3,
    longDescription: "Kaka'ako is Honolulu's fastest-evolving neighborhood — a former industrial warehouse district now home to colorful murals, craft breweries, and some of the island's most innovative restaurants. The area around Ward Village and Auahi Street has become a hub for young chefs pushing Hawaiian cuisine in new directions, plus a new generation of breakfast cafes like Westman that have quickly become neighborhood institutions.",
    highlights: ['Street art', 'Craft beer', 'Breakfast cafes', 'Modern Hawaiian'],
  },
  {
    name: 'Kaimuki',
    slug: 'kaimuki',
    description: 'A charming residential area with vintage shops, bakeries, and intimate neighborhood restaurants.',
    image: '/images/neighborhood-kaimuki.jpg',
    spots: 10,
    longDescription: "Kaimuki is a quiet, residential neighborhood on the slopes of Diamond Head that has quietly become one of Oahu's best food destinations. The stretch of Waialae Avenue is lined with independent restaurants, vintage boutiques, and bakeries that have earned national attention. It's where locals go when they want a night out without the Waikiki crowds.",
    highlights: ['Bakeries', 'Neighborhood gems', 'Coffee', 'Vintage vibe'],
  },
  {
    name: 'Windward Coast',
    slug: 'windward-coast',
    description: 'Lush, serene coastal towns with local plate lunches, fruit stands, and oceanfront cafes.',
    image: '/images/neighborhood-windward.jpg',
    spots: 9,
    longDescription: "Oahu's Windward Coast is the island's greenest, most lush side — a string of small towns nestled between the Ko'olau Mountains and the Pacific. The food here is unpretentious and deeply local: plate lunch spots, roadside fruit stands, and beachside cafes where regulars have been coming for decades.",
    highlights: ['Plate lunch', 'Roadside fruit', 'Beach cafes', 'Local vibes'],
  },
];
