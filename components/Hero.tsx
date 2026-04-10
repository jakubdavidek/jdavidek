"use client";

import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] },
});

export default function Hero() {
  const scrollTo = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section style={{
      background: "#0d0d0d",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      padding: "6rem 2.5rem 3.5rem",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Ambient glows */}
      <div style={{
        position: "absolute", top: "-20%", right: "-10%",
        width: "50%", height: "60%", borderRadius: "50%",
        background: "rgba(234,108,0,0.07)", filter: "blur(120px)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: "-10%", left: "-5%",
        width: "40%", height: "40%", borderRadius: "50%",
        background: "rgba(234,108,0,0.04)", filter: "blur(80px)",
        pointerEvents: "none",
      }} />

      {/* Content */}
      <div style={{ position: "relative", zIndex: 1, maxWidth: 1280, margin: "0 auto", width: "100%" }}>

        {/* Label row */}
        <motion.div {...fadeUp(0.1)} style={{
          display: "flex", alignItems: "center", gap: 12, marginBottom: "2rem",
        }}>
          <span style={{
            fontSize: 10, fontWeight: 700, letterSpacing: "0.18em",
            textTransform: "uppercase", color: "#ea6c00",
          }}>Plzeň &amp; okolí</span>
          <span style={{ width: 28, height: 1, background: "rgba(234,108,0,0.5)", display: "block", flexShrink: 0 }} />
          <span style={{
            fontSize: 10, fontWeight: 700, letterSpacing: "0.18em",
            textTransform: "uppercase", color: "#ea6c00",
          }}>Od roku 2005</span>
        </motion.div>

        {/* Headline */}
        <motion.h1 {...fadeUp(0.2)} style={{
          fontFamily: "var(--font-display, 'DM Serif Display', Georgia, serif)",
          fontSize: "clamp(3.5rem, 9vw, 7.5rem)",
          lineHeight: 0.95,
          letterSpacing: "-0.03em",
          color: "#fff",
          margin: "0 0 1.5rem",
          fontWeight: 400,
        }}>
          My<br />
          <em style={{ color: "#ea6c00", fontStyle: "italic" }}>vyčistíme,</em><br />
          Vy užívejte.
        </motion.h1>

        {/* Subtitle */}
        <motion.p {...fadeUp(0.35)} style={{
          fontSize: 15, fontWeight: 300,
          color: "rgba(255,255,255,0.55)",
          maxWidth: 380, lineHeight: 1.75,
          marginBottom: "2.25rem",
        }}>
          Jiří Davídek — živnostník s osobním přístupem a léty ověřenou precizností.
          Čištění vozů, fasád, domácností i firem. Každá zakázka, každý detail.
        </motion.p>

        {/* CTA */}
        <motion.div {...fadeUp(0.45)} style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: "3rem" }}>
          <button
            onClick={() => scrollTo("#kontakt")}
            style={{
              display: "flex", alignItems: "center", gap: 6,
              background: "#ea6c00", color: "#fff", border: "none",
              cursor: "pointer", padding: "12px 22px", borderRadius: 9999,
              fontSize: 14, fontWeight: 600, fontFamily: "inherit",
              transition: "background 0.2s, transform 0.2s",
            }}
            onMouseEnter={e => { e.currentTarget.style.background = "#f97316"; e.currentTarget.style.transform = "translateY(-1px)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "#ea6c00"; e.currentTarget.style.transform = "translateY(0)"; }}
          >
            <Sparkles size={15} /> Nezávazná poptávka
          </button>
          <button
            onClick={() => scrollTo("#sluzby")}
            style={{
              display: "flex", alignItems: "center", gap: 6,
              background: "transparent", color: "rgba(255,255,255,0.8)",
              border: "1px solid rgba(255,255,255,0.2)", cursor: "pointer",
              padding: "12px 22px", borderRadius: 9999,
              fontSize: 14, fontWeight: 500, fontFamily: "inherit",
              transition: "border-color 0.2s, color 0.2s",
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.5)"; e.currentTarget.style.color = "#fff"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)"; e.currentTarget.style.color = "rgba(255,255,255,0.8)"; }}
          >
            Prohlédnout služby
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          style={{ display: "flex", flexWrap: "wrap", gap: "2.5rem" }}
        >
          {[
            { value: "20+", label: "Let zkušeností" },
            { value: "1 000+", label: "Spokojených klientů" },
            { value: "5", label: "Kategorií služeb" },
            { value: "100%", label: "Osobní záruky" },
          ].map((stat) => (
            <div key={stat.label} style={{
              borderLeft: "2px solid #ea6c00",
              paddingLeft: 14,
            }}>
              <div style={{
                fontFamily: "var(--font-display, 'DM Serif Display', Georgia, serif)",
                fontSize: "1.6rem", color: "#fff", lineHeight: 1, fontWeight: 400,
              }}>{stat.value}</div>
              <div style={{
                fontSize: 9, letterSpacing: "0.15em", textTransform: "uppercase",
                color: "rgba(255,255,255,0.38)", marginTop: 4,
              }}>{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        onClick={() => scrollTo("#sluzby")}
        style={{
          position: "absolute", bottom: 28, left: "50%", transform: "translateX(-50%)",
          background: "none", border: "none", cursor: "pointer",
          display: "flex", flexDirection: "column", alignItems: "center", gap: 6,
          color: "rgba(255,255,255,0.3)", zIndex: 2,
        }}
      >
        <span style={{ fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase" }}>Scroll</span>
        <motion.div animate={{ y: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}>
          <ArrowDown size={13} />
        </motion.div>
      </motion.button>
    </section>
  );
}