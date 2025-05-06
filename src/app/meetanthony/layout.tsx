import Header from "@/components/header";
import Image from 'next/image';

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <div className="fixed inset-0 -z-10">
        <Image
          src="/page2.png"
          alt="Background"
          fill
          priority
          className="object-cover"
        />
      </div>
      {children}
    </div>
  );
}
