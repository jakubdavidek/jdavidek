"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const services = [
  {
    id: "uklid", img: "/uklid.jpg",
    title: "Úklidové Služby", subtitle: "Firmy & Domácnosti",
    description: "Pravidelný i jednorázový úklid kanceláří, provozoven nebo domácností. Flexibilní termíny, spolehlivost na prvním místě.",
    tags: ["Kanceláře", "Provozovny", "Domácnosti"],
    variant: "primary" as const,
  },
  {
    id: "interiery", img: "/interiery.jpg",
    title: "Čištění Interiérů Vozů", subtitle: "Manual Detailing",
    description: "Ruční detailing interiéru vašeho vozu – sedačky, koberce, plasty, klimatizace. Výsledek, který ucítíte i uvidíte.",
    tags: ["Sedačky & čalounění", "Koberce", "Plasty", "Klimatizace"],
    variant: "secondary" as const,
  },
  {
    id: "vysokotlak", img: "/vysokotlak.jpg",
    title: "Vysokotlaké Čištění", subtitle: "Exteriér & Plochy",
    description: "Fasády, zámkové dlažby, terasy a průmyslové plochy. Profesionální výsledky.",
    tags: ["Fasády", "Dlažby & terasy", "Průmyslové plochy"],
    variant: "small" as const,
  },
  {
    id: "poukazky", img: "/poukaz.jpg",
    title: "Dárkové Poukazy", subtitle: "Originální dar",
    description: "Darujte čistotu. Poukazy na libovolnou službu – perfektní dárek pro přátele, rodinu nebo obchodní partnery.",
    tags: ["Libovolná hodnota", "Elektronicky i fyzicky"],
    variant: "accent" as const,
  },
];


function Card({ svc, index }: { svc: typeof services[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const isPrimary = svc.variant === "primary";
  const isSecondary = svc.variant === "secondary";
  const isAccent = svc.variant === "accent";

  const bg = isAccent ? "#ea6c00" : "#fff";
  const border = isAccent ? "1px solid rgba(186,84,0,0.3)" : "1px solid #ede9e0";
  const textColor = isAccent ? "#fff" : "#111";
  const subColor = isAccent ? "rgba(255,255,255,0.65)" : "#ea6c00";
  const descColor = isAccent ? "rgba(255,255,255,0.82)" : "#666";
  const tagBg = isAccent ? "rgba(255,255,255,0.2)" : "#f0ede8";
  const tagColor = isAccent ? "rgba(255,255,255,0.9)" : "#888";
  const ctaColor = isAccent ? "#fff" : "#ea6c00";

  const gridArea = svc.id === "uklid" ? "uklid"
    : svc.id === "interiery" ? "interiery"
      : svc.id === "vysokotlak" ? "vysokotlak"
        : "poukazky";

  return (
    <motion.div
      ref={ref}
      id={`sluzba-${svc.id}`}
      className={`services-card services-card--${svc.variant}`}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
      style={{
        gridArea,
        background: bg,
        border,
        borderRadius: 28,
        overflow: "hidden",
        display: "flex",
        flexDirection: isPrimary ? "row" : "column",
        boxShadow: "0 2px 20px rgba(0,0,0,0.06)",
        transition: "transform 0.25s ease, box-shadow 0.25s ease",
        ...(isPrimary && { minHeight: 300 }),
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = "translateY(-3px)";
        e.currentTarget.style.boxShadow = "0 20px 50px -8px rgba(0,0,0,0.14)";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 2px 20px rgba(0,0,0,0.06)";
      }}
    >
      {/* Image */}
      <div
        className="services-img"
        style={{
          overflow: "hidden",
          position: "relative",
          background: "#1c1c1c",
          ...(isPrimary ? {
            flex: "0 0 48%",
            minHeight: 0,
          } : isSecondary ? {
            flex: "0 0 58%",
            minHeight: 0,
          } : {
            aspectRatio: "16/9",
            flex: "0 0 auto",
          }),
        }}
      >
        <img
          src={svc.img}
          alt={svc.title}
          style={{
            width: "100%", height: "100%",
            objectFit: "cover", objectPosition: "center",
            display: "block",
            transition: "transform 0.5s ease",
          }}
          onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.04)")}
          onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
        />
        {isAccent && (
          <div style={{ position: "absolute", inset: 0, background: "rgba(234,108,0,0.25)" }} />
        )}
      </div>

      {/* Content */}
      <div style={{
        padding: isPrimary ? "32px 38px" : isSecondary ? "22px 24px" : "18px 20px",
        display: "flex", flexDirection: "column", flex: 1,
        justifyContent: isPrimary ? "center" : "flex-start",
      }}>
        <div style={{ marginBottom: isPrimary ? 14 : 8 }}>
          <div style={{
            fontSize: 9, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase",
            color: subColor, marginBottom: 6,
          }}>{svc.subtitle}</div>
          <div style={{
            fontFamily: "var(--font-display,'DM Serif Display',Georgia,serif)",
            fontSize: isPrimary ? "clamp(1.6rem,2.3vw,2.1rem)" : isSecondary ? "1.15rem" : "1rem",
            lineHeight: 1.15, color: textColor, fontWeight: 400,
          }}>{svc.title}</div>
        </div>

        <p style={{
          fontSize: isPrimary ? 14 : 13, lineHeight: 1.65,
          color: descColor, marginBottom: 14, flex: 1,
        }}>{svc.description}</p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginBottom: 16 }}>
          {svc.tags.map(tag => (
            <span key={tag} style={{
              fontSize: 9, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase",
              background: tagBg, color: tagColor,
              padding: "3px 9px", borderRadius: 20,
            }}>{tag}</span>
          ))}
        </div>

      </div>
    </motion.div>
  );
}

export default function Services() {
  const headRef = useRef<HTMLDivElement>(null);
  const inView = useInView(headRef, { once: true, margin: "-60px" });

  return (
    <section id="sluzby" style={{ position: "relative", padding: "5rem 2.5rem", overflow: "hidden" }}>
      {/* Blurred parallax background */}
      <div style={{
        position: "absolute",
        inset: "-80px",
        backgroundImage: "url('/hero-cleaning.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        filter: "blur(48px)",
        transform: "scale(1.08)",
        zIndex: 0,
      }} />
      {/* Dark overlay */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: "rgba(0, 0, 0, 0.85)",
        zIndex: 1,
      }} />
      <style dangerouslySetInnerHTML={{ __html: `
        .services-grid {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          grid-template-areas:
            "uklid uklid interiery"
            "vysokotlak poukazky interiery";
          gap: 16px;
        }
        @media (max-width: 920px) {
          .services-grid {
            grid-template-columns: 1fr 1fr;
            grid-template-areas:
              "uklid uklid"
              "interiery interiery"
              "vysokotlak poukazky";
          }
          .services-card--primary {
            flex-direction: column !important;
            min-height: unset !important;
          }
          .services-card--primary .services-img {
            flex: 0 0 auto !important;
            aspect-ratio: 16/9 !important;
          }
          .services-card--secondary .services-img {
            flex: 0 0 auto !important;
            aspect-ratio: 4/3 !important;
          }
        }
        @media (max-width: 580px) {
          .services-grid {
            grid-template-columns: 1fr;
            grid-template-areas:
              "uklid"
              "interiery"
              "vysokotlak"
              "poukazky";
          }
        }
      ` }} />
      <div style={{ position: "relative", zIndex: 2, maxWidth: 1280, margin: "0 auto" }}>

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
                color: "#ffffff", margin: 0, fontWeight: 400,
              }}
            >Vše pod<br /><em style={{ color: "#ea6c00", fontStyle: "italic" }}>jednou střechou.</em>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
            style={{ fontSize: 12, color: "#888", maxWidth: 220, lineHeight: 1.65, textAlign: "right" }}
          >Každá služba nabídnuta s osobní zárukou dvacetiletou praxí za zády.</motion.p>
        </div>

        {/* Bento Grid */}
        <div className="services-grid">
          {services.map((svc, i) => <Card key={svc.id} svc={svc} index={i} />)}
        </div>

      </div>
    </section>
  );
}
