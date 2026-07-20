import { Routes, Route, useLocation } from 'react-router';
import { useEffect } from 'react';
import ErrorBoundary from './components/ErrorBoundary';
import Home from './pages/Home';
import CollectionPage from './pages/CollectionPage';
import BlogPost from './pages/BlogPost';
import BlogListingPage from './pages/BlogListingPage';
import RestaurantDetail from './pages/RestaurantDetail';
import NeighborhoodPage from './pages/NeighborhoodPage';
import DiscoverPage from './pages/DiscoverPage';
import AboutPage from './pages/AboutPage';
import FAQPage from './pages/FAQPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import NotFoundPage from './pages/NotFoundPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <ErrorBoundary>
      <ScrollToTop />
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
    </ErrorBoundary>
  );
}
