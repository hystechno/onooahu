import SEOHead from '../components/SEOHead';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/Breadcrumbs';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-[#faf8f5]">
      <SEOHead
        title="Terms of Service"
        description="Ono Oahu's terms of service outline the rules and regulations for using our website."
      />
      <Navigation />
      <Breadcrumbs items={[{ label: 'Terms of Service' }]} />

      <main className="max-w-3xl mx-auto px-6 py-16">
        <p className="text-[13px] uppercase tracking-[0.08em] text-[#b8a08a] font-sans font-medium mb-4">
          Legal
        </p>
        <h1 className="text-4xl md:text-5xl font-serif text-[#1a1a1a] mb-8">
          Terms of Service
        </h1>
        <p className="text-sm text-[#666666] font-sans mb-10">
          Last updated: May 30, 2026
        </p>

        <div className="space-y-8 text-[15px] text-[#333333] font-sans leading-relaxed">
          <section>
            <h2 className="text-xl font-serif text-[#1a1a1a] mb-3">1. Agreement to Terms</h2>
            <p>
              By accessing and using Ono Oahu (onooahu.com), you accept and agree to be bound by these Terms of Service. If you do not agree, please do not use our website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif text-[#1a1a1a] mb-3">2. Use of Content</h2>
            <p>
              All content on Ono Oahu, including text, images, and graphics, is for informational purposes only. Our restaurant reviews and recommendations are based on editorial research and personal visits. We strive for accuracy but cannot guarantee that all information is current.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif text-[#1a1a1a] mb-3">3. Affiliate Disclosure</h2>
            <p>
              Ono Oahu participates in affiliate marketing programs, including Travelpayouts and Google AdSense. When you click on certain links or make reservations through our site, we may earn a commission at no additional cost to you. We only recommend restaurants and services we genuinely believe in.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif text-[#1a1a1a] mb-3">4. User Submissions</h2>
            <p>
              By submitting restaurant recommendations or other content to us, you grant Ono Oahu a non-exclusive, royalty-free license to use, modify, and publish that content. You represent that you own or have permission to share any content you submit.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif text-[#1a1a1a] mb-3">5. Third-Party Links</h2>
            <p>
              Our site contains links to third-party websites. We are not responsible for the content, accuracy, or practices of these external sites. Use them at your own risk.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif text-[#1a1a1a] mb-3">6. Limitation of Liability</h2>
            <p>
              Ono Oahu shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the site. All dining recommendations are opinions and individual experiences may vary.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif text-[#1a1a1a] mb-3">7. Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. Changes will be posted on this page with an updated date.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif text-[#1a1a1a] mb-3">8. Contact</h2>
            <p>
              For questions about these terms, contact <a href="mailto:hello@onooahu.com" className="text-[#d4a574] hover:underline">hello@onooahu.com</a>.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
