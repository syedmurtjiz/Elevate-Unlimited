import Header from "@/components/header";
import Image from 'next/image';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
      <body className="main-background" suppressHydrationWarning={true}>
        <div className="fixed inset-0 -z-10">
          <Image
            src="/bodybg.webp"
            alt="Background"
            fill
            priority
            className="object-cover"
          />
        </div>
        <Header/>
        {children}
      </body>
    </html>
  );
}
