"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const categories = ["Vše", "Vozidla", "Firma", "Domácnost"];

const references = [
  {
    name: "Martin K.", location: "Plzeň", category: "Vozidla", rating: 5,
    text: "Jiří se postaral o interiér mého auta lépe než profesionální autodetailingové studio. Sedačky vypadaly jako nové. Určitě se vrátím.",
    service: "Čištění interiéru vozidla"
  },
  {
    name: "Eva Horáčková", location: "Rokycany", category: "Domácnost", rating: 5,
    text: "Dárkový poukaz na úklid od manžela byl skvělý nápad. Jiří přišel včas, pracoval pečlivě a byt zářil čistotou. Doporučuji.",
    service: "Úklid domácnosti"
  },
  {
    name: "Tomáš Říha – TS Servis s.r.o.", location: "Plzeň – Skvrňany", category: "Firma", rating: 5,
    text: "Pro naše provozní prostory využíváme Jiřího pravidelně. Spolehlivost, kvalita a dochvilnost na sto procent. Doporučuji každé firmě.",
    service: "Pravidelný úklid provozovny"
  },
  {
    name: "Petra N.", location: "Plzeň – Doubravka", category: "Domácnost", rating: 5,
    text: "Terasa a dlažba před domem vypadaly opravdu zanedbaně. Po vysokotlakém čištění jsem je nepoznala. Skvělá práce!",
    service: "Vysokotlaké čištění dlažby"
  },
  {
    name: "Radek Blaha", location: "Starý Plzenec", category: "Vozidla", rating: 5,
    text: "Půjčil jsem si elektrocentrálu na celý víkend. Vše fungovalo perfektně, Jiří mi vše ukázal a byl dostupný na telefonu. Palec nahoru.",
    service: "Půjčovna – elektrocentrála"
  },
];

export default function References() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [active, setActive] = useState("Vše");

  const filtered = active === "Vše" ? references : references.filter(r => r.category === active);

  return (
    <section id="reference" ref={ref} style={{ padding: "5rem 2.5rem", background: "#f7f5f1" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>

        {/* Header */}
        <div style={{ marginBottom: "3rem" }}>
          <motion.span
            initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
            style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#ea6c00", display: "block", marginBottom: 12 }}
          >Reference</motion.span>

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "1.5rem" }}>
            <motion.h2
              initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontFamily: "var(--font-display,'DM Serif Display',Georgia,serif)",
                fontSize: "clamp(2rem,4vw,3rem)", lineHeight: 1, letterSpacing: "-0.025em",
                color: "#111", margin: 0, fontWeight: 400,
              }}
            >
              Co říkají<br /><em style={{ color: "#ea6c00", fontStyle: "italic" }}>naši klienti.</em>
            </motion.h2>

            {/* Filter tabs */}
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {categories.map(cat => (
                <button key={cat} onClick={() => setActive(cat)}
                  style={{
                    padding: "7px 16px", borderRadius: 20, border: "none",
                    cursor: "pointer", fontSize: 13, fontWeight: 600,
                    fontFamily: "inherit", transition: "all 0.2s",
                    background: active === cat ? "#ea6c00" : "#eeebe4",
                    color: active === cat ? "#fff" : "#666",
                    boxShadow: active === cat ? "0 6px 20px rgba(234,108,0,0.3)" : "none",
                  }}
                >{cat}</button>
              ))}
            </div>
          </div>
        </div>

        {/* Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35 }}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: 16,
            }}
          >
            {filtered.map(r => (
              <div key={r.name} style={{
                background: "#fff", border: "1px solid #ede9e0", borderRadius: 20,
                padding: 22, display: "flex", flexDirection: "column", gap: 12,
              }}>
                {/* Stars */}
                <div style={{ display: "flex", gap: 2 }}>
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <span key={i} style={{ color: "#ea6c00", fontSize: 12 }}>★</span>
                  ))}
                </div>

                {/* Quote mark */}
                <div style={{ fontSize: 32, lineHeight: 0.6, color: "rgba(234,108,0,0.12)", fontFamily: "Georgia,serif" }}>"</div>

                <p style={{ fontSize: 13, lineHeight: 1.65, color: "#555", margin: 0, flex: 1 }}>{r.text}</p>

                {/* Footer */}
                <div style={{
                  borderTop: "1px solid #f0ede8", paddingTop: 14,
                  display: "flex", alignItems: "center", justifyContent: "space-between",
                  gap: 8,
                }}>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 600, color: "#111" }}>{r.name}</div>
                    <div style={{ fontSize: 11, color: "#999" }}>{r.location}</div>
                  </div>
                  <span style={{
                    fontSize: 9, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em",
                    background: "#f0ede8", color: "#777",
                    padding: "3px 9px", borderRadius: 20, whiteSpace: "nowrap",
                  }}>{r.service}</span>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}