import { useState } from 'react';
import { Link } from 'react-router';
import PageLayout from '../components/PageLayout';
import Breadcrumbs from '../components/Breadcrumbs';
import SEOHead from '../components/SEOHead';
import MonetizeBanner from '../components/MonetizeBanner';
import AdSenseSlot from '../components/AdSenseSlot';
import { restaurants, collections } from '../data/restaurants';
import { getBreadcrumbSchema } from '../utils/schema';
import { getReservationLink } from '../utils/affiliate';

export default function DiscoverPage() {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', ...collections.map((c) => c.title)];
  const filtered = activeFilter === 'All'
    ? restaurants
    : restaurants.filter((r) => r.category === activeFilter);

  const schema = getBreadcrumbSchema([
    { name: 'Home', url: 'https://www.onooahu.com/' },
    { name: 'Discover', url: 'https://www.onooahu.com/#/discover' },
  ]);

  return (
    <>
      <SEOHead
        title="Discover All Restaurants"
        description={`Browse all ${restaurants.length} curated restaurants on Oahu. Filter by Beachfront Dining, Hidden Gems, Plate Lunch, and Happy Hours.`}
        schema={schema}
      />
      <PageLayout>
      <Breadcrumbs items={[{ label: 'Discover' }]} />
        {/* Hero Header */}
        <div className="relative h-[350px] md:h-[400px] overflow-hidden">
          <img loading="lazy" src="/images/hero-card-3.jpg" alt="Oahu dining" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/90 via-[#1a1a1a]/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 max-w-[1280px] mx-auto">
            <p className="text-[11px] uppercase tracking-[0.08em] text-[#d4a574] font-sans mb-3">Complete Guide</p>
            <h1 className="text-4xl md:text-5xl text-white font-serif leading-[1.1] tracking-tight mb-3">Discover Oahu's Best</h1>
            <p className="text-base text-[#f5ede4]/80 font-sans max-w-xl">{restaurants.length} hand-picked restaurants across the island — from food trucks to fine dining.</p>
          </div>
        </div>

        <MonetizeBanner context="default" />

        {/* Filters */}
        <section className="py-8 px-6 md:px-12 border-b border-[#f0ebe4]">
          <div className="max-w-[1280px] mx-auto">
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`text-sm font-sans px-4 py-2 rounded-full transition-all ${
                    activeFilter === cat
                      ? 'bg-[#1a1a1a] text-[#faf8f5]'
                      : 'bg-[#f5ede4] text-[#1a1a1a] hover:bg-[#e8ddd0]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Restaurant Grid */}
        <section className="py-12 px-6 md:px-12">
          <div className="max-w-[1280px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((r) => (
                <Link key={r.id} to={`/restaurants/${r.id}`} className="group bg-white rounded-xl overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] transition-all">
                  <div className="aspect-[16/10] overflow-hidden relative">
                    <img loading="lazy" src={r.image} alt={r.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full">
                      <span className="text-xs font-sans font-medium text-[#1a1a1a]">{r.price}</span>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[11px] uppercase tracking-[0.06em] text-[#d4a574] font-sans">{r.neighborhood}</span>
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
                    <p className="text-sm text-[#666666] font-sans line-clamp-2 mb-3">{r.description}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {r.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="text-[10px] uppercase tracking-wider text-[#b8a08a] bg-[#f5ede4] px-2 py-1 rounded-full font-sans">{tag}</span>
                      ))}
                    </div>
                    {/* Book Table CTA */}
                    {getReservationLink(r.id) && (
                      <a
                        href={getReservationLink(r.id)!}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-sans text-[#d4a574] hover:text-[#1a1a1a] transition-colors mt-2"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                        </svg>
                        Reserve on OpenTable
                      </a>
                    )}
                  </div>
                </Link>
              ))}
            </div>

            {/* AdSense - Bottom of discover */}
            <AdSenseSlot slot="discover-bottom" />
          </div>
        </section>
      </PageLayout>
    </>
  );
}
