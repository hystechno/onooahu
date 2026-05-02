import HotelSearchWidget from '../components/HotelSearchWidget';
import TravelCTA from '../components/TravelCTA';

export default function PlanYourTrip() {
  return (
    <section className="py-20 px-6 md:px-12" id="plan-your-trip">
      <div className="max-w-[1280px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-[11px] uppercase tracking-[0.08em] text-[#d4a574] font-sans mb-3">
            Complete Your Trip
          </p>
          <h2 className="text-3xl md:text-4xl font-serif text-[#1a1a1a] leading-tight mb-3">
            Plan Your Oahu Stay
          </h2>
          <p className="text-base text-[#666666] font-sans max-w-xl mx-auto">
            Find the perfect hotel and book unforgettable experiences — at no extra cost.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Hotel Search Widget */}
          <div className="lg:col-span-2">
            <HotelSearchWidget />
          </div>

          {/* Activities & Context */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xl font-serif text-[#1a1a1a] mb-2">
              Popular Oahu Experiences
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <TravelCTA
                variant="blog-activities"
                className="sm:col-span-2"
              />
              <TravelCTA
                variant="neighborhood-stay"
                neighborhoodSlug="waikiki"
                neighborhoodName="Waikiki"
              />
              <TravelCTA
                variant="neighborhood-activities"
                neighborhoodSlug="north-shore"
                neighborhoodName="the North Shore"
              />
            </div>

            {/* Quick Stats */}
            <div className="bg-[#1a1a1a] rounded-xl p-5 mt-4">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-2xl font-serif text-[#d4a574] mb-1">6M+</p>
                  <p className="text-[11px] text-[#b8a08a] font-sans uppercase tracking-wide">Annual Visitors</p>
                </div>
                <div>
                  <p className="text-2xl font-serif text-[#d4a574] mb-1">150+</p>
                  <p className="text-[11px] text-[#b8a08a] font-sans uppercase tracking-wide">Isle Hotels</p>
                </div>
                <div>
                  <p className="text-2xl font-serif text-[#d4a574] mb-1">227</p>
                  <p className="text-[11px] text-[#b8a08a] font-sans uppercase tracking-wide">Days of Sun</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
