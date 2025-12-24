import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StructuredData from "@/components/StructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Axxiom Technologies | Digital Transformation & AI Solutions",
    template: "%s | Axxiom Technologies"
  },
  description: "Axxiom Technologies delivers cutting-edge digital transformation solutions including web development, mobile apps, AI solutions, cloud services, and chatbot development in Sri Lanka.",
  keywords: [
    "digital transformation",
    "web development",
    "mobile app development",
    "AI solutions",
    "cloud services",
    "chatbot development",
    "software development Sri Lanka",
    "technology consulting",
    "custom software solutions",
    "Axxiom Technologies"
  ],
  authors: [{ name: "Axxiom Technologies" }],
  creator: "Axxiom Technologies",
  publisher: "Axxiom Technologies",
  metadataBase: new URL("https://axxiom.tech"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://axxiom.tech",
    title: "Axxiom Technologies | Digital Transformation & AI Solutions",
    description: "Axxiom Technologies delivers cutting-edge digital transformation solutions including web development, mobile apps, AI solutions, cloud services, and chatbot development in Sri Lanka.",
    siteName: "Axxiom Technologies",
    images: [
      {
        url: "/white-3.png",
        width: 3733,
        height: 568,
        alt: "Axxiom Technologies Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Axxiom Technologies | Digital Transformation & AI Solutions",
    description: "Axxiom Technologies delivers cutting-edge digital transformation solutions including web development, mobile apps, AI solutions, cloud services, and chatbot development in Sri Lanka.",
    images: ["/white-3.png"],
  },
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
  verification: {
    // Add your verification codes here when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
  category: "technology",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
    { media: "(prefers-color-scheme: light)", color: "#000000" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
