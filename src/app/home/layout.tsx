import Header from "@/components/header";
import Image from 'next/image';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
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
    </>
  );
}
