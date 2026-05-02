import { useEffect } from 'react';
import { useLocation } from 'react-router';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  type?: string;
  schema?: Record<string, unknown> | Record<string, unknown>[];
}

export default function SEOHead({
  title,
  description,
  image = 'https://www.onooahu.com/images/hero-card-3.jpg',
  type = 'website',
  schema,
}: SEOProps) {
  const location = useLocation();
  const canonicalUrl = `https://www.onooahu.com${location.pathname}${location.search}`;

  useEffect(() => {
    // Update document title
    const fullTitle = title
      ? `${title} | Ono Oahu - Hawaii's Best Restaurant Guide`
      : `Ono Oahu - Hawaii's Best Restaurant Guide`;
    document.title = fullTitle;

    // Helper to set or create meta tag
    const setMeta = (name: string, content: string, property = false) => {
      let meta = document.querySelector(
        property ? `meta[property="${name}"]` : `meta[name="${name}"]`
      ) as HTMLMetaElement | null;
      if (!meta) {
        meta = document.createElement('meta');
        if (property) meta.setAttribute('property', name);
        else meta.setAttribute('name', name);
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    setMeta('description', description || "Ono Oahu — Hawaii's best restaurant guide. Discover the best restaurants on Oahu from beachfront dining to hidden gems.");
    setMeta('robots', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');
    setMeta('canonical', canonicalUrl);
    setMeta('keywords', 'Oahu restaurants, Hawaii food guide, Waikiki dining, North Shore food, best restaurants Oahu, Hawaiian food, poke bowls, plate lunch, food trucks, happy hour');
    setMeta('author', 'Ono Oahu');

    // Open Graph
    setMeta('og:title', fullTitle, true);
    setMeta('og:description', description || "Hawaii's best restaurant guide", true);
    setMeta('og:type', type, true);
    setMeta('og:url', canonicalUrl, true);
    setMeta('og:image', image, true);
    setMeta('og:site_name', 'Ono Oahu', true);
    setMeta('og:locale', 'en_US', true);

    // Twitter Cards
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', fullTitle);
    setMeta('twitter:description', description || "Hawaii's best restaurant guide");
    setMeta('twitter:image', image);
    setMeta('twitter:site', '@onooahu');

    // Schema.org JSON-LD
    if (schema) {
      let script = document.getElementById('schema-ld') as HTMLScriptElement | null;
      if (!script) {
        script = document.createElement('script');
        script.id = 'schema-ld';
        script.type = 'application/ld+json';
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(schema);
    }

  }, [title, description, image, type, schema, canonicalUrl]);

  return null;
}
