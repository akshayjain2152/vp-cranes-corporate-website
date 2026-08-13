import type { Metadata, Viewport } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const siteUrl = "https://www.vpcranes.com";

export const viewport: Viewport = {
  themeColor: "#172126",
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "V P CRANES | Heavy Lifting, Done Right",
    template: "%s | V P CRANES",
  },
  description:
    "V P CRANES delivers dependable crane rental, heavy lifting, pre-owned crane sales, parts and new crane procurement throughout India.",
  keywords: [
    "crane rental",
    "heavy lifting",
    "crawler crane",
    "mobile crane",
    "crane sales",
    "V P CRANES",
    "Bhilai",
  ],
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "V P CRANES",
    title: "V P CRANES | Heavy Lifting, Done Right",
    description:
      "Safe, precise, dependable lifting solutions for India’s industrial and infrastructure projects.",
    images: [
      {
        url: "/images/logo.png",
        width: 694,
        height: 694,
        alt: "V P CRANES logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "V P CRANES | Heavy Lifting, Done Right",
    description:
      "Dependable crane rental and lifting solutions.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>

      <GoogleAnalytics gaId="G-872Q6540B1" />
    </html>
  );
}
