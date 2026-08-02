import type { LucideIcon } from "lucide-react";
import { BadgeCheck, Blocks, CircleGauge, Construction, Handshake, HardHat, ShieldCheck, ShoppingCart, Wrench } from "lucide-react";

export const contact = {
  phone: "+91 98931 80014",
  phoneHref: "tel:+919893180014",
  address: "V P Cranes, Tiranga Chowk, Chowni Industrial Area, Bhilai – 490026, Chhattisgarh, India",
  whatsapp: "https://wa.me/919893180014",
  // The source website does not publish an email address. Add the verified address here before launch.
  email: "vpcranes@yahoo.com",
};

export const navigation = [
  ["Home", "#home"], ["What We Do", "#services"], ["About Us", "#about"], ["Why Us", "#why-us"], ["Our Clients", "#clientele"], ["Contact", "#contact"],
] as const;

type Service = { title: string; eyebrow: string; description: string; Icon: LucideIcon; image: string };
export const services: Service[] = [
  { title: "Crane Rental", eyebrow: "01 / Fleet access", description: "Flexible short- and long-term access to mobile, crawler and specialised lifting equipment, supported by experienced operators.", Icon: Construction, image: "/Services/service1.png" },
  { title: "Pre-Owned Cranes & Parts", eyebrow: "02 / Asset lifecycle", description: "Professionally inspected pre-owned cranes, refurbishment support and access to OEM and aftermarket replacement parts.", Icon: Wrench, image: "/Services/service2.png" },
  { title: "New Crane Procurement", eyebrow: "03 / Smart acquisition", description: "Guidance in selecting current-generation equipment from leading manufacturers, configured around your site needs.", Icon: ShoppingCart, image: "https://www.vpcranes.com/images/14.jpg" },
];

export const strengths = [
  { title: "Safety-led Execution", text: "Meticulous lift planning, trained operators and disciplined site controls ensure every lift is executed safely and efficiently.", Icon: ShieldCheck },
  { title: "Experienced Professionals", text: "A skilled operations team with extensive experience across construction, infrastructure and industrial projects.", Icon: HardHat },
  { title: "Purpose-Built Equipment", text: "A versatile fleet of mobile, crawler and specialised cranes selected to match the load, site conditions and project requirements.", Icon: Construction },
  { title: "Clear Accountability", text: "Clear communication, dependable execution and complete accountability from project planning to successful completion.", Icon: Handshake },
];

type Client = {
  name: string;
  logo?: string;
};

export const clients : Client[] = [
  {
    name: "Phil Group",
    logo: "/images/phil-group-logo.png",
  },
  {
    name: "BS Sponge Pvt. Ltd.",
    logo: "/images/bs_sponge_pvt_ltd_logo.png",
  },
  {
    name: "MSP Steel & Power Ltd.",
    logo: "/images/mspsteelofficial_logo.png",
  },
  {
    name: "Sarens",
    logo: "/images/sarens-logo.png",
  },
  {
    name: "Real Ispat & Power Ltd.",
    logo: "/images/ripl-logo.png",
  },
  {
    name: "BALCO",
    logo: "/images/balco-logo.png",
  },
  {
    name: "McNally Bharat",
    logo: "/images/mcnally-logo.png",
  },
  {
    name: "Singhal Enterprises",
    logo: "/images/singhal-logo.png",
  },
  {
    name: "SKS Ispat and Power Ltd.",
    logo: "/images/sks-raipur-logo.png",
  },
];

export const gallery = ["3.jpg", "7.jpg", "10.jpg", "13.jpg", "19.jpg", "20.jpg"];

export const stats = [
  ["2012", "Established"], ["10+", "Years of experience"], ["3", "Integrated service lines"], ["14", "Trusted Clients"],
] as const;

export const companySchema = {
  "@context": "https://schema.org", "@type": "Organization", name: "VP CRANES", url: "https://www.vpcranes.com", logo: "https://www.vpcranes.com/images/logo.png", description: "Heavy lifting, crane rental, pre-owned cranes, crane procurement, and specialised lifting solutions across India.", telephone: "+91-98931-80014", address: { "@type": "PostalAddress", streetAddress: "V P Cranes, Tiranga Chowk, Chowni Industrial Area", addressLocality: "Bhilai", postalCode: "490026", addressRegion: "Chhattisgarh", addressCountry: "IN" }, sameAs: [contact.whatsapp]
};
