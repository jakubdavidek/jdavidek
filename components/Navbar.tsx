"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Sun, Moon, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Služby", href: "#sluzby" },
  { label: "O nás", href: "#o-nas" },
  { label: "Reference", href: "#reference" },
  { label: "Kontakt", href: "#kontakt" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDark = stored === "dark" || (!stored && prefersDark);
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleDark = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  const handleNav = (href: string) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  const navBg = scrolled
    ? dark ? "rgba(10,10,10,0.90)" : "rgba(247,245,241,0.90)"
    : "transparent";

  const navBorder = scrolled
    ? dark ? "0 1px 0 rgba(255,255,255,0.07)" : "0 1px 0 rgba(0,0,0,0.08)"
    : "none";

  return (
    <>
      <motion.header
        initial={{ y: -16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
          backdropFilter: scrolled ? "blur(20px) saturate(150%)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px) saturate(150%)" : "none",
          backgroundColor: navBg,
          boxShadow: navBorder,
          transition: "background-color 0.3s ease, box-shadow 0.3s ease",
        }}
      >
        <div style={{
          maxWidth: 1280, margin: "0 auto",
          padding: "0 2.5rem", height: 64,
          display: "flex", alignItems: "center", justifyContent: "space-between",
        }}>

          {/* Logo */}
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            style={{ background: "none", border: "none", cursor: "pointer", padding: 0, textAlign: "left" }}>
            <div style={{
              fontFamily: "var(--font-display, 'DM Serif Display', Georgia, serif)",
              fontSize: "1.1rem", color: dark ? "#fafaf8" : "#111",
              lineHeight: 1, letterSpacing: "-0.02em",
            }}>Jiří Davídek</div>
            <div style={{
              fontSize: 9, fontWeight: 700, letterSpacing: "0.18em",
              textTransform: "uppercase", color: "#ea6c00", marginTop: 2,
            }}>Čistící Služby</div>
          </button>

          {/* Desktop links */}
          <nav style={{ display: "flex", gap: 4, alignItems: "center" }}
            className="jd-nav-links">
            {navLinks.map((link) => (
              <button key={link.href} onClick={() => handleNav(link.href)}
                style={{
                  background: "none", border: "none", cursor: "pointer",
                  padding: "6px 14px", borderRadius: 20,
                  fontSize: 13, fontWeight: 500,
                  color: dark ? "#9a9a94" : "#555",
                  fontFamily: "inherit", transition: "all 0.15s",
                }}
                onMouseEnter={e => {
                  const t = e.currentTarget;
                  t.style.color = dark ? "#fafaf8" : "#111";
                  t.style.background = dark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)";
                }}
                onMouseLeave={e => {
                  const t = e.currentTarget;
                  t.style.color = dark ? "#9a9a94" : "#555";
                  t.style.background = "none";
                }}
              >{link.label}</button>
            ))}
          </nav>

          {/* Right */}
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <a href="tel:+420606513793"
              className="jd-nav-links"
              style={{
                display: "flex", alignItems: "center", gap: 5,
                fontSize: 12, fontWeight: 600, color: "#ea6c00", textDecoration: "none",
              }}>
              <Phone size={13} /> 606 513 793
            </a>

            <button onClick={toggleDark} aria-label="Přepnout téma"
              style={{
                width: 34, height: 34, borderRadius: "50%",
                border: "none", background: "none", cursor: "pointer",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: dark ? "#9a9a94" : "#666",
              }}>
              {dark ? <Sun size={15} /> : <Moon size={15} />}
            </button>

            <button onClick={() => handleNav("#kontakt")}
              className="jd-nav-links"
              style={{
                background: "#ea6c00", color: "#fff", border: "none",
                cursor: "pointer", padding: "8px 18px", borderRadius: 20,
                fontSize: 13, fontWeight: 600, fontFamily: "inherit",
                transition: "background 0.2s",
              }}
              onMouseEnter={e => (e.currentTarget.style.background = "#f97316")}
              onMouseLeave={e => (e.currentTarget.style.background = "#ea6c00")}
            >Poptávka</button>

            <button onClick={() => setMenuOpen(!menuOpen)}
              className="jd-mobile-btn" aria-label="Menu"
              style={{
                width: 34, height: 34, borderRadius: "50%",
                border: "none", background: "none", cursor: "pointer",
                display: "none", alignItems: "center", justifyContent: "center",
                color: dark ? "#9a9a94" : "#555",
              }}>
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            style={{
              position: "fixed", top: 64, left: 0, right: 0, zIndex: 40,
              backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)",
              backgroundColor: dark ? "rgba(10,10,10,0.96)" : "rgba(247,245,241,0.97)",
              boxShadow: dark ? "0 1px 0 rgba(255,255,255,0.07)" : "0 1px 0 rgba(0,0,0,0.08)",
              padding: "1.25rem 1.5rem 1.5rem",
              display: "flex", flexDirection: "column", gap: 4,
            }}
          >
            {navLinks.map((link) => (
              <button key={link.href} onClick={() => handleNav(link.href)}
                style={{
                  background: "none", border: "none", cursor: "pointer",
                  padding: "12px 16px", borderRadius: 12,
                  fontSize: 15, fontWeight: 500, textAlign: "left",
                  color: dark ? "#fafaf8" : "#222", fontFamily: "inherit",
                }}>{link.label}</button>
            ))}
            <div style={{
              borderTop: dark ? "1px solid rgba(255,255,255,0.08)" : "1px solid rgba(0,0,0,0.08)",
              marginTop: 8, paddingTop: 16,
              display: "flex", alignItems: "center", justifyContent: "space-between",
            }}>
              <a href="tel:+420606513793" style={{
                display: "flex", alignItems: "center", gap: 6,
                fontSize: 13, fontWeight: 600, color: "#ea6c00", textDecoration: "none",
              }}><Phone size={13} /> 606 513 793</a>
              <button onClick={() => handleNav("#kontakt")} style={{
                background: "#ea6c00", color: "#fff", border: "none",
                cursor: "pointer", padding: "8px 18px", borderRadius: 20,
                fontSize: 13, fontWeight: 600, fontFamily: "inherit",
              }}>Poptávka</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .jd-nav-links { display: none !important; }
          .jd-mobile-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
}