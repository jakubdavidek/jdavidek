import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ochrana osobních údajů | Jiří Davídek",
  description: "Zásady ochrany osobních údajů – Jiří Davídek, čistící služby Plzeň.",
};

export default function Privacy() {
  return (
    <main className="min-h-screen bg-paper-DEFAULT dark:bg-[#0a0a0a] py-32 px-6">
      <article className="max-w-2xl mx-auto prose prose-sm dark:prose-invert">
        <Link
          href="/"
          className="no-underline text-accent-DEFAULT text-sm font-semibold block mb-10 hover:opacity-80"
        >
          ← Zpět na hlavní stránku
        </Link>

        <h1 className="font-display text-3xl text-[#111] dark:text-ink-DEFAULT mb-2">
          Ochrana osobních údajů
        </h1>
        <p className="text-sm text-[#888] dark:text-ink-subtle mb-8">
          Platné od 1. 1. 2024 — Jiří Davídek, IČO: [DOPLNIT], Karlovarská 24, 301 00 Plzeň
        </p>

        <h2>1. Správce osobních údajů</h2>
        <p>
          Správcem Vašich osobních údajů je Jiří Davídek, se sídlem Karlovarská 24, 301 00 Plzeň,
          e-mail: jdavidek@centrum.cz, telefon: +420 606 513 793 (dále jen „správce").
        </p>

        <h2>2. Jaké údaje zpracováváme</h2>
        <p>
          Prostřednictvím kontaktního formuláře na webu jdavidek.cz zpracováváme tyto údaje:
          jméno a příjmení, e-mailová adresa, telefonní číslo (nepovinné), popis poptávky.
        </p>

        <h2>3. Účel a právní základ zpracování</h2>
        <p>
          Osobní údaje zpracováváme výhradně za účelem odpovědi na Vaši poptávku a případného
          uzavření smlouvy o poskytnutí služby (čl. 6 odst. 1 písm. b GDPR). Údaje nejsou
          předávány třetím stranám ani využívány k marketingovým účelům bez Vašeho souhlasu.
        </p>

        <h2>4. Doba uchovávání</h2>
        <p>
          Osobní údaje uchováváme po dobu nezbytně nutnou k vyřízení Vaší poptávky, nejdéle
          však 3 roky od posledního kontaktu, pokud nevznikne zákonná povinnost delšího uchování.
        </p>

        <h2>5. Vaše práva</h2>
        <p>
          Máte právo na přístup k Vašim osobním údajům, jejich opravu nebo výmaz, omezení
          zpracování, přenositelnost, a právo vznést námitku. Stížnost můžete podat u Úřadu
          pro ochranu osobních údajů (www.uoou.cz).
        </p>

        <h2>6. Kontakt</h2>
        <p>
          V případě jakýchkoli dotazů nás kontaktujte na{" "}
          <a href="mailto:jdavidek@centrum.cz">jdavidek@centrum.cz</a>{" "}
          nebo telefonicky na čísle +420 606 513 793.
        </p>
      </article>
    </main>
  );
}
