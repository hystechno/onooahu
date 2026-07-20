import PageLayout from '../components/PageLayout';
import SEOHead from '../components/SEOHead';
import MonetizeBanner from '../components/MonetizeBanner';
import { getBreadcrumbSchema } from '../utils/schema';

export default function AboutPage() {
  const schema = getBreadcrumbSchema([
    { name: 'Home', url: 'https://www.onooahu.com/' },
    { name: 'About', url: 'https://www.onooahu.com/#/about' },
  ]);

  return (
    <>
      <SEOHead
        title="About Ono Oahu"
        description="Hawaii's most trusted restaurant guide. We visit every restaurant anonymously, pay our own way, and write honest reviews based on real experiences."
        schema={schema}
      />
      <PageLayout>
        {/* Hero */}
        <div className="relative h-[350px] md:h-[400px] overflow-hidden">
          <img loading="lazy" src="/images/hero-card-7.jpg" alt="Oahu food" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/90 via-[#1a1a1a]/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 max-w-[1280px] mx-auto">
            <p className="text-[11px] uppercase tracking-[0.08em] text-[#d4a574] font-sans mb-3">About Us</p>
            <h1 className="text-4xl md:text-5xl text-white font-serif leading-[1.1] tracking-tight">The Story Behind Ono Oahu</h1>
          </div>
        </div>

        <MonetizeBanner context="blog" />

        {/* Content */}
        <section className="py-16 px-6 md:px-12">
          <div className="max-w-[720px] mx-auto">
            <p className="text-xl text-[#1a1a1a] font-serif leading-relaxed mb-8 italic">
              Ono Oahu was created with one mission: to help both visitors and locals discover the island's most incredible food experiences. (Ono means delicious in Hawaiian.)
            </p>

            <div className="w-16 h-px bg-[#d4a574] mb-10" />

            <div className="prose-content space-y-6">
              <p className="text-base text-[#666666] font-sans leading-relaxed">
                We believe the best way to understand a place is through its food. Oahu's culinary landscape is one of the most diverse in the world — a melting pot of Hawaiian, Japanese, Chinese, Portuguese, Korean, and Filipino influences, all shaped by the island's unique climate, culture, and history.
              </p>

              <p className="text-base text-[#666666] font-sans leading-relaxed">
                Our team eats at every restaurant we feature. We visit anonymously, pay our own way, and write honest reviews based on real experiences. No sponsored content, no paid placements, no exceptions.
              </p>

              <h2 className="text-2xl font-serif text-[#1a1a1a] mt-10 mb-4">What Makes Us Different</h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                <div className="bg-white rounded-xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.06)]">
                  <h3 className="text-lg font-serif text-[#1a1a1a] mb-2">Independent & Unbiased</h3>
                  <p className="text-sm text-[#666666] font-sans">We pay for every meal we review. No freebies, no sponsored posts, no restaurant partnerships.</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.06)]">
                  <h3 className="text-lg font-serif text-[#1a1a1a] mb-2">Comprehensive Coverage</h3>
                  <p className="text-sm text-[#666666] font-sans">From North Shore shrimp trucks to Waikiki fine dining — we cover every corner of the island.</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.06)]">
                  <h3 className="text-lg font-serif text-[#1a1a1a] mb-2">Updated Regularly</h3>
                  <p className="text-sm text-[#666666] font-sans">We revisit spots annually and update our guides to reflect what's open, what's closed, and what's new.</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.06)]">
                  <h3 className="text-lg font-serif text-[#1a1a1a] mb-2">For Locals & Visitors</h3>
                  <p className="text-sm text-[#666666] font-sans">Whether you're planning your first trip or you've lived here for decades, there's always something new to discover.</p>
                </div>
              </div>

              <h2 className="text-2xl font-serif text-[#1a1a1a] mt-10 mb-4">How We Choose Spots</h2>
              <p className="text-base text-[#666666] font-sans leading-relaxed">
                Every restaurant in our guide goes through the same evaluation: we eat there at least twice, try multiple dishes, visit at different times of day, and assess everything from food quality to service to atmosphere. We talk to locals, read historical context, and consider what makes a place genuinely special rather than just popular.
              </p>

              <h2 className="text-2xl font-serif text-[#1a1a1a] mt-10 mb-4">Submit a Spot</h2>
              <p className="text-base text-[#666666] font-sans leading-relaxed">
                Know a hidden gem we missed? We rely on our community to help us find the best spots. Send your recommendations to <a href="mailto:hello@onooahu.com" className="text-[#d4a574] hover:underline">hello@onooahu.com</a> — we visit every submission personally.
              </p>

              <h2 className="text-2xl font-serif text-[#1a1a1a] mt-10 mb-4">Get In Touch</h2>
              <p className="text-base text-[#666666] font-sans leading-relaxed">
                For partnerships, press inquiries, or just to say aloha — drop us a line at <a href="mailto:hello@onooahu.com" className="text-[#d4a574] hover:underline">hello@onooahu.com</a>.
              </p>
            </div>
          </div>
        </section>
      </PageLayout>
    </>
  );
}
