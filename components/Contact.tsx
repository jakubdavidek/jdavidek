"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";

const serviceOptions = [
  "Čištění interiéru vozidla", "Vysokotlaké čištění",
  "Úklidové služby", "Půjčovna strojů", "Dárkový poukaz", "Jiné",
];

const contactItems = [
  { icon: "☎", label: "Telefon", value: "+420 606 513 793", href: "tel:+420606513793" },
  { icon: "@", label: "E-mail", value: "jdavidek@centrum.cz", href: "mailto:jdavidek@centrum.cz" },
  { icon: "◎", label: "Sídlo", value: "Karlovarská 24, Plzeň", href: "https://maps.google.com/?q=Karlovarsk%C3%A1+24+Plze%C5%88" },
  { icon: "◷", label: "Provozní hodiny", value: "Po–Pá 7:00–18:00, So po dohodě", href: null },
];

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(p => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(r => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%", background: "none", border: "none",
    borderBottom: "1px solid rgba(255,255,255,0.15)",
    padding: "8px 0", fontFamily: "inherit", fontSize: 13,
    color: "#fff", outline: "none", boxSizing: "border-box",
    transition: "border-color 0.2s",
  };

  const labelStyle: React.CSSProperties = {
    fontSize: 9, fontWeight: 700, letterSpacing: "0.15em",
    textTransform: "uppercase", color: "rgba(255,255,255,0.38)",
    display: "block", marginBottom: 6,
  };

  return (
    <section id="kontakt" ref={ref} style={{ padding: "5rem 2.5rem", background: "#111" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>

        {/* Header */}
        <motion.span
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
          style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#ea6c00", display: "block", marginBottom: 12 }}
        >Kontakt &amp; Poptávka</motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: "var(--font-display,'DM Serif Display',Georgia,serif)",
            fontSize: "clamp(2rem,4vw,3rem)", lineHeight: 1, letterSpacing: "-0.025em",
            color: "#fff", margin: "0 0 3rem", fontWeight: 400,
          }}
        >
          Pojďme na to<br /><em style={{ color: "#ea6c00", fontStyle: "italic" }}>společně.</em>
        </motion.h2>

        {/* Two columns */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "3rem",
        }}>

          {/* Left: contact info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            style={{ display: "flex", flexDirection: "column", gap: 10 }}
          >
            {contactItems.map(item => (
              <div key={item.label} style={{
                display: "flex", alignItems: "flex-start", gap: 12,
                padding: 14, borderRadius: 16,
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}>
                <div style={{
                  width: 34, height: 34, borderRadius: 12,
                  background: "rgba(234,108,0,0.15)", color: "#ea6c00",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 15, flexShrink: 0,
                }}>{item.icon}</div>
                <div>
                  <div style={{ fontSize: 9, textTransform: "uppercase", letterSpacing: "0.15em", fontWeight: 600, color: "rgba(255,255,255,0.3)", marginBottom: 3 }}>
                    {item.label}
                  </div>
                  {item.href ? (
                    <a href={item.href}
                      target={item.href.startsWith("https") ? "_blank" : undefined}
                      rel={item.href.startsWith("https") ? "noopener noreferrer" : undefined}
                      style={{ fontSize: 13, color: "rgba(255,255,255,0.75)", textDecoration: "none" }}
                    >{item.value}</a>
                  ) : (
                    <span style={{ fontSize: 13, color: "rgba(255,255,255,0.75)" }}>{item.value}</span>
                  )}
                </div>
              </div>
            ))}

            {/* Map placeholder */}
            <div style={{
              flex: 1, minHeight: 180, borderRadius: 16,
              background: "linear-gradient(135deg,#1a1a1a,#222)",
              border: "1px solid rgba(255,255,255,0.07)",
              display: "flex", flexDirection: "column",
              alignItems: "center", justifyContent: "center",
              gap: 6, padding: 16,
            }}>
              {/* TODO: <iframe src="https://www.google.com/maps/embed?..." className="w-full h-full border-0" /> */}
              <span style={{ fontSize: 22, opacity: 0.4 }}>📍</span>
              <span style={{ fontSize: 11, color: "rgba(255,255,255,0.25)", textAlign: "center", lineHeight: 1.6 }}>
                Karlovarská 24, Plzeň<br />
                <span style={{ fontSize: 10, opacity: 0.6 }}>(Google Maps bude doplněna)</span>
              </span>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            {submitted ? (
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 16, padding: "4rem 0", textAlign: "center" }}>
                <CheckCircle size={52} color="#ea6c00" />
                <h3 style={{ fontFamily: "var(--font-display,'DM Serif Display',Georgia,serif)", fontSize: "1.5rem", color: "#fff", margin: 0 }}>Zpráva odeslána!</h3>
                <p style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", maxWidth: 260, lineHeight: 1.65 }}>
                  Jiří Davídek Vás brzy kontaktuje. Obvykle odpovídá do 24 hodin v pracovní dny.
                </p>
                <button onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", service: "", message: "" }); }}
                  style={{ background: "none", border: "1px solid rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.7)", cursor: "pointer", padding: "8px 20px", borderRadius: 20, fontSize: 13, fontFamily: "inherit" }}>
                  Odeslat další zprávu
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate style={{ display: "flex", flexDirection: "column", gap: "1.75rem" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.75rem" }}>
                  <div>
                    <label style={labelStyle}>Jméno a příjmení *</label>
                    <input name="name" type="text" required value={form.name} onChange={handleChange}
                      placeholder="Jan Novák" style={inputStyle}
                      onFocus={e => e.target.style.borderBottomColor = "#ea6c00"}
                      onBlur={e => e.target.style.borderBottomColor = "rgba(255,255,255,0.15)"} />
                  </div>
                  <div>
                    <label style={labelStyle}>Telefon</label>
                    <input name="phone" type="tel" value={form.phone} onChange={handleChange}
                      placeholder="+420 600 000 000" style={inputStyle}
                      onFocus={e => e.target.style.borderBottomColor = "#ea6c00"}
                      onBlur={e => e.target.style.borderBottomColor = "rgba(255,255,255,0.15)"} />
                  </div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.75rem" }}>
                  <div>
                    <label style={labelStyle}>E-mail *</label>
                    <input name="email" type="email" required value={form.email} onChange={handleChange}
                      placeholder="jan@example.cz" style={inputStyle}
                      onFocus={e => e.target.style.borderBottomColor = "#ea6c00"}
                      onBlur={e => e.target.style.borderBottomColor = "rgba(255,255,255,0.15)"} />
                  </div>
                  <div>
                    <label style={labelStyle}>Typ služby</label>
                    <select name="service" value={form.service} onChange={handleChange}
                      style={{ ...inputStyle, cursor: "pointer" }}>
                      <option value="" style={{ background: "#111" }}>Vyberte službu…</option>
                      {serviceOptions.map(s => <option key={s} value={s} style={{ background: "#111" }}>{s}</option>)}
                    </select>
                  </div>
                </div>
                <div>
                  <label style={labelStyle}>Zpráva *</label>
                  <textarea name="message" required rows={4} value={form.message} onChange={handleChange}
                    placeholder="Popište prosím Vaši poptávku, termín a místo…"
                    style={{ ...inputStyle, resize: "none" }}
                    onFocus={e => e.target.style.borderBottomColor = "#ea6c00"}
                    onBlur={e => e.target.style.borderBottomColor = "rgba(255,255,255,0.15)"} />
                </div>
                <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
                  <button type="submit" disabled={loading}
                    style={{
                      display: "flex", alignItems: "center", gap: 7,
                      background: "#ea6c00", color: "#fff", border: "none",
                      cursor: loading ? "wait" : "pointer",
                      padding: "12px 22px", borderRadius: 9999,
                      fontSize: 14, fontWeight: 600, fontFamily: "inherit",
                      opacity: loading ? 0.8 : 1, transition: "opacity 0.2s",
                    }}
                  >
                    {loading ? "Odesílám…" : <><Send size={14} /> Odeslat poptávku</>}
                  </button>
                  <p style={{ fontSize: 11, color: "rgba(255,255,255,0.25)", maxWidth: 220, lineHeight: 1.55, margin: 0 }}>
                    Vaše údaje jsou zpracovány výhradně za účelem odpovědi dle GDPR.
                  </p>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}