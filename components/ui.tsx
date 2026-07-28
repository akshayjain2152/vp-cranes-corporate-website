"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { ComponentProps, ReactNode } from "react";

export function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  return <motion.div className={className} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}>{children}</motion.div>;
}

export function Button({ children, className = "", ...props }: ComponentProps<"a">) {
  return <a className={`button ${className}`} {...props}>{children}<ArrowUpRight size={17} strokeWidth={1.8} /></a>;
}

export function SectionHeading({ eyebrow, title, children, dark = false }: { eyebrow: string; title: string; children?: ReactNode; dark?: boolean }) {
  return <Reveal className="section-heading"><p className={`eyebrow ${dark ? "eyebrow-light" : ""}`}>{eyebrow}</p><h2>{title}</h2>{children && <p className="section-copy">{children}</p>}</Reveal>;
}
