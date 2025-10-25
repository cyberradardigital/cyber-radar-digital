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
  title: "Cyber Radar Systems",
  description:"Cyber Radar Systems is a leading provider of security solutions and services designed to protect sensitive data in the cloud, on-premises, and at the endpoint. Our solutions include Security Threat Compliance, SOC 1 Compliance, Endpoint Data Loss Protection, HIPAA Compliance, and more. We help organizations stay ahead of evolving cyber threats and ensure compliance with industry standards.",
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
