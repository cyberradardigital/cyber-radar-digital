import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL('https://www.cyberradarsystems.com'),
  title: "Global Cybersecurity, IT Defense, Managed Security & Cloud Protection",
  description: "Protect your business with Cyber Radar Systems — global cybersecurity, IT defense, managed security, and cloud protection solutions built for enterprise resilience.",
  keywords: "Cybersecurity, Global Cybersecurity, IT Defense, Managed Security Services, MDR, Cloud Protection, Cloud Security, Cyber Threat Monitoring, Network Security, Data Protection, Incident Response, Cyber Defense Solutions, Security Operations Center, SOC, Risk Assessment, Cyber Consulting, Cyber Radar Systems",
  authors: [{ name: "Cyber Radar Systems" }],
  creator: "Cyber Radar Systems",
  publisher: "Cyber Radar Systems",
  robots: "index, follow",
  alternates: {
    canonical: "https://www.cyberradarsystems.com/",
  },
  openGraph: {
    type: "website",
    url: "https://www.cyberradarsystems.com/",
    title: "Cyber Radar Systems | Global Cybersecurity & Cloud Protection",
    description: "Protect your business with Cyber Radar Systems — global cybersecurity, IT defense, managed security, and cloud protection solutions built for enterprise resilience.",
    siteName: "Cyber Radar Systems",
    images: [
      {
        url: "https://www.cyberradarsystems.com/images/crs.webp",
        width: 1200,
        height: 630,
        alt: "Cyber Radar Systems - Global Cybersecurity, IT Defense, Managed Security & Cloud Protection",
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cyber Radar Systems | Global Cybersecurity & Cloud Protection",
    description: "Protect your business with Cyber Radar Systems — global cybersecurity, IT defense, managed security, and cloud protection solutions built for enterprise resilience.",
    creator: "@Cyberradarsystm",
    site: "@Cyberradarsystm",
    images: [
      {
        url: "https://www.cyberradarsystems.com/images/crs.webp",
        alt: "Cyber Radar Systems - Global Cybersecurity, IT Defense, Managed Security & Cloud Protection",
      },
    ],
  },
  other: {
    "theme-color": "#163FD9",
    copyright: "© 2026",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
