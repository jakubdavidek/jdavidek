import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import References from "@/components/References";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "https://jdavidek.cz" },
};

export default function Home() {
  return (
    <>
      {/* Accessibility: skip to main content */}
      <a href="#main-content" className="skip-link">
        Přejít na obsah
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Services />
        <About />
        <References />
        <Contact />
      </main>
      <Footer />
    </>
  );
}