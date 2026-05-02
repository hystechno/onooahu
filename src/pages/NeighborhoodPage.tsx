import { useParams, Link, Navigate } from 'react-router';
import PageLayout from '../components/PageLayout';
import SEOHead from '../components/SEOHead';
import MonetizeBanner from '../components/MonetizeBanner';
import { TravelCTADuo } from '../components/TravelCTA';
import { neighborhoods } from '../data/neighborhoods';
import { restaurants } from '../data/restaurants';
import { getBreadcrumbSchema } from '../utils/schema';

export default function NeighborhoodPage() {
  const { slug } = useParams<{ slug: string }>();
  const neighborhood = neighborhoods.find((n) => n.slug === slug);

  if (!neighborhood) {
    return <Navigate to="/" replace />;
  }

  const areaRestaurants = restaurants.filter((r) => r.neighborhood === neighborhood.name);
  const otherNeighborhoods = neighborhoods.filter((n) => n.slug !== slug).slice(0, 3);

  const schema = getBreadcrumbSchema([
    { name: 'Home', url: 'https://www.onooahu.com/' },
    { name: 'Neighborhoods', url: 'https://www.onooahu.com/neighborhoods' },
    { name: neighborhood.name, url: `https://www.onooahu.com/neighborhoods/${slug}` },
  ]);

  return (
    <>
      <SEOHead
        title={`${neighborhood.name} Restaurant Guide`}
        description={`${neighborhood.description} ${areaRestaurants.length} curated restaurants in ${neighborhood.name}, Oahu.`}
        image={`https://www.onooahu.com${neighborhood.image}`}
        schema={schema}
      />
      <PageLayout>
        {/* Hero Header */}
        <div className="relative h-[400px] md:h-[500px] overflow-hidden">
          <img src={neighborhood.image} alt={neighborhood.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/90 via-[#1a1a1a]/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 max-w-[1280px] mx-auto">
            <p className="text-[11px] uppercase tracking-[0.08em] text-[#d4a574] font-sans mb-3">Neighborhood Guide</p>
            <h1 className="text-4xl md:text-6xl text-white font-serif leading-[1.1] tracking-tight mb-4">{neighborhood.name}</h1>
            <p className="text-base md:text-lg text-[#f5ede4]/80 font-sans max-w-2xl leading-relaxed">{neighborhood.description}</p>
          </div>
        </div>

        <MonetizeBanner context="neighborhood" />

        {/* About Section */}
        <section className="py-16 px-6 md:px-12">
          <div className="max-w-[1280px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <p className="text-lg text-[#1a1a1a] font-sans leading-relaxed mb-8">{neighborhood.longDescription}</p>
                <div className="mb-8">
                  <h2 className="text-xl font-serif text-[#1a1a1a] mb-4">What to Expect</h2>
                  <div className="flex flex-wrap gap-2">
                    {neighborhood.highlights.map((h) => (
                      <span key={h} className="text-sm text-[#d4a574] bg-[#f5ede4] px-3 py-1.5 rounded-full font-sans">{h}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="lg:col-span-1">
                <div className="bg-white rounded-xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.06)]">
                  <h3 className="text-sm uppercase tracking-[0.08em] text-[#d4a574] font-sans mb-4">Quick Facts</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.06em] text-[#b8a08a] font-sans mb-1">Restaurants</p>
                      <p className="text-2xl font-serif text-[#1a1a1a]">{neighborhood.spots} spots</p>
                    </div>
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.06em] text-[#b8a08a] font-sans mb-1">Best For</p>
                      <p className="text-sm text-[#1a1a1a] font-sans">{neighborhood.highlights.slice(0, 2).join(', ')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stay & Activities CTA */}
        <section className="py-12 px-6 md:px-12 bg-[#f5ede4]/30">
          <div className="max-w-[1280px] mx-auto">
            <TravelCTADuo
              neighborhoodSlug={neighborhood.slug}
              neighborhoodName={neighborhood.name}
            />
          </div>
        </section>

        {/* Restaurants in this Area */}
        <section className="py-16 px-6 md:px-12 bg-[#f5ede4]/30">
          <div className="max-w-[1280px] mx-auto">
            <h2 className="text-3xl font-serif text-[#1a1a1a] mb-2">Restaurants in {neighborhood.name}</h2>
            <p className="text-sm text-[#666666] font-sans mb-8">{areaRestaurants.length} curated spots</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {areaRestaurants.map((r) => (
                <Link key={r.id} to={`/restaurants/${r.id}`} className="group bg-white rounded-xl overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] transition-all">
                  <div className="aspect-[16/10] overflow-hidden relative">
                    <img src={r.image} alt={r.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full">
                      <span className="text-xs font-sans font-medium text-[#1a1a1a]">{r.price}</span>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[11px] uppercase tracking-[0.06em] text-[#d4a574] font-sans">{r.category}</span>
                      <span className="text-[#d4a574]">|</span>
                      <div className="flex items-center gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className={`w-3 h-3 ${i < Math.floor(r.rating) ? 'text-[#d4a574]' : 'text-[#e0d5c8]'}`} fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                        <span className="text-[11px] text-[#666666] font-sans ml-1">{r.rating}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-serif text-[#1a1a1a] mb-2 group-hover:text-[#d4a574] transition-colors">{r.name}</h3>
                    <p className="text-sm text-[#666666] font-sans line-clamp-2">{r.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Other Neighborhoods */}
        <section className="py-16 px-6 md:px-12">
          <div className="max-w-[1280px] mx-auto">
            <h2 className="text-3xl font-serif text-[#1a1a1a] mb-8">Explore Other Areas</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {otherNeighborhoods.map((n) => (
                <Link key={n.slug} to={`/neighborhoods/${n.slug}`} className="group relative h-[280px] rounded-2xl overflow-hidden">
                  <img src={n.image} alt={n.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6">
                    <p className="text-[11px] uppercase tracking-[0.06em] text-[#f5ede4] font-sans mb-1">{n.spots} spots</p>
                    <h3 className="text-2xl text-white font-serif">{n.name}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </PageLayout>
    </>
  );
}
