import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Jiří Davídek – Precizní čištění pro Vaši pohodu",
  description:
    "Profesionální čištění interiérů vozů, vysokotlaké čištění fasád a dlažeb, úklidové služby pro firmy i domácnosti. Plzeň a okolí.",
  keywords: [
    "čištění vozů Plzeň",
    "vysokotlaké čištění",
    "úklidové služby Plzeň",
    "čištění interiéru auta",
    "půjčovna čistící techniky",
    "Jiří Davídek",
  ],
  authors: [{ name: "Jiří Davídek" }],
  openGraph: {
    title: "Jiří Davídek – Precizní čištění",
    description: "Profesionální čistící služby v Plzni s osobním závazkem ke kvalitě.",
    type: "website",
    locale: "cs_CZ",
    url: "https://jdavidek.cz",
    siteName: "jdavidek.cz",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="cs" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const stored = localStorage.getItem('theme');
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                if (stored === 'dark' || (!stored && prefersDark)) {
                  document.documentElement.classList.add('dark');
                }
              } catch(e) {}
            `,
          }}
        />
      </head>
      <body className={`${dmSerif.variable} ${outfit.variable}`}>
        <div className="grain-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
