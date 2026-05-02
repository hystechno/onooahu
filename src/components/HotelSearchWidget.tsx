import { useState } from 'react';
import { getBookingWidgetSearchUrl } from '../utils/travelpayouts';

export default function HotelSearchWidget() {
  const [destination, setDestination] = useState('Waikiki, Oahu');
  const [checkin, setCheckin] = useState('');
  const [checkout, setCheckout] = useState('');
  const [adults, setAdults] = useState(2);

  // Set default dates (today + 7 days)
  const today = new Date();
  const nextWeek = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
  const weekAfter = new Date(today.getTime() + 14 * 24 * 60 * 60 * 1000);

  const formatDate = (d: Date) => d.toISOString().split('T')[0];

  const [defaultCheckin] = useState(formatDate(nextWeek));
  const [defaultCheckout] = useState(formatDate(weekAfter));

  const handleSearch = () => {
    const url = getBookingWidgetSearchUrl(
      destination,
      checkin || defaultCheckin,
      checkout || defaultCheckout,
      adults
    );
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const destinations = [
    'Waikiki, Oahu',
    'North Shore, Oahu',
    'Kakaako, Honolulu',
    'Kaimuki, Honolulu',
    'Kailua, Oahu',
  ];

  return (
    <div className="bg-white rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.06)] p-6 md:p-8">
      {/* Header */}
      <div className="mb-6">
        <p className="text-[11px] uppercase tracking-[0.08em] text-[#d4a574] font-sans mb-2">
          Find Where to Stay
        </p>
        <h3 className="text-2xl font-serif text-[#1a1a1a] leading-tight">
          Hotels on Oahu
        </h3>
        <p className="text-sm text-[#666666] font-sans mt-1">
          Compare prices across Waikiki, North Shore & more.
        </p>
      </div>

      {/* Form */}
      <div className="space-y-4">
        {/* Destination */}
        <div>
          <label className="text-[11px] uppercase tracking-[0.06em] text-[#b8a08a] font-sans mb-1.5 block">
            Destination
          </label>
          <select
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="w-full text-sm font-sans text-[#1a1a1a] bg-[#faf8f5] border border-[#e0d5c8] rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#d4a574]/30 focus:border-[#d4a574] transition-all appearance-none cursor-pointer"
          >
            {destinations.map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>
        </div>

        {/* Date Row */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="text-[11px] uppercase tracking-[0.06em] text-[#b8a08a] font-sans mb-1.5 block">
              Check-in
            </label>
            <input
              type="date"
              value={checkin || defaultCheckin}
              onChange={(e) => setCheckin(e.target.value)}
              min={formatDate(today)}
              className="w-full text-sm font-sans text-[#1a1a1a] bg-[#faf8f5] border border-[#e0d5c8] rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#d4a574]/30 focus:border-[#d4a574] transition-all"
            />
          </div>
          <div>
            <label className="text-[11px] uppercase tracking-[0.06em] text-[#b8a08a] font-sans mb-1.5 block">
              Check-out
            </label>
            <input
              type="date"
              value={checkout || defaultCheckout}
              onChange={(e) => setCheckout(e.target.value)}
              min={(checkin || defaultCheckin)}
              className="w-full text-sm font-sans text-[#1a1a1a] bg-[#faf8f5] border border-[#e0d5c8] rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#d4a574]/30 focus:border-[#d4a574] transition-all"
            />
          </div>
        </div>

        {/* Guests */}
        <div>
          <label className="text-[11px] uppercase tracking-[0.06em] text-[#b8a08a] font-sans mb-1.5 block">
            Guests
          </label>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setAdults(Math.max(1, adults - 1))}
              className="w-10 h-10 rounded-full bg-[#faf8f5] border border-[#e0d5c8] text-[#1a1a1a] font-sans font-medium hover:bg-[#f5ede4] transition-colors flex items-center justify-center"
              type="button"
            >
              -
            </button>
            <span className="text-sm font-sans text-[#1a1a1a] w-16 text-center">
              {adults} {adults === 1 ? 'Adult' : 'Adults'}
            </span>
            <button
              onClick={() => setAdults(Math.min(8, adults + 1))}
              className="w-10 h-10 rounded-full bg-[#faf8f5] border border-[#e0d5c8] text-[#1a1a1a] font-sans font-medium hover:bg-[#f5ede4] transition-colors flex items-center justify-center"
              type="button"
            >
              +
            </button>
          </div>
        </div>

        {/* Search Button */}
        <button
          onClick={handleSearch}
          className="w-full bg-[#d4a574] text-[#1a1a1a] text-sm font-sans font-semibold uppercase tracking-wide py-3.5 rounded-full hover:bg-[#c49360] transition-colors duration-300 mt-2"
        >
          Search Hotels
        </button>

        <p className="text-[10px] text-[#b8a08a] font-sans text-center mt-2">
          Powered by Booking.com — We earn a commission at no extra cost to you.
        </p>
      </div>
    </div>
  );
}
