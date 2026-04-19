import type { Metadata, Viewport } from "next";
import { DM_Serif_Display, Outfit } from "next/font/google";
import "./globals.css";

const dmSerif = DM_Serif_Display({
  subsets: ["latin", "latin-ext"],
  weight: ["400"],
  variable: "--font-display",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const BASE_URL = "https://jdavidek.cz";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ea6c00",
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: "Jiří Davídek – Čistící Služby Plzeň | Čištění vozů, fasád a úklid",
    template: "%s | Jiří Davídek – Čistící Služby Plzeň",
  },
  description:
    "Profesionální čistící služby v Plzni a okolí. Čištění interiérů vozů, vysokotlaké čištění fasád a dlažeb, úklidové služby pro firmy i domácnosti. Více než 20 let zkušeností. Volejte: +420 606 513 793.",

  keywords: [
    "čištění vozů Plzeň",
    "čištění interiéru auta Plzeň",
    "vysokotlaké čištění Plzeň",
    "čištění fasády Plzeň",
    "čištění dlažby Plzeň",
    "úklidové služby Plzeň",
    "úklid kanceláří Plzeň",
    "půjčovna elektrocentrály Plzeň",
    "dárkový poukaz čištění",
    "Jiří Davídek čistící služby",
    "čistírna Plzeň",
    "ruční detailing Plzeň",
  ],

  authors: [{ name: "Jiří Davídek", url: BASE_URL }],
  creator: "Jiří Davídek",
  publisher: "Jiří Davídek",

  alternates: {
    canonical: BASE_URL,
    languages: { "cs-CZ": BASE_URL },
  },

  openGraph: {
    type: "website",
    locale: "cs_CZ",
    url: BASE_URL,
    siteName: "Jiří Davídek – Čistící Služby",
    title: "Jiří Davídek – Čistící Služby Plzeň",
    description:
      "Čištění vozů, fasád, úklidové služby a půjčovna strojů v Plzni. Osobní přístup, 20+ let praxe.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Jiří Davídek – Čistící Služby Plzeň",
        type: "image/jpeg",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Jiří Davídek – Čistící Služby Plzeň",
    description: "Čištění vozů, fasád, úklid pro firmy i domácnosti. Plzeň a okolí.",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  category: "business",
};

// ── Schema.org JSON-LD ─────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": `${BASE_URL}/#business`,
      "name": "Jiří Davídek – Čistící Služby",
      "alternateName": "jdavidek.cz",
      "description":
        "Profesionální čistící služby v Plzni – čištění interiérů vozů, vysokotlaké čištění fasád a dlažeb, úklidové služby pro firmy i domácnosti, půjčovna strojů.",
      "url": BASE_URL,
      "telephone": "+420606513793",
      "email": "jdavidek@centrum.cz",
      "priceRange": "$$",
      "currenciesAccepted": "CZK",
      "paymentAccepted": "Cash, Bank Transfer",
      "founder": {
        "@type": "Person",
        "name": "Jiří Davídek",
        "jobTitle": "Majitel & Provozovatel",
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Karlovarská 24",
        "addressLocality": "Plzeň",
        "postalCode": "301 00",
        "addressRegion": "Plzeňský kraj",
        "addressCountry": "CZ",
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 49.7574,
        "longitude": 13.3728,
      },
      "areaServed": [
        { "@type": "City", "name": "Plzeň" },
        { "@type": "AdministrativeArea", "name": "Plzeňský kraj" },
      ],
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "07:00",
          "closes": "18:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Saturday",
          "opens": "08:00",
          "closes": "14:00",
          "description": "Po předchozí dohodě",
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
              "name": "Čištění interiérů vozů – Manual Detailing",
              "description": "Ruční detailing interiéru vozidla – sedačky, koberce, plasty, palubní deska, klimatizace.",
              "serviceType": "Automotive Cleaning",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Vysokotlaké čištění fasád a dlažeb",
              "description": "Profesionální vysokotlaké čištění fasád, zámkových dlažeb, teras, plotů a průmyslových ploch.",
              "serviceType": "Pressure Washing",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Úklidové služby pro firmy a domácnosti",
              "description": "Pravidelný i jednorázový úklid kanceláří, provozoven a domácností v Plzni a okolí.",
              "serviceType": "Cleaning Service",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Půjčovna strojů – elektrocentrály a čistící technika",
              "description": "Zapůjčení elektrocentrál, vysokotlakých čističů a profesionálního vybavení.",
              "serviceType": "Equipment Rental",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Dárkové poukazy na čistící služby",
              "description": "Dárkové poukazy na libovolnou čistící službu. Elektronicky nebo fyzicky.",
              "serviceType": "Gift Card",
            },
          },
        ],
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5",
        "reviewCount": "5",
        "bestRating": "5",
        "worstRating": "1",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      "url": BASE_URL,
      "name": "Jiří Davídek – Čistící Služby Plzeň",
      "description": "Profesionální čistící služby v Plzni a okolí.",
      "inLanguage": "cs-CZ",
      "publisher": { "@id": `${BASE_URL}/#business` },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${BASE_URL}/#breadcrumb`,
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Úvod", "item": BASE_URL },
        { "@type": "ListItem", "position": 2, "name": "Služby", "item": `${BASE_URL}/#sluzby` },
        { "@type": "ListItem", "position": 3, "name": "O nás", "item": `${BASE_URL}/#o-nas` },
        { "@type": "ListItem", "position": 4, "name": "Reference", "item": `${BASE_URL}/#reference` },
        { "@type": "ListItem", "position": 5, "name": "Kontakt", "item": `${BASE_URL}/#kontakt` },
      ],
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="cs" className="dark">
      <head>
        {/* Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Preconnect Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Favicons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className={`${dmSerif.variable} ${outfit.variable}`}>
        {children}
      </body>
    </html>
  );
}