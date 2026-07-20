import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import GoogleTranslate from './GoogleTranslate';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleNav = (id: string) => {
    setMobileOpen(false);
    if (isHome) {
      scrollToSection(id);
    } else {
      navigate('/');
      setTimeout(() => scrollToSection(id), 300);
    }
  };

  const navLinks = [
    { label: 'Discover', to: '/discover', type: 'link' as const },
    { label: 'Neighborhoods', id: 'neighborhoods', type: 'scroll' as const },
    { label: 'Collections', id: 'collections', type: 'scroll' as const },
    { label: 'Stories', to: '/blog', type: 'link' as const },
    { label: 'About', to: '/about', type: 'link' as const },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 h-16 flex items-center justify-between px-4 md:px-8 z-[1000] transition-all duration-300 ${
          scrolled || mobileOpen ? 'bg-[#faf8f5]/95 backdrop-blur-xl shadow-sm' : 'bg-transparent'
        }`}
      >
        {/* Left: Logo */}
        <Link to="/" className="font-serif text-2xl md:text-3xl text-[#1a1a1a] tracking-tight font-bold">
          Ono Oahu
        </Link>

        {/* Center: Nav Links — Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
            link.type === 'link' ? (
              <Link
                key={link.label}
                to={link.to!}
                className="text-[13px] uppercase tracking-[0.08em] text-[#1a1a1a] hover:text-[#d4a574] transition-colors duration-300 font-sans font-medium"
              >
                {link.label}
              </Link>
            ) : (
              <button
                key={link.label}
                onClick={() => handleNav(link.id!)}
                className="text-[13px] uppercase tracking-[0.08em] text-[#1a1a1a] hover:text-[#d4a574] transition-colors duration-300 font-sans font-medium"
              >
                {link.label}
              </button>
            )
          )}
        </div>

        {/* Right: Submit + Language — Desktop */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="mailto:hello@onooahu.com?subject=Restaurant%20Recommendation%20-%20Ono%20Oahu&body=Hi%20Ono%20Oahu%20team%2C%0A%0AI%20have%20a%20restaurant%20recommendation%20for%20your%20guide%3A%0A%0A**Restaurant%20Name%3A**%20%0A**Neighborhood%3A**%20%0A**Why%20it's%20great%3A**%20%0A%0AThanks!"
            className="bg-[#1a1a1a] text-[#faf8f5] text-[13px] font-medium uppercase tracking-wide px-6 py-2.5 rounded-full hover:bg-[#d4a574] hover:text-[#1a1a1a] transition-all duration-300"
          >
            Submit a Spot
          </a>
          <GoogleTranslate />
        </div>

        {/* Mobile: Hamburger Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 z-[1001]"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-[#1a1a1a] transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-[#1a1a1a] transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-[#1a1a1a] transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[999] bg-[#faf8f5] transition-all duration-500 md:hidden ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 pt-16">
          {navLinks.map((link, i) =>
            link.type === 'link' ? (
              <Link
                key={link.label}
                to={link.to!}
                onClick={() => setMobileOpen(false)}
                className="text-2xl uppercase tracking-[0.08em] text-[#1a1a1a] hover:text-[#d4a574] transition-colors duration-300 font-sans font-medium"
                style={{ transitionDelay: mobileOpen ? `${i * 50}ms` : '0ms' }}
              >
                {link.label}
              </Link>
            ) : (
              <button
                key={link.label}
                onClick={() => handleNav(link.id!)}
                className="text-2xl uppercase tracking-[0.08em] text-[#1a1a1a] hover:text-[#d4a574] transition-colors duration-300 font-sans font-medium"
                style={{ transitionDelay: mobileOpen ? `${i * 50}ms` : '0ms' }}
              >
                {link.label}
              </button>
            )
          )}

          <div className="mt-4 flex flex-col items-center gap-4">
            <a
              href="mailto:hello@onooahu.com?subject=Restaurant%20Recommendation"
              onClick={() => setMobileOpen(false)}
              className="bg-[#1a1a1a] text-[#faf8f5] text-sm font-medium uppercase tracking-wide px-8 py-3 rounded-full hover:bg-[#d4a574] hover:text-[#1a1a1a] transition-all duration-300"
            >
              Submit a Spot
            </a>
            <div className="mt-2">
              <GoogleTranslate />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
