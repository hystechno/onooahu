import { Routes, Route, useLocation } from 'react-router';
import { Suspense, lazy, useEffect } from 'react';
import ErrorBoundary from './components/ErrorBoundary';
import Home from './pages/Home';

// Route-level code splitting: only the landing page is eager.
const CollectionPage = lazy(() => import('./pages/CollectionPage'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const BlogListingPage = lazy(() => import('./pages/BlogListingPage'));
const RestaurantDetail = lazy(() => import('./pages/RestaurantDetail'));
const NeighborhoodPage = lazy(() => import('./pages/NeighborhoodPage'));
const DiscoverPage = lazy(() => import('./pages/DiscoverPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const FAQPage = lazy(() => import('./pages/FAQPage'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsOfService = lazy(() => import('./pages/TermsOfService'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function PageLoader() {
  return (
    <div className="min-h-screen bg-[#f5ede4] flex items-center justify-center">
      <p className="font-serif italic text-[#b8a08a] text-lg">Loading…</p>
    </div>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <ScrollToTop />
      <Suspense fallback={<PageLoader />}>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/discover" element={<DiscoverPage />} />
        <Route path="/collections/:slug" element={<CollectionPage />} />
        <Route path="/restaurants/:id" element={<RestaurantDetail />} />
        <Route path="/neighborhoods/:slug" element={<NeighborhoodPage />} />
        <Route path="/blog" element={<BlogListingPage />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
}
