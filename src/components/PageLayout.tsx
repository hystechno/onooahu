import { Link } from 'react-router';
import Footer from './Footer';
import GoogleTranslate from './GoogleTranslate';

export default function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#faf8f5]">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 h-16 flex items-center justify-between px-8 z-[1000] bg-[#faf8f5]/95 backdrop-blur-xl shadow-sm">
        {/* Left: Logo */}
        <Link to="/" className="font-serif text-2xl md:text-3xl text-[#1a1a1a] tracking-tight font-bold">
          Ono Oahu
        </Link>

        {/* Center: Links */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { label: 'Discover', to: '/discover' },
            { label: 'Neighborhoods', to: '/neighborhoods/waikiki' },
            { label: 'Collections', to: '/collections/beachfront' },
            { label: 'Stories', to: '/blog/best-poke-bowls' },
          ].map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className="text-[13px] uppercase tracking-[0.08em] text-[#1a1a1a] hover:text-[#d4a574] transition-colors duration-300 font-sans font-medium"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right: Home + Language */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            to="/"
            className="bg-[#1a1a1a] text-[#faf8f5] text-[13px] font-medium uppercase tracking-wide px-6 py-2.5 rounded-full hover:bg-[#d4a574] hover:text-[#1a1a1a] transition-all duration-300"
          >
            Home
          </Link>
          <GoogleTranslate />
        </div>
      </nav>

      {/* Content */}
      <main className="pt-16">{children}</main>
      <Footer />
    </div>
  );
}
