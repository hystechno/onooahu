import { Link } from 'react-router';
import SEOHead from '../components/SEOHead';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-[#faf8f5] flex flex-col">
      <SEOHead
        title="Page Not Found"
        description="The page you're looking for doesn't exist. Explore Oahu's best restaurants on Ono Oahu."
      />
      <Navigation />
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-24">
        <p className="text-[13px] uppercase tracking-[0.08em] text-[#b8a08a] font-sans font-medium mb-4">
          404
        </p>
        <h1 className="text-4xl md:text-6xl font-serif text-[#1a1a1a] mb-6 text-center">
          Page Not Found
        </h1>
        <p className="text-lg text-[#666666] font-sans mb-10 max-w-md text-center leading-relaxed">
          Looks like this page went off to grab some poke. Check out our restaurant guide instead.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            to="/"
            className="bg-[#1a1a1a] text-[#faf8f5] text-sm font-sans font-medium uppercase tracking-wide px-8 py-3 rounded-full hover:bg-[#d4a574] hover:text-[#1a1a1a] transition-all duration-300 text-center"
          >
            Back to Home
          </Link>
          <Link
            to="/discover"
            className="border border-[#1a1a1a] text-[#1a1a1a] text-sm font-sans font-medium uppercase tracking-wide px-8 py-3 rounded-full hover:bg-[#1a1a1a] hover:text-[#faf8f5] transition-all duration-300 text-center"
          >
            Explore Restaurants
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
