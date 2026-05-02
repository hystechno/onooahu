import { useEffect, useRef, useState, useCallback } from 'react';
import { Link } from 'react-router';

interface Card {
  id: number;
  restaurantId: string;
  name: string;
  neighborhood: string;
  description: string;
  image: string;
}

const cards: Card[] = [
  { id: 1, restaurantId: 'giovannis-shrimp-truck', name: "Giovanni's Shrimp Truck", neighborhood: "North Shore", description: "Legendary garlic shrimp plates served from a rustic food truck on Oahu's iconic North Shore.", image: "/images/hero-card-1.jpg" },
  { id: 2, restaurantId: 'onos-seafood', name: "Ono Seafood", neighborhood: "Honolulu", description: "Fresh, daily-caught poke bowls that define the Hawaiian raw fish tradition.", image: "/images/hero-card-2.jpg" },
  { id: 3, restaurantId: 'dukes-waikiki', name: "Duke's Waikiki", neighborhood: "Waikiki", description: "Beachfront institution serving Hawaiian-inspired classics with live music and sunset views.", image: "/images/dukes-carousel.jpg" },
  { id: 4, restaurantId: 'monkeypod-waikiki', name: "Monkeypod Kitchen", neighborhood: "Waikiki", description: "Chef Peter Merriman's waterfront gem — Hawaii Regional Cuisine, legendary Mai Tais, and Diamond Head views.", image: "/images/monkeypod-waikiki.jpg" },
  { id: 5, restaurantId: 'rainbow-drive-in', name: "Rainbow Drive-In", neighborhood: "Kapahulu", description: "A local legend since 1961, famous for their classic plate lunch and loco moco.", image: "/images/hero-card-4.jpg" },
  { id: 6, restaurantId: 'skull-crown', name: "Skull & Crown", neighborhood: "Chinatown", description: "A hidden tiki bar crafting fiery, flavor-packed tropical cocktails in the heart of Chinatown.", image: "/images/hero-card-5.jpg" },
  { id: 7, restaurantId: 'leonards-bakery', name: "Leonard's Bakery", neighborhood: "Kapahulu", description: "Home of the original malasada — hot, sugar-dusted Portuguese donuts since 1952.", image: "/images/hero-card-6.jpg" },
  { id: 8, restaurantId: 'mw-restaurant', name: "MW Restaurant", neighborhood: "Kaka'ako", description: "James Beard Award-winning chef elevates local ingredients into refined Hawaiian cuisine.", image: "/images/hero-card-7.jpg" },
  { id: 9, restaurantId: 'helena-hawaiian-food', name: "Helena's Hawaiian Food", neighborhood: "Kalihi", description: "James Beard Award-winning traditional Hawaiian food. The pipikaula short ribs are legendary.", image: "/images/hero-card-8.jpg" },
  { id: 10, restaurantId: 'earls-waikiki', name: "Earls Kitchen + Bar", neighborhood: "Waikiki", description: "Canada's iconic open-air restaurant on Kalakaua — Modern American cuisine with daily happy hour and late-night cocktails.", image: "/images/earls-carousel.jpg" },
];



export default function Carousel3D() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const radius = 500;
  const count = cards.length;
  const angleStep = 360 / count;

  const prevIndex = (activeIndex - 1 + count) % count;
  const nextIndex = (activeIndex + 1) % count;

  const getCardStyle = useCallback((index: number) => {
    const cardAngle = index * angleStep;
    const relativeAngle = cardAngle - activeIndex * angleStep;

    if (index === activeIndex) {
      return {
        transform: `rotateY(0deg) translateZ(${radius}px) scale(1.0)`,
        filter: 'brightness(100%)',
        opacity: 1,
        zIndex: 10,
      };
    }
    return {
      transform: `rotateY(${relativeAngle}deg) translateZ(0px) scale(0.8)`,
      filter: 'brightness(50%)',
      opacity: 0.5,
      zIndex: 0,
    };
  }, [activeIndex, angleStep, radius]);

  const rotateTo = useCallback((nextIndex: number) => {
    if (nextIndex === activeIndex) return;
    setActiveIndex(nextIndex);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % count);
    }, 10000);
  }, [activeIndex, count]);

  const goNext = useCallback(() => {
    rotateTo((activeIndex + 1) % count);
  }, [activeIndex, count, rotateTo]);

  const goPrev = useCallback(() => {
    rotateTo((activeIndex - 1 + count) % count);
  }, [activeIndex, count, rotateTo]);

  useEffect(() => {
    const timer = setTimeout(() => setIsReady(true), 100);
    timerRef.current = setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % count);
    }, 10000);
    return () => {
      clearTimeout(timer);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [count]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'ArrowRight') goNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goNext, goPrev]);

  const activeCard = cards[activeIndex];

  return (
    <div
      className="relative w-full flex flex-col items-center overflow-hidden"
      style={{
        paddingTop: '120px',
        paddingBottom: '60px',
        background: 'radial-gradient(ellipse at center, #f5ede4 0%, #faf8f5 70%)',
      }}
    >
      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")',
        }}
      />

      {/* Main carousel row with sliver previews */}
      <div className="relative flex items-center justify-center w-full max-w-5xl px-4">

        {/* Left sliver preview */}
        <div
          className="hidden md:block absolute left-4 top-1/2 -translate-y-1/2 z-0 cursor-pointer overflow-hidden rounded-lg"
          style={{
            width: '100px',
            height: '320px',
            transform: 'translateY(-50%) perspective(2000px) rotateY(20deg)',
            transformOrigin: 'right center',
            opacity: 0.35,
          }}
          onClick={goPrev}
        >
          <img
            src={cards[prevIndex].image}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        {/* Center: Carousel + Buttons */}
        <div className="flex items-center justify-center gap-6 md:gap-16 z-10">

          {/* Previous Button */}
          <button
            onClick={goPrev}
            className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-[#d4a574] bg-[#faf8f5]/80 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:bg-[#d4a574] group z-20 shadow-lg"
            aria-label="Previous restaurant"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6 text-[#1a1a1a] group-hover:text-[#faf8f5] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>

          {/* 3D Scene */}
          <div
            className="relative flex-shrink-0 w-[260px] h-[320px] md:w-[300px] md:h-[380px]"
            style={{ perspective: '2000px' }}
          >
            <div
              ref={carouselRef}
              className="relative w-full h-full"
              style={{
                transformStyle: 'preserve-3d',
                transition: 'transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              }}
            >
              {cards.map((card, i) => {
                const style = getCardStyle(i);
                return (
                  <div
                    key={card.id}
                    className="absolute cursor-pointer w-[260px] h-[320px] md:w-[300px] md:h-[380px]"
                    onClick={() => rotateTo(i)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        rotateTo(i);
                      }
                    }}
                    style={{
                      transformStyle: 'preserve-3d',
                      transition: isReady
                        ? 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                        : 'none',
                      ...style,
                      ...(isReady
                        ? {}
                        : {
                            transform: `rotateY(${i * angleStep}deg) translateZ(${radius}px)`,
                            opacity: 0,
                            filter: 'brightness(0%)',
                          }),
                    }}
                  >
                    <div className="relative w-full h-full rounded-xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.15)]">
                      <img
                        src={card.image}
                        alt={card.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div
                        className="absolute inset-0"
                        style={{
                          background:
                            'linear-gradient(to top, rgba(44,36,32,0.85) 0%, rgba(44,36,32,0.4) 35%, transparent 65%)',
                        }}
                      />
                      <div className="absolute bottom-0 left-0 p-4 md:p-5 w-full">
                        <p className="text-[10px] md:text-[11px] uppercase tracking-[0.06em] text-[#f5ede4] font-sans mb-0.5 md:mb-1">
                          {card.neighborhood}
                        </p>
                        <h3 className="text-base md:text-[22px] text-white font-serif leading-[1.15]">
                          {card.name}
                        </h3>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={goNext}
            className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-[#d4a574] bg-[#faf8f5]/80 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:bg-[#d4a574] group z-20 shadow-lg"
            aria-label="Next restaurant"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6 text-[#1a1a1a] group-hover:text-[#faf8f5] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>

        {/* Right sliver preview */}
        <div
          className="hidden md:block absolute right-4 top-1/2 -translate-y-1/2 z-0 cursor-pointer overflow-hidden rounded-lg"
          style={{
            width: '100px',
            height: '320px',
            transform: 'translateY(-50%) perspective(2000px) rotateY(-20deg)',
            transformOrigin: 'left center',
            opacity: 0.35,
          }}
          onClick={goNext}
        >
          <img
            src={cards[nextIndex].image}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

      </div>

      {/* Caption */}
      {isReady && (
        <div
          className="relative z-20 text-center max-w-xl px-6 py-4 md:py-6"
          style={{ marginTop: '48px' }}
          key={activeIndex}
        >
          <div className="animate-fadeInUp">
            <p className="text-xs uppercase tracking-[0.08em] text-[#d4a574] font-sans mb-2">
              {activeCard.neighborhood}
            </p>
            <h2 className="text-2xl md:text-4xl text-[#1a1a1a] font-serif mb-3 leading-tight">
              {activeCard.name}
            </h2>
            <p className="text-sm md:text-base text-[#666666] font-sans mb-4 leading-relaxed max-w-md mx-auto">
              {activeCard.description}
            </p>
            <Link
              to={`/restaurants/${activeCard.restaurantId}`}
              className="inline-block text-sm md:text-base font-serif italic text-[#1a1a1a] underline underline-offset-4 hover:text-[#d4a574] transition-colors"
            >
              View Details
            </Link>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
