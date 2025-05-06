import Image from 'next/image';

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <div className="fixed inset-0 -z-10 bg-[url('/Contact.png')] bg-cover bg-top bg-no-repeat">
      </div>
      {children}
    </div>
  );
}
