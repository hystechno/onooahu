export default function MonetizeBanner({ context }: { context?: string }) {
  const messages: Record<string, { headline: string; cta: string; link: string }> = {
    restaurant: {
      headline: "Planning a trip to Oahu? Book your table now.",
      cta: "Reserve on OpenTable",
      link: "https://www.opentable.com",
    },
    collection: {
      headline: "Save these spots to your trip itinerary.",
      cta: "Explore More",
      link: "/discover",
    },
    blog: {
      headline: "Want more insider guides? Subscribe to our picks.",
      cta: "Subscribe Free",
      link: "/#newsletter",
    },
    neighborhood: {
      headline: "Visiting this area? See every restaurant nearby.",
      cta: "View Full Guide",
      link: "/discover",
    },
    default: {
      headline: "The best Oahu restaurants — curated weekly.",
      cta: "Explore the Guide",
      link: "/discover",
    },
  };

  const { headline, cta, link } = messages[context || 'default'];

  return (
    <div className="w-full bg-[#2c2420] py-4 px-6 md:px-12">
      <div className="max-w-[1280px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm md:text-base text-[#f5ede4] font-sans text-center sm:text-left">
          {headline}
        </p>
        <a
          href={link}
          className="flex-shrink-0 bg-[#d4a574] text-[#1a1a1a] text-sm font-sans font-medium uppercase tracking-wide px-6 py-2.5 rounded-full hover:bg-[#faf8f5] transition-colors duration-300"
        >
          {cta}
        </a>
      </div>
    </div>
  );
}
