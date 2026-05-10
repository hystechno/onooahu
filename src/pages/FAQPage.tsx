import { Link } from 'react-router';
import PageLayout from '../components/PageLayout';
import SEOHead from '../components/SEOHead';
import MonetizeBanner from '../components/MonetizeBanner';
import { getFAQSchema, getBreadcrumbSchema } from '../utils/schema';

const faqs = [
  {
    q: "What is the best restaurant on Oahu?",
    a: "There's no single 'best' — Oahu's food scene is incredibly diverse. For traditional Hawaiian food, Helena's Hawaiian Food in Kalihi is a James Beard Award winner. For beachfront dining, Duke's Waikiki is iconic. For late-night happy hour, Earls Kitchen + Bar in Waikiki runs until 1 AM on weekends. For North Shore garlic shrimp, Giovanni's Shrimp Truck is legendary.",
  },
  {
    q: "Where is the best poke on Oahu?",
    a: "The best poke bowls on Oahu are found at Ono Seafood in Kapahulu (shoyu ahi), Tamashiro Market in Kalihi (widest variety), and Fresh Catch (chef-driven creations). All three use daily-caught fish. Go before 2 PM — they sell out.",
  },
  {
    q: "What is a plate lunch?",
    a: "A plate lunch is Hawaii's signature comfort food: two scoops of white rice, one scoop of macaroni salad, and your choice of protein (kalua pork, chicken katsu, BBQ beef, etc.). Rainbow Drive-In in Kapahulu has been serving them since 1961 and is the local standard.",
  },
  {
    q: "Where should I eat in Waikiki?",
    a: "Waikiki has the densest restaurant concentration on Oahu. For beachfront: Duke's Waikiki or House Without a Key. For late-night: Earls Kitchen + Bar (open until 1 AM weekends). For happy hour: Mai Tai Bar at The Royal Hawaiian. For casual: Rainbow Drive-In for plate lunch or Ono Seafood for poke.",
  },
  {
    q: "What are the best North Shore food trucks?",
    a: "The North Shore is famous for food trucks. Giovanni's Shrimp Truck (garlic shrimp), Matsumoto Shave Ice (since 1951), Ted's Bakery (chocolate haupia pie), and Romy's Kahuku Prawns (farm-fresh prawns) are the must-visit spots. Bring cash and arrive before noon.",
  },
  {
    q: "What time do restaurants close in Waikiki?",
    a: "Most Waikiki restaurants close by 10 PM. Hotel bars typically last-call at 11 PM. Earls Kitchen + Bar is a notable exception — it stays open until midnight Sunday-Thursday and 1 AM Friday-Saturday, with happy hour from 10 PM to close.",
  },
  {
    q: "How much should I budget for food in Oahu?",
    a: "Plate lunches and food truck meals cost $12-18. Mid-range restaurants run $25-40 per person. Fine dining (MW Restaurant, House Without a Key) is $60-100+. Poke bowls are $15-22. Shave ice is $6-8. Budget $60-80/day per person for a mix of casual and sit-down meals.",
  },
  {
    q: "What is 'ono' in Hawaiian?",
    a: "'Ono' (pronounced oh-no) means 'delicious' in Hawaiian. It's used constantly in local conversation — 'dis food stay ono' means 'this food is delicious.' Ono Oahu takes its name from this word, meaning 'Delicious Oahu.'",
  },
  {
    q: "Are reservations needed at Oahu restaurants?",
    a: "Reservations are recommended for fine dining (MW Restaurant, House Without a Key) and popular new spots (Westman Cafe in Kakaako). Food trucks, plate lunch spots, and casual eateries are walk-in only. Beachfront restaurants like Duke's accept walk-ins but recommend reservations for dinner.",
  },
  {
    q: "What is the best neighborhood for food on Oahu?",
    a: "Each neighborhood has its specialty. Waikiki has the most variety and beachfront dining. Chinatown has dim sum and hidden cocktail bars. Kaka'ako has modern cafes and craft beer. The North Shore has iconic food trucks. Kapahulu has the best local spots (Rainbow Drive-In, Leonard's Bakery, Ono Seafood).",
  },
];

export default function FAQPage() {
  const schema = getFAQSchema(faqs);
  const breadcrumb = getBreadcrumbSchema([
    { name: 'Home', url: 'https://www.onooahu.com/' },
    { name: 'FAQ', url: 'https://www.onooahu.com/#/faq' },
  ]);

  const combinedSchema = [schema, breadcrumb];

  return (
    <>
      <SEOHead
        title="FAQ - Best Restaurants on Oahu"
        description="Answers to the most common questions about eating on Oahu — best poke, plate lunches, food trucks, neighborhoods, and budget tips."
        schema={combinedSchema}
      />
      <PageLayout>
        {/* Hero */}
        <div className="relative h-[300px] md:h-[350px] overflow-hidden">
          <img src="/images/hero-card-2.jpg" alt="Oahu food guide FAQ" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/90 via-[#1a1a1a]/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 max-w-[1280px] mx-auto">
            <p className="text-[11px] uppercase tracking-[0.08em] text-[#d4a574] font-sans mb-3">FAQ</p>
            <h1 className="text-3xl md:text-4xl text-white font-serif leading-[1.1] tracking-tight">
              Common Questions About Oahu Dining
            </h1>
          </div>
        </div>

        <MonetizeBanner context="default" />

        {/* FAQ Accordion */}
        <section className="py-16 px-6 md:px-12">
          <div className="max-w-[720px] mx-auto">
            <div className="w-16 h-px bg-[#d4a574] mb-10" />

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <details
                  key={idx}
                  className="group bg-white rounded-xl shadow-[0_2px_12px_rgba(0,0,0,0.06)] overflow-hidden open:shadow-[0_8px_24px_rgba(0,0,0,0.1)] transition-shadow"
                >
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <h3 className="text-base md:text-lg font-serif text-[#1a1a1a] pr-4">{faq.q}</h3>
                    <svg
                      className="w-5 h-5 text-[#d4a574] flex-shrink-0 transition-transform group-open:rotate-180"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </summary>
                  <div className="px-5 pb-5">
                    <p className="text-base text-[#666666] font-sans leading-relaxed">{faq.a}</p>
                  </div>
                </details>
              ))}
            </div>

            {/* Related links */}
            <div className="mt-12 pt-8 border-t border-[#f0ebe4]">
              <h2 className="text-xl font-serif text-[#1a1a1a] mb-4">Still have questions?</h2>
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/discover"
                  className="text-sm font-sans text-[#1a1a1a] border border-[#1a1a1a] rounded-full px-5 py-2 hover:bg-[#1a1a1a] hover:text-[#faf8f5] transition-colors"
                >
                  Browse All Restaurants
                </Link>
                <Link
                  to="/neighborhoods/waikiki"
                  className="text-sm font-sans text-[#1a1a1a] border border-[#1a1a1a] rounded-full px-5 py-2 hover:bg-[#1a1a1a] hover:text-[#faf8f5] transition-colors"
                >
                  Explore Waikiki
                </Link>
                <a
                  href="mailto:hello@onooahu.com"
                  className="text-sm font-sans text-[#1a1a1a] border border-[#d4a574] rounded-full px-5 py-2 hover:bg-[#d4a574] transition-colors"
                >
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </PageLayout>
    </>
  );
}
