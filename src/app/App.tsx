// src/App.tsx

import React, { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "motion/react";

// Images
import logo from "../imports/Logo.png";
import receptionImage from "../imports/image.png";

import image_Screenshot_2026_06_04_at_16_04_00 from "@/imports/Screenshot_2026-06-04_at_16.04.00.png";
import image_Screenshot_2026_06_04_at_16_03_40 from "@/imports/Screenshot_2026-06-04_at_16.03.40.png";
import image_Screenshot_2026_06_04_at_16_02_54 from "@/imports/Screenshot_2026-06-04_at_16.02.54.png";
import image_Screenshot_2026_06_04_at_16_02_24 from "@/imports/Screenshot_2026-06-04_at_16.02.24.png";

import image_Picture12 from "@/imports/Picture12.png";
import image_Picture8 from "@/imports/Picture8.png";
import image_Picture9_1 from "@/imports/Picture9-1.png";
import image_Picture4 from "@/imports/Picture4.png";
import image_Picture3_2 from "@/imports/Picture3-2.png";
import image_Picture11 from "@/imports/Picture11.png";

import image_Screenshot_2026_06_04_at_15_50_03 from "@/imports/Screenshot_2026-06-04_at_15.50.03.png";
import image_Screenshot_2026_06_04_at_15_48_41 from "@/imports/Screenshot_2026-06-04_at_15.48.41.png";
import image_Screenshot_2026_06_04_at_15_47_38 from "@/imports/Screenshot_2026-06-04_at_15.47.38.png";
import image_Screenshot_2026_06_04_at_15_46_58 from "@/imports/Screenshot_2026-06-04_at_15.46.58.png";
import image_Screenshot_2026_06_04_at_15_45_36 from "@/imports/Screenshot_2026-06-04_at_15.45.36.png";
import image_Screenshot_2026_06_04_at_15_41_15 from "@/imports/Screenshot_2026-06-04_at_15.41.15.png";

import image_Picture9 from "@/imports/Picture9.png";
import image_Picture5 from "@/imports/Picture5.png";
import image_Picture3_1 from "@/imports/Picture3-1.png";

import AnimatedGridBackground from "./components/AnimatedGridBackground";
import aiRobotBg from "@/imports/image.png";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import ContactSection from "./components/ContactSection";
import FloatingActions from "./components/FloatingActions";

/* ----------------------------
   HERO SECTION
----------------------------- */

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050b1f] text-white">
      <div className="absolute inset-0">
        <div className="absolute w-full h-full bg-gradient-to-br from-blue-900/40 via-transparent to-cyan-500/10" />

        <motion.div
          className="absolute w-[600px] h-[600px] bg-blue-500/20 blur-[120px] rounded-full top-[-200px] left-[-200px]"
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ repeat: Infinity, duration: 12 }}
        />

        <motion.div
          className="absolute w-[500px] h-[500px] bg-cyan-400/10 blur-[140px] rounded-full bottom-[-200px] right-[-200px]"
          animate={{ x: [0, -40, 0], y: [0, -30, 0] }}
          transition={{ repeat: Infinity, duration: 10 }}
        />
      </div>

      <div className="relative z-10 max-w-[1000px] text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold leading-tight"
        >
          POWERING THE <span className="text-cyan-400">AI</span> &{" "}
          <span className="text-blue-400">ELECTRIFICATION</span> ERA
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 0.4 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent my-6 origin-left"
        />

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-6 text-white/70 text-lg"
        >
          High-frequency transformers · Magnetic components · Intelligent power systems
        </motion.p>
      </div>
    </section>
  );
}

/* ----------------------------
   TECHNOLOGY DNA
----------------------------- */

export function TechnologyDNA() {
  const items = [
    "High-Frequency Transformer Design",
    "Magnetic Simulation & Optimization",
    "AI-Driven Manufacturing Systems",
  ];

  return (
    <section className="py-[120px] bg-[#070f25] text-white">
      <div className="max-w-[1100px] mx-auto px-6 text-center">
        <h2 className="text-3xl font-semibold">Technology DNA</h2>

        <p className="text-white/60 mt-4">
          The invisible systems behind modern electrification
        </p>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {items.map((item) => (
            <motion.div
              key={item}
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-xl border border-white/10 bg-white/5"
            >
              {item}
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-white/50">
          AI Systems → Power Electronics → Energy Conversion → Industry
        </div>
      </div>
    </section>
  );
}

/* ----------------------------
   SMART FACTORY
----------------------------- */

export function SmartFactory() {
  const stats = [
    ["98.5%", "Production Yield"],
    ["24/7", "Automated Lines"],
    ["50+", "Inspection Points"],
    ["100%", "Traceability"],
  ];

  return (
    <section className="py-[120px] bg-[#050b1f] text-white">
      <div className="max-w-[1100px] mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center">
          Smart Manufacturing System
        </h2>

        <div className="grid md:grid-cols-4 gap-6 mt-12 text-center">
          {stats.map(([num, label]) => (
            <div key={label} className="p-6 border border-white/10 rounded-xl">
              <div className="text-2xl font-bold text-cyan-400">{num}</div>
              <div className="text-white/60 text-sm mt-2">{label}</div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {[
            "Automated Production Lines",
            "AI Vision Inspection",
            "IoT Factory Monitoring",
          ].map((t) => (
            <div
              key={t}
              className="p-6 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition"
            >
              {t}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------
   APPLICATIONS
----------------------------- */

export function Applications() {
  const items = [
    "AI Data Centers",
    "Electric Vehicles",
    "Renewable Energy",
    "Industrial Automation",
  ];

  return (
    <section className="py-[120px] bg-[#070f25] text-white">
      <div className="max-w-[1100px] mx-auto px-6">
        <h2 className="text-3xl text-center font-semibold">
          Powering Global Industries
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {items.map((i) => (
            <div
              key={i}
              className="p-10 border border-white/10 rounded-xl hover:border-cyan-400/40 transition"
            >
              <h3 className="text-xl">{i}</h3>
              <p className="text-white/60 mt-2">
                High-efficiency power conversion systems
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------
   SPOTLIGHT CARD (FIXED)
----------------------------- */

function SpotlightCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();

    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      onMouseMove={handleMove}
      className={`relative overflow-hidden rounded-[32px] border border-blue-500/20 bg-[#050b1f] ${className}`}
    >
      <div
        className="pointer-events-none absolute w-[500px] h-[500px] blur-[120px] opacity-40 transition-all duration-100"
        style={{
          left: position.x - 250,
          top: position.y - 250,
          background:
            "radial-gradient(circle, rgba(96,165,250,.7) 0%, transparent 70%)",
        }}
      />
      {children}
    </div>
  );
}
export default function App() {
  const [activeSection, setActiveSection] = useState<string>("about");
  const [scrolled, setScrolled] = useState<boolean>(false);

  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 600], [0, 120]);
  const floatSlow = useTransform(scrollY, [0, 600], [0, -40]);

  const [searchOpen, setSearchOpen] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const searchRef = useRef<HTMLDivElement | null>(null);

  const sections = [
    "about",
    "products",
    "manufacturing",
    "certifications",
    "timeline",
    "contact",
  ];

  /* ----------------------------
     SCROLL LISTENER
  ----------------------------- */
  useEffect(() => {
    const handleScroll = () => {
      setSearchOpen(false);
      setScrolled(window.scrollY > 40);

      let current = "about";

      for (const id of sections) {
        const el = document.getElementById(id);
        if (!el) continue;

        const rect = el.getBoundingClientRect();

        if (rect.top <= 140) {
          current = id;
        }
      }

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ----------------------------
     OUTSIDE CLICK SEARCH CLOSE
  ----------------------------- */
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      if (searchRef.current && !searchRef.current.contains(target)) {
        setSearchOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  /* ----------------------------
     SEARCH LOGIC
  ----------------------------- */
  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== "Enter") return;

    const keyword = searchTerm.toLowerCase().trim();

    const sections = [
      {
        id: "products",
        score: 0,
        match: ["product", "products", "transformer", "inductor", "rf", "antenna", "filter", "energy"],
      },
      {
        id: "manufacturing",
        score: 0,
        match: ["factory", "manufacturing", "production", "assembly"],
      },
      {
        id: "certifications",
        score: 0,
        match: ["certificate", "certification", "iso", "iatf", "ul", "ecovadis"],
      },
      {
        id: "timeline",
        score: 0,
        match: ["company", "history", "about", "founded"],
      },
      {
        id: "contact",
        score: 0,
        match: ["contact", "email", "quote", "rfq"],
      },
    ];

    for (const section of sections) {
      for (const word of section.match) {
        if (keyword.includes(word)) {
          section.score += 1;
        }
      }
    }

    const best = sections.sort((a, b) => b.score - a.score)[0];
    const targetId = best.score > 0 ? best.id : "about";

    const el = document.getElementById(targetId);

    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });

      el.classList.add("ring-2", "ring-blue-400", "ring-offset-2");

      setTimeout(() => {
        el.classList.remove("ring-2", "ring-blue-400", "ring-offset-2");
      }, 1200);
    }
  };

  return (
    <>
      <AnimatedGridBackground />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="min-h-screen bg-gradient-to-b from-[#eaf1ff] to-[#f5f7fb]"
      >
      <nav
        className="sticky top-0 z-50 flex justify-between items-center transition-all duration-500"
        style={{
          padding: scrolled ? '12px 24px' : '18px 32px',
          background: scrolled
            ? 'rgba(255,255,255,0.55)'
            : 'linear-gradient(135deg, rgba(5,11,31,0.85) 0%, rgba(11,42,74,0.75) 50%, rgba(5,11,31,0.85) 100%)',
          backdropFilter: 'blur(24px) saturate(200%)',
          WebkitBackdropFilter: 'blur(24px) saturate(200%)',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.25)' : '1px solid rgba(255,255,255,0.08)',
          boxShadow: scrolled
            ? '0 4px 32px rgba(11,42,74,0.08), inset 0 1px 0 rgba(255,255,255,0.5)'
            : '0 4px 40px rgba(5,11,31,0.6), inset 0 1px 0 rgba(255,255,255,0.07)',
        }}
      >
        <div className="flex items-center gap-2.5">
          <img src={logo} alt="Chuanghua Industrial Logo" className="transition-all duration-500" style={{ height: scrolled ? '40px' : '52px', width: 'auto' }} />
          <span className="font-semibold transition-all duration-500" style={{ color: scrolled ? '#0b2a4a' : '#ffffff', fontSize: scrolled ? '14px' : '17px' }}>
            Chuanghua Industrial
          </span>
        </div>
        <div className="flex gap-1 items-center">
          {[
            { label: 'Home', href: '#about' },
            { label: 'Products', href: '#products' },
            { label: 'Manufacturing', href: '#manufacturing' },
            { label: 'Application', href: '#certifications' },
            { label: 'Company', href: '#timeline' },
            { label: 'Contact', href: '#contact' },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="relative rounded-full font-semibold no-underline transition-all duration-500"
              style={{
                padding: scrolled ? '6px 12px' : '8px 14px',
                fontSize: scrolled ? '13px' : '15px',
                color: scrolled ? '#0b2a4a' : 'rgba(255,255,255,0.92)',
                background: 'transparent',
              }}
            >
              {label}
            </a>
          ))}
          <div className="flex items-center ml-2" ref={searchRef}>
  <input
    type="text"
    placeholder="Search..."
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    onKeyDown={handleSearch}
    className={`transition-all duration-300 overflow-hidden rounded-full px-3 py-2 text-sm outline-none ${
      searchOpen
        ? "w-44 opacity-100"
        : "w-0 opacity-0 px-0"
    }`}
    style={{
      border: scrolled
        ? "1px solid rgba(11,42,74,0.2)"
        : "1px solid rgba(255,255,255,0.3)",
      background: scrolled
        ? "rgba(255,255,255,0.7)"
        : "rgba(255,255,255,0.1)",
      color: scrolled ? "#0b2a4a" : "#ffffff",
    }}
  />

  <button
    onClick={() => setSearchOpen(!searchOpen)}
    className="p-2 rounded-full transition-colors"
    style={{
      color: scrolled ? "#0b2a4a" : "#ffffff",
    }}
    aria-label="Search"
  >
    🔍
  </button>
        </div>
        </div>
      </nav>
      <motion.header
        style={{ y: bgY }}
        className="relative grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-10 items-center max-w-[1100px] mx-auto px-5 py-[90px]"
      >
  {/* LEFT CARD */}
  <motion.div
    style={{ y: floatSlow }}
    className="bg-gradient-to-br from-[#0b2a4a] to-[#1e3a8a] text-white p-10 rounded-[20px]"
  >
    <div className="flex items-center gap-4 mb-4">
      <img src={logo} alt="Chuanghua Industrial Logo" className="h-16 w-auto" />
    </div>

    <h1 className="m-0 text-[42px]">Chuanghua Industrial</h1>
    <p className="opacity-85 mt-2.5">
      Powering AI infrastructure, electric mobility, and next-generation energy systems
    </p>
  </motion.div>

  {/* RIGHT CARDS WITH BACKGROUND IMAGE */}
  <motion.div
  style={{ y: floatSlow }}
  className="relative p-5 space-y-4"
>
    {/* Background image */}
    <img
  src={aiRobotBg}
  alt="AI Robot Background"
  className="absolute inset-0 w-full h-full object-cover opacity-20 rounded-[24px] pointer-events-none"
/>

    {/* Overlay cards */}
    <div className="relative space-y-4">
      <div className="bg-[#0b2a4a]/90 border border-white/10 backdrop-blur-[12px] p-6 rounded-2xl shadow-lg text-white">
        <b className="text-lg">Global Manufacturing</b>
        <p className="text-sm mt-1">Multiple production bases in China</p>
      </div>

      <div className="bg-[#0b2a4a]/90 border border-white/10 backdrop-blur-[12px] p-6 rounded-2xl shadow-lg text-white">
        <b className="text-lg">R&D Driven</b>
        <p className="text-sm mt-1">Strong engineering & custom solutions</p>
      </div>

      <div className="bg-[#0b2a4a]/90 border border-white/10 backdrop-blur-[12px] p-6 rounded-2xl shadow-lg text-white">
        <b className="text-lg">Certified Quality</b>
        <p className="text-sm mt-1">ISO / IATF / UL / EcoVadis</p>
      </div>
    </div>
  </motion.div>
</motion.header>

      <section
  id="about"
  className="max-w-[1100px] mx-auto px-5 py-[60px]"
>
  <h2 className="text-2xl mb-[18px] text-gray-900 font-semibold">
    Company Overview
  </h2>

  {/* MAIN FEATURE CARD */}
  <div className="bg-gradient-to-br from-[#0b2a4a] to-[#1e3a8a] text-white rounded-[20px] overflow-hidden mb-5 shadow-xl">
    <ImageWithFallback
      src="https://images.unsplash.com/photo-1717386255767-52643970d483?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw4fHxpbmR1c3RyaWFsJTIwbWFudWZhY3R1cmluZyUyMGZhY3RvcnklMjBlbGVjdHJvbmljc3xlbnwxfHx8fDE3ODA1NTM3OTB8MA&ixlib=rb-4.1.0&q=80&w=1080"
      alt="Modern manufacturing facility"
      className="w-full h-80 object-cover opacity-90"
    />

    <div className="p-6">
      <p className="text-white/90 leading-relaxed">
        Huizhou Chuanghua Industrial Co., Ltd. specializes in electromagnetic devices,
        including LED drivers, automotive electronics, photovoltaic systems, inverters,
        and smart communication systems.
      </p>
    </div>
  </div>

  {/* STATS GRID (MATCHED STYLE) */}
  <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-4">

    <div className="bg-gradient-to-br from-[#0b2a4a] to-[#1e3a8a] text-white p-5 rounded-[18px] shadow-lg hover:scale-[1.02] transition-transform">
      <b className="text-white">Founded</b>
      <div className="text-white/80 mt-1">2010</div>
    </div>

    <div className="bg-gradient-to-br from-[#0b2a4a] to-[#1e3a8a] text-white p-5 rounded-[18px] shadow-lg hover:scale-[1.02] transition-transform">
      <b className="text-white">Employees</b>
      <div className="text-white/80 mt-1">1,000+</div>
    </div>

    <div className="bg-gradient-to-br from-[#0b2a4a] to-[#1e3a8a] text-white p-5 rounded-[18px] shadow-lg hover:scale-[1.02] transition-transform">
      <b className="text-white">Industry</b>
      <div className="text-white/80 mt-1">Magnetic Components</div>
    </div>

    <div className="bg-gradient-to-br from-[#0b2a4a] to-[#1e3a8a] text-white p-5 rounded-[18px] shadow-lg hover:scale-[1.02] transition-transform">
      <b className="text-white">Bases</b>
      <div className="text-white/80 mt-1">Multiple Factories</div>
    </div>

  </div>
</section>

      <section id="products" className="max-w-[1100px] mx-auto px-5 py-[60px]">
        <h2 className="text-2xl mb-[18px]">Product Categories</h2>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-3.5">
          <div className="bg-white/75 border border-slate-900/8 p-[18px] rounded-2xl backdrop-blur-[10px] transition-transform hover:-translate-y-0.5 hover:border-blue-500/30">


  <img
    src={image_Screenshot_2026_06_04_at_15_41_15}
    alt="LED Transformer"
    className="w-full h-40 object-cover"
  />

  <div className="p-[18px] font-medium text-[#0b2a4a]">
    LED Transformers
  </div>

</div>
        
<div className="bg-white/75 border border-slate-900/8 rounded-2xl overflow-hidden backdrop-blur-[10px] transition-transform hover:-translate-y-0.5 hover:border-blue-500/30">

  <img
    src={image_Screenshot_2026_06_04_at_15_41_15}
    alt="High Frequency Filters"
    className="w-full h-40 object-cover"
  />

  <div className="p-[18px] font-medium text-[#0b2a4a]">
    High Frequency Filters
  </div>

</div>
          
          <div className="bg-white/75 border border-slate-900/8 rounded-2xl backdrop-blur-[10px] overflow-hidden transition-transform hover:-translate-y-0.5 hover:border-blue-500/30">

  <img
    src={image_Screenshot_2026_06_04_at_15_45_36}
    alt="Automotive Inductors"
    className="w-full h-40 object-cover"
  />

  <div className="p-[18px] font-medium text-[#0b2a4a]">
    Automotive Inductors
  </div>

</div>
          <div className="bg-white/75 border border-slate-900/8 rounded-2xl backdrop-blur-[10px] overflow-hidden transition-transform hover:-translate-y-0.5 hover:border-blue-500/30">

  <img
    src={image_Screenshot_2026_06_04_at_15_46_58}
    alt="RF Antenna"
    className="w-full h-40 object-cover"
  />

  <div className="p-[18px] font-medium text-[#0b2a4a]">
    RF Antenna
  </div>

</div>
          <div className="bg-white/75 border border-slate-900/8 rounded-2xl backdrop-blur-[10px] overflow-hidden transition-transform hover:-translate-y-0.5 hover:border-blue-500/30">

  <img
    src={image_Screenshot_2026_06_04_at_15_48_41}
    alt="Energy Storage Parts"
    className="w-full h-40 object-cover"
  />

  <div className="p-[18px] font-medium text-[#0b2a4a]">
   Energy Storage Parts
  </div>

</div>
          <div className="bg-white/75 border border-slate-900/8 rounded-2xl backdrop-blur-[10px] overflow-hidden transition-transform hover:-translate-y-0.5 hover:border-blue-500/30">

  <img
    src={image_Screenshot_2026_06_04_at_15_47_38}
    alt="Al Server Power Trans"
    className="w-full h-40 object-cover"
  />

  <div className="p-[18px] font-medium text-[#0b2a4a]">
    Al Server Power Trans
  </div>

</div>
          <div className="bg-white/75 border border-slate-900/8 rounded-2xl backdrop-blur-[10px] overflow-hidden transition-transform hover:-translate-y-0.5 hover:border-blue-500/30">

  <img
    src={image_Screenshot_2026_06_04_at_15_50_03}
    alt="Heavy Truck Drive Trans"
    className="w-full h-40 object-cover"
  />

  <div className="p-[18px] font-medium text-[#0b2a4a]">
    Heavy Truck Drive Trans
  </div>

</div>

        </div>
      </section>

      <section id="manufacturing" className="max-w-[1100px] mx-auto px-5 py-[60px]">
        <h2>Smart Manufacturing System</h2>
<p className="text-slate-500 mt-2">
  Digitally controlled production with AI inspection and full traceability
</p>

        <div className="bg-white/75 border border-slate-900/8 p-[18px] rounded-2xl backdrop-blur-[10px] mb-3.5">Advanced automated production systems ensure consistent quality and scalable output.</div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-3.5">
          <div className="bg-white/75 border border-slate-900/8 rounded-2xl backdrop-blur-[10px] overflow-hidden transition-transform hover:-translate-y-0.5 hover:border-blue-500/30">

  <img
    src={image_Picture3_2}
    alt="Automated Winding"
    className="w-full h-40 object-cover"
  />

  <div className="p-[18px] font-medium text-[#0b2a4a]">
    Automated Winding
  </div>

</div>
          <div className="bg-white/75 border border-slate-900/8 rounded-2xl backdrop-blur-[10px] overflow-hidden transition-transform hover:-translate-y-0.5 hover:border-blue-500/30">

  <img
    src={image_Picture4}
    alt="Auto-Assemble Workshop"
    className="w-full h-40 object-cover"
  />

  <div className="p-[18px] font-medium text-[#0b2a4a]">
    Auto-Assemble Workshop
  </div>

</div>
          <div className="bg-white/75 border border-slate-900/8 rounded-2xl backdrop-blur-[10px] overflow-hidden transition-transform hover:-translate-y-0.5 hover:border-blue-500/30">

  <img
    src={image_Picture9_1}
    alt="Automated Winding Machines"
    className="w-full h-40 object-cover"
  />

  <div className="p-[18px] font-medium text-[#0b2a4a]">
    Automated Winding Machines
  </div>

</div>
          <div className="bg-white/75 border border-slate-900/8 rounded-2xl backdrop-blur-[10px] overflow-hidden transition-transform hover:-translate-y-0.5 hover:border-blue-500/30">

  <img
    src={image_Picture8}
    alt="Assemble workshop"
    className="w-full h-40 object-cover"
  />

  <div className="p-[18px] font-medium text-[#0b2a4a]">
    Assemble workshop
  </div>

</div>
        </div>
      </section>

      <section 
  id="certifications" 
  className="max-w-[1100px] mx-auto px-5 py-[80px]"
>

  {/* HEADER */}
  <div className="text-center mb-12">
    <div className="inline-flex px-4 py-2 rounded-full 
      bg-blue-500/10 border border-blue-500/20 
      text-[#0b2a4a] text-sm mb-4">
      Quality & Compliance
    </div>

    <h2 className="text-3xl font-semibold text-[#0b2a4a]">
      Certified Manufacturing Excellence
    </h2>

    <p className="text-slate-500 mt-3 max-w-[650px] mx-auto">
      International quality systems ensure reliability,
      traceability, and consistent performance across global markets.
    </p>
  </div>


  {/* CERTIFICATION BADGES */}
  <div className="
    grid 
    grid-cols-2 
    md:grid-cols-3 
    gap-4 
    mb-12
  ">

    {[
      ["ISO9001","Quality Management"],
      ["IATF16949","Automotive Standard"],
      ["ISO14001","Environmental Management"],
      ["UL","Safety Certification"],
      ["EcoVadis","Sustainability Rating"],
      ["High-Tech","Technology Enterprise"]
    ].map(([title,desc])=>(
      
      <div
        key={title}
        className="
        bg-white
        border border-slate-200
        rounded-2xl
        p-6
        text-center
        shadow-sm
        hover:-translate-y-1
        hover:shadow-xl
        transition-all
        "
      >

        <div className="
          w-14 h-14 
          mx-auto mb-4
          rounded-full
          bg-gradient-to-br
          from-blue-600
          to-cyan-400
          flex items-center justify-center
          text-white
          font-bold
        ">
          ✓
        </div>


        <h3 className="
          font-semibold 
          text-[#0b2a4a]
        ">
          {title}
        </h3>

        <p className="
          text-xs 
          text-slate-500 
          mt-2
        ">
          {desc}
        </p>

      </div>

    ))}

  </div>



  {/* CERTIFICATE DOCUMENTS */}
  <div>

    <h3 className="
      text-xl 
      font-semibold 
      text-[#0b2a4a]
      mb-6
    ">
      Certificate Documents
    </h3>


    <div className="
      grid 
      grid-cols-1 
      md:grid-cols-3 
      gap-6
    ">


      {[
        [image_Screenshot_2026_06_04_at_16_02_54,"ISO9001"],
        [image_Screenshot_2026_06_04_at_16_03_40,"IATF16949"],
        [image_Screenshot_2026_06_04_at_16_04_00,"ISO14001"]
      ].map(([img,title])=>(

        <div
          key={title}
          className="
          bg-white
          rounded-2xl
          overflow-hidden
          border border-slate-200
          hover:shadow-xl
          transition-all
          "
        >

          <img
            src={img}
            className="
            w-full
            h-56
            object-cover
            "
          />


          <div className="
            p-4
            text-center
            font-medium
            text-[#0b2a4a]
          ">
            {title}
          </div>

        </div>

      ))}


    </div>

  </div>


</section>

      <section id="timeline" className="max-w-[1100px] mx-auto px-5 py-[100px]">

  <div className="text-center mb-16">
    <h2 className="text-3xl font-semibold text-[#0b2a4a]">
      Company Journey
    </h2>

    <p className="text-slate-500 mt-3">
      From a magnetic component manufacturer to a global intelligent power solutions provider
    </p>
  </div>


  <div className="relative">

    {/* timeline line */}
    <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-blue-200 hidden md:block" />


    {[
  {
    year: "2010",
    title: "Company Founded",
    text: "Chuanghua Industrial was established, focusing on electromagnetic components and power solutions.",
    photo: receptionImage
  },
  {
    year: "2016",
    title: "ISO9001 Certified",
    text: "Quality management system implemented to support scalable manufacturing.",
    photo: image_Picture3_1
  },
  {
    year: "2019",
    title: "IATF16949 Automotive Certification",
    text: "Entered automotive electronics supply chain with high reliability requirements.",
    photo: image_Picture5
  },
  {
    year: "2020",
    title: "High-Tech Enterprise Recognition",
    text: "Expanded R&D capabilities and advanced manufacturing technology.",
    photo: image_Picture9
  },
  {
    year: "2025",
    title: "EcoVadis Bronze Rating",
    text: "Recognized for sustainability, responsible manufacturing and global standards.",
    photo: image_Picture4
  }
].map((item, index) => (

      <div
        key={item.year}
        className={`relative flex items-center mb-12 ${
          index % 2 === 0 
          ? "md:flex-row" 
          : "md:flex-row-reverse"
        }`}
      >

        {/* card */}
        <div className="w-full md:w-5/12">

          <div className="
          bg-white/80
          backdrop-blur-xl
          border border-slate-200
          rounded-3xl
          p-6
          shadow-sm
          hover:shadow-xl
          hover:-translate-y-1
          transition-all
          ">

            <div className="text-blue-600 font-bold text-2xl mb-2">
              {item.year}
            </div>

            <h3 className="text-lg font-semibold text-[#0b2a4a]">
              {item.title}
            </h3>

            <p className="text-slate-600 mt-3 leading-relaxed">
              {item.text}
            </p>

          </div>

        </div>


        {/* center dot */}
        <div className="
        hidden md:flex
        absolute
        left-1/2
        -translate-x-1/2
        w-5
        h-5
        rounded-full
        bg-cyan-400
        border-4
        border-white
        shadow-lg
        ">
        </div>


      </div>

    ))}

  </div>

</section>

      <section className="max-w-[1100px] mx-auto px-5 py-[60px]">
        <h2 className="text-2xl mb-[18px]">Our Facilities</h2>

        <div className="bg-white/10 border border-slate-900/8 rounded-2xl backdrop-blur-[10px] overflow-hidden">
          <img
            src={receptionImage}
            alt="Chuanghua Industrial Reception Area"
            className="w-full h-96 object-cover"
          />
          <div className="p-6 text-black">
            <h3 className="font-semibold text-lg mb-2">Welcome to Chuanghua Industrial</h3>
            <p className="text-black">
              Our modern reception area welcomes visitors and partners. We maintain professional facilities
              across our production bases in China, providing a comfortable environment for business collaboration.
            </p>
          </div>
        </div>
      </section>

      <section id="gallery" className="max-w-[1100px] mx-auto px-5 py-[60px]">
        <h2 className="text-2xl mb-[18px]">Photo Gallery</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white/10 border border-slate-900/8 rounded-2xl backdrop-blur-[10px] overflow-hidden transition-transform hover:-translate-y-0.5 hover:border-blue-500/30">
            <img
              src={receptionImage}
              alt="Chuanghua Industrial Reception Area"
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <p className="text-sm text-slate-600">Company Reception</p>
            </div>
          </div>

          <div className="bg-white/10 border border-slate-900/8 rounded-2xl backdrop-blur-[10px] overflow-hidden transition-transform hover:-translate-y-0.5 hover:border-blue-500/30">
            <ImageWithFallback
              src={image_Picture3_1}
              alt="Industrial machinery in manufacturing facility"
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <p className="text-sm text-slate-600">Manufacturing Equipment</p>
            </div>
          </div>

          <div className="bg-white/10 border border-slate-900/8 rounded-2xl backdrop-blur-[10px] overflow-hidden transition-transform hover:-translate-y-0.5 hover:border-blue-500/30">
            <ImageWithFallback
              src={image_Picture5}
              alt="Factory production line"
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <p className="text-sm text-slate-600">Production Line</p>
            </div>
          </div>

          <div className="bg-white/10 border border-slate-900/8 rounded-2xl backdrop-blur-[10px] overflow-hidden transition-transform hover:-translate-y-0.5 hover:border-blue-500/30">
            <ImageWithFallback
              src={image_Picture9}
              alt="Factory equipment and machinery"
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <p className="text-sm text-slate-600">Advanced Equipment</p>
            </div>
          </div>

          <div className="bg-white/10 border border-slate-900/8 rounded-2xl backdrop-blur-[10px] overflow-hidden transition-transform hover:-translate-y-0.5 hover:border-blue-500/30">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1581091212991-8891c7d4bd9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxpbmR1c3RyaWFsJTIwbWFudWZhY3R1cmluZyUyMGZhY3RvcnklMjBlbGVjdHJvbmljc3xlbnwxfHx8fDE3ODA1NTM3OTB8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Engineers working in automotive factory"
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <p className="text-sm text-slate-600">Quality Engineering Team</p>
            </div>
          </div>

          <div className="bg-white/75 border border-slate-900/8 rounded-2xl backdrop-blur-[10px] overflow-hidden transition-transform hover:-translate-y-0.5 hover:border-blue-500/30">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw2fHxpbmR1c3RyaWFsJTIwbWFudWZhY3R1cmluZyUyMGZhY3RvcnklMjBlbGVjdHJvbmljc3xlbnwxfHx8fDE3ODA1NTM3OTB8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Engineer using computer for quality control"
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <p className="text-sm text-slate-600">R&D Department</p>
            </div>
          </div>

          <div className="bg-white/75 border border-slate-900/8 rounded-2xl backdrop-blur-[10px] overflow-hidden transition-transform hover:-translate-y-0.5 hover:border-blue-500/30">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1716191300020-b52dec5b70a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw3fHxpbmR1c3RyaWFsJTIwbWFudWZhY3R1cmluZyUyMGZhY3RvcnklMjBlbGVjdHJvbmljc3xlbnwxfHx8fDE3ODA1NTM3OTB8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Electrical equipment production line"
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <p className="text-sm text-slate-600">Electrical Components Assembly</p>
            </div>
          </div>
        </div>
      </section>

      
<section className="max-w-[1100px] mx-auto px-5 py-[80px]">

  {/* BACKGROUND WRAPPER */}
  <div className="
    relative
    rounded-[28px]
    overflow-hidden
    p-10 md:p-14
    bg-[#050b1f]
  ">

    {/* soft gradient glow (smaller + subtle) */}
    <div className="
      absolute
      -top-20
      -right-20
      w-[280px]
      h-[280px]
      bg-cyan-400/10
      blur-[80px]
      rounded-full
    " />

    <div className="
      absolute
      -bottom-20
      -left-20
      w-[260px]
      h-[260px]
      bg-blue-500/10
      blur-[90px]
      rounded-full
    " />

    {/* CONTENT */}
    <div className="relative z-10 text-white">

      <h2 className="text-3xl font-semibold text-center mb-12">
        Powering Global Industries
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {[
          "AI Data Centers",
          "Electric Vehicles",
          "Renewable Energy",
          "Industrial Automation",
          "Telecommunications",
          "Energy Storage"
        ].map((item) => (
          <div
            key={item}
            className="
              p-6
              bg-white/5
              border border-white/10
              rounded-2xl
              hover:bg-white/10
              transition
            "
          >
            <div className="text-lg font-medium">{item}</div>
            <div className="text-white/60 text-sm mt-2">
              Power electronics & magnetic systems support
            </div>
          </div>
        ))}
      </div>

    </div>
  </div>

</section>
<ContactSection />
<footer className="bg-[#050b1f] text-white mt-20 border-t border-white/10">

  {/* TOP FADE LINE */}
  <div className="h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

  {/* MAIN FOOTER GRID */}
  <div className="max-w-[1100px] mx-auto px-5 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">

    {/* COMPANY */}
    <div>
      <div className="flex items-center gap-3 mb-4">
        <img src={logo} alt="Chuanghua Industrial Logo" className="h-12 w-auto" />
        <span className="font-semibold">Chuanghua Industrial</span>
      </div>

      <p className="text-white/70 text-sm leading-relaxed">
        Professional manufacturer of electromagnetic components, high-frequency transformers,
        EV inductors, and AI server power solutions.
      </p>
    </div>

    {/* CONTACT */}
    <div>
      <h3 className="text-white font-semibold mb-4">Our Address</h3>

      <p className="text-white/70 text-sm leading-relaxed">
        Building B, No. 62 Jinye Street, Xiaojinkou, Huicheng District<br />
        Huizhou City, Guangdong Province
      </p>

      <p className="text-white/70 text-sm mt-3">
        +00 000 000 000<br />
        sale@hzchuanghua.com‬
      </p>

      <button className="mt-4 px-4 py-2 bg-blue-500/10 hover:bg-blue-500/20 rounded-lg text-sm transition-colors">
        Contact Us
      </button>
    </div>

    {/* NEWS */}
    <div>
      <h3 className="text-white font-semibold mb-4">Latest News</h3>

      <ul className="space-y-2 text-sm text-white/70">
        <li>AI Server Transformer Production Expansion</li>
        <li>EV Inductor Series Upgrade Released</li>
        <li>New High-Frequency Materials Introduced</li>
        <li>Factory Capacity Increased by 30%</li>
      </ul>
    </div>

    {/* NAVIGATION */}
    <div>
      <h3 className="text-white font-semibold mb-4">Navigation</h3>

      <ul className="space-y-2 text-sm">
        <li><a href="#about" className="text-white/70 hover:text-white transition-colors">Technology</a></li>
        <li><a href="#products" className="text-white/70 hover:text-white transition-colors">Applications</a></li>
        <li><a href="#manufacturing" className="text-white/70 hover:text-white transition-colors">Smart Factory</a></li>
        <li><a href="#certifications" className="text-white/70 hover:text-white transition-colors">Products</a></li>
        <li><a href="#certifications" className="text-white/70 hover:text-white transition-colors">Quality</a></li>
        <li><a href="#certifications" className="text-white/70 hover:text-white transition-colors">About</a></li>
        <li><a href="#contact" className="text-white/70 hover:text-white transition-colors">Contact</a></li>
      </ul>
    </div>

  </div>

  {/* BOTTOM BAR */}
  <div className="border-t border-white/10 py-5 text-center text-xs text-white/50">
    © {new Date().getFullYear()} Chuanghua Industrial. All Rights Reserved.
  </div>

</footer>

</motion.div>
  </>
  );
}
