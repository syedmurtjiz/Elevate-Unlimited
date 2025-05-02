'use client';

import { usePathname } from 'next/navigation';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { useEffect, useState } from 'react';

export default function ConditionalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  // Only render header/footer after component is mounted on client
  if (!mounted) {
    return <main>{children}</main>;
  }

  const isLandingPage = pathname === '/';

  return (
    <>
      {!isLandingPage && <Header />}
      <main>{children}</main>
      {!isLandingPage && <Footer />}
    </>
  );
} 