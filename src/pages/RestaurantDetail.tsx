import { useParams, Navigate, Link } from 'react-router';
import PageLayout from '../components/PageLayout';
import SEOHead from '../components/SEOHead';
import MonetizeBanner from '../components/MonetizeBanner';
import { TravelCTARestaurantSidebar } from '../components/TravelCTA';
import { restaurants } from '../data/restaurants';
import { neighborhoods } from '../data/neighborhoods';
import { getRestaurantSchema, getBreadcrumbSchema } from '../utils/schema';
import { getReservationLink } from '../utils/affiliate';

export default function RestaurantDetail() {
  const { id } = useParams<{ id: string }>();
  const restaurant = restaurants.find((r) => r.id === id);

  if (!restaurant) {
    return <Navigate to="/" replace />;
  }

  const neighborhoodInfo = neighborhoods.find((n) => n.name === restaurant.neighborhood);
  const related = restaurants
    .filter((r) => r.id !== id && (r.neighborhood === restaurant.neighborhood || r.category === restaurant.category))
    .slice(0, 3);

  const schema = [
    getRestaurantSchema({
      name: restaurant.name,
      image: restaurant.image,
      address: restaurant.address,
      phone: restaurant.phone,
      rating: restaurant.rating,
      price: restaurant.price,
      hours: restaurant.hours,
      description: restaurant.description,
    }),
    getBreadcrumbSchema([
      { name: 'Home', url: 'https://www.onooahu.com/' },
      { name: 'Discover', url: 'https://www.onooahu.com/#/discover' },
      { name: restaurant.name, url: `https://www.onooahu.com/#/restaurants/${id}` },
    ]),
  ];

  return (
    <>
      <SEOHead
        title={restaurant.name}
        description={`${restaurant.description} Located in ${restaurant.neighborhood}. ${restaurant.rating} stars. Best dishes: ${restaurant.mustTry.join(', ')}.`}
        image={`https://www.onooahu.com${restaurant.image}`}
        type="article"
        schema={schema}
      />
      <PageLayout>
        {/* Hero Header */}
        <div className="relative h-[400px] md:h-[500px] overflow-hidden">
          <img src={restaurant.image} alt={restaurant.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/90 via-[#1a1a1a]/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 max-w-[1280px] mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[11px] uppercase tracking-[0.08em] text-[#d4a574] font-sans bg-[#d4a574]/20 px-3 py-1 rounded-full">
                {restaurant.category}
              </span>
              <span className="text-xs text-[#f5ede4]/70 font-sans">{restaurant.price}</span>
            </div>
            <h1 className="text-4xl md:text-6xl text-white font-serif leading-[1.1] tracking-tight mb-3">
              {restaurant.name}
            </h1>
            <p className="text-base text-[#f5ede4]/80 font-sans">
              <Link to={`/neighborhoods/${neighborhoodInfo?.slug || ''}`} className="hover:text-[#d4a574] transition-colors">
                {restaurant.neighborhood}
              </Link>
            </p>
          </div>
        </div>

        <MonetizeBanner context="restaurant" />

        <section className="py-12 px-6 md:px-12">
          <div className="max-w-[1280px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2">
                {/* Rating + Tags */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className={`w-5 h-5 ${i < Math.floor(restaurant.rating) ? 'text-[#d4a574]' : 'text-[#e0d5c8]'}`} fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <span className="text-sm text-[#666666] font-sans ml-1">{restaurant.rating}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {restaurant.tags.map((tag) => (
                      <span key={tag} className="text-[10px] uppercase tracking-wider text-[#b8a08a] bg-[#f5ede4] px-2.5 py-1 rounded-full font-sans">{tag}</span>
                    ))}
                  </div>
                </div>

                {/* Description */}
                <p className="text-lg text-[#1a1a1a] font-sans leading-relaxed mb-10">
                  {restaurant.description}
                </p>

                {/* Must Try */}
                <div className="mb-10">
                  <h2 className="text-2xl font-serif text-[#1a1a1a] mb-4">Must Try</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {restaurant.mustTry.map((item) => (
                      <div key={item} className="bg-white rounded-xl p-5 shadow-[0_2px_12px_rgba(0,0,0,0.06)] text-center">
                        <p className="text-base font-sans font-medium text-[#1a1a1a]">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Photo Gallery */}
                {restaurant.gallery && restaurant.gallery.length > 0 && (
                  <div className="mb-10">
                    <h2 className="text-2xl font-serif text-[#1a1a1a] mb-4">Photo Gallery</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {restaurant.gallery.map((photo, idx) => (
                        <div key={idx} className="aspect-[4/3] rounded-xl overflow-hidden shadow-sm">
                          <img
                            src={photo}
                            alt={`${restaurant.name} interior ${idx + 1}`}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                            loading="lazy"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* E-E-A-T signals */}
                <div className="bg-[#f5ede4]/50 rounded-xl p-5 mb-10">
                  <p className="text-sm text-[#666666] font-sans leading-relaxed">
                    <strong className="text-[#1a1a1a]">Why we recommend this spot:</strong> Ono Oahu visits every restaurant anonymously, pays our own way, and reviews based on real experiences. {restaurant.name} was visited in 2026 by our editorial team.
                  </p>
                </div>
              </div>

              {/* Sidebar Info */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.06)]">
                  <h3 className="text-sm uppercase tracking-[0.08em] text-[#d4a574] font-sans mb-4">Information</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.06em] text-[#b8a08a] font-sans mb-1">Address</p>
                      <p className="text-sm text-[#1a1a1a] font-sans">{restaurant.address}</p>
                    </div>
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.06em] text-[#b8a08a] font-sans mb-1">Phone</p>
                      <p className="text-sm text-[#1a1a1a] font-sans">{restaurant.phone}</p>
                    </div>
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.06em] text-[#b8a08a] font-sans mb-1">Hours</p>
                      <p className="text-sm text-[#1a1a1a] font-sans">{restaurant.hours}</p>
                    </div>
                  </div>

                  {/* Reservation CTA */}
                  {getReservationLink(restaurant.id) && (
                    <div className="mt-4">
                      <a
                        href={getReservationLink(restaurant.id)!}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full text-center bg-[#d4a574] text-[#1a1a1a] text-sm font-sans font-medium uppercase tracking-wide py-3 rounded-full hover:bg-[#c49360] transition-colors"
                      >
                        Book a Table
                      </a>
                      <p className="text-[10px] text-[#b8a08a] font-sans text-center mt-1.5">
                        Reservations via OpenTable
                      </p>
                    </div>
                  )}

                  {/* Hotel + Activity CTAs */}
                  {neighborhoodInfo && (
                    <TravelCTARestaurantSidebar
                      restaurantName={restaurant.name}
                      neighborhoodSlug={neighborhoodInfo.slug}
                      neighborhoodName={restaurant.neighborhood}
                      className="mt-5 pt-5 border-t border-[#f0ebe4]"
                    />
                  )}

                  {/* Call CTA */}
                  <div className="mt-4 pt-4 border-t border-[#f0ebe4]">
                    <p className="text-xs text-[#666666] font-sans mb-3">
                      Or call directly for availability.
                    </p>
                    <a
                      href={`tel:${restaurant.phone}`}
                      className="block w-full text-center bg-[#1a1a1a] text-[#faf8f5] text-sm font-sans font-medium uppercase tracking-wide py-3 rounded-full hover:bg-[#d4a574] hover:text-[#1a1a1a] transition-colors"
                    >
                      Call {restaurant.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Restaurants */}
        {related.length > 0 && (
          <section className="py-12 px-6 md:px-12 bg-[#f5ede4]/30">
            <div className="max-w-[1280px] mx-auto">
              <h2 className="text-3xl font-serif text-[#1a1a1a] mb-8">You May Also Like</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {related.map((r) => (
                  <Link key={r.id} to={`/restaurants/${r.id}`} className="group bg-white rounded-xl overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)] transition-all">
                    <div className="aspect-[16/10] overflow-hidden">
                      <img src={r.image} alt={r.name} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                    </div>
                    <div className="p-4">
                      <p className="text-[11px] uppercase tracking-[0.06em] text-[#d4a574] font-sans mb-1">{r.neighborhood}</p>
                      <h3 className="text-lg font-serif text-[#1a1a1a] group-hover:text-[#d4a574] transition-colors">{r.name}</h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </PageLayout>
    </>
  );
}
