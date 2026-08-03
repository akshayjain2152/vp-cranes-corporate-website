"use client";

import Image from "next/image";
import { FormEvent, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Check, ChevronRight, ChevronLeft, Mail, MapPin, Menu, Phone, Quote, Send, X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { clients, companySchema, contact,navigation, services, stats, strengths } from "@/data/site";
import { Button, Reveal, SectionHeading } from "@/components/ui";

function Logo({ light = false }: { light?: boolean }) { return <a href="#home" className="brand" aria-label="V P CRANES home"><Image src="/images/logo.png" alt="V P CRANES" width={46} height={46} priority /><span className={light ? "brand-light" : ""}>V P <b>CRANES</b><small>HEAVY LIFTING SOLUTIONS</small></span></a>; }

function Navbar() {
  const [open, setOpen] = useState(false); const [scrolled, setScrolled] = useState(false); const [active, setActive] = useState("#home");
  useEffect(() => { const update = () => { setScrolled(window.scrollY > 30); const sections = navigation.map(([, href]) => document.querySelector(href)); const current = sections.find((el) => el && el.getBoundingClientRect().top < window.innerHeight * .42 && el.getBoundingClientRect().bottom > window.innerHeight * .42); if (current) setActive(`#${current.id}`); }; update(); window.addEventListener("scroll", update, { passive: true }); return () => window.removeEventListener("scroll", update); }, []);
  const close = () => setOpen(false);
  return <header className={`nav-wrap ${scrolled ? "nav-scrolled" : ""}`}><nav className="nav container" aria-label="Main navigation"><Logo light={!scrolled} /><div className="desktop-nav">{navigation.map(([label, href]) => <a key={href} href={href} className={active === href ? "active" : ""}>{label}</a>)}</div><a
  className="nav-whatsapp"
  href={contact.whatsapp}
  target="_blank"
  rel="noopener noreferrer"
  aria-label="WhatsApp"
>
  <FaWhatsapp size={24} />
</a><button className="menu-button" onClick={() => setOpen(!open)} aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open}>{open ? <X /> : <Menu />}</button></nav><AnimatePresence>{open && <motion.div className="mobile-menu" initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}><div className="container">{navigation.map(([label, href], index) => <motion.a key={href} href={href} onClick={close} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * .04 }}>{label}<ChevronRight size={17} /></motion.a>)}<a className="button" href={contact.phoneHref}>Call our team<Phone size={16}/></a></div></motion.div>}</AnimatePresence></header>;
}

function Hero() {
  return (
    <section id="home" className="hero">

      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/hero.mp4" type="video/mp4" />

        Your browser does not support the video tag.
      </video>

      <div className="hero-grid" />

      <div className="container hero-content">
        <Reveal>
          <h1>
            Decades of lifting
            <br />
            <em>the impossible.</em>
          </h1>

          <p className="hero-copy">
            Delivering trusted heavy lifting and crane solutions for
            infrastructure, industrial, and construction projects across India.
          </p>

          <div className="hero-actions">
            <Button href="#services">
              Explore our capabilities
            </Button>
          </div>
        </Reveal>
      </div>

    </section>
  );
}

function ServiceGrid() { return <section id="services" className="section services"><div className="container"><SectionHeading eyebrow="What we do" title="Complete Lifting Solutions. One Trusted Partner.">From crane rental to equipment procurement, we deliver comprehensive lifting solutions tailored to the needs of construction, infrastructure, and industrial projects.</SectionHeading><div className="service-grid">{services.map(({ title, eyebrow, description, Icon, image }, i) => <Reveal key={title} delay={i * .08}><article className="service-card"><div className="service-image"><Image src={image} alt="V P CRANES equipment at work" fill sizes="(max-width: 850px) 100vw, 33vw" /><span>{eyebrow}</span></div><div className="service-body">
  <div className="service-header">
    <h3>{title}</h3>

    <div className="icon-box">
      <Icon size={21} />
    </div>
  </div>

  <p>{description}</p>

  <a href="#contact" aria-label={`Discuss ${title}`}>
    <ArrowRight size={20} />
  </a>
</div></article></Reveal>)}</div></div></section> }

function About() { return <section id="about" className="section about"><div className="container about-grid"><Reveal className="about-photo"><Image
    src="/About Us/About1.png"
    alt="V P CRANES executing a heavy lifting project"
    fill
    sizes="(max-width: 900px) 100vw, 50vw"
/></Reveal><div className="about-copy"><SectionHeading eyebrow="About Us" title="Where Experience Meets Precision.">Established in 2012, V P CRANES has earned a reputation as a trusted provider of heavy lifting and crane solutions across India. Backed by a modern fleet and an experienced operations team, we deliver safe, efficient, and technically precise lifting solutions tailored to the needs of infrastructure, industrial, and construction projects.</SectionHeading><Reveal><p>We proudly serve EPC contractors, infrastructure developers, and industrial clients with lifting solutions built on precision, reliability, and accountability. Every project is carefully planned and executed to meet the highest standards of safety and efficiency, ensuring dependable performance even in the most demanding lifting operations.</p><div className="values"><div><Check/> <span><b>Mission</b>To deliver safe, reliable, and efficient lifting solutions through technical excellence, operational integrity, and an unwavering commitment to customer satisfaction.</span></div><div><Check/> <span><b>Vision</b>To be India's most trusted and preferred partner for heavy lifting and crane solutions, recognised for safety, reliability, and operational excellence.</span></div></div></Reveal></div></div></section> }

function Statistics() { return <section className="stat-section"><div className="container stats">{stats.map(([number, label]) => <Reveal key={label}><div><strong>{number}</strong><span>{label}</span></div></Reveal>)}</div></section> }

function WhyUs() { return <section id="why-us" className="section why"><div className="container"><SectionHeading eyebrow="Why V P Cranes" title="Built on Trust. Driven by Excellence.">Every project is backed by experienced professionals, dependable equipment, and a commitment to safety, precision, and operational excellence—ensuring reliable results from planning to completion.</SectionHeading><div className="strength-grid">{strengths.map(({ title, text, Icon }, i) => <Reveal key={title} delay={i * .06}><article><Icon size={24} strokeWidth={1.4}/><h3>{title}</h3><p>{text}</p></article></Reveal>)}</div></div></section> }

function Clientele() {
  return (
    <section id="clientele" className="section clientele">
      <div className="container">
        <SectionHeading
          eyebrow="Trusted Across Industries"
          title="Building Lasting Partnerships Through Excellence."
        />

        <div className="client-layout">
          <Reveal>
            <blockquote>
              <Quote size={36} />
              <p>
                “We believe lasting partnerships are built through integrity,
                technical excellence, and consistently delivering on our
                commitments.”
              </p>

              <footer>
                V P CRANES <span>·</span> Built on Trust
              </footer>
            </blockquote>
          </Reveal>

          <div className="client-slider">
            <div className="client-track">
              {[...clients, ...clients].map((client, index) => (
  <div
    className="client-card"
    key={`${client.name}-${index}`}
  >
    {client.logo ? (
      <Image
        className="client-logo"
        src={client.logo}
        alt={`${client.name} logo`}
        width={170}
        height={80}
      />
    ) : (
      <div className="client-name-only">
        {client.name}
      </div>
    )}

    {client.logo && <p>{client.name}</p>}
  </div>
))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  const [galleryPage, setGalleryPage] = useState(1);
  const [mobileImage, setMobileImage] = useState(0);

  const mobileImages = [
    "/grid1/image1.png",
    "/grid1/image2.png",
    "/grid1/image3.png",
    "/grid1/image4.png",
    "/grid1/image5.png",
    "/grid2/image6cropped.png",
    "/grid2/image7.png",
    "/grid2/image8.jpg",
  ];

  return (
    <section
      className="gallery"
      aria-label="V P CRANES project gallery"
    >
      {/* ================= LEFT SIDE ================= */}

      <div className="gallery-intro">
        <p className="eyebrow eyebrow-light">
          Projects in Action
        </p>

        <h2>
          Where Precision <br />
          <em>Meets Performance.</em>
        </h2>

        <a href="#contact" className="text-link light">
          Discuss Your Project <ArrowRight size={17} />
        </a>
      </div>

      {/* ================= RIGHT SIDE ================= */}

      <div className="gallery-wrapper">

        {/* ================================================= */}
        {/* DESKTOP GALLERY                                   */}
        {/* ================================================= */}

        <div className="gallery-desktop">

          {/* GRID 1 */}

          <div
            className={`gallery-grid ${
              galleryPage === 1 ? "gallery-active" : ""
            }`}
          >
            <div className="gallery-image image1">
              <Image
                src="/grid1/image1.png"
                alt="Project 1"
                fill
                sizes="100vw"
              />
            </div>

            <div className="gallery-image image2">
              <Image
                src="/grid1/image2.png"
                alt="Project 2"
                fill
                sizes="100vw"
              />
            </div>

            <div className="gallery-image image3">
              <Image
                src="/grid1/image3.png"
                alt="Project 3"
                fill
                sizes="100vw"
              />
            </div>

            <div className="gallery-image image4">
              <Image
                src="/grid1/image4.png"
                alt="Project 4"
                fill
                sizes="100vw"
              />
            </div>

            <div className="gallery-image image5">
              <Image
                src="/grid1/image5.png"
                alt="Project 5"
                fill
                sizes="100vw"
              />
            </div>
          </div>

          {/* GRID 2 */}

          <div
            className={`gallery-grid gallery-grid-2 ${
              galleryPage === 2 ? "gallery-active" : ""
            }`}
          >
            <div className="gallery-image">
              <Image
                src="/grid2/image6.png"
                alt="Project 6"
                fill
                sizes="100vw"
              />
            </div>

            <div className="gallery-image">
              <Image
                src="/grid2/image7.png"
                alt="Project 7"
                fill
                sizes="100vw"
              />
            </div>

            <div className="gallery-image">
              <Image
                src="/grid2/image8.jpg"
                alt="Project 8"
                fill
                sizes="100vw"
              />
            </div>
          </div>

          {/* Desktop Navigation */}

          <div className="gallery-navigation">

            {galleryPage === 2 && (
              <button
                className="gallery-arrow prev"
                onClick={() => setGalleryPage(1)}
                aria-label="Previous gallery"
              >
                <ChevronLeft />
              </button>
            )}

            {galleryPage === 1 && (
              <button
                className="gallery-arrow next"
                onClick={() => setGalleryPage(2)}
                aria-label="Next gallery"
              >
                <ChevronRight />
              </button>
            )}

          </div>

        </div>

        {/* ================================================= */}
        {/* MOBILE GALLERY                                    */}
        {/* ================================================= */}

        <div className="gallery-mobile">

          <AnimatePresence mode="wait">

            <motion.div
              key={mobileImage}
              className="gallery-mobile-image"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.15}
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -80 }}
              transition={{ duration: 0.25 }}
              onDragEnd={(event, info) => {

                if (info.offset.x < -80) {
                  setMobileImage((prev) =>
                    prev === mobileImages.length - 1
                      ? 0
                      : prev + 1
                  );
                }

                if (info.offset.x > 80) {
                  setMobileImage((prev) =>
                    prev === 0
                      ? mobileImages.length - 1
                      : prev - 1
                  );
                }

              }}
            >

              <img
                src={mobileImages[mobileImage]}
                alt={`Project ${mobileImage + 1}`}
                className="gallery-mobile-img"
              />

            </motion.div>

          </AnimatePresence>

          <div className="gallery-mobile-controls">

            <button
              className="gallery-arrow-mobile"
              onClick={() =>
                setMobileImage((prev) =>
                  prev === 0
                    ? mobileImages.length - 1
                    : prev - 1
                )
              }
              aria-label="Previous image"
            >
              <ChevronLeft />
            </button>

            <div className="gallery-dots">

              {mobileImages.map((_, index) => (

                <span
                  key={index}
                  className={
                    mobileImage === index
                      ? "active"
                      : ""
                  }
                  onClick={() => setMobileImage(index)}
                />

              ))}

            </div>

            <button
              className="gallery-arrow-mobile"
              onClick={() =>
                setMobileImage((prev) =>
                  prev === mobileImages.length - 1
                    ? 0
                    : prev + 1
                )
              }
              aria-label="Next image"
            >
              <ChevronRight />
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}
function Contact() {
  const handleWhatsApp = () => {
    const form = document.querySelector(
      "#contact form"
    ) as HTMLFormElement;

    if (!form) return;

    const formData = new FormData(form);

    const name = (formData.get("name") as string)?.trim();
    const phone = (formData.get("phone") as string)?.trim();
    const message = (formData.get("message") as string)?.trim();

    if (!name || !phone || !message) {
      alert("Please fill in all the fields.");
      return;
    }

    const whatsappMessage = `NEW PROJECT ENQUIRY

Hello V P CRANES,

I am interested in your heavy lifting and crane solutions. Kindly find my enquiry below.

----------------------------------------

Name
${name}

Contact Number
${phone}

Project Requirements
${message}

----------------------------------------

I would appreciate it if your team could contact me to discuss my requirements.

Thank you,

${name}`;

    window.open(
      `https://wa.me/919893180014?text=${encodeURIComponent(
        whatsappMessage
      )}`,
      "_blank"
    );

    form.reset();
  };

  return (
    <section id="contact" className="section contact">
      <div className="container contact-grid">

        <div>
          <SectionHeading
            eyebrow="Project Enquiries"
            title="Your Project. Our Expertise."
          >
            Whether you're planning a new project, require crane rental,
            or need expert lifting solutions, our team is ready to
            understand your requirements and provide the right solution.
          </SectionHeading>

          <Reveal className="contact-details">

            <a href={contact.phoneHref}>
              <Phone />
              <span>
                <small>Call us</small>
                {contact.phone}
              </span>
            </a>

            {contact.email ? (
              <a href={`mailto:${contact.email}`}>
                <Mail />
                <span>
                  <small>Email us</small>
                  {contact.email}
                </span>
              </a>
            ) : (
              <div>
                <Mail />
                <span>
                  <small>Email</small>
                </span>
              </div>
            )}

            <div>
              <MapPin />
              <span>
                <small>Visit us</small>
                {contact.address}
              </span>
            </div>

          </Reveal>
        </div>

        <Reveal className="form-card">

          <form>

            <div className="form-header">
              <span>Project enquiry</span>
              <i />
            </div>

            <label>
              Your name
              <input
                required
                name="name"
                placeholder="Enter your full name"
              />
            </label>

            <label>
              Phone number
              <input
                required
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
              />
            </label>

            <label>
              How can we help?
              <textarea
                required
                name="message"
                placeholder="Describe your project, lifting requirements, or equipment needs..."
                rows={4}
              />
            </label>

            <button
              type="button"
              className="button"
              onClick={handleWhatsApp}
            >
              Send enquiry
              <Send size={16} />
            </button>

          </form>

        </Reveal>

      </div>
    </section>
  );
}

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
function Footer() {
  return (
    <footer className="footer">

      <div className="container footer-grid">

        <div>
          <Logo light />
          <p>
            Delivering safe, reliable, and efficient heavy lifting solutions
            with precision, professionalism, and a commitment to excellence.
          </p>
        </div>

        <div>
          <h3>Services</h3>

          <a href="#services">Crane Rental</a>
          <a href="#services">Pre-Owned Cranes & Parts</a>
        </div>

        <div>
          <h3>Explore</h3>

          {navigation.slice(1, 5).map(([label, href]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </div>

      </div>

      <div className="container footer-bottom">
        <p>
          © {new Date().getFullYear()} V P CRANES. All rights reserved.
        </p>

        <p>Heavy lifting, done right.</p>
      </div>

    </footer>
  );
}
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
