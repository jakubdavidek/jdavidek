"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    id: "interiery", img: "/interiery.jpg",
    title: "Čištění Interiérů Vozů", subtitle: "Manual Detailing",
    description: "Ruční detailing interiéru vašeho vozu – sedačky, koberce, plasty, klimatizace. Výsledek, který ucítíte i uvidíte.",
    tags: ["Sedačky & čalounění", "Koberce", "Plasty", "Klimatizace"],
    accent: false, featured: true,
  },
  {
    id: "vysokotlak", img: "/vysokotlak.jpg",
    title: "Vysokotlaké Čištění", subtitle: "Exteriér & Plochy",
    description: "Fasády, zámkové dlažby, terasy, ploty i průmyslové plochy. Profesionální agregáty pro výsledky, na které je spolehnutí.",
    tags: ["Fasády", "Dlažby & terasy", "Průmyslové plochy"],
    accent: false, featured: false,
  },
  {
    id: "uklid", img: "/uklid.jpg",
    title: "Úklidové Služby", subtitle: "Firmy & Domácnosti",
    description: "Pravidelný i jednorázový úklid kanceláří, provozoven nebo domácností. Flexibilní termíny, spolehlivost na prvním místě.",
    tags: ["Kanceláře", "Provozovny", "Domácnosti"],
    accent: false, featured: false,
  },
  {
    id: "pujcovna", img: "/pujcovna.jpg",
    title: "Půjčovna Strojů", subtitle: "Technika na půjčení",
    description: "Zapůjčení elektrocentrál, vysokotlakých čističů a dalšího vybavení. Poradíme s výběrem i obsluhou.",
    tags: ["Elektrocentrály", "Vysokotlaké čističe", "Poradenství zdarma"],
    accent: false, featured: false,
  },
  {
    id: "poukazky", img: "/poukaz.jpg",
    title: "Dárkové Poukazy", subtitle: "Originální dar",
    description: "Darujte čistotu. Poukazy na libovolnou službu – perfektní dárek pro přátele, rodinu nebo obchodní partnery.",
    tags: ["Libovolná hodnota", "Elektronicky i fyzicky"],
    accent: true, featured: false,
  },
];

function Card({ svc, index }: { svc: typeof services[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      id={`sluzba-${svc.id}`}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
      style={{
        background: svc.accent ? "#ea6c00" : "#fff",
        border: svc.accent ? "1px solid rgba(186,84,0,0.3)" : "1px solid #ede9e0",
        borderRadius: 20,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        transition: "transform 0.25s ease, box-shadow 0.25s ease",
        // featured card spans 2 rows
        gridRow: svc.featured ? "span 2" : "span 1",
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = "translateY(-3px)";
        e.currentTarget.style.boxShadow = "0 20px 50px -8px rgba(0,0,0,0.14)";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      {/* Photo */}
      <div style={{
        overflow: "hidden",
        position: "relative",
        background: "#1c1c1c",
        // featured card: taller image
        flex: svc.featured ? "0 0 55%" : "0 0 auto",
        aspectRatio: svc.featured ? undefined : "16/9",
      }}>
        <img
          src={svc.img}
          alt={svc.title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
            display: "block",
            transition: "transform 0.5s ease",
          }}
          onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.04)")}
          onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
        />
        {svc.accent && (
          <div style={{ position: "absolute", inset: 0, background: "rgba(234,108,0,0.3)" }} />
        )}
      </div>

      {/* Content */}
      <div style={{ padding: svc.featured ? "24px 26px" : "18px 20px", display: "flex", flexDirection: "column", flex: 1 }}>
        <div style={{ marginBottom: 8 }}>
          <div style={{
            fontSize: 9, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase",
            color: svc.accent ? "rgba(255,255,255,0.65)" : "#ea6c00", marginBottom: 4,
          }}>{svc.subtitle}</div>
          <div style={{
            fontFamily: "var(--font-display,'DM Serif Display',Georgia,serif)",
            fontSize: svc.featured ? "1.35rem" : "1.05rem",
            lineHeight: 1.2, color: svc.accent ? "#fff" : "#111", fontWeight: 400,
          }}>{svc.title}</div>
        </div>

        <p style={{
          fontSize: 13, lineHeight: 1.65,
          color: svc.accent ? "rgba(255,255,255,0.82)" : "#666",
          marginBottom: 14, flex: 1,
        }}>{svc.description}</p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginBottom: 16 }}>
          {svc.tags.map(tag => (
            <span key={tag} style={{
              fontSize: 9, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase",
              background: svc.accent ? "rgba(255,255,255,0.2)" : "#f0ede8",
              color: svc.accent ? "rgba(255,255,255,0.9)" : "#888",
              padding: "3px 9px", borderRadius: 20,
            }}>{tag}</span>
          ))}
        </div>

        <button
          onClick={() => document.querySelector("#kontakt")?.scrollIntoView({ behavior: "smooth" })}
          style={{
            background: "none", border: "none", cursor: "pointer", padding: 0,
            display: "flex", alignItems: "center", gap: 4,
            fontSize: 12, fontWeight: 600,
            color: svc.accent ? "#fff" : "#ea6c00",
            fontFamily: "inherit", alignSelf: "flex-start",
          }}
        >Poptat službu <ArrowUpRight size={13} /></button>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const headRef = useRef<HTMLDivElement>(null);
  const inView = useInView(headRef, { once: true, margin: "-60px" });

  return (
    <section id="sluzby" style={{ padding: "5rem 2.5rem", background: "rgba(238,235,228,0.5)" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>

        {/* Header */}
        <div ref={headRef} style={{
          display: "flex", justifyContent: "space-between",
          alignItems: "flex-end", marginBottom: "3rem",
          flexWrap: "wrap", gap: "1.5rem",
        }}>
          <div>
            <motion.span
              initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
              style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#ea6c00", display: "block", marginBottom: 12 }}
            >Nabídka služeb</motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontFamily: "var(--font-display,'DM Serif Display',Georgia,serif)",
                fontSize: "clamp(2rem,4vw,3rem)", lineHeight: 1, letterSpacing: "-0.025em",
                color: "#111", margin: 0, fontWeight: 400,
              }}
            >Vše pod<br /><em style={{ color: "#ea6c00", fontStyle: "italic" }}>jednou střechou.</em>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
            style={{ fontSize: 12, color: "#888", maxWidth: 220, lineHeight: 1.65, textAlign: "right" }}
          >Každá služba nabídnuta s osobní zárukou Jiřího Davídka a dvacetiletou praxí za zády.</motion.p>
        </div>

        {/* Bento Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gridTemplateRows: "auto auto",
          gap: 16,
        }}
          className="services-bento"
        >
          {services.map((svc, i) => <Card key={svc.id} svc={svc} index={i} />)}
        </div>
      </div>
    </section>
  );
}