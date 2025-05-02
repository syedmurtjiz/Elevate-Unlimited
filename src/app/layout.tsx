import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://elevateunlimited.com'),
  title: "Elevate Unlimited - Walking Meditation Series",
  description: "Transform your mind and body with our unique walking meditation series. Access powerful guided meditations, Hz frequency healing, and personalized mindfulness experiences.",
  keywords: "walking meditation, mindfulness, guided meditation, Hz frequency meditation, personal transformation, meditation series, Anthony La Rocca",
  openGraph: {
    title: "Elevate Unlimited - Walking Meditation Series",
    description: "Transform your mind and body with our unique walking meditation series. Access powerful guided meditations, Hz frequency healing, and personalized mindfulness experiences.",
    url: "https://elevateunlimited.com",
    siteName: "Elevate Unlimited",
    images: [
      {
        url: "/home.png",
        width: 1200,
        height: 630,
        alt: "Elevate Unlimited Walking Meditation Series",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Elevate Unlimited - Walking Meditation Series",
    description: "Transform your mind and body with our unique walking meditation series. Access powerful guided meditations, Hz frequency healing, and personalized mindfulness experiences.",
    images: ["/home.png"],
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
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              "name": "Elevate Unlimited Walking Meditation Series",
              "description": "Transform your mind and body with our unique walking meditation series. Access powerful guided meditations, Hz frequency healing, and personalized mindfulness experiences.",
              "brand": {
                "@type": "Brand",
                "name": "Elevate Unlimited"
              },
              "offers": {
                "@type": "Offer",
                "availability": "https://schema.org/InStock",
                "price": "0",
                "priceCurrency": "USD"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "150"
              }
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
        suppressHydrationWarning={true} // 👈 Optional: prevents hydration errors for safe external attributes
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
