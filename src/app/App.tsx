import svgPaths from "@/imports/Frame4/svg-5olu35h9os";
import imgFrame11 from "@/imports/Frame4/18a96053953990b76e475eadd12c168fd1c534dc.png";
import imgFrame12 from "@/imports/Frame4/9536d84941ef683669be561ac673c9012de09d71.png";
import imgFrame13 from "@/imports/Frame4/16f5bb65a6d2142c513faca3463d57fc9c201561.png";
import imgFrame14 from "@/imports/Frame4/1bc5bd3e41f9caaffd420b009e4fc53ce511f482.png";
import imgFrame15 from "@/imports/Frame4/956cfd2b445db3a455e902e5c318d1c7b373dd03.png";
import imgFrame19 from "@/imports/Frame4/fcde72c82aea8c31297b98a53b1aef64f4bbf69e.png";
import imgFrame20 from "@/imports/Frame4/e1e93fdea3e1b20a7fd00264c9e746898cf988f8.png";
import { useState, useEffect, ReactNode } from "react";
import { motion, AnimatePresence } from "motion/react";

const heroImages = [imgFrame11, imgFrame12, imgFrame13, imgFrame14, imgFrame15];
const F = "'Host Grotesk', sans-serif";

/* ─────────────────────────────────────────────────────────────────
   ALL CSS — layout controlled here so media queries can override
───────────────────────────────────────────────────────────────── */
const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Host+Grotesk:wght@400;500&display=swap');

  @keyframes marquee-scroll {
    from { transform: translateX(0); }
    to   { transform: translateX(-50%); }
  }

  html { scroll-behavior: smooth; }
  *, *::before, *::after { box-sizing: border-box; }

  /* ── Shared ── */
  .page          { background:#000; display:flex; flex-direction:column; align-items:center; width:100%; min-height:100%; }
  .section-px    { padding-left: clamp(20px, 11vw, 158px); padding-right: clamp(20px, 11vw, 158px); }
  .section-py    { padding-top: 186px; padding-bottom: 180px; }
  .col-center    { display:flex; flex-direction:column; align-items:center; }
  .w-full        { width:100%; }

  /* ── Navbar ── */
  .navbar-wrap   { width:100%; }
  .navbar-inner  { display:flex; align-items:center; justify-content:space-between; padding:13px 31px; position:relative; }
  .nav-links     { display:flex; gap:12px; position:absolute; left:50%; transform:translateX(-50%); white-space:nowrap; }
  .nav-link      { font-family:${F}; font-weight:400; font-size:18px; color:rgba(255,255,255,0.8); padding:0 6px; cursor:pointer; text-decoration:none; transition:color .2s; }
  .nav-link:hover { color:#CFFE00; }
  .nav-cta       { background:#CFFE00; border-radius:40px; padding:4px 16px; font-family:${F}; font-weight:400; font-size:18px; color:#000; white-space:nowrap; cursor:pointer; flex-shrink:0; text-decoration:none; transition:opacity .2s; }
  .nav-cta:hover { opacity:0.8; }

  /* ── Hero ── */
  .hero-wrap     { display:flex; flex-direction:column; gap:57px; align-items:center; width:100%; padding-top:clamp(40px,7vw,101px); }
  .hero-text     { display:flex; flex-direction:column; gap:32px; align-items:center; width:100%; padding:0 clamp(20px,11vw,158px); text-align:center; }
  .hero-title    { font-family:${F}; font-weight:500; font-size:clamp(28px,4.2vw,60px); color:#fff; letter-spacing:-1.2px; line-height:1; margin:0; width:100%; }
  .hero-sub      { font-family:${F}; font-weight:400; font-size:clamp(15px,1.4vw,20px); color:rgba(255,255,255,0.9); line-height:1.24; margin:0; }
  .hero-btn      { background:#CFFE00; border-radius:40px; padding:6px 18px; font-family:${F}; font-weight:500; font-size:18px; color:#000; white-space:nowrap; cursor:pointer; flex-shrink:0; text-decoration:none; transition:opacity .2s; }
  .hero-btn:hover { opacity:0.8; }
  .marquee-wrap  { width:100%; overflow:hidden; flex-shrink:0;
                   -webkit-mask-image:linear-gradient(to right,transparent 0%,black 12%,black 88%,transparent 100%);
                   mask-image:linear-gradient(to right,transparent 0%,black 12%,black 88%,transparent 100%); }
  .marquee-track { display:flex; gap:21.06px; width:max-content; animation:marquee-scroll 28s linear infinite; }
  .marquee-card  { width:209.552px; height:308.536px; border-radius:10.53px; overflow:hidden; flex-shrink:0; }
  .marquee-card img { width:100%; height:100%; object-fit:cover; display:block; }

  /* ── Statement ── */
  .statement-sec  { width:100%; }
  .statement-text { font-family:${F}; font-weight:500; font-size:clamp(18px,2.5vw,36px); color:#fff; text-align:center; letter-spacing:-0.72px; line-height:1.2; margin:0; }
  .yellow         { color:#CFFE00; }

  /* ── How section ── */
  .how-row       { display:flex; flex-direction:row; gap:48px; width:100%; align-items:stretch; }
  .how-col       { flex:1 0 0; min-width:0; display:flex; flex-direction:column; justify-content:space-between; gap:40px; }
  .how-img-wrap  { flex:1 0 0; min-width:0; border-radius:11px; overflow:hidden; min-height:clamp(240px,39vw,568px); }
  .how-img-wrap img { width:100%; height:100%; object-fit:cover; display:block; }
  .how-p         { font-family:${F}; font-weight:400; font-size:clamp(15px,1.67vw,24px); color:rgba(255,255,255,0.8); line-height:1.24; margin:0; }
  .how-p-yellow  { font-family:${F}; font-weight:400; font-size:clamp(15px,1.67vw,24px); color:#CFFE00; line-height:1.24; margin:0; }

  /* ── Proofs ── */
  .proof-wrap    { display:flex; flex-direction:column; gap:24px; width:100%; align-items:center; }
  .proof-img     { width:100%; border-radius:15px; overflow:hidden; height:clamp(180px,39.4vw,568px); position:relative; flex-shrink:0; }
  .proof-img img { width:100%; height:100%; object-fit:cover; display:block; }
  .proof-desc    { font-family:${F}; font-weight:400; font-size:clamp(16px,1.6vw,20px); color:rgba(255,255,255,0.85); text-align:center; max-width:800px; margin:0 auto; line-height:1.4; min-height: 56px; }
  .proof-nav     { display:flex; gap:16px; align-items:center; justify-content:center; margin-top:8px; }
  .proof-nav-btn { background:transparent; border:1px solid rgba(255,255,255,0.2); border-radius:50%; width:48px; height:48px; display:flex; align-items:center; justify-content:center; color:#fff; cursor:pointer; transition:all 0.2s; }
  .proof-nav-btn:hover { background:#CFFE00; color:#000; border-color:#CFFE00; }

  /* ── Bento / Service section ── */
  .bento-grid    { display:grid; grid-template-columns:1fr 1fr; grid-template-rows:auto auto; gap:20px; width:100%; }
  .bento-left    { grid-column:1; grid-row:1/3; border-radius:24px; overflow:hidden; border:2px solid #2a2a2a; display:flex; flex-direction:column; }
  .bento-img     { flex:1 1 0; min-height:260px; overflow:hidden; }
  .bento-img img { width:100%; height:100%; object-fit:cover; display:block; }
  .bento-body    { padding:28px 28px 32px; display:flex; flex-direction:column; gap:16px; background:#0d0d0d; }
  .bento-right   { grid-column:2; border-radius:24px; background:#0d0d0d; padding:32px 28px; display:flex; flex-direction:column; justify-content:space-between; gap:32px; min-height:260px; }
  .bento-right-1 { border:2px solid #CFFE00; box-shadow:0 0 28px rgba(207,254,0,0.12); }
  .bento-right-2 { border:2px solid #2a2a2a; }
  .card-title    { font-family:${F}; font-weight:500; font-size:clamp(20px,1.8vw,28px); color:#fff; margin:0; line-height:1.15; }
  .card-desc     { font-family:${F}; font-weight:400; font-size:15px; color:rgba(255,255,255,0.65); margin:0; line-height:1.45; }
  .card-divider  { width:40px; height:2px; background:#CFFE00; border-radius:2px; flex-shrink:0; }
  .inc-label     { font-family:${F}; font-weight:500; font-size:13px; letter-spacing:0.08em; text-transform:uppercase; margin:0; }
  .inc-label-y   { color:#CFFE00; }
  .inc-label-w   { color:#CFFE00; }
  .inc-item      { font-family:${F}; font-weight:400; font-size:15px; color:rgba(255,255,255,0.72); margin:0; line-height:1.5; }
  .badge-row     { display:flex; align-items:center; gap:8px; }
  .badge-dot     { width:8px; height:8px; border-radius:50%; background:#CFFE00; flex-shrink:0; }
  .badge-txt     { font-family:${F}; font-weight:500; font-size:12px; color:#CFFE00; margin:0; letter-spacing:0.1em; text-transform:uppercase; }

  /* ── CTA ── */
  .cta-box       { background:#CFFE00; border-radius:24px; width:100%; }
  .cta-inner     { display:flex; flex-direction:column; gap:32px; align-items:center; padding:110px clamp(28px,11vw,158px); }
  .cta-title     { font-family:${F}; font-weight:500; font-size:clamp(24px,3.6vw,52px); color:#000; letter-spacing:-1.04px; line-height:1; margin:0; width:100%; text-align:center; }
  .cta-sub       { font-family:${F}; font-weight:400; font-size:clamp(15px,1.4vw,20px); color:#000; line-height:1.24; margin:0; width:100%; text-align:center; }
  .cta-btn       { background:#000; border-radius:40px; padding:6px 18px; font-family:${F}; font-weight:500; font-size:18px; color:#CFFE00; white-space:nowrap; cursor:pointer; flex-shrink:0; text-decoration:none; transition:opacity .2s; }
  .cta-btn:hover { opacity:0.8; }

  /* ── Section heading shared ── */
  .sec-title     { font-family:${F}; font-weight:500; font-size:clamp(24px,3.6vw,52px); color:#fff; text-align:center; letter-spacing:-1.04px; line-height:1.2; margin:0; width:100%; }
  .sec-sub       { font-family:${F}; font-weight:400; font-size:clamp(15px,1.4vw,20px); color:rgba(255,255,255,0.9); line-height:1.24; margin:0; width:100%; }

  /* ══════════ TABLET  601–900px ══════════ */
  @media (max-width: 900px) {
    .section-py   { padding-top:120px; padding-bottom:120px; }

    /* How: stack */
    .how-row      { flex-direction:column; gap:36px; }
    .how-img-wrap { min-height:300px; }

    /* Bento: 1-col, all cards stack */
    .bento-grid   { grid-template-columns:1fr; grid-template-rows:auto; gap:16px; }
    .bento-left   { grid-column:1; grid-row:auto; }
    .bento-img    { min-height:280px; max-height:340px; }
    .bento-right  { grid-column:1; min-height:auto; }

    /* CTA */
    .cta-inner    { padding:72px clamp(24px,8vw,80px); }
  }

  /* ══════════ MOBILE  ≤600px ══════════ */
  @media (max-width: 600px) {
    /* Navbar */
    .nav-links    { display:none; }
    .navbar-inner { padding: 16px 20px; }
    .nav-cta      { font-size: 14px; padding: 6px 14px; }
    .navbar-wrap  { padding-top:8px; }

    /* Section padding */
    .section-px   { padding-left:20px; padding-right:20px; }
    .section-py   { padding-top:90px; padding-bottom:90px; }

    /* Hero */
    .hero-wrap    { gap:40px; padding-top:110px; margin-bottom:20vh; }
    .hero-text    { padding:0 20px; gap:24px; }
    .hero-btn     { font-size: 15px; padding: 8px 18px; }
    .marquee-card { width:160px !important; height:236px !important; }

    /* How */
    .how-row      { flex-direction:column; gap:28px; }
    .how-img-wrap { min-height:240px; }

    /* Bento */
    .bento-grid   { grid-template-columns:1fr; grid-template-rows:auto; gap:14px; }
    .bento-left   { grid-column:1; grid-row:auto; }
    .bento-img    { min-height:220px; max-height:280px; }
    .bento-body   { padding:22px 22px 26px; }
    .bento-right  { grid-column:1; min-height:auto; padding:24px 22px; gap:24px; }

    /* CTA */
    .cta-inner    { padding:56px 20px; gap:24px; }
  }

  /* ══════════ LARGE DESKTOP > 1400px ══════════ */
  @media (min-width: 1400px) {
    .bento-img    { min-height:320px; }
  }

  /* ── Footer ── */
  .footer              { width:100%; background:#000; border-top:1px solid rgba(255,255,255,0.08); position:relative; overflow:hidden; }
  .footer-top          { display:flex; flex-direction:row; gap:48px; padding:72px clamp(20px,11vw,158px) 56px; align-items:flex-start; justify-content:space-between; position:relative; z-index:1; }
  .footer-brand        { display:flex; flex-direction:column; gap:20px; max-width:280px; flex-shrink:0; }
  .footer-logo-row     { display:flex; align-items:center; gap:10px; }
  .footer-brand-name   { font-family:${F}; font-weight:500; font-size:20px; color:#fff; margin:0; }
  .footer-tagline      { font-family:${F}; font-weight:400; font-size:15px; color:rgba(255,255,255,0.55); line-height:1.55; margin:0; }
  .footer-socials      { display:flex; gap:14px; align-items:center; }
  .footer-social-btn   { width:36px; height:36px; border-radius:50%; border:1px solid rgba(255,255,255,0.15); display:flex; align-items:center; justify-content:center; cursor:pointer; transition:border-color .2s; flex-shrink:0; }
  .footer-social-btn:hover { border-color:#CFFE00; }
  .footer-social-btn svg { display:block; }

  .footer-links        { display:flex; flex-direction:row; gap:clamp(32px,5vw,80px); flex-shrink:0; }
  .footer-col          { display:flex; flex-direction:column; gap:20px; }
  .footer-col-title    { font-family:${F}; font-weight:500; font-size:15px; color:#fff; margin:0; letter-spacing:0.04em; }
  .footer-col-link     { font-family:${F}; font-weight:400; font-size:15px; color:rgba(255,255,255,0.5); margin:0; cursor:pointer; line-height:1; transition:color .15s; text-decoration:none; display:inline-block; width:fit-content; }
  .footer-col-link:hover { color:#CFFE00; }

  .footer-wordmark-wrap { width:100%; overflow:hidden; position:relative; z-index:0; line-height:0.85; }
  .footer-wordmark      { font-family:${F}; font-weight:500; font-size:clamp(80px,18vw,260px); color:transparent; -webkit-text-stroke:1px rgba(255,255,255,0.07); white-space:nowrap; text-align:center; letter-spacing:-0.02em; display:block; width:100%; user-select:none; padding:0 clamp(20px,4vw,60px); }

  .footer-bottom        { display:flex; align-items:center; justify-content:space-between; padding:20px clamp(20px,11vw,158px); border-top:1px solid rgba(255,255,255,0.06); position:relative; z-index:1; }
  .footer-copy          { font-family:${F}; font-weight:400; font-size:14px; color:rgba(255,255,255,0.3); margin:0; }
  .footer-copy-right    { font-family:${F}; font-weight:400; font-size:14px; color:rgba(255,255,255,0.3); margin:0; }

  @media (max-width: 900px) {
    .footer-top         { flex-direction:column; gap:40px; padding-bottom:40px; }
    .footer-brand       { max-width:100%; }
    .footer-links       { gap:32px; }
  }
  @media (max-width: 600px) {
    .footer-top         { padding:48px 20px 36px; gap:36px; }
    .footer-links       { flex-wrap:wrap; gap:36px 40px; }
    .footer-bottom      { flex-direction:column; gap:8px; padding:16px 20px; text-align:center; }
  }
`;

/* ─────────────── SCROLL REVEAL UTILITY ────────────────────────── */
type RevealDirection = "up" | "down" | "left" | "right" | "none";

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  style?: any;
  direction?: RevealDirection;
  distance?: number;
  duration?: number;
}

function ScrollReveal({ children, delay = 0, className = "", style = {}, direction = "up", distance = 80, duration = 1.2 }: ScrollRevealProps) {
  const getInitial = () => {
    switch (direction) {
      case "up": return { opacity: 0, y: distance };
      case "down": return { opacity: 0, y: -distance };
      case "left": return { opacity: 0, x: -distance };
      case "right": return { opacity: 0, x: distance };
      case "none": return { opacity: 0 };
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        hidden: getInitial(),
        visible: { opacity: 1, x: 0, y: 0, transition: { duration, ease: [0.22, 1, 0.36, 1], delay } }
      }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}

/* ─────────────── LOGO ─────────────────────────────────────────── */
function LogoMark() {
  return (
    <div style={{ width: 26, height: 33, position: "relative", flexShrink: 0 }}>
      <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} fill="none" viewBox="0 0 26.0002 33">
        <path d={svgPaths.p35c67b00} fill="#CFFE00" />
        <path clipRule="evenodd" d={svgPaths.p244ce300} fill="#FFFEFE" fillRule="evenodd" />
      </svg>
    </div>
  );
}

/* ─────────────── NAVBAR ───────────────────────────────────────── */
function Navbar() {
  return (
    <motion.div 
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 3.6 }}
      className="navbar-wrap" 
      style={{ background: "#000" }}
    >
      <div className="navbar-inner">
        <LogoMark />
        <div className="nav-links">
          <a href="#service" className="nav-link">Service</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#proofs" className="nav-link">Proofs</a>
        </div>
        <a href="#cta" className="nav-cta">Get Breakdown</a>
      </div>
    </motion.div>
  );
}

/* ─────────────── HERO ─────────────────────────────────────────── */
function Hero() {
  const doubled = [...heroImages, ...heroImages];
  return (
    <div className="hero-wrap">
      {/* Text + CTA */}
      <motion.div 
        initial={{ x: -120, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 3.8 }}
        className="hero-text"
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 20, width: "100%" }}>
          <p className="hero-title">We build creative ads that drive revenue</p>
          <p className="hero-sub">By combining cinematic storytelling with performance strategy to turn attention into measurable sales.</p>
        </div>
        <a href="#cta" className="hero-btn">Get Breakdown</a>
      </motion.div>
      {/* Marquee */}
      <motion.div 
        initial={{ x: 120, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 4.0 }}
        className="marquee-wrap"
      >
        <div className="marquee-track">
          {doubled.map((src, i) => (
            <div key={i} className="marquee-card">
              <img src={src} alt="" />
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

/* ─────────────── STATEMENT ────────────────────────────────────── */
function Statement() {
  return (
    <section className="statement-sec section-px" style={{ paddingTop: "clamp(120px,21vw,301px)", paddingBottom: "clamp(90px,16vw,240px)" }}>
      <ScrollReveal direction="up" distance={100} delay={0.1}>
        <p className="statement-text">
          Most ads fail because they don{"'"}t stop attention in the first few seconds. They look like ads, not content people actually want to watch. No attention means no engagement, no engagement means{" "}
          <span className="yellow">no revenue.</span>
        </p>
      </ScrollReveal>
    </section>
  );
}

/* ─────────────── HOW SECTION ──────────────────────────────────── */
function HowSection() {
  return (
    <section id="about" className="section-py section-px w-full">
      <div className="col-center" style={{ gap: "clamp(48px,8.5vw,123px)" }}>
        <ScrollReveal direction="down" distance={60}>
          <p className="sec-title">How we turn attention into revenue</p>
        </ScrollReveal>
        <div className="how-row">
          <ScrollReveal direction="left" distance={120} delay={0.2} className="how-col">
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <p className="how-p">We combine cinematic production with performance-driven thinking to create ads that don{"'"}t just look good — they perform.</p>
              <p className="how-p">Every project starts with understanding the audience, building a strong hook, and designing visuals that hold attention long enough to convert it into action.</p>
            </div>
            <p className="how-p-yellow">From concept to final edit, every frame is crafted with one goal: increase sales.</p>
          </ScrollReveal>
          <ScrollReveal direction="right" distance={120} delay={0.4} className="how-img-wrap">
            <img src={imgFrame19} alt="" />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

/* ─────────────── PROOFS ───────────────────────────────────────── */
const proofItems = [
  { img: imgFrame20, desc: "A high-conversion cinematic ad for a popular sports brand that skyrocketed engagement." },
  { img: imgFrame12, desc: "Performance-focused creative that increased sales by 45% within the first two weeks." },
  { img: imgFrame13, desc: "A sleek product showcase optimized for maximum social media conversion." },
  { img: imgFrame14, desc: "Dynamic storytelling combined with performance metrics for an unstoppable campaign." },
  { img: imgFrame15, desc: "An attention-grabbing hook that halved customer acquisition costs for this brand." }
];

function ProofsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % proofItems.length);
  const prev = () => setCurrentIndex((prev) => (prev === 0 ? proofItems.length - 1 : prev - 1));

  return (
    <section id="proofs" className="section-py section-px w-full">
      <div className="col-center" style={{ gap: "clamp(40px,7.5vw,108px)" }}>
        <ScrollReveal direction="left" distance={100}>
          <p className="sec-title">Ads that didn{"'"}t just look better — they performed better</p>
        </ScrollReveal>
        
        <ScrollReveal direction="up" distance={140} delay={0.3} className="proof-wrap">
          <div style={{ position: "relative", width: "100%", display: "flex", flexDirection: "column", gap: 24 }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="col-center"
                style={{ gap: 24, width: "100%" }}
              >
                <div className="proof-img">
                  <img src={proofItems[currentIndex].img} alt="Ad Example" />
                </div>
                <p className="proof-desc">{proofItems[currentIndex].desc}</p>
              </motion.div>
            </AnimatePresence>
          </div>
          
          <div className="proof-nav">
            <button className="proof-nav-btn" onClick={prev}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6" /></svg>
            </button>
            <button className="proof-nav-btn" onClick={next}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg>
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ─────────────── SERVICE / PRICING ───────────────────────────── */
function IncludesList({ items, yellow }: { items: string[]; yellow?: boolean }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <p className={`inc-label ${yellow ? "inc-label-y" : "inc-label-w"}`}>Includes</p>
      <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
        {items.map((t, i) => <p key={i} className="inc-item">{t}</p>)}
      </div>
    </div>
  );
}

function ServiceSection() {
  return (
    <section id="service" className="section-py section-px w-full">
      <div className="col-center" style={{ gap: "clamp(40px,5vw,72px)" }}>

        {/* Header */}
        <ScrollReveal direction="up" distance={60} className="col-center w-full" style={{ gap: 16, textAlign: "center" }}>
          <p className="sec-title">Choose how you want to grow.</p>
          <p className="sec-sub">From creating high-quality ad creatives to becoming your complete creative growth partner, we help brands turn attention into measurable results.</p>
        </ScrollReveal>

        {/* Bento grid */}
        <div className="bento-grid">

          {/* LEFT — large card */}
          <ScrollReveal direction="left" distance={120} delay={0.2} className="bento-left">
            <div className="bento-img">
              <img src={imgFrame11} alt="Creative Ads" />
            </div>
            <div className="bento-body">
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <p className="card-title">Creative Ads</p>
                <p className="card-desc">Premium ad creatives built to capture attention and elevate your brand.</p>
              </div>
              <div className="card-divider" />
              <IncludesList yellow items={["Ad concepts & creative direction", "Script & storyboards", "Professional video production", "Cinematic edited ads"]} />
            </div>
          </ScrollReveal>

          {/* TOP RIGHT — highlighted */}
          <ScrollReveal direction="right" distance={120} delay={0.4} className="bento-right bento-right-1">
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <div className="badge-row">
                <div className="badge-dot" />
                <p className="badge-txt">Most Popular</p>
              </div>
              <p className="card-title">Creative Growth Engine</p>
              <p className="card-desc">Performance-driven ad creatives built to attract customers and drive growth.</p>
            </div>
            <IncludesList yellow items={["Creative strategy", "Multiple ad variations", "Conversion-focused creatives", "Ad performance analysis"]} />
          </ScrollReveal>

          {/* BOTTOM RIGHT */}
          <ScrollReveal direction="right" distance={120} delay={0.6} className="bento-right bento-right-2">
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <p className="card-title">Growth Partner</p>
              <p className="card-desc">A dedicated creative team helping your brand scale through consistent campaigns.</p>
            </div>
            <IncludesList items={["Monthly creative planning", "Campaign concepts", "Regular content production", "Creative performance optimization"]} />
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}

/* ─────────────── CTA ──────────────────────────────────────────── */
function CTASection() {
  return (
    <section id="cta" className="section-py section-px w-full" style={{ paddingLeft: "clamp(20px,10.5vw,151px)", paddingRight: "clamp(20px,10.5vw,151px)" }}>
      <ScrollReveal direction="up" distance={120} delay={0.2} className="cta-box">
        <div className="cta-inner">
          <div style={{ display: "flex", flexDirection: "column", gap: 22, width: "100%" }}>
            <p className="cta-title">Ready to create ads that grow your business?</p>
            <p className="cta-sub">{"Let's turn your brand's story into cinematic ads designed to capture attention and drive results."}</p>
          </div>
          <a href="mailto:hello@weagle.co" className="cta-btn">Get Breakdown</a>
        </div>
      </ScrollReveal>
    </section>
  );
}

/* ─────────────── FOOTER ───────────────────────────────────────── */
function Footer() {
  return (
    <footer className="footer">
      {/* Top row */}
      <ScrollReveal direction="up" distance={80} delay={0.1} className="footer-top">
        {/* Brand block */}
        <div className="footer-brand">
          <div className="footer-logo-row">
            <LogoMark />
            <p className="footer-brand-name">Weagle</p>
          </div>
          <p className="footer-tagline">We build creative ads that capture attention and turn it into measurable revenue.</p>
          <div className="footer-socials">
            {/* Instagram */}
            <div className="footer-social-btn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="rgba(255,255,255,0.6)" stroke="none"/>
              </svg>
            </div>
            {/* Twitter / X */}
            <div className="footer-social-btn">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="rgba(255,255,255,0.6)">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </div>
            {/* LinkedIn */}
            <div className="footer-social-btn">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Link columns */}
        <div className="footer-links">
          <div className="footer-col">
            <p className="footer-col-title">Company</p>
            <a href="#service" className="footer-col-link">Services</a>
            <a href="#about" className="footer-col-link">About us</a>
            <a href="#proofs" className="footer-col-link">Case Studies</a>
            <a href="mailto:hello@weagle.co" className="footer-col-link">Contact</a>
          </div>
          <div className="footer-col">
            <p className="footer-col-title">Support</p>
            <a href="#about" className="footer-col-link">How it works</a>
            <a href="mailto:hello@weagle.co" className="footer-col-link">24/7 Chat support</a>
            <a href="mailto:hello@weagle.co" className="footer-col-link">hello@weagle.co</a>
          </div>
          <div className="footer-col">
            <p className="footer-col-title">Work</p>
            <a href="#proofs" className="footer-col-link">Portfolio</a>
            <a href="#proofs" className="footer-col-link">Reviews</a>
            <a href="mailto:hello@weagle.co" className="footer-col-link">Get a breakdown</a>
          </div>
        </div>
      </ScrollReveal>

      {/* Giant wordmark */}
      <ScrollReveal direction="up" distance={120} delay={0.3} className="footer-wordmark-wrap">
        <span className="footer-wordmark">Weagle</span>
      </ScrollReveal>

      {/* Bottom bar */}
      <ScrollReveal direction="none" delay={0.6} className="footer-bottom">
        <p className="footer-copy">© 2025 Weagle. All rights reserved.</p>
        <p className="footer-copy-right">Built to convert. Designed to impress.</p>
      </ScrollReveal>
    </footer>
  );
}

/* ─────────────── ROOT ─────────────────────────────────────────── */
export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 2600);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <style>{CSS}</style>
      
      <AnimatePresence>
        {loading && (
          <motion.div
            key="loader"
            style={{ position: 'fixed', inset: 0, zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}
          >
            {/* Top Shutter */}
            <motion.div
              initial={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ duration: 1.4, ease: [0.76, 0, 0.24, 1] }}
              style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '51%', background: '#030303' }}
            />
            {/* Bottom Shutter */}
            <motion.div
              initial={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ duration: 1.4, ease: [0.76, 0, 0.24, 1] }}
              style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '51%', background: '#030303' }}
            />
            
            {/* Expanding Line */}
            <motion.div
              initial={{ scaleX: 0, opacity: 1 }}
              animate={{ scaleX: 1 }}
              exit={{ opacity: 0, scaleY: 0 }}
              transition={{ scaleX: { duration: 1.5, ease: [0.76, 0, 0.24, 1] }, exit: { duration: 0.3 } }}
              style={{ position: 'absolute', top: 'calc(50% + clamp(24px, 4vw, 45px))', left: 0, right: 0, height: '2px', background: '#CFFE00', translateY: '-50%', zIndex: 10 }}
            />

            {/* Text Reveal */}
            <motion.div style={{ zIndex: 11 }}>
              <motion.h2
                initial={{ y: 100, rotate: 8, opacity: 0 }}
                animate={{ y: 0, rotate: 0, opacity: 1 }}
                exit={{ y: -50, opacity: 0, transition: { duration: 0.6 } }}
                transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.4 }}
                style={{ fontFamily: "'Host Grotesk', sans-serif", fontWeight: 500, fontSize: "clamp(24px, 4.2vw, 48px)", color: "#fff", margin: 0, letterSpacing: "-0.5px" }}
              >
                Ads that get <span style={{color: '#CFFE00'}}>Sales.</span>
              </motion.h2>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="page">
        <Navbar />
        <Hero />
        <Statement />
        <HowSection />
        <ProofsSection />
        <ServiceSection />
        <CTASection />
        <Footer />
      </div>
    </>
  );
}
