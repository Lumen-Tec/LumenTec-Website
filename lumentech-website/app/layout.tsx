import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

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

  metadataBase: new URL("https://lumen-tec-website.vercel.app"), 

  title: {
    default: "Lumentec | Desarrollo de Software de Alto Rendimiento",
    template: "%s | Lumentec",
  },
  
  description: "Expertos en desarrollo de software escalable, Next.js y consultoría tecnológica en Costa Rica. Transformamos ideas en soluciones digitales de alto impacto.",
  
  applicationName: "Lumentec",
  
  authors: [{ name: "Lumentec Team", url: "https://lumen-tec-website.vercel.app" }],
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
    url: "https://lumen-tec-website.vercel.app/",
    siteName: "Lumentec",
    images: [
      {
        url: "https://res.cloudinary.com/drec8g03e/image/upload/v1765318192/lumentech-icon_zb5xsd.png",
        width: 1200,
        height: 630,
        alt: "Lumentec - Soluciones Tecnológicas",
      },
    ],
    locale: "es_CR", 
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Lumentec | Software de Alto Rendimiento",
    description: "Desarrollo de software escalable y consultoría tecnológica en Costa Rica.",
    images: ["https://res.cloudinary.com/drec8g03e/image/upload/v1765318192/lumentech-icon_zb5xsd.png"],
  },
  
  verification: {
    google: "-949k6jGY3C3A5XHDMWjhJxbO_pMnglRrSrdVmWEPE0",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-CR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}