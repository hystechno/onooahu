import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router';
import GoogleTranslate from './GoogleTranslate';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleNav = (id: string) => {
    if (isHome) {
      scrollToSection(id);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 h-16 flex items-center justify-between px-8 z-[1000] transition-all duration-300 ${
        scrolled ? 'bg-[#faf8f5]/95 backdrop-blur-xl shadow-sm' : 'bg-transparent'
      }`}
    >
      {/* Left: Logo */}
      <Link to="/" className="font-serif text-2xl md:text-3xl text-[#1a1a1a] tracking-tight font-bold">
        Ono Oahu
      </Link>

      {/* Center: Nav Links */}
      <div className="hidden md:flex items-center gap-8">
        <Link
          to="/discover"
          className="text-[13px] uppercase tracking-[0.08em] text-[#1a1a1a] hover:text-[#d4a574] transition-colors duration-300 font-sans font-medium"
        >
          Discover
        </Link>
        <button
          onClick={() => handleNav('neighborhoods')}
          className="text-[13px] uppercase tracking-[0.08em] text-[#1a1a1a] hover:text-[#d4a574] transition-colors duration-300 font-sans font-medium"
        >
          Neighborhoods
        </button>
        <button
          onClick={() => handleNav('collections')}
          className="text-[13px] uppercase tracking-[0.08em] text-[#1a1a1a] hover:text-[#d4a574] transition-colors duration-300 font-sans font-medium"
        >
          Collections
        </button>
        <Link
          to="/blog"
          className="text-[13px] uppercase tracking-[0.08em] text-[#1a1a1a] hover:text-[#d4a574] transition-colors duration-300 font-sans font-medium"
        >
          Stories
        </Link>
        <Link
          to="/about"
          className="text-[13px] uppercase tracking-[0.08em] text-[#1a1a1a] hover:text-[#d4a574] transition-colors duration-300 font-sans font-medium"
        >
          About
        </Link>
      </div>

      {/* Right: Submit + Language */}
      <div className="hidden md:flex items-center gap-4">
        <a
          href="mailto:hello@onooahu.com?subject=Restaurant%20Recommendation%20-%20Ono%20Oahu&body=Hi%20Ono%20Oahu%20team%2C%0A%0AI%20have%20a%20restaurant%20recommendation%20for%20your%20guide%3A%0A%0A**Restaurant%20Name%3A**%20%0A**Neighborhood%3A**%20%0A**Why%20it's%20great%3A**%20%0A%0AThanks!"
          className="bg-[#1a1a1a] text-[#faf8f5] text-[13px] font-medium uppercase tracking-wide px-6 py-2.5 rounded-full hover:bg-[#d4a574] hover:text-[#1a1a1a] transition-all duration-300"
        >
          Submit a Spot
        </a>
        <GoogleTranslate />
      </div>
    </nav>
  );
}
