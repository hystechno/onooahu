import Navigation from '../components/Navigation';
import Carousel3D from '../components/Carousel3D';
import FeaturedCollections from '../sections/FeaturedCollections';
import Neighborhoods from '../sections/Neighborhoods';
import Blog from '../sections/Blog';
import PlanYourTrip from '../sections/PlanYourTrip';
import Newsletter from '../sections/Newsletter';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';
import { getOrganizationSchema, getBreadcrumbSchema } from '../utils/schema';

export default function Home() {
  const schema = [
    getOrganizationSchema(),
    getBreadcrumbSchema([
      { name: 'Home', url: 'https://www.onooahu.com/' },
    ]),
  ];

  return (
    <>
      <SEOHead
        title="Hawaii's Best Restaurant Guide"
        description="Ono Oahu — Hawaii's best restaurant guide. Discover the best restaurants on Oahu from beachfront dining to hidden gems, plate lunch spots to sunset happy hours."
        schema={schema}
      />
      <div className="min-h-screen bg-[#faf8f5]">
        <Navigation />
        <Carousel3D />
        <FeaturedCollections />
        <Neighborhoods />
        <Blog />
        <PlanYourTrip />
        <Newsletter />
        <Footer />
      </div>
    </>
  );
}
