import { useEffect, useRef } from 'react';
import { Link } from 'react-router';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const collections = [
  { name: 'Beachfront Dining', count: 13, slug: 'beachfront', image: '/images/collection-beachfront.jpg' },
  { name: 'Hidden Gems', count: 6, slug: 'hidden-gems', image: '/images/collection-hidden.jpg' },
  { name: 'Plate Lunch Legends', count: 10, slug: 'plate-lunch', image: '/images/collection-plate.jpg' },
  { name: 'Sunset Happy Hours', count: 8, slug: 'happy-hours', image: '/images/collection-sunset.jpg' },
  { name: 'Japanese', count: 3, slug: 'japanese', image: '/images/hero-card-2.jpg' },
  { name: 'Fine Dining', count: 4, slug: 'fine-dining', image: '/images/hero-card-6.jpg' },
];

export default function FeaturedCollections() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const label = leftRef.current?.querySelector('.label');
      const heading = leftRef.current?.querySelector('.heading');

      if (label) {
        gsap.from(label, {
          opacity: 0.3,
          duration: 0.5,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        });
      }

      if (heading) {
        gsap.from(heading, {
          opacity: 0.3,
          y: 20,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        });
      }

      const cards = rightRef.current?.querySelectorAll('.collection-card');
      if (cards && cards.length > 0) {
        gsap.from(cards, {
          opacity: 0.3,
          x: 30,
          stagger: 0.1,
          duration: 0.6,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="collections" className="py-[120px] px-6 md:px-12">
      <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row gap-12 md:gap-16">
        {/* Left Column */}
        <div ref={leftRef} className="md:w-[45%] flex flex-col justify-center">
          <p className="label text-[13px] uppercase tracking-[0.08em] text-[#d4a574] font-sans mb-4">
            Collections
          </p>
          <h2 className="heading text-4xl md:text-5xl text-[#1a1a1a] font-serif leading-[1.1] tracking-tight">
            Curated Guides to<br />Oahu's Best
          </h2>
        </div>

        {/* Right Column */}
        <div ref={rightRef} className="md:w-[55%] flex flex-col gap-4">
          {collections.map((col) => (
            <Link
              key={col.name}
              to={`/collections/${col.slug}`}
              className="collection-card group flex items-center gap-4 bg-white rounded-xl p-3 shadow-[0_2px_12px_rgba(0,0,0,0.06)] cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)]"
              style={{ opacity: 1, transform: 'translateX(0)' }}
            >
              <div className="w-[60px] h-[60px] rounded-lg overflow-hidden flex-shrink-0">
                <img
                  src={col.image}
                  alt={col.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-base font-sans font-medium text-[#1a1a1a]">
                  {col.name}
                </h3>
                <p className="text-[13px] text-[#666666] font-sans">
                  {col.count} spots
                </p>
              </div>
              <svg className="w-5 h-5 text-[#b8a08a] mr-3 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </Link>
          ))}

          <Link
            to="/discover"
            className="inline-flex items-center gap-2 mt-4 text-lg font-serif italic text-[#1a1a1a] underline underline-offset-4 hover:text-[#d4a574] transition-colors self-start cursor-pointer"
          >
            View All Collections
          </Link>
        </div>
      </div>
    </section>
  );
}
