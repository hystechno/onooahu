import { Link } from 'react-router';
import PageLayout from '../components/PageLayout';
import SEOHead from '../components/SEOHead';
import MonetizeBanner from '../components/MonetizeBanner';
import { blogPosts } from '../data/restaurants';
import { getBreadcrumbSchema } from '../utils/schema';

export default function BlogListingPage() {
  const posts = [...blogPosts].reverse(); // Most recent first

  const schema = getBreadcrumbSchema([
    { name: 'Home', url: 'https://www.onooahu.com/' },
    { name: 'Stories', url: 'https://www.onooahu.com/#/blog' },
  ]);

  return (
    <>
      <SEOHead
        title="Stories from Oahu's Best Restaurant Guide"
        description="Discover the best food on Oahu through our curated stories — from poke bowls and food trucks to happy hours and hidden gems."
        schema={schema}
      />
      <PageLayout>
        {/* Hero Header */}
        <div className="relative h-[300px] md:h-[350px] overflow-hidden">
          <img loading="lazy" src="/images/hero-card-2.jpg" alt="Oahu food stories" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/90 via-[#1a1a1a]/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 max-w-[1280px] mx-auto">
            <p className="text-[11px] uppercase tracking-[0.08em] text-[#d4a574] font-sans mb-3">From the Guide</p>
            <h1 className="text-4xl md:text-5xl text-white font-serif leading-[1.1] tracking-tight mb-3">Stories</h1>
            <p className="text-base text-[#f5ede4]/80 font-sans max-w-xl">{posts.length} curated guides to the best food and dining experiences on Oahu.</p>
          </div>
        </div>

        <MonetizeBanner context="default" />

        {/* Blog Grid */}
        <section className="py-16 px-6 md:px-12">
          <div className="max-w-[1280px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Link
                  to={`/blog/${post.slug}`}
                  key={post.slug}
                  className="group bg-white rounded-xl overflow-hidden cursor-pointer transition-shadow duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)]"
                >
                  {/* Image */}
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    />
                  </div>
                  {/* Content */}
                  <div className="p-5">
                    <p className="text-[11px] uppercase tracking-[0.06em] text-[#d4a574] font-sans mb-2">
                      {post.category}
                    </p>
                    <h3 className="text-xl md:text-[22px] text-[#1a1a1a] font-serif mb-2 leading-tight transition-colors duration-300 group-hover:text-[#d4a574]">
                      {post.title}
                    </h3>
                    <p className="text-[13px] text-[#666666] font-sans mb-3">
                      {post.date}
                    </p>
                    <p className="text-sm text-[#666666] font-sans leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </PageLayout>
    </>
  );
}
