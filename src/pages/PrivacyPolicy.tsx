import { Link } from 'react-router';
import SEOHead from '../components/SEOHead';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/Breadcrumbs';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#faf8f5]">
      <SEOHead
        title="Privacy Policy"
        description="Ono Oahu's privacy policy explains how we collect, use, and protect your personal information."
      />
      <Navigation />
      <Breadcrumbs items={[{ label: 'Privacy Policy' }]} />

      <main className="max-w-3xl mx-auto px-6 py-16">
        <p className="text-[13px] uppercase tracking-[0.08em] text-[#b8a08a] font-sans font-medium mb-4">
          Legal
        </p>
        <h1 className="text-4xl md:text-5xl font-serif text-[#1a1a1a] mb-8">
          Privacy Policy
        </h1>
        <p className="text-sm text-[#666666] font-sans mb-10">
          Last updated: May 30, 2026
        </p>

        <div className="space-y-8 text-[15px] text-[#333333] font-sans leading-relaxed">
          <section>
            <h2 className="text-xl font-serif text-[#1a1a1a] mb-3">1. Introduction</h2>
            <p>
              Ono Oahu ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website <Link to="/" className="text-[#d4a574] hover:underline">onooahu.com</Link>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif text-[#1a1a1a] mb-3">2. Information We Collect</h2>
            <p className="mb-2">
              <strong>Personal Information:</strong> We do not collect personal information unless you voluntarily provide it (e.g., via our "Submit a Spot" email form). This may include your name and email address.
            </p>
            <p>
              <strong>Non-Personal Information:</strong> We automatically collect certain non-personal information when you visit our site, including your IP address, browser type, operating system, referring URLs, and pages viewed. This is done through cookies and analytics tools.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif text-[#1a1a1a] mb-3">3. Cookies and Tracking Technologies</h2>
            <p>
              We use cookies and similar tracking technologies to track activity on our site and hold certain information. This includes:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li><strong>Google Analytics:</strong> To understand how visitors interact with our website.</li>
              <li><strong>Google AdSense:</strong> To serve personalized advertisements.</li>
              <li><strong>Affiliate Tracking:</strong> To track referrals to our travel and restaurant partners.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-serif text-[#1a1a1a] mb-3">4. Advertising</h2>
            <p>
              We use Google AdSense to display ads on our website. Google may use cookies to serve ads based on your prior visits to our site and other sites. You may opt out of personalized advertising by visiting <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="text-[#d4a574] hover:underline">Google Ad Settings</a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif text-[#1a1a1a] mb-3">5. Third-Party Links</h2>
            <p>
              Our site contains links to third-party websites (restaurants, booking platforms, activity providers). We are not responsible for the privacy practices of these external sites.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif text-[#1a1a1a] mb-3">6. Data Security</h2>
            <p>
              We implement appropriate security measures to protect your information. However, no method of transmission over the internet is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif text-[#1a1a1a] mb-3">7. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, contact us at <a href="mailto:hello@onooahu.com" className="text-[#d4a574] hover:underline">hello@onooahu.com</a>.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
