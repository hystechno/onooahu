import { useEffect } from 'react';
interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  type?: string;
  schema?: Record<string, unknown> | Record<string, unknown>[];
  articleDate?: string;
  articleCategory?: string;
}

export default function SEOHead({
  title,
  description,
  image = 'https://www.onooahu.com/images/hero-card-3.jpg',
  type = 'website',
  schema,
  articleDate,
  articleCategory,
}: SEOProps) {
  const hashPath = window.location.hash || '#/';
  const canonicalUrl = `https://www.onooahu.com${hashPath}`;

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

    // Helper to set or create link tag
    const setLink = (rel: string, href: string) => {
      let link = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
      if (!link) {
        link = document.createElement('link');
        link.rel = rel;
        document.head.appendChild(link);
      }
      link.href = href;
    };

    setMeta('description', description || "Ono Oahu — Hawaii's best restaurant guide. Discover the best restaurants on Oahu from beachfront dining to hidden gems.");
    setMeta('robots', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');
    setLink('canonical', canonicalUrl);
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

    // Article-specific OG tags (for Google Discover)
    if (type === 'article') {
      if (articleDate) {
        setMeta('article:published_time', articleDate, true);
        setMeta('article:modified_time', articleDate, true);
      }
      setMeta('article:author', 'Ono Oahu', true);
      if (articleCategory) {
        setMeta('article:section', articleCategory, true);
      }
      setMeta('article:publisher', 'https://www.onooahu.com', true);
    }

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

    return () => {
      // Cleanup article-specific meta tags when navigating away
      if (type !== 'article') {
        ['article:published_time', 'article:modified_time', 'article:author', 'article:section', 'article:publisher'].forEach(prop => {
          const meta = document.querySelector(`meta[property="${prop}"]`);
          if (meta) meta.remove();
        });
      }
    };
  }, [title, description, image, type, schema, canonicalUrl, articleDate, articleCategory]);

  return null;
}
