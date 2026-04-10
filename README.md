# jdavidek.cz — Redesign

Premium SPA pro Jiřího Davídka, živnostníka poskytujícího čistící služby v Plzni.

## Tech Stack

- **Next.js 14** (App Router)
- **Tailwind CSS 3** (custom design tokens)
- **Framer Motion 11** (scroll/fade animace)
- **Lucide React** (ikony)
- **Fonty:** DM Serif Display (display) + Outfit (body) via next/font

## Spuštění

```bash
npm install
npm run dev
# → http://localhost:3000
```

## Produkce

```bash
npm run build && npm run start
```

## Deploy

Projekt je připraven pro Vercel. Alternativně funguje na jakémkoli Node.js hostingu.

---

## TODO — Doplnění reálného obsahu

### Fotografie (nahradit placeholdery)

| Soubor | Obsah |
|---|---|
| `/public/hero-cleaning.jpg` | Hero sekce — auto detail nebo vysokotlak (16:9, min 1920px) |
| `/public/jiri-davidek-portrait.jpg` | Portrét Jiřího Davídka (4:5, profesionální) |
| `/public/services/interiery.jpg` | Čistění interiéru vozidla |
| `/public/services/vysokotlak.jpg` | Vysokotlaké čištění fasády / dlažby |
| `/public/services/uklid.jpg` | Úklidová práce v interiéru |
| `/public/services/pujcovna.jpg` | Elektrocentrála / čistící technika |
| `/public/services/poukazky.jpg` | Dárkový poukaz (stylový záběr) |

### Integrace kontaktního formuláře

Otevři `components/Contact.tsx`, hledej `TODO: Integrate` a doplň:

```ts
// Formspree:
await fetch("https://formspree.io/f/YOUR_FORM_ID", {
  method: "POST",
  body: JSON.stringify(form),
  headers: { "Content-Type": "application/json" },
});

// nebo Resend / vlastní API route v app/api/contact/route.ts
```

### Google Maps embed

Otevři `components/Contact.tsx`, hledej `TODO: Replace with <iframe>` a doplň:

```html
<iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!...Karlovarska+24+Plzen..."
  className="w-full h-full border-0"
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  title="Mapa – Jiří Davídek"
/>
```

### Logo soubor

Přidej logo do `/public/logo.svg` nebo `/public/logo.png` a nahraď textový logo
v `components/Navbar.tsx` komponentou `<Image>`.

### Schema.org JSON-LD

V `app/layout.tsx` doplň do `<head>`:

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Jiří Davídek – Čistící Služby",
  "telephone": "+420606513793",
  "email": "jdavidek@centrum.cz",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Karlovarská 24",
    "addressLocality": "Plzeň",
    "postalCode": "301 00",
    "addressCountry": "CZ"
  },
  "url": "https://jdavidek.cz"
}
```

---

## Struktura projektu

```
jdavidek/
├── app/
│   ├── globals.css          ← Design tokens, utility třídy
│   ├── layout.tsx           ← Root layout, fonty, metadata, dark mode init
│   └── page.tsx             ← Sestavuje všechny sekce
├── components/
│   ├── Navbar.tsx           ← Sticky nav, dark mode toggle, mobile menu
│   ├── Hero.tsx             ← Dark hero s typografickým sloganem + stats
│   ├── Services.tsx         ← Bento grid – 5 služeb
│   ├── About.tsx            ← Osobní sekce o Jiřím Davídkovi
│   ├── References.tsx       ← Reference s filtry dle kategorie
│   ├── Contact.tsx          ← Formulář + mapa + kontaktní info
│   └── Footer.tsx           ← Patička
├── public/
│   └── (fotografie — viz TODO výše)
├── tailwind.config.ts
├── next.config.js
├── tsconfig.json
└── package.json
```
