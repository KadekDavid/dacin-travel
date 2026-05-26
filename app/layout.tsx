// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingChatButton from "@/components/FloatingChatButton";
import { Analytics } from "@vercel/analytics/next";



export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  icons: {
    icon: "https://res.cloudinary.com/dh1vnkssv/image/upload/v1777444021/logo_ai1i2p.png",  // atau "/favicon.ico"
  },
  title: "Dacin Travel",
  description: "Tour & Travel",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: "Dacin Travel",
    url: siteUrl,
    logo: "https://res.cloudinary.com/dh1vnkssv/image/upload/v1777444021/logo_ai1i2p.png",
    areaServed: "Bali, Indonesia",
    sameAs: [
      "https://www.instagram.com/",
      "https://www.tiktok.com/",
    ],
  };

  return (
    <html lang="id">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Analytics />
        <Navbar />
        {children}
        <Footer />
        <FloatingChatButton />
      </body>
    </html>
  );
}
