import {
  getNeighborhoodHotelLink,
  getNeighborhoodActivitiesLink,
  getRestaurantNearbyHotelsLink,
  getOahuActivitiesLink,
} from '../utils/travelpayouts';

// ==========================================
// TYPES
// ==========================================

interface TravelCTAProps {
  variant: 'neighborhood-stay' | 'neighborhood-activities' | 'restaurant-nearby' | 'blog-activities';
  neighborhoodSlug?: string;
  restaurantName?: string;
  neighborhoodName?: string;
  className?: string;
}

// ==========================================
// ICONS (inline SVGs matching site aesthetic)
// ==========================================

function BedIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#d4a574]">
      <path d="M3 17V11C3 9.34315 4.34315 8 6 8H18C19.6569 8 21 9.34315 21 11V17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M2 17H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M5 8V6C5 4.89543 5.89543 4 7 4H17C18.1046 4 19 4.89543 19 6V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M7 13H7.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M17 13H17.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function CompassIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#d4a574]">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
      <path d="M16.5 7.5L13.5 13.5L7.5 16.5L10.5 10.5L16.5 7.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#d4a574]">
      <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 22C16 18 20 14.4183 20 10C20 5.58172 16.4183 2 12 2C7.58172 2 4 5.58172 4 10C4 14.4183 8 18 12 22Z" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function TourIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#d4a574]">
      <path d="M12 5L15 11L21 12L17 17L18 23L12 20L6 23L7 17L3 12L9 11L12 5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

// ==========================================
// VARIANT CONFIGS
// ==========================================

const variantConfig = {
  'neighborhood-stay': {
    icon: BedIcon,
    headline: 'Stay in this Area',
    body: (name?: string) =>
      `Find the best hotels and vacation rentals in ${name || 'this neighborhood'} — walking distance to these restaurants.`,
    cta: 'Find Hotels',
    getLink: (slug?: string) => getNeighborhoodHotelLink(slug || 'waikiki'),
  },
  'neighborhood-activities': {
    icon: CompassIcon,
    headline: 'Things to Do Nearby',
    body: (name?: string) =>
      `Snorkeling tours, luaus, food tours and more in ${name || 'this area'}.`,
    cta: 'Explore Activities',
    getLink: (slug?: string) => getNeighborhoodActivitiesLink(slug || 'waikiki'),
  },
  'restaurant-nearby': {
    icon: MapPinIcon,
    headline: 'Hotels Nearby',
    body: (name?: string, neighborhood?: string) =>
      `Visiting from out of town? Book a hotel near ${name || 'this restaurant'} in ${neighborhood || 'the area'}.`,
    cta: 'Book a Hotel',
    getLink: (_slug?: string, restaurantName?: string, neighborhoodName?: string) =>
      getRestaurantNearbyHotelsLink(restaurantName || '', neighborhoodName || ''),
  },
  'blog-activities': {
    icon: TourIcon,
    headline: 'Experience Oahu',
    body: () =>
      'Food tours, sunset cruises, snorkeling adventures, and luaus — curated activities for your Oahu trip.',
    cta: 'Browse Tours',
    getLink: () => getOahuActivitiesLink(),
  },
};

// ==========================================
// MAIN COMPONENT
// ==========================================

export default function TravelCTA({
  variant,
  neighborhoodSlug,
  restaurantName,
  neighborhoodName,
  className = '',
}: TravelCTAProps) {
  const config = variantConfig[variant];
  const Icon = config.icon;

  const link =
    variant === 'restaurant-nearby'
      ? config.getLink(neighborhoodSlug, restaurantName, neighborhoodName)
      : variant === 'blog-activities'
      ? config.getLink()
      : config.getLink(neighborhoodSlug);

  return (
    <div
      className={`bg-[#faf8f5] border border-[#e0d5c8] rounded-xl p-5 flex items-start gap-4 ${className}`}
    >
      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#f5ede4] flex items-center justify-center">
        <Icon />
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="text-sm font-sans font-semibold text-[#1a1a1a] mb-1">
          {config.headline}
        </h4>
        <p className="text-xs text-[#666666] font-sans leading-relaxed mb-3">
          {variant === 'restaurant-nearby'
            ? (config.body as (name?: string, neighborhood?: string) => string)(
                restaurantName,
                neighborhoodName
              )
            : (config.body as (name?: string) => string)(neighborhoodName || neighborhoodSlug)}
        </p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-[#d4a574] text-xs font-sans font-semibold uppercase tracking-wide hover:text-[#c49360] transition-colors"
        >
          {config.cta}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-current">
            <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </div>
  );
}

// ==========================================
// SIDE-BY-SIDE VARIANT (for bottom of pages)
// ==========================================

export function TravelCTADuo({
  neighborhoodSlug,
  neighborhoodName,
  className = '',
}: {
  neighborhoodSlug: string;
  neighborhoodName: string;
  className?: string;
}) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 ${className}`}>
      <TravelCTA
        variant="neighborhood-stay"
        neighborhoodSlug={neighborhoodSlug}
        neighborhoodName={neighborhoodName}
      />
      <TravelCTA
        variant="neighborhood-activities"
        neighborhoodSlug={neighborhoodSlug}
        neighborhoodName={neighborhoodName}
      />
    </div>
  );
}

// ==========================================
// RESTAURANT SIDEBAR VARIANT
// ==========================================

export function TravelCTARestaurantSidebar({
  restaurantName,
  neighborhoodSlug,
  neighborhoodName,
  className = '',
}: {
  restaurantName: string;
  neighborhoodSlug: string;
  neighborhoodName: string;
  className?: string;
}) {
  return (
    <div className={`space-y-3 ${className}`}>
      <TravelCTA
        variant="restaurant-nearby"
        restaurantName={restaurantName}
        neighborhoodName={neighborhoodName}
        neighborhoodSlug={neighborhoodSlug}
      />
      <TravelCTA
        variant="neighborhood-activities"
        neighborhoodSlug={neighborhoodSlug}
        neighborhoodName={neighborhoodName}
      />
    </div>
  );
}
