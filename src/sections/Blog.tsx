import { useEffect, useRef } from 'react';
import { Link } from 'react-router';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { blogPosts } from '../data/restaurants';

gsap.registerPlugin(ScrollTrigger);

// Show the 3 most recent posts
const posts = [...blogPosts].reverse().slice(0, 3);

export default function Blog() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = sectionRef.current?.querySelectorAll('.blog-card');
      if (cards) {
        gsap.from(cards, {
          opacity: 0,
          y: 40,
          stagger: 0.15,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="blog" className="py-[120px] px-6 md:px-12">
      <div className="max-w-[1280px] mx-auto">
        {/* Header */}
        <div className="mb-12">
          <p className="text-[13px] uppercase tracking-[0.08em] text-[#d4a574] font-sans mb-4">
            Stories
          </p>
          <h2 className="text-4xl md:text-5xl text-[#1a1a1a] font-serif leading-[1.1] tracking-tight">
            From the Guide
          </h2>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {posts.map((post) => (
            <Link
              to={`/blog/${post.slug}`}
              key={post.title}
              className="blog-card group bg-white rounded-xl overflow-hidden cursor-pointer transition-shadow duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)]"
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
                <p className="text-sm text-[#666666] font-sans leading-relaxed line-clamp-2">
                  {post.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 border border-[#1a1a1a] text-[#1a1a1a] text-sm font-sans font-medium uppercase tracking-wide px-7 py-3 rounded-full hover:bg-[#1a1a1a] hover:text-[#faf8f5] transition-all duration-300"
          >
            Read All Stories
          </Link>
        </div>
      </div>
    </section>
  );
}
