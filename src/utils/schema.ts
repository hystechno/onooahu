export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Ono Oahu",
    url: "https://www.onooahu.com",
    logo: "https://www.onooahu.com/images/hero-card-3.jpg",
    sameAs: [
      "https://instagram.com/onooahu",
      "https://tiktok.com/@onooahu",
      "https://x.com/onooahu",
    ],
    description:
      "Hawaii's most trusted restaurant guide — curated reviews, neighborhood guides, and insider food recommendations for Oahu.",
    contactPoint: {
      "@type": "ContactPoint",
      email: "hello@onooahu.com",
      contactType: "customer support",
    },
  };
}

export function getRestaurantSchema(restaurant: {
  name: string;
  image: string;
  address: string;
  phone: string;
  rating: number;
  price: string;
  hours: string;
  description: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: restaurant.name,
    image: `https://www.onooahu.com${restaurant.image}`,
    description: restaurant.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: restaurant.address.split(",")[0],
      addressLocality: "Honolulu",
      addressRegion: "HI",
      addressCountry: "US",
    },
    telephone: restaurant.phone,
    priceRange: restaurant.price,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: restaurant.rating.toString(),
      bestRating: "5",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      description: restaurant.hours,
    },
    servesCuisine: "Hawaiian",
  };
}

export function getArticleSchema(post: {
  title: string;
  description: string;
  image: string;
  date: string;
  slug: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    image: `https://www.onooahu.com${post.image}`,
    datePublished: new Date(post.date).toISOString(),
    dateModified: new Date(post.date).toISOString(),
    author: {
      "@type": "Organization",
      name: "Ono Oahu",
      url: "https://www.onooahu.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Ono Oahu",
      logo: {
        "@type": "ImageObject",
        url: "https://www.onooahu.com/images/hero-card-3.jpg",
      },
    },
    url: `https://www.onooahu.com/blog/${post.slug}`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.onooahu.com/blog/${post.slug}`,
    },
  };
}

export function getFAQSchema(questions: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}

export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
