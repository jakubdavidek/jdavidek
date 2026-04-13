"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const qualities = [
  "Osobní přítomnost na každé zakázce",
  "Ověřené postupy a profesionální technika",
  "Stálí klienti i firemní partneři",
  "Flexibilní termíny, spolehlivý servis",
];

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="o-nas" ref={ref} style={{ padding: "5rem 2.5rem", background: "#f7f5f1" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "4rem", alignItems: "center",
        }}>

          {/* Image column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            style={{ position: "relative" }}
          >
            <div style={{
              borderRadius: 24, overflow: "hidden",
              aspectRatio: "4/5",
              position: "relative",
              background: "#1c1c1c",
            }}>
              <img
                src="/jiri-davidek-portrait.jpg"
                alt="Jiří Davídek při práci"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center",
                  display: "block",
                }}
              />
              {/* Jakmile budeš mít portrét, nahraď src za "/jiri-davidek-portrait.jpg" */}
            </div>

            {/* Badge */}
            <div style={{
              position: "absolute", bottom: -16, right: 20,
              background: "#ea6c00", color: "#fff",
              padding: "14px 18px", borderRadius: 18,
              boxShadow: "0 12px 30px rgba(234,108,0,0.3)",
            }}>
              <div style={{ fontFamily: "var(--font-display,'DM Serif Display',Georgia,serif)", fontSize: "1.75rem", lineHeight: 1 }}>20+</div>
              <div style={{ fontSize: 8, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", opacity: 0.9, marginTop: 3 }}>let praxe</div>
            </div>
          </motion.div>

          {/* Text column */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            style={{ paddingTop: "1.5rem" }}
          >
            <span style={{
              fontSize: 9, fontWeight: 700, letterSpacing: "0.2em",
              textTransform: "uppercase", color: "#ea6c00",
              display: "block", marginBottom: 16,
            }}>Příběh a hodnoty</span>

            <h2 style={{
              fontFamily: "var(--font-display,'DM Serif Display',Georgia,serif)",
              fontSize: "clamp(1.75rem,3vw,2.75rem)",
              lineHeight: 1.1, letterSpacing: "-0.02em",
              color: "#111", margin: "0 0 1.25rem", fontWeight: 400,
            }}>
              Preciznost není<br />
              <em style={{ color: "#ea6c00", fontStyle: "italic" }}>náhoda.</em>
            </h2>

            <p style={{ fontSize: 14, color: "#555", lineHeight: 1.75, marginBottom: "1rem" }}>
              Jmenuji se Jiří Davídek a čistící řemeslo je mojí vášní již přes dvě desetiletí.
              Začínal jsem s jednoduchým přesvědčením — že výsledek se pozná v detailu
              a že spokojený klient je nejlepší vizitkou.
            </p>
            <p style={{ fontSize: 14, color: "#555", lineHeight: 1.75, marginBottom: "2rem" }}>
              Každou zakázku beru osobně. Nejsem anonymní firma — jste v kontaktu přímo se mnou,
              od prvního telefonátu až po finální předání.
            </p>

            {/* Qualities */}
            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 2rem", display: "flex", flexDirection: "column", gap: 10 }}>
              {qualities.map(q => (
                <li key={q} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                  <span style={{
                    width: 18, height: 18, borderRadius: "50%",
                    background: "#ea6c00", flexShrink: 0, marginTop: 1,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 9, color: "#fff", fontWeight: 700,
                  }}>✓</span>
                  <span style={{ fontSize: 13, fontWeight: 500, color: "#333" }}>{q}</span>
                </li>
              ))}
            </ul>

            <a href="tel:+420606513793" style={{
              display: "inline-flex", alignItems: "center", gap: 6,
              background: "#ea6c00", color: "#fff", textDecoration: "none",
              padding: "12px 22px", borderRadius: 9999,
              fontSize: 14, fontWeight: 600, fontFamily: "inherit",
            }}>
              Zavolejte přímo mně
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}