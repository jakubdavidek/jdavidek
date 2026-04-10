// Přidat do app/layout.tsx uvnitř <head>:
// import JsonLd from "@/components/JsonLd";
// <JsonLd />

export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://jdavidek.cz/#business",
    "name": "Jiří Davídek – Čistící Služby",
    "description":
      "Profesionální čištění interiérů vozů, vysokotlaké čištění fasád a dlažeb, úklidové služby pro firmy i domácnosti. Plzeň a okolí.",
    "url": "https://jdavidek.cz",
    "telephone": "+420606513793",
    "email": "jdavidek@centrum.cz",
    "founder": {
      "@type": "Person",
      "name": "Jiří Davídek",
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Karlovarská 24",
      "addressLocality": "Plzeň",
      "postalCode": "301 00",
      "addressCountry": "CZ",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 49.7475,
      "longitude": 13.3776,
    },
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 49.7475,
        "longitude": 13.3776,
      },
      "geoRadius": "50000",
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "07:00",
        "closes": "18:00",
      },
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Čistící služby",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Čištění interiérů vozů",
            "description": "Ruční detailing interiéru vozidla – sedačky, koberce, plasty, klimatizace.",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Vysokotlaké čištění",
            "description": "Čištění fasád, zámkové dlažby, teras a průmyslových ploch.",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Úklidové služby",
            "description": "Pravidelný i jednorázový úklid kanceláří, provozoven a domácností.",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Půjčovna strojů",
            "description": "Zapůjčení elektrocentrál, vysokotlakých čističů a dalšího vybavení.",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Dárkové poukazy",
            "description": "Poukazy na libovolnou čistící službu.",
          },
        },
      ],
    },
    "sameAs": [
      "https://www.facebook.com/jdavidek",  // doplnit reálné URL pokud existuje
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
