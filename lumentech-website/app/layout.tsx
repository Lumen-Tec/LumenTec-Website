import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {

  metadataBase: new URL("https://lumentec.business"),

  title: {
    default: "Lumentec | Desarrollo de Software de Alto Rendimiento",
    template: "%s | Lumentec",
  },

  description: "Expertos en desarrollo de software escalable, Next.js y consultoría tecnológica en Costa Rica. Transformamos ideas en soluciones digitales de alto impacto.",

  applicationName: "Lumentec",

  authors: [{ name: "Lumentec Team", url: "https://lumentec.business" }],
  creator: "Lumentec",

  keywords: [
    "Lumentec",
    "Desarrollo de Software Costa Rica",
    "Software de Alto Rendimiento",
    "Next.js Developers",
    "React",
    "Node.js",
    "Consultoría Tecnológica",
    "Arquitectura de Software",
    "Optimización Web"
  ],

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
    apple: "https://res.cloudinary.com/drec8g03e/image/upload/v1765318192/lumentech-icon_zb5xsd.png"
  },

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Lumentec | Desarrollo de Software de Alto Rendimiento",
    description: "Expertos en desarrollo de software escalable y consultoría tecnológica en Costa Rica.",
    url: "https://lumentec.business",
    siteName: "Lumentec",
    images: [
      {
        url: "https://res.cloudinary.com/drec8g03e/image/upload/c_fill,w_1200,h_630,q_auto,f_auto/v1765318192/lumentech-icon_zb5xsd.png",
        width: 1200,
        height: 630,
        alt: "Lumentec - Soluciones Tecnológicas",
        type: "image/png",
      },
    ],
    locale: "es_CR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Lumentec | Software de Alto Rendimiento",
    description: "Desarrollo de software escalable y consultoría tecnológica en Costa Rica.",
    images: ["https://res.cloudinary.com/drec8g03e/image/upload/c_fill,w_1200,h_630,q_auto,f_auto/v1765318192/lumentech-icon_zb5xsd.png"],
  },

  verification: {
    google: "dNz4QuCFzsATPBD5SwCR5Slc4HR7AzonMArfRCWLFAE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Lumentec",
    "url": "https://lumentec.business",
    "logo": "https://res.cloudinary.com/drec8g03e/image/upload/v1765318192/lumentech-icon_zb5xsd.png",
    "description": "Expertos en desarrollo de software escalable, Next.js y consultoría tecnológica en Costa Rica. Transformamos ideas en soluciones digitales de alto impacto.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "CR",
      "addressLocality": "Costa Rica"
    },
    "sameAs": [
      "https://lumentec.business"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "availableLanguage": ["es", "en"]
    }
  };

  return (
    <html lang="es-CR">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}