import { Link } from 'react-router';

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] pt-16 pb-8 px-6 md:px-12">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          {/* Logo + Tagline */}
          <div>
            <Link to="/" className="font-serif text-xl text-[#faf8f5] mb-3 block">Ono Oahu</Link>
            <p className="text-sm text-[#666666] font-sans leading-relaxed">
              Hawaii's most trusted restaurant guide — ono means delicious.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[13px] uppercase tracking-[0.08em] text-[#faf8f5] font-sans font-medium mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Discover', to: '/discover' },
                { label: 'Collections', to: '/collections/beachfront' },
                { label: 'Neighborhoods', to: '/neighborhoods/waikiki' },
                { label: 'FAQ', to: '/faq' },
                { label: 'About', to: '/about' },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-sm text-[#b8a08a] font-sans hover:text-[#faf8f5] transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Guides */}
          <div>
            <h4 className="text-[13px] uppercase tracking-[0.08em] text-[#faf8f5] font-sans font-medium mb-4">
              Popular Guides
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Best Poke', to: '/blog/best-poke-bowls' },
                { label: 'Plate Lunch Spots', to: '/collections/plate-lunch' },
                { label: 'Beachfront Dining', to: '/collections/beachfront' },
                { label: 'Happy Hours', to: '/collections/happy-hours' },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-sm text-[#b8a08a] font-sans hover:text-[#faf8f5] transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-[13px] uppercase tracking-[0.08em] text-[#faf8f5] font-sans font-medium mb-4">
              Connect
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="https://instagram.com/onooahu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#b8a08a] font-sans hover:text-[#faf8f5] transition-colors duration-300"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://tiktok.com/@onooahu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#b8a08a] font-sans hover:text-[#faf8f5] transition-colors duration-300"
                >
                  TikTok
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/onooahu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#b8a08a] font-sans hover:text-[#faf8f5] transition-colors duration-300"
                >
                  X
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@onooahu.com"
                  className="text-sm text-[#b8a08a] font-sans hover:text-[#faf8f5] transition-colors duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#333333] pt-8 text-center">
          <p className="text-xs text-[#666666] font-sans mb-2">
            &copy; 2026 Ono Oahu. All rights reserved.
          </p>
          <p className="text-[11px] text-[#666666]/60 font-sans">
            Ono Oahu participates in affiliate programs. We may earn a commission when you book through our links — at no extra cost to you.
          </p>
        </div>
      </div>
    </footer>
  );
}
