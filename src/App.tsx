import { Routes, Route } from 'react-router';
import Home from './pages/Home';
import CollectionPage from './pages/CollectionPage';
import BlogPost from './pages/BlogPost';
import RestaurantDetail from './pages/RestaurantDetail';
import NeighborhoodPage from './pages/NeighborhoodPage';
import DiscoverPage from './pages/DiscoverPage';
import AboutPage from './pages/AboutPage';
import FAQPage from './pages/FAQPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/discover" element={<DiscoverPage />} />
      <Route path="/collections/:slug" element={<CollectionPage />} />
      <Route path="/restaurants/:id" element={<RestaurantDetail />} />
      <Route path="/neighborhoods/:slug" element={<NeighborhoodPage />} />
      <Route path="/blog/:slug" element={<BlogPost />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/faq" element={<FAQPage />} />
    </Routes>
  );
}
