import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Newsletter() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [email, setEmail] = useState('');

  useEffect(() => {
    const ctx = gsap.context(() => {
      const heading = sectionRef.current?.querySelector('.heading');
      const formArea = sectionRef.current?.querySelector('.form-area');

      if (heading) {
        gsap.from(heading, {
          opacity: 0,
          x: -40,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        });
      }

      if (formArea) {
        gsap.from(formArea, {
          opacity: 0,
          duration: 0.6,
          delay: 0.3,
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent('Newsletter Subscription - Ono Oahu');
    const body = encodeURIComponent(`Hi Ono Oahu team,

I'd like to subscribe to your weekly newsletter. My email is: ${email}

Looking forward to the best Oahu restaurant picks!

Best regards`);
    window.open(`mailto:hello@onooahu.com?subject=${subject}&body=${body}`, '_blank');
    setEmail('');
    alert('Opening your email client to send your subscription!');
  };

  return (
    <section
      ref={sectionRef}
      id="newsletter"
      className="py-[120px] px-6 md:px-12"
      style={{ backgroundColor: '#2c2420' }}
    >
      <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-16">
        {/* Left Column */}
        <div className="md:w-1/2 heading">
          <h2 className="text-4xl md:text-[56px] text-[#faf8f5] font-serif leading-[1.1] tracking-tight mb-4">
            Stay in the Know
          </h2>
          <p className="text-lg text-[#b8a08a] font-sans leading-relaxed">
            Get weekly picks of the best new spots and hidden gems delivered to your inbox. Subscribe by sending us a quick email — we'll add you to the list.
          </p>
        </div>

        {/* Right Column */}
        <div className="md:w-1/2 form-area w-full">
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 items-end">
            <div className="flex-1 w-full">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="w-full bg-transparent border-b border-[#b8a08a] text-[#faf8f5] placeholder-[#b8a08a] text-base font-sans py-3 px-0 focus:outline-none focus:border-[#d4a574] transition-colors"
              />
            </div>
            <button
              type="submit"
              className="bg-[#d4a574] text-[#1a1a1a] text-sm font-sans font-medium uppercase tracking-wide px-7 py-3 rounded-full hover:bg-[#faf8f5] transition-colors duration-300 whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>

          {/* Social Links */}
          <div className="flex gap-6 mt-8">
            {[
              { name: 'Instagram', url: 'https://instagram.com/onooahu' },
              { name: 'TikTok', url: 'https://tiktok.com/@onooahu' },
              { name: 'X', url: 'https://x.com/onooahu' },
            ].map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[13px] uppercase tracking-[0.08em] text-[#b8a08a] font-sans hover:text-[#faf8f5] transition-colors duration-300"
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
