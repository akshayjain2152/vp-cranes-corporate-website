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
  ["Home", "#home"], ["What We Do", "#services"], ["About Us", "#about"], ["Why VP CRANES", "#why-us"], ["Our Clients", "#clientele"], ["Contact", "#contact"],
] as const;

type Service = { title: string; eyebrow: string; description: string; Icon: LucideIcon; image: string };
export const services: Service[] = [
  { title: "Crane Rental", eyebrow: "01 / Fleet access", description: "Flexible short- and long-term access to mobile, crawler and specialised lifting equipment, supported by experienced operators.", Icon: Construction, image: "https://www.vpcranes.com/images/2.jpg" },
  { title: "Pre-Owned Cranes & Parts", eyebrow: "02 / Asset lifecycle", description: "Carefully evaluated used cranes, refurbishment support and access to OEM and aftermarket replacement parts.", Icon: Wrench, image: "https://www.vpcranes.com/images/9.jpg" },
  { title: "New Crane Procurement", eyebrow: "03 / Smart acquisition", description: "Guidance in selecting current-generation equipment from leading manufacturers, configured around your site needs.", Icon: ShoppingCart, image: "https://www.vpcranes.com/images/14.jpg" },
];

export const strengths = [
  { title: "Safety-led execution", text: "Meticulous lift planning, trained operators and disciplined site controls ensure every lift is executed safely and efficiently.", Icon: ShieldCheck },
  { title: "Experienced Professionals", text: "A skilled operations team with extensive experience across construction, infrastructure and industrial projects.", Icon: HardHat },
  { title: "Purpose-Built Equipment", text: "A versatile fleet of mobile, crawler and specialised cranes selected to match the load, site conditions and project requirements.", Icon: Construction },
  { title: "Clear Accountability", text: "Clear communication, dependable execution and complete accountability from project planning to successful completion.", Icon: Handshake },
];

export const clients = ["Phil Group, Bilaspur", "BS Sponge, Raigarh", "MSP, Raigarh", "S K Mahendra, Korba", "Sarens, New Delhi", "Surana Earth Movers Company, Kolkata", "RIPL, Raipur", "SKS Ispat and Power, Raipur", "Singhal Enterprises, Raigarh", "Basudev, Bilaspur", "PAPL, Khandagiri", "Karnikripa, Tumgaon", "McNally Bharat Engg. Co. Ltd.", "BALCO, Korba"];

export const gallery = ["3.jpg", "7.jpg", "10.jpg", "13.jpg", "19.jpg", "20.jpg"];

export const stats = [
  ["2012", "Established"], ["10+", "Years of field experience"], ["3", "Integrated service lines"], ["14", "Named client relationships"],
] as const;

export const companySchema = {
  "@context": "https://schema.org", "@type": "Organization", name: "VP CRANES", url: "https://www.vpcranes.com", logo: "https://www.vpcranes.com/images/logo.png", description: "Heavy lifting, crane rental, pre-owned crane sales and new crane procurement.", telephone: "+91-98931-80014", address: { "@type": "PostalAddress", streetAddress: "Shop No. 265, Tiranga Chowk, Chowni Industrial Area", addressLocality: "Bhilai", postalCode: "490026", addressRegion: "Chhattisgarh", addressCountry: "IN" }, sameAs: [contact.whatsapp]
};
