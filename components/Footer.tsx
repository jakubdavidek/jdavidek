"use client";

const footerLinks = [
  { label: "Čištění vozů", href: "#sluzba-interiery" },
  { label: "Vysokotlaké čištění", href: "#sluzba-vysokotlak" },
  { label: "Úklidové služby", href: "#sluzba-uklid" },
  { label: "Půjčovna strojů", href: "#sluzba-pujcovna" },
  { label: "Dárkové poukazy", href: "#sluzba-poukazky" },
];

export default function Footer() {
  const scrollTo = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer style={{ background: "#0a0a0a", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "4rem 2.5rem 2rem" }}>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "2.5rem", marginBottom: "2.5rem",
        }}>
          {/* Brand */}
          <div>
            <div style={{
              fontFamily: "var(--font-display,'DM Serif Display',Georgia,serif)",
              fontSize: "1.1rem", color: "#fff", letterSpacing: "-0.02em", marginBottom: 3,
            }}>Jiří Davídek</div>
            <div style={{
              fontSize: 8, fontWeight: 700, letterSpacing: "0.2em",
              textTransform: "uppercase", color: "#ea6c00", marginBottom: 14,
            }}>Čistící Služby</div>
            <p style={{ fontSize: 12, color: "rgba(255,255,255,0.3)", lineHeight: 1.7, margin: 0 }}>
              Precizní čistící práce v Plzni a okolí s osobní zárukou kvality od roku 2005.
            </p>
          </div>

          {/* Services */}
          <div>
            <div style={{
              fontSize: 9, textTransform: "uppercase", letterSpacing: "0.18em",
              fontWeight: 600, color: "rgba(255,255,255,0.28)", marginBottom: 16,
            }}>Služby</div>
            {footerLinks.map(l => (
              <button key={l.href} onClick={() => scrollTo(l.href)}
                style={{
                  display: "block", background: "none", border: "none",
                  cursor: "pointer", padding: "5px 0",
                  fontSize: 13, color: "rgba(255,255,255,0.45)",
                  textAlign: "left", fontFamily: "inherit",
                  transition: "color 0.2s",
                }}
                onMouseEnter={e => (e.currentTarget.style.color = "#ea6c00")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.45)")}
              >{l.label}</button>
            ))}
          </div>

          {/* Contact */}
          <div>
            <div style={{
              fontSize: 9, textTransform: "uppercase", letterSpacing: "0.18em",
              fontWeight: 600, color: "rgba(255,255,255,0.28)", marginBottom: 16,
            }}>Kontakt</div>
            {[
              { icon: "☎", value: "+420 606 513 793", href: "tel:+420606513793" },
              { icon: "@", value: "jdavidek@centrum.cz", href: "mailto:jdavidek@centrum.cz" },
              { icon: "◎", value: "Karlovarská 24, Plzeň", href: null },
            ].map(c => (
              <div key={c.value} style={{ display: "flex", alignItems: "flex-start", gap: 8, marginBottom: 10 }}>
                <span style={{ color: "rgba(234,108,0,0.6)", fontSize: 12, marginTop: 1 }}>{c.icon}</span>
                {c.href ? (
                  <a href={c.href} style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", textDecoration: "none" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "#ea6c00")}
                    onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.45)")}
                  >{c.value}</a>
                ) : (
                  <span style={{ fontSize: 13, color: "rgba(255,255,255,0.38)" }}>{c.value}</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "1.5rem",
          display: "flex", flexWrap: "wrap", justifyContent: "space-between",
          alignItems: "center", gap: 8,
          fontSize: 11, color: "rgba(255,255,255,0.2)",
        }}>
          <span>© {new Date().getFullYear()} Jiří Davídek – Čistící Služby. Všechna práva vyhrazena.</span>
          <a href="/ochrana-osobnich-udaju" style={{ color: "rgba(255,255,255,0.2)", textDecoration: "none" }}
            onMouseEnter={e => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
            onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.2)")}
          >Ochrana osobních údajů</a>
        </div>
      </div>
    </footer>
  );
}