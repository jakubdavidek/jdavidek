"use client";

import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const references = [
  {
    name: "Martin K.", location: "Plzeň",
    text: "Jiří se postaral o interiér mého auta lépe než profesionální autodetailingové studio. Sedačky vypadaly jako nové. Určitě se vrátím.",
    service: "Čištění interiéru vozidla", rating: 5,
  },
  {
    name: "Eva Horáčková", location: "Rokycany",
    text: "Dárkový poukaz na úklid od manžela byl skvělý nápad. Jiří přišel včas, pracoval pečlivě a byt zářil čistotou. Doporučuji.",
    service: "Úklid domácnosti", rating: 5,
  },
  {
    name: "Tomáš Říha – TS Servis s.r.o.", location: "Plzeň – Skvrňany",
    text: "Pro naše provozní prostory využíváme Jiřího pravidelně. Spolehlivost, kvalita a dochvilnost na sto procent. Doporučuji každé firmě.",
    service: "Pravidelný úklid provozovny", rating: 5,
  },
  {
    name: "Petra N.", location: "Plzeň – Doubravka",
    text: "Terasa a dlažba před domem vypadaly opravdu zanedbaně. Po vysokotlakém čištění jsem je nepoznala. Skvělá práce!",
    service: "Vysokotlaké čištění dlažby", rating: 5,
  },
  {
    name: "Radek Blaha", location: "Starý Plzenec",
    text: "Půjčil jsem si elektrocentrálu na celý víkend. Vše fungovalo perfektně, Jiří mi vše ukázal a byl dostupný na telefonu. Palec nahoru.",
    service: "Půjčovna – elektrocentrála", rating: 5,
  },
];

const CARD_WIDTH = 320;
const CARD_GAP = 16;
const CARD_STEP = CARD_WIDTH + CARD_GAP;
const AUTO_SPEED = 0.5;

const looped = [...references, ...references, ...references];

export default function References() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<number>(0);
  const pausedRef = useRef(false);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    el.scrollLeft = references.length * CARD_STEP;

    const tick = () => {
      if (!pausedRef.current && el) {
        el.scrollLeft += AUTO_SPEED;
        if (el.scrollLeft >= references.length * 2 * CARD_STEP) {
          el.scrollLeft -= references.length * CARD_STEP;
        }
      }
      animRef.current = requestAnimationFrame(tick);
    };

    animRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animRef.current);
  }, []);

  const scroll = (dir: "left" | "right") => {
    trackRef.current?.scrollBy({ left: dir === "right" ? CARD_STEP * 2 : -CARD_STEP * 2, behavior: "smooth" });
  };

  return (
    <section id="reference" ref={sectionRef} style={{ padding: "5rem 0", background: "#f7f5f1", overflow: "hidden" }}>

      {/* Header */}
      <div style={{ padding: "0 2.5rem", maxWidth: 1280, margin: "0 auto" }}>
        <motion.span
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
          style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#ea6c00", display: "block", marginBottom: 12 }}
        >Reference</motion.span>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "1.5rem", marginBottom: "2.5rem" }}>
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
        </div>
      </div>

      {/* Carousel */}
      <div style={{ position: "relative" }}>
        <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 80, zIndex: 2, pointerEvents: "none", background: "linear-gradient(to right, #f7f5f1, transparent)" }} />
        <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: 80, zIndex: 2, pointerEvents: "none", background: "linear-gradient(to left, #f7f5f1, transparent)" }} />

        <div
          ref={trackRef}
          onMouseEnter={() => { pausedRef.current = true; }}
          onMouseLeave={() => { pausedRef.current = false; }}
          onTouchStart={() => { pausedRef.current = true; }}
          onTouchEnd={() => { pausedRef.current = false; }}
          className="refs-track"
          style={{
            display: "flex", gap: CARD_GAP, overflowX: "scroll",
            paddingLeft: "2.5rem", paddingRight: "2.5rem",
            paddingBottom: 8, paddingTop: 4,
            msOverflowStyle: "none", userSelect: "none",
          }}
        >
          {looped.map((r, i) => (
            <div
              key={`${r.name}-${i}`}
              style={{
                minWidth: CARD_WIDTH, maxWidth: CARD_WIDTH,
                background: "#fff", border: "1px solid #ede9e0",
                borderRadius: 20, padding: 24,
                display: "flex", flexDirection: "column", gap: 14,
                flexShrink: 0, boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
              }}
            >
              <div style={{ display: "flex", gap: 2 }}>
                {Array.from({ length: r.rating }).map((_, j) => (
                  <span key={j} style={{ color: "#ea6c00", fontSize: 14 }}>★</span>
                ))}
              </div>

              <div style={{ fontSize: 30, lineHeight: 0.5, color: "rgba(234,108,0,0.13)", fontFamily: "Georgia,serif", marginBottom: -4 }}>"</div>

              <p style={{ fontSize: 14, lineHeight: 1.7, color: "#444", margin: 0, flex: 1 }}>{r.text}</p>

              <div style={{ borderTop: "1px solid #f0ede8", paddingTop: 14, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8 }}>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: "#111", lineHeight: 1.3 }}>{r.name}</div>
                  <div style={{ fontSize: 11, color: "#bbb", marginTop: 2 }}>{r.location}</div>
                </div>
                <span style={{
                  fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em",
                  whiteSpace: "nowrap", background: "#f0ede8", color: "#999",
                  padding: "4px 10px", borderRadius: 20, flexShrink: 0,
                }}>{r.service}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .refs-track::-webkit-scrollbar { display: none; }
        .refs-track { scrollbar-width: none; }
      `}</style>
    </section>
  );
}
