import { useEffect, useRef } from 'react';
import { Link } from 'react-router';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const neighborhoods = [
  { name: 'Waikiki', count: 10, slug: 'waikiki', image: '/images/neighborhood-waikiki.jpg' },
  { name: 'North Shore', count: 2, slug: 'north-shore', image: '/images/neighborhood-northshore.jpg' },
  { name: 'Chinatown', count: 4, slug: 'chinatown', image: '/images/neighborhood-chinatown.jpg' },
  { name: "Kaka'ako", count: 5, slug: 'kakaako', image: '/images/neighborhood-kakaako.jpg' },
  { name: 'Kaimuki', count: 6, slug: 'kaimuki', image: '/images/neighborhood-kaimuki.jpg' },
  { name: 'Windward Coast', count: 3, slug: 'windward-coast', image: '/images/neighborhood-windward.jpg' },
];

export default function Neighborhoods() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current?.querySelectorAll('.neighborhood-card');
      if (cards) {
        gsap.from(cards, {
          opacity: 0,
          y: 30,
          stagger: 0.1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="neighborhoods" className="py-[120px]">
      <div className="text-center mb-12 px-6">
        <p className="text-[13px] uppercase tracking-[0.08em] text-[#d4a574] font-sans mb-4">
          Neighborhoods
        </p>
        <h2 className="text-4xl md:text-5xl text-[#1a1a1a] font-serif leading-[1.1] tracking-tight">
          Explore by Area
        </h2>
      </div>

      <div
        ref={cardsRef}
        className="flex gap-5 overflow-x-auto pb-4 px-6 md:px-16 scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {neighborhoods.map((n) => (
          <Link
            to={`/neighborhoods/${n.slug}`}
            key={n.name}
            className="neighborhood-card group relative flex-shrink-0 w-[280px] md:w-[320px] h-[380px] md:h-[400px] rounded-2xl overflow-hidden cursor-pointer"
          >
            <img
              src={n.image}
              alt={n.name}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div
              className="absolute inset-0 transition-opacity duration-500"
              style={{
                background: 'linear-gradient(to top, rgba(44,36,32,0.75) 0%, transparent 50%)',
              }}
            />
            <div className="absolute bottom-0 left-0 p-6">
              <p className="text-xs uppercase tracking-[0.06em] text-[#f5ede4] font-sans mb-2 opacity-80">
                {n.count} spots
              </p>
              <h3 className="text-2xl md:text-[28px] text-white font-serif leading-tight">
                {n.name}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
