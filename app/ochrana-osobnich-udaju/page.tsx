import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, Shield, Mail, Phone, Clock, Users, FileText, Lock } from "lucide-react";

export const metadata: Metadata = {
  title: "Ochrana osobních údajů | Jiří Davídek",
  description: "Zásady ochrany osobních údajů – Jiří Davídek, čistící služby Plzeň.",
};

const sections = [
  {
    num: "01",
    icon: Users,
    title: "Správce osobních údajů",
    content: (
      <>
        Správcem Vašich osobních údajů je <strong>Jiří Davídek</strong>, se sídlem Karlovarská 24,
        301 00 Plzeň, IČO: 47747439. V případě dotazů nás kontaktujte na{" "}
        <a href="mailto:jdavidek@centrum.cz" style={{ color: "#ea6c00", textDecoration: "none" }}>
          jdavidek@centrum.cz
        </a>{" "}
        nebo na čísle <a href="tel:+420606513793" style={{ color: "#ea6c00", textDecoration: "none" }}>+420 606 513 793</a>.
      </>
    ),
  },
  {
    num: "02",
    icon: FileText,
    title: "Jaké údaje zpracováváme",
    content: (
      <>
        Prostřednictvím kontaktního formuláře na webu <strong>jdavidek.cz</strong> zpracováváme
        tyto údaje: jméno a příjmení, e-mailová adresa, telefonní číslo (nepovinné) a popis
        poptávky.
      </>
    ),
  },
  {
    num: "03",
    icon: Lock,
    title: "Účel a právní základ zpracování",
    content: (
      <>
        Osobní údaje zpracováváme výhradně za účelem odpovědi na Vaši poptávku a případného
        uzavření smlouvy o poskytnutí služby{" "}
        <span style={{ color: "#9a9a94" }}>(čl. 6 odst. 1 písm. b GDPR)</span>. Údaje nejsou
        předávány třetím stranám ani využívány k marketingovým účelům bez Vašeho souhlasu.
      </>
    ),
  },
  {
    num: "04",
    icon: Clock,
    title: "Doba uchovávání",
    content: (
      <>
        Osobní údaje uchováváme po dobu nezbytně nutnou k vyřízení Vaší poptávky, nejdéle
        však <strong>3 roky</strong> od posledního kontaktu, pokud nevznikne zákonná povinnost
        delšího uchování.
      </>
    ),
  },
  {
    num: "05",
    icon: Shield,
    title: "Vaše práva",
    content: (
      <>
        Máte právo na přístup k Vašim osobním údajům, jejich opravu nebo výmaz, omezení
        zpracování, přenositelnost a právo vznést námitku. Stížnost můžete podat u{" "}
        <a
          href="https://www.uoou.cz"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#ea6c00", textDecoration: "none" }}
        >
          Úřadu pro ochranu osobních údajů
        </a>
        .
      </>
    ),
  },
];

export default function Privacy() {
  return (
    <main style={{ minHeight: "100vh", background: "#0a0a0a", color: "#fafaf8", fontFamily: "var(--font-body,'Outfit',sans-serif)" }}>

      {/* Hero */}
      <div style={{
        position: "relative",
        overflow: "hidden",
        padding: "7rem 1.5rem 5rem",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}>
        {/* Subtle radial glow */}
        <div style={{
          position: "absolute",
          top: 0, left: "50%",
          transform: "translateX(-50%)",
          width: 600, height: 300,
          background: "radial-gradient(ellipse at top, rgba(234,108,0,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />

        <div style={{ maxWidth: 760, margin: "0 auto", position: "relative" }}>
          <Link
            href="/"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#9a9a94",
              textDecoration: "none",
              marginBottom: "2.5rem",
              transition: "color 0.2s",
            }}
            onMouseEnter={undefined}
          >
            <ArrowLeft size={14} />
            Zpět na hlavní stránku
          </Link>

          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: "1.25rem" }}>
            <div style={{
              width: 44, height: 44,
              background: "rgba(234,108,0,0.12)",
              border: "1px solid rgba(234,108,0,0.25)",
              borderRadius: 12,
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <Shield size={20} color="#ea6c00" />
            </div>
            <span style={{
              fontSize: 10, fontWeight: 700, letterSpacing: "0.2em",
              textTransform: "uppercase", color: "#ea6c00",
            }}>
              Ochrana údajů · GDPR
            </span>
          </div>

          <h1 style={{
            fontFamily: "var(--font-display,'DM Serif Display',Georgia,serif)",
            fontSize: "clamp(2.25rem, 5vw, 3.5rem)",
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            fontWeight: 400,
            color: "#fafaf8",
            margin: "0 0 1rem",
          }}>
            Ochrana osobních údajů
          </h1>

          <p style={{ fontSize: 13, color: "#5a5a54", margin: 0, lineHeight: 1.6 }}>
            Platné od 1. 1. 2024 &mdash; Jiří Davídek, IČO: 47747439, Karlovarská 24, 301 00 Plzeň
          </p>
        </div>
      </div>

      {/* Sections */}
      <div style={{ maxWidth: 760, margin: "0 auto", padding: "4rem 1.5rem" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {sections.map(({ num, icon: Icon, title, content }) => (
            <div
              key={num}
              style={{
                background: "#141414",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: 20,
                padding: "2rem 2.25rem",
                transition: "border-color 0.2s",
              }}
            >
              <div style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
                <div style={{
                  flexShrink: 0,
                  width: 36, height: 36,
                  background: "rgba(234,108,0,0.08)",
                  border: "1px solid rgba(234,108,0,0.15)",
                  borderRadius: 10,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  marginTop: 2,
                }}>
                  <Icon size={16} color="#ea6c00" strokeWidth={1.5} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                    <span style={{
                      fontSize: 9, fontWeight: 700, letterSpacing: "0.16em",
                      color: "#ea6c00", fontFamily: "var(--font-body,'Outfit',sans-serif)",
                    }}>
                      {num}
                    </span>
                    <div style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.06)" }} />
                  </div>
                  <h2 style={{
                    fontFamily: "var(--font-display,'DM Serif Display',Georgia,serif)",
                    fontSize: "1.2rem",
                    fontWeight: 400,
                    color: "#fafaf8",
                    margin: "0 0 0.75rem",
                    letterSpacing: "-0.01em",
                  }}>
                    {title}
                  </h2>
                  <p style={{ fontSize: 14, lineHeight: 1.75, color: "#9a9a94", margin: 0 }}>
                    {content}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact card */}
        <div style={{
          marginTop: 32,
          background: "linear-gradient(135deg, rgba(234,108,0,0.1) 0%, rgba(234,108,0,0.04) 100%)",
          border: "1px solid rgba(234,108,0,0.2)",
          borderRadius: 20,
          padding: "2rem 2.25rem",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
            <span style={{
              fontSize: 9, fontWeight: 700, letterSpacing: "0.2em",
              textTransform: "uppercase", color: "#ea6c00",
            }}>06 · Kontakt</span>
          </div>
          <h2 style={{
            fontFamily: "var(--font-display,'DM Serif Display',Georgia,serif)",
            fontSize: "1.2rem", fontWeight: 400,
            color: "#fafaf8", margin: "0 0 1.25rem",
          }}>
            Máte dotazy ohledně Vašich dat?
          </h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            <a
              href="mailto:jdavidek@centrum.cz"
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                fontSize: 13, fontWeight: 600,
                color: "#fafaf8", textDecoration: "none",
                background: "rgba(234,108,0,0.15)",
                border: "1px solid rgba(234,108,0,0.25)",
                padding: "10px 18px", borderRadius: 99,
                transition: "background 0.2s",
              }}
            >
              <Mail size={14} color="#ea6c00" />
              jdavidek@centrum.cz
            </a>
            <a
              href="tel:+420606513793"
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                fontSize: 13, fontWeight: 600,
                color: "#9a9a94", textDecoration: "none",
                background: "#1c1c1c",
                border: "1px solid rgba(255,255,255,0.08)",
                padding: "10px 18px", borderRadius: 99,
                transition: "background 0.2s",
              }}
            >
              <Phone size={14} />
              +420 606 513 793
            </a>
          </div>
        </div>

        {/* Footer note */}
        <p style={{ marginTop: 48, fontSize: 11, color: "#3a3a34", textAlign: "center", lineHeight: 1.6 }}>
          © {new Date().getFullYear()} Jiří Davídek &mdash; Veškerá práva vyhrazena
        </p>
      </div>
    </main>
  );
}
