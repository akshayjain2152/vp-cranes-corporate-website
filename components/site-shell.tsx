"use client";

import Image from "next/image";
import { FormEvent, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ArrowUp, Check, ChevronRight, Clock3, Mail, MapPin, Menu, Phone, Quote, Send, X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { clients, companySchema, contact, gallery, navigation, services, stats, strengths } from "@/data/site";
import { Button, Reveal, SectionHeading } from "@/components/ui";

function Logo({ light = false }: { light?: boolean }) { return <a href="#home" className="brand" aria-label="V P CRANES home"><Image src="/images/logo.png" alt="V P CRANES" width={46} height={46} priority /><span className={light ? "brand-light" : ""}>V P <b>CRANES</b><small>HEAVY LIFTING SOLUTIONS</small></span></a>; }

function Navbar() {
  const [open, setOpen] = useState(false); const [scrolled, setScrolled] = useState(false); const [active, setActive] = useState("#home");
  useEffect(() => { const update = () => { setScrolled(window.scrollY > 30); const sections = navigation.map(([, href]) => document.querySelector(href)); const current = sections.find((el) => el && el.getBoundingClientRect().top < window.innerHeight * .42 && el.getBoundingClientRect().bottom > window.innerHeight * .42); if (current) setActive(`#${current.id}`); }; update(); window.addEventListener("scroll", update, { passive: true }); return () => window.removeEventListener("scroll", update); }, []);
  const close = () => setOpen(false);
  return <header className={`nav-wrap ${scrolled ? "nav-scrolled" : ""}`}><nav className="nav container" aria-label="Main navigation"><Logo light={!scrolled} /><div className="desktop-nav">{navigation.map(([label, href]) => <a key={href} href={href} className={active === href ? "active" : ""}>{label}</a>)}</div><a
  className="nav-phone"
  href={contact.whatsapp}
  target="_blank"
  rel="noopener noreferrer"
  aria-label="WhatsApp"
>
  <FaWhatsapp size={24} />
</a><button className="menu-button" onClick={() => setOpen(!open)} aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open}>{open ? <X /> : <Menu />}</button></nav><AnimatePresence>{open && <motion.div className="mobile-menu" initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}><div className="container">{navigation.map(([label, href], index) => <motion.a key={href} href={href} onClick={close} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * .04 }}>{label}<ChevronRight size={17} /></motion.a>)}<a className="button" href={contact.phoneHref}>Call our team<Phone size={16}/></a></div></motion.div>}</AnimatePresence></header>;
}

function Hero() { return <section id="home" className="hero"><div className="hero-media" /><div className="hero-grid"/><div className="container hero-content"><Reveal><h1>Decades of lifting<br/><em>the impossible.</em></h1><p className="hero-copy">Trusted heavy-lifting and crane rental solutions for construction and infrastructure projects.</p><div className="hero-actions"><Button href="#services">Explore our capabilities</Button></div></Reveal></div></section> }

function ServiceGrid() { return <section id="services" className="section services"><div className="container"><SectionHeading eyebrow="What we do" title="One capable partner for every stage of the lift.">From fleet access to asset acquisition, our services are built around the realities of high-stakes work.</SectionHeading><div className="service-grid">{services.map(({ title, eyebrow, description, Icon, image }, i) => <Reveal key={title} delay={i * .08}><article className="service-card"><div className="service-image"><Image src={image} alt="V P CRANES equipment at work" fill sizes="(max-width: 850px) 100vw, 33vw" /><span>{eyebrow}</span></div><div className="service-body"><div className="icon-box"><Icon size={21}/></div><h3>{title}</h3><p>{description}</p><a href="#contact" aria-label={`Discuss ${title}`}><ArrowRight size={20}/></a></div></article></Reveal>)}</div></div></section> }

function About() { return <section id="about" className="section about"><div className="container about-grid"><Reveal className="about-photo"><Image src="https://www.vpcranes.com/images/29.jpg" alt="V P CRANES lifting equipment" fill sizes="(max-width: 900px) 100vw, 50vw"/><div className="photo-note"><b>Built on</b><span>field experience</span></div></Reveal><div className="about-copy"><SectionHeading eyebrow="About Us" title="Experience that shows up when it matters.">Founded in 2012, V P CRANES has become a trusted name in heavy lifting and crane solutions across India. We combine capable equipment with a practical, highly trained operations team to deliver safe, efficient and technically sound execution.</SectionHeading><Reveal><p>For EPC contractors, infrastructure developers and industrial clients, we plan every assignment around precision, reliability and accountability. Our goal is simple: be the partner teams can depend on when a complex lift leaves no room for compromise.</p><div className="values"><div><Check/> <span><b>Mission</b>To deliver dependable lifting solutions with care and conviction.</span></div><div><Check/> <span><b>Vision</b>To be the first call for demanding lifts across India.</span></div></div></Reveal></div></div></section> }

function Statistics() { return <section className="stat-section"><div className="container stats">{stats.map(([number, label]) => <Reveal key={label}><div><strong>{number}</strong><span>{label}</span></div></Reveal>)}</div></section> }

function WhyUs() { return <section id="why-us" className="section why"><div className="container"><SectionHeading eyebrow="Why Us" title="Clear thinking. Steady hands. Confident outcomes.">We bring the practical disciplines of a trusted field partner to every site, from the first review to safe completion.</SectionHeading><div className="strength-grid">{strengths.map(({ title, text, Icon }, i) => <Reveal key={title} delay={i * .06}><article><Icon size={24} strokeWidth={1.4}/><span>0{i + 1}</span><h3>{title}</h3><p>{text}</p></article></Reveal>)}</div></div></section> }

function Clientele() { return <section id="clientele" className="section clientele"><div className="container"><SectionHeading eyebrow="Trusted by teams on the ground" title="Relationships built lift by lift."/><div className="client-layout"><Reveal><blockquote><Quote size={36}/><p>“The best partnerships are made in the work: clear scope, capable people and a result everyone can stand behind.”</p><footer>V P CRANES <span>·</span> Our working philosophy</footer></blockquote></Reveal><div className="client-grid">{clients.map((client, i) => <Reveal key={client} delay={i * .025}><div><span>{client.split(" ").filter(Boolean).slice(0, 2).map((word) => word[0]).join("")}</span><p>{client}</p></div></Reveal>)}</div></div></div></section> }

function Gallery() { return <section className="gallery" aria-label="V P CRANES project gallery"><div className="gallery-intro"><p className="eyebrow eyebrow-light">In the field</p><h2>Strength in<br/><em>every frame.</em></h2><a href="#contact" className="text-link light">Plan your next lift <ArrowRight size={17}/></a></div><div className="gallery-grid">{gallery.map((image, i) => <div className={`gallery-image gallery-${i + 1}`} key={image}><Image src={`https://www.vpcranes.com/images/${image}`} alt="V P CRANES field project" fill sizes="(max-width: 700px) 50vw, 25vw"/></div>)}</div></section> }

function Contact() { const [sent, setSent] = useState(false); const submit = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); setSent(true); event.currentTarget.reset(); };
  return <section id="contact" className="section contact"><div className="container contact-grid"><div><SectionHeading eyebrow="Let’s discuss the lift" title="Bring the brief. We’ll bring the capability.">Tell us about your project, timeline and lifting requirement. Our team will respond with the next practical step.</SectionHeading><Reveal className="contact-details"><a href={contact.phoneHref}><Phone/><span><small>Call us</small>{contact.phone}</span></a>{contact.email ? <a href={`mailto:${contact.email}`}><Mail/><span><small>Email us</small>{contact.email}</span></a> : <div><Mail/><span><small>Email</small>Add the verified address in <code>data/site.ts</code> before launch.</span></div>}<div><MapPin/><span><small>Visit us</small>{contact.address}</span></div><div><Clock3/><span><small>Working hours</small>Monday–Saturday · 9:00 AM–6:00 PM</span></div></Reveal></div><Reveal className="form-card"><form onSubmit={submit}><div className="form-header"><span>Project enquiry</span><i/></div><label>Your name<input required name="name" placeholder="Enter your full name" /></label><label>Phone number<input required type="tel" name="phone" placeholder="Enter your phone number" /></label><label>How can we help?<textarea required name="message" placeholder="Tell us about your project or equipment requirement" rows={4}/></label><button type="submit" className="button">Send enquiry <Send size={16}/></button>{sent && <p className="form-success"><Check size={16}/> Thank you. Your enquiry is ready for our team.</p>}</form></Reveal></div></section> }

function MapSection() {
  return (
    <section id="map" className="map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.2069840905733!2d81.39109577535179!3d21.223639281056474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a29225b3db9823d%3A0x32d2ddff7431d70f!2sV.P.%20CRANES!5e0!3m2!1sen!2sin!4v1785218028414!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
        title="V P CRANES Location"
      />
    </section>
  );
}
function Footer() { const [showTop, setShowTop] = useState(false); useEffect(() => { const listener = () => setShowTop(window.scrollY > 600); window.addEventListener("scroll", listener); listener(); return () => window.removeEventListener("scroll", listener); }, []); return <><footer className="footer"><div className="container footer-grid"><div><Logo light/><p>Dependable heavy lifting, crane rental and equipment solutions for the work that matters.</p></div><div>
  <h3>Services</h3>

  <a href="#services">Crane Rental</a>

  <a href="#services">Pre-Owned Cranes & Parts</a>

  <a href="#services">New Crane Procurement</a>
</div><div><h3>Explore</h3>{navigation.slice(1, 5).map(([label, href]) => <a key={href} href={href}>{label}</a>)}</div></div><div className="container footer-bottom"><p>© {new Date().getFullYear()} V P CRANES. All rights reserved.</p><p>Heavy lifting, done right.</p></div></footer>{showTop && <button className="back-top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Back to top"><ArrowUp size={18}/></button>}</> }

export default function SiteShell() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <ServiceGrid />
        <About />
        <Statistics />
        <WhyUs />
        <Clientele />
        <Gallery />
        <Contact />
        <MapSection />
      </main>

      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(companySchema),
        }}
      />
    </>
  );
}
