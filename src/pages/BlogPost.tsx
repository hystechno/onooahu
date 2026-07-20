import { useParams, Link, Navigate } from 'react-router';
import PageLayout from '../components/PageLayout';
import SEOHead from '../components/SEOHead';
import MonetizeBanner from '../components/MonetizeBanner';
import AdSenseSlot from '../components/AdSenseSlot';
import { blogPosts } from '../data/restaurants';
import { getArticleSchema, getBreadcrumbSchema } from '../utils/schema';

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to="/" replace />;
  }

  // Parse content into sections
  const lines = post.content.split('\n');
  const elements: React.ReactNode[] = [];
  let key = 0;

  lines.forEach((line) => {
    const trimmed = line.trim();
    if (!trimmed) return;

    if (trimmed.startsWith('## ')) {
      elements.push(
        <h2 key={key++} className="text-2xl md:text-3xl text-[#1a1a1a] font-serif mt-12 mb-4 leading-tight">
          {trimmed.replace('## ', '')}
        </h2>
      );
    } else if (trimmed.startsWith('**') && trimmed.includes('**') && trimmed.endsWith('**')) {
      elements.push(
        <p key={key++} className="text-sm font-sans font-medium text-[#1a1a1a] mt-2 mb-1">
          {trimmed.replace(/\*\*/g, '')}
        </p>
      );
    } else if (trimmed.startsWith('- ')) {
      elements.push(
        <li key={key++} className="text-base text-[#666666] font-sans leading-relaxed ml-4 mb-2">
          {trimmed.replace('- ', '')}
        </li>
      );
    } else {
      elements.push(
        <p key={key++} className="text-base text-[#666666] font-sans leading-relaxed mb-4">
          {trimmed}
        </p>
      );
    }
  });

  const schema = [
    getArticleSchema({
      title: post.title,
      description: post.excerpt,
      image: post.image,
      date: post.date,
      slug: post.slug,
    }),
    getBreadcrumbSchema([
      { name: 'Home', url: 'https://www.onooahu.com/' },
      { name: 'Stories', url: 'https://www.onooahu.com/#/blog' },
      { name: post.title, url: `https://www.onooahu.com/#/blog/${slug}` },
    ]),
  ];

  return (
    <>
      <SEOHead
        title={post.title}
        description={post.excerpt}
        image={`https://www.onooahu.com${post.image}`}
        type="article"
        schema={schema}
        articleDate={new Date(post.date).toISOString()}
        articleCategory={post.category}
      />
      <PageLayout>
        {/* Hero Header */}
        <div className="relative h-[350px] md:h-[450px] overflow-hidden">
          <img loading="lazy" src={post.image} alt={post.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/90 via-[#1a1a1a]/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 max-w-[1280px] mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[11px] uppercase tracking-[0.08em] text-[#d4a574] font-sans bg-[#d4a574]/20 px-3 py-1 rounded-full">
                {post.category}
              </span>
              <span className="text-xs text-[#f5ede4]/70 font-sans">{post.date}</span>
            </div>
            <h1 className="text-3xl md:text-5xl text-white font-serif leading-[1.1] tracking-tight max-w-3xl">
              {post.title}
            </h1>
          </div>
        </div>

        <MonetizeBanner context="blog" />

        {/* Article Content */}
        <article className="py-16 px-6 md:px-12">
          <div className="max-w-[720px] mx-auto">
            {/* Lead */}
            <p className="text-xl text-[#1a1a1a] font-serif leading-relaxed mb-8 italic">
              {post.excerpt}
            </p>

            {/* Divider */}
            <div className="w-16 h-px bg-[#d4a574] mb-10" />

            {/* AdSense - Top of article */}
            <AdSenseSlot slot="blog-top" />

            {/* Content */}
            <div className="prose-content">
              {elements}
            </div>

            {/* AdSense - Bottom of article */}
            <AdSenseSlot slot="blog-bottom" />

            {/* Inline Photo Gallery */}
            {post.gallery && post.gallery.length > 0 && (
              <div className="mt-12">
                <h2 className="text-2xl font-serif text-[#1a1a1a] mb-6">Photo Gallery</h2>
                <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
                  {post.gallery.map((photo, idx) => (
                    <div key={idx} className="aspect-[4/3] rounded-xl overflow-hidden shadow-sm">
                      <img
                        src={photo}
                        alt={`${post.title} photo ${idx + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Author / Trust signal */}
            <div className="mt-12 p-6 bg-[#f5ede4]/50 rounded-xl">
              <p className="text-sm text-[#666666] font-sans leading-relaxed">
                <strong className="text-[#1a1a1a]">About Ono Oahu:</strong> We visit every restaurant anonymously, pay our own way, and write honest reviews based on real experiences. No sponsored content, no paid placements. This article was researched and written by our editorial team in {post.date.split(' ')[2]}.
              </p>
            </div>

            {/* Back Link */}
            <div className="mt-16 pt-8 border-t border-[#f0ebe4]">
              <Link
                to="/#blog"
                className="inline-flex items-center gap-2 text-sm font-serif italic text-[#1a1a1a] underline underline-offset-4 hover:text-[#d4a574] transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
                Back to All Stories
              </Link>
            </div>
          </div>
        </article>
      </PageLayout>
    </>
  );
}
